export type GiftCategory = 'For Harmony' | 'For Health' | 'For Work';

export type SuperpowerValue = '+100' | '+200' | '+300' | '+400' | '+500';

export type Superpowers = {
  live: SuperpowerValue;
  create: SuperpowerValue;
  love: SuperpowerValue;
  dream: SuperpowerValue;
};

export type GiftCardData = {
  name: string;
  description: string;
  category: GiftCategory;
  superpowers: Superpowers;
};
