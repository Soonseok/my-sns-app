import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Upload from "./pages/Upload";
// import Profile from "./pages/Profile";
// import NotFound from "./pages/NotFound";
// import AppLayout from "./components/layout/AppLayout";

// const isLoggedIn = !!localStorage.getItem("currentUser");

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* 로그인 후 접근 가능한 페이지 */}
//       <Route
//         path="/home"
//         element={
//           isLoggedIn ? (
//             <AppLayout>
//               <Home />
//             </AppLayout>
//           ) : (
//             <Navigate to="/" replace />
//           )
//         }
//         errorElement={<NotFound />}
//       />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }
