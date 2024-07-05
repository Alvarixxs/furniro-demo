"use client"

import * as yup from 'yup';
import {useFormik} from "formik";
import InputField from "@/app/ui/_components/_form/InputField";
import {ContactFormValues} from "@/app/lib/types";
import {postContactInfo} from "@/app/lib/data";
import {useState} from "react";

function ContactForm() {
  const [message, setMessage] = useState<string | null>(null)
  const onSubmit = async (values: ContactFormValues) => {
    try {
      await postContactInfo(values)
      setMessage("Thank you for contacting us!")
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
      <form className="flex flex-col gap-10" onSubmit={formik.handleSubmit}>
        {formItems.map((item) => (
          <div key={item.value}>
            <InputField
              type={item.type}
              label={item.label}
              placeholder={item.placeholder}
              value={formik.values[item.value as keyof ContactFormValues]}
              handleChange={formik.handleChange(item.value)}
              required={item.required}
            />
            {formik.touched[item.value as keyof ContactFormValues] && formik.errors[item.value as keyof ContactFormValues] && (
              <p className="text-red-700 text-sm">{formik.errors[item.value as keyof ContactFormValues]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-gold text-white rounded-md border border-gold px-24 py-4 self-start"
        >
          Submit
        </button>
      </form>

    ) : (
      <div className="flex flex-col gap-4 self-center">
        <p className="text-2xl">{message}</p>
        <button
          className="bg-gold text-white rounded-md border border-gold px-6 py-2 self-start"
          onClick={() => setMessage(null)}
        >
          Contact again
        </button>
      </div>
    )
  )
}

export default ContactForm

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('name is required'),
  email: yup
    .string()
    .email("doesn't match email")
    .required('repository name is required'),
  subject: yup
    .string(),
  message: yup
    .string()
    .required('message is required'),
});

const formItems = [
  {
    value: "name",
    type: "text",
    label: "Your name",
    placeholder: "Abc",
    required: true
  },
  {
    value: "email",
    type: "text",
    label: "Email address",
    placeholder: "Abc@def.com",
    required: true

  },
  {
    value: "subject",
    type: "text",
    label: "Subject",
    placeholder: "This is optional",
    required: false
  },
  {
    value: "message",
    type: "textarea",
    label: "Message",
    placeholder: "Hi, I'd like to ask about",
    required: true
  }
]