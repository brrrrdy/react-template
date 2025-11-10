import "./TextBox.css";

function TextBox() {
  const animals = ["Lion", "Cow", "Snake", "Lizard", "Pig"];

  const animalsList = animals.map((animal) => (
    <li key={animal} className="animal-item">
      {animal}
    </li>
  ));

  return (
    <div className="textbox-container">
      <h1 className="textbox-title">Animals:</h1>
      <ul className="animals-list">{animalsList}</ul>
    </div>
  );
}

export default TextBox;
