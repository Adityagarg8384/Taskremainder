import Header from '../components/header'
import Tasks from '../components/tasks'
import { useState, useEffect } from "react"
import Addtask from '../components/addtask'
import styled from 'styled-components'

export default function Main({ res }) {
  const [showaddtask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState(res.data);
  // setTasks(res);
  
  // setTasks(data);

  //   useEffect(()=>{
  //     const gettasks= async()=>{
  //       const taskfromserver= await fetchtask();
  //       settasks(taskfromserver);
  //     }
  //     gettasks();
  //   },[])

  //   const fetchtask= async()=>{
  //     const res= await fetch('http://localhost:5000/tasks');

  //     const data=await res.json();
  //     console.log(data);
  //     return data;
  //   }

  const getdata = () => {
    try {
      fetch("http://localhost:3001/api/v1/gettask")
        .then(async (response) => {
          const data = await response.json();
          // console.log(data);
          setTasks(data.data);
          // console.log(tasks);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    catch (err) {
      console.log(err);
    }
  }

  const addtask = async (tas) => {

    let id = Math.floor(Math.random() * 10000) + 1;
    let newtask = { id, ...tas };
    const task = newtask.text;
    const setreminder = newtask.remainder;
    const date = newtask.day;
    try {
      fetch("http://localhost:3001/api/v1/addtask", {
        method: 'POST',
        body: JSON.stringify({
          id,
          task,
          setreminder,
          date
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then((response) => {
          getdata();
          // console.log(response);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    catch (err) {
      console.log(err);
    }

  }


  const deletetask = async (id) => {
    console.log(id);
    try{
      fetch(`http://localhost:3001/api/v1/deletetask/${id}`,{
        method:'DELETE',
        body:id,
      }).then(response=>{
        getdata();
        console.log(response);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    }
  }

  const toggle = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, remainder: !task.remainder } : task));
  }
  const tb = () => {
    console.log(showaddtask);
    setShowAddTask(!showaddtask)
  }

  return (
    <Container onLoad={getdata}>
      <Header onAdd={tb} />
      {showaddtask && <Addtask onAdd={addtask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} ondelete={deletetask} ontoggle={toggle} />) : 'No task to show current'}
    </Container>
  );
}

// export async function getStaticProps() {
//   console.log("Hello world");
//   try {
//     const response = await fetch("http://localhost:3001/api/v1/gettask");
//     // console.log(response);
//     const res = await response.json(); // Parse the JSON response
//     const re= res.data;
//     const r= await re.json();
//     return {
//       props: {
//         r,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//     return {
//       props: {
//         res: null, // Return null if there's an error
//       },
//     };
//   }
// }

export async function getStaticProps() {
  console.log("Hello world");

    const response=await fetch("http://localhost:3001/api/v1/gettask");
    const res= await response.json();
    return {
      props: {
        res,
      }
    }
}


const Container = styled.div`
max-width: 500px;
margin: 30px auto;
overflow: auto;
min-height: 300px;
border: 1px solid steelblue;
padding: 30px;
border-radius: 5px;
`

// export default Main
