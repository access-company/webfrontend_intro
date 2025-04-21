import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout, Link } from '../components';
import NextPrevious from '../components/NextPrevious';
import config from '../../config';
import { Edit, StyledHeading, StyledMainWrapper } from '../components/styles/Docs';

const forcedNavOrder = config.sidebar.forcedNavOrder;

export default class MDXRuntimeTest extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return this.props.children;
    }
    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: { docsLocation },
      },
    } = data;

    const githubIcon = require('../components/images/github.svg').default;

    const navItems = allMdx.edges
      .map(({ node }) => node.fields.slug)
      .filter((slug) => slug !== '/')
      .sort()
      .reduce(
        (acc, cur) => {
          if (forcedNavOrder.find((url) => url === cur)) {
            return { ...acc, [cur]: [cur] };
          }

          let prefix = cur.split('/')[1];

          if (config.gatsby && config.gatsby.trailingSlash) {
            prefix = prefix + '/';
          }

          if (prefix && forcedNavOrder.find((url) => url === `/${prefix}`)) {
            return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
          } else {
            return { ...acc, items: [...acc.items, cur] };
          }
        },
        { items: [] }
      );

    const nav = forcedNavOrder
      .reduce((acc, cur) => {
        return acc.concat(navItems[cur]);
      }, [])
      .concat(navItems.items)
      .map((slug) => {
        if (slug) {
          const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);

          return { title: node.fields.title, url: node.fields.slug };
        }
      });

    return (
      <Layout {...this.props}>
        <div className={'titleWrapper'}>
          <StyledHeading>{mdx.fields.title}</StyledHeading>
          <Edit className={'mobileView'}>
            {docsLocation && (
              <Link className={'gitBtn'} to={`${docsLocation}/${mdx.parent.relativePath}`}>
                <img src={githubIcon} alt={'Github logo'} /> Edit on GitHub
              </Link>
            )}
          </Edit>
        </div>
        <StyledMainWrapper>
          <MDXProvider>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </StyledMainWrapper>
        <div className={'addPaddTopBottom'}>
          <NextPrevious mdx={mdx} nav={nav} />
        </div>
      </Layout>
    );
  }
}

export function Head({ data }) {
  const metaTitle = data.mdx.frontmatter.metaTitle;

  const metaDescription = data.mdx.frontmatter.metaDescription;

  let canonicalUrl = config.gatsby.siteUrl;

  canonicalUrl =
    config.gatsby.pathPrefix !== '/' ? canonicalUrl + config.gatsby.pathPrefix : canonicalUrl;
  canonicalUrl = canonicalUrl + data.mdx.fields.slug;

  return (
    <>
      {metaTitle && <title>{metaTitle}</title>}
      {metaTitle && <meta name="title" content={metaTitle} />}
      {metaDescription && <meta name="description" content={metaDescription} />}
      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {metaDescription && <meta property="og:description" content={metaDescription} />}
      {metaTitle && <meta property="twitter:title" content={metaTitle} />}
      {metaDescription && <meta property="twitter:description" content={metaDescription} />}
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;
