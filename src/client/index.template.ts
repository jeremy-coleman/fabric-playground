const createTemplate = (params) => {
    const options = params.htmlWebpackPlugin.options;
    const AppConfig = options.AppConfig;
    return (
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Playground</title>
               
                <script type="text/javascript">
                    window["AppConfig"] = ${JSON.stringify(AppConfig)};
                    window["FabricConfig"] = {
                        fontBaseUrl: "${AppConfig.env.fabricFontBasePath}"
                    }
                </script>
            </head>
            <body>
                <div id="main"></div>
            </body>
        </html>`
    );
};

export { createTemplate as default, createTemplate }