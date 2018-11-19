import { h } from '@composi/core'

export default function({ send, action }, child) {
  return <button class="button" onclick={() => send({ type: action })}>{child}</button>
}