interface ProductAPI {
  id: number;
  name: string;
  description: string;
  price: number;
  inventory: number;
  categories: string[];
  // imagem: ???;
}

export default ProductAPI;