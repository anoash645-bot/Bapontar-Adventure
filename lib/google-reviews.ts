import { SITE } from "@/data/site-config";
export type GReview = { name: string; photo?: string; uri?: string; rating: number; text: string; when: string };
export type GData = { rating?: number; count?: number; mapsUri?: string; reviews: GReview[] };
export const writeReviewUrl = () => `https://search.google.com/local/writereview?placeid=${SITE.googlePlaceId}`;
// Server-only. Tanpa API key / saat error => null (halaman otomatis memakai fallback).
export async function getGoogleReviews(): Promise<GData | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key || !SITE.googlePlaceId) return null;
  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${SITE.googlePlaceId}?languageCode=id`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews" },
      next: { revalidate: 3600 }, // cache singkat (1 jam); cek ketentuan Google sebelum memperpanjang
    });
    if (!r.ok) return null;
    const d = await r.json();
    const reviews: GReview[] = (d.reviews ?? []).map((v: any) => ({
      name: v.authorAttribution?.displayName ?? "Google user", photo: v.authorAttribution?.photoUri, uri: v.authorAttribution?.uri,
      rating: v.rating ?? 0, text: v.text?.text ?? v.originalText?.text ?? "", when: v.relativePublishTimeDescription ?? "",
    })).filter((v: GReview) => v.text);
    return { rating: d.rating, count: d.userRatingCount, mapsUri: d.googleMapsUri, reviews };
  } catch { return null; }
}
