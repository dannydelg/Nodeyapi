
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

// middleware to validate token (rutas protegidas)
const verifyToken:  RequestHandler = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const secret = process.env.TOKEN_SECRET;
        if (secret !== undefined ) {
            const verified = jwt.verify(token, secret);
            req.body = verified;
            console.log(req.body)
            next() // continuamos
            
        }
       
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

export default verifyToken;
