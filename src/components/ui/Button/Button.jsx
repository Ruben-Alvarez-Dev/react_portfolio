import './Button.css'

function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) {
  const buttonClass = `btn btn-${variant} ${className}`.trim()
  
  return (
    <button 
      type={type}
      className={buttonClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button