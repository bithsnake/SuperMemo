import React from 'react'
import { ReactElement } from 'react'

const CurrentPage = (props: { currentPage: ReactElement }) => {
  return (
      <div>{props.currentPage}</div>
  )
}

export default CurrentPage