export enum MetadataKeys {
    HttpMethod = 'HttpMethod',
    Path = 'Path'
}

export enum HttpMethods {
    Get = 'get', // These have to be lower case as express router methods are lower case
    Post = 'post'
}
