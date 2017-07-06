module.exports = {
  presets: ['react-app'],
  plugins: [
    'transform-node-env-inline',
    ['styled-components', {
      displayName: process.env.NODE_ENV !== 'production',
      // This option is unstable, but it gives an awesome performance boost. Lets live on the edge!
      preprocess: true,
      ssr: true,
    }],
    ['transform-es2015-modules-commonjs', {loose: true, noInterop: true}],
  ],
}
