import { useRouter } from "next/router";

const pdNo = () => {
  const router = useRouter();
  const productDetail = router.query.pdNo;

  return <p>Post: {productDetail}</p>;
};

export default pdNo;
