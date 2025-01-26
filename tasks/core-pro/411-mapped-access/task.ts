type PagesMap = {
  homepage: string;
  about: string;
  contact: string;
};

type PagesAccess = {
  [K in keyof PagesMap]: boolean;
};

export function checkAccess(map: PagesMap): PagesAccess {
  return {
    homepage: true,
    about: true,
    contact: true,
  };
}
