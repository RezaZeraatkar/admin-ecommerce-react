type AttributeValue = {
  id: number;
  value: string;
};

type Variant = {
  color: AttributeValue;
  size: AttributeValue;
  sleeves: AttributeValue;
  stock: number | 'Not-Manufactured';
};

type Attributes = {
  size: AttributeValue[];
  colors: AttributeValue[];
  sleeves: AttributeValue[];
  models: string[];
};

type Product = {
  id: number;
  name: string;
  price: string;
  description?: string;
  variants: Variant[];
};
