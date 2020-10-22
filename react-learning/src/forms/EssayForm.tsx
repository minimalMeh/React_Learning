import React from 'react';

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