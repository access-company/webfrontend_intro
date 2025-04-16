import * as React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${(props) => props.theme.colors.preFormattedText};
`;

const appendString = (children) => {
  if (Array.isArray(children)) {
    return children.reduce((acc, current) => {
      if (typeof current === 'string') {
        return acc.concat(current);
      } else if (typeof current === 'object') {
        return acc.concat(current.props.children);
      } else {
        return acc;
      }
    }, '');
  } else {
    return children;
  }
};

export default {
  h1: ({children, ...props}) => (
    <h1
      className="heading1"
      id={appendString(children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    >{children}</h1>
  ),
  h2: ({children, ...props}) => (
    <h2
      className="heading2"
      id={appendString(children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    >{children}</h2>
  ),
  h3: ({children, ...props}) => (
    <h3
      className="heading3"
      id={appendString(children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    >{children}</h3>
  ),
  h4: ({children, ...props}) => (
    <h4
      className="heading4"
      id={appendString(children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    >{children}</h4>
  ),
  h5: ({children, ...props}) => (
    <h5
      className="heading5"
      id={appendString(children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    >{children}</h5>
  ),
  h6: ({children, ...props}) => (
    <h6
      className="heading6"
      id={appendString(children).replace(/\s+/g, '').toLowerCase()}
      {...props}
    >{children}</h6>
  ),
  p: (props) => <p className="paragraph" {...props} />,
  pre: (props) => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
