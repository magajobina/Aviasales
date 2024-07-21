/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { fetchTickets } from '../../appSlices/mainSlice'
import Checkboxes from '../Checkboxes/Checkboxes'
import Filters from '../Filters/Filters'
import Ticket from '../Ticket'
import MoreBtn from '../MoreBtn/MoreBtn'
import classes from './App.module.scss'
import logo from './Logo.svg'
import TicketsList from '../TicketsList/TicketsList'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

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
            <Checkboxes />
            <div className={classes.tickets}>
              <Filters />
              <TicketsList/>
              <MoreBtn />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
