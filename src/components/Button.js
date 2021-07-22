const Button = props => {
  return (
    <>
      <button className={props.class} onClick={props.onClick} type={props.type}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
