const Button = ({ title, type = "button", onButtonClick }) => {
  const handleButtonClick = (event) => {
    event.preventDefault();
    onButtonClick();
  };

  return (
    <button onClick={handleButtonClick} type={type}>
      {title}
    </button>
  );
};

export { Button };
