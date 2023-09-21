// components/Container.js
import NavBar from "./NavBar"

export default function Container({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}