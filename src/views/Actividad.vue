<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con el turismo de aventura, incluyendo su definición, características, infraestructura, normatividad, atractivos turísticos, recursos turísticos, planta turística, geografía del territorio y perfil del cliente, con el fin de fortalecer los conocimientos sobre el desarrollo sostenible y seguro de esta modalidad turística.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es el turismo de aventura?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Turismo empresarial.', esCorrecta: false },
            { id: 'b', texto: 'Turismo de compras.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'Una modalidad turística con actividades recreativas y de naturaleza.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un turismo exclusivamente deportivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: 'Según la OMT, el turismo de aventura incluye:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Actividades urbanas.', esCorrecta: false },
            { id: 'b', texto: 'Turismo religioso.', esCorrecta: false },
            { id: 'c', texto: 'Solo actividades extremas.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Actividad física, naturaleza e inmersión cultural.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es uno de los elementos diferenciadores del turismo de aventura?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Rol dinámico del visitante.', esCorrecta: true },
            { id: 'b', texto: 'Turismo pasivo.', esCorrecta: false },
            { id: 'c', texto: 'Exclusividad hotelera.', esCorrecta: false },
            { id: 'd', texto: 'Actividades comerciales.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué autor define el turismo de aventura como una experiencia con riesgo percibido y desafío personal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Acerenza.', esCorrecta: false },
            { id: 'b', texto: 'Boullón.', esCorrecta: false },
            { id: 'c', texto: 'Buckley.', esCorrecta: true },
            { id: 'd', texto: 'Sung.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes actividades pertenece al turismo de aventura?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ferias empresariales.', esCorrecta: false },
            { id: 'b', texto: 'Turismo financiero.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Compras en centros comerciales.',
              esCorrecta: false,
            },
            { id: 'd', texto: '<i>Rafting</i>.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué beneficio económico genera el turismo de aventura?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Disminución del empleo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Dinamización de economías locales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Pérdida cultural.', esCorrecta: false },
            { id: 'd', texto: 'Reducción de visitantes.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué promueve el turismo de aventura cuando se gestiona sosteniblemente?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Turismo masivo.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Destrucción de ecosistemas.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Educación ambiental.', esCorrecta: true },
            { id: 'd', texto: 'Contaminación ambiental.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué componente NO pertenece a la infraestructura turística?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Equipos médicos personales.', esCorrecta: true },
            { id: 'b', texto: 'Puentes.', esCorrecta: false },
            { id: 'c', texto: 'Señalización.', esCorrecta: false },
            { id: 'd', texto: 'Senderos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'La accesibilidad turística incluye:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Artesanías.', esCorrecta: false },
            { id: 'b', texto: 'Gastronomía.', esCorrecta: false },
            { id: 'c', texto: 'Senderos y vías de acceso.', esCorrecta: true },
            { id: 'd', texto: 'Protocolos médicos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto: '',
        },
        {
          id: 10,
          texto: '¿Qué busca minimizar la infraestructura de seguridad?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Promoción turística.', esCorrecta: false },
            { id: 'b', texto: 'Competencia turística.', esCorrecta: false },
            { id: 'c', texto: 'Riesgos y emergencias.', esCorrecta: true },
            { id: 'd', texto: 'Beneficios económicos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué significa RNT?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro Nacional Turístico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registro Nacional de Transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro Natural Territorial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamento Nacional Turístico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Cuál es la función del RNT?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promover industrias mineras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar eventos deportivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regular actividades agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formalizar prestadores turísticos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál es un atractivo turístico natural?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fábricas.', esCorrecta: false },
            { id: 'b', texto: 'Bancos.', esCorrecta: false },
            { id: 'c', texto: 'Cañones.', esCorrecta: true },
            { id: 'd', texto: 'Oficinas comerciales.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué evalúa la calidad de un atractivo turístico natural?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Publicidad turística.', esCorrecta: false },
            { id: 'b', texto: 'Número de hoteles.', esCorrecta: false },
            { id: 'c', texto: 'Cantidad de visitantes.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Ausencia de contaminación y conservación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            '¿Qué diferencia un recurso turístico de un atractivo turístico?',
        },
        {
          id: 15,
          texto:
            '¿Qué diferencia un recurso turístico de un atractivo turístico?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El recurso posee uso inmediato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El atractivo necesita adecuación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El recurso requiere fortalecimiento.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'No existe diferencia.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué incluye la planta turística?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Industrias manufactureras.', esCorrecta: false },
            { id: 'b', texto: 'Actividades agrícolas.', esCorrecta: false },
            { id: 'c', texto: 'Solo alojamiento.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Empresas y servicios turísticos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál actividad puede desarrollarse gracias al relieve montañoso?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Turismo financiero.', esCorrecta: false },
            { id: 'b', texto: 'Escalada.', esCorrecta: true },
            { id: 'c', texto: 'Comercio electrónico.', esCorrecta: false },
            { id: 'd', texto: 'Turismo industrial.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué busca el cliente experiencial?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Negocios internacionales.', esCorrecta: false },
            { id: 'b', texto: 'Turismo médico.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Experiencias memorables y emociones.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Actividades laborales.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Cuál es una necesidad actual del turista de aventura?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inseguridad', esCorrecta: false },
            {
              id: 'b',
              texto: 'Información clara y transparente.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Turismo masivo.', esCorrecta: false },
            { id: 'd', texto: 'Aislamiento cultural.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Positivo, se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Negativo, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué permite la normatividad turística?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Restringir visitantes.', esCorrecta: false },
            { id: 'b', texto: 'Eliminar controles.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Garantizar seguridad y calidad.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Aumentar riesgos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidenció que comprende la importancia de la geointerpretación en el servicio de guianza.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente el componente de la geointerpretación en el servicio de guianza.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con el turismo de aventura, incluyendo su definición, características, infraestructura, normatividad, atractivos turísticos, recursos turísticos, planta turística, geografía del territorio y perfil del cliente, con el fin de fortalecer los conocimientos sobre el desarrollo sostenible y seguro de esta modalidad turística.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
