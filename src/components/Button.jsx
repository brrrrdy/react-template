function Button({
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function ButtonDemo() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <Button
          handleClick={() =>
            handleButtonClick("https://www.theodinproject.com")
          }
        />

        <Button
          text="Visit Google"
          color="green"
          fontSize={16}
          handleClick={() => handleButtonClick("https://www.google.com")}
        />

        <Button
          text="Visit GitHub"
          color="purple"
          fontSize={18}
          handleClick={() => handleButtonClick("https://github.com")}
        />
      </div>
    </>
  );
}
