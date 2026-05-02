const questions = [
  {
    id: 1,
    question: "DNA methylation at CpG dinucleotides in mammals is established by which enzymes and maintained through DNA replication?",
    options: ["RNA Pol II establishes methylation de novo; RNA Pol I maintains it", "DNMT3A and DNMT3B establish de novo methylation (with DNMT3L as cofactor); DNMT1 (the maintenance methyltransferase) copies hemimethylated CpGs after DNA replication using UHRF1 to recognize hemimethylated sites and recruit DNMT1 to replication forks", "TET enzymes establish methylation; DNMT enzymes erase it", "Histone methyltransferases coordinate CpG methylation through chromatin looping"],
    answer: 1,
    explanation: "DNA methylation machinery: De novo methyltransferases DNMT3A and DNMT3B methylate previously unmethylated CpGs during embryonic development and differentiation (with DNMT3L as a non-catalytic cofactor stimulating DNMT3A/B activity). After DNA replication, daughter strands are initially unmethylated (hemimethylated CpG). UHRF1 (ubiquitin-like PHD and RING finger domain protein 1) recognizes hemimethylated CpGs and H3K9me2/me3, recruits DNMT1 to the replication fork → DNMT1 copies methylation pattern to new strand. This ensures faithful inheritance of methylation patterns."
  },
  {
    id: 2,
    question: "TET (ten-eleven translocation) enzymes are involved in DNA demethylation by:",
    options: ["Directly removing the methyl group from 5-methylcytosine (5mC)", "Iteratively oxidizing 5mC to 5-hydroxymethylcytosine (5hmC), then 5-formylcytosine (5fC), and 5-carboxylcytosine (5caC); 5fC and 5caC are recognized and removed by thymine DNA glycosylase (TDG) and base excision repair, restoring unmodified cytosine", "Recruiting histone deacetylases that indirectly cause passive demethylation", "Methylating the opposite strand to create hemimethylation, which is then passively lost through replication"],
    answer: 1,
    explanation: "Active DNA demethylation: TET1/TET2/TET3 (α-ketoglutarate and Fe²⁺-dependent dioxygenases) oxidize 5mC → 5hmC → 5fC → 5caC. TDG (thymine DNA glycosylase) excises 5fC and 5caC → AP site → BER replaces with unmodified cytosine. 5hmC is stable and also a distinct epigenetic mark (TET-enriched in brain, embryonic stem cells). Passive demethylation: if DNMT1 activity or UHRF1 fails to maintain methylation during replication, methylation is diluted over cell divisions. Reactivation of imprinted genes, developmental reprogramming use TET-mediated demethylation."
  },
  {
    id: 3,
    question: "CpG islands (CGIs) are found at the promoters of ~70% of human genes and are typically unmethylated in normal somatic cells. Aberrant CpG island methylation in cancer causes:",
    options: ["Activation of CGI-overlapping promoters leading to oncogene overexpression", "Silencing of tumor suppressor genes when their CGI promoters become hypermethylated, associated with transcriptional silencing by MBD proteins, HDAC recruitment, and H3K27me3 deposition", "CGI methylation in cancer is a neutral passenger event with no functional consequence", "Demethylation of repeat elements only; CGIs are never methylated in cancer"],
    answer: 1,
    explanation: "CpG island hypermethylation in cancer: tumor suppressor promoter CGIs become methylated in cancer cells → gene silencing. Examples: MLH1 (MMR, silenced in ~15% sporadic CRC), CDKN2A/p16 (cell cycle control, methylated in many cancers), BRCA1 (DNA repair, methylated in ~10% sporadic breast cancer), VHL (kidney cancer), CDH1 (E-cadherin, invasiveness). Mechanism: methylated CGIs recruit MBD (methyl-CpG binding domain) proteins (MeCP2, MBD1-4), which recruit HDACs and chromatin remodelers → histone deacetylation → compact chromatin → gene silencing. Can be reversed by DNMT inhibitors (5-azacytidine)."
  },
  {
    id: 4,
    question: "Histone H3 lysine 27 trimethylation (H3K27me3) is deposited by which complex and has what functional significance?",
    options: ["COMPASS/MLL complex deposits H3K27me3 to activate gene expression", "Polycomb Repressive Complex 2 (PRC2, containing EZH2/EZH1, EED, SUZ12, RbAp48) deposits H3K27me3 to silence target genes; PRC1 recognizes H3K27me3 via CBX proteins and compacts chromatin further, maintaining Polycomb target gene silencing", "HAT complexes deposit H3K27me3 as a transcriptional activating mark", "H3K27me3 is deposited by PRMT enzymes and marks constitutive heterochromatin at centromeres"],
    answer: 1,
    explanation: "Polycomb repression: PRC2 (EZH2/EZH1 as catalytic SET domain, EED binds and stimulates activity, SUZ12 scaffolding) deposits H3K27me3. PRC1 has two subtypes: canonical cPRC1 (CBX proteins bind H3K27me3 and recruit RING1A/B E3 ubiquitin ligases → H2AK119ub1 → chromatin compaction); non-canonical ncPRC1 (RING1A/B + RYBP/YAF2 → H2AK119ub1 without H3K27me3 recognition). Polycomb targets include developmental transcription factors (HOX genes, lineage specifiers). PRC2 mutations (EZH2 gain-of-function Y641) drive diffuse large B-cell lymphoma."
  },
  {
    id: 5,
    question: "H3K4 methylation in eukaryotes is associated with transcriptional activation. The distinction between H3K4me1, me2, and me3 is:",
    options: ["H3K4me1 and me2 are active promoter marks; H3K4me3 marks enhancers", "H3K4me3 marks active promoters (near TSS); H3K4me1 marks active and poised enhancers; H3K4me2 is intermediate; H3K4me3 is specifically catalyzed by COMPASS complexes (SET1A/B, MLL1-4)", "All three methylation states have identical genome-wide distributions", "H3K4 methylation is repressive in mammals but active in Drosophila"],
    answer: 1,
    explanation: "H3K4 methylation landscape: H3K4me3 — sharp peaks at active promoters (TSSs); catalyzed by Set1/COMPASS complex (SET1A, SET1B, MLL1/KMT2A, MLL2/KMT2B, MLL3/KMT2C, MLL4/KMT2D in humans). H3K4me1 — broad domains at active/poised enhancers; catalyzed mainly by MLL3/MLL4. H3K4me2 — broader than H3K4me3, present at active promoters and gene bodies. Active promoters: H3K4me3 + H3K27ac. Poised enhancers: H3K4me1 + H3K27me3 (bivalent domain equivalent at enhancers). Active enhancers: H3K4me1 + H3K27ac. This combinatorial histone code distinguishes regulatory element states."
  },
  {
    id: 6,
    question: "The 'epigenetic clock' developed by Steve Horvath is based on:",
    options: ["Telomere length measurements that decrease with aging", "A multi-tissue DNA methylation clock using ~353 CpG sites (Horvath clock) or ~513 CpGs (PhenoAge) that predicts chronological age from DNA methylation patterns; accelerated epigenetic aging (DNAmAge > chronological age) correlates with disease risk and mortality", "Histone modification changes that linearly accumulate with age", "RNA expression changes in age-associated genes like CDKN2A"],
    answer: 1,
    explanation: "Horvath's epigenetic clock (2013): elastic net regression using 353 CpG sites from Illumina 450K/EPIC array methylation data predicts chronological age across multiple tissues with ~3.6 year mean absolute error. 'DNAm age' or 'epigenetic age' correlates with biological aging rate. Epigenetic age acceleration (DNAmAge >> chronological age) predicts mortality, cancer risk, cognitive decline. Newer clocks: GrimAge (predicts time-to-death using DNAm-based proxies of biological traits), PhenoAge (physiological aging). Epigenetic rejuvenation: partial reprogramming with Yamanaka factors reverses epigenetic clocks in mice."
  },
  {
    id: 7,
    question: "Chromatin remodeling complexes alter nucleosome positions using which energy source?",
    options: ["GTP hydrolysis by GTPase ATPases specialized for chromatin", "ATP hydrolysis — all major chromatin remodeling complexes (SWI/SNF/BAF, ISWI, CHD, INO80 families) use ATP hydrolysis to disrupt histone-DNA contacts and slide, eject, or restructure nucleosomes", "Proton gradient across the nuclear envelope", "Acetyl-CoA hydrolysis coupling HAT activity to nucleosome sliding"],
    answer: 1,
    explanation: "Chromatin remodeling ATPases use ATP hydrolysis to generate force that disrupts histone-DNA contacts: (1) SWI/SNF/BAF family (SMARCA4/BRG1, SMARCA2/BRM) — nucleosome ejection/sliding; tumor suppressor function (SMARCB1/SNF5 is the most frequently mutated SWI/SNF subunit in cancer — rhabdoid tumors); (2) ISWI family (NURF, CHRAC, ACF) — nucleosome spacing and assembly; (3) CHD family (CHD1-9, Mi-2/NuRD) — nucleosome sliding + HDAC activity in NuRD; (4) INO80/SWR1 — H2A.Z histone variant exchange at +1 nucleosome. ~20% of cancers have SWI/SNF subunit mutations."
  },
  {
    id: 8,
    question: "H3K9 methylation (H3K9me2/me3) marks constitutive heterochromatin and is important for:",
    options: ["Activating transcription at repeat-rich centromeric regions", "Maintaining silencing of constitutive heterochromatin (centromeric satellites, transposable elements) by recruiting HP1 (heterochromatin protein 1) proteins via their chromodomain; spread of H3K9me3 domain is self-reinforcing through HP1-SUV39H1/2 interaction", "Initiating DNA replication at heterochromatic origins", "Marking active enhancers in rapidly dividing cells"],
    answer: 1,
    explanation: "H3K9me2/me3 marks: SUV39H1/SUV39H2 (KMT1A/1B) — H3K9me3 at constitutive heterochromatin (centromeres, telomeres, LINE/SINE repeats); G9a/GLP (EHMT2/EHMT1) — H3K9me2 at euchromatic gene silencing. HP1α/β/γ (CBX5/1/3) bind H3K9me3 via chromodomain → spreads by recruiting SUV39H → heterochromatin propagation. Functions: TE silencing (prevents transposon mobilization), centromere identity maintenance (co-operates with CENP-A), chromosome segregation. Loss of H3K9me3 → transposon derepression → genomic instability (major in cancer). RNAi pathway establishes H3K9me3 at centromeric repeats in fission yeast."
  },
  {
    id: 9,
    question: "Histone acetylation by HATs (histone acetyltransferases) activates transcription primarily by:",
    options: ["Directly activating RNA Pol II by chemical modification of its CTD", "Neutralizing the positive charge of lysine residues → loosening electrostatic interaction between histones and negatively charged DNA (open chromatin), AND creating binding surfaces (acetyl-lysine) for bromodomain-containing reader proteins (e.g., BRD4) that recruit coactivators and Pol II", "Methylating adjacent histones through coupled reactions", "Inserting histone variant H2A.Z at active promoters"],
    answer: 1,
    explanation: "Histone acetylation mechanisms: (1) Chromatin decondensation — acetylation of H3K9, H3K14, H3K27, H4K5/K8/K12/K16 neutralizes positive charge → reduces H3/H4 N-tail affinity for DNA/adjacent nucleosomes → more accessible chromatin; (2) Bromodomain readers — acetyl-lysine creates a specific binding pocket recognized by bromodomains in coactivators: BRD4 (binds H4K5ac/K8ac/K12ac) → recruits P-TEFb → Pol II release from pausing; (3) HAT complexes include GCN5 (in SAGA), CBP/p300 (p300 acetylates H3K27 at enhancers), MOF (H4K16ac). BET inhibitors (JQ1, iBET) block BRD4 bromodomain → anti-cancer."
  },
  {
    id: 10,
    question: "The 'histone code hypothesis' (Strahl and Allis, 2000) proposes that:",
    options: ["Histones encode genetic information independently of DNA sequence", "Combinatorial patterns of covalent histone modifications ('marks') constitute a code that is read by specific effector proteins ('readers') to determine chromatin state and gene expression; different combinations of marks on the same or adjacent histones create distinct functional states", "Histone modifications are non-specific and interchangeable in their biological functions", "The genetic code is duplicated in histone post-translational modification patterns"],
    answer: 1,
    explanation: "Histone code: specific combinations of modifications create distinct chromatin states: (1) Active transcription: H3K4me3 + H3K27ac + H3K36me3 + H3K9ac; (2) Poised/bivalent: H3K4me3 + H3K27me3 (ES cells at developmental genes); (3) Active enhancer: H3K4me1 + H3K27ac; (4) Constitutive heterochromatin: H3K9me3 + H4K20me3; (5) Repressed: H3K27me3 + H2AK119ub1. 'Writers' add marks (DNMT, HMT, HAT); 'erasers' remove marks (TET, KDM, HDAC); 'readers' interpret marks (bromodomain, chromodomain, PHD finger, PWWP). Crosstalk: H3K9me3 blocks H3K9ac; H3K4me3 recruits NuRD but also SET1 complexes; ubiquitination of H2B stimulates H3K4me3."
  },
  {
    id: 11,
    question: "Topologically associating domains (TADs) are fundamental units of 3D genome organization. Enhancer-promoter interactions within TADs are mediated by:",
    options: ["Random DNA diffusion bringing distant enhancers into contact with promoters", "Cohesion complex (SMC1-SMC3-RAD21-SA1/2) loops extruding chromatin (loop extrusion model) until stopped by CTCF bound at convergent sites; this creates TAD boundaries and accumulates enhancer-promoter pairs within a TAD for productive interactions", "Nuclear pore complexes anchoring genes to the nuclear periphery for transcription", "Polycomb bodies forming liquid condensates that sequester target genes"],
    answer: 1,
    explanation: "TADs (~100 kb to several Mb) are self-interacting chromatin domains with boundaries marked by convergent CTCF binding sites. Loop extrusion model: cohesin SMC complex extrudes chromatin loops bidirectionally until stopped at CTCF boundary elements (requires convergent CTCF orientation for proper boundary function). Within TADs, enhancers and target promoters are brought into proximity. TAD disruption (CTCF boundary deletion) → ectopic enhancer-promoter contacts → developmental abnormalities or oncogene activation (enhancer hijacking). Hi-C and ChIA-PET map TADs. WAPL releases cohesin; NIPBL (Cornelia de Lange syndrome gene) loads cohesin."
  },
  {
    id: 12,
    question: "Imprinting control regions (ICRs) maintain parent-of-origin-specific methylation through multiple generations of cell division. The mechanism of ICR maintenance involves:",
    options: ["Sequence-specific DNA-binding proteins that block DNMT3A access to one allele throughout life", "Allele-specific methylation established in the germline (paternal ICRs set during spermatogenesis, maternal ICRs during oogenesis), maintained through development by DNMT1/UHRF1 despite genome-wide demethylation, protected by zinc finger protein ZFP57 binding to methylated ICR sequences", "H3K27me3-dependent ICR methylation imposed by PRC2 in a parent-specific manner", "Active demethylation of one allele by TET enzymes after fertilization"],
    answer: 1,
    explanation: "Germline imprinting establishment: maternal ICRs (e.g., KvDMR1 for KCNQ1 region, H19/Igf2 ICR) — methylated in oocyte. Paternal ICRs (e.g., IG-DMR for DLK1/MEG3) — methylated in sperm. After fertilization, genome-wide demethylation occurs but ICRs are protected by ZFP57 (recognizes TGCCGC methylated motif) + KAP1/TRIM28 → recruits DNMT1 via UHRF1 to maintain methylation. In embryos, ICRs are maintained allele-specifically throughout development. Errors in ICR maintenance → imprinting disorders (Silver-Russell, Beckwith-Wiedemann, Prader-Willi, Angelman)."
  },
  {
    id: 13,
    question: "The SWI/SNF (BAF) chromatin remodeling complex is frequently mutated in human cancers (~20% of all cancers). SMARCB1 (SNF5/INI1) inactivation causes which rare aggressive cancer?",
    options: ["Malignant rhabdoid tumor (MRT) in infants and pediatric epithelioid sarcoma — often biallelic SMARCB1 loss with no other recurrent mutations ('near-silent genome')", "Medulloblastoma through Hedgehog pathway dysregulation", "Burkitt lymphoma through MYC translocation", "Clear cell renal cell carcinoma through VHL inactivation"],
    answer: 0,
    explanation: "SMARCB1 (INI1/SNF5/BAF47) is a core SWI/SNF subunit and tumor suppressor. Biallelic inactivation causes malignant rhabdoid tumors (MRT): kidney (KARTS/RTK), brain (AT/RT — atypical teratoid/rhabdoid tumor), and soft tissue (ESRT/epithelioid sarcoma). MRT karyotypes are near-normal with loss of SMARCB1 as essentially the only driver — demonstrating how loss of a single chromatin regulator is sufficient for malignant transformation. SMARCB1 normally antagonizes MYC/MYCN and activates p21/CDKN1A. EZH2 inhibitors (tazemetostat) show activity in SMARCB1-deficient tumors by rebalancing PRC2/SWI/SNF equilibrium."
  },
  {
    id: 14,
    question: "Transgenerational epigenetic inheritance in mammals refers to:",
    options: ["Normal Mendelian inheritance of epigenetically regulated genes", "Transmission of epigenetic information (methylation, histone modifications, ncRNA) beyond the parental generation to F2 and beyond, despite epigenetic reprogramming during gametogenesis and early embryogenesis — controversial in mammals but well-established in plants and C. elegans", "Inheritance of epigenetic marks via somatic cell division only, not through germline", "DNA methylation changes that accumulate over generations due to chronic environmental exposure"],
    answer: 1,
    explanation: "Transgenerational epigenetic inheritance (TGEI): evidence that environmental exposures (diet, stress, toxicants) can affect F2/F3 generations via epigenetic mechanisms despite two rounds of epigenetic reprogramming: (1) After fertilization: genome-wide demethylation (except ICRs); (2) In primordial germ cells: second demethylation wave. Animal models: Avy mouse (maternal diet affects coat color of F2 via IGF methylation); endocrine disruptors (vinclozolin) in rats affect F3 sperm DNA methylation; chronic stress paradigms in mice. Mechanisms proposed: surviving ICR-like methylation, sperm small RNA cargo (piRNAs, miRNAs), histone retention. Controversial in humans — few well-controlled studies."
  },
  {
    id: 15,
    question: "Heterochromatin protein 1 (HP1, CBX5/HP1α) contributes to gene silencing and heterochromatin maintenance through which mechanism?",
    options: ["HP1 is a HDAC that directly deacetylates histones to create compact chromatin", "HP1 chromodomain binds H3K9me2/me3; HP1 CSD (chromoshadow domain) dimerizes and recruits SUV39H methyltransferase (H3K9me3 writer) — creating a self-reinforcing loop that spreads heterochromatin; HP1 also recruits DNMT3A/B and DNMT3L for DNA methylation at silenced regions", "HP1 binds DNA sequences directly at repetitive elements to block transcription", "HP1 acts as a bridge between H3K27me3 and the PRC1 complex"],
    answer: 1,
    explanation: "HP1 (Drosophila Su(var)205; humans CBX5/HP1α, CBX1/HP1β, CBX3/HP1γ): chromodomain reads H3K9me2/me3. CSD (chromoshadow domain) homo/heterodimerizes and recruits: (1) SUV39H1/H2 → spreads H3K9me3 to adjacent nucleosomes → positive feedback loop for heterochromatin spreading; (2) DNMT3A/DNMT3L → de novo DNA methylation coupling to H3K9me3; (3) RNA Pol II CTD-interacting factors → gene silencing. HP1 phase separation: HP1α undergoes LLPS on H3K9me3-nucleosomal arrays → explains how heterochromatin forms as distinct compartments. HP1-Clr4/Suv39h positive feedback = epigenetic memory mechanism."
  },
  {
    id: 16,
    question: "The term 'bivalent chromatin domain' in embryonic stem cells refers to genes marked with:",
    options: ["Both H3K4me3 (active) and H3K27me3 (repressive) marks simultaneously, keeping developmental genes in a 'poised' state — silenced but ready for rapid activation or further repression upon lineage commitment", "Both H3K9me3 and H3K27me3 — double repression marks at constitutive heterochromatin", "H3K4me3 and H3K36me3 — marks of active transcription and elongation", "H3K27ac and H3K4me1 — the active enhancer signature"],
    answer: 0,
    explanation: "Bivalent domains (Bernstein et al., Cell 2006): In embryonic stem cells (ESCs), developmental transcription factor genes (HOX genes, lineage specifiers) carry simultaneous H3K4me3 (by COMPASS/MLL complexes — active mark) and H3K27me3 (by PRC2/EZH2 — repressive mark). These genes are expressed at very low levels (poised/primed). Upon differentiation: one mark is resolved → H3K4me3 maintained + H3K27me3 removed = activation; OR H3K27me3 maintained + H3K4me3 removed = stable silencing. Bivalent domains may also exist at super-enhancers in cancer (bivalent super-enhancers for oncogenic transcription factors)."
  },
  {
    id: 17,
    question: "5-azacytidine (azacitidine, Vidaza) and 5-aza-2'-deoxycytidine (decitabine) are DNMT inhibitors used in cancer therapy. Their mechanism is:",
    options: ["Direct inhibition of DNMT catalytic activity in solution (non-covalent inhibition)", "Incorporation into DNA as cytosine analogs during replication; when DNMT attempts to copy methylation onto the analog-containing strand, the enzyme forms an irreversible covalent bond with the analog and is trapped/degraded (mechanism-based/suicide inhibition), resulting in DNMT depletion and passive demethylation over cell divisions", "Activating TET enzymes to oxidize 5mC genome-wide", "Blocking UHRF1 from recruiting DNMT1 to hemimethylated sites"],
    answer: 1,
    explanation: "DNMT inhibitors (hypomethylating agents): 5-azacytidine and 5-aza-2'-deoxycytidine (decitabine) are nucleoside analogs where N5 replaces C5. After phosphorylation and incorporation into DNA, DNMT attacks the C6 position of the analog → forms covalent intermediate → cannot complete the reaction → DNMT is trapped in covalent complex with DNA → DNMT is degraded by proteasome. Resulting DNMT depletion → passive demethylation over successive replications → reactivation of silenced tumor suppressors. FDA-approved for MDS (myelodysplastic syndrome), AML. Response correlates with DNMT3A/TET2/IDH1/IDH2 mutations."
  },
  {
    id: 18,
    question: "EZH2 gain-of-function mutations (Y641, A677, A687) in germinal center B-cell lymphomas cause:",
    options: ["Loss of PRC2 function and global H3K27me3 reduction", "Enhanced H3K27 trimethylation activity (these mutations alter substrate specificity, with WT EZH2 preferring H3K27me1/me2→me2/me3 conversion, but mutant EZH2 preferring H3K27me2→me3 conversion, with WT and mutant cooperating to maximize H3K27me3)", "Activation of pro-apoptotic genes silenced by H3K27me3", "Redistribution of H3K27me3 from silent genes to active promoters"],
    answer: 1,
    explanation: "EZH2 Y641F/N/S/C/H mutations occur in ~22% of germinal center DLBCL and ~7% of follicular lymphoma. WT EZH2 efficiently converts H3K27me0→me1→me2 but poorly converts me2→me3. Mutant EZH2 Y641 has reversed specificity: efficiently converts H3K27me2→me3. In heterozygous tumors, WT allele converts me0→me2 and mutant allele converts me2→me3 → synergistic increase in H3K27me3 → silencing of tumor suppressors including CDKN2A (p16/p14ARF) and other proliferation inhibitors. Tazemetostat (EZH2 inhibitor) FDA-approved for relapsed/refractory follicular lymphoma with EZH2 mutations."
  },
  {
    id: 19,
    question: "Genome-wide ATAC-seq profiles in cancer identify 'accessible chromatin' at regulatory elements. Loss of chromatin accessibility at tumor suppressor enhancers in cancer occurs through:",
    options: ["Sequence mutation of the enhancer DNA", "Epigenetic mechanisms including PRC2-mediated H3K27me3 spreading to enhancers (enhancer switching), DNA hypermethylation of enhancer CpGs, loss of pioneer TF binding, and chromatin remodeling complex inactivation (SWI/SNF mutations)", "Physical deletion of enhancer sequences in every cancer cell", "Repositioning of nucleosomes via cell division without epigenetic maintenance"],
    answer: 1,
    explanation: "Enhancer decommissioning in cancer: (1) DNA methylation at enhancer CpGs blocks TF binding and closes chromatin; (2) H3K27me3 spreading from nearby Polycomb targets inactivates adjacent enhancers; (3) Loss of pioneer TF expression removes chromatin opening activity; (4) SWI/SNF mutations impair nucleosome remodeling → closed chromatin at normally accessible enhancers; (5) Loss of active mark H3K27ac by KAT6A/CBP/p300 inactivation. Conversely, cancer can gain new 'super-enhancers' at oncogenes (e.g., MYC, MYCN). ATAC-seq-based enhancer profiling can distinguish cancer subtypes and identify epigenetic vulnerabilities."
  },
  {
    id: 20,
    question: "R-loops (RNA-DNA hybrids) form during transcription and have which dual roles in epigenetics and genome stability?",
    options: ["R-loops are exclusively pathological structures that always cause DNA damage", "R-loops at CpG island promoters can prevent de novo DNA methylation and maintain gene activity; excessive R-loops at gene bodies cause transcription-replication conflicts and DNA double-strand breaks; cells have evolved RNase H1 and Senataxin helicase to resolve R-loops and prevent genome instability", "R-loops only form in bacteria and are not relevant to mammalian epigenetics", "R-loops are identical in function to RNA secondary structures like G-quadruplexes"],
    answer: 1,
    explanation: "R-loops: three-stranded structures with RNA hybridized to template DNA and displaced non-template ssDNA. Physiological roles: (1) Prevent DNMT-mediated methylation at CpG island promoters (RNA-DNA hybrid blocks DNMT access — maintaining promoter hypomethylation); (2) Class switch recombination in B cells (R-loops at switch regions promote AID access). Pathological roles: (1) Transcription-replication collision causes DSBs; (2) Depletion of RNase H1 or Senataxin (helicase) → R-loop accumulation → genome instability, activation of DDR, chromosome fragility. Elevated R-loops in BRCA1/BRCA2 mutant cells link HR repair to R-loop resolution."
  },
  {
    id: 21,
    question: "Polycomb repressive complexes in cancer are dysregulated in two major ways. Which statement correctly describes both gain-of-function and loss-of-function Polycomb alterations?",
    options: ["Polycomb complexes are only inactivated in cancer, never overactivated", "EZH2 gain-of-function mutations/overexpression drive lymphomas and other cancers by hypermethylating H3K27me3 at tumor suppressor loci; conversely, EZH2/EED/SUZ12 loss-of-function mutations occur in T-cell lymphomas, MDS, and MPNs, where loss of PRC2-mediated repression derepresses oncogenic programs", "All cancers with EZH2 mutations respond to EZH2 inhibitors", "Polycomb mutations are exclusively germline and not somatic in cancer"],
    answer: 1,
    explanation: "Polycomb in cancer: (1) PRC2 gain-of-function (GOF): EZH2 Y641/A677/A687 mutations in DLBCL/follicular lymphoma → excess H3K27me3 → silencing of TSGs; EZH2 overexpression in prostate, breast, colorectal cancers (correlates with poor prognosis); (2) PRC2 loss-of-function (LOF): EZH2 inactivating mutations in ~10% T-ALL, MDS; EED/SUZ12 deletions in MPNs, mesothelioma. Paradox: GOF EZH2 inhibited by tazemetostat; LOF EZH2 tumors may be sensitive to SWI/SNF inhibition or BRD4 inhibition. Non-canonical PRC1 (RING1B overexpression) occurs independently of EZH2 in some cancers."
  },
  {
    id: 22,
    question: "Long interspersed nuclear elements (LINEs/L1 elements) constitute ~17% of the human genome. Their epigenetic silencing is important because:",
    options: ["L1 elements are actively transcribed and beneficial to cell function", "Unsilenced L1 elements retrotranspose (copy and paste mechanism: L1 ORF2p reverse transcribes its own RNA into DNA and integrates at new genomic sites) causing insertional mutagenesis, genome instability, and inflammatory signaling (cGAS-STING activation by cytoplasmic LINE RNA/DNA)", "LINE elements only affect chromatin structure without transposing", "L1 elements are only active in male germline and have no somatic cell relevance"],
    answer: 1,
    explanation: "LINE-1 (L1) retrotransposition: ~100 potentially active copies in the human genome (RC-L1s). Mechanism: (1) L1 RNA transcribed; (2) ORF1p (RNA binding, chaperone) and ORF2p (endonuclease + reverse transcriptase) translated; (3) TPRT (target-primed reverse transcription) at new genomic location. Silenced by: (1) DNA methylation (global hypomethylation in cancer → L1 activation); (2) H3K9me3/HP1; (3) PIWI/piRNA pathway in germline; (4) ADAR (A-to-I editing of L1 RNA). Aged cells with global hypomethylation → L1 transposition → somatic mosaicism. L1 insertions cause inherited diseases (hemophilia A, colon cancer) and drive cancer genome evolution."
  },
  {
    id: 23,
    question: "Chromatin looping between enhancers and promoters is facilitated by which architectural proteins beyond cohesin and CTCF?",
    options: ["Only CTCF and cohesin are required for all enhancer-promoter interactions", "YY1 (Yin Yang 1) at both enhancers and promoters; BRD4 at super-enhancers facilitating phase separation condensates with Mediator; Mediator complex bridges activator-bound enhancers to promoter-associated RNA Pol II; and specific TF-TF interactions (e.g., p53, RELA homodimerization) at short-range loops", "Nucleosomes at linker DNA mediate all enhancer-promoter communication", "H3K27ac marks cause physical contact between enhancers and promoters without protein intermediaries"],
    answer: 1,
    explanation: "Enhancer-promoter (E-P) looping mechanisms beyond CTCF/cohesin: (1) YY1 — constitutive insulator-independent E-P loops; (2) Mediator complex — bridges TF-bound enhancers to promoter-associated Pol II; required for transcription initiation; (3) BRD4 — phase-separation condensates at super-enhancers (SEs) with Mediator coactivators; (4) LDB1/CTCF complexes at gene clusters; (5) Some E-P contacts are CTCF-independent and driven by specific TF interactions at both elements. Recent controversy: acute cohesin/CTCF depletion reduces TADs but E-P contacts are partially maintained — suggesting parallel mechanisms for E-P communication."
  },
  {
    id: 24,
    question: "The IDH1/IDH2 mutations found in gliomas and AML cause epigenetic reprogramming because:",
    options: ["IDH1/2 normally converts α-ketoglutarate to isocitrate; mutations reverse this and produce 2-hydroxyglutarate (2-HG), a TET enzyme inhibitor", "Mutant IDH1/2 produce 2-hydroxyglutarate (2-HG), an oncometabolite that competitively inhibits α-ketoglutarate-dependent dioxygenases including TET1/2 (causing DNA hypermethylation) and KDM histone demethylases (causing H3K9me3/H3K27me3 accumulation) → CpG island methylator phenotype (CIMP) and aberrant Polycomb marking", "IDH mutations cause loss of NADPH production, impairing oxidative defense against DNA damage", "IDH mutations activate mTORC1, indirectly causing epigenetic reprogramming through kinase cascades"],
    answer: 1,
    explanation: "IDH1 (R132) and IDH2 (R140, R172) gain-of-function mutations: normal IDH converts isocitrate → α-ketoglutarate (αKG) + NADPH. Mutant IDH converts αKG → 2-hydroxyglutarate (2-HG), the oncometabolite (up to 100mM in tumors). 2-HG competitively inhibits αKG-dependent dioxygenases: TET1/2/3 → impaired 5mC oxidation → global hypermethylation (CIMP-high); KDM histone demethylases → H3K9me3 and H3K27me3 accumulation; prolyl hydroxylases. Net result: epigenetic reprogramming blocking differentiation → gliomagenesis/leukemogenesis. Enasidenib (IDH2), ivosidenib (IDH1) inhibitors approved for AML."
  },
  {
    id: 25,
    question: "The role of ncRNA HOTAIR (HOX antisense intergenic RNA) in cancer epigenetics involves:",
    options: ["HOTAIR blocks DNMT3A from methylating HoxD gene promoters", "HOTAIR lncRNA acts as a scaffold to recruit PRC2 (H3K27me3) and LSD1 (H3K4me2 demethylase) complexes to coordinate transcriptional repression; overexpression in breast cancer metastasis reprograms the cancer epigenome promoting invasiveness", "HOTAIR is a miRNA that silences BRCA1 post-transcriptionally", "HOTAIR encodes a truncated HoxA protein that dominant-negatively inhibits Hox function"],
    answer: 1,
    explanation: "HOTAIR (HOX antisense intergenic RNA) is a ~2.2 kb lncRNA transcribed from the HOXC locus that acts in trans on the HOXD locus and genome-wide. It functions as a molecular scaffold: 5' domain recruits PRC2 (H3K27me3 deposition → silencing); 3' domain recruits LSD1/CoREST complex (H3K4me2 demethylation → removes activating mark). HOTAIR overexpression in breast cancer (Gupta et al., 2010) reprograms the cancer epigenome toward more invasive states by silencing metastasis suppressor genes. HOTAIR levels predict poor prognosis in breast, colorectal, and gastrointestinal cancers."
  },
  {
    id: 26,
    question: "Chromatin A/B compartment organization detected by Hi-C reflects which functional distinction?",
    options: ["A compartments = areas of high DNA GC content; B compartments = AT-rich regions with no functional significance", "A compartments (active) = gene-rich, transcriptionally active, open chromatin (euchromatin) regions enriched for H3K27ac/H3K4me3 at nuclear interior; B compartments (inactive) = gene-poor, transcriptionally silent, H3K27me3/H3K9me3-enriched heterochromatin regions often at nuclear periphery", "A compartments = centromeric chromatin; B compartments = telomeric chromatin", "Compartments reflect DNA replication timing with no relationship to transcription"],
    answer: 1,
    explanation: "Hi-C reveals genome-wide chromosome organization: (1) A compartments — gene-rich, transcriptionally active, early-replicating, H3K27ac/H3K4me3-rich, positioned in nuclear interior, interact preferentially with other A compartments; (2) B compartments — gene-poor, transcriptionally inactive, late-replicating, H3K27me3/H3K9me3-rich, near nuclear periphery or nucleolus-associated domains, interact with other B compartments. A-B compartment boundaries represent transitions in chromatin state. Compartments are conserved across mammalian cell types but switch during differentiation (B→A activation or A→B silencing). Cancer shows widespread B→A and A→B compartment switching."
  },
  {
    id: 27,
    question: "DNA methylation reader proteins (MBD proteins) include MeCP2, whose mutations cause which neurological disorder?",
    options: ["Fragile X syndrome", "Rett syndrome — X-linked dominant condition affecting girls primarily; MeCP2 mutations cause profound neurodevelopmental regression after normal initial development, with autism features, stereotypic hand movements, seizures, and respiratory irregularities", "Angelman syndrome", "CHARGE syndrome"],
    answer: 1,
    explanation: "MeCP2 (methyl-CpG binding protein 2, MECP2 gene on Xq28): MBD domain binds methylated CpG dinucleotides; TRD (transcriptional repression domain) recruits HDAC/NCoR complex. MECP2 mutations (gain-of-function duplication OR loss-of-function mutations): (1) MECP2 mutations → Rett syndrome (RTT) — X-linked dominant, affects females predominantly (hemizygous males die perinatally); 50% X-inactivation in carrier females means ~50% neurons express mutant MECP2 → progressive neurodevelopmental disorder from age ~6-18 months. (2) MECP2 duplication → X-linked intellectual disability in males. MeCP2 dysfunction impairs neuronal gene regulation, particularly affecting BDNF, CREB, MEF2C expression."
  },
  {
    id: 28,
    question: "Enhancer RNA (eRNA) is produced from active enhancers and differs from mRNA in that:",
    options: ["eRNAs are translated into enhancer-regulatory proteins", "eRNAs are generally short (~0.5-2 kb), bidirectionally transcribed from active enhancers, unstable (rapidly degraded), lack polyadenylation, and may function in stabilizing enhancer-promoter loops or releasing paused RNA Pol II at target gene promoters", "eRNAs are microRNA precursors produced at super-enhancers", "eRNAs are exclusively nuclear and have no cytoplasmic functions"],
    answer: 1,
    explanation: "Enhancer RNAs (eRNAs): transcribed by RNA Pol II from active enhancers (marked by H3K4me1 + H3K27ac). Characteristics: (1) Bidirectional transcription from enhancer center; (2) Short (0.5-2 kb); (3) Unstable — rapidly degraded by exosome/XRN2; (4) Usually non-polyadenylated (though some longer eRNAs are polyadenylated); (5) Correlate with enhancer activity (H3K27ac, CBP/p300, Pol II). Proposed functions: stabilizing E-P looping via CTCF/cohesin; releasing paused Pol II at target promoters (by releasing NELF); titrating PRC2 from target loci; facilitating Mediator-dependent activation. eRNA production is a useful marker of active enhancers."
  },
  {
    id: 29,
    question: "HDAC inhibitors (vorinostat/SAHA, romidepsin, panobinostat) approved for cancer treatment work by:",
    options: ["Directly activating HAT enzymes to add acetyl groups to histones", "Inhibiting histone deacetylases (HDACs) that normally remove acetyl groups from histones → accumulation of hyperacetylated histones → derepression of silenced genes including apoptosis genes, cell cycle inhibitors, and tumor suppressors; also affect non-histone protein acetylation (HSP90, p53, tubulin)", "Blocking bromodomain proteins from reading acetylated histones", "Methylating HDAC promoters to silence HDAC expression epigenetically"],
    answer: 1,
    explanation: "HDAC inhibitors (HDACi): zinc-chelating hydroxamic acids (vorinostat/SAHA — pan-HDAC), cyclic peptides (romidepsin — class I selective), hydroxamates (panobinostat — pan-HDAC). Mechanism: block HDAC active site → histone hyperacetylation → chromatin relaxation → gene derepression → apoptosis, cell cycle arrest, differentiation. Non-histone targets: acetylation of HSP90 (protein misfolding), p53 (activation), tubulin (apoptosis). Approved for: CTCL (vorinostat, romidepsin), PTCL (romidepsin, belinostat), multiple myeloma (panobinostat + bortezomib + dexamethasone). Efficacy in solid tumors limited — lymphomas are most responsive."
  },
  {
    id: 30,
    question: "Nuclear lamins (LMNA/B1/B2) are important for epigenetic regulation because they:",
    options: ["Directly catalyze DNA methylation at nuclear peripheral genes", "Organize chromatin at the nuclear periphery (lamina-associated domains/LADs); heterochromatic, transcriptionally silent B compartment genes contact the lamina; disruption of lamin function causes LAD detachment → gene derepression or silencing changes; laminopathies (LMNA mutations) alter chromatin architecture", "Serve as chromatin remodeling ATPases in the nuclear envelope", "Encode histone H3 variants that replace canonical H3 at gene-poor regions"],
    answer: 1,
    explanation: "Nuclear lamina (lamins A, B1, B2): Type V intermediate filaments lining the inner nuclear membrane. Lamina-associated domains (LADs): ~30-40% of genome contacts the lamina; LADs are gene-poor, H3K9me2-rich, transcriptionally silent B compartment chromatin. cLADs (constitutive) — invariably lamina-associated across cell types; fLADs (facultative) — cell-type-specific LAD-non-LAD transitions during differentiation. Progeria (HGPS, LMNA G608G) — aberrant splicing produces Progerin → cannot be processed by ZMPSTE24 → altered LADs → misregulated gene expression → accelerated aging. Lamins also regulate HDAC2 recruitment, heterochromatin tethering, and DNA replication."
  },
  {
    id: 31,
    question: "Bisulfite sequencing is the gold standard for DNA methylation analysis. The principle is:",
    options: ["Bisulfite converts all cytosines to uracil equally", "Sodium bisulfite selectively deaminates unmethylated cytosine (C) → uracil (U, reads as T); 5-methylcytosine (5mC) is resistant to bisulfite deamination (remains C); after PCR and sequencing, C = methylated original C; T = unmethylated original C", "Bisulfite cleaves the phosphodiester backbone at methylated CpGs for size analysis", "Bisulfite immunoprecipitates methylated DNA for enrichment before sequencing"],
    answer: 1,
    explanation: "Bisulfite conversion: sodium bisulfite (HSO₃⁻) sulfonates unmethylated C at position 5-6 → forms cytosine sulfonate → deamination → uracil sulfonate → desulfonation → uracil (reads as T in sequencing). 5mC is protected because its 5-methyl group reduces reactivity at C6 → resists sulfonation → remains C in sequencing. Outcome: unmethylated C → T; 5mC → C. By aligning bisulfite-treated sequence to reference, each CpG called as methylated (C) or unmethylated (T). WGBS (whole genome bisulfite sequencing) achieves single-CpG resolution across entire genome. Limitation: 5mC and 5hmC both resist conversion; additional oxBS-seq or TAPS chemistry needed to distinguish 5mC from 5hmC."
  },
  {
    id: 32,
    question: "The concept of 'epigenetic reprogramming' in induced pluripotent stem cells (iPSCs) generated by Yamanaka factors (OCT4, SOX2, KLF4, c-MYC) involves:",
    options: ["Simple overexpression of the four factors that switch on all pluripotency genes simultaneously on day 1", "A stochastic, multi-stage process involving pioneer TF-mediated chromatin opening, erasure of somatic histone marks, reactivation of the pluripotent epigenome (H3K4me3/H3K27ac at pluripotency genes), de novo establishment of bivalent domains, and X chromosome reactivation in female iPSCs over ~2-4 weeks", "Only DNA methylation changes at pluripotency promoters without histone modification changes", "Direct transdifferentiation without passing through a pluripotent intermediate state"],
    answer: 1,
    explanation: "iPSC reprogramming epigenetics (Yamanaka 2006): Stages: (1) Early phase — mesenchymal-to-epithelial transition (MET), OSKM (OCT4-SOX2-KLF4-MYC) bind somatic chromatin; (2) Intermediate — stochastic activation of some pluripotency genes, removal of H3K27me3 from pluripotency loci; (3) Maturation — complete activation of all pluripotency genes (NANOG, REX1, DPPA3), establishment of ES-cell-like DNA methylation (global low methylation, CpG island promoter hypomethylation), bivalent domain establishment, X reactivation. c-MYC accelerates but causes chromosomal instability. Efficiency ~0.01-1% without selection. Full reprogramming may take weeks. Epigenetic barriers include somatic memory and incomplete TET-mediated demethylation."
  },
  {
    id: 33,
    question: "Super-enhancers (SEs) in cancer differ from typical enhancers in their clinical importance because:",
    options: ["Super-enhancers are always deleted in cancer cells, making them markers of cancer-adjacent normal tissue", "Super-enhancers are large clusters of active enhancers (marked by high H3K27ac, Mediator, BRD4 density) that drive exceptionally high expression of key cancer driver genes (MYC, BCL2, oncogene amplifications); they are highly sensitive to BET inhibitors (JQ1, OTX015) which disproportionately reduce SE-driven oncogene expression", "Super-enhancers exclusively control housekeeping genes essential for all cell types", "Super-enhancers are only found in normal stem cells, not cancer cells"],
    answer: 1,
    explanation: "Super-enhancers (Lovén et al., Whyte et al. 2013): dense clusters of active enhancers defined by unusually high H3K27ac, BRD4, and Mediator signal over 12.5+ kb domains. Found at master regulator genes in each cell type. In cancer: SEs form de novo at oncogenes (TAL1 in T-ALL from NOTCH1-driven SE formation; MYC SEs in myeloma, neuroblastoma, lymphoma). BET inhibitors (JQ1, OTX015) disproportionately reduce SE-driven oncogene transcription because SEs require multiple BRD4 molecules (higher inhibitor sensitivity). Clinical trials of BET inhibitors (AZD5153, ZEN-3694) in hematological malignancies and solid tumors are ongoing."
  },
  {
    id: 34,
    question: "The concept of 'chromatin state' in epigenomics refers to:",
    options: ["The physical state of chromatin (liquid vs. solid) during mitosis", "A combinatorial classification of chromatin regions based on multiple histone marks, DNA accessibility, and other epigenomic features using computational methods (ChromHMM, Segway); typically 5-15 states describe active/poised promoters, active/poised enhancers, transcribed regions, Polycomb-repressed, heterochromatin", "The number of nucleosomes per 10 kb of chromatin", "Whether chromatin is replicated in early or late S phase"],
    answer: 1,
    explanation: "Chromatin states (Ernst & Kellis, Nature Methods 2012 — ChromHMM): computational integration of multiple ChIP-seq marks (H3K4me3, H3K4me1, H3K27ac, H3K36me3, H3K27me3, H3K9me3, CTCF, etc.) using multivariate Hidden Markov Model to define combinatorial patterns. Roadmap Epigenomics Project used 5-state (E1-E5) to 25-state models across 127 human tissue/cell types. Key states: Active TSS (H3K4me3+H3K27ac), Flanking Active TSS, Bivalent TSS, Strong Enhancer (H3K4me1+H3K27ac), Poised Enhancer (H3K4me1+H3K27me3), Transcription (H3K36me3), Polycomb (H3K27me3), Heterochromatin (H3K9me3). Chromatin states predict regulatory element function."
  },
  {
    id: 35,
    question: "DNMT3A mutations are the most common somatic mutations in clonal hematopoiesis and AML (~20% of AML). The functional consequence of DNMT3A R882H (the most common AML mutation) is:",
    options: ["Complete loss of DNMT3A enzymatic activity at all loci", "Dominant negative effect — DNMT3A R882H (hotspot mutation) reduces DNMT3A tetramerization, resulting in reduced de novo methylation at specific CpGs (not genome-wide DNMT3A loss), particularly at bivalent chromatin domains, causing focal hypomethylation that derepresses stem cell gene programs", "Gain-of-function hypermethylation at tumor suppressor loci", "DNMT3A R882H impairs mRNA export of hematopoietic differentiation genes"],
    answer: 1,
    explanation: "DNMT3A R882H (DNMT3A homodimers use an allosteric network requiring Arg882 for full activity): dominant negative effect because: (1) DNMT3A forms homotetramers for full activity; (2) R882H monomer poisons tetramers → ~80% reduction in catalytic activity in heterozygous cells (worse than R882H KO); (3) Focal hypomethylation at HOX/MEIS1/stem cell gene loci → derepression of self-renewal programs; (4) Blocks DNMT3A-mediated de novo methylation at polycomb H3K27me3 targets. DNMT3A R882H cooperates with FLT3-ITD, NPM1 mutations in AML. Prognosis: intermediate risk; responds differently to standard chemotherapy vs. stem cell transplant vs. IDH inhibitors."
  },
  {
    id: 36,
    question: "During meiosis, epigenetic reprogramming of the primordial germ cell (PGC) epigenome involves two major events. The second reprogramming wave (after fertilization) occurs in PGCs migrating to the gonad and includes:",
    options: ["DNA methylation at CpG islands to silence pluripotency genes", "Near-complete erasure of DNA methylation (including imprint marks, reaching ~5-10% global methylation, the lowest of any cell type) and histone replacement/remodeling in PGCs — resetting the epigenome for gametogenesis and allowing re-establishment of sex-specific imprints", "X chromosome reactivation in female PGCs through XIST RNA silencing", "Activation of all transposable elements which are then re-silenced by DNMT3A"],
    answer: 1,
    explanation: "PGC reprogramming (Seisenberger et al.): (1) First wave — after implantation, global DNA methylation established in epiblast. (2) Second wave — PGCs migrating to gonad (E8.5-E13.5 in mice) undergo global demethylation reaching ~5-10% CpG methylation (lowest of any cell type), erasing: somatic methylation, imprint marks (both maternal and paternal DMRs), retrotransposon silencing methylation. This requires TET1/TET2 and passive replication-coupled dilution. After gonad colonization: sex-specific re-establishment of imprints (female oocytes: maternal IMRs; male prospermatogonia: paternal DMRs by DNMT3A/DNMT3L). PIWI/piRNA pathway re-establishes TE silencing."
  },
  {
    id: 37,
    question: "Chromatin immunoprecipitation with mass spectrometry (ChIP-MS or RIME) differs from ChIP-seq in that:",
    options: ["ChIP-MS uses antibodies against histones while ChIP-seq uses antibodies against transcription factors", "ChIP-MS (Rapid Immunoprecipitation Mass spectrometry of Endogenous proteins) identifies all proteins coprecipitating with a target protein at chromatin, mapping the proteome of a specific chromatin-regulatory complex in cells — a complement to ChIP-seq which maps DNA binding sites", "ChIP-MS is less sensitive and requires more input material than ChIP-seq", "ChIP-MS identifies DNA sequences while ChIP-seq identifies co-immunoprecipitating proteins"],
    answer: 1,
    explanation: "ChIP-MS/RIME (Mohammed et al. 2016): native chromatin immunoprecipitation (nChIP) with antibody against endogenous protein → eluate analyzed by mass spectrometry → identifies all co-precipitating proteins at chromatin with the target protein. Advantages: (1) Unbiased protein complex identification in physiological context; (2) Identifies novel interactors, tissue-specific factors, signal-dependent complex changes; (3) Does not require recombinant protein or tagged constructs (uses anti-endogenous antibody). RIME of estrogen receptor (ER) + E2 in breast cancer cells identified FOXA1 as a pioneer factor and multiple ER co-regulatory proteins, guiding resistance mechanism discovery."
  },
  {
    id: 38,
    question: "The Polycomb Response Elements (PREs) in Drosophila differ from their mammalian counterparts in that:",
    options: ["PREs are more numerous in mammals than in Drosophila", "Drosophila PREs are compact, well-defined DNA sequences (~1 kb) with binding sites for specific PcG recruiting transcription factors (PHO, GAF, Zeste); mammalian PRC2 recruitment mechanisms are less well-defined, with evidence for CpG-island targeting, ncRNA scaffolds (HOTAIR), H3K27me3 spreading, and Jarid2/EPOP-mediated nucleation rather than single defined PRE sequences", "Drosophila lacks PRC2 and uses H3K9me3 instead of H3K27me3 for gene silencing", "PREs in mammals are always associated with CTCF binding and TAD boundaries"],
    answer: 1,
    explanation: "PcG targeting comparison: Drosophila — discrete PREs (~100 known) bind Pleiohomeotic (PHO/PhoRC), GAGA factor (GAF), Zeste, and PSQ with cooperative binding → recruit PRC2 and PRC1. Mammalian PRC2 recruitment is less understood but involves: (1) Unmethylated CpG islands (CGIs) — JARID2 and EPOP recruit PRC2 to CGIs via PRC2 subunit interactions; (2) Long ncRNAs (HOTAIR, Xist coat Xi); (3) H3K27me3 spreading (EED allosteric activation by H3K27me3 → positive feedback); (4) Lack of active transcription/H3K36me3 (which repels PRC2). The lack of defined mammalian PREs makes computational PcG target prediction challenging."
  },
  {
    id: 39,
    question: "Nucleosome positioning affects gene regulation because:",
    options: ["Nucleosomes always block transcription factor binding and must be completely removed for gene activation", "Phased nucleosome arrays relative to TSS (well-positioned +1 nucleosome, NDR/nucleosome-depleted region at active promoters) influence TF accessibility, Pol II loading, and chromatin remodeler recruitment; nucleosome positioning is determined by DNA sequence preferences, TF binding, and active ATP-dependent remodeling", "All transcription factors can access DNA equally in nucleosomal or free DNA contexts", "Nucleosome positioning is identical in all cell types regardless of gene activity"],
    answer: 1,
    explanation: "Nucleosome positioning in gene regulation: Active genes show: (1) NDR (nucleosome-depleted region) at the promoter flanked by −1 and +1 nucleosomes; (2) Phased nucleosome arrays extending into the gene body; (3) H2A.Z/H3.3 histone variants at +1 nucleosome (makes nucleosome less stable/more dynamic). Silent genes: nucleosomes positioned over promoter/TSS (blocking Pol II). Positioning determined by: (1) DNA sequence preferences of histones (poly-A tracts disfavor nucleosomes, GC-rich DNA favors); (2) TF binding (pioneer factors displace nucleosomes); (3) ATP-dependent remodelers (ISWI/CHD space nucleosomes evenly; SWI/SNF repositions/ejects). MNase-seq or ATAC-seq map nucleosome positions."
  },
  {
    id: 40,
    question: "In somatic cell nuclear transfer (SCNT, cloning), the nucleus from a somatic cell is transferred to an enucleated oocyte. The epigenetic reprogramming efficiency in SCNT is limited because:",
    options: ["The somatic genome has too many DNA mutations to be reprogrammed", "Somatic epigenetic marks (particularly stable H3K9me3 domains and DNA methylation at specific loci) are incompletely erased by oocyte reprogramming factors (e.g., KDM4B that removes H3K9me3, DPPA2/4 for methylation erasure); incomplete reprogramming leads to transcriptional aberrations in cloned embryos and high neonatal death rates", "SCNT-derived embryos lack mitochondria for energy production", "Somatic cells cannot provide centrosomes required for first mitotic division"],
    answer: 1,
    explanation: "SCNT reprogramming barriers: Dolly the sheep (1996) demonstrated nuclear reprogramming by oocyte cytoplasm, but efficiency is very low (<5% viable offspring from SCNT). Barriers: (1) H3K9me3 at constitutive heterochromatin (centromeres, LINE elements) — oocyte KDM4A removes some H3K9me3, but somatic H3K9me3 is more extensive; (2) DNA methylation at somatic-specific CpGs incompletely erased; (3) Incomplete activation of zygotic gene activation (ZGA) program. Solutions: overexpression of KDM4B (H3K9me3 demethylase), DPPA2/4 (facilitate demethylation), Kdm4d in oocytes → improved SCNT efficiency in mice. Explains why SCNT-cloned animals show developmental and phenotypic abnormalities."
  },
  {
    id: 41,
    question: "The concept of 'epigenetic drift' in aging refers to:",
    options: ["Progressive accumulation of DNA mutations causing epigenetic reprogramming", "Stochastic changes in DNA methylation and histone modification patterns that accumulate over time due to imperfect epigenetic maintenance; results in increased cell-to-cell variability in gene expression within aging tissues and contributes to age-related diseases", "Directional changes in evolution driven by epigenetic rather than genetic variation", "Reactivation of silenced retrotransposons exclusively in aged cells"],
    answer: 1,
    explanation: "Epigenetic drift: during aging, DNA methylation patterns deviate from their original state stochastically: (1) CpG island shores of tissue-specific genes show directional hypermethylation (silencing); (2) Some genomic regions lose methylation (hypomethylation at repeat elements); (3) H3K27me3 domains spread; (4) Cell-to-cell epigenetic heterogeneity increases (measured by single-cell methylation). Epigenetic drift contributes to: age-related cancer risk (silencing of TSGs via methylation drift → clonal advantage), stem cell exhaustion, chronic inflammation ('inflammaging' through TE derepression). Caloric restriction and other longevity interventions slow epigenetic drift in animal models."
  },
  {
    id: 42,
    question: "Imprinting disorders due to uniparental disomy (UPD) differ from those due to microdeletion in that:",
    options: ["UPD always causes more severe disease than microdeletion", "UPD errors affect imprinting by disrupting parent-of-origin allele dosage; in isodisomy UPD there is additionally a risk of homozygosity for recessive variants on that chromosome; microdeletion may delete multiple contiguous imprinted genes, while UPD causes incorrect dosage of imprinted genes without sequence deletion", "UPD and microdeletion cause identical phenotypes and cannot be distinguished clinically", "Microdeletion always involves larger genomic regions than UPD"],
    answer: 1,
    explanation: "Imprinting disorders — molecular mechanisms: (1) Deletion: chromosome 15q11 deletion removes all imprinted genes; paternal deletion → PWS; maternal deletion → AS. (2) UPD: maternal UPD15 → two maternal copies (both silenced at paternal-expressed genes) → PWS; paternal UPD15 → two paternal copies (no maternal UBE3A expression) → AS. Additionally, isodisomy (both copies from same parental chromosome) creates LOH for recessive variants on that chromosome. (3) Imprinting center mutations: ICR defects causing abnormal methylation of entire imprinted cluster. (4) MECP2/UBE3A point mutations (AS). Each mechanism identified by methylation testing + MS-PCR, plus molecular characterization by MLPA or chromosomal microarray."
  },
  {
    id: 43,
    question: "Circular chromosome conformation capture techniques (4C-seq, 5C, Hi-C) differ in their genomic scope as follows:",
    options: ["4C-seq provides genome-wide unbiased interactions; Hi-C is targeted to one viewpoint", "3C (Chromosome Conformation Capture) measures one-to-one interactions (PCR-based); 4C-seq (Circular 3C + sequencing) measures one genomic locus interacting with all other loci genome-wide (one-to-all); 5C measures many-to-many interactions in defined regions; Hi-C measures all-to-all interactions genome-wide (unbiased, but requires deep sequencing)", "They are identical in scope and differ only in the restriction enzyme used", "Hi-C uses antibodies to immunoprecipitate active chromatin; 4C-seq uses no immunoprecipitation"],
    answer: 1,
    explanation: "3C-based techniques: (1) 3C (one-to-one): PCR primers at two loci of interest; measures specific interaction frequency; (2) 4C-seq (one-to-all): inverse PCR from one viewpoint locus reads all contacts genome-wide; ~100,000 cells; (3) 5C (many-to-many): targeted ligation-mediated amplification at many loci of interest; (4) Hi-C (all-to-all): biotin-labeled ligation junctions + streptavidin capture → sequencing of all proximal ligations; requires 100M-2B reads for TAD/compartment resolution. ChIA-PET/PLAC-seq: Hi-C combined with ChIP to capture interactions at specific protein-bound sites (e.g., CTCF-ChIA-PET maps CTCF-anchored loops; H3K27ac PLAC-seq maps enhancer-promoter loops)."
  },
  {
    id: 44,
    question: "ATAC-seq on single cells (scATAC-seq) enables which unique analyses compared to bulk ATAC-seq?",
    options: ["Higher chromatin accessibility resolution (1 bp resolution) compared to bulk ATAC-seq's 100 bp resolution", "Identification of cell-type-specific regulatory element accessibility within heterogeneous tissues without need for cell sorting; reconstruction of cell lineage trajectories from chromatin accessibility changes; detection of rare cell-type-specific TF binding sites", "Measurement of DNA methylation simultaneously with chromatin accessibility", "Identification of genetic mutations causing chromatin accessibility changes"],
    answer: 1,
    explanation: "scATAC-seq (10x Genomics Chromium, SHARE-seq, sci-ATAC-seq): generates chromatin accessibility profiles for thousands of individual cells simultaneously. Unique capabilities: (1) Deconvolutes cell-type heterogeneity in complex tissues (tumor microenvironment, brain regions, hematopoietic hierarchy); (2) Identifies rare cell type-specific regulatory elements without flow sorting; (3) Trajectory analysis (pseudotime) traces chromatin changes during differentiation; (4) Identifies cell-type-specific TF footprints (motif enrichment in cell-type-specific peaks). Combined with scRNA-seq (SHARE-seq, SNARE-seq, 10x Multiome) links chromatin accessibility to gene expression in same cells. Challenge: sparse data per cell (only 2 copies of each locus per cell)."
  },
  {
    id: 45,
    question: "Heterochromatin spreading and maintenance requires which self-reinforcing mechanism?",
    options: ["Positive feedback loop where heterochromatin proteins recruit their own writers: H3K9me3 is read by HP1 chromodomain → HP1 CSD recruits SUV39H1/H2 → SUV39H1/H2 methylates adjacent nucleosomes H3K9 → new HP1 binding sites → propagation; similar: PRC2 EED subunit reads H3K27me3 (via its aromatic cage) and allosterically activates EZH2 to methylate adjacent nucleosomes → Polycomb domain spreading", "Heterochromatin spreads by DNA replication copying histone marks to new daughter strands", "RNA Pol II actively transcribes through heterochromatin to maintain its silenced state", "Telomere shortening drives heterochromatin spreading toward gene-containing regions"],
    answer: 0,
    explanation: "Heterochromatin spreading feedback loops: (1) H3K9me3/HP1: H3K9me3 (deposited by SUV39H1/H2) → HP1α reads via chromodomain → HP1 CSD dimerizes and recruits SUV39H1 → spreads H3K9me3 to adjacent nucleosomes → more HP1 binding → positive feedback. Boundary elements (CTCF, active transcription, H3K4me3) halt spreading. (2) PRC2/H3K27me3: EED subunit (WD40 domain aromatic cage) directly binds H3K27me3 on preceding nucleosome → allosterically stimulates EZH2 activity on following nucleosome → propagation. PRC1 H2AK119ub1 is also read by JARID2 to feedback stimulate PRC2. These are the canonical epigenetic memory mechanisms maintaining gene silencing through cell divisions."
  },
  {
    id: 46,
    question: "The concept of 'pioneer transcription factors' distinguishes FOXA1 from regular transcription factors in breast cancer biology because:",
    options: ["FOXA1 has no DNA-binding domain and acts only through protein-protein interactions", "FOXA1 can bind its target motifs on nucleosome-compacted chromatin (nucleosomal DNA), opening chromatin and creating accessible sites for subsequent binding by estrogen receptor (ER) and other TFs; FOXA1 is a key determinant of ER chromatin binding landscape in breast cancer", "FOXA1 directly phosphorylates ER to activate it independent of estrogen", "FOXA1 acts as a co-repressor that silences ER target genes in normal mammary cells"],
    answer: 1,
    explanation: "FOXA1 (HNF3α) as pioneer TF: (1) Its winged-helix DBD structurally resembles linker histone H1, allowing it to bind nucleosomal DNA by displacing H1 and partial displacement of H2A/H2B; (2) FOXA1 binding opens chromatin and recruits nucleosome remodelers; (3) Creates accessible sites for ER binding — ~50% of ER binding sites require prior FOXA1 binding; (4) FOXA1 defines the luminal vs. basal/TNBC gene expression programs in breast cancer; (5) FOXA1 mutations in ER+ breast cancer (arising under aromatase inhibitor therapy) alter ER binding landscape to activate resistance programs. FOXA1, FOXA2, FOXA3 have similar pioneering functions in liver, pancreas, and lung lineages."
  },
  {
    id: 47,
    question: "Phase separation and liquid-liquid phase transitions are relevant to epigenetics because:",
    options: ["Chromosomes physically precipitate as solid crystals in the nucleus", "Transcriptional condensates form through phase separation of intrinsically disordered proteins (IDRs) enriched in RNA Pol II CTD, Mediator, coactivators, and transcription factors — compartmentalizing transcription machinery at active genes/super-enhancers; HP1α phase-separates at heterochromatin; LLPS explains how transcriptional hubs concentrate activators while excluding repressors", "DNA methylation causes immediate phase separation of chromatin at CpG islands", "Phase separation only occurs during mitosis when chromosomes condense"],
    answer: 1,
    explanation: "Phase separation in transcription and chromatin: (1) Transcriptional condensates: OCT4, GCN4, other TFs with IDR activation domains undergo LLPS with Mediator and RNA Pol II CTD (phosphorylated CTD partitions to elongation condensates away from initiation condensates); BRD4 + Mediator form phase-separated condensates at super-enhancers; (2) Heterochromatin: HP1α undergoes LLPS with H3K9me3-nucleosomal arrays → liquid droplets that can spread but also concentrate repressive components; (3) Polycomb condensates: PRC1-mediated phase separation concentrates Polycomb bodies in the nucleus. Biomolecular condensate (membrane-less organelle) biology has revised understanding of transcription regulation."
  },
  {
    id: 48,
    question: "Methylation-sensitive restriction enzymes (e.g., HpaII vs. MspI) in earlier methylation analysis differed in that:",
    options: ["HpaII cuts both methylated and unmethylated CCGG; MspI cuts only unmethylated CCGG", "HpaII cuts only unmethylated CCGG (sensitive to CpG methylation at the inner C); MspI cuts CCGG regardless of methylation status (but is sensitive to CpHpG methylation); differential digestion reveals methylation status at restriction sites", "Both enzymes cut only methylated DNA", "HpaII is a methyltransferase; MspI is a restriction enzyme"],
    answer: 1,
    explanation: "HpaII/MspI isoschizomers both recognize CCGG: (1) HpaII — sensitive to CpG methylation of the inner C (5'-CmCGG-3' not cut); (2) MspI — cuts CCGG regardless of CpG methylation of inner C (but sensitive to CHH methylation of outer C: 5'-mCCGG-3' not cut by MspI). Differential digestion: genomic DNA cut with both enzymes → Southern blot or MSRE-PCR: HpaII produces large fragments at methylated loci (not cut) → different pattern from MspI (which cuts all CCGG). This classic technique was precursor to bisulfite sequencing for genome-wide methylation analysis. Also: MSRE-PCR uses HpaII digestion before PCR — if methylated, HpaII doesn't cut → PCR amplification possible."
  },
  {
    id: 49,
    question: "Histone variant H3.3 differs from canonical H3.1 and H3.2 in its deposition mechanism and its role in gene regulation:",
    options: ["H3.3 is deposited during DNA replication by CAF-1; canonical H3.1 is deposited by HIRA outside replication", "H3.3 is deposited in a replication-independent manner by HIRA (at active genes, regulatory elements) and DAXX/ATRX (at telomeres, pericentric heterochromatin) — marking transcriptionally active and poised chromatin; H3.3 accumulates post-mitotically in non-dividing cells; H3.3 K27M mutations in pediatric gliomas cause global H3K27me3 reduction", "H3.3 is exclusively found at centromeres replacing CENP-A/H3 canonical variant", "H3.3 has identical genomic distribution to canonical H3.1 and is only distinguished by its greater stability"],
    answer: 1,
    explanation: "Histone variant H3.3 (encoded by H3F3A, H3F3B): differs from H3.1 at positions 31, 87, 89, 90 — critical for HIRA interaction. Deposition: HIRA complex deposits H3.3 at active gene bodies, regulatory elements, and after DNA repair (replication-independent, throughout cell cycle); DAXX/ATRX deposits H3.3 at telomeres and pericentric heterochromatin. H3.3 accumulates in post-mitotic neurons. H3.3 K27M mutation (H3F3A, ~80% of DIPG — diffuse intrinsic pontine glioma) globally reduces H3K27me3 by inhibiting PRC2 in trans (H3.3 K27M peptide is a competitive inhibitor of EZH2, reducing H3K27me3 genome-wide → derepression of oncogenic genes). H3.3 G34R/V in hemispheric pediatric GBM."
  },
  {
    id: 50,
    question: "The utility of histone modification ChIP-seq data for identifying active vs. repressed genomic regulatory elements is based on which well-established chromatin signatures?",
    options: ["H3K27me3 marks all active enhancers; H3K4me3 marks all silenced promoters", "Active promoters: H3K4me3 + H3K27ac; active enhancers: H3K4me1 + H3K27ac; poised enhancers: H3K4me1 + H3K27me3; bivalent/poised promoters (ESCs): H3K4me3 + H3K27me3; Polycomb-repressed: H3K27me3; constitutive heterochromatin: H3K9me3 + H4K20me3; transcribed gene body: H3K36me3", "All active chromatin has H3K9me2; all repressed chromatin has H3K4me1", "Chromatin modification signatures are identical in all cell types and species"],
    answer: 1,
    explanation: "Chromatin state signatures (validated across multiple studies): Active TSS/promoter: H3K4me3 (narrow peak), H3K27ac, H3K9ac, H3K14ac. Active enhancer: H3K4me1 (mono-methyl only), H3K27ac. Poised/primed enhancer: H3K4me1 (±H3K27me3, no H3K27ac). Bivalent domains (ESCs): H3K4me3 + H3K27me3. Transcribed gene body: H3K36me3 (written by NSD2/SETD2 — SETD2 mutations cause clear-cell RCC). Polycomb-repressed: H3K27me3 (±H2AK119ub1). Constitutive heterochromatin: H3K9me3 + H4K20me3 (H4K20me3 deposited by SUV4-20H1/H2). These signatures are used in Roadmap Epigenomics, Blueprint, ENCODE for ChromHMM state annotation across human cell types."
  }
];

export default questions;
