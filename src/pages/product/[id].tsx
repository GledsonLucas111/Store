import { useRouter } from "next/dist/client/router";

const Product = () => {
  const { query } = useRouter();

  return <h1>Product: {JSON.stringify(query)}</h1>;
};
export default Product;
