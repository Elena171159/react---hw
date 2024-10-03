import "./Tab.css"
export const Tab = ({ id, onClick, name, key }) => {
  return (
    <button className={'tab'}id={id} onClick={onClick} key={key}>
      {name}
    </button>
  );
};
