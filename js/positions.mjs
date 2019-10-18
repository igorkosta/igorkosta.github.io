// const positions = require('../docs/positions')
import positions from '../docs/positions.js'

function updatePosition(positions, current = 0, direction){
  var currentPosition = positions[current]
  if (direction === 'previous') {
    return positions[(current + positions.length - 1) % positions.length];
  }
  return positions[(current + 1) % positions.length];
}

export default !function() {
  const leftArrow = document.createElement('i'),
        rightArrow = document.createElement('i')

  leftArrow.className = 'left-arrow fas fa-3x fa-chevron-circle-left'
  rightArrow.className = 'right-arrow fas fa-3x fa-chevron-circle-right'
  const app = document.querySelector('.main')
  app.appendChild(leftArrow)
  app.appendChild(rightArrow)
}()
