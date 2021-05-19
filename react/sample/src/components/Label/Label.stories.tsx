import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Label from './index'

const formula = (defaultValue: string): string => text('Formula', defaultValue)
const value = (defaultValue: string): string => text('Value', defaultValue)

storiesOf('Component/Label', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Label formula={formula('1 + 1')} value={value('2')}></Label>)
