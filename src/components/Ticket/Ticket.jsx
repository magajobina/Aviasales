/* eslint-disable react/prop-types */

import { add, format, intervalToDuration } from 'date-fns'
import classes from './Ticket.module.scss'

const getTrasitsTitle = (stops) => {
  const count = stops.length

  if (count === 0) return 'без пересадок'
  if (count === 1) return '1 пересадка'
  if (count >= 2 && count <= 4) return `${count} пересадки`
  return `${count} пересадок`
}

const getFromToDate = (date, duration) => {
  const newDate = new Date(date)

  const dateFrom = format(newDate, 'HH:mm')
  const dateTo = format(add(newDate, { minutes: duration }), 'HH:mm')

  return `${dateFrom} – ${dateTo}`
}

const getTripDurationDate = (date, duration) => {
  const newDate = new Date(date)

  // получаем из интервала в минутах отлельные часы, минуты, и если есть то и дни
  const intervalDate = intervalToDuration({
    start: newDate,
    end: add(newDate, { minutes: duration }),
  })

  // если минут нет, то сделаем их равными "00"
  if (!intervalDate.minutes) intervalDate.minutes = '00'

  // если есть дни то вернём строку с днями
  if (intervalDate.days) {
    return `${intervalDate.days}д ${intervalDate.hours}ч ${intervalDate.minutes}м`
  }

  // если дней нет то вернём строку с минутами и часами
  return `${intervalDate.hours}ч ${intervalDate.minutes}м`
}

export default function Ticket({ price, carrier, segments }) {
  return (
    <li className={classes.tickets__item}>
      <div className={classes['tickets__price-box']}>
        <div className={classes.tickets__price}>{price} ₽</div>
        <div className={classes['tickets__logo-box']}>
          <img className={classes.tickets__logo} src={`https://pics.avs.io/99/36/${carrier}.png`} alt="company logo" />
        </div>
      </div>
      {segments.map((segment) => (
        <div key={segment.date} className={classes['tickets__info-row']}>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>
              {segment.origin} – {segment.destination}
            </div>
            <div className={classes['tickets__info-bottom']}>{getFromToDate(segment.date, segment.duration)}</div>
          </div>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>В пути</div>
            <div className={classes['tickets__info-bottom']}>{getTripDurationDate(segment.date, segment.duration)}</div>
          </div>
          <div className={classes['tickets__info-box']}>
            <div className={classes['tickets__info-top']}>{getTrasitsTitle(segment.stops)}</div>
            <div className={classes['tickets__info-bottom']}>
              {segment.stops.length ? segment.stops.join(', ') : '–'}
            </div>
          </div>
        </div>
      ))}
    </li>
  )
}
