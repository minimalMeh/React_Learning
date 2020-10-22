import React from 'react';

export class NameForm extends React.Component<{}, {value: string}> {
    
    constructor(props: any) {
        super(props);
        this.state = { value: '' };
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: event.target.value})
    }

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert("Sent name: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    </label>
                    <input type="text" value={this.state.value} name="name" onChange={this.handleChange}/>
                    <input type="submit" value="send"/>
                </form>
            </div>
        );
    }
}
