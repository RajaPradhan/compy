import 'reflect-metadata';
import { RequestHandler } from 'express';

import { DiContainer } from '../../DiContainer';
import { Router } from '../../Router';
import { HttpMethods, MetadataKeys } from './types';

// eslint-disable-next-line
export const controller = (basePath: string) => (target: any): void => {
    const router = Router.getInstance();

    for (const key in target.prototype) {
        const routeHandler: RequestHandler = target.prototype[key];

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
            router[httpMethod](fullPath, function (...args) {
                return routeHandler.call(
                    DiContainer.getControllerContext(target.name),
                    ...args
                );
            });
        }
    }
};
