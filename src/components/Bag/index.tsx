import axios from "axios";
import Image from "next/future/image";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import bagImg from "../../assets/bag-icon.svg";
import closeImg from "../../assets/close-icon.svg";
import CartItem from "../CartItem";
import {
  Button,
  Content,
  Title,
  CarCount,
  Quantity,
  SideBar,
  CloseButton,
  Total,
} from "../../styles/components/bag";

function Bag() {
  const { cartCount, cartDetails, formattedTotalPrice, ...rest } =
    useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const cart = Object.keys(cartDetails).map((key) => cartDetails[key]);
  console.log("cart ->", cart);
  console.log("rest ->", rest);

  const quantityLabel = (count: number) => {
    if (count === 0) return "Nenhum item na sacola";

    return `${count} ${cartCount === 1 ? "item" : "items"}`;
  };

  const onSubmit = async () => {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        items: cart.map((item) => ({
          quantity: item.quantity,
          price: item.price_id,
        })),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);

      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Image src={bagImg} alt="" />

        {!!cartCount && <CarCount>{cartCount}</CarCount>}
      </Button>

      {isOpen && (
        <SideBar>
          <Content>
            <CloseButton onClick={() => setIsOpen(false)}>
              <Image src={closeImg} alt="" />
            </CloseButton>
            <Title>Sacola de compras</Title>
            <div>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.formattedValue}
                  quantity={item.quantity}
                />
              ))}
            </div>
            <footer>
              <Quantity>
                <span>Quantidade</span>
                <span>{quantityLabel(cartCount)}</span>
              </Quantity>
              <Total>
                <span>Valor total</span>
                <span>{formattedTotalPrice}</span>
              </Total>
              <button
                onClick={onSubmit}
                disabled={!cartCount || isCreatingCheckoutSession}
              >
                Finalizar Compra
              </button>
            </footer>
          </Content>
        </SideBar>
      )}
    </>
  );
}

export default Bag;
