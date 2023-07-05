

export function LargeTExt({text, className}) {
  return (
    <h1 className={`display-5 ${className}`}>{text}</h1>
  )
}

export function SmallTExt({text,className}) {
  return (
    <h4 className={`fs-5 ${className}`}>{text}</h4>
  )
}
export function Input({type, placeholder, className, name, handleChange}) {
  return (
   <input type={type}placeholder={placeholder} className={` form-control mb-2 ${className}`} name={name}
    
   onChange={handleChange}
   />
  )
}
