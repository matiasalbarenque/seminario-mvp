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
        },
        {
          title: 'Your identity is used in ads that are shown to other users',
          description: '',
        },
      ],
      c: [
        {
          description: '',
          title: 'This service keeps user logs for an undefined period of time',
        },
      ],
      d: [
        {
          description: '',
          title:
            'If you offer suggestions to the service, they may use that without your approval or compensation, but they do not become the owner',
        },
        {
          description: '',
          title: 'You can request access and deletion of personal data',
        },
      ],
    },
  },
  {
    imgUrl: 'meli.png',
    label: 'Mercado Libre',
    name: 'meli',
    riskLevel: 'b',
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
