type State = { slide: number; min: number; max: number };

type Props = {
  getPadding: () => number;
  getMargin: () => number;
  getWrapperWidth: () => number;
  getContainerWidth: () => number;
  getMaxStepsValue: () => number;
  getElementToObserveResize: () => Element;
  onOffsetChange: (options: { newOffset: number }) => void;
  onSlideChange: (options: { isFirst: boolean; isLast: boolean }) => void;
};

export default class SliderService {
  private readonly state: State = {
    slide: 0,
    min: 0,
    max: this.props.getMaxStepsValue(),
  };

  constructor(private readonly props: Props) {
    this.initResizeObserver();
    this.handleSlideChange();
  }

  public prev = () => {
    this.state.slide = Math.max(this.state.slide - 1, this.state.min);
    this.handleOffsetChange();
    this.handleSlideChange();
  };

  public next = () => {
    this.state.slide = Math.min(this.state.slide + 1, this.state.max);
    this.handleOffsetChange();
    this.handleSlideChange();
  };

  private getCurrentOffset() {
    const padding = this.props.getPadding();
    const margin = this.props.getMargin();

    const wrapperWidth = this.props.getWrapperWidth();
    const containerWidth = this.props.getContainerWidth();

    const currentSlideNumber = this.state.slide;

    const maxSteps = this.props.getMaxStepsValue();

    return (currentSlideNumber * (containerWidth - (wrapperWidth - (padding + margin)))) / maxSteps;
  }

  private handleOffsetChange() {
    this.props.onOffsetChange({ newOffset: -this.getCurrentOffset() });
  }

  private handleSlideChange() {
    this.props.onSlideChange({
      isFirst: this.state.slide <= this.state.min,
      isLast: this.state.slide >= this.state.max,
    });
  }

  private handleStateReset({ currentMax, expectedMax }: { currentMax: number; expectedMax: number }) {
    this.state.slide = Math.round((this.state.slide / currentMax) * expectedMax);
    this.state.max = expectedMax;
  }

  private initResizeObserver() {
    new ResizeObserver((entries) => {
      entries.forEach(() => {
        const currentMax = this.state.max;
        const expectedMax = this.props.getMaxStepsValue();

        if (currentMax !== expectedMax) {
          this.handleStateReset({ currentMax, expectedMax });
          this.handleSlideChange();
        }

        this.handleOffsetChange();
      });
    }).observe(this.props.getElementToObserveResize());
  }
}
