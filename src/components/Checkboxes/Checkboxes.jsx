/* eslint-disable jsx-a11y/label-has-associated-control */
import classes from './Checkboxes.module.scss'

function Checkboxes() {
  return (
    <aside className={classes.checkboxes}>
      <div className={classes.checkboxes__title}>Количество пересадок</div>
      <form className={classes.checkboxes__form}>
        <label className={classes.checkboxes__label}>
          <input className={classes.checkboxes__checkbox} type="checkbox" name="" id="" />
          Все
        </label>
        <label className={classes.checkboxes__label}>
          <input className={classes.checkboxes__checkbox} type="checkbox" name="" id="" />
          Без пересадок
        </label>
        <label className={classes.checkboxes__label}>
          <input className={classes.checkboxes__checkbox} type="checkbox" name="" id="" />1 пересадка
        </label>
        <label className={classes.checkboxes__label}>
          <input className={classes.checkboxes__checkbox} type="checkbox" name="" id="" />2 пересадки
        </label>
        <label className={classes.checkboxes__label}>
          <input className={classes.checkboxes__checkbox} type="checkbox" name="" id="" />3 пересадки
        </label>
      </form>
    </aside>
  )
}

export default Checkboxes
