import React, { useEffect, useState } from 'react'
import { STRAPI_API, API_SERVER } from '../API'

import { CasoCarousel } from '../componentes/CasoCarousel'

import '../styles/Casos.css'

// static data

// const casosCom = [
//   {
//     image:
//       'https://images.pexels.com/photos/12168556/pexels-photo-12168556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Kubernets',
//     subtitle: 'Comercial',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/4221068/pexels-photo-4221068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Clive',
//     subtitle: 'Comercial',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/11577405/pexels-photo-11577405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Kim',
//     subtitle: 'Comercial',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/11987412/pexels-photo-11987412.jpeg',
//     title: 'Fausto',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/12168556/pexels-photo-12168556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     title: 'Kubernets',
//     subtitle: 'Comercial',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   }
// ]
// const casosSal = [
//   {
//     image:
//       'https://images.pexels.com/photos/11258764/pexels-photo-11258764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     title: 'Salubet',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/9771524/pexels-photo-9771524.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     title: 'Guiran',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/9726492/pexels-photo-9726492.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     title: 'Salubit',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/5535714/pexels-photo-5535714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     title: 'Salud & More',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   }
// ]
// const casosSoc = [
//   {
//     image:
//       'https://images.pexels.com/photos/2102632/pexels-photo-2102632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     title: 'Dame la mano HN',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/7900687/pexels-photo-7900687.jpeg?cs=srgb&dl=pexels-efecan-efe-7900687.jpg&fm=jpg',
//     title: 'CJOL',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/9277357/pexels-photo-9277357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     title: 'Chilas',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   },
//   {
//     image:
//       'https://images.pexels.com/photos/10572220/pexels-photo-10572220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     title: 'XCHEMATIC',
//     desc: 'Save hundreds of admin hours by reducing back and forth',
//     subtitle: 'Comercial',
//     descripcion:
//       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
//     integrantes: [
//       {
//         nombre: 'Marlon Geovany Castro Mejia',
//         profile:
//           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
//         email: 'marlongeo1999@gmail.com'
//       },
//       {
//         nombre: 'Maria Fernanda Velasquez Amaya',
//         profile:
//           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
//         email: 'marifer@gmail.com'
//       }
//     ]
//   }
// ]

export const Casos = () => {
  // const casosTec = [
  //   {
  //     image:
  //       'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //     title: 'BeLeaf',
  //     subtitle: 'Tecnología',
  //     desc: 'Save hundreds of admin hours by reducing back and forth',
  //     descripcion:
  //       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
  //     integrantes: [
  //       {
  //         nombre: 'Marlon Geovany Castro Mejia',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Maria Fernanda Velasquez Amaya',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
  //         email: 'marifer@gmail.com'
  //       },
  //       {
  //         nombre: 'Pauline L Revilla',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025402124543.jpg',
  //         email: 'Pauline.cro@hotmail.com'
  //       },
  //       {
  //         nombre: 'Idell J Thomas',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025035765808.jpg',
  //         email: 'araceli.cro@hotmail.com'
  //       }
  //     ]
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/12406415/pexels-photo-12406415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Cerebro de confianza',
  //     subtitle: 'Tecnología',
  //     desc: 'Save hundreds of admin hours by reducing back and forth',
  //     descripcion: 'Save hundreds of admin hours by reducing back and forth',
  //     integrantes: [
  //       {
  //         nombre: 'Juan',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Pedro',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Marlon',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Maria',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       }
  //     ]
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/4151965/pexels-photo-4151965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Xchematic',
  //     subtitle: 'Tecnología',
  //     desc: 'Save hundreds of admin hours by reducing back and forth',
  //     descripcion: 'Save hundreds of admin hours by reducing back and forth',
  //     integrantes: [
  //       {
  //         nombre: 'Juan',
  //         profile:
  //           'https://images.pexels.com/photos/4151965/pexels-photo-4151965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Pedro',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Marlon',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Maria',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       }
  //     ]
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/6942818/pexels-photo-6942818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Planets Friend',
  //     subtitle: 'Tecnología',
  //     desc: 'Save hundreds of admin hours by reducing back and forth',
  //     descripcion: 'Save hundreds of admin hours by reducing back and forth',
  //     integrantes: [
  //       {
  //         nombre: 'Juan',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Pedro',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Marlon',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Maria',
  //         profile:
  //           'https://images.pexels.com/photos/12081169/pexels-photo-12081169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //         email: 'marlongeo1999@gmail.com'
  //       }
  //     ]
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/1563563/pexels-photo-1563563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'BeLeaf',
  //     subtitle: 'Tecnología',
  //     desc: 'Save hundreds of admin hours by reducing back and forth',
  //     descripcion:
  //       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
  //     integrantes: [
  //       {
  //         nombre: 'Marlon Geovany Castro Mejia',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Maria Fernanda Velasquez Amaya',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
  //         email: 'marifer@gmail.com'
  //       },
  //       {
  //         nombre: 'Pauline L Revilla',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025402124543.jpg',
  //         email: 'Pauline.cro@hotmail.com'
  //       },
  //       {
  //         nombre: 'Idell J Thomas',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025035765808.jpg',
  //         email: 'araceli.cro@hotmail.com'
  //       }
  //     ]
  //   },
  //   {
  //     image:
  //       'https://images.pexels.com/photos/13162215/pexels-photo-13162215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'BeLeaf',
  //     subtitle: 'Tecnología',
  //     desc: 'Save hundreds of admin hours by reducing back and forth',
  //     descripcion:
  //       'Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Establecer valor (Costo) a cada oportunidad de negocio que llega a la empresa, a través de la aplicación de nuestra herramienta de BI (Business Intelligence) que busca establecer claridad en los distintos modelos de negocio de una empresa y la práctica generando una comparación entre ambas realidades con el fin de generar métricas que puedan determinar valores exactos y así valorar cada oportunidad de negocio o bien el número de negocios que se deben realizar con un determinado cliente para que la relación B2B sea rentable. Esto acompañado de servicios que ayudan a mejorar los procesos o las buenas prácticas de la gestión empresarial.',
  //     integrantes: [
  //       {
  //         nombre: 'Marlon Geovany Castro Mejia',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/male/male108589513154.jpg',
  //         email: 'marlongeo1999@gmail.com'
  //       },
  //       {
  //         nombre: 'Maria Fernanda Velasquez Amaya',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025604941864.jpg',
  //         email: 'marifer@gmail.com'
  //       },
  //       {
  //         nombre: 'Pauline L Revilla',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025402124543.jpg',
  //         email: 'Pauline.cro@hotmail.com'
  //       },
  //       {
  //         nombre: 'Idell J Thomas',
  //         profile:
  //           'https://www.fakepersongenerator.com/Face/female/female20161025035765808.jpg',
  //         email: 'araceli.cro@hotmail.com'
  //       }
  //     ]
  //   }
  // ]
  const [casosTec, setCasosTec] = useState([])
  const [casosComercial, setcasosComercial] = useState([]);
  const [casosSocial, setcasosSocial] = useState([]);
  const [casosHealth, setCasosHealth] = useState([]);
  const [casosArtesanal, setCasosArtesanal] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchContactanos = async () => {
    const response = await fetch(
      `${API_SERVER}casos?seccionCasos=Social`
    )
    const data = await response.json()
    setCasosTec(data)
    console.log(data)
  }

  const fetchCasos = async () => {
    const response = await fetch(`${STRAPI_API}casos-exitos?populate[0]=image&populate[1]=rubro`);
    const data = await response.json();
    data.data.forEach( caso => {
      
      if( caso.attributes.rubro.data.attributes.titulo === 'Comercial' ){
        console.log('entro comercial')
        setcasosComercial([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'comercial',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosComercial]);
        console.log(casosComercial)
      }

      if( caso.attributes.rubro.data.attributes.titulo === 'Tecnologia' ){
        console.log('entro tec')
        setCasosTec([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'Tecnologia',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosTec]);
      }

      if( caso.attributes.rubro.data.attributes.titulo === 'Health Care' ){
        console.log('entro care')
        setCasosHealth([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'Health Care',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosHealth]);
      }

      if( caso.attributes.rubro.data.attributes.titulo === 'Social' ){
        console.log('entro social')
        setcasosSocial([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'Social',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosSocial]);
        
      }

      if( caso.attributes.rubro.data.attributes.titulo === 'Artesanal' ){
        setCasosArtesanal([{
          id    : caso.id,
          title : caso.attributes.tittle,
          desc  : caso.attributes.short_description,
          subtitle: 'Artesanal',
          integrantes: [],
          descripcion: caso.attributes.description,
          image      : caso.attributes.image.data.attributes.url.slice(1)
        }, ...casosArtesanal]);
      }

      setLoading(true)

    });
  }

  useEffect(() => { 
    // fetchContactanos()
    fetchCasos();
  }, [])

  return (
    <div className='emerge-down'>
      <div className='casos'>
        <div className='casos-container'>
          <div className='casos-title section-title'>
            CASOS QUE <span style={{ color: '#e1575f' }}>INSPIRAN🥇</span>
          </div>
            {
              loading && casosTec.length > 0 && <CasoCarousel data={casosTec} section={'Tecnología'} />
            }
            {
              loading && casosComercial.length > 0 && <CasoCarousel data={casosComercial} section={'Comercial'} />
            }
            {
              loading && casosSocial.length > 0 && <CasoCarousel data={casosSocial} section={'Social'} />
            }
            {
              loading && casosHealth.length > 0 && <CasoCarousel data={casosHealth} section={'Salud'} />
            }
            {
              loading && casosArtesanal.length > 0 && <CasoCarousel data={casosArtesanal} section={'Artesanal'} />
            }

            {/* // loading && (
            // <>
            //   <CasoCarousel data={casosTec} section={'Tecnología'} />
            //   <CasoCarousel data={casosComercial} section={'Comercial'} />
            //   <CasoCarousel data={casosSocial} section={'Social'} />
            //   <CasoCarousel data={casosHealth} section={'Salud'} />
            //   <CasoCarousel data={casosArtesanal} section={'Artesanal'} /> 
            // </>
            // ) */}
            
        </div>
      </div>
    </div>
  )
}
