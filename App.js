import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="root" tabIndex="5"
    >Namaste react using Jsx🚀</h1>
);

//How we can put react element in the component
const Title_1 = (<h1 className="root" tabIndex="5"
>Namaste react using Jsx🚀</h1>
);


//React Components
//Class based components-old war
//Functional components-new way
//React Functional component
//Its a normal javascript function which returns some jsx(react) element.

const number = 10000


const HeadingComponent_1 = () => (
    <div className="container">
        <Title />
        {/* Rendering functional react component */}
        {Title()}
        {/* console.log("Rendering functional react component");  */}
        <h1>{number}</h1>
        {/* rendering javascript */}
        {Title_1}
        {/* rendering react element */}
        <h1 className="heading">Namaste React one liner or multiliner (For multi use brackets) Functional Components</h1>
    </div>)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent_1 />);

