import { IconGitHub, IconLinkedIn, IconMenu, IconMoon, IconSun } from './Icons';

import { Select } from './Select';
import styled from 'styled-components';
import useTheme from '@/hooks/useTheme';

const iconSize = '24px';

const StyledWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 48px;
	background-color: #333333;
	color: #5e5c5c;
`;

const ActionsWrapper = styled.ul`
	display: inline-block;
`;

const Action = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 48px;
	width: 48px;
	cursor: pointer;
	${({ active }) =>
		active &&
		`
			color: #D9D9D9;
			border-left: 2px solid #D9D9D9;
		`}
`;

const MenuAction = styled(Action)`
	@media (min-width: 768px) {
		pointer-events: none;
	}
`;

export const ActivityBar = ({ isNavigationOpen, OnClick }) => {
	const { theme, setTheme } = useTheme();

	const themeIcon =
		theme === 'dark' ? (
			<IconSun size={iconSize} />
		) : (
			<IconMoon size={iconSize} />
		);

	const setApplicationTheme = () => {
		const isDarkTheme = theme === 'dark';

		isDarkTheme ? setTheme('light') : setTheme('dark');
	};

	return (
		<StyledWrapper>
			<ActionsWrapper>
				<MenuAction active={isNavigationOpen} as='button' onClick={OnClick}>
					<IconMenu size={iconSize} />
				</MenuAction>

				<Action target='_blank' href='https://github.com/DavidMunozvi'>
					<IconGitHub size={iconSize} />
				</Action>

				<Action
					target='_blank'
					href='https://www.linkedin.com/in/davidmu%C3%B1ozviejo/'
				>
					<IconLinkedIn size={iconSize} />
				</Action>
			</ActionsWrapper>

			<ActionsWrapper>
				<Action as='div'>
					<Select options={['EN', 'ES']} />
				</Action>

				<Action as='button' onClick={setApplicationTheme}>
					{themeIcon}
				</Action>
			</ActionsWrapper>
		</StyledWrapper>
	);
};
