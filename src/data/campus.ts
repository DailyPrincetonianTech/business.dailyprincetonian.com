import { ColorPremium } from "../types/colorPremium";
import { Design } from "../types/design";
import { Rate } from "../types/rate";
import { Advertiser } from "../types/advertiser";

const campusWeeklyPrint: Rate[] = [
    {
        title: "Full Page",
        units: [
            {
                title: "1 Issue",
                price: "$975.00",
            }
        ],
        description: "(10 x 21 in.)",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/full.png",
        image_alt: "email headline preview",
        notes: [],
        cpm: undefined,
        color_premium: ColorPremium.Large,
        design: Design.Graphic,
    },
    {
        title: "Half Page",
        units: [
            {
                title: "1 Issue",
                price: "$595.00",
            }
        ],
        description: "(5 x 21 in.) or (10 x 10.5 in.)",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/half.png",
        image_alt: "email headline preview",
        notes: [],
        cpm: undefined,
        color_premium: ColorPremium.Large,
        design: Design.Graphic,
    },
    {
        title: "Quarter Page",
        units: [
            {
                title: "1 Issue",
                price: "$395.00",
            }
        ],
        description: "(5 x10.5 in.) or (10 x 5.25 in.)",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/quarter.png",
        image_alt: "email headline preview",
        notes: [],
        cpm: undefined,
        color_premium: ColorPremium.Medium,
        design: Design.Graphic,
    },
    {
        title: "Inside Front Cover",
        units: [
            {
                title: "1 Issue",
                price: "1.25 x Ad Size Price",
            }
        ],
        description: "TODO",
        image_url: "",
        image_alt: "email headline preview",
        notes: [],
        cpm: undefined,
        color_premium: undefined,
        design: undefined,
    },
    {
        title: "Back Cover",
        units: [
            {
                title: "1 Issue",
                price: "1.25 x Ad Size Price",
            }
        ],
        description: "TODO",
        image_url: "",
        image_alt: "email headline preview",
        notes: [],
        cpm: undefined,
        color_premium: undefined,
        design: undefined,
    },
];

const campusWebsite: Rate[] = [
    {
        title: "Billboard",
        units: [
            {
                title: "1-4 days",
                price: "$80.00",
            },
            {
                title: "5+ days",
                price: "$72.00",
            },
            {
                title: "30+ days",
                price: "$64.00",
            }
        ],
        description: "(1940x500), (Actual Size = 970x250)",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-leaderboard.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per day"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Skyscraper",
        units: [
            {
                title: "1-4 days",
                price: "$95.00",
            },
            {
                title: "5+ days",
                price: "$85.00",
            },
            {
                title: "30+ days",
                price: "$76.00",
            }
        ],
        description: "(600x1200), (Actual Size = 300x600)",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-skyscraper.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per day"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Box",
        units: [
            {
                title: "1-4 days",
                price: "$95.00",
            },
            {
                title: "5+ days",
                price: "$85.00",
            },
            {
                title: "30+ days",
                price: "$76.00",
            }
        ],
        description: "(600x500), (Actual Size = 300x250)",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-block.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per day"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
];

const campusSocialMediaAndEmail: Rate[] = [
    {
        title: "Instagram Post",
        units: [
            {
                title: "1 post",
                price: "$145.00",
            },
            {
                title: "3+ posts",
                price: "$130.00",
            },
            {
                title: "6+ posts",
                price: "$116.00",
            }
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/ig-preview.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per post"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Facebook Post",
        units: [
            {
                title: "1 post",
                price: "$65.00",
            },
            {
                title: "3+ posts",
                price: "$58.00",
            },
            {
                title: "6+ posts",
                price: "$52.00",
            }
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/facebook-preview.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per post"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Twitter Post",
        units: [
            {
                title: "1 post",
                price: "$85.00",
            },
            {
                title: "3+ posts",
                price: "$76.00",
            },
            {
                title: "6+ posts",
                price: "$68.00",
            }
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per post"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Instagram Story",
        units: [
            {
                title: "1 post",
                price: "$55.00",
            },
            {
                title: "3+ posts",
                price: "$49.00",
            },
            {
                title: "6+ posts",
                price: "$44.00",
            }
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/ig-preview.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per post"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Instagram Reel",
        units: [
            {
                title: "1 post",
                price: "$85.00",
            },
            {
                title: "3+ posts",
                price: "$76.00",
            },
            {
                title: "6+ posts",
                price: "$68.00",
            }
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/ig-preview.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per post"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Email Newsletter",
        units: [
            {
                title: "1 email",
                price: "$75.00",
            },
            {
                title: "5+ emails",
                price: "$68.00",
            },
            {
                title: "10+ emails",
                price: "$60.00",
            }
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per email"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "TikTok Video",
        units: [
            {
                title: "1 post",
                price: "$65.00",
            },
            {
                title: "3+ posts",
                price: "$58.50",
            },
            {
                title: "6+ posts",
                price: "$52.00",
            }
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per post"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Media,
    },
];

const campusWebApps: Rate[] = [
    {
        title: "Crossword",
        units: [
            {
                title: "1 week",
                price: "$150.00",
            },
            {
                title: "3+ weeks",
                price: "$125.00",
            }
        ],
        description: "crossword.dailyprincetonian.com",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-leaderboard.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per week"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Campus",
        units: [
            {
                title: "Exclusive",
                price: "$600.00",
            }
            ,{
                title: "Shared",
                price: "$350.00",
            }
        ],
        description: "campus.dailyprincetonian.com",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png",
        image_alt: "email headline preview",
        notes: [
            "new product, prices to vary monthly"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
];

const campusSpecialty: Rate[] = [
    {
        title: "Sponsored Article",
        units: [
            {
                title: "1 week",
                price: "$250.00",
            },
            {
                title: "2+ weeks",
                price: "$225.00",
            },
            {
                title: "4+ weeks",
                price: "$200.00",
            },
        ],
        description: "sponsored.dailyprincetonian.com",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/web-leaderboard.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per week"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "YouTube Ad",
        units: [
            {
                title: "1 video",
                price: "$30.00",
            },
            {
                title: "2+ videos",
                price: "$27.00",
            },
            {
                title: "4+ videos",
                price: "$24.00",
            },
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png",
        image_alt: "email headline preview",
        notes: [
            "prices listed per video"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Media,
    },
    {
        title: "Podcast Ad",
        units: [
            {
                title: "1 pocast",
                price: "$15.00",
            },
            {
                title: "2+ pocasts",
                price: "$13.00",
            },
            {
                title: "4+ pocasts",
                price: "$12.00",
            },
        ],
        description: "",
        image_url: "https://assets.dailyprincetonian.com/business.dailyprincetonian.com/twitter-preview.png",
        image_alt: "email headline preview",
        
        notes: [
            "prices listed per podcast"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Media,
    },
];

const campusAdvertiser: Advertiser = [
    {
        title: "Weekly Print - Runs Friday Mornings",
        rates: campusWeeklyPrint,
    },
    {
        title: "Website - www.dailyprincetonian.com",
        rates: campusWebsite,
    },
    {
        title: "Social Media and Email Newsletter",
        rates: campusSocialMediaAndEmail,
    },
    {
        title: "High Engagement Web Apps",
        rates: campusWebApps,
    },
    {
        title: "Specialty",
        rates: campusSpecialty,
    },
];

export default campusAdvertiser;