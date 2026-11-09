// Ilustración vectorial (SVG) de un HDD abierto en vista superior.
// Cada componente identificable tiene un id que coincide con question.highlightId
// para poder resaltarlo durante la animación de zoom.
// Reemplazar el contenido de este componente por una <img> propia si tenés
// una foto real de un HDD abierto; solo mantené los ids en zonas superpuestas.

import { memo } from 'react';
import "./HddDiagram.css";
function HddDiagram({zoom, highlightId }) {
  return (

      <div className='imgDisk' style={{
        transform:`scale(${zoom})`
      }} alt="" >
      <svg
      viewBox="0 0 1024 780"
      xmlns="http://www.w3.org/2000/svg"
      className="hdd-svg"
      role="img"
      aria-label="Disco rígido HDD abierto"
    >
<defs>
<linearGradient id="plat" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f6f7f8"/><stop offset="55%" stopColor="#d9dbdf"/><stop offset="100%" stopColor="#b4b8be"/></linearGradient>
<radialGradient id="platSheen" cx="38%" cy="30%" r="75%"><stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/><stop offset="60%" stopColor="#ffffff" stopOpacity="0"/></radialGradient>
<linearGradient id="caseG" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#1b1f26"/><stop offset="100%" stopColor="#07090c"/></linearGradient>
<linearGradient id="sideG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#14171c"/><stop offset="100%" stopColor="#030405"/></linearGradient>
<linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#f2f3f5"/><stop offset="50%" stopColor="#c3c7cd"/><stop offset="100%" stopColor="#8b9098"/></linearGradient>
<linearGradient id="metalDark" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#b9bdc4"/><stop offset="100%" stopColor="#6d727a"/></linearGradient>
<radialGradient id="screwG" cx="40%" cy="35%" r="70%"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#b5b9bf"/></radialGradient>
<linearGradient id="flex" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#e0b95c"/><stop offset="100%" stopColor="#a97d2a"/></linearGradient>
<clipPath id="platClip"><ellipse cx="570" cy="300" rx="188" ry="172" transform="rotate(22 570 300)"/></clipPath>
</defs>
 
<path d="M80 495 L548 718 L930 190 L930 226 L560 752 L86 536 Z" fill="url(#sideG)" stroke="#000000bb" strokeWidth="2"/>

<path d="M495 26 L930 186 L548 718 L80 495 Z" fill="url(#caseG)" stroke="#2b313aa7" strokeWidth="3" strokeLinejoin="round"/>

<path d="M505 58 L888 200 L545 668 L118 482 Z" fill="#05070a9f" stroke="#222831b0" strokeWidth="2"/>
<path d="M450 60 L505 58 L430 130 Z" fill="#12161cae"/>
 
<ellipse cx="505" cy="38" rx="13" ry="11.0" fill="url(#screwG)" stroke="#9aa0a8" strokeWidth="1.5"/><ellipse cx="505" cy="38" rx="6.5" ry="5.5" fill="#7a8089"/><ellipse cx="505" cy="38" rx="3.2" ry="2.6" fill="#2a2d33"/><ellipse cx="893" cy="190" rx="13" ry="11.0" fill="url(#screwG)" stroke="#9aa0a8" strokeWidth="1.5"/><ellipse cx="893" cy="190" rx="6.5" ry="5.5" fill="#7a8089"/><ellipse cx="893" cy="190" rx="3.2" ry="2.6" fill="#2a2d33"/><ellipse cx="118" cy="485" rx="13" ry="11.0" fill="url(#screwG)" stroke="#9aa0a8" strokeWidth="1.5"/><ellipse cx="118" cy="485" rx="6.5" ry="5.5" fill="#7a8089"/><ellipse cx="118" cy="485" rx="3.2" ry="2.6" fill="#2a2d33"/><ellipse cx="525" cy="678" rx="13" ry="11.0" fill="url(#screwG)" stroke="#9aa0a8" strokeWidth="1.5"/><ellipse cx="525" cy="678" rx="6.5" ry="5.5" fill="#7a8089"/><ellipse cx="525" cy="678" rx="3.2" ry="2.6" fill="#2a2d33"/><ellipse cx="714" cy="445" rx="12" ry="10.2" fill="url(#screwG)" stroke="#9aa0a8" strokeWidth="1.5"/><ellipse cx="714" cy="445" rx="6.0" ry="5.0" fill="#7a8089"/><ellipse cx="714" cy="445" rx="3.0" ry="2.4" fill="#2a2d33"/><ellipse cx="873" cy="172" rx="7" ry="6.0" fill="url(#screwG)" stroke="#9aa0a8" strokeWidth="1.5"/><ellipse cx="873" cy="172" rx="3.5" ry="2.9" fill="#7a8089"/><ellipse cx="873" cy="172" rx="1.8" ry="1.4" fill="#2a2d33"/><ellipse cx="300" cy="244" rx="6" ry="5.1" fill="url(#screwG)" stroke="#9aa0a8" strokeWidth="1.5"/><ellipse cx="300" cy="244" rx="3.0" ry="2.5" fill="#7a8089"/><ellipse cx="300" cy="244" rx="1.5" ry="1.2" fill="#2a2d33"/>
 
<g id="pcb" className={highlightId === 'pcb' ? 'comp-highlight' : 'comp-normal'}>
<g transform="translate(108 520) rotate(25.5)">
<rect x="0" y="0" width="250" height="22" rx="3" fill="#0b0d11" stroke="#2f3640" strokeWidth="2"/>
<rect x="34" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="51" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="68" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="85" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="102" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="119" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="136" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="153" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="170" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="187" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="204" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="221" y="3" width="9" height="16" rx="1" fill="#c9a24a" stroke="#6e5a22" strokeWidth="0.8"/>
<rect x="124" y="0" width="3" height="22" fill="#1a1e25"/>
</g>
</g>
 
<g id="platters" className={highlightId === 'platters' ? 'comp-highlight' : 'comp-normal'}>
<ellipse cx="574" cy="310" rx="188" ry="172" transform="rotate(22 574 310)" fill="#4a4e55" opacity="0.55"/>
<ellipse cx="570" cy="300" rx="188" ry="172" transform="rotate(22 570 300)" fill="url(#plat)" stroke="#8d9299" strokeWidth="3"/>
<g clipPath="url(#platClip)">
<ellipse cx="500" cy="230" rx="150" ry="100" transform="rotate(22 500 230)" fill="url(#platSheen)"/>
<ellipse cx="610" cy="350" rx="140" ry="90" transform="rotate(22 610 350)" fill="#8f949b" opacity="0.18"/>
</g>
<ellipse cx="570" cy="300" rx="164" ry="150" transform="rotate(22 570 300)" fill="none" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="1"/>
<ellipse cx="570" cy="300" rx="102" ry="94" transform="rotate(22 570 300)" fill="none" stroke="#9fa4ab" strokeOpacity="0.35" strokeWidth="1"/>
<ellipse cx="570" cy="300" rx="178" ry="162" transform="rotate(22 570 300)" fill="none" stroke="#6f747b" strokeOpacity="0.5" strokeWidth="1"/>
</g>
 
<g id="spindle" className={highlightId === 'spindle' ? 'comp-highlight' : 'comp-normal'}>
<circle cx="570" cy="303" r="74" fill="#8c9198"/>
<circle cx="570" cy="300" r="72" fill="url(#metal)" stroke="#7b8088" strokeWidth="2"/>
<circle cx="570" cy="300" r="64" fill="#e6e8ea" stroke="#9aa0a7" strokeWidth="1.5"/>
<circle cx="618.2" cy="319.5" r="8" fill="url(#screwG)" stroke="#8d9299" strokeWidth="1"/><circle cx="618.2" cy="319.5" r="3.5" fill="#6b7078"/>
<circle cx="590.3" cy="347.9" r="8" fill="url(#screwG)" stroke="#8d9299" strokeWidth="1"/><circle cx="590.3" cy="347.9" r="3.5" fill="#6b7078"/>
<circle cx="550.5" cy="348.2" r="8" fill="url(#screwG)" stroke="#8d9299" strokeWidth="1"/><circle cx="550.5" cy="348.2" r="3.5" fill="#6b7078"/>
<circle cx="522.1" cy="320.3" r="8" fill="url(#screwG)" stroke="#8d9299" strokeWidth="1"/><circle cx="522.1" cy="320.3" r="3.5" fill="#6b7078"/>
<circle cx="521.8" cy="280.5" r="8" fill="url(#screwG)" stroke="#8d9299" strokeWidth="1"/><circle cx="521.8" cy="280.5" r="3.5" fill="#6b7078"/>
<circle cx="549.7" cy="252.1" r="8" fill="url(#screwG)" stroke="#8d9299" strokeWidth="1"/><circle cx="549.7" cy="252.1" r="3.5" fill="#6b7078"/>
<circle cx="589.5" cy="251.8" r="8" fill="url(#screwG)" stroke="#8d9299" strokeWidth="1"/><circle cx="589.5" cy="251.8" r="3.5" fill="#6b7078"/>
<circle cx="617.9" cy="279.7" r="8" fill="url(#screwG)" stroke="#8d9299" strokeWidth="1"/><circle cx="617.9" cy="279.7" r="3.5" fill="#6b7078"/>
<circle cx="570" cy="300" r="30" fill="url(#metalDark)" stroke="#6b7078" strokeWidth="2"/>
<circle cx="570" cy="300" r="19" fill="#d4d7db" stroke="#7b8088" strokeWidth="1.5"/>
<circle cx="570" cy="300" r="7" fill="#555a62"/>
</g>
<g id="voiceCoil" className={highlightId === 'voiceCoil' ? 'comp-highlight' : 'comp-normal'}>
<path d="M268 520 L405 498 L420 575 L300 604 Z" fill="#2a2e35" stroke="#555b64" strokeWidth="2"/>
<path d="M300 604 L420 575 L420 596 L304 626 Z" fill="#14171b"/>
<path d="M208 440 L232 338 L284 304 L338 330 L398 420 L424 520 L402 582 L322 548 L266 504 L206 474 Z" fill="url(#metal)" stroke="#6d727a" strokeWidth="2.5" strokeLinejoin="round"/>
<path d="M232 440 L246 352 L286 326 L324 346 L372 424" fill="none" stroke="#fafafa" strokeOpacity="0.8" strokeWidth="3"/>
<path d="M240 430 C236 380 250 346 278 336 C300 340 316 360 340 400 L360 470 C330 460 262 456 240 430 Z" fill="#d7dade" stroke="#8d9299" strokeWidth="2"/>
<ellipse cx="286" cy="326" rx="9" ry="7" fill="#eef0f2" stroke="#7b8088" strokeWidth="1.5"/>
<rect x="300" y="381" width="24" height="24" fill="#fff" stroke="#222" strokeWidth="1" transform="rotate(8 312 393)"/>
<path d="M303 384h5v5h-5zM315 384h6v6h-6zM303 397h5v5h-5zM312 394h4v4h-4zM318 399h4v4h-4z" fill="#111" transform="rotate(8 312 393)"/>
<text x="330" y="403" fontFamily="monospace" fontSize="11" fill="#444" transform="rotate(8 330 403)">F507</text>
<text x="300" y="418" fontFamily="monospace" fontSize="10" fill="#555" transform="rotate(10 300 418)">280A</text>
<path d="M330 540 L400 556 L420 530 L360 518 Z" fill="url(#metalDark)" stroke="#5a5f67" strokeWidth="1.5"/>
<ellipse cx="344" cy="540" rx="9" ry="7" fill="#e8eaec" stroke="#7b8088"/>
</g>
 
<g id="arm" className={highlightId === 'arm' ? 'comp-highlight' : 'comp-normal'} transform="translate(388 434) scale(0.7) translate(-388 -434)">
<path d="M420 408 L614 452 L646 482 L440 478 Z" fill="url(#metal)" stroke="#7b8088" strokeWidth="2" strokeLinejoin="round"/>
<ellipse cx="390" cy="442" rx="52" ry="34" transform="rotate(12 390 442)" fill="#4a4f57"/>
<ellipse cx="388" cy="434" rx="50" ry="33" transform="rotate(12 388 434)" fill="url(#metal)" stroke="#7b8088" strokeWidth="2"/>
<ellipse cx="388" cy="434" rx="28" ry="18" transform="rotate(12 388 434)" fill="#e9ebed" stroke="#9aa0a7" strokeWidth="1.5"/>
<ellipse cx="376" cy="432" rx="11" ry="8" transform="rotate(12 376 432)" fill="#ccd0d4" stroke="#6b7078" strokeWidth="1.5"/>
<ellipse cx="376" cy="432" rx="4.5" ry="3.2" transform="rotate(12 376 432)" fill="#555a62"/>
</g>

<g id="heads" className={highlightId === 'heads' ? 'comp-highlight' : 'comp-normal'} transform="translate(388 434) scale(0.7) translate(-388 -434)">
<path d="M402 466.0 L600 480.0 L612 484.0 L600 487.0 L402 476.0 Z" fill="#14171c" stroke="#aeb4bc" strokeWidth="1.2"/>
<path d="M560 476.0 L612 481.0" stroke="#d7dade" strokeWidth="1.4"/>
<path d="M402 478.5 L600 492.5 L612 496.5 L600 499.5 L402 488.5 Z" fill="#14171c" stroke="#aeb4bc" strokeWidth="1.2"/>
<path d="M560 488.5 L612 493.5" stroke="#d7dade" strokeWidth="1.4"/>
<path d="M402 491.0 L600 505.0 L612 509.0 L600 512.0 L402 501.0 Z" fill="#14171c" stroke="#aeb4bc" strokeWidth="1.2"/>
<path d="M560 501.0 L612 506.0" stroke="#d7dade" strokeWidth="1.4"/>
<path d="M402 503.5 L600 517.5 L612 521.5 L600 524.5 L402 513.5 Z" fill="#14171c" stroke="#aeb4bc" strokeWidth="1.2"/>
<path d="M560 513.5 L612 518.5" stroke="#d7dade" strokeWidth="1.4"/>
<path d="M402 516.0 L600 530.0 L612 534.0 L600 537.0 L402 526.0 Z" fill="#14171c" stroke="#aeb4bc" strokeWidth="1.2"/>
<path d="M560 526.0 L612 531.0" stroke="#d7dade" strokeWidth="1.4"/>
<path d="M402 528.5 L600 542.5 L612 546.5 L600 549.5 L402 538.5 Z" fill="#14171c" stroke="#aeb4bc" strokeWidth="1.2"/>
<path d="M560 538.5 L612 543.5" stroke="#d7dade" strokeWidth="1.4"/>
<path d="M628 446 L654 438 L662 546 L636 556 Z" fill="url(#flex)" stroke="#6e5a22" strokeWidth="1.5"/>
<path d="M640 452 L650 448 L656 540 L646 544" fill="none" stroke="#f3d98f" strokeWidth="1" opacity="0.8"/>
<path d="M440 540 L452 556 L520 580 L570 590 L560 600 L500 592 L430 560 Z" fill="url(#metalDark)" stroke="#5a5f67" strokeWidth="1.5"/>
<path d="M470 596 L560 612 L560 630 L470 612 Z" fill="#9ea3aa" stroke="#6b7078" strokeWidth="1"/>
</g>
 
    </svg>
   
    </div>
  );
}

export default memo(HddDiagram);
