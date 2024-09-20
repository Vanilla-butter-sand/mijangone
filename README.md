### 해당 파일은 기본 셋팅을 위한 파일임.
### client는 프론트, server은 백임.
### client는 react 기반이고, server는 node.js 기반임
### database는 몽고 DB를 사용할 예정.(sql 난 사용 가능한데, 데이터베이스 안듣고 하면 정신 나감)
### 코딩 애플 강의 ID : tkddn3200 PW : rla5458*, 3개 들어오셈요
### 1. (무료) 매우쉽게 알려주는 git & github 
    ### 별로 안됨
### 2. React 리액트 기초부터 쇼핑몰 프로젝트까지!
    ### part 1이랑 part 2 다 들어야 좋긴 함
### 3. Node.js, MongoDB로 빠르게 웹서비스 만들기
    ### 얘 part 3까지 다 들을 필요 없을 듯(저도 다 안 들었음;;)


1. server파일 VSCODE로 열고 들어가서

.env 파일 생성

NODE_ENV=development
DB_NAME_DEV=forum
DB_PASSWORD_DEV=qwer1234
PORT_DEV=8000
ACCESS_TOKEN_DEV=69e209e2482258ec4f4588124722b57830b8c89e
DB_NAME_PROD=forum
DB_PASSWORD_PROD=qwer1234
PORT_PROD=8000
ACCESS_TOKEN_PROD=69e209e2482258ec4f4588124722b57830b8c89e

기입 후 저장



2. client 따로 VSCODE 창 열어서 .env.development 파일 생성

REACT_APP_API_URI="http://localhost:8000"

기입 후 저장


3. utils안에 있는 config.js 들어가서
  configs.mainDbUri = `mongodb+srv://admin:${configs.dbPassword}@cluster0.dbrerof.mongodb.net/${configs.dbName}?readPreference=secondaryPreferred&w=1`
이런 주소는 내 몽고 DB에 맞게 바꾸면 됨


4. server랑 client 각각 npm install, npm start 하면 됨.
