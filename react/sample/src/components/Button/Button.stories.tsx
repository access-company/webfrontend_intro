import React from 'react'
import { storiesOf } from '@storybook/react'
import { action, HandlerFunction } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

const buttonText = (defaultValue: string): string => text('Button text', defaultValue)
const buttonKey = (defaultValue: string): string => text('Assigned key', defaultValue)
const pressed: HandlerFunction = action('Pressed button')

storiesOf('Component/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Button text={buttonText('')} assignedKey={buttonKey('0')} onPush={pressed}></Button>)
