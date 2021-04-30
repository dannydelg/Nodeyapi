import axios from 'axios';
import { Pagination } from './pagination';
import { Video } from './video';

const API = 'http://localhost:4000';

export const getVideos = async (pag?:any) => {
     
    return await axios.get( `${API}/videos`, {params: pag});
   
} 

export const createVideos = async (video: Video) => {

    return await axios.post(`${API}/videos`, video);
   
} 