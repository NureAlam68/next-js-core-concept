import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "./components/LogoutButton";



export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
   <div>
    <h1 className="text-3xl font-bold">Home</h1>
    {
      session?.user ? <LogoutButton /> : <LoginButton />
    }
    <p>From client component</p>
    <UserInfo></UserInfo>
    {JSON.stringify(session)}
   </div>
  );
}
