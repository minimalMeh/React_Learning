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

export class EssayForm extends React.Component<{}, {value: string}> {

    constructor(props: any) {
        super(props);
        this.state = {
            value: "Unlike HTML web resources, code components are rendered as a part of the same context, load at the same time as any other components, providing a seamless experience for the users."
        }
    }

    private handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({value: event.target.value});
      }
    
    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       alert('essay sent: ' + this.state.value);
       event.preventDefault();
    }
    
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Сочинение:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Отправить" />
          </form>
        );
      }
}
