import styled from 'styled-components';

const Li = styled.li`
  border-bottom: 1px solid gray;
  padding: 10px;
`;
const TodoSearchModalItem = ({ text }) => {
  return <Li>{text}</Li>;
};

export default TodoSearchModalItem;
