'use client'
import { redirect } from 'next/navigation'
import { FormEvent } from 'react'

export const useSignIn = async (state: any, formData: FormData) => {


  const login = formData.get('login')
  const senha = formData.get('senha')
  console.log(formData);

  const response = await fetch('http://localhost:5050/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, senha }),
  })

  if (response.ok) {
    const token = await response.json()

    localStorage.setItem("token", "Bearer " + token)
    redirect('/')
  } else {
    throw new Error("an error occurred")
  }
}
