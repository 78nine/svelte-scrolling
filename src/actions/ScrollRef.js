import { get } from 'svelte/store'
import { sanitize } from '../helpers'
import { elements } from '../stores'

const elementsList = get(elements)

const scrollRef = (node, hash) => {
  if (!hash) {
    throw new Error('scrollRef require a hash')
  }

  elementsList.push({
    node,
    hash: sanitize(hash)
  })
}

export default scrollRef
