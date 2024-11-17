import React ,{useId} from 'react'
// Assigment===> class Name ke aandar empty string ho so in parameter we give className=''
function Select({
   options,
   label,
   className='',
   ...props

},ref) {
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label> }
      <select
         // user ne jitne bi props diye he uutne ke uutne pass kardo
         {...props}
         id={id}
         ref={ref}
         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
         >
            {/* aagar ham options ke aandar koi value nahi he and ham ne direct .map lagaya to code will be crash so we loop optional */}
            {options?.map((option) => (
                  <option key={option} value={option}>
                     {option}
                  </option>
            ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)