const checkEmail = (email) => {
  let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
  let flag = reg.test(email)
  return flag
}

const checkPhone = (phone) => {
  let reg = /^1[3|4|5|7|8]\d{9}$/
  let flag = reg.test(phone)
  return flag
}


export {
  checkEmail,
  checkPhone
}