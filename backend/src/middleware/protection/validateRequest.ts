import { Request, Response, NextFunction } from 'express';
const validateRequest = (schema) => {
    return (req: Request, res:Response, next:NextFunction) => {
      const { error } = schema.validate(req.body);
      if (error) {
        //status code is 400, because everytime this error is catched, its for a bad request reason
        return res.status(400).json({ error: error.details[0].message });
      }
      next();
    };
}

export default validateRequest;