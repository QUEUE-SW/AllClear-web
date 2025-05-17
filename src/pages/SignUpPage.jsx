import {
  gradeMap,
  collegeMap,
  departmentMap,
  majorMap,
} from "@/constants/signupOptioins";
import SignUpForm from "@/components/home/auth/SignUpForm";

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
