import { h } from '@composi/core'
import Title from './title'
import Button from './button'

export default function Navigation({lastUpdate, send}) {
  return (
    <div class="navigation">
      <Title/>
      <h4 class='last-update'>Last updated at {lastUpdate ? lastUpdate.toString() : 'never'}</h4>
      <p class='sort-button--paragraph'>
        <div class="top-items">
          <Button {...{ send, action: 'sort' }}>Sort!</Button> 
          <Button {...{ send, action: 'reload' }}>Reload!</Button>
        </div>
      </p>
    </div>
  )
}