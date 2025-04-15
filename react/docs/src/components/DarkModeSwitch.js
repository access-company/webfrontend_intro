import * as React from 'react';
import styled from '@emotion/styled';

import NightImage from './images/night.png';
import DayImage from './images/day.png';

const StyledSwitch = styled('div')`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0 20px 0 25px;

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    width: 50px;
    height: 20px;
    appearance: none;
    background-color: #ccc;
    outline: none;
    cursor: pointer;
    border-radius: 34px;
    transition: 0.4s;
  }

  .switch::before {
    content: '';
    position: absolute;
    height: 30px;
    width: 30px;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    background: white url(${NightImage});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    box-shadow: 0 0px 15px #2020203d;
    transition: 0.4s;
  }

  .switch:checked {
    background: linear-gradient(to right, #fefb72, #f0bb31);
  }

  .switch:checked::before {
    transform: translate(24px, -50%);
    background: white url(${DayImage});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const DarkModeSwitch = ({ isDarkThemeActive, toggleActiveTheme }) => (
  <StyledSwitch>
    <input
      type="checkbox"
      className="switch"
      onChange={toggleActiveTheme}
      checked={!isDarkThemeActive}
    />
  </StyledSwitch>
);
