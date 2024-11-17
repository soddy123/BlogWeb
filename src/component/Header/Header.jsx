import React, { useState } from 'react';
import { Container, LogoutBtn } from '../index'; // Removed Logo import since we're using an image now

// for redirection
import { Link } from 'react-router-dom';

// ye selector iis liye lagega iis se store me ja ke dek pauga ki user login he ki nahi
import { useSelector } from 'react-redux';

// for navigate
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Import logo image

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // Check if the user is authenticated
  const navigate = useNavigate(); // Hook for navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  // jab bi ek navigation bar banti he ek array banaya jata he our uuske aandar loop kiya jata he
  // & array ke aandar object hote he
  const navItems = [
    {
      name: 'Home',
      slug: '/',   // it means url kaha pe ja raha he
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus, // Only show if the user is not logged in
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus, // Only show if the user is not logged in
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus, // Only show if the user is logged in
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus, // Only show if the user is logged in
    },
  ];

  // Function to handle navigation and close the menu after clicking an item
  const handleNavClick = (slug) => {
    navigate(slug);    // Navigate to the specified slug
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="py-3 shadow rounded-3xl bg-[#FBBF24]"> {/* Light Orange background with border-radius */}
      <Container>
        {/* container ke aandar nav component lege ek logo lagaye ge and unorder list ke aandar loop lagayege */}
        <nav className="flex items-center justify-between flex-wrap"> {/* Flexbox for alignment and wrapping */}
          
          {/* Logo replaced with image */}
          <div className="mr-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-16 h-auto rounded-full" /> {/* Adjusted logo size */}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu visibility
              className="px-3 py-2 border rounded text-black border-black hover:text-white hover:bg-black"
            >
              Menu
            </button>
          </div>

          {/* Navigation items with space and alignment */}
          <ul className={`lg:flex lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block flex-col lg:flex-row`}> {/* Toggle class to handle showing/hiding menu */}
            {/* yahase start kareg ham javascript */}
            {navItems.map((item) =>
              item.active ? (
                // hame keys waha lagani he jaha ka element repeat hoga
                <li key={item.name} className="mb-2 lg:mb-0"> {/* mb-2 for small screens to give space */}
                  <button
                    onClick={() => handleNavClick(item.slug)} // Navigate and close the menu
                    className="inline-block px-6 py-2 duration-200 bg-[color:#45B8D1] text-black border-2 border-[color:#FFA500] rounded-full hover:bg-[color:#3CB371] hover:border-[color:#FF004F] w-full text-center lg:w-auto"
                    // Picton Blue background, Orange border, Sea Green hover background, and Folly hover border
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {/* {authStatus && ()} ka matlab he ki authStatus true hoga tabhi () iiske aandar ki chij run hogi most of the time for calculative decision ke liye ham ye use karege */}
            {/* this below code says that if authenticated, show the logout button */}
            {authStatus && (
              <li className="mb-2 lg:mb-0">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
