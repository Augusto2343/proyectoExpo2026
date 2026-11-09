import { useState, useCallback, useEffect } from 'react';
import {
  HardDrive,
  Play,
  Trophy,
  RotateCcw,
  Home,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Lightbulb,
  Bot,
  Menu,
} from 'lucide-react';
import HddDiagram from './HddDiagram.jsx';
import { questions, TOTAL_QUESTIONS, POINTS_PER_CORRECT } from './Questions.js';
import './HddExplorer.css';
import { Link } from 'react-router-dom';

// ---- Estados de la pantalla ----
const SCREEN = { START: 'start', EXPLORING: 'exploring', RESULT: 'result', FINISH: 'finish' };

// Zoom de "cámara en reposo": muestra el HDD completo.
const REST_VIEW = { x: 500, y: 350, scale: 1 };

export default function HDDExplorer() {
  const [mode, setMode] = useState('read');
  const [menuOpen, setMenuOpen] = useState(false);

  const [screen, setScreen] = useState(SCREEN.START);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [cameraView, setCameraView] = useState(REST_VIEW);
  const [zooming, setZooming] = useState(false); // true mientras la cámara viaja

  const currentQuestion = questions[currentIndex];

  // Transición de cámara hacia el componente de la pregunta actual.
  const zoomToComponent = useCallback((q) => {
    setZooming(true);
    // pequeña espera para que se vea el paneo si viene de otra vista
    setCameraView({ x: q.zoom.x, y: q.zoom.y, scale: q.zoom.scale });
    window.setTimeout(() => setZooming(false), 1000);
  }, []);

  // Al entrar a una pregunta: resetear estado y hacer zoom al componente.
  useEffect(() => {
    if (screen !== SCREEN.EXPLORING) return;
    setSelectedOption(null);
    setAnswered(false);
    setIsCorrect(false);
    setShowHint(false);
    zoomToComponent(currentQuestion);
  }, [screen, currentIndex, currentQuestion, zoomToComponent]);

  const handleStart = () => {
    setScore(0);
    setCorrectCount(0);
    setCurrentIndex(0);
    setCameraView(REST_VIEW);
    setScreen(SCREEN.EXPLORING);
  };

  const handleAnswer = (optionIndex) => {
    if (answered) return;
    setSelectedOption(optionIndex);
    const correct = optionIndex === currentQuestion.correct;
    setIsCorrect(correct);
    setAnswered(true);
    if (correct) {
      setScore((s) => s + POINTS_PER_CORRECT);
      setCorrectCount((c) => c + 1);
      setScreen(SCREEN.RESULT);
    } else {
      setShowHint(true);
    }
  };

  const handleContinue = () => {
    // Alejar la cámara antes de pasar al siguiente componente.
    setCameraView(REST_VIEW);
    setZooming(true);
    window.setTimeout(() => {
      if (currentIndex + 1 >= TOTAL_QUESTIONS) {
        setScreen(SCREEN.FINISH);
      } else {
        setCurrentIndex((i) => i + 1);
        setScreen(SCREEN.EXPLORING);
      }
    }, 700);
  };

  const handleBackToMenu = () => {
    setScreen(SCREEN.START);
    setCameraView(REST_VIEW);
  };

  const handlePlayAgain = () => {
    setScore(0);
    setCorrectCount(0);
    setCurrentIndex(0);
    setCameraView(REST_VIEW);
    setScreen(SCREEN.EXPLORING);
  };

  // ---- Estilo dinámico para el transform de la "cámara" ----
  const stageStyle = {
    transform: `scale(${cameraView.scale}) translate(${
      (REST_VIEW.x - cameraView.x) / cameraView.scale
    }px, ${(REST_VIEW.y - cameraView.y) / cameraView.scale}px)`,
  };

  return (
    <>
      <header className="site-header">
        <Link
          className="brand"
          to={"/"}
          aria-label="Volver al inicio"
        >
          <span className="brand-mark">
            <HardDrive size={19} strokeWidth={2.5} />
          </span>
          <span>
            HDD <em>LAB</em>
          </span>
        </Link>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Navegación principal"
        >
          <Link className='linkHeader' to={"/"}>
           Volver al Inicio
          </Link>
              </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
    <div className="hdd-explorer">
      {/* Fondo decorativo */}
      <div className="hdd-bg-grid" />
      <div className="hdd-bg-glow" />

      {screen === SCREEN.START && <StartScreen onStart={handleStart} />}

      {(screen === SCREEN.EXPLORING || screen === SCREEN.RESULT) && (
        <GameScreen
          question={currentQuestion}
          index={currentIndex}
          score={score}
          selectedOption={selectedOption}
          answered={answered}
          isCorrect={isCorrect}
          showHint={showHint}
          onAnswer={handleAnswer}
          stageStyle={stageStyle}
          zooming={zooming}
        />
      )}

      {screen === SCREEN.RESULT && (
        <ResultOverlay
          question={currentQuestion}
          onContinue={handleContinue}
          isLast={currentIndex + 1 >= TOTAL_QUESTIONS}
        />
      )}

      {screen === SCREEN.FINISH && (
        <FinishScreen
          score={score}
          correctCount={correctCount}
          maxScore={TOTAL_QUESTIONS * POINTS_PER_CORRECT}
          onBackToMenu={handleBackToMenu}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
    </>

  );
}

// ============== Pantalla de inicio ==============
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

// ============== Pantalla de exploración ==============
function GameScreen({
  question,
  index,
  score,
  selectedOption,
  answered,
  isCorrect,
  showHint,
  onAnswer,
  stageStyle,
  zooming,
}) {
  return (
    <div className="screen screen-game">
      {/* HUD superior */}
      <div className="hud">
        <div className="hud-left">
          <HardDrive size={22} className="hud-icon" />
          <span className="hud-label">HDD EXPLORER</span>
        </div>
        <div className="hud-center">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${((index + (answered ? 1 : 0)) / TOTAL_QUESTIONS) * 100}%` }}
            />
          </div>
          <span className="progress-text">
            {index + 1} / {TOTAL_QUESTIONS}
          </span>
        </div>
        <div className="hud-right">
          <Trophy size={20} className="hud-icon" />
          <span className="score-value">{score}</span>
          <span className="score-label">pts</span>
        </div>
      </div>

      {/* Escenario con la "cámara" que hace zoom */}
      <div className="stage">
        <div
          className={`stage-camera ${zooming ? 'stage-camera--moving' : ''}`}
          style={stageStyle}
        >
          <HddDiagram highlightId={question.highlightId} />
        </div>
        {/* Vignette para dar profundidad al zoom */}
        <div className="stage-vignette" />
      </div>

      {/* Panel de pregunta */}
      <div className="question-panel">
        <div className="question-robot">
          <div className="robot-avatar">
            <Bot size={32} />
          </div>
        </div>
        <div className="question-body">
          <p className="question-text">{question.question}</p>
          <div className="options-grid">
            {question.options.map((opt, i) => {
              let cls = 'option-btn';
              if (answered && i === question.correct) cls += ' option-btn--correct';
              else if (answered && i === selectedOption && !isCorrect) cls += ' option-btn--wrong';
              else if (answered) cls += ' option-btn--disabled';
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => onAnswer(i)}
                  disabled={answered}
                >
                  <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                  <span className="option-text">{opt}</span>
                  {answered && i === question.correct && (
                    <CheckCircle2 size={18} className="option-icon" />
                  )}
                  {answered && i === selectedOption && !isCorrect && (
                    <XCircle size={18} className="option-icon" />
                  )}
                </button>
              );
            })}
          </div>

          {showHint && !isCorrect && (
            <div className="hint-box">
              <Lightbulb size={18} className="hint-icon" />
              <span>{question.hint}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============== Overlay de respuesta correcta ==============
function ResultOverlay({ question, onContinue, isLast }) {
  return (
    <div className="overlay">
      <div className="result-card result-card--success">
        <div className="result-glow" />
        <div className="result-icon-wrap">
          <CheckCircle2 size={56} className="result-icon" />
        </div>
        <h2 className="result-title">¡Esa es, wachín!</h2>
        <p className="result-component">{question.name}</p>
        <p className="result-explanation">{question.explanation}</p>
        <div className="result-points">+{POINTS_PER_CORRECT} pts</div>
        <button className="btn btn-primary" onClick={onContinue}>
          {isLast ? 'Ver resultados' : 'Continuar'}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

// ============== Pantalla final ==============
function FinishScreen({ score, correctCount, maxScore, onBackToMenu, onPlayAgain }) {
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
