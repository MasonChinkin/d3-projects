const Inputs = () => {
  return (
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
        <option defaultValue="selected" value="Sort">
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
        <option defaultValue="selected" value="">
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
  )
}

export default Inputs
