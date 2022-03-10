import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Keypair } from '@solana/web3.js'
import { PublicKey as SolanaPublicKey, Transaction as SolanaTx } from '@solana/web3.js'
import { PublicKey as NearPublicKey } from 'near-api-js/lib/utils'
console.log(Keypair.generate())
// import { serialize, baseDecode, deserialize } from 'borsh'

// import crypto from 'crypto-browserify'
console.log(new SolanaPublicKey('7iajpXZydiLrKgN1QTAm8ohNuGfEUGbPG3DuaDmGjZ8T'))
export const DEFAULT_NEAR_PUBLIC_KEY = NearPublicKey.fromString('11111111111111111111111111111111')
console.log(DEFAULT_NEAR_PUBLIC_KEY)
// console.log(crypto.randomBytes(16))
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App' style={{ width: 500 }}>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + ss!</p>dsadss
        <p>
          <button type='button' onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
