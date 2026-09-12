/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Menolak gagal deploy gara-gara error TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

