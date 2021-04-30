import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGO_DATABASE: process.env.DBNAME || 'videodb',
    MONGO_USER: process.env.USER || 'admin',
    MONGO_PASSWORD: process.env.PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    TOKEN_SECRET: process.env.TOKEN_SECRET,
    PORT: process.env.PORT || 3002,
}