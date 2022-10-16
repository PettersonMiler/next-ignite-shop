import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/future/image";
import { CartProvider } from "use-shopping-cart";
import Bag from "../components/Bag";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "../styles/pages/app";
import { globalStyles } from "../styles/global";

import "keen-slider/keen-slider.min.css";

globalStyles();

const STRIPE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
const SUCCESS_URL = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
const CANCEL_URL = process.env.NEXT_PUBLIC_URL;

function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={STRIPE_KEY}
      successUrl={SUCCESS_URL}
      cancelUrl={CANCEL_URL}
      currency="BRL"
      allowedCountries={["BR"]}
      billingAddressCollection
    >
      <Container>
        <Header position={route === "/success"}>
          <Link href="/" prefetch={false}>
            <Image src={logoImg} alt="" />
          </Link>

          {route !== "/success" && <Bag />}
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}

export default App;
