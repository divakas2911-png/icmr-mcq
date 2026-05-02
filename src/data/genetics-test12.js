const questions = [
  {
    id: 1,
    question: "Type II restriction endonucleases are most useful in recombinant DNA technology because they:",
    options: ["Cut DNA at random sites generating variable fragment sizes", "Recognize specific palindromic sequences (4-8 bp) and cut within or adjacent to the recognition site, generating reproducible restriction patterns", "Require ATP for cleavage unlike other types", "Cut only single-stranded DNA for ligation efficiency"],
    answer: 1,
    explanation: "Type II restriction endonucleases recognize specific palindromic DNA sequences and cut at defined positions within or near the site. They require only Mg²⁺ and have no methylase or ATPase activity (unlike Types I and III). Examples: EcoRI (GAATTC), BamHI (GGATCC), HindIII (AAGCTT). Their site-specific cutting generates reproducible fragments essential for cloning, Southern blotting, and restriction mapping. Many generate 3' or 5' overhangs (sticky ends) facilitating directional ligation."
  },
  {
    id: 2,
    question: "The advantage of ligation with T4 DNA ligase using blunt-end ligation compared to sticky-end ligation is:",
    options: ["Higher ligation efficiency and lower background cloning", "Any two DNA fragments can be joined regardless of the restriction enzyme used, but with lower efficiency (~100-1000× less efficient than sticky-end ligation)", "Blunt-end ligation preserves the original restriction site for further cloning", "T4 DNA ligase cannot perform blunt-end ligation"],
    answer: 1,
    explanation: "Blunt-end ligation joins any two DNA fragments regardless of origin or how they were generated (PCR products, blunted sticky ends, etc.). However, blunt ends lack the 5' overhangs that facilitate intermolecular annealing, making ligation ~100-1000× less efficient. High DNA concentrations, high ligase concentration, and longer incubation compensate. PEG4000 (polyethylene glycol) is often added as a molecular crowding agent to improve blunt-end ligation efficiency."
  },
  {
    id: 3,
    question: "A plasmid cloning vector must contain which essential elements?",
    options: ["A eukaryotic promoter, introns, and polyadenylation signal", "Origin of replication (ori), selectable marker (antibiotic resistance gene), and multiple cloning site (MCS/polylinker)", "Telomeres, centromere, and viral replication origin", "Transposable element sequences for genome integration"],
    answer: 1,
    explanation: "Basic plasmid cloning vectors require: (1) Origin of replication (ori) — allows autonomous plasmid replication in host cells; (2) Selectable marker (e.g., ampicillin resistance gene AmpR, kanamycin resistance, lacZ for blue-white selection) — identifies transformed colonies; (3) Multiple cloning site (MCS/polylinker) — cluster of unique restriction sites for inserting foreign DNA. Additional features may include promoters for in vitro transcription, f1 origin for single-stranded phagemid production."
  },
  {
    id: 4,
    question: "Lambda (λ) phage is used as a cloning vector because it:",
    options: ["Integrates into the host chromosome permanently and replicates with it", "Can accept foreign DNA inserts of 8-24 kb when the phage's dispensable central region is replaced, enabling construction of genomic libraries with large inserts", "Has a small genome (4 kb) allowing large inserts without packaging constraints", "Provides high-level protein expression from its strong PL/PR promoters only in E. coli"],
    answer: 1,
    explanation: "Lambda phage vectors can accommodate larger inserts (8-24 kb) than plasmids (~4-8 kb). The phage genome (~48 kb) has a central non-essential region (stuffer) that can be replaced by foreign DNA. Packaging (in vitro lambda packaging extracts) requires DNA of 38-52 kb (headful packaging), providing size selection. Lambda vectors are used as: replacement vectors (large genomic inserts), insertion vectors (smaller cDNA inserts), and expression vectors (λgt11)."
  },
  {
    id: 5,
    question: "Cosmid vectors combine features of plasmids and lambda phage. They are used to clone:",
    options: ["Small PCR products (100-500 bp)", "Very large DNA fragments (35-45 kb) using the lambda cos sites for in vitro packaging into phage heads", "cDNA libraries with small insert sizes", "Circular chromosomes from organelles"],
    answer: 1,
    explanation: "Cosmids contain: plasmid sequences (ori, selectable marker) + lambda phage cos sites (required for in vitro packaging). They accept inserts of 35-45 kb — larger than lambda vectors (8-24 kb) but smaller than BACs/YACs. Cosmids are packaged into phage heads (requiring cos-to-cos distance of ~40-50 kb) and transduced into bacteria. They were important for human genome library construction before BAC/YAC vectors became dominant."
  },
  {
    id: 6,
    question: "Bacterial Artificial Chromosomes (BACs) are preferred for genomic library construction because:",
    options: ["They replicate in multiple copies like plasmids for high yield", "They can maintain very large inserts (100-300 kb) stably with low chimeric clone frequency, based on the E. coli F-plasmid single-copy maintenance system", "They use autonomous replication sequences (ARS) from yeast for high-fidelity replication", "They do not require antibiotic selection for maintenance in host bacteria"],
    answer: 1,
    explanation: "BACs are derived from the F-plasmid (fertility factor) of E. coli, which naturally maintains at 1-2 copies per cell through its rigorous partition system (parABS). This single-copy maintenance prevents rearrangements and chimerism common in high-copy vectors. BACs accept 100-300 kb inserts with high stability. BAC libraries were essential for the Human Genome Project (shotgun sequencing of BAC contigs). They are propagated in bacteria, unlike YACs (maintained in yeast)."
  },
  {
    id: 7,
    question: "In conventional PCR, the purpose of the denaturation step at 94-98°C is to:",
    options: ["Activate the thermostable Taq DNA polymerase", "Separate the double-stranded DNA template into single strands by breaking hydrogen bonds between base pairs, allowing primer annealing", "Allow primer extension by lowering the melting temperature of primers", "Denature the primer-template hybrid to increase specificity"],
    answer: 1,
    explanation: "PCR consists of 3 temperature-controlled steps: (1) Denaturation (94-98°C) — breaks hydrogen bonds (and hydrophobic stacking) between DNA strands, separating dsDNA into ssDNA templates; (2) Annealing (50-65°C) — primers bind to complementary single-stranded templates; (3) Extension (72°C) — Taq polymerase (thermostable, optimum at 72°C) extends primers in 5'→3' direction. Typically 25-35 cycles. The exponential amplification doubles target with each cycle (theoretically 2ⁿ copies after n cycles)."
  },
  {
    id: 8,
    question: "Reverse transcription PCR (RT-PCR) is used to:",
    options: ["Amplify DNA without RNA contamination", "Convert RNA (mRNA) into complementary DNA (cDNA) using reverse transcriptase, followed by PCR amplification to study gene expression at the mRNA level", "Identify promoter regions upstream of genes by working in reverse direction", "Amplify genomic DNA from very small quantities of cells"],
    answer: 1,
    explanation: "RT-PCR: (1) mRNA is reverse transcribed into cDNA by reverse transcriptase (MMLV-RT or AMV-RT) using oligo(dT), random hexamers, or gene-specific primers; (2) cDNA is amplified by standard PCR. Applications: detecting gene expression, splicing patterns, viral RNA (HIV, SARS-CoV-2 diagnosis), generating cDNA libraries. Qualitative RT-PCR detects expression; qRT-PCR quantifies mRNA levels. Important distinction: RT-PCR is gene expression analysis, not DNA analysis."
  },
  {
    id: 9,
    question: "In quantitative real-time PCR (qPCR), the 'Ct value' (cycle threshold) represents:",
    options: ["The total number of PCR cycles run in the reaction", "The cycle number at which fluorescence exceeds the background threshold, inversely proportional to the initial template concentration", "The efficiency of the PCR reaction as a percentage", "The melting temperature of the PCR amplicon"],
    answer: 1,
    explanation: "Ct (cycle threshold) is the cycle number where the fluorescence signal crosses the predetermined threshold (typically set above background, in the exponential amplification phase). Lower Ct = more initial template (higher mRNA/DNA copy number). ΔCt method: Ct(gene of interest) - Ct(reference gene) = ΔCt. ΔΔCt = ΔCt(sample) - ΔCt(control). Fold change = 2^(-ΔΔCt). Each ~3.3 cycle difference = 10-fold difference in template (with 100% efficiency)."
  },
  {
    id: 10,
    question: "Digital PCR (dPCR) differs from qPCR in that it:",
    options: ["Uses digital readout of gel electrophoresis bands instead of fluorescent probes", "Partitions the PCR reaction into thousands of nanoliter droplets (ddPCR) or chambers, performs end-point PCR in each partition, and counts positive partitions using Poisson statistics to calculate absolute copy number", "Requires no thermocycler since it uses digital temperature control", "Is only applicable to DNA, not RNA targets"],
    answer: 1,
    explanation: "Digital PCR (dPCR), especially droplet digital PCR (ddPCR), partitions the reaction into ~20,000 droplets (water-in-oil emulsion). Each droplet undergoes independent endpoint PCR — partitions with target DNA are positive (fluorescent); without are negative. Poisson statistics determine absolute molecule count from the ratio of positive to total partitions. dPCR is more accurate and sensitive than qPCR (no standard curve needed), detects rare mutations (1 in 10,000 copies), and quantifies CNVs precisely."
  },
  {
    id: 11,
    question: "Loop-mediated isothermal amplification (LAMP) differs from conventional PCR in that:",
    options: ["LAMP requires two primers instead of PCR's four", "LAMP uses Bst DNA polymerase and amplifies DNA at a constant temperature (60-65°C) with 4-6 primers generating large quantities of product in 30-60 min, without a thermocycler", "LAMP amplifies RNA directly without reverse transcription", "LAMP is less sensitive than PCR but more specific"],
    answer: 1,
    explanation: "LAMP (Loop-Mediated Isothermal Amplification) characteristics: (1) Isothermal (60-65°C) — no thermocycler needed; (2) 4-6 primers (FIP, BIP, F3, B3, ±loop primers) recognizing 6-8 distinct target regions — extremely high specificity; (3) Bst DNA polymerase with strand displacement activity; (4) High sensitivity (~10 copies); (5) Generates large amounts of product (turbid/gel-visible); (6) Can be visualized by turbidity, fluorescent dye, or colorimetric indicator. Used for point-of-care diagnostics (COVID-19, TB, dengue)."
  },
  {
    id: 12,
    question: "The Sanger dideoxy chain termination sequencing method uses ddNTPs (dideoxyribonucleoside triphosphates) because:",
    options: ["ddNTPs are incorporated preferentially over dNTPs at all positions", "ddNTPs lack the 3'-OH group, so their incorporation terminates chain extension; the ratio of ddNTPs to dNTPs produces random termination at every position of that nucleotide throughout the template", "ddNTPs emit fluorescence when incorporated, enabling direct detection", "ddNTPs are cheaper than dNTPs for high-throughput sequencing"],
    answer: 1,
    explanation: "Sanger sequencing: A DNA polymerase extends a primer on a single-stranded template using a mixture of dNTPs (for extension) and a small fraction of ddNTPs (ddATP, ddCTP, ddGTP, ddTTP, each with different fluorescent label). When a ddNTP is incorporated (lacking 3'-OH), extension stops. This generates a nested set of fragments terminating at every position. Capillary electrophoresis separates by size; fluorescence detector reads sequence. Read length ~700-1000 bp, accuracy ~99.99%."
  },
  {
    id: 13,
    question: "CRISPR-Cas9 creates double-strand breaks (DSBs) in DNA. The guide RNA (sgRNA) directs Cas9 to the target by:",
    options: ["Encoding the Cas9 protein with target-specific binding domains", "Watson-Crick base pairing between the ~20 nt spacer sequence in the sgRNA and the complementary DNA strand adjacent to the PAM (NGG for SpCas9)", "Binding the PAM sequence directly with protein-protein interactions, while Cas9 recognizes the target", "Methylating the target DNA to create a recognition site for Cas9"],
    answer: 1,
    explanation: "CRISPR-Cas9 mechanism: (1) sgRNA (single guide RNA = crRNA + tracrRNA) contains a ~20 nt spacer complementary to the target; (2) Cas9-sgRNA complex scans DNA for PAM sequence (5'-NGG-3' for SpCas9 from S. pyogenes); (3) PAM recognition triggers R-loop formation (sgRNA displaces non-template strand, base-pairs with template strand); (4) Both Cas9 nuclease domains (RuvC + HNH) create blunt DSB 3 bp upstream of PAM; (5) DSB repaired by NHEJ (indels) or HDR (precise editing with donor template)."
  },
  {
    id: 14,
    question: "Base editing, developed by David Liu's lab, differs from standard CRISPR-Cas9 in that:",
    options: ["Base editing uses a different Cas protein (Cas12a) that creates staggered cuts", "Base editing uses a catalytically impaired Cas9 (nCas9 or dCas9) fused to a deaminase enzyme, enabling direct C-to-T (CBE) or A-to-G (ABE) conversion without DSBs or HDR", "Base editing can only be used in non-dividing cells", "Base editing requires a DNA donor template to insert the corrected sequence"],
    answer: 1,
    explanation: "Base editors (BEs) make precise single-nucleotide changes without DSBs: (1) CBE (Cytosine Base Editor) — nCas9 + cytidine deaminase (APOBEC) converts C•G to U•G (then repaired to T•A) within a 4-8 nt editing window; (2) ABE (Adenine Base Editor) — nCas9 + evolved adenine deaminase (ecTadA) converts A•T to I•T (then repaired to G•C). No DSB means no DSB-induced NHEJ indels, making BEs safer for therapeutics. ABE8e can correct ~47% of known pathogenic point mutations."
  },
  {
    id: 15,
    question: "Prime editing, another CRISPR-based technology, uses a 'pegRNA' that contains:",
    options: ["Only the spacer sequence complementary to the target, identical to standard sgRNA", "A spacer (targeting Cas9), primer binding site (PBS) that anneals to the nicked strand, and a reverse transcriptase template (RTT) encoding the desired edit", "A donor DNA template packaged with the pegRNA for HDR-mediated editing", "Two sgRNAs that work together to create paired nicks"],
    answer: 1,
    explanation: "Prime editing system (PE): (1) PE protein = nCas9 (nickase, cuts non-template strand) + reverse transcriptase (M-MLV RT); (2) pegRNA (prime editing guide RNA) = spacer + primer binding site (PBS, anneals to nicked non-template strand) + reverse transcriptase template (RTT, encodes the desired edit); (3) Nicked strand anneals to PBS; (4) RT copies RTT to create 3' flap with edit; (5) 5' flap is removed; (6) edited 3' flap is ligated in. Can install all 12 point mutations, small insertions/deletions without DSBs."
  },
  {
    id: 16,
    question: "Zinc finger nucleases (ZFNs) and TALENs were predecessors to CRISPR for genome editing. Their key limitation compared to CRISPR is:",
    options: ["ZFNs and TALENs cannot create double-strand breaks in DNA", "Each new DNA target requires engineering a new protein (ZF domain or TALE array), making them time-consuming, expensive, and technically challenging to design compared to simply changing the 20 nt spacer in a guide RNA", "ZFNs and TALENs can only be used in bacteria", "They have higher off-target rates than CRISPR-Cas9"],
    answer: 1,
    explanation: "ZFNs (zinc finger nucleases fused to FokI endonuclease) and TALENs (TALE DNA-binding domains fused to FokI) require protein engineering for each new target: ZFs use a code of amino acids for trinucleotide recognition; TALEs use a code of RVD repeats for mononucleotide recognition. Both require significant expertise in protein design, expression, and functional testing (~weeks-months). CRISPR requires only changing 20 nt in a RNA sequence — a PCR-like synthesis process taking ~days. CRISPR democratized genome editing."
  },
  {
    id: 17,
    question: "RNA interference (RNAi) using synthetic siRNA therapeutics works by:",
    options: ["Inserting a corrective gene sequence to replace the mutated gene", "Loading synthetic 21-23 nt dsRNA (siRNA) into RISC, where the antisense guide strand directs AGO2-mediated cleavage of the target mRNA, silencing gene expression", "Editing the DNA sequence of the target gene directly in the nucleus", "Blocking the promoter of the target gene with antisense RNA"],
    answer: 1,
    explanation: "siRNA therapeutics (e.g., Patisiran/Onpattro for transthyretin amyloidosis — first approved RNAi drug): synthetic 21-23 bp dsRNA with 2 nt 3' overhangs is delivered to hepatocytes (LNP delivery). The antisense strand loads into RISC/AGO2, base-pairs with target mRNA, and AGO2 cleaves the mRNA. This silences disease-causing proteins. Advantages: any gene targetable (no protein-binding required), potent and durable silencing. Challenge: delivery to extrahepatic tissues."
  },
  {
    id: 18,
    question: "Antisense oligonucleotide (ASO) therapy for diseases like spinal muscular atrophy (SMA) using nusinersen works by:",
    options: ["Introducing the SMN1 gene via viral vector", "Targeting the ISS-N1 (intronic splicing silencer) in the SMN2 pre-mRNA with a complementary ASO, blocking hnRNP A1/A2 binding and promoting exon 7 inclusion to produce full-length functional SMN protein", "Knocking down the SMN2 mRNA to increase SMN1 expression", "Introducing siRNA to silence the SMN2-specific isoform"],
    answer: 1,
    explanation: "SMA is caused by SMN1 deletion; SMN2 (near-identical paralog) normally skips exon 7 (due to ISS-N1, an intronic splicing silencer), producing truncated non-functional SMN. Nusinersen (Spinraza) is a 2'MOE-modified ASO that binds ISS-N1, blocking hnRNP A1/A2 binding and promoting U1 snRNP recruitment → exon 7 inclusion → functional full-length SMN2 protein. This splicing correction treats SMA. First ASO drug for a neurological disease (intrathecal delivery). Risdiplam is a small molecule with the same mechanism."
  },
  {
    id: 19,
    question: "Southern blotting detects specific DNA sequences by:",
    options: ["Hybridizing a labeled RNA probe to RNA molecules separated on a gel", "Separating DNA fragments by gel electrophoresis, transferring to a membrane, and hybridizing with a labeled DNA or RNA probe specific for the target sequence", "Hybridizing antibodies to DNA sequences on a nitrocellulose membrane", "Amplifying specific sequences from a genomic DNA library using PCR probes"],
    answer: 1,
    explanation: "Southern blotting (E.M. Southern, 1975): (1) Genomic DNA digested with restriction enzymes; (2) Fragments separated by agarose gel electrophoresis; (3) Denatured and transferred to nitrocellulose/nylon membrane (capillary, vacuum, or electroblotting); (4) Membrane hybridized with labeled probe (radioactive ³²P or chemiluminescent); (5) Detected by autoradiography/imaging. Applications: detecting specific genes, restriction fragment length polymorphisms (RFLPs), trinucleotide repeat disorders (Southern blot is gold standard for FMR1 repeat sizing)."
  },
  {
    id: 20,
    question: "In gel electrophoresis of nucleic acids, smaller DNA fragments migrate faster because:",
    options: ["Smaller fragments have greater charge density per unit mass", "DNA migrates through agarose gel as a random coil; smaller fragments have less frictional resistance and move more quickly through the gel matrix toward the positive electrode", "Smaller fragments bind ethidium bromide more efficiently, making them more visible", "The gel acts as a size-selective membrane allowing smaller fragments through first"],
    answer: 1,
    explanation: "In agarose gel electrophoresis, DNA migrates from negative (cathode) to positive (anode) electrode because of its uniform negative charge (phosphate backbone). All DNA has the same charge:mass ratio (~2 negative charges per bp), so they would migrate at the same rate in free solution. The gel matrix provides size-based separation: smaller molecules experience less frictional resistance and migrate faster. Migration rate is proportional to log(size) within a range, allowing size estimation using DNA ladders."
  },
  {
    id: 21,
    question: "Two-dimensional gel electrophoresis (2D-PAGE) separates proteins by:",
    options: ["Molecular weight in the first dimension and antibody reactivity in the second dimension", "Isoelectric focusing (IEF, by charge/pI) in the first dimension and SDS-PAGE (by molecular weight) in the second dimension", "Native charge in the first dimension and molecular weight in the second dimension", "Molecular weight in both dimensions using different gel concentrations"],
    answer: 1,
    explanation: "2D-PAGE separates proteins by two independent properties: (1) First dimension: isoelectric focusing (IEF) using pH gradient gel strips — proteins migrate until they reach their pI (isoelectric point, no net charge); (2) Second dimension: SDS-PAGE — proteins denatured/uniformly negatively charged by SDS migrate by molecular weight. This combination resolves thousands of proteins. Spots are identified by MS (mass spectrometry). Used in proteomics to compare protein expression between samples (2D-DIGE uses fluorescent dyes)."
  },
  {
    id: 22,
    question: "Chromatin immunoprecipitation sequencing (ChIP-seq) is used to map:",
    options: ["The sequence of all expressed genes in a cell type", "The genome-wide binding sites of specific proteins (transcription factors, histones) by immunoprecipitating chromatin with protein-specific antibodies and sequencing associated DNA", "The methylation status of all CpG sites in the genome", "RNA-protein interactions throughout the transcriptome"],
    answer: 1,
    explanation: "ChIP-seq workflow: (1) Crosslink protein-DNA in living cells (formaldehyde); (2) Shear chromatin by sonication/MNase digestion; (3) Immunoprecipitate with antibody specific to protein of interest (TF, histone mark, RNA Pol II); (4) Reverse crosslinks; (5) Sequence co-precipitated DNA fragments; (6) Map reads to genome — peaks indicate protein binding sites. ChIP-seq creates genome-wide maps of TF occupancy, enhancers (H3K4me1/H3K27ac), active promoters (H3K4me3/H3K27ac), and Pol II distribution."
  },
  {
    id: 23,
    question: "The Gateway cloning system (Thermo Fisher) uses site-specific recombination from bacteriophage lambda instead of restriction enzymes. Its main advantage is:",
    options: ["Requiring only a single enzyme (Topoisomerase I) for ligation", "Enabling rapid, directional cloning of PCR products into any of hundreds of compatible destination vectors using the same entry clone, without gel purification or multiple restriction digests", "Generating only blunt-ended ligation for higher fidelity", "Being cheaper than conventional restriction enzyme cloning"],
    answer: 1,
    explanation: "Gateway cloning uses phage lambda recombinases (Int, Xis, IHF) operating on att recombination sites (attB × attP → attL × attR). A PCR product with flanking attB sites recombines with an attP-containing donor vector (BP reaction → entry clone). The entry clone is then transferred to any attR-containing destination vector (LR reaction → expression clone). The system enables rapid, directional sub-cloning of the same entry clone into vectors for E. coli expression, mammalian expression, yeast two-hybrid, RNAi, etc."
  },
  {
    id: 24,
    question: "A cDNA library differs from a genomic library in that:",
    options: ["A cDNA library contains random genomic DNA fragments including introns; a genomic library contains only exons", "A cDNA library is synthesized from mRNA (via reverse transcription) and represents only the expressed genes of a particular cell type at a specific time; a genomic library contains all chromosomal DNA including introns and regulatory regions", "A cDNA library cannot be used to clone large genes", "A cDNA library is maintained in eukaryotic cells; a genomic library is maintained in bacteria"],
    answer: 1,
    explanation: "cDNA library: mRNA → first-strand cDNA (reverse transcriptase + oligo-dT primer) → second-strand cDNA (DNA Pol I) → double-stranded cDNA inserted into vector. Represents only expressed genes in that cell type at that time; no introns, no promoters. Genomic library: chromosomal DNA partially digested (Sau3AI), fragments inserted in lambda/cosmid/BAC. Contains entire genome (exons + introns + regulatory regions + repetitive DNA). Genomic library is needed for studying gene structure; cDNA library for gene expression."
  },
  {
    id: 25,
    question: "SELEX (Systematic Evolution of Ligands by EXponential enrichment) is used to:",
    options: ["Select for high-expression E. coli strains for protein production", "Select RNA or DNA aptamers with high affinity for specific target molecules through iterative rounds of binding, partitioning, and PCR amplification", "Evolve enzymes with improved catalytic activity through directed evolution", "Screen libraries of small molecules for drug candidates"],
    answer: 1,
    explanation: "SELEX identifies aptamers — short, single-stranded RNA or DNA oligonucleotides that bind specific targets (proteins, small molecules, cells) with high affinity and specificity. Process: (1) random library of 10^13-10^15 sequences; (2) incubate with target; (3) partition bound from unbound; (4) amplify bound sequences by PCR/RT-PCR; (5) repeat 8-15 cycles. Aptamers fold into 3D structures (hairpins, G-quadruplexes) complementary to targets. Pegaptanib (anti-VEGF aptamer) is an FDA-approved drug for macular degeneration."
  },
  {
    id: 26,
    question: "The yeast two-hybrid (Y2H) system identifies protein-protein interactions by:",
    options: ["Using FRET between fluorescently labeled proteins in live cells", "Splitting a transcriptional activator into a DNA-binding domain (DBD) fused to bait protein and an activation domain (AD) fused to prey protein; interaction of bait and prey reconstitutes functional transcription factor activating reporter genes", "Co-immunoprecipitation followed by Western blotting", "Proximity ligation assay using DNA-conjugated antibodies"],
    answer: 1,
    explanation: "Yeast two-hybrid system (Fields & Song 1989): (1) Bait protein fused to Gal4-DBD (DNA-binding domain); (2) Library of prey proteins fused to Gal4-AD (activation domain); (3) Only when bait-prey interact does the Gal4-DBD+Gal4-AD reconstitute, activating reporter genes (HIS3, ADE2, lacZ) allowing yeast growth on selective media. Y2H screens large libraries for novel interactors. Limitations: false positives (autoactivators), false negatives (need nuclear localization), and cannot detect interactions requiring post-translational modifications."
  },
  {
    id: 27,
    question: "Chromatin accessibility assays like ATAC-seq (Assay for Transposase-Accessible Chromatin with sequencing) identify:",
    options: ["Histone methylation patterns at gene promoters", "Open chromatin regions (nucleosome-free regions) where regulatory proteins can bind, using Tn5 transposase to insert sequencing adapters preferentially into accessible DNA", "The 3D chromatin conformation and enhancer-promoter loops", "RNA Pol II pausing sites throughout the genome"],
    answer: 1,
    explanation: "ATAC-seq uses a hyperactive Tn5 transposase that preferentially inserts sequencing adapters (tagmentation) into nucleosome-free, accessible chromatin regions. After PCR amplification and sequencing, regions with high read density represent open chromatin (active regulatory elements — promoters, enhancers, CTCF sites). ATAC-seq requires only ~50,000 cells (vs. millions for DNase-seq), works on fresh/frozen tissue, and single-cell ATAC-seq (scATAC-seq) maps chromatin accessibility in individual cells."
  },
  {
    id: 28,
    question: "Hi-C (a 3D genome conformation capture technique) is used to study:",
    options: ["Histone modification patterns across the genome", "Genome-wide chromosome conformation by ligating DNA in close proximity after formaldehyde crosslinking and proximity ligation, mapping all pairwise chromatin interactions simultaneously", "RNA-DNA hybrid (R-loop) formation throughout the genome", "DNA replication timing along chromosomes"],
    answer: 1,
    explanation: "Hi-C (Lieberman-Aiden 2009): (1) Crosslink chromatin with formaldehyde; (2) Digest with restriction enzyme; (3) Fill 5' overhangs with biotin-labeled dCTP; (4) Blunt-end ligation (joining DNA ends in close proximity); (5) Purify + enrich biotinylated ligation junctions on streptavidin beads; (6) Sequencing. Paired-end reads represent two genomic loci that were in spatial proximity. Hi-C maps topologically associating domains (TADs), compartments (A/B), and CTCF loops. Reveals 3D genome organization important for gene regulation."
  },
  {
    id: 29,
    question: "Recombinant protein production in E. coli often uses T7 RNA polymerase-driven expression systems (e.g., pET vectors). The advantage of T7 promoter over native E. coli promoters is:",
    options: ["T7 RNA Pol is slower and more accurate than E. coli RNA Pol", "T7 RNA Pol is ~5-8× faster than E. coli RNA Pol and highly specific for T7 promoters, enabling very high levels of recombinant protein expression (up to 50% of total cell protein) with tight induction control", "T7 promoters are active in both prokaryotes and eukaryotes", "T7 RNA Pol does not require sigma factors or promoter clearance for initiation"],
    answer: 1,
    explanation: "T7 expression system: T7 RNA Pol (from phage T7) is highly processive, ~5-8× faster than E. coli RNAP, and exclusively recognizes T7 promoters. In DE3 strains, T7 RNAP is under IPTG-inducible lacUV5 control in the E. coli chromosome. IPTG induction → T7 RNAP expression → high-level transcription of T7 promoter-driven inserts. The combination of fast Pol and strong promoter produces very high protein yields. T7 lysozyme (pLys plasmid) reduces basal expression for toxic proteins."
  },
  {
    id: 30,
    question: "The CRISPR interference (CRISPRi) system uses dCas9 (catalytically dead Cas9) to:",
    options: ["Precisely edit DNA sequences without creating DSBs", "Repress gene expression by sterically blocking RNA Pol II progression or blocking transcription factor binding at promoters when targeted to promoter regions, often fused to a KRAB repressor domain", "Activate gene expression from silenced chromatin", "Deliver genes to specific genomic loci via HDR"],
    answer: 1,
    explanation: "CRISPRi uses dCas9 (both RuvC and HNH domains mutated — no nuclease activity) targeted to gene promoters. dCas9 alone can sterically block RNA Pol or TF binding, reducing transcription. dCas9-KRAB fusion (most effective) recruits KAP1/TRIM28, which recruits NuRD/SETDB1 to deposit repressive H3K9me3 marks and DNA methylation. CRISPRi enables reversible, titratable gene repression (unlike gene knockout). CRISPRa (dCas9-VP64, dCas9-SAM, dCas9-VPR) activates gene expression."
  },
  {
    id: 31,
    question: "The most critical safety consideration for adeno-associated virus (AAV) gene therapy vectors compared to lentiviral vectors is:",
    options: ["AAV integrates randomly into the host genome at higher frequency than lentiviruses", "Lentiviral vectors integrate into the host genome (risk of insertional mutagenesis/proto-oncogene activation); AAV predominantly remains episomal (non-integrating), reducing insertional mutagenesis risk, though integration near AAVS1 site does occur at low frequency", "AAV has larger cargo capacity than lentiviral vectors", "AAV vectors can infect only dividing cells unlike lentiviruses"],
    answer: 1,
    explanation: "Lentiviral vectors stably integrate into the host genome (essential for their long-term expression), but integration near proto-oncogenes or tumor suppressors can cause insertional mutagenesis (as seen in early X-SCID trials). AAV vectors predominantly exist as circular episomes in the nucleus (non-integrating), reducing genotoxic risk. AAV does integrate at low frequency near AAVS1 on chromosome 19. AAV limitations: small cargo (~4.7 kb), pre-existing neutralizing antibodies, liver tropism (most clinical experience). Episomes dilute in dividing cells."
  },
  {
    id: 32,
    question: "The CRISPR-Cas13 system is unique compared to CRISPR-Cas9 in that:",
    options: ["Cas13 cleaves DNA targets while Cas9 cleaves RNA targets", "Cas13 targets and cleaves single-stranded RNA (not DNA), making it useful for RNA knockdown, RNA tracking, and diagnostics (SHERLOCK)", "Cas13 requires no guide RNA for RNA targeting", "Cas13 creates more precise cuts with fewer off-targets than Cas9"],
    answer: 1,
    explanation: "Cas13 is a class 2 type VI CRISPR effector that cleaves ssRNA: (1) Cas13-crRNA complex targets complementary RNA sequences; (2) Upon target recognition, Cas13 becomes activated and exhibits 'collateral cleavage' — non-specifically cleaving nearby ssRNA (cis-cleavage of target + trans-cleavage of bystander RNAs); (3) Applications: RNA knockdown (Cas13d/CasRx), RNA imaging (dCas13), RNA editing (Cas13-ADAR fusions), diagnostics (SHERLOCK uses collateral cleavage of reporter RNA for amplification-free detection)."
  },
  {
    id: 33,
    question: "In cloning by ligation-independent cloning (LIC), the key advantage over restriction-enzyme-based cloning is:",
    options: ["LIC requires gel purification of every fragment for efficiency", "LIC uses T4 DNA polymerase to generate long single-stranded 5' overhangs (12+ nt) that are complementary between insert and vector, enabling annealing without restriction enzymes or ligase", "LIC achieves higher efficiency by using two restriction enzymes simultaneously", "LIC is exclusively used for subcloning, not de novo cloning"],
    answer: 1,
    explanation: "Ligation-independent cloning (LIC): T4 DNA polymerase's 3'→5' exonuclease activity (in the absence of dNTPs or with a single dNTP) creates long, sequence-specific single-stranded 5' overhangs (12+ nt) on both insert and vector. These complementary overhangs anneal with high stability without ligase. The annealed product is directly transformed into bacteria, where host enzymes complete nick sealing. LIC is more sequence-flexible than restriction cloning and directional without requiring specific restriction sites in the insert."
  },
  {
    id: 34,
    question: "Multiplexed DNA barcoding using CRISPR screens (genome-wide sgRNA libraries like Brunello or GeCKO) are used to:",
    options: ["Edit all genes simultaneously in a single cell to study all gene functions at once", "Perform pooled loss-of-function (CRISPR-KO) or gain-of-function (CRISPRa) screens where millions of cells each carry a different sgRNA, with next-generation sequencing of barcode abundance revealing which gene perturbations affect a phenotype of interest", "Create personalized gene therapy vectors for individual patients", "Generate hundreds of transgenic mouse models simultaneously"],
    answer: 1,
    explanation: "Genome-wide CRISPR screens: (1) Lentiviral library delivers one sgRNA/cell (MOI < 1); (2) Cells are subjected to selection (drug treatment, proliferation assay, protein expression, cell death); (3) After selection, genomic DNA from surviving cells is harvested and sgRNA barcodes sequenced; (4) Depleted sgRNAs identify essential genes for survival; enriched sgRNAs identify genes whose loss confers resistance. MAGeCK algorithm analyzes results. Identified druggable targets and resistance mechanisms for cancer, COVID-19, and other diseases."
  },
  {
    id: 35,
    question: "Biolistic transformation (gene gun) is primarily used in plant genetic transformation because:",
    options: ["It requires a Ti plasmid for efficient DNA delivery", "Gold or tungsten microparticles coated with DNA are accelerated at high velocity into plant cells/tissues, overcoming the cell wall barrier without requiring biological vectors", "It can only transform monocots and not dicots", "It provides site-specific integration into the plant genome"],
    answer: 1,
    explanation: "The gene gun (biolistic/particle bombardment): DNA-coated gold or tungsten microparticles (0.6-1.6 μm) are accelerated by high-pressure helium or gunpowder into plant cells. The particles penetrate cell walls and membranes, depositing DNA into the cytoplasm/nucleus. DNA integrates randomly into the nuclear genome (or plastid genome for chloroplast transformation). Advantages: species-independent, can transform chloroplasts/mitochondria, no size limitations. Used for crop improvement (Bt corn, herbicide-resistant crops)."
  },
  {
    id: 36,
    question: "Agrobacterium tumefaciens-mediated plant transformation uses T-DNA (transfer DNA) from the Ti plasmid. The key process is:",
    options: ["T-DNA is injected into plant nuclei by type III secretion system", "VirA-VirG two-component system senses wound signal (acetosyringone), inducing vir genes that excise T-DNA as ssDNA (T-strand), transfer it into plant cells via type IV secretion, where it integrates randomly into the nuclear genome", "T-DNA integrates specifically into transcriptionally active regions via sequence homology", "The process requires the plant to be actively dividing for T-DNA integration"],
    answer: 1,
    explanation: "Agrobacterium transformation: (1) Acetosyringone (wound signal) activates VirA histidine kinase → phosphorylates VirG activator → induces vir genes; (2) VirD1/VirD2 nick T-DNA borders and excise T-strand (ssDNA); (3) VirD2 remains covalently attached to T-strand 5' end; (4) VirE2 coats T-strand; (5) VirD2/VirE2 direct T-strand through type IV secretion system (VirB complex) into plant cell; (6) T-strand/VirD2/VirF complex imported into nucleus; (7) T-DNA integrates randomly. Used for dicot transformation (Arabidopsis, tobacco, soybean)."
  },
  {
    id: 37,
    question: "Site-directed mutagenesis (using QuikChange method) creates specific mutations in a plasmid by:",
    options: ["Random mutagenesis followed by selection for the desired phenotype", "Amplifying the entire plasmid with complementary primers containing the desired mutation, followed by DpnI digestion of the parental methylated template, leaving only the mutant product", "Using restriction enzymes to cut and re-ligate a synthetic mutagenic oligonucleotide", "Recombination of the mutant oligonucleotide with the target plasmid in vivo"],
    answer: 1,
    explanation: "QuikChange site-directed mutagenesis (Agilent): (1) Overlapping primers containing the desired mutation(s) amplify the entire plasmid by thermal cycling (non-exponential — plasmid is too large for conventional PCR amplification); (2) DpnI restriction enzyme (cleaves methylated GATC sequences) digests the parental template (dam methylated in E. coli) but not the PCR-generated nicked mutant plasmid; (3) DpnI-resistant mutant plasmid is transformed into E. coli. Allows introduction of point mutations, small insertions/deletions with high efficiency."
  },
  {
    id: 38,
    question: "A reporter gene assay using luciferase to study promoter activity involves:",
    options: ["Inserting the luciferase gene randomly into the genome to detect active chromatin", "Cloning the promoter region of interest upstream of the luciferase coding sequence; luciferase expression (measured by luminescence using luciferin substrate) reflects promoter activity in transfected cells", "Using luciferase as an antibiotic resistance marker for selection of transformed cells", "Injecting luciferase protein into cells to detect DNA-binding activity"],
    answer: 1,
    explanation: "Promoter-luciferase reporter assay: (1) Clone promoter/regulatory region upstream of firefly luciferase (FLuc) in a promoterless vector; (2) Transfect into relevant cell type; (3) After treatment/conditions of interest, lyse cells and add D-luciferin substrate; (4) Measure luminescence (proportional to luciferase activity = promoter activity). Renilla luciferase (RLuc) from a constitutive promoter serves as transfection control. Dual-luciferase system uses different substrates for FLuc and RLuc, enabling normalization. HRE-luciferase is used for hypoxia studies; NF-κB-luciferase for inflammation."
  },
  {
    id: 39,
    question: "Next-generation sequencing (NGS) library preparation typically involves which key steps?",
    options: ["DNA/RNA extraction only, as sequencing is done directly from crude lysates", "DNA/RNA fragmentation, adapter ligation to fragment ends, size selection, PCR amplification of the library, and quality control before sequencing", "Cloning each fragment into a plasmid before amplification and sequencing", "Labeling with radioactive isotopes for detection on sequencing gel"],
    answer: 1,
    explanation: "Standard NGS library prep: (1) DNA/RNA fragmentation (acoustic shearing for DNA; enzymatic for RNA); (2) End repair (fill 5' recessed ends, add 3'-A overhang); (3) Adapter ligation (platform-specific Y-shaped adapters with sample index barcodes); (4) Size selection (AMPure XP beads or gel); (5) PCR amplification (8-15 cycles using adapter primers); (6) Quality control (Bioanalyzer/TapeStation for size distribution, Qubit for quantification); (7) Sequencing on Illumina/ONT/PacBio platform. Unique molecular identifiers (UMIs) are added to reduce PCR amplification bias."
  },
  {
    id: 40,
    question: "The transformation efficiency of competent E. coli cells is measured in:",
    options: ["Colonies per microgram of vector DNA", "Colony forming units (CFU) per microgram of supercoiled plasmid DNA (typical chemical competent: 10^6-10^9 CFU/μg; electrocompetent: 10^9-10^10 CFU/μg)", "Percentage of cells that take up DNA after heat shock", "Optical density of transformed culture after overnight growth"],
    answer: 1,
    explanation: "Transformation efficiency = CFU per μg of plasmid DNA. Chemical competent cells (CaCl₂ treatment + heat shock at 42°C): ~10^6-10^9 CFU/μg. Electrocompetent cells (electroporation with brief high-voltage pulse): ~10^9-10^10 CFU/μg. High transformation efficiency is crucial for large library transformations (e.g., >10^7 independent clones needed for genome-wide library) to ensure every clone is represented. Transformation efficiency is affected by cell competence, DNA quality/quantity, and transformation conditions."
  },
  {
    id: 41,
    question: "Western blotting (immunoblotting) identifies specific proteins by:",
    options: ["Hybridizing a specific probe to mRNA on a membrane after gel electrophoresis", "Separating proteins by SDS-PAGE, transferring to a membrane, blocking non-specific binding, then detecting target protein with primary antibody (protein-specific) followed by enzyme-conjugated secondary antibody and substrate for visualization", "Immunoprecipitating the protein before gel electrophoresis to isolate it", "Scanning the membrane with a fluorescence reader after SDS-PAGE"],
    answer: 1,
    explanation: "Western blot: (1) Denature proteins in SDS sample buffer (β-mercaptoethanol reduces disulfide bonds); (2) Separate by SDS-PAGE (size); (3) Transfer to PVDF/nitrocellulose membrane; (4) Block with 5% milk/BSA in TBS-T (blocks non-specific antibody binding); (5) Primary antibody (overnight 4°C); (6) Wash; (7) HRP- or AP-conjugated secondary antibody; (8) Detect by ECL chemiluminescence or NBT/BCIP color reaction. Protein size confirmed by molecular weight markers. GAPDH/β-actin as loading controls for normalization."
  },
  {
    id: 42,
    question: "Co-immunoprecipitation (Co-IP) is used to study:",
    options: ["The cellular localization of proteins using immunofluorescence microscopy", "Protein-protein interactions: an antibody against one protein (bait) immunoprecipitates it along with its binding partners (prey) from cell lysates, which are then detected by Western blotting or mass spectrometry", "mRNA expression levels of specific genes in immunological cells", "Post-translational modifications using modified residue-specific antibodies"],
    answer: 1,
    explanation: "Co-IP (Co-immunoprecipitation): (1) Cell lysate prepared under native conditions (preserving protein interactions); (2) Primary antibody against bait protein added; (3) Protein A/G beads capture antibody-protein complex; (4) After washing, bound proteins (bait + interactors/prey) are eluted; (5) Prey proteins identified by Western blot with specific antibodies or mass spectrometry (AP-MS). Co-IP is the gold standard for confirming protein interactions in native cellular context. Reciprocal Co-IP (pulling down with prey antibody, detecting bait) confirms specificity."
  },
  {
    id: 43,
    question: "Golden Gate Assembly and Gibson Assembly are both enzyme-based cloning methods. The key difference is:",
    options: ["Golden Gate uses ligase only; Gibson Assembly uses restriction enzymes only", "Golden Gate uses Type IIS restriction enzymes (cut outside recognition site) to generate unique 4-base overhangs for scarless assembly; Gibson Assembly uses T5 exonuclease + Phusion polymerase + Taq ligase to join fragments with 15-40 bp overlaps in one isothermal reaction", "Gibson Assembly requires gel purification between steps; Golden Gate is a one-pot reaction", "They are interchangeable with no practical difference"],
    answer: 1,
    explanation: "Golden Gate Assembly: Type IIS restriction enzymes (BsaI, BbsI) cut outside their recognition site, generating unique 4-nt overhangs. The recognition site is consumed during assembly, leaving scar-free junctions. Enables one-pot, multi-fragment assembly. Gibson Assembly (isothermal, 50°C, 1 hour): T5 exonuclease chews 5' ends to create 3' ssDNA overhangs; Phusion polymerase fills gaps; Taq ligase seals nicks. Requires 15-40 bp overlaps between fragments. Both enable multi-fragment assembly without restriction sites in insert."
  },
  {
    id: 44,
    question: "Nucleic acid hybridization stringency in Southern/Northern blotting is primarily controlled by:",
    options: ["The concentration of labeled probe used for hybridization", "Temperature and salt (SSC) concentration during hybridization and washes; high stringency (high temperature/low salt) reduces mismatches and detects only highly complementary sequences", "The size of DNA fragments being detected", "The type of membrane (nitrocellulose vs. nylon) used for transfer"],
    answer: 1,
    explanation: "Hybridization stringency is determined by the stability of probe-target hybrids relative to mismatched pairs. High stringency conditions (high temperature, low salt [SSC], high formamide) destabilize mismatched hybrids → only perfect or near-perfect matches hybridize → high specificity (used for single-copy gene detection). Low stringency conditions (low temperature, high salt) allow mismatched hybridization → detects related sequences (used to identify homologs or perform cross-species hybridization). Tm = melting temperature of probe-target hybrid."
  },
  {
    id: 45,
    question: "The purpose of dephosphorylating a linearized plasmid vector with alkaline phosphatase (CIP/SAP) before cloning is to:",
    options: ["Increase ligation efficiency between insert and vector by improving blunt-end compatibility", "Prevent vector self-ligation (re-circularization without insert), reducing background colonies without insert; insert ligated to dephosphorylated vector provides only one phosphate group sufficient for nicked circular DNA that is repaired in bacteria", "Activate the restriction enzyme cut sites for better ligation", "Reduce the toxicity of linear DNA to bacteria"],
    answer: 1,
    explanation: "Alkaline phosphatase (CIP — calf intestinal phosphatase or SAP — shrimp alkaline phosphatase) removes the 5' phosphate groups from linearized vector ends. Without 5' phosphates, the vector cannot self-ligate (T4 DNA ligase requires 5' phosphate on one strand). When an insert (with 5' phosphates) is ligated to the dephosphorylated vector, the ligation creates nicked circles (one strand intact, one nicked). The nicks are repaired in transformed bacteria. This dramatically reduces background (empty vector) colonies."
  },
  {
    id: 46,
    question: "EMSA (Electrophoretic Mobility Shift Assay) or gel shift assay is used to:",
    options: ["Determine the molecular weight of RNA molecules under denaturing conditions", "Detect and characterize protein-nucleic acid interactions: protein binding to DNA/RNA slows electrophoretic mobility, causing a 'shift' in band position; the degree of shift and specificity are determined by competition with unlabeled probes", "Measure the efficiency of restriction enzyme digestion of plasmid DNA", "Detect post-translational modifications that alter protein charge"],
    answer: 1,
    explanation: "EMSA (gel shift assay): (1) Labeled DNA/RNA probe (radioactive or fluorescent) + protein of interest incubated; (2) Mixture run on native PAGE gel; (3) Free probe migrates faster; protein-bound probe migrates slower (shifted band); (4) Specificity confirmed by competition with excess unlabeled specific probe (eliminates shift) but not non-specific probe. Supershifts use antibodies against the binding protein. Used to identify transcription factor binding to promoter sequences, protein-RNA interactions."
  },
  {
    id: 47,
    question: "Phage display technology is used to identify peptides or proteins that bind a specific target by:",
    options: ["Infecting bacteria with phage carrying random peptide sequences and selecting bacteria that survive antibiotic treatment", "Displaying random peptides or protein libraries as fusions to phage coat proteins (pIII or pVIII); binding phage are selected by panning on immobilized target, eluted, amplified, and subjected to multiple rounds of selection to identify high-affinity binders", "Using restriction enzymes to cleave phage DNA at sequences complementary to target-binding peptides", "Crystallizing phage-protein complexes for structural determination"],
    answer: 1,
    explanation: "Phage display (George Smith, Nobel Prize 2018): random peptide or antibody fragment (scFv) genes are cloned in frame with phage coat protein gene (usually pIII of M13 filamentous phage). Each phage particle displays the peptide/protein on its surface while encoding it in its genome (genotype-phenotype linkage). Panning: incubate library with target → wash unbound → elute bound phage → infect E. coli → repeat 3-5 cycles → sequence selected phage to identify binding sequences. Used to develop therapeutic antibodies, identify protein-protein interaction inhibitors."
  },
  {
    id: 48,
    question: "The principle of isothermal titration calorimetry (ITC) in biochemistry is used to:",
    options: ["Measure the kinetics of enzyme catalysis by continuous absorbance monitoring", "Directly measure heat released or absorbed during molecular interactions (protein-ligand, protein-protein), providing binding affinity (Kd), stoichiometry (n), enthalpy (ΔH), and entropy (ΔS) in a single experiment", "Determine protein secondary structure by circular dichroism", "Measure protein-DNA interaction by detecting conformational changes"],
    answer: 1,
    explanation: "ITC directly measures the heat of binding (thermodynamics) when one molecule is titrated into another in a calorimetric cell. The heat signal (enthalpy, ΔH) from each injection is measured. As binding sites saturate, heat decreases to zero. From the isotherm, one determines: Kd (binding constant), n (stoichiometry), ΔH (enthalpy). ΔG = -RT ln Ka and ΔS = (ΔH - ΔG)/T are calculated. ITC requires no labels, modification, or immobilization. It is the gold standard for thermodynamic characterization of macromolecular interactions."
  },
  {
    id: 49,
    question: "CRISPR-Cas9 off-target effects can be minimized by which of the following strategies?",
    options: ["Using high concentrations of Cas9 and sgRNA for maximum efficiency", "Using high-fidelity Cas9 variants (eSpCas9, HiFi Cas9), truncated sgRNAs (17-18 nt), paired nickases (D10A Cas9 + offset sgRNAs), or base editors with high specificity", "Increasing the PAM stringency to NRG instead of NGG", "Adding more copies of sgRNA expression cassettes to the cell"],
    answer: 1,
    explanation: "Strategies to reduce CRISPR off-targets: (1) High-fidelity Cas9 variants (eSpCas9-1.1, SpCas9-HF1, HiFiCas9 — altered PAM-interacting region to improve specificity); (2) Truncated sgRNAs (17-18 nt spacer instead of 20 nt — reduced off-target binding without significantly reducing on-target efficiency); (3) Paired Cas9 nickases (D10A + two sgRNAs targeting opposite strands — DSB requires both nicks; single nicks are repaired by BER without NHEJ indels); (4) Cas9 protein delivery (RNP) instead of plasmid (reduces expression duration)."
  },
  {
    id: 50,
    question: "The fundamental difference between recombinant DNA technology (genetic engineering) and traditional breeding is:",
    options: ["Traditional breeding can introduce genes from any organism; genetic engineering is limited to the same species", "Recombinant DNA technology allows precise introduction of specific genes from any organism (including non-related species) into a host genome with defined molecular changes; traditional breeding relies on natural variation and recombination within the same or closely related species, taking many generations", "Recombinant DNA technology is slower because it requires laboratory work", "Traditional breeding introduces more mutations than genetic engineering"],
    answer: 1,
    explanation: "Traditional breeding relies on natural genetic variation within sexually compatible species, crosses, and selection over many generations — cannot introduce genes across species barriers. Recombinant DNA technology (genetic engineering) can transfer specific genes from any organism (bacteria to plant, human to bacteria), make precise defined changes, achieve specific desired traits in one generation, and introduce multiple genes simultaneously. This enables creation of crops with pest resistance (Bt crops), disease resistance, nutritional enhancement (Golden Rice), and production of pharmaceuticals in microorganisms."
  }
];

export default questions;
