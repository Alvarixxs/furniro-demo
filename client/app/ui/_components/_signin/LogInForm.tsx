"use client"

import * as yup from 'yup';
import {useFormik} from "formik";
import InputField from "@/app/ui/_components/_utils/InputField";
import {LogInFormValues} from "@/app/lib/types";
import {postLoginInfo, setToken} from "@/app/lib/data";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "@/app/ui/contexts";
import { useRouter } from 'next/navigation'

function LogInForm() {
  const [message, setMessage] = useState<string | null>(null)
  const authContext = useContext(AuthContext);
  const router = useRouter()

  const setAuth = authContext?.setAuth;

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedFurniroUser')
    if (loggedUserJSON) {
      const {username, token} = JSON.parse(loggedUserJSON)
      if (setAuth) {
        setAuth(username)
      }
      setToken(token)
      router.push('/')
    }
  }, [])

  const onSubmit = async (values: LogInFormValues) => {
    try {
      const {username, token} = await postLoginInfo(values)
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

  const formik = useFormik({
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
            value={formik.values[item.value as keyof LogInFormValues]}
            onChange={formik.handleChange(item.value)}
            required={item.required}
          />
          {formik.touched[item.value as keyof LogInFormValues] && formik.errors[item.value as keyof LogInFormValues] && (
            <p className="text-red-700 text-sm">{formik.errors[item.value as keyof LogInFormValues]}</p>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-gold text-white rounded-md border border-gold px-10 py-2 self-start"
      >
        Log in
      </button>
      {message ? (
        <p className="text-sm text-red-700">Incorrect username or password</p>
      ) : null}
    </form>
  )
}

export default LogInForm

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('name is required'),
  password: yup
    .string()
    .required('password is required'),
});

const formItems = [
  {
    value: "username",
    type: "text",
    label: "Username",
    placeholder: "",
    required: true
  },
  {
    value: "password",
    type: "password",
    label: "Password",
    placeholder: "",
    required: true
  },
]