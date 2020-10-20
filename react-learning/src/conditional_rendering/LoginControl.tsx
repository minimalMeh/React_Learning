import React from 'react';

// This example renders a different greeting depending on the value of isLoggedIn prop.
function UserGreeting(props: any) {
    return <h1>Hi, user</h1>;
}

function GuestGreeting(props: any) {
    return <h1>Hi, guest</h1>;
}

function Greeting(props: any) {
    const isLogin = props.isLogin;
    if (isLogin) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}
//

function LoginBtn(props: any) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutBtn(props: any) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

//stateful component
export class LoginControl extends React.Component<{}, {isLoggedIn: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    private handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    private handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let btn = isLoggedIn ? <LoginBtn onClick={this.handleLoginClick}/> : <LogoutBtn onClick={this.handleLogoutClick}/>
        return (
            <div>
                <Greeting isLogin={this.state.isLoggedIn}/>
                {btn}
                <MailBox messages={["lol"]}/>
            </div>
        );
    }
}

function MailBox(props:any) {
    const undreadMessages: any[] = props.messages;
    return (
        <div>
            <h2>Hello!</h2>
            {undreadMessages.length > 0 &&
                <h3>you have {undreadMessages.length} messages.</h3>
            }
        </div>
    );
}