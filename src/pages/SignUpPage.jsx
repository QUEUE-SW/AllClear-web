import {
  gradeMap,
  collegeMap,
  departmentMap,
  majorMap,
} from "@/constants/signupOptioins";
import SignUpForm from "@/components/home/auth/SignUpForm";

/**
 * SignUpPage.jsx
 *
 * 회원가입 페이지의 로직을 담당하는 컨테이너 컴포넌트입니다.
 *
 * - 사용자로부터 회원가입 정보(identifier, password, name, grade, college, department, major 등)를 입력받음
 * - 각 입력값을 백엔드에서 요구하는 enum 코드(DIGITAL_CONVERGENCE 등)로 매핑
 * - 회원가입 API 호출을 통해 사용자 정보를 서버에 등록
 * - 회원가입 성공 시 `/login` 페이지로 이동
 * - 회원가입 실패 또는 오류 발생 시 사용자에게 알림 표시
 *
 * - <SignUpForm />: 사용자 입력을 처리하는 프레젠테이셔널 컴포넌트
 */

const SignUpPage = () => {
  const handleSignUpSubmit = async (formData) => {
    const payload = {
      identifier: formData.identifier,
      password: formData.password,
      name: formData.name,
      grade: gradeMap[formData.grade] || 0,
      college: collegeMap[formData.college] || "DIGITAL_CONVERGENCE",
      department:
        departmentMap[formData.department] ||
        "COMPUTER_SCIENCE_AND_ENGINEERING",
      major: majorMap[formData.major] || "CSE",
    };

    try {
      // axios 인터페이스로 변경 예정
      const res = await fetch("/api/v1/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.code === "2000") {
        console.log(payload);
        alert("회원가입 성공!");
        navigate("/login");
      } else {
        alert("회원가입 실패" + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("서버 오류가 발생했습니다.");
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50 px-4">
      <SignUpForm onSubmit={handleSignUpSubmit} />
    </div>
  );
};

export default SignUpPage;
