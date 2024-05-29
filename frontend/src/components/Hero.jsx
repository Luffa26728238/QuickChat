import { Link } from "react-router-dom"
import { ReactTyped } from "react-typed"

function Hero() {
  return (
    <div className="text-white">
      {/* h-screen 為 100% view port */}
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col items-center justify-center text-center">
        <p className=" text-4xl  md:text-7xl sm:text-5xl font-serif py-6 tracking-wide">
          隨時隨地都可暢聊
        </p>
        <p className=" text-3xl md:text-6xl sm:text-4xl text-[#9370b2] font-semibold">
          簡單 方便 快速
        </p>
        <div className="mt-5 flex flex-col gap-3 justify-center">
          <ReactTyped
            className=" text-lg md:text-2xl sm:text-xl font-bold pl-2"
            strings={[
              "直觀的界面設計，讓您輕鬆上手",
              "只需幾次點擊，即可發送訊息或進行視訊通話",
              "毫無延遲，確保您不會錯過任何重要時刻",
            ]}
            typeSpeed={40}
            backSpeed={20}
            loop
          />
        </div>
        <Link to="./login">
          <button className=" bg-[#9370b2] rounded px-10 py-4 mt-6 font-bold hover:bg-[#b17bde] shadow-2xl  shadow-[#d0b88aa5] ease-in-out duration-200">
            立即登入
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
