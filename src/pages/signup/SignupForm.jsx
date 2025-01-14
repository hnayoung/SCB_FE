import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignupForm.scss";

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // password2에 해당
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if (!formData.username) newErrors.username = "이름을 입력해주세요.";
    if (!formData.email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!emailReg.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }
    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (!passwordReg.test(formData.password)) {
      newErrors.password = "비밀번호는 영문, 숫자를 포함하여 8~25자이어야 합니다.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "http://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/users/register/",
          {
            username: formData.username,
            email: formData.email,
            password: formData.password,
            password2: formData.confirmPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          alert("회원가입이 완료되었습니다!");
          navigate("/login");
        } else {
          alert("회원가입에 실패했습니다.");
        }
      } catch (error) {
        console.error("서버와의 통신 중 오류 발생:", error);
        alert("서버와의 통신 중 오류가 발생했습니다.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>회원 가입</h2>

      <div className="form-control">
        <label>이름</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span className="error-text">{errors.username}</span>}
      </div>

      <div className="form-control">
        <label>이메일</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
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

      <div className="form-control">
        <label>비밀번호 확인</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error-text">{errors.confirmPassword}</span>
        )}
      </div>

      <button
        className="submit-button"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "처리 중..." : "회원 가입"}
      </button>
    </form>
  );
};

export default SignupForm;
