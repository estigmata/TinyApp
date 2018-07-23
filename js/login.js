const singin = () => {
  let email = document.getElementsByTagName('input')[0].value
  let pass = document.getElementsByTagName('input')[1].value
  let superUsers = JSON.parse(localStorage.superUsers)
  let validUser = superUsers.filter(user => user.username === email && user.password === pass)
  if (validUser.length === 1) {
    localStorage.clear()
    localStorage.setItem('login', JSON.stringify({status: true}))
    localStorage.setItem('users', JSON.stringify([
      {id: 1, firstname: 'Marco', lastname: 'Ulpio Trajano', email: 'marco.ulpio@fundacion-jala.org', address: 'Av. Beijing esq. Av. America', phone: '60805525'},
      {id: 2, firstname: 'Manio', lastname: 'Acilio Glabrion', email: 'marcio.glabrion@fundacion-jala.org', address: 'Av. Libertador', phone: '60703325'},
      {id: 3, firstname: 'Tito', lastname: 'Vespaciano', email: 'tito.vespaciano@fundacion-jala.org', address: 'c. Juana Azurduy', phone: '60702533'},
      {id: 4, firstname: 'Domicia', lastname: 'Longina', email: 'domicia.longina@fundacion-jala.org', address: 'c. Juan Bautista', phone: '60605775'},
      {id: 5, firstname: 'Nigrino', lastname: 'De Lafuente', email: 'nigrino.delafuente@fundacion-jala.org', address: 'Av. Esteban Arce', phone: '60806625'},
      {id: 6, firstname: 'Alana', lastname: 'Bustillos', email: 'alana.bustillos@fundacion-jala.org', address: 'Av. 23 de Marzo', phone: '60501225'}
    ]))
    window.location.href = 'home.html'
  }
}
