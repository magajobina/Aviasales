/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import { add, format, intervalToDuration } from 'date-fns'
import classes from './TicketsList.module.scss'
import Ticket from '../Ticket/Ticket'

export default function TicketsList() {
  const flights = useSelector((state) => state.main.tickets.tickets)
  const status = useSelector((state) => state.main.status)

  let isSpinning = true;

  if (status && status === 'loading') {
    isSpinning = true;
  } else if (status && status === 'resolved') {
    isSpinning = false;
  }

  return (
    <ul className={classes.tickets__list}>
      {flights.map((flight) => (
        <Ticket
          price={flight.price}
          carrier={flight.carrier}
          segments={flight.segments}
          key={`${flight.price}/${flight.segments[0].date}`}
        />
      ))}
      <Spin spinning={isSpinning} />
    </ul>
  )
}
