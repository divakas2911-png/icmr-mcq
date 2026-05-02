const questions = [
  // ===== GENOMICS & NEXT-GENERATION SEQUENCING (Q1–Q15) =====
  {
    id: 1,
    question: "The Human Genome Project was completed in:",
    options: ["1990", "2000", "2003", "2010"],
    answer: 2,
    explanation: "The Human Genome Project (HGP) was formally declared complete in April 2003, although a working draft was published in 2001. The HGP revealed that the human genome contains ~3.2 billion bp and ~20,000–25,000 protein-coding genes, far fewer than initially expected."
  },
  {
    id: 2,
    question: "Sanger sequencing (chain-termination sequencing) uses:",
    options: ["Fluorescently labeled restriction enzymes", "Dideoxynucleotides (ddNTPs) that terminate DNA synthesis when incorporated", "RNA polymerase to copy DNA", "Hybridization to microarray probes"],
    answer: 1,
    explanation: "Sanger (dideoxy) sequencing uses 2',3'-dideoxynucleotides (ddNTPs) that lack the 3'-OH group. When incorporated by DNA polymerase, ddNTPs terminate chain extension. The resulting fragments of different lengths, separated by electrophoresis and detected by fluorescence, reveal the DNA sequence."
  },
  {
    id: 3,
    question: "Next-generation sequencing (NGS) differs from Sanger sequencing primarily by:",
    options: ["Using dideoxynucleotides for termination", "Massively parallel sequencing of millions of fragments simultaneously", "Sequencing only one strand of DNA", "Requiring gel electrophoresis for fragment separation"],
    answer: 1,
    explanation: "NGS (second-generation sequencing) performs massively parallel sequencing of millions of DNA fragments simultaneously, dramatically reducing cost and time compared to Sanger sequencing. Platforms include Illumina (sequencing by synthesis), Ion Torrent (pH-based detection), and others. NGS generates short reads (~150–300 bp) that are assembled computationally."
  },
  {
    id: 4,
    question: "Whole exome sequencing (WES) targets:",
    options: ["The entire genome (~3.2 Gb)", "Only the protein-coding regions (exons, ~1–2% of genome)", "Only non-coding regulatory regions", "Mitochondrial DNA only"],
    answer: 1,
    explanation: "Whole exome sequencing captures and sequences only the protein-coding exons (~180,000 exons, ~30 Mb or ~1–2% of the genome). WES is more cost-effective than whole genome sequencing for identifying disease-causing coding variants and is widely used in clinical genetics."
  },
  {
    id: 5,
    question: "A single nucleotide polymorphism (SNP) is:",
    options: ["A deletion of a large chromosomal segment", "A variation at a single nucleotide position present in >1% of the population", "A trinucleotide repeat expansion", "A chromosomal inversion"],
    answer: 1,
    explanation: "A SNP (pronounced 'snip') is a variation in a single nucleotide at a specific position in the genome that occurs in ≥1% of the population. There are ~10 million common SNPs in the human genome. SNPs serve as genetic markers in GWAS, forensics, pharmacogenomics, and population genetics studies."
  },
  {
    id: 6,
    question: "Copy number variants (CNVs) are defined as genomic segments:",
    options: ["Differing by a single nucleotide between individuals", "Whose copy number varies between individuals (deletions or duplications of ≥1 kb)", "Found only in repetitive sequences", "Present only on sex chromosomes"],
    answer: 1,
    explanation: "Copy number variants (CNVs) are structural variants where the number of copies of a genomic segment (≥1 kb) differs between individuals. CNVs arise from deletions, duplications, or more complex rearrangements. They account for a significant portion of human genetic variation and are associated with diseases (e.g., autism, schizophrenia, DiGeorge syndrome)."
  },
  {
    id: 7,
    question: "Comparative genomic hybridization (CGH) and its array version (aCGH) detect:",
    options: ["Point mutations and SNPs", "DNA copy number changes (gains and losses) across the genome", "Gene expression levels", "DNA methylation patterns"],
    answer: 1,
    explanation: "Array CGH (aCGH) compares the copy number of genomic sequences between a test and reference sample by competitive hybridization to microarrays. Gains (amplifications) and losses (deletions) in the test genome are detected by fluorescence ratio differences. It has resolution of ~5–100 kb for clinical chromosomal microarray analysis."
  },
  {
    id: 8,
    question: "The term 'synteny' in comparative genomics refers to:",
    options: ["Identical gene sequences between species", "Conservation of gene order and chromosomal arrangement between species", "Parallel mutation rates in different species", "Convergent evolution of similar functions"],
    answer: 1,
    explanation: "Synteny refers to the conservation of gene order and chromosomal organization between different species. Syntenic blocks represent chromosomal segments that have remained intact over evolutionary time. Comparative genomics exploits synteny to predict gene function and identify regulatory elements conserved across species."
  },
  {
    id: 9,
    question: "Long-read sequencing technologies (e.g., PacBio, Oxford Nanopore) have the advantage of:",
    options: ["Lower error rate than Illumina", "Sequencing reads of 10–100+ kb, resolving repetitive regions and structural variants", "Lower cost per base than short-read sequencing", "Not requiring library preparation"],
    answer: 1,
    explanation: "Third-generation long-read sequencing (PacBio SMRT, ONT nanopore) generates reads of 10–100+ kb (compared to ~150–300 bp for Illumina). Advantages include resolving complex repetitive regions, detecting structural variants, phasing haplotypes, sequencing through difficult regions, and direct detection of base modifications. Disadvantages include higher raw error rates and cost."
  },
  {
    id: 10,
    question: "The ENCODE project aimed to:",
    options: ["Sequence all human protein-coding genes", "Identify all functional elements in the human genome, including regulatory regions", "Create a reference proteome", "Map all SNPs in the human genome"],
    answer: 1,
    explanation: "The ENCODE (Encyclopedia of DNA Elements) project aimed to identify and catalog all functional elements in the human genome, including protein-coding genes, non-coding RNA genes, transcriptional regulatory elements (promoters, enhancers, insulators), and chromatin accessibility regions using high-throughput genomic assays."
  },
  {
    id: 11,
    question: "Bioinformatics tool BLAST (Basic Local Alignment Search Tool) is used for:",
    options: ["Protein crystallography", "Comparing nucleotide or amino acid sequences against databases to find similarities", "Predicting protein secondary structure only", "Assembling NGS reads into contigs"],
    answer: 1,
    explanation: "BLAST searches nucleotide (BLASTn) or protein (BLASTp, BLASTx) sequences against databases (e.g., GenBank, UniProt) to find regions of local similarity. It calculates statistical significance (E-value) to distinguish true homologues from chance matches. BLAST is among the most widely used bioinformatics tools."
  },
  {
    id: 12,
    question: "Phylogenetic trees are constructed to:",
    options: ["Determine protein function by homology", "Represent the evolutionary relationships among organisms or genes", "Calculate allele frequencies in populations", "Map chromosome positions of genes"],
    answer: 1,
    explanation: "Phylogenetic trees are diagrams representing evolutionary relationships (phylogeny) among organisms, genes, or proteins based on sequence similarity or other characters. Common methods include maximum likelihood, Bayesian inference, and neighbor-joining. They are used to study gene evolution, species divergence, and pathogen origins."
  },
  {
    id: 13,
    question: "The reference human genome (GRCh38/hg38) serves as:",
    options: ["A single individual's complete genome", "A consensus sequence representing the 'standard' human genome used for sequence alignment and variant calling", "The genome of the first person sequenced", "A database of all known human SNPs"],
    answer: 1,
    explanation: "The reference human genome (currently GRCh38/hg38) is a consensus haploid sequence assembled from multiple individuals. It serves as the standard coordinate system for mapping sequencing reads, calling variants, annotating genes, and communicating genomic positions. It is not the genome of a single person but a mosaic of multiple sources."
  },
  {
    id: 14,
    question: "Metagenomics refers to:",
    options: ["Sequencing the genome of a single organism in detail", "Sequencing and analyzing genetic material directly from environmental samples without culturing", "Comparing genomes between species", "Sequencing only the coding regions of genomes"],
    answer: 1,
    explanation: "Metagenomics is the direct sequencing of DNA from environmental samples (soil, ocean, gut, etc.) without prior culture. It provides a culture-independent snapshot of all organisms (bacteria, archaea, viruses, fungi) in a community, revealing microbial diversity, metabolic potential, and novel genes. The human gut microbiome has been extensively studied by metagenomics."
  },
  {
    id: 15,
    question: "Pan-genome analysis of a bacterial species reveals:",
    options: ["The sequence of only one representative strain", "The complete set of genes present in all strains (core genome) plus genes in some strains (accessory genome)", "Only antibiotic resistance genes", "The phylogenetic tree of the species"],
    answer: 1,
    explanation: "A pan-genome consists of: core genome (genes present in all strains), accessory/flexible genome (genes in some but not all strains, including unique genes). Pan-genome analysis reveals the genetic diversity within a species, the origin of pathogenicity islands, and the spread of antibiotic resistance genes."
  },

  // ===== RECOMBINANT DNA TECHNOLOGY (Q16–Q30) =====
  {
    id: 16,
    question: "A plasmid used as a cloning vector must have which essential features?",
    options: ["Origin of replication, selectable marker, and multiple cloning site (MCS)", "Promoter, ribosome binding site, and stop codon only", "Telomeres and centromere sequences", "Restriction sites at both ends only"],
    answer: 0,
    explanation: "Cloning vectors must have: (1) origin of replication (ori) — for autonomous replication in host cells, (2) selectable marker — to identify transformed cells (e.g., antibiotic resistance), (3) multiple cloning site (MCS/polylinker) — a cluster of unique restriction sites for insert ligation."
  },
  {
    id: 17,
    question: "Blue-white colony selection in cloning uses which principle?",
    options: ["Antibiotic resistance differential", "Disruption of the lacZ gene by insert DNA, so cells with insert produce white colonies", "Different colony morphologies based on plasmid size", "Fluorescence of GFP in transformed cells"],
    answer: 1,
    explanation: "Blue-white selection uses vectors with the lacZ-α fragment in the MCS. Cells expressing intact lacZ-α cleave X-gal substrate, producing blue colonies. Insert ligation into MCS disrupts lacZ-α, producing non-functional β-galactosidase — these cells form white colonies in the presence of IPTG and X-gal, distinguishing recombinant from non-recombinant clones."
  },
  {
    id: 18,
    question: "A cDNA library differs from a genomic library in that:",
    options: ["It contains only non-coding sequences", "It is made from mRNA via reverse transcription, so it contains only expressed genes without introns", "It represents the entire genome including regulatory sequences", "It is made from protein sequences"],
    answer: 1,
    explanation: "A cDNA library is made by reverse-transcribing mRNA into complementary DNA (cDNA) using reverse transcriptase. Since cDNA is derived from processed mRNA, it contains only exons (no introns, no promoters). The library represents genes expressed in that specific cell/tissue type at that time."
  },
  {
    id: 19,
    question: "The expression vector differs from a simple cloning vector by having:",
    options: ["A larger MCS", "Promoter, ribosome binding site, and terminator sequences to drive expression of the inserted gene", "Higher copy number in bacteria", "Integration sequences for chromosomal insertion"],
    answer: 1,
    explanation: "Expression vectors contain regulatory elements necessary for transcription and translation of the insert: promoter (constitutive or inducible, e.g., T7, lac), ribosome binding site (Shine-Dalgarno in bacteria), and transcription terminator. They may also include sequences for protein purification (His-tag, GST-tag) and secretion signals."
  },
  {
    id: 20,
    question: "Site-directed mutagenesis is used to:",
    options: ["Randomly mutate genes to create a mutation library", "Introduce specific, predetermined mutations at defined positions in a gene", "Delete entire genes from the genome", "Create chromosomal inversions"],
    answer: 1,
    explanation: "Site-directed mutagenesis introduces specific nucleotide changes at predetermined positions in a DNA sequence. Common methods include overlap extension PCR and QuikChange mutagenesis (using primers containing the desired mutation). It is used to study structure-function relationships of proteins and to engineer improved protein properties."
  },
  {
    id: 21,
    question: "Western blotting detects:",
    options: ["Specific DNA sequences", "Specific RNA sequences", "Specific proteins using antibodies", "Carbohydrate modifications of proteins"],
    answer: 2,
    explanation: "Western blotting (immunoblotting) detects specific proteins. Proteins are separated by SDS-PAGE by molecular weight, transferred to a membrane, blocked to prevent non-specific antibody binding, probed with primary antibody specific to the target protein, then a secondary antibody (conjugated to enzyme or fluorophore) for detection."
  },
  {
    id: 22,
    question: "Flow cytometry is used to:",
    options: ["Sequence DNA at high throughput", "Analyze individual cells for size, complexity, and fluorescence markers at high speed", "Measure protein-protein interactions in vitro", "Determine the three-dimensional structure of proteins"],
    answer: 1,
    explanation: "Flow cytometry passes cells single-file through a laser beam and detects scattered light (cell size, granularity) and fluorescence from labeled antibodies or dyes. It can analyze thousands of cells per second and simultaneously measure multiple parameters (immunophenotyping, cell cycle analysis, apoptosis, gene expression). FACS (fluorescence-activated cell sorting) can sort cells based on these parameters."
  },
  {
    id: 23,
    question: "The yeast two-hybrid system detects:",
    options: ["DNA-protein interactions", "Protein-protein interactions in vivo", "RNA-protein interactions", "Protein localization in cells"],
    answer: 1,
    explanation: "The yeast two-hybrid system detects protein-protein interactions in vivo. The 'bait' protein is fused to a DNA-binding domain, and the 'prey' protein is fused to a transcriptional activation domain. If bait and prey interact, the reconstituted transcription factor activates reporter gene expression (e.g., HIS3, lacZ), indicating an interaction."
  },
  {
    id: 24,
    question: "ELISA (Enzyme-Linked Immunosorbent Assay) is used to detect and quantify:",
    options: ["DNA sequences in samples", "Proteins or antigens using specific antibodies coupled to enzymes", "Chromosomal abnormalities", "mRNA expression levels"],
    answer: 1,
    explanation: "ELISA uses antibodies linked to enzymes (e.g., HRP, alkaline phosphatase) to detect and quantify proteins, antigens, or antibodies. In a sandwich ELISA: capture antibody binds antigen, detection antibody (enzyme-linked) is added, and substrate is converted to a colored product measured by absorbance. Used in serology, hormone assays, and drug testing."
  },
  {
    id: 25,
    question: "Quantitative PCR (qPCR) is primarily used to:",
    options: ["Sequence specific DNA regions", "Measure the amount of a specific DNA or RNA target in a sample in real time", "Detect protein expression levels", "Map restriction sites"],
    answer: 1,
    explanation: "qPCR (real-time PCR) measures the quantity of a specific nucleic acid in a sample during amplification using fluorescent dyes (SYBR Green) or probes (TaqMan). The cycle at which fluorescence crosses a threshold (Ct value) is inversely related to starting template quantity. RT-qPCR (with reverse transcription) quantifies mRNA expression."
  },
  {
    id: 26,
    question: "A BAC (Bacterial Artificial Chromosome) can carry inserts of approximately:",
    options: ["1–10 kb", "10–50 kb", "100–300 kb", "1–10 Mb"],
    answer: 2,
    explanation: "BACs (Bacterial Artificial Chromosomes) are based on the F plasmid (single copy, low number) and can stably carry inserts of 100–300 kb. Their high insert capacity and stability made them essential for the Human Genome Project. YACs (Yeast Artificial Chromosomes) carry even larger inserts (0.1–2 Mb)."
  },
  {
    id: 27,
    question: "In gel electrophoresis, DNA fragments migrate:",
    options: ["Toward the positive pole (anode), with smaller fragments migrating faster", "Toward the negative pole (cathode)", "At the same rate regardless of size", "Based on nucleotide composition"],
    answer: 0,
    explanation: "DNA is negatively charged (due to phosphate groups) and migrates toward the positive electrode (anode) in an electric field. In agarose gels, smaller DNA fragments migrate faster through the pores than larger fragments, allowing size separation. Ethidium bromide or SYBR Safe intercalates into DNA for visualization under UV light."
  },
  {
    id: 28,
    question: "Fluorescence in situ hybridization (FISH) is used to:",
    options: ["Sequence specific chromosomal regions", "Detect and localize specific DNA sequences on chromosomes using fluorescent probes", "Measure gene expression levels", "Identify protein-protein interactions"],
    answer: 1,
    explanation: "FISH uses fluorescently labeled DNA or RNA probes that hybridize to complementary sequences on chromosomes or in cells. It can detect chromosomal abnormalities (deletions, amplifications, translocations), gene locations, and is used clinically to diagnose conditions like DiGeorge syndrome (22q11 deletion), HER2 amplification, and BCR-ABL translocation."
  },
  {
    id: 29,
    question: "The Agrobacterium tumefaciens Ti plasmid is used in plant biotechnology to:",
    options: ["Introduce genes into mammalian cells", "Deliver T-DNA (transfer DNA) into plant cell chromosomes for stable transformation", "Clone large DNA inserts", "Produce recombinant proteins in bacteria"],
    answer: 1,
    explanation: "Agrobacterium tumefaciens naturally integrates its T-DNA (transfer DNA from the Ti plasmid) into plant nuclear DNA. Researchers replace tumor-causing T-DNA genes with genes of interest while retaining the transfer machinery. This system is the most widely used method for creating transgenic dicot plants."
  },
  {
    id: 30,
    question: "The protein expressed from a gene containing a His6-tag can be purified by:",
    options: ["Ion exchange chromatography on DEAE-cellulose", "Immobilized metal affinity chromatography (IMAC) using Ni²⁺-NTA resin", "Size exclusion chromatography", "Hydrophobic interaction chromatography"],
    answer: 1,
    explanation: "A hexahistidine (His6) tag at the N- or C-terminus of a recombinant protein binds with high affinity to immobilized metal ions (Ni²⁺, Co²⁺) on IMAC resin (Ni-NTA). Non-tagged proteins are washed away, and the His-tagged protein is eluted with imidazole (which competes for the metal binding). This allows rapid, one-step purification."
  },

  // ===== EPIGENOMICS & FUNCTIONAL GENOMICS (Q31–Q50) =====
  {
    id: 31,
    question: "ATAC-seq (Assay for Transposase-Accessible Chromatin using sequencing) measures:",
    options: ["DNA methylation genome-wide", "Chromatin accessibility — open (accessible) chromatin regions genome-wide", "Histone modification patterns", "Transcription factor binding"],
    answer: 1,
    explanation: "ATAC-seq uses a hyperactive Tn5 transposase that preferentially inserts sequencing adapters into accessible (nucleosome-free) chromatin regions. Sequencing the resulting fragments identifies open chromatin regions, which correspond to active regulatory elements (promoters, enhancers). ATAC-seq requires very few cells (~500–50,000)."
  },
  {
    id: 32,
    question: "Bisulfite sequencing is used to determine:",
    options: ["Histone modifications at specific loci", "DNA methylation at single-nucleotide resolution (5-methylcytosine detection)", "Nucleosome positioning", "Transcription factor binding sites"],
    answer: 1,
    explanation: "Bisulfite treatment converts unmethylated cytosines to uracil (read as thymine after PCR), while methylated cytosines (5mC) remain as cytosine. Sequencing after bisulfite conversion distinguishes methylated from unmethylated cytosines at single-nucleotide resolution. Whole-genome bisulfite sequencing (WGBS) provides a comprehensive DNA methylome map."
  },
  {
    id: 33,
    question: "Hi-C (chromosome conformation capture followed by sequencing) is used to study:",
    options: ["DNA replication timing", "Three-dimensional genome organization — chromatin loops, TADs (topologically associating domains)", "Gene expression at single-cell level", "Transposable element activity"],
    answer: 1,
    explanation: "Hi-C captures genome-wide chromatin interactions (3D genome organization). Cross-linked chromatin is digested, end-filled with biotinylated nucleotides, religated, and sequenced. The resulting contact maps reveal topologically associating domains (TADs), compartments (A/B), and enhancer-promoter loops that regulate gene expression."
  },
  {
    id: 34,
    question: "The term 'heterochromatin' refers to:",
    options: ["Actively transcribed, accessible chromatin", "Condensed, transcriptionally silent chromatin associated with histone H3K9me3 and H3K27me3", "DNA in the process of replication", "Chromatin at the nuclear pore complex"],
    answer: 1,
    explanation: "Heterochromatin is densely packed, transcriptionally inactive chromatin. Constitutive heterochromatin (pericentromeric, telomeric regions) is marked by H3K9me3 and HP1 proteins. Facultative heterochromatin (e.g., inactive X chromosome) is marked by H3K27me3 and Polycomb proteins. In contrast, euchromatin is decondensed and transcriptionally active."
  },
  {
    id: 35,
    question: "Imprinting control regions (ICRs) regulate genomic imprinting by:",
    options: ["Directly altering the DNA sequence of imprinted genes", "Being differentially methylated between maternal and paternal alleles to control expression of nearby genes", "Encoding the imprinted proteins directly", "Controlling chromosome segregation during meiosis"],
    answer: 1,
    explanation: "ICRs (also called differentially methylated regions, DMRs) are genomic regions with parent-of-origin specific DNA methylation established during gametogenesis and maintained after fertilization. Methylation at ICRs controls the expression of nearby imprinted genes (e.g., H19-IGF2 imprinting control region on chromosome 11)."
  },
  {
    id: 36,
    question: "FAIRE-seq (Formaldehyde-Assisted Isolation of Regulatory Elements) identifies:",
    options: ["Protein-binding DNA sequences", "Nucleosome-depleted regions (open chromatin) that contain regulatory elements", "Methylated CpG sites", "Transcription start sites"],
    answer: 1,
    explanation: "FAIRE-seq identifies nucleosome-depleted (open) chromatin regions. Chromatin is cross-linked with formaldehyde, sonicated, and phenol-chloroform extracted. Nucleosome-free (regulatory) DNA preferentially partitions to the aqueous phase and is sequenced. Like ATAC-seq, it maps active regulatory regions without the need for immunoprecipitation."
  },
  {
    id: 37,
    question: "Single-cell RNA sequencing (scRNA-seq) provides information about:",
    options: ["Average gene expression across thousands of cells in bulk", "Gene expression profiles of individual cells, revealing cell-to-cell variability and rare cell types", "Protein levels in single cells", "DNA methylation in individual cells"],
    answer: 1,
    explanation: "scRNA-seq quantifies the transcriptome of individual cells, revealing heterogeneity masked in bulk RNA-seq. It enables identification of rare cell types, cell state transitions, developmental trajectories, and tissue composition. Major platforms include 10x Genomics Chromium, Smart-seq2, and Drop-seq."
  },
  {
    id: 38,
    question: "The term 'epigenetic inheritance' means:",
    options: ["Inheritance of DNA sequence mutations", "Transmission of epigenetic marks (methylation, histone modifications) through cell division or across generations", "Horizontal gene transfer between bacteria", "Prion-like propagation of protein conformations only"],
    answer: 1,
    explanation: "Epigenetic inheritance is the transmission of gene expression states mediated by epigenetic marks (DNA methylation, histone modifications, chromatin structure) through mitotic (somatic) or meiotic (germline) cell divisions. Transgenerational epigenetic inheritance passes epigenetic marks across generations without changes in DNA sequence."
  },
  {
    id: 39,
    question: "m6A (N6-methyladenosine) modification of RNA is involved in:",
    options: ["Protecting RNA from nuclease degradation permanently", "Regulating mRNA stability, splicing, translation, and export — the most abundant internal mRNA modification", "Targeting RNA for mitochondrial import", "Stabilizing tRNA structure exclusively"],
    answer: 1,
    explanation: "m6A is the most abundant internal modification in eukaryotic mRNA. It is deposited by writer complexes (METTL3/METTL14), removed by erasers (FTO, ALKBH5), and recognized by readers (YTHDF proteins). m6A regulates mRNA stability, splicing, translation efficiency, and nuclear export, affecting development, stress response, and cancer."
  },
  {
    id: 40,
    question: "Transposable elements (transposons) make up approximately what fraction of the human genome?",
    options: ["<5%", "~20%", "~45%", "~70%"],
    answer: 2,
    explanation: "Transposable elements (TEs) constitute ~45% of the human genome. The most abundant are SINEs (Alu elements, ~11%), LINEs (L1 elements, ~20%), and LTR retrotransposons (~8%). Most are inactive fossils, but some L1 elements remain active. TEs have contributed to genome evolution, new gene formation, and regulatory element innovation."
  },
  {
    id: 41,
    question: "CRISPR interference (CRISPRi) uses a catalytically dead Cas9 (dCas9) fused to a repressor domain to:",
    options: ["Edit the DNA sequence at the target site", "Repress transcription of a target gene without altering the DNA sequence", "Activate transcription of a target gene", "Delete chromosomal regions"],
    answer: 1,
    explanation: "CRISPRi uses dCas9 (with D10A and H840A mutations eliminating nuclease activity) fused to transcriptional repressors (e.g., KRAB domain). Guided by sgRNA to a target promoter, dCas9-KRAB sterically blocks transcription and recruits heterochromatin machinery, silencing gene expression without DNA cutting or sequence alteration."
  },
  {
    id: 42,
    question: "Genome-wide association studies (GWAS) typically identify variants with small effect sizes. Which statistical threshold is conventionally used for significance?",
    options: ["p < 0.05", "p < 0.01", "p < 5 × 10⁻⁸", "p < 10⁻³"],
    answer: 2,
    explanation: "The conventional GWAS significance threshold is p < 5 × 10⁻⁸ (5 × 10⁻⁸), which corrects for testing ~1 million independent SNPs using a Bonferroni correction (0.05/1,000,000 ≈ 5 × 10⁻⁸). This stringent threshold minimizes false positives in large-scale multiple testing."
  },
  {
    id: 43,
    question: "Polygenic risk scores (PRS) aggregate:",
    options: ["The effects of a single high-impact mutation", "Weighted sum of many genetic variants (SNPs) to estimate an individual's genetic predisposition to a trait or disease", "Protein expression levels across tissues", "Epigenetic marks across the genome"],
    answer: 1,
    explanation: "Polygenic risk scores (PRS) are calculated by summing the risk alleles carried by an individual, weighted by their effect sizes from GWAS. PRS can quantify genetic risk for complex polygenic traits (e.g., coronary artery disease, type 2 diabetes, height). They have potential clinical utility for risk stratification and preventive medicine."
  },
  {
    id: 44,
    question: "The dark genome refers to:",
    options: ["Heterochromatic regions that are permanently silenced", "The ~98% of the genome not encoding proteins, including regulatory elements, non-coding RNAs, and sequences of unknown function", "Mitochondrial DNA", "Viral sequences integrated into the genome"],
    answer: 1,
    explanation: "The 'dark genome' informally refers to the ~98% of the human genome that does not encode proteins. This includes regulatory elements (promoters, enhancers, insulators), lncRNAs, miRNAs, repetitive elements, pseudogenes, and large stretches of unknown function. The ENCODE project revealed that much of this 'junk DNA' has biochemical activity."
  },
  {
    id: 45,
    question: "Pharmacogenomics studies:",
    options: ["The pharmacological properties of antibiotics", "How genetic variation affects individual drug responses (efficacy and toxicity)", "The synthesis of pharmaceutical compounds using microbes", "Drug metabolism in the liver exclusively"],
    answer: 1,
    explanation: "Pharmacogenomics studies how an individual's genetic makeup influences their response to drugs. Examples: CYP2D6 polymorphisms affecting codeine metabolism and toxicity; TPMT variants affecting thiopurine toxicity; HLA-B*5701 associated with abacavir hypersensitivity. Pharmacogenomics enables personalized medicine with optimized drug dosing."
  },
  {
    id: 46,
    question: "The 1000 Genomes Project aimed to:",
    options: ["Sequence 1000 complete plant genomes", "Create a catalogue of human genetic variation by sequencing >2500 individuals from multiple world populations", "Identify 1000 disease-causing mutations", "Sequence 1000 bacterial strains"],
    answer: 1,
    explanation: "The 1000 Genomes Project (2008–2015) sequenced >2500 individuals from 26 populations worldwide to create a comprehensive resource of human genetic variation, including SNPs, indels, and structural variants at >1% frequency. The data are freely available and widely used as a reference for GWAS, population genetics, and functional studies."
  },
  {
    id: 47,
    question: "Genome editing using base editors allows:",
    options: ["Cutting both strands of DNA at a target site", "Converting one base to another (e.g., C→T or A→G) at a specific site without double-strand breaks", "Inserting large DNA sequences at target sites", "Deleting entire chromosomal arms"],
    answer: 1,
    explanation: "Base editors (developed by David Liu's group) combine a dCas9 (or nickase Cas9) with a DNA base-modifying enzyme. CBEs (cytosine base editors) convert C→T (via deamination of cytosine to uracil); ABEs (adenine base editors) convert A→G. Base editing achieves precise single-nucleotide changes without DSBs or donor DNA template."
  },
  {
    id: 48,
    question: "Spatial transcriptomics measures:",
    options: ["Gene expression in specific cell types isolated by flow cytometry", "Gene expression while preserving spatial information about where in a tissue each transcript is located", "Protein expression at subcellular resolution", "DNA methylation in tissue sections"],
    answer: 1,
    explanation: "Spatial transcriptomics captures gene expression patterns while preserving spatial context within tissue sections. Technologies include 10x Visium (barcoded capture spots), seqFISH+, MERFISH, and Slide-seq. It enables mapping of cell types, gene expression gradients, and cell-cell communication within intact tissue architecture."
  },
  {
    id: 49,
    question: "Telomere length is associated with which biological process?",
    options: ["DNA repair capacity", "Cellular aging and senescence — shorter telomeres correlate with older biological age", "Protein synthesis rate", "Immune function only"],
    answer: 1,
    explanation: "Telomere shortening occurs with each cell division (end-replication problem). Critically short telomeres trigger DNA damage responses, leading to replicative senescence or apoptosis. Telomere length is considered a biomarker of biological aging. Diseases associated with short telomeres include dyskeratosis congenita and idiopathic pulmonary fibrosis."
  },
  {
    id: 50,
    question: "The human gut microbiome contains approximately how many microbial genes compared to human genes?",
    options: ["Equal number (~20,000)", "~10 times more", "~100 times more", "~500 times more"],
    answer: 2,
    explanation: "The human gut microbiome contains ~2–20 million microbial genes, approximately 100 times more than the ~20,000 human protein-coding genes. This vast metagenomic repertoire encodes metabolic functions (vitamin synthesis, short-chain fatty acid production, xenobiotic metabolism) not present in the human genome, making the gut microbiome a 'second genome'."
  },
]

export default questions
