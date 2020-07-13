import React from 'react'

const Email = () => {
  function closeModal() {
    document.getElementById('email').style.display = "none"
  }
  return (
    <section id="email" className="Email">
      <button onClick={closeModal}></button>
      <img src="" alt="" />
    </section>
  )
}

export default Email
