import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AddBook from './AddBook'

function Nav () {
  const menuRef = useRef(null)
  const burgerRef = useRef(null)
  const modalRef = useRef(null)

  const handleToggleMenu = () => {
    if (menuRef.current.style.display !== 'block') {
      menuRef.current.style.display = 'block'
    } else {
      menuRef.current.style.display = 'none'
    }
  }

  const hideMenu = () => {
    if (burgerRef.current.style.display === 'block' || menuRef.current.style.display === 'block') {
      menuRef.current.style.display = 'none'
    }
  }

  const handleModal = () => {
    const modalClassNames = modalRef.current.className
    if (!modalClassNames.includes('is-active')) {
      modalRef.current.className = 'modal is-active'
    } else {
      modalRef.current.className = 'modal'
    }
  }

  return (
    <>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <Link to='/' className="navbar-item">
            <p className="subtitle is-3">books.</p>
          </Link>
          <div ref={burgerRef} className="navbar-burger" data-target="navbarExampleTransparentExample" onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div ref={menuRef} id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to='/' className='navbar-item' onClick={hideMenu}>Home</Link>
            <p className='navbar-item js-modal-trigger' data-target="modal-js-example" onClick={handleModal}>Add book</p>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="">
          Filter books
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Read
                </a>
                <a className="navbar-item" href="https://catalogue.wcl.govt.nz/?section=myaccount&page=myLists&tab=myList_682563133">
            Reading list
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link to='/favourites' className='bd-tw-button button' onClick={hideMenu}>
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
      <div id="modal-js-example" className="modal" ref={modalRef}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <AddBook/>
          </div>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={handleModal}></button>
      </div>
    </>
  )
}

export default Nav
