import * as colors from '../../utils/colors';

const H1 = ({ children, ...props }) => (
  <h1 {...props}>
    {children}

    <style jsx>{`
      font-size: 1.5rem;
      color: ${colors.darkBlue};
      font-weight: 400;
      margin-top: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    `}</style>
  </h1>
);

const H2 = ({ children, ...props }) => (
  <h2 {...props}>
    {children}

    <style jsx>{`
      font-size: 2.4rem;
      font-weight: 500;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    `}</style>
  </h2>
);

const H3 = ({ children, ...props }) => (
  <h3 {...props}>
    {children}

    <style jsx>{`
      font-size: 2rem;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    `}</style>
  </h3>
);

const H4 = ({ children, ...props }) => (
  <h4 {...props}>
    {children}

    <style jsx>{`
      font-size: 1.6rem;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    `}</style>
  </h4>
);

export { H1, H2, H3, H4 };
