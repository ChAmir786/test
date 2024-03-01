import React from "react";
import "./Team.css";
import man from "../Images/man.jpg";
const Team = () => {
  return (
    <>
      <div className="container text-center">
        <div className="content">
          <div className="row justify-content-md-center content1">
            <h1>Meet the team</h1>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 images">
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row justify-content-md-center content1">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 images">
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="row justify-content-md-center content1">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 images">
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
              <div className="image-class1">
                <img src={man} alt="man" />
                <p>
                  First Last name <br /> Desigination
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
