const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // 원하는 포트 번호로 변경 가능

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 사용자 정보를 저장하는 가상 데이터베이스
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
  // 추가 사용자 정보
];

// 로그인 API 엔드포인트
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  
  // 사용자 인증
  const user = users.find((user) => user.username === username && user.password === password);
  
  if (user) {
    // 로그인 성공
    res.json({ success: true, message: '로그인 성공!' });
  } else {
    // 로그인 실패
    res.status(401).json({ success: false, message: '유효하지 않은 사용자명 또는 비밀번호입니다.' });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
