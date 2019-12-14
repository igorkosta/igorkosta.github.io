// const email = 'igor.kostyuchenok@gmail.com'
// add md5 calculation later
export function renderGravatar(email = email) {
  const img = document.createElement('img')
  img.src = 'https://www.gravatar.com/avatar/b92db07ed37688ab0e31d1f6f7bd4ae1?s=200'
  const avatar = document.querySelector('.avatar')
  avatar.appendChild(img)
}
