
import { Inter } from "next/font/google";
import SignUp from "@/components/SignUp";
import Login from "../components/login";


const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
 <div>

<Login/>


 </div>
  );
}
