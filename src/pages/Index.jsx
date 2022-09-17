import React, { useRef } from 'react'
import { FaClipboard } from 'react-icons/fa'

const packages = [
  'tailwindcss',
  'redux-toolkit',
  'react-redux',
  'react-router-dom',
  'react-icons',
  'react-helmet'
]

function Index() {
  const ref = useRef()

  function copyToClipboard(ref) {
    navigator.clipboard.writeText(ref.current.innerHTML).then(() => {
      alert("Copied to clipboard");
    });
  }
  return (
    <div>
      <div>
        <center>my Boilerplate</center>
        <center>the packages</center>
        <div>
          {
            packages.map((i, index) => { return <span className='block p-1 my-3 mx-2 bg-[rgba(0,0,0,.5)] text-[#FFFF] rounded-lg'><code>{i}</code></span> })
          }
        </div>
      </div>
      <div className='bg-[rgba(0,0,0,.6)] text-[#FFFF] rounded-lg mx-5 px-3 py-5 relative'>
        <span onClick={() => { copyToClipboard(ref) }} className='absolute cursor-pointer top-2 right-2 bg-[rgba(0,0,0,.7)] p-1.5 rounded-lg'><FaClipboard /></span>
        <code ref={ref}>
          git clone https://github.com/ah7255703/react-boilerplate-template.git reactproject
        </code>
      </div>
    </div>
  )
}

export default Index