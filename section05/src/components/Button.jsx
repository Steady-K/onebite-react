const Button = ({ children, text, color = "black" }) => {
  //props의 기본값을 설정하기 위해서는 구조분해 할당으로 props를 받아와서 설정해야한다
  //  이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
