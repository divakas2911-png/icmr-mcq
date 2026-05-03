export const questions = [
  {
    id: 1,
    question: "Which of the following correctly describes the role of enhancers in eukaryotic gene regulation?",
    options: ["Enhancers must be adjacent to the gene they regulate and work only in the sense orientation", "Enhancers are cis-acting elements that can activate transcription from great distances (up to 1 Mb), in any orientation, by recruiting transcriptional activators that loop DNA to contact the promoter", "Enhancers directly recruit RNA Pol II without any transcription factor intermediary", "Enhancers function only during embryonic development and not in adult tissues"],
    answer: 1,
    explanation: "Enhancers are cis-regulatory modules that: (1) can act from large distances (kbs to Mb away); (2) function orientation-independently; (3) are bound by sequence-specific transcription activators; (4) work through DNA looping (facilitated by Mediator/cohesin/CTCF) to contact the promoter PIC. They are tissue-specific and developmental-stage specific, and their activity is encoded in the combination of TF binding sites they contain (combinatorial control)."
  },
  {
    id: 2,
    question: "The TATA box is present in only ~10-15% of human gene promoters. What do most human promoters use instead?",
    options: ["A CAAT box at -80 is sufficient for all promoters without TATA", "CpG islands with dispersed transcription start sites, often bidirectional, with Inr and DPE elements as alternatives for precise TSS selection in TATA-less promoters", "A poly-T stretch that replaces the TATA box function", "All human promoters have a TATA box but it is often highly degenerate"],
    answer: 1,
    explanation: "~85-90% of human promoters are TATA-less and are often associated with CpG islands. These promoters have multiple dispersed TSSs (broad initiation pattern), use alternative core promoter elements (Inr, DPE, MTE, DCE, XCPE1), and are bound by TBP through TFIID interactions other than direct TBP-TATA binding (via TAF1-Inr, TAF6/9-DPE). CpG island promoters are typically constitutively active or broadly expressed, while TATA-containing promoters tend to be tissue-specific."
  },
  {
    id: 3,
    question: "The Polycomb Repressive Complex 2 (PRC2) maintains transcriptional repression of developmental genes by:",
    options: ["Recruiting DNA methyltransferases to CpG islands of target genes", "Methylating H3K27 (producing H3K27me2 and H3K27me3) through EZH2 (or EZH1) catalytic subunit — H3K27me3 is a repressive mark that recruits PRC1 to compact chromatin", "Deacetylating H3K9 and H3K14 to reduce promoter accessibility", "Phosphorylating RNA Pol II CTD to sequester it in an inactive form"],
    answer: 1,
    explanation: "PRC2 (core subunits: EZH2, EED, SUZ12, RbAp46/48) tri-methylates H3K27 via EZH2's SET domain. H3K27me3 marks are 'read' by CBX proteins in PRC1 (canonical), which ubiquitylates H2AK119 (via RING1A/B) and compacts chromatin. The PRC1-PRC2 system maintains silencing of Hox genes and other developmental regulators through cell divisions. EZH2 gain-of-function mutations (Y641) drive lymphomas by excessive H3K27me3 silencing."
  },
  {
    id: 4,
    question: "Super-enhancers (SE) are distinguished from typical enhancers by:",
    options: ["Their exclusive location at gene promoters within 500 bp of the TSS", "Large clusters of enhancers spanning >12 kb with exceptionally high densities of co-activators (Mediator, BRD4), active TFs, and H3K27ac — driving extremely high expression of cell-identity genes", "Their ability to function as promoters independently of other regulatory elements", "Their enrichment for CTCF binding sites that insulate them from nearby promoters"],
    answer: 1,
    explanation: "Super-enhancers (Whyte et al. 2013; Lovén et al. 2013): defined as large clusters of H3K27ac-marked enhancers with disproportionally high Mediator and BRD4 occupancy. They occupy 3-50× more DNA than typical enhancers but drive 10-100× more transcription of associated cell-identity genes (e.g., Oct4, Sox2 in ESCs; oncogenes in cancer). BET bromodomain inhibitors (JQ1, iBET) preferentially disrupt SEs because high BRD4 occupancy is SE-dependent."
  },
  {
    id: 5,
    question: "The 'poised/bivalent' chromatin state in embryonic stem cells is characterized by:",
    options: ["High H3K27ac and H3K4me3 at actively transcribed genes", "Co-occurrence of H3K4me3 (active mark) and H3K27me3 (repressive mark) at promoters of developmental regulator genes — keeping them silenced but ready for rapid activation upon differentiation", "H3K9me3 and DNA methylation at pluripotency gene promoters", "Loss of all histone modifications at stem cell-specific enhancers"],
    answer: 1,
    explanation: "Bivalent domains (Bernstein et al. 2006): Developmental regulators (Hox genes, lineage-specifying TFs) in ESCs carry both H3K4me3 (deposited by MLL/COMPASS) and H3K27me3 (by PRC2). Genes are transcriptionally silent but poised for rapid activation. Upon differentiation signals, one mark dominates: H3K27me3 is removed (by KDM6A/B) for activation, or H3K4me3 is removed (by KDM5) for permanent silencing. This bivalent state enables developmental flexibility."
  },
  {
    id: 6,
    question: "RNA interference (RNAi) was discovered by Fire and Mello using Caenorhabditis elegans. The core mechanism involves:",
    options: ["Double-stranded RNA (dsRNA) is recognized by Dicer, processed into ~21-23 nt siRNA duplexes, one strand is loaded into RISC (Ago2), which cleaves complementary target mRNA", "Antisense RNA binding to the promoter to silence gene transcription", "dsRNA directly stimulates translation of complementary mRNAs", "dsRNA activates PKR to globally shut down translation"],
    answer: 0,
    explanation: "RNAi pathway: long dsRNA (or exogenous siRNA) → Dicer (RNase III) processes into ~21-23 nt siRNA duplexes with 2-nt 3' overhangs. RISC loading complex loads guide strand (antisense) into Ago2; passenger strand is discarded. Ago2-RISC uses guide strand to find complementary mRNA by Watson-Crick base-pairing; Ago2 Slicer (PIWI domain) cleaves mRNA between positions 10-11 of the guide. Fire and Mello received the 2006 Nobel Prize."
  },
  {
    id: 7,
    question: "MicroRNA (miRNA) biogenesis in mammals: which enzyme catalyzes the nuclear processing step?",
    options: ["Dicer processes primary miRNA (pri-miRNA) in the nucleus", "Drosha-DGCR8 (Microprocessor complex) cleaves pri-miRNA to pre-miRNA (~60-70 nt hairpin) in the nucleus; then Exportin-5 exports to cytoplasm; then Dicer processes pre-miRNA to miRNA:miRNA* duplex", "AGO2 directly processes pri-miRNA without prior nuclear cleavage", "RNase III L cleaves pri-miRNA to pre-miRNA as part of innate immunity"],
    answer: 1,
    explanation: "miRNA biogenesis: (1) RNA Pol II transcribes pri-miRNA (long, with 5' cap and poly-A); (2) Drosha (RNase III) and its dsRBD partner DGCR8 form the Microprocessor — cleaving ~11 bp into the stem from the ssRNA-dsRNA junction on both sides to generate the pre-miRNA hairpin (~60-70 nt) with ~2 nt 3' overhang; (3) Exportin-5/RanGTP exports pre-miRNA to cytoplasm; (4) Dicer cleaves the pre-miRNA loop to generate mature miRNA:miRNA* duplex; (5) AGO2 loads guide strand → miRISC."
  },
  {
    id: 8,
    question: "The function of insulator/boundary elements (e.g., CTCF-bound sites) in the genome is to:",
    options: ["Increase transcription of all genes within the insulated domain by concentrating transcription factors", "Block enhancer-promoter communication across the insulator (enhancer-blocking activity) and/or prevent spread of heterochromatin (barrier activity) — organizing the genome into functional domains", "Replace the TATA box function at TATA-less promoters", "Mark origins of replication for eukaryotic DNA replication"],
    answer: 1,
    explanation: "Insulators have two activities: (1) Enhancer-blocking: when positioned between enhancer and promoter, block their communication (tested by insertion assays). (2) Barrier: prevent heterochromatin spreading into euchromatin. CTCF (a zinc-finger protein) is the major vertebrate insulator protein and works with cohesin to define TAD boundaries. Disruption of CTCF sites at TAD boundaries causes inappropriate enhancer-promoter contacts and can dysregulate oncogenes (e.g., at the HOXA-HOXD boundary)."
  },
  {
    id: 9,
    question: "The BRD4 bromodomain protein is important in eukaryotic transcription because it:",
    options: ["Directly catalyzes H3K27 acetylation", "Reads acetylated histone lysines (via bromodomain), recruits to active enhancers/promoters, and recruits P-TEFb (CDK9/cyclin T) to release paused RNA Pol II into productive elongation", "Is the catalytic component of the SAGA complex deubiquitylase module", "Forms the structural core of the Mediator kinase module"],
    answer: 1,
    explanation: "BRD4 (a BET family bromodomain and extra-terminal domain protein): its tandem bromodomains (BD1, BD2) bind acetylated histones (H3K14ac, H4K5ac, H4K8ac, H4K12ac), accumulating at active enhancers (especially super-enhancers) and promoters. BRD4 directly recruits P-TEFb (CDK9/CycT1), positioning it to phosphorylate NELF, DSIF, and CTD Ser2 — releasing promoter-proximal paused RNA Pol II. BET inhibitors (JQ1) competitively block BD interaction with acetyl-Lys."
  },
  {
    id: 10,
    question: "Transcription factor binding to its target sequence in chromatin requires what prior condition at most developmentally regulated genes?",
    options: ["RNA Pol II must first bind the promoter to open chromatin", "Pioneer transcription factors (e.g., FOXA1, GATA factors, SOX2) must first bind nucleosomal DNA, remodel chromatin, and 'open' the site to allow subsequent binding of conventional TFs", "The gene must first be demethylated by TET enzymes before any TF can bind", "Insulators must first be established by CTCF to prevent repressor binding"],
    answer: 1,
    explanation: "Pioneer transcription factors are a special class that can bind their target sequences on compacted, nucleosomal chromatin (unlike most TFs that require accessible DNA). They recruit chromatin remodelers (SWI/SNF) and histone-modifying enzymes to establish accessible regions (ATAC-seq peaks), creating a 'foothold' for conventional TFs. FOXA1 (hepatocyte differentiation), GATA3 (breast cancer), SOX2/OCT4/KLF4 (iPSC reprogramming) are pioneer factors."
  },
  {
    id: 11,
    question: "Topologically associating domains (TADs) are defined as:",
    options: ["Regions of the genome with shared transcriptional activity regardless of chromosomal location", "Genomic domains (~100 kb to several Mb) within which sequences interact with each other much more frequently than with sequences outside the domain — detected by Hi-C chromosome conformation capture", "Gene clusters with shared promoters connected by polycistronic RNA", "Nuclear lamina-associated domains that are always heterochromatic"],
    answer: 1,
    explanation: "TADs (Dixon et al. 2012, Nora et al. 2012, Sexton et al. 2012) are self-interacting genomic domains of ~100 kb - several Mb identified by Hi-C. TAD boundaries are enriched for CTCF and cohesin. The loop extrusion model proposes cohesin extrudes chromatin loops until blocked by convergent CTCF sites, explaining TAD boundaries. Enhancer-promoter contacts are largely constrained within TADs. Deletion of TAD boundaries causes inappropriate enhancer hijacking (limb malformations, cancer)."
  },
  {
    id: 12,
    question: "The role of co-activator SAGA (Spt-Ada-Gcn5-acetyltransferase) complex in eukaryotic transcription is best described as:",
    options: ["SAGA is the primary complex for TATA-containing promoter recognition", "SAGA acetylates histones (via Gcn5/KAT2A) at H3K9/K14, deubiquitylates H2BK123 (via Ubp8/USP22), and interacts with TBP to mediate promoter escape — functioning as a transcriptional co-activator primarily at stress-induced and highly regulated genes", "SAGA is part of the general transcription machinery at all human promoters", "SAGA represses transcription by recruiting PRC2"],
    answer: 1,
    explanation: "SAGA is a large (~2 MDa) HAT/DUB complex with multiple modules: (1) HAT module (Gcn5/KAT2A) — H3K9ac, H3K14ac; (2) DUB module (Ubp8/USP22) — removes H2BK120ub1; (3) TBP-interaction module (Spt3/8); (4) TAF module (shared TAFs with TFIID); (5) Activator interaction (Ada2/Ada3). SAGA is particularly important at TATA-containing, inducible promoters (galactose-regulated genes in yeast, heat shock genes, interferon response genes)."
  },
  {
    id: 13,
    question: "In mammals, gene silencing by X-chromosome inactivation (XCI) is initiated by expression of which long non-coding RNA?",
    options: ["HOTAIR, which recruits PRC2 to the inactive X", "XIST (X-Inactive Specific Transcript) RNA, which coats the inactive X chromosome in cis and recruits silencing machinery including PRC1/PRC2, SPEN, HDAC3, and others", "H19 imprinting control RNA", "NEAT1, which forms paraspeckles on the inactive X"],
    answer: 1,
    explanation: "XIST (encoded on the X) is expressed only from the inactive X (Xi) in somatic cells. XIST RNA (~17 kb in humans) coats Xi in cis, spreading from the XIC (X inactivation center). XIST recruits: SPEN (HDAC3 recruiter, essential for initial silencing), PRC1/PRC2 (H2AK119ub, H3K27me3), SMCHD1, DNMT3A/B (for DNA methylation of CpG islands later). Active X is protected by Tsix antisense RNA (in mice) and blocking XIST coating. XCI is largely irreversible in somatic cells."
  },
  {
    id: 14,
    question: "N6-methyladenosine (m6A) modification on mRNA is installed by writers, read by readers, and removed by erasers. The primary mRNA methyltransferase writer complex is:",
    options: ["METTL14 alone", "METTL3-METTL14 heterodimer (writer complex) with cofactors WTAP, RBM15, and others — METTL3 is the catalytic subunit", "DNMT3A (which also methylates mRNA)", "FTO and ALKBH5 (which are actually the erasers)"],
    answer: 1,
    explanation: "m6A is the most abundant internal modification in eukaryotic mRNA. The writer complex: METTL3 (catalytic, SAM-dependent methyltransferase), METTL14 (structural scaffold), WTAP (splicing factor adaptor), VIRMA, ZC3H13, RBM15/15B. m6A is deposited at GGACU consensus sites (with A methylated). Readers: YTHDF1/2/3, YTHDC1/2, eIF3 (cap-independent translation at m6A). Erasers: FTO and ALKBH5 oxidatively demethylate m6A. m6A affects RNA stability, splicing, translation, nuclear export."
  },
  {
    id: 15,
    question: "Activation of transcription by p53 during DNA damage involves which mechanism?",
    options: ["p53 binds the TATA box directly as a substitute for TBP", "p53 (after stabilization by MDM2 inhibition) binds p53 response elements (two decamers: RRRCWWGYYY × 2) and recruits co-activators (p300/CBP HAT, PCAF, Mediator) to activate p21, PUMA, BAX, and other target genes", "p53 phosphorylates RNA Pol II CTD to activate elongation at target genes", "p53 recruits Drosha to process pri-miRNAs that target MDM2"],
    answer: 1,
    explanation: "p53 is normally kept at low levels by MDM2 (E3 ligase for p53 ubiquitylation → proteasomal degradation). DNA damage → ATM/ATR/Chk1/Chk2 phosphorylate p53 (S15, S20) and MDM2 → prevents MDM2-p53 interaction → p53 accumulates. p53 tetramer binds p53RE (2 half-sites: RRRCWWGYYY, N=any, W=A/T, R=purine, Y=pyrimidine) and recruits p300/CBP (HAT for H3K18ac/H3K27ac), PCAF, and Mediator, activating cell cycle arrest (p21), apoptosis (PUMA, BAX), or senescence genes."
  },
  {
    id: 16,
    question: "The SWI/SNF (BAF in humans) complex repositions or evicts nucleosomes using which energy source?",
    options: ["Histone methyltransferase activity that destabilizes nucleosome contacts", "ATP hydrolysis by the Snf2/BRG1/BRM ATPase subunit, which generates torsional stress in the DNA to slide or evict nucleosomes, providing access to transcription factors", "GTP hydrolysis coupled to histone chaperone activity", "NAD+-dependent deacetylase activity that loosens nucleosome contacts"],
    answer: 1,
    explanation: "SWI/SNF/BAF are ATP-dependent chromatin remodeling complexes. The catalytic ATPase (Snf2 in yeast, BRG1/SMARCA4 or BRM/SMARCA2 in mammals) hydrolyzes ATP to generate a transient torsional DNA wave that breaks histone-DNA contacts, sliding nucleosomes to new positions or ejecting histones entirely. This exposes binding sites for TFs, the PIC, and other chromatin regulators. SMARCB1 (BAF47/hSNF5) is a tumor suppressor subunit; ~20% of cancers have SWI/SNF mutations."
  },
  {
    id: 17,
    question: "The Notch signaling pathway regulates transcription through which mechanism at the molecular level?",
    options: ["Notch receptor activates JAK-STAT pathway to phosphorylate gene-activating transcription factors", "Gamma-secretase cleaves Notch ICD; NICD translocates to nucleus, binds CSL/RBPJ (otherwise a repressor), converts it to activator by displacing co-repressors and recruiting MAML/p300 to activate target genes (Hes/Hey)", "Notch receptor directly binds enhancers as a transcription factor using its extracellular domain", "Notch activates Wnt pathway, which activates β-catenin nuclear entry"],
    answer: 1,
    explanation: "Canonical Notch signaling: Notch ligand (Delta, Jagged) binding → ADAM10 cleavage → gamma-secretase (Presenilin) releases NICD (Notch intracellular domain). NICD enters the nucleus and binds CSL/RBPJ (which is a transcriptional repressor when bound by SHARP/HDAC complex). NICD displaces the co-repressor complex, and with MAML (Mastermind-like) and p300/CBP, converts CSL into an activator of HES1, HEY1, MYC, CCND1, etc. CDK8 phosphorylates and destabilizes NICD."
  },
  {
    id: 18,
    question: "Glucocorticoid receptor (GR) transcriptional regulation: when ligand (cortisol) binds GR, what happens?",
    options: ["GR dimerizes in the cytoplasm, immediately enters the nucleus, and binds GRE sequences", "Cortisol binds GR in the cytoplasm → HSP90/HSP70 chaperone complex dissociates → GR dimerizes → nuclear translocation via importin → binds GRE (palindromic TGTTCT/AGAACA) as direct repeats or half-sites → recruits SRC-1/p160 co-activators, p300/CBP, SWI/SNF, Mediator", "GR activates membrane-associated tyrosine kinase signaling instead of nuclear entry", "Cortisol-GR complex acts in the cytoplasm to stabilize specific mRNAs"],
    answer: 1,
    explanation: "GR (nuclear hormone receptor): In absence of ligand, GR is sequestered by HSP90-HSP70-p23-FKBP51 chaperone complex in cytoplasm. Ligand binding → chaperone release → GR dimerization → nuclear import (via NLS/importin α). In nucleus, GR binds GREs (glucocorticoid response elements) via C4 zinc finger DBD as a homodimer. GR recruits co-activators: SRC-1/NCOA1 (p160 family, HAT), p300/CBP (H3K18/27 acetylation), SWI/SNF (chromatin remodeling), Mediator → activates anti-inflammatory and metabolic genes. GR can also tether to AP-1/NF-κB to repress inflammatory genes (transrepression)."
  },
  {
    id: 19,
    question: "The role of lncRNAs (long non-coding RNAs >200 nt) in gene regulation is best exemplified by HOTAIR which:",
    options: ["HOTAIR encodes a short peptide that inhibits PRC2 directly in trans", "HOTAIR (expressed from the HOXC locus) recruits PRC2 (via its 5' domain) to silence HOXD locus in trans and recruits LSD1/CoREST/REST complex (via its 3' domain) to demethylate H3K4me2 — acting as a scaffold lncRNA", "HOTAIR base-pairs with HOXD mRNA to trigger NMD", "HOTAIR activates HOXD expression by competing with PRC2 for chromatin binding"],
    answer: 1,
    explanation: "HOTAIR (Rinn et al. 2007): expressed from HOXC locus but acts in trans to silence HOXD locus. HOTAIR's 5' domain binds PRC2 (EZH2/SUZ12), targeting H3K27me3 to HOXD. Its 3' domain binds LSD1/CoREST/REST, targeting H3K4me2 demethylation. This dual scaffold function reprograms histone modifications at HOXD. HOTAIR overexpression in breast cancer promotes metastasis. HOTAIR is the paradigm for scaffold lncRNAs, though many lncRNA-PRC2 interactions may be promiscuous in vitro."
  },
  {
    id: 20,
    question: "Transcription factor 'activation domains' (ADs) work by which mechanism?",
    options: ["ADs bind DNA directly through an acidic loop structure", "ADs are disordered/unstructured protein regions (acidic, glutamine-rich, proline-rich) that interact with co-activator complexes (Mediator, TFIID TAFs, p300/CBP, SWI/SNF) to recruit and stabilize the PIC", "ADs contain bromodomains that bind acetylated histones at target promoters", "ADs are post-translationally cleaved to release an active DNA-binding peptide"],
    answer: 1,
    explanation: "Transcriptional activation domains (e.g., VP16's acidic AD, p53's ADs, Gal4's acid blobs) are typically intrinsically disordered regions that fold upon binding to co-activators. They interact with: Mediator (Med25 binding VP16/p53 AD), TFIID TAFs (TAF9 binding Gal4, TAF4 binding some ADs), p300/CBP KIX domain (pKID binding, CREB), SWI/SNF (ARID domain). The molecular fuzziness (multiple low-affinity contacts) allows polyvalent interactions that collectively recruit the transcription machinery."
  },
  {
    id: 21,
    question: "The concept of 'transcription factor condensates' (phase separation) at super-enhancers involves:",
    options: ["Transcription factors form irreversible protein aggregates at super-enhancers", "Transcription factors with intrinsically disordered regions (IDRs) form transient liquid-liquid phase-separated condensates at super-enhancers, concentrating transcriptional machinery — consistent with the puncta observed for MED1, BRD4, and RNA Pol II at super-enhancers", "Condensates form only at heterochromatic regions to silence nearby genes", "Phase separation is exclusively mediated by H3K27me3 histone modifications"],
    answer: 1,
    explanation: "Boija et al. (2018) and Cho et al. (2018): RNA Pol II CTD (with its repetitive sequence), Mediator (MED1), OCT4, GCN4 ADs form liquid-like condensates at super-enhancers and active promoters. These condensates have properties of liquid-liquid phase separation (LLPS): rapid dynamics, spherical shape, fusion events. IDRs in TF activation domains drive LLPS. The condensate model explains cooperative TF recruitment and high local concentrations. However, mechanistic significance beyond concentration effects is debated."
  },
  {
    id: 22,
    question: "In eukaryotic cells, the Wnt/β-catenin pathway activates transcription by which mechanism?",
    options: ["Wnt binds nuclear receptors that activate Wnt-response element genes", "Without Wnt: β-catenin is phosphorylated by the destruction complex (APC/Axin/CK1/GSK3) → ubiquitylated → degraded. With Wnt: GSK3 is inhibited → β-catenin accumulates → enters nucleus → binds TCF/LEF, replacing HDAC-containing co-repressor complex with CBP/p300 co-activator complex → activates Wnt target genes (MYC, CCND1, LGR5)", "Wnt activates the PI3K-AKT pathway that phosphorylates β-catenin to activate it", "β-catenin acts as a kinase at the plasma membrane to transmit Wnt signals"],
    answer: 1,
    explanation: "Wnt/β-catenin (canonical): Without Wnt, destruction complex (CK1 phosphorylates β-catenin S45; GSK3 phosphorylates S33, S37, T41) → β-TrCP recognizes phospho-β-catenin → ubiquitylation → proteasomal degradation. TCF/LEF bound to Groucho/TLE co-repressor silences target genes. Wnt binds Frizzled/LRP5/6 → Dishevelled recruits Axin to membrane → GSK3 inhibited → β-catenin accumulates → enters nucleus → displaces Groucho → recruits CBP/p300, BCL9, Pygo → activates MYC, CCND1, AXIN2, LGR5."
  },
  {
    id: 23,
    question: "The ENCODE project discovered that what fraction of the human genome shows biochemical activity (transcription, TF binding, histone modification)?",
    options: ["~1.5% (only protein-coding exons)", "~10% (coding + known regulatory elements)", "~80% (most of the genome has biochemical activity in at least one cell type)", "~50% (half the genome is Alu repeats with activity)"],
    answer: 2,
    explanation: "ENCODE (2012): Integration of >1,600 experiments across 147 cell types found that ~80% of the human genome shows biochemical functionality in at least one cell type (transcription, TF binding, histone marks, DNase hypersensitivity). This was controversial — critics argued biochemical activity ≠ functional relevance. However, it revealed the vast regulatory landscape, showing most variants in non-coding regions are in regulatory elements. Protein-coding sequences are only ~1.5-2%."
  },
  {
    id: 24,
    question: "The general process of 'chromatin immunoprecipitation followed by sequencing (ChIP-seq)' in eukaryotes maps:",
    options: ["mRNA transcript abundance across the genome", "Genome-wide binding locations of specific proteins (TFs, histone modifications, RNA Pol) using antibody-mediated enrichment of crosslinked protein-DNA complexes, followed by next-generation sequencing", "DNA methylation sites at single-nucleotide resolution", "Ribosome occupancy on mRNA molecules"],
    answer: 1,
    explanation: "ChIP-seq: (1) Crosslink protein-DNA with formaldehyde in vivo; (2) Lyse cells, sonicate/MNase to shear chromatin to ~200-500 bp; (3) Immunoprecipitate with antibody to protein of interest; (4) Reverse crosslinks, purify DNA; (5) Library prep and sequencing; (6) Align reads to genome → peaks indicate binding sites. Used to map TF binding (ChIP-seq peaks), histone marks (broad peaks for H3K27me3; sharp peaks for H3K4me3 at active promoters; H3K27ac at active enhancers)."
  },
  {
    id: 25,
    question: "The NF-κB transcription factor family is kept inactive in unstimulated cells by:",
    options: ["Cytoplasmic sequestration by IκB (inhibitor of κB) proteins that mask the NLS of NF-κB", "Phosphorylation by GSK3β that targets NF-κB for proteasomal degradation", "Nuclear export mediated by CRM1/exportin in an NES-dependent manner", "Binding to 14-3-3 proteins in the cytoplasm"],
    answer: 0,
    explanation: "NF-κB (e.g., p65/RelA:p50 heterodimer) is retained in the cytoplasm by IκB proteins (IκBα, IκBβ, IκBε) which bind the RHD (Rel homology domain) and mask the NLS. Upon stimulation (LPS, TNF, IL-1, DSBs): IKK complex (IKKα/IKKβ/NEMO) phosphorylates IκBα at S32/S36 → β-TrCP ubiquitylates IκBα → proteasomal degradation → NF-κB NLS exposed → nuclear import → binds κB sites → activates inflammatory/survival genes. IKKα also mediates non-canonical NF-κB (p100 processing to p52)."
  },
  {
    id: 26,
    question: "Transcriptional regulation by hormone response elements (HREs) is a feature of nuclear hormone receptors. Which class of nuclear receptors can bind DNA as monomers at half-sites?",
    options: ["Glucocorticoid receptors (GR) bind only as homodimers", "Retinoid X Receptor (RXR) homodimers at DR-1 elements and some orphan receptors (SF-1, LRH-1) at extended half-sites", "Thyroid hormone receptors only bind HREs with a corepressor SMRT/NCoR in the ligand-unbound state", "All nuclear receptors require heterodimerization with RXR"],
    answer: 1,
    explanation: "Nuclear receptor binding: (1) Steroid receptors (GR, ER, PR, AR) bind as homodimers to palindromic HREs; (2) RXR heterodimers (RXR-RAR, RXR-TR, RXR-VDR) bind direct repeat HREs; (3) Monomeric binding at extended half-sites is characteristic of orphan receptors (SF-1, LRH-1, NGFI-B/Nur77) and some RXR homodimers at DR-1 elements. The dimerization interface and spacing between half-sites determines selectivity."
  },
  {
    id: 27,
    question: "The mechanism by which TET (Ten-Eleven Translocation) enzymes promote gene activation at CpG islands is:",
    options: ["TET directly methylates cytosines at enhancers to mark them as active", "TET1/2/3 oxidize 5-methylcytosine (5mC) to 5hmC, 5fC, 5caC — the latter two are excised by TDG/BER, resulting in net demethylation and restoration of unmodified C at CpG islands, allowing TF binding and gene activation", "TET enzymes acetylate histone H3K27 at CpG island promoters", "TET proteins recruit PRC2 to CpG islands to install H3K27me3"],
    answer: 1,
    explanation: "Active DNA demethylation in mammals: TET1/2/3 (Fe2+/αKG-dependent dioxygenases) oxidize 5mC → 5hmC → 5-formylcytosine (5fC) → 5-carboxylcytosine (5caC). TDG (Thymine DNA Glycosylase) excises 5fC and 5caC → abasic site → BER restores unmodified C. Additionally, DNMT1 does not efficiently maintain 5hmC during replication, leading to passive demethylation. This reactivates silenced genes. TET2 mutations are common in AML, MDS, and other cancers."
  },
  {
    id: 28,
    question: "Eukaryotic gene expression is regulated during elongation by a process called 'co-transcriptional splicing.' The advantage of this coupling is:",
    options: ["Splicing can only occur co-transcriptionally and not on released mRNA", "First-order splicing kinetics are much faster when RNA is still tethered to the transcription machinery; additionally, splicing factors are recruited by the phospho-CTD; and slow elongation near exons can allow splicing of suboptimal splice sites before the alternative exon is transcribed ('kinetic coupling')", "Co-transcriptional splicing prevents any mRNA from entering the cytoplasm before splicing is complete", "CTD phosphorylation directly splices introns without spliceosome involvement"],
    answer: 1,
    explanation: "Co-transcriptional splicing: ~80% of introns in highly expressed genes are removed before transcription is complete. RNA Pol II CTD (Ser2-P during elongation) recruits SR proteins and spliceosomal components. Kinetic coupling: RNA Pol II elongation rate influences splice site choice — slow elongation near weak splice sites allows time for their recognition before competing downstream strong sites are synthesized. This 'window of opportunity' model explains how elongation rate changes (from nucleosomes, histone marks) affect alternative splicing."
  },
  {
    id: 29,
    question: "The hippo pathway effectors YAP/TAZ control gene expression by:",
    options: ["YAP/TAZ directly bind TATA boxes and recruit TBP", "When Hippo kinases (MST1/2, LATS1/2) are active, they phosphorylate YAP/TAZ → cytoplasmic sequestration (by 14-3-3) and degradation. When Hippo OFF → YAP/TAZ enter nucleus → bind TEAD family TFs → recruit p300/CBP and NuRD complex → regulate cell growth, organ size, and YAP target genes (CTGF, CYR61, AMOTL2)", "YAP/TAZ are GPCR-coupled transcription factors activated by LPA", "YAP/TAZ activate the TFIIH complex to increase global transcription"],
    answer: 1,
    explanation: "Hippo pathway: Cell density, mechanical forces, and other signals activate Hippo kinase cascade (MST1/2 → phosphorylates and activates LATS1/2 → phosphorylates YAP S127/S381 and TAZ S89). Phospho-YAP/TAZ bind 14-3-3 (cytoplasm) and are ubiquitylated/degraded. Low cell density or mechanically stiff matrix → Hippo OFF → unphosphorylated YAP/TAZ enter nucleus → bind TEAD1-4 TFs → recruit transcriptional co-activators → activate growth and survival genes. YAP/TAZ are amplified/activated in many cancers."
  },
  {
    id: 30,
    question: "ATAC-seq (Assay for Transposase-Accessible Chromatin with sequencing) identifies:",
    options: ["All methylated CpG sites throughout the genome", "Open chromatin regions (nucleosome-depleted regions, active promoters, enhancers) by inserting sequencing adapters via hyperactive Tn5 transposase at accessible DNA — capturing TF binding footprints and regulatory element maps", "All histone modification marks simultaneously through multi-antibody immunoprecipitation", "mRNA transcript 3' ends and polyadenylation sites"],
    answer: 1,
    explanation: "ATAC-seq uses a hyperactive Tn5 transposase loaded with sequencing adapters. Tn5 preferentially inserts into accessible (nucleosome-free) chromatin regions (active promoters, enhancers, insulators). The tagmented fragments are sequenced, and read-rich peaks indicate open chromatin. Sub-nucleosomal footprints reveal TF binding sites within open regions. Requires only ~500-50,000 cells (vs millions for ChIP-seq). Single-cell ATAC-seq (scATAC-seq) maps regulatory heterogeneity."
  },
  {
    id: 31,
    question: "The cohesin complex (RAD21, SMC1, SMC3, SA1/SA2) in the context of gene regulation (not just cell division) functions by:",
    options: ["Cohesin acts only in DNA repair to hold sister chromatids together", "Cohesin forms chromatin loops by loop extrusion (NIPBL/MAU2 loads cohesin; WAPL unloads; CTCF boundaries stop extrusion), creating TADs and juxtaposing enhancers with promoters within domains", "Cohesin phosphorylates Mediator to activate enhancer-promoter looping", "Cohesin is only active during S phase when DNA is replicated"],
    answer: 1,
    explanation: "Cohesin (SMC1-SMC3-RAD21-SA1/2 ring) is loaded by NIPBL/MAU2 and unloaded by WAPL (and acetylation by ESCO1/2 stabilizes cohesin on chromatin). The loop extrusion model: cohesin extrudes DNA loops bidirectionally using ATPase energy until blocked by convergently oriented CTCF sites. This creates TADs and brings enhancers close to promoters. Depletion of cohesin or CTCF collapses TADs, altering enhancer-promoter contact patterns and gene expression. Cohesin mutations drive cancers (e.g., AML, Ewing sarcoma)."
  },
  {
    id: 32,
    question: "NuRD (Nucleosome Remodeling and Deacetylase) complex functions as:",
    options: ["A purely activating complex that opens chromatin for transcription", "A dual repressive complex combining ATPase-dependent chromatin remodeling (CHD3/CHD4) with histone deacetylase activity (HDAC1/HDAC2), recruited by transcriptional repressors to silence target genes and establish repressive chromatin states", "A histone acetyltransferase complex that marks enhancers", "An RNA helicase complex that promotes splicing of target genes"],
    answer: 1,
    explanation: "NuRD (core subunits: HDAC1/2, CHD3/4 ATPase, MTA1/2/3, RBBP4/7, MBD2/3, GATAD2A/B, DOC1) has dual enzymatic activities: (1) CHD3/4 remodel nucleosomes (using ATP); (2) HDAC1/2 deacetylate H3K9ac, H3K14ac, H3K27ac, H4K16ac. Together, these activities compact chromatin and silence genes. NuRD is recruited by many repressors: MBD2 (reads 5mC), FOG1 (GATA-1 co-repressor), KAP1/TRIM28 (with HP1), Mi-2β. NuRD is frequently dysregulated in cancer."
  },
  {
    id: 33,
    question: "Transcriptional bursting in eukaryotes is influenced by enhancer activity. How do super-enhancers specifically affect bursting parameters?",
    options: ["Super-enhancers increase burst size only (more polymerases per burst) but not burst frequency", "Super-enhancers primarily increase burst frequency (how often a gene transitions from OFF to ON) by maintaining high local TF concentration and facilitating rapid PIC reassembly between bursts", "Super-enhancers eliminate transcriptional bursting in favor of constitutive transcription", "Super-enhancers affect only the mRNA half-life, not actual transcription bursting"],
    answer: 1,
    explanation: "Single-molecule imaging studies show that enhancers primarily increase burst frequency (how often the gene switches from inactive to active state) rather than burst size (number of polymerases per burst), though both parameters can be regulated. Super-enhancers, with their high concentration of condensed TFs and BRD4/Mediator, likely facilitate faster re-initiation and maintain the active state for longer durations. The phase separation model suggests condensates at SEs create high local TF concentrations that reduce the time between bursts."
  },
  {
    id: 34,
    question: "The Polycomb Repressive Complex 1 (PRC1) canonical form deposits which histone mark?",
    options: ["H3K27me3", "H2AK119 monoubiquitylation (H2AK119ub1) via RING1A/RING1B E3 ligases", "H3K9me3 (heterochromatin mark)", "H4K20me3 (constitutive heterochromatin)"],
    answer: 1,
    explanation: "Canonical PRC1 (cPRC1): RING1A or RING1B (the E3 ubiquitin ligase) + CBX (chromobox) proteins (which read H3K27me3 via chromodomain) + PHC (polyhomeotic) + BMI1/PCGF. RING1B monoubiquitylates H2A K119. H2AK119ub1 inhibits transcription (interferes with RNA Pol II elongation and H3K4 methylation). Non-canonical PRC1 (ncPRC1) lacks CBX and is recruited independently of PRC2. The canonical cascade: PRC2→H3K27me3→CBX/PRC1→H2AK119ub1 is important for developmental gene silencing."
  },
  {
    id: 35,
    question: "The PTEN tumor suppressor gene is frequently silenced in cancer by promoter hypermethylation. Which enzyme directly methylates the cytosines to silence PTEN?",
    options: ["EZH2 (PRC2 catalytic subunit) methylates PTEN promoter cytosines", "DNMT3A and DNMT3B de novo DNA methyltransferases add methyl groups to CpG cytosines in the PTEN promoter (with DNMT3L as a stimulatory cofactor)", "DNMT1 (maintenance methyltransferase) initiates de novo methylation at PTEN", "TET2 methylates PTEN promoter CpGs in an inverse manner"],
    answer: 1,
    explanation: "DNA methylation of CpG islands (as occurs at PTEN, CDH1, BRCA1, MLH1 in various cancers) is catalyzed by DNMT3A and DNMT3B (de novo methyltransferases, which also require DNMT3L for stimulation). Once established, DNMT1 (the maintenance methyltransferase) copies the methylation pattern to daughter strands during replication (recognizes hemimethylated CpG via UHRF1/PCNA recruitment). EZH2 methylates histones (H3K27me3), not DNA. TET enzymes demethylate (active DNA demethylation)."
  },
  {
    id: 36,
    question: "The concept of 'transcriptional memory' refers to which phenomenon?",
    options: ["mRNA molecules persisting in cells for months after the gene is silenced", "Genes previously activated by a stimulus are re-activated more rapidly upon subsequent exposure — mediated by epigenetic marks, lingering TF binding, or altered chromatin states that persist through cell divisions", "Long-term potentiation in neurons mediated by transcription", "Post-translational modifications that remember protein identity"],
    answer: 1,
    explanation: "Transcriptional memory: after an initial activation stimulus, some genes return faster to an active state upon re-stimulation. Mechanisms include: (1) Retained histone marks (H3K4me2 at previously active promoters even when silenced — 'poising'); (2) Persistent TF binding through mitosis (bookmarking — BRD4, GATA1, and others remain bound during mitosis); (3) Altered nucleosome positioning at previously active genes; (4) Nuclear pore proximity effects in yeast. This underlies innate immune memory (trained immunity) and cellular identity."
  },
  {
    id: 37,
    question: "AP-1 (Activator Protein 1) transcription factor family members (Fos, Jun) are activated by MAP kinase signaling. How does ERK activation lead to AP-1 activity?",
    options: ["ERK directly phosphorylates DNA at AP-1 binding sites to recruit AP-1", "ERK phosphorylates and activates RSK which phosphorylates SRF-Elk1 complex (driving c-Fos transcription); ERK also directly phosphorylates c-Jun (at T239/S243 activating) and RSK phosphorylates CREB → all driving c-Fos and c-Jun expression and post-translational activation", "ERK activates AP-1 by ubiquitylating its repressor IκB", "ERK directly acetylates the c-Jun activation domain to increase co-activator recruitment"],
    answer: 1,
    explanation: "ERK → AP-1 induction: (1) ERK phosphorylates Elk-1 (ETS factor) in ternary complex with SRF at the serum response element (SRE) of c-FOS promoter → c-Fos mRNA induction; (2) RSK (ERK substrate) phosphorylates CREB S133 → CBP/p300 recruitment → additional c-FOS induction; (3) JNK (stress kinase, also activated by mitogenic stimuli) phosphorylates c-Jun N-terminus (S63, S73) → enhances c-Jun transactivation. Fos-Jun heterodimer (AP-1) binds TGACTCA (TPA-response element) to activate proliferation and survival genes."
  },
  {
    id: 38,
    question: "The phenomenon of 'enhancer RNA (eRNA)' transcription at active enhancers indicates what?",
    options: ["Enhancer RNAs encode small proteins that activate nearby gene promoters", "eRNAs are 1-2 kb non-polyadenylated non-coding RNAs transcribed bidirectionally from active enhancers (marked by H3K27ac and p300) — their presence marks active enhancers, and some eRNAs directly facilitate enhancer-promoter looping, release of paused RNA Pol II, or recruit cohesin", "eRNAs are primary transcripts of enhancer-associated tRNA genes", "eRNAs serve as decoy RNAs that sequester silencing machinery away from enhancers"],
    answer: 1,
    explanation: "eRNAs (Kim et al. 2010; Wang et al. 2011): Active enhancers (H3K27ac, p300, MED1, H3K4me1) produce non-polyadenylated, bidirectional eRNAs of 0.5-2 kb. eRNA levels positively correlate with target gene expression. Mechanistic roles: (1) Some eRNAs facilitate enhancer-promoter looping by binding cohesin/Mediator; (2) Some eRNAs activate transcription by releasing paused Pol II (e.g., via NELF interaction); (3) Some eRNAs modify chromatin. However, whether most eRNAs are functional or merely byproducts of open chromatin is debated."
  },
  {
    id: 39,
    question: "Transcription factor cooperation at composite regulatory elements is explained by the concept of:",
    options: ["Synergistic activation — two activators bound to adjacent sites produce a much greater than additive transcriptional effect due to cooperative recruitment of co-activators and multiple weak contacts with the PIC", "Linear addition — each TF contributes its individual activation energy independently", "Competition — TFs compete for the same site and the strongest TF dominates", "Epistasis — one TF always dominates and prevents the other from contributing"],
    answer: 0,
    explanation: "Combinatorial/synergistic control: Multiple TFs bound to adjacent sites in a composite enhancer often show non-additive (synergistic) activation because they cooperatively recruit co-activator complexes (Mediator, p300/CBP, SWI/SNF) that require multiple simultaneous contacts. Removing one TF from a composite element can abolish activation of all others (quenching). This is why eukaryotic gene regulatory elements have dense TF binding sites and why TF combinations (not individual TFs) specify cell identity. Interdigitated TF motifs in enhancers are selected for these synergistic interactions."
  },
  {
    id: 40,
    question: "The tumor suppressor RB1 (retinoblastoma protein) regulates the cell cycle by repressing which transcription factor in G1 phase?",
    options: ["p53 — RB1 sequesters p53 from its target gene promoters", "E2F transcription factors — hypophosphorylated RB1 binds E2F1-3a, repressing S-phase entry genes; CDK4/6-cyclin D phosphorylates RB1 → releases E2F → activates E2F target genes", "MYC — RB1 directly represses MYC transcription", "YAP — RB1 sequesters YAP in the cytoplasm to prevent its nuclear entry"],
    answer: 1,
    explanation: "RB1 cell cycle control: In early G1, hypophosphorylated RB1 (the 'active' repressive form) binds E2F1/2/3a activation domains, tethers HDAC1/2 and other repressive complexes to E2F target promoters (DHFR, CCNE, CCNA, CDK2, MCM, etc.), repressing S-phase gene expression. CDK4/6-cyclin D phosphorylates RB1 (during G1 progression), releasing E2F → activates S-phase genes. CDK2-cyclin E further phosphorylates RB1, completing the G1/S transition. CDK4/6 inhibitors (palbociclib) work by maintaining RB1 in the hypophosphorylated state."
  },
  {
    id: 41,
    question: "The MYC oncogene's transcriptional activity involves which mechanism distinct from sequence-specific activation?",
    options: ["MYC binds E-box sequences (CACGTG) and specifically activates only those target genes as a point-to-point activator", "MYC-MAX binds E-boxes and recruits P-TEFb, TRRAP/SAGA, Mediator, and other factors to enhance RNA Pol II elongation at already-active genes ('transcriptional amplification') — MYC acts as a global amplifier of transcription proportional to existing activity", "MYC acts primarily as a repressor of tumor suppressor genes by recruiting HDAC complexes", "MYC activates transcription only when dimerized with N-MYC"],
    answer: 1,
    explanation: "MYC-MAX heterodimer binds E-boxes (CACGTG) at active gene promoters genome-wide. MYC's function in cancer: (1) Direct target gene activation of growth/metabolic genes (ribosome biogenesis, cell cycle, glycolysis); (2) 'Transcriptional amplification' — MYC enhances the output of all active genes proportionally (Lin et al. 2012, Nie et al. 2012), including by promoting RNA Pol II elongation (recruiting P-TEFb) and recruiting BRD4; (3) MYC represses anti-proliferative genes by sequestering MIZ1 (a transcription activator). MYC is amplified/overexpressed in ~70% of cancers."
  },
  {
    id: 42,
    question: "What is 'topological genome organization' and how does it relate to gene regulation?",
    options: ["The physical structure of histones determines which genes can be transcribed", "The 3D organization of chromatin into compartments (A/B), TADs, and loops physically separates or connects regulatory elements with target genes — disruption of this organization by mutations/inversions can dysregulate gene expression by changing enhancer-promoter connectivity", "Topological isomers of supercoiled DNA regulate promoter activity locally", "The topology of RNA Pol II CTD determines elongation speed across chromatin"],
    answer: 1,
    explanation: "Genome organization (detected by Hi-C and related techniques): (1) Compartments — A compartment (active, gene-rich, H3K27ac-high) and B compartment (inactive, H3K27me3/H3K9me3-high) segregate in 3D space; (2) TADs constrain enhancer-promoter interactions; (3) Loops bring specific regulatory elements into proximity. Disease-causing structural variants can disrupt TAD boundaries (TADocathies), merge enhancers with new targets (enhancer hijacking in cancers, e.g., MYC activation by Wnt enhancers; PDGFRA activation in gliomas)."
  },
  {
    id: 43,
    question: "How does the Cyclin-CDK complex Cyclin D-CDK4/6 specifically regulate RB1 and the cell cycle G1/S transition?",
    options: ["CDK4/6 phosphorylates S-phase genes directly to activate DNA synthesis", "CDK4/6-Cyclin D phosphorylates RB1 at Ser780, Ser795, Ser807/811 (and others), partially disrupting RB1-HDAC interaction; CDK2-CyclinE then hyperphosphorylates RB1, completely releasing E2F and allowing full G1/S gene expression; CDK4/6 is inhibited by p16INK4a (encoded by CDKN2A)", "CDK4/6 phosphorylates E2F directly to activate its transcriptional activity", "CDK4/6 phosphorylates p21 to inactivate it and allow CDK2 activity"],
    answer: 1,
    explanation: "CDK4/6-Cyclin D (induced by mitogenic signals, Ras/ERK/MYC) phosphorylates RB1 on multiple sites in G1. Partially phosphorylated RB1 loses HDAC binding but still weakly interacts with E2F. CDK2-Cyclin E (whose gene is an E2F target — positive feedback) hyperphosphorylates RB1, releasing E2F completely (bistable switch). p16INK4A (CDKN2A) inhibits CDK4/6 specifically; p21 (CDKN1A) inhibits CDK2/CDK4; p27 inhibits CDK2. CDK4/6 inhibitors (palbociclib, ribociclib, abemaciclib) are approved for ER+ breast cancer."
  },
  {
    id: 44,
    question: "Viral oncoproteins like E7 (HPV) and E1A (adenovirus) dysregulate cell cycle by which shared mechanism?",
    options: ["They activate CDK4/6 through direct binding to cyclin D", "They bind the RB1 pocket domain using an LXCXE motif, displacing E2F and forcing cell cycle entry even in the absence of growth signals — also targeting p107 and p130 (pocket protein family)", "They directly phosphorylate p53 to activate it constitutively", "They degrade CDK inhibitors p21 and p27 via the proteasome"],
    answer: 1,
    explanation: "HPV E7 (and adenovirus E1A) contain LXCXE motifs that bind the RB1 pocket domain (A/B box of RB1), competing with the E2F transactivation domain for RB1 binding. This constitutively releases E2F → S-phase entry without external mitogenic signals → uncontrolled proliferation. E7 also induces centrosome abnormalities and chromosomal instability. HPV E6 simultaneously degrades p53 (via E6AP E3 ligase), removing the second checkpoint. This dual attack explains why HPV is highly oncogenic."
  },
  {
    id: 45,
    question: "p300 and CBP (CREB-binding protein) are histone acetyltransferases that function as transcriptional co-activators. Their substrates include:",
    options: ["H3K9 (creating H3K9ac — a repressive mark)", "H3K18, H3K27 (activating marks when acetylated), H4K8, H2A/H2B, and numerous non-histone targets including p53, E2F, β-catenin, PCNA, and Hsp90 — p300/CBP are the central HATs in activator-driven transcription", "Only H4K16 acetylation (by MOF/KAT8, not p300)", "H3K56 acetylation specifically during DNA replication"],
    answer: 1,
    explanation: "p300/CBP (KAT3B/KAT3A) are large (~300 kDa) acetyltransferases with the KAT domain acetylating: H3K18ac (at active enhancers), H3K27ac (at active enhancers — distinguished from H3K27me3 at Polycomb loci), H4K8ac, H2BK20ac, and ~100+ non-histone proteins (p53-K382ac, E2F1-K117ac, β-catenin, PCNA, MDM2, etc.). p300/CBP are recruited by virtually all sequence-specific activators (p53, CREB, AP-1, nuclear receptors, Notch NICD, YAP/TEAD) and function as the universal integrators of activation signals."
  },
  {
    id: 46,
    question: "The 'kinetic coupling' model of alternative splicing regulation explains which observation?",
    options: ["Pre-mRNA splicing kinetics determine whether introns are retained or spliced", "RNA Pol II elongation speed determines alternative exon inclusion: slow elongation near a weak exon allows time for spliceosome assembly before the competing downstream exon is synthesized; faster elongation results in exon skipping when the competing stronger splice site is reached before the upstream weak site is committed", "Alternative splicing rates are coupled to mRNA export kinetics", "Splicing of alternative exons is kinetically linked to translation initiation rates"],
    answer: 1,
    explanation: "Kinetic coupling model (Kornblihtt et al.): RNA Pol II elongation rate determines the 'window of opportunity' for splicing. For alternative exons with weak splice sites: slow polymerase gives more time for SR proteins to recognize the suboptimal site before the downstream competing strong acceptor is transcribed. Nucleosomes positioned over alternative exons slow Pol II (histone marks, DNA sequence), explaining why H3K36me3 and H3K27me3 differ between constitutive and alternative exons. Chromatin thus regulates splicing indirectly through Pol II speed."
  },
  {
    id: 47,
    question: "What is the 'gene regulatory network' (GRN) approach to understanding cell identity?",
    options: ["A single master transcription factor determines all aspects of cell identity", "GRN analysis maps the complete set of transcription factor interactions (auto-regulation, mutual activation, mutual repression) that define and maintain a specific cell state — pioneered in sea urchin development to explain how lineage-specific TFs form stable circuits through feedback loops", "GRNs describe only signal transduction pathways from the cell surface to the nucleus", "Gene regulatory networks are only applicable to prokaryotic cells with simpler genomes"],
    answer: 1,
    explanation: "GRN (Eric Davidson): A GRN is the complete regulatory logic governing a cell's gene expression state — a map of all TF binding relationships, co-factor interactions, signaling inputs, and feedback loops. Key features: (1) Toggle switches (mutual repression between two TFs creates bistability); (2) Feedforward loops (coherent FFL for sustained activation, incoherent for pulse); (3) Autoregulation (self-reinforcing TF loops stabilize cell identity); (4) Cross-repression (progenitor TFs suppressed by differentiation TFs). GRN analysis has been most complete in sea urchin embryogenesis (Davidson) and C. elegans."
  },
  {
    id: 48,
    question: "How does the SRF (Serum Response Factor) activate immediate-early genes (c-Fos) in response to mitogenic signals?",
    options: ["SRF is directly phosphorylated by ERK upon serum addition, converting it from repressor to activator", "SRF binds the serum response element (SRE/CArG box) constitutively; upon serum/growth factor treatment, ROCK/MAL/MRTF (actin-regulated co-activators) translocate to the nucleus to activate SRF; ERK phosphorylates Elk-1 in the ternary complex with SRF to activate c-FOS transcription", "SRF is synthesized de novo within 1 minute of serum treatment", "SRF binds SRE only after serum-induced demethylation of the CpG in the SRE"],
    answer: 1,
    explanation: "SRF (MADS box TF) binds CArG box [CC(A/T)₆GG] at SREs of immediate-early genes (c-FOS, EGR1, ACTA1). Two activation modes: (1) MAPK pathway — Elk-1 (TCF) forms ternary complex with SRF at SRE; ERK phosphorylates Elk-1 T363/S384 → activates c-Fos within minutes; (2) Actin/Rho pathway — actin monomers sequester MKL1/2 (MRTF-A/B); serum/ROCK activates actin polymerization → free MKL1/2 → nuclear import → binds SRF → activates cytoskeletal genes (ACTA2, CNN1). Both pathways converge on SRF."
  },
  {
    id: 49,
    question: "The role of the Mediator complex in regulated transcription (as distinct from its basal function) involves:",
    options: ["Mediator serves only as a structural scaffold with no direct enzymatic function in regulated transcription", "Specific Mediator subunits serve as docking sites for activating transcription factors (e.g., MED25 for VP16/p53 ADs, MED12 for β-catenin, MED1 for nuclear receptors), transducing activator binding into conformational changes that stimulate PIC assembly and Pol II CTD phosphorylation by TFIIH", "Mediator directly acetylates histone H3K27 at enhancers upon activator binding", "Mediator replaces TFIID at tissue-specific promoters to provide specificity"],
    answer: 1,
    explanation: "Mediator (26-30 subunits, 4 modules: Head, Middle, Tail, Kinase): Tail module subunits are the docking surfaces for TF ADs — MED25 (VP16/p53/Egr1), MED15 (RXR/SMAD), MED12 (β-catenin), MED1 (nuclear receptors, especially via LXXLL motif). Activator binding to Tail induces conformational change in Head module that stimulates TFIIH CDK7 activity (CTD Ser5 phosphorylation), RNA Pol II release from the promoter, and Mediator repositioning. Mediator is the central co-activator bridging TFs to the transcription machinery."
  },
  {
    id: 50,
    question: "The concept of 'genome-wide regulatory potential' as measured by comparing open chromatin (ATAC-seq), active histone marks (H3K27ac ChIP-seq), and TF binding (ChIP-seq) together reveals:",
    options: ["That all three assays give identical information about gene regulatory status", "The regulatory landscape of a cell — identifying active enhancers (H3K27ac + ATAC-seq overlap), promoters (H3K4me3 + H3K27ac + ATAC-seq), poised enhancers (H3K4me1 + ATAC-seq, no H3K27ac), and TF occupancy — together defining which cis-regulatory elements are active in a specific cell state", "That ATAC-seq alone is sufficient to determine which genes are expressed", "Only information about constitutive gene expression, not regulated transcription"],
    answer: 1,
    explanation: "Integrating multi-omics: Active enhancers: H3K27ac + H3K4me1 + ATAC-seq signal + p300/Mediator ChIP-seq. Poised/primed enhancers: H3K4me1 + ATAC-seq, but H3K27ac absent (± H3K27me3). Active promoters: H3K4me3 + H3K27ac + ATAC-seq. Bivalent promoters: H3K4me3 + H3K27me3. This multi-dimensional view of the regulatory landscape (as performed in ENCODE, Roadmap Epigenomics, Blueprint, FANTOM5 projects) reveals cell-type-specific regulatory elements active in each differentiation state, disease condition, or developmental stage."
  }
];
