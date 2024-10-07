import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import styles from './Main.module.css' // 동료의 스타일을 App.module.css로 불러옴

const Main = () => {
  const [currentDate, setCurrentDate] = useState('')
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    // 날짜 설정
    const date = new Date()
    const day = date.toLocaleDateString('ko-KR', { weekday: 'long' })
    const formattedDate = `${date.getFullYear()}. ${
      date.getMonth() + 1
    }. ${date.getDate()} ${day}`
    setCurrentDate(formattedDate)

    // Firestore에서 주식 데이터를 가져오는 함수
    const fetchStockData = async () => {
      try {
        const db = getFirestore()
        const querySnapshot = await getDocs(collection(db, 'mijangone'))
        const stocksArray = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setStocks(stocksArray)
      } catch (error) {
        console.error('Error fetching stock data: ', error)
      }
    }

    fetchStockData()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src='/mizang3.png'
          style={{ width: '50%', height: 'auto' }}
          alt='Main logo'
        />
      </div>
      <div style={{ margin: '20px' }}>
        <p className={styles.R16} style={{ color: '#7c7c7c' }}>
          {currentDate}
        </p>
      </div>
      <div className={styles.ReportContainer}>
        <div className={styles.imageContainer}>
          <img
            src='/myreport.png'
            style={{ width: '310px', height: 'auto', marginBottom: '4px' }}
            alt='Report'
          />
        </div>

        {stocks && stocks.length > 0 ? (
          stocks.map((stock) => (
            <div key={stock.id} className={styles.ReportBody}>
              <div className={styles.Report_title}>
                <p className={styles.SB20}>{stock.stock_name}</p>
                <p className={styles.R18}>
                  ${Number(stock.closing_price).toFixed(2)}
                </p>
                <p className={stock.change >= 0 ? styles.Rise : styles.Fall}>
                  {stock.change > 0 ? `+${stock.change}%` : `${stock.change}%`}
                </p>
              </div>
              <div className={styles.stock_inf}>
                {stock.stock_details &&
                  stock.stock_details.map((detail, index) => (
                    <div key={index} className={styles.stock_content}>
                      <img
                        src='/check.png'
                        style={{ width: '24px', height: 'auto' }}
                        alt='check'
                      />
                      <p
                        className={styles.R16}
                        style={{ paddingLeft: '4px', paddingRight: '4px' }}
                      >
                        {detail}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading stocks...</p>
        )}
      </div>
    </div>
  )
}

export default Main
