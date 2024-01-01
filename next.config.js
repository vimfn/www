const million = require('million/compiler');
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = million.next(
  nextConfig
, { auto: { rsc: true } }
)