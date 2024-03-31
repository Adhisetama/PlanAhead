import Search from "./pages/Search";
import Navbar from "./components/Navbar";

export default function Home(){
  console.log(Search);
  return (
    <main>
      <div className="flex flex-col overflow-hidden">
        <Navbar />
        <Search />
      </div>
      {/* <Search /> */}
    </main>
  );
}