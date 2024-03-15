import { NextFunction, Request, Response } from "express";

const requireIdParam = (req: Request, res: Response, next: NextFunction) => {
    
    if(req.params.id === undefined || req.params.id === null)
        return res.status(400).send("Inavlid path");

    next();
}

export default requireIdParam;