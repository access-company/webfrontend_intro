import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import config from '../../config';
import { Sidebar, ListItem } from './styles/Sidebar';

const SidebarLayout = ({ location }) => {
  const { allMdx } = useStaticQuery(graphql`
    query SidebarLayoutQuery {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            tableOfContents
          }
        }
      }
    }
  `);

  // 現在のパスにマッチするページの目次アイテムを抽出
  let finalNavItems = [];

  allMdx.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    const fullPath = `${config.gatsby.pathPrefix}${slug}`;

    if (slug === location.pathname || fullPath === location.pathname) {
      const items = node.tableOfContents?.items;

      if (items && items.length) {
        finalNavItems = items.map((innerItem, idx) => {
          const itemId = innerItem.title
            ? innerItem.title.replace(/\s+/g, '').toLowerCase()
            : '';

          return (
            <ListItem key={idx} to={`#${itemId}`} level={1}>
              {innerItem.title}
            </ListItem>
          );
        });
      }
    }
  });

  return (
    <Sidebar>
      {finalNavItems.length > 0 ? (
        <ul className="rightSideBarUL">
          <li className="rightSideTitle">CONTENTS</li>
          {finalNavItems}
        </ul>
      ) : (
        <ul />
      )}
    </Sidebar>
  );
};

export default SidebarLayout;
