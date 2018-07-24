module.exports = {
  extends: "airbnb-base",
  rules: {
    "no-new": "off",
    "object-shorthand": "off",
    "comma-dangle": ["error", "only-multiline"],
    "import/no-unresolved": "off"
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js",".jsx",".vue"]
      }
    }
  }
};
