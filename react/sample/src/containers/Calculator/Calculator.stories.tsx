import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Calculator from './index'

storiesOf('Container/Calculator', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Calculator />)
