import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/future/image";
import { CartProvider } from "use-shopping-cart";
import Bag from "../components/Bag";
import LoadingSpinner from "../components/LoadingSpinner";
import logoImg from "../assets/logo.svg";
import { Container, Header, LoaderContainer } from "../styles/pages/app";
import { globalStyles } from "../styles/global";

import "keen-slider/keen-slider.min.css";

globalStyles();

const STRIPE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
const SUCCESS_URL = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
const CANCEL_URL = process.env.NEXT_PUBLIC_URL;

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const { route, events } = useRouter();

  useEffect(() => {
    events.on("routeChangeStart", () => setLoading(true));
    events.on("routeChangeComplete", () => setLoading(false));
    events.on("routeChangeError", () => setLoading(false));
    return () => {
      events.off("routeChangeStart", () => setLoading(true));
      events.off("routeChangeComplete", () => setLoading(false));
      events.off("routeChangeError", () => setLoading(false));
    };
  }, [events]);

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
        {loading ? (
          <LoaderContainer>
            <LoadingSpinner size="lg" center />
          </LoaderContainer>
        ) : (
          <Component {...pageProps} />
        )}
      </Container>
    </CartProvider>
  );
}

export default App;
