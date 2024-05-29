import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { Link, useNavigate } from "react-router-dom"

import uploadFile from "../helpers/uploadFile"
import axios from "axios"
import toast from "react-hot-toast"

function RegisterPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    profileImg: "",
  })

  const [photo, setPhoto] = useState("")

  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0]

    if (!file) return
    const uploadPhoto = await uploadFile(file)

    setPhoto(uploadPhoto.url)

    setData((prev) => {
      return {
        ...prev,
        profileImg: uploadPhoto?.url,
      }
    })
  }

  const handleClearPhoto = (e) => {
    e.preventDefault()

    setPhoto(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const URL = `${import.meta.env.VITE_APP_BACKEND_API}/register`
    try {
      const res = await axios.post(URL, data)

      console.log(res)
      toast.success(res.data.message)

      if (res.data.success) {
        setData({
          name: "",
          email: "",
          password: "",
          profileImg: "",
        })
        console.log("註冊成功")
        navigate("/login")
      }

      console.log(res)
    } catch (err) {
      toast.error(err.response.data.message)
      console.error(err)
    }
  }

  return (
    <div className="mt-5 text-white ">
      <div className="bg-[#00000021]  w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-2 rounded p-10 mx-auto shadow-lg shadow-lg shadow-blue-500/50">
        <h3 className="text-center text-3xl font-bold">註冊新用戶</h3>
        <form className="grid gap-3 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5">
            {" "}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="使用者名稱"
                className=" px-2 py-2 rounded transition-all duration-500 focus:outline"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="電子信箱"
                className=" px-2 py-1 rounded transition-all duration-500 focus:outline"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="密碼"
                className=" px  -2 py-1 rounded transition-all duration-500 focus:outline"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="profileImg">
                {" "}
                <div className=" flex justify-center items-center h-14   rounded border hover:border-blue-500 cursor-pointer">
                  <p className="text-sm max-w-[300] text-ellipsis line-clamp-1">
                    {photo?.name ?? "上傳大頭照"}
                  </p>
                  {photo?.name && (
                    <button
                      className="text-lg ml-2 hover:text-red-500"
                      onClick={handleClearPhoto}
                    >
                      <IoClose size={20} />
                    </button>
                  )}
                </div>
              </label>
              <div className="flex flex-row">
                <input
                  type="file"
                  id="profileImg"
                  name="profileImg"
                  placeholder="上傳大頭照"
                  className="bg-slate-100 px-2 py-1 rounded transition-all duration-500 focus:outline hidden"
                  onChange={handleUploadPhoto}
                />
              </div>
              {photo && (
                <div className="flex justify-center">
                  <img
                    src={photo}
                    className="block overflow-hidden rounded-full w-20 h-20 object-fill"
                    alt="Profile"
                  />
                </div>
              )}
            </div>
            <button className="bg-gradient-to-r from-violet-900 to-purple-400 py-2 rounded hover:bg-green-300 mt-2 font-bold text-white shadow-2xl -translate-x-  border-black shadow-[#dede63d8] duration-500 mb-5 hover:bg-[]">
              註冊
            </button>
          </div>
        </form>
        <p className="text-center my-3">
          <Link
            to={"/login"}
            className=" text-blue-600  hover:text-blue-900 hover:underline "
          >
            已經有帳號了? 立即登入
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
