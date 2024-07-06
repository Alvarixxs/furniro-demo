import Link from "next/link";
import LogInForm from "@/app/ui/_components/_signin/LogInForm";

function LogIn() {
  return (
    <>
      <h2 className="text-light-black font-bold text-4xl max-w-[400px]">Sign in to your account</h2>
      <LogInForm/>
      <div className="flex gap-2 text-sm">
        <p>Don&apos;t have an account yet?</p>
        <Link href="/signup" className="underline">Sign up</Link>
      </div>
    </>
  )
}

export default LogIn