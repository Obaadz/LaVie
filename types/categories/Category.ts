export type Category = {
  image: {
    data: Buffer;
    contentType: string;
  };
  title: string;
  isPopular?: Boolean;
};

export interface ICategoryDocument extends Document, Category {}
