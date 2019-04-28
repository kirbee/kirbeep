import styled from 'styled-components';
import { Link } from 'gatsby';

const linkCss = `  
  text-decoration: none;
  color: #ffc30c;
  border-bottom: 1px solid #ffc30c;
  transition: color 0.15s ease-in-out, border-bottom 0.15s ease-in-out;

  &:hover {
    color: #f16622;
    border-bottom: 1px solid #f16622;
  }`;

const PageLink = styled(Link)`
  ${linkCss}
`;

const A = styled.a`
  ${linkCss}
`;

export { PageLink, A };
