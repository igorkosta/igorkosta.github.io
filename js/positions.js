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
  function renderPosition(position) {
    const { role, brief, company, logo } = position
    return `
      <h1>${role}</h1>
      <p>${brief}</p>
      <h3 style="margin-top: 20px">
        <a href="${company.url}" target="_blank">
          <img src="${company.logo}" alt="${company.name}" width="200" />
        </a>
      </h3>
    `
  };

  let currentIndex = positions.length - 1
  let currentPosition = positions[currentIndex]
  const leftArrow = document.createElement('i'),
        rightArrow = document.createElement('i'),
        position = document.createElement('div')

  leftArrow.className = 'left-arrow fas fa-3x fa-chevron-circle-left'
  rightArrow.className = 'right-arrow fas fa-3x fa-chevron-circle-right'
  position.className = 'position'

  position.innerHTML = renderPosition(currentPosition)

  leftArrow.onclick = () => {
    currentIndex = previous(positions, currentIndex)
    currentPosition = positions[currentIndex]
    position.innerHTML = renderPosition(currentPosition)
  }

  rightArrow.onclick = () => {
    currentIndex = next(positions, currentIndex)
    currentPosition = positions[currentIndex]
    position.innerHTML = renderPosition(currentPosition)
  }

  const section = document.querySelector('#app')
  section.appendChild(leftArrow)
  section.appendChild(position)
  section.appendChild(rightArrow)
}()
