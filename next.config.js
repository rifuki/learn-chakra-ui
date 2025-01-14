/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: "./",
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true // Required for static export
  }
}
