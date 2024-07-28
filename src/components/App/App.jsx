import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import { fetchTickets } from '../../appSlices/mainSlice'
import Checkboxes from '../Checkboxes/Checkboxes'
import Filters from '../Filters/Filters'
import MoreBtn from '../MoreBtn/MoreBtn'
import classes from './App.module.scss'
import logo from './Logo.svg'
import TicketsList from '../TicketsList/TicketsList'

export default function App() {
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

