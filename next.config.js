/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname:
          "/u/39637161?s=400&u=a286db5626cc5aac22af03849c22477e71a43b94&v=4",
      },
    ],
  },
};

module.exports = nextConfig;
