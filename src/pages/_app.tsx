import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Nav } from "../components/nav/nav.component";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* as are navigation is on all pages we have placed it in are app file*/}
			<Nav />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
