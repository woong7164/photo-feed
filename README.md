This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

```bash
.
├─ build
│  ├─ alias.js #파일 패스 별칭 관리
│  ├─ buildPlugins.js # 빌드 시 사용되는 플러그인
│  ├─ webpack.config.base.js # 공통 webpack config 파일, 여기서 환경에 따라 머지됨
│  ├─ webpack.config.dev.js # development 모드, build-dev config 파일, 개발 서버 빌드
│  ├─ webpack.config.local.js # local 모드, dev config 파일, 로컬에서 데브툴로 붙을때
│  ├─ webpack.config.prod.js # development 모드, build config 파일
│  └─ webpack.config.staging.js # production 모드, build-stg webpack config 파일
├─ dist #빌드 결과물
├─ node_modules # npm 모듈
├─ src
│  ├─ asset # 정적 리소스, css파일
│  ├─ constant # 상수 변수 폴더
│  ├─ utill # js 모듈
│  ├─ route # react route
│  │  ├─ RoutePage.js # 라우트 매칭 되는곳
│  │  └─ pathsConstant.js # 라우트 패스만 모아놓은 파일
│  ├─ api # api 콜 모듈
│  │  ├─ 서비스.js # 서비스 별 API 콜 모듈
│  │  └─ url.js # api url들 모아놓음
│  ├─ store #
│  │  ├─ sages.js # sage root
│  │  ├─ reducers.js # reducer root
│  │  └─ common # 공통 스토어 폴더
│  ├─ views # 화면 폴더
│  │  ├─ apps # 서비스 분리
│  │  │ ├─ city_home # 도시홈
│  │  │ ├─ place_home # 장소홈
│  │  │ └─ plan # 여행계획
│  │  │    ├─ plan_page # 여행계획 특정 페이지 (페이지 단위)
│  │  │       ├─ component # 여행계획 컴포넌트 폴더
│  │  │          └─ PlanPageButton.jsx
│  │  │       ├─ PlanPage.jsx # 최상위 페이지 컨테이너
│  │  │       ├─ PlanPagetest.js # 테스트 파일
│  │  │       ├─ PlanPageAction.jsx # 페이지 액션
│  │  │       ├─ PlanPageReducer.jsx # 페이지 리듀서
│  │  │       ├─ PlanPageSaga.jsx # 페이지 사가
│  │  │       └─ PlanPageTypes.jsx # 페이지 타입
│  │  │    └─ planReducer.js # 여행계획스토어 묶음
│  │  ├─ layout # APP에 붙는 레이아웃 컴포넌트, 헤더, 풋터
│  │  ├─ shered # 공통 컴포넌트, 로딩
│  │  ├─ App.js
│  │  └─ Template.js # 복붙용 템플릿
│  └─ index.js

```
