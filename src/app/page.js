import { getServerSession } from "next-auth";
import LoginButton from "./components/LoginButton";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";


export default function Home() {
  const session = getServerSession(authOptions)
  return (
   <div>
    <h1 className="text-3xl font-bold">Home</h1>
    <LoginButton />
    <p>From client component</p>
    <UserInfo></UserInfo>
    {JSON.stringify(session)}
   </div>
  );
}
