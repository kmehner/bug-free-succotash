import React from 'react'

const Teas = ({ teas }) => {
  return (
    <>
      <h1>Teas</h1>

      {teas.map((tea, index) => <p key={index}>{tea}</p>)}
    </>
  )
}

Teas.defaultProps = {
  teas: ["Earl Grey", "Sleepytime", "Green Tea"]
}

export default Teas

{/* <div>
<h1>Teas</h1>
<ul>
  <li>Green Tea</li>
  <li>Chamomile Tea</li>
  <li>Earl Grey</li>
</ul>
</div> */}