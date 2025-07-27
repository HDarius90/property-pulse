import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/globals.css';
import { GlobalProvider } from '@/context/GlobalContext';

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, properties, real estate',
  description: 'Find the perfect rental property',
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default MainLayout;
