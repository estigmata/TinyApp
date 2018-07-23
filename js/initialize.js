const isLogin = JSON.parse(localStorage.login).status
if (isLogin) {
  window.location.href = 'home.html'
}
else {
  localStorage.clear()
  localStorage.setItem('login', JSON.stringify({status: false}))
  localStorage.setItem('superUsers', JSON.stringify([
    {username: 'administrator@tinyapp.com', password: '123MasterKey!@#'},
    {username: 'krakhen@tinyapp.com', password: 'MasterKey$%&'}
  ]))
  document.getElementsByTagName('input')[0].focus()
  const login = document.getElementById('login')
  login.addEventListener('keyup', (event) => {
    event.preventDefault()
    if (event.keyCode === 13) {
      document.getElementById('button-login').click()
    }
  })
}
