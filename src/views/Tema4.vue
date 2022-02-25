<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Animación Facial

    div.tema3-div1.p-4.mb-5
      p.mb-5 En Blender, se verán los ciclos de animación de los personajes, tales como caminar, correr, saltar, entre otros; para ello se trabajará con la línea de tiempo y la composición mediante fotogramas clave. <b>En los siguientes videos se verá cómo hacerlo, de igual manera el documento enlazado que da el paso a paso para conseguir el resultado:</b>

      .row.justify-content-center
        .col-lg-6
          figure
            img(src="@/assets/curso/tema4/img01.png")
    
    #t4_1.titulo-segundo.color-acento-contenido
      h2 4.1 LIP SYNC

    .tema4-div1.mb-5
      p.mb-4 La sincronización de animación facial (Lip Sync) es un proceso que consiste en sincronizar los gestos, articulando los labios, de un personaje con un audio o la voz de un actor, de manera que encajen perfectamente para hacer que parezca que realmente se está expresando.
      p.mb-5 Para una animación en 2D son suficientes cuatro posiciones gestuales de los labios, haciendo más sencillo el proceso de sincronización; mientras que, para la animación de un modelo 3D existen demasiadas posiciones gestuales para los labios, pues es necesario que cada una exprese un sonido en particular (como se observa en la Figura 2 Expresiones faciales de labios). Con esto, se logra que el proceso de sincronización se vuelva mucho más complejo, ya que es necesario calcular los tiempos de la expresión (descomposición), así como la animación real de los labios para que coincida con los fonemas de la pista de audio.

      .titulo-sexto.color-acento-contenido
        h5 Figura 2
        span Expresiones faciales de labios

      .row.justify-content-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema4/img03.png")

    p.mb-5 Es posible configurar una animación de sincronización de labios automatizada en blender, para cualquier personaje o un objeto aleatorio que encuentre en un sitio web de repositorio de archivos. En la siguiente figura 3, puede observarse el movimiento de los labios y boca, al realizar el proceso; además, <b>se invita a ver el siguiente video, con más información sobre este tema:</b>

    .row.justify-content-center.mb-5
      .col-lg-8
        figure.mb-0
          .video            
            iframe(width="1280" height="720" src="https://www.youtube.com/embed/DyZvxdoLoZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

    .titulo-sexto.color-acento-contenido
        h5 Figura 3
        span LipSync de un modelo en 3D animado en blender 

    .row.justify-content-center.mb-5 
        .col-lg-8
          figure
            img(src="@/assets/curso/tema4/img04.png")
            figcaption Nota. Tomado de https://3dwithus.com/automated-lip-sync-animation-3d-model-blender-rhubarb

    #t4_2.titulo-segundo.color-acento-contenido
      h2 4.2  Expresiones faciales
    
    p.mb-5 La animación facial es un proceso que consta de métodos y técnicas enfocadas en crear diferentes modelos de la cara de un personaje que puede ser humano, animal alienígena o cualquier otro tipo de criatura. Este proceso es importante, ya que a través de los gestos o expresiones modelados se logra transmitir una gran variedad de emociones, necesarias para una comunicación efectiva tanto verbal, como no verbal entre nuestro personaje y los espectadores.

    .cajon.color-secundario.p-4.mb-4      
      p.mb-0 Estas expresiones faciales están íntimamente ligadas con los estados emocionales humanos, los cuales se manifiestan a través de pequeños cambios que ocurren en el rostro (micro expresiones), por lo que, cada expresión facial debe transmitir con suficiente naturalidad y realismo, el sentimiento o emoción que se quiera reflejar en nuestro personaje.

    p.mb-5 La siguiente figura 4 muestra la jerarquía de las emociones más importantes:

    .titulo-sexto.color-acento-contenido
      h5 Figura 4
      span Jerarquía de las emociones humanas
    figure.mb-5
      img(src="@/assets/curso/tema4/img05.svg")
      figcaption Nota. Tomado de https://www.psicologia-online.com/clasificacion-y-caracteristicas-de-las-emociones-1079.html

    p.mb-5 Las emociones básicas o primarias, pueden ser positivas implicando sentimientos agradables, como el amor y la alegría; o negativas, las cuales se producen por sucesos desfavorables ligados a sentimientos de frustración o desagrado como la ira, la tristeza, el miedo y el asco. Estas seis emociones, llamadas también emociones universales, son las más importantes, ya que a partir de ellas se desprende una gran variedad de otros sentimientos.

    #t4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Emociones básicas o primarias

    p.mb-4 Las emociones, son consideradas como una respuesta del organismo que implica una excitación fisiológica, una conducta expresiva, y una experiencia consciente. Además de ser una respuesta adaptativa del organismo, involucra pensamientos y actitudes e influyen en la forma en como vemos el mundo.
    p.mb-5 <b>Las emociones básicas o primarias son: </b>

    .cajon.color-secundario.p-4.mb-4      
      p.mb-0 Las emociones básicas o primarias, son aquellas que se distinguen por tener un patrón de expresión facial y fisiológico específico y distintivo y que se observan permiten a los personajes de caricatura, tener una expresión inequívoca. <b>Entre estas encontramos:</b>

    .tema-4.mb-5
      .tarjeta.tarjeta--azul.p-4
        
            SlyderA
              .row.align-items-center.justify-content-center
                .col-lg-4
                  figure.mb-0
                    img(src="@/assets/curso/tema4/img06.png")                
                .col-lg-6.px-5
                  h3 Amor
                  p.mb-0 Es un sentimiento de afecto universal que se tiene hacia una persona, animal o cosa, ligado a una serie de sensaciones que trae consigo felicidad, paz y tranquilidad.

              .row.align-items-center.justify-content-center
                .col-lg-4
                  figure.mb-0
                    img(src="@/assets/curso/tema4/img07.png")                
                .col-lg-6.px-5
                  h3 Alegría
                  p.mb-0 Sentimiento que se manifiesta a partir del bienestar personal y un buen estado de ánimo, generando sensaciones de satisfacción que generalmente van acompañadas de sonrisas o risas.

              .row.align-items-center.justify-content-center
                .col-lg-4
                  figure.mb-0
                    img(src="@/assets/curso/tema4/img08.png")                
                .col-lg-6.px-5
                  h3 Ira o furia
                  p.mb-0 Es una reacción de irritación, o cólera causada por la indignación y enojo al sentirnos vulnerados de alguna forma. Puede tender hacia conductas violentas como los gritos o golpes.

              .row.align-items-center.justify-content-center
                .col-lg-4
                  figure.mb-0
                    img(src="@/assets/curso/tema4/img09.png")                
                .col-lg-6.px-5
                  h3 Tristeza
                  p.mb-0 Es un estado emocional causado por acontecimientos desfavorables o no placenteros, denotando pesadumbre o melancolía. Está asociada a sensaciones pesimistas y con tendencia al llanto.

              .row.align-items-center.justify-content-center
                .col-lg-4
                  figure.mb-0
                    img(src="@/assets/curso/tema4/img10.png")                
                .col-lg-6.px-5
                  h3 Miedo
                  p.mb-0 Es una emoción adaptativa que funciona como un mecanismo de alarma que se activa frente a un peligro o amenaza, cuya función es protegernos y/o alejarnos de un suceso que no estamos preparados para afrontar.
              
              .row.align-items-center.justify-content-center
                .col-lg-4
                  figure.mb-0
                    img(src="@/assets/curso/tema4/img11.png")                
                .col-lg-6.px-5
                  h3 Asco
                  p.mb-0 Es una reacción ocasionada por la repugnancia hacia algo, o por una impresión desagradable, es una emoción adaptativa, ya que nos aleja de peligros como alimentos en mal estado o venenosos, asegurando nuestra supervivencia.

    #t4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Emociones secundarias o subordinadas más comunes

    p.mb-4 Además, se encuentran las emociones secundarías o subordinadas a las emociones básicas. Estas surgen del contexto de las relaciones interpersonales; es decir, se desarrollan a partir de la experiencia, y tienen que ver con el aprendizaje y el contexto social de las personas.
    p.mb-5 <b>Las principales emociones secundarias son, ver figura 5:</b>

    .titulo-sexto.color-acento-contenido
      h5 Figura 5
      span Emociones secundarias o subordinadas

    .row.align-items-center.justify-content-center.mb-3
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/tema4/img12.png")    
      .col-lg-6
          figure.mb-0
          img(src="@/assets/curso/tema4/img13.png")    
    .row.align-items-center.justify-content-center.mb-3
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/tema4/img14.png")    
      .col-lg-6
          figure.mb-0
          img(src="@/assets/curso/tema4/img15.png")    
    .row.align-items-center.justify-content-center.mb-3
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/tema4/img16.png")    
      .col-lg-6
          figure.mb-0
          img(src="@/assets/curso/tema4/img17.png")    
    .row.align-items-center.justify-content-center.mb-3
      .col-lg-5
        figure.mb-0
          img(src="@/assets/curso/tema4/img18.png")    
      .col-lg-6
    
    .tema4-div20
      figcaption.mb-5 Nota. Tomado de https://marivilastra.com/wp-content/uploads/2019/02/marivi-lastra-las-microexpresiones-y-las-emociones.jpg 
          
      p.mb-5 Las expresiones faciales usadas comúnmente en personajes pueden ser consultadas en el siguiente video: 
      .row.align-items-center.justify-content-center.mb-3
        .col-lg-10
          figure.mb-0
            .video              
              iframe(width="1280" height="720" src="https://www.youtube.com/embed/yMR5RZCSa-s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)          

      Separador
</template>

<script>
export default {
  name: 'Tema4',
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
