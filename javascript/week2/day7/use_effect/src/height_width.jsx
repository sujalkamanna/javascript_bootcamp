import { func } from "prop-types";
import { useState, useEffect } from "react";

function HeightWidth() {
  const [Width, setWidth] = useState(window.innerWidth);
  const [Height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handle_resize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  });
  window.addEventListener("resize", handle_resize);
  console.log("evemt listner added");

  return (
    <div>
      <p>
        Window Width :{Width}
        Window Height :{Height}px
      </p>
    </div>
  );
}

export default HeightWidth;
