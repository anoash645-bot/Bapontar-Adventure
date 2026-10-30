export function Photo({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) {
  if (src) return <img src={src} alt={alt} loading="lazy" className={`object-cover w-full h-full ${className}`} />;
  return <div role="img" aria-label={alt + " (foto akan diganti)"} className={`w-full h-full bg-gradient-to-br from-ocean-700 via-aqua-600 to-sand-200 ${className}`} />;
}
