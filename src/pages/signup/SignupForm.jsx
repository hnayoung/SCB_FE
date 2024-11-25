import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import 추가
import "./SignupForm.scss"; 

const SignupForm = () => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  // 이미 가입된 학번 리스트 (샘플 테스트)
  const registeredStudentIds = ["202021060", "202021061", "202021062"]; // 등록된 학번 리스트 (테스트 샘플)

  const [formData, setFormData] = useState({
    username: "",
    studentId: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isStudentIdTaken, setIsStudentIdTaken] = useState(false); // 학번 중복 상태
  const [isSubmitting, setIsSubmitting] = useState(false); // 제출 버튼 비활성화 상태

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 학번 입력 시 서버와 동적 중복 확인
    if (name === "studentId") {
      if (registeredStudentIds.some((id) => id === value)) {
        setIsStudentIdTaken(true);
      } else {
        setIsStudentIdTaken(false);
      }
    }
  };

  const validate = () => {
    const newErrors = {};
    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

    if (!formData.username) newErrors.username = "이름을 입력해주세요.";
    if (!formData.studentId) {
      newErrors.studentId = "학번을 입력해주세요.";
    } else if (!/^\d{9}$/.test(formData.studentId)) {
      newErrors.studentId = "학번이 일치하지 않습니다.";
    } else if (isStudentIdTaken) {
      newErrors.studentId = "이미 가입된 사용자입니다.";
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
      setIsSubmitting(true); // 제출 중 상태로 변경
      try {
        const response = await fetch("https://sozerong.pythonanywhere.com/random", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("회원가입 완료!");
          console.log(formData);
          navigate("/login");
        } else {
          alert("서버에 데이터를 전송하는 중 오류가 발생했습니다.");
        }
      } catch (error) {
        console.error("서버와 통신하는 중 오류 발생:", error);
        alert("서버와 통신하는 중 오류가 발생했습니다.");
      } finally {
        setIsSubmitting(false); // 제출 상태 해제
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
        <label>학번</label>
        <input
          type="text"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
        />
        {isStudentIdTaken && (
          <span className="error-text">이미 등록된 학번입니다.</span>
        )}
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
        disabled={isStudentIdTaken || isSubmitting} // 학번 중복 및 제출 중 상태일 때 버튼 비활성화
      >
        {isSubmitting ? "처리 중..." : "회원 가입"}
      </button>
    </form> 
  );
};

export default SignupForm;
