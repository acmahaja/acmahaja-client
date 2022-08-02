import { Link } from 'preact-router/match';
import { FiSettings } from "react-icons/fi";
import { useEffect } from "preact/hooks";

import style from './style.css';

const Navbar = ({ color, showSettings }) => {
	useEffect(() => {
		document.documentElement.style.setProperty("--theme-color", `${color} `);
	  });

	return (
	<header className={style.header}>
		<div className={style.Highlight}></div>

		<nav className={style.nav}>
			<Link href="/" id="Logo" className={style.Logo}>
				<span>/</span>acmahaja
			</Link>

			<ul>
				<Link activeClassName={style.active} href="/" >Home</Link>
				<Link activeClassName={style.active} href="/about" >About</Link>
				<Link activeClassName={style.active} href="/projects" >Projects</Link>
				<Link activeClassName={style.active} href="/blog" >Blog</Link>
				<Link activeClassName={style.active} href="/resume" >Resume</Link>
				<FiSettings id="settingsIcon" fontSize={20} onClick={showSettings}/>
			</ul>
		</nav>
	</header>)
};

export default Navbar;
