import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link to='/' className="navbar-item">
            <p className="subtitle is-3">books.</p>
          </Link>
          <div className="navbar-burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
            <Link to='/' className='navbar-item'>Home</Link>
            <Link to='/addbook' className='navbar-item'>Add book</Link>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <a className="navbar-item" href="https://bulma.io/">
        Home
            </a> */}
            <Link to='/' className='navbar-item'>Home</Link>
            <Link to='/addbook' className='navbar-item'>Add book</Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Filter books
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Read
                </a>
                <a className="navbar-item" href="https://catalogue.wcl.govt.nz/?section=myaccount&page=myLists&tab=myList_682563133">
            Reading list
                </a>
                {/* <hr className="navbar-divider"/> */}
                {/* <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Recommendations
                </a> */}
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link to='/favourites' className='bd-tw-button button'>
                    <span className="icon">
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span>
                Favourites
                    </span>
                  </Link>
                </p>
                <p className="control">
                  <a className="button is-primary" href="https://catalogue.wcl.govt.nz/?section=myAccount">
                    <span className="icon iconBook">
                      <FontAwesomeIcon icon={faBook} />
                    </span>
                    <span>Borrow a book</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
