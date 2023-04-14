import React from 'react'

import { Button } from 'hanifbtnui'
import 'hanifbtnui/dist/index.css'

const App = () => {
  return (
    <>
      <Button
        type='primary'
        emoji='😇'
        text='Click Me'
        onClick={() => alert('Primary')}
      />
      <Button
        type='danger'
        emoji='😱'
        text='Click Me'
        onClick={() => alert('Danger')}
      />
      <Button
        type='dashed'
        emoji='🧐'
        text='Click Me'
        onClick={() => alert('Dashed')}
      />
      <Button
        type='warning'
        emoji='😈'
        text='Click Me'
        onClick={() => alert('Warning')}
      />
      <Button
        type='default'
        emoji='😄'
        text='Click Me'
        onClick={() => alert('Default')}
      />
      <Button
        emoji='😏'
        type='link'
        text='Click Me'
        onClick={() =>
          (window.location.href =
            'https://github.com/HanifeMehan?tab=repositories')
        }
      />
    </>
  )
}

export default App
