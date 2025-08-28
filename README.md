## AllClear Web

---

## 🧭 프로젝트 소개
> AllClear-Web은 **QUEUE-SW 프로젝트의 프론트엔드**로,  
사용자에게 대기열 현황, 수강신청 기능, 실시간 피드백을 제공합니다.  
React + Vite 기반으로 개발되었으며, 실시간 대기열 상태를 표시하고 직관적이고 원활한 UI/UX를 목표로 합니다.

---

## 🛠️ 기술 스택

| 분류             | 기술                               |
|------------------|------------------------------------|
| **언어**         | JavaScript                         |
| **프레임워크**   | React                              |
| **번들러/빌드**  | Vite                               |
| **스타일링**     | Tailwind CSS                       |
| **실시간 통신**  | Polling, SSE(Server-Sent Events)   |
| **API 통신**     | Axios                              |
| **상태 관리**    | Zustand                            |
| **패키지 매니저**| npm                                |
| **배포 도구**    | AWS S3, CloudFront                 |
| **협업 도구**    | Figma, Github, Confluence, Slack   |

## 💡 주요 기능
- **대기열 화면** : 로그인 후 유저 순번 확인
<img width="466" height="500" alt="e1cfa9c7-f7ec-4d5f-8d56-7e13c6d63fe1" src="https://github.com/user-attachments/assets/b80127d7-ae06-4f69-8d9e-e20f78e398bc" />

- **수강신청** : 대기열 통과한 유저는 강좌를 선택 및 신청 가능
<img width="1271" height="500" alt="d775dda5-c777-45c6-8e9d-be5b8772133b" src="https://github.com/user-attachments/assets/6e32165f-4fa2-4180-a3da-0fd485fe1f6f" />

- **잔여석 확인 등 실시간 피드백** : Polling 기반 강의 여석 및 신청 결과 즉시 확인 가능

---

## ⚙ 시스템 아키텍처
- 프론트 아키텍처
<img width="720" height="273" alt="______________________720" src="https://github.com/user-attachments/assets/590b5df0-5f2b-44c3-b674-fbd575ffeee5" />

---

## 📁 폴더 구조
```
📦AllClear-web
 ┣ 📂.git
 ┣ 📂.github
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂enroll
 ┃ ┃ ┃ ┣ 📜CourseItem.jsx
 ┃ ┃ ┃ ┣ 📜CoursesList.jsx
 ┃ ┃ ┃ ┣ 📜CreditsStatus.jsx
 ┃ ┃ ┃ ┣ 📜EnrollForm.jsx
 ┃ ┃ ┃ ┣ 📜Filter.jsx
 ┃ ┃ ┃ ┣ 📜FilterBar.jsx
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┣ 📜RegisteredCourseItem.jsx
 ┃ ┃ ┃ ┗ 📜RegisteredCoursesList.jsx
 ┃ ┃ ┗ 📂home
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┣ 📜Announcement.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┃ ┣ 📜LoginForm.jsx
 ┃ ┃ ┃ ┃ ┗ 📜SignUpForm.jsx
 ┃ ┃ ┃ ┗ 📜Home.jsx
 ┃ ┣ 📂constants
 ┃ ┃ ┣ 📜filterOptions.js
 ┃ ┃ ┗ 📜signupOptions.js
 ┃ ┣ 📂data
 ┃ ┃ ┗ 📜userOptions.js
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜useCapaSSE.js
 ┃ ┃ ┣ 📜useFilter.js
 ┃ ┃ ┗ 📜useSSE.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜AuthPage.jsx
 ┃ ┃ ┣ 📜EnrollPage.jsx
 ┃ ┃ ┣ 📜HomePage.jsx
 ┃ ┃ ┣ 📜LoginPage.jsx
 ┃ ┃ ┣ 📜QueuePage.jsx
 ┃ ┃ ┗ 📜SignUpPage.jsx
 ┃ ┣ 📂router
 ┃ ┃ ┣ 📜auth.jsx
 ┃ ┃ ┣ 📜enroll.jsx
 ┃ ┃ ┣ 📜home.jsx
 ┃ ┃ ┣ 📜queue.jsx
 ┃ ┃ ┗ 📜root.jsx
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜courses.js
 ┃ ┃ ┣ 📜enrollments.js
 ┃ ┃ ┣ 📜queue.js
 ┃ ┃ ┗ 📜student.js
 ┃ ┣ 📂stores
 ┃ ┃ ┣ 📜authStore.js
 ┃ ┃ ┗ 📜queueStore.js
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜apiInterface.js
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜axiosInstance.js
 ┃ ┃ ┗ 📜validation.js
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜main.jsx
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜jsconfig.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜README.md
 ┣ 📜tailwind.config.js
 ┗ 📜vite.config.js
```
