// rollup.config.js
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      globals: {
        react: 'React', // Add globals for react
        'prop-types': 'PropTypes', // Add globals for prop-types
      },
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      globals: {
        react: 'React', // Add globals for react
        'prop-types': 'PropTypes', // Add globals for prop-types
      },
    },
  ],
  external: ['react', 'prop-types'], // Treat react and prop-types as external
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
  ],
};
