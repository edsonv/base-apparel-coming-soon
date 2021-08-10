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
          <img className="image" src={ HeroMobile } srcSet={ `${HeroMobile} 375w, ${HeroDesktop} 1440w` } alt="" />
        </aside>
      </section>
    </>

    // <div className="container-fluid">
    //   <nav className="row navbar-container justify-content-center">
    //     <div className="col-10">
    //       <img className="logo" src={ Logo } alt="Base Apparel Logo" />
    //     </div>
    //   </nav>
    //   <header className="row hero-container justify-content-center">
    //     <div className="col-12 col-xl-5 order-2 gx-0">
    //       <img className="image" src={ HeroMobile } srcset={ `${HeroMobile} 375w, ${HeroDesktop} 1440w` } alt="" />
    //     </div>
    //     <div className="col-10 col-xl-7 order-1">
    //       <h1 className="title text-center mx-auto"><span className="-first-line">We're</span> coming soon</h1>
    //       <p className="lead text-center">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
    //       <form className="form" action="">
    //         <div>
    //           <input type="email" name="" id="" className="input -email" placeholder="Email Address" />
    //         </div>
    //         <button className="button -submit" type="submit"><i className="icon-arrow"></i></button>
    //       </form>
    //     </div>
    //   </header>
    // </div>

  )
}

export default Home;