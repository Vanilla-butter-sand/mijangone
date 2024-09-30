import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'

// Firebase SDK 불러오기
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

// Firebase 설정 및 초기화
const firebaseConfig = {
  apiKey: 'AIzaSyCC-C9pDinNGsfEyTKbpMQMS5bYBGyZBtU',
  authDomain: 'mijangone-994d4.firebaseapp.com',
  projectId: 'mijangone-994d4',
  storageBucket: 'mijangone-994d4.appspot.com',
  messagingSenderId: '836669629773',
  appId: '1:836669629773:web:2c22c92cbc76719d164304',
  measurementId: 'G-2NEG49X7GQ',
}

// Firebase 초기화
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const analytics = getAnalytics(app)

// React DOM 초기화
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <App db={db} />
    </Router>
  </React.StrictMode>,
)

// 성능 측정 함수 (필요시 사용)
reportWebVitals()
