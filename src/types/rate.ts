import { Unit } from "./unit";
import { ColorPremium } from "./colorPremium";
import { Design } from "./design";

export type Rate = {
  title: string;
  units: Unit[];
  description: string;
  image_url: string;
  image_alt: string;
  notes: string[];
  cpm?: string;
  color_premium?: ColorPremium;
  design?: Design;
};
