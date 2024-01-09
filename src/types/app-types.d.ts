type Variant = {
  color: {
    id: number;
    value: string;
  };
  size: {
    id: number;
    value: string;
  };
  sleeves: {
    id: number;
    value: string;
  };
  stock: number | string;
};

type Product = {
  id: number;
  name: string;
  price: string;
  variants: Variant[];
};
