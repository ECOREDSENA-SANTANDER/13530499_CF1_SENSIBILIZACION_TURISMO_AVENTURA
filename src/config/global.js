export default {
  global: {
    Name: 'Atención, orientación e información al usuario en turismo de aventura',
    Description: 'Este componente formativo permite al aprendiz comprender los fundamentos del turismo de aventura, reconociendo la estructura turística del destino, la normatividad aplicable y los elementos necesarios para el desarrollo de experiencias seguras y sostenibles. Además, fortalece el conocimiento sobre recursos y atractivos turísticos, prestadores de servicios, características del territorio y tendencias del mercado, promoviendo la planificación responsable de experiencias turísticas orientadas a la sostenibilidad, la innovación y la satisfacción del cliente.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
    menuPrincipal: {
  "menu": [
    {
      "nombreRuta": "inicio",
      "icono": "fas fa-home",
      "titulo": "Volver al inicio"
    },
    {
      "nombreRuta": "introduccion",
      "icono": "fas fa-info-circle",
      "titulo": "Introducción",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "tema1",
      "numero": "1",
      "titulo": "Turismo de Aventura",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "1.2",
          "titulo": "Infraestructura turística local",
          "hash": "t_1_2"
        },
        {
          "numero": "1.3",
          "titulo": "Normatividad para el turismo de aventura",
          "hash": "t_1_3"
        },
        {
          "numero": "1.4",
          "titulo": "Aplicación de la normatividad turística",
          "hash": "t_1_4"
        }
      ]
    },
    {
      "nombreRuta": "tema2",
      "numero": "2",
      "titulo": "Prestadores de servicios turísticos en el destino",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "2.1",
          "titulo": "Atractivo turístico",
          "hash": "t_2_1"
        },
        {
          "numero": "2.2",
          "titulo": "Clasificación de los atractivos turísticos según la metodología colombiana",
          "hash": "t_2_2"
        },
        {
          "numero": "2.3",
          "titulo": "Recurso turístico",
          "hash": "t_2_3"
        },
        {
          "numero": "2.4",
          "titulo": "Planta turística",
          "hash": "t_2_4"
        },
        {
          "numero": "2.5",
          "titulo": "Características geográficas de la zona",
          "hash": "t_2_5"
        },
        {
          "numero": "2.6",
          "titulo": "Cliente en turismo de aventura",
          "hash": "t_2_6"
        },
        {
          "numero": "2.7",
          "titulo": "Tipologías del cliente en turismo de aventura",
          "hash": "t_2_7"
        }
      ]
    }
  ],
  "subMenu": [
    {
      "icono": "fas fa-sitemap",
      "titulo": "Síntesis",
      "nombreRuta": "sintesis",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "actividad",
      "icono": "far fa-question-circle",
      "titulo": "Actividad didáctica",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "glosario",
      "icono": "fas fa-sort-alpha-down",
      "titulo": "Glosario"
    },
    {
      "icono": "fas fa-book",
      "titulo": "Referencias bibliográficas",
      "nombreRuta": "referencias"
    },
    {
      "icono": "fas fa-file-pdf",
      "titulo": "Descargar PDF",
      "download": "downloads/dist.pdf"
    },
    {
      "icono": "fas fa-download",
      "titulo": "Descargar material",
      "download": "downloads/material.zip"
    },
    {
      "icono": "far fa-registered",
      "titulo": "Créditos",
      "nombreRuta": "creditos"
    }
  ]
},
  glosario: [
    {
      termino: 'Atractivo turístico',
      significado: 'factor físico, natural o cultural que posee condiciones para integrarse de manera inmediata a productos turísticos y motivar el desplazamiento de visitantes.',
    },
    {
      termino: 'Cliente turístico',
      significado: 'persona que consume servicios y experiencias turísticas de acuerdo con sus necesidades, motivaciones y expectativas de viaje.',
    },
    {
      termino: 'Cultura turística',
      significado: 'conjunto de valores, comportamientos, costumbres y prácticas relacionadas con la actividad turística y la interacción entre visitantes y comunidades receptoras.',
    },
    {
      termino: 'Infraestructura turística',
      significado: 'conjunto de obras, servicios y equipamientos que facilitan el desarrollo de la actividad turística en un destino.',
    },
    {
      termino: 'Inventario turístico',
      significado: 'proceso técnico mediante el cual se identifican, registran y valoran los recursos y atractivos turísticos de un territorio.',
    },
    {
      termino: 'Motivación turística',
      significado: 'razón o impulso que lleva a una persona a realizar un viaje o participar en una experiencia turística determinada.',
    },
    {
      termino: 'Planta turística',
      significado: 'conjunto de empresas y servicios que atienden las necesidades de las personas visitantes, como alojamiento, alimentación, transporte y recreación.',
    },
    {
      termino: 'Recurso turístico',
      significado: 'elemento natural o cultural con potencial de aprovechamiento turístico que aún requiere fortalecimiento o adecuación para su uso inmediato.',
    },
    {
      termino: 'Sostenibilidad turística',
      significado: 'principio orientado al desarrollo responsable del turismo, procurando equilibrio entre aspectos ambientales, sociales, culturales y económicos.',
    },
    {
      termino: 'Turismo de aventura',
      significado: 'modalidad turística que integra actividad física, interacción con la naturaleza y experiencias emocionales asociadas con desafíos y descubrimiento del territorio.',
    },
    {
      termino: 'Ecosistema',
      significado: 'conjunto de seres vivos y elementos naturales que interactúan en un espacio determinado.',
    },
    {
      termino: 'Normatividad',
      significado: 'conjunto de leyes, normas y reglamentos que regulan una actividad.',
    },
    {
      termino: 'Canopy',
      significado: 'actividad turística que consiste en desplazarse por cables suspendidos entre árboles o montañas.',
    },
    {
      termino: 'Rafting',
      significado: 'deporte de aventura realizado en ríos utilizando balsas inflables.',
    },
    {
      termino: 'Senderismo',
      significado: 'actividad recreativa que consiste en caminar por senderos naturales.',
    },
    {
      termino: 'Parapente',
      significado: 'deporte aéreo que permite volar utilizando un paracaídas especial.',
    },
    {
      termino: 'Ciclomontañismo',
      significado: 'actividad deportiva realizada en bicicleta por terrenos montañosos.',
    },
    {
      termino: 'Accesibilidad',
      significado: 'condiciones que permiten el ingreso y desplazamiento hacia un lugar turístico.',
    },
    {
      termino: 'Seguridad turística',
      significado: 'medidas destinadas a prevenir riesgos y proteger a turistas y operadores.',
    },
    {
      termino: 'Guía de turismo',
      significado: 'persona encargada de orientar e interpretar la experiencia turística.',
    },
    {
      termino: 'Conservación ambiental',
      significado: 'protección y cuidado de los recursos naturales y ecosistemas.',
    },
    {
      termino: 'Turismo sostenible',
      significado: 'turismo que minimiza impactos negativos y favorece el equilibrio ambiental, social y económico.',
    },
    {
      termino: 'Cliente experiencial',
      significado: 'turista que busca emociones, recuerdos y experiencias significativas durante el viaje.',
    },
  ],
  referencias: [
    {
      referencia: 'Acerenza, M. A. (2006). Conceptualización, origen y evolución del turismo. Trillas.',
    },
    {
      referencia: 'Adventure Travel Trade Association. (2023). Adventure travel trends and insights. Adventure Travel Trade Association.',
    },
    {
      referencia: 'Boullón, R. C. (2006). Planificación del espacio turístico (4.ª ed.). Trillas.',
    },
    {
      referencia: 'Buckley, R. (2010). Adventure tourism management. Elsevier.',
    },
    {
      referencia: 'Colombia, Congreso de la República. (1996). Ley 300 de 1996. Ley General de Turismo. Diario Oficial No. 42.845.',
    },
    {
      referencia: 'Colombia, Congreso de la República. (2012). Ley 1558 de 2012 por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 48.487.',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2010). Metodología para la elaboración del inventario de atractivos turísticos. Viceministerio de Turismo.',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2015). Decreto 1074 de 2015. Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Diario Oficial No. 49.523.',
    },
    {
      referencia: 'Organización de los Estados Americanos. (1978). Metodología para inventarios turísticos.',
    },
    {
      referencia: 'Organización Mundial del Turismo. (2014). Global report on adventure tourism.',
    },
    {
      referencia: 'Organización Mundial del Turismo. (2021). Tourism and rural development.',
    },
    {
      referencia: 'Sung, H. H. (2004). Classification of adventure travelers: Behavior, decision making, and target markets. Journal of Travel Research, 42(4), 343–356.',
    },
    {
      referencia: 'Swarbrooke, J., Beard, C., Leckie, S., & Pomfret, G. (2003). Adventure tourism: The new frontier. Butterworth-Heinemann.',
    },
    {
      referencia: 'Urquía & Bas. (s. f.). Consentimiento informado: ¿Conoces lo que debes utilizar?',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
