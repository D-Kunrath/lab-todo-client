import styled from "styled-components";

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
  return <Title>todo list</Title>;
};

export default Header;
