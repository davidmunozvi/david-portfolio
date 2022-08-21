import { GlobalStyle, Theme } from '@/themes';

import { ActionsLayout } from '@/components/ActionsLayout';
import { GlobalProvider } from '@/context/GlobalState';
import Router from './Router';

function App() {
	return (
		<GlobalProvider>
			<Theme>
				<GlobalStyle />
				<ActionsLayout>
					<Router />
				</ActionsLayout>
			</Theme>
		</GlobalProvider>
	);
}

export default App;
