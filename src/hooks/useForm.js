import React, {useState, useEffect} from 'react';

const useForm = (initialValues = {}) => {
    const [valuesFormState, setForm] = useState(initialValues)

    const handleChange = ({target}) => {
        setForm({
            ...valuesFormState, 
            [target.name]: target.value
        })
    }

    const resetForm = () => {
        setForm(initialValues)
    }

    return {...valuesFormState, valuesFormState, handleChange, resetForm}
}

export default useForm;