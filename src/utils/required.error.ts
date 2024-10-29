export default class RequiredError extends Error {
  constructor(item: string) {
    super(`${item} is required`);
  }
}
