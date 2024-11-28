import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

type LoginRequest = {
  email: string
  password: string
}

type LoginApiResponse = {
  token: string
  admin: boolean
}

export async function login({ email, password }: LoginRequest) {
  const response = await axios.post<LoginApiResponse>(`${API_URL}/auth/login`, { email, password })
  const { token } = response.data

  localStorage.setItem("token", token)
  localStorage.setItem("admin", String(response.data.admin))
  return response.data
}

export function logout() {
  localStorage.removeItem("token")
}

export function getToken() {
  return localStorage.getItem("token")
}
