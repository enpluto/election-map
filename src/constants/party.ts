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
  [key in Party]: { className: string; logo?: string };
} = {
  [Party.DPP]: { className: "dpp-bg", logo: dppLogo },
  [Party.KMT]: { className: "kmt-bg", logo: kmtLogo },
  [Party.TPP]: { className: "tpp-bg", logo: tppLogo },
  [Party.PFP]: { className: "pfp-bg", logo: pfpLogo },
};
