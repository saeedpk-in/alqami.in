
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import ClientSession from "@/hooks/ClientSession";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <ClientSession>
        <Navbar />
          <div className="min-h-screen pt-20">{children}</div>
        <Footer />
      </ClientSession>
    </div>
  );
}
