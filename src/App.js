import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import './App.css'
import { collection, getDocs } from 'firebase/firestore'

function App({ db }) {
  // Firestore 연결 확인 함수
  const checkDBConnection = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'mijangone'))
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => `, doc.data())
      })
    } catch (error) {
      console.error('Firestore 데이터베이스 연결 오류: ', error)
    }
  }

  useEffect(() => {
    checkDBConnection()
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <h1>Firestore DB 연결 체크</h1>
    </div>
  )
}

export default App
