import React, { useEffect, useState } from 'react'
//컴포넌트의 상태 관리하는 React 관련 훅
import { useNavigate } from 'react-router'
//페이지 이동을 위한 훅
import BackendApis from '../../utils/backendApis'
// 백엔드와의 API 통신을 관리하는 클래스
import styles from './Main.module.css'
// CSS 모듈을 통해 스타일 적용

const Main = () => {
  return (
    <>
      <>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img src='/mizang3.png' style={{ width: '50%', height: 'auto' }} />
          </div>
          <div style={{ margin: '20px' }}>
            {/* 이 부분 데이터 받아와야함(날짜) */}
            <p className={styles.R16} style={{ color: '#7c7c7c' }}>
              2024.9.21 토요일
            </p>
          </div>
          <div className={styles.ReportContainer}>
            <div className={styles.imageContainer}>
              <img
                src='/myreport.png'
                style={{
                  width: '310px',
                  height: 'auto',
                  marginBottom: '4px',
                }}
              />
            </div>
            <div className={styles.ReportBody}>
              <div className={styles.stock_price}>
                <p className={styles.SB20}>NVDA</p>
                <p
                  className={styles.R18}
                  style={{ marginRight: '10px', marginLeft: '147px' }}
                >
                  $112
                </p>
                <p className={styles.Fall}>-1.3%</p>
              </div>
              <div className={styles.stock_inf}>
                <div className={styles.stock_content}>
                  <img
                    src='/check.png'
                    style={{ width: '24px', height: 'auto' }}
                  ></img>
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
                  ></img>
                  <p
                    className={styles.R16}
                    style={{ paddingLeft: '4px', paddingRight: '4px' }}
                  >
                    성장이 둔화됐다는 시장의 판단
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ReportBody}>
              <div className={styles.stock_price}>
                <p className={styles.SB20}>TSLA</p>
                <p
                  className={styles.R18}
                  style={{ marginRight: '10px', marginLeft: '147px' }}
                >
                  $112
                </p>
                <p className={styles.Fall}>-1.3%</p>
              </div>
              <div className={styles.stock_inf}>
                <div className={styles.stock_content}>
                  <img
                    src='/check.png'
                    style={{ width: '24px', height: 'auto' }}
                  ></img>
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
                  ></img>
                  <p
                    className={styles.R16}
                    style={{ paddingLeft: '4px', paddingRight: '4px' }}
                  >
                    최고경영자(CEO)인 일론 머스크의 신뢰 상실
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.ReportBody}>
              <div className={styles.stock_price}>
                <p className={styles.SB20}>AAPL</p>
                <p
                  className={styles.R18}
                  style={{ marginRight: '10px', marginLeft: '147px' }}
                >
                  $112
                </p>
                <p className={styles.Rise}>+1.3%</p>
              </div>
              <div className={styles.stock_inf}>
                <div className={styles.stock_content}>
                  <img
                    src='/check.png'
                    style={{ width: '24px', height: 'auto' }}
                  ></img>
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
    </>
  )
}

export default Main
