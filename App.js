import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
])

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");
console.log(heading);

const jsxHeading = <h1 id="heading" className="head" tabIndex="1">Namaste React using JSX</h1>;
console.log(jsxHeading);

const elem = <h1>React element</h1>;

const Title = () => (
    <h1 className="title" tabIndex="5">Namaste React using JSX {elem}</h1>
)

const HeadingComponent = () => {
    return <h1 id="heading">Namaste React Functional Component </h1>
}

const HeadingComponent2 = () => (
    <div id="container">
        {/* <Title /> */}
        {Title()}
        <h1 className="heading">Namaste React from Functional Component</h1>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
// root.render(heading);
// root.render(jsxHeading);

root.render(<HeadingComponent2 />);
// root.render(elem);
// root.render(Title());