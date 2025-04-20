import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookControlledField = () => {
    const [name, setName] = useInputField('');
    const [email, setEmail] = useInputField('');
    const [password, setPassword] = useInputField('');
    
    const handleOnSubmit = e =>{
        e.preventDefault();
        console.log(setEmail)
        console.log("Name: ", name, 'Email :', email, 'Password: ', password)
    }

    return (
        <div>
            <h3>Custom Hook Controlled Form Field</h3>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    name='name'
                    onChange={setName}
                    placeholder='Enter your name'
                    defaultValue={name}
                    required
                />
                <br />
                <input
                    type="email"
                    name='email'
                    onChange={setEmail}
                    placeholder='Enter your Email'
                    defaultValue={email}
                    required
                />
                <br />
                <input
                    type="password"
                    name='name'
                    onChange={setPassword}
                    placeholder='Enter password'
                    defaultValue={password}
                    required
                />
                <br />
                <input
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default HookControlledField;