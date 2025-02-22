import dppLogo from "../assets/dpp-logo.svg";
import kmtLogo from "../assets/kmt-logo.svg";
import pfpLogo from "../assets/pfp-logo.svg";
import tppLogo from "../assets/tpp-logo.svg";

export enum Party {
  DPP = "民主進步黨",
  KMT = "中國國民黨",
  TPP = "台灣民眾黨",
  PFP = "親民黨",
}

export const PartyColor: {
  [key in Party]: { backgroundClassName: string; logo: string };
} = {
  [Party.DPP]: { backgroundClassName: "dpp-bg", logo: dppLogo },
  [Party.KMT]: { backgroundClassName: "kmt-bg", logo: kmtLogo },
  [Party.TPP]: { backgroundClassName: "tpp-bg", logo: tppLogo },
  [Party.PFP]: { backgroundClassName: "pfp-bg", logo: pfpLogo },
};

export const PartyCircle: {
  [key in Party]: string;
} = {
  [Party.DPP]: "dpp-dot",
  [Party.KMT]: "kmt-dot",
  [Party.TPP]: "tpp-dot",
  [Party.PFP]: "pfp-dot",
};

export const PartyPath: {
  [key in Party]: string;
} = {
  [Party.DPP]: "dpp-path",
  [Party.KMT]: "kmt-path",
  [Party.TPP]: "tpp-path",
  [Party.PFP]: "pfp-path",
};
