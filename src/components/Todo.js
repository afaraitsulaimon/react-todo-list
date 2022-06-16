import React from 'react'
import {FaTimes, FaCheck} from 'react-icons/fa'
import styled from 'styled-components'
import '../App.css'

const Todo = ({myText, ourTodoLists, setOurTodoList, listThatIMapThrough}) => {

  


    const handleRemoveList = () => {
           
            setOurTodoList(ourTodoLists.filter((theList) => theList.id !== listThatIMapThrough.id));
    }


   
    
        const completeHandler = () => {

            setOurTodoList(ourTodoLists.map((item) => {
                if (item.id === listThatIMapThrough.id) {
                    return{
                        ...item, completed: !item.completed
                    };
                    
                }
                return item;
            }))
           
        }

  return (


    <div>


            <li style={{ listStyle:'none' }} >
        <ListHolder>

            <TextHolder className={listThatIMapThrough.completed ? 'completed' : '' }>
                 {myText}
            </TextHolder>

            <IconItems>

                
                <IconItems1>
                <FaTimes onClick={handleRemoveList} />
                </IconItems1>

                <IconItems2>
                <FaCheck onClick={completeHandler}/>
                </IconItems2>

               
            </IconItems>
        </ListHolder>
       
        </li>
    </div>
  )
}


const ListHolder = styled.div`
    background:linear-gradient(45deg, orange, yellow);
    width:40vw;
    height:10vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:10px;
`;


const TextHolder = styled.div`

margin-left:15px;

`;

const IconItems = styled.div`

    display:flex;
    width:10vw;
    justify-content:space-between;
    margin-right:10px;
`;


const IconItems1 = styled.div`

cursor:pointer;

`;


const IconItems2 = styled.div`
        cursor:pointer;
`;
export default Todo