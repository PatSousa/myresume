/**
 * Search for image files (jpg, jpeg, png, gif and svg) for inclusion in React components.
 */
module.exports = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: ['file-loader', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
    }]
};
