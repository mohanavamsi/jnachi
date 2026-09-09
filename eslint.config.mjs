import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import firebaseRulesPlugin from '@firebase/eslint-plugin-security-rules';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ['dist/**/*', '.next/**/*', 'node_modules/**/*']
  },
  firebaseRulesPlugin.configs['flat/recommended']
];

export default eslintConfig;
