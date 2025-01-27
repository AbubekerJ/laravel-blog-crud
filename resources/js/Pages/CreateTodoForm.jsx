import { router, useForm } from '@inertiajs/react';
import React, { useState } from 'react'

const CreateTodoForm = () => {
  const [values, setValues] = useState({
    title: "",
    description: "",
  })

  
  const { data, setData, post, processing, errors } = useForm({
    title: "",
    description: "",
    remember: false,
  })


  function handleSubmit(e) {
    e.preventDefault()
    post('/todos');  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Create New Post</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the title"
            value={data.title}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={e=>setData('title',e.target.value)}
          />
               {errors.title && <div  className='text-sm text-red-500'>{errors.title}</div>}
        </div>
    
          

        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter the description"
            rows="4"
            value={data.description}
            onChange={e=>setData('description',e.target.value)}
           
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
             {errors.description && <div className='text-sm text-red-500'>{errors.description}</div>}
        </div>
        
     
        <button
         disabled={processing}
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
  )
}

export default CreateTodoForm