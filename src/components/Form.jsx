const Form = () => {
  const validate = () => {
    const email = document.querySelector('.-email')
    const message = document.querySelector('.message')
    const icon = document.querySelector('.icon-error')

    email.addEventListener('invalid', (e) => {
      e.preventDefault()
      email.classList.add('-error')
      message.classList.add('-error')
      icon.classList.add('-error')
    }, false)
  }

  return (
    <form className="form" action="">
      <input type="email" name="" id="" className="input -email" placeholder="Email Address" onBlur={ validate } required />
      <button className="button -submit" type="submit"><i className="icon-arrow"></i></button>
      <i className="icon-error"></i>
      <span className="message">Please provide a valid email</span>
    </form>
  )
}

export default Form