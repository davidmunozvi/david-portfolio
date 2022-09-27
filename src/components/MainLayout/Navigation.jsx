import { IconCode } from '@/components/icons';
import { NavLink } from 'react-router-dom';
import ROUTES from '@/router/routes';
import styled from 'styled-components';

const Nav = styled.nav`
	display: none;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 50%;
	background-color: rgb(37, 37, 38);
	position: absolute;
	top: 0;
	@media (min-width: 768px) {
		display: flex;
		position: sticky;
		flex-direction: row;
		width: 100%;
		height: 34px;
		gap: 1px;
	}
	${({ isOpen }) =>
		isOpen &&
		`
		display: flex;
	`};
`;

const FileIcon = styled(IconCode)`
	fill: #59c4e8;
	margin-right: 8px;
`;

const NavItem = styled(NavLink)`
	display: flex;
	align-items: center;
	width: 100%;
	height: 34px;
	cursor: pointer;
	padding-left: 8px;
	box-sizing: border-box; //TODO add in global styled-components styles
	color: #949494;

	&.active {
		color: #faf7ff;
		background-color: #0e70c060;
		border: 1px solid #3794ff;
		&:after {
			background-color: #faf7ff;
		}
	}
	@media (min-width: 768px) {
		&:after {
			content: '';
			display: block;
			border-radius: 100%;
			margin: 0 16px;
			width: 8px;
			height: 8px;
		}
		&.active {
			border: none;
			background-color: #1f1f1f;
		}
		width: auto;
	}
`;

const getItemName = name => `${name}.html`;

export const Navigation = ({ isNavigationOpen, OnClose }) => {
	return (
		<Nav isOpen={isNavigationOpen}>
			{ROUTES.map(({ name, key, path }) => (
				<NavItem onClick={() => OnClose()} key={key} to={path}>
					<FileIcon size='12px' />
					{getItemName(name)}
				</NavItem>
			))}
		</Nav>
	);
};
