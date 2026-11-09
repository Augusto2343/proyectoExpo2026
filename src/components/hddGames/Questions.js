// Cada elemento define un componente del HDD que el jugador debe reconocer.
// zoom: { x, y, scale } coords dentro del viewBox 0 0 1000 700 del SVG.
// Para reordenar las preguntas, simplemente cambiá el orden de este array.

export const questions = [
  {
    id: 'platos',
    name: 'Platos magnéticos',
    highlightId: 'platters',
    question: 'Bueno, chavaloi... decime, ¿qué es esto?',
    options: [
      'Platos magnéticos',
      'Motor del husillo',
      'Brazo actuador',
      'Placa electrónica',
    ],
    correct: 0,
    explanation:
      'Los platos magnéticos son los discos donde se graban los datos. Giran a alta velocidad y están recubiertos de un material ferromagnético que almacena los bits.',
    hint: 'Son las superficies circulares y brillantes donde se almacena la información.',
    zoom: { x: 380, y: 320, scale: 2.0 },
  },
  {
    id: 'husillo',
    name: 'Motor del husillo',
    highlightId: 'spindle',
    question: 'Bueno, chavaloi... decime, ¿qué es esto?',
    options: [
      'Brazo actuador',
      'Motor del husillo',
      'Cabezales de lectura/escritura',
      'Actuador',
    ],
    correct: 1,
    explanation:
      'El motor del husillo es el que hace girar los platos a velocidades de hasta 7200 RPM o más, manteniéndolos estables y alineados.',
    hint: 'Es la pieza central que hace girar los platos sobre su eje.',
    zoom: { x: 380, y: 320, scale: 5.5 },
  },
  {
    id: 'brazo',
    name: 'Brazo actuador',
    highlightId: 'arm',
    question: 'Bueno, chavaloi... decime, ¿qué es esto?',
    options: [
      'Placa electrónica',
      'Motor del husillo',
      'Brazo actuador',
      'Platos magnéticos',
    ],
    correct: 2,
    explanation:
      'El brazo actuador posiciona los cabezales sobre las pistas correspondientes del plato. Se mueve con extrema precisión gracias al actuador de bobina móvil.',
    hint: 'Es la pieza alargada que se mueve para acercar los cabezales a la zona correcta del plato.',
    zoom: { x: 580, y: 315, scale: 3.2 },
  },
  {
    id: 'cabezales',
    name: 'Cabezales de lectura/escritura',
    highlightId: 'heads',
    question: 'Bueno, chavaloi... decime, ¿qué es esto?',
    options: [
      'Cabezales de lectura/escritura',
      'Actuador',
      'Motor del husillo',
      'Placa electrónica',
    ],
    correct: 0,
    explanation:
      'Los cabezales de lectura/escritura flotan a nanómetros de la superficie del plato sin tocarlo. Leen y escriben los datos magnéticamente.',
    hint: 'Están en la punta del brazo y son los que leen y escriben los datos en el plato.',
    zoom: { x: 400, y: 315, scale: 7.0 },
  },
  {
    id: 'actuador',
    name: 'Actuador',
    highlightId: 'voiceCoil',
    question: 'Bueno, chavaloi... decime, ¿qué es esto?',
    options: [
      'Placa electrónica',
      'Actuador',
      'Platos magnéticos',
      'Cabezales de lectura/escritura',
    ],
    correct: 1,
    explanation:
      'El actuador (o motor de bobina móvil) es el mecanismo electromagnético que mueve el brazo con gran rapidez y precisión, usando imanes y una bobina.',
    hint: 'Es el bloque redondo con imanes y bobina que impulsa el movimiento del brazo.',
    zoom: { x: 770, y: 320, scale: 4.0 },
  },
  {
    id: 'placa',
    name: 'Placa electrónica',
    highlightId: 'pcb',
    question: 'Bueno, chavaloi... decime, ¿qué es esto?',
    options: [
      'Placa electrónica',
      'Brazo actuador',
      'Actuador',
      'Motor del husillo',
    ],
    correct: 0,
    explanation:
      'La placa electrónica (PCB) controla el motor del husillo, el actuador y la lectura/escritura de los cabezales, comunicándose con la computadora.',
    hint: 'Es la placa verde con chips y componentes que está en la parte exterior del disco.',
    zoom: { x: 500, y: 575, scale: 3.2 },
  },
];

export const TOTAL_QUESTIONS = questions.length;
export const POINTS_PER_CORRECT = 100;
