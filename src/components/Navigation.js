/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  let classList = "btn btn-neutral normal-case text-xl bg-neutral-focus"
  return (
    <div className="navbar text-2xl text-success-content bg-base-300">
      <div className="flex-auto text-2xl text-neutral-focus" >
        <a
          href='#home'
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? `${classList} nav-link active` : `${classList} nav-link`}

        >Mona M. Lee</a>
      </div>
      <div className="flex-none text-xs sm:text-sm md:text-xl">
        <ul className="menu menu-horizontal px-1">
          <li><a
            href='#home'
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >Home</a></li>

          <li><a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >About</a></li>

          <li><a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >Resume</a></li>

          <li><a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >Contact</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Navigation;