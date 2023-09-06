import App from './app';

const app = new App({ 
    port: process.env.PORT,
    controllers: [],
    middleware: [],
})

app.listen()