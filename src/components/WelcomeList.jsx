import React from 'react'

const WelcomeList = ({names}) => {

  return (
    <>
      {names.map((val) => (
        <p key={val}>{val}</p>
      ))}
    </>
  )
}

export default WelcomeList