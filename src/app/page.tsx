'use client'
import { SetStateAction, useState } from "react"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 className="title">TOP page</h1>
      <p className="msg">トップページ</p>
      <div>
        <Link href="/other">go other page</Link>
      </div>
    </main>
  )
}
