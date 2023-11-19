import { Provider } from "react-redux";
import store from "./(redux)/store"; // Import your Redux store
import "../styles/globals.css"; // Import your global styles here
import { AppProps } from "next/app";
import EditButton from "./components/products/EditButton";

function MyApp({ Component, pageProps } :  AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
