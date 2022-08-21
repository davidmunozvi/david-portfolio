import { Route, Routes } from 'react-router-dom';

import ROUTES from './routes';
import { render } from 'react-dom';

export default function () {
	return (
		<Routes>
			{ROUTES.map(({ path, component, key }) => {
				return <Route key={key} path={path} element={component} />;
			})}
			<Route component={() => render(<div>Not Found!</div>)} />
		</Routes>
	);
}
