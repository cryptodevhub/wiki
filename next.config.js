/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/invite/x3ybcKbQC9',
        permanent: false
      },
      {
        source: '/wiki/blockchain-development-tutorial',
        destination: '/blockchain-development-tutorial',
        permanent: true
      },
      {
        source: '/wiki/ethereum-virtual-machine-tutorials',
        destination: '/ethereum-virtual-machine-tutorials',
        permanent: true
      },
      {
        source: '/wiki/ethereum-virtual-machine-tools',
        destination: '/ethereum-virtual-machine-tools',
        permanent: true
      },
      {
        source: '/wiki/ethereum-virtual-machine-security',
        destination: '/ethereum-virtual-machine-security',
        permanent: true
      },
      {
        source: '/wiki/blockchain-developer-communities',
        destination: '/tags/community',
        permanent: false
      },
      {
        source: '/wiki/ethereum-virtual-machine-testnet-faucets',
        destination: '/tags/faucet',
        permanent: false
      },
      {
        source: '/wiki/token-economics',
        destination: '/tags/tokenomics',
        permanent: false
      },
      {
        source: '/wiki/:slug*',
        destination: '/',
        permanent: true
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap')
    }
    return config
  }
}

module.exports = nextConfig
