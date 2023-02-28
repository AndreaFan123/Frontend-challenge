import { SummaryCal } from "./SummaryCal"
import { SummaryList } from "./SummaryList"
import "./summary.scss"

export const Summary = () => {
  return (
    <section className="summary-wrapper">
      <SummaryCal/>
      <SummaryList/>
    </section>
  )
}

