import React from 'react'

const Button = ({children, borderRadius='5px', padding='5px 10px', margin= '0px 10px' }) => {

const buttonStyle = {
    backgroundColor: '#1C3F94',
    color: '#FCFCFC',
    padding: padding,
    border: 'none',
    borderRadius: borderRadius,
    margin: margin
}

return (

<>
    <button style={buttonStyle}>{children}</button>
</>
)

}

export default Button