import React, { useEffect } from 'react'

export const Page = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${props.title} | Tasks Application`
  }, [])
  return(
    <main>
      {props.children}
    </main>
  )
}
