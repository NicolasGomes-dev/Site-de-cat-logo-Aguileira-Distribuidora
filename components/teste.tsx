"use client"

import { useEffect } from "react"

export default function Teste() {
  useEffect(() => {
    console.log("React funcionando")
    alert("React funcionando")
  }, [])

  return (
    <h1 style={{ color: "red", fontSize: "60px" }}>
      CLIENT COMPONENT
    </h1>
  )
}