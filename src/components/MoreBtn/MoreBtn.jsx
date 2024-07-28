import { useDispatch, useSelector } from 'react-redux'
import { selectFilteredTickets, showMore } from '../../appSlices/mainSlice'

import classes from './MoreBtn.module.scss'

function MoreBtn() {
  const filteredTickets = useSelector(selectFilteredTickets)
  const dispatch = useDispatch()

  return (
    <button
      className={classes.tickets__more}
      hidden={filteredTickets.length === 0}
      onClick={() => {
        dispatch(showMore())
      }}
      type="button"
    >
      Показать ещё 5 билетов!
    </button>
  )
}

export default MoreBtn
