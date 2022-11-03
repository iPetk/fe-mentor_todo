import React, { useEffect, useState } from 'react';
import { setTheme } from './themes';

function Toggle() {
    let theme = localStorage.getItem('theme')

    const changeThemeAndToggle = () => {
        console.log(theme);
      if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light')
      } else {
        setTheme('theme-dark')
      }
    }

     const handleOnClick = () => {
       changeThemeAndToggle()
     }


    useEffect(() => {
      if (localStorage.getItem('theme') === 'theme-dark') {
      } else if (localStorage.getItem('theme') === 'theme-light') {
      }
    }, [theme])

    return (
        <div className="toggleTheme" onClick={handleOnClick}></div>
    )
}

export default Toggle;