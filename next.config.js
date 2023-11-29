/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/mainPage',
            permanent: true,
          },
          {
            source: '/signs',
            destination: '/signs/signsUseful',
            permanent: true,
          },
          {
            source: '/uvPrint',
            destination: '/uvPrint/uvPrintInfo',
            permanent: true,
          },
          {
            source: '/polygraphy',
            destination: '/polygraphy/polygraphyInfo',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
