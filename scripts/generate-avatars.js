const fs = require('fs');
const path = require('path');

const avatars = [
  { name: 'faizan', initials: 'FA', bg: '#2563eb' },
  { name: 'sneha', initials: 'SP', bg: '#059669' },
  { name: 'rohan', initials: 'RK', bg: '#0891b2' },
  { name: 'danish', initials: 'MD', bg: '#7c3aed' },
  { name: 'pooja', initials: 'PS', bg: '#db2777' },
];

avatars.forEach(a => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="50" fill="${a.bg}" />
    <text x="50" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="bold" fill="#ffffff" text-anchor="middle">
      ${a.initials}
    </text>
  </svg>`;
  fs.writeFileSync(path.join(__dirname, '../public/images/avatars', `${a.name}.svg`), svg);
});
console.log('Created avatars');
