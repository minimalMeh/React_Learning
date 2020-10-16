import React from 'react';
import { Component } from 'react';

class SomeComponent extends Component {
    private inputRef = React.createRef<HTMLInputElement>();

    setValue() {
        this.inputRef?.current?.focus();
        const node = this.inputRef?.current;
        if (node) {
            node.value ="00";
        }
    }

    render() {
        return (
            <input ref={this.inputRef} value="123" />
        );
    }
}

export default class RefSample extends Component {
    textInput = React.createRef();
    componentTextInput = React.createRef();


    componentDidMount = () => {
        (this.textInput.current as any).value = 200;
        (this.componentTextInput.current as SomeComponent).setValue();
    }

    render() {
        return (
            <div>
                <input value="456" ref={this.textInput as any} />
                <SomeComponent ref={this.componentTextInput as any}/>                    
            </div>
        );
    }
}