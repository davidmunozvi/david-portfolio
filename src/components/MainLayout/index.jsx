import { ActivityBar } from './ActivityBar';
import { Background } from './Background';
import { Navigation } from './Navigation';
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
	position: relative;
	overflow-x: hidden;
	height: 100%;
	display: flex;
	justify-content: center;
`;

const StyledPage = styled.div`
	width: 1200px;
	padding: 100px 0;
`;

export const MainLayout = ({ children }) => {
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
					<Background />
					<StyledPage>{children}</StyledPage>
				</StyledPageContainer>
			</StyledContent>
		</StyledContainer>
	);
};
