import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";
import {
  ImageContainer,
  SuccessContainer,
  ImagesList,
} from "../styles/pages/success";

interface SuccessProps {
  costumerName: string;
  product: {
    images: string[];
    quantity: number;
    name: string;
  };
}

export default function Success({ costumerName, product }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesList>
          {product.images.map((imageUrl) => (
            <ImageContainer key={imageUrl}>
              <Image src={imageUrl} width={140} height={140} alt="" />
            </ImageContainer>
          ))}
        </ImagesList>

        <h1>Compra efetuada</h1>

        {product.quantity > 1 ? (
          <p>
            Uhuul <strong>{costumerName}</strong>, sua compra de{" "}
            {product.quantity} camisetas já está a caminho da sua casa.
          </p>
        ) : (
          <p>
            Uhuul <strong>{costumerName}</strong>, sua{" "}
            <strong>{product.name}</strong> já está a caminho da sua casa.
          </p>
        )}
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const costumerName = session.customer_details.name;

  const images = [];
  let quantity = 0;

  session.line_items.data.forEach((lineItem) => {
    quantity += lineItem.quantity;
    const product = lineItem.price.product as Stripe.Product;

    images.push(product.images[0]);
  });

  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      costumerName,
      product: {
        images,
        quantity,
        name: product.name,
      },
    },
  };
};
