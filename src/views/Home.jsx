import React from 'react';
import { Text } from '@/components/Text';

export const Home = () => {
	return (
		<>
			<Text tag='h1'>
				Hi 👋,
				<br />
				<span>I’m David Muñoz </span>
				<br />
				Front-end developer
			</Text>
			<Text tag='p'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				tristique diam at nibh viverra, at pretium est blandit. Curabitur
				ultrices leo vitae felis finibus
			</Text>
			{/* <img src='/assets/images/emoji-contact.png' alt='' /> */}
		</>
	);
};
