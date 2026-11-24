import type { Certification } from "@/types/content";

export const selectedCredentials = [
  {
    id: "asean-geoai-fusion-bootcamp-1",
    title: "ASEAN GeoAI Fusion 2026 - Bootcamp 1: Foundation Track",
    issuer: "Malaysian Communications and Multimedia Commission (MCMC)",
    issuedAt: "July 7-9, 2026",
    credentialId: "AGAIF2026-BC1-0043",
    documentUrl:
      "/documents/Aung-Si-Phyo-ASEAN-GeoAI-Fusion-2026-Bootcamp-1.pdf",
  },
  {
    id: "asean-geoai-fusion-bootcamp-2",
    title: "ASEAN GeoAI Fusion 2026 - Bootcamp 2: Advance Track",
    issuer: "Malaysian Communications and Multimedia Commission (MCMC)",
    issuedAt: "July 21-23, 2026",
    credentialId: "AGAIF2026-BC2-0034",
    documentUrl:
      "/documents/Aung-Si-Phyo-ASEAN-GeoAI-Fusion-2026-Bootcamp-2.pdf",
  },
  {
    id: "geoai-explorer",
    title: "Certificate of GeoAI Explorer",
    issuer: "ASEAN GeoAI Fusion 2026",
    issuedAt: "September 22, 2026",
    credentialId: "E-C-MM-077-026",
    documentUrl: "/documents/Aung-Si-Phyo-GeoAI-Explorer-Certificate.pdf",
  },
] as const satisfies readonly Certification[];
