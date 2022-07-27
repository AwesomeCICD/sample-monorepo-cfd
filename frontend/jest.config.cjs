module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  "moduleFileExtensions": [
    "js",
    "json",
    "vue",
    "ts"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  },
  moduleNameMapper: {
    "@/components/*": "<rootDir>/src/components/$1",
    "@/(.*)": "<rootDir>/src/$1"
  }
}
