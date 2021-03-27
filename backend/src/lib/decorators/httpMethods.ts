import 'reflect-metadata';
import { RequestHandler } from 'express';

import { MetadataKeys, HttpMethods } from './types';

interface RouteHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler; // This typing makes sure the route handler is a valid express handler
}

const routeBinder = (httpMethod: string) => (path: string) => (
    target: any,
    key: string,
    desc: RouteHandlerDescriptor // eslint-disable-line
) => {
    Reflect.defineMetadata(MetadataKeys.HttpMethod, httpMethod, target, key);
    Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
};

export const get = routeBinder(HttpMethods.Get);
export const post = routeBinder(HttpMethods.Post);
