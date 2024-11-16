import type { GiftCardData, GiftCategory, Superpowers, SuperpowerValue } from '../models/gift-data.type';
import GIFTS_DATA from '~/assets/json/gifts.json';

function isGiftCategory(value: unknown): value is GiftCategory {
  return typeof value === 'string' && ['For Harmony', 'For Health', 'For Work'].includes(value);
}

function isSuperpowerValue(value: unknown): value is SuperpowerValue {
  return typeof value === 'string' && ['+100', '+200', '+300', '+400', '+500'].includes(value);
}

function isSuperpowers(value: unknown): value is Superpowers {
  return (
    typeof value === 'object' &&
    value !== null &&
    'live' in value &&
    isSuperpowerValue(value.live) &&
    'create' in value &&
    isSuperpowerValue(value.create) &&
    'love' in value &&
    isSuperpowerValue(value.love) &&
    'dream' in value &&
    isSuperpowerValue(value.dream)
  );
}

function isGiftCardData(value: unknown): value is GiftCardData {
  return (
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    typeof value.name === 'string' &&
    'description' in value &&
    typeof value.description === 'string' &&
    'category' in value &&
    isGiftCategory(value.category) &&
    'superpowers' in value &&
    isSuperpowers(value.superpowers)
  );
}

function assertGiftsData(data: unknown): asserts data is GiftCardData[] {
  if (!Array.isArray(data) || !data.every(isGiftCardData)) {
    throw new Error('gifts data is not valid');
  }
}

export default function getGiftsData(): GiftCardData[] {
  assertGiftsData(GIFTS_DATA);

  return GIFTS_DATA;
}
