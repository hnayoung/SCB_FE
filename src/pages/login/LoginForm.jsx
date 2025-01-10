import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home"; // Home 컴포넌트를 불러옵니다.

const LoginForm = () => {
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 추적
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.studentId) {
      newErrors.studentId = "학번을 입력해주세요.";
    } else if (!/^\d{9}$/.test(formData.studentId)) {
      newErrors.studentId = "유효한 학번을 입력해주세요.";
    }
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/users/login/", // 실제 로그인 엔드포인트로 변경
          {
            studentId: formData.studentId,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          alert("로그인 성공!");
          setIsLoggedIn(true); // 로그인 상태를 true로 설정
        } else {
          setErrors({ login: "학번 또는 비밀번호가 일치하지 않습니다." });
        }
      } catch (error) {
        console.error("서버와의 통신 중 오류 발생:", error);
        setErrors({ login: "로그인 요청 중 오류가 발생했습니다." });
      }
    }
  };

  const handleSignupClick = () => {
    navigate("/signup"); // 회원가입 페이지로 이동
  };

  return (
    <>
      {isLoggedIn ? ( // 로그인 상태에 따라 Home 컴포넌트를 표시
        <Home />
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>로그인</h2>
          <div className="form-control">
            <label>학번</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
            />
            {errors.studentId && <span className="error-text">{errors.studentId}</span>}
          </div>

          <div className="form-control">
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          {errors.login && <span className="error-text">{errors.login}</span>}

          <button className="submit-button" type="submit">
            로그인
          </button>

          <button
            className="signup-button"
            type="button"
            onClick={handleSignupClick}
          >
            회원가입
          </button>
        </form>
      )}
    </>
  );
};

export default LoginForm;
