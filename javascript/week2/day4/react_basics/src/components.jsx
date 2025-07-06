function Component() {
  return (
    <>
      <h1>Hello, this is a heading</h1>
    </>
  );
}
export default Component;

function Greeting() {
  const name = "Anna";
  const a = 10;
  const b = 20;
  const c = a + b;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h2>This is heading 2</h2>
      <h3>this is heading 3</h3>
      <h4>this is heading 4</h4>
      <h5>this is heading 5</h5>
      <h6>this is heading 6</h6>
      <p>this is a paragraph</p>
      <br />
      <p> adding line break</p>
      <p>
        {" "}
        <b> this is a bold text</b>
      </p>
      <p>
        {" "}
        <i> this is a italic text</i>
      </p>
      <p> added addition of a and b is: {c}</p>
      <p> done by another method {10 + 20}</p>
      <div>
        <hr />
        <p>inside another div</p>
        <p style={{ color: "red" }}>red coloured element</p>
        <p style={{ fontFamily: "cursive" }}>cursive</p>
        <p style={{ fontSize: "20px" }}>cursive</p>
        <img src="/chatgpticon.jpg" alt="" style={{ width: '150px',
    height: '150px', }} />
   
      </div>
    </div>
  );
}
export { Greeting };
