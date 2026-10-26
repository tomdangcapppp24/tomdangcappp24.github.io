import asmoPage1 from "../assets/certificates/bui-duc-anh/asmo-medals-page-1.jpg";
import asmoPage2 from "../assets/certificates/bui-duc-anh/asmo-medals-page-2.jpg";
import chemistryPage1 from "../assets/certificates/bui-duc-anh/international-chemistry-quiz-page-1.jpg";
import musicPage1 from "../assets/certificates/bui-duc-anh/le-stella-page-1.jpg";
import evergreenPage1 from "../assets/certificates/bui-duc-anh/evergreen-logistics-page-1.jpg";
import treesPage1 from "../assets/certificates/bui-duc-anh/planting-trees-page-1.jpg";
import asmoPdf from "../assets/certificates/bui-duc-anh/asmo-medals.pdf";
import chemistryPdf from "../assets/certificates/bui-duc-anh/international-chemistry-quiz.pdf";
import musicPdf from "../assets/certificates/bui-duc-anh/le-stella.pdf";
import evergreenPdf from "../assets/certificates/bui-duc-anh/evergreen-logistics.pdf";
import treesPdf from "../assets/certificates/bui-duc-anh/planting-trees.pdf";

export type Achievement = {
  id: string;
  category: string;
  title: string;
  description: string;
  year: string;
  href?: string;
  previewImages?: readonly string[];
};

// Only individually reviewed public certificate copies belong in this registry.
export const achievements: readonly Achievement[] = [
  {
    id: "asmo",
    category: "Science & mathematics",
    title: "Gold in Science. Bronze in Mathematics.",
    description: "ASMO National Level · 2025 competition edition",
    year: "2025",
    href: asmoPdf,
    previewImages: [asmoPage1, asmoPage2],
  },
  {
    id: "chemistry",
    category: "Chemistry",
    title: "International Chemistry Quiz — Credit",
    description: "Intermediate 2 · Royal Australian Chemical Institute",
    year: "2025",
    href: chemistryPdf,
    previewImages: [chemistryPage1],
  },
  {
    id: "music",
    category: "Arts & collaboration",
    title: "Le Stella — Certificate of Appreciation",
    description:
      "Contribution to the club’s activities and artistic development",
    year: "2025–26",
    href: musicPdf,
    previewImages: [musicPage1],
  },
  {
    id: "evergreen",
    category: "Organisation & teamwork",
    title: "Evergreen — Logistics Recognition",
    description: "Logistics Department · The Evergreens Gen 3",
    year: "2025–26",
    href: evergreenPdf,
    previewImages: [evergreenPage1],
  },
  {
    id: "trees",
    category: "Environmental service",
    title: "Planting Trees of Love",
    description: "Tree-planting and community service · Yen Bai Province",
    year: "2024",
    href: treesPdf,
    previewImages: [treesPage1],
  },
];
