import React from 'react';
import Link from 'next/link';

import { blue, pink } from '../utils/colors';

const items = [
  {
    title: 'Home',
    target: '/',
  },
  {
    title: 'Projects',
    target: '/projects',
  },
  {
    title: 'AI Experiments',
    target: '/ai',
  },
  {
    title: 'CV',
    target: '/static/cv_cosmin_serdean.pdf',
    right: true,
  },
  {
    title: 'GitHub',
    target: 'https://github.com/c0z0',
    right: true,
  },
  {
    title: 'Email',
    target: 'mailto:cosmoserdean@gmail.com',
    right: true,
    primary: true,
  },
];

export default function Navbar({ active = '/' }) {
  const leftItems = items.filter(({ right }) => !right);

  const rightItems = items.filter(({ right }) => right);

  return (
    <div className="menu">
      <div className="menu__left">
        <a href="https://github.com/c0z0/cserdean.me" target="_blank">
          <img src="/static/triangle-gs.svg" alt="logo" className="menu__logo" />
        </a>
        {leftItems.map(({ title, target, primary, right }, k) => (
          <Link href={target} prefetch={!right} key={k}>
            <a
              href={target}
              className={`menu__item ${active === target ? 'menu__item--active' : ''} ${primary
                ? 'menu__item--primary'
                : ''}`}
            >
              {title}
            </a>
          </Link>
        ))}
      </div>
      <div className="menu__right">
        {rightItems.map(({ title, target, primary, right }, k) => (
          <a
            key={k}
            href={target}
            className={`menu__item ${active === target ? 'menu__item--active' : ''} ${primary
              ? 'menu__item--primary'
              : ''}`}
            target="_blank"
          >
            {title}
          </a>
        ))}
      </div>
      <style jsx>{`
        .menu {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          max-width: 900px;
          width: 100%;
          margin: 40px auto;
          font-size: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
            'Fira Sans';
        }

        .menu__left {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .menu__item {
          margin: 0 10px;
          color: #888;
          font-size: 12px;
          text-decoration: none;
        }

        .menu__item--active {
          color: #484848 !important;
        }

        .menu__item--primary {
          color: #484848;
          border-radius: 2rem;
          background-color: ${pink};
          padding: 0.625rem 1.5rem;
          color: white;
        }

        .menu__logo {
          height: 40px;
          margin-right: 20px;
          transition: all 0.2s;
          transform: rotate(90deg);
        }

        .menu__logo:hover {
        }

        .menu__dot {
          display: inline-block;
          width: 34px;
          background: ${blue};
          border-radius: 100%;
          margin-right: 12px;
        }
      `}</style>
    </div>
  );
}
