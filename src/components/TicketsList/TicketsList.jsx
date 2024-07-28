/* eslint-disable no-plusplus */
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import { selectFilteredTickets } from '../../appSlices/mainSlice'
import classes from './TicketsList.module.scss'
import Ticket from '../Ticket/Ticket'

export default function TicketsList() {
  const filteredTickets = useSelector(selectFilteredTickets)
  const status = useSelector((state) => state.main.status)
  const howMuchTickets = useSelector((state) => state.main.howMuchTickets)
  const flightsToShow = []

  for (let i = 0; i < howMuchTickets; i++) {
    if (filteredTickets[i]) {
      flightsToShow.push(filteredTickets[i])
    }
  }

  return (
    <>
      <div className={classes['tickets__info-bar']}>
        <Spin spinning={status === 'loading' && flightsToShow.length !== 0} />
        {flightsToShow.length === 0 && 'Рейсов, подходящих под заданные фильтры не найдено'}
      </div>
      <ul className={classes.tickets__list}>
        {flightsToShow.map((flight) => (
          <Ticket
            price={flight.price}
            carrier={flight.carrier}
            segments={flight.segments}
            key={`${flight.price}/${flight.segments[0].date}`}
          />
        ))}
      </ul>
    </>
  )
}
