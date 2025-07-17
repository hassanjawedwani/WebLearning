import { useCartContext } from "./store/cartContextProvide";

interface PropsType {
  name: string;
  color: string;
}

const PinkBlock = (props: PropsType) => {
  const myContext = useCartContext();
  return <h1 style={{ backgroundColor: props.color }}>HI {props.name} and count is {myContext.cartCount}</h1>;
};

export default PinkBlock;
