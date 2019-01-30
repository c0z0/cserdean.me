import React, {useState} from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import {pink} from '../utils/colors'
import * as breakPoints from '../utils/breakPoints'

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
]

export default function Menu({active, dark}) {
  const [open, setMenu] = useState(false)

  const textColorDesktop =
    !dark || open ? '#999999' : 'rgba(255, 255, 255, 0.66)'
  const textColorMobile = !dark || open ? '#484848' : 'white'

  const hoverTextColor = !dark || open ? 'black' : 'white'

  const activeTextColor = !dark || open ? 'black' : 'white'

  const activeColorMobile = !dark || open ? '#eee' : 'rgba(255, 255, 255, .2)'

  const leftItems = items.filter(({right}) => !right)

  const rightItems = items.filter(({right}) => right)
  return (
    <header>
      <div className="menu__wrapper">
        <div className="menu__logo__wrapper">
          <Link href="/" prefetch>
            <a
              href="/"
              onContextMenu={e => {
                e.preventDefault()
                window.location.href = 'http://github.com/c0z0/cserdean.me'
              }}>
              <img
                src="/static/svg/triangle-gs.svg"
                alt="logo"
                title="source"
                className="menu__logo"
              />
            </a>
          </Link>
          <button
            onClick={() => setMenu(!open)}
            type="button"
            className="menu__button">
            <div className="menu__icon">
              <div className="menu__icon__top" />
              <div className="menu__icon__bottom" />
            </div>
          </button>
        </div>
        <div className={`menu ${open ? 'menu--open' : ''}`}>
          <div className="menu__left">
            {leftItems.map(({title, target, primary}) => (
              <Link href={target} prefetch key={target}>
                <a
                  href={target}
                  className={`menu__item ${
                    active === target ? 'menu__item--active' : ''
                  } ${primary ? 'menu__item--primary' : ''}`}>
                  {title}
                </a>
              </Link>
            ))}
          </div>
          <div className="menu__right">
            {rightItems.map(({title, target, primary}) => (
              <a
                key={target}
                href={target}
                className={`menu__item ${
                  active === target ? 'menu__item--active' : ''
                } ${primary ? 'menu__item--primary' : ''}`}
                target="_blank"
                rel="noopener noreferrer">
                {title}
              </a>
            ))}
          </div>
        </div>
        <style jsx>{`
          .menu__wrapper {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
              'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans';
            background: ${open ? 'white' : 'none'};
            padding-top: 20px;
            position: ${open ? 'fixed' : 'static'};
            z-index: 100;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }

          .menu__item {
            color: ${textColorMobile};
            font-size: 12px;
            text-decoration: none;
            display: block;
            padding: 16px;
            padding-left: 20px;
            border-bottom: 1px solid ${activeColorMobile};
            text-transform: uppercase;
          }

          .menu__item--active {
            background: ${activeColorMobile};
            border-color: rgba(0, 0, 0, 0);
          }

          .menu__item--primary {
            color: ${pink};
            background: white;
          }

          .menu__logo {
            height: 40px;
            transform-origin: center;
            margin-right: 20px;
            transition: all 0.5s ease-in-out;
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            transform: rotate(90deg);
          }

          /*
          .menu__logo:hover {
            transform: rotate(90deg) scale(1.2);
            filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.2));
          }
          */

          .menu__logo__wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px;
            margin-top: 0;
          }

          .menu__button {
            background: none;
            border: none;
            outline: none;
            box-shadow: none;
            appearance: none;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 40px;
            height: 40px;
            padding: 0;
          }

          .menu {
            padding-top: 20px;
            display: none;
          }

          .menu--open {
            background: white;
            display: block;
          }

          .menu__icon * {
            transition: all 0.2s;
            width: 22px;
            height: 1px;
            background-color: ${textColorMobile};
          }

          .menu__icon__top {
            transform: rotate(${open ? '45deg' : 0})
              translateY(${open ? '1px' : '-4px'});
          }

          .menu__icon__bottom {
            transform: rotate(${open ? '-45deg' : 0})
              translateY(${open ? '-1px' : '4px'});
          }

          @media (${breakPoints.tabletUp}) {
            .menu__button {
              display: none;
            }

            .menu__logo__wrapper {
              margin: 0;
            }

            .menu__wrapper {
              width: 100%;
              display: flex;
              background: none;
            }

            .menu--open {
              background: none;
            }

            .menu {
              padding: 0;
              position: static;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              font-size: 12px;
              flex: 1;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans';
            }

            .menu__item {
              margin: 0 10px;
              display: inline-block;
              padding: 0;
              color: ${textColorDesktop};
              text-align: left;
              border-bottom: none;
              text-transform: none;
              transition: all 0.2s linear;
            }

            .menu__item:hover {
              color: ${hoverTextColor};
            }

            .menu__item--active {
              color: ${activeTextColor};
              background: none;
            }

            .menu__item--primary {
              border-radius: 2rem;
              background-color: ${pink};
              padding: 0.625rem 1.5rem;
              color: white;
              margin: 0;
              margin-left: 20px;
            }
          }
        `}</style>
      </div>
    </header>
  )
}

Menu.propTypes = {
  active: PropTypes.oneOf(items.map(i => i.target)).isRequired,
  dark: PropTypes.bool,
}

Menu.defaultProps = {
  dark: false,
}
