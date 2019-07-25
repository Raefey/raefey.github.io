import React from 'react-dom';
import ReactDOM from 'react-dom';

function HelloRaefe() {
    return(
        <div>
            Hello Raefe!
        </div>
    );
}

ReactDOM.render(
    <HelloRaefe/>,
    document.querySelector('#root')
);