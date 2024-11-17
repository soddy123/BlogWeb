import React, { Children } from 'react'


//most importent thing is button kay kay parameter leta he and uuko useage ka tarika
//sabsa pahila parameter hota children
function Button({
   children,
   type = "button",
   bgColor='bg-blue-600',
   textColor='text-white',
   className='',
   ...props
   //hamne yaha classname empty and ...props iisliye di he kyu ki aagar ham different button ke liye different className de sake
}) {
  return (
   // ...props iisliye liya he kyu ki aagar ham classNAme ki tarah dusri property add karege then then hame uusko spread karege and then write karege in javascript {}
    <button className={`px-6 py-2 rounded-lg ${bgColor}  ${textColor} ${className}`} {...props}>
      {/* jo bhi text pass hoga wo yaha pe hoga iis childreen parameter (above also) ko ham kuch bi nam de sakte he */}
      {children}
    </button>
  )
}

export default Button