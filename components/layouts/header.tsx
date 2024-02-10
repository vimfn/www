import ThemeSwitch from "@/components/misc/(theme)/theme-switch";
import Navbar from "@/components/nav/navbar";

const Header = () => {
  return (
    <header className="flex">
      <Navbar />
      <div className="ml-auto">
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
