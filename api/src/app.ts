require('dotenv').config();
import express, { Application } from 'express';

class App {
    public app: Application
    public port: any

    constructor(appInit: { port: any, middleware: any, controllers: any }) {
        this.app = express()
        this.port = appInit.port
        this.routes(appInit.controllers)
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Application has started on port ${this.port}`)
        })
    }

    private routes(controllers: any) {
        controllers.map((controller: any) => {
            this.app.use(controller.path, controller.router)
        })
    }
}

export default App;