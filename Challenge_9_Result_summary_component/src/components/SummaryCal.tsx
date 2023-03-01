import "../sass/summary.scss";


export const SummaryCal = () => {
  return (
    <div className="summary-cal-container">
      <span>Your Result</span>
      <div className="summary-cal-circle">
        <h4>76</h4>
        <span>of 100</span>
      </div>
      <h2>Great</h2>
      <p>Your scored higher than 65% of the people who have taken these tests.</p>
    </div>
  )
}