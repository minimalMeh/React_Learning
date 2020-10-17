import React from 'react';
import { Component } from 'react';

class SomeComponent extends Component {
    private inputRef = React.createRef<HTMLInputElement>();

    setValue() {
        this.inputRef!.current!.value = "after mount";
    }

    render() {
        return (
            <input ref={this.inputRef} value="initial" />
        );
    }
}

export default class RefSample extends Component {
    textInput = React.createRef<HTMLInputElement>();
    componentTextInput = React.createRef<SomeComponent>();

    componentDidMount = () => {
        this.textInput!.current!.value = "after mount";
        this.componentTextInput!.current!.setValue();
    }

    render() {
        return (
            <div>
                <input value="initial" ref={this.textInput} />
                <SomeComponent ref={this.componentTextInput}/>                    
            </div>
        );
    }
}