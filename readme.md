# --------------https://angular.io/guide/universal-----------------


#Link Ref: https://github.com/angular/angular-cli/wiki/stories-universal-rendering

# main.server.ts  
# tsconfig.server.json 
# app/ ...              
#    - app.server.module.ts  
# webpack.server.config.js

# app.module
    + BrowserModule.withServerTransition({ appId: 'angular-universal' }),
# app/
    + app.server.module.ts
# src
    + tsconfig.server.json
    + main.server.ts
# root
    + server.ts
    + webpack.server.config.js
# angular.json
    "server": {
        "builder": "@angular-devkit/build-angular:server",
        "options": {
        "outputPath": "dist/server",
        "main": "src/main.server.ts",
        "tsConfig": "src/tsconfig.server.json"
        }
    },

# package.json
    "build:ssr": "npm run build:client-and-server-bundles && npm run webpack:server",
    "serve:ssr": "node dist/server.js",
    "build:client-and-server-bundles": "ng build --prod && ng run angular.io-example:server",
    "webpack:server": "webpack --config webpack.server.config.js --progress --colors"
