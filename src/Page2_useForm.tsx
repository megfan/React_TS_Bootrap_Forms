import React, { useState, useEffect } from 'react'

function useForm( submit: any, validate: any ) {

    const [values, setValues] = useState({ email: '', password: '', checked: false});
    const [errors, setErrors] = useState({ email: '', password: '', checked: ''});
    const [isSubmiting, setSUmbiting] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        console.log(values);
        event.preventDefault();
        setErrors(validate(values));
        setSUmbiting(true);       
    }

    const handleCheck = () => {
        setValues({
            ...values,
            checked: !values.checked
        })
    }

    useEffect(() => {
        if(errors.email === '' && errors.password === '' && errors.checked === '' && isSubmiting === true){
            submit();
        }

    }, [errors]);

    return {
        values,
        handleChange,
        handleSubmit,
        handleCheck,
        errors
    };
}

export default useForm;