import { H1, H2, H3, H4 } from './headings';
import { Blockquote } from './quotes';
import { InlineCode, Code } from './code';
import { GenericLink } from './link';

const DocH2 = ({ children }) => (
  <div>
    <H2>{children}</H2>
    <style jsx>{`
      div {
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
);

const DocH3 = ({ children }) => (
  <div>
    <H3>{children}</H3>
    <style jsx>{`
      div {
        margin: 30px 0 0 0;
      }
    `}</style>
  </div>
);

export const components = {
  h1: H1,
  h2: DocH2,
  h3: DocH3,
  h4: H4,
  blockquote: Blockquote,
  code: Code,
  inlineCode: InlineCode,
  a: GenericLink
};
