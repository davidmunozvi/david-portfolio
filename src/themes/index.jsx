import GlobalStyle from './global';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import breakpoints from './breakpoints';
import useTheme from '@/hooks/useTheme';

const themes = {
	default: {
		breakpoints,
		space: ['2px', '4px', '8px', '16px', '32px', '64px'],
		fontFamily: 'Open Sans, sans-serif',
		fontSizes: ['12px', '14px', '16px', '20px', '24px'],
	},
	light: {
		colors: {
			textPrimary: '#1F1F1F',
			textSecondary: '#949494',
			textTertiary: '#1F1F1F',
			textActive: '#61CEF3',
			textInactive: '#5E5C5C',
			bgPrimary: '#FAF7FF',
			bgSecondary: '#b5b5b5',
			bgTertiary: '#2D2D2D',
			bgActive: '#61CEF3',
		},
	},
	dark: {
		colors: {
			textPrimary: '#949494',
			textSecondary: '#FAF7FF',
			textTertiary: '#1F1F1F',
			textActive: '#61CEF3',
			textInactive: '#5E5C5C',
			bgPrimary: '#1F1F1F',
			bgSecondary: '#333333',
			bgTertiary: '#2D2D2D',
			bgActive: '#61CEF3',
		},
	},
};

const createTheme = theme => ({
	...themes.default,
	...(theme && themes[theme]),
});

const Theme = ({ children }) => {
	const { theme } = useTheme();

	return <ThemeProvider theme={createTheme(theme)}>{children}</ThemeProvider>;
};
export { Theme, GlobalStyle };
