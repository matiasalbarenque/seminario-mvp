import type { ServiceMock } from '@/typings/mocks/services';

export const servicesMock: ServiceMock[] = [
  {
    name: 'facebook',
    imgUrl: 'facebook.png',
    label: 'Facebook',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Guardan tus datos sin que interactúes',
          description:
            'Algunos servicios guardan información sobre ti, incluso si no has dado esos datos directamente. Por ejemplo, pueden guardar los números de teléfono de tus contactos si les das acceso a tu agenda.',
          source: 'https://edit.tosdr.org/points/10493',
          imgUrl: 'They store data on you even if you did not interact with the service.png',
        },
        {
          title: 'Tu identidad se usa en anuncios para otros',
          description:
            'Los anuncios que ves pueden usar tu identidad, revelando detalles sobre tu vida a personas que no conoces.',
          source: 'https://edit.tosdr.org/points/4598',
          imgUrl: 'Your identity is used in ads that are shown to other users.png',
        },
        {
          title: 'Pueden leer tus mensajes privados',
          description:
            'El servicio puede revisar todos tus mensajes privados, incluidos los que contienen información personal o sensible.',
          source: 'https://edit.tosdr.org/points/10687',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Pueden ver qué sitios visitas',
          description:
            'El servicio puede saber qué sitios web has visitado, lo que puede incluir información personal.',
          source: 'https://edit.tosdr.org/points/17261',
          imgUrl: 'Your browsing history can be viewed by the service.png',
        },
        {
          title: 'No eliminan todo lo que borras',
          description:
            'Aunque elimines contenido, puede que siga guardado en sus sistemas, aunque no siempre sea visible para ti.',
          source: 'https://edit.tosdr.org/points/4356',
          imgUrl: "This service holds onto content that you've deleted.png",
        },
      ],
      c: [
        {
          title: 'Guardan tus datos por tiempo indefinido',
          description:
            'Puede guardar información sobre ti, como tu ubicación, durante mucho tiempo, a veces sin un límite claro.',
          source: 'https://edit.tosdr.org/points/10701',
          imgUrl: 'keepData.png',
        },
        {
          title: 'La app pide permisos demás',
          description:
            'Puede pedirte acceso a datos de tu dispositivo que no son necesarios para que funcione, como tu ubicación o contactos.',
          source: 'https://edit.tosdr.org/points/1059',
          imgUrl: 'plus.png',
        },
        {
          title: 'Usan tu ubicación',
          description: 'Pede recopilar tu ubicación y usarla, incluso compartirla con otras empresas.',
          source: 'https://edit.tosdr.org/points/10686',
          imgUrl: 'ubicacion.png',
        },
        {
          title: 'Recopilan mucha información sobre ti',
          description:
            'Recoge varios tipos de datos personales, como tu nombre, dirección, o información de tu dispositivo.',
          source: 'https://edit.tosdr.org/points/10688',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Pueden seguir guardando tus datos',
          description:
            'Aunque pidas que eliminen tus datos, pueden seguir guardándolos por razones legales o comerciales.',
          source: 'https://edit.tosdr.org/points/10700',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Usan anuncios de otras empresas',
          description:
            'Usa herramientas de otras empresas para mostrarte anuncios personalizados, incluso fuera de su plataforma.',
          source: 'https://edit.tosdr.org/points/17260',
          imgUrl: 'ads.png',
        },
        {
          title: 'Te siguen en otros sitios',
          description: 'Puede seguir tu actividad en otros sitios web para obtener más información sobre ti.',
          source: 'https://edit.tosdr.org/points/743',
          imgUrl: 'webTracking.png',
        },
        {
          title: 'Rastrean lo que haces en línea',
          description:
            'Usa tecnologías para rastrear tu actividad en línea y construir un perfil de ti, para seguirte mientras navegas.',
          source: 'https://edit.tosdr.org/points/10689',
          imgUrl: 'cookies.png',
        },
      ],
      a: [
        {
          title: 'No comparten tus datos sin motivo legal',
          description: '',
          source: 'https://edit.tosdr.org/points/10691',
          imgUrl: 'dataGreen.png',
        },
        {
          title: 'Mantienes los derechos de tu contenido',
          description: 'No reclama la propiedad de lo que subes o publicas, sigues siendo dueño de tu contenido.',
          source: 'https://edit.tosdr.org/points/10738',
          imgUrl: 'rights.png',
        },
        {
          title: 'Te avisan de los riesgos de compartir datos',
          description: '',
          source: 'https://edit.tosdr.org/points/646',
          imgUrl: 'warningGreen.png',
        },
        {
          title: 'Tienen un sitio más seguro para Tor',
          description:
            'Tiene un sitio especial para usuarios que usan Tor, un sistema que permite navegar de forma anónima y más segura.',
          source: 'https://edit.tosdr.org/points/16745',
          imgUrl: 'browserGreen.png',
        },
        {
          title: 'Te explican cómo usan tus datos',
          description: 'La Política de Privacidad te explica cómo recopilan, usan y comparten tu información.',
          source: 'https://edit.tosdr.org/points/10693',
          imgUrl: 'dataGreen.png',
        },
        {
          title: 'Puedes elegir no ver anuncios personalizados',
          description: 'Puedes decidir no participar en la publicidad personalizada que el servicio te muestra.',
          source: 'https://edit.tosdr.org/points/10744',
          imgUrl: 'adsGreen.png',
        },
        {
          title: 'No venden tu información',
          description: 'Garantiza que no venderá tu información personal a otras empresas.',
          source: 'https://edit.tosdr.org/points/10717',
          imgUrl: 'moneyGreen.png',
        },
      ],
    },
  },
  {
    name: 'google',
    imgUrl: 'google.png',
    label: 'Google',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Guardan tus datos aunque no interactúes',
          description:
            'Algunos servicios almacenan información tuya incluso si no la proporcionaste directamente. Por ejemplo, pueden guardar los números de teléfono de tus contactos si les das acceso a tu agenda.',
          source: 'https://edit.tosdr.org/points/13969',
          imgUrl: 'They store data on you even if you did not interact with the service.png',
        },
        {
          title: 'Tu identidad se usa en anuncios para otros',
          description:
            'Los anuncios dirigidos a otras personas pueden incluir tu identidad de forma implícita, revelando detalles sobre tu vida personal a desconocidos.',
          source: 'https://edit.tosdr.org/points/12831',
          imgUrl: 'Your identity is used in ads that are shown to other users.png',
        },
        {
          title: 'Pueden leer tus mensajes privados',
          description:
            'El servicio puede acceder, leer o revisar tus mensajes privados, que podrían contener información personal o sensible.',
          source: 'https://edit.tosdr.org/points/13935',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Pueden ver tu historial de navegación',
          description:
            'El servicio puede ver los sitios web que visitas, lo cual puede ser muy invasivo, ya que recopila información personal o sensible sobre tus búsquedas y páginas visitadas.',
          source: 'https://edit.tosdr.org/points/12819',
          imgUrl: 'Your browsing history can be viewed by the service.png',
        },
        {
          title: 'No eliminan todo el contenido que borras',
          description:
            'Aunque elimines contenido, este puede quedar almacenado en sus sistemas de respaldo y no desaparecer por completo.',
          source: 'https://edit.tosdr.org/points/13948',
          imgUrl: "This service holds onto content that you've deleted.png",
        },
      ],
      c: [
        {
          title: 'La app pide permisos demás',
          description:
            'La app del servicio solicita permisos de acceso a muchas funciones de tu dispositivo, como ubicación, contactos y otros datos, lo cual puede comprometer tu privacidad.',
          source: 'https://edit.tosdr.org/points/12814',
          imgUrl: 'plus.png',
        },
        {
          title: 'Recopilan y comparten tu ubicación',
          description:
            'El servicio puede recopilar información sobre tu ubicación, y compartirla con terceros para fines que no están directamente relacionados con el funcionamiento del servicio.',
          source: 'https://edit.tosdr.org/points/5841',
          imgUrl: 'ubicacion.png',
        },
        {
          title: 'Pueden mantener tus datos',
          description:
            'Aunque terminen el período de retención de datos o pidas eliminar tu información, pueden seguir guardándola por razones comerciales (como prevención de fraudes) o por obligaciones legales.',
          source: 'https://edit.tosdr.org/points/13937',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Comparten tus datos',
          description:
            'El servicio puede compartir tus datos personales con terceros que no son necesarios para su funcionamiento, como socios comerciales que los utilizan para publicidad.',
          source: 'https://edit.tosdr.org/points/14756',
          imgUrl: 'shareDataYellow.png',
        },
        {
          title: 'Pueden eliminar tu cuenta',
          description:
            'En cualquier momento, el servicio puede suspender o eliminar tu cuenta sin advertencia ni explicación.',
          source: 'https://edit.tosdr.org/points/14762',
          imgUrl: 'trashYellow.png',
        },
      ],
      a: [
        {
          title: 'Puedes gestionar tus datos personales',
          description:
            'Tienes el derecho de acceder a los datos personales que el servicio tiene sobre ti, corregirlos o eliminarlos por completo, especialmente en servicios que cumplen con el GDPR.',
          source: 'https://edit.tosdr.org/points/5844',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Pueden consultarse los cambios en los acuerdos',
          description:
            'Este servicio permite ver las versiones anteriores de sus acuerdos, lo que te ayuda a entender cómo cambian con el tiempo en cuanto a los derechos de los usuarios.',
          source: 'https://edit.tosdr.org/points/950',
          imgUrl: 'questionGreen.png',
        },
        {
          title: 'Mantienes la propiedad de tu contenido',
          description:
            'El servicio no reclama la propiedad sobre el contenido que generas. Tú sigues siendo dueño de lo que publicas, sin necesidad de renunciar a derechos morales.',
          source: 'https://edit.tosdr.org/points/13946',
          imgUrl: 'property.png',
        },
        {
          title: 'Tus sugerencias pueden ser usadas sin compensación',
          description:
            'Si envías sugerencias o ideas, el servicio puede utilizarlas sin necesidad de compensación o permiso previo, aunque no reclama la propiedad sobre ellas.',
          source: 'https://edit.tosdr.org/points/13950',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Puedes obtener una copia de tus datos',
          description:
            'Puedes solicitar una copia de los datos que el servicio tiene sobre ti, lo que te permitirá ver qué información personal se está procesando y almacenando.',
          source: 'https://edit.tosdr.org/points/5843',
          imgUrl: 'shareDataGreen.png',
        },
      ],
    },
  },
  {
    name: 'x',
    imgUrl: 'x.png',
    label: 'X',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Guardan tus datos sin que los envíes.',
          description:
            'Almacenan información tuya sin que la hayas proporcionado directamente, como los números de teléfono de tus contactos.',
          source: 'https://edit.tosdr.org/points/12804',
          imgUrl: 'They store data on you even if you did not interact with the service.png',
        },
        {
          title: 'Pueden leer tus mensajes privados.',
          description:
            'Puede acceder y leer tus mensajes privados, que pueden contener información personal o sensible.',
          source: 'https://edit.tosdr.org/points/12796',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Pueden eliminar tu contenido sin aviso.',
          description: 'Puede borrar tu contenido sin dar explicaciones ni notificarte.',
          source: 'https://edit.tosdr.org/points/5854',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
        {
          title: 'Ven tu historial de navegación.',
          description:
            'Puede ver los sitios que visitas y tu historial de búsqueda, lo que puede incluir información sensible.',
          source: 'https://edit.tosdr.org/points/12806',
          imgUrl: 'Your browsing history can be viewed by the service.png',
        },
        {
          title: 'Guardan contenido que borras.',
          description: 'Aunque elimines algo, pueden seguir guardando una copia.',
          source: 'https://edit.tosdr.org/points/12794',
          imgUrl: "This service holds onto content that you've deleted.png",
        },
      ],
      c: [
        {
          title: 'Recopilan y comparten tu ubicación.',
          description:
            'El servicio puede recolectar tu ubicación y compartirla con otros, aunque no sea necesario para su funcionamiento.',
          source: 'https://edit.tosdr.org/points/12797',
          imgUrl: 'ubicacion.png',
        },
        {
          title: 'Recogen muchos datos personales.',
          description: 'Recopilan varios tipos de datos personales, como tu nombre, dirección, biometría y más.',
          source: 'https://edit.tosdr.org/points/12791',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Usan herramientas de otras empresas para mostrarte anuncios',
          description:
            'El servicio utiliza tecnologías de otras empresas para mostrarte anuncios personalizados según tu actividad en línea, y para recopilar información sobre cómo usas el servicio.',
          source: 'https://edit.tosdr.org/points/779',
          imgUrl: 'ads.png',
        },
      ],
      a: [
        {
          title: 'Puedes ver cambios en sus acuerdos.',
          description:
            'Algunos servicios muestran versiones anteriores de sus acuerdos para que puedas ver cómo cambian con el tiempo.',
          source: 'https://edit.tosdr.org/points/12787',
          imgUrl: 'questionMark.png',
        },
        {
          title: 'Pueden usar tus sugerencias sin pagarte.',
          description:
            'Si das ideas o sugerencias, el servicio puede usarlas sin pagarte, pero no reclama la propiedad de tus ideas.',
          source: 'https://edit.tosdr.org/points/8550',
          imgUrl: 'thumbsUp.png',
        },
      ],
    },
  },
  {
    name: 'instagram',
    imgUrl: 'instagram.png',
    label: 'Instagram',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Guardan tus datos aunque no interactúes.',
          description:
            'Algunos servicios almacenan tus datos incluso si no los proporcionaste directamente. Por ejemplo, pueden guardar los números de teléfono de tus contactos si les das acceso a tu agenda.',
          source: 'https://edit.tosdr.org/points/12228',
          imgUrl: 'They store data on you even if you did not interact with the service.png',
        },
        {
          title: 'Tu identidad se usa en anuncios.',
          description:
            'Tu identidad puede ser utilizada para mostrar anuncios a otras personas, revelando información sobre tu estilo de vida a desconocidos.',
          source: 'https://edit.tosdr.org/points/11358',
          imgUrl: 'Your identity is used in ads that are shown to other users.png',
        },
        {
          title: 'Pueden leer tus mensajes privados.',
          description:
            'El servicio puede acceder, revisar y leer tus mensajes privados, los cuales pueden contener información personal o sensible.',
          source: 'https://edit.tosdr.org/points/12190',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Guardan lo que eliminas.',
          description:
            'Aunque elimines algo, puede seguir guardado en los servidores del servicio y no eliminarse completamente.',
          source: 'https://edit.tosdr.org/points/12230',
          imgUrl: "This service holds onto content that you've deleted.png",
        },
      ],
      c: [
        {
          title: 'Guardan tus datos por tiempo indefinido.',
          description:
            'El servicio puede guardar información sobre ti de manera indefinida, como tu dirección en Internet y detalles de tu actividad.',
          source: 'https://edit.tosdr.org/points/12220',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Pueden usar tu contenido sin permiso.',
          description:
            'El servicio puede usar tu contenido sin tu aprobación ni compensación, pero no reclama la propiedad sobre él.',
          source: 'https://edit.tosdr.org/points/1035',
          imgUrl: 'keepData.png',
        },
        {
          title: 'La app pide permisos demás.',
          description:
            'Solicita permisos que no son necesarios, lo que puede afectar tu privacidad al acceder a información sensible de tu dispositivo, como tu ubicación o contactos.',
          source: 'https://edit.tosdr.org/points/12221',
          imgUrl: 'plus.png',
        },
      ],
      a: [
        {
          title: 'Pueden usar tus sugerencias sin pagarte.',
          description:
            'El servicio puede usar tus ideas o comentarios sin compensarte ni pedirte permiso, pero no reclama la propiedad sobre ellos.',
          source: 'https://edit.tosdr.org/points/12227',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Puedes pedir acceso a tus datos.',
          description:
            'Tienes el derecho de ver, corregir o eliminar tus datos personales guardados por el servicio, especialmente en servicios que cumplen con el GDPR.',
          source: 'https://edit.tosdr.org/points/12187',
          imgUrl: 'shareDataGreen.png',
        },
        {
          title: 'Sigues siendo dueño de tu contenido.',
          description:
            'Este servicio no reclama la propiedad sobre lo que creas, y no necesitas renunciar a tus derechos al publicar tu contenido.',
          source: 'https://edit.tosdr.org/points/27164',
          imgUrl: 'property.png',
        },
      ],
    },
    advices: [
      {
        title: 'Ajuste de publicaciones compartidas',
        description:
          'Configura tu perfil como privado en la sección de ajustes de privacidad. Así, solo las personas que apruebes podrán ver tus publicaciones, historias y videos.',
      },
      {
        title: 'Desactiva la ubicación',
        description: 'Desactiva la ubicación en tus fotos y videos para evitar revelar tu ubicación.',
      },
      {
        title: 'Habilita la autenticación en dos pasos',
        description:
          'Habilita la autenticación en dos pasos en la configuración de seguridad para que se requiera un código adicional al iniciar sesión.',
      },
    ],
  },
  {
    name: 'linkedin',
    imgUrl: 'linkedin.png',
    label: 'Linkedin',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Almacenan tus datos sin que los hayas dado',
          description:
            'Algunos servicios guardan tus datos incluso si no los proporcionaste directamente, como números de tus contactos si das acceso a tu agenda.',
          source: 'https://edit.tosdr.org/points/20633',
          imgUrl: 'They store data on you even if you did not interact with the service.png',
        },
        {
          title: 'Tu identidad aparece en anuncios',
          description:
            'Los anuncios pueden mostrar información sobre ti y tu estilo de vida a otros usuarios sin que lo sepas.',
          source: 'https://edit.tosdr.org/points/20617',
          imgUrl: 'Your identity is used in ads that are shown to other users.png',
        },
        {
          title: 'Pueden leer tus mensajes privados',
          description:
            'El servicio puede acceder a tus mensajes privados, que pueden incluir datos sensibles o personales.',
          source: 'https://edit.tosdr.org/points/20638',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Pueden eliminar contenido sin aviso',
          description: 'El servicio puede borrar tu contenido sin darte una razón o avisarte con antelación.',
          source: 'https://edit.tosdr.org/points/20613',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
      ],
      c: [
        {
          title: 'La app pide permisos demás',
          description:
            'Puede pedir más permisos de los necesarios, como acceso a tu ubicación, contactos y más, lo que puede afectar tu privacidad.',
          source: 'https://edit.tosdr.org/points/20631',
          imgUrl: 'plus.png',
        },
        {
          title: 'Recopilan muchos de tus datos',
          description:
            'El servicio recoge datos como tu nombre, dirección, contactos y hasta tus hábitos, para crear un perfil sobre ti.',
          source: 'https://edit.tosdr.org/points/20643',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Comparte tus datos con terceros',
          description: 'Tus datos pueden ser compartidos con empresas externas, como para publicidad dirigida.',
          source: 'https://edit.tosdr.org/points/20642',
          imgUrl: 'shareData.png',
        }
      ],
      a: [
        {
          title: 'Tú eres dueño de tu contenido',
          description:
            'No necesitas renunciar a tus derechos sobre el contenido que subes. El servicio no reclama propiedad sobre él.',
          source: 'https://edit.tosdr.org/points/20614',
          imgUrl: 'property.png',
        },
        {
          title: 'Puedes gestionar tus datos personales',
          description: 'Tienes el derecho de pedir que eliminen tu contenido en cualquier momento.',
          source: 'https://edit.tosdr.org/points/5888',
          imgUrl: 'trashGreen.png',
        },
      ],
    },
  },
  {
    name: 'pinterest',
    imgUrl: 'pinterest.png',
    label: 'Pinterest',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Almacenan tus datos sin que los hayas dado',
          description:
            'Algunos servicios guardan tus datos sin que los hayas proporcionado, como números de teléfono de tus contactos si das acceso a tu agenda.',
          source: 'https://edit.tosdr.org/points/12956',
          imgUrl: 'They store data on you even if you did not interact with the service.png',
        },
        {
          title: 'Pueden leer tus mensajes privados',
          description: 'El servicio puede acceder a tus mensajes privados, incluyendo datos personales o sensibles.',
          source: 'https://edit.tosdr.org/points/12990',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Pueden eliminar contenido sin razón ni aviso',
          description: 'El servicio puede borrar tu contenido sin explicarte por qué o avisarte con tiempo.',
          source: 'https://edit.tosdr.org/points/12961',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
        {
          title: 'Mantienen contenido que eliminaste',
          description:
            'Aunque elimines contenido, puede quedar guardado en los servidores del servicio, por lo que no se borra por completo.',
          source: 'https://edit.tosdr.org/points/12962',
          imgUrl: "This service holds onto content that you've deleted.png",
        },
      ],
      c: [
        {
          title: 'La app pide permisos demás',
          description:
            'Requiere muchos permisos, como acceso a tu ubicación, contactos y más, lo que podría afectar tu privacidad.',
          source: 'https://edit.tosdr.org/points/12986',
          imgUrl: 'plus.png',
        },
        {
          title: 'Pueden eliminar o suspender tu cuenta sin previo aviso',
          description:
            'Tu cuenta puede ser eliminada o suspendida en cualquier momento sin explicación ni advertencia.',
          source: 'https://edit.tosdr.org/points/12966',
        },
        {
          title: 'Te rastrean en otros sitios web',
          description:
            'El servicio puede usar tecnologías para seguirte mientras navegas por otros sitios web fuera del suyo.',
          source: 'https://edit.tosdr.org/points/13012',
          imgUrl: 'cookies.png',
        },
      ],
      a: [
        {
          title: 'Sigues siendo dueño de tu contenido',
          description:
            'Este servicio no reclama propiedad sobre el contenido que subes y tú mantienes tus derechos sobre él.',
          source: 'https://edit.tosdr.org/points/8087',
          imgUrl: 'property.png',
        },
        {
          title: 'Te informan sobre la recopilación de tus datos',
          description: 'El servicio explica cómo y cuándo recopilan tus datos personales.',
          source: 'https://edit.tosdr.org/points/12982',
          imgUrl: 'property.png',
        },
        {
          title: 'Respetan la opción de No Rastrear (DNT)',
          description: 'Si activas la opción de No Rastrear en tu navegador, el servicio dejará de rastrearte.',
          source: 'https://edit.tosdr.org/points/13013',
          imgUrl: 'greenTracking.png',
        },
      ],
    },
  },
  {
    name: 'disney+',
    imgUrl: 'disney+.png',
    label: 'Disney+',
    riskLevel: 'e',
    termsConditionsRisks: {
      e: [
        {
          title: 'Almacenan tus datos sin que los hayas dado',
          description:
            'Algunos servicios guardan tus datos aunque no los hayas proporcionado, como números de teléfono de tus contactos si das acceso a tu agenda.',
          source: 'https://edit.tosdr.org/points/18003',
          imgUrl: 'They store data on you even if you did not interact with the service.png',
        },
        {
          title: 'Pueden leer tus mensajes privados',
          description:
            'El servicio puede acceder y leer tus mensajes privados, que pueden incluir información personal o sensible.',
          source: 'https://edit.tosdr.org/points/17997',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Te rastrean aunque optes por no ser rastreado',
          description:
            'El servicio sigue rastreando tu actividad para fines no esenciales, como publicidad, incluso si rechazas el rastreo.',
          source: 'https://edit.tosdr.org/points/18015',
          imgUrl: 'This service still tracks you even if you opted out from tracking.png',
        },
      ],
      c: [
        {
          title: 'Recopilan y comparten tu ubicación',
          description:
            'Recopila tu ubicación y la comparte con terceros, aunque no sea necesaria para el funcionamiento del servicio.',
          source: 'https://edit.tosdr.org/points/17999',
          imgUrl: 'ubicacion.png',
        },
        {
          title: 'Usan herramientas de otras empresas para publicidad',
          description: 'Usa herramientas de otras empresas para mostrarte anuncios personalizados.',
          source: 'https://edit.tosdr.org/points/18018',
          imgUrl: 'ads.png',
        },
        {
          title: 'Recopilan muchos tipos de datos personales',
          description: 'Recoge información personal como tu nombre, dirección, contactos, y más.',
          source: 'https://edit.tosdr.org/points/17996',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Mantienen datos personales por razones legales o comerciales',
          description:
            'Aunque elimines tus datos, pueden mantenerlos por razones legales o para fines comerciales, como detectar fraudes.',
          source: 'https://edit.tosdr.org/points/18012',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Comparten tus datos',
          description: 'El servicio puede compartir tus datos con empresas no esenciales, como anunciantes.',
          source: 'https://edit.tosdr.org/points/18006',
          imgUrl: 'shareDataYellow.png',
        },
        {
          title: 'Pueden eliminar o suspender tu cuenta sin aviso',
          description:
            'Tu cuenta puede ser eliminada o suspendida en cualquier momento, sin previo aviso ni explicación.',
          source: 'https://edit.tosdr.org/points/17992',
          imgUrl: 'trashYellow.png',
        },
        {
          title: 'Te siguen en redes sociales',
          description:
            'El servicio utiliza tecnologías para seguir tu actividad en redes sociales, como cuando interactúas con el contenido o haces clic en enlaces relacionados con el servicio.',
          source: 'https://edit.tosdr.org/points/18022',
          imgUrl: 'webTracking.png',
        },
        {
          title: 'Recopilan información a través de terceros',
          description: 'El servicio puede recopilar datos sobre ti desde otras fuentes, ya sean identificables o no.',
          source: 'https://edit.tosdr.org/points/17998',
          imgUrl: 'shareDataYellow.png',
        },
        {
          title: 'Te rastrean con tecnologías de seguimiento',
          description: 'Usan tecnologías de seguimiento para rastrear tu comportamiento en línea.',
          source: 'https://edit.tosdr.org/points/18000',
          imgUrl: 'cookies.png',
        },
        {
          title: 'Pueden vender tus datos',
          description:
            'Si el servicio es vendido o adquirido, tus datos personales podrían ser vendidos o transferidos.',
          source: 'https://edit.tosdr.org/points/18007',
          imgUrl: 'moneyYellow.png',
        },
        {
          title: 'Usan tus datos para publicidad',
          description:
            'Tus datos son vendidos o compartidos con empresas de publicidad para mostrarte anuncios específicos.',
          source: 'https://edit.tosdr.org/points/18005',
          imgUrl: 'ads.png',
        }
      ],
      a: [
        {
          title: 'Puedes gestionar tus datos personales',
          description:
            'Puedes pedir acceso a tus datos personales, corregir cualquier error y eliminar tus datos permanentemente.',
          source: 'https://edit.tosdr.org/points/18009',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Te informan sobre la recopilación de tus datos',
          description: 'El servicio explica cómo y cuándo recopilan tus datos personales.',
          source: 'https://edit.tosdr.org/points/18002',
          imgUrl: 'knowledge.png',
        },
        {
          title: 'Revisan su política de privacidad regularmente',
          description: 'El servicio actualiza su política de privacidad y te notifica cuando lo hace.',
          source: 'https://edit.tosdr.org/points/18014',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Te explican cómo usan tus datos personales',
          description: 'El servicio te informa sobre el uso que le dan a tus datos y cómo los comparten.',
          source: 'https://edit.tosdr.org/points/18024',
          imgUrl: 'knowledge.png',
        },
        {
          title: 'Tienen un mecanismo para quejas sobre datos personales',
          description: 'El servicio tiene un sistema para que puedas presentar quejas sobre el manejo de tus datos.',
          source: 'https://edit.tosdr.org/points/18025',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Te explican qué datos recopilan sobre ti',
          description:
            'La política de privacidad describe los datos que el servicio recopila, como tu nombre o dirección.',
          source: 'https://edit.tosdr.org/points/18023',
          imgUrl: 'knowledge.png',
        },
        {
          title: 'Puedes rechazar la publicidad dirigida',
          description: 'El servicio usa tus datos para publicidad dirigida, pero puedes optar por no participar.',
          source: 'https://edit.tosdr.org/points/18011',
          imgUrl: 'adsGreen.png',
        },
      ],
    },
  },
  {
    name: 'reddit',
    imgUrl: 'reddit.png',
    label: 'Reddit',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Pueden leer tus mensajes privados',
          description:
            'El servicio puede acceder, revisar o leer tus mensajes privados, que pueden contener datos personales o sensibles.',
          source: 'https://edit.tosdr.org/points/13308',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Pueden eliminar contenido sin aviso y sin motivo',
          description:
            'El servicio puede eliminar contenido sin explicación o previo aviso, como lo indican sus términos.',
          source: 'https://edit.tosdr.org/points/8179',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
        {
          title: 'Renuncias a tus derechos morales sobre tu contenido',
          description:
            'Renuncias a ciertos derechos morales sobre tus creaciones, como el derecho a la integridad de la obra o a que sea atribuida correctamente.',
          source: 'https://edit.tosdr.org/points/9849',
          imgUrl: 'You waive your moral rights.png',
        },
      ],
      c: [
        {
          title: 'Comparten tus datos',
          description:
            'Tus datos pueden ser compartidos con empresas o socios comerciales que no son esenciales para el funcionamiento del servicio, como anunciantes.',
          source: 'https://edit.tosdr.org/points/13326',
          imgUrl: 'shareDataYellow.png',
        },
        {
          title: 'Usan herramientas para recoger estadísticas',
          description:
            'El servicio utiliza herramientas como Google Analytics para obtener información sobre cómo los usuarios usan el servicio, como las páginas que visitan o el tiempo que pasan en ellas.',
          source: 'https://edit.tosdr.org/points/18017',
          imgUrl: 'cookies.png',
        },
        {
          title: 'Pueden retener tus datos por razones comerciales o legales',
          description:
            'Incluso después de que se eliminen tus datos, el servicio puede seguir guardándolos por razones legales o comerciales, como prevención de fraudes.',
          source: 'https://edit.tosdr.org/points/13330',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Te rastrean en otros sitios web',
          description:
            'Puede usar tecnologías de rastreo en otros sitios web para seguir tu actividad en línea fuera de su plataforma.',
          source: 'https://edit.tosdr.org/points/13319',
          imgUrl: 'cookies.png',
        },
      ],
      a: [
        {
          title: 'Te informarán sobre consultas gubernamentales que involucren tus datos',
          description: 'Hará esfuerzos razonables para informarte si el gobierno solicita tus datos personales.',
          source: 'https://edit.tosdr.org/points/5613',
          imgUrl: 'knowledge.png',
        },
        {
          title: 'Mantienes la propiedad de tu contenido',
          description:
            'No necesitas renunciar a tus derechos sobre el contenido que publiques, y el servicio no reclama propiedad sobre él.',
          source: 'https://edit.tosdr.org/points/8175',
          imgUrl: 'property.png',
        },
      ],
    },
  },
  {
    name: 'discord',
    imgUrl: 'discord.png',
    label: 'Discord',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Pueden leer tus mensajes privados',
          description:
            'El servicio puede acceder y leer tus mensajes privados, los cuales pueden contener información personal.',
          source: 'https://edit.tosdr.org/points/9070',
          imgUrl: 'Private messages can be read.png',
        },
        {
          title: 'Pueden borrar contenido sin aviso',
          description: 'El servicio puede eliminar tu contenido sin dar razones ni avisarte.',
          source: 'https://edit.tosdr.org/points/11419',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
      ],
      c: [
        {
          title: 'Pueden bloquear o censurar tu contenido',
          description: 'El servicio puede rechazar o eliminar cualquier contenido de usuarios sin explicar por qué.',
          source: 'https://edit.tosdr.org/points/10882',
          imgUrl: 'censoring.png',
        },
        {
          title: 'Tu cuenta puede ser eliminada sin aviso',
          description:
            'El servicio puede suspender o eliminar tu cuenta en cualquier momento, sin previo aviso ni razón.',
          source: 'https://edit.tosdr.org/points/35062',
          imgUrl: 'trashYellow.png',
        },
        {
          title: 'Recopilan tus datos a través de otros',
          description: 'El servicio puede obtener información sobre ti de otras fuentes fuera de su plataforma.',
          source: 'https://edit.tosdr.org/points/35076',
          imgUrl: 'webTracking.png',
        },
        {
          title: 'Recopilan más datos a través de promociones',
          description: 'Pueden obtener más información sobre ti mediante concursos, encuestas o sorteos.',
          source: 'https://edit.tosdr.org/points/35075',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Tus datos pueden ser vendidos en transacciones',
          description:
            'Si el servicio cambia de dueño o se vende, tus datos personales podrían ser transferidos a otras empresas.',
          source: 'https://edit.tosdr.org/points/6121',
          imgUrl: 'moneyYellow.png',
        },
        {
          title: 'Te siguen en línea',
          description: 'El servicio puede seguir tus actividades en Internet, incluso cuando visitas otros sitios web.',
          source: 'https://edit.tosdr.org/points/6115',
          imgUrl: 'webTracking.png',
        },
        {
          title: 'Obligación de arbitraje en disputas',
          description:
            'Si tienes un problema con el servicio, te obligan a resolverlo fuera de los tribunales, mediante un árbitro.',
          source: 'https://edit.tosdr.org/points/11441',
          imgUrl: 'lawyerBriefcase.png',
        },
      ],
      a: [
        {
          title: 'Tus datos solo se comparten con tu permiso',
          description: 'El servicio no compartirá tus datos con otras empresas sin tu consentimiento.',
          source: 'https://edit.tosdr.org/points/11459',
          imgUrl: 'shareDataGreen.png',
        },
        {
          title: 'Puedes gestionar tus datos personales',
          description:
            'Puedes eliminar tu contenido en cualquier momento y el servicio lo hará dentro de un plazo razonable.',
          source: 'https://edit.tosdr.org/points/35058',
          imgUrl: 'trashGreen.png',
        },
      ],
    },
  },
  {
    name: 'spotify',
    imgUrl: 'spotify.png',
    label: 'Spotify',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Pueden borrar contenido sin aviso',
          description: 'El servicio puede eliminar contenido sin dar razones ni avisar al usuario.',
          source: 'https://edit.tosdr.org/points/12733',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
        {
          title: 'Renuncias a derechos sobre tu obra',
          description:
            'Al aceptar estos términos, renuncias a derechos sobre tu obra, como la autoría o protección contra cambios.',
          source: 'https://edit.tosdr.org/points/12744',
          imgUrl: 'You waive your moral rights.png',
        },
      ],
      c: [
        {
          title: 'Tus datos pueden ser guardados por ley o negocios',
          description:
            'Aunque pidas borrar tus datos, el servicio puede conservarlos por razones legales o comerciales, como detectar fraudes.',
          source: 'https://edit.tosdr.org/points/13222',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Tu cuenta puede ser eliminada sin aviso',
          description:
            'El servicio puede eliminar o suspender tu cuenta en cualquier momento, sin previo aviso ni explicación.',
          source: 'https://edit.tosdr.org/points/21520',
          imgUrl: 'trashYellow.png',
        }
      ],
      a: [
        {
          title: 'Puedes gestionar tus datos personales',
          description:
            'Tienes derecho a acceder, corregir o eliminar tus datos personales si el servicio cumple con regulaciones como el GDPR.',
          source: 'https://edit.tosdr.org/points/12770',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'El servicio puede usar tus sugerencias sin compensación',
          description: 'Si envías sugerencias o ideas, el servicio puede usarlas sin pagarte ni pedirte permiso.',
          source: 'https://edit.tosdr.org/points/12737',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Mantienes los derechos sobre tu contenido',
          description:
            'El servicio no toma propiedad de tu contenido y no necesitas renunciar a derechos sobre él al publicarlo.',
          source: 'https://edit.tosdr.org/points/27163',
          imgUrl: 'property.png',
        },
      ],
    },
  },
  {
    name: 'youtube',
    imgUrl: 'youtube.png',
    label: 'Youtube',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Pueden borrar contenido sin aviso',
          description: 'El servicio puede eliminar contenido sin dar explicaciones ni avisar al usuario.',
          source: 'https://edit.tosdr.org/points/12733',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
        {
          title: 'Renuncias a derechos sobre tu obra',
          description:
            'Al aceptar estos términos, renuncias a ciertos derechos sobre tu obra, como la atribución y protección contra cambios.',
          source: 'https://edit.tosdr.org/points/12744',
          imgUrl: 'You waive your moral rights.png',
        },
      ],
      c: [
        {
          title: 'Tus datos pueden ser guardados por ley o negocios',
          description:
            'El servicio puede conservar tus datos por razones comerciales o legales, incluso si los pides eliminar.',
          source: 'https://edit.tosdr.org/points/13222',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Tu cuenta puede ser eliminada sin aviso',
          description: 'El servicio puede suspender o eliminar tu cuenta sin previo aviso ni razón.',
          source: 'https://edit.tosdr.org/points/21520',
          imgUrl: 'trashYellow.png',
        }
      ],
      a: [
        {
          title: 'Puedes gestionar tus datos personales',
          description:
            'Tienes derecho a acceder, corregir o eliminar tus datos personales, si el servicio cumple con regulaciones como el GDPR.',
          source: 'https://edit.tosdr.org/points/12770',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'El servicio puede usar tus sugerencias sin compensación',
          description: 'Si envías ideas o sugerencias, el servicio puede usarlas sin pagarte ni pedirte permiso.',
          source: 'https://edit.tosdr.org/points/12737',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Mantienes los derechos sobre tu contenido',
          description:
            'El servicio no toma propiedad de lo que publicas y no necesitas renunciar a derechos sobre tu contenido.',
          source: 'https://edit.tosdr.org/points/27163',
          imgUrl: 'property.png',
        },
      ],
    },
  },
  {
    name: 'microsoft services',
    imgUrl: 'microsoftservices.png',
    label: 'Microsoft Services',
    riskLevel: 'e', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Pueden borrar contenido sin aviso',
          description: 'El servicio puede eliminar contenido sin explicaciones ni avisos.',
          source: 'https://edit.tosdr.org/points/12733',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
        {
          title: 'Renuncias a derechos sobre tu obra',
          description:
            'Al aceptar estos términos, renuncias a algunos derechos sobre tu obra, como la autoría o la protección contra cambios.',
          source: 'https://edit.tosdr.org/points/12744',
          imgUrl: 'You waive your moral rights.png',
        },
      ],
      c: [
        {
          title: 'Tus datos pueden ser guardados por ley o negocios',
          description:
            'El servicio puede conservar tus datos por razones legales o comerciales, aunque los pidas eliminar.',
          source: 'https://edit.tosdr.org/points/13222',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Tu cuenta puede ser eliminada sin aviso',
          description: 'El servicio puede suspender o eliminar tu cuenta sin previo aviso ni razón.',
          source: 'https://edit.tosdr.org/points/21520',
          imgUrl: 'trashYellow.png',
        }
      ],
      a: [
        {
          title: 'Puedes gestionar tus datos personales',
          description:
            'Tienes derecho a acceder, corregir o eliminar tus datos personales, si el servicio cumple con regulaciones como el GDPR.',
          source: 'https://edit.tosdr.org/points/12770',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'El servicio puede usar tus sugerencias sin compensación',
          description: 'Si envías ideas o sugerencias, el servicio puede usarlas sin pagarte ni pedirte permiso.',
          source: 'https://edit.tosdr.org/points/12737',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Mantienes los derechos sobre tu contenido',
          description:
            'El servicio no toma propiedad de lo que publicas y no necesitas renunciar a derechos sobre tu contenido.',
          source: 'https://edit.tosdr.org/points/27163',
          imgUrl: 'property.png',
        },
      ],
    },
  },
  {
    name: 'apple services',
    imgUrl: 'appleservices.png',
    label: 'Apple Services',
    riskLevel: 'd', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Pueden editar tu contenido por cualquier motivo',
          description:
            'El servicio puede editar cualquier contenido que publiques por razones que elijan, sin necesidad de explicarte por qué.',
          source: 'https://edit.tosdr.org/points/20942',
          imgUrl: 'Content you post may be edited by the service for any reason.png',
        },
        {
          title: 'Pueden borrar contenido sin previo aviso',
          description: 'El servicio puede eliminar tu contenido sin aviso ni explicación, según lo decidan.',
          source: 'https://edit.tosdr.org/points/11301',
          imgUrl: 'Specific content can be deleted without reason and may be removed without prior notice.png',
        },
      ],
      c: [
        {
          title: 'Pueden recopilar y compartir tu ubicación',
          description:
            'El servicio puede recopilar tu ubicación y compartirla con otros, aunque no lo necesiten para ofrecer sus servicios.',
          source: 'https://edit.tosdr.org/points/20938',
          imgUrl: 'ubicacion.png',
        },
        {
          title: 'Pueden cambiar los términos sin avisar',
          description:
            'El servicio puede actualizar sus condiciones en cualquier momento, sin notificarte antes ni después del cambio.',
          source: 'https://edit.tosdr.org/points/1494',
          imgUrl: 'thumbsDown.png',
        },
        {
          title: 'Recopilan muchos tipos de datos personales',
          description:
            'El servicio recopila diversos datos personales, como tu nombre, dirección, información del dispositivo, entre otros.',
          source: 'https://edit.tosdr.org/points/19963',
          imgUrl: 'keepData.png',
        },
      ],
      a: [
        {
          title: 'El servicio elimina datos cuando ya no son necesarios',
          description:
            'El servicio eliminará tus datos cuando ya no los necesiten, dependiendo del tipo de información recopilada.',
          source: 'https://edit.tosdr.org/points/5545',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Puedes gestionar tus datos personales',
          description:
            'Puedes acceder, corregir o eliminar tus datos personales, especialmente si el servicio cumple con regulaciones de privacidad como el GDPR.',
          source: 'https://edit.tosdr.org/points/5544',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Las leyes que protegen tu privacidad son fuertes',
          description:
            'Las condiciones están reguladas por leyes de privacidad de países que protegen bien tus datos personales.',
          source: 'https://edit.tosdr.org/points/20939',
          imgUrl: 'thumbsUp.png',
        },
      ],
    },
  },
  {
    name: 'steam',
    imgUrl: 'steam.png',
    label: 'Steam',
    riskLevel: 'd', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Pueden leer tus mensajes privados',
          description:
            'El servicio puede acceder y leer todos tus mensajes privados, que pueden contener información personal o sensible.',
          source: 'https://edit.tosdr.org/points/10606',
          imgUrl: 'Private messages can be read.png',
        },
      ],
      c: [
        {
          title: 'Pueden recopilar y compartir tu ubicación',
          description:
            'El servicio puede recoger tu ubicación y compartirla con terceros para otros fines que no están directamente relacionados con el servicio.',
          source: 'https://edit.tosdr.org/points/11342',
          imgUrl: 'ubicacion.png',
        },
        {
          title: 'Pueden mantener tus datos por razones legales o comerciales',
          description:
            'Aunque pidas que se eliminen, tus datos pueden seguir siendo guardados por razones legales (como impuestos) o comerciales (como la prevención de fraudes).',
          source: 'https://edit.tosdr.org/points/13992',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Obligación de arbitraje en disputas',
          description:
            'En caso de un conflicto, el servicio obliga a los usuarios a usar un árbitro y renunciar a su derecho a un juicio por jurado.',
          source: 'https://edit.tosdr.org/points/13359',
          imgUrl: 'lawyerBriefcase.png',
        }
      ],
      a: [
        {
          title: 'Puedes gestionar tus datos personales',
          description:
            'Tienes el derecho de acceder, corregir o eliminar tus datos personales, si el servicio cumple con regulaciones de privacidad como el GDPR.',
          source: 'https://edit.tosdr.org/points/13994',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Tu cuenta puede ser suspendida por incumplir los términos repetidamente',
          description:
            'Si violas los términos del servicio varias veces, tu cuenta puede ser suspendida. No se suspenderá por una sola infracción.',
          source: 'https://edit.tosdr.org/points/13355',
          imgUrl: 'thumbsUp.png',
        },
      ],
    },
  },
  {
    name: 'whatsapp',
    imgUrl: 'whatsapp.png',
    label: 'Whatsapp',
    riskLevel: 'd', // or b, c, d, e
    termsConditionsRisks: {
      c: [
        {
          title: 'Tus datos pueden ser compartidos con otras empresas',
          description:
            'El servicio puede compartir tus datos con otras empresas, como socios comerciales, aunque no sea necesario para el funcionamiento del servicio, por ejemplo, para mostrar anuncios.',
          source: 'https://edit.tosdr.org/points/21741',
          imgUrl: 'shareDataYellow.png',
        },
        {
          title: 'Recopilan varios tipos de datos personales',
          description:
            'El servicio recoge diferentes tipos de datos personales, como tu nombre, dirección, datos de contacto y más.',
          source: 'https://edit.tosdr.org/points/21744',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Pueden suspender o eliminar tu cuenta sin aviso',
          description:
            'El servicio puede suspender o eliminar tu cuenta en cualquier momento, sin explicaciones ni advertencias.',
          source: 'https://edit.tosdr.org/points/14582',
          imgUrl: 'trashYellow.png',
        },
        {
          title: 'Tus datos pueden ser usados para publicidad',
          description: 'El servicio puede usar tus datos para enviarte ofertas personalizadas o mostrarte anuncios.',
          source: 'https://edit.tosdr.org/points/13032',
          imgUrl: 'ads.png',
        },
        {
          title: 'Te rastrean usando herramientas de seguimiento',
          description:
            'El servicio puede usar herramientas para seguir tu comportamiento en línea, como pequeñas partes de información que se guardan en tu dispositivo.',
          source: 'https://edit.tosdr.org/points/13027',
          imgUrl: 'cookies.png',
        },
        {
          title: 'Tus datos pueden ser vendidos o transferidos',
          description:
            'Si el servicio es comprado o cambia de dueño, tus datos pueden ser vendidos o transferidos a otras empresas.',
          source: 'https://edit.tosdr.org/points/13034',
          imgUrl: 'moneyYellow.png',
        },
        {
          title: 'Tus datos se usan para muchos fines',
          description:
            'El servicio usa tus datos no solo para ofrecerte su servicio, sino también para publicidad, análisis y otros propósitos.',
          source: 'https://edit.tosdr.org/points/14585',
          imgUrl: 'thumbsDown.png',
        },
      ],
      a: [
        {
          title: 'Sigues siendo dueño de tu contenido',
          description:
            'El servicio no reclama la propiedad de lo que creas. Tú sigues siendo el dueño de tu contenido y no necesitas renunciar a ningún derecho sobre él.',
          source: 'https://edit.tosdr.org/points/13039',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Tu contenido está protegido',
          description:
            'El contenido que creas está protegido de manera que solo tú puedes acceder a él, evitando que otras personas o el servicio puedan verlo sin tu permiso.',
          source: 'https://edit.tosdr.org/points/11582',
          imgUrl: 'thumbsUp.png',
        },
      ],
    },
  },
  {
    name: 'mercado libre',
    imgUrl: 'meli.png',
    label: 'Mercado Libre',
    riskLevel: 'c', // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: 'Guardan tus datos sin que los ingreses',
          description:
            'Algunos servicios pueden almacenar tus datos sin que tú los introduzcas directamente, como por ejemplo, los contactos de tu teléfono.',
          source: 'https://edit.tosdr.org/points/31562',
          imgUrl: 'They store data on you even if you did not interact with the service.png',
        },
      ],
      c: [
        {
          title: 'Comparten tus datos',
          description:
            'El servicio puede compartir tus datos con otras empresas, como socios comerciales o para fines publicitarios.',
          source: 'https://edit.tosdr.org/points/31552',
          imgUrl: 'shareDataYellow.png',
        },
        {
          title: 'Pueden dar tus datos a autoridades sin avisar',
          description: 'El gobierno puede solicitar tus datos sin que el servicio te notifique previamente.',
          source: 'https://edit.tosdr.org/points/31554',
          imgUrl: 'keepData.png',
        },
        {
          title: 'Hay muchos terceros involucrados en su operación',
          description: 'Existen varias empresas externas que ayudan al funcionamiento del servicio.',
          source: 'https://edit.tosdr.org/points/31549',
          imgUrl: 'thumbsDown.png',
        },
        {
          title: 'Reciben tu ubicación precisa por GPS',
          description: 'El servicio puede obtener tu ubicación exacta mediante el GPS de tu dispositivo.',
          source: 'https://edit.tosdr.org/points/31544',
          imgUrl: 'ubicacion.png',
        },
        {
          title: 'Tus datos se usan para publicidad dirigida',
          description:
            'El servicio comparte tu información con empresas publicitarias para mostrarte anuncios específicos.',
          source: 'https://edit.tosdr.org/points/31553',
          imgUrl: 'ads.png',
        },
        {
          title: 'Tus datos se usan para muchos fines',
          description: 'Tus datos pueden ser utilizados para diferentes propósitos, como marketing o análisis.',
          source: 'https://edit.tosdr.org/points/31547',
          imgUrl: 'thumbsDown.png',
        },
        {
          title: 'Usan tus datos para publicidad',
          description: 'Tus datos se recopilan para crear un perfil publicitario y mostrarte anuncios.',
          source: 'https://edit.tosdr.org/cases/216',
          imgUrl: 'ads.png',
        },
      ],
      a: [
        {
          title: 'Puedes acceder, corregir o eliminar tus datos',
          description: 'Tienes derecho a ver, corregir o eliminar los datos que el servicio tiene sobre ti.',
          source: 'https://edit.tosdr.org/points/31558',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Eliminan tus datos cuando ya no se necesitan',
          description: 'El servicio eliminará tus datos una vez que ya no sean necesarios para su funcionamiento.',
          source: 'https://edit.tosdr.org/points/31557',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Te informan sobre el uso de tus datos',
          description: 'El servicio te explica en su Política de Privacidad cómo usan y comparten tus datos.',
          source: 'https://edit.tosdr.org/points/31560',
          imgUrl: 'knowledge.png',
        },
        {
          title: 'Te dicen qué datos recopilan',
          description: 'El servicio te informa qué tipo de datos recopila sobre ti en su Política de Privacidad.',
          source: 'https://edit.tosdr.org/points/31561',
          imgUrl: 'knowledge.png',
        },
        {
          title: 'Tus datos no se venden',
          description: 'El servicio asegura que no venderá tus datos personales a otras empresas.',
          source: 'https://edit.tosdr.org/points/31548',
          imgUrl: 'moneyGreen.png',
        },
        {
          title: 'Te avisarán antes de cambiar los términos',
          description:
            'El servicio te notificará al menos una semana antes de realizar cambios en los términos del servicio.',
          source: 'https://edit.tosdr.org/points/31540',
          imgUrl: 'thumbsUp.png',
        },
      ],
    },
  },
  {
    name: 'telegram',
    imgUrl: 'telegram.png',
    label: 'Telegram',
    riskLevel: 'b', // or b, c, d, e
    termsConditionsRisks: {
      c: [
        {
          title: 'Pueden cambiar las normas sin avisar',
          description:
            'El servicio puede modificar sus normas en cualquier momento, incluso de manera que afecte tus derechos, sin avisar antes o después de hacer los cambios.',
          source: 'https://edit.tosdr.org/points/8167',
          imgUrl: 'thumbsDown.png',
        },
      ],
      a: [
        {
          title: 'Eliminan información después de un tiempo',
          description:
            'El servicio elimina la información que guarda sobre tu actividad, como tu dirección de internet y detalles del dispositivo, para no seguirte durante mucho tiempo.',
          source: 'https://edit.tosdr.org/points/8854',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Eliminan tus datos cuando ya no los necesitan',
          description:
            'El servicio borra tus datos personales cuando ya no los necesita. El tiempo que los guarda depende de qué tipo de datos sean y por qué los guardan.',
          source: 'https://edit.tosdr.org/points/17476',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Te avisan si el gobierno pide tus datos',
          description:
            'Si el gobierno solicita tus datos, el servicio intentará avisarte, por ejemplo, con una notificación oficial.',
          source: 'https://edit.tosdr.org/points/17478',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Puedes borrar tu contenido',
          description:
            'Puedes pedir que eliminen el contenido que subes en cualquier momento, y lo harán dentro de un plazo razonable.',
          source: 'https://edit.tosdr.org/points/17480',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Tu contenido está protegido',
          description:
            'Todo lo que creas está protegido de tal forma que nadie, ni el servicio, puede acceder a él sin tu permiso.',
          source: 'https://edit.tosdr.org/points/17472',
          imgUrl: 'thumbsUp.png',
        },
        {
          title: 'Puedes corregir o borrar tus datos',
          description:
            'Tienes derecho a acceder, corregir o eliminar tus datos personales, siempre que el servicio cumpla con las leyes de protección de datos.',
          source: 'https://edit.tosdr.org/points/11971',
          imgUrl: 'trashGreen.png',
        },
        {
          title: 'Puedes pedir una copia de tus datos',
          description:
            'Puedes solicitar una copia de la información que el servicio tiene sobre ti, para saber qué datos personales están guardados.',
          source: 'https://edit.tosdr.org/points/8168',
          imgUrl: 'shareDataGreen.png',
        },
        {
          title: 'Te explican qué datos recopilan',
          description: 'La Política de Privacidad te explica qué datos personales recopila el servicio.',
          source: 'https://edit.tosdr.org/points/14681',
          imgUrl: 'knowledge.png',
        },
        {
          title: 'Te explican cómo usan tus datos',
          description:
            'La Política de Privacidad también te informa sobre cómo se utilizan, procesan y comparten tus datos personales.',
          source: 'https://edit.tosdr.org/points/17470',
          imgUrl: 'knowledge.png',
        },
      ],
    },
  },
];
