import { ColorPremium } from '../types/colorPremium';
import { Design } from '../types/design';
import { Rate } from '../types/rate';
import { Advertiser } from '../types/advertiser';

const localWeeklyPrint: Rate[] = [
  {
    title: 'Full Page',
    units: [
      {
        title: '1 Issue',
        price: '$635',
      },
    ],
    description: '',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/full.png',
    image_alt: 'email headline preview',
    notes: [],
    cpm: undefined,
    color_premium: ColorPremium.Large,
    design: Design.Graphic,
  },
  {
    title: 'Half Page',
    units: [
      {
        title: '1 Issue',
        price: '$385',
      },
    ],
    description: '',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/half.png',
    image_alt: 'email headline preview',
    notes: [],
    cpm: undefined,
    color_premium: ColorPremium.Large,
    design: Design.Graphic,
  },
  {
    title: 'Quarter Page',
    units: [
      {
        title: '1 Issue',
        price: '$265',
      },
    ],
    description: '(5 x10.5 in.) or (10 x 5.25 in.)',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/quarter.png',
    image_alt: 'email headline preview',
    notes: [],
    cpm: undefined,
    color_premium: ColorPremium.Medium,
    design: Design.Graphic,
  },
];

const localWebsite: Rate[] = [
  {
    title: 'Website Billboard',
    units: [
      {
        title: '1-4 days',
        price: '$50.00',
      },
      {
        title: '5+ days',
        price: '$45.00',
      },
      {
        title: '30+ days',
        price: '$40.00',
      },
    ],
    description: 'Pixel Size: 970x250 AND 320x50\nFor Higher Quality Images, Submit Double Resolution: 1940x500 AND 640x100',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-leaderboard.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per day.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Website Skyscraper',
    units: [
      {
        title: '1-4 days',
        price: '$60.00',
      },
      {
        title: '5+ days',
        price: '$54.00',
      },
      {
        title: '30+ days',
        price: '$48.00',
      },
    ],
    description: 'Pixel Size: 300x600\nFor Higher Quality Images, Submit Double Resolution: 600x1200',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-skyscraper.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per day.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Website Box',
    units: [
      {
        title: '1-4 days',
        price: '$60.00',
      },
      {
        title: '5+ days',
        price: '$54.00',
      },
      {
        title: '30+ days',
        price: '$48.00',
      },
    ],
    description: 'Pixel Size: 300x250\nFor Higher Quality Images, Submit Double Resolution: 600x500\n\n\nNote that this ad appears in the article on mobile (all readers must scroll past it) and next to the article on desktop. About 70% of our readers view our site on their mobile devices.',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-block.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per day.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
];

const localSocialMediaAndEmail: Rate[] = [
  {
    title: 'Instagram Post',
    units: [
      {
        title: '1 post',
        price: '$50.00',
      },
      {
        title: '3+ posts',
        price: '$45.00',
      },
      {
        title: '6+ posts',
        price: '$40.00',
      },
    ],
    description: 'Our Instagram is a fantastic way to reach Princeton students and young alumni. All we need from you is your ad, your link, and a caption.',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/ig-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per post.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Facebook Post',
    units: [
      {
        title: '1 post',
        price: '$50.00',
      },
      {
        title: '3+ posts',
        price: '$45.00',
      },
      {
        title: '6+ posts',
        price: '$40.00',
      },
    ],
    description: 'With an average reach of 2000 users and a 10% average click rate, our sponsored Facebook posts offer a premium high-engagement opportunity. All we need from you is your ad, your link, and a caption.',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/facebook-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per post.',
      'We only post every other day if you purchase multiple posts.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Twitter Post',
    units: [
      {
        title: '1 post',
        price: '$50.00',
      },
      {
        title: '3+ posts',
        price: '$45.00',
      },
      {
        title: '6+ posts',
        price: '$40.00',
      },
    ],
    description: 'Leverage our 15,000 Twitter followers. All we need from you is your ad, your link, and a caption.',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per post.',
      'We only post every other day if you purchase multiple posts.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Instagram Story',
    units: [
      {
        title: '1 post',
        price: '$35.00',
      },
      {
        title: '3+ posts',
        price: '$31.50',
      },
      {
        title: '6+ posts',
        price: '$28.00',
      },
    ],
    description: 'Our Instagram is a fantastic way to reach Princeton students and young alumni. All we need from you is your ad, your link, and a caption.',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/ig-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per post.',
      'We only post every other day if you purchase multiple posts.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Instagram Reel',
    units: [
      {
        title: '1 post',
        price: '$50.00',
      },
      {
        title: '3+ posts',
        price: '$45.00',
      },
      {
        title: '6+ posts',
        price: '$40.00',
      },
    ],
    description: 'Our Instagram is a fantastic way to reach Princeton students and young alumni. All we need from you is your ad, your link, and a caption.',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/ig-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per post.',
      'We only post every other day if you purchase multiple posts.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Email Newsletter',
    units: [
      {
        title: '1 email',
        price: '$50.00',
      },
      {
        title: '5+ emails',
        price: '$45.00',
      },
      {
        title: '10+ emails',
        price: '$40.00',
      },
    ],
    description: 'With a 9.6% click rate, our readers engage with our newsletter at more than double the industry average. Email newsletters come out every weekday when school is in session and once per week when school is out of session. Our subscribers are mostly students, parents, faculty, alumni, and local Princeton residents; feel free to contact us for more details regarding our subscriber demographics.',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per email.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'TikTok Video',
    units: [
      {
        title: '1 post',
        price: '$50.00',
      },
      {
        title: '3+ posts',
        price: '$45.00',
      },
      {
        title: '6+ posts',
        price: '$40.00',
      },
    ],
    description: '...',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per post.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Media,
  },
];

const localWebApps: Rate[] = [
  {
    title: 'Crossword',
    units: [
      {
        title: '1 week',
        price: '$75.00',
      },
      {
        title: '3+ weeks',
        price: '$60.00',
      },
    ],
    description: 'crossword.dailyprincetonian.com',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-leaderboard.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per week.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Campus',
    units: [
      {
        title: 'Exclusive',
        price: '$350.00',
      },
      {
        title: 'Shared',
        price: '$200.00',
      },
    ],
    description: 'campus.dailyprincetonian.com',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'New product, prices to vary monthly.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Sponsored Article',
    units: [
      {
        title: '1 Week',
        price: '$125.00',
      },
      {
        title: '2+ Weeks',
        price: '$112.50',
      },
      {
        title: '4+ Weeks',
        price: '$100.00',
      },
    ],
    description: '',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-leaderboard.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per week.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'YouTube Ad',
    units: [
      {
        title: '1 Video',
        price: '$20.00',
      },
      {
        title: '2+ Videos',
        price: '$18.00',
      },
      {
        title: '4+ Videos',
        price: '$16.00',
      },
    ],
    description: '',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per video.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
  {
    title: 'Podcast Ad',
    units: [
      {
        title: '1 Podcast',
        price: '$10.00',
      },
      {
        title: '2+ Podcasts',
        price: '$9.00',
      },
      {
        title: '4+ Podcasts',
        price: '$8.00',
      },
    ],
    description: '',
    image_url: 'https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png',
    image_alt: 'email headline preview',
    notes: [
      'Prices listed per podcast.',
    ],
    cpm: undefined,
    color_premium: undefined,
    design: Design.Graphic,
  },
];

const localAdvertiser: Advertiser = [
  {
    title: 'Weekly Print - Runs Friday Mornings',
    rates: localWeeklyPrint,
  },
  {
    title: 'Website - www.dailyprincetonian.com',
    rates: localWebsite,
  },
  {
    title: 'Social Media and Email Newsletter',
    rates: localSocialMediaAndEmail,
  },
  {
    title: 'High Engagement Web Apps',
    rates: localWebApps,
  },
];

export default localAdvertiser;
