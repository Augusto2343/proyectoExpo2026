import { useState } from 'react';
import HddDiagram from './HddDiagram.jsx'; // tu SVG actual, sin cambios
import "./HddZoomQuiz.css"
import { useNavigate } from 'react-router-dom';
import { Bot, HardDrive, Home, Play, RotateCcw, Trophy } from 'lucide-react';
// Coordenadas (x, y) en el viewBox del SVG (1024 x 780) y nivel de zoom de cada pieza.
const QUESTIONS = [
  {
    id: 'platters',
    zoom: { x: 500, y: 340, s: 1.6, z:4},
    q: '¿Qué componente gira para que se pueda guardar información?',
    options: ['Plato', 'Placa controladora', 'Tornillo', 'Cable flex'],
    correct: 0,
    info: 'Los platos son discos magnéticos donde se graban los datos.',
  },
  {
    id: 'spindle',
    zoom: { x: 510, y: 350, s: 2.4 , z:8},
    q: '¿Qué pieza hace girar los platos?',
    options: ['Cabezal', 'Motor', 'Brazo actuador', 'Conector SATA'],
    correct: 1,
    info: 'El motor spindle mantiene los platos girando a velocidad constante.',
  },
  {
    id: 'heads',
    zoom: { x: 510, y: 450, s: 2.6 , z:10},
    q: '¿Qué componente lee y escribe los datos sobre el plato?',
    options: ['Placa PCB', 'Spindle', 'Cabezal de lectura/escritura', 'Carcasa'],
    correct: 2,
    info: 'El cabezal flota a nanómetros del plato y lee o magnetiza cada bit.',
  },
  {
    id: 'voiceCoil',
    zoom: { x: 300, y: 460, s: 2.2 , z:10},
    q: '¿Qué mueve a los cabezales con precisión sobre el plato?',
    options: ['Un ventilador', 'Bobina de voz con imanes', 'El cable de datos', 'La fuente'],
    correct: 1,
    info: 'La bobina de voz empuja el brazo hacia la pista correcta.',
  },
  {
    id: 'pcb',
    zoom: { x: 300, y: 550, s: 2.4 , z:10},
    q: '¿De donde el disco HDD recibe y envía datos y es suministrado de energía ?',
    options: ['Bus serial Universal', 'Batería', 'Puertos SATA, SAS o IDE', 'Placa controladora'],
    correct: 2,
    info: 'La PCB maneja el motor, el brazo y la transferencia de datos.',
  },
];

const POINTS = 10;
const VIEWBOX = { w: 1024, h: 780 };
const REST = { x: VIEWBOX.w / 2, y: VIEWBOX.h / 2, s: 1 };
const TOTAL_QUESTIONS = 5;
function StartScreen({ onStart }) {
  return (
    <>
        

    <div className="screen screen-start">
      <div className="start-content">
        <div className="start-left">
          <div className="title-badge">
            <HardDrive size={28} className="title-badge-icon" />
            <span>EXPOSICIÓN TÉCNICA</span>
          </div>
          <h1 className="game-title">
            HDD <span className="title-accent">EXPLORER</span>
          </h1>
          <p className="game-subtitle">¿Te animás a descubrir sus componentes?</p>
          <button className="btn btn-primary btn-lg" onClick={onStart}>
            <Play size={20} />
            Comenzar exploración
          </button>
        </div>

        <div className="start-right">
          <div className="hdd-preview">
            <HddDiagram highlightId={null} />
          </div>
          <div className="mascot">
            <div className="mascot-bot">
              <Bot size={48} className="mascot-icon" />
            </div>
            <div className="mascot-bubble">¡Hola! Soy BIT-7. ¡Vamos a explorar el disco!</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function FinishScreen({ score, maxScore, onBackToMenu, onPlayAgain }) {
  const correctCount = score / 10;
  const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
  let message;
  if (correctCount === TOTAL_QUESTIONS) {
    message = '¡Perfecto! Conocés cada pieza del disco como un ingeniero.';
  } else if (correctCount >= TOTAL_QUESTIONS - 2) {
    message = '¡Muy bien! Tenés un gran dominio de los componentes del HDD.';
  } else {
    message = '¡Buen intento! Volvé a explorar el disco para dominar todos los componentes.';
  }

  return (
    <div className="screen screen-finish">
      <div className="finish-content">
        <div className="trophy-wrap">
          <div className="trophy-glow" />
          <Trophy size={80} className="trophy-icon" />
        </div>
        <h1 className="finish-title">
          ¡HDD <span className="title-accent">MASTER!</span>
        </h1>
        <div className="finish-stats">
          <div className="stat-card">
            <span className="stat-value">{score}</span>
            <span className="stat-label">Puntos</span>
            <span className="stat-sub">de {maxScore}</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{correctCount}/{TOTAL_QUESTIONS}</span>
            <span className="stat-label">Correctas</span>
            <span className="stat-sub">{percentage}% de acierto</span>
          </div>
        </div>
        <p className="finish-message">{message}</p>
        <div className="finish-buttons">
          <button className="btn btn-secondary" onClick={onBackToMenu}>
            <Home size={18} />
            Volver al menú
          </button>
          <button className="btn btn-primary" onClick={onPlayAgain}>
            <RotateCcw size={18} />
            Jugar nuevamente
          </button>
        </div>
      </div>
    </div>
  );
}




 function GameStarted() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);  
  const q = QUESTIONS[index];
  const answered = selected !== null;
  const max = QUESTIONS.length * POINTS;
    const [zoom,setZoom] = useState(QUESTIONS[index].zoom.z);  
  const highlightZone = QUESTIONS[index].id
  // La cámara se calcula a partir de la pregunta actual (sin estado extra).
  const cam = finished ? REST : q.zoom;
  const tx = 50 - cam.s * (cam.x / VIEWBOX.w) * 100;
  const ty = 50 - cam.s * (cam.y / VIEWBOX.h) * 100;
  const navigate = useNavigate();
  const answer = (i) => {
    if (answered) return;
    setSelected(i);
    setZoom(4)
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
  const goBackToMenu = () =>{
    navigate("/");
  }
  return (
    <>

    <div className="hz">

      <header className="hz-head">
        <h1>HDD Explorer</h1>
        <span>{score} pts</span>
      </header>

      {/* Escenario: el contenedor recorta y el interior se mueve con transform */}
      <div className="hz-stage">
        <div
          className="hz-camera"
          style={{ transform: `translate(${tx}%, ${ty}%) scale(${cam.s})` }}
        >
          <HddDiagram zoom={zoom} highlightId={highlightZone} />
        </div>
      </div>

      <section className={`hz-panel ${finished ? "hz-panelFinished" : ""}`}>
        {finished ? (
          <FinishScreen score={score} maxScore={50}  onBackToMenu={goBackToMenu} onPlayAgain={restart}/>
        ) : (
          <>
            <p className="hz-count">Pregunta {index + 1} de {QUESTIONS.length}</p>
            <h2 className="hz-q">{q.q}</h2>

            <div className="hz-options">
              {q.options.map((opt, i) => {
                let cls = 'hz-opt';
                if (answered && i === q.correct) cls += ' ok';
                else if (answered && i === selected) cls += ' bad';
                return (
                  <button key={i} className={cls} onClick={() => answer(i)} disabled={answered}>
                    {opt}
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className="hz-fb">
                <p>
                  <strong>{selected === q.correct ? '¡Correcto!' : 'Casi.'}</strong> {q.info}
                </p>
                <button className="hz-btn" onClick={next}>
                  {index + 1 >= QUESTIONS.length ? 'Ver resultado' : 'Siguiente'}
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
    </>
  );
}
export default function HddZoomQuiz () {
  const [game, setGame] = useState(false);
  const StartGame = () =>{
      setGame(true);
  }
  return(
    <>
        {
          game ? <GameStarted/> : 
          <>
          <StartScreen onStart={StartGame}/>
          </>
        }
    </>
  )
} 