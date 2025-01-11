import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function fromSubmit(data){
    await new Promise((resolve)=> setTimeout(resolve,5000));
    console.log("form submitted")
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(fromSubmit)}>
      <div>
        <label for="firstName"> First name:</label>
        <input className={errors.firstName ? 'input-error' : ""} 
        type="text" name="fname"
        {...register('firstName',
          {required:true ,
           minLength:{value:3 , message:'Min Length req 3'},
           maxLength:{value:8 , message:'Max Length req 8'},
          })} />
            {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <div>
        <label for="middleName">Middle name:</label>
        <input type="text" name="midname" {...register('middleName')} />
      </div>
      <div>
        <label for="lastName">Last name:</label>
        <input type="text" name="lname" {...register('lastName', { 
          pattern:{
            value: /^[A-Za-z]+$/i,
            message: "Last name is not as per the pattern"
          } })} />
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <input type='submit' disabled={isSubmitting}
      value={isSubmitting ? "Submitting" : "Submit"}
      >
      </input>
    </form>
  )
}

export default App
