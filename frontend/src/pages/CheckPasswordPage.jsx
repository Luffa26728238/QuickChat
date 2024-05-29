import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import Avatar from "../components/Avatar"

function CheckPasswordPage() {
  const [data, setData] = useState({
    password: "",
  })

  const navigate = useNavigate()
  const location = useLocation()

  const { email, name, profileImg } = location.state
  console.log(email)
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const URL = `${import.meta.env.VITE_APP_BACKEND_API}/password`
    try {
      const res = await axios.post(URL, data)

      toast.success(res.data.message)

      if (res.data.success) {
        setData({
          password: "",
        })

        navigate("/password")
      }
    } catch (err) {
      toast.error(err.response.data.message)
    }
  }
  return (
    <div className="mt-5 ">
      <div className="bg-[#00000021] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-2 rounded p-7 mx-auto shadow-lg">
        <div className="w-fit mx-auto mb-3">
          {/* <LuUser2 size={70} /> */}
          <Avatar
            width={70}
            height={70}
            name={"eirc"}
            profileImg={profileImg}
          />
        </div>
        <form className="grid gap-3 mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">密碼: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className="bg-slate-100 px-2 py-1 rounded transition-all duration-500 focus:outline mb-3"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>

          <button className="bg-[#9370b2] py-2 rounded hover:bg-green-300 mt-2 font-bold text-white">
            登入
          </button>
        </form>
        <p className="text-center my-3">
          <Link
            to={"/register"}
            className=" text-blue-600  hover:text-blue-900 hover:underline "
          >
            新用戶? 立即註冊
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CheckPasswordPage
