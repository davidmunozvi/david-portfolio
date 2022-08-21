import { About } from '@/Views/About';
import { Home } from '@/Views/Home';

const ROUTES = [
	{ path: '/', key: 'HOME', name: 'Home', component: <Home /> },
	{ path: '/about', key: 'ABOUT', name: 'About', component: <About /> },
];

export default ROUTES