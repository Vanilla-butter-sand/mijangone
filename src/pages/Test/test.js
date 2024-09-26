import React, { useEffect, useState } from 'react'
//컴포넌트의 상태 관리하는 React 관련 훅
import { useNavigate } from 'react-router'
//페이지 이동을 위한 훅
import BackendApis from '../../utils/backendApis'
// 백엔드와의 API 통신을 관리하는 클래스
import styles from './test.module.css'
// CSS 모듈을 통해 스타일 적용

const Test = () => {
  return (
    <>
      <>
        <div className={styles.container}>
          <h1 style={{ fontSize: '32px' }}>안녕하세요님</h1>
          <div className={styles.progressContainer}>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                이만큼 읽었어요!
              </div>
            </div>
            <div>
              <p className={styles.page}>남은 쪽수</p>
            </div>
          </div>
        </div>
        <div className={styles.attendanceContainer}>
          <div className={styles.title}>10일 챌린지 미션 진행 중!</div>
          <div className={styles.sub}>
            매일 독서일지를 쓰면, 선물을 받을 수 있어요
          </div>
          <div className={styles.attendanceDots}></div>
        </div>
      </>
    </>
  )
}

export default Test
