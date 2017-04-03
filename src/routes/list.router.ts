import {Router, Request, Response, NextFunction} from 'express';
const List = require('../list.data');

export class ListRouter {
  router: Router

  /**
   * Initialize the ListRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all items.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(List);
  }

   /**
   * GET all items.
   */
  public getById(req: Request, res: Response, next: NextFunction) {
    res.send(List);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.get('/:id',this.getById);
  }

}

// Create the ListRouter, and export its configured Express.Router
const listRoutes = new ListRouter();
listRoutes.init();

export default listRoutes.router;