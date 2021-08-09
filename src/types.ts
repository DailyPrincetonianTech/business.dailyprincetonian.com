export enum ColorPremium {
  Small,
  Medium,
  Large,
}

export enum Design {
  Graphic,
  Media,
}

export type Unit = {
  title: string;
  price: string;
};

export type Rate = {
  title: string;
  units: Unit[];
  description: string;
  image_url: string;
  note: string[];
  cpm?: string;
  color_premium?: ColorPremium;
  design?: Design;
};

export type Rates = Array<Rate>;
