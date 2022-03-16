import {useState} from 'react'
import styled from 'styled-components'
import apiTodos from '../utils/api.utils'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 3px;
  background-color: #F5F5F5;
`;

const DeleteButton = styled.button`
  background-color: #f54545;
  color: #F5F5F5;
  font-weight: bold;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const ItemText = styled.span`

`;

const TodoItem = ({_id, title, completed, getAllTodos}) => {

  const [checked, setChecked] = useState(completed);

  const handleChecked = async (event) => {
    try {
      setChecked(event.currentTarget.checked);
      const localTodo = {
        title,
        completed: event.currentTarget.checked
      }
      await apiTodos.updateTodo(_id, localTodo)
      await getAllTodos();
    } catch (error) {
      console.error(error);
    }
  }

  const deleteItem = async (id) => {
    try {
      await apiTodos.deleteTodo(id);
      await getAllTodos();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Row>
      <input type='checkbox' checked={checked} onChange={handleChecked} />
      <ItemText>{title}</ItemText>
      <DeleteButton onClick={() => deleteItem(_id)}>X</DeleteButton>
    </Row>
  )
}

export default TodoItem;