"use client"

import * as yup from 'yup';
import {useFormik} from "formik";
import InputField from "@/app/ui/_components/_utils/InputField";
import {ContactFormValues, LogInFormValues, SignUpFormValues} from "@/app/lib/types";
import {postContactInfo, postLoginInfo, postSignupInfo, setToken} from "@/app/lib/data";
import {useContext, useState} from "react";
import {AuthContext} from "@/app/ui/contexts";
import {useRouter} from "next/navigation";

function SignUpForm() {
  const [message, setMessage] = useState<string | null>(null)
  const authContext = useContext(AuthContext);
  const router = useRouter()

  const setAuth = authContext?.setAuth;

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      await postSignupInfo(values)
      const {username, token} = await postLoginInfo({username: values.username, password: values.password})
      setToken(token)
      if (setAuth) {
        setAuth(username)
      }
      window.localStorage.setItem(
        'loggedFurniroUser', JSON.stringify({username, token})
      )
      router.push('/')
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('An unknown error occurred');
      }
    }
  }

  const formik= useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
      {formItems.map((item) => (
        <div key={item.value}>
          <InputField
            type={item.type}
            label={item.label}
            placeholder={item.placeholder}
            value={formik.values[item.value as keyof SignUpFormValues]}
            onChange={formik.handleChange(item.value)}
            required={item.required}
          />
          {formik.touched[item.value as keyof SignUpFormValues] && formik.errors[item.value as keyof SignUpFormValues] && (
            <p className="text-red-700 text-sm">{formik.errors[item.value as keyof SignUpFormValues]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-gold text-white rounded-md border border-gold px-10 py-2 self-start"
      >
        Sign up
      </button>
      {message ? (
        <p className="text-sm text-red-700">Incorrect username or password</p>
      ) : null}
    </form>
  )
}

export default SignUpForm

const initialValues = {
  name: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('name is required')
    .min(5, "name must be at least 5 characters")
    .max(30, "name must be max 30 characters"),
  username: yup
    .string()
    .required('username is required')
    .min(5, "username must be at least 5 characters")
    .max(30, "username must be max 30 characters"),
  password: yup
    .string()
    .required('password is required')
    .min(5, "password must be at least 5 characters")
    .max(30, "password must be max 30 characters"),
  confirmPassword: yup
    .string()
    .required('confirm password is required')
    .oneOf([yup.ref('password')], "passwords must match")
});

const formItems = [
  {
    value: "name",
    type: "text",
    label: "Name",
    placeholder: "name...",
    required: true
  },
  {
    value: "username",
    type: "text",
    label: "Username",
    placeholder: "username...",
    required: true
  },
  {
    value: "password",
    type: "password",
    label: "Password",
    placeholder: "password...",
    required: true
  },
  {
    value: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "confirm password...",
    required: true
  },
]