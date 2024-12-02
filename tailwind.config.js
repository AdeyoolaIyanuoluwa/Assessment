/** @type {import('tailwindcss').Config} */

export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      './src/stories/*.stories.tsx',
    ],
    theme: {
      screens: {
        xsm: { min: '320px', max: '639px' },
        // => @media (min-width: 320px) { ... }
  
        sm: { min: '640px', max: '767px' },
        // => @media (min-width: 481px) { ... }
  
        md: { min: '768px', max: '1023px' },
        // => @media (min-width: 768px) { ... }
  
        xsm_sm: { min: '320px', max: '767px' },
        // => @media (min-width: 320px) { ... }
  
        xsm_md: { min: '320px', max: '1023px' },
        // => @media (min-width: 320px) { ... }
          
        l: { min: '800px', max: '1200px' },
        // => @media (min-width: 1024px) { ... }
  
        lg: { min: '1024px', max: '1279px' },
        // => @media (min-width: 1024px) { ... }
        xl: { min: '1280px', max: '1535px' },
  
        x: { min: '1310px', max: '1430px' },
  
        md_xl:{ min: '768px', max: '1333px' },
  
        // => @media (min-width: 1280px) { ... }
        xm:{ min: '1100px', max: '1400px'},
        '2xl': {min:'1536px', max: '2000px'},
        '2xxl': {min:'2001px'}
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        colors: {
          primary: '#4F46BA',
          secondary: '#FF7F5C',
          black: '#181433',
          purple: '#F8F8FE'
  
        },
  
        fontFamily: {
          sans: ['Manrope', 'sans-serif'],
          gil: ['Gilroy', 'sans-serif']
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.scrollbar-hide': {
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        });
      },
    ],
  };
  