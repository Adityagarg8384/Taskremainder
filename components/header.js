import React from 'react'
import styled from 'styled-components';
import Button from './button';
const Header = ({onAdd}) => {
    const onclick=()=>{
        console.log("Hello world2");
    }
  return (
    <Main className='header'>
        <h1>Course tracker</h1>
        <Button color='green' title='add' onClick={onclick} />
        {/* <button className='btn'>Add</button> */}
        {/* <Button color='red' title='add'/>
        <Button color='green' title='add'/> */}
    </Main>
  )
}

const Main= styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;
`

export default Header;
