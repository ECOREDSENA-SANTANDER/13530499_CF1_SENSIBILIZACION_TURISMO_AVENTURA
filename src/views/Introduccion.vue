<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El turismo de aventura se ha consolidado como una de las modalidades turísticas de mayor crecimiento, debido al interés de las personas por vivir experiencias emocionantes, auténticas y en contacto con la naturaleza. En Colombia, esta actividad representa una oportunidad para fortalecer las economías locales, promover el uso sostenible de los recursos naturales y diversificar la oferta turística de los territorios.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img.d-none.d-lg-block(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.d-flex.flex-column.justify-content-center
        p.mb-3 Este componente formativo orienta al aprendiz en el reconocimiento de los fundamentos del turismo de aventura, abordando aspectos relacionados con sus conceptos básicos, clasificación, normatividad vigente, estructura turística e infraestructura necesaria para su desarrollo. Asimismo, permite identificar los recursos y atractivos turísticos del territorio, así como las necesidades, motivaciones y tendencias del cliente de turismo de aventura.
        p.mb-0 A través de este proceso de formación, el aprendiz fortalecerá sus conocimientos sobre seguridad, sostenibilidad y calidad en la prestación de servicios turísticos, adquiriendo herramientas para comprender las dinámicas del sector y contribuir al desarrollo de experiencias turísticas responsables, seguras y competitivas.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
