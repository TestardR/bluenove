import React from 'react'

const FormItem = ({ field, values, handleChange }) => {
    console.log(values)
    return (
        <div data-test="component-form-item">
            <label>{field}</label>
            <input
                name={field}
                value={values}
                onChange={handleChange}
                />
        </div>
    )
}

export default FormItem
