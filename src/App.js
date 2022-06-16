import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";
import './App.css'



function App() {

  const [inputText, setInputText] = useState('');
  const [todoLists, setTodoLists] = useState([]);


  return (
    <div className="App">

    <Container>

   
      <h1>My Todo List</h1>

     <TodoForm myInputText={inputText} setMyInputText={setInputText}  myListSetters={setTodoLists} theListOfMyTodos={todoLists} />
     <TodoList listingTodoList={todoLists} setListingTodoList={setTodoLists} />
     </Container>
    </div>
  );
}


const Container = styled.div`
  width:50%;
  min-height:60vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;
export default App;
