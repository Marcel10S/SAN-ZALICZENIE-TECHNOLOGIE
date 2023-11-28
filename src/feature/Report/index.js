import React from "react";
import "./index.css";

export default function Report() {
  return (
    <div className="report-page">
      <h1 className="report-page__title">Metody wysyłania danych</h1>
      <div className="report-page__container">
        <p>
          <span className="report-page__text-bold">Get:</span> Jego zadaniem jest uzyskanie informacji, konwencja nie przewiduje wykorzystania body więc dane są przekazywane przez QueryParams
        </p>
        <p>
          <span className="report-page__text-bold">Post:</span> Służy do tworzenia contentu, zawiera body
        </p>
        <p>
          <span className="report-page__text-bold">Put and Patch</span>: W teorii pełnią tą samą rolę, według konwencji służą do aktualizacji danych, również jak post mogą korzystać z body
        </p>
      </div>
      <h1>Stanowość zapytania HTTP</h1>
      <div>
        <p>
          Stanowość zapytania oznacza, że każde zapytanie HTTP nie przechowuje informacji o poprzednich Requestach ani nie zostawia informacji o sobie. Zapytania http są dla siebie anonimowe i nie wpływają na siebie
        </p>
      </div>
      <h1>Nagłówki zapytań</h1>
      <div>
        <p>
          <span className="report-page__text-bold">Content-Type:</span> Określa tym pdanych przesyłanych na serwer
        </p>
        <p>
          <span className="report-page__text-bold">Authorization:</span> Zawiera w sobie dane do autoryzacji do danego zasobu
        </p>
        <p>
          <span className="report-page__text-bold">User-Agent:</span> Informacja o rodzaju klienta od którego wychodzi dane zapytanie
        </p>
        <p>
          <span className="report-page__text-bold">Accept-Language:</span> Wskazuje na preferowany język
        </p>
      </div>
      <h1>Kody błędów</h1>
      <div>
        <p>
          <span className="report-page__text-bold">2**:</span> Response oznaczony kodem 200 lub pochodnym oznacza pomyślne wykonanie akcji
        </p>
        <p>
          <span className="report-page__text-bold">3**:</span> Odpowiedź oznaczona kodem 300 jest zazwyczaj związana z przekierowaniem
        </p>
        <p>
          <span className="report-page__text-bold">4**:</span> Kod 400 związany jest z błędnym zapytaniem. Błąd może wynikać z błędnych danych lub niepoprawnej ścieżki do zasobu
        </p>
        <p>
          <span className="report-page__text-bold">5**:</span> W większości przypadków błąd 500 sygnalizuje błąd po stronie serwera, w przypadku napotkania takiego powinniśmy zacząć szukać przyczyny błędu na serwerze
        </p>
      </div>
      <h1>REST</h1>
      <div>
        <p>
          REST jest archiekturą stosowaną przy tworzeniu API. Dzięki stosowaniu jednej architektury możamy w łatwy sposób wdrożyć się do dowolnego api oraz z niego korzystać
        </p>
      </div>
    </div>
  );
}