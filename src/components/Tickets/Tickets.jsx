import classes from './Tickets.module.scss'

function Tickets() {
  return (
    <ul className={classes.tickets__list}>
      <li className={classes.tickets__item}>
        <div className={classes['tickets__price-box']}>
          <div className={classes.tickets__price}>13 400 ₽</div>
          <div className={classes['tickets__logo-box']}>
            <img className={classes.tickets__logo} src="https://pics.avs.io/99/36/S7.png" alt="company logo" />
          </div>
        </div>
        <div className={classes['tickets__info-row']}>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>MOW – HKT</div>
            <div className={classes['tickets__info-bottom']}>10:45 – 08:00</div>
          </div>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>В пути</div>
            <div className={classes['tickets__info-bottom']}>21ч 15м</div>
          </div>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>2 пересадки</div>
            <div className={classes['tickets__info-bottom']}>HKG, JNB</div>
          </div>
        </div>
        <div className={classes['tickets__info-row']}>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>MOW – HKT</div>
            <div className={classes['tickets__info-bottom']}>10:45 – 08:00</div>
          </div>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>В пути</div>
            <div className={classes['tickets__info-bottom']}>21ч 15м</div>
          </div>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>2 пересадки</div>
            <div className={classes['tickets__info-bottom']}>HKG, JNB</div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Tickets
