import { Router } from 'express';
import * as authCtrl  from './auth.controller';
import * as adminCtrl from './admin.controller';

const router = Router();

router.post('/api/user/register', authCtrl.createUser);

router.post('/api/user/login', authCtrl.login);

//router.get('/api/admin', adminCtrl.getAdmin );


export default router;
