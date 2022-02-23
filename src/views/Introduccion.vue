<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero        
        span
          i.fas.fa-info
      h1 Introducción

    div.introduccion-div
      .row.justify-content-center.mb-5
        .col-lg-12.p-5
          figure.px-5
            img(src='@/assets/curso/introduccion/img01.png') 

      .row.justify-content-center.mb-5
        .col-lg-8
          p.mb-5 Realizar la integración de los personajes en los escenarios con los cuales se trabaja en la animación 3D, requiere conocimientos específicos, como el uso de cámaras y los movimientos que estas requieren. También se involucra los principios de la animación de objetos. El propósito es dotar a los personajes de realismo, además debe respetarse las leyes de la física, con el fin de integrar de forma más convincente no solo los movimientos, sino también las expresiones y las emociones que transmiten dichos personajes.
          h3.text-center(style="color: #5DB0A2") La práctica es la que permite los mejores resultados. 
          h2.text-center(style="color: #D44F4A") ¡Bienvenidos!
          
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
