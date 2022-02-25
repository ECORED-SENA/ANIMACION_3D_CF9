<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1 
      h1 <i>Layout</i> en <i>blender</i>

    div.tema1-div1.px-5.pt-5.mb-2
      p.mb-4 Para empezar a crear el <i>layout</i> de la escena (figura 1) es importante tener en cuenta varios aspectos a la hora de traer los elementos creados e integrarlos en el escenario, para su correcta utilización y que no se generen complicaciones a la hora de empezar a trabajar con estos.
      p.mb-5 Para integrar elementos se debe importarlos a un escenario nuevo, la manera de hacerlo es importando archivos fbx para elementos sin <i>rig</i>, y para elementos <i>riggeados</i>, lo ideal es utilizar la opción <i>“append”</i> que sería algo así como integración. A continuación, se ven cómo son los pasos para organizar la exportación e importación.      
      div.BorTit.mb-3         
        p.mb-0 <b>Figura 1</b> <i>Layout</i> 
      figure.mb-0
        img(src='@/assets/curso/tema1/img01.png') 
        figcaption Nota. SENA (2021).
    

    div.tema1-div2.pt-5
      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Integrando personaje en el escenario

      p.mb-5 Para llevar el personaje <i>riggeado</i>, a un nuevo escenario, lo primero que se debe realizar es la integración en una sola colección, de todos los elementos y colecciones que lo componen. En los siguientes videos se ve cómo hacerlo eficientemente:

      .tema1-TabsA.mb-5    
        TabsA.color-acento-botones
          .tarjeta.p-4(titulo="Integrando archivos <i>blend</i>")
            h4.mb-4 Integrando archivos <i>blend</i> en el escenario
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .tarjeta.p-4(titulo="Integrando archivos fbx")
            h4.mb-4 Integrando archivos fbx en el escenario
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-4 De igual manera en el documento enlazado se dispone el paso a paso para conseguir buenos resultados:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Cámaras en <i>Blender</i>

    div.p-0.d-flex.align-items-center.mb-5(style="position:relative")
      div.px-5(style="position:absolute; width:100%")
        .row.tema1-div-1-2.px-5.py-4
          .col-lg-7
            p.mb-4 Antes de poder renderizar nuestra escena, en <i>Blender</i> es necesario crear una cámara para poder tener el punto de vista en el cual convertimos la escena en imágenes.
            p.mb-0 A continuación, se aprenderá a poner las cámaras y a moverlas, para generar las vistas necesarias para la escena, construyendo el <i>layout</i> con ello. En los siguientes videos se ve cómo hacerlo de forma detallada:
          .col-lg-5
      .row.justify-content-center.align-items-center(style=" width:100%; z-index:1000")
        .col-7
        .col-4
          figure.mb-0
            img(src='@/assets/curso/tema1/img03.png') 
        .col-1

    .tema-1.mb-5
      TabsB.color-acento-botones
        .py-4.py-md-5(titulo="Introducción a cámaras" :icono="require('@/assets/curso/tema1/img04.svg')")          
          figure.mb-0
            .video              
              iframe(width="1280" height="722" src="https://www.youtube.com/embed/Y4830kx98RA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .py-4.py-md-5(titulo="Bloqueo de cámaras" :icono="require('@/assets/curso/tema1/img04.svg')")
          figure.mb-0
            .video              
              iframe(width="1280" height="720" src="https://www.youtube.com/embed/kXdE9VYGbu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .py-4.py-md-5(titulo="Cámara a <i>view</i>" :icono="require('@/assets/curso/tema1/img04.svg')")
          figure.mb-0
            .video              
              iframe(width="1280" height="720" src="https://www.youtube.com/embed/tH4kOCcDrSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-7
        .tema-1-anexo1
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p De igual manera en el documento enlazado se encuentra el paso a paso para conseguir el resultado esperado con el uso de la cámara <i>blender</i>:
        
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Movimientos de cámara y configuraciones

    p.mb-5 Con <i>blender</i> se puede generar movimientos de cámara de manera sencilla. A continuación, se mencionarán los movimientos de cámara y cómo realizarlos:<br><b>En los siguientes videos se verá cómo llevar los movimientos de cámara y configuraciones:</b>
    .tema-1.mb-5
      TabsB.color-acento-botones
        .py-4.py-md-5(titulo="Movimientos de camara" :icono="require('@/assets/curso/tema1/img04.svg')")          
          figure.mb-0
            .video            
              iframe(width="1280" height="720" src="https://www.youtube.com/embed/NkAtp1yoM_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .py-4.py-md-5(titulo="<i>Background</i> images <i>camera</i>" :icono="require('@/assets/curso/tema1/img04.svg')")
          figure.mb-0
            .video            
              iframe(width="1280" height="720" src="https://www.youtube.com/embed/bp0lP9UL4X4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .py-4.py-md-5(titulo="Perspectiva con <i>shift</i>" :icono="require('@/assets/curso/tema1/img04.svg')")
          figure.mb-0
            .video              
              iframe(width="1280" height="720" src="https://www.youtube.com/embed/67_52wK9G5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-7
        .tema-1-anexo1
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Entendiendo que puede ser un proceso complejo, se invita a revisar el siguiente documento en donde se encontrará el respectivo paso a paso:
    
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Profundidad de campo

    div.p-0.d-flex.align-items-center.mb-5(style="position:relative")
      div.px-5(style="position:absolute; width:100%")
        .row.tema1-div-1-2.px-5.py-4
          .col-lg-7
            p.mb-0 La profundidad de campo ayuda a destacar los objetos posicionados en el escenario, resaltando puntos de interés diferenciados entre distancias. <b>De igual manera en el siguiente video se verá el proceso:</b>
          .col-lg-5
      .row.justify-content-center.align-items-center(style=" width:100%; z-index:1000")
        .col-7
        .col-4
          figure.mb-0
            img(src='@/assets/curso/tema1/img05.png') 
        .col-1

    figure.mb-5
      .video           
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/67_52wK9G5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-7
        .tema-1-anexo1
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Igualmente, en el documento que encuentra a continuación hay una explicación más amplia este proceso:
    
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5  Tipos de lente

    p.mb-5 Los tipos de lente en <i>blender</i> son la manera en que los objetos 3D son representados en una imagen 2D, para ello se puede jugar con las características de sus propiedades. <b>A continuación, el video que se encuentra es bastante explicativo al respecto:</b>
    figure.mb-5
      .video        
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/gqDMp7ou2xs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.align-items-center.mb-5
      .col-7
        .tema-1-anexo1
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Para una mejor comprensión del tema, se ofrece el siguiente documento en donde se puede ampliar más sobre el tema:
    
    #t_1_6.titulo-segundo.color
      h2 1.6  <i>Addon</i> <i>camera</i> <i>rigs</i>

    p.mb-4 <i>Blender</i> dispone de un <i>addon</i>, con el cual se puede generar cámaras con <i>rigg</i>, como si estuviesen montadas en maquinaria, como si fuera en un set de grabación, con este se pueden generar movimientos de cámara y planos de una manera cercana a la realidad. 
    p.mb-4 <b>Al igual que los anteriores procedimientos, a continuación, se podrá observar el video explicativo a este proceso:</b>
    figure.mb-5
      .video      
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/GcQeDWy-QE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        
    .row.justify-content-center.align-items-center
      .col-7
        .tema-1-anexo1
          a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Así mismo, el siguiente documento explica paso a paso el proceso, se invita a consultarlo:

    
    Separador
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
