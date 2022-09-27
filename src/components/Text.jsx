import React from 'react';
import styled from 'styled-components';
const StyledText = styled.p`
	color: ${({ theme }) => theme.colors.textSecondary};
	span {
		color: ${({ theme }) => theme.colors.textActive};
	}
	${({ tag }) =>
		tag.startsWith('h') &&
		`
			font-size: 42px;
			font-weight: bold;
	`}

	&:before {
		display: block;
		font-size: 14px;
		margin-left: -14px;
		color: ${({ theme }) => theme.colors.textInactive};
		font-family: ${({ theme }) => theme.fontFamily[1]};
		content: '<${({ tag }) => tag}>';
	}

	&:after {
		display: block;
		font-size: 14px;
		margin-left: -14px;
		color: ${({ theme }) => theme.colors.textInactive};
		font-family: ${({ theme }) => theme.fontFamily[1]};
		content: '</${({ tag }) => tag}>';
	}
`;

export const Text = ({ children, tag = 'p' }) => {
	return (
		<StyledText as={tag} tag={tag}>
			{children}
		</StyledText>
	);
};
