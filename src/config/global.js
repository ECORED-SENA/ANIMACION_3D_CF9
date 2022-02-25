export default {
  global: {
    componenteFormativo: 'Animación de personajes 3D',
    descripcionCurso:
      'La animación 3D representa de forma tridimensional y con datos geométricos una representación tomada de la realidad. En este componente se trabajará sobre los diferentes procesos involucrados, los cuales cubren el Layouts de la escena, los principios de animación que están involucrados, como la animación corporal, facial, loops, locomoción y puesta en escena.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Layout en blender',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Integrando personaje en el escenario',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cámaras en Blender',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Movimientos de cámara y configuraciones',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Profundidad de campo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tipos de lente',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Addon camera rigs',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Historia de la animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Historia de la animación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de animación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Principios de animación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Animaciones básicas',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Fundamentos básicos de física',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ciclos de Animación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Animación Facial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'LIP SYNC',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Expresiones faciales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Emociones básicas o primarias',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Acting y entretenimiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Sintesis',
      //   nombreRuta: 'sintesis',
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Animation Arena. (2021). Acting and Animation.',
      link: 'http://www.animationarena.com/acting-and-animation.html',
    },
    {
      referencia: 'Blender. (2021). Camera View — Blender Manual.',
      link:
        'https://docs.blender.org/manual/es/2.93/editors/3dview/navigate/camera_view.html',
    },
    {
      referencia:
        'FLOOBYNOOBY. (2021). James Baxter - Notes on Acting for Animation.',
      link:
        'https://floobynooby.blogspot.com/2012/04/james-baxter-notes-on-acting-for.html?m=1',
    },
  ],
  glosario: [
    {
      termino: 'Addon',
      significado:
        'Programa que se puede instalar en Blender para facilitar el desarrollo de algún proceso complejo en el software.',
    },
    {
      termino: 'Emociones',
      significado:
        'Reacciones psíquicas y físicas de los seres vivos, en las cuales reflejan comportamientos inherentes a su ser.',
    },
    {
      termino: 'Extrovertido',
      significado:
        'La característica de una persona activa, simpática, que demuestra sus emociones.',
    },
    {
      termino: 'Introvertido',
      significado:
        'Característica de una persona que es tímida y le da pena entablar conversaciones con otras personas. ',
    },
    {
      termino: 'Layout',
      significado:
        'Etapa de la animación 3D en la cual se posicionan los elementos en el escenario y se posiciona la escena integrando todo lo que va en ella de acuerdo al storyboard.',
    },
    {
      termino: 'Riggeado',
      significado:
        'Son los objetos 3D o 2D que adquieren una estructura para que puedan ser animados gracias a ellos.',
    },
    {
      termino: 'Renderizar',
      significado:
        'Es el proceso en el que un elemento que se encuentra en el mundo 3D, sea procesado en una imagen o un video. para ser visualizado fuera del software.',
    },
    {
      termino: 'Sincronización',
      significado:
        'Es la coordinación de tienen mínimo dos elementos, estos deben coincidir en tiempo o espacio.',
    },
  ],
  complementario: [
    {
      texto:
        'ESCARDO | Club de Animación 3D. (2014). Tutorial de Animacion 3D: Brazos IK FK en Personajes / Rigs en Maya, Blender, 3DsMax, C4D.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oEHBqiq97jA',
    },
    {
      texto:
        'ARTNATOMYA. (2020). Página de consulta y compra de elementos de diseño gráfico y animación.',
      tipo: 'Página web',
      link: 'http://www.artnatomia.net/uk/artnatomya.html',
    },
    {
      texto:
        'Osipa, J. (2010). Stop staring: facial modeling and animation done right.',
      tipo: 'Libro - Biblioteca SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000062162',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
