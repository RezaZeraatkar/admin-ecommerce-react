type AttributeValue = {
  id: number;
  value: string;
};

type Attributes = AttributeValue[];

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  color: AttributeValue;
  size: AttributeValue;
  sleeves: AttributeValue;
  stock: number | 'Not-Manufactured';
};
