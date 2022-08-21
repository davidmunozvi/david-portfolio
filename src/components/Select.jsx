import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
	border: none;
	background-color: transparent;
	color: #5e5c5c;
	outline: none;
`;
export const Select = ({ placeholder, options, ...props }) => {
	return (
		<StyledSelect {...props}>
			{placeholder && (
				<option disabled value=''>
					{placeholder}
				</option>
			)}
			{options?.map((option, index) => (
				<option key={index} value={option.value || option}>
					{option.name || option}
				</option>
			))}
		</StyledSelect>
	);
};
