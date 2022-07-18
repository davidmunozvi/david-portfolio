import { IconColorMode, IconGitHub, IconLinkedIn, IconMenu } from './Icons';

import { Select } from './Select';
import styled from 'styled-components';

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

export const ActivityBar = ({ isNavigationOpen = true, OnClick }) => {
	return (
		<StyledWrapper>
			<ActionsWrapper>
				<Action active={isNavigationOpen} as='button' onClick={OnClick}>
					<IconMenu size='24px' />
				</Action>

				<Action target='_blank' href='https://github.com/DavidMunozvi'>
					<IconGitHub size='24px' />
				</Action>

				<Action
					target='_blank'
					href='https://www.linkedin.com/in/davidmu%C3%B1ozviejo/'
				>
					<IconLinkedIn size='24px' />
				</Action>
			</ActionsWrapper>

			<ActionsWrapper>
				<Action as='div'>
					<Select options={['EN', 'ES']} />
				</Action>

				<Action>
					<IconColorMode size='24px' />
				</Action>
			</ActionsWrapper>
		</StyledWrapper>
	);
};
