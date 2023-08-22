import { useState } from 'react';

export default function useForm(getFreshModelObject) {
    const [values, setValues] = useState(getFreshModelObject());
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
}
