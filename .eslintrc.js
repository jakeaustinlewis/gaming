module.exports = {
	"extends": "airbnb",
	"plugins": ["react"],
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"node": true,
		"jest": true
	},
	// "global": {
	// 	"_": true
	// },
	"globals": {
		"_": "writable"
	},
	"rules" : {
		"no-shadow": [2, {"allow": ["done"]}],
		"indent": [2, "tab"],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"jsx-quotes": ["error", "prefer-single"],
		"no-tabs": 0,
		"no-alert": 0,
		"no-plusplus": "off",
		"quotes": ["error", "single", { "allowTemplateLiterals": true }],
		"no-underscore-dangle": 0,
		"import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
		"allowForLoopAfterthoughts": 0,
		"arrow-body-style": ["error", "always"],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/prop-types": [1],
		"max-classes-per-file": ["error", 2],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-max-props-per-line": [1, { "maximum": 10, "when": "multiline" }],
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/control-has-associated-label": 0,
		"react/jsx-fragments": 0,
		"import/no-named-as-default": 0
	},
}