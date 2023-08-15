import React from 'react'
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import styles from './Header.module.css'
import { useFavorites } from '../../hooks/useFavorites'

function Header() {
    const {favorites} = useFavorites()

  return (
    <header className={styles.header} >
        <BsFillBookmarkHeartFill fontSize={18} />
        <span>{favorites.length}</span>
      </header>
  )
}

export default Header