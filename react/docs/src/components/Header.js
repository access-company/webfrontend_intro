import * as React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import Loadable from 'react-loadable';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';
import Sidebar from './sidebar';

const help = require('./images/help.svg');
const logoImg = require('./images/logo.svg');
const twitter = require('./images/twitter.svg');
const discordBrandsBlock = require('./images/discord-brands-block.svg');
const twitterBrandsBlock = require('./images/twitter-brands-block.svg');

const isSearchEnabled = config.header.search && config.header.search.enabled;
const searchIndices = isSearchEnabled && config.header.search.indexName
  ? [{
      name: config.header.search.indexName,
      title: 'Results',
      hitComp: 'PageHit',
    }]
  : [];

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  const x = document.getElementById('navbar');
  x.className = x.className === 'topnav'
    ? 'topnav responsive'
    : 'topnav';
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${props => props.isDarkThemeActive ? '#001932' : undefined};

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => {
  const data = useStaticQuery(graphql`
    query headerTitleQuery {
      site {
        siteMetadata {
          headerTitle
          githubUrl
          helpUrl
          tweetText
          logo {
            link
            image
          }
          headerLinks {
            link
            text
          }
        }
      }
    }
  `);

  const {
    headerTitle,
    githubUrl = '',
    helpUrl = '',
    tweetText = '',
    logo,
    headerLinks = [],
  } = data.site.siteMetadata;

  const finalLogoLink = logo.link || 'https://hasura.io/';
  const logoSrc = logo.image || logoImg;

  return (
    <div className="navBarWrapper">
      <nav className="navBarDefault">
        <div className="navBarHeader">
          <Link to={finalLogoLink} className="navBarBrand">
            <img
              className="img-responsive displayInline"
              src={logoSrc}
              alt="logo"
            />
          </Link>
          <div
            className="headerTitle displayInline"
            dangerouslySetInnerHTML={{ __html: headerTitle }}
          />
        </div>

        {config.header.social && (
          <ul
            className="socialWrapper visibleMobileView"
            dangerouslySetInnerHTML={{ __html: config.header.social }}
          />
        )}

        {isSearchEnabled && (
          <div className="searchWrapper hiddenMobile navBarUL">
            <LoadableComponent collapse indices={searchIndices} />
          </div>
        )}

        <div id="navbar" className="topnav">
          <div className="visibleMobile">
            <Sidebar location={location} />
            <hr />
          </div>
          <ul className="navBarUL navBarNav navBarULRight">
            {headerLinks.map((link, key) =>
              link.link && link.text ? (
                <li key={key}>
                  <a
                    className="sidebarLink"
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    dangerouslySetInnerHTML={{ __html: link.text }}
                  />
                </li>
              ) : null
            )}

            {helpUrl && (
              <li>
                <a href={helpUrl}>
                  <img src={help} alt="Help icon" />
                </a>
              </li>
            )}

            {tweetText && (
              <li>
                <a
                  href={`https://twitter.com/intent/tweet?&text=${encodeURIComponent(
                    tweetText
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="shareIcon" src={twitter} alt="Twitter" />
                </a>
              </li>
            )}

            {(tweetText || githubUrl) && (
              <li className="divider hiddenMobile" />
            )}

            {config.header.social && (
              <li className="hiddenMobile">
                <ul
                  className="socialWrapper"
                  dangerouslySetInnerHTML={{ __html: config.header.social }}
                />
              </li>
            )}

            {githubUrl && (
              <li className="githubBtn">
                <GitHubButton
                  href={githubUrl}
                  data-show-count="true"
                  aria-label="Star on GitHub"
                >
                  Star
                </GitHubButton>
              </li>
            )}

            <li>
              <DarkModeSwitch
                isDarkThemeActive={isDarkThemeActive}
                toggleActiveTheme={toggleActiveTheme}
              />
            </li>
          </ul>
        </div>
      </nav>

      <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
        <div className="navBarDefault removePadd">
          <span
            onClick={myFunction}
            onKeyDown={myFunction}
            role="button"
            tabIndex={0}
            className="navBarToggle"
          >
            <span className="iconBar" />
            <span className="iconBar" />
            <span className="iconBar" />
          </span>
        </div>
        {isSearchEnabled && (
          <div className="searchWrapper">
            <LoadableComponent collapse indices={searchIndices} />
          </div>
        )}
      </StyledBgDiv>
    </div>
  );
};

export default Header;
