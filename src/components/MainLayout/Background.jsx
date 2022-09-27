import { range } from '@/utils/Array';
import styled from 'styled-components';

const TAB_SIZE = 14;
const NUMBER_OF_LINES = 30;
const TAGS = [
	{ label: '<html>', index: 0, tabs: 1 },
	{ label: '</html>', index: NUMBER_OF_LINES - 2, tabs: 1 },
	{ label: '<body>', index: 1, tabs: 2 },
	{ label: '</body>', index: NUMBER_OF_LINES - 3, tabs: 2 },
];

const StyledTag = styled.span`
	margin-left: ${props => props.tabs * TAB_SIZE}px;
`;
const StyledTemplate = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	margin-left: ${TAB_SIZE}px;
	color: ${({ theme }) => theme.colors.textInactive};
	font-family: ${({ theme }) => theme.fontFamily[1]};
`;

const linesOfCode = range(1, NUMBER_OF_LINES).map((number, index) => {
	const tag = TAGS.find(tag => tag.index === index);

	return (
		<div key={index}>
			{number < 10 && <span>&nbsp;</span>}
			{number}
			{tag && <StyledTag tabs={tag.tabs}>{tag.label}</StyledTag>}
		</div>
	);
});

export const Background = () => {
	return <StyledTemplate>{linesOfCode}</StyledTemplate>;
};
