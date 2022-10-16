import Image from "next/future/image";
import { useShoppingCart } from "use-shopping-cart";
import {
  ProductContainer,
  ImageContainer,
  ProductDetails,
} from "../../styles/components/cartItem";

interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  quantity: number;
}

function CartItem(item: CartItem) {
  const { removeItem } = useShoppingCart();

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={item.imageUrl} width={95} height={95} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{item.name}</h1>
        <span>{item.price}</span>
        <a onClick={() => removeItem(item.id)}>Remover</a>
      </ProductDetails>
    </ProductContainer>
  );
}

export default CartItem;
