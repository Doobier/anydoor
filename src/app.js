const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const route = require('./helper/router');
const openUrl = require('./helper/openUrl');

class Server {
    constructor(config){
        this.conf = Object.assign({}, conf, config);
    }

    start(){
        const server = http.createServer((req, res) => {
            // console.info(res.url);
            const filePath = path.join(this.conf.root, req.url);
            route(req, res, filePath, this.conf);
            console.info('url '+chalk.red(req.url));
            console.info('filepath '+chalk.red(filePath));
            
        });
        
        server.listen(this.conf.port, this.conf.hostname, () => {
            const addr = `http://${this.conf.hostname}:${this.conf.port}`;
            console.info(`server started at ${chalk.green(addr)}`);
            openUrl(addr);
        });
    }
}

module.exports = Server;
