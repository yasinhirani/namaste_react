const structure = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child" }, [
    React.createElement("h1", { className: "heading" }, "Hello World!"),
    React.createElement("h2", { className: "heading" }, "Hello World!"),
  ]),
  React.createElement("div", { className: "child" }, [
    React.createElement("h3", { className: "heading" }, "Hello World!"),
    React.createElement("h4", { className: "heading" }, "Hello World!"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(structure);
