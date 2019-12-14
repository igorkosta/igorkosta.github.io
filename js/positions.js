import positions from '../docs/positions.js'

const previous = (array, current) => {
  if (current - 1 < 0) {
    return current
  }
  return current-1
};

const next = (array, current) => {
  if (current + 1 === array.length) {
    return current
  }
  return current + 1
};

function updatePosition(positions, current = 0, direction){
  var currentPosition = positions[current]
  if (direction === 'previous') {
    return positions[(current + positions.length - 1) % positions.length];
  }
  return positions[(current + 1) % positions.length];
}

// I have to provide a current position from the start and work with it
export default !function() {
  let currentIndex = positions.length - 1
  let currentPosition = positions[currentIndex]
  const leftArrow = document.createElement('i'),
        rightArrow = document.createElement('i'),
        position = document.createElement('div')

  position.appendChild(document.createTextNode(JSON.stringify(currentPosition)))

  leftArrow.onclick = () => {
    currentIndex = previous(positions, currentIndex)
    currentPosition = positions[currentIndex]
    position.innerHTML = JSON.stringify(currentPosition)
  }

  rightArrow.onclick = () => {
    currentIndex = next(positions, currentIndex)
    currentPosition = positions[currentIndex]
    position.innerHTML = JSON.stringify(currentPosition)
  }

  leftArrow.className = 'left-arrow fas fa-3x fa-chevron-circle-left'
  rightArrow.className = 'right-arrow fas fa-3x fa-chevron-circle-right'
  const section = document.querySelector('.positions')
  section.appendChild(leftArrow)
  section.appendChild(position)
  section.appendChild(rightArrow)
}()
