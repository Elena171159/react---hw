export const Tab = ({ id, onClick, name, key }) => {
  return (
    <button id={id} onClick={onClick} key={key}>
      {name}
    </button>
  );
};
