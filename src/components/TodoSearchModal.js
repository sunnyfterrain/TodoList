import styled from 'styled-components';
import TodoSearchModalItem from './TodoSearchModalItem';

const TodoSearchModal = ({ todos, value }) => {
  const filteredSearch = todos.filter((item) => {
    const blank = /^\s+|\s+$/g;
    if (value.replace(blank, '') === '') {
      return;
    }
    return item.text.toUpperCase().includes(value.toUpperCase());
  });

  return (
    <ModalBlock>
      <ModalUl>
        {filteredSearch.map((item) => {
          return <TodoSearchModalItem key={item.id} text={item.text} />;
        })}
      </ModalUl>
    </ModalBlock>
  );
};

const ModalBlock = styled.div`
  position: absolute;
  bottom: -120px;
  left: 30px;
  background-color: white;
  width: 250px;
  height: 200px;
  border-radius: 10px;
  box-shadow: -1px 3px 26px -15px rgba(0, 0, 0, 0.75);
`;

const ModalUl = styled.ul`
  padding: 0;
  margin: 0;
  padding: 10px;
`;

export default TodoSearchModal;
