import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toastStyles } from "./utils/utils";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex w-full flex-col">
      <header className="w-full flex-1">
        <Header />
      </header>
      <main className="w-full flex-auto">
        <div className="warper">
          <Outlet />
        </div>
      </main>
      <footer className="w-full flex-1">
        <Footer />
      </footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        icon={false}
        rtl={false}
        draggable
        pauseOnHover
        toastClassName={(context) =>
          toastStyles[context?.type || "default"] +
          " relative flex p-2 font-bold rounded-md justify-between overflow-hidden cursor-pointer"
        }
        bodyClassName={() => "text-white block p-2"}
      />
    </div>
  );
};

export default RootLayout;
