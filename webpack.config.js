const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const WebpackShellPlugin = require('./tasks/plugins/webpack-shell-plugin-next');
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const containsFilter = (...values) => {
    return (filename) => {
        return values.some(value => {
            return filename.indexOf(value) >= 0;
        });
    }
};

const isNodeModuleFile = containsFilter("node_modules");

const endsWithFilter = (...extensions) => {
    return (filename) => {
        return extensions.some(ext => {
            return filename.endsWith(ext);
        });
    };
};

const defaultPublicPath = "/";

const createConfig = (env) => {
    const publicPath = env && env.publicPath ? env.publicPath : defaultPublicPath;
    const defaultAppEnv = {
        fabricFontBasePath: publicPath.endsWith("/") ? publicPath.substring(0, publicPath.length - 1) : publicPath,
        fabricIconBasePath: `${publicPath.endsWith("/") ? publicPath.substring(0, publicPath.length - 1) : publicPath}/icons/fabric/`
    };
    
    const appEnv = Object.assign({}, defaultAppEnv, env);
    const production = env && env.production ? true : false;
    const buildVersion = env && env.buildVersion ? env.buildVersion : production ? "Unknown" : "DEV";
    
    const AppConfig = {
        production: production,
        publicPath: publicPath,
        buildVersion: buildVersion,
        buildDate: new Date().toString(),
        env: appEnv
    };

    const config = {
        target: 'electron-main',

        mode: production ? "production" : "development",

        entry: {
            main: "./src/client/main.tsx"
        },

        output: {
            filename: production ? "[name].[chunkhash].js" : "[name].js",
            path: path.join(__dirname, "dist", "client"),
            publicPath: publicPath
        },

        module: {
            rules: [
                {test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader',use: ['css-loader',{loader: 'less-loader',options: {javascriptEnabled: true}}]})},
                {test: /\.scss$/,use: ["style-loader","css-loader","sass-loader"]},
                {test: /\.css$/,use: ["style-loader", "css-loader"]},

                {
                    test: endsWithFilter(".ts", ".tsx"),
                    loader: "ts-loader",
                    options: {transpileOnly: true},
                    exclude: isNodeModuleFile
                },

                {
                    test: endsWithFilter(".jpg", ".png", ".gif"),
                    use: [{ loader: "file-loader" }]
                }

            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".tsx", ".ts"],
            modules: [path.resolve(__dirname, "src/client"), "node_modules"],
            alias: {"package.json$": path.resolve(__dirname, "package.json")}
        },

        devtool: "source-map",

        devServer: {
            contentBase: "./dist/client",
            historyApiFallback: true
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: "Common Sample",
                template: "src/client/index.template.ts",
                AppConfig: AppConfig,
                chunksSortMode: "none"
            }),

            new CopyWebpackPlugin([
                { from: "fonts/ms", to: "fonts" },
                { from: "node_modules/@uifabric/icons/fonts", to: "icons/fabric"}
            ]),
            new WriteFilePlugin(),
            new WebpackShellPlugin({onBuildEnd: {scripts: ['electron . --dev']}})
        ]
    };
    
    return config;
};

module.exports = createConfig;

