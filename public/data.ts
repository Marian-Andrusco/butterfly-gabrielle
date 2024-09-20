import {
  TFaqs,
  TPicturePath,
  TReviews,
  TRoutesBtns,
  TTherapies,
} from "../src/types/AppTypes";

export const therapies: TTherapies[] = [
  {
    id: 0,
    name: "Access Facelift",
    type: "T",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/0",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
    ],
  },
  {
    id: 1,
    name: "Bowen",
    type: "T",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: `/terapii/1`,
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
    ],
  },
  {
    id: 2,
    name: "Access Bars",
    type: "T",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/2",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
    ],
  },
  {
    id: 3,
    name: "Masaj Intuitiv",
    type: "M",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/3",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
      {
        id: 2,
        time: 1.5,
        price: 200,
      },
      {
        id: 3,
        time: 2,
        price: 250,
      },
    ],
  },
  {
    id: 4,
    name: "Masaj Deep Tissue",
    type: "M",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/4",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
      {
        id: 2,
        time: 1.5,
        price: 200,
      },
      {
        id: 3,
        time: 2,
        price: 250,
      },
    ],
  },
  {
    id: 5,
    name: "Masaj de Relaxare",
    type: "M",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/5",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
      {
        id: 2,
        time: 1.5,
        price: 200,
      },
      {
        id: 3,
        time: 2,
        price: 250,
      },
    ],
  },
  {
    id: 6,
    name: "Masaj Terapeutic",
    type: "M",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/6",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
      {
        id: 2,
        time: 1.5,
        price: 200,
      },
      {
        id: 3,
        time: 2,
        price: 250,
      },
    ],
  },
  {
    id: 7,
    name: "Drenaj Limfatic",
    type: "M",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/7",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
      {
        id: 2,
        time: 1.5,
        price: 200,
      },
      {
        id: 3,
        time: 2,
        price: 250,
      },
    ],
  },
  {
    id: 8,
    name: "Masaj Visceral",
    type: "M",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/8",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
      {
        id: 2,
        time: 1.5,
        price: 200,
      },
      {
        id: 3,
        time: 2,
        price: 250,
      },
    ],
  },
  {
    id: 9,
    name: "Reflexoterapie",
    type: "M",
    shortDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus harum quam similique eligendi quia consectetur autem deserunt voluptates dignissimos sapiente, molestias quo inventore provident, temporibus numquam quibusdam architecto ducimus quos. Eligendi esse deserunt soluta dolore tempore quisquam nisi dicta provident illum sunt. Aliquam, accusamus aliquid ducimus repudiandae fugiat soluta laboriosam eaque voluptatibus obcaecati tempora eius cum, quo voluptate ut voluptas!",
    link: "/terapii/9",
    price: [
      {
        id: 1,
        time: 1,
        price: 150,
      },
      {
        id: 2,
        time: 1.5,
        price: 0,
      },
      {
        id: 3,
        time: 2,
        price: 0,
      },
    ],
  },
];

export const routesBtns: TRoutesBtns[] = [
  {
    title: "Acasa",
    id: 100,
    link: "/",
  },
  {
    title: "Despre mine",
    id: 101,
    link: "/despreMine",
  },
  // {
  //   title: "Contact",
  //   id: 102,
  //   link: "/contact",
  // },
  {
    title: "Preturi & Abonamente",
    id: 103,
    link: "/tarife",
  },
];

export const pictures: TPicturePath[] = [
  {
    id: 1,
    path: "/images/1.jpg",
  },
  {
    id: 2,
    path: "/images/2.jpg",
  },
  {
    id: 3,
    path: "/images/3.jpg",
  },
  {
    id: 4,
    path: "/images/4.jpg",
  },
  {
    id: 5,
    path: "/images/5.jpg",
  },
  {
    id: 6,
    path: "/images/6.jpg",
  },
  {
    id: 7,
    path: "/images/7.jpg",
  },
  {
    id: 8,
    path: "/images/8.jpg",
  },
  {
    id: 9,
    path: "/images/9.jpg",
  },
  {
    id: 10,
    path: "/images/10.jpg",
  },
  {
    id: 11,
    path: "/images/11.jpg",
  },
  {
    id: 12,
    path: "/images/12.jpg",
  },
  {
    id: 13,
    path: "/images/13.jpg",
  },
  {
    id: 14,
    path: "/images/14.jpg",
  },
  {
    id: 15,
    path: "/images/15.jpg",
  },
];

export const reviews: TReviews[] = [
  {
    id: 1,
    name: "Ana Dumitrascu",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
  },
  {
    id: 2,
    name: "Maria Dumitrascu",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
  },
  {
    id: 3,
    name: "Ana Dumitrascu",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
  },
  {
    id: 4,
    name: "Ana Dumitrascu",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
  },
  {
    id: 5,
    name: "Ana Dumitrascu",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto natus id hic perferendis tenetur, incidunt praesentium ut odio unde a!",
  },
];

export const faqs: TFaqs[] = [
  {
    id: 1,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
    collapse: false,
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 2,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
    collapse: false,
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
    collapse: false,
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 4,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
    collapse: false,
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 5,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
    collapse: false,
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    id: 6,
    question: "Lorem ipsum, dolor sit amet consectetur adipisicing elit?",
    collapse: false,
    answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];
