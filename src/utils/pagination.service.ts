export default class PaginationService {
  constructor(private state: { page: number; min: number; max: number }) {
    if (state.page < state.min || state.page > state.max) {
      throw new Error(`page must be between ${state.min} and ${state.max}`);
    }
  }

  public getPage() {
    return this.state.page;
  }

  public getMax() {
    return this.state.max;
  }

  public reset(newState: { page: number; min: number; max: number }) {
    this.state = newState;
  }

  public prev() {
    this.state.page = Math.max(this.state.page - 1, this.state.min);
  }

  public next() {
    this.state.page = Math.min(this.state.page + 1, this.state.max);
  }

  public isFirst() {
    return this.state.page <= this.state.min;
  }

  public isLast() {
    return this.state.page >= this.state.max;
  }
}
