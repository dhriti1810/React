const parent= React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"It is a h1 tag"),React.createElement("h2",{},"It is a h2 tag")]))




// const parent= React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"It is nested div")))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// const heading= React.createElement("h1",{id:"heading"},"Hello World React By Dhriti");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);