enum ColorPremium {
    small,
    medium,
    large,
}

enum Design {
    graphic,
    media,
}

type Unit = {
    title: string;
    price: string;
}

type Rate = {
    title: string;
    units: Unit[];
    description: string;
    image_url: string;
    note: string[];
    cpm?: string;
    color_premium?: ColorPremium;
    design?: Design;
};

type Rates = Array<Rate>;