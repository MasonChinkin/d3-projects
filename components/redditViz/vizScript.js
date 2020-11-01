import * as d3 from 'd3'
import { visualize } from './utils/inputs'
import { drawBars } from './utils/bars'
import { drawBubbles } from './utils/bubbles'
import { drawScatter } from './utils/scatter'
import { useSuggestion, dateRangeNeeded } from './utils/utils'

const initializeViz = () => {
  sessionStorage.clear()
  document.addEventListener('DOMContentLoaded', () => {
    d3.selectAll('.suggestion-list-item').on('click', useSuggestion)

    document.querySelectorAll('.clear-local').forEach(function (el) {
      el.addEventListener('change', () => sessionStorage.clear())
    })

    d3.select('#subreddit-input')
      .on('change', () => sessionStorage.clear())
      .on('blur', () => sessionStorage.clear()) // change isn't triggering consistently for some reason

    d3.select('#sort-input').on('change', dateRangeNeeded)

    d3.select('.submit').on('click', () => visualize(drawBars))

    d3.select('#bar-button').on('click', () => visualize(drawBars))

    d3.select('#bubble-button').on('click', () => visualize(drawBubbles))

    d3.select('#scatter-button').on('click', () => visualize(drawScatter))
  })
}

export default initializeViz