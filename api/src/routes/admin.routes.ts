import { Router } from 'express';
import * as adminCtrl from './admin.controller';
const router = Router();


router.get('/', adminCtrl.getAdmin);


export default router;
