import { useEffect } from 'react'
import initializeViz from './vizScript'

const RedditViz = () => {
  useEffect(() => {
    initializeViz()
  }, [])

  return (
    <>
      <section className="instructions">
        <h1>Instructions</h1>
        <ul>
          <li className="subreddit-instruction">
            Type in a subreddit or select from "suggestions"
          </li>
          <li className="sort-instruction">
            Sort the subreddit by hot, top, and new
          </li>
          <li className="date-range-instruction">
            Select the date range if you are sorting by top
          </li>
          <li className="date-range-instruction">
            Choose from 3 visualizations: bars, bubbles, or scatter plot
          </li>
        </ul>
      </section>

      <div className="inputs">
        <div className="suggestions">
          <div>
            <h1>Suggestions</h1> <i className="fas fa-caret-down" />
          </div>
          <ul className="suggestion-list">
            <li className="suggestion-list-item">FoodPorn</li>
            <li className="suggestion-list-item">WholesomeMemes</li>
            <li className="suggestion-list-item">EarthPorn</li>
            <li className="suggestion-list-item">DataIsBeautiful</li>
            <li className="suggestion-list-item">NotTheOnion</li>
          </ul>
        </div>
        <input
          type="text"
          name="subreddit"
          className="clear-local"
          id="subreddit-input"
          placeholder="subreddit name"
        />
        <select name="sort" className="clear-local" id="sort-input">
          <option selected="selected" value="Sort">
            ----- Sort -----
          </option>
          <option value="hot">Hot</option>
          <option value="top">Top</option>
          <option value="new">New</option>
        </select>
        <select
          disabled
          name="Date Range"
          className="clear-local"
          id="date-range"
        >
          <option selected="selected" value="">
            Past 24 Hours
          </option>
          <option value="Past Hour">Past Hour</option>

          {/* 24hr option is blank in reddit url */}
          <option value="week">Past Week</option>
          <option value="month">Past Month</option>
          <option value="year">Past Year</option>
          <option value="all">All Time</option>
        </select>
        <input className="submit" type="submit" value="Visualize!" />
      </div>

      <section className="visualization-container">
        <div className="visualization-options">
          <button id="bar-button">
            <i className="far fa-chart-bar" />
          </button>
          <button id="bubble-button">
            <i className="material-icons" /> bubble_chart
          </button>
          <button id="scatter-button">
            <img src="https://img.icons8.com/metro/26/000000/scatter-plot.png" />
          </button>
        </div>
        <div id="visualization" />
        <div id="tooltip" className="hidden">
          <h1>
            <span id="Subreddit">xxx</span>
          </h1>
          <h2>
            Title: <span id="Title">xxx</span>
          </h2>
          <h2>
            Posted: <span id="Posted">xxx</span>
          </h2>
          <h2>
            Upvotes: <span id="Upvotes">xxx</span>
          </h2>
          <img id="pic" />
        </div>
      </section>
    </>
  )
}

export default RedditViz
