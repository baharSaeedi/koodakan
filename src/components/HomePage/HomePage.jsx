import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";

function HomePage() {
  return (
    <div className="App" id="App">
      <SideBar></SideBar>
      <div className="leftSideBox">
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default HomePage;
