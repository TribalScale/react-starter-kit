module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-closing-bracket-location": [
          "off"
        ],
        "comma-dangle": ["error", "never"]
    },
    "globals": {
        "document": true
    }
};
