import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
// import Layout from "../pages/layout/Layout";

const LoginForm = lazy(() => import("../pages/login/LoginForm"));
const SignupForm = lazy(() => import("../pages/signup/SignupForm"));
const Home = lazy(() => import("../pages/home/Home"));

const router = createBrowserRouter([
  {
    path: "/", // 기본 경로를 로그인 페이지로 설정
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
    path: "/home", // Home 경로를 별도로 추가
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
]);

export default router;
