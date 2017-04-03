import * as express from 'express';

export let error404: express.RequestHandler = function(req, res, next) {
    var err:any = new Error('Not Found');
    err.status = 404;
    next(err);
}

export let devErrorHandler: express.ErrorRequestHandler 
= function(err: any, req: express.Request, res: express.Response, next: Function): any {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
}

export let prodErrorHandler: express.ErrorRequestHandler 
= function(err: any, req: express.Request, res: express.Response, next: Function): any {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
}
