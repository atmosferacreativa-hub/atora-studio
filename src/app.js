const funnelStages = [
  ['Atrae', 'Landing de curso con SEO y marketing conectado — cada visita entra directo al CRM, no a una hoja de cálculo aparte.'],
  ['Matricula', 'Inscripción y pago en el mismo sitio, con seguimiento automático si alguien empieza y no termina.'],
  ['Enseña', 'Cursos por programa, contenido programado, videollamadas y material interactivo con H5P.'],
  ['Evalúa', 'Rúbricas, coevaluación entre pares y SpeedGrade para calificar rápido sin perder criterio.'],
  ['Acompaña', 'Alertas académicas tempranas y seguimiento por WhatsApp y Telegram — no solo por correo.'],
  ['Certifica', 'Certificados por reglas de elegibilidad y un portafolio exportable del desempeño real.'],
];

const renderFunnel = () => `
  <div class="funnel-track">
    ${funnelStages.map((s, i) => `
      <div class="funnel-stage">
        <b>${String(i + 1).padStart(2, '0')}</b>
        <strong>${s[0]}</strong>
        <p>${s[1]}</p>
      </div>`).join('')}
  </div>`;

const copilots = {
  docente: {
    label: 'Docente', tag: 'Planifica, investiga y crea material de evaluación',
    items: [
      ['Planificar un curso', 'Propone una estructura curricular de partida a partir del programa.'],
      ['Mejorar una lección', 'Revisa lo ya escrito y sugiere mejoras concretas, no comentarios genéricos.'],
      ['Generar rúbricas y cuestionarios', 'Propone criterios de evaluación y bancos de preguntas desde el contenido del curso.'],
      ['Resumen diario de alertas', 'Redacta el aviso de inactividad o bajo rendimiento — el docente revisa y decide.'],
    ],
  },
  evaluador: {
    label: 'Evaluador', tag: 'Convierte horas de corrección en minutos',
    items: [
      ['Calificación asistida contra criterios', 'Evalúa cada entrega contra la rúbrica del docente, no contra un estándar genérico.'],
      ['Lee los archivos que entrega el estudiante', 'Extrae el texto de PDF y Word para evaluar el contenido real, no solo el enunciado.'],
      ['Redacta la retroalimentación', 'Cada calificación llega con una observación concreta, lista para revisar y ajustar.'],
    ],
  },
  estudiantil: {
    label: 'Estudiantil', tag: 'Responde con el contenido real del curso',
    items: [
      ['Chat anclado a la lección', 'Responde citando el material del curso, no en abstracto.'],
      ['Resume una lección', 'Condensa el contenido antes de un examen.'],
      ['Alcance acotado al curso', 'Solo responde sobre lo que el docente ya publicó.'],
      ['Recuerda el progreso del estudiante', 'Guarda intentos y temas con dificultad para personalizar el acompañamiento.'],
    ],
  },
  comercial: {
    label: 'Comercial', tag: 'El mismo asistente, en modo venta',
    items: [
      ['Detecta si hay matrícula', 'Un visitante sin inscripción activa el modo comercial automáticamente — nadie lo configura a mano.'],
      ['Responde sobre el curso', 'Contenido, requisitos y beneficios, para ayudar a decidir la inscripción.'],
      ['Entrega la conversación al CRM', 'Lo que se conversa queda conectado con el seguimiento comercial, no se pierde.'],
    ],
  },
};

const featureData = [
  ['Rutas de aprendizaje con IA', 'Recomienda la siguiente lección según el progreso real del estudiante, no un temario fijo.', 'learn'],
  ['Contenido interactivo con H5P', 'Más que video y PDF: ejercicios, simulaciones y actividades que responden.', 'learn'],
  ['Chat con el contenido del curso', 'El estudiante pregunta y recibe respuestas ancladas a la lección real.', 'learn'],
  ['Rúbricas y coevaluación', 'Criterios propios de cada programa, con evaluación entre pares incluida.', 'teach'],
  ['SpeedGrade', 'Corrige una entrega tras otra sin salir de la pantalla de calificación.', 'teach'],
  ['Cuestionarios generados por IA', 'A partir del material que ya subiste — no hay que escribirlos desde cero.', 'teach'],
  ['Contenido programado (drip)', 'El semestre completo queda listo desde el primer día, con fechas de liberación.', 'teach'],
  ['Videollamadas integradas', 'Meet y Zoom sin salir de la plataforma, en vivo o grabadas.', 'teach'],
  ['Grupos y cohortes', 'Seguimiento por promoción completa, no solo por curso individual.', 'manage'],
  ['Alertas académicas tempranas', 'Detecta inactividad y bajo rendimiento antes de que se vuelva deserción.', 'manage'],
  ['Panel "Hoy"', 'Lo urgente del día — entregas, alertas y mensajes — en una sola bandeja.', 'manage'],
  ['Exportación institucional', 'Reportes académicos listos para los procesos formales de control de estudios.', 'manage'],
  ['CRM y automatización', 'De un interesado a un estudiante matriculado, en el mismo sitio y los mismos datos.', 'manage'],
];

const vsMoodleRows = [
  ['Soberanía de datos', 'Depende del hosting que elija el integrador', 'Autohospedado en tu propio WordPress'],
  ['Soporte', 'Comunidad global, mayormente en inglés', 'Equipo venezolano propio, en español'],
  ['Adaptación a tu currícula', 'Requiere plugins y desarrollo a medida', 'Estructura nativa por programa, grupos y cohortes'],
  ['Alertas académicas tempranas', 'No incluidas por defecto', 'Detección de riesgo incluida por curso'],
  ['Mensajería institucional', 'Requiere integraciones adicionales', 'WhatsApp y Telegram nativos'],
  ['Comercio y CRM', 'Requiere integradores externos', 'Nativo, en el mismo flujo que la enseñanza'],
];

const cta = () => `
  <section class="section section-tight">
    <div class="container cta-band">
      <div><h2>Tu próxima plataforma puede empezar por lo esencial.</h2><p>Conversemos sobre tus estudiantes, tus objetivos y tu presupuesto. ATORA crece desde ahí.</p></div>
      <a class="button button-light" href="#/contacto">Solicitar una demostración</a>
    </div>
  </section>`;

const pages = {
  inicio: () => `
    <div class="page">
      <section class="section hero">
        <div class="container">
          <div class="hero-intro">
            <h1>Capta, enseña y certifica <em>sin salir de tu sitio.</em></h1>
            <p class="lead">ATORA conecta comercio, aula e inteligencia artificial en el WordPress que tu institución ya tiene — pensado y construido en Venezuela, en español desde el primer día, no traducido después.</p>
            <div class="button-row">
              <a class="button" href="#/ecosistema">Ver el ecosistema completo</a>
              <a class="button button-secondary" href="#/contacto">Hablar con nosotros</a>
            </div>
            <div class="hero-note"><span>Se instala sobre tu WordPress · Sin plugins sueltos que mantener · Crece por etapas</span></div>
          </div>
          <div class="funnel">${renderFunnel()}</div>
        </div>
      </section>

      <section class="section tint">
        <div class="container">
          <h2>La plataforma se adapta al proyecto educativo. No al revés.</h2>
          <p class="lead">Tres decisiones de diseño explican casi todo lo demás.</p>
          <div class="principle-row">
            <article class="principle"><h3>Un flujo, no un archipiélago de plugins</h3><p>Captar, matricular, enseñar, evaluar y acompañar comparten el mismo flujo y los mismos datos, sin integradores intermedios que mantener aparte.</p></article>
            <article class="principle"><h3>Español operativo, no traducido después</h3><p>Conceptos, recorridos y ayudas pensados desde el diseño para quien enseña y gestiona formación en América Latina.</p></article>
            <article class="principle"><h3>Tu sitio, tu marca</h3><p>ATORA vive en el WordPress que tu institución ya tiene: mismo dominio, misma identidad, una sola puerta de entrada para cada estudiante.</p></article>
          </div>
        </div>
      </section>

      <section class="section deep">
        <div class="container">
          <h2>Cuatro copilotos, cada uno con una tarea concreta.</h2>
          <p class="lead">Nada de un asistente genérico esperando una pregunta. La institución decide hasta dónde participa cada uno.</p>
          ${renderCopilotShell()}
        </div>
      </section>

      ${cta()}
    </div>`,

  ecosistema: () => `
    <div class="page">
      <section class="section page-hero"><div class="container"><h1>Un mismo ecosistema, del primer clic al certificado.</h1><p class="lead">Seis etapas que hoy suelen vivir en herramientas separadas — landing, pasarela de pago, LMS, hoja de cálculo de calificaciones, WhatsApp aparte — conectadas en un solo flujo y una sola base de datos.</p></div></section>
      <section class="section"><div class="container">${renderFunnel()}</div></section>
      <section class="section tint">
        <div class="container">
          <h2>Por qué importa que sea un solo flujo</h2>
          <div class="principle-row">
            <article class="principle"><h3>Nada se pierde en la transición</h3><p>Un estudiante que llegó por una campaña, pagó su inscripción y ahora tiene una entrega pendiente es el mismo registro en el mismo sistema — no tres exportaciones distintas.</p></article>
            <article class="principle"><h3>El seguimiento comercial no termina en la matrícula</h3><p>El CRM sigue activo durante todo el curso: quién está en riesgo de no renovar, quién es candidato a un programa avanzado.</p></article>
            <article class="principle"><h3>Un reporte, no cinco</h3><p>Matrícula, actividad, calificaciones y certificación salen del mismo panel — no hay que cruzar planillas para saber cómo va una cohorte.</p></article>
          </div>
        </div>
      </section>
      ${cta()}
    </div>`,

  funciones: () => `
    <div class="page">
      <section class="section page-hero"><div class="container"><h1>Lo necesario para aprender, enseñar y gestionar.</h1><p class="lead">Organizado por el momento del recorrido, no por una lista interminable de casillas marcadas.</p></div></section>
      <section class="section"><div class="container">
        <div class="feature-filter" role="group" aria-label="Filtrar funciones">
          <button class="filter-button active" data-filter="all">Todas</button>
          <button class="filter-button" data-filter="learn">Aprender</button>
          <button class="filter-button" data-filter="teach">Enseñar</button>
          <button class="filter-button" data-filter="manage">Gestionar</button>
        </div>
        <div class="feature-grid">
          ${featureData.map(([t, d, cat]) => `<article class="card feature-card" data-category="${cat}"><h3>${t}</h3><p>${d}</p></article>`).join('')}
        </div>
      </div></section>
      ${cta()}
    </div>`,

  ia: () => `
    <div class="page">
      <section class="section page-hero"><div class="container"><h1>Inteligencia artificial con una tarea concreta, no un chatbot genérico.</h1><p class="lead">Cuatro copilotos — docente, evaluador, estudiantil y comercial — cada uno enfocado en un trabajo real dentro del ecosistema.</p></div></section>
      <section class="section deep"><div class="container">${renderCopilotShell()}</div></section>
      <section class="section"><div class="container narrow center">
        <h2>La institución decide cuánto participa la IA</h2>
        <p class="lead">Cada copiloto puede operar en modo manual, asistido, híbrido o automático — desde solo sugerir hasta actuar directamente, según lo que la institución autorice. Lo esencial de ATORA también funciona sin IA activada.</p>
      </div></section>
      ${cta()}
    </div>`,

  'frente-a-moodle': () => `
    <div class="page">
      <section class="section page-hero"><div class="container"><h1>Moodle resuelve el aula. Falta todo lo que la rodea.</h1><p class="lead">Moodle es un estándar global, gratuito y probado durante dos décadas — eso no está en discusión. La diferencia no es de qué tan sólido es cada uno técnicamente, sino de cuánta integración por separado hay que sostener para llegar a lo mismo.</p></div></section>
      <section class="section"><div class="container">
        <div class="vs-head"><span></span><span>Plataforma genérica</span><span>ATORA</span></div>
        ${vsMoodleRows.map(([label, generic, atora]) => `
          <div class="vsrow">
            <div class="vsrow-label">${label}</div>
            <div class="vscell generic">${generic}</div>
            <div class="vscell atora">${atora}</div>
          </div>`).join('')}
        <p class="vs-caveat"><strong>Con honestidad:</strong> Moodle también es de código abierto y autohospedable — no es un tema de dónde vive el software, sino de cuántas piezas sueltas hay que integrar aparte. Y en soporte de SCORM, Moodle todavía nos lleva ventaja: es nativo y maduro ahí, mientras que en ATORA está en camino.</p>
      </div></section>
      ${cta()}
    </div>`,

  soluciones: () => `
    <div class="page">
      <section class="section page-hero"><div class="container"><h1>Una misma plataforma. Distintas formas de crecer.</h1><p class="lead">ATORA conecta las necesidades del estudiante, el trabajo docente y las decisiones de la institución sin convertir la formación en un laberinto de herramientas sueltas.</p></div></section>
      <section class="section"><div class="container audience-grid">
        <article class="audience"><span>Formación profesional</span><h3>Academias y centros</h3><p>Organiza tu oferta, atiende cohortes y convierte tu conocimiento en cursos que se venden solos.</p><ul><li>Landing con CRM integrado</li><li>Cohortes con seguimiento</li><li>Certificación con reglas propias</li></ul></article>
        <article class="audience"><span>Aprendizaje institucional</span><h3>Empresas y equipos</h3><p>Forma, certifica y da seguimiento a tu gente sin desconectar el aprendizaje de la operación real.</p><ul><li>Inducción y actualización</li><li>Evaluación de competencias</li><li>Reportes listos para RR.HH.</li></ul></article>
        <article class="audience"><span>Sector público y seguridad</span><h3>Instituciones</h3><p>Soberanía de datos, estructura multi-núcleo y un nivel de reserva pensado para formación sensible.</p><ul><li>Autohospedaje en tu infraestructura</li><li>Estructura por programa y núcleo</li><li>Exportación para procesos formales</li></ul></article>
      </div></section>
      ${cta()}
    </div>`,

  planes: () => `
    <div class="page">
      <section class="section page-hero center"><div class="container"><h1>Invierte según la etapa. Crece según los resultados.</h1><p class="lead">Sin tarifas ficticias ni costos escondidos: el alcance se cotiza según usuarios, acompañamiento e infraestructura.</p></div></section>
      <section class="section"><div class="container">
        <div class="range-wrap"><div class="plan-controls"><label for="students">Participantes previstos</label><strong id="student-count">200</strong></div><input id="students" type="range" min="25" max="500" step="25" value="200"><div class="range-labels"><span>25</span><span>500+</span></div><p id="plan-recommendation" class="notice">Para 200 participantes, recomendamos Crecer: operación por cohortes con alertas tempranas y copilotos activos.</p></div>
        <div class="cards-3">
          <article class="card plan-card" data-plan="start"><span class="plan-name">Empezar</span><span class="plan-tag">Piloto enfocado, para validar un curso y su primera cohorte</span><ul class="check-list"><li>Dominio propio sobre tu WordPress</li><li>Cursos, rúbricas y certificados</li><li>Soporte por correo y WhatsApp</li></ul><a class="button button-secondary" href="#/contacto?plan=Empezar">Consultar alcance</a></article>
          <article class="card plan-card recommended" data-plan="grow"><span class="badge">Recomendado</span><span class="plan-name">Crecer</span><span class="plan-tag">Operación por cohortes, con seguimiento institucional</span><ul class="check-list"><li>Grupos y alertas tempranas</li><li>WhatsApp y Telegram nativos</li><li>Copilotos docente y evaluador</li><li>CRM y automatización básica</li></ul><a class="button" href="#/contacto?plan=Crecer">Solicitar propuesta</a></article>
          <article class="card plan-card" data-plan="scale"><span class="plan-name">Escalar</span><span class="plan-tag">Ecosistema institucional, para múltiples programas</span><ul class="check-list"><li>Multi-núcleo y multi-programa</li><li>Los cuatro copilotos de IA</li><li>Integraciones (Meet, Classroom, Drive)</li><li>Soporte dedicado</li></ul><a class="button button-secondary" href="#/contacto?plan=Escalar">Diseñar solución</a></article>
        </div>
      </div></section>
      <section class="section tint"><div class="container economy-box"><div><h2>Pensado desde Venezuela</h2><p>Priorizamos una adopción gradual: comenzar con lo que genera valor inmediato, aprovechar la infraestructura disponible y planificar cada ampliación.</p></div><div class="economy-points"><div><strong>Alcance claro</strong><span>Cada propuesta define qué incluye.</span></div><div><strong>Etapas útiles</strong><span>Cada inversión deja capacidad operativa.</span></div><div><strong>Escala responsable</strong><span>Recursos según demanda comprobada.</span></div><div><strong>Alternativas</strong><span>Condiciones conversadas caso a caso.</span></div></div></div></section>
      ${cta()}
    </div>`,

  contacto: () => `
    <div class="page">
      <section class="section page-hero"><div class="container contact-grid"><div><h1>Una demo pensada para tu realidad.</h1><p class="lead">Cuéntanos lo esencial. Preparamos un recorrido enfocado en tus usuarios, tu oferta y la etapa en la que te encuentras.</p><ul class="check-list"><li>Conversación inicial sin costo</li><li>Alcance y prioridades claras</li><li>Propuesta ajustada a tu operación</li><li>Sin compromiso de publicación</li></ul></div><form class="contact-card" id="demo-form"><div class="field-grid"><div class="field"><label for="name">Nombre</label><input id="name" name="name" autocomplete="name" required placeholder="Tu nombre"></div><div class="field"><label for="organization">Organización</label><input id="organization" name="organization" autocomplete="organization" placeholder="Nombre del proyecto"></div></div><div class="field-grid"><div class="field"><label for="email">Correo</label><input id="email" name="email" type="email" autocomplete="email" required placeholder="nombre@correo.com"></div><div class="field"><label for="profile">Tipo de proyecto</label><select id="profile" name="profile"><option>Academia o centro</option><option>Empresa u organización</option><option>Institución o sector público</option><option>Otro</option></select></div></div><div class="field"><label for="size">Participantes previstos</label><select id="size" name="size"><option>Hasta 50</option><option>51 a 200</option><option>201 a 500</option><option>Más de 500</option><option>Aún no lo sé</option></select></div><div class="field"><label for="message">¿Qué necesitas lograr?</label><textarea id="message" name="message" placeholder="Ej.: lanzar un diplomado, formar supervisores, organizar una academia..."></textarea></div><button class="button" type="submit">Preparar mi solicitud</button><p class="form-note">Esta versión de pre-lanzamiento no envía datos todavía. Al enviar verás un resumen listo para conectar al canal comercial definitivo.</p><div id="form-result" hidden></div></form></div></section>
      <section class="section deep"><div class="container center narrow"><h2>ATORA aún no está abierto al público.</h2><p class="lead">Las solicitudes se atienden de manera controlada mientras cerramos las validaciones del producto y confirmamos las condiciones comerciales.</p></div></section>
    </div>`,

  nosotros: () => `
    <div class="page">
      <section class="section page-hero"><div class="container"><h1>Tecnología educativa hecha en Venezuela, con los pies en la realidad.</h1><p class="lead">Atmósfera Creativa es una agencia creativa y de desarrollo de software venezolana, con más de 30 años de trayectoria combinada en periodismo, producción audiovisual y tecnología educativa.</p></div></section>
      <section class="section"><div class="container">
        <h2>Un ecosistema propio, no una integración de terceros</h2>
        <p class="lead">ATORA — LMS, tema visual y estudio de marca — está desarrollado íntegramente por el equipo de Atmósfera Creativa y ya opera en producción. No depende de un plugin de un proveedor externo que pueda cambiar condiciones.</p>
        <div class="footer-products" style="margin-top:28px;opacity:1">
          <img src="assets/atora-lms.png" alt="ATORA LMS" style="height:32px">
          <img src="assets/atora-theme.png" alt="ATORA Theme" style="height:32px">
          <img src="assets/atora-studio.png" alt="ATORA Studio" style="height:32px">
        </div>
      </div></section>
      <section class="section tint"><div class="container cards-3">
        <article class="card"><h3>Claridad</h3><p>La persona siempre reconoce dónde está y cuál es su siguiente paso.</p></article>
        <article class="card"><h3>Propósito</h3><p>Cada herramienta responde a una necesidad real de aprendizaje u operación, no a una casilla de funcionalidad.</p></article>
        <article class="card"><h3>Evolución</h3><p>El sistema mejora con evidencia de uso real, no con supuestos de lanzamiento.</p></article>
      </div></section>
      ${cta()}
    </div>`,

  privacidad: () => `
    <div class="page"><section class="section page-hero"><div class="container legal"><h1>Política de privacidad</h1><p class="lead">Texto base para revisión jurídica antes del lanzamiento público.</p></div></section><section class="section"><article class="container legal"><div class="legal-callout"><strong>Importante:</strong> esta versión privada no transmite ni almacena la información del formulario. El canal y responsable definitivos deben incorporarse antes del lanzamiento.</div><h2>1. Información que podrá recopilarse</h2><p>Cuando se active el sitio comercial, ATORA podrá solicitar datos de identificación y contacto, información sobre la organización y datos generales del proyecto formativo para responder solicitudes de demostración o propuestas.</p><h2>2. Finalidad</h2><p>Los datos se utilizarán para atender consultas, preparar demostraciones, elaborar propuestas y mantener comunicaciones relacionadas con el interés manifestado. No se venderán datos personales.</p><h2>3. Conservación y seguridad</h2><p>Se definirá un período de conservación proporcional a la relación comercial y se aplicarán medidas razonables para proteger la información. Los proveedores necesarios deberán quedar identificados en la versión final.</p><h2>4. Derechos y contacto</h2><p>La persona podrá solicitar acceso, corrección o eliminación de sus datos mediante el canal de privacidad que se publique antes del lanzamiento.</p><h2>5. Actualizaciones</h2><p>Esta política deberá incluir fecha de vigencia, identidad jurídica del responsable, domicilio, correo y normativa aplicable antes de hacerse pública.</p></article></section>${cta()}</div>`,

  terminos: () => `
    <div class="page"><section class="section page-hero"><div class="container legal"><h1>Términos de uso</h1><p class="lead">Texto base sujeto a revisión y adaptación contractual antes del lanzamiento.</p></div></section><section class="section"><article class="container legal"><div class="legal-callout"><strong>Estado:</strong> ATORA está en preparación para su próximo lanzamiento. Esta demostración comercial no constituye una oferta vinculante ni habilita la contratación automática.</div><h2>1. Propósito del sitio</h2><p>El sitio presenta el enfoque, alcance previsto y alternativas de implementación de ATORA. Las funciones definitivas se confirman por escrito en cada propuesta.</p><h2>2. Demostraciones y propuestas</h2><p>Una solicitud no crea obligación de contratar. Alcance, cronograma, soporte, infraestructura, precio, forma de pago y responsabilidades se establecen en una propuesta o contrato específico.</p><h2>3. Propiedad intelectual</h2><p>La identidad, los textos, la interfaz y los componentes de ATORA están protegidos según la legislación aplicable. Los contenidos formativos de cada cliente conservan la titularidad acordada contractualmente.</p><h2>4. Disponibilidad y cambios</h2><p>Durante el pre-lanzamiento pueden cambiar funciones, integraciones, diseño y condiciones. Cualquier compromiso comercial debe basarse en la versión vigente de la propuesta aceptada.</p><h2>5. Información pendiente</h2><p>Antes de publicar se incorporarán los datos jurídicos del proveedor, jurisdicción, limitaciones de responsabilidad, condiciones de servicio, tratamiento de pagos y canal de soporte.</p></article></section>${cta()}</div>`,

  notfound: () => `<div class="page"><section class="section page-hero"><div class="container center narrow"><h1>Esta página aún no existe.</h1><p class="lead">Vuelve al inicio o explora las funciones de ATORA.</p><div class="button-row" style="justify-content:center"><a class="button" href="#/inicio">Volver al inicio</a><a class="button button-secondary" href="#/funciones">Ver funciones</a></div></div></section></div>`,
};

function renderCopilotShell() {
  const first = Object.keys(copilots)[0];
  return `
    <div class="copilot-shell">
      <div class="copilot-tabs" role="tablist" aria-label="Copilotos de IA">
        ${Object.entries(copilots).map(([key, c], i) => `
          <button class="copilot-tab ${i === 0 ? 'active' : ''}" data-copilot="${key}" role="tab" aria-selected="${i === 0}">
            <strong>Copiloto ${c.label}</strong><span>${c.tag}</span>
          </button>`).join('')}
      </div>
      <div class="copilot-panel" id="copilot-panel">${renderCopilotPanel(first)}</div>
    </div>`;
}

function renderCopilotPanel(key) {
  const c = copilots[key];
  return `
    <h3>Copiloto ${c.label}</h3>
    <p>${c.tag}</p>
    <ul class="copilot-list">
      ${c.items.map((it, i) => `<li><b>${String(i + 1).padStart(2, '0')}</b><div><strong>${it[0]}</strong><span>${it[1]}</span></div></li>`).join('')}
    </ul>
    ${key === 'evaluador' ? '<p class="copilot-note">El docente siempre revisa y aprueba — la calificación de la IA es una propuesta, no la nota final automática.</p>' : ''}
  `;
}

function parseRoute() {
  const raw = location.hash.replace(/^#\/?/, '') || 'inicio';
  return raw.split('?')[0].split('/')[0] || 'inicio';
}

function bindPage() {
  document.querySelectorAll('.copilot-tab').forEach(tab => tab.addEventListener('click', () => {
    document.querySelectorAll('.copilot-tab').forEach(x => { x.classList.remove('active'); x.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
    const panel = document.querySelector('#copilot-panel');
    if (panel) panel.innerHTML = renderCopilotPanel(tab.dataset.copilot);
  }));

  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach(x => x.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.feature-card').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  }));

  const range = document.querySelector('#students');
  if (range) {
    const update = () => {
      const value = Number(range.value);
      const label = document.querySelector('#student-count');
      const note = document.querySelector('#plan-recommendation');
      label.textContent = value === 500 ? '500+' : value;
      const choice = value <= 75
        ? ['Empezar', 'un piloto enfocado y una primera cohorte controlada']
        : value <= 250
          ? ['Crecer', 'operación por cohortes con alertas tempranas y copilotos activos']
          : ['Escalar', 'arquitectura multi-núcleo y los cuatro copilotos de IA'];
      note.textContent = `Para ${value === 500 ? '500 o más' : value} participantes, recomendamos ${choice[0]}: ${choice[1]}.`;
      document.querySelectorAll('.plan-card').forEach(c => c.classList.remove('recommended'));
      const targetPlan = value <= 75 ? 'start' : value <= 250 ? 'grow' : 'scale';
      document.querySelector(`[data-plan="${targetPlan}"]`)?.classList.add('recommended');
    };
    range.addEventListener('input', update);
    update();
  }

  const form = document.querySelector('#demo-form');
  if (form) {
    const params = new URLSearchParams(location.hash.split('?')[1] || '');
    if (params.get('plan')) document.querySelector('#message').value = `Me interesa conocer el alcance del plan ${params.get('plan')}.`;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const result = document.querySelector('#form-result');
      result.hidden = false;
      result.className = 'notice';
      result.innerHTML = `<strong>Solicitud preparada.</strong><br>Demo para ${escapeHTML(data.get('name'))}, proyecto ${escapeHTML(data.get('organization') || 'por definir')}, con ${escapeHTML(data.get('size'))} participantes. El envío se habilitará al conectar el canal comercial antes del lanzamiento.`;
      showToast('Resumen preparado correctamente');
    });
  }
}

function escapeHTML(value) { const div = document.createElement('div'); div.textContent = String(value); return div.innerHTML; }
function showToast(message) { const toast = document.querySelector('.toast'); toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2800); }

function render() {
  const route = parseRoute();
  document.querySelector('#main').innerHTML = (pages[route] || pages.notfound)();
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('active', a.dataset.route === route));
  document.querySelector('nav').classList.remove('open');
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
  const titles = { inicio: 'ATORA — El LMS que conecta todo tu recorrido educativo', ecosistema: 'Ecosistema', funciones: 'Funciones', ia: 'Inteligencia artificial', 'frente-a-moodle': 'Frente a Moodle', planes: 'Planes', contacto: 'Contacto', nosotros: 'Sobre ATORA' };
  document.title = route === 'inicio' ? titles.inicio : `${titles[route] || route} — ATORA`;
  bindPage();
  window.scrollTo(0, 0);
}

document.querySelector('.menu-toggle').addEventListener('click', (event) => {
  const nav = document.querySelector('nav');
  const open = nav.classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', event => {
  if (!event.target.closest('.nav-shell')) {
    document.querySelector('nav').classList.remove('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
  }
});
window.addEventListener('hashchange', render);
document.querySelector('#year').textContent = new Date().getFullYear();
render();
