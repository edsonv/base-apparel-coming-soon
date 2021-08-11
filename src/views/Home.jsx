import Logo from '../assets/images/logo.svg'
import HeroDesktop from '../assets/images/hero-desktop.jpg'
import HeroMobile from '../assets/images/hero-mobile.jpg'
import Form from '../components/Form'

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
          <Form />
        </header>
        <aside className="aside">
          <picture>
            <source media="(max-width: 991.8px)" srcSet={ HeroMobile } />
            <source media="(min-width: 992px)" srcSet={ HeroDesktop } />
            <img className="image" src={ HeroMobile } alt="" />
          </picture>
        </aside>
      </section>
    </>
  )
}

export default Home;