import "./style.css";
import Sidebar from "@/components/Sidebar";
import SignHeader from "@/components/SignHeader";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <SignHeader />
          <div className="main">
            <Sidebar />
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  );
}
