import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positives }) => (
    <ul className={css.statisticsList}>
      <li>
        <p className={css.statisticsItem}>Good: {good}</p>
      </li>
      <li>
        <p className={css.statisticsItem}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={css.statisticsItem}>Bad: {bad}</p>
      </li>
      <li>
        <p className={css.statisticsItem}>Total: {total}</p>
      </li>
      <li>
        <p className={css.statisticsItem}>Positive feedback: {positives}%</p>
      </li>
    </ul>
  );