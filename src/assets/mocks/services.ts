import type { Service } from '@/typings/mocks/services';

export const servicesMock: Service[] = [
  {
    name: "instagram",
    imgUrl: "instagram.png",
    label: "Instagram",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "They store data on you even if you did not interact with the service",
          description: "Some services store data on you even if you did not provide that data yourself. For example, users might provide access to their address book, after which a service might also store the phone numbers of that person's contacts.",
          source: "https://edit.tosdr.org/points/12228"
        },
        {
          title: "Your identity is used in ads that are shown to other users",
          description: "Ads shown to other users may include a reference to you as an implied endorsement. Might give away information about your own personal lifestyle to strangers.",
          source: "https://edit.tosdr.org/points/11358"
        },
        {
          title: "Private messages can be read",
          description: "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          source: "https://edit.tosdr.org/points/12190"
        },
        {
          title: "This service holds onto content that you've deleted",
          description: "Content may remain in backup servers and be retained after deletion, and thus never be completely deleted. This case doesn't apply to contributions that can't be removed due to the nature of the service.",
          source: "https://edit.tosdr.org/points/12230"
        }
      ],
      c: [
        {
          title: "Logs are kept for an undefined period of time",
          description: "Logs are text files containing some information about web visitors, such as user agents (showing for instance that you're connecting from Firefox for Android) and IP addresses (which reveal your approximate location). This case applies to Services that may keep logs indefinitely, allowing user sessions to be tracked over time. Logs that are kept for a time 'consistent with applicable law' also fall under this case, since this period of time may be murky or undefined.",
          source: "https://edit.tosdr.org/points/12220"
        },
        {
          title: "Very broad copyright license on your content",
          description: "",
          source: "https://edit.tosdr.org/points/1035"
        },
        {
          title: "App required for this service requires broad device permissions",
          description: "The app of the service requires more device permissions than necessary. As a consequence it can compromise your privacy by accessing many functions and information from your device, such as precise location, contacts, device identifiers etc.",
          source: "https://edit.tosdr.org/points/12221"
        }
      ],
      a: [
        {
          title: "If you offer suggestions to the service, they may use that without your approval or compensation, but they do not become the owner",
          description: "The service may employ a broad copyright license over feedback, proposals, ideas and suggestions submitted, including the right to use them without restriction, compensation or obligation to the user, but they do not claim ownership on them.",
          source: "https://edit.tosdr.org/points/12227"
        },
        {
          title: "You can request access, correction and/or deletion of your data",
          description: "Users have the right to access personal data hold by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliants.",
          source: "https://edit.tosdr.org/points/12187"
        },
        {
          title: "You maintain ownership of your content",
          description: "This service does not claim ownership over user-generated content or materials, and the user doesn't need to waive any moral rights by posting owned content.",
          source: "https://edit.tosdr.org/points/27164"
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
    name: "telegram",
    imgUrl: "telegram.png",
    label: "Telegram",
    riskLevel: "b", // or b, c, d, e
    termsConditionsRisks: {
      c: [
        {
          title: "Terms may be changed any time at their discretion, without notice to you",
          description: "The Agreements can be updated at any time, including in a way that negatively affects user rights, without notifying before or after the changes.",
          source: "https://edit.tosdr.org/points/8167"
        }
      ],
      a: [
        {
          title: "Logs are deleted after a finite period of time",
          description: "Logs are text files containing some information about web visitors, such as user agents (showing for instance that you're connecting from Firefox for Android) and IP addresses (which reveal your approximate location). This case applies to Services that periodically delete their logs to prevent user sessions being tracked over time.",
          source: "https://edit.tosdr.org/points/8854"
        },
        {
          title: "The data retention period is kept to the minimum necessary for fulfilling its purposes",
          description: "The service will remove personal data from its systems once it is no longer required. Depending on the type of information and the reason it was collected, data retention periods will vary.",
          source: "https://edit.tosdr.org/points/17476"
        },
        {
          title: "The service promises to inform and/or notify you regarding government inquiries that may involve your personal data",
          description: "In case the Government governing the Terms requests personal data of a user of this service, they will make reasonable efforts to inform/notify the user (e.g. warrant canary).",
          source: "https://edit.tosdr.org/points/17478"
        },
        {
          title: "You can delete your content from this service",
          description: "You can ask the service to remove your content at any time, and it's deleted within a reasonable time.",
          source: "https://edit.tosdr.org/points/17480"
        },
        {
          title: "User-generated content is encrypted, and this service cannot decrypt it",
          description: "Content generated by the users is end-to-end encrypted, in a way that it can't be accessed by anyone unauthorized, and even the service has no technical means to decrypt it.",
          source: "https://edit.tosdr.org/points/17472"
        },
        {
          title: "You can request access, correction and/or deletion of your data",
          description: "Users have the right to access personal data hold by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliant.",
          source: "https://edit.tosdr.org/points/11971"
        },
        {
          title: "You can retrieve an archive of your data",
          description: "Users can request a copy of the data collected through the services and infer from it the amount of personal information that is processed and stored by the Service. This usually applies to Services GDPR compliant.",
          source: "https://edit.tosdr.org/points/8168"
        },
        {
          title: "Information is provided about what kind of information they collect",
          description: "The Privacy Policy describes in detail the data collected through the website and through the services provided.",
          source: "https://edit.tosdr.org/points/14681"
        },
        {
          title: "Information is provided about how your personal data is used",
          description: "The Privacy Policy explains the purposes for which data is collected and the way it is processed, used and shared.",
          source: "https://edit.tosdr.org/points/17470"
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
          "title": "They store data on you even if you did not interact with the service",
          "description": "Some services store data on you even if you did not provide that data yourself. For example, users might provide access to their address book, after which a service might also store the phone numbers of that person's contacts.",
          "source": "https://edit.tosdr.org/points/12804"
        },
        {
          "title": "Private messages can be read",
          "description": "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          "source": "https://edit.tosdr.org/points/12796"
        },
        {
          "title": "Specific content can be deleted without reason and may be removed without prior notice",
          "description": "This service can delete specific content. Usually they will claim they reserve the right to do it at their sole discretion, which is legalese for saying they won't give a specific reason. If the terms say they will not notify you, it shall be included in the quote but if it does not explicitly say they will give you a notice, it can be reasonably inferred that they can do it without telling you.",
          "source": "https://edit.tosdr.org/points/5854"
        },
        {
          "title": "Your browsing history can be viewed by the service",
          "description": "The service can view your search history and the websites you visit, which is an extremely intrusive way of collecting information that may include personal and/or sensitive data.",
          "source": "https://edit.tosdr.org/points/12806"
        },
        {
          "title": "This service holds onto content that you've deleted",
          "description": "Content may remain in backup servers and be retained after deletion, and thus never be completely deleted. This case doesn't apply to contributions that can't be removed due to the nature of the service.",
          "source": "https://edit.tosdr.org/points/12794"
        }
      ],
      "c": [
        {
          "title": "This service may collect, use, and share location data",
          "description": "Location-based information is collected and may be used and/or shared with third parties for purposes not directly related to the services provided (i.e. the Service doesn't rely on the use or share of location data to function properly).",
          "source": "https://edit.tosdr.org/points/12797"
        },
        {
          "title": "Many different types of personal data are collected",
          "description": "The service collects different kinds of personal data, such as name, demographic information, postal address, biometric data, device information, IDs, contacts, call logs...",
          "source": "https://edit.tosdr.org/points/12791"
        },
        {
          "title": "Third-party cookies are used for advertising",
          "description": "The service's website sets third-party cookies (cookies that do not belong to their domain) for purposes not including statistics and analytics.",
          "source": "https://edit.tosdr.org/points/779"
        }
      ],
      "a": [
        {
          "title": "Archives of their agreements are provided so that changes can be viewed over time",
          "description": "This case applies to Services whose agreements provide previous versions, so that users can compare them and understand how the Service seems to evolve regarding user rights.",
          "source": "https://edit.tosdr.org/points/12787"
        },
        {
          "title": "If you offer suggestions to the service, they may use that without your approval or compensation, but they do not become the owner",
          "description": "The service may employ a broad copyright license over feedback, proposals, ideas and suggestions submitted, including the right to use them without restriction, compensation or obligation to the user, but they do not claim ownership on them.",
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
          "title": "Your browsing history can be viewed by the service",
          "description": "The service can view your search history and the websites you visit, which is an extremely intrusive way of collecting information that may include personal and/or sensitive data.",
          "source": "https://edit.tosdr.org/points/11339"
        },
        {
          "title": "This service holds onto content that you've deleted",
          "description": "Content may remain in backup servers and be retained after deletion, and thus never be completely deleted. This case doesn't apply to contributions that can't be removed due to the nature of the service.",
          "source": "https://edit.tosdr.org/points/837"
        }
      ],
      "c": [
        {
          "title": "Third-party cookies are used for advertising",
          "description": "The service's website sets third-party cookies (cookies that do not belong to their domain) for purposes not including statistics and analytics.",
          "source": "https://edit.tosdr.org/points/11334"
        },
        {
          "title": "Your personal data may be used for marketing purposes",
          "description": "The service may use your personal data for marketing, such as sending you personalised offerings.",
          "source": "https://edit.tosdr.org/points/11335"
        },
        {
          "title": "You have a reduced time period to take legal action against the service",
          "description": "If you wish to bring legal action against a service about a past incident, you may not be able to do so if the Terms you agreed to implied a limited amount of time. As a result, it may be worthy to carefully read that section of the Terms to know exactly how much time you might have before your right to take legal action expires.",
          "source": "https://edit.tosdr.org/points/858"
        }
      ],
      "a": [
        {
          "title": "You can opt out of targeted advertising",
          "description": "The service employs your data to target ads to you, but you can opt-out of this interest-based advertising.",
          "source": "https://edit.tosdr.org/points/24466"
        },
        {
          "title": "You have the right to leave this service at any time",
          "description": "You can stop using the service and/or cancel or delete your account at any time for any reason. Moreover, the termination is reasonably fast and simple.",
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
          "title": "They store data on you even if you did not interact with the service",
          "description": "Some services store data on you even if you did not provide that data yourself. For example, users might provide access to their address book, after which a service might also store the phone numbers of that person's contacts.",
          "source": "https://edit.tosdr.org/points/18003"
        },
        {
          "title": "Private messages can be read",
          "description": "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          "source": "https://edit.tosdr.org/points/17997"
        },
        {
          "title": "This service still tracks you even if you opted out from tracking",
          "description": "Users can’t fully opt out of tracking technologies used for non-essential purposes such as advertising, marketing or analytics. The user may be asked for consent for installing some tracking technologies on the device, and even if all are rejected the service will still track its visitors and ignore the choice. This case doesn’t apply to functional cookies that are necessary to provide the services.",
          "source": "https://edit.tosdr.org/points/18015"
        }
      ],
      c: [
        {
          "title": "This service may collect, use, and share location data",
          "description": "Location-based information is collected and may be used and/or shared with third parties for purposes not directly related to the services provided (i.e. the Service doesn't rely on the use or share of location data to function properly).",
          "source": "https://edit.tosdr.org/points/17999"
        },
        {
          "title": "Third-party cookies are used for advertising",
          "description": "The service's website sets third-party cookies (cookies that do not belong to their domain) for purposes not including statistics and analytics.",
          "source": "https://edit.tosdr.org/points/18018"
        },
        {
          "title": "Many different types of personal data are collected",
          "description": "The service collects different kinds of personal data, such as name, demographic information, postal address, biometric data, device information, IDs, contacts, call logs.",
          "source": "https://edit.tosdr.org/points/17996"
        },
        {
          "title": "Some personal data may be kept for business interests or legal obligations",
          "description": "After the end of the data retention period and/or if you request the deletion of your data, they may still keep it for business interests (fraud detection, transactions...) or legal obligations (tax, legal reporting...).",
          "source": "https://edit.tosdr.org/points/18012"
        },
        {
          "title": "This service shares your personal data with third parties that are not essential to its operation",
          "description": "Your personal data is or may be given to third parties non-essential to the service’s operation. This could be a business partner that receives your data to provide targeted advertisements.",
          "source": "https://edit.tosdr.org/points/18006"
        },
        {
          "title": "Your account can be deleted or permanently suspended without prior notice and without a reason",
          "description": "At any time, your account can be terminated without explanation and without warning by the service.",
          "source": "https://edit.tosdr.org/points/17992"
        },
        {
          "title": "You are being tracked via social media cookies/pixels",
          "description": "These types of cookies/pixels send information to social media sites when you interact with the service.",
          "source": "https://edit.tosdr.org/points/18022"
        },
        {
          "title": "Information is gathered about you through third parties",
          "description": "This Service may employ, either identifiable or non-identifiable, data collection from third party sources about you.",
          "source": "https://edit.tosdr.org/points/17998"
        },
        {
          "title": "You are tracked via web beacons, tracking pixels, browser fingerprinting, and/or device fingerprinting",
          "description": "Tracking technologies (such as web beacons, tracking pixels...) are employed on users and/or the service assigns a unique ID to a browser or device to track its behaviour.",
          "source": "https://edit.tosdr.org/points/18000"
        },
        {
          "title": "Your personal data may be used for marketing purposes",
          "description": "The service may use your personal data for marketing, such as sending you personalised offerings.",
          "source": "https://edit.tosdr.org/points/18004"
        },
        {
          "title": "Your profile is combined across various products",
          "description": "When using multiple services from one same company, they can combine these (unrelated) information sources about you to build up a single richer user profile about you.",
          "source": "https://edit.tosdr.org/points/18019"
        },
        {
          "title": "Your personal data may be sold or otherwise transferred as part of a bankruptcy proceeding or other type of financial transaction",
          "description": "If the service gets acquired or is involved in a merger, bankruptcy, reorganisation or sale, your personal data may be transferred or sold.",
          "source": "https://edit.tosdr.org/points/18007"
        },
        {
          "title": "Your personal data is used to employ targeted third-party advertising",
          "description": "Your Personal Information is traded and shared with advertising companies to target ads on you, either on the website you were visiting or in third party websites.",
          "source": "https://edit.tosdr.org/points/18005"
        },
        {
          "title": "This service gives your personal data to third parties involved in its operation",
          "description": "Your personal data is or may be given to third parties essential to the service’s operation.",
          "source": "https://edit.tosdr.org/points/18008"
        },
        {
          "title": "This service assumes no liability for unauthorized access to your personal information",
          "description": "This service assumes no liability for unauthorized access to your personal information.",
          "source": "https://edit.tosdr.org/points/17987"
        },
        {
          "title": "Your biometric data is collected",
          "description": "This service can collect or use your biometric data. This includes but is not limited to facial recognition, fingerprints, and iris scans.",
          "source": "https://edit.tosdr.org/points/18001"
        },
        {
          "title": "Your personal data is used for advertising",
          "description": "Your interaction with the service and data you have shared with them may be gathered to create an advertising ID or profile to target ads on you.",
          "source": "https://edit.tosdr.org/points/18020"
        },
        {
          "title": "Your data may be processed and stored anywhere in the world",
          "description": "Your data is stored all over the world, including in countries where data protection rules may differ from the ones of the service's jurisdiction.",
          "source": "https://edit.tosdr.org/points/18013"
        },
        {
          "title": "Third-party cookies are used for statistics",
          "description": "For instance, Google Analytics, rather than self-hosted (first-party) statistics software.",
          "source": "https://edit.tosdr.org/points/18017"
        },
        {
          "title": "Tracking pixels are used in service-to-user communication",
          "description": "The service tracks the user count or some actions of the user; this is usually used for statistics.",
          "source": "https://edit.tosdr.org/points/18021"
        }
      ],
      a: [
        {
          "title": "You can request access, correction and/or deletion of your data",
          "description": "Users have the right to access personal data held by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliant.",
          "source": "https://edit.tosdr.org/points/18009"
        },
        {
          "title": "Information is provided about how they collect personal data",
          "description": "The service details situations in which they collect personal information or means by which they do.",
          "source": "https://edit.tosdr.org/points/18002"
        },
        {
          "title": "The service reviews its privacy policy on a regular basis",
          "description": "Users know the date the privacy policy was last updated and can thus infer the next time it will be reviewed.",
          "source": "https://edit.tosdr.org/points/18014"
        },
        {
          "title": "Information is provided about how your personal data is used",
          "description": "The Privacy Policy explains the purposes for which data is collected and the way it is processed, used and shared.",
          "source": "https://edit.tosdr.org/points/18024"
        },
        {
          "title": "A complaint mechanism is provided for the handling of personal data",
          "description": "The service provides users with contact information for an internal or external structure to lodge complaints.",
          "source": "https://edit.tosdr.org/points/18025"
        },
        {
          "title": "Information is provided about what kind of information they collect",
          "description": "The Privacy Policy describes in detail the data collected through the website and through the services provided.",
          "source": "https://edit.tosdr.org/points/18023"
        },
        {
          "title": "You will be notified about website maintenance",
          "description": "Users will be notified before their experience is impacted due to website maintenance.",
          "source": "https://edit.tosdr.org/points/17991"
        },
        {
          "title": "You can opt out of targeted advertising",
          "description": "The service employs your data to target ads to you, but you can opt-out of this interest-based advertising.",
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
          "title": "Logs are kept for an undefined period of time",
          "description": "Logs are text files containing some information about web visitors, such as user agents (showing for instance that you're connecting from Firefox for Android) and ip addresses (which reveal your approximate location). This case applies to Services that may keep logs indefinitely, allowing user sessions to be tracked over time. Logs that are kept for a time 'consistent with applicable law' also fall under this case, since this period of time may be murky or undefined.",
          "source": "https://edit.tosdr.org/points/13026"
        },
        {
          "title": "This service shares your personal data with third parties that are not essential to its operation",
          "description": "Your personal data is or may be given to third parties nonessential to the service’s operation. This could be a business partner that receives your data to provide targeted advertisements.",
          "source": "https://edit.tosdr.org/points/21741"
        },
        {
          "title": "Many different types of personal data are collected",
          "description": "The service collects different kinds of personal data, such as name, demographic information, postal address, biometric data, device information, IDs, contacts, call logs...",
          "source": "https://edit.tosdr.org/points/21744"
        },
        {
          "title": "Your account can be deleted or permanently suspended without prior notice and without a reason",
          "description": "At any time, your account can be terminated without explanation and without warning by the service.",
          "source": "https://edit.tosdr.org/points/14582"
        },
        {
          "title": "Information is gathered about you through third parties",
          "description": "This Service may employ, either identifiable or non-identifiable, data collection from third party sources about you.",
          "source": "https://edit.tosdr.org/points/11580"
        },
        {
          "title": "Your personal data may be used for marketing purposes",
          "description": "The service may use your personal data for marketing, such as sending you personalised offerings.",
          "source": "https://edit.tosdr.org/points/13032"
        },
        {
          "title": "You are tracked via web beacons, tracking pixels, browser fingerprinting, and/or device fingerprinting",
          "description": "Tracking technologies (such as web beacons, tracking pixels...) are employed on users and/or the service assigns a unique ID to a browser or device to track its behaviour.",
          "source": "https://edit.tosdr.org/points/13027"
        },
        {
          "title": "Your personal data may be sold or otherwise transferred as part of a bankruptcy proceeding or other type of financial transaction",
          "description": "If the service gets acquired or is involved in a merger, bankruptcy, reorganisation or sale, your personal data may be transferred or sold.",
          "source": "https://edit.tosdr.org/points/13034"
        },
        {
          "title": "Your personal information is used for many different purposes",
          "description": "Personal Data can be processed for many reasons, including non-essential processing such as for advertising, marketing and analytics purposes.",
          "source": "https://edit.tosdr.org/points/14585"
        }
      ],
      "a": [
        {
          "title": "You maintain ownership of your content",
          "description": "This service does not claim ownership over user-generated content or materials, and the user doesn't need to waive any moral rights by posting owned content.",
          "source": "https://edit.tosdr.org/points/13039"
        },
        {
          "title": "User-generated content is encrypted, and this service cannot decrypt it",
          "description": "Content generated by the users is end-to-end encrypted, in a way that it can't be accessed by anyone unauthorized, and even the service has no technical means to decrypt it.",
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
          "title": "They store data on you even if you did not interact with the service",
          "description": "Some services store data on you even if you did not provide that data yourself. For example, users might provide access to their address book, after which a service might also store the phone numbers of that person's contacts.",
          "source": "https://edit.tosdr.org/points/20633"
        },
        {
          "title": "Your identity is used in ads that are shown to other users",
          "description": "Ads shown to other users may include a reference to you as an implied endorsement. Might give away information about your own personal lifestyle to strangers.",
          "source": "https://edit.tosdr.org/points/20617"
        },
        {
          "title": "Private messages can be read",
          "description": "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          "source": "https://edit.tosdr.org/points/20638"
        },
        {
          "title": "Specific content can be deleted without reason and may be removed without prior notice",
          "description": "This service can delete specific content. Usually they will claim they reserve the right to do it at their sole discretion, which is legalese for saying they won't give a specific reason. If the terms say they will not notify you, it shall be included in the quote but if it does not explicitly say they will give you a notice, it can be reasonably inferred that they can do it without telling you.",
          "source": "https://edit.tosdr.org/points/20613"
        }
      ],
      "c": [
        {
          "title": "App required for this service requires broad device permissions",
          "description": "The app of the service requires more device permissions than necessary. As a consequence it can compromise your privacy by accessing many functions and information from your device, such as precise location, contacts, device identifiers etc.",
          "source": "https://edit.tosdr.org/points/20631"
        },
        {
          "title": "Many different types of personal data are collected",
          "description": "The service collects different kinds of personal data, such as name, demographic information, postal address, biometric data, device information, IDs, contacts, call logs...",
          "source": "https://edit.tosdr.org/points/20643"
        },
        {
          "title": "This service shares your personal data with third parties that are not essential to its operation",
          "description": "Your personal data is or may be given to third parties nonessential to the service’s operation. This could be a business partner that receives your data to provide targeted advertisements.",
          "source": "https://edit.tosdr.org/points/20642"
        },
        {
          "title": "Some personal data may be kept for business interests or legal obligations",
          "description": "After the end of the data retention period and/or if you request the deletion of your data, they may still keep it for business interests (fraud detection, transactions...) or legal obligations (tax, legal reporting...).",
          "source": "https://edit.tosdr.org/points/20653"
        }
      ],
      "a": [
        {
          "title": "You maintain ownership of your content",
          "description": "This service does not claim ownership over user-generated content or materials, and the user doesn't need to waive any moral rights by posting owned content.",
          "source": "https://edit.tosdr.org/points/20614"
        },
        {
          "title": "You can delete your content from this service",
          "description": "You can ask the service to remove your content at any time, and it's deleted within a reasonable time.",
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
          "title": "Private messages can be read",
          "description": "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          "source": "https://edit.tosdr.org/points/13308"
        },
        {
          "title": "Specific content can be deleted without reason and may be removed without prior notice",
          "description": "This service can delete specific content. Usually they will claim they reserve the right to do it at their sole discretion, which is legalese for saying they won't give a specific reason. If the terms say they will not notify you, it shall be included in the quote but if it does not explicitly say they will give you a notice, it can be reasonably inferred that they can do it without telling you.",
          "source": "https://edit.tosdr.org/points/8179"
        },
        {
          "title": "You waive your moral rights",
          "description": "Moral rights are rights to creators of literary, dramatic, musical and artistic works, as well as directors of films. 'The moral rights include the right of attribution, the right to have a work published anonymously or pseudonymously, and the right to the integrity of the work. The preserving of the integrity of the work allows the author to object to alteration, distortion, or mutilation of the work that is 'prejudicial to the author's honor or reputation'. Anything else that may detract from the artist's relationship with the work even after it leaves the artist's possession or ownership may bring these moral rights into play. Moral rights are distinct from any economic rights tied to copyrights. Even if an artist has assigned his or her copyright rights to a work to a third party, he or she still maintains the moral rights to the work.' -Wikipedia In general, any terms that use the exact words 'moral rights' as rights that are waived will fall under this Case.",
          "source": "https://edit.tosdr.org/points/9849"
        }
      ],
      "c": [
        {
          "title": "This service shares your personal data with third parties that are not essential to its operation",
          "description": "Your personal data is or may be given to third parties nonessential to the service’s operation. This could be a business partner that receives your data to provide targeted advertisements.",
          "source": "https://edit.tosdr.org/points/13326"
        },
        {
          "title": "Third-party cookies are used for advertising",
          "description": "The service's website sets third-party cookies (cookies that do not belong to their domain) for purposes not including statistics and analytics.",
          "source": "https://edit.tosdr.org/points/13318"
        },
        {
          "title": "Some personal data may be kept for business interests or legal obligations",
          "description": "After the end of the data retention period and/or if you request the deletion of your data, they may still keep it for business interests (fraud detection, transactions...) or legal obligations (tax, legal reporting...).",
          "source": "https://edit.tosdr.org/points/13330"
        },
        {
          "title": "This service tracks you on other websites",
          "description": "The service may use tracking technologies in third-party websites to track your online activity while you aren't visiting their Site.",
          "source": "https://edit.tosdr.org/points/13319"
        }
      ],
      "a": [
        {
          "title": "The service promises to inform and/or notify you regarding government inquiries that may involve your personal data",
          "description": "In case the Government governing the Terms requests personal data of a user of this service, they will make reasonable efforts to inform/notify the user (e.g. warrant canary).",
          "source": "https://edit.tosdr.org/points/5613"
        },
        {
          "title": "You maintain ownership of your content",
          "description": "This service does not claim ownership over user-generated content or materials, and the user doesn't need to waive any moral rights by posting owned content.",
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
          "title": "Private messages can be read",
          "description": "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          "source": "https://edit.tosdr.org/points/10606"
        }
      ],
      "c": [
        {
          "title": "This service may collect, use, and share location data",
          "description": "Location-based information is collected and may be used and/or shared with third parties for purposes not directly related to the services provided (i.e. the Service doesn't rely on the use or share of location data to function properly).",
          "source": "https://edit.tosdr.org/points/11342"
        },
        {
          "title": "Some personal data may be kept for business interests or legal obligations",
          "description": "After the end of the data retention period and/or if you request the deletion of your data, they may still keep it for business interests (fraud detection, transactions...) or legal obligations (tax, legal reporting...).",
          "source": "https://edit.tosdr.org/points/13992"
        },
        {
          "title": "You are forced into binding arbitration in case of disputes",
          "description": "This service forces users to use their own contracted arbitrator and forces users to waive their rights to jury trial.",
          "source": "https://edit.tosdr.org/points/13359"
        },
        {
          "title": "Extra data may be collected about you through promotions",
          "description": "Additional personal data may be collected through contests, surveys, promotions, petitions or sweepstakes.",
          "source": "https://edit.tosdr.org/points/13983"
        },
        {
          "title": "You waive your right to a class action.",
          "description": "The right to be represented in a class action (or representative action) exists in the US and some European countries. It allows people who have been similarly injured by the same accused to take legal action by a single lawsuit instead of individually. Some Terms of Service try to limit that right. By agreeing to them, you could waive (= renounce to) your right to a class action, which might reduce your chances to be successful in a case.",
          "source": "https://edit.tosdr.org/points/13360"
        },
        {
          "title": "Your personal data may be disclosed to comply with government requests without notice to you",
          "description": "If the Government governing the Terms requests personal data of a user of this service, they may not inform/notify the user while complying with the request.",
          "source": "https://edit.tosdr.org/points/13990"
        }
      ],
      "a": [
        {
          "title": "You can request access, correction and/or deletion of your data",
          "description": "Users have the right to access personal data hold by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliant.",
          "source": "https://edit.tosdr.org/points/13994"
        },
        {
          "title": "User accounts can be terminated after having been in breach of the terms of service repeatedly",
          "description": "User accounts can be terminated for having been in breach of the terms of service repeatedly, meaning they cannot be terminated without a reason, but only for a limited number of reasons. Additionally, user accounts will not be deleted after a first infringement.",
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
          "title": "Private messages can be read",
          "description": "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          "source": "https://edit.tosdr.org/points/9070"
        },
        {
          "title": "Specific content can be deleted without reason and may be removed without prior notice",
          "description": "This service can delete specific content. Usually they will claim they reserve the right to do it at their sole discretion, which is legalese for saying they won't give a specific reason. If the terms say they will not notify you, it shall be included in the quote but if it does not explicitly say they will give you a notice, it can be reasonably inferred that they can do it without telling you.",
          "source": "https://edit.tosdr.org/points/11419"
        }
      ],
      "c": [
        {
          "title": "User-generated content can be blocked or censored for any reason",
          "description": "The service reserves the right, for any or no reason, to refuse to post or reject user communications.",
          "source": "https://edit.tosdr.org/points/10882"
        },
        {
          "title": "Your account can be deleted or permanently suspended without prior notice and without a reason",
          "description": "At any time, your account can be terminated without explanation and without warning by the service.",
          "source": "https://edit.tosdr.org/points/35062"
        },
        {
          "title": "Information is gathered about you through third parties",
          "description": "This Service may employ, either identifiable or non-identifiable, data collection from third party sources about you.",
          "source": "https://edit.tosdr.org/points/35076"
        },
        {
          "title": "Extra data may be collected about you through promotions",
          "description": "Additional personal data may be collected through contests, surveys, promotions, petitions or sweepstakes.",
          "source": "https://edit.tosdr.org/points/35075"
        },
        {
          "title": "Your personal data may be sold or otherwise transferred as part of a bankruptcy proceeding or other type of financial transaction",
          "description": "If the service gets acquired or is involved in a merger, bankruptcy, reorganisation or sale, your personal data may be transferred or sold.",
          "source": "https://edit.tosdr.org/points/6121"
        },
        {
          "title": "You are tracked via web beacons, tracking pixels, browser fingerprinting, and/or device fingerprinting",
          "description": "Tracking technologies (such as web beacons, tracking pixels...) are employed on users and/or the service assigns a unique ID to a browser or device to track its behaviour.",
          "source": "https://edit.tosdr.org/points/6115"
        },
        {
          "title": "You are forced into binding arbitration in case of disputes",
          "description": "This service forces users to use their own contracted arbitrator and forces users to waive their rights to jury trial.",
          "source": "https://edit.tosdr.org/points/11441"
        }
      ],
      "a": [
        {
          "title": "Your information is only shared with third parties when given specific consent",
          "description": "The service does not share user information with any third parties unless users specifically give it permission to do so.",
          "source": "https://edit.tosdr.org/points/11459"
        },
        {
          "title": "You can delete your content from this service",
          "description": "You can ask the service to remove your content at any time, and it's deleted within a reasonable time.",
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
  {
    name: "pinterest",
    imgUrl: "pinterest.png",
    label: "Pinterest",
    riskLevel: "e", // or b, c, d, e
    termsConditionsRisks: {
      e: [
        {
          title: "They store data on you even if you did not interact with the service",
          description: "Some services store data on you even if you did not provide that data yourself. For example, users might provide access to their address book, after which a service might also store the phone numbers of that person's contacts.",
          source: "https://edit.tosdr.org/points/12956"
        },
        {
          title: "Private messages can be read",
          description: "The Service is able to access, scan, review or read all user communications, including private messages, which may contain personal or sensitive data.",
          source: "https://edit.tosdr.org/points/12990"
        },
        {
          title: "Specific content can be deleted without reason and may be removed without prior notice",
          description: "This service can delete specific content. Usually they will claim they reserve the right to do it at their sole discretion, which is legalese for saying they won't give a specific reason. If the terms say they will not notify you, it shall be included in the quote but if it does not explicitly say they will give you a notice, it can be reasonably inferred that they can do it without telling you.",
          source: "https://edit.tosdr.org/points/12961"
        },
        {
          title: "This service holds onto content that you've deleted",
          description: "Content may remain in backup servers and be retained after deletion, and thus never be completely deleted. This case doesn't apply to contributions that can't be removed due to the nature of the service.",
          source: "https://edit.tosdr.org/points/12962"
        }
      ],
      c: [
        {
          title: "App required for this service requires broad device permissions",
          description: "The app of the service requires more device permissions than necessary. As a consequence, it can compromise your privacy by accessing many functions and information from your device, such as precise location, contacts, device identifiers, etc.",
          source: "https://edit.tosdr.org/points/12986"
        },
        {
          title: "Your account can be deleted or permanently suspended without prior notice and without a reason",
          description: "At any time, your account can be terminated without explanation and without warning by the service.",
          source: "https://edit.tosdr.org/points/12966"
        },
        {
          title: "This service tracks you on other websites",
          description: "The service may use tracking technologies in third-party websites to track your online activity while you aren't visiting their site.",
          source: "https://edit.tosdr.org/points/13012"
        }
      ],
      a: [
        {
          title: "You maintain ownership of your content",
          description: "This service does not claim ownership over user-generated content or materials, and the user doesn't need to waive any moral rights by posting owned content.",
          source: "https://edit.tosdr.org/points/8087"
        },
        {
          title: "Information is provided about how they collect personal data",
          description: "The service details situations in which they collect personal information or means by which they do.",
          source: "https://edit.tosdr.org/points/12982"
        },
        {
          title: "Your browser's Do Not Track (DNT) headers are respected",
          description: "This service does respect the browser's Do Not Track header and disables all user tracking if it is enabled.",
          source: "https://edit.tosdr.org/points/13013"
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
          title: "Specific content can be deleted without reason and may be removed without prior notice",
          description: "This service can delete specific content. Usually they will claim they reserve the right to do it at their sole discretion, which is legalese for saying they won't give a specific reason. If the terms say they will not notify you, it shall be included in the quote but if it does not explicitly say they will give you a notice, it can be reasonably inferred that they can do it without telling you.",
          source: "https://edit.tosdr.org/points/12733"
        },
        {
          title: "You waive your moral rights",
          description: "Moral rights are rights to creators of literary, dramatic, musical and artistic works, as well as directors of films. 'The moral rights include the right of attribution, the right to have a work published anonymously or pseudonymously, and the right to the integrity of the work. The preserving of the integrity of the work allows the author to object to alteration, distortion, or mutilation of the work that is 'prejudicial to the author's honor or reputation'. Anything else that may detract from the artist's relationship with the work even after it leaves the artist's possession or ownership may bring these moral rights into play. Moral rights are distinct from any economic rights tied to copyrights. Even if an artist has assigned his or her copyright rights to a work to a third party, he or she still maintains the moral rights to the work.' -Wikipedia In general, any terms that use the exact words 'moral rights' as rights that are waived will fall under this Case.",
          source: "https://edit.tosdr.org/points/12744"
        }
      ],
      c: [
        {
          title: "Some personal data may be kept for business interests or legal obligations",
          description: "After the end of the data retention period and/or if you request the deletion of your data, they may still keep it for business interests (fraud detection, transactions...) or legal obligations (tax, legal reporting...).",
          source: "https://edit.tosdr.org/points/13222"
        },
        {
          title: "Your account can be deleted or permanently suspended without prior notice and without a reason",
          description: "At any time, your account can be terminated without explanation and without warning by the service.",
          source: "https://edit.tosdr.org/points/21520"
        },
        {
          title: "You waive your right to a class action.",
          description: "The right to be represented in a class action (or representative action) exists in the US and some European countries. It allows people who have been similarly injured by the same accused to take legal action by a single lawsuit instead of individually. Some Terms of Service try to limit that right. By agreeing to them, you could waive (= renounce to) your right to a class action, which might reduce your chances to be successful in a case.",
          source: "https://edit.tosdr.org/points/12768"
        }
      ],
      a: [
        {
          title: "You can request access, correction and/or deletion of your data",
          description: "Users have the right to access personal data hold by the Service, correct it and/or permanently delete it. This usually applies to Services GDPR compliants.",
          source: "https://edit.tosdr.org/points/12770"
        },
        {
          title: "If you offer suggestions to the service, they may use that without your approval or compensation, but they do not become the owner",
          description: "The service may employ a broad copyright license over feedback, proposals, ideas and suggestions submitted, including the right to use them without restriction, compensation or obligation to the user, but they do not claim ownership on them.",
          source: "https://edit.tosdr.org/points/12737"
        },
        {
          title: "You maintain ownership of your content",
          description: "This service does not claim ownership over user-generated content or materials, and the user doesn't need to waive any moral rights by posting owned content.",
          source: "https://edit.tosdr.org/points/27163"
        }
      ]
    }
  },
];
