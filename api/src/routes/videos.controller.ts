import { RequestHandler } from "express";
import Video from "./Video";


export const createVideo: RequestHandler = async (req, res) => {
  console.log(req.body);
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ mesage: "The url already exist" });
  const video = new Video(req.body);
  try {
    const videoSaved = await video.save();
    res.json(videoSaved);
  } catch (error) {
    res.json(error);
  }
};

// Método busca todos los video y los retorna ordenados de forma descentes con base al campo createdAt
export const getVideos: RequestHandler = async (req, res) => {
  let cantidad;
  try {
    
    const salto =req.query.skip?.toString();
    const limite = req.query.limit?.toString();
    if (salto === undefined || limite === undefined) {
      const videosFound = await Video.find().sort({ createdAt: -1 });
      cantidad = await Video.count(); 
      res.json(videosFound);
    }else{
      const skip = parseInt(salto);
      const limit = parseInt(limite);
      console.log('skip ' + skip );
      console.log('limit ' + limit);
      cantidad = await Video.count(); 
    
        const videosFound = await Video.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
        res.json(videosFound);
      
     
    }
    console.log(cantidad);
  
  
    
   
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findById(req.params.id);
  res.json(videoFound);
};

export const updateVideos: RequestHandler = async (req, res) => {
  const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
    
    new: true,
  });

  res.json(video);
};

export const deleteVideos: RequestHandler = async (req, res) => {
  try {
    const videoFound = await Video.findByIdAndDelete(req.params.id);

    res.json(videoFound);
  } catch (error) {
    error.reason = `Video con id ${req.params.id} no encontrado`;
    res.json(error);
  }
};
