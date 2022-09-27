import { GlobalStyle, Theme } from '@/themes';

import { GlobalProvider } from '@/context/GlobalState';
import { MainLayout } from '@/components/MainLayout';
import Router from './Router';

function App() {
	return (
		<GlobalProvider>
			<Theme>
				<GlobalStyle />
				<MainLayout>
					<Router />
				</MainLayout>
			</Theme>
		</GlobalProvider>
	);
}

export default App;
