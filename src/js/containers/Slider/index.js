import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import data from './data.json';
import {
  SliderContainer, Slides, StyledSlide, SliderControls, Button, SliderNavContainer, SliderSlideNav, ButtonBullet, PlayPauseBtn,
} from './styled';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: data.sliderImg,
      active: 'is-active',
      currentIndex: 0,
      isPause: false,
      announceItem: false,
    };

    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.paginationBullet = this.paginationBullet.bind(this);
    this.stopAutoPlay = this.stopAutoPlay.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  componentDidMount() {
    const { autoPlay } = this.props;
    if (autoPlay) {
      console.log('autoplay init');
      this.setAutoPlay();
    }
  }

  setAutoPlay() {
    const { autoPlay } = this.props;
    const { slides } = this.state;

    clearInterval(this.autoplay);
    this.autoplay = setInterval(() => {
      // go to Next slide without announcement ON
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex === slides.length - 1 ? 0 : prevState.currentIndex + 1,
        announceItem: false,
      }));
    }, autoPlay);
  }

  stopAutoPlay(e) {
    const { isPause } = this.state;

    this.setState((prevState) => ({
      isPause: !prevState.isPause,
    }));

    if (isPause) {
      e.target.focus();
      this.setAutoPlay();
    } else {
      e.target.focus();
      clearInterval(this.autoplay);
    }
  }

  // When the mouse enters the carousel, suspend the animation.
  onMouseEnterHandler() {
    clearInterval(this.autoplay);
  }

  // When the mouse leaves the carousel, and the animation is suspended, start the animation.
  onMouseLeaveHandler() {
    const { autoPlay } = this.props;
    const { isPause } = this.state;

    if (isPause || !autoPlay) {
      clearInterval(this.autoplay);
    } else {
      this.setAutoPlay();
    }
  }

  goToPrev() {
    const { slides } = this.state;

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex === 0 ? slides.length - 1 : prevState.currentIndex - 1,
      announceItem: true,
    }));
  }

  goToNext() {
    const { slides } = this.state;

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex === slides.length - 1 ? 0 : prevState.currentIndex + 1,
      announceItem: true,
    }));
  }

  paginationBullet(event) {
    this.setState({
      currentIndex: parseInt(event.target.children[1].textContent) - 1,
    });
  }

  render() {
    const { ariaLabel, autoPlay } = this.props;
    const {
      slides, currentIndex, active, announceItem, isPause,
    } = this.state;

    const slideItem = slides.map((slide, index) => (
      <StyledSlide
        key={slide.id}
        order={index === currentIndex ? ((index + 1) % (currentIndex + 1)) : (((((index + 1) - (currentIndex + 1)) % slides.length) + slides.length) % slides.length)}
        current={index === currentIndex ? active : ''}
        ariaHidden={index === currentIndex ? 'false' : 'true'}
        imagePath={slide.image}
        srcSet1280={slide.srcSet.srcSet1280}
        srcSet1024={slide.srcSet.srcSet1024}
        srcSet768={slide.srcSet.srcSet768}
        altText={slide.alt}
      />
    ));

    const sliderPagination = slides.map((slide, index) => (
      <li key={slide.id} className={index === currentIndex ? active : ''}>
        <ButtonBullet type="button" onClick={this.paginationBullet}>
          <span className="visually-hidden">Feature Image</span>
          <span className="slide-id">{slide.id}</span>
          { (index === currentIndex) ? <span className="visually-hidden">(Current Item)</span> : ''}
        </ButtonBullet>
      </li>
    ));

    return (
      <SliderContainer aria-label={ariaLabel} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
        <Slides>
          {slideItem}
        </Slides>
        <SliderControls>
          <li><Button type="button" onClick={this.goToPrev} className="button button-prev goToPrev" aria-label="Previous Item">&#10229;</Button></li>
          <li><Button type="button" onClick={this.goToNext} className="button button-next goToNext" aria-label="Next Item">&#10230;</Button></li>
        </SliderControls>
        <SliderNavContainer>
          <SliderSlideNav>
            {sliderPagination}
          </SliderSlideNav>
          {
						autoPlay
						  ? (
              <PlayPauseBtn type="button" onClick={this.stopAutoPlay} className={`button ${isPause ? 'button-play' : 'button-pause'}`}>
                <span className="visually-hidden">
                  {isPause ? 'Play' : 'Pause'}
                  Animation
                </span>
              </PlayPauseBtn>
						  ) : null
					}
        </SliderNavContainer>
        <div aria-live="polite" aria-atomic="true" className="liveregion visually-hidden">
          { announceItem === true ? `Item ${currentIndex + 1} of ${slides.length}` : '' }
        </div>

      </SliderContainer>
    );
  }
}

Slider.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  autoPlay: PropTypes.number,
};

Slider.defaultProps = {
  autoPlay: 0,
};

export default Slider;
