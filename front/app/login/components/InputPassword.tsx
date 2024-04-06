'use client'
import {useState} from "react";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "@/app/login/assets/EyeFilledIcon";
import {EyeSlashFilledIcon} from "@/app/login/assets/EyeSlashFilledIcon";

export default function InputPassword() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label="Senha"
      required
      variant="bordered"
      placeholder="Insira sua senha"
      name="senha"
      size="lg"
      isRequired={true}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs [&_label]:text-white"
      radius="lg"
    />
  );
}
