import styled from "styled-components";
import { useNavigate } from 'react-router-dom'

const Title = styled.header`
  width: 100%;
  background-color: #323277;
  color: #F5F5F5;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 3px;
  text-align: center;
`;

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
  <>
    <Title>todo list</Title>
    <button onClick={handleLogout}>logout</button>
  </>)
};

export default Header;
