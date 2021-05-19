/*
 * @Author: Xiaochun
 * @Date: 2021-05-19 10:46:54
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-05-19 11:40:21
 */

const path = require("path");
const webpack = require("webpack");//引入webpack
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let WEBPACK_ENV = process.env.WEBPACK_ENV || "dev";
console.log(WEBPACK_ENV);
module.exports = {
	entry: "./src/app.jsx",//入口文件
	output: {
		path: path.resolve(__dirname, "dist"),
		//publicPath: WEBPACK_ENV === 'dev' ? '/dist/' : '//s.jianliwu.com/admin-v2-fe/dist/',
		publicPath: "/dist/",
		filename: "js/app.js",
	},
	resolve: {
		alias: {
			page: path.resolve(__dirname, "src/page"),
			component: path.resolve(__dirname, "src/component"),
			util: path.resolve(__dirname, "src/util"),
			service: path.resolve(__dirname, "src/service"),
		},
	},
	module: {
		rules: [
			// react(jsx)语法的处理
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env", "react"],
					},
				},
			},
			// css文件的处理
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader",
				}),
			},
			// sass文件的处理
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"],
				}),
			},
			// 图片的配置
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "url-loader",//依赖file-loader，也得装file-loader
						options: {
							limit: 8192,//文件大于8k成一个单独文件，否则base64
							name: "resource/[name].[ext]",//指定路径，ext表示让其扩展不变
						},
					},
				],
			},
			// 字体图标的配置（font-awesome中有很多字体图标文件）
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192,
							name: "resource/[name].[ext]",
						},
					},
				],
			},
		],
	},
	plugins: [
		// 处理html文件
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			favicon: "./favicon.ico",
		}),
		// 独立css文件
		new ExtractTextPlugin("css/[name].css"),
		// 提出公共模块
		new webpack.optimize.CommonsChunkPlugin({
			name: "common",//指定的通用模块
			filename: "js/base.js",
		}),
	],
	devServer: {
		port: 8087,
		historyApiFallback: {
			index: "/dist/index.html",
		},
		proxy: {
			"/manage": {
				target: "http://admintest.happymmall.com",
				changeOrigin: true,
			},
			"/user/logout.do": {
				target: "http://admintest.happymmall.com",
				changeOrigin: true,
			},
		},
	},
};
