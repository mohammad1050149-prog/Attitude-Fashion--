import Navbar from "./component/Navbar";//
import "./globals.css";
// import Navbar from "./Component/Navbar";


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
     
//     >
//       <body>
//         <Navbar/>
        
//         {children}
//         </body>
//     </html>
//   );
// }
import "./globals.css";
import FashionRain from "./component/FashionRain";
import Footer from "./component/Footer";


export const metadata = {
  title: "Fashion Website",
  description: "Luxury Fashion Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black overflow-x-hidden">

        {/* Falling Hearts & Diamonds */}
        <FashionRain />
  <Navbar/>
        {/* Website */}
        {children}
<Footer/>
      </body>
    </html>
  );
}
 