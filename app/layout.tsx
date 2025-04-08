import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: "AlexListens - AI Voice Analysis Tool",
  description: "Advanced voice analysis and AI assistance for better communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <script src="https://cdn.usefathom.com/script.js" data-site="ONYOCTXK" defer></script>
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}