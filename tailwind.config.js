/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-green':'#2A5B45',
        'custom-gray' : '#515051',
        'custom-black':'#242424',
        'copyright-color':'#2B2A2B',
        'custom-graylighter':'#E9E9E9'
      }
    },
  }
}

