import { json, RequestHandler } from "express";


export const getAdmin: RequestHandler = async (req, res) => {
  res.json({
      error: null,
      data:{
        title: 'Mi ruta protegida',
        user: req.body
      }
      
  })
};
