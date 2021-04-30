import React, { useEffect, useState } from 'react';
import * as videoService from './VideoService';
import VideoItmen from './VideoItem';

import {Video} from './video';





const VideoList = () => {       

    const [videos, setVideos] = useState<Video[]>([]);
    const [page, setPage] = useState<number>(0);

    const loadVideos = async () => { 
        
        console.log(page) 
        const pag = {skip:0, limit:3}   
        const res = await videoService.getVideos(pag);
        console.log(res.data)
        setVideos(res.data);
        
    }
    const handleNext = async () => {
        let sig = page;
        sig = sig + 3;
        setPage(sig);
        const pag = {skip:sig, limit:3}   
        const res = await videoService.getVideos(pag);
        setVideos(res.data);
        console.log('next')
    }
    const handlePrev = async () => {
        let sig = page;

        sig = sig - 3;
        if(sig <= 0) sig =0;
        setPage(sig);
        const pag = {skip:sig, limit:3}   
        const res = await videoService.getVideos(pag);
        setVideos(res.data);
        console.log('next')
    }


    const getVideos = () => {


    }

    useEffect(() => {
        loadVideos();
        console.log('works');
       
    }, [])

    
    return (
        <React.Fragment>
              <div className="row justify-content-center h-100">
            
            {videos.map((video) => {

               return <div key={video._id}>
                   <VideoItmen video={video} />
                   
               </div>
               
                         
            })}         

        </div> 
          <div className="contaniner m-2">
          <div className="row justify-content-center h-100 px-2">
            <div className="mx-4">
            <button onClick={handlePrev}  className="btn btn-danger mr-2">Anteior</button>
            <button onClick={handleNext} className="btn btn-secondary">Siguiente</button>
  
            </div>
        
           
          </div>
       
        </div>


        </React.Fragment>
      
        
    )
}

export default VideoList;
