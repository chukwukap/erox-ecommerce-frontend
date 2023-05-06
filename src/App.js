// import PostsList from "./features/posts/PostsList";
// import AddPostForm from "./features/posts/AddPostForm";
// import SinglePostPage from "./features/posts/SinglePostPage";
// import EditPostForm from "./features/posts/EditPostForm";
// import UsersList from "./features/users/UsersList";
// import UserPage from "./features/users/UserPage";
import NotFound from "./pages/404.js";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import useTitle from "./hooks/useTitle";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Acne from "./pages/Acne.js";
import ProductPage from "./features/products/ProductPage.js";
import LoginPage from "./features/auth/LoginPage.js";
import RegisterPage from "./features/auth/RegPage.js";
import AccountExcerpt from "./features/auth/AccountPage.js";

function App() {
  useTitle("Erox");
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        {/* public Routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="acne" element={<Acne />} />
        <Route path={"product"}>
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="auth">
          <Route index element={<LoginPage />} />
          <Route index path="register" element={<RegisterPage />} />
        </Route>
        {/* Protected routes */}
        <Route path="account">
          <Route index element={<AccountExcerpt />} />
        </Route>
        {/* <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route> */}

        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
