"use strict";

console.log('meowowwwwww');


function Hello(props) {
    return <h1>Hellow world from React and jsx!</h1>
    // return React.createElement('h1', null, 'Hello world via React!')
}

ReactDOM.render(
    React.createElement(Hello),
    document.getElementById("react-go")
);