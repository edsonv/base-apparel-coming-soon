import Logo from '../assets/images/logo.svg'
import HeroDesktop from '../assets/images/hero-desktop.jpg'
import HeroMobile from '../assets/images/hero-mobile.jpg'

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <nav className="navbar">
          <img className="logo" src={ Logo } alt="Base Apparel Logo" />
        </nav>
        <header className="header">
          <h1 className="title"><span className="-first-line">We're</span> coming soon</h1>
          <p className="lead">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
          <form className="form" action="">
            <input type="email" name="" id="" className="input -email" placeholder="Email Address" />
            <button className="button -submit" type="submit"><i className="icon-arrow"></i></button>
          </form>
        </header>
        <aside className="aside">
          <img className="image" src={ HeroMobile } srcSet={ `${HeroDesktop} 992w, ${HeroMobile}` } alt="" />
        </aside>
      </section>
    </>
  )
}

export default Home;