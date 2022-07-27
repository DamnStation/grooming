import Navbar from "./navbar/Navbar";

type Props = {
  children?: React.ReactChild | React.ReactChild[];
};
export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col items-center justify-center">
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center">
        {children}
      </main>
      <footer className="absolute bottom-3 opacity-75 w-max flex flex-col items-center justify-center   ">
        <p className="text-center">DamnStation © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
