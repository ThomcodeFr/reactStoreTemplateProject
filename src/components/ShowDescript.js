import { useState } from 'react'

export function ShowButtonHover() {
  const [style, setStyle] = useState('false')

  return (
    <div className="Showbutton">
      if (useState('false')){'Plop!!'}
      <button style={style}>Cliquer</button>
    </div>
  )
}
