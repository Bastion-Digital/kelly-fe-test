import Header from './components/sections/Header';
import SignupForm from './components/forms/SignupForm';
import Divider from './components/sections/Divider';
import Cards from './components/sections/Cards';
import Carousel from './components/sections/Carousel';
import Footer from './components/sections/Footer';

import './App.scss';

function App() {
	return (
		<>
			<Header />
			<SignupForm />
			<Divider />
			<Cards />
			<Carousel />
			<Footer />
		</>
	);
}

export default App;
