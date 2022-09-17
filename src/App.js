import { Helmet,HelmetTags } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Helmet>
        <title>react app bolierblate</title>
        <meta title="description" content="here is my react helmet"></meta>
      </Helmet>
      <Routes>
        <Route path="/" exact index element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>

  )
}

export default App;
