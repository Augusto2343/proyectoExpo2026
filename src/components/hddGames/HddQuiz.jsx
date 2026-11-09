import { useState } from 'react';
import "./HddQuiz.css";
// ---- Preguntas (editá acá el contenido) ----
const QUESTIONS = [
  {
    q: '¿Qué componente gira para que se pueda guardar información?',
    options: ['Plato', 'Placa controladora', 'Tornillo', 'Cable flex'],
    correct: 0,
    info: 'Los platos son discos magnéticos donde se graban los datos.',
  },
  {
    q: '¿Qué pieza hace girar los platos?',
    options: ['Cabezal', 'Motor spindle', 'Brazo actuador', 'Conector SATA'],
    correct: 1,
    info: 'El motor spindle mantiene los platos girando a velocidad constante (por ejemplo 7200 RPM).',
  },
  {
    q: '¿Qué componente lee y escribe los datos sobre el plato?',
    options: ['Placa PCB', 'Spindle', 'Cabezal de lectura/escritura', 'Carcasa'],
    correct: 2,
    info: 'El cabezal flota a nanómetros del plato y magnetiza o lee cada bit.',
  },
  {
    q: '¿Qué mueve a los cabezales sobre el plato?',
    options: ['Brazo actuador con bobina de voz', 'Un ventilador', 'El cable de datos', 'La fuente'],
    correct: 0,
    info: 'La bobina de voz mueve el brazo con mucha precisión hacia la pista correcta.',
  },
  {
    q: '¿Qué parte del disco controla la electrónica y se comunica con la PC?',
    options: ['Plato', 'Placa controladora (PCB)', 'Imán', 'Tornillo'],
    correct: 1,
    info: 'La PCB gestiona el motor, el brazo y la transferencia de datos hacia la computadora.',
  },
];

const POINTS = 10;

export default function HddQuiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null); // opción elegida
  const [finished, setFinished] = useState(false);

  const q = QUESTIONS[index];
  const answered = selected !== null;

  const answer = (i) => {
    if (answered) return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + POINTS);
  };

  const next = () => {
    if (index + 1 >= QUESTIONS.length) {
      setFinished(true);
    } else {
      setIndex(index + 1);
      setSelected(null);
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  const max = QUESTIONS.length * POINTS;

  return (
    <div className="hq">
      <style>{css}</style>

      <main className="hq-card">
        <h1 className="hq-title">HDD Quiz</h1>

        {finished ? (
          <section className="hq-end">
            <p className="hq-score-big">{score} / {max}</p>
            <p>
              {score === max
                ? '¡Perfecto! Conocés el disco pieza por pieza.'
                : 'Buen intento. Probá de nuevo para llegar al puntaje máximo.'}
            </p>
            <button className="hq-btn" onClick={restart}>Jugar de nuevo</button>
          </section>
        ) : (
          <section>
            <div className="hq-top">
              <span>Pregunta {index + 1} de {QUESTIONS.length}</span>
              <span>{score} pts</span>
            </div>

            <h2 className="hq-question">{q.q}</h2>

            <div className="hq-options">
              {q.options.map((opt, i) => {
                let cls = 'hq-option';
                if (answered && i === q.correct) cls += ' is-correct';
                else if (answered && i === selected) cls += ' is-wrong';
                return (
                  <button key={i} className={cls} onClick={() => answer(i)} disabled={answered}>
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="hq-feedback">
                <p>
                  <strong>{selected === q.correct ? '¡Correcto!' : 'Casi.'}</strong> {q.info}
                </p>
                <button className="hq-btn" onClick={next}>
                  {index + 1 >= QUESTIONS.length ? 'Ver resultado' : 'Siguiente'}
                </button>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

