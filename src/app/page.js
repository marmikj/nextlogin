import Image from "next/image";
import LoginForm from "./login/page";
import Dashboard from "./dashboard/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm/>
      <Dashboard/>
    </main>
  );
}
