type AttributeValue = {
  id: number;
  value: string;
};

type Attributes = AttributeValue[];

type Product = {
  name: string;
  price: string;
  description: string;
  colorId: number;
  sizeId: number;
  sleevesId: number;
  stock: number | 'Not-Manufactured';
};
