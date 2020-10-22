import React from 'react';

function ListItem(props: any) {
    return <li>{props.value}</li>
}

export function NumberList(props: any): any {
    const numbers = props.numbers;
    return (
        <ul>
        { numbers.map((num: any) =>
            <ListItem key={num.toString()} value={num} />)
        }
        </ul>
    );
}