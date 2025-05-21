/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // makes <Image> work without image optimization server
  },
};

export default nextConfig;
