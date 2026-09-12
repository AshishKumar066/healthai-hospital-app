// authService.js
// -----------------------------------------------------------------------
// Mock implementation for now. Every function returns a Promise so that
// swapping the body for a real Spring Boot call later (via axios/fetch)
// does not require touching any component that calls this service.
//
// Future version (Phase 3) will look like:
//   export const login = (email, password) =>
//     axios.post("/api/auth/login", { email, password }).then(r => r.data);
// -----------------------------------------------------------------------

import { mockUsers } from "../data/mockData";

const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms));

export async function login(email, password) {
  await delay();
  const user = mockUsers.find((u) => u.email === email);
  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }
  const { password: _pw, ...safeUser } = user;
  return safeUser;
}

export async function signup({ email, password }) {
  await delay();
  const exists = mockUsers.some((u) => u.email === email);
  if (exists) {
    throw new Error("An account with this email already exists");
  }
  const newUser = {
    id: `U${1000 + mockUsers.length + 1}`,
    email,
    password,
    role: "PATIENT",
    name: email.split("@")[0],
  };
  mockUsers.push(newUser);
  const { password: _pw, ...safeUser } = newUser;
  return safeUser;
}