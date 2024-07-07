/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/actions'

function Counter({ counter, inc, dec, rnd }) {
  return (
    <>
      <h1>{counter}</h1>
      <button className="btn btn-inc" onClick={inc}>
        +1
      </button>
      <button className="btn btn-decr" onClick={dec}>
        -1
      </button>
      <button className="btn btn-rand" onClick={rnd}>
        + rand
      </button>
    </>
  )
}

// для того чтобы каким-то образом получить значения из store и передать их в Counter
// мы используем функцию которая называется mapStateToProps, эта функция получит
// state, а вернуть нужно объект
const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}

// Если у нас простые экшены как щас то эта функция не нужна, и мы просто
// тупо передаём actions в conntect и всё, он сам там вызовет bindActionCreators
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch)
// }

export default connect(mapStateToProps, actions)(Counter)

// connect это компонент высшего порядка. Мы используем connect, эта функция возвращает 
// новую функцию в которую мы уже и передаём наш компонент, и она как раз вернёт наш новый
// компонент который уже будет знать про редакс, он будет брать те значения что нужны Counter 
// для работы из стора (store) и передавать их в Counter в пропсы. А как именно передавать 
// это уже вопрос в конфигурации функции conntect, т.е. тут эта конфигурация заключается 
// в функциях mapStateToProps и mapDispatchToProps