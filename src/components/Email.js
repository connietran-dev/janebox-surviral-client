import React from 'react'

const Email = () => {
  function closeModal(event) {
    console.log(event.target)
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

export default Email
