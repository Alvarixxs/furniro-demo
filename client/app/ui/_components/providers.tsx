"use client"

import {AuthContext} from "@/app/ui/contexts";
import {useState} from "react";

export function AuthProvider(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  const [auth, setAuth] = useState<string | null>(null)

  return (
    <AuthContext.Provider value={{ auth, setAuth }} >{children}</AuthContext.Provider>
  )
}

function Providers(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <AuthProvider>{children}</AuthProvider>
  );
}

export default Providers;