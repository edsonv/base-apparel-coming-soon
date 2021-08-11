
const Form = () => {
  const setError = (e) => {
    e.preventDefault()

    const email = document.querySelector('.-email')
    const message = document.querySelector('.message')
    const icon = document.querySelector('.icon-error')

    email.classList.add('-error')
    message.classList.add('-error')
    icon.classList.add('-error')
  }

  return (
    <form className="form" action="">
      <input type="email" name="" id="" className="input -email" placeholder="Email Address" onInvalid={ setError } required />
      <button className="button -submit" type="submit"><i className="icon-arrow"></i></button>
      <i className="icon-error"></i>
      <span className="message">Please provide a valid email</span>
    </form>
  )
}

export default Form