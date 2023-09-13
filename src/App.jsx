import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Index } from "./pages/Indexx";
import { Create } from "./pages/Create";
import { View } from "./pages/View";
import { Store } from "./store/Store";

///store esta por encima de las rutas porque es el que va a heredar la informacion 
///todos los componentes, es decir, es el padre de todos
function App() {
  return (
    <>
        <Store>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="create" element={<Create />} />
              <Route path="view/:bookId" element={<View />} />
            </Routes>
          </BrowserRouter>
        </Store>
    </>
  );
}

export default App;
