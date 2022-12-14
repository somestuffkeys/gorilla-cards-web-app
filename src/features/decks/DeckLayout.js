import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogOut } from "react-feather";
import { userLogout } from "features/auth-user/authSlice";
import DeckList from "features/decks/DeckList";
import gorilla from "assets/images/gorilla-logo.png";

function DeckLayout() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <header className="flex justify-between items-center border-b-2 bg-white">
        <div className="flex w-full items-center justify-between px-5">
          <div className="h-[60px] py-2">
            <img src={gorilla} className="h-full" alt="Gorilla Cards" />
          </div>
          <span className="flex items-center rounded-lg p-2">
            <LogOut className="h-5" />
            <button type="button" onClick={handleLogOut}>
              <span className="ml-2 font-medium">Log out</span>
            </button>
          </span>
        </div>
      </header>
      <div style={{ height: "calc(100vh - 62px)" }}>
        <div className="flex h-full">
          <DeckList />
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default DeckLayout;
