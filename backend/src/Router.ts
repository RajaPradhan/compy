import express from 'express';

/**
 * A Singleton class to provide a single instance of express Router to be used throughout the app
 */
export class Router {
    private static instance: express.Router;

    static getInstance(): express.Router {
        if (!Router.instance) {
            Router.instance = express.Router();
        }
        return Router.instance;
    }
}
