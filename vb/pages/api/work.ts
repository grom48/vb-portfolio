import tony from "../../assets/img/tony.jpg";

// Create type for the data
type Projects = {
  id: number;
  title: string;
  body: string;
  pageLink: string;
  image: {
    src: any;
    alt: string;
  };
};

const data: Projects[] = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post",
    pageLink: "https://www.google.com",
    image: {
      src: tony,
      alt: "Tony",
    },
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is the second post",
    pageLink: "https://www.google.com",
    image: {
      src: tony,
      alt: "Tony",
    },
  },
  {
    id: 3,
    title: "Third Post",
    body: "This is the third post",
    pageLink: "https://www.google.com",
    image: {
      src: tony,
      alt: "Tony",
    },
  },
];

export default data;
