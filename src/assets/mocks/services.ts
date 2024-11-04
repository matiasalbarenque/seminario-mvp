import type { ServiceMock } from '@/typings/mocks/services';

export const servicesMock: ServiceMock[] = [
  {
    name: "instagram",
    imgUrl: "instagram.png",
    label: "Instagram",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "Almacenan datos tuyos incluso si no interactuaste con el servicio.",
          description: "Algunos servicios almacenan datos tuyos, incluso si no proporcionaste esos datos vos mismo. Por ejemplo, los usuarios pueden dar acceso a su agenda de contactos, y luego un servicio también podría almacenar los números de teléfono de esos contactos.",
          source: "https://edit.tosdr.org/points/12228",
          imgUrl: "They store data on you even if you did not interact with the service.png",
        },
        {
          title: "Tu identidad se utiliza en anuncios que se muestran a otros usuarios.",
          description: "Los anuncios que se muestran a otros usuarios pueden incluir una referencia a vos como un respaldo implícito. Podrían revelar información sobre tu estilo de vida personal a desconocidos.",
          source: "https://edit.tosdr.org/points/11358",
          imgUrl: "Your identity is used in ads that are shown to other users.png",
        },
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          source: "https://edit.tosdr.org/points/12190",
          imgUrl: "Private messages can be read.png",
        },
        {
          title: "Este servicio retiene contenido que has eliminado.",
          description: "El contenido puede permanecer en servidores de respaldo y ser retenido después de la eliminación, por lo que nunca se elimina por completo. Este caso no se aplica a las contribuciones que no se pueden eliminar debido a la naturaleza del servicio.",
          source: "https://edit.tosdr.org/points/12230",
          imgUrl: "This service holds onto content that you've deleted.png",
        }
      ],
      c: [
        {
          "title": "Los registros se mantienen por un período indefinido de tiempo",
          "description": "Los registros son archivos de texto que contienen información sobre los visitantes de la web, como los agentes de usuario (que indican, por ejemplo, que te estás conectando desde Firefox para Android) y las direcciones IP (que revelan tu ubicación aproximada). Este caso se aplica a los servicios que pueden mantener registros indefinidamente, permitiendo que las sesiones de los usuarios sean rastreadas a lo largo del tiempo. Los registros que se conservan durante un período 'consistente con la legislación aplicable' también entran en este caso, ya que este período puede ser ambiguo o indefinido.",
          "source": "https://edit.tosdr.org/points/12220"
        },
        {
          "title": "Licencia de copyright muy amplia sobre tu contenido",
          "description": "",
          "source": "https://edit.tosdr.org/points/1035"
        },
        {
          "title": "La aplicación requerida para este servicio requiere permisos amplios del dispositivo",
          "description": "La aplicación del servicio requiere más permisos del dispositivo de los necesarios. Como consecuencia, puede comprometer tu privacidad al acceder a muchas funciones e información de tu dispositivo, como ubicación precisa, contactos, identificadores del dispositivo, etc.",
          "source": "https://edit.tosdr.org/points/12221"
        }
      ],
      a: [
        {
          "title": "Si ofreces sugerencias al servicio, pueden utilizarlas sin tu aprobación o compensación, pero no se convierten en propietarios",
          "description": "El servicio puede emplear una licencia de copyright amplia sobre comentarios, propuestas, ideas y sugerencias presentadas, incluyendo el derecho a utilizarlas sin restricción, compensación u obligación hacia el usuario, pero no reclaman la propiedad sobre ellas.",
          "source": "https://edit.tosdr.org/points/12227"
        },
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen derecho a acceder a los datos personales que posee el servicio, corregirlos y/o eliminarlos permanentemente. Esto se aplica generalmente a los servicios que cumplen con el GDPR.",
          "source": "https://edit.tosdr.org/points/12187"
        },
        {
          "title": "Mantienes la propiedad de tu contenido",
          "description": "Este servicio no reclama la propiedad sobre el contenido o materiales generados por el usuario, y el usuario no necesita renunciar a ningún derecho moral al publicar contenido propio.",
          "source": "https://edit.tosdr.org/points/27164"
        }
      ]
    }
  },
  {
    name: "mercado libre",
    imgUrl: "meli.png",
    label: "Mercado Libre",
    riskLevel: "c", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "Almacenan datos tuyos incluso si no interactuaste con el servicio.",
          description: "Algunos servicios almacenan datos tuyos, incluso si no proporcionaste esos datos vos mismo. Por ejemplo, los usuarios pueden dar acceso a su agenda de contactos, y luego un servicio también podría almacenar los números de teléfono de esos contactos.",
          source: "https://edit.tosdr.org/points/31562",
          imgUrl: "They store data on you even if you did not interact with the service.png",
        }
      ],
      c: [
        {
          "title": "Se utilizan cookies de terceros para publicidad",
          "description": "El sitio web del servicio establece cookies de terceros (cookies que no pertenecen a su dominio) para fines que no incluyen estadísticas y análisis.",
          "source": "https://edit.tosdr.org/points/31559"
        },
        {
          "title": "Este servicio comparte tus datos personales con terceros que no son esenciales para su operación",
          "description": "Tus datos personales son o pueden ser entregados a terceros no esenciales para la operación del servicio. Esto podría ser un socio comercial que recibe tus datos para proporcionar anuncios dirigidos.",
          "source": "https://edit.tosdr.org/points/31552"
        },
        {
          "title": "Tus datos personales pueden ser divulgados para cumplir con solicitudes gubernamentales sin notificación previa",
          "description": "Si el gobierno que rige los términos solicita datos personales de un usuario de este servicio, puede que no informen/notifiquen al usuario mientras cumplen con la solicitud.",
          "source": "https://edit.tosdr.org/points/31554"
        },
        {
          "title": "Este servicio rastrea qué página web te remitió a él",
          "description": "El servicio registra la URL de la última página web que visitaste antes de visitar el sitio y puede usar esa información para recopilar más datos sobre ti.",
          "source": "https://edit.tosdr.org/points/31543"
        },
        {
          "title": "Tus datos personales pueden ser utilizados con fines de marketing",
          "description": "El servicio puede utilizar tus datos personales para marketing, como enviarte ofertas personalizadas.",
          "source": "https://edit.tosdr.org/points/31549"
        },
        {
          "title": "Muchos terceros están involucrados en la operación del servicio",
          "description": "",
          "source": "https://edit.tosdr.org/points/31549"
        },
        {
          "title": "Este servicio recibe tu ubicación precisa a través de coordenadas GPS",
          "description": "A menos que el servicio dependa de la geo ubicación, este caso se asigna a puntos que no necesitan tus coordenadas GPS para funcionar correctamente.",
          "source": "https://edit.tosdr.org/points/31544"
        },
        {
          "title": "Tus datos personales se utilizan para emplear publicidad dirigida de terceros",
          "description": "Tu información personal se comercializa y se comparte con empresas de publicidad para dirigir anuncios hacia ti, ya sea en el sitio web que estabas visitando o en sitios web de terceros. Tu interacción con el servicio y los datos que has compartido con ellos pueden ser recopilados para crear un ID de publicidad o perfil.",
          "source": "https://edit.tosdr.org/points/31553"
        },
        {
          "title": "Tu información personal se utiliza para muchos propósitos diferentes",
          "description": "Los datos personales pueden ser procesados por muchas razones, incluyendo el procesamiento no esencial como publicidad, marketing y fines analíticos.",
          "source": "https://edit.tosdr.org/points/31547"
        },
        {
          "title": "Este servicio entrega tus datos personales a terceros involucrados en su operación",
          "description": "Tus datos personales son o pueden ser entregados a terceros esenciales para la operación del servicio. Esto podría ser un servicio externo de detección de spam para un foro de internet.",
          "source": "https://edit.tosdr.org/points/31551"
        },
        {
          "title": "Tus datos personales se utilizan para publicidad",
          "description": "Tu interacción con el servicio y los datos que has compartido con ellos pueden ser recopilados para crear un ID de publicidad o perfil para dirigir anuncios hacia ti, ya sea en el sitio web que estabas visitando o en sitios web de terceros.",
          "source": "https://edit.tosdr.org/cases/216"
        },
        {
          "title": "La información identificable que proporcionas es verificada activamente por el servicio",
          "description": "El servicio verifica si la información identificable requerida que has proporcionado es correcta, y puede hacerlo de manera regular. Las medidas de verificación pueden incluir analizar la información de tu navegador y/o proporcionar la información identificable a un tercero o a la autoridad, comprometiendo así tu anonimato.",
          "source": "https://edit.tosdr.org/points/31531"
        },
        {
          "title": "Tus datos pueden ser procesados y almacenados en cualquier parte del mundo",
          "description": "Tus datos se almacenan en todo el mundo, incluyendo países donde las reglas de protección de datos pueden diferir de las de la jurisdicción del servicio o de la jurisdicción de tu país.",
          "source": "https://edit.tosdr.org/points/31555"
        }
      ]
      ,
      a: [
        {
          "title": "No estás obligado a someterte a un arbitraje vinculante en caso de disputas",
          "description": "El arbitraje vinculante es un método de resolución de disputas que involucra a un tercero neutral que tomará una decisión en lugar de ir a juicio. Dado que el árbitro puede decidir el resultado de una disputa sin evidencias o una base legal, es preferible que los usuarios decidan si quieren o no que su disputa se resuelva de esta manera.",
          "source": "https://edit.tosdr.org/points/31539"
        },
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen derecho a acceder a los datos personales que posee el servicio, corregirlos y/o eliminarlos permanentemente. Esto se aplica generalmente a los servicios que cumplen con el GDPR.",
          "source": "https://edit.tosdr.org/points/31558"
        },
        {
          "title": "El período de retención de datos se mantiene al mínimo necesario para cumplir sus propósitos",
          "description": "El servicio eliminará los datos personales de sus sistemas una vez que ya no sean necesarios. Dependiendo del tipo de información y la razón por la que se recopiló, los períodos de retención de datos variarán.",
          "source": "https://edit.tosdr.org/points/31557"
        },
        {
          "title": "Se proporciona información sobre cómo se utilizan tus datos personales",
          "description": "La Política de Privacidad explica los propósitos para los cuales se recopilan los datos y la forma en que se procesan, utilizan y comparten.",
          "source": "https://edit.tosdr.org/points/31560"
        },
        {
          "title": "Se proporciona información sobre qué tipo de información recopilan",
          "description": "La Política de Privacidad describe en detalle los datos recopilados a través del sitio web y a través de los servicios proporcionados.",
          "source": "https://edit.tosdr.org/points/31561"
        },
        {
          "title": "Tus datos personales no se venden",
          "description": "Este servicio hace una promesa explícita de no vender 'datos personales' de los usuarios.",
          "source": "https://edit.tosdr.org/points/31548"
        },
        {
          "title": "Se permiten seudónimos",
          "description": "No necesitas proporcionar tu nombre completo para usar el servicio y se te permite utilizar un seudónimo en su lugar.",
          "source": "https://edit.tosdr.org/points/31541"
        },
        {
          "title": "Los terceros utilizados por el servicio están sujetos a obligaciones de confidencialidad",
          "description": "Los terceros que acceden a tu información personal deben mantenerla confidencial y utilizarla solo para fines limitados.",
          "source": "https://edit.tosdr.org/points/31550"
        },
        {
          "title": "Cuando el servicio quiera cambiar sus términos, se te notificará con una semana o más de anticipación.",
          "description": "Los usuarios serán notificados una semana antes de que los términos sean actualizados de alguna manera, lo que les da un tiempo razonable para leer detenidamente los cambios y quizás dejar de usar los servicios si ya no están de acuerdo.",
          "source": "https://edit.tosdr.org/points/31540"
        }
      ]
    }
  },
  {
    name: "telegram",
    imgUrl: "telegram.png",
    label: "Telegram",
    riskLevel: "b", // or b, c, d, e
    termsConditionsRisks: {
      c: [
        {
          "title": "Los términos pueden ser cambiados en cualquier momento a su discreción, sin notificación previa",
          "description": "Los acuerdos pueden ser actualizados en cualquier momento, incluso de una manera que afecte negativamente los derechos de los usuarios, sin notificar antes o después de los cambios.",
          "source": "https://edit.tosdr.org/points/8167"
        }
      ],
      "a": [
        {
          "title": "Los registros se eliminan después de un período finito de tiempo",
          "description": "Los registros son archivos de texto que contienen información sobre los visitantes de la web, como los agentes de usuario (que indican, por ejemplo, que te estás conectando desde Firefox para Android) y las direcciones IP (que revelan tu ubicación aproximada). Este caso se aplica a los servicios que eliminan periódicamente sus registros para evitar que las sesiones de los usuarios sean rastreadas a lo largo del tiempo.",
          "source": "https://edit.tosdr.org/points/8854"
        },
        {
          "title": "El período de retención de datos se mantiene al mínimo necesario para cumplir sus propósitos",
          "description": "El servicio eliminará los datos personales de sus sistemas una vez que ya no sean necesarios. Dependiendo del tipo de información y la razón por la que se recopiló, los períodos de retención de datos variarán.",
          "source": "https://edit.tosdr.org/points/17476"
        },
        {
          "title": "El servicio promete informarte y/o notificarte sobre las investigaciones gubernamentales que puedan involucrar tus datos personales",
          "description": "En caso de que el gobierno que rige los términos solicite datos personales de un usuario de este servicio, harán esfuerzos razonables para informar/notificar al usuario (por ejemplo, un canario de orden de cateo).",
          "source": "https://edit.tosdr.org/points/17478"
        },
        {
          "title": "Puedes eliminar tu contenido de este servicio",
          "description": "Puedes solicitar al servicio que elimine tu contenido en cualquier momento, y se eliminará en un tiempo razonable.",
          "source": "https://edit.tosdr.org/points/17480"
        },
        {
          "title": "El contenido generado por los usuarios está cifrado y este servicio no puede descifrarlo",
          "description": "El contenido generado por los usuarios está cifrado de extremo a extremo, de manera que no puede ser accedido por nadie no autorizado, y ni siquiera el servicio tiene medios técnicos para descifrarlo.",
          "source": "https://edit.tosdr.org/points/17472"
        },
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen derecho a acceder a los datos personales que posee el servicio, corregirlos y/o eliminarlos permanentemente. Esto se aplica generalmente a los servicios que cumplen con el GDPR.",
          "source": "https://edit.tosdr.org/points/11971"
        },
        {
          "title": "Puedes recuperar un archivo de tus datos",
          "description": "Los usuarios pueden solicitar una copia de los datos recopilados a través de los servicios e inferir de ello la cantidad de información personal que es procesada y almacenada por el servicio. Esto se aplica generalmente a los servicios que cumplen con el GDPR.",
          "source": "https://edit.tosdr.org/points/8168"
        },
        {
          "title": "Se proporciona información sobre qué tipo de información recopilan",
          "description": "La Política de Privacidad describe en detalle los datos recopilados a través del sitio web y a través de los servicios proporcionados.",
          "source": "https://edit.tosdr.org/points/14681"
        },
        {
          "title": "Se proporciona información sobre cómo se utilizan tus datos personales",
          "description": "La Política de Privacidad explica los propósitos para los cuales se recopilan los datos y la forma en que se procesan, utilizan y comparten.",
          "source": "https://edit.tosdr.org/points/17470"
        }
      ]
    }
  },
  {
    "name": "x",
    "imgUrl": "x.png",
    "label": "X",
    "riskLevel": "e", // or b, c, d, e
    "termsConditionsRisks": {
      "e": [
        {
          title: "Almacenan datos tuyos incluso si no interactuaste con el servicio.",
          description: "Algunos servicios almacenan datos tuyos, incluso si no proporcionaste esos datos vos mismo. Por ejemplo, los usuarios pueden dar acceso a su agenda de contactos, y luego un servicio también podría almacenar los números de teléfono de esos contactos.",
          "source": "https://edit.tosdr.org/points/12804",
          "imgUrl": "They store data on you even if you did not interact with the service.png",
        },
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          "source": "https://edit.tosdr.org/points/12796",
          "imgUrl": "Private messages can be read.png",
        },
        {
          title: "Contenido específico puede ser eliminado sin motivo y puede ser removido sin previo aviso.",
          description: "Este servicio puede eliminar contenido específico. Por lo general, dirán que se reservan el derecho de hacerlo a su exclusivo criterio, lo cual es una forma legal de decir que no darán un motivo específico. Si los términos dicen que no te notificarán, eso debe incluirse en la cita, pero si no dice explícitamente que te darán un aviso, se puede inferir razonablemente que pueden hacerlo sin decírtelo.",
          "source": "https://edit.tosdr.org/points/5854",
          "imgUrl": "Specific content can be deleted without reason and may be removed without prior notice.png",
        },
        {
          title: "Tu historial de navegación puede ser visto por el servicio.",
          description: "El servicio puede ver tu historial de búsqueda y los sitios web que visitas, lo cual es una forma extremadamente intrusiva de recopilar información que puede incluir datos personales y/o sensibles." ,
          "source": "https://edit.tosdr.org/points/12806",
          "imgUrl": "Your browsing history can be viewed by the service.png",
        },
        {
          title: "Este servicio retiene contenido que has eliminado.",
          description: "El contenido puede permanecer en servidores de respaldo y ser retenido después de la eliminación, por lo que nunca se elimina por completo. Este caso no se aplica a las contribuciones que no se pueden eliminar debido a la naturaleza del servicio.",
          "source": "https://edit.tosdr.org/points/12794",
          "imgUrl": "This service holds onto content that you've deleted.png",
        }
      ],
      "c": [
        {
          "title": "Este servicio puede recopilar, usar y compartir datos de ubicación",
          "description": "Se recopila información basada en la ubicación y puede ser utilizada y/o compartida con terceros para fines no directamente relacionados con los servicios proporcionados (es decir, el servicio no depende del uso o compartición de datos de ubicación para funcionar correctamente).",
          "source": "https://edit.tosdr.org/points/12797"
        },
        {
          "title": "Se recopilan muchos tipos diferentes de datos personales",
          "description": "El servicio recopila diferentes tipos de datos personales, como nombre, información demográfica, dirección postal, datos biométricos, información del dispositivo, identificaciones, contactos, registros de llamadas...",
          "source": "https://edit.tosdr.org/points/12791"
        },
        {
          "title": "Se utilizan cookies de terceros para publicidad",
          "description": "El sitio web del servicio establece cookies de terceros (cookies que no pertenecen a su dominio) para fines que no incluyen estadísticas y análisis.",
          "source": "https://edit.tosdr.org/points/779"
        }
      ],
      "a": [
        {
          "title": "Se proporcionan archivos de sus acuerdos para que los cambios puedan ser vistos a lo largo del tiempo",
          "description": "Este caso se aplica a los servicios cuyos acuerdos proporcionan versiones anteriores, para que los usuarios puedan compararlas y entender cómo el servicio parece evolucionar con respecto a los derechos de los usuarios.",
          "source": "https://edit.tosdr.org/points/12787"
        },
        {
          "title": "Si ofreces sugerencias al servicio, pueden usarlas sin tu aprobación o compensación, pero no se convierten en propietarios",
          "description": "El servicio puede emplear una amplia licencia de copyright sobre los comentarios, propuestas, ideas y sugerencias presentadas, incluyendo el derecho a usarlas sin restricciones, compensación u obligación hacia el usuario, pero no reclaman la propiedad sobre ellas.",
          "source": "https://edit.tosdr.org/points/8550"
        }
      ]
    }
  },
  {
    "name": "youtube",
    "imgUrl": "youtube.png",
    "label": "Youtube",
    "riskLevel": "e", // or b, c, d, e
    "termsConditionsRisks": {
      "e": [
        {
          title: "Tu historial de navegación puede ser visto por el servicio.",
          description: "El servicio puede ver tu historial de búsqueda y los sitios web que visitas, lo cual es una forma extremadamente intrusiva de recopilar información que puede incluir datos personales y/o sensibles." ,
          "source": "https://edit.tosdr.org/points/11339",
          "imgUrl": "Your browsing history can be viewed by the service.png",
        },
        {
          title: "Este servicio retiene contenido que has eliminado.",
          description: "El contenido puede permanecer en servidores de respaldo y ser retenido después de la eliminación, por lo que nunca se elimina por completo. Este caso no se aplica a las contribuciones que no se pueden eliminar debido a la naturaleza del servicio.",
          "source": "https://edit.tosdr.org/points/837",
          "imgUrl": "This service holds onto content that you've deleted.png",
        }
      ],
      "c": [
        {
          "title": "Se utilizan cookies de terceros para publicidad",
          "description": "El sitio web del servicio establece cookies de terceros (cookies que no pertenecen a su dominio) para fines que no incluyen estadísticas y análisis.",
          "source": "https://edit.tosdr.org/points/11334"
        },
        {
          "title": "Tus datos personales pueden ser utilizados con fines de marketing",
          "description": "El servicio puede utilizar tus datos personales para marketing, como enviarte ofertas personalizadas.",
          "source": "https://edit.tosdr.org/points/11335"
        },
        {
          "title": "Tienes un período de tiempo reducido para tomar acciones legales contra el servicio",
          "description": "Si deseas emprender acciones legales contra un servicio sobre un incidente pasado, puede que no puedas hacerlo si los términos a los que aceptaste implicaban un tiempo limitado. Como resultado, puede ser útil leer detenidamente esa sección de los términos para saber exactamente cuánto tiempo puedes tener antes de que expire tu derecho a tomar acciones legales.",
          "source": "https://edit.tosdr.org/points/858"
        }
      ],
      "a": [
        {
          "title": "Puedes optar por no participar en publicidad dirigida",
          "description": "El servicio utiliza tus datos para dirigir anuncios hacia ti, pero puedes optar por no participar en esta publicidad basada en intereses.",
          "source": "https://edit.tosdr.org/points/24466"
        },
        {
          "title": "Tienes el derecho de abandonar este servicio en cualquier momento",
          "description": "Puedes dejar de usar el servicio y/o cancelar o eliminar tu cuenta en cualquier momento y por cualquier motivo. Además, la terminación es razonablemente rápida y simple.",
          "source": "https://edit.tosdr.org/points/11537"
        }
      ]
    }
  },
  {
    name: "disney+",
    imgUrl: "disney+.png",
    label: "Disney+",
    riskLevel: "e",
    termsConditionsRisks: {
      e: [
        {
          title: "Almacenan datos tuyos incluso si no interactuaste con el servicio.",
          description: "Algunos servicios almacenan datos tuyos, incluso si no proporcionaste esos datos vos mismo. Por ejemplo, los usuarios pueden dar acceso a su agenda de contactos, y luego un servicio también podría almacenar los números de teléfono de esos contactos.",
          "source": "https://edit.tosdr.org/points/18003",
          "imgUrl": "They store data on you even if you did not interact with the service.png",
        },
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          "source": "https://edit.tosdr.org/points/17997",
          imgUrl: "Private messages can be read.png",
        },
        {
          title: "Este servicio aún te rastrea incluso si optaste por no ser rastreado.",
          description: "Los usuarios no pueden optar por completo por no ser rastreados por tecnologías utilizadas para fines no esenciales, como publicidad, marketing o análisis. Se puede pedir el consentimiento del usuario para instalar algunas tecnologías de rastreo en el dispositivo, y aunque se rechacen todas, el servicio seguirá rastreando a sus visitantes e ignorará la elección. Este caso no se aplica a las cookies funcionales que son necesarias para proporcionar los servicios.",
          "source": "https://edit.tosdr.org/points/18015",
          imgUrl: "This service still tracks you even if you opted out from tracking.png",
        }
      ],
      "c": [
        {
          "title": "Este servicio puede recopilar, usar y compartir datos de ubicación",
          "description": "Se recopila información basada en la ubicación y puede ser utilizada y/o compartida con terceros para fines no directamente relacionados con los servicios proporcionados (es decir, el servicio no depende del uso o la compartición de datos de ubicación para funcionar correctamente).",
          "source": "https://edit.tosdr.org/points/17999"
        },
        {
          "title": "Se utilizan cookies de terceros para publicidad",
          "description": "El sitio web del servicio establece cookies de terceros (cookies que no pertenecen a su dominio) para fines que no incluyen estadísticas y análisis.",
          "source": "https://edit.tosdr.org/points/18018"
        },
        {
          "title": "Se recopilan muchos tipos diferentes de datos personales",
          "description": "El servicio recopila diferentes tipos de datos personales, como nombre, información demográfica, dirección postal, datos biométricos, información del dispositivo, identificaciones, contactos, registros de llamadas.",
          "source": "https://edit.tosdr.org/points/17996"
        },
        {
          "title": "Algunos datos personales pueden ser mantenidos por intereses comerciales u obligaciones legales",
          "description": "Después del final del período de retención de datos y/o si solicitas la eliminación de tus datos, pueden seguir manteniéndolos por intereses comerciales (detección de fraudes, transacciones...) u obligaciones legales (fiscales, informes legales...).",
          "source": "https://edit.tosdr.org/points/18012"
        },
        {
          "title": "Este servicio comparte tus datos personales con terceros que no son esenciales para su operación",
          "description": "Tus datos personales pueden ser o serán entregados a terceros no esenciales para la operación del servicio. Esto podría ser un socio comercial que recibe tus datos para proporcionar anuncios dirigidos.",
          "source": "https://edit.tosdr.org/points/18006"
        },
        {
          "title": "Tu cuenta puede ser eliminada o suspendida permanentemente sin previo aviso y sin razón",
          "description": "En cualquier momento, tu cuenta puede ser terminada sin explicación y sin advertencia por parte del servicio.",
          "source": "https://edit.tosdr.org/points/17992"
        },
        {
          "title": "Estás siendo rastreado a través de cookies/píxeles de redes sociales",
          "description": "Este tipo de cookies/píxeles envían información a los sitios de redes sociales cuando interactúas con el servicio.",
          "source": "https://edit.tosdr.org/points/18022"
        },
        {
          "title": "Se recopila información sobre ti a través de terceros",
          "description": "Este servicio puede emplear, ya sea datos identificables o no identificables, la recopilación de datos de fuentes de terceros sobre ti.",
          "source": "https://edit.tosdr.org/points/17998"
        },
        {
          "title": "Eres rastreado a través de balizas web, píxeles de seguimiento, huellas de navegador y/o huellas de dispositivo",
          "description": "Se emplean tecnologías de seguimiento (como balizas web, píxeles de seguimiento...) en los usuarios y/o el servicio asigna un ID único a un navegador o dispositivo para rastrear su comportamiento.",
          "source": "https://edit.tosdr.org/points/18000"
        },
        {
          "title": "Tus datos personales pueden ser utilizados con fines de marketing",
          "description": "El servicio puede utilizar tus datos personales para marketing, como enviarte ofertas personalizadas.",
          "source": "https://edit.tosdr.org/points/18004"
        },
        {
          "title": "Tu perfil se combina a través de varios productos",
          "description": "Al usar múltiples servicios de una misma compañía, pueden combinar estas (fuentes de información no relacionadas) sobre ti para construir un perfil de usuario más completo.",
          "source": "https://edit.tosdr.org/points/18019"
        },
        {
          "title": "Tus datos personales pueden ser vendidos o transferidos de otro modo como parte de un procedimiento de quiebra u otro tipo de transacción financiera",
          "description": "Si el servicio es adquirido o está involucrado en una fusión, quiebra, reorganización o venta, tus datos personales pueden ser transferidos o vendidos.",
          "source": "https://edit.tosdr.org/points/18007"
        },
        {
          "title": "Tus datos personales son utilizados para emplear publicidad dirigida de terceros",
          "description": "Tu información personal es comercializada y compartida con empresas de publicidad para dirigir anuncios hacia ti, ya sea en el sitio web que estabas visitando o en sitios web de terceros.",
          "source": "https://edit.tosdr.org/points/18005"
        },
        {
          "title": "Este servicio entrega tus datos personales a terceros involucrados en su operación",
          "description": "Tus datos personales pueden ser o serán entregados a terceros esenciales para la operación del servicio.",
          "source": "https://edit.tosdr.org/points/18008"
        },
        {
          "title": "Este servicio no asume responsabilidad por el acceso no autorizado a tu información personal",
          "description": "Este servicio no asume responsabilidad por el acceso no autorizado a tu información personal.",
          "source": "https://edit.tosdr.org/points/17987"
        },
        {
          "title": "Se recopilan tus datos biométricos",
          "description": "Este servicio puede recopilar o utilizar tus datos biométricos. Esto incluye, pero no se limita a, reconocimiento facial, huellas dactilares y escaneos de iris.",
          "source": "https://edit.tosdr.org/points/18001"
        },
        {
          "title": "Tus datos personales son utilizados para publicidad",
          "description": "Tu interacción con el servicio y los datos que has compartido con ellos pueden ser recopilados para crear un ID o perfil publicitario para dirigir anuncios hacia ti.",
          "source": "https://edit.tosdr.org/points/18020"
        },
        {
          "title": "Tus datos pueden ser procesados y almacenados en cualquier parte del mundo",
          "description": "Tus datos se almacenan en todo el mundo, incluyendo en países donde las reglas de protección de datos pueden diferir de las de la jurisdicción del servicio.",
          "source": "https://edit.tosdr.org/points/18013"
        },
        {
          "title": "Se utilizan cookies de terceros para estadísticas",
          "description": "Por ejemplo, Google Analytics, en lugar de software de estadísticas autoalojado (de primer partido).",
          "source": "https://edit.tosdr.org/points/18017"
        },
        {
          "title": "Se utilizan píxeles de seguimiento en la comunicación del servicio al usuario",
          "description": "El servicio rastrea la cantidad de usuarios o algunas acciones del usuario; esto se utiliza generalmente para estadísticas.",
          "source": "https://edit.tosdr.org/points/18021"
        }
      ],
      "a": [
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen el derecho de acceder a los datos personales que posee el servicio, corregirlos y/o eliminarlos permanentemente. Esto generalmente se aplica a servicios conformes con GDPR.",
          "source": "https://edit.tosdr.org/points/18009"
        },
        {
          "title": "Se proporciona información sobre cómo recopilan datos personales",
          "description": "El servicio detalla las situaciones en las que recopilan información personal o los medios mediante los cuales lo hacen.",
          "source": "https://edit.tosdr.org/points/18002"
        },
        {
          "title": "El servicio revisa su política de privacidad de manera regular",
          "description": "Los usuarios conocen la fecha en que se actualizó por última vez la política de privacidad y pueden inferir la próxima vez que será revisada.",
          "source": "https://edit.tosdr.org/points/18014"
        },
        {
          "title": "Se proporciona información sobre cómo se utilizan tus datos personales",
          "description": "La política de privacidad explica los propósitos para los cuales se recopilan los datos y la forma en que se procesan, utilizan y comparten.",
          "source": "https://edit.tosdr.org/points/18024"
        },
        {
          "title": "Se proporciona un mecanismo de quejas para el manejo de datos personales",
          "description": "El servicio proporciona a los usuarios información de contacto para una estructura interna o externa donde presentar quejas.",
          "source": "https://edit.tosdr.org/points/18025"
        },
        {
          "title": "Se proporciona información sobre qué tipo de información recopilan",
          "description": "La política de privacidad describe en detalle los datos recopilados a través del sitio web y los servicios proporcionados.",
          "source": "https://edit.tosdr.org/points/18023"
        },
        {
          "title": "Se te notificará sobre el mantenimiento del sitio web",
          "description": "Los usuarios serán notificados antes de que su experiencia se vea afectada por el mantenimiento del sitio web.",
          "source": "https://edit.tosdr.org/points/17991"
        },
        {
          "title": "Puedes optar por no participar en publicidad dirigida",
          "description": "El servicio utiliza tus datos para dirigir anuncios hacia ti, pero puedes optar por no participar en esta publicidad basada en intereses.",
          "source": "https://edit.tosdr.org/points/18011"
        }
      ],
    },
  },
  {
    "name": "whatsapp",
    "imgUrl": "whatsapp.png",
    "label": "Whatsapp",
    "riskLevel": "d", // or b, c, d, e
    "termsConditionsRisks": {
      "c": [
        {
          "title": "Los registros se mantienen por un período de tiempo indefinido",
          "description": "Los registros son archivos de texto que contienen información sobre los visitantes de la web, como agentes de usuario (que muestran, por ejemplo, que te estás conectando desde Firefox para Android) y direcciones IP (que revelan tu ubicación aproximada). Este caso se aplica a servicios que pueden mantener registros indefinidamente, permitiendo que las sesiones de usuario se rastreen con el tiempo. Los registros que se mantienen por un tiempo 'consistente con la ley aplicable' también caen bajo este caso, ya que este período de tiempo puede ser vago o indefinido.",
          "source": "https://edit.tosdr.org/points/13026"
        },
        {
          "title": "Este servicio comparte tus datos personales con terceros que no son esenciales para su operación",
          "description": "Tus datos personales pueden ser o serán entregados a terceros no esenciales para la operación del servicio. Esto podría ser un socio comercial que recibe tus datos para proporcionar anuncios dirigidos.",
          "source": "https://edit.tosdr.org/points/21741"
        },
        {
          "title": "Se recopilan muchos tipos diferentes de datos personales",
          "description": "El servicio recopila diferentes tipos de datos personales, como nombre, información demográfica, dirección postal, datos biométricos, información del dispositivo, identificaciones, contactos, registros de llamadas...",
          "source": "https://edit.tosdr.org/points/21744"
        },
        {
          "title": "Tu cuenta puede ser eliminada o suspendida permanentemente sin previo aviso y sin razón",
          "description": "En cualquier momento, tu cuenta puede ser terminada sin explicación y sin advertencia por parte del servicio.",
          "source": "https://edit.tosdr.org/points/14582"
        },
        {
          "title": "Se recopila información sobre ti a través de terceros",
          "description": "Este servicio puede emplear, ya sea datos identificables o no identificables, la recopilación de datos de fuentes de terceros sobre ti.",
          "source": "https://edit.tosdr.org/points/11580"
        },
        {
          "title": "Tus datos personales pueden ser utilizados con fines de marketing",
          "description": "El servicio puede utilizar tus datos personales para marketing, como enviarte ofertas personalizadas.",
          "source": "https://edit.tosdr.org/points/13032"
        },
        {
          "title": "Eres rastreado a través de balizas web, píxeles de seguimiento, huellas de navegador y/o huellas de dispositivo",
          "description": "Se emplean tecnologías de seguimiento (como balizas web, píxeles de seguimiento...) en los usuarios y/o el servicio asigna un ID único a un navegador o dispositivo para rastrear su comportamiento.",
          "source": "https://edit.tosdr.org/points/13027"
        },
        {
          "title": "Tus datos personales pueden ser vendidos o transferidos de otro modo como parte de un procedimiento de quiebra u otro tipo de transacción financiera",
          "description": "Si el servicio es adquirido o está involucrado en una fusión, quiebra, reorganización o venta, tus datos personales pueden ser transferidos o vendidos.",
          "source": "https://edit.tosdr.org/points/13034"
        },
        {
          "title": "Tu información personal se utiliza para muchos propósitos diferentes",
          "description": "Los datos personales pueden ser procesados por muchas razones, incluyendo el procesamiento no esencial, como para publicidad, marketing y propósitos analíticos.",
          "source": "https://edit.tosdr.org/points/14585"
        }
      ],
      "a": [
        {
          "title": "Mantienes la propiedad de tu contenido",
          "description": "Este servicio no reclama la propiedad sobre el contenido o materiales generados por los usuarios, y el usuario no necesita renunciar a ningún derecho moral al publicar contenido de su propiedad.",
          "source": "https://edit.tosdr.org/points/13039"
        },
        {
          "title": "El contenido generado por los usuarios está encriptado y este servicio no puede desencriptarlo",
          "description": "El contenido generado por los usuarios está encriptado de extremo a extremo, de manera que no puede ser accedido por nadie no autorizado, y ni siquiera el servicio tiene medios técnicos para desencriptarlo.",
          "source": "https://edit.tosdr.org/points/11582"
        }
      ]
    }
  },
  {
    "name": "linkedin",
    "imgUrl": "linkedin.png",
    "label": "Linkedin",
    "riskLevel": "e", // or b, c, d, e
    "termsConditionsRisks": {
      "e": [
        {
          title: "Almacenan datos tuyos incluso si no interactuaste con el servicio.",
          description: "Algunos servicios almacenan datos tuyos, incluso si no proporcionaste esos datos vos mismo. Por ejemplo, los usuarios pueden dar acceso a su agenda de contactos, y luego un servicio también podría almacenar los números de teléfono de esos contactos.",
          "source": "https://edit.tosdr.org/points/20633",
          "imgUrl": "They store data on you even if you did not interact with the service.png",
        },
        {
          title: "Tu identidad se utiliza en anuncios que se muestran a otros usuarios.",
          description: "Los anuncios que se muestran a otros usuarios pueden incluir una referencia a vos como un respaldo implícito. Podrían revelar información sobre tu estilo de vida personal a desconocidos.",
          "source": "https://edit.tosdr.org/points/20617",
          "imgUrl": "Your identity is used in ads that are shown to other users.png",
        },
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          "source": "https://edit.tosdr.org/points/20638",
          "imgUrl": "Private messages can be read.png",
        },
        {
          title: "Contenido específico puede ser eliminado sin motivo y puede ser removido sin previo aviso.",
          description: "Este servicio puede eliminar contenido específico. Por lo general, dirán que se reservan el derecho de hacerlo a su exclusivo criterio, lo cual es una forma legal de decir que no darán un motivo específico. Si los términos dicen que no te notificarán, eso debe incluirse en la cita, pero si no dice explícitamente que te darán un aviso, se puede inferir razonablemente que pueden hacerlo sin decírtelo.",
          "source": "https://edit.tosdr.org/points/20613",
          "imgUrl": "Specific content can be deleted without reason and may be removed without prior notice.png",
        }
      ],
      "c": [
        {
          "title": "La aplicación requerida para este servicio requiere amplios permisos del dispositivo",
          "description": "La aplicación del servicio requiere más permisos del dispositivo de los necesarios. Como consecuencia, puede comprometer tu privacidad al acceder a muchas funciones e información de tu dispositivo, como ubicación precisa, contactos, identificadores de dispositivo, etc.",
          "source": "https://edit.tosdr.org/points/20631"
        },
        {
          "title": "Se recopilan muchos tipos diferentes de datos personales",
          "description": "El servicio recopila diferentes tipos de datos personales, como nombre, información demográfica, dirección postal, datos biométricos, información del dispositivo, identificaciones, contactos, registros de llamadas...",
          "source": "https://edit.tosdr.org/points/20643"
        },
        {
          "title": "Este servicio comparte tus datos personales con terceros que no son esenciales para su operación",
          "description": "Tus datos personales pueden ser o serán entregados a terceros no esenciales para la operación del servicio. Esto podría ser un socio comercial que recibe tus datos para proporcionar anuncios dirigidos.",
          "source": "https://edit.tosdr.org/points/20642"
        },
        {
          "title": "Algunos datos personales pueden ser mantenidos por intereses comerciales u obligaciones legales",
          "description": "Después del final del período de retención de datos y/o si solicitas la eliminación de tus datos, pueden seguir manteniéndolos por intereses comerciales (detección de fraudes, transacciones...) u obligaciones legales (impuestos, informes legales...).",
          "source": "https://edit.tosdr.org/points/20653"
        }
      ],
      "a": [
        {
          "title": "Mantienes la propiedad de tu contenido",
          "description": "Este servicio no reclama la propiedad sobre el contenido o materiales generados por los usuarios, y el usuario no necesita renunciar a ningún derecho moral al publicar contenido de su propiedad.",
          "source": "https://edit.tosdr.org/points/20614"
        },
        {
          "title": "Puedes eliminar tu contenido de este servicio",
          "description": "Puedes pedir al servicio que elimine tu contenido en cualquier momento, y se eliminará dentro de un tiempo razonable.",
          "source": "https://edit.tosdr.org/points/5888"
        }
      ]
    }
  },
  {
    "name": "reddit",
    "imgUrl": "reddit.png",
    "label": "Reddit",
    "riskLevel": "e", // or b, c, d, e
    "termsConditionsRisks": {
      "e": [
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          "source": "https://edit.tosdr.org/points/13308",
          "imgUrl": "Private messages can be read.png",
        },
        {
          title: "Contenido específico puede ser eliminado sin motivo y puede ser removido sin previo aviso.",
          description: "Este servicio puede eliminar contenido específico. Por lo general, dirán que se reservan el derecho de hacerlo a su exclusivo criterio, lo cual es una forma legal de decir que no darán un motivo específico. Si los términos dicen que no te notificarán, eso debe incluirse en la cita, pero si no dice explícitamente que te darán un aviso, se puede inferir razonablemente que pueden hacerlo sin decírtelo.",
          "source": "https://edit.tosdr.org/points/8179",
          "imgUrl": "Specific content can be deleted without reason and may be removed without prior notice.png",
        },
        {
          title: "Renunciás a tus derechos morales.",
          description: "Los derechos morales son derechos de los creadores de obras literarias, dramáticas, musicales y artísticas, así como de los directores de cine. 'Los derechos morales incluyen el derecho de atribución, el derecho a que una obra sea publicada de forma anónima o bajo seudónimo, y el derecho a la integridad de la obra. La preservación de la integridad de la obra permite al autor oponerse a alteraciones, distorsiones o mutilaciones de la obra que sean 'perjudiciales para el honor o la reputación del autor'. Cualquier otra cosa que pueda menoscabar la relación del artista con la obra, incluso después de que esta deje de estar en posesión o propiedad del artista, puede hacer que estos derechos morales entren en juego. Los derechos morales son distintos de cualquier derecho económico vinculado a los derechos de autor. Incluso si un artista ha cedido sus derechos de autor sobre una obra a un tercero, todavía mantiene los derechos morales sobre la obra.' -Wikipedia. En general, cualquier término que utilice las palabras exactas 'derechos morales' como derechos que se renuncian caerá bajo este caso.",
          "source": "https://edit.tosdr.org/points/9849",
          "imgUrl": "You waive your moral rights.png",
        }
      ],
      "c": [
        {
          "title": "Este servicio comparte tus datos personales con terceros que no son esenciales para su operación",
          "description": "Tus datos personales pueden ser o serán entregados a terceros no esenciales para la operación del servicio. Esto podría ser un socio comercial que recibe tus datos para proporcionar anuncios dirigidos.",
          "source": "https://edit.tosdr.org/points/13326"
        },
        {
          "title": "Se utilizan cookies de terceros para publicidad",
          "description": "El sitio web del servicio establece cookies de terceros (cookies que no pertenecen a su dominio) para fines que no incluyen estadísticas y análisis.",
          "source": "https://edit.tosdr.org/points/13318"
        },
        {
          "title": "Algunos datos personales pueden ser mantenidos por intereses comerciales u obligaciones legales",
          "description": "Después del final del período de retención de datos y/o si solicitas la eliminación de tus datos, pueden seguir manteniéndolos por intereses comerciales (detección de fraudes, transacciones...) u obligaciones legales (impuestos, informes legales...).",
          "source": "https://edit.tosdr.org/points/13330"
        },
        {
          "title": "Este servicio te rastrea en otros sitios web",
          "description": "El servicio puede usar tecnologías de rastreo en sitios web de terceros para rastrear tu actividad en línea mientras no estás visitando su sitio.",
          "source": "https://edit.tosdr.org/points/13319"
        }
      ],
      "a": [
        {
          "title": "El servicio promete informarte y/o notificarte sobre consultas gubernamentales que puedan involucrar tus datos personales",
          "description": "En caso de que el Gobierno que rige los Términos solicite datos personales de un usuario de este servicio, harán esfuerzos razonables para informar/notificar al usuario (por ejemplo, canario de orden de cateo).",
          "source": "https://edit.tosdr.org/points/5613"
        },
        {
          "title": "Mantienes la propiedad de tu contenido",
          "description": "Este servicio no reclama la propiedad sobre el contenido o materiales generados por los usuarios, y el usuario no necesita renunciar a ningún derecho moral al publicar contenido de su propiedad.",
          "source": "https://edit.tosdr.org/points/8175"
        }
      ]
    }
  },
  {
    "name": "steam",
    "imgUrl": "steam.png",
    "label": "Steam",
    "riskLevel": "d", // or b, c, d, e
    "termsConditionsRisks": {
      "e": [
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          "source": "https://edit.tosdr.org/points/10606",
          "imgUrl": "Private messages can be read.png",
        }
      ],
      "c": [
        {
          "title": "Este servicio puede recopilar, usar y compartir datos de ubicación",
          "description": "Se recopila información basada en la ubicación y puede ser utilizada y/o compartida con terceros para fines no directamente relacionados con los servicios proporcionados (es decir, el Servicio no depende del uso o compartición de datos de ubicación para funcionar correctamente).",
          "source": "https://edit.tosdr.org/points/11342"
        },
        {
          "title": "Algunos datos personales pueden ser mantenidos por intereses comerciales u obligaciones legales",
          "description": "Después del final del período de retención de datos y/o si solicitas la eliminación de tus datos, pueden seguir manteniéndolos por intereses comerciales (detección de fraudes, transacciones...) u obligaciones legales (impuestos, informes legales...).",
          "source": "https://edit.tosdr.org/points/13992"
        },
        {
          "title": "Se te obliga a arbitraje vinculante en caso de disputas",
          "description": "Este servicio obliga a los usuarios a utilizar su propio árbitro contratado y obliga a los usuarios a renunciar a sus derechos a un juicio por jurado.",
          "source": "https://edit.tosdr.org/points/13359"
        },
        {
          "title": "Se pueden recopilar datos adicionales sobre ti a través de promociones",
          "description": "Se pueden recopilar datos personales adicionales a través de concursos, encuestas, promociones, peticiones o sorteos.",
          "source": "https://edit.tosdr.org/points/13983"
        },
        {
          "title": "Renuncias a tu derecho a una demanda colectiva",
          "description": "El derecho a ser representado en una demanda colectiva (o acción representativa) existe en EE. UU. y en algunos países europeos. Permite a las personas que han sido perjudicadas de manera similar por el mismo acusado tomar acciones legales mediante una única demanda en lugar de individualmente. Algunos Términos de Servicio intentan limitar ese derecho. Al aceptarlos, podrías renunciar (= renunciar a) tu derecho a una demanda colectiva, lo que podría reducir tus posibilidades de éxito en un caso.",
          "source": "https://edit.tosdr.org/points/13360"
        },
        {
          "title": "Tus datos personales pueden ser divulgados para cumplir con solicitudes gubernamentales sin aviso previo",
          "description": "Si el Gobierno que rige los Términos solicita datos personales de un usuario de este servicio, pueden no informar/notificar al usuario mientras cumplen con la solicitud.",
          "source": "https://edit.tosdr.org/points/13990"
        }
      ],
      "a": [
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen derecho a acceder a los datos personales que posee el Servicio, corregirlos y/o eliminarlos permanentemente. Esto generalmente se aplica a Servicios que cumplen con el GDPR.",
          "source": "https://edit.tosdr.org/points/13994"
        },
        {
          "title": "Las cuentas de usuario pueden ser terminadas después de haber incumplido los términos del servicio repetidamente",
          "description": "Las cuentas de usuario pueden ser terminadas por haber incumplido los términos del servicio repetidamente, lo que significa que no pueden ser terminadas sin razón, sino solo por un número limitado de razones. Además, las cuentas de usuario no serán eliminadas después de una primera infracción.",
          "source": "https://edit.tosdr.org/points/13355"
        }
      ]
    }
  },
  {
    "name": "discord",
    "imgUrl": "discord.png",
    "label": "Discord",
    "riskLevel": "e", // or b, c, d, e
    "termsConditionsRisks": {
      "e": [
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          "source": "https://edit.tosdr.org/points/9070",
          "imgUrl": "Private messages can be read.png",
        },
        {
          title: "Contenido específico puede ser eliminado sin motivo y puede ser removido sin previo aviso.",
          description: "Este servicio puede eliminar contenido específico. Por lo general, dirán que se reservan el derecho de hacerlo a su exclusivo criterio, lo cual es una forma legal de decir que no darán un motivo específico. Si los términos dicen que no te notificarán, eso debe incluirse en la cita, pero si no dice explícitamente que te darán un aviso, se puede inferir razonablemente que pueden hacerlo sin decírtelo.",
          "source": "https://edit.tosdr.org/points/11419",
          "imgUrl": "Specific content can be deleted without reason and may be removed without prior notice.png",
        }
      ],
      "c": [
        {
          "title": "El contenido generado por los usuarios puede ser bloqueado o censurado por cualquier razón",
          "description": "El servicio se reserva el derecho, por cualquier motivo o sin motivo, de negarse a publicar o rechazar las comunicaciones de los usuarios.",
          "source": "https://edit.tosdr.org/points/10882"
        },
        {
          "title": "Tu cuenta puede ser eliminada o suspendida permanentemente sin previo aviso y sin razón",
          "description": "En cualquier momento, tu cuenta puede ser terminada sin explicación y sin advertencia por parte del servicio.",
          "source": "https://edit.tosdr.org/points/35062"
        },
        {
          "title": "Se recopila información sobre ti a través de terceros",
          "description": "Este servicio puede emplear, ya sea de manera identificable o no identificable, la recopilación de datos de fuentes de terceros sobre ti.",
          "source": "https://edit.tosdr.org/points/35076"
        },
        {
          "title": "Se pueden recopilar datos adicionales sobre ti a través de promociones",
          "description": "Se pueden recopilar datos personales adicionales a través de concursos, encuestas, promociones, peticiones o sorteos.",
          "source": "https://edit.tosdr.org/points/35075"
        },
        {
          "title": "Tus datos personales pueden ser vendidos o transferidos como parte de un procedimiento de bancarrota u otro tipo de transacción financiera",
          "description": "Si el servicio es adquirido o está involucrado en una fusión, bancarrota, reorganización o venta, tus datos personales pueden ser transferidos o vendidos.",
          "source": "https://edit.tosdr.org/points/6121"
        },
        {
          "title": "Eres rastreado a través de balizas web, píxeles de seguimiento, huellas digitales del navegador y/o huellas digitales del dispositivo",
          "description": "Se emplean tecnologías de seguimiento (como balizas web, píxeles de seguimiento...) en los usuarios y/o el servicio asigna un ID único a un navegador o dispositivo para rastrear su comportamiento.",
          "source": "https://edit.tosdr.org/points/6115"
        },
        {
          "title": "Se te obliga a arbitraje vinculante en caso de disputas",
          "description": "Este servicio obliga a los usuarios a utilizar su propio árbitro contratado y obliga a los usuarios a renunciar a sus derechos a un juicio por jurado.",
          "source": "https://edit.tosdr.org/points/11441"
        }
      ],
      "a": [
        {
          "title": "Tu información solo se comparte con terceros cuando se da un consentimiento específico",
          "description": "El servicio no comparte información de los usuarios con terceros a menos que los usuarios le den permiso específicamente para hacerlo.",
          "source": "https://edit.tosdr.org/points/11459"
        },
        {
          "title": "Puedes eliminar tu contenido de este servicio",
          "description": "Puedes pedir al servicio que elimine tu contenido en cualquier momento, y se eliminará dentro de un tiempo razonable.",
          "source": "https://edit.tosdr.org/points/35058"
        }
      ]
    }
  },
  {
    name: "microsoft services",
    imgUrl: "microsoftservices.png",
    label: "Microsoft Services",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "Contenido específico puede ser eliminado sin motivo y puede ser removido sin previo aviso.",
          description: "Este servicio puede eliminar contenido específico. Por lo general, dirán que se reservan el derecho de hacerlo a su exclusivo criterio, lo cual es una forma legal de decir que no darán un motivo específico. Si los términos dicen que no te notificarán, eso debe incluirse en la cita, pero si no dice explícitamente que te darán un aviso, se puede inferir razonablemente que pueden hacerlo sin decírtelo.",
          source: "https://edit.tosdr.org/points/1255",
          imgUrl: "Specific content can be deleted without reason and may be removed without prior notice.png",
        }
      ],
      "c": [
        {
          "title": "Este servicio puede recopilar, usar y compartir datos de ubicación",
          "description": "Se recopila información basada en la ubicación y puede ser utilizada y/o compartida con terceros para fines no directamente relacionados con los servicios proporcionados (es decir, el servicio no depende del uso o la compartición de datos de ubicación para funcionar correctamente).",
          "source": "https://edit.tosdr.org/points/23359"
        },
        {
          "title": "Se utilizan cookies de terceros para publicidad",
          "description": "El sitio web del servicio establece cookies de terceros (cookies que no pertenecen a su dominio) para propósitos que no incluyen estadísticas y análisis.",
          "source": "https://edit.tosdr.org/points/23356"
        },
        {
          "title": "Se recopilan diferentes tipos de datos personales",
          "description": "El servicio recopila diferentes tipos de datos personales, como nombre, información demográfica, dirección postal, datos biométricos, información del dispositivo, identificaciones, contactos, registros de llamadas...",
          "source": "https://edit.tosdr.org/points/23352"
        },
        {
          "title": "Tu cuenta puede ser eliminada o suspendida permanentemente sin previo aviso y sin razón",
          "description": "En cualquier momento, tu cuenta puede ser terminada sin explicación y sin advertencia por parte del servicio.",
          "source": "https://edit.tosdr.org/points/1581"
        },
        {
          "title": "Renuncias a tu derecho a una demanda colectiva.",
          "description": "El derecho a ser representado en una demanda colectiva (o acción representativa) existe en EE. UU. y algunos países europeos. Permite a las personas que han sido lesionadas de manera similar por el mismo acusado emprender acciones legales mediante una sola demanda en lugar de individualmente. Algunos Términos de Servicio intentan limitar ese derecho. Al aceptarlos, podrías renunciar (= renunciar) a tu derecho a una demanda colectiva, lo que podría reducir tus posibilidades de éxito en un caso.",
          "source": "https://edit.tosdr.org/points/14329"
        },
        {
          "title": "Se te obliga a arbitraje vinculante en caso de disputas",
          "description": "Este servicio obliga a los usuarios a utilizar su propio árbitro contratado y obliga a los usuarios a renunciar a sus derechos a juicio por jurado.",
          "source": "https://edit.tosdr.org/points/14330"
        },
        {
          "title": "Se recopilan datos de voz y se comparten con terceros",
          "description": "El servicio recopila datos y grabaciones de tu voz cuando te comunicas verbalmente con el servicio y puede usarlos y compartirlos con terceros, que pueden utilizar estos datos para marketing o publicidad.",
          "source": "https://edit.tosdr.org/points/23351"
        },
        {
          "title": "Se te rastrea a través de cookies/píxeles de redes sociales",
          "description": "Este tipo de cookies/píxeles envían información a sitios de redes sociales cuando interactúas con el servicio.",
          "source": "https://edit.tosdr.org/points/23357"
        },
        {
          "title": "Se te rastrea a través de balizas web, píxeles de seguimiento, huellas digitales del navegador y/o huellas digitales del dispositivo",
          "description": "Se emplean tecnologías de seguimiento (como balizas web, píxeles de seguimiento...) en los usuarios y/o el servicio asigna un ID único a un navegador o dispositivo para rastrear su comportamiento.",
          "source": "https://edit.tosdr.org/points/23355"
        },
        {
          "title": "Tus datos personales pueden ser divulgados para cumplir con solicitudes gubernamentales sin previo aviso",
          "description": "Si el Gobierno que rige los Términos solicita datos personales de un usuario de este servicio, pueden no informar/notificar al usuario mientras cumplen con la solicitud.",
          "source": "https://edit.tosdr.org/points/833"
        },
        {
          "title": "Muchos terceros están involucrados en la operación del servicio",
          "description": "",
          "source": "https://edit.tosdr.org/points/14259"
        }
      ],
      "a": [
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen derecho a acceder a los datos personales que tiene el servicio, corregirlos y/o eliminarlos permanentemente. Esto se aplica generalmente a los servicios que son compatibles con el GDPR.",
          "source": "https://edit.tosdr.org/points/10057"
        },
        {
          "title": "Se proporciona autenticación de dos factores para tu cuenta",
          "description": "El servicio proporciona medios para asegurar aún más tu cuenta con autenticación de dos factores, mejorando así la seguridad de la cuenta.",
          "source": "https://edit.tosdr.org/points/19234"
        },
        {
          "title": "Puedes optar por no participar en la publicidad dirigida",
          "description": "El servicio utiliza tus datos para dirigir anuncios hacia ti, pero puedes optar por no participar en esta publicidad basada en intereses.",
          "source": "https://edit.tosdr.org/points/14258"
        }
      ]
    }
  },
  {
    name: "facebook",
    imgUrl: "facebook.png",
    label: "Facebook",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "Almacenan datos tuyos incluso si no interactuaste con el servicio.",
          description: "Algunos servicios almacenan datos tuyos, incluso si no proporcionaste esos datos vos mismo. Por ejemplo, los usuarios pueden dar acceso a su agenda de contactos, y luego un servicio también podría almacenar los números de teléfono de esos contactos.",
          source: "https://edit.tosdr.org/points/10493",
          imgUrl: "They store data on you even if you did not interact with the service.png",
        },
        {
          title: "Tu identidad se utiliza en anuncios que se muestran a otros usuarios.",
          description: "Los anuncios que se muestran a otros usuarios pueden incluir una referencia a vos como un respaldo implícito. Podrían revelar información sobre tu estilo de vida personal a desconocidos.",
          source: "https://edit.tosdr.org/points/4598",
          imgUrl: "Your identity is used in ads that are shown to other users.png",
        },
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          source: "https://edit.tosdr.org/points/10687",
          imgUrl: "Private messages can be read.png",
        },
        {
          title: "Tu historial de navegación puede ser visto por el servicio.",
          description: "El servicio puede ver tu historial de búsqueda y los sitios web que visitas, lo cual es una forma extremadamente intrusiva de recopilar información que puede incluir datos personales y/o sensibles." ,
          source: "https://edit.tosdr.org/points/17261",
          imgUrl: "Your browsing history can be viewed by the service.png",
        },
        {
          title: "Este servicio retiene contenido que has eliminado.",
          description: "El contenido puede permanecer en servidores de respaldo y ser retenido después de la eliminación, por lo que nunca se elimina por completo. Este caso no se aplica a las contribuciones que no se pueden eliminar debido a la naturaleza del servicio.",
          source: "https://edit.tosdr.org/points/4356",
          imgUrl: "This service holds onto content that you've deleted.png",
        }
      ],
      "c": [
        {
          "title": "Los registros se mantienen por un período indefinido",
          "description": "Los registros son archivos de texto que contienen información sobre los visitantes de la web, como los agentes de usuario (que indican, por ejemplo, que te estás conectando desde Firefox para Android) y las direcciones IP (que revelan tu ubicación aproximada). Este caso se aplica a los servicios que pueden mantener registros indefinidamente, permitiendo que las sesiones de los usuarios sean rastreadas a lo largo del tiempo. Los registros que se conservan durante un período 'consistente con la legislación aplicable' también entran en este caso, ya que este período puede ser ambiguo o indefinido.",
          "source": "https://edit.tosdr.org/points/10701"
        },
        {
          "title": "La app requerida para este servicio requiere amplios permisos del dispositivo",
          "description": "La app del servicio requiere más permisos del dispositivo de los necesarios. Como consecuencia, puede comprometer tu privacidad al acceder a muchas funciones e información de tu dispositivo, como ubicación precisa, contactos, identificadores del dispositivo, etc.",
          "source": "https://edit.tosdr.org/points/1059"
        },
        {
          "title": "Este servicio puede recopilar, usar y compartir datos de ubicación",
          "description": "Se recopila información basada en la ubicación y puede ser utilizada y/o compartida con terceros para fines no directamente relacionados con los servicios proporcionados (es decir, el servicio no depende del uso o la compartición de datos de ubicación para funcionar correctamente).",
          "source": "https://edit.tosdr.org/points/10686"
        },
        {
          "title": "Se recopilan diferentes tipos de datos personales",
          "description": "El servicio recopila diferentes tipos de datos personales, como nombre, información demográfica, dirección postal, datos biométricos, información del dispositivo, identificaciones, contactos, registros de llamadas...",
          "source": "https://edit.tosdr.org/points/10688"
        },
        {
          "title": "Algunos datos personales pueden ser mantenidos por intereses comerciales u obligaciones legales",
          "description": "Después de que termine el período de retención de datos y/o si solicitas la eliminación de tus datos, aún pueden mantenerlos por intereses comerciales (detección de fraudes, transacciones...) u obligaciones legales (impuestos, informes legales...)",
          "source": "https://edit.tosdr.org/points/10700"
        },
        {
          "title": "Se utilizan cookies de terceros para publicidad",
          "description": "El sitio web del servicio establece cookies de terceros (cookies que no pertenecen a su dominio) para propósitos que no incluyen estadísticas y análisis.",
          "source": "https://edit.tosdr.org/points/17260"
        },
        {
          "title": "Este servicio te rastrea en otros sitios web",
          "description": "El servicio puede usar tecnologías de seguimiento en sitios web de terceros para rastrear tu actividad en línea mientras no estás visitando su sitio.",
          "source": "https://edit.tosdr.org/points/743"
        },
        {
          "title": "Se te rastrea a través de balizas web, píxeles de seguimiento, huellas digitales del navegador y/o huellas digitales del dispositivo",
          "description": "Se emplean tecnologías de seguimiento (como balizas web, píxeles de seguimiento...) en los usuarios y/o el servicio asigna un ID único a un navegador o dispositivo para rastrear su comportamiento.",
          "source": "https://edit.tosdr.org/points/10689"
        }
      ],
      "a": [
        {
          "title": "A terceros no se les permite acceder a tu información personal sin una base legal",
          "description": "",
          "source": "https://edit.tosdr.org/points/10691"
        },
        {
          "title": "Mantienes la propiedad de tu contenido",
          "description": "Este servicio no reclama la propiedad sobre el contenido o materiales generados por el usuario, y el usuario no necesita renunciar a ningún derecho moral al publicar contenido propio.",
          "source": "https://edit.tosdr.org/points/10738"
        },
        {
          "title": "Se te informa sobre el riesgo de publicar información personal en línea",
          "description": "",
          "source": "https://edit.tosdr.org/points/646"
        },
        {
          "title": "Se proporciona un sitio onion accesible a través de Tor",
          "description": "Tor es un software para comunicación anónima que dirige el tráfico de Internet a través de una red superpuesta. Los sitios onion solo están disponibles a través del navegador Tor y proporcionan seguridad adicional y anonimato a los usuarios.",
          "source": "https://edit.tosdr.org/points/16745"
        },
        {
          "title": "Se proporciona información sobre cómo se utiliza tu información personal",
          "description": "La Política de Privacidad explica los propósitos por los cuales se recopilan los datos y la forma en que se procesan, utilizan y comparten.",
          "source": "https://edit.tosdr.org/points/10693"
        },
        {
          "title": "Puedes optar por no participar en la publicidad dirigida",
          "description": "El servicio utiliza tus datos para dirigir anuncios hacia ti, pero puedes optar por no participar en esta publicidad basada en intereses.",
          "source": "https://edit.tosdr.org/points/10744"
        },
        {
          "title": "Tus datos personales no son vendidos",
          "description": "Este servicio hace una promesa explícita de no vender 'datos personales' de los usuarios.",
          "source": "https://edit.tosdr.org/points/10717"
        }
      ]
    }
  },
  {
    name: "google",
    imgUrl: "google.png",
    label: "Google",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "Almacenan datos tuyos incluso si no interactuaste con el servicio.",
          description: "Algunos servicios almacenan datos tuyos, incluso si no proporcionaste esos datos vos mismo. Por ejemplo, los usuarios pueden dar acceso a su agenda de contactos, y luego un servicio también podría almacenar los números de teléfono de esos contactos.",
          source: "https://edit.tosdr.org/points/13969",
          imgUrl: "They store data on you even if you did not interact with the service.png",
        },
        {
          title: "Tu identidad se utiliza en anuncios que se muestran a otros usuarios.",
          description: "Los anuncios que se muestran a otros usuarios pueden incluir una referencia a vos como un respaldo implícito. Podrían revelar información sobre tu estilo de vida personal a desconocidos.",
          source: "https://edit.tosdr.org/points/12831",
          imgUrl: "Your identity is used in ads that are shown to other users.png",
        },
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          source: "https://edit.tosdr.org/points/13935",
          imgUrl: "Private messages can be read.png",
        },
        {
          title: "Tu historial de navegación puede ser visto por el servicio.",
          description: "El servicio puede ver tu historial de búsqueda y los sitios web que visitas, lo cual es una forma extremadamente intrusiva de recopilar información que puede incluir datos personales y/o sensibles." ,
          source: "https://edit.tosdr.org/points/12819",
          imgUrl: "Your browsing history can be viewed by the service.png",
        },
        {
          title: "Este servicio retiene contenido que has eliminado.",
          description: "El contenido puede permanecer en servidores de respaldo y ser retenido después de la eliminación, por lo que nunca se elimina por completo. Este caso no se aplica a las contribuciones que no se pueden eliminar debido a la naturaleza del servicio.",
          source: "https://edit.tosdr.org/points/13948",
          imgUrl: "This service holds onto content that you've deleted.png",
        }
      ],
      "c": [
        {
          "title": "La app requerida para este servicio requiere amplios permisos del dispositivo",
          "description": "La app del servicio requiere más permisos del dispositivo de los necesarios. Como consecuencia, puede comprometer tu privacidad al acceder a muchas funciones e información de tu dispositivo, como ubicación precisa, contactos, identificadores del dispositivo, etc.",
          "source": "https://edit.tosdr.org/points/12814"
        },
        {
          "title": "Este servicio puede recopilar, usar y compartir datos de ubicación",
          "description": "Se recopila información basada en la ubicación y puede ser utilizada y/o compartida con terceros para fines no directamente relacionados con los servicios proporcionados (es decir, el servicio no depende del uso o la compartición de datos de ubicación para funcionar correctamente).",
          "source": "https://edit.tosdr.org/points/5841"
        },
        {
          "title": "Algunos datos personales pueden ser mantenidos por intereses comerciales u obligaciones legales",
          "description": "Después de que termine el período de retención de datos y/o si solicitas la eliminación de tus datos, aún pueden mantenerlos por intereses comerciales (detección de fraudes, transacciones...) u obligaciones legales (impuestos, informes legales...)",
          "source": "https://edit.tosdr.org/points/13937"
        },
        {
          "title": "Este servicio comparte tus datos personales con terceros que no son esenciales para su operación",
          "description": "Tus datos personales son o pueden ser entregados a terceros no esenciales para el funcionamiento del servicio. Esto podría ser un socio comercial que recibe tus datos para proporcionar publicidad dirigida.",
          "source": "https://edit.tosdr.org/points/14756"
        },
        {
          "title": "Tu cuenta puede ser eliminada o suspendida permanentemente sin previo aviso y sin razón",
          "description": "En cualquier momento, tu cuenta puede ser terminada sin explicación y sin advertencia por el servicio.",
          "source": "https://edit.tosdr.org/points/14762"
        }
      ],
      "a": [
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen derecho a acceder a los datos personales que posee el servicio, corregirlos y/o eliminarlos permanentemente. Esto generalmente se aplica a los servicios compatibles con el GDPR.",
          "source": "https://edit.tosdr.org/points/5844"
        },
        {
          "title": "Se proporcionan archivos de sus acuerdos para que los cambios puedan ser vistos a lo largo del tiempo",
          "description": "Este caso se aplica a los servicios cuyos acuerdos proporcionan versiones anteriores, para que los usuarios puedan compararlas y entender cómo parece evolucionar el servicio respecto a los derechos de los usuarios.",
          "source": "https://edit.tosdr.org/points/950"
        },
        {
          "title": "Mantienes la propiedad de tu contenido",
          "description": "Este servicio no reclama la propiedad sobre el contenido o materiales generados por el usuario, y el usuario no necesita renunciar a ningún derecho moral al publicar contenido propio.",
          "source": "https://edit.tosdr.org/points/13946"
        },
        {
          "title": "Si ofreces sugerencias al servicio, pueden usarlas sin tu aprobación o compensación, pero no se convierten en los propietarios",
          "description": "El servicio puede emplear una amplia licencia de derechos de autor sobre comentarios, propuestas, ideas y sugerencias enviadas, incluido el derecho a usarlas sin restricciones, compensación u obligación hacia el usuario, pero no reclaman la propiedad sobre ellas.",
          "source": "https://edit.tosdr.org/points/13950"
        },
        {
          "title": "Puedes recuperar un archivo de tus datos",
          "description": "Los usuarios pueden solicitar una copia de los datos recopilados a través de los servicios e inferir de ella la cantidad de información personal que es procesada y almacenada por el servicio. Esto generalmente se aplica a los servicios compatibles con el GDPR.",
          "source": "https://edit.tosdr.org/points/5843"
        }
      ]
    }
  },
  {
    name: "apple services",
    imgUrl: "appleservices.png",
    label: "Apple Services",
    riskLevel: "d", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "El contenido que publiques puede ser editado por el servicio por cualquier motivo.",
          description: "Este servicio puede editar cualquier contenido en el servicio por cualquier motivo y a su exclusivo criterio.",
          source: "https://edit.tosdr.org/points/20942",
          imgUrl: "Content you post may be edited by the service for any reason.png",
        },
        {
          title: "Contenido específico puede ser eliminado sin motivo y puede ser removido sin previo aviso.",
          description: "Este servicio puede eliminar contenido específico. Por lo general, dirán que se reservan el derecho de hacerlo a su exclusivo criterio, lo cual es una forma legal de decir que no darán un motivo específico. Si los términos dicen que no te notificarán, eso debe incluirse en la cita, pero si no dice explícitamente que te darán un aviso, se puede inferir razonablemente que pueden hacerlo sin decírtelo.",
          source: "https://edit.tosdr.org/points/11301",
          imgUrl: "Specific content can be deleted without reason and may be removed without prior notice.png",
        }
      ],
      "c": [
        {
          "title": "Este servicio puede recopilar, usar y compartir datos de ubicación",
          "description": "Se recopila información basada en la ubicación y puede ser utilizada y/o compartida con terceros para fines no directamente relacionados con los servicios proporcionados (es decir, el servicio no depende del uso o la compartición de datos de ubicación para funcionar correctamente).",
          "source": "https://edit.tosdr.org/points/20938"
        },
        {
          "title": "Los términos pueden cambiar en cualquier momento a su discreción, sin previo aviso",
          "description": "Los acuerdos pueden ser actualizados en cualquier momento, incluso de una manera que afecte negativamente los derechos del usuario, sin notificar antes o después de los cambios.",
          "source": "https://edit.tosdr.org/points/1494"
        },
        {
          "title": "Se recopilan muchos tipos diferentes de datos personales",
          "description": "El servicio recopila diferentes tipos de datos personales, como nombre, información demográfica, dirección postal, datos biométricos, información del dispositivo, identificadores, contactos, registros de llamadas...",
          "source": "https://edit.tosdr.org/points/19963"
        }
      ],
      "a": [
        {
          "title": "El período de retención de datos se mantiene al mínimo necesario para cumplir con sus propósitos",
          "description": "El servicio eliminará los datos personales de sus sistemas una vez que ya no sean requeridos. Dependiendo del tipo de información y la razón por la que fue recopilada, los períodos de retención de datos variarán.",
          "source": "https://edit.tosdr.org/points/5545"
        },
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen derecho a acceder a los datos personales que posee el servicio, corregirlos y/o eliminarlos permanentemente. Esto generalmente se aplica a los servicios compatibles con el GDPR.",
          "source": "https://edit.tosdr.org/points/5544"
        },
        {
          "title": "El tribunal que rige los términos está en una jurisdicción más favorable a la protección de la privacidad del usuario.",
          "description": "Los términos están regidos por las leyes aplicables de una jurisdicción conocida por proteger la privacidad de los ciudadanos con fuertes regulaciones de datos. Por lo general, los contribuyentes deberán explicar en la vista de análisis de cada punto vinculado a este caso por qué la jurisdicción es favorable a la protección de la privacidad del usuario.",
          "source": "https://edit.tosdr.org/points/20939"
        }
      ]
    }
  },
  {
    name: "pinterest",
    imgUrl: "pinterest.png",
    label: "Pinterest",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "Almacenan tus datos incluso si no interactuaste con el servicio.",
          description: "Algunos servicios almacenan tus datos, incluso si no proporcionaste esos datos vos mismo. Por ejemplo, los usuarios pueden dar acceso a su agenda de contactos, y luego un servicio también podría almacenar los números de teléfono de esos contactos.",
          source: "https://edit.tosdr.org/points/12956",
          imgUrl: "They store data on you even if you did not interact with the service.png",
        },
        {
          title: "Los mensajes privados pueden ser leídos.",
          description: "El Servicio puede acceder, escanear, revisar o leer todas las comunicaciones de los usuarios, incluidos los mensajes privados, que pueden contener datos personales o sensibles.",
          source: "https://edit.tosdr.org/points/12990",
          imgUrl: "Private messages can be read.png",
        },
        {
          title: "Contenido específico puede ser eliminado sin motivo y puede ser removido sin previo aviso.",
          description: "Este servicio puede eliminar contenido específico. Por lo general, dirán que se reservan el derecho de hacerlo a su exclusivo criterio, lo cual es una forma legal de decir que no darán un motivo específico. Si los términos dicen que no te notificarán, eso debe incluirse en la cita, pero si no dice explícitamente que te darán un aviso, se puede inferir razonablemente que pueden hacerlo sin decírtelo.",
          source: "https://edit.tosdr.org/points/12961",
          imgUrl: "Specific content can be deleted without reason and may be removed without prior notice.png",
        },
        {
          title: "Este servicio retiene contenido que has eliminado.",
          description: "El contenido puede permanecer en servidores de respaldo y ser retenido después de la eliminación, por lo que nunca se elimina por completo. Este caso no se aplica a las contribuciones que no se pueden eliminar debido a la naturaleza del servicio.",
          source: "https://edit.tosdr.org/points/12962",
          imgUrl: "This service holds onto content that you've deleted.png",
        }
      ],
      "c": [
        {
          "title": "La aplicación requerida para este servicio necesita amplios permisos del dispositivo",
          "description": "La aplicación del servicio requiere más permisos del dispositivo de los necesarios. Como consecuencia, puede comprometer tu privacidad al acceder a muchas funciones e información de tu dispositivo, como la ubicación precisa, contactos, identificadores del dispositivo, etc.",
          "source": "https://edit.tosdr.org/points/12986"
        },
        {
          "title": "Tu cuenta puede ser eliminada o suspendida permanentemente sin previo aviso y sin razón",
          "description": "En cualquier momento, tu cuenta puede ser terminada sin explicación y sin advertencia por parte del servicio.",
          "source": "https://edit.tosdr.org/points/12966"
        },
        {
          "title": "Este servicio te rastrea en otros sitios web",
          "description": "El servicio puede usar tecnologías de rastreo en sitios web de terceros para seguir tu actividad en línea mientras no estás visitando su sitio.",
          "source": "https://edit.tosdr.org/points/13012"
        }
      ],
      "a": [
        {
          "title": "Mantienes la propiedad de tu contenido",
          "description": "Este servicio no reclama propiedad sobre el contenido o materiales generados por los usuarios, y el usuario no necesita renunciar a ningún derecho moral al publicar contenido propio.",
          "source": "https://edit.tosdr.org/points/8087"
        },
        {
          "title": "Se proporciona información sobre cómo recopilan datos personales",
          "description": "El servicio detalla las situaciones en las que recopilan información personal o los medios por los cuales lo hacen.",
          "source": "https://edit.tosdr.org/points/12982"
        },
        {
          "title": "Se respetan las cabeceras de No Rastrear (DNT) de tu navegador",
          "description": "Este servicio respeta la cabecera de No Rastrear del navegador y desactiva todo el rastreo de usuarios si está habilitada.",
          "source": "https://edit.tosdr.org/points/13013"
        }
      ]
    }
  },
  {
    name: "spotify",
    imgUrl: "spotify.png",
    label: "Spotify",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "Contenido específico puede ser eliminado sin motivo y puede ser removido sin previo aviso.",
          description: "Este servicio puede eliminar contenido específico. Por lo general, dirán que se reservan el derecho de hacerlo a su exclusivo criterio, lo cual es una forma legal de decir que no darán un motivo específico. Si los términos dicen que no te notificarán, eso debe incluirse en la cita, pero si no dice explícitamente que te darán un aviso, se puede inferir razonablemente que pueden hacerlo sin decírtelo.",
          source: "https://edit.tosdr.org/points/12733",
          imgUrl: "Specific content can be deleted without reason and may be removed without prior notice.png",
        },
        {
          title: "Renunciás a tus derechos morales.",
          description: "Los derechos morales son derechos de los creadores de obras literarias, dramáticas, musicales y artísticas, así como de los directores de cine. 'Los derechos morales incluyen el derecho de atribución, el derecho a que una obra sea publicada de forma anónima o bajo seudónimo, y el derecho a la integridad de la obra. La preservación de la integridad de la obra permite al autor oponerse a alteraciones, distorsiones o mutilaciones de la obra que sean 'perjudiciales para el honor o la reputación del autor'. Cualquier otra cosa que pueda menoscabar la relación del artista con la obra, incluso después de que esta deje de estar en posesión o propiedad del artista, puede hacer que estos derechos morales entren en juego. Los derechos morales son distintos de cualquier derecho económico vinculado a los derechos de autor. Incluso si un artista ha cedido sus derechos de autor sobre una obra a un tercero, todavía mantiene los derechos morales sobre la obra.' -Wikipedia. En general, cualquier término que utilice las palabras exactas 'derechos morales' como derechos que se renuncian caerá bajo este caso.",
          source: "https://edit.tosdr.org/points/12744",
          imgUrl: "You waive your moral rights.png",
        }
      ],
      "c": [
        {
          "title": "Algunos datos personales pueden ser retenidos por intereses comerciales u obligaciones legales",
          "description": "Después del final del período de retención de datos y/o si solicitas la eliminación de tus datos, pueden seguir manteniéndolos por intereses comerciales (detección de fraude, transacciones...) u obligaciones legales (impuestos, informes legales...).",
          "source": "https://edit.tosdr.org/points/13222"
        },
        {
          "title": "Tu cuenta puede ser eliminada o suspendida permanentemente sin previo aviso y sin razón",
          "description": "En cualquier momento, tu cuenta puede ser terminada sin explicación y sin advertencia por parte del servicio.",
          "source": "https://edit.tosdr.org/points/21520"
        },
        {
          "title": "Renuncias a tu derecho a una demanda colectiva.",
          "description": "El derecho a ser representado en una demanda colectiva (o acción representativa) existe en los EE. UU. y algunos países europeos. Permite a las personas que han sido perjudicadas de manera similar por el mismo acusado tomar acciones legales a través de una sola demanda en lugar de individualmente. Algunos Términos de Servicio intentan limitar ese derecho. Al aceptarlos, podrías renunciar (= renunciar a) tu derecho a una demanda colectiva, lo que podría reducir tus posibilidades de éxito en un caso.",
          "source": "https://edit.tosdr.org/points/12768"
        }
      ],
      "a": [
        {
          "title": "Puedes solicitar acceso, corrección y/o eliminación de tus datos",
          "description": "Los usuarios tienen derecho a acceder a los datos personales que tiene el Servicio, corregirlos y/o eliminarlos permanentemente. Esto generalmente se aplica a los servicios que cumplen con el GDPR.",
          "source": "https://edit.tosdr.org/points/12770"
        },
        {
          "title": "Si ofreces sugerencias al servicio, pueden usarlas sin tu aprobación o compensación, pero no se convierten en propietarios",
          "description": "El servicio puede emplear una amplia licencia de derechos de autor sobre comentarios, propuestas, ideas y sugerencias enviadas, incluyendo el derecho a usarlas sin restricciones, compensación u obligación hacia el usuario, pero no reclaman propiedad sobre ellas.",
          "source": "https://edit.tosdr.org/points/12737"
        },
        {
          "title": "Mantienes la propiedad de tu contenido",
          "description": "Este servicio no reclama propiedad sobre el contenido o materiales generados por los usuarios, y el usuario no necesita renunciar a ningún derecho moral al publicar contenido propio.",
          "source": "https://edit.tosdr.org/points/27163"
        }
      ]
    }
  },
];
