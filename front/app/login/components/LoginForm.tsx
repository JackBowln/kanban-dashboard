'use client'
import { Input, Button } from "@nextui-org/react";
import { useSignIn } from "@/app/actions/auth";
import InputPassword from "@/app/login/components/InputPassword"
import { useFormState } from "react-dom";

export default function LoginPage() {
  const [state, formAction] = useFormState(useSignIn, null)

  return (
    <form action={formAction} className="flex flex-col rounded-2xl py-8 px-6 max-w-80 bg-gray-100 border-white border h-fit gap-8 [&_label]:!text-white *:text-lg self-center">
      <Input
        type="text"
        label="Login"
        labelPlacement="inside"
        color="primary"
        name="login"
        className="max-w-xs *:text-white"
        variant="bordered"
        size="lg"
        radius="lg"
        autoComplete="123"
        isRequired={true}
        placeholder="Insira seu login"
      />
      <InputPassword />
      <button type="submit" >enviar</button>
    </form>
  )
}
