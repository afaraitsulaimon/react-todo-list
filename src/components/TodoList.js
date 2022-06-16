import React from 'react'
import Todo from './Todo'

const TodoList = ({listingTodoList, setListingTodoList}) => {
  return (
    <div>

        <ul>
                {listingTodoList.map((list) => (
                    <Todo key={list.id} myText={list.myAddedInput} ourTodoLists={listingTodoList} setOurTodoList={setListingTodoList} listThatIMapThrough={list} />
                ))}
        </ul>
        
    </div>
  )
}

export default TodoList