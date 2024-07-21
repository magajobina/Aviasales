/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useSelector, useDispatch } from 'react-redux'
import { toggledCheckbox } from '../../appSlices/mainSlice'

import classes from './Checkboxes.module.scss'

const isCheckedHelper = (checkboxes, name) => {
  return checkboxes.find((item) => item.name === name).checked
}

function Checkboxes() {
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
        <label className={classes.checkboxes__label}>
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="all"
            checked={isCheckedHelper(checkboxes, 'all')}
          />
          Все
        </label>
        <label className={classes.checkboxes__label}>
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="without_transfers"
            checked={isCheckedHelper(checkboxes, 'without_transfers')}
          />
          Без пересадок
        </label>
        <label className={classes.checkboxes__label}>
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="one_transfer"
            checked={isCheckedHelper(checkboxes, 'one_transfer')}
          />
          1 пересадка
        </label>
        <label className={classes.checkboxes__label}>
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="two_transfers"
            checked={isCheckedHelper(checkboxes, 'two_transfers')}
          />
          2 пересадки
        </label>
        <label className={classes.checkboxes__label}>
          <input
            className={classes.checkboxes__checkbox}
            onChange={onCheck}
            type="checkbox"
            name="three_transfers"
            checked={isCheckedHelper(checkboxes, 'three_transfers')}
          />
          3 пересадки
        </label>
      </form>
    </aside>
  )
}

export default Checkboxes
