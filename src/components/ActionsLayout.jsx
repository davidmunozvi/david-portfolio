import { ActivityBar } from '@/components/ActivityBar';
import { Navigation } from '@/components/Navigation';
import styled from 'styled-components';
import useBreakpoints from '@/hooks/useBreakpoints';
import { useState } from 'react';

const StyledContainer = styled.div`
	display: flex;
	width: 100%;
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	overflow: auto;
`;

const StyledPageContainer = styled.main`
	overflow-x: hidden;
	height: 100%;
`;

export const ActionsLayout = ({ children }) => {
	const { isMobile } = useBreakpoints();
	const [isNavigationOpen, setIsNavigationOpen] = useState(false);
	const handleNav = value => {
		setIsNavigationOpen(value);
	};

	return (
		<StyledContainer>
			<ActivityBar
				isNavigationOpen={!isMobile || isNavigationOpen}
				OnClick={() => handleNav(!isNavigationOpen)}
			/>
			<StyledContent>
				<Navigation
					OnClose={() => handleNav(false)}
					isNavigationOpen={isNavigationOpen}
				/>
				<StyledPageContainer onClick={() => handleNav(false)}>
					{children}
				</StyledPageContainer>
			</StyledContent>
		</StyledContainer>
	);
};
