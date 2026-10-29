
import Header from "./Components/Header.jsx";
import ProfileCard from "./Components/Card.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-8">
        <ProfileCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
