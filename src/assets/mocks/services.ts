import type { Service } from '@/typings/mocks/services';

export const servicesMock: Service[] = [
  {
    imgUrl: 'instagram.png',
    label: 'Instagram',
    name: 'instagram',
    riskLevel: 'e',
    termsConditionsRisks: {
      e: [
        {
          title: 'They store data on you even if you did not interact with the service',
          description:
            'These partners provide information about your activities off Facebook—including information about your device, websites you visit, purchases you make, the ads you see, and how you use their services—whether or not you have a Facebook account or are logged into Facebook. For example, a game developer could use our API to tell us what games you play, or a business could tell us about a purchase you made in its store.',
          source: 'wip',
        },
        {
          title: 'Your identity is used in ads that are shown to other users',
          description: '',
          source: 'wip',
        },
      ],
      c: [
        {
          description: '',
          title: 'This service keeps user logs for an undefined period of time',
          source: 'wip',
        },
      ],
      d: [
        {
          description: '',
          title:
            'If you offer suggestions to the service, they may use that without your approval or compensation, but they do not become the owner',
          source: 'wip',
        },
        {
          description: '',
          title: 'You can request access and deletion of personal data',
          source: 'wip',
        },
      ],
    },
  },
  {
    name: "mercado libre",
    imgUrl: "meli.png",
    label: "Mercado Libre",
    riskLevel: "c", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          "title": "They store data on you even if you did not interact with the service",
          "description": "Some services store data on you even if you did not provide that data yourself. For example, users might provide access to their address book, after which a service might also store the phone numbers of that person's contacts.",
          "source": "https://edit.tosdr.org/points/31562"
        }
      ],
      c: [
        {
          "title": "Third-party cookies are used for advertising",
          "description": "The service's website sets third-party cookies (cookies that do not belong to their domain) for purposes not including statistics and analytics.",
          "source": "https://edit.tosdr.org/points/31559"
        },
        {
          "title": "This service shares your personal data with third parties that are not essential to its operation",
          "description": "Your personal data is or may be given to third parties nonessential to the service’s operation. This could be a business partner that receives your data to provide targeted advertisements.",
          "source": "https://edit.tosdr.org/points/31552"
        },
        {
          "title": "Your personal data may be disclosed to comply with government requests without notice to you",
          "description": "If the Government governing the Terms requests personal data of a user of this service, they may not inform/notify the user while complying with the request.",
          "source": "https://edit.tosdr.org/points/31554"
        },
        {
          "title": "This service tracks which web page referred you to it",
          "description": "The service logs the URL of the last web page you visited before visiting the Site and may use that information to gather more data about you.",
          "source": "https://edit.tosdr.org/points/31543"
        },
        {
          "title": "Your personal data may be used for marketing purposes",
          "description": "The service may use your personal data for marketing, such as sending you personalised offerings.",
          "source": "https://edit.tosdr.org/points/31549"
        },
        {
          "title": "Many third parties are involved in operating the service",
          "description": "",
          "source": "https://edit.tosdr.org/points/31549"
        },
        {
          "title": "This service receives your precise location through GPS coordinates",
          "description": "Unless the service relies on Geo Location, this case is to be assigned to points that don't need your GPS coordinates to function properly.",
          "source": "https://edit.tosdr.org/points/31544"
        },
        {
          "title": "Your personal data is used to employ targeted third-party advertising",
          "description": "Your Personal Information is traded and shared with advertising companies to target ads on you, either on the website you were visiting or in third party websites. Your interaction with the service and data you have shared with them may be gathered to create an advertising ID or profile.",
          "source": "https://edit.tosdr.org/points/31553"
        },
        {
          "title": "Your personal information is used for many different purposes",
          "description": "Personal Data can be processed for many reasons, including non-essential processing such as for advertising, marketing and analytics purposes.",
          "source": "https://edit.tosdr.org/points/31547"
        },
        {
          "title": "This service gives your personal data to third parties involved in its operation",
          "description": "Your personal data is or may be given to third parties essential to the service’s operation. This could be an external spam detection service for an internet forum.",
          "source": "https://edit.tosdr.org/points/31551"
        },
        {
          "title": "Your personal data is used for advertising",
          "description": "Your interaction with the service and data you have shared with them may be gathered to create an advertising ID or profile to target ads on you, either on the website you were visiting or in third party websites.",
          "source": "https://edit.tosdr.org/cases/216"
        },
        {
          "title": "Your provided identifiable information is actively checked by the service",
          "description": "The service checks if the required identifiable information you've provided is correct, and may do so on a regular basis. The check measures could be analyzing your browser information and/or providing the identifiable information to a third-party or the authority, thus compromising your anonymity.",
          "source": "https://edit.tosdr.org/points/31531"
        },
        {
          "title": "Your data may be processed and stored anywhere in the world",
          "description": "Your data is stored all over the world, including in countries where data protection rules may differ from the ones of the service's jurisdiction or those of your country jurisdiction.",
          "source": "https://edit.tosdr.org/points/31555"
        }
      ],
      a: [
        {
          "title": "You aren’t forced into binding arbitration in case of disputes",
          "description": "Binding Arbitration is a dispute resolution method involving a neutral third party which will render a decision instead of going to court. Since the arbitrator can decide the outgoing of a dispute without evidences or a legal basis, it is preferable that users decide whether they want or not their dispute to be resolved this way.",
          "source": "https://edit.tosdr.org/points/31539"
        },
        {
          "title": "You can request access, correction and/or deletion of your data",
          "description": "Users have the right to access personal data held by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliant.",
          "source": "https://edit.tosdr.org/points/31558"
        },
        {
          "title": "The data retention period is kept to the minimum necessary for fulfilling its purposes",
          "description": "The service will remove personal data from its systems once it is no longer required. Depending on the type of information and the reason it was collected, data retention periods will vary.",
          "source": "https://edit.tosdr.org/points/31557"
        },
        {
          "title": "Information is provided about how your personal data is used",
          "description": "The Privacy Policy explains the purposes for which data is collected and the way it is processed, used and shared.",
          "source": "https://edit.tosdr.org/points/31560"
        },
        {
          "title": "Information is provided about what kind of information they collect",
          "description": "The Privacy Policy describes in detail the data collected through the website and through the services provided.",
          "source": "https://edit.tosdr.org/points/31561"
        },
        {
          "title": "Your personal data is not sold",
          "description": "This service makes an explicit promise not to sell 'personal data' of users.",
          "source": "https://edit.tosdr.org/points/31548"
        },
        {
          "title": "Pseudonyms are allowed",
          "description": "You don't need to provide your full name to use the Service and you are allowed to use a pseudonym instead.",
          "source": "https://edit.tosdr.org/points/31541"
        },
        {
          "title": "Third parties used by the service are bound by confidentiality obligations",
          "description": "The Third Parties accessing your personal information must keep it confidential and only use it for limited purposes.",
          "source": "https://edit.tosdr.org/points/31550"
        },
        {
          "title": "When the service wants to change its terms, you are notified a week or more in advance.",
          "description": "Users will be notified a week before the Terms are somehow updated, which lets them a reasonable amount of time to carefully read the changes and perhaps stop using the services if they do not longer agree.",
          "source": "https://edit.tosdr.org/points/31540"
        }
      ]
    }
  },
  {
    imgUrl: 'telegram.png',
    label: 'Telegram',
    name: 'telegram',
    riskLevel: 'c',
  },
  {
    imgUrl: 'x.png',
    label: 'X',
    name: 'x',
    riskLevel: 'e',
  },
  {
    imgUrl: 'youtube.png',
    label: 'Youtube',
    name: 'youtube',
    riskLevel: 'b',
  },
  {
    imgUrl: 'whatsapp.png',
    label: 'Whatsapp',
    name: 'whatsapp',
    riskLevel: 'd',
  },
  {
    imgUrl: 'linkedin.png',
    label: 'LinkedIn',
    name: 'linkedin',
    riskLevel: 'c',
  },
  {
    imgUrl: 'reddit.png',
    label: 'Reddit',
    name: 'reddit',
    riskLevel: 'e',
  },
  {
    imgUrl: 'steam.png',
    label: 'Steam',
    name: 'steam',
    riskLevel: 'b',
  },
  {
    imgUrl: 'spotify.png',
    label: 'Spotify',
    name: 'spotify',
    riskLevel: 'a',
  },
  {
    imgUrl: 'discord.png',
    label: 'Discord',
    name: 'discord',
    riskLevel: 'c',
  },
];
