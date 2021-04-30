import React, { ChangeEvent, FormEvent, useState } from "react";
import { Video } from "./video";
import * as videoService from './VideoService'
import {toast} from 'react-toastify'
import {useHistory} from 'react-router-dom';

const Videoform = () => {
  const history = useHistory();
  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value
    });
    
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      console.log(video);
      const resp =  await videoService.createVideos(video);
      toast.success('Nuevo video agregadado');
      history.push('/');
      console.log(resp);
  }

  return (
    <div className="row p-4">
      <div className="col-md-8 offset-2">
        <div className="card bg-info">
          <div className="card-body">
            <h3 className="text-center">Nuevo video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  placeholder="Escriba el título"
                  onChange={handleInputChange}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="url"
                  placeholder="Ingrese la url del video"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Ingrese la descripcion"
                  onChange={handleInputChange}
                >
                
                </textarea>
              </div>
              <button className="btn btn-primary">Crear video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoform;
