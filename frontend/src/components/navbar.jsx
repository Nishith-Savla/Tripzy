import React from 'react'
import trpizyLogo from "../assets/logo/tripzy.png"


function Navbar(props) {
  return (
    <header className="d-flex align-items-center g-3">
    <img src={trpizyLogo} width="60px" alt="" />
    <h1 className="secondary-font page-title larger-2">Tripzy</h1>
  </header>
  )
}

export default Navbar