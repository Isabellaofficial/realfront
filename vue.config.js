module.exports = {
  outputDir: "../src/main/resources/static", 
  devServer: {
      port: 8000,
      proxy: {
          '/api': {
              target: 'http://localhost:8000',
              changeOrigin: true
          }
      }
  },
    chainWebpack: config => {  
    const svgRule = config.module.rule("svg");    
    svgRule.uses.clear();    
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");  
  }  
};
