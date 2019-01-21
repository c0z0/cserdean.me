import React, {useState, useEffect} from 'react'

const apiRoot = 'https://ai.cserdean.me'

export default function ServiceStatus() {
  const [status, setStatus] = useState('init')

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`${apiRoot}/ping`)
      if (res.ok) {
        setStatus('ready')
      }
    })()
  }, [])

  return (
    <div className="ball" title="AI Service Status">
      <style jsx>{`
        .ball {
          transition: all 0.2s linear;
          width: 10px;
          height: 10px;
          background: ${status === 'init' ? '#f4d142' : '#5ff441'};
          display: inline-block;
          border-radius: 100%;
        }
      `}</style>
    </div>
  )
}
