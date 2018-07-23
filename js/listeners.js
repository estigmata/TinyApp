const isLogin = JSON.parse(localStorage.login).status
if (!isLogin) {
  window.location.href = 'index.html'
}

const modal = document.getElementById('modal')
modal.addEventListener('keyup', (event) => {
  event.preventDefault()
  if (event.keyCode === 13) {
    let save = window.getComputedStyle(document.getElementById('button-save'))
    if (save.display === 'none') {
      document.getElementById('button-update').click()
    }
    else {
      document.getElementById('button-save').click()
    }
  }
  if (event.keyCode === 27) {
    onCloseModal()
  }
})
