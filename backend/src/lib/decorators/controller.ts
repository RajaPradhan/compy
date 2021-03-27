import 'reflect-metadata';

import { Router } from '../../Router';
import { HttpMethods, MetadataKeys } from './types';

export const controller = (basePath: string) => (target: Function) => {
    const router = Router.getInstance();

    for (let key in target.prototype) {
        const routeHandler = target.prototype[key];

        // extract the HTTP method stored in the metadata of the routeHandler
        const httpMethod: HttpMethods = Reflect.getMetadata(
            MetadataKeys.HttpMethod,
            target.prototype,
            key
        );

        // extract the route path stored in the metadata of the routeHandler
        const path: string = Reflect.getMetadata(
            MetadataKeys.Path,
            target.prototype,
            key
        );

        if (httpMethod && path) {
            const fullPath = `${basePath}${path}`;
            // use express router to route the request to the routeHandler
            router[httpMethod](fullPath, routeHandler);
        }
    }
};
