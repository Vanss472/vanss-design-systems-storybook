import styled from 'styled-components';
import { rem } from '../../utils/mixins';

export const NavLink = styled.a`
	display: inline-flex;
	width: 100%;
	text-decoration: none;
	color: ${(props) => props.theme.colors.text};
	font-size: ${rem(16)};
	padding: ${rem(12)};

	&:hover {
		text-decoration: underline;
	}
`;

export const Nav = styled.nav`
	position: absolute;
	top: ${({ open }) => (open ? '100%' : '0')};
	left: 0;
	width: 100%;
	transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
	transition: ${(props) => props.theme.transition.primary};
	background-color: ${(props) => props.theme.colors.primary};
	z-index: 99;

	ul {
		margin: 0;
		padding: 0;
		background-color: ${(props) => props.theme.colors.background};

		> li {
			border-bottom: 1px solid ${(props) => props.theme.border.borderColor};
		}
	}
`;

export const MobileButton = styled.button`
	display: inline-flex;
	align-items: center;
  color: ${(props) => props.theme.colors.text};
  font-size: ${rem(16)};
  margin: 0;
	padding: 0.625rem 0.75rem;
	background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.border.borderColor};
	border-radius: ${(props) => props.theme.border.borderRadius};
	cursor: pointer;

	svg {
		width: 1.25rem;
		height: 1.25rem;
    fill: ${(props) => props.theme.border.borderColor};

		.svg-menu-toggle {
			.line {
				opacity: 1;
				transform: rotate(0) translateY(0) translateX(0);
				transform-origin: 0.875rem 0.875rem;
				transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
			}
			.line-1 {
				transform-origin: 0.875rem 2.1875rem;
			}
			.line-3 {
				transform-origin: 0.875rem 3.9375rem;
			}
		}
	}

	&[aria-expanded="true"] {
		.svg-menu-toggle {
			.line-1 {
				transform: rotate(45deg) translateY(0) translateX(0);
			}
			.line-2 {
				opacity: 0;
			}
			.line-3 {
				transform: rotate(-45deg) translateY(0) translateX(0);
			}
		}
	}
`;

export const MobileNavWrapper = styled.section`
	position: relative;
	z-index: 100;
	background-color: ${(props) => props.theme.colors.primary};
	padding: 0 1.25rem;
	display: flex;
	align-items: center;
	height: 3.75rem;
`;

export const Header = styled.header`
	position: relative;
`;
