module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto-fit': 'repeat(auto-fit, 18rem)',
                'auto-fill': 'repeat(auto-fill, 18rem)'
            },
            gridTemplateRows: {
                'auto-fit': 'repeat(auto-fit, 18rem)',
                'auto-fill': 'repeat(auto-fill, 18rem)'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
