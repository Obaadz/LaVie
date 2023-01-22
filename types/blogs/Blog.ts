export type Blog = {
  image: {
    data: Buffer;
    contentType: string;
  };
  title: string;
  paragraph: string;
  createdAt: Date;
};

export interface IBlogDocument extends Document, Blog {}
