export type TPrice = {
  id: number;
  time: number;
  price: number;
};

export type TTherapies = {
  id: number;
  name: string;
  type: "T" | "M";
  description: string;
  shortDescription: string;
  logo?: string;
  link: string;
  price: TPrice[];
};

export type TMobileNavbarProp = {
  showBtnsMobile: boolean;
  setShowBtnsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  showTherapies: boolean;
  setShowTherapies: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TDesktopNavbarProp = {
  showTherapies: boolean;
  setShowTherapies: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TRoutesBtns = {
  title: string;
  id: number;
  link: string;
};

export type TPicturePath = {
  id: number;
  path: string;
};

export type TReviews = {
  id: number;
  name: string;
  review: string;
};

export type TFaqs = {
  id: number;
  collapse: boolean;
  question: string;
  answer: string;
};
