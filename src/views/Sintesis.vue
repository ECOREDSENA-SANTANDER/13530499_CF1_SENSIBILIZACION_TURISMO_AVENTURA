<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Un destino turístico requiere una infraestructura adecuada que garantice accesibilidad, seguridad, señalización, servicios y planta turística para ofrecer experiencias de calidad. A esto se suma la importancia de la gestión y regulación mediante normas, seguridad turística, sostenibilidad y el Registro Nacional de Turismo (RNT), que aseguran el desarrollo legal y responsable de las actividades. Finalmente, su potencial depende de los atractivos turísticos, el patrimonio cultural, los espacios naturales y las características geográficas, como el relieve y la altitud, que determinan las posibilidades para el turismo de aventura.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muestra sus principales componentes: destino turístico, gestión y regulación, potencial del territorio y cliente, con elementos como infraestructura, seguridad, normatividad, atractivos naturales y culturales, y motivaciones del visitante")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
