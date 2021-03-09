import styled from 'styled-components';
import Slide from './Slide';
import { rem } from '../../utils/mixins';

export const PlayPauseBtn = styled.button`
	padding: 0;
	border: 0;
  background: transparent;
  width: 0;
  height: ${rem(18)};

  border-color: transparent transparent transparent white;
  transition: 100ms all ease;
	cursor: pointer;
	appearance: none;
	border-radius: 0;
	display: flex;
	margin-left: auto;
	margin-right: ${rem(18)};

	/* pause state */
	border-style: double;
	border-width: 0 0 0 ${rem(18)};

  &.button-play {
    border-style: solid;
  	border-width: ${rem(9)} 0 ${rem(9)} ${rem(18)};
	}

	&:hover {
    border-color: transparent transparent transparent var(--hover-rgba);
  }
`;

export const ButtonBullet = styled.button`
	margin: 0;
	padding: 0;
	background-color: whitesmoke;
	border: 0;
	cursor: pointer;
	appearance: none;
	border-radius: 100%;
	width: ${rem(20)};
	height: ${rem(20)};
	transition: background-color .3s ease-in-out;

	/* hide text */
	font: 0/0 a;
  text-shadow: none;
	color: transparent;

	&:hover {
		background-color: var(--hover-rgba);
	}
`;

export const SliderSlideNav = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	text-align: center;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20px, auto));
	grid-gap: 8px;
	justify-content: center;
	justify-items: center;

	> li {
		&.is-active {
			button {
				background-color: black;
			}
		}
	}
`;

export const SliderNavContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding-bottom: ${rem(5)};
`;

export const Button = styled.button`
	margin: 0;
	background-color: whitesmoke;
	border: none;
	cursor: pointer;
	appearance: none;
	border-radius: 0;
	font-family: 'Roboto', sans-serif;
	font-size: ${rem(18)};
  font-weight: bold;
	color: black;

	&.button-prev, &.button-next {
		position: absolute;
		top: 50%;
		z-index: 1;
	}

	&.button-prev {
		left: 0;
	}

	&.button-next {
		right: 0;
	}

	&:hover {
		background-color: var(--hover-rgba);
	}
`;

export const SliderControls = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const StyledSlide = styled(Slide)`
	flex-shrink: 0;
  flex-basis: 100%;
	position: relative;
	display: grid;
	align-content: center;
	justify-content: center;
	opacity: 0;
	backface-visibility: hidden;

	&.is-active {
		transition: opacity 0.8s cubic-bezier(0.420, 0.000, 0.580, 1.000);
		opacity: 1;
	}
`;

export const Slides = styled.ul`
	position: relative;
	width: 100%;
	overflow: hidden;
	z-index: 0;
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;

  &.slider-animate {
    transition: ${(props) => props.theme.transition.transform};
  }
`;

export const SliderContainer = styled.section`
	position: relative;
`;
