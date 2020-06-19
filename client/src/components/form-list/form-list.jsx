import React, { useState, useEffect, useRef } from 'react'
/* import FormItem from '../form-item/form-item.component' */
/* import { useForm } from '../../hooks/useForm'; */
import useFetch from '../../hooks/useFetch'
import axios from 'axios';


// insufficient time
// Dynamic forms would be something to work on

const Form = () => {
    /*   const [data, setData] = useState({
          name: '', subject: '', startingDate: '', endingDate: ''
      }) */
    const [name, setName] = useState('')

    useEffect(async () => {
        const result = await axios.get("/api/debates")
        setName(result.data[0].name)
    }, [])




    const onSubmit = (e) => {
        // post request
        console.log(name)
        e.preventDefault();
    }

    return (
        <div data-test='component-form'>
            {/*   <FormItem field='name' values={values.name} handleChange={handleChange} />
            <FormItem field='subject' values={values.subject} handleChange={handleChange} />
            <FormItem field='startingDate' values={values.startingDate} handleChange={handleChange} />
            <FormItem field='endingDate' values={values.endingDate} handleChange={handleChange} /> */}
            <label>name</label>
            <input
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={onSubmit}>Click Me</button>
        </div>
    )
}

export default Form
