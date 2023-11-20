import React, {useState} from "react";
import "./index.css";

const myAge = 22;

export default function Test() {
  const [guessMessage, setGuessMessage] = useState(null);

  const handleAgeGuessSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());

    if (!data.myAge) {
      setGuessMessage("Musisz podać liczbę z zakresu od 1 do 99");
      return;
    }

    if (parseInt(data.myAge) === myAge) {
      setGuessMessage("Brawo zgadłeś ile mam lat. Jesteś super!");
      return;
    }
    if (parseInt(data.myAge) === 69) {
      setGuessMessage("Ty śmieszku hehe");
      return;
    }

    setGuessMessage(`Niestety mój wiek to nie jest: ${data.myAge}`)
  };

  return (
    <>
      <div className="test-page">
        <form className="test-page__container" onSubmit={handleAgeGuessSubmit}>
          <div className="test-page__container__text">Zgadnij ile mam lat!</div>
          <input className="test-page__container__input" type="number" name="myAge" min={1} max={99} />
          <button className="test-page__container__button" type="submit">Zgaduj!</button>
        </form>
      </div>
      {!!guessMessage && (
        <div className="test-page__info">{guessMessage}</div>
      )}
    </>
  );
}