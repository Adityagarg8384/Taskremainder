import React from 'react'
import styled from 'styled-components'

 const Button = ({color, text, onclick}) => {
  return (
    <But  onClick={onclick} style= {{backgroundColor: color}} >
        Add
    </But>
  )
}

const But= styled.button`
display: inline-block;
background: #000;
color: #fff;
border: none;
padding: 10px 20px;
margin: 5px;
border-radius: 5px;
cursor: pointer;
text-decoration: none;
font-size: 15px;
font-family: inherit;
`

export default Button;
