module.exports = {
    theme: {
        extend: {
            colors: {
                'brand-violet': '#2E006A',
                'intense-violet': "#5D00D3",
                'dark-violet': "#250B38",
                'pink-beige': "#ECE9F0",

                'section-violet': '#2A015A',
                'footer-violet': '#210235',
            },
            maxWidth: {
                '150px': '150px',
            }
        }
    },
    purge: [
        './content/**/*.md',
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.js',
    ],
    plugins: [
        require('@tailwindcss/typography'),
    ]    
}