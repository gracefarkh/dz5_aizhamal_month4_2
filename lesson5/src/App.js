// import React from 'react'
// import './App.css'
// import './index.css'
// import { useForm } from 'react-hook-form'

// export default function App() {
//     const {
//         register,
//         handleSubmit,
//         reset,
//         formState: { errors }
//     } = useForm()

//     const onSubmit = data => {
//       console.log(data)
//         // alert(Your name ${data.name})
//         reset()
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input
//                     {...register('name', {
//                         required: true
//                     })}
//                     placeholder="Name"
//                 />
//                 {errors?.name && (
//                     <div className='red' style={{ color: 'red' }}>{errors.name}</div>
//                 )}

//                 <input
//                     {...register('number', {
//                         required: true,
//                     })}
//                     placeholder="Number"
//                 />
//                 {errors?.number && (
//                     <div className='red' style={{ color: 'red' }}>{errors.number}</div>
//                 )}
//               <input type="submit" name="" id="" />
//             </form>
//         </div>
//     )
// }


import React from 'react';
import './App.css';
import {useForm} from "react-hook-form"

  export default function App() {
  const {register, handleSubmit , formState:{errors} , reset}  = useForm ()

  const onSubmit = (data)=> {
    alert(`Thank you ${data.name} for your registration`)
    console.log(data)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input className='inputs'
          {... register('name' , {
            required: true,
          })} 
          placeholder='Name'
          />
          {errors?.name && (<div style={{color:'red'}}>{errors.name.message}</div>)}
          <input className='inputs'
          {... register('number' , {
            required: true,
            pattern:{
              value : /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/,
              message: 'Please enter valid number'
            }
          })} type='text'
          placeholder='Number'
          />
          {errors?.number && (<div style={{color:'red'}}>{errors.number.message}</div>)}
          <button>
            SEND 
          </button>
      </form>
    </div>
  );
}
