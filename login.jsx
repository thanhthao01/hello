import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Giả lập đăng nhập thành công nếu username là "admin" và password là "123"
    if (username === "admin" && password === "123") {
      navigate("/hello"); // Chuyển hướng đến trang HelloWorld
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h2>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}
