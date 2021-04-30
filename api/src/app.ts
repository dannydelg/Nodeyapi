import express from 'express';
import config from './config';
import morgan from 'morgan';
import cors from 'cors';

import videoRoutes from './routes/videos.routes';
import userRoutes from './routes/auth.routes';
import adminRoutes from './routes/admin.routes';
import validaToken from './middleware/valida-toke';


const app = express();

app.set('port', config.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use(validaToken);
app.use(videoRoutes);

app.use('/api/admin',validaToken, adminRoutes);

app.use(userRoutes );

export default app;