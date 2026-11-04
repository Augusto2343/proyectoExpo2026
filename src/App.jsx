import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, BookOpen, Cable, CircleDot, Cpu, Download, HardDrive, Menu, Play, RotateCw, Search, X, Zap } from 'lucide-react';


const components = [
  { id: 'platters', number: '01', title: 'Platos magnéticos', text: 'Superficies donde se almacenan los datos. Giran a gran velocidad y están organizadas en pistas y sectores.', icon: CircleDot },
  { id: 'heads', number: '02', title: 'Cabezales', text: 'Leen y escriben pequeños cambios de magnetización sin tocar la superficie del plato.', icon: Search },
  { id: 'arm', number: '03', title: 'Brazo actuador', text: 'Transporta los cabezales y los posiciona sobre la pista exacta que contiene la información.', icon: Zap },
  { id: 'motor', number: '04', title: 'Motor', text: 'Hace girar los platos a 5400 o 7200 revoluciones por minuto, según el modelo.', icon: RotateCw },
  { id: 'board', number: '05', title: 'Placa electrónica', text: 'Controla el disco y traduce las señales magnéticas para comunicarse con la computadora.', icon: Cpu },
];

const uses = [
  { title: 'Escritorio', tag: 'USO GENERAL', description: 'Una opción equilibrada para documentos, juegos, archivos y contenido multimedia.', metric: 'Hasta 8 TB', color: 'red' },
  { title: 'NAS', tag: 'CONECTADO A RED', description: 'Preparado para funcionar durante largos períodos junto a varios discos y configuraciones RAID.', metric: 'Hasta 32 TB', color: 'blue' },
  { title: 'Vigilancia', tag: 'ESCRITURA CONTINUA', description: 'Diseñado para grabar cámaras de seguridad de forma constante durante largos períodos.', metric: '24 / 7', color: 'amber' },
  { title: 'Enterprise', tag: 'DATA CENTER', description: 'El tanque de guerra del almacenamiento: alta confiabilidad y cargas de trabajo intensas.', metric: '550 TB/año', color: 'green' },
];

const timeline = [
  { year: '1956', title: 'El comienzo', text: 'IBM presenta el primer disco duro: una máquina enorme con apenas 5 MB.' },
  { year: '1980s', title: 'Llega a las PC', text: 'El HDD empieza a entrar en computadoras personales y el almacenamiento se vuelve cotidiano.' },
  { year: '2003', title: 'La era SATA', text: 'Cables más finos y conexiones seriales reemplazan progresivamente a IDE/PATA.' },
  { year: 'Hoy', title: 'Terabytes para todos', text: 'Los HDD ofrecen grandes capacidades y familias especializadas para cada necesidad.' },
];

function App() {
  const [activeComponent, setActiveComponent] = useState('platters');
  const [activeUse, setActiveUse] = useState(0);
  const [mode, setMode] = useState('read');
  const [menuOpen, setMenuOpen] = useState(false);

  const selectedComponent = components.find((component) => component.id === activeComponent) ?? components[0];
  const SelectedIcon = selectedComponent.icon;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="Volver al inicio"
        >
          <span className="brand-mark">
            <HardDrive size={19} strokeWidth={2.5} />
          </span>
          <span>
            HDD <em>LAB</em>
          </span>
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Navegación principal"
        >
          <button onClick={() => scrollToSection("components")}>Componentes</button>
          <button onClick={() => scrollToSection("how-it-works")}>Cómo funciona</button>
          <button onClick={() => scrollToSection("evolution")}>Evolución</button>
          <button onClick={() => scrollToSection("resources")}>Recursos</button>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse-dot" /> EXPOSICIÓN ESCOLAR · TECNOLOGÍA
            </div>
            <h1>
              El laboratorio
              <br />
              <span>de los discos</span> duros.
            </h1>
            <p className="hero-intro">
              Una exploración visual por el interior de un HDD: sus partes, sus movimientos y la
              ciencia que convierte el magnetismo en tus archivos.
            </p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => scrollToSection("components")}
              >
                Comenzar recorrido <ArrowRight size={17} />
              </button>
              <button className="text-button" onClick={() => scrollToSection("resources")}>
                <Play size={16} fill="currentColor" /> Ver la exposición
              </button>
            </div>
            <div className="hero-facts">
              <span>
                <strong>01</strong> tecnología magnética
              </span>
              <span>
                <strong>02</strong> partes móviles
              </span>
              <span>
                <strong>03</strong> terabytes de capacidad
              </span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Ilustración de un disco duro girando">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="drive-illustration">
              <div className="drive-topline">
                <span>HDD / 3.5</span>
                <span className="status-light" />
              </div>
              <div className="platter platter-back">
                <div className="platter-ring" />
              </div>
              <div className="platter platter-front">
                <div className="platter-ring" />
                <div className="platter-hub" />
              </div>
              <div className="drive-arm">
                <div className="arm-head" />
              </div>
              <div className="drive-label">
                <span>MAGNETIC</span>
                <strong>STORAGE</strong>
                <small>7200 RPM · SATA III</small>
              </div>
            </div>
            <div className="visual-caption">
              <span className="caption-line" /> Plato magnético <span>01 / 05</span>
            </div>
          </div>
          <button
            className="scroll-cue"
            onClick={() => scrollToSection("definition")}
            aria-label="Bajar a la siguiente sección"
          >
            <ArrowDown size={17} />
          </button>
        </section>

        <section id="definition" className="definition section-wrap">
          <div className="section-kicker">01 / LA IDEA CENTRAL</div>
          <div className="definition-grid">
            <h2>
              ¿Qué guarda un
              <br />
              <span>disco duro?</span>
            </h2>
            <div>
              <p className="lead">
                Un HDD conserva tus datos incluso cuando la computadora está apagada. En su
                interior, pequeños cambios magnéticos representan fotografías, programas y
                documentos.
              </p>
              <p>
                El secreto está en la combinación precisa de tres movimientos: los platos giran, el
                brazo se desplaza y los cabezales leen o escriben la información.
              </p>
            </div>
          </div>
          <div className="data-strip">
            <div>
              <span className="data-value">5 TB</span>
              <span>capacidad aproximada</span>
            </div>
            <div>
              <span className="data-value">7.200</span>
              <span>revoluciones por minuto</span>
            </div>
            <div>
              <span className="data-value">100–200</span>
              <span>MB/s en uso doméstico</span>
            </div>
          </div>
        </section>

        <section id="components" className="components-section section-wrap dark-panel">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / BAJO LA CARCASA</div>
              <h2>
                Conocé sus
                <br />
                <span>componentes.</span>
              </h2>
            </div>
            <p>
              Seleccioná una pieza del diagrama para descubrir qué función cumple dentro del
              sistema.
            </p>
          </div>
          <div className="component-lab">
            <div className="component-diagram">
              <div className="diagram-grid" />
              <div className="diagram-drive">
                <div className="diagram-platter">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="diagram-arm">
                  <div />
                </div>
                <div className="diagram-board" />
              </div>
              <div className="diagram-tag tag-platter">01</div>
              <div className="diagram-tag tag-head">02</div>
              <div className="diagram-tag tag-arm">03</div>
              <div className="diagram-tag tag-motor">04</div>
            </div>
            <div className="component-list">
              {components.map((component) => {
                const Icon = component.icon;
                return (
                  <button
                    key={component.id}
                    className={
                      activeComponent === component.id ? "component-item active" : "component-item"
                    }
                    onClick={() => setActiveComponent(component.id)}
                  >
                    <span className="component-number">{component.number}</span>
                    <span className="component-icon">
                      <Icon size={17} />
                    </span>
                    <span className="component-title">{component.title}</span>
                    <ArrowRight size={15} className="component-arrow" />
                  </button>
                );
              })}
              <div className="component-detail">
                <div className="detail-icon">
                  <SelectedIcon size={22} />
                </div>
                <div>
                  <h3>{selectedComponent.title}</h3>
                  <p>{selectedComponent.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-section section-wrap">
          <div className="section-kicker">03 / EN MOVIMIENTO</div>
          <div className="section-heading how-heading">
            <h2>
              Así encuentra
              <br />
              <span>tus datos.</span>
            </h2>
            <p>
              Un proceso coreografiado a gran velocidad. Elegí una operación para ver cómo cambia el
              trabajo del cabezal.
            </p>
          </div>
          <div className="operation-switcher">
            <button className={mode === "read" ? "active" : ""} onClick={() => setMode("read")}>
              <Search size={16} /> Leer información
            </button>
            <button className={mode === "write" ? "active" : ""} onClick={() => setMode("write")}>
              <Zap size={16} /> Escribir información
            </button>
          </div>
          <div className={mode === "read" ? "motion-card read-mode" : "motion-card write-mode"}>
            <div className="motion-copy">
              <span className="motion-label">OPERACIÓN ACTIVA</span>
              <h3>{mode === "read" ? "Leer un archivo" : "Escribir un archivo"}</h3>
              <p>
                {mode === "read"
                  ? "El cabezal detecta los cambios magnéticos de una pista y los transforma en datos que la computadora puede interpretar."
                  : "El cabezal modifica la orientación magnética de pequeñas zonas del plato para guardar una nueva secuencia de datos."}
              </p>
              <div className="motion-steps">
                <span className="done">
                  01 <small>Girar</small>
                </span>
                <span className="done">
                  02 <small>Posicionar</small>
                </span>
                <span className="current">
                  03 <small>{mode === "read" ? "Detectar" : "Modificar"}</small>
                </span>
              </div>
            </div>
            <div className="motion-visual">
              <div className="motion-platter">
                <div className="scan-line" />
                <div className="motion-center" />
              </div>
              <div className="motion-arm">
                <div className="motion-head" />
              </div>
              <div className="motion-bit bit-one" />
              <div className="motion-bit bit-two" />
              <div className="motion-bit bit-three" />
            </div>
          </div>
        </section>

        <section id="uses" className="uses-section dark-panel">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="section-kicker">04 / UN DISCO, MUCHOS TRABAJOS</div>
                <h2>
                  Elegí el escenario
                  <br />
                  <span>adecuado.</span>
                </h2>
              </div>
              <p>
                No todos los HDD trabajan igual. Sus familias se diseñan según la cantidad de horas,
                datos y esfuerzo que deben soportar.
              </p>
            </div>
            <div className="use-tabs">
              {uses.map((use, index) => (
                <button
                  key={use.title}
                  className={activeUse === index ? `use-tab active ${use.color}` : "use-tab"}
                  onClick={() => setActiveUse(index)}
                >
                  <span>0{index + 1}</span>
                  {use.title}
                  <ArrowRight size={15} />
                </button>
              ))}
            </div>
            <div className={`use-feature ${uses[activeUse].color}`}>
              <div className="use-feature-number">0{activeUse + 1}</div>
              <div>
                <span className="tag">{uses[activeUse].tag}</span>
                <h3>HDD para {uses[activeUse].title.toLowerCase()}</h3>
                <p>{uses[activeUse].description}</p>
              </div>
              <div className="feature-metric">
                <strong>{uses[activeUse].metric}</strong>
                <span>referencia destacada</span>
              </div>
            </div>
          </div>
        </section>

        <section id="evolution" className="evolution section-wrap">
          <div className="section-kicker">05 / UNA TECNOLOGÍA QUE EVOLUCIONA</div>
          <div className="section-heading">
            <h2>
              Del tamaño de una
              <br />
              <span>habitación al bolsillo.</span>
            </h2>
            <p>
              La historia del HDD es una historia de miniaturización, capacidad y conexiones cada
              vez más eficientes.
            </p>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div
                className={
                  index === timeline.length - 1 ? "timeline-item current" : "timeline-item"
                }
                key={item.year}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resources" className="resources dark-panel">
          <div className="section-wrap resources-grid">
            <div>
              <div className="section-kicker">06 / PARA SEGUIR EXPLORANDO</div>
              <h2>
                La exposición
                <br />
                <span>continúa.</span>
              </h2>
              <p>
                Repasá lo aprendido con el video completo y también aprende acerca de los SSD.
              </p>
              <div className="resource-buttons">
                <a href='https://youtu.be/cuGKjwwqgQk?si=gJk44cbR6ZdXuoE3' className="button button-primary">
                  <Play size={16} fill="currentColor" /> Ver video
                </a>
                <a href='/documents/elViajeDeTusDatos.pdf' download="folleto.pdf" className="button button-outline">
                  <Download size={16} /> Descargar PDF
                </a>
              </div>
            </div>
            <div className="video-card">
              <div className="video-screen">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/cuGKjwwqgQk?si=ZKEE6DPP892iUiwT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  
                <span className="video-time">05:55</span>
                <span className="video-label">HDD LAB / EXPOSICIÓN</span>
                </iframe>
                </div>
              <div className="video-meta">
                <span>
                </span>
                <span>HD</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <span>
          HDD <em>LAB</em>
        </span>
        <span>Una exposición sobre el almacenamiento magnético</span>
        <span>2026 · Tecnología explicada</span>
      </footer>
    </div>
  );
}
export default App;