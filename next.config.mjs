import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"], // Add the domain here
  },
};

export default withNextVideo(nextConfig, { folder: "assets" });
