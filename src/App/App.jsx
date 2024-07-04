/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import classNames from 'classnames'
import classes from './App.module.scss'
import logo from './Logo.svg'

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.logo}>
        <a href="/">
          <img className={classes.logo__img} src={logo} alt="logo" />
        </a>
      </div>
      <main className={classes.main}>
        <section className={classes.content}>
          <div className={classNames(classes.container, classes.content__container)}>
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
            <div className={classes.tickets}>
              <div className={classes.filters}>
                <ul className={classes.filters__list}>
                  <li className={classes.filters__item}>
                    <button
                      className={classNames(classes.filters__button, classes['filters__button--active'])}
                      type="button"
                    >
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
              <ul className={classes.tickets__list}>
                <li className={classes.tickets__item}>
                  <div className={classes['tickets__price-box']}>
                    <div className={classes.tickets__price}>13 400 ₽</div>
                    <div className={classes['tickets__logo-box']}>
                      <img
                        className={classes.tickets__logo}
                        src="https://pics.avs.io/99/36/S7.png"
                        alt="company logo"
                      />
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
              <button className={classes.tickets__more} type="button">
                Показать ещё 5 билетов!
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
