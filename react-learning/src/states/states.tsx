import React from 'react';

export class Clock extends React.Component<{}, {date: Date}> {

    timerID: NodeJS.Timeout;

    constructor(props: any) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        2000
        )
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }
    
    render = () => {
        return (
            <div>
                <h1>Time {this.state.date.toLocaleTimeString()}.</h1>
            </div>
        );
    }
}

