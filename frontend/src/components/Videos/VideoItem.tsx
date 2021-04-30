import React from 'react'
import { Video } from './video'
import ReactPlayer from 'react-player';
import './videostilos.css';

interface Props {
    video: Video;

}



const VideoItem = ({video}: Props) => {

    const handleComent = (e: any) => {
       console.log(e.target.value);
        
      };
  
    return (
        <div className="col-md-12 p-4 bg-primary" >
            <div className="card bg-warning video-card" style={{cursor: 'pointer'}}>
                <div className="card-header">
                <h1 className="text-center">{video.title}</h1> 
                <div className="col-md-10"> 
                <p >{video.description}</p>
                </div> 
                </div>
               
                <div className="card-body">
               
             
              
              <div className="embed-responsive embed-responsive-16by6" >
                <ReactPlayer  url={video.url}/>
              </div>
            

           
              

                </div>
            </div>
            <div className="contaniner py-2">
            <button className="btn btn-success " onClick={handleComent}>Comentar</button>
            </div>
           
        

        </div>
    )
}

export default VideoItem;
