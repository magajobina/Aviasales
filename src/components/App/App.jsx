/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import classNames from 'classnames'
import Counter from '../Counter'
import Checkboxes from '../Checkboxes/Checkboxes'
import Filters from '../Filters/Filters'
import Tickets from '../Tickets'
import MoreBtn from '../MoreBtn/MoreBtn'
import classes from './App.module.scss'
import logo from './Logo.svg'

function App() {
  return (
    <div className={classes.App}>
      <Counter />
      <div className={classes.logo}>
        <a href="/">
          <img className={classes.logo__img} src={logo} alt="logo" />
        </a>
      </div>
      <main className={classes.main}>
        <section className={classes.content}>
          <div className={classNames(classes.container, classes.content__container)}>
            <Checkboxes />
            <div className={classes.tickets}>
              <Filters />
              <Tickets />
              <MoreBtn />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
