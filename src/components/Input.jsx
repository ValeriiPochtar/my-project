import React, {useState} from 'react';

const Input = () => {

    const [input, setInput] = useState('Text in input');

    return (
        <div>
            <h1>{input}</h1>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></input>
      </div>
    );
};

export default Input;