import React from 'react';
import "../../styles/programe-studiu/Programs.css"

const Programs = () => {
  return (
    <section className="programs">
      <div>
        <h4>Licenta in Informatica</h4>
        <ol>
          <li>
            <em>Specializarea Informatica</em>
            <ul>
              <li>
                <strong>Durata studiilor:</strong> 3 ani
              </li>
              <li>
                <strong>Diploma obtinuta:</strong> licenta in informatica
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div>
        <h4>Master in Informatica</h4>
        <ol>
          <li>
            <em>Metode si modele in Inteligenta artificiala</em>
            <ul>
              <li>
                <strong>Durata studiilor:</strong> 2 ani
              </li>
              <li>
                <strong>Diploma obtinuta:</strong> master in informatica
              </li>
            </ul>
          </li>

          <li>
            <em>Tehnici avansate pentru prelucrarea informatiei</em>
            <ul>
              <li>
                <strong>Durata studiilor:</strong> 2 ani
              </li>
              <li>
                <strong>Diploma obtinuta:</strong> master in informatica
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Programs;