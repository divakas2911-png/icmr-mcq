export const questions = [
  {
    id: 1,
    question: "The polymerase chain reaction (PCR) was invented by Kary Mullis. Which temperature step allows primers to anneal to the template?",
    options: ["Denaturation (~94-98°C)", "Annealing (~50-65°C)", "Extension (~72°C)", "Melting curve analysis (~60-95°C)"],
    answer: 1,
    explanation: "PCR thermal cycling: (1) Denaturation (~94-98°C): dsDNA strands separate; (2) Annealing (~50-65°C): primers bind complementary sequences on ssDNA template — temperature depends on primer Tm; (3) Extension (~72°C): Taq (or other thermostable) polymerase extends from primer 5'→3'. Optimal annealing temperature is typically 5°C below primer Tm. Kary Mullis won the 1993 Nobel Prize in Chemistry for PCR."
  },
  {
    id: 2,
    question: "Real-time PCR (qPCR) using SYBR Green quantifies DNA by:",
    options: ["Measuring fluorescence of TaqMan probe hydrolysis at a fixed endpoint", "Detecting fluorescence of SYBR Green dye intercalated into dsDNA as it accumulates each cycle, measured as Ct (threshold cycle)", "Sequencing amplicons to count copies", "Measuring the mass of PCR product by mass spectrometry"],
    answer: 1,
    explanation: "SYBR Green I is a dsDNA-intercalating dye that fluoresces ~1000x more when bound to dsDNA than free. As PCR product accumulates, fluorescence increases. The Ct (cycle threshold) — the cycle at which fluorescence exceeds background — is inversely proportional to initial template amount. Melt curve analysis (after PCR) confirms specificity. TaqMan probes (hydrolysis probe) use fluorophore-quencher probes for more specific detection."
  },
  {
    id: 3,
    question: "Digital PCR (dPCR) differs from conventional qPCR in that it:",
    options: ["Uses reverse transcription before amplification", "Partitions the reaction into thousands of individual droplets/chambers, amplifies, and counts positive vs negative partitions using Poisson statistics for absolute quantification without a standard curve", "Requires gel electrophoresis for quantification", "Can only detect RNA, not DNA templates"],
    answer: 1,
    explanation: "Digital PCR (droplet digital PCR, ddPCR): the sample is partitioned into ~20,000 droplets (ddPCR) or nanowell arrays, each containing 0 or 1 template molecule. After PCR amplification, droplets are read as fluorescence-positive or negative. Poisson statistics (correcting for multiple templates/droplet) give absolute molecule count without reference standards. ddPCR is ideal for rare variant detection (ctDNA with 0.01% VAF), copy number variation, and pathogen quantification."
  },
  {
    id: 4,
    question: "Southern blotting is used to detect:",
    options: ["Specific RNA sequences in a mixture of RNA", "Specific DNA sequences in a restriction-digested DNA sample, transferred to membrane and hybridized with labeled probe", "Specific proteins in a mixture using antibodies", "Specific DNA sequences amplified by PCR"],
    answer: 1,
    explanation: "Southern blot (E.M. Southern, 1975): restriction digest of genomic DNA → agarose gel electrophoresis → denaturing and capillary transfer to nylon/nitrocellulose membrane → UV crosslinking → hybridization with labeled probe (radioactive or chemiluminescent) → exposure/imaging. Detects specific DNA sequences, gene copy number, RFLP (restriction fragment length polymorphism), transgene integration. Northern blot = RNA; Western blot = protein; Eastern blot = lipids."
  },
  {
    id: 5,
    question: "The Sanger dideoxy sequencing method uses chain-terminating nucleotides. Which component prevents further elongation?",
    options: ["Regular dNTPs at high concentration", "Dideoxynucleotides (ddNTPs) — lack both 2'- and 3'-OH groups, preventing phosphodiester bond formation with next nucleotide", "Pyrophosphate released during polymerization", "Template strand secondary structures blocking polymerase"],
    answer: 1,
    explanation: "Sanger sequencing: DNA polymerase extends primer from template incorporating normal dNTPs AND a small fraction of ddNTPs (dideoxynucleotides lacking 3'-OH). When ddNTP is incorporated, chain elongation terminates. Each of the four ddNTPs (ddATP, ddCTP, ddGTP, ddTTP) is labeled with a different fluorophore. Capillary electrophoresis separates fragments by size; laser detects fluorescence to read sequence. Maximum read length ~800-1000 bp. Still gold standard for confirmatory sequencing."
  },
  {
    id: 6,
    question: "Illumina next-generation sequencing uses which chemistry for base detection?",
    options: ["Real-time single-molecule synthesis with phosphate-labeled nucleotides (PacBio SMRT)", "Sequencing by synthesis (SBS) with reversible terminator fluorescent dNTPs — image after each nucleotide incorporation, cleave terminator, repeat", "Nanopore-based ionic current disruption by individual nucleotides (Oxford Nanopore)", "Pyrosequencing (pyrophosphate → ATP → luciferase flash)"],
    answer: 1,
    explanation: "Illumina SBS: (1) Library preparation — DNA fragmented, adapter ligated; (2) Cluster generation — bridge amplification on flow cell → polonies (~1000 copies/cluster); (3) Sequencing — all 4 reversible terminator-fluorescent dNTPs added simultaneously; one incorporated → image (4 colors); cleave terminator → next cycle. Generates short reads (~100-300 bp), extremely high accuracy (~99.9%), highest throughput per $ — dominates the NGS market."
  },
  {
    id: 7,
    question: "Long-read sequencing platforms (PacBio SMRT, Oxford Nanopore) offer which advantage over short-read NGS?",
    options: ["Higher base accuracy per read than Illumina", "Reads >10 kb enabling assembly of repetitive regions, structural variant detection, and direct methylation detection", "Lower cost per base than Illumina", "Higher throughput (more reads per run) than Illumina"],
    answer: 1,
    explanation: "Long-read platforms produce reads of 10-100+ kb: (1) Enable de novo assembly of repetitive regions (centromeres, telomeres, segmental duplications) that short reads cannot span; (2) Detect structural variants (SVs >50 bp) and complex rearrangements; (3) Phase haplotypes over long distances; (4) PacBio and Nanopore can directly detect base modifications (m6A, 5mC) from current signals. Trade-off: higher per-base error rate (Nanopore ~5%, PacBio HiFi ~0.1%), lower throughput."
  },
  {
    id: 8,
    question: "CRISPR-Cas9 guide RNA (gRNA) design requires which essential element adjacent to the target sequence in the genome?",
    options: ["TATA box 5' to the target", "PAM (protospacer adjacent motif) — NGG for SpCas9 — immediately 3' to the target sequence", "Kozak sequence for translation", "Polyadenylation signal downstream of target"],
    answer: 1,
    explanation: "SpCas9 (Streptococcus pyogenes Cas9) requires a PAM (5'-NGG-3') on the non-template strand immediately 3' to the 20-nt protospacer. Cas9 initially binds PAM, then unwinds the adjacent DNA, allowing crRNA:DNA R-loop formation. Without PAM, Cas9 cannot cleave. Different Cas9 orthologs have different PAMs (SaCas9: NNGRRT; Cas12a/Cpf1: TTTN). PAM requirement limits targetable sites; SpCas9 has NGG every ~8 bp on average in mammalian genomes."
  },
  {
    id: 9,
    question: "Chromatin immunoprecipitation followed by sequencing (ChIP-seq) is used to:",
    options: ["Identify all transcribed genes in a cell", "Map genome-wide binding sites of transcription factors or histone modifications by immunoprecipitating cross-linked chromatin with specific antibodies, then sequencing associated DNA", "Measure chromosome conformation and 3D genome organization", "Detect DNA methylation genome-wide"],
    answer: 1,
    explanation: "ChIP-seq workflow: (1) Crosslink proteins to DNA (formaldehyde); (2) Sonicate/MNase chromatin into ~200 bp fragments; (3) Immunoprecipitate with antibody (against TF, histone mark); (4) Reverse crosslinks, purify DNA; (5) Library prep + NGS; (6) Align reads to genome; (7) Peak calling (MACS2). Used for: TF binding sites (narrow peaks), active enhancers/promoters (H3K27ac), active genes (H3K4me3), heterochromatin (H3K9me3, H3K27me3). Paired with ATAC-seq, Hi-C, and RNA-seq for comprehensive epigenomic analysis."
  },
  {
    id: 10,
    question: "ATAC-seq (Assay for Transposase-Accessible Chromatin with Sequencing) measures:",
    options: ["Histone modification patterns", "Chromatin accessibility (open chromatin regions) using hyperactive Tn5 transposase that inserts sequencing adapters into nucleosome-free, accessible chromatin regions", "DNA methylation at CpG sites", "RNA-protein interactions in chromatin"],
    answer: 1,
    explanation: "ATAC-seq: Tn5 transposase (hyperactive mutant) simultaneously cuts and ligates sequencing adapters ('tagmentation') preferentially into nucleosome-free accessible regions. These open chromatin regions correspond to active regulatory elements (promoters, enhancers, CTCF sites). Sequenced fragments reveal nucleosome positioning (sub-nucleosomal reads reflect TF footprints). ATAC-seq requires fewer cells than FAIRE-seq or DNase-seq and can be done from single cells (scATAC-seq)."
  },
  {
    id: 11,
    question: "RNA-seq (whole transcriptome sequencing) is performed from which starting material?",
    options: ["Total genomic DNA converted to cDNA", "Total RNA or poly-A selected mRNA, reverse transcribed to cDNA → library prep → NGS", "Nascent RNA from nuclear run-on experiments only", "miRNA exclusively selected by small RNA protocols"],
    answer: 1,
    explanation: "RNA-seq workflow: RNA extraction → rRNA depletion (ribosomal RNA depletion by hybridization probes) or poly-A selection (enriching mRNA with oligo-dT beads) → RNA fragmentation → reverse transcription to cDNA → end repair, adapter ligation → library amplification → NGS. Outputs: gene expression levels (RPKM/FPKM/TPM), differential expression, alternative splicing, fusion transcripts, novel transcript discovery, allele-specific expression. stranded RNA-seq preserves strand information."
  },
  {
    id: 12,
    question: "Single-cell RNA sequencing (scRNA-seq) enables which analysis not possible with bulk RNA-seq?",
    options: ["Quantification of absolute mRNA copy numbers per cell", "Identification of cell types, states, and trajectories within heterogeneous tissues; detection of rare cell populations", "Higher sensitivity for lowly expressed genes than bulk RNA-seq", "Direct measurement of protein abundance"],
    answer: 1,
    explanation: "scRNA-seq (10x Genomics Chromium, Drop-seq, Smart-seq2) profiles transcriptomes of individual cells. Enables: (1) Cell type identification from gene expression signatures; (2) Discovery of rare cell populations; (3) Reconstruction of developmental trajectories (pseudotime analysis: Monocle, RNA velocity); (4) Analysis of cell-to-cell heterogeneity; (5) Cellular composition of tissues/tumors (deconvolution). Limitation: loss of spatial information (MERFISH, Visium spatial transcriptomics addresses this)."
  },
  {
    id: 13,
    question: "Bisulfite sequencing is the gold standard for measuring DNA methylation because:",
    options: ["Bisulfite converts 5-methylcytosine to thymine, while unmethylated cytosine is converted to uracil (read as T after PCR), allowing single-base resolution methylation mapping", "Bisulfite deaminates all cytosines, so methylated cytosines are distinguished by resistance to deamination", "Bisulfite sequencing measures hydroxymethylcytosine (5hmC) exclusively", "Bisulfite treatment enriches for methylated DNA for sequencing"],
    answer: 0,
    explanation: "Bisulfite treatment: sodium bisulfite deaminates unmethylated cytosine (C) → uracil (U, read as T after PCR). 5-methylcytosine (5mC) is protected from deamination and reads as C. Comparing bisulfite-treated to untreated sequence: C→T = unmethylated, C→C = methylated. WGBS (whole-genome bisulfite sequencing) provides single-base resolution genome-wide methylation maps. Reduced Representation Bisulfite Sequencing (RRBS) covers CpG-rich regions at lower cost. Note: bisulfite cannot distinguish 5mC from 5hmC; oxidative bisulfite sequencing (oxBS-seq) differentiates them."
  },
  {
    id: 14,
    question: "Hi-C (high-throughput chromosome conformation capture) reveals the 3D organization of the genome by:",
    options: ["Measuring chromatin accessibility across the genome", "Cross-linking spatially proximal chromatin, restriction digestion, proximity ligation of cut ends, and sequencing ligation junctions to identify 3D contacts genome-wide", "Immunoprecipitating cohesin and CTCF and sequencing associated DNA", "Measuring nucleosome positioning by MNase digestion and sequencing"],
    answer: 1,
    explanation: "Hi-C workflow: formaldehyde crosslinking → restriction digestion (HindIII or MboI) → fill-in with biotinylated dNTPs → proximity ligation (ligates spatially close but sequence-distant regions) → shear, streptavidin pulldown of biotinylated junctions → sequencing. Generates genome-wide contact maps revealing: A/B compartments (active/inactive), TADs (topologically associating domains ~100-900 kb), chromatin loops (enhancer-promoter), and their disruption in cancer. Micro-C uses MNase for nucleosome-resolution maps."
  },
  {
    id: 15,
    question: "The ELISA (enzyme-linked immunosorbent assay) sandwich format works by:",
    options: ["Competition between free antigen and labeled antigen for one antibody", "Capture antibody immobilized on plate → antigen binding → detection antibody (different epitope) → enzyme-conjugated secondary antibody → substrate conversion → colorimetric/fluorescent signal", "Agglutination of antigen-antibody complexes for visual detection", "Radioimmunoassay format using radioactive antibody"],
    answer: 1,
    explanation: "Sandwich ELISA: (1) Coat plate with capture antibody (anti-antigen); (2) Block non-specific binding; (3) Add sample — antigen binds capture Ab; (4) Add detection antibody (biotinylated or enzyme-conjugated, different epitope); (5) Add streptavidin-HRP or secondary antibody-HRP; (6) Substrate (TMB for HRP) → colorimetric product measured at 450 nm. Sandwich ELISA is highly sensitive and specific (two antibody recognition events). Used for cytokines, hormones, viral antigens (HIV p24, HBsAg), drug levels."
  },
  {
    id: 16,
    question: "Flow cytometry enables which type of cellular analysis?",
    options: ["Spatial mapping of protein expression in tissue sections", "Multi-parameter quantification of cell surface and intracellular markers simultaneously at single-cell level in suspension, plus cell sorting (FACS)", "Genome-wide measurement of chromatin accessibility", "Measurement of mRNA expression levels in individual cells only"],
    answer: 1,
    explanation: "Flow cytometry: cells in single-file suspension pass through laser beams; scattered light measures cell size (FSC) and granularity (SSC); fluorophore-conjugated antibodies emit specific wavelengths detected by photomultipliers. Modern instruments detect 20-50+ parameters simultaneously (mass cytometry/CyTOF uses metal isotopes). FACS (fluorescence-activated cell sorting) sorts cells based on surface/intracellular markers. Used for: immunophenotyping, cell cycle analysis (propidium iodide), apoptosis (Annexin V/PI), intracellular cytokines, stem cell isolation."
  },
  {
    id: 17,
    question: "Western blotting (immunoblotting) differs from ELISA because it:",
    options: ["Detects nucleic acids, not proteins", "Separates proteins by SDS-PAGE before transfer to membrane and antibody detection, providing molecular weight information alongside specificity", "Requires living cells and cannot detect denatured proteins", "Measures protein concentration without antibodies"],
    answer: 1,
    explanation: "Western blot: SDS-PAGE separates denatured proteins by molecular weight → electroblot to PVDF/nitrocellulose membrane → block → primary antibody (protein-specific) → HRP/AP-conjugated secondary antibody → chemiluminescent/colorimetric substrate → imaging. Advantages: provides MW information (confirms antibody specificity), detects post-translational modifications (phospho-specific antibodies), semi-quantitative. Limitations: requires relatively large amounts of protein, not quantitative as ELISA, denaturating conditions may mask epitopes."
  },
  {
    id: 18,
    question: "Immunofluorescence microscopy uses fluorescent antibodies to:",
    options: ["Measure protein concentration in cell lysates", "Visualize the spatial distribution and localization of proteins within cells or tissues using fluorophore-conjugated antibodies and fluorescence microscopy", "Sort cells based on surface marker expression", "Detect antibody-antigen binding in solution using fluorescence polarization"],
    answer: 1,
    explanation: "Immunofluorescence (IF): cells/tissue fixed (formaldehyde or cold methanol) → permeabilized (Triton X-100, if intracellular targets) → blocked → primary antibody → fluorophore-conjugated secondary antibody → mounting with DAPI (nuclear counterstain) → confocal/widefield microscopy. Direct IF: fluorophore directly on primary Ab. Indirect IF: secondary Ab provides amplification. Used to determine protein localization (nuclear vs cytoplasmic), co-localization, and changes upon stimulation."
  },
  {
    id: 19,
    question: "The CRISPR-Cas12a (Cpf1) system differs from CRISPR-Cas9 in which key aspects?",
    options: ["Cas12a requires tracrRNA but not crRNA; Cas9 requires both crRNA and tracrRNA", "Cas12a uses a single crRNA (no tracrRNA), generates staggered cuts (5' overhang), cuts 3' of PAM (TTTN 5' of protospacer), and has collateral ssDNA cleavage activity", "Cas12a targets RNA, while Cas9 targets DNA", "Cas12a requires higher GC content in guide RNA; Cas9 requires AT-rich guides"],
    answer: 1,
    explanation: "Key Cas12a (Cpf1) differences from Cas9: (1) Single guide RNA (crRNA only, no tracrRNA required); (2) T-rich PAM (TTTN) upstream (5') of target — vs Cas9's 3' NGG; (3) Cuts downstream of PAM creating staggered cuts with 5' overhangs (~5 nt) — vs Cas9's blunt cuts; (4) Processes its own pre-crRNA array (can multiplex from single transcript); (5) Collateral trans-cleavage of ssDNA after target cleavage — exploited in SHERLOCK/DETECTR diagnostics. AsCas12a is used for HDR with 5' overhangs and diagnostics."
  },
  {
    id: 20,
    question: "The SHERLOCK and DETECTR diagnostic platforms use which CRISPR nuclease property?",
    options: ["Cas9's specificity for 5' NGG PAM sequences in diagnostic targets", "Cas13 (SHERLOCK) and Cas12 (DETECTR) collateral nuclease activity — after target cleavage, enzyme indiscriminately cleaves reporter RNA (Cas13) or ssDNA (Cas12), giving amplified signal", "Cas9 nickase activity for strand-specific labeling", "Base editing activity of adenine base editors for point mutation detection"],
    answer: 1,
    explanation: "SHERLOCK (Specific High-sensitivity Enzymatic Reporter unLOCKing) uses Cas13 (RNA-targeting): after target RNA detection, Cas13 cleaves reporter RNA (quenched fluorophore-RNA-quencher), releasing fluorescence. DETECTR uses Cas12a: after target DNA detection (combined with RPA/LAMP for amplification), Cas12a cleaves ssDNA reporter. Both have attomolar sensitivity, single-nucleotide specificity, and are adaptable as lateral flow assays — enabling rapid point-of-care diagnostics (SARS-CoV-2, Zika, HPV detection)."
  },
  {
    id: 21,
    question: "Two-hybrid assays (yeast two-hybrid/Y2H) detect:",
    options: ["Gene expression changes upon transcription factor binding", "Protein-protein interactions: bait protein fused to DNA-binding domain + prey protein fused to transcriptional activation domain — interaction reconstitutes reporter gene transcription", "DNA-protein interactions using transcription factor binding arrays", "Protein localization using GFP-fusion constructs"],
    answer: 1,
    explanation: "Yeast two-hybrid (Fields & Song, 1989): Bait-DBD (DNA-binding domain, e.g., GAL4-DBD) + Prey-AD (activation domain, e.g., GAL4-AD). If bait-prey interact → DBD+AD in proximity → activates reporter (HIS3, lacZ, ADE2). Used for interaction screening from cDNA libraries. Limitations: nuclear localization required, false positives (auto-activation), false negatives (fold-dependent interactions). Split-fluorescent protein, FRET, BiFC, and co-IP/MS are complementary methods."
  },
  {
    id: 22,
    question: "Co-immunoprecipitation (Co-IP) followed by mass spectrometry is used to identify:",
    options: ["All transcribed genes in a cell type", "Protein complexes and protein-protein interactions by precipitating a protein of interest with its antibody and identifying co-precipitated partners by MS", "Histone modification patterns genome-wide", "DNA methylation at specific loci"],
    answer: 1,
    explanation: "Co-IP/MS: lyse cells under native conditions → incubate with antibody to target protein → pull down with protein A/G beads → wash → elute → SDS-PAGE or direct trypsin digest → LC-MS/MS protein identification. Identifies endogenous protein complexes. AP-MS (affinity purification-MS) using tagged bait protein is more sensitive. BioID (proximity labeling with biotin ligase) and TurboID identify proximal proteins in living cells, including transient interactions."
  },
  {
    id: 23,
    question: "Fluorescence in situ hybridization (FISH) is used clinically to detect:",
    options: ["Point mutations in coding sequences", "Chromosomal abnormalities: translocations, deletions, amplifications, and aneuploidy using fluorescently labeled DNA probes hybridized to chromosomes/nuclei", "mRNA expression levels in tissue sections", "Protein-protein interactions in cells"],
    answer: 1,
    explanation: "FISH: fluorescently labeled DNA probes (whole chromosome paint, centromere, locus-specific, or break-apart probes) hybridize to denatured chromosomal DNA in metaphase spreads or interphase nuclei. Clinical applications: HER2 amplification (breast cancer), BCR-ABL1 translocation (CML), EML4-ALK rearrangement (NSCLC), 1p/19q codeletion (oligodendroglioma), trisomy 21 (prenatal diagnosis), deletion 13q14/17p13 (CLL), del(5q) (MDS)."
  },
  {
    id: 24,
    question: "The technique of RNA interference (RNAi) uses which molecules to silence gene expression?",
    options: ["Antisense oligonucleotides (ASOs) using RNase H", "Small interfering RNA (siRNA) — 21-23 nt dsRNA processed by DICER → loaded into RISC → cleave complementary mRNA via AGO2", "Morpholino oligomers blocking translation initiation", "Dominant negative proteins sequestering target mRNA"],
    answer: 1,
    explanation: "RNAi: long dsRNA or synthetic siRNA (21-23 nt dsRNA with 2-nt 3' overhangs) → Dicer cleaves into siRNAs → guide strand loaded into RISC (RNA-induced silencing complex with AGO2) → antisense guide strand directs RISC to complementary mRNA → AGO2 'slicer' endonuclease cleaves mRNA. siRNA is catalytic (one RISC complex cleaves multiple mRNAs). Endogenously, miRNA uses RISC for translational repression (near-perfect match) or mRNA cleavage (perfect match). Used therapeutically (patisiran for hATTR amyloidosis)."
  },
  {
    id: 25,
    question: "Cryo-electron microscopy (cryo-EM) has revolutionized structural biology by enabling:",
    options: ["Atomic resolution structures of membrane proteins and large complexes without crystallization", "Live cell imaging at nanometer resolution", "Single-molecule force measurement", "Chemical modification mapping on proteins"],
    answer: 0,
    explanation: "Cryo-EM: proteins/complexes in solution are rapidly vitrified (plunge freezing in liquid ethane), preserving native hydrated state without fixation or crystallization. Electron beam images thousands of individual particles in random orientations; computational alignment and averaging (single-particle analysis) reconstructs 3D structure. Resolution revolution ~2013-present: structures now routinely at 2-4 Å resolution. Critical for: ribosomes, membrane proteins, virus capsids, macromolecular machines. 2017 Nobel Prize in Chemistry: Dubochet, Frank, Henderson."
  },
  {
    id: 26,
    question: "Metagenomics differs from standard genomics in that it:",
    options: ["Sequences the genome of a single organism in extreme depth (ultra-deep sequencing)", "Sequences and analyzes all genetic material directly from an environmental sample (soil, gut, seawater) without culturing individual organisms", "Focuses only on the transcriptome of microorganisms", "Specifically targets 16S rRNA genes for bacterial taxonomy"],
    answer: 1,
    explanation: "Metagenomics (shotgun metagenomics): total DNA from environmental/microbiome samples is extracted, sequenced (NGS), and computationally assembled to identify all organisms and their gene content without prior culturing. Enables discovery of unculturable microorganisms (~99% of environmental microbes are unculturable). Applications: gut microbiome (HMP — Human Microbiome Project), ocean/soil microbiomes, clinical diagnostics (mNGS detecting novel pathogens), antibiotic resistance gene surveillance. 16S rRNA amplicon sequencing is cheaper but only identifies bacteria/archaea by taxonomy."
  },
  {
    id: 27,
    question: "Proximity ligation assay (PLA) is used to detect:",
    options: ["Protein expression levels in cell lysates (like ELISA)", "Protein-protein interactions or protein modifications in situ in fixed cells/tissue, with single-molecule sensitivity", "DNA methylation at specific genomic loci", "Chromatin looping between enhancers and promoters"],
    answer: 1,
    explanation: "Duolink PLA (proximity ligation assay): two primary antibodies against two target proteins (or two epitopes on one modified protein). Secondary antibodies each carry short DNA oligonucleotides. When targets are within ~40 nm, oligos are joined by connector oligos, ligation creates circular DNA, rolling circle amplification (RCA) generates a spot of fluorescent signal — one bright dot = one interaction event. Enables quantification of protein interactions (e.g., HER2-HER3 dimerization) or phosphorylation events in situ."
  },
  {
    id: 28,
    question: "Multiplexed single-molecule FISH (smFISH/MERFISH) enables which analysis?",
    options: ["Counting individual mRNA molecules per cell, and MERFISH extends this to hundreds of genes simultaneously in spatial context", "Sequencing single mRNA molecules from individual cells", "Measuring protein binding to RNA in single cells", "Identifying protein-protein interactions at single-molecule resolution"],
    answer: 0,
    explanation: "smFISH: multiple short fluorescent probes (~20 per mRNA) tile along a target mRNA → single mRNA molecules appear as distinct diffraction-limited spots that can be counted per cell. MERFISH (multiplexed error-robust FISH) and seqFISH+ use combinatorial barcode strategies with multiple rounds of hybridization/imaging to simultaneously detect 100s-1000s of RNA species in single cells while preserving spatial context within tissues — enabling spatial transcriptomics at subcellular resolution."
  },
  {
    id: 29,
    question: "The clustered regularly interspaced short palindromic repeats (CRISPR) array in bacteria consists of:",
    options: ["Alternating direct repeats (~30 bp) and unique spacers (~30 bp) derived from past phage or plasmid sequences", "Tandem repeats of the CRISPR-associated gene (cas1)", "Palindromic sequences forming cruciform structures for Cas9 binding", "Variable number tandem repeats (VNTRs) for strain typing"],
    answer: 0,
    explanation: "CRISPR array structure: constant direct repeats (~28-37 bp, palindromic in some systems) separated by unique spacers (~26-72 bp derived from past viral/plasmid DNA). Transcribed as a pre-crRNA that is processed by Cas6 (class 1) or RNase III + Cas9 (class 2 type II) into individual crRNAs. Each spacer encodes the memory of past infections. New spacers are added (in CRISPR adaptation/acquisition) at the leader end proximal to the promoter — so older spacers are distal."
  },
  {
    id: 30,
    question: "Isothermal amplification methods (LAMP, RPA) are useful for point-of-care diagnostics because:",
    options: ["They require thermocyclers and expensive equipment", "They amplify nucleic acids at a single temperature, eliminating the need for thermocyclers, enabling rapid portable detection suitable for resource-limited settings", "They are less sensitive than PCR but more specific", "They require radioactive labeling for signal detection"],
    answer: 1,
    explanation: "LAMP (Loop-Mediated Isothermal Amplification): 4-6 primers recognizing 6 regions of target, Bst DNA polymerase with strand displacement at 60-65°C, generating cauliflower-like loop structures. Highly sensitive (attomolar), fast (15-30 min), resistant to inhibitors. Visual readout (turbidity, colorimetric dye). RPA (Recombinase Polymerase Amplification): uses recombinase-primer complexes to invade dsDNA at 37-42°C. Paired with CRISPR (SHERLOCK/DETECTR) for signal amplification and specificity. Both enable point-of-care nucleic acid testing (COVID-19, malaria, TB)."
  },
  {
    id: 31,
    question: "Reverse transcriptase PCR (RT-PCR) is used to:",
    options: ["Detect DNA methylation by converting 5-methylcytosine to thymine", "Convert RNA to cDNA using reverse transcriptase, then amplify the cDNA by PCR — enables detection and quantification of RNA (mRNA, viral RNA)", "Amplify circular DNA templates", "Sequence RNA directly without cDNA synthesis"],
    answer: 1,
    explanation: "RT-PCR: RNA (total RNA or mRNA) → cDNA using reverse transcriptase (MMLV-RT, AMV-RT, SuperScript) primed with oligo-dT (for mRNA), random hexamers (for all RNA), or gene-specific primers → PCR amplification. Used for: mRNA expression detection, splice variant detection, viral RNA detection (HIV viral load, SARS-CoV-2), RT-qPCR for quantification. Key advantage over genomic PCR: spans introns → amplicon from mRNA is smaller than genomic amplicon (confirms mRNA, not genomic DNA contamination)."
  },
  {
    id: 32,
    question: "Mass spectrometry-based proteomics identifies proteins from complex mixtures by:",
    options: ["Separating proteins by molecular weight using SDS-PAGE, then staining for identification", "Tryptic digestion of proteins into peptides → LC separation → MS/MS fragmentation → matching fragment ions to peptide database → protein identification", "Immunoprecipitation followed by Western blot confirmation", "2D-PAGE separation followed by MALDI-TOF of individual spots"],
    answer: 1,
    explanation: "Shotgun proteomics (LC-MS/MS): proteins digested with trypsin (cuts after K/R) → peptide mixture separated by reverse-phase HPLC → ionization (electrospray, ESI) → MS1 (precursor mass) → fragmentation (CID/HCD) → MS2 (fragment ion spectrum) → database search (MASCOT, SEQUEST, MaxQuant) to identify peptide sequence and protein. SILAC, TMT, iTRAQ enable quantitative comparison between conditions. DIA (data-independent acquisition) gives more reproducible quantification than DDA."
  },
  {
    id: 33,
    question: "CRISPR base editing (CBE — cytosine base editor) performs which reaction without creating DSBs?",
    options: ["Converts A→G at target site (adenine base editor function)", "Converts C→T (or G→A on the opposite strand) at target site by fusing dCas9/nCas9 to cytidine deaminase (APOBEC), deaminating C to U, read as T after replication", "Converts T→C (pyrimidine transversion)", "Installs an entire codon replacement at the target site"],
    answer: 1,
    explanation: "Cytosine base editors (CBEs): nCas9 (nickase) or dCas9 fused to cytidine deaminase (APOBEC1, APOBEC3A) and UGI (uracil-DNA glycosylase inhibitor). Within a ~4-8 nt editing window, the R-loop exposes ssDNA; deaminase converts C → U (read as T). Nicking the non-edited strand promotes U:A over U:G repair. Net result: C:G → T:A. ABEs (adenine base editors) use evolved tRNA adenosine deaminase (TadA) to convert A:T → G:C. No DSBs → no insertions/deletions from NHEJ. Used for correcting pathogenic point mutations."
  },
  {
    id: 34,
    question: "Prime editing enables which type of precise genome editing?",
    options: ["Only small insertions (<5 bp) at PAM-proximal sites", "All 12 types of point mutations, small insertions/deletions, and replacements without DSBs using pegRNA and reverse transcriptase fused to nCas9", "Only transversion mutations (purine to pyrimidine)", "Large chromosomal inversions and translocations"],
    answer: 1,
    explanation: "Prime editing (David Liu lab, 2019): nCas9 (H840A) fused to MMLV reverse transcriptase. pegRNA (prime editing guide RNA) contains: (1) spacer for target, (2) primer binding site (PBS) complementary to nicked strand, (3) RT template encoding desired edit. After nicking, 3' flap pairs with PBS → RT copies RT template (encoding edit) → 5' flap displaced → mismatch resolution → permanent edit. Can install all 12 types of base substitutions + insertions + deletions (<40 bp) without DSBs or donor DNA."
  },
  {
    id: 35,
    question: "Gel electrophoresis separates DNA fragments by which principle?",
    options: ["Charge-to-mass ratio only (like protein gel electrophoresis)", "Size and shape — smaller/less coiled DNA migrates faster toward positive electrode through porous agarose matrix in electric field; migration is inversely proportional to log(size)", "Hydrophobicity of DNA bases", "Differential affinity for ethidium bromide"],
    answer: 1,
    explanation: "DNA agarose gel electrophoresis: DNA is uniformly negatively charged (phosphate backbone); migration velocity is determined primarily by size/shape in the porous agarose matrix. Smaller linear DNA migrates faster than larger. Circular DNA forms: supercoiled (fastest) > relaxed circular (slowest) > linearized (intermediate). DNA visualized by intercalating dye (ethidium bromide under UV, or SYBR Safe). DNA ladder provides molecular weight markers. Polyacrylamide gels (PAGE) used for higher resolution (<1000 bp) or single-nucleotide separation."
  },
  {
    id: 36,
    question: "CLIP-seq (crosslinking and immunoprecipitation followed by sequencing) identifies:",
    options: ["DNA regions bound by transcription factors", "RNA sequences bound by a specific RNA-binding protein (RBP) in vivo at nucleotide resolution", "Chromatin regions with specific histone modifications", "Protein complexes associated with specific mRNAs"],
    answer: 1,
    explanation: "CLIP-seq (and variants: PAR-CLIP, iCLIP, eCLIP): UV crosslinking in live cells covalently links RBPs to directly contacted RNA → immunoprecipitate with anti-RBP antibody → partially digest RNA with RNase → library prep from crosslinked RNA fragments → NGS. Identifies RBP binding sites at near-nucleotide resolution. Applications: map splicing regulator binding (e.g., NOVA, RBFOX, hnRNP A1), miRNA-Argonaute binding sites, m6A reader binding, lncRNA-protein interactions."
  },
  {
    id: 37,
    question: "The CUT&RUN and CUT&TAG techniques were developed as alternatives to ChIP-seq. Their key advantage is:",
    options: ["Require cell fixation and sonication like ChIP-seq", "Use unfixed nuclei and antibody-targeted MNase (CUT&RUN) or Tn5 (CUT&TAG) for in situ chromatin cleavage, requiring far fewer cells (100-1000 cells), lower background, and higher resolution than ChIP-seq", "Can only be applied to histone modifications, not transcription factors", "Require radioactive substrates for signal detection"],
    answer: 1,
    explanation: "CUT&RUN: antibody binds target in unfixed permeabilized nuclei → Protein A-MNase fusion cleaves adjacent DNA → released DNA fragments sequenced. CUT&TAG: Protein A-Tn5 transposase inserts adapters directly, enabling direct library prep. Advantages vs ChIP-seq: native chromatin (no crosslinking artifacts), lower cell input (~100 cells for CUT&TAG, enables single-cell), lower background, lower sequencing depth needed, higher signal-to-noise. Both now widely replace ChIP-seq for many applications."
  },
  {
    id: 38,
    question: "Ribosome profiling (Ribo-seq) monitors translation by:",
    options: ["Purifying polysomes and quantifying associated mRNAs by microarray", "Treating cells with translation inhibitors (cycloheximide/harringtonine) → nuclease digestion of unprotected RNA → isolating ribosome-protected footprints (~28-30 nt) → deep sequencing → mapping ribosome positions at codon resolution", "Fluorescently labeling nascent peptides with puromycin-dye conjugates", "Immunoprecipitating ribosomes and sequencing all associated mRNAs (RIP-seq)"],
    answer: 1,
    explanation: "Ribo-seq (ribosome profiling, Ingolia et al. 2009): flash-freeze cells to trap ribosomes → nuclease treatment → 80S monosome isolation → RNA extraction of ~28-30 nt ribosome footprints → library prep → deep sequencing. Allows: (1) Identification of translated ORFs (including small ORFs, uORFs); (2) Measurement of ribosome density = translation efficiency; (3) Codon-level ribosome elongation rates; (4) Translation of lncRNAs; (5) Identification of stress-induced translation changes. Triplet periodicity of reads confirms ribosomal footprints."
  },
  {
    id: 39,
    question: "In vitro transcription (IVT) using T7 RNA polymerase is widely used to produce:",
    options: ["Capped eukaryotic mRNAs only", "RNA molecules (mRNA, sgRNA, gRNAs, siRNAs, aptamers) from DNA templates containing T7 promoter sequence — critical for mRNA vaccine production and CRISPR guide RNA synthesis", "tRNAs with specific anticodon modifications", "Ribosomal RNA for in vitro translation systems"],
    answer: 1,
    explanation: "T7 RNA polymerase is a highly processive, promoter-specific RNA polymerase that efficiently transcribes RNA from DNA templates containing the T7 promoter. Used to produce: siRNAs (double-stranded from two templates), CRISPR guide RNAs (sgRNA for Cas9), mRNA vaccines (BNT162b2, mRNA-1273 use IVT mRNA with modified nucleotides), aptamers (SELEX), ribozymes, ncRNA for structural studies. IVT generates long transcripts (>10 kb for mRNA) with a polyadenylation tail added by template-encoded polyT or poly-A polymerase."
  },
  {
    id: 40,
    question: "Proteomics technique SILAC (Stable Isotope Labeling by Amino acids in Cell culture) works by:",
    options: ["Chemically tagging peptides after trypsin digestion with different mass tags", "Growing cells in media containing heavy isotope amino acids (13C/15N-Arg, Lys) vs light amino acids — heavy/light proteins mixed → same peptide pairs differ in mass → quantitative MS comparison without bias", "Separating proteins by isoelectric focusing before mass spec", "Using radioactive 35S-methionine for protein turnover measurement"],
    answer: 1,
    explanation: "SILAC: experimental cells cultured in 13C6/15N2-lysine and 13C6/15N4-arginine (heavy) → control cells in normal 12C/14N amino acids (light). After 5-7 doublings, all proteins incorporate heavy amino acids in experimental condition. Mix cells 1:1 → co-digest → MS. Every tryptic peptide appears as a doublet differing by 6-10 Da (heavy/light). Ratio of peak areas = protein abundance ratio. Zero sample handling bias. Used for: protein interaction quantification, phosphoproteomics, protein turnover (pulse-SILAC)."
  },
  {
    id: 41,
    question: "The Cre-loxP recombination system is used in conditional knockout mouse models. Cre recombinase catalyzes:",
    options: ["Random genomic deletions to create loss-of-function alleles", "Site-specific recombination between two loxP sites, excising the intervening DNA sequence (if sites in same orientation) — enabling tissue-specific and inducible gene knockout", "Integration of foreign DNA at random chromosomal sites", "Double-strand break repair using homologous recombination"],
    answer: 1,
    explanation: "Cre (tyrosine recombinase from phage P1) catalyzes reciprocal recombination between 34 bp loxP sites. Direct repeat orientation → excision of intervening sequence (most common use). Inverted orientation → inversion. Conditional knockout: target gene flanked by loxP sites (floxed) in mouse → breed with Cre mouse expressed under tissue-specific promoter (Alb-Cre for liver, Nestin-Cre for neural, Vav-Cre for hematopoietic). Inducible: CreERT2 (activated by tamoxifen). Other systems: Flp/FRT (Flp from yeast 2μ plasmid) and PhiC31/attB-attP."
  },
  {
    id: 42,
    question: "CLIP-based method eCLIP (enhanced CLIP) was developed because earlier CLIP methods had what limitation?",
    options: ["They could not be applied to nuclear RNA-binding proteins", "Low efficiency of ligation steps caused high background; eCLIP uses size-matched input controls, optimized ligation, and paired-end sequencing for better signal-to-noise and reproducibility", "They required intact cells and could not study purified complexes", "They could only detect cytoplasmic RBPs, not nuclear ones"],
    answer: 1,
    explanation: "eCLIP (Van Nostrand et al., 2016, part of ENCODE): improvements over iCLIP include: (1) Size-matched input control (SMInput) — RBP IP and size-matched total RNA processed identically, enabling subtraction of non-specific background; (2) Optimized ligation; (3) Paired-end sequencing; (4) Unique molecular identifiers (UMIs) to remove PCR duplicates. eCLIP has been applied to >200 RBPs as part of the ENCODE4 project, producing the largest public RBP binding site dataset."
  },
  {
    id: 43,
    question: "The 'omics cascade' in systems biology represents which hierarchy?",
    options: ["Genome → Transcriptome → Proteome → Metabolome (each layer influencing the next with feedback)", "Genome → Epigenome → Metagenome → Pharmacogenome", "Transcriptome → Genome → Proteome → Lipidome", "Metabolome → Proteome → Transcriptome → Genome (bottom-up)"],
    answer: 0,
    explanation: "The omics cascade: Genome (all genes) → Transcriptome (all RNAs expressed) → Proteome (all proteins) → Metabolome (all metabolites). Each layer adds regulatory information: the genome encodes potential, the transcriptome reflects current gene expression, the proteome reflects functional output, and the metabolome reflects the biochemical state. Additional layers: epigenome, phosphoproteome, glycome, lipidome. Multi-omics integration (MOFA, DIABLO, mixOmics) identifies cross-layer regulatory relationships."
  },
  {
    id: 44,
    question: "FACS (fluorescence-activated cell sorting) can purify rare cell populations. What is a key technical consideration for rare event sorting (<0.1% of events)?",
    options: ["Increasing flow rate to process more cells per second", "Reducing laser power to minimize fluorophore bleaching", "Pre-enrichment by negative depletion (magnetic bead depletion of abundant cells), high-speed sorting, and analysis of large numbers of events (>10^7 cells)", "Using only one fluorescence channel to simplify sorting decision"],
    answer: 2,
    explanation: "For rare event sorting (<0.1%): (1) Pre-enrichment — deplete abundant non-target cells (e.g., CD4/CD8 depletion to enrich rare HSCs); (2) High-speed sorters (BD Aria Fusion, Sony MA900) capable of 70,000+ events/sec; (3) Analyze sufficient events — for 0.01% target, need >10^7 total events for statistical confidence; (4) Use dead cell exclusion (DAPI/7-AAD); (5) Purity vs recovery trade-off — adjust yield/purity gate. Downstream analysis confirms purity."
  },
  {
    id: 45,
    question: "Spatial transcriptomics (e.g., Visium, MERFISH, Slide-seq) advances over conventional scRNA-seq by:",
    options: ["Providing higher sequencing depth per cell than scRNA-seq", "Preserving the spatial context of gene expression within tissues — revealing how cell types are organized, their neighborhoods, and spatially restricted gene expression patterns", "Sequencing at lower cost per cell than droplet-based scRNA-seq", "Providing protein expression data alongside transcriptomic data"],
    answer: 1,
    explanation: "Spatial transcriptomics: (1) Capture-based (10x Visium): tissue section on spatially barcoded oligodT array → mRNA capture → cDNA synthesis and library prep → sequencing → assign transcriptomes to spatial coordinates (~55 μm resolution); (2) Single-molecule imaging (MERFISH, seqFISH+): in situ hybridization with rounds of imaging → subcellular resolution for hundreds of genes; (3) Slide-seq2 (~10 μm resolution). Applications: tumor microenvironment architecture, brain region-specific gene expression (Allen Brain Atlas), developmental biology."
  },
  {
    id: 46,
    question: "Aptamers are single-stranded DNA or RNA molecules selected by SELEX to:",
    options: ["Catalyze specific biochemical reactions (ribozyme function)", "Bind specific target molecules (proteins, small molecules, cells) with high affinity and specificity through 3D structural folding", "Serve as primers in PCR amplification", "Encode proteins when translated by ribosomes"],
    answer: 1,
    explanation: "Aptamers are selected by SELEX (Systematic Evolution of Ligands by EXponential enrichment): random ssRNA/ssDNA library (~10^15 sequences) → incubate with target → isolate bound sequences → amplify (RT-PCR) → repeat for 8-15 cycles → sequence. Aptamers fold into 3D structures (stem-loops, G-quadruplexes) complementary to target. Properties: high affinity (Kd pM-nM), can be chemically modified (2'-F, 2'-OMe for nuclease resistance), non-immunogenic. Clinical: pegaptanib (anti-VEGF165 aptamer for AMD). Used in diagnostics (SELEX-based biosensors)."
  },
  {
    id: 47,
    question: "Whole exome sequencing (WES) captures and sequences which portion of the genome?",
    options: ["The entire genome at low coverage (~5x)", "The protein-coding exons (~1-2% of genome, ~22,000 genes, ~50 Mb) using hybridization capture", "Only the most highly expressed genes", "CpG islands and regulatory regions"],
    answer: 1,
    explanation: "WES uses hybridization capture (Agilent SureSelect, Twist Bioscience, IDT xGen): DNA library hybridized with biotinylated RNA baits tiling all exons → streptavidin pulldown → sequence. Captures ~50 Mb of exonic sequence at high depth (50-200x), covering ~1-2% of the genome but ~85% of disease-causing variants. Advantages vs WGS: lower cost, reduced data storage/analysis, higher depth per $. Limitations: misses regulatory variants, intronic mutations, structural variants in non-exonic regions."
  },
  {
    id: 48,
    question: "The Iso-seq (isoform sequencing using PacBio SMRT) enables which analysis?",
    options: ["Identification of all splice isoforms of all genes from full-length transcripts without assembly artifacts from short reads", "Single-cell transcriptomics from fresh tissue biopsies", "Direct methylation detection in RNA without chemical treatment", "Identification of protein-coding potential of lncRNAs"],
    answer: 0,
    explanation: "Iso-seq (PacBio SMRT long-read RNA sequencing): converts total/poly-A RNA to cDNA → PCR amplification → SMRT sequencing without fragmentation → full-length isoform reads (typically 1-10 kb, up to 15 kb). Captures complete splice isoforms without computational assembly from short reads (avoiding chimeric/incomplete isoform artifacts). Enables: discovery of novel isoforms, characterization of all transcripts per gene locus, identification of full-length alternatively spliced transcripts. Limitations: higher cost, lower throughput than Illumina RNA-seq."
  },
  {
    id: 49,
    question: "In next-generation sequencing, the 'library preparation' step involves which key steps?",
    options: ["Only PCR amplification of target regions", "DNA fragmentation → end repair → A-tailing → adapter ligation → size selection → PCR amplification (optional) → quality control", "Reverse transcription of all RNA to DNA", "Bisulfite conversion of methylated cytosines"],
    answer: 1,
    explanation: "NGS library prep (DNA): (1) Fragmentation — sonication (Covaris) or enzymatic (Tn5 tagmentation for ATAC-seq/CUT&TAG) to desired insert size (150-500 bp); (2) End repair — fill-in 5' overhangs, remove 3' extensions → blunt ends; (3) A-tailing — add 3' A overhang for T-overhang adapter ligation; (4) Adapter ligation — platform-specific adapters with barcodes/UMIs; (5) Size selection — AMPure XP beads; (6) PCR amplification — optional (PCR-free for low-input bias). RNA-seq requires prior reverse transcription."
  },
  {
    id: 50,
    question: "MultiSEQ and other DNA-barcoding methods in scRNA-seq (e.g., CITE-seq, Cell Hashing) allow:",
    options: ["Higher sequencing depth for individual cells in the library", "Multiplexing of multiple samples in one 10x Genomics run using oligo-conjugated antibodies or lipid-modified DNA barcodes on cells — reducing cost and batch effects by processing samples together", "Detection of DNA mutations alongside mRNA in single cells", "Spatial barcoding at single-cell resolution within tissues"],
    answer: 1,
    explanation: "Cell Hashing (MULTI-seq, TotalSeq): lipid-modified or antibody-conjugated DNA hashtag oligonucleotides (HTOs) label cells from different samples with unique barcodes before pooling → single 10x Genomics run processes multiple samples → computationally demultiplex by HTO identity. CITE-seq simultaneously reads HTOs (surface protein barcodes via antibody-oligo conjugates) and transcriptome. Benefits: reduces cost (amortize fixed costs), eliminates batch effects (samples processed together), identifies doublets (cells with >1 HTO = droplet doublets)."
  }
];
