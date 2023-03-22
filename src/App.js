import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Feed from "./components/Feed/Feed";
import SearchResult from "./components/Search/SearchResult";
import VideoDetails from "./components/Video/VideoDetails";
import { AppContext } from "./context/contextApi";


const App = () => {
  return (
    <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>

  )
}

export default App