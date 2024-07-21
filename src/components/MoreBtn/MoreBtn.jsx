/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';

import classes from './MoreBtn.module.scss'

function MoreBtn() {
  const status = useSelector((state) => state.main.status)

  let isVisible = true;

  if (status && status === 'loading') {
    isVisible = true;
  } else if (status && status === 'resolved') {
    isVisible = false;
  }
  
  return (
    <button className={classes.tickets__more} hidden={isVisible} type="button">
      Показать ещё 5 билетов!
    </button>
  )
}

export default MoreBtn
