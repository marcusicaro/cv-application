import React from 'react'

export const SummaryRender = ({props}) => {
  const {summary} = props
  return (
    <div className='summary-info'>
        <p>{summary}</p>
    </div>
  )
}
