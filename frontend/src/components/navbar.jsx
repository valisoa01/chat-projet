import React from 'react'
function navbar() {
  return (
    <nav class="navbar">

        <div class="navbar-container container">
            <ul class="menu-items">
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Category">Category</a></li>
                <li><a href="Menu">Menu</a></li>
                <li><a href="Testimonial">Testimonial</a></li>
                <li><a href="Contact">Contact</a></li>
            </ul>
            <h1 class="logo">Navbar</h1>
        </div>
    </nav>
  )
}
export default navbar
