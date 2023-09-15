import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"] });
import "./globals.css";

export const metadata = {
  title: "İTU Gonulluluk Kulübü",
  description: "Landing page",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
