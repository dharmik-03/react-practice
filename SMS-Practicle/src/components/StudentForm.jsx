import React, { useEffect, useState } from 'react'
import { AddStudent, GetById, UpdateStudent } from '../api/axious'
import { useNavigate, useParams } from 'react-router-dom'

const StudentForm = () => {




    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getById(id)
        }
    }, [id])



    const getById = async (id) => {
        try {
            const data = await GetById(id)

            setInput({
                name: data.name,
                GRid: data.GRid,
                course: data.course,
                MobileNumber: data.MobileNumber,
            })
        } catch (error) {
            console.log(error)
        }
    }



    const [input, setInput] = useState({
        name: "",
        GRid: "",
        course: "",
        MobileNumber: "",

    })


    const handleChange = async (field, e) => {
        const newStudent = (prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }

        }

        setInput(newStudent)



    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (id) {
                await UpdateStudent(id, input)
            } else {
                await AddStudent(input)
            }

            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }




    return (

        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Name</label>
                <input type="text" value={input.name} onChange={(e) => handleChange("name", e)} />
                <br /><br />

                <label htmlFor="GRID">Enter GRid</label>
                <input type="number" value={input.GRid} onChange={(e) => handleChange("GRid", e)} />
                <br /><br />


                <label htmlFor="course">Enter course</label>
                <select value={input.course} onChange={(e) => handleChange("course", e)}>
                    <option value="">Select</option>
                    <option value="full stack development">Full stackd developer</option>
                    <option value="graphic design">graphic design</option>
                    <option value="UI/UX">UI/UX</option>
                </select>

                <br /><br />


                <label htmlFor="Mob">Enter MobileNumber</label>
                <input type="text" value={input.MobileNumber} onChange={(e) => handleChange("MobileNumber", e)} />
                <br /><br />


                <br />
                <br />
                <button type='submit' onClick={() => navigate("/")}>{id ? "Update" : "Add"}</button>


            </form>
        </>
    )
}

export default StudentForm