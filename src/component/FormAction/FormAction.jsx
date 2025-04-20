import React from 'react';

const FormAction = () => {
    const handleFormAction = formData => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }

    return (
        <div>
            <h3>Fom Action</h3>
            <form action={handleFormAction}>
                <input type="text" name="name" id="" placeholder='Name' required/>
                <br />
                <input type="email" name="email" id="" placeholder='Email' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;