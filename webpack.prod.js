const HtmlWebPackPlugin    =  require('html-webpack-plugin'),
      MinicssExtractPlugin =  require('mini-css-extract-plugin'),
      CopyPlugin           =  require("copy-webpack-plugin"),
      CssMinimizer         =  require("css-minimizer-webpack-plugin"),
      Teser                =  require("terser-webpack-plugin");
 
module.exports = {
 
    mode: 'production',
    output:{
        clean:true,
        filename: 'main.[contenthash].js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MinicssExtractPlugin.loader,
                    'css-loader'
                ]
            },
                {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    sources: false,
                },
            },
             {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ]
              },
              
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
    },
    optimization: {
        minimize:true,
        minimizer:[
            new CssMinimizer(),
            new Teser()
        ]
    },
    plugins     : [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MinicssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
              { from: 'src/assets/', to: 'assets/' }
              
            ],
          })
 
    ]
 
}