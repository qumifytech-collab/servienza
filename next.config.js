/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      // Old comparison URLs from the previous site.
      { source: '/compare/servienza-vs-jobber', destination: '/compare/jobber', permanent: true },
      { source: '/compare/servienza-vs-housecall-pro', destination: '/compare/housecall-pro', permanent: true },
      { source: '/compare/servienza-vs-servicetitan', destination: '/pricing', permanent: true },
      { source: '/compare', destination: '/pricing', permanent: true },
    ]
  },
}
module.exports = nextConfig
