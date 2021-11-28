import React from 'react'

export const Email = () => {
  function closeModal(event) {
    document.getElementById('email').style.display = "none"
  }
  return (
    <section onClick={closeModal} id="email" className="Email">
      <div>
        <p className="glow">Click anywhere to close</p>
      </div>
    </section>
  )
}
