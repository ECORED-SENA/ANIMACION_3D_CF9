<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Ciclos de Animación

    div.tema3-div1.p-4.mb-5
      p.mb-5 En <i>Blender</i>, se verán los ciclos de animación de los personajes, tales como caminar, correr, saltar, entre otros; para ello se trabajará con la línea de tiempo y la composición mediante fotogramas clave. <b>En los siguientes videos se verá cómo hacerlo, de igual manera el documento enlazado que da el paso a paso para conseguir el resultado:</b>

      .row.justify-content-center
        .col-lg-6
          figure
            img(src="@/assets/curso/tema3/img01.png", alt="historia imagén 1")

    .tema1-TabsA.mb-5    
      TabsA.color-acento-botones
        .tarjeta.p-4(titulo="Ciclo caminado")        
          h4.mb-4.tema-3-color-tab Explicación del proceso
          h4.mb-5 Ciclo caminado
          p.mb-4 Un ciclo de caminado puede ser un poco difícil de hacer, si no se tiene una correcta interpretación. Para realizar este ciclo en <i>loop</i>,  se ha dispuesto de un video explicativo:
          .row.justify-content-center.mb-5
            .col-lg-10
              figure.mb-0
                .video                  
                  iframe(width="1280" height="722" src="https://www.youtube.com/embed/9veMyaN0SYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .row.justify-content-center.align-items-center
            .col-7
              .tema-1-anexo1
                a.anexo(:href="obtenerLink('/downloads/ciclocaminando.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p No se debe olvidar la consulta del documento que se ofrese, en donde se ampliará la información al respecto.

        .tarjeta.p-4(titulo="Ciclo de correr")        
          h4.mb-4.tema-3-color-tab Explicación del proceso
          h4.mb-5 Ciclo de correr
          p.mb-4 La configuración para el ciclo de correr es básicamente la misma que la del ciclo de caminado, obviamente variando las poses. Para ello se modificarán las posiciones para el ciclo de correr, para después en el bloque de animación aumentar o reducir la velocidad, tal como se puede apreciar en el siguiente video:
          .row.justify-content-center
            .col-lg-10
              figure.mb-0
                .video                  
                  iframe(width="1280" height="720" src="https://www.youtube.com/embed/MaAqgpIBOjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

        .tarjeta.p-4(titulo="<i>Non Linear Animation</i>")        
          h4.mb-4.tema-3-color-tab Explicación del proceso
          h4.mb-5 <i>Non Linear Animation</i>
          p.mb-4 Si bien se puede crear clips de animación en un orden específico con una historia específica en mente, la animación no lineal se refiere al proceso de mover, organizar, manipular y combinar esos clips para producir una nueva serie de movimientos. Se invita a ver el siguiente video respecto a este tema:
          .row.justify-content-center.mb-4 
            .col-lg-10
              figure.mb-0
                .video                  
                  iframe(width="1280" height="722" src="https://www.youtube.com/embed/9veMyaN0SYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          
          
          .row.justify-content-center.align-items-center
            .col-7
              .tema-1-anexo1
                a.anexo(:href="obtenerLink('/downloads/NonLinearAnimation.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Igualmente se podrá consultar el siguiente documento, en donde encontrará más información al respecto.

        .tarjeta.p-4(titulo="Mezcla de animaciones con <br><i>Non Linear Animation</i>")        
          h4.mb-4.tema-3-color-tab Explicación del proceso
          h4.mb-5 Mezcla de animaciones con <i>Non Linear Animation</i>
          p.mb-4 <i>Blender</i> facilita la tarea de generar cadenas de movimientos, en donde se pueden integrar y mezclar y de esta forma crear interpolaciones entre animaciones, de esta forma crear una base de <i>loops</i>, movimientos dinámicos y fluidos. En el siguiente video se ofrece una explicación al respecto:
          .row.justify-content-center
            .col-lg-10
              figure.mb-0
                .video                
                  iframe(width="1280" height="720" src="https://www.youtube.com/embed/be96F6qpQj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

        .tarjeta.p-4(titulo="Ciclo a través de un <em>path</em>")        
          h4.mb-4.tema-3-color-tab Explicación del proceso
          h4.mb-5 Ciclo a través de un #[i path]
          p.mb-4 En los ciclos de animación, para que el personaje siga el camino o ruta determinada que le ha asignado, se puede anexar un #[i path]. El siguiente video explica el proceso, paso a paso:
          .row.justify-content-center
            .col-lg-10
              figure.mb-0
                .video                  
                  iframe(width="1280" height="720" src="https://www.youtube.com/embed/_LN1oVVsjp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

        .tarjeta.p-4(titulo="Animaciones no cíclicas")        
          h4.mb-4.tema-3-color-tab Explicación del proceso
          h4.mb-5 Animaciones no cíclicas
          p.mb-4 Las animaciones no cíclicas se refieren a los movimientos que no son repetitivos, sino que son de una sola acción, entre estos encontramos ejemplos, como saltar, agacharse, girar, entre otros. Se invita a consultar los siguientes videos, donde se encontrará información al respecto:
          .tema-1.mb-5
          TabsB.color-acento-botones.mb-5 
            .py-4.py-md-5(titulo="Salto con exageración y <i>stretch</i>" :icono="require('@/assets/curso/tema1/img04.svg')")          
              figure.mb-0
                .video                              
                  iframe(width="1280" height="720" src="https://www.youtube.com/embed/OX7OiuCu24I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            .py-4.py-md-5(titulo="Agacharse y recoger" :icono="require('@/assets/curso/tema1/img04.svg')")
              figure.mb-0
                .video                            
                  iframe(width="1280" height="720" src="https://www.youtube.com/embed/hVF-GCOJgbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            .py-4.py-md-5(titulo="Salto y giro" :icono="require('@/assets/curso/tema1/img04.svg')")
              figure.mb-0
                img(src='@/assets/curso/tema3/gif Salta y gira.gif') 

          .row.justify-content-center.align-items-center
            .col-7
              .tema-1-anexo1
                a.anexo(:href="obtenerLink('/downloads/Salto.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p Igualmente se encuentra a su disposición el siguiente documento explicativo, sobre este tema.
          

        .tarjeta.p-4(titulo="Interacción de personajes con <i>props</i>")        
          h4.mb-4.tema-3-color-tab Explicación del proceso
          h4.mb-5 Interacción de personajes con <i>props</i>
          p.mb-4 En <i>Blender</i>  se dispone de un modificador para hacer la labor de animación en la que los personajes interactúan con dichos objetos; se invita a ver los siguientes videos, que explican este tema:
          .row.justify-content-center.mb-4
            .col-lg-10
              figure.mb-0
                .video                  
                  iframe(width="1280" height="720" src="https://www.youtube.com/embed/xELSwcEiqnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          
          .row.justify-content-center.align-items-center
            .col-7
              .tema-1-anexo1
                a.anexo(:href="obtenerLink('/downloads/InteraccionPersonajesconProps.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p También puede consultar el documento que se encuetra a continuación en donde se amplía sobre el tema.
</template>

<script>
export default {
  name: 'Tema3',
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
