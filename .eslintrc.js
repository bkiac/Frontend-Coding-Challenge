module.exports = {
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["@typescript-eslint", "import", "react-hooks"],
	extends: ["next/core-web-vitals", "bkiac"],
	rules: {
		"react/react-in-jsx-scope": "off",
	},
}
