import Tooltip from './Tooltip'

const Visualization = () => {
  return (
    <section className="visualization-container">
      <div className="visualization-options">
        <button id="bar-button">
          <i className="far fa-chart-bar" />
        </button>
        <button id="bubble-button">
          <img
            className="bubble-button-icon"
            src="/icons/bubble-chart.svg"
            alt="bubble chart icon"
          />
        </button>
        <button id="scatter-button">
          <img src="https://img.icons8.com/metro/26/000000/scatter-plot.png" />
        </button>
      </div>
      <div id="visualization" />
      <Tooltip />
    </section>
  )
}

export default Visualization
