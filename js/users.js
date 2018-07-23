const saveNewUser = () => {
  const userData = Array.prototype.slice.call(document.getElementsByTagName('input'))
  const newUser = { id: users[users.length - 1].id + 1 }
  let field = 0
  userData.map(data => {
    if (field !== 0) {
      newUser[nameFields[field]] = data.value
    }
    field++
  })
  users.push(newUser)
  localStorage.clear();
  localStorage.setItem('login', JSON.stringify({status: login}))
  localStorage.setItem('users', JSON.stringify(users))
  table.innerHTML = ''
  displayUserList(users)
  onCloseModal()
}

const userEdit = (id) => {
  onShowModal(users.filter(user => user.id === id)[0])
}

const updateUser = () => {
  const formValues = getFormValues()
  console.log('user id: ', formValues[0]);
  let field = 0
  users.map(user => {
    if (user.id === parseInt(formValues[0])) {
      formValues.map(value => {
        user[nameFields[field]] = (field === 0 ?  user.id : value)
        field++
      })
    }
  })
  localStorage.clear();
  localStorage.setItem('login', JSON.stringify({status: login}))
  localStorage.setItem('users', JSON.stringify(users))
  table.innerHTML = ''
  displayUserList(users)
  onCloseModal()
}

const userDelet = (id) => {
  localStorage.clear();
  localStorage.setItem('login', JSON.stringify({status: login}))
  localStorage.setItem('users', JSON.stringify(users.filter(user => user.id !== id)))
  users = JSON.parse(localStorage.users)
  table.innerHTML = ''
  displayUserList(users)
}
