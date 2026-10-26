import axios from "axios"

export const url = import.meta.env.VITE_BASE_URL


export const GetAll = async () => {
    try {
        const res = await axios(`${url}/AllStudent`)

        return res.data.AllStudentsData

    } catch (error) {
        console.log(error.message)
    }
}

export const DELETE = async (id) => {
    try {
        const res = await axios.delete(`${url}/delete/${id}`)

        return res.data

    } catch (error) {
        console.log(error.message)
    }
}


export const AddStudent = async (studentData) => {
    try {
        const res = await axios.post(`${url}/add`, studentData)


        return res.data
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}


export const UpdateStudent = async (id, studentData) => {
    try {
        const res = await axios.patch(`${url}/updateManually/${id}`, studentData)

        return res.data

    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}

export const GetById = async (id) => {
    try {
        const res = await axios.get(`${url}/StudentWithId/${id}`)

        return res.data.studentWithId
    } catch (error) {
        console.log(error.message)
        throw new Error(error.message)
    }
}