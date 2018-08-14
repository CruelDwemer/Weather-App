module.exports = {
    presets: [
      [require("@babel/preset-env"), {
        targets: {
          browsers: "Chrome > 67"
        }
      }],
      require("@babel/preset-react")
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties')
    ]
  }
