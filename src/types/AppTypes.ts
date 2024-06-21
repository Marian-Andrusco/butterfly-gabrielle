export type TTherapies = {
  id: number;
  name: string;
  description: string;
  logo?: string;
  link: string;
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
