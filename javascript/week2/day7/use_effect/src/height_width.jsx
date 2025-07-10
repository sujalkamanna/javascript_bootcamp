import { useState, useEffect } from "react";

function HeightWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed");
    };
  }, []);

  useEffect(() => {
    document.title = `size ${width}x ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <div>
      <p>
        Window Width: {width}px <br />
        Window Height: {height}px
      </p>
    </div>
  );
}

export default HeightWidth;
