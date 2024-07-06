import Link from "next/link";
import SignUpForm from "@/app/ui/_components/_signin/SignUpForm";

function SignUp() {
  return (
    <>
      <h2 className="text-light-black font-bold text-4xl max-w-[400px]">Sign up</h2>
      <SignUpForm/>
    </>
  )
}

export default SignUp