<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Turismo de Aventura
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Infraestructura turística local
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3 Normatividad para el turismo de aventura
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.4 Aplicación de la normatividad turística
      
        

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
