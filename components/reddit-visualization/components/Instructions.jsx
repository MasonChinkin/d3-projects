const Instructions = () => {
  return (
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
  )
}

export default Instructions
