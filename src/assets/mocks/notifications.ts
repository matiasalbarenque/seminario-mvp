import type { Notification } from '@/typings/mocks/notifications';

export const notificationsMock: Notification[] = [
  {
    id: '1',
    date: '2024-07-05',
    imgUrl: '/img/apps/instagram.png',
    title: "Instagram's terms and conditions have been recently updated",
    description:
      'Instagram recently updated its terms and conditions, introducing changes that may have significant privacy implications. One of the key concerns revolves around the app’s access to cameras on Android and iOS devices. While camera access is necessary for features like stories and direct messaging, there is a potential risk that the app could access the camera in ways users may not fully anticipate, such as capturing or monitoring without explicit consent. This raises concerns about unauthorized usage, surveillance, and unintended data collection.',
  },
  {
    id: '2',
    date: '2024-04-02',
    imgUrl: '/img/apps/whatsapp.png',
    title: "You may be affected by WhatsApp's terms",
    description:
      "WhatsApp's recent update to its terms and conditions introduces privacy risks, particularly regarding access to device storage and geolocation data. With permission to access, modify, or upload files, the app could expose personal data like photos, videos, or documents, increasing the risk of leaks or unauthorized sharing. Additionally, access to geolocation data, while useful for features like live location sharing, may compromise users’ privacy by revealing sensitive information about their movements and routines. Given WhatsApp’s widespread use for personal and professional communication, it is crucial for users to review permissions carefully to prevent improper access to their data and protect their privacy.",
  },
  {
    id: '3',
    date: '2023-10-14',
    imgUrl: '/img/apps/telegram.png',
    title: 'Warning: Risk of privacy due a recent leak of information',
    description:
      'Telegram recently faced a significant data breach, exposing 361 million account credentials, including email addresses and passwords. Many of these records were new to the Have I Been Pwned (HIBP) database, highlighting the severity of the incident. This breach primarily involved data from Telegram channels where stolen credentials are exchanged, a practice known as "combolists" that hackers often use to facilitate credential-stuffing attacks.',
  },
  {
    id: '4',
    date: '2024-01-06',
    imgUrl: '/img/apps/x.png',
    title: "X App's New Credit Card Requirement Sparks Privacy Concerns Over Financial Data Security Risks",
    description:
      "The X app recently updated its terms and conditions, introducing a new requirement for users to provide a credit card to access its services. While the app aims to streamline payment processes and reduce fraudulent activity, this change raises significant privacy and security concerns. Storing sensitive financial information on such a widely used platform increases the risk of data breaches, especially given that massive apps are prime targets for hackers. If the platform is compromised, users’ credit card details could be exposed, leading to potential financial fraud, unauthorized transactions, or identity theft. Users are advised to review the app's security policies carefully and consider using virtual cards or other secure payment methods to mitigate risks.",
  },
];
