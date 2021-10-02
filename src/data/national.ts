import { ColorPremium } from "../types/colorPremium";
import { Design } from "../types/design";
import { Rate } from "../types/rate";
import { Advertiser } from "../types/advertiser";

const nationalWeeklyPrint: Rate[] = [
    {
        title: "Full Page",
        units: [
            {
                title: "1 Issue",
                price: "$1950.00",
            }
        ],
        description: "(10 x 21 in.)",
        image_url: "",
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
                price: "$1190.00",
            }
        ],
        description: "(5 x 21 in.) or (10 x 10.5 in.)",
        image_url: "",
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
                price: "$790.00",
            }
        ],
        description: "(5 x10.5 in.) or (10 x 5.25 in.)",
        image_url: "",
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
        notes: [],
        cpm: undefined,
        color_premium: undefined,
        design: undefined,
    },
];

const nationalWebsite: Rate[] = [
    {
        title: "Billboard",
        units: [
            {
                title: "1-4 days",
                price: "$160.00",
            },
            {
                title: "5+ days",
                price: "$144.00",
            },
            {
                title: "30+ days",
                price: "$128.00",
            }
        ],
        description: "(1940x500), (Actual Size = 970x250)",
        image_url: "",
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
                price: "$190.00",
            },
            {
                title: "5+ days",
                price: "$171.00",
            },
            {
                title: "30+ days",
                price: "$152.00",
            }
        ],
        description: "(600x1200), (Actual Size = 300x600)",
        image_url: "",
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
                price: "$190.00",
            },
            {
                title: "5+ days",
                price: "$171.00",
            },
            {
                title: "30+ days",
                price: "$152.00",
            }
        ],
        description: "(600x500), (Actual Size = 300x250)",
        image_url: "",
        notes: [
            "prices listed per day"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
];

const nationalSocialMediaAndEmail: Rate[] = [
    {
        title: "Instagram Post",
        units: [
            {
                title: "1 post",
                price: "$170.00",
            },
            {
                title: "3+ posts",
                price: "$153.00",
            },
            {
                title: "6+ posts",
                price: "$136.00",
            }
        ],
        description: "",
        image_url: "",
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
                price: "$130.00",
            },
            {
                title: "3+ posts",
                price: "$117.00",
            },
            {
                title: "6+ posts",
                price: "$104.00",
            }
        ],
        description: "",
        image_url: "",
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
                price: "$170.00",
            },
            {
                title: "3+ posts",
                price: "$153.00",
            },
            {
                title: "6+ posts",
                price: "$136.00",
            }
        ],
        description: "",
        image_url: "",
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
                price: "$110.00",
            },
            {
                title: "3+ posts",
                price: "$99.00",
            },
            {
                title: "6+ posts",
                price: "$88.00",
            }
        ],
        description: "",
        image_url: "",
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
                price: "$170.00",
            },
            {
                title: "3+ posts",
                price: "$153.00",
            },
            {
                title: "6+ posts",
                price: "$136.00",
            }
        ],
        description: "",
        image_url: "",
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
                price: "$150.00",
            },
            {
                title: "5+ emails",
                price: "$136.00",
            },
            {
                title: "10+ emails",
                price: "$120.00",
            }
        ],
        description: "",
        image_url: "",
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
                price: "$120.00",
            },
            {
                title: "3+ posts",
                price: "$108.00",
            },
            {
                title: "6+ posts",
                price: "$96.00",
            }
        ],
        description: "",
        image_url: "",
        notes: [
            "prices listed per post"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Media,
    },
];

const nationalWebApps: Rate[] = [
    {
        title: "Crossword",
        units: [
            {
                title: "1 week",
                price: "$300.00",
            },
            {
                title: "3+ weeks",
                price: "$250.00",
            }
        ],
        description: "crossword.dailyprincetonian.com",
        image_url: "",
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
                title: "1 week",
                price: "$650.00",
            }
        ],
        description: "campus.dailyprincetonian.com",
        image_url: "",
        notes: [
            "new product, prices to vary monthly"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
];

const nationalSpecialty: Rate[] = [
    {
        title: "Sponsored Article",
        units: [
            {
                title: "1 week",
                price: "$500.00",
            },
            {
                title: "2+ weeks",
                price: "$450.00",
            },
            {
                title: "4+ weeks",
                price: "$400.00",
            },
        ],
        description: "sponsored.dailyprincetonian.com",
        image_url: "",
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
                price: "$60.00",
            },
            {
                title: "2+ videos",
                price: "$54.00",
            },
            {
                title: "4+ videos",
                price: "$48.00",
            },
        ],
        description: "",
        image_url: "",
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
                price: "$30.00",
            },
            {
                title: "2+ pocasts",
                price: "$27.00",
            },
            {
                title: "4+ pocasts",
                price: "$24.00",
            },
        ],
        description: "",
        image_url: "",
        notes: [
            "prices listed per podcast"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Media,
    },
];

const nationalAdvertiser: Advertiser = [
    {
        title: "Weekly Print - Runs Friday Mornings",
        rates: nationalWeeklyPrint,
    },
    {
        title: "Website - www.dailyprincetonian.com",
        rates: nationalWebsite,
    },
    {
        title: "Social Media and Email Newsletter",
        rates: nationalSocialMediaAndEmail,
    },
    {
        title: "High Engagement Web Apps",
        rates: nationalWebApps,
    },
    {
        title: "Specialty",
        rates: nationalSpecialty,
    },
];

export default nationalAdvertiser;