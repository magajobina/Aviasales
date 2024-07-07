import classes from './MoreBtn.module.scss'

function MoreBtn() {
  return (
    <button className={classes.tickets__more} type="button">
      Показать ещё 5 билетов!
    </button>
  )
}

export default MoreBtn
