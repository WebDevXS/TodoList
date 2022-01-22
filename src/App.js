import React, { useEffect, useState } from 'react';
import "./App.css";
import Button  from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel  from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Todo from './Todo';
import db from './Firebase'
import firebase from 'firebase/compat/app';





function App() {
  const[todos,setTodos]=useState([]);
  const[input,setInput]=useState('');

  useEffect( ()=>{
     db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setTodos(snapshot.docs.map(doc=> ({id: doc.id,todo: doc.data().todo})))

    })
     

  }, [] );


  const addTodo = (event)=>{
    event.preventDefault(); // stops the refresh after each list item put in
    // this will fire off whenever you will add an item to the list
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
      
    })

    setTodos([...todos, input]); 
    setInput(''); //clear up the input field after submitting it
  }

  return (
    <div className="App">
      <h1>Hello Reactors!</h1>
      <form>

        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

         <Button disabled={!input} type="submit" onClick={addTodo} variant='contained' color='primary'>Add Todo</Button>
        
      </form>


     <ul>
       {todos.map(todo => (
         <Todo todo={todo}/>
        //  <li>{todo}</li>
       ))} 
     </ul>
    </div>
  );
}

export default App;
