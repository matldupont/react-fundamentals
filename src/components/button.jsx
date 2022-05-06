const Button = ({ type = "button", onButtonClick, children }) => {
  const handleButtonClick = (event) => {
    event.preventDefault();
    onButtonClick();
  };

  return (
    <button onClick={handleButtonClick} type={type}>
      {children}
    </button>
  );
};

export { Button };
