import React from 'react';

export class ToggleButton extends React.Component<{}, {isActive: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {isActive: true}

         // This binding is necessary to make `this` work in the callback
         // To get around it use syntax  handleClick = () => 
         this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id?: any, event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        this.setState( (state: any) => ({
            isActive: !state.isActive
        }));
    }

    render() {
        return (
                // To get around binding this, need to use onClick={() => this.handleClick()
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isActive ? "on" : "off"}
                </button>
                <button onClick={(e) => this.handleClick("1", e)}>pass args 1</button>
                <button onClick={this.handleClick.bind(this, "2")}>pass args 2</button>
            </div>
        );
    }
}