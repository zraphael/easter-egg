import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Changer() {

    const [messageContent, setMessage] = useState('Well, looks like you got it.');
    const [backgroundColor, setColor] = useState('black');

    useEffect(() => {
        setMessage("Ooops, you're late.");
    }, [])

    return (
        <Messenger backgroundState={backgroundColor}>
            <h1>{messageContent}</h1>
            <button onClick={() => {
                setColor('green');
            }}>Try clicking here</button>
        </Messenger>
    )
}

export default Changer;

const Messenger = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    color: white;
    background-color: ${(props) => {props.backgroundState}};
    align-items: center;
    justify-content: center;
`