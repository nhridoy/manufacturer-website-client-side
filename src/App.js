import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyProfile from "./pages/MyProfile/MyProfile";
import Blogs from "./pages/Blogs/Blogs";
import SideBar from "./pages/Dashboard/SideBar";
import MyOrders from "./pages/MyOrders/MyOrders";
import CreateReview from "./pages/CreateReview/CreateReview";
import AllOrders from "./pages/AllOrders/AllOrders";
import AllProducts from "./pages/AllProducts/AllProducts";
import Members from "./pages/Members/Members";
import AddProducts from "./pages/AddProducts/AddProducts";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import AdminBlogs from "./pages/AdminBlogs/AdminBlogs";
import NewBlog from "./pages/NewBlog/NewBlog";
import Purchase from "./pages/Purchase/Purchase";
import MyPortfolio from "./pages/MyPortfolio/MyPortfolio";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Payment from "./pages/Payment/Payment";
import RequireAdmin from "./components/RequireAdmin/RequireAdmin";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/payment/:id"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <SideBar />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />
          <Route
            path="myorders"
            element={
              <RequireAuth>
                <MyOrders />
              </RequireAuth>
            }
          />
          <Route
            path="addreview"
            element={
              <RequireAuth>
                <CreateReview />
              </RequireAuth>
            }
          />
          <Route
            path="allorders"
            element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="addproducts"
            element={
              <RequireAdmin>
                <AddProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="allproducts"
            element={
              <RequireAdmin>
                <AllProducts />
              </RequireAdmin>
            }
          />
          <Route
            path="members"
            element={
              <RequireAdmin>
                <Members />
              </RequireAdmin>
            }
          />
          <Route
            path="blogs"
            element={
              <RequireAdmin>
                <AdminBlogs />
              </RequireAdmin>
            }
          />
          <Route
            path="blogs/new"
            element={
              <RequireAdmin>
                <NewBlog />
              </RequireAdmin>
            }
          />
        </Route>
        <Route
          path="/myprofile"
          element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          }
        />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/reset-password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
