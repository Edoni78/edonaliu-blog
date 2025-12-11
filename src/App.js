import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import FirstPost from "./components/posts/FirstPost/FirstPost";
import SecondPost from "./components/posts/SecondPost/SecondPost";
import HttpVsHttps from "./components/posts/HttpVsHttps/HttpVsHttps";
import AxiosVsFetch from "./components/posts/AxiosVsFetch/AxiosVsFetch";
import AxiosInterceptorsPost from "./components/posts/AxiosInterceptorsPost/AxiosInterceptorsPost";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/firstpost" element={<FirstPost />} />
          <Route path="/post/secondpost" element={<SecondPost />} />
          <Route path="/post/httpvshttps" element={<HttpVsHttps />} />
          <Route path="/post/axiosvsfetch" element={<AxiosVsFetch />} />
          <Route path="/post/AxiosInterceptorsPost" element={<AxiosInterceptorsPost />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
