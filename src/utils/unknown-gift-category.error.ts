export default class UnknownGiftCategoryError extends Error {
  constructor(category: string) {
    super(`unknown gift card category: ${category}`);
  }
}
