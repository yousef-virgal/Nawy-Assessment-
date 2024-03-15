import { NextFunction, Request, Response } from "express";

/**
 * This Function is used to check if the input params are present in the request body before being proccessed
 * @param params a list of params to check for
 */
const requireBodyParams = (params: string[]) => (req: Request, res: Response, next: NextFunction) => {
    const reqBodyList = Object.keys(req.body);
    const hasAllRequiredParams = params.every(param =>
        reqBodyList.includes(param)
    );

    if (!hasAllRequiredParams)
        return res
            .status(400)
            .send(
                `The following parameters are all required for this route: ${params.join(", ")}`
            );

    next();
};


export default requireBodyParams;