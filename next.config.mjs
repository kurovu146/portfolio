/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES === "true" ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
