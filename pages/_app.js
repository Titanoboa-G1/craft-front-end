import '../styles/globals.css';
import { AuthWrapper } from '../contexts/Auth';
import { Header } from '../components';
import CartContextWrapper from '../contexts/CartContext'
function MyApp({ Component, pageProps }) {
  return (
    <>
    
      <AuthWrapper>
        <Header/>
     <CartContextWrapper>
        <Component {...pageProps} />
        </CartContextWrapper>
      </AuthWrapper>
     <>
     </>
    </>
  )
}

export default MyApp