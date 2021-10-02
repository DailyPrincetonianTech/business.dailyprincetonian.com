import { ColorPremium } from "../types/colorPremium";
import { Design } from "../types/design";
import { Rate } from "../types/rate";
import { Advertiser } from "../types/advertiser";

const localWeeklyPrint: Rate[] = [
    {
        title: "Full Page",
        units: [
            {
                title: "1 Issue",
                price: "$635.00",
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
                price: "$385.00",
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
                price: "$265.00",
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
        description: "",
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
        description: "",
        image_url: "",
        notes: [],
        cpm: undefined,
        color_premium: undefined,
        design: undefined,
    },
];

const localWebsite: Rate[] = [
    {
        title: "Billboard",
        units: [
            {
                title: "1-4 days",
                price: "$50.00",
            },
            {
                title: "5+ days",
                price: "$45.00",
            },
            {
                title: "30+ days",
                price: "$40.00",
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
                price: "$60.00",
            },
            {
                title: "5+ days",
                price: "$54.00",
            },
            {
                title: "30+ days",
                price: "$48.00",
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
                price: "$60.00",
            },
            {
                title: "5+ days",
                price: "$54.00",
            },
            {
                title: "30+ days",
                price: "$48.00",
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

const localSocialMediaAndEmail: Rate[] = [
    {
        title: "Instagram Post",
        units: [
            {
                title: "1 post",
                price: "$50.00",
            },
            {
                title: "3+ posts",
                price: "$45.00",
            },
            {
                title: "6+ posts",
                price: "$40.00",
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
                price: "$50.00",
            },
            {
                title: "3+ posts",
                price: "$45.00",
            },
            {
                title: "6+ posts",
                price: "$40.00",
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
                price: "$50.00",
            },
            {
                title: "3+ posts",
                price: "$45.00",
            },
            {
                title: "6+ posts",
                price: "$40.00",
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
                price: "$35.00",
            },
            {
                title: "3+ posts",
                price: "$31.50",
            },
            {
                title: "6+ posts",
                price: "$28.00",
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
                price: "$50.00",
            },
            {
                title: "3+ posts",
                price: "$45.00",
            },
            {
                title: "6+ posts",
                price: "$40.00",
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
                price: "$50.00",
            },
            {
                title: "5+ emails",
                price: "$45.00",
            },
            {
                title: "10+ emails",
                price: "$40.00",
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
                price: "$50.00",
            },
            {
                title: "3+ posts",
                price: "$45.00",
            },
            {
                title: "6+ posts",
                price: "$40.00",
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

const localWebApps: Rate[] = [
    {
        title: "Crossword",
        units: [
            {
                title: "1 week",
                price: "$75.00",
            },
            {
                title: "3+ weeks",
                price: "$60.00",
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
                title: "Exclusive",
                price: "$350.00",
            },
            {
                title: "Shared",
                price: "$200.00",
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
    {
        title: "Sponsored Article",
        units: [
            {
                title: "1 Week",
                price: "$125.00",
            },
            {
                title: "2+ Weeks",
                price: "$112.50",
            },
            {
                title: "4+ Weeks",
                price: "$100.00",
            }
        ],
        description: "",
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
                title: "1 Video",
                price: "$20.00",
            },
            {
                title: "2+ Videos",
                price: "$18.00",
            },
            {
                title: "4+ Videos",
                price: "$16.00",
            }
        ],
        description: "",
        image_url: "",
        notes: [
            "prices listed per video"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    },
    {
        title: "Podcast Ad",
        units: [
            {
                title: "1 Podcast",
                price: "$10.00",
            },
            {
                title: "2+ Podcasts",
                price: "$9.00",
            },
            {
                title: "4+ Podcasts",
                price: "$8.00",
            }
        ],
        description: "",
        image_url: "",
        notes: [
            "prices listed per podcast"
        ],
        cpm: undefined,
        color_premium: undefined,
        design: Design.Graphic,
    }
];

const localAdvertiser: Advertiser = [
    {
        title: "Weekly Print - Runs Friday Mornings",
        rates: localWeeklyPrint,
    },
    {
        title: "Website - www.dailyprincetonian.com",
        rates: localWebsite,
    },
    {
        title: "Social Media and Email Newsletter",
        rates: localSocialMediaAndEmail,
    },
    {
        title: "High Engagement Web Apps",
        rates: localWebApps,
    },
];

export default localAdvertiser;
