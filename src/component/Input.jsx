import React, {useId} from 'react'

const Input = React.forwardRef(function Input({

   label,
   type="text", // default value
   className="",
   ...props

},ref){
   const id=useId()
   return (
      <div className='w-full'>
          {/* aagar lable diya he to lable display hoga {lable && () here we use tag <></>} */}
          {label && <label 
            className='inline-block mb-1 pl-1' 
            // ham yaha id input and label me dege aagar user label ya input pe chick kare to uuse ek hi jagah par le aaye
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            //here below javascript use kiya he in {``}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            
            //reference ko aapne user se liya he as a prop wo yaha pass kar dege ye hame reference degi hamare parent component ka thats 
            //why we use frowerdreference reference wahase pass kiya jayega and yaha state ka access liya jayega  
            //jo input se lege wo dikhega
            ref={ref}
            {...props}
            id={id}
            />
      </div>
   )
})

export default Input