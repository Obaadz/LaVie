export type Product = {
  image: {
    data: Buffer;
    contentType: string;
  };
  title: string;
  price: Number;
  isPopular?: Boolean;
};

export interface IProductDocument extends Document, Product {}
