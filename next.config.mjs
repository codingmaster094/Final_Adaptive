/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["adaptive.rocket-wp.com"],
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
    turbopack: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias["lodash"] = "lodash-es";
    }

    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 20 * 1024,
      maxSize: 200 * 1024,
    };

    return config;
  },
};

export default nextConfig;
