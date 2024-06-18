module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended", // ESLint 기본 규칙
    "plugin:import/errors",
    "plugin:import/warnings",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended", // @typescript-eslint 플러그인 추천 규칙
    "plugin:prettier/recommended", // Prettier와 충돌되는 ESLint 규칙을 비활성화하고 Prettier 규칙을 사용
  ],
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
    project: "./tsconfig.json" // tsconfig.json 경로 설정
  },
  env: {
    browser: true,
    es2020: true,
  },
  ignorePatterns: ["node_modules/", "tsconfig.json"],
  rules: {
    "no-use-before-define": "off", // 변수 선언 미리 하는 거 금지 off
    "@typescript-eslint/no-explicit-any": "warn", // @typescript-eslint에서 제공하는 no-explicit-any 규칙 사용
    "no-console": "off", // console 사용 허용
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto", // 운영체제에 따라 줄 바꿈 설정
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }, // class member는 한 줄 띄우기
    ],
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json"
      },
      alias: {
        map: [
          ["@", "./src"],
          ["@assets", "./src/assets"],
          ["@components", "./src/components"],
          ["@constants", "./src/constants"],
          ["@hooks", "./src/hooks"],
          ["@pages", "./src/pages"],
          ["@routes", "./src/routes"],
          ["@services", "./src/services"],
          ["@utils", "./src/utils"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
