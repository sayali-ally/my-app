import React from "react";

const Banner = () => {
  return (
    <div className="jumbotron p-4">
      <h1 className="display-4">Hello, Ally.io!!!</h1>
      <p className="lead">This is my first React Project</p>
      <hr className="my-4" />
      <p>
       Used Bootstrap and react.
      </p>
      <p className="lead">
        <a className="btn btn-info btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Banner;