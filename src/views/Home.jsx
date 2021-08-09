import Logo from '../assets/images/logo.svg'
import HeroMobile from '../assets/images/hero-mobile.jpg'

const Home = () => {
  return (
    <div className="container-fluid">
      <nav className="row navbar-container justify-content-center">
        <div className="col-10">
          <img className="logo" src={ Logo } alt="Base Apparel Logo" />
        </div>
      </nav>
      <header className="row hero-container justify-content-center">
        <div className="col-12 gx-0">
          <img className="image" src={ HeroMobile } alt="" />
        </div>
        <div className="col-10">
          <h1 className="title text-center mx-auto"><span className="-first-line">We're</span> coming soon</h1>
          <p className="lead text-center">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <form className="form" action="">
            <div>
              <input type="email" name="" id="" className="input -email" placeholder="Email Address" />
            </div>
            <button className="button -submit" type="submit"><i className="icon-arrow"></i></button>
          </form>
        </div>
      </header>


    </div>

  )
}

export default Home;