import React from 'react'

const Pastries = ({ items }) => {
  return (
    <div>
    <h1>Pastries</h1>

    { items.map((item, index) => <p key={index}>{item}</p>)}
  </div>
  )
}

export default Pastries

{/* <div>
<h1>Pastries</h1>
<ul>
  <li>Croissant</li>
  <li>Blueberry Muffin</li>
  <li>Cinnamon Roll</li>
</ul>
</div> */}