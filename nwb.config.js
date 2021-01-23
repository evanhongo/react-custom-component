module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "CustomComponent",
      externals: {
        react: "React",
      },
    },
  },
  karma: {
    //important
    browsers: ["ChromeHeadless"],
  },
};
