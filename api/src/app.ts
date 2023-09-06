require('dotenv').config();
import express, { Application } from 'express';

class App {
    public app: Application
    public port: any

    constructor(appInit: { port: any, middleware: any, controllers: any}) {
        this.app = express()
        this.port = appInit.port
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App has started on port ${this.port}`)
        })
    }
}

export default App;