import React, { useRef } from 'react';

const UnControlledField = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    console.log("kdfk", emailRef)
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password)
    }

    return (
        <div>
            <h3>UnControlled Field</h3>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" placeholder='Your Email'/>
                <br />
                <input ref={passwordRef} type="password" name="" placeholder='Your Password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledField;