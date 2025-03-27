import React, { forwardRef } from "react";
import "../style/home/Photo.scss"
const Photo = forwardRef((props, ref) => {
  return (
    <div className="Photo-layout">
    <section ref={ref} id="photo">
      <h2>Photo</h2>
    </section>
    </div>
  );
});

export default Photo;