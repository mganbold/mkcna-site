/**
 * Site-wide settings for mkcna.org.
 * (The festival/legacy display mode will be added here in the next phase.)
 */
export const site = {
  name: 'Morin Khuur Center in North America', // never "of"
  shortName: 'MKCNA',
  url: 'https://mkcna.org',
  description:
    'A growing community of morin khuur players and enthusiasts across North America, learning together and sharing Mongolian culture through festivals and performances.',

  address: { street: '121 NW 203rd St', city: 'Shoreline', region: 'WA', postal: '98177' },
  phone: { display: '(206) 359-0628', tel: '2063590628' },
  ein: '84-4959242',

  donate: {
    // Single "Donate with PayPal" button; the donor picks the amount on PayPal.
    paypalUrl: 'https://www.paypal.com/donate/?hosted_button_id=HKC42HM2ZKPJA',
  },

  contact: {
    // Web3Forms access key (public by design: it can only send to MKCNA's inbox).
    // If it starts with "YOUR_", the form shows a "not connected yet" message instead.
    web3formsAccessKey: '81a3ee7a-57b1-44aa-b1dc-77fbcc329111',
    // Same subject on every message (the topic is inside the email). Replies go to the visitor's email.
    subject: 'New message from the MKCNA website',
    fromName: 'MKCNA website',
    topics: [
      'General question',
      'Festivals',
      'Joining or partnering with MKCNA',
      'Donations and support',
      'Other',
    ],
  },

  social: {
    facebook: 'https://www.facebook.com/morin.khuur.festival/',
    youtube: 'https://www.youtube.com/c/MorinKhuurCenterinNorthAmerica',
    instagram: 'https://www.instagram.com/morin_khuur_na/',
  },
} as const;

/**
 * Traditional Mongolian script shown vertically beside the homepage headline.
 * Spelling is still being verified — edit the code points here.
 * Currently: ᠮᠣᠷᠢᠨ ᠬᠤᠭᠤᠷ (morin khuur)
 */
export const mongolianScript = {
  text: 'ᠮᠣᠷᠢᠨ ᠬᠤᠭᠤᠷ',
  title: 'Morin khuur',
};

export type NavItem = { label: string; href: string; match?: string };

export const nav: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Festival Cycle', href: '/#cycle' },
  { label: 'Festivals', href: '/festivals', match: '/festivals' },
  { label: 'Performances', href: '/videos', match: '/videos' },
  { label: 'Contact', href: '#contact' },
];
