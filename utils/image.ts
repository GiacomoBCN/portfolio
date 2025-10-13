// Helper to get the correct image path with basePath prefix
export function getImagePath(path: string): string {
  // For static export, Next.js basePath is handled via assetPrefix in next.config
  // We need to manually add it for image paths since Next.js only handles this for _next assets
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.__NEXT_ROUTER_BASEPATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (basePath) {
    return `${basePath}${cleanPath}`;
  }

  return cleanPath;
}
