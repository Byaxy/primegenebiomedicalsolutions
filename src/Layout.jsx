import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex w-full flex-col">
      <header className="w-full flex-1">
        <Header />
      </header>
      <main className="w-full flex-auto">
        <Outlet />
      </main>
      <footer className="w-full flex-1">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
