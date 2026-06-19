<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Prestadores de servicios turísticos en el destino
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.1 Atractivo turístico
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Clasificación de los atractivos turísticos según la metodología colombiana
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Recurso turístico
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.4 Planta turística
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.5 Características geográficas de la zona
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.6 Cliente en turismo de aventura
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.7 Tipologías del cliente en turismo de aventura
      
        

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
