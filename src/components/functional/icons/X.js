import React from 'react';

const beforeStyle = {
    background: 'white',
    width: '63%',
    height: '6%',
    position: 'absolute',
    transform: 'rotate(45deg)'
}
const afterStyle = {
    background: 'white',
    width: '63%',
    height: '6%',
    position: 'absolute',
    transform: 'rotate(-45deg)'
}


const X = () => {
    return (
        <>
            <div className="before" style={beforeStyle}></div>
            <div className="after" style={afterStyle}></div>
        </>
    );
}

export default X;
