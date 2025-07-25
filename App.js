import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hello world from React");

//JSX
const jsxHeading = <h1 id = "heading">Hello World from React</h1>;


//React component
const Title = () => (
    <h1 id = "heading" tabIndex="5">Namaste React from JSX</h1>
);

//Component Composition 
const Heading = () => (
    <div className = "container">
        {jsxHeading}
        < Title/>
        <h2>React Functional Component</h2>
    </div>
);


console.log(heading);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
