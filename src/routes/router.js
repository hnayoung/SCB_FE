import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from "../pages/components/Mainlayout";

const Ranking = lazy(() => import("../pages/ranking/Ranking"));
const LoginForm = lazy(() => import("../pages/login/LoginForm"));
const SignupForm = lazy(() => import("../pages/signup/SignupForm"));
const CodeReview = lazy(() => import("../pages/codeReview/CodeReview"));
const Community = lazy(() => import("../pages/components/Community")); // 커뮤니티 컴포넌트 import
const CommentDetail = lazy(() => import("../pages/comments/CommentDetail")); // 댓글 상세 컴포넌트 import
const MyPage = lazy(() => import("../pages/mypage/MyPage")); // 마이페이지 컴포넌트 import
const Board = lazy(() => import("../pages/board/Board")); // 게시판 컴포넌트 import

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout /> {/* MainLayout을 홈으로 설정 */}
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LoginForm />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <SignupForm />
      </Suspense>
    ),
  },
  {
    path: "/code-review",
    element: (
      <Suspense fallback={<Loading />}>
        <CodeReview />
      </Suspense>
    ),
  },
  {
    path: "/community/:communityName", // 커뮤니티 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <Community />
      </Suspense>
    ),
  },
  {
    path: "/comment/:id", // 댓글 ID에 대한 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <CommentDetail />
      </Suspense>
    ),
  },
  {
    path: "/mypage", // 마이페이지 경로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <MyPage />
      </Suspense>
    ),
  },
  {
    path: "/ranking",
    element: (
      <Suspense fallback={<Loading />}>
        <Ranking />
      </Suspense>
    ),
  },
  {
    path: "/board",
    element: (
      <Suspense fallback={<Loading />}>
        <Board />
      </Suspense>
    ),
  },
]);

export default router;
