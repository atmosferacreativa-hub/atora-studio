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
    label: 'Evaluador', tag: 'Acelera la corrección sin perder criterio',
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

const renderIllustrativeTag = () => `
  <div class="illustrative-tag" aria-label="Ejemplo ilustrativo">Ejemplo ilustrativo</div>
`;

const renderClassInAction = () => {
  const activityName = 'Actividad: Serie de 3 fotos + decisión de encuadre';
  const criterionName = 'Criterio de la rúbrica: Decisión de encuadre';

  return `
    <section class="section" id="clase-en-accion">
      <div class="container">
        <div class="section-head">
          <h2>Una clase en acción</h2>
          <p class="lead">Ejemplo basado en un módulo del <strong>Diplomado de Fotografía</strong>: el estudiante entrega una serie de tres fotos y explica una decisión de encuadre. La misma actividad se ve en el teléfono, en SpeedGrade y en el libro de calificaciones.</p>
        </div>

        <div class="demo-flow" role="list" aria-label="Tres momentos de la misma tarea">
          <article class="demo-step" role="listitem">
            <header class="demo-step__head">
              <span class="demo-step__index" aria-hidden="true">01</span>
              <div>
                <h3>El estudiante prepara la entrega desde el teléfono</h3>
                <p>${escapeHTML(activityName)} · ${escapeHTML(criterionName)}</p>
              </div>
            </header>

            <figure class="mock phone" aria-label="Vista simulada en teléfono">
              ${renderIllustrativeTag()}
              <div class="mock__topbar">
                <span class="mock__title">Entrega</span>
                <span class="pill warn">Sin conexión</span>
              </div>
              <div class="mock__body">
                <strong>${escapeHTML(activityName)}</strong>
                <p class="muted">Sube 3 fotos y explica tu decisión de encuadre.</p>
                <div class="upload-list" role="list" aria-label="Archivos adjuntos">
                  <div class="upload-item" role="listitem"><span class="file">foto-01.jpg</span><span class="status">pendiente de sincronización</span></div>
                  <div class="upload-item" role="listitem"><span class="file">foto-02.jpg</span><span class="status">pendiente de sincronización</span></div>
                  <div class="upload-item" role="listitem"><span class="file">foto-03.jpg</span><span class="status">pendiente de sincronización</span></div>
                </div>
                <div class="field">
                  <label class="sr-only" for="demo-reflexion">Decisión de encuadre</label>
                  <div class="textarea" id="demo-reflexion" role="textbox" aria-multiline="true">
                    Elegí un encuadre bajo para exagerar la altura del sujeto y dejar aire negativo arriba.
                  </div>
                </div>
                <div class="mock__footer">
                  <span class="pill">Se enviará al reconectarse</span>
                </div>
              </div>
            </figure>
          </article>

          <article class="demo-step" role="listitem">
            <header class="demo-step__head">
              <span class="demo-step__index" aria-hidden="true">02</span>
              <div>
                <h3>El docente califica con rúbrica en SpeedGrade</h3>
                <p>${escapeHTML(activityName)} · ${escapeHTML(criterionName)}</p>
              </div>
            </header>

            <figure class="mock desktop" aria-label="Vista ilustrativa de SpeedGrade">
              ${renderIllustrativeTag()}
              <div class="mock__topbar">
                <span class="mock__title">SpeedGrade · Revisión de entrega</span>
                <span class="pill">Rúbrica</span>
              </div>
              <div class="mock__body">
                <div class="split">
                  <div class="preview" aria-label="Tira de imágenes">
                    <div class="thumb">Foto 1</div>
                    <div class="thumb">Foto 2</div>
                    <div class="thumb">Foto 3</div>
                  </div>
                  <div class="rubric" aria-label="Rúbrica de evaluación">
                    <strong>${escapeHTML(criterionName)}</strong>
                    <table>
                      <thead><tr><th>Nivel</th><th>Descripción</th><th>Puntos</th></tr></thead>
                      <tbody>
                        <tr><td>Excelente</td><td>La elección del encuadre refuerza claramente la intención visual.</td><td>4</td></tr>
                        <tr><td>Bueno</td><td>El encuadre funciona, con pequeños detalles por ajustar.</td><td>3</td></tr>
                        <tr><td>En progreso</td><td>La intención se entiende, pero el encuadre la debilita.</td><td>2</td></tr>
                        <tr><td>Inicial</td><td>No se justifica la decisión o no se sostiene en la serie.</td><td>1</td></tr>
                      </tbody>
                    </table>
                    <div class="rubric-note">
                      <span class="pill success">Seleccionado: Bueno (3/4)</span>
                    </div>
                    <div class="feedback" aria-label="Retroalimentación">
                      <strong>Observación del docente</strong>
                      <p>En la foto 2 el encuadre bajo funciona, pero el corte en el borde izquierdo distrae. Prueba dejar más aire para sostener la intención en toda la serie.</p>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </article>

          <article class="demo-step" role="listitem">
            <header class="demo-step__head">
              <span class="demo-step__index" aria-hidden="true">03</span>
              <div>
                <h3>El estudiante consulta la devolución y queda en el libro</h3>
                <p>${escapeHTML(activityName)} · ${escapeHTML(criterionName)}</p>
              </div>
            </header>

            <figure class="mock desktop" aria-label="Vista ilustrativa de calificación y libro de calificaciones">
              ${renderIllustrativeTag()}
              <div class="mock__topbar">
                <span class="mock__title">Calificación · Curso</span>
                <span class="pill">Libro de calificaciones</span>
              </div>
              <div class="mock__body">
                <div class="grade-summary">
                  <div class="grade-big"><strong>3/4</strong><span>${escapeHTML(criterionName)}</span></div>
                  <div class="grade-feedback">
                    <strong>Devolución</strong>
                    <p>En la foto 2 el corte en el borde izquierdo distrae. En la próxima serie, prueba dejar más aire para sostener la intención.</p>
                  </div>
                </div>
                <div class="gradebook" aria-label="Registro en el libro de calificaciones">
                  <div class="gradebook__row gradebook__head"><span>Actividad</span><span>Nota</span><span>Estado</span></div>
                  <div class="gradebook__row"><span>${escapeHTML(activityName)}</span><span>3/4</span><span class="pill success">Registrada</span></div>
                </div>
              </div>
            </figure>
          </article>
        </div>
      </div>
    </section>
  `;
};

const pages = {
  inicio: () => `
    <div class="page">
      <section class="section hero">
        <div class="container">
          <div class="hero-intro">
            <h1>Capta, enseña y certifica <em>sin salir de tu sitio.</em></h1>
            <p class="lead">Gestiona cursos, matrículas y evaluaciones desde tu WordPress. Tus estudiantes pueden preparar entregas desde el teléfono, tus docentes califican con rúbricas y tu equipo académico sigue el avance de cada cohorte.</p>
            <div class="button-row">
              <a class="button" href="#/inicio?section=clase-en-accion" data-scroll="clase-en-accion">Ver una clase en acción</a>
              <a class="button button-secondary" href="#/contacto">Solicitar una demostración</a>
            </div>
            <div class="hero-note"><span>Se instala sobre tu WordPress · Sin plugins sueltos que mantener · Crece por etapas</span></div>
          </div>
        </div>
      </section>

      ${renderClassInAction()}

      <section class="section tint">
        <div class="container">
          <h2>Del primer clic al certificado: un solo recorrido.</h2>
          <p class="lead">Atrae, matricula, enseña, evalúa, acompaña y certifica sin que los datos se pierdan entre herramientas.</p>
          ${renderFunnel()}
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
          <div class="ai-example" role="note" aria-label="Ejemplo breve de IA">
            <h3>Ejemplo breve (actividad de fotografía)</h3>
            <p><strong>Criterio de rúbrica:</strong> Decisión de encuadre.</p>
            <p><strong>Sugerencia de IA:</strong> “La intención se entiende, pero el corte en el borde izquierdo reduce el impacto en la foto 2. Sugiero puntaje 3/4 y recomendar más aire lateral.”</p>
            <p><strong>El docente revisa y decide publicar:</strong> “Buen uso del encuadre bajo. Para sostener la serie, evita cortes en los bordes y deja más aire.”</p>
          </div>
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

      <section class="section deep">
        <div class="container">
          <h2>Mobile y Meridian: el ecosistema completo</h2>
          <div class="cards-2">
            <article class="card">
              <h3>Aplicación móvil</h3>
              <p>Para que el estudiante prepare entregas y el docente resuelva lo urgente del día desde el teléfono, con sincronización cuando vuelva la conexión.</p>
              <a class="button button-secondary" href="#/aplicacion-movil">Ver “Aplicación móvil”</a>
            </article>
            <article class="card">
              <h3>Atora Meridian, el tema de tu academia</h3>
              <p>Tu identidad visual se mantiene desde la portada hasta la lección: tipografías, colores, botones, tarjetas y jerarquías consistentes en cada pantalla.</p>
              <p class="muted">Si tu institución tiene más de una marca educativa, Meridian permite mantener consistencia y diferenciar identidades por proyecto.</p>
            </article>
          </div>
        </div>
      </section>
      ${cta()}
    </div>`,

  'aplicacion-movil': () => `
    <div class="page">
      <section class="section page-hero"><div class="container"><h1>Aplicación móvil</h1><p class="lead">ATORA Mobile permite que el trabajo de estudio y evaluación continúe desde el teléfono, incluso cuando la conexión no acompaña. La sincronización ocurre cuando el dispositivo vuelve a estar en línea.</p></div></section>

      <section class="section"><div class="container">
        <div class="cards-2">
          <article class="card">
            <h2>Qué puede hacer el estudiante</h2>
            <ul class="check-list">
              <li>Ver lecciones, tareas y fechas clave.</li>
              <li>Preparar entregas (adjuntar fotos/archivos y escribir respuestas).</li>
              <li>Consultar retroalimentación y notas publicadas.</li>
            </ul>
            <div class="notice">Trabajo sin conexión: la preparación de la entrega puede quedar <strong>pendiente de sincronización</strong> hasta recuperar internet.</div>
          </article>
          <article class="card">
            <h2>Qué puede hacer el docente</h2>
            <ul class="check-list">
              <li>Revisar entregas y dejar observaciones.</li>
              <li>Resolver lo urgente del día desde el panel “Hoy”.</li>
              <li>Publicar retroalimentación y registrar calificaciones según la rúbrica.</li>
            </ul>
            <div class="notice">Trabajo sin conexión: las acciones del docente pueden quedar en cola y sincronizarse cuando el dispositivo vuelva a estar en línea.</div>
          </article>
        </div>
        <p class="muted" style="margin-top:18px">En esta versión de pre-lanzamiento no publicamos enlaces de descarga. La disponibilidad en tiendas y el canal oficial de distribución se confirman por escrito en la propuesta.</p>
      </div></section>

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
        <article class="audience"><span>Sector público y seguridad</span><h3>Instituciones</h3><p><strong>¿Qué estudiantes necesitan seguimiento esta semana?</strong> Con cohortes y el panel “Hoy”, el docente ve a quién le falta una entrega o quién cayó en inactividad, y puede actuar desde la misma bandeja.</p><ul><li>Cohorte: Diplomado de Fotografía · Promoción 2026</li><li>Panel Hoy: 6 entregas pendientes · 3 alertas de inactividad</li><li>Acción docente: enviar aviso o abrir SpeedGrade</li></ul></article>
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
      <section class="section page-hero"><div class="container contact-grid"><div><h1>Una demo pensada para tu realidad.</h1><p class="lead">Cuéntanos lo esencial. Preparamos un recorrido enfocado en tus usuarios, tu oferta y la etapa en la que te encuentras.</p><ul class="check-list"><li>Conversación inicial sin costo</li><li>Alcance y prioridades claras</li><li>Propuesta ajustada a tu operación</li><li>Sin compromiso de publicación</li></ul></div><form class="contact-card" id="demo-form"><div class="field-grid"><div class="field"><label for="name">Nombre</label><input id="name" name="name" autocomplete="name" required placeholder="Tu nombre"></div><div class="field"><label for="organization">Organización</label><input id="organization" name="organization" autocomplete="organization" placeholder="Nombre del proyecto"></div></div><div class="field-grid"><div class="field"><label for="email">Correo</label><input id="email" name="email" type="email" autocomplete="email" required placeholder="nombre@correo.com"></div><div class="field"><label for="profile">Tipo de proyecto</label><select id="profile" name="profile"><option>Academia o centro</option><option>Empresa u organización</option><option>Institución o sector público</option><option>Otro</option></select></div></div><div class="field"><label for="size">Participantes previstos</label><select id="size" name="size"><option>Hasta 50</option><option>51 a 200</option><option>201 a 500</option><option>Más de 500</option><option>Aún no lo sé</option></select></div><div class="field"><label for="message">¿Qué necesitas lograr?</label><textarea id="message" name="message" placeholder="Ej.: lanzar un diplomado, formar supervisores, organizar una academia..."></textarea></div><button class="button" type="submit">Abrir mi correo con la solicitud</button><p class="form-note">Modalidad activa: <strong>correo</strong>. Preparamos un mensaje para que lo revises y lo envíes a nuestro canal comercial.</p><div id="form-result" hidden></div></form></div></section>
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
    const destination = 'admin@atora.studio';
    const params = new URLSearchParams(location.hash.split('?')[1] || '');
    if (params.get('plan')) document.querySelector('#message').value = `Me interesa conocer el alcance del plan ${params.get('plan')}.`;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const result = document.querySelector('#form-result');
      const summary = [
        'Solicitud de demostración (ATORA)',
        '',
        `Nombre: ${data.get('name')}`,
        `Organización: ${data.get('organization') || 'Por definir'}`,
        `Correo: ${data.get('email')}`,
        `Tipo de proyecto: ${data.get('profile')}`,
        `Participantes previstos: ${data.get('size')}`,
        '',
        'Objetivo / contexto:',
        `${data.get('message') || '(sin detalles adicionales)'}`,
      ].join('\n');

      const subject = encodeURIComponent('Solicitud de demostración — ATORA');
      const body = encodeURIComponent(summary);
      const mailto = `mailto:${destination}?subject=${subject}&body=${body}`;

      result.hidden = false;
      result.className = 'notice';

      result.innerHTML = `
        <strong>Solicitud preparada.</strong>
        <p>Modalidad activa: <strong>correo</strong>. Destino: <a href="mailto:${destination}">${destination}</a></p>
        <div class="button-row" style="margin-top:12px">
          <a class="button" href="${mailto}" id="mailto-link">Abrir mi correo con la solicitud</a>
          <button class="button button-secondary" type="button" id="copy-request">Copiar solicitud</button>
        </div>
        <details style="margin-top:12px">
          <summary>Ver solicitud</summary>
          <pre class="request-preview"></pre>
        </details>
      `;
      result.querySelector('.request-preview').textContent = summary;
      result.querySelector('#copy-request').addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(summary);
          showToast('Solicitud copiada');
        } catch {
          showToast('No se pudo copiar automáticamente');
        }
      });

      try {
        window.location.href = mailto;
      } catch {
        // Si el navegador bloquea el mailto, la persona igual puede usar el enlace.
      }

      showToast('Solicitud lista para enviar');
    });
  }

  const scrollTarget = new URLSearchParams(location.hash.split('?')[1] || '').get('section');
  if (scrollTarget) {
    const element = document.getElementById(scrollTarget);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  const titles = { inicio: 'ATORA — El LMS que conecta todo tu recorrido educativo', ecosistema: 'Ecosistema', funciones: 'Funciones', ia: 'Inteligencia artificial', 'frente-a-moodle': 'Frente a Moodle', soluciones: 'Para quién', planes: 'Planes', 'aplicacion-movil': 'Aplicación móvil', contacto: 'Contacto', nosotros: 'Sobre ATORA' };
  document.title = route === 'inicio' ? titles.inicio : `${titles[route] || route} — ATORA`;
  const section = new URLSearchParams(location.hash.split('?')[1] || '').get('section');
  bindPage();
  if (!section) window.scrollTo(0, 0);
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
