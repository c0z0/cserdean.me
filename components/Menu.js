import React from 'react'
import Link from 'next/link'

const Menu = ({ color, active }) => (
	<div className="menu">
		<a
			href="https://github.com/c0z0/cserdean.me"
			className="menu__item"
			target="_blank"
		>
			[src]
		</a>
		<Link href="/" prefetch>
			<a
				href="/"
				className={`menu__item ${active === '/' ? 'menu__item--active' : ''}`}
			>
				home
			</a>
		</Link>
		<Link href="/projects" prefetch>
			<a
				href="/projects"
				className={`menu__item ${
					active === 'projects' ? 'menu__item--active' : ''
				}`}
			>
				projects
			</a>
		</Link>
		<Link href="/ai/">
			<a
				href="/ai/"
				className={`menu__item ${active === 'ai' ? 'menu__item--active' : ''}`}
			>
				ai
			</a>
		</Link>
		<style jsx>{`
			.menu {
				position: absolute;
				top: 16px;
				left: 16px;
			}
			.menu__item {
				font-size: 0.8em;
				text-decoration: none;
				opacity: 1;
				color: ${color} !important;
				transition: all 0.2s;
				font-family: Menlo;
			}
			.menu__item:not(:last-child) {
				padding-right: 8px;
			}

			.menu__item:hover {
				opacity: 1;
			}

			.menu__item--active {
				text-decoration: underline;
			}
		`}</style>
	</div>
)

export default Menu
