/* eslint-disable no-unused-vars */
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Filters.module.scss'
import { switchFilter } from '../../appSlices/mainSlice'

export default function Filters() {
  const dispatch = useDispatch()
  const activeBtn = useSelector((state) => state.main.filterType)

  const onBtnClick = (e) => {
    dispatch(switchFilter(e.target.name))
  }

  return (
    <div className={classes.filters}>
      <ul className={classes.filters__list}>
        <li className={classes.filters__item}>
          <button
            className={classNames(
              classes.filters__button,
              activeBtn === 'cheapest' && classes['filters__button--active']
            )}
            onClick={onBtnClick}
            name="cheapest"
            type="button"
          >
            Самый дешевый
          </button>
        </li>
        <li className={classes.filters__item}>
          <button
            className={classNames(
              classes.filters__button,
              activeBtn === 'fastest' && classes['filters__button--active']
            )}
            onClick={onBtnClick}
            name="fastest"
            type="button"
          >
            Самый быстрый
          </button>
        </li>
        <li className={classes.filters__item}>
          <button
            className={classNames(
              classes.filters__button,
              activeBtn === 'optimal' && classes['filters__button--active']
            )}
            onClick={onBtnClick}
            name="optimal"
            type="button"
          >
            Оптимальный
          </button>
        </li>
      </ul>
    </div>
  )
}

