import React from 'react'
import style from "./Header.module.css"

function Header() {

    const username="jhon smith"
  return (
    <div className={style.profileContainer}>
      <h1 className={style.profileTitle}>Hello I am {username}</h1>
    </div>
  )
}

export default Header
