import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './router/MainLayout'
import StudentPage from './components/StudentPage'
import StudentForm from './components/StudentForm'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <StudentPage />
        },
        {
          path: "/add",
          element: <StudentForm />
        },
        {
          path: "/edit/:id",
          element: <StudentForm />
        }
      ]
    }
  ])


  return (

    <Suspense>

      <RouterProvider router={router} />

    </Suspense>
  )
}

export default App