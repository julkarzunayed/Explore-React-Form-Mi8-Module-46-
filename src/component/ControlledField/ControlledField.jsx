import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [error, steError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(event.target.name.value);
        console.log(password, name);
        // if(password.length < 6){
        //     alert("6 character password is required")

        // }
        // else{
        //     steError("")
        // }
    };
    const handleOnchangeName = e => {
        setName(e.target.value);
    }

    const handlePasswordOnChange = event => {
        setPassword(event.target.value);
        // console.log(event.target.value)

        if (password.length < 6) {
            steError("Password must be more than 6 characters")
        }
        else {
            steError("")
        }
    }

    return (
        <div>
            <h3>Controlled Field Form</h3>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleOnchangeName}
                    type="text"
                    name="name"
                    defaultValue={name}
                    id="1"
                    placeholder='Your Name'
                    required />
                <br />
                <input
                    onChange={handlePasswordOnChange}
                    type="password"
                    defaultValue={password}
                    name="password"
                    id="2"
                    placeholder='Password'
                    required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p>
                <small style={{ color: "red" }}>
                    {error}
                </small>
            </p>
        </div>
    );
};

export default ControlledField;