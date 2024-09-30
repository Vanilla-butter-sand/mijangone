import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore' // Firestore 관련 함수
import styles from './Main.module.css'

const Main = () => {
  const [appleStockData, setAppleStockData] = useState(null)
  const [teslaStockData, setTeslaStockData] = useState(null)
  const [nvidiaStockData, setNvidiaStockData] = useState(null)

  // Firestore에서 데이터 불러오는 함수
  const fetchStockData = async (stockName, setStockData) => {
    const db = getFirestore()
    const stockDoc = doc(db, 'mijangone', stockName) // 'mijangone' 컬렉션에서 stockName 문서 가져옴
    const docSnap = await getDoc(stockDoc)

    if (docSnap.exists()) {
      setStockData(docSnap.data()) // 데이터를 상태에 저장
    } else {
      console.log(`No such document for ${stockName}!`)
    }
  }

  useEffect(() => {
    fetchStockData('apple_stock', setAppleStockData) // Apple 주식 데이터 불러오기
    fetchStockData('tesla_stock', setTeslaStockData) // Tesla 주식 데이터 불러오기
    fetchStockData('nvidia_stock', setNvidiaStockData) // Nvidia 주식 데이터 불러오기
  }, [])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src='/mizang3.png'
            style={{ width: '50%', height: 'auto' }}
            alt=''
          />
        </div>
        <div style={{ margin: '20px' }}>
          <p className={styles.R16} style={{ color: '#7c7c7c' }}>
            2024.9.21 토요일
          </p>
        </div>
        <div className={styles.ReportContainer}>
          <div className={styles.imageContainer}>
            <img
              src='/myreport.png'
              style={{ width: '310px', height: 'auto', marginBottom: '4px' }}
              alt=''
            />
          </div>

          {/* Nvidia Stock 정보 */}
          <div className={styles.ReportBody}>
            <div className={styles.stock_price}>
              <p className={styles.SB20}>
                {nvidiaStockData ? nvidiaStockData.stock_name : 'Loading...'}
              </p>
              <p
                className={styles.R18}
                style={{ marginRight: '10px', marginLeft: '147px' }}
              >
                {nvidiaStockData
                  ? `$${nvidiaStockData.closing_price}`
                  : 'Loading...'}
              </p>
              <p
                className={
                  nvidiaStockData && nvidiaStockData.change >= 0
                    ? styles.Rise
                    : styles.Fall
                }
              >
                {nvidiaStockData
                  ? `${nvidiaStockData.change >= 0 ? '+' : ''}${
                      nvidiaStockData.change
                    }%`
                  : 'Loading...'}
              </p>
            </div>
            <div className={styles.stock_inf}>
              <div className={styles.stock_content}>
                <img
                  src='/check.png'
                  style={{ width: '24px', height: 'auto' }}
                  alt=''
                />
                <p
                  className={styles.R16}
                  style={{ paddingLeft: '4px', paddingRight: '4px' }}
                >
                  패시브 투자 함정
                </p>
              </div>
              <div className={styles.stock_content}>
                <img
                  src='/check.png'
                  style={{ width: '24px', height: 'auto' }}
                  alt=''
                />
                <p
                  className={styles.R16}
                  style={{ paddingLeft: '4px', paddingRight: '4px' }}
                >
                  성장이 둔화됐다는 시장의 판단
                </p>
              </div>
            </div>
          </div>

          {/* Tesla Stock 정보 */}
          <div className={styles.ReportBody}>
            <div className={styles.stock_price}>
              <p className={styles.SB20}>
                {teslaStockData ? teslaStockData.stock_name : 'Loading...'}
              </p>
              <p
                className={styles.R18}
                style={{ marginRight: '10px', marginLeft: '147px' }}
              >
                {teslaStockData
                  ? `$${teslaStockData.closing_price}`
                  : 'Loading...'}
              </p>
              <p
                className={
                  teslaStockData && teslaStockData.change >= 0
                    ? styles.Rise
                    : styles.Fall
                }
              >
                {teslaStockData
                  ? `${teslaStockData.change >= 0 ? '+' : ''}${
                      teslaStockData.change
                    }%`
                  : 'Loading...'}
              </p>
            </div>
            <div className={styles.stock_inf}>
              <div className={styles.stock_content}>
                <img
                  src='/check.png'
                  style={{ width: '24px', height: 'auto' }}
                  alt=''
                />
                <p
                  className={styles.R16}
                  style={{ paddingLeft: '4px', paddingRight: '4px' }}
                >
                  기술력 열세, 빈약한 포트폴리오
                </p>
              </div>
              <div className={styles.stock_content}>
                <img
                  src='/check.png'
                  style={{ width: '24px', height: 'auto' }}
                  alt=''
                />
                <p
                  className={styles.R16}
                  style={{ paddingLeft: '4px', paddingRight: '4px' }}
                >
                  최고경영자(CEO)인 일론 머스크의 신뢰 상실
                </p>
              </div>
            </div>
          </div>

          {/* Apple Stock 정보 */}
          <div className={styles.ReportBody}>
            <div className={styles.stock_price}>
              <p className={styles.SB20}>
                {appleStockData ? appleStockData.stock_name : 'Loading...'}
              </p>
              <p
                className={styles.R18}
                style={{ marginRight: '10px', marginLeft: '147px' }}
              >
                {appleStockData
                  ? `$${appleStockData.closing_price}`
                  : 'Loading...'}
              </p>
              <p
                className={
                  appleStockData && appleStockData.change >= 0
                    ? styles.Rise
                    : styles.Fall
                }
              >
                {appleStockData
                  ? `${appleStockData.change >= 0 ? '+' : ''}${
                      appleStockData.change
                    }%`
                  : 'Loading...'}
              </p>
            </div>
            <div className={styles.stock_inf}>
              <div className={styles.stock_content}>
                <img
                  src='/check.png'
                  style={{ width: '24px', height: 'auto' }}
                  alt=''
                />
                <p
                  className={styles.R16}
                  style={{ paddingLeft: '4px', paddingRight: '4px' }}
                >
                  구글의 안드로이드 시스템을 사용하여 AI 기능에 진입함
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className={styles.button}>미장원 방문하기</button>
      </div>
    </>
  )
}

export default Main
