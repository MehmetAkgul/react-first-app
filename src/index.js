import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {

    const buttonText = 'Hello World';


    return (
        <div>
            <label htmlFor="name" className="label"> enter e-mail</label>
            <input type="text" id="name"/>
            <button style={{backgroundColor: 'red', color: 'white'}}>
                {buttonText}
            </button>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)