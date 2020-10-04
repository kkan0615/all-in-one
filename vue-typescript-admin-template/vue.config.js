module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        changeOrigin: true,
        ws: true, // proxy websockets
      }
    }
  }
}
