import React from 'react';
import Link from 'next/link';
import Error from 'next/error';

import Menu from '../components/Menu';
import { darkBlue } from '../utils/colors.js';
import { components } from '../components/blog';

import blog, { getTitles } from '../blog';

export default ({ url: { query: { post } } }) => {
  if (!post)
    return (
      <div className="container">
        <Menu color={darkBlue} active="blog" />
        <div>
          <h4 className="title">Blog posts</h4>
          <ul className="list">
            {getTitles().map((t) => (
              <li>
                <Link href={`/blog/${t.id}`}>
                  <a className="item" href={`/blog/${t.id}`}>
                    {t.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: calc(100vh - 64px);
            font-family: Menlo;
            text-align: center;
          }

          .title {
            font-weight: normal;
          }

          .item {
            color: #484848;
            text-decoration: none;
            font-size: 0.8em;
          }

          .list {
            list-style-type: square;
          }

          .list li {
            margin: 12px 0;
          }
        `}</style>
      </div>
    );

  const Page = blog(post);

  if (!Page) return <Error statusCode={404} />;

  return (
    <div className="container">
      <Menu color={darkBlue} active="blog" />
      <Page components={components} />

      <style jsx>{`
        .container {
          color: #484848;
          font-family: Menlo;
          margin: 64px auto;
          padding: 0 12px;
          max-width: 640px;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
