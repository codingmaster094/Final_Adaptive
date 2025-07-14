import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  images: {
    domains: [
      "app.dev.adaptive-investments.com",
      "corporate-seven-wine.vercel.app",
    ],
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };

    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 20 * 1024,
      maxSize: 200 * 1024,
    };

    return config;
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
  hideSourcemaps: true,
};
export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
