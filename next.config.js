/** @type {import('next').NextConfig} */
const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : ''

const nextConfig = {
  reactStrictMode: true,
  images: supabaseHost
    ? {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: supabaseHost,
            pathname: '/storage/v1/object/public/**',
          },
        ],
      }
    : {},
}

module.exports = nextConfig
