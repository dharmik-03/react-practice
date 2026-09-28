import React, { useState } from 'react'

const AddTODO = ({ addTODO }) => {

    const [input, setInput] = useState({
        task: "",
        description: ""
    })

    const handleChange = (field, e) => {

        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }


    const handleSubmit = (e) => {

        e.preventDefault()
        addTODO(input)

        setInput({
            task: "",
            description: ""
        })



    }




    return (

        <>

            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='enter task' value={input.task} onChange={(e) => handleChange("task", e)} />
                <br />
                <br />

                <input type="text" placeholder='enter task' value={input.description} onChange={(e) => handleChange("description", e)} />


                <br />
                <br />
                <button type="submit">Add</button>

            </form>

        </>

    )
}

export default AddTODO