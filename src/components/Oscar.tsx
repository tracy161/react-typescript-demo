import React from 'react'

// A ReactNode is a ReactElement, a ReactFragment, a string, a number or an array of ReactNodes, or null, or undefined, or a boolean
type OscarProps = {
    children: React.ReactNode
}

const Oscar = ({children}: OscarProps) => {
  return (
    <div>{children}</div>
  )
}

export default Oscar