import React from 'react';

const Modal = ({ onClose, results, data }) => {
  return(
        <section className="modal-card-body content">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <h1>{result.q}</h1>
                <p className={result.a === data[i].answer ? 'has-text-dark p-2' : 'has-text-dark p-2'}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p className="has-text-dark p-2">Correct answer: {data[i].answer}<a href={data[i].link}>Read more about it!</a></p>}
              </li>
            ))}
          </ul>
        </section>
  );
}

export default Modal;