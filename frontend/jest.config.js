module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "moduleFileExtensions": [
    "js",
    "json",
    "vue",
    "ts"
  ],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  }
}
