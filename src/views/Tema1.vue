<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Turismo de Aventura
      
      .tarjeta.bg-fondo-4.p-4.mb-5(data-aos='fade-right')
        SlyderA(tipo="b")
          .row.justify-content-center.mb-0.pt-4
            .col-sm-6.col-lg-5
              h4.mb-3 Turismo en la naturaleza
              p.mb-0 Modalidad turística orientada al disfrute y recreación en espacios naturales. Su principal motivación es la realización de actividades de esparcimiento y descanso en contacto con la naturaleza, sin degradar los recursos naturales. No se enfoca en actividades deportivas ni especializadas. Ejemplos: turismo rural y turismo vacacional.
            .col-sm-6.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/1.png', alt='')
          .row.justify-content-center.mb-0.pt-4
            .col-sm-6.col-lg-5
              h4.mb-3 Turismo sobre la naturaleza
              p.mb-0 Modalidad turística basada en la práctica de actividades deportivas en entornos naturales. Su principal motivación es la realización de actividades físicas y de aventura que utilizan los recursos naturales como escenario, procurando siempre su conservación. Ejemplos: turismo activo deportivo y aventurismo.
            .col-sm-6.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/2.png', alt='')
          .row.justify-content-center.mb-0.pt-4
            .col-sm-6.col-lg-5
              h4.mb-3 Turismo por la naturaleza
              p.mb-0 Modalidad turística enfocada en la contemplación, disfrute y conocimiento del medio natural. Promueve la valoración y conservación de los recursos naturales mediante actividades de baja intensidad física. Ejemplo: ecoturismo.
            .col-sm-6.col-lg-5.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/3.png', alt='')
      
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/4.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-4 El turismo de aventura es una modalidad turística especializada que integra actividades recreativas, deportivas y de contacto con la naturaleza, desarrolladas en entornos que implican niveles de riesgo controlado, desafío físico y experiencias significativas para los participantes. Su principal característica es la combinación de emoción, exploración y aprendizaje en escenarios naturales.
          p.mb-0 De acuerdo con la Organización Mundial del Turismo (OMT, 2014), el turismo de aventura comprende actividades que incorporan componentes de actividad física, interacción con la naturaleza e inmersión cultural. A diferencia de otras modalidades turísticas, promueve la participación activa del visitante, quien asume un papel protagónico en la experiencia.
      
      
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/5.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/6.svg', alt='')
            .col-sm-12.col-lg-10
              p.mb-0 Esta modalidad no se limita exclusivamente a la práctica de deportes extremos; también incluye actividades recreativas, interpretativas y educativas que favorecen el conocimiento del territorio, el bienestar físico y emocional, y la conexión responsable con el entorno natural.
          p.mb-0 Según Buckley (2010), el turismo de aventura puede definirse como una experiencia turística que combina riesgo percibido, desafío personal y contacto con ambientes naturales. En este contexto, la emoción, la superación personal y la interacción con la naturaleza se convierten en elementos fundamentales que distinguen esta modalidad dentro de la actividad turística.
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos claves del turismo aventura
      


       
      .row.mb-4(data-aos='fade-right')
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/7.svg' alt='')
            .tarjeta.bg-color-2
              .p-4
                h4.text-center.mt-3 Naturaleza
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/8.svg' alt='')
            .tarjeta.bg-color-2
              .p-4
                h4.text-center.mt-3 Actividad física
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t1/9.svg' alt='')
            .tarjeta.bg-color-2
              .p-4
                h4.text-center.mt-3 Riesgo controlado

      .bg-full-width.bg-fondo-1.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.align-items-end
            .col-lg-8
              .bg-color-3.py-4.mb-5.px-5
                p.mb-4 En Colombia, el turismo de aventura se ha consolidado como una alternativa estratégica para el desarrollo territorial, especialmente en regiones rurales y destinos con alto valor natural y paisajístico. Actividades como el senderismo, rafting, torrentismo, parapente, espeleología, canopy y ciclomontañismo forman parte de la oferta turística de numerosos territorios, aprovechando la diversidad geográfica y ambiental del país.
                p.mb-0  La importancia del turismo de aventura radica en su aporte al desarrollo económico, social y ambiental de las comunidades. Desde el ámbito económico, genera oportunidades de empleo e ingresos para prestadores de servicios turísticos, guías, operadores especializados y emprendimientos relacionados con alojamiento, gastronomía, transporte y actividades complementarias. 
              p.mb-0 Según la Organización Mundial del Turismo (OMT, 2014), esta modalidad contribuye al fortalecimiento de destinos emergentes al diversificar la oferta turística, aumentar la permanencia de los visitantes y dinamizar las economías locales. Asimismo, promueve el aprovechamiento responsable de los recursos naturales y fomenta la conservación de ecosistemas que constituyen el principal atractivo para el desarrollo de estas actividades.
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/10.png', alt='')

      .cajon.color-acento-contenido.p-4.mb-5(data-aos='fade-right')
        p.mb-3 De igual manera, el turismo de aventura responde a las nuevas tendencias del mercado turístico, caracterizadas por la búsqueda de experiencias auténticas, transformadoras y emocionalmente significativas. A través de estas experiencias, las personas fortalecen su bienestar, desarrollan habilidades de superación personal y establecen una conexión más cercana con la naturaleza y el territorio.
        p.mb-0 Para su adecuada planificación y gestión, el turismo de aventura puede clasificarse según el medio natural en el que se desarrollan las actividades, permitiendo organizar los servicios turísticos y aplicar medidas de seguridad acordes con las características y riesgos de cada entorno.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 1.] Clasificación de actividades de turismo de aventura
      .tabla-a.color-acento-contenido.mb-5(data-aos='fade-right')
        table
          thead
            tr
              th.wcus-1 Clasificación
              th Descripción
              th Actividades
          tbody
            tr
              td Actividades terrestres
              td Se desarrollan sobre la superficie terrestre, en ambientes rurales, montañosos, boscosos o desérticos. Requieren diferentes niveles de esfuerzo físico y contacto directo con el entorno natural.
              td Senderismo, #[i trekking], ciclomontañismo, escalada en roca, espeleología, cabalgatas y montañismo.
            tr
              td Actividades acuáticas
              td Se realizan en ríos, lagos, mares o cuerpos de agua naturales, involucrando navegación, desplazamiento o interacción directa con el medio acuático.
              td #[i Rafting], kayak, canotaje, buceo, #[i snorkel], #[i hidrospeed] y navegación recreativa.
            tr
              td Actividades aéreas
              td Se desarrollan en el aire o mediante el aprovechamiento de corrientes de viento y alturas naturales, generando experiencias de observación y adrenalina.
              td Parapente, ala delta, #[i canopy] (tirolesa), paracaidismo y vuelo en globo aerostático.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Morfología del turismo de aventura
      

      p.mb-3(data-aos='fade-right') La morfología del turismo de aventura hace referencia a la estructura y composición de esta actividad turística, considerando los elementos que intervienen en la experiencia turística.
      p.mb-5(data-aos='fade-right') Entre sus principales componentes se encuentran:

      AcordionA(tipo="a" clase-tarjeta="tarjeta bg-green").mb-5(data-aos='fade-right')
        .row.justify-content-center.align-items-start.mb-0(titulo="El territorio")
          .col-sm-12.col-lg-6
              p.mb-0.mt-4 Corresponde al espacio geográfico donde se desarrollan las actividades turísticas. Incluye características naturales como el relieve, el clima, la hidrografía, la biodiversidad y el paisaje, los cuales determinan las condiciones para la práctica del turismo de aventura.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/11.png', alt='')
        .row.justify-content-center.align-items-start.mb-0(titulo="La actividad")
          .col-sm-12.col-lg-6
              p.mb-0.mt-4 Es la experiencia específica que realiza la persona turista. Puede incluir componentes deportivos, recreativos, culturales o interpretativos, según el tipo de experiencia y el nivel de interacción con el entorno natural.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/12.png', alt='')
        .row.justify-content-center.align-items-start.mb-0(titulo="El nivel de riesgo")
          .col-sm-12.col-lg-6
              p.mb-0.mt-4 Toda actividad de turismo de aventura implica un riesgo controlado. Por ello, la seguridad es un eje fundamental en la planificación, ejecución y supervisión de las experiencias turísticas.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/13.png', alt='')
        .row.justify-content-center.align-items-start.mb-0(titulo="La experiencia emocional")
          .col-sm-12.col-lg-6
              p.mb-0.mt-4 Se refiere a las sensaciones y vivencias generadas en el turista, como adrenalina, descubrimiento, satisfacción personal, superación y conexión con la naturaleza.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/14.png', alt='')
        .row.justify-content-center.align-items-start.mb-0(titulo="Los servicios turísticos complementarios")
          .col-sm-12.col-lg-6
              p.mb-0.mt-4 Incluyen todos los elementos que apoyan la experiencia turística, como alojamiento, alimentación, transporte, guianza, seguros, primeros auxilios y equipamiento especializado.
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/15.png', alt='')
        
      p.mb-4(data-aos='fade-right') El turismo de aventura también puede clasificarse según el nivel de dificultad y riesgo de las actividades:

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 2.] Clasificación del turismo de aventura
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-9
          .tabla-a.t-cus.color-acento-contenido.mb-0
            table
              thead
                tr
                  th Aventura suave
                  th Aventura fuerte
              tbody
                tr
                  td Caminatas ecológicas (nivel de dificultad y riesgo bajo).
                  td Actividades con nivel de riesgo controlado.
                tr
                  td Caminatas ecológicas (senderismo de ocio).
                  td Escalada.
                tr
                  td Senderismo interpretativo.
                  td #[i Rafting] técnico.
                tr
                  td Cabalgatas (nivel de exigencia recreativa).
                  td #[i Rafting] avanzado.
                tr
                  td Cabalgatas (técnica y exigencia recreativa).
                  td Parapente y paracaidismo avanzado.
                tr
                  td Kayak (nivel de riesgo bajo).
                  td Parapente.
                tr
                  td Caminata fácil (nivel de recreación).
                  td Alpinismo.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/16.png', alt='')

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características del turismo de aventura
      p.mb-5(data-aos='fade-right') El turismo de aventura posee características específicas que lo diferencian de otras modalidades turísticas:

      SlyderF.mb-5(columnas="col-md-6 col-xl-4")(data-aos='fade-right')
        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/17.svg', alt='')
          h4.text-center Contacto directo con la naturaleza
          p.mb-0.text-center Las actividades se desarrollan en entornos naturales, permitiendo la interacción directa con paisajes, ecosistemas y recursos naturales.
        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/18.svg', alt='')
          h4.text-center Presencia de riesgo controlado
          p.mb-0.text-center Implica actividades con cierto nivel de riesgo, el cual es gestionado mediante medidas de seguridad y planificación adecuada.
        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/19.svg', alt='')
          h4.text-center Participación activa de la persona turista
          p.mb-0.text-center El turista tiene un rol dinámico, participando físicamente en las actividades y no solo como observador.
        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/20.svg', alt='')
          h4.text-center Necesidad de protocolos de seguridad
          p.mb-0.text-center Requiere la aplicación de normas, procedimientos y medidas preventivas para garantizar la seguridad de los participantes.
        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/21.svg', alt='')
          h4.text-center Uso de equipamiento especializado
          p.mb-0.text-center Se emplean equipos técnicos adecuados según la actividad (arneses, cascos, cuerdas, kayaks, entre otros).
        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/22.svg', alt='')
          h4.text-center Generación de experiencias emocionales
          p.mb-0.text-center Produce sensaciones como adrenalina, satisfacción, reto personal y conexión con la naturaleza.
        .tarjeta.bg-fondo-2.p-4
          .row.justify-content-center.mb-4
            .col-5
              img(src='@/assets/curso/temas/t1/23.svg', alt='')
          h4.text-center Fortalecimiento del bienestar físico y mental
          p.mb-0.text-center Contribuye a la salud integral mediante la actividad física y la liberación de estrés.
        
      .cajon.color-acento-contenido.p-4.mb-0(data-aos='fade-right')
        p.mb-0 De acuerdo con Sung (2004), las actividades de aventura se caracterizan por la presencia de tres componentes esenciales: la incertidumbre, el desafío y la percepción de riesgo. Estos elementos, en conjunto, son los que incrementan el valor experiencial del producto turístico, al intensificar las emociones, la participación activa del turista y la vivencia de experiencias significativas.


      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Infraestructura turística local
      
      p.mb-5(data-aos='fade-right') Se presenta el pódcast “Infraestructura turística local”, donde se detallada a profundidad el tema propuesto.
      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t1/25.png')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-color-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast: Infraestructura turística local"
              :audio="require_src('@/assets/actividad/audio/success.mp3')"
          )
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de la infraestructura turística local
      
      p.mb-5(data-aos='fade-right') En los destinos de turismo de aventura, la infraestructura debe responder a criterios de funcionalidad, seguridad y sostenibilidad ambiental. Entre sus principales características se destacan:
      SlyderE(indicadores="derecha").bg-color-secundario.mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0.pt-5.px-5.pb-3
          .col-sm-12.col-lg-7
            h4.mb-4 Accesibilidad
            p.mb-0 Hace referencia a las condiciones que permiten el ingreso y desplazamiento hacia los atractivos turísticos. Incluye vías terrestres, senderos, señalización, puentes, muelles y accesos especializados.

          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/26.png', alt='')

        .row.justify-content-center.mb-0.pt-5.px-5.pb-3
          .col-sm-12.col-lg-7
            h4.mb-4 Seguridad
            p.mb-3 La infraestructura debe estar diseñada para minimizar riesgos y facilitar una respuesta oportuna ante emergencias. Para ello, es fundamental contar con elementos como señalización preventiva, puntos de atención, protocolos de evacuación, sistemas de comunicación, equipos de rescate y servicios de primeros auxilios.
            p.mb-0 Asimismo, las construcciones y equipamientos deben integrarse armónicamente al paisaje, evitando impactos negativos sobre los ecosistemas y respetando la capacidad de carga del territorio.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/27.png', alt='')
        .row.justify-content-center.mb-0.pt-5.px-5.pb-3
          .col-sm-12.col-lg-7
            h4.mb-4 Servicios complementarios
            p.mb-0 La infraestructura debe facilitar la operación de las actividades turísticas mediante servicios que mejoran la experiencia del visitante, tales como parqueaderos, centros de información turística, baños, zonas de descanso, miradores, estaciones de hidratación y áreas de alimentación.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/28.png', alt='')
        .row.justify-content-center.mb-0.pt-5.px-5.pb-3
          .col-sm-12.col-lg-7
            h4.mb-4 Sostenibilidad
            p.mb-0 La planificación de la infraestructura turística debe promover el uso responsable de los recursos naturales, el manejo adecuado de los residuos y la conservación del entorno ambiental, garantizando la permanencia del atractivo turístico a largo plazo.
          .col-sm-12.col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/29.png', alt='')


      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 3.] Componentes de la infraestructura turística
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .tabla-a.color-acento-contenido.mb-0 
            table
              thead
                tr
                  th Componente
                  th Descripción
                  th Ejemplos
              tbody
                tr
                  td Vías de acceso
                  td Facilitan el desplazamiento hacia el destino turístico.
                  td Carreteras, caminos rurales, senderos ecológicos.
                tr
                  td Servicios públicos
                  td Garantizan condiciones básicas para visitantes y comunidades.
                  td Agua potable, energía, telecomunicaciones.
                tr
                  td Señalización turística
                  td Orienta y previene riesgos durante la experiencia turística.
                  td Señales interpretativas, preventivas y de ubicación.
                tr
                  td Equipamiento turístico
                  td Elementos utilizados directamente por turistas y operadores.
                  td Miradores, muelles, zonas de #[i camping].
                tr
                  td Infraestructura de seguridad
                  td Facilita la atención de emergencias y gestión del riesgo.
                  td Puestos de socorro, radios, puntos de evacuación.
                tr
                  td Servicios complementarios
                  td Apoyan la permanencia del visitante en el destino.
                  td Hospedaje, restaurantes, transporte local.
        .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/30.png', alt='')
      
      
      p.mb-3(data-aos='fade-right') La infraestructura turística constituye uno de los factores clave para el posicionamiento de un destino turístico competitivo y sostenible.
      p.mb-5(data-aos='fade-right') Una infraestructura adecuada contribuye de manera significativa a:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/31.png', alt='')
        .col-sm-12.col-lg-9.bg-color-primario.bg-fondo-3.br-1
          .row.justify-content-start.mb-0.align-items-center
            .col-sm-12.col-lg-9.p-5
              ul.lista-ul--color.mb-0.mcus-1
                li.d-flex
                  i.fas.fa-flag-location
                  p.mb-0 Mejorar la experiencia del visitante.
                li.d-flex
                  i.fas.fa-flag-location
                  p.mb-0 Incrementar los niveles de seguridad.
                li.d-flex
                  i.fas.fa-flag-location
                  p.mb-0 Fortalecer la calidad del servicio.
                li.d-flex
                  i.fas.fa-flag-location
                  p.mb-0 Facilitar la operación de las actividades turísticas.
                li.d-flex
                  i.fas.fa-flag-location
                  p.mb-0 Favorecer el desarrollo económico local.
                li.d-flex
                  i.fas.fa-flag-location
                  p.mb-0 Promover la sostenibilidad ambiental.
          

      .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-0(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/33.png')})` }")
        
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-4 De acuerdo con la Organización Mundial del Turismo (2021), los destinos turísticos sostenibles requieren infraestructura resiliente, segura y adaptada a las características del territorio, de manera que se garantice tanto la protección de los visitantes como la conservación del entorno.
          p.mb-0 En el contexto del turismo de aventura, la ausencia de infraestructura adecuada puede incrementar los riesgos para los visitantes y las comunidades locales, generar deterioro ambiental y reducir la competitividad del destino turístico.









      
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Normatividad para el turismo de aventura
      
      
      
      img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/34.png', alt='')
      .bg-color-3.py-4.px-5.mb-5(data-aos='fade-right')
        p.mb-3 El turismo de aventura requiere una regulación específica debido a los riesgos inherentes a las actividades que se desarrollan en escenarios naturales. Esta normatividad establece condiciones mínimas de seguridad, calidad y formalización, con el propósito de proteger tanto a las personas turistas como a los prestadores de servicios turísticos.
        p.mb-0 En Colombia, las actividades de turismo de aventura están reguladas por diversas leyes, decretos, normas técnicas y disposiciones emitidas por entidades gubernamentales relacionadas con el turismo, el deporte, la gestión del riesgo y la sostenibilidad ambiental.
      
      
      p.mb-5(data-aos='fade-right') La normatividad en este ámbito permite:
      
      .row.justify-content-center.mb-5.bg-color-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.px-0
          img(src='@/assets/curso/temas/t1/35.png', alt='')
        .col-sm-12.col-lg-7.p-5
          img.wcus-2.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/36.svg', alt='')
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-flag-location
              p.mb-0 Regular la prestación de servicios turísticos.
            li.d-flex
              i.fas.fa-flag-location
              p.mb-0 Garantizar condiciones de seguridad. 
            li.d-flex
              i.fas.fa-flag-location
              p.mb-0 Promover buenas prácticas ambientales.
            li.d-flex
              i.fas.fa-flag-location
              p.mb-0 Fortalecer la calidad de la experiencia turística.
            li.d-flex.mb-0
              i.fas.fa-flag-location
              p.mb-0 Prevenir accidentes y situaciones de riesgo. 
      
      p.mb-3(data-aos='fade-right') En términos generales, la normatividad turística se entiende como el conjunto de leyes, decretos, reglamentos y normas técnicas que orientan la organización, funcionamiento y desarrollo de la actividad turística.
      p.mb-5(data-aos='fade-right') Según el Ministerio de Comercio, Industria y Turismo de Colombia, la regulación del sector turístico busca fortalecer la competitividad, la sostenibilidad y la formalización del turismo a nivel nacional.

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/37.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column.justify-content-center
          p.mb-3 En el caso específico del turismo de aventura, la normatividad establece criterios fundamentales relacionados con la operación segura, la gestión del riesgo, las competencias del personal, el mantenimiento de equipos, la atención de emergencias y la sostenibilidad ambiental.
          p.mb-0 En este sentido, la regulación del turismo de aventura presenta características particulares debido a la complejidad, dinamismo y nivel de riesgo asociado a este tipo de actividades, lo que exige estándares más estrictos y mecanismos de control más rigurosos para garantizar la seguridad y la calidad del servicio.
      

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de la normatividad turística

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/38.png', alt='')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-6.p-4(titulo="Preventiva")
              p.mb-0 Está orientada a minimizar los riesgos antes de la realización de las actividades turísticas, mediante la implementación de medidas de control, planificación y gestión del riesgo.
            .tarjeta.bg-color-6.p-4(titulo="Técnica")
              p.mb-0 Incorpora estándares y requisitos relacionados con equipos, procedimientos, protocolos de seguridad y competencias del personal operativo.
            .tarjeta.bg-color-6.p-4(titulo="Obligatoria")
              p.mb-0 Su cumplimiento es de carácter exigible para los prestadores de servicios turísticos, quienes deben ajustarse a las disposiciones legales y normativas vigentes.
            .tarjeta.bg-color-6.p-4(titulo="Orientada a la seguridad")
              p.mb-0 Prioriza la protección de la vida, la integridad y el bienestar de las personas participantes, estableciendo condiciones mínimas para el desarrollo seguro de las actividades.
            .tarjeta.bg-color-6.p-4(titulo="Vinculada con la sostenibilidad")
              p.mb-0 Promueve la adopción de prácticas responsables con el medio ambiente y las comunidades locales, fomentando el uso adecuado de los recursos naturales y la conservación del entorno.

        

      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Aplicación de la normatividad turística

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/39.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-3
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/40.svg', alt='')
            .col-sm-12.col-lg-10
              p.mb-0 La aplicación de la normatividad turística implica el cumplimiento, por parte de las empresas y prestadores de servicios turísticos, de una serie de requisitos orientados a garantizar la legalidad, la seguridad y la calidad en la prestación del servicio.
          p.mb-0 Entre estos requisitos se encuentran el Registro Nacional de Turismo (RNT), la implementación de protocolos de seguridad, la adquisición de pólizas y seguros, la capacitación del personal, el adecuado mantenimiento de los equipos, la gestión ambiental responsable y la formulación e implementación de planes de emergencia y contingencia.
      p.mb-5(data-aos='fade-right') En Colombia, diversas actividades de turismo de aventura están reguladas por las Normas Técnicas Sectoriales Colombianas (NTS), las cuales establecen estándares específicos para cada modalidad, con el propósito de asegurar condiciones óptimas de operación, seguridad y calidad en la prestación del servicio turístico.
        
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        p.mb-0  #[b Tabla 4.] Normatividad básica aplicable al turismo de aventura - Colombia 
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-7
          .tabla-a.t-cus-2.color-acento-contenido.mb-0
            table
              thead
                tr
                  th Norma
                  th Descripción
              tbody
                tr
                  td #[b Ley 300 de 1996]
                  td Ley General de Turismo de Colombia.
                tr
                  td #[b Ley 1558 de 2012]
                  td Modifica la Ley General de Turismo y fortalece la formalización turística.
                tr
                  td #[b Registro Nacional de Turismo (RNT)]
                  td Registro obligatorio para prestadores de servicios turísticos.
                tr
                  td #[b Normas Técnicas Sectoriales NTS-AV]
                  td Establecen requisitos de calidad y seguridad para actividades de aventura.
                tr
                  td #[b Decreto 1074 de 2015]
                  td Reglamenta aspectos del sector comercio, industria y turismo.
                tr
                  td #[b Normativa ambiental]
                  td Regula el uso sostenible de áreas naturales y ecosistemas protegidos.
                tr
                  td #[b Sistema de Gestión de Seguridad y Salud en el Trabajo]
                  td Establece medidas de prevención de riesgos laborales.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/41.png', alt='')


















  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
