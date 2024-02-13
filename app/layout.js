import { Inter } from "next/font/google";
import "./globals.css";
import Authprovider from "@/components/Authprovider/Authprovider";
import RecoilContextProvider from "./lib/recoilContextProvider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Instagram",
  description: "Created by Priyanshu Negi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>
          <RecoilContextProvider>{children}</RecoilContextProvider>
        </Authprovider>
      </body>
    </html>
  );
}
