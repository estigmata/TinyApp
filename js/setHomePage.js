const login = JSON.parse(localStorage.login).status
var users = JSON.parse(localStorage.users)
const table = document.getElementById('users')
const column = ['col-2 col-sm-6', 'col-2 col-sm-6', 'col-4 col-sm-6 col-xs-12', 'col-3 col-sm-6 col-xs-12', 'col-1']

const rowRender = (user) => {
  const row = document.createElement('div')
  row.setAttribute('class', 'row row-fluid')
  row.setAttribute('id', `user-${user.id}`)
  const menu = document.createElement('div')
  menu.setAttribute('class', 'menu')
  menu.innerHTML = '<span>:</span>\
                    <ul>\
                    <li><a href="#" onclick="userEdit(' + user.id + ')">Edit</a></li>\
                    <li><a href="#" onclick="userDelet(' + user.id + ')">Delete</a></li>\
                    </ul>'
  row.appendChild(menu)
  let col = 0
  for (let [key, value] of Object.entries(user)) {
    if (key != 'id') {
      const colRender = document.createElement('div')
      colRender.setAttribute('class', column[col])
      colRender.textContent = value
      row.appendChild(colRender)
      col++
    }
  }
  table.appendChild(row)
}

const displayUserList = (users) => {
  users.map(user => {
    rowRender(user)
  })
}

displayUserList(users)
