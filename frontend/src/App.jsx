import { Outlet } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <>
      <div className="font-poppins bg-[#340253]">
        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </>
  );
}

export default App;
