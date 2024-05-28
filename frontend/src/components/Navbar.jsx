import { useState } from "react"
import { GrMenu } from "react-icons/gr"
import { MdOutlineClose } from "react-icons/md"
import { Link } from "react-router-dom"
function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => setNav(!nav)

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px]  mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#9370b2]">Quick Chat.</h1>
      <ul className="whitespace-nowrap hidden md:flex">
        <li className="p-4">首頁</li>
        <li className="p-4">功能</li>
        <li className="p-4">關於</li>
        <li className="p-4">聯絡</li>
        <li className="p-4">
          <Link to="/register">註冊</Link>
        </li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
        {nav ? <MdOutlineClose size={30} /> : <GrMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#9370b2] m-4">
          Quick Chat.
        </h1>

        <ul className="whitespace-nowrap p-4">
          <li className="p-4 border-b border-gray-600">首頁</li>
          <li className="p-4 border-b border-gray-600">功能</li>
          <li className="p-4 border-b border-gray-600">關於</li>
          <li className="p-4">聯絡</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
