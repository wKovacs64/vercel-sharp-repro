import prettierConfig from '@wkovacs64/prettier-config';

const localPrettierConfig = {
  ...prettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn'],
};

export default localPrettierConfig;
