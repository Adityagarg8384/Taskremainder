import React from 'react'
import Main from "./main"
import styled from 'styled-components'
import Link from 'next/link'

const index = () => {
  return (
    <div>
    {/* <p>Hello world</p> */}
    <Link href="/main">
      <button >go to page</button>
    </Link>

    {/* <Main/> */}
    </div>
    // <Container>
    //   {/* <Header onAdd={tb} /> */}
    //   {/* {showaddtask && <Addtask onAdd= {addtask}/>}
    //   {tasks.length>0 ?(<Tasks tasks={tasks} ondelete={deletetask} ontoggle= {toggle}/>): 'No task to show current'} */}
    // </Container>
  )
}
const Container= styled.div`
max-width: 500px;
margin: 30px auto;
overflow: auto;
min-height: 300px;
border: 1px solid steelblue;
padding: 30px;
border-radius: 5px;
`


export default index;