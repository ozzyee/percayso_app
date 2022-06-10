import styled from "./nav.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export const Nav = () => {
	//  as we are using next js they have a way to navigate so we set the useRouter into a variables to use later
	const router = useRouter();
	// as we have a text input we have created some state which we will store the value into
	const [value, setValue] = useState("");
	//  as are nav is both mobile and desktop on mobile we have a style to hide the navigation to the right and when the state turn true it homes out
	const [isVisible, setIsVisible] = useState(false);

	const searchForNews = () => {
		// when the user has entered a value into the input we then send them to the results
		router.push(`/${value}`);
		// once this is do we clear the value from the input field
		setValue("");
	};

	//  if the user were to press the enter key in the input field it would send them to the results
	const onEnter = ({ key }: { key: string }) => {
		if (key === "Enter") {
			searchForNews();
		}
	};

	return (
		<div>
			<div
				className={isVisible ? styled.change : styled.container}
				onClick={() => setIsVisible(!isVisible)}
			>
				<div className={styled.bar1}></div>
				<div className={styled.bar2}></div>
				<div className={styled.bar3}></div>
			</div>

			<div className={styled.mobileSearch}>
				<input
					data-cy="search-bar"
					value={value}
					type="text"
					placeholder="Search for news..."
					onChange={({ target }) => setValue(target.value)}
					onKeyUp={onEnter}
				/>
				<button onClick={searchForNews} data-cy="search-button">
					Search
				</button>
			</div>

			<nav
				className={isVisible ? styled.navVisable : styled.nav}
				id="navigation"
			>
				<ul>
					<Link href="/">
						<li
							data-cy="link"
							onClick={() => setIsVisible(!isVisible)}
							className={router.asPath == "/" ? styled.active : undefined}
						>
							Home
						</li>
					</Link>

					<Link href="/tech">
						<li
							data-cy="link"
							onClick={() => setIsVisible(!isVisible)}
							className={router.asPath == "/tech" ? styled.active : undefined}
						>
							Tech
						</li>
					</Link>

					<Link href="/sports">
						<li
							data-cy="link"
							onClick={() => setIsVisible(!isVisible)}
							className={router.asPath == "/sports" ? styled.active : undefined}
						>
							Sports
						</li>
					</Link>

					<Link href="/entertainment">
						<li
							data-cy="link"
							onClick={() => setIsVisible(!isVisible)}
							className={
								router.asPath == "/entertainment" ? styled.active : undefined
							}
						>
							Entertainment
						</li>
					</Link>

					<Link href="/life">
						<li
							data-cy="link"
							onClick={() => setIsVisible(!isVisible)}
							className={router.asPath == "/life" ? styled.active : undefined}
						>
							Life
						</li>
					</Link>

					<Link href="/money">
						<li
							data-cy="link"
							onClick={() => setIsVisible(!isVisible)}
							className={router.asPath == "/money" ? styled.active : undefined}
						>
							Money
						</li>
					</Link>

					<Link href="/travel">
						<li
							data-cy="link"
							onClick={() => setIsVisible(!isVisible)}
							className={router.asPath == "/travel" ? styled.active : undefined}
						>
							Travel
						</li>
					</Link>

					<div className={styled.search}>
						<input
							data-cy="search-bar"
							value={value}
							type="text"
							placeholder="Search for news..."
							onChange={({ target }) => setValue(target.value)}
							onKeyUp={onEnter}
						/>
						<button onClick={searchForNews} data-cy="search-button">
							Search
						</button>
					</div>
				</ul>
			</nav>
		</div>
	);
};
