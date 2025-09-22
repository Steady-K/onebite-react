import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date().toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// // 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (preProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O
//   if (preProps.id !== nextProps.id) return false;
//   if (preProps.isDone !== nextProps.isDone) return false;
//   if (preProps.content !== nextProps.content) return false;
//   if (preProps.date !== nextProps.date) return false;

//   return true;
// });

export default memo(TodoItem);
