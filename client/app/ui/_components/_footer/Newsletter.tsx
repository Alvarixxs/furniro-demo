"use client"

import {useState} from "react";
import * as yup from "yup";
import {postNewsletterInfo} from "@/app/lib/data";
import {useFormik} from "formik";
import {ContactFormValues, NewsletterFormValues} from "@/app/lib/types";

function Newsletter() {
  const [message, setMessage] = useState<string | null>(null)

  const onSubmit = async (values: NewsletterFormValues) => {
    try {
      await postNewsletterInfo(values)
      setMessage("Thank you for subscribing!")
    } catch (error) {
      setMessage("Error occurred while sending information.")
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    message === null ? (
      <form className="flex flex-wrap gap-3" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <input
            value={formik.values.email}
            onChange={formik.handleChange('email')}
            placeholder="Enter your email address"
            className="text-sm p-1 appearance-none border-b border-black focus:outline-none md:max-w-32 xl:max-w-96"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-700 text-sm">{formik.errors.email}</p>
          )}
        </div>
        <button type="submit" className="border-b border-black text-sm self-start p-1">SUBSCRIBE</button>
      </form>
    ) : (
      <p className="text-sm p-1">{message}</p>
    )
  )
}

export default Newsletter;

const initialValues = {
  email: '',
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("doesn't match email")
    .required('repository name is required'),
});