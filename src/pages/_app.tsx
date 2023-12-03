import '../../styles/globals.css'
import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import '../components/menu/sidebar.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
          <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
