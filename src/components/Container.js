// components/Container.js
import NavBar from "./NavBar"
import "./styles.css"

export default function Container({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}