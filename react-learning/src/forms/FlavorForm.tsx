import React from 'react';

export class FlavorForm extends React.Component<{}, {value: string}> {
    
    constructor(props: any) {
        super(props);
        this.state = { value: 'coconut' };
    }

    private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
                        Select flavor: 
                        <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">grapefruit</option>
                        <option value="lime">lime</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        );
    }
}
