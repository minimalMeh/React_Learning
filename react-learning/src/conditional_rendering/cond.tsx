import React from 'react';

// This example renders a different greeting depending on the value of isLoggedIn prop.
function UserGreeting(props: any) {
    return <h1>Hi, user</h1>;
}

function GuestGreeting(props: any) {
    return <h1>Hi, guest</h1>;
}

export function Greeting(props: any) {
    const isLogin = props.isLogin;
    if (isLogin) {
        return <UserGreeting />
    } else {
        return <GuestGreeting />
    }
}
//
