const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['placeimg.com', 'api.lorem.space', 'i0.wp.com', 'm.media-amazon.com'],
  },
});
