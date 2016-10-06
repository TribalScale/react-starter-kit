module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-closing-bracket-location": ["off"],
        "comma-dangle": ["error", "never"],
        "react/no-unused-prop-types": ["error", { skipShapeProps: true }],
        "react/forbid-prop-types": ["error", { "forbid": ["any", "object"] }]
    },
    "globals": {
        "document": true,
        "fetch": true
    }
};
