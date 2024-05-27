import logo from "../assets/logo.png"

function AuthLayouts({ children }) {
  return (
    <>
      <header className="flex justify-center items-center p-3">
        <img src={logo} alt="暫時logo" width={180} height={60} />
      </header>

      {children}
    </>
  )
}

export default AuthLayouts
