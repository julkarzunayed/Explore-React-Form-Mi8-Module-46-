import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Usr name: ", event.target.name.value)
        console.log("Usr email: ", event.target.email.value)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name' name="name" id="" />
                <br />
                <input type="email" placeholder='Your Email' name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;