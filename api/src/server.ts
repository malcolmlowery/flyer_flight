import App from './app';
import HomeController from './controllers/home.controller';

const app = new App({ 
    port: process.env.PORT,
    controllers: [ new HomeController() ],
    middleware: [],
})

app.listen()