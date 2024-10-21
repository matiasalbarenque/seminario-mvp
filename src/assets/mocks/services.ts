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
  {
    name: "microsoft services",
    imgUrl: "microsoftservices.png",
    label: "Microsoft Services",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "Specific content can be deleted without reason and may be removed without prior notice",
          description: "This service can delete specific content. Usually they will claim they reserve the right to do it at their sole discretion, which is legalese for saying they won't give a specific reason. If the terms say they will not notify you, it shall be included in the quote but if it does not explicitly say they will give you a notice, it can be reasonably inferred that they can do it without telling you.",
          source: "https://edit.tosdr.org/points/1255"
        }
      ],
      c: [
        {
          title: "This service may collect, use, and share location data",
          description: "Location-based information is collected and may be used and/or shared with third parties for purposes not directly related to the services provided (i.e. the Service doesn't rely on the use or share of location data to function properly).",
          source: "https://edit.tosdr.org/points/23359"
        },
        {
          title: "Third-party cookies are used for advertising",
          description: "The service's website sets third-party cookies (cookies that do not belong to their domain) for purposes not including statistics and analytics.",
          source: "https://edit.tosdr.org/points/23356"
        },
        {
          title: "Many different types of personal data are collected",
          description: "The service collects different kinds of personal data, such as name, demographic information, postal address, biometric data, device information, IDs, contacts, call logs...",
          source: "https://edit.tosdr.org/points/23352"
        },
        {
          title: "Your account can be deleted or permanently suspended without prior notice and without a reason",
          description: "At any time, your account can be terminated without explanation and without warning by the service.",
          source: "https://edit.tosdr.org/points/1581"
        },
        {
          title: "You waive your right to a class action.",
          description: "The right to be represented in a class action (or representative action) exists in the US and some European countries. It allows people who have been similarly injured by the same accused to take legal action by a single lawsuit instead of individually. Some Terms of Service try to limit that right. By agreeing to them, you could waive (= renounce to) your right to a class action, which might reduce your chances to be successful in a case.",
          source: "https://edit.tosdr.org/points/14329"
        },
        {
          title: "You are forced into binding arbitration in case of disputes",
          description: "This service forces users to use their own contracted arbitrator and forces users to waive their rights to jury trial.",
          source: "https://edit.tosdr.org/points/14330"
        },
        {
          title: "Voice data is collected and shared with third-parties",
          description: "The service collects data and recordings of your voice when you communicate with a service verbally and may use and share them with third parties, that may use this data for marketing or advertising.",
          source: "https://edit.tosdr.org/points/23351"
        },
        {
          title: "You are being tracked via social media cookies/pixels",
          description: "These types of cookies/pixels send information to social media sites when you interact with the service.",
          source: "https://edit.tosdr.org/points/23357"
        },
        {
          title: "You are tracked via web beacons, tracking pixels, browser fingerprinting, and/or device fingerprinting",
          description: "Tracking technologies (such as web beacons, tracking pixels...) are employed on users and/or the service assigns a unique ID to a browser or device to track its behaviour.",
          source: "https://edit.tosdr.org/points/23355"
        },
        {
          title: "Your personal data may be disclosed to comply with government requests without notice to you",
          description: "If the Government governing the Terms requests personal data of a user of this service, they may not inform/notify the user while complying with the request.",
          source: "https://edit.tosdr.org/points/833"
        },
        {
          title: "Many third parties are involved in operating the service",
          description: "",
          source: "https://edit.tosdr.org/points/14259"
        }
      ],
      a: [
        {
          title: "You can request access, correction and/or deletion of your data",
          description: "Users have the right to access personal data held by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliant.",
          source: "https://edit.tosdr.org/points/10057"
        },
        {
          title: "Two factor authentication is provided for your account",
          description: "The service provides means of further securing your account with two factor authentication, thus greatly improving account security.",
          source: "https://edit.tosdr.org/points/19234"
        },
        {
          title: "You can opt out of targeted advertising",
          description: "The service employs your data to target ads to you, but you can opt-out of this interest-based advertising.",
          source: "https://edit.tosdr.org/points/14258"
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
          title: "They store data on you even if you did not interact with the service",
          description: "Some services store data on you even if you did not provide that data yourself. For example, users might provide access to their address book, after which a service might also store the phone numbers of that person's contacts.",
          source: "https://edit.tosdr.org/points/10493"
        },
        {
          title: "Your identity is used in ads that are shown to other users",
          description: "Ads shown to other users may include a reference to you as an implied endorsement. Might give away information about your own personal lifestyle to strangers.",
          source: "https://edit.tosdr.org/points/4598"
        },
        {
          title: "Private messages can be read",
          description: "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          source: "https://edit.tosdr.org/points/10687"
        },
        {
          title: "Your browsing history can be viewed by the service",
          description: "The service can view your search history and the websites you visit, which is an extremely intrusive way of collecting information that may include personal and/or sensitive data.",
          source: "https://edit.tosdr.org/points/17261"
        },
        {
          title: "This service holds onto content that you've deleted",
          description: "Content may remain in backup servers and be retained after deletion, and thus never be completely deleted. This case doesn't apply to contributions that can't be removed due to the nature of the service.",
          source: "https://edit.tosdr.org/points/4356"
        }
      ],
      c: [
        {
          title: "Logs are kept for an undefined period of time",
          description: "Logs are text files containing some information about web visitors, such as user agents (showing for instance that you're connecting from Firefox for Android) and IP addresses (which reveal your approximate location). This case applies to Services that may keep logs indefinitely, allowing user sessions to be tracked over time. Logs that are kept for a time 'consistent with applicable law' also fall under this case, since this period of time may be murky or undefined.",
          source: "https://edit.tosdr.org/points/10701"
        },
        {
          title: "App required for this service requires broad device permissions",
          description: "The app of the service requires more device permissions than necessary. As a consequence it can compromise your privacy by accessing many functions and information from your device, such as precise location, contacts, device identifiers, etc.",
          source: "https://edit.tosdr.org/points/1059"
        },
        {
          title: "This service may collect, use, and share location data",
          description: "Location-based information is collected and may be used and/or shared with third parties for purposes not directly related to the services provided (i.e. the Service doesn't rely on the use or share of location data to function properly).",
          source: "https://edit.tosdr.org/points/10686"
        },
        {
          title: "Many different types of personal data are collected",
          description: "The service collects different kinds of personal data, such as name, demographic information, postal address, biometric data, device information, IDs, contacts, call logs...",
          source: "https://edit.tosdr.org/points/10688"
        },
        {
          title: "Some personal data may be kept for business interests or legal obligations",
          description: "After the end of the data retention period and/or if you request the deletion of your data, they may still keep it for business interests (fraud detection, transactions...) or legal obligations (tax, legal reporting...)",
          source: "https://edit.tosdr.org/points/10700"
        },
        {
          title: "Third-party cookies are used for advertising",
          description: "The service's website sets third-party cookies (cookies that do not belong to their domain) for purposes not including statistics and analytics.",
          source: "https://edit.tosdr.org/points/17260"
        },
        {
          title: "This service tracks you on other websites",
          description: "The service may use tracking technologies in third-party websites to track your online activity while you aren't visiting their Site.",
          source: "https://edit.tosdr.org/points/743"
        },
        {
          title: "You are tracked via web beacons, tracking pixels, browser fingerprinting, and/or device fingerprinting",
          description: "Tracking technologies (such as web beacons, tracking pixels...) are employed on users and/or the service assigns a unique ID to a browser or device to track its behaviour.",
          source: "https://edit.tosdr.org/points/10689"
        }
      ],
      a: [
        {
          title: "Third parties are not allowed to access your personal information without a legal basis",
          description: "",
          source: "https://edit.tosdr.org/points/10691"
        },
        {
          title: "You maintain ownership of your content",
          description: "This service does not claim ownership over user-generated content or materials, and the user doesn't need to waive any moral rights by posting owned content.",
          source: "https://edit.tosdr.org/points/10738"
        },
        {
          title: "You are informed about the risk of publishing personal info online",
          description: "",
          source: "https://edit.tosdr.org/points/646"
        },
        {
          title: "An onion site accessible over Tor is provided",
          description: "Tor is a software for anonymous communication that directs Internet traffic through an overlay network. Onion sites are only available through Tor browser and provide additional security and anonymity to users.",
          source: "https://edit.tosdr.org/points/16745"
        },
        {
          title: "Information is provided about how your personal data is used",
          description: "The Privacy Policy explains the purposes for which data is collected and the way it is processed, used and shared.",
          source: "https://edit.tosdr.org/points/10693"
        },
        {
          title: "You can opt out of targeted advertising",
          description: "The service employs your data to target ads to you, but you can opt-out of this interest-based advertising.",
          source: "https://edit.tosdr.org/points/10744"
        },
        {
          title: "Your personal data is not sold",
          description: "This service makes an explicit promise not to sell 'personal data' of users.",
          source: "https://edit.tosdr.org/points/10717"
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
          title: "They store data on you even if you did not interact with the service",
          description: "Some services store data on you even if you did not provide that data yourself. For example, users might provide access to their address book, after which a service might also store the phone numbers of that person's contacts.",
          source: "https://edit.tosdr.org/points/13969"
        },
        {
          title: "Your identity is used in ads that are shown to other users",
          description: "Ads shown to other users may include a reference to you as an implied endorsement. Might give away information about your own personal lifestyle to strangers.",
          source: "https://edit.tosdr.org/points/12831"
        },
        {
          title: "Private messages can be read",
          description: "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          source: "https://edit.tosdr.org/points/13935"
        },
        {
          title: "Your browsing history can be viewed by the service",
          description: "The service can view your search history and the websites you visit, which is an extremely intrusive way of collecting information that may include personal and/or sensitive data.",
          source: "https://edit.tosdr.org/points/12819"
        },
        {
          title: "This service holds onto content that you've deleted",
          description: "Content may remain in backup servers and be retained after deletion, and thus never be completely deleted. This case doesn't apply to contributions that can't be removed due to the nature of the service.",
          source: "https://edit.tosdr.org/points/13948"
        }
      ],
      c: [
        {
          title: "App required for this service requires broad device permissions",
          description: "The app of the service requires more device permissions than necessary. As a consequence it can compromise your privacy by accessing many functions and information from your device, such as precise location, contacts, device identifiers, etc.",
          source: "https://edit.tosdr.org/points/12814"
        },
        {
          title: "This service may collect, use, and share location data",
          description: "Location-based information is collected and may be used and/or shared with third parties for purposes not directly related to the services provided (i.e. the Service doesn't rely on the use or share of location data to function properly).",
          source: "https://edit.tosdr.org/points/5841"
        },
        {
          title: "Some personal data may be kept for business interests or legal obligations",
          description: "After the end of the data retention period and/or if you request the deletion of your data, they may still keep it for business interests (fraud detection, transactions...) or legal obligations (tax, legal reporting...)",
          source: "https://edit.tosdr.org/points/13937"
        },
        {
          title: "This service shares your personal data with third parties that are not essential to its operation",
          description: "Your personal data is or may be given to third parties nonessential to the service’s operation. This could be a business partner that receives your data to provide targeted advertisements.",
          source: "https://edit.tosdr.org/points/14756"
        },
        {
          title: "Your account can be deleted or permanently suspended without prior notice and without a reason",
          description: "At any time, your account can be terminated without explanation and without warning by the service.",
          source: "https://edit.tosdr.org/points/14762"
        }
      ],
      a: [
        {
          title: "You can request access, correction and/or deletion of your data",
          description: "Users have the right to access personal data held by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliant.",
          source: "https://edit.tosdr.org/points/5844"
        },
        {
          title: "Archives of their agreements are provided so that changes can be viewed over time",
          description: "This case applies to Services whose agreements provide previous versions, so that users can compare them and understand how the Service seems to evolve regarding user rights.",
          source: "https://edit.tosdr.org/points/950"
        },
        {
          title: "You maintain ownership of your content",
          description: "This service does not claim ownership over user-generated content or materials, and the user doesn't need to waive any moral rights by posting owned content.",
          source: "https://edit.tosdr.org/points/13946"
        },
        {
          title: "If you offer suggestions to the service, they may use that without your approval or compensation, but they do not become the owner",
          description: "The service may employ a broad copyright license over feedback, proposals, ideas and suggestions submitted, including the right to use them without restriction, compensation or obligation to the user, but they do not claim ownership on them.",
          source: "https://edit.tosdr.org/points/13950"
        },
        {
          title: "You can retrieve an archive of your data",
          description: "Users can request a copy of the data collected through the services and infer from it the amount of personal information that is processed and stored by the Service. This usually applies to Services GDPR compliant.",
          source: "https://edit.tosdr.org/points/5843"
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
          title: "Content you post may be edited by the service for any reason",
          description: "This service can edit any content on the service for whatever the reason and at their sole discretion.",
          source: "https://edit.tosdr.org/points/20942"
        },
        {
          title: "Specific content can be deleted without reason and may be removed without prior notice",
          description: "This service can delete specific content. Usually they will claim they reserve the right to do it at their sole discretion, which is legalese for saying they won't give a specific reason. If the terms say they will not notify you, it shall be included in the quote but if it does not explicitly say they will give you a notice, it can be reasonably inferred that they can do it without telling you.",
          source: "https://edit.tosdr.org/points/11301"
        }
      ],
      c: [
        {
          title: "This service may collect, use, and share location data",
          description: "Location-based information is collected and may be used and/or shared with third parties for purposes not directly related to the services provided (i.e. the Service doesn't rely on the use or share of location data to function properly).",
          source: "https://edit.tosdr.org/points/20938"
        },
        {
          title: "Terms may be changed any time at their discretion, without notice to you",
          description: "The Agreements can be updated at any time, including in a way that negatively affects user rights, without notifying before or after the changes.",
          source: "https://edit.tosdr.org/points/1494"
        },
        {
          title: "Many different types of personal data are collected",
          description: "The service collects different kinds of personal data, such as name, demographic information, postal address, biometric data, device information, IDs, contacts, call logs...",
          source: "https://edit.tosdr.org/points/19963"
        }
      ],
      a: [
        {
          title: "The data retention period is kept to the minimum necessary for fulfilling its purposes",
          description: "The service will remove personal data from its systems once it is no longer required. Depending on the type of information and the reason it was collected, data retention periods will vary.",
          source: "https://edit.tosdr.org/points/5545"
        },
        {
          title: "You can request access, correction and/or deletion of your data",
          description: "Users have the right to access personal data held by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliant.",
          source: "https://edit.tosdr.org/points/5544"
        },
        {
          title: "The court of law governing the terms is in a jurisdiction that is friendlier to user privacy protection.",
          description: "The Terms are governed by the applicable laws of a jurisdiction known for protecting citizens' privacy with strong data regulations. Usually contributors will need to explain in the Analysis view of each point linked to this Case why the jurisdiction is friendly to user privacy protection.",
          source: "https://edit.tosdr.org/points/20939"
        }
      ]
    }
  },
];
