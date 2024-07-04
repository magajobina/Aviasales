/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import './App.scss'
import logo from './Logo.svg'

// console.log(classes)

function App() {
  return (
    <div className="App">
      <div className="logo">
        <a href="/">
          <img className="logo__img" src={logo} alt="logo" />
        </a>
      </div>
      <main className="main">
        <section className="content">
          <div className="container content__container">
            <aside className="checkboxes">
              <div className="checkboxes__title">Количество пересадок</div>
              <form className="checkboxes__form">
                <label className="checkboxes__label">
                  <input className="checkboxes__checkbox" type="checkbox" name="" id="" />
                  Все
                </label>
                <label className="checkboxes__label">
                  <input className="checkboxes__checkbox" type="checkbox" name="" id="" />
                  Без пересадок
                </label>
                <label className="checkboxes__label">
                  <input className="checkboxes__checkbox" type="checkbox" name="" id="" />1 пересадка
                </label>
                <label className="checkboxes__label">
                  <input className="checkboxes__checkbox" type="checkbox" name="" id="" />2 пересадки
                </label>
                <label className="checkboxes__label">
                  <input className="checkboxes__checkbox" type="checkbox" name="" id="" />3 пересадки
                </label>
              </form>
            </aside>
            <div className="tickets">
              <div className="filters">
                <ul className="filters__list">
                  <li className="filters__item">
                    <button className="filters__button filters__button--active" type="button">
                      Самый дешевый
                    </button>
                  </li>
                  <li className="filters__item">
                    <button className="filters__button" type="button">
                      Самый быстрый
                    </button>
                  </li>
                  <li className="filters__item">
                    <button className="filters__button" type="button">
                      Оптимальный
                    </button>
                  </li>
                </ul>
              </div>
              <ul className="tickets__list">
                <li className="tickets__item">
                  <div className="tickets__price-box">
                    <div className="tickets__price">13 400 ₽</div>
                    <div className="tickets__logo-box">
                      <img className="tickets__logo" src="https://pics.avs.io/99/36/S7.png" alt="company logo" />
                    </div>
                  </div>
                  <div className="tickets__info-row">
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">MOW – HKT</div>
                      <div className="tickets__info-bottom">10:45 – 08:00</div>
                    </div>
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">В пути</div>
                      <div className="tickets__info-bottom">21ч 15м</div>
                    </div>
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">2 пересадки</div>
                      <div className="tickets__info-bottom">HKG, JNB</div>
                    </div>
                  </div>
                  <div className="tickets__info-row">
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">MOW – HKT</div>
                      <div className="tickets__info-bottom">10:45 – 08:00</div>
                    </div>
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">В пути</div>
                      <div className="tickets__info-bottom">21ч 15м</div>
                    </div>
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">2 пересадки</div>
                      <div className="tickets__info-bottom">HKG, JNB</div>
                    </div>
                  </div>
                </li>
                <li className="tickets__item">
                  <div className="tickets__price-box">
                    <div className="tickets__price">13 400 ₽</div>
                    <div className="tickets__logo-box">
                      <img className="tickets__logo" src="https://pics.avs.io/99/36/S7.png" alt="company logo" />
                    </div>
                  </div>
                  <div className="tickets__info-row">
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">MOW – HKT</div>
                      <div className="tickets__info-bottom">10:45 – 08:00</div>
                    </div>
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">В пути</div>
                      <div className="tickets__info-bottom">21ч 15м</div>
                    </div>
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">2 пересадки</div>
                      <div className="tickets__info-bottom">HKG, JNB</div>
                    </div>
                  </div>
                  <div className="tickets__info-row">
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">MOW – HKT</div>
                      <div className="tickets__info-bottom">10:45 – 08:00</div>
                    </div>
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">В пути</div>
                      <div className="tickets__info-bottom">21ч 15м</div>
                    </div>
                    <div className="tickets__info-box">
                      <div className="tickets__info-top">2 пересадки</div>
                      <div className="tickets__info-bottom">HKG, JNB</div>
                    </div>
                  </div>
                </li>
              </ul>
              <button className="tickets__more" type="button">
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
