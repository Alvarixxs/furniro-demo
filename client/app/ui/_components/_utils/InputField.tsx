import {SyntheticEvent} from "react";

function InputField({type, label, value, placeholder, onChange, required}: InputProps) {
  const className = "py-5 px-7 max-w-[528px] md:w-[528px] border border-light-gray rounded-xl"
  return (
    <div className="flex flex-col gap-4 text-base">
      <label className="font-medium">
        {label} {required ? <b className="text-red-700">*</b> : null}
      </label>
      {type==='textarea' ? (
        <textarea
          placeholder={placeholder}
          className={`${className} h-28`}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={className}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  )
}

export default InputField;

export interface InputProps {
  type: string,
  label: string,
  value: string,
  placeholder: string,
  onChange: (e: SyntheticEvent) => void
  required: boolean
}