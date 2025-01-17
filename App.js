import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>Object =>ReactDom=>Html
// JSX =>React.createElement =>ReactElement=>js object =>HtmlElement(render)

// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Namaste React Bhai 🚀"
// );
// console.log(heading);

//How do we render it?
//Through the root

//Jsx - is not html in javascript
//you can called it as html like syntax or xml like syntax
const jsxHeading = (<h1 className="root" tabIndex="5"
>Namaste react using Jsx🚀</h1>);


console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(jsxHeading);