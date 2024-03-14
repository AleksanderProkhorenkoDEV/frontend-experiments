import ReactDom from "https://esm.sh/react-dom";

const hello = document.getElementById('hello');
const root = ReactDom.createRoot(hello);

root.render('Hello react')