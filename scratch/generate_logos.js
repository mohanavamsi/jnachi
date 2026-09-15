const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateLogos() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 1. White Background Icon (Recommended for LinkedIn Company Avatar)
  const svgWhiteBg = `
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#ffffff" />
      <g transform="translate(96, 96) scale(10)">
        <path
          d="M 28 16 C 28 22.627 22.627 28 16 28 C 9.373 28 4 22.627 4 16 C 4 9.373 9.373 4 16 4 C 18 4 19.8 4.6 21.4 5.5"
          stroke="#4f46e5"
          stroke-width="3"
          stroke-linecap="round"
          stroke-opacity="0.85"
        />
        <circle cx="22" cy="10" r="5" fill="#4f46e5" />
      </g>
    </svg>
  `;

  // 2. Premium Indigo Gradient Background Icon
  const svgIndigoBg = `
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#312e81" />
          <stop offset="100%" stop-color="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" fill="url(#bgGrad)" />
      <g transform="translate(96, 96) scale(10)">
        <path
          d="M 28 16 C 28 22.627 22.627 28 16 28 C 9.373 28 4 22.627 4 16 C 4 9.373 9.373 4 16 4 C 18 4 19.8 4.6 21.4 5.5"
          stroke="#ffffff"
          stroke-width="3"
          stroke-linecap="round"
          stroke-opacity="0.85"
        />
        <circle cx="22" cy="10" r="5" fill="#fbbf24" />
      </g>
    </svg>
  `;

  // 3. Transparent Icon
  const svgTransparent = `
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(96, 96) scale(10)">
        <path
          d="M 28 16 C 28 22.627 22.627 28 16 28 C 9.373 28 4 22.627 4 16 C 4 9.373 9.373 4 16 4 C 18 4 19.8 4.6 21.4 5.5"
          stroke="#4f46e5"
          stroke-width="3"
          stroke-linecap="round"
          stroke-opacity="0.85"
        />
        <circle cx="22" cy="10" r="5" fill="#4f46e5" />
      </g>
    </svg>
  `;

  await sharp(Buffer.from(svgWhiteBg)).png().toFile(path.join(publicDir, 'jnachi-logo-512.png'));
  await sharp(Buffer.from(svgIndigoBg)).png().toFile(path.join(publicDir, 'jnachi-logo-dark-512.png'));
  await sharp(Buffer.from(svgTransparent)).png().toFile(path.join(publicDir, 'jnachi-logo-transparent-512.png'));

  console.log('Successfully generated:');
  console.log(' - public/jnachi-logo-512.png (White background, perfect for LinkedIn Company Profile)');
  console.log(' - public/jnachi-logo-dark-512.png (Indigo brand background)');
  console.log(' - public/jnachi-logo-transparent-512.png (Transparent background)');
}

generateLogos().catch(console.error);
