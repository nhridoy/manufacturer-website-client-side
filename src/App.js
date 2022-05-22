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

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/dashboard" element={<SideBar />}>
          <Route index element={<Dashboard />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="addreview" element={<CreateReview />} />
          <Route path="allorders" element={<AllOrders />} />
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="allproducts" element={<AllProducts />} />
          <Route path="members" element={<Members />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="blogs/new" element={<NewBlog />} />
        </Route>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/myprofile" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
