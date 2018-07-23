const nameFields = ['id', 'firstname', 'lastname', 'email', 'address', 'phone']

const clearUserData = (fieldData) => {
  fieldData.map(field => {
    field.value = ''
  })
}

const propagateUserData = (fieldData, user) => {
  let userField = 0
  fieldData.map(field => {
    field.value = user[nameFields[userField]]
    userField++
  })
}

const onShowModal = (user = 'undefined') => {
  document.getElementById('wrapper-modal').style.display = 'block'
  document.getElementById('modal').style.display = 'block'
  document.getElementsByTagName('input')[1].focus()
  if (user !== 'undefined') {
    document.getElementById('button-update').style.display = 'inline-block'
    document.getElementById('button-save').style.display = 'none'
    document.getElementById('new-user-title').style.display = 'none'
    document.getElementById('edit-user-title').style.display = 'block'
    propagateUserData(Array.prototype.slice.call(document.getElementsByTagName('input')), user)
  }
  else {
    document.getElementById('button-update').style.display = 'none'
    document.getElementById('button-save').style.display = 'inline-block'
    document.getElementById('new-user-title').style.display = 'block'
    document.getElementById('edit-user-title').style.display = 'none'
  }
}

const onCloseModal = () => {
  document.getElementById('wrapper-modal').style.display = 'none'
  document.getElementById('modal').style.display = 'none'
  clearUserData(Array.prototype.slice.call(document.getElementsByTagName('input')))
}

const getFormValues = () => {
  const values = []
  const inputs = Array.prototype.slice.call(document.getElementsByTagName('input'))
  inputs.map(input => values.push(input.value))
  return values
}

const logout = () => {
  localStorage.setItem('login', JSON.stringify({status: false}))
  window.location.href = 'index.html'
}
