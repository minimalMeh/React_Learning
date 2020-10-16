import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

class SomeComponent extends Component {
    render() {
        return (
            <input value="123" />
        );
    }
}

export default class RefSample extends Component {
     textInput = React.createRef();

    componentDidMount = () => {
        (this.textInput.current as any).value = 200;
        // const inputValue = this._inputElement?.value; // в инпуте значение 456
        // const someComp = ReactDOM.findDOMNode(this._someComp); //ссылка на инпут с 123
        // const someCompValue = (someComp as HTMLInputElement)?.value; // 123
    }

    render() {
        return (
            <div>
                <input value="456" ref={this.textInput as any} />
                <SomeComponent />                    
            </div>
        );
    }
}