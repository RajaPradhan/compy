import 'reflect-metadata';
import { RequestHandler } from 'express';

import { Router } from '../../Router';
import { HttpMethods, MetadataKeys } from './types';

export const controller = (basePath: string) => (Target: any) => {
    const router = Router.getInstance();

    const targetInstance = new Target();

    for (let key in Target.prototype) {
        const routeHandler: RequestHandler = Target.prototype[key];

        // extract the HTTP method stored in the metadata of the routeHandler
        const httpMethod: HttpMethods = Reflect.getMetadata(
            MetadataKeys.HttpMethod,
            Target.prototype,
            key
        );

        // extract the route path stored in the metadata of the routeHandler
        const path: string = Reflect.getMetadata(
            MetadataKeys.Path,
            Target.prototype,
            key
        );

        if (httpMethod && path) {
            const fullPath = `${basePath}${path}`;
            // use express router to route the request to the routeHandler
            router[httpMethod](fullPath, routeHandler.bind(targetInstance));
        }
    }
};
