import { useEffect, useState } from 'react'
import { GetAll, DELETE, UpdateStudent } from '../api/axious'
import { useNavigate } from 'react-router-dom'


const StudentPage = () => {

  const navigate = useNavigate()


  const [student, setStudent] = useState([])

  useEffect(() => {
    loadStudent()
  }, [])

  const loadStudent = async () => {
    try {
      const data = await GetAll()

      setStudent(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const DeleteStudent = async (id) => {
    await DELETE(id)

    loadStudent()


  }
  return (
    <>

      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>GRid</th>
            <th>Course</th>
            <th>Mobile Number</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>

          {student.map((s, index) => (
            <tr key={s._id}>
              <td>{index + 1}</td>
              <td>{s.name}</td>
              <td>{s.GRid}</td>
              <td>{s.course}</td>
              <td>{s.MobileNumber}</td>
              <td><button className='btn btn-primary' onClick={() => navigate(`/edit/${s._id}`)}>EDIT</button></td>
              <td><button className='btn btn-warning' onClick={() => DeleteStudent(s._id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default StudentPage