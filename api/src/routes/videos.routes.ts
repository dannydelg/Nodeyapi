import { Router } from 'express';
import * as videoCtrl  from './videos.controller';

const router = Router();

router.get('/videos', videoCtrl.getVideos);

router.get('/videos/:skip', videoCtrl.getVideos);


router.get('/videos/:id', videoCtrl.getVideo);

router.post('/videos', videoCtrl.createVideo);

router.delete('/videos/:id', videoCtrl.deleteVideos);

router.put('/videos/:id', videoCtrl.updateVideos);





export default router;
