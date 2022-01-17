from dataclasses import dataclass

@dataclass
class AdditionalFees:
    color_premium_large: int
    color_premium_small: int
    color_premium_medium: int
    graphic: int
    media: int