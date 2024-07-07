import classNames from 'classnames'
import classes from './Filters.module.scss'

function Filters() {
  return (
    <div className={classes.filters}>
      <ul className={classes.filters__list}>
        <li className={classes.filters__item}>
          <button className={classNames(classes.filters__button, classes['filters__button--active'])} type="button">
            Самый дешевый
          </button>
        </li>
        <li className={classes.filters__item}>
          <button className={classes.filters__button} type="button">
            Самый быстрый
          </button>
        </li>
        <li className={classes.filters__item}>
          <button className={classes.filters__button} type="button">
            Оптимальный
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Filters
