// ----> Branding Component <----

import { useRef } from "react";
import "./branding.scss";

const Brading = () => {
  const ref = useRef();

  return (
    <div className="services" ref={ref}>
      <div className="textContainer">
        <p>
          Great Achievements 
          <br /> 
          Never Come Easy
        </p>
        <hr />
      </div>
      <div className="titleContainer">
        <div className="title">
          <img src="/purple.jpg" alt="" />
          <h1>
            <span className="text-purple">Unique</span> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            For Your <span className="text-purple">Business</span>
          </h1>
        </div>
      </div>
      <div className="listContainer"></div>
    </div>
  );
};

export default Brading;
