import React from 'react'
import uuid from 'react-uuid'
import styled from 'styled-components'


const TodoForm = ({myInputText, setMyInputText, myListSetters, theListOfMyTodos}) => {


  const handleInputText = (e) => {

    setMyInputText(e.target.value)

  }


  const handleSubmitList = (e) => {

    if (myInputText === '') {
      e.preventDefault();
      alert('Kindly Input a Value')
    }else{

      e.preventDefault();
      myListSetters([...theListOfMyTodos, {id:uuid(), myAddedInput:myInputText, completed:false}]);
      setMyInputText("");
    }

  }

  return (
    <div >
        <form onSubmit={handleSubmitList}>

                <InputForm type="text" value={myInputText} onChange={handleInputText} />
                <SubmitButton>Add Todo</SubmitButton>
        </form>
          
    </div>
  )
}

const InputForm = styled.input`
   width:20vw;
   height:5vh;

`;

const SubmitButton = styled.button`
  width:6vw;
  padding:0.6em;
  border:2px solid red;
  cursor:pointer;


`;


export default TodoForm