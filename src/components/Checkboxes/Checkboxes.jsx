/* eslint-disable react/prop-types */

import { useSelector, useDispatch } from 'react-redux'
import { toggledCheckbox } from '../../appSlices/mainSlice'

import classes from './Checkboxes.module.scss'

const isCheckedHelper = (checkboxes, name) => checkboxes.find((item) => item.name === name).checked

export default function Checkboxes() {
  // useSelector тупо получает в коллбеке state и при возврате возвращает чо скажем
  const checkboxes = useSelector((state) => state.main.checkboxes)
  const dispatch = useDispatch()

  const onCheck = (e) => {
    dispatch(toggledCheckbox({ name: e.target.name, checked: e.target.checked }))
  }

  return (
    <aside className={classes.checkboxes}>
      <div className={classes.checkboxes__title}>Количество пересадок</div>
      <form className={classes.checkboxes__form}>
        <label className={classes.checkboxes__label} htmlFor="all">
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="all"
            id="all"
            checked={isCheckedHelper(checkboxes, 'all')}
          />
          Все
        </label>
        <label className={classes.checkboxes__label} htmlFor="without_transfers">
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="without_transfers"
            id="without_transfers"
            checked={isCheckedHelper(checkboxes, 'without_transfers')}
          />
          Без пересадок
        </label>
        <label className={classes.checkboxes__label} htmlFor="one_transfer">
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="one_transfer"
            id="one_transfer"
            checked={isCheckedHelper(checkboxes, 'one_transfer')}
          />
          1 пересадка
        </label>
        <label className={classes.checkboxes__label} htmlFor="two_transfers">
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="two_transfers"
            id="two_transfers"
            checked={isCheckedHelper(checkboxes, 'two_transfers')}
          />
          2 пересадки
        </label>
        <label className={classes.checkboxes__label} htmlFor="three_transfers">
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="three_transfers"
            id="three_transfers"
            checked={isCheckedHelper(checkboxes, 'three_transfers')}
          />
          3 пересадки
        </label>
      </form>
    </aside>
  )
}
