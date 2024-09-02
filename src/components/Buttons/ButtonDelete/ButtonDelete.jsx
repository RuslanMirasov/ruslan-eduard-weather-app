import "./ButtonDelete.css";

const ButtonDelete = ({ onDeleteActivity, id }) => {
  return (
    <button
      type="button"
      className="button-delete"
      onClick={() => onDeleteActivity(id)}
    ></button>
  );
};

export default ButtonDelete;
