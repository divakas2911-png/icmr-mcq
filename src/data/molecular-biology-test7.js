export const questions = [
  {
    id: 1,
    question: "Homologous recombination in E. coli is initiated by the RecBCD enzyme. How does RecBCD process a DSB end?",
    options: ["RecBCD loads at single-stranded tails and processes outward from the break", "RecBCD loads at blunt or near-blunt dsDNA ends, unwinds DNA using its dual helicase activities (RecB 3'→5' and RecD 5'→3'), degrades both strands (stronger RecD/RecB nuclease degrades more rapidly), until encountering a Chi site (8-mer: GCTGGTGG) — which attenuates RecD nuclease, allowing RecA loading on 3' ssDNA for strand invasion", "RecBCD only recognizes Chi sites and does not process DSB ends directly", "RecBCD acts as a topoisomerase that relaxes supercoiling at DSB sites"],
    answer: 1,
    explanation: "RecBCD (a combined helicase-nuclease): (1) Loads at blunt/near-blunt dsDNA ends; (2) Unwinds DNA bidirectionally (RecB on 3'→5', RecD on 5'→3'— RecD faster initially, creating 3' tail loop); (3) Degrades with 3'→5' exonuclease (RecB/RecD nuclease); (4) At Chi site (GCTGGTGG), RecB nicks 3' strand 4-6 nt to the 3' side, and RecD nuclease is attenuated → RecB nuclease now primarily degrades 5' strand; (5) RecA loads on 3' ssDNA (facilitated by RecB C-terminus interacting with RecA), forming presynaptic filament for strand invasion."
  },
  {
    id: 2,
    question: "The RAD51 protein (eukaryotic RecA homolog) forms a presynaptic filament on ssDNA that performs which critical step in HR?",
    options: ["RAD51 directly cuts the dsDNA template strand to create a nick for strand invasion", "RAD51 nucleoprotein filament (right-handed, ~51 Å pitch, 6.2 monomers/turn) binds ssDNA in a 3:1 (nt:protein) stoichiometry and catalyzes strand invasion — searching dsDNA for homologous sequences and catalyzing strand exchange (D-loop formation) driven by ATP hydrolysis", "RAD51 acts as a molecular scaffold without directly participating in strand exchange chemistry", "RAD51 degrades the 5' strand of resected dsDNA to extend the 3' ssDNA overhang"],
    answer: 1,
    explanation: "RAD51 (RecA homolog, 39 kDa): polymerizes on ssDNA in 5'→3' direction in ATP-bound form (~1 RAD51/3 nt). The helical filament stretches ssDNA 1.5× its B-form length, making it accessible for homology search. RAD51 catalyzes: (1) Homology search (synapsis) — filament scans dsDNA for complementary sequences by transient base pair sampling; (2) Strand exchange — displaces the non-complementary strand of dsDNA and anneals with the complementary strand to form a D-loop (displacement loop). ATP hydrolysis drives filament remodeling and RAD51 dissociation after exchange."
  },
  {
    id: 3,
    question: "The Holliday junction was originally proposed by Robin Holliday as a model for which biological process?",
    options: ["Origin of DNA replication in bacteria", "Meiotic recombination (gene conversion) between homologous chromosomes — Holliday proposed a 4-stranded branched DNA intermediate connecting two duplexes, now called the Holliday junction", "Transposon excision from host DNA", "Bacteriophage lambda site-specific recombination"],
    answer: 1,
    explanation: "Robin Holliday (1964) proposed the branched DNA structure (4-stranded junction connecting two duplexes) to explain gene conversion during meiosis — how markers near a crossover can be converted from one allele to another. The Holliday model: nick in one strand → strand exchange → Holliday junction → branch migration → second nick → ligation → either crossover or non-crossover depending on which strands are cut at resolution. The model correctly predicted the 4-strand intermediate, later confirmed by structural studies."
  },
  {
    id: 4,
    question: "Site-specific recombination by bacteriophage lambda Integrase (Int) mediates integration into the bacterial chromosome. What is the mechanism?",
    options: ["Random insertion of phage DNA at any site using cut-paste mechanism like Tn10", "Int (a tyrosine recombinase) catalyzes strand exchange using a topoisomerase-like mechanism at attB (bacterial) and attP (phage) sites: Int cleaves both strands sequentially (forming 5'-phosphotyrosine intermediates), exchanges strands, and religates without requiring ATP or a DNA replication step — producing attL and attR flanking integrated phage", "Int uses RecA-mediated HR to insert between any two homologous sequences", "Int cuts attP and attB simultaneously at both strands using a DSB mechanism, then rejoins across sites"],
    answer: 1,
    explanation: "Lambda Int (Integrase) is a tyrosine recombinase: (1) Int recognizes attB (7-bp core in bacteria) and attP (~240 bp phage att site); (2) IHF bends attP DNA; (3) Int makes staggered cuts at 7-bp overlap region via active site Tyr → 5'-phosphotyrosyl DNA intermediate (covalent); (4) Strand exchange (no DSB simultaneously — sequential strand exchange through Holliday junction intermediate); (5) Resolution → integration creates attL and attR. Excision requires Int + Xis + IHF. Serine recombinases (γδ, Tn3) use DSB mechanism."
  },
  {
    id: 5,
    question: "Cut-and-paste transposition (used by bacterial Tn10 and eukaryotic Tc1/mariner family) occurs by which mechanism?",
    options: ["Replicative transposition — the transposon replicates before moving to a new site, leaving a copy at the original site", "The transposase excises the transposon by creating DSBs at both ends, and inserts the excised element at a new target site; target site is staggered-cut, creating short direct repeats (TSDs) flanking the inserted transposon; the original site is repaired (often with deletions)", "Retrotransposition — RNA intermediate is reverse transcribed and inserted at new site", "The transposon recombines with the new site via homologous recombination using the flanking sequences"],
    answer: 1,
    explanation: "Cut-and-paste (Class II, DNA transposon): (1) Transposase binds terminal inverted repeats (TIRs) at transposon ends; (2) Paired-end complex brings TIRs together; (3) Transposase cuts both strands at each end (usually DSB mechanism — staggered cuts); (4) Excised transposon is liberated (as a blunt-ended or hairpin intermediate); (5) Target DNA is staggered-cut; (6) Transposon integrates, leaving gaps; (7) DNA repair fills gaps → short target site duplications (TSDs) flanking the insertion. Tn10: 9-bp TSDs. Net: transposon moves to new site, original site has DSB (repaired by NHEJ — often with small insertions/deletions)."
  },
  {
    id: 6,
    question: "Replicative transposition (Shapiro intermediate) as seen with bacteriophage Mu and Tn3 involves:",
    options: ["Direct excision and reinsertion without replication", "Transposase creates nicks (not DSBs) at transposon ends and at target DNA, joining them in a 'fused replicon' (Shapiro intermediate with two copies of the transposon); DNA replication through the transposon produces a cointegrate (two transposon copies); cointegrate resolution by site-specific recombination (resolvase at res sites) produces two replicons each with one transposon", "RNA-mediated mechanism with an RNA intermediate", "Requires RecA for homologous recombination to new site"],
    answer: 1,
    explanation: "Replicative transposition: (1) Transposase (e.g., MuA) creates SSBs at 3' ends of each transposon end and staggered 5' cuts at target DNA; (2) Strand transfer — 3'-OH of transposon attacks target DNA at 5' cuts (transesterification); (3) Shapiro intermediate — two strands of transposon are covalently joined to target on each side (still connected to source); (4) Host DNA polymerase replicates through the transposon from both ends; (5) Cointegrate: two replicons joined at two transposon copies; (6) Resolution: resolvase (TnpR/γδ resolvase) catalyzes site-specific recombination at res sites within transposon → two separate replicons each with one transposon."
  },
  {
    id: 7,
    question: "Retrotransposons (Class I transposable elements) differ from DNA transposons in that they:",
    options: ["Use double-strand break intermediates for all transposition reactions", "Transpose via an RNA intermediate: gene is transcribed to RNA → reverse-transcribed to cDNA → integrated at new site (copy-and-paste mechanism) — including retrovirus-like LTR retrotransposons (e.g., Ty1, copia) and non-LTR retrotransposons (LINEs, SINEs)", "Are always found in telomeres and never transpose within the genome", "Use the host's DNA polymerase directly to copy themselves without RNA"],
    answer: 1,
    explanation: "Retrotransposons ('copy-and-paste'): (1) LTR retrotransposons (similar to retroviruses): GAG, POL (RT, integrase), LTR flanking elements; transcribed by RNA Pol II → RNA → reverse transcription by RT (produces LTR-flanked dsDNA) → integration by integrase (similar mechanism to retroviruses). (2) Non-LTR (LINE-1, SINEs/Alu): L1 encodes ORF1 (RNA-binding protein) and ORF2 (RT + endonuclease); target-primed reverse transcription (TPRT) — endonuclease nicks target DNA, 3'-OH primes reverse transcription in situ. SINEs are non-autonomous (use L1 machinery)."
  },
  {
    id: 8,
    question: "The most abundant transposable element in the human genome is:",
    options: ["Tn10-like DNA transposons (~20% of human genome)", "LINE-1 (L1) retrotransposons (~17% of the genome, ~500,000 copies, but only ~80-100 L1s are retrotransposition-competent); Alu SINEs are the most numerous (~1.1 million copies, ~11% of genome)", "Mariner-class DNA transposons", "HERV (human endogenous retroviruses) which comprise the majority"],
    answer: 1,
    explanation: "Human genome transposable elements: ~45% of the genome is derived from TEs. LINEs (~21%, mainly L1 at ~17%): non-LTR retrotransposons; ~500,000 copies but most are 5'-truncated and non-functional; ~80-100 L1 full-length active copies. SINEs (~13%, mainly Alu at ~11%): ~1.1 million Alu copies (derived from 7SL RNA), non-autonomous, use L1 machinery; Alu insertions are actively occurring (~1/20 human births has new Alu insertion). DNA transposons (~3%): all defective. HERVs (~8%): mostly non-mobile. L1 is the most numerous class; Alu is most numerous by copy number."
  },
  {
    id: 9,
    question: "The piRNA (PIWI-interacting RNA) pathway protects the germline from transposable element activity by:",
    options: ["piRNAs are mRNAs that encode PIWI protein to suppress transposons transcriptionally", "piRNAs (~24-31 nt) are produced from piRNA clusters and loaded into PIWI-clade Argonaute proteins (MILI/PIWIL2, MIWI2/PIWIL4, MIWI/PIWIL1 in mice); MILI slices TE transcripts producing new piRNAs (amplification loop); MIWI2-piRNA complex enters the nucleus and directs DNA methylation of TE promoters; together providing post-transcriptional and transcriptional silencing of TEs in germline", "piRNAs directly degrade TE DNA using RNase H activity", "piRNAs function identically to siRNAs but are only expressed in somatic cells"],
    answer: 1,
    explanation: "piRNA pathway (germline TE defense): (1) Primary piRNAs generated from piRNA clusters (genomic loci enriched in TE sequences) by an unknown mechanism — enriched for 5'U; (2) Loaded into MILI (cytoplasm) → MILI slices complementary TE mRNAs; (3) 'Ping-pong' amplification: MILI produces 5'U piRNA → MIWI2 produces 10A piRNA → cycle amplifies piRNA pool; (4) MIWI2-piRNA complex enters nucleus → recruits DNMT3A/DNMT3L → de novo methylation of TE promoters (LINE1, IAP, SINE-R); (5) H3K9me3 also deposited. Loss of MILI/MIWI2 → TE activation → male infertility."
  },
  {
    id: 10,
    question: "V(D)J recombination in B and T lymphocytes produces antibody and TCR diversity using which type of recombination mechanism?",
    options: ["Homologous recombination between repeated V, D, and J gene segments", "Site-specific recombination by the RAG1-RAG2 complex (a transposase-like enzyme): RAG introduces DSBs at recombination signal sequences (RSS with 12 or 23 bp spacers), creating blunt signal ends joined (SJ) and coding end hairpins opened by Artemis; NHEJ joins coding ends (introducing junctional diversity via P-nucleotides, exonuclease trimming, TdT-added N-nucleotides)", "Cut-and-paste transposition by an endogenous transposase derived from TEs", "The V(D)J segments are transcribed as a single large RNA and spliced to join segments post-transcriptionally"],
    answer: 1,
    explanation: "V(D)J recombination (somatic recombination in lymphocytes): RAG1-RAG2 synaptic complex binds RSS (heptamer-nonamer separated by 12 or 23 bp spacers — 12/23 rule ensures one V and one J are brought together). RAG nicks one strand then attacks the other, creating blunt signal ends and hairpin coding ends simultaneously. NHEJ factors (Ku70/80, DNA-PKcs, Artemis endonuclease opens hairpins) join the coding ends. Diversity sources: combinatorial V/D/J joining, P-nucleotides (hairpin opening), exonuclease trimming, TdT-added N-nucleotides (random addition at coding junctions). Generates >10¹⁸ unique antibodies."
  },
  {
    id: 11,
    question: "Class switch recombination (CSR) in B cells changes the antibody isotype from IgM to IgG/A/E. What is the mechanism?",
    options: ["CSR uses alternative splicing of the CH region to produce different constant regions without DNA rearrangement", "CSR involves AID (Activation-Induced Cytidine Deaminase) deaminating cytosines in switch regions (S regions) upstream of CH genes → U:G mismatches → BER/MMR creates DSBs → NHEJ joins two S regions, deleting the intervening DNA and juxtaposing the new constant region gene to VDJ", "CSR is mediated by RAG1-RAG2 like V(D)J recombination but at different RSS sequences", "CSR uses a retrotransposon-like mechanism to copy new constant regions into the expressed locus"],
    answer: 1,
    explanation: "CSR mechanism: (1) AID (AICDA) deaminates cytosines to uracil in single-stranded DNA at repetitive switch regions (S regions containing RGYW/WRCY AID hotspot motifs); (2) U:G mismatches → UNG glycosylase + APE1 creates nicks/abasic sites → staggered nicks converted to DSBs; (3) MMR (MSH2-MSH6) processes U:G mismatches into DSBs; (4) DSBs in Sμ and SX are rejoined by NHEJ (with Ku70/80, DNA-PKcs, XRCC4-Lig4, 53BP1, H2AX, MDC1) — joining Sμ to SX, deleting intervening CH genes; (5) New constant region juxtaposed to VDJ → isotype switch. AID is essential; its mistargeting causes oncogenic translocations (MYC-IGH in Burkitt)."
  },
  {
    id: 12,
    question: "Somatic hypermutation (SHM) of antibody variable regions in germinal centers is initiated by AID and targeted to which regions?",
    options: ["SHM occurs throughout the entire B cell genome to increase diversity", "SHM targets the V(D)J region of antibody genes (focused ~150 bp downstream of transcription start for 1.5-2 kb) — AID deaminates C→U in ssDNA exposed during transcription; faithful replication of U opposite A gives C→T transitions; UNG/BER and MMR process U:G mismatches to create diverse point mutations", "SHM only occurs at hotspot triplets in the CH region", "SHM is performed by a specialized RNA-directed DNA polymerase"],
    answer: 1,
    explanation: "SHM: AID specifically targets immunoglobulin V regions (both H and L) with 10⁶-fold preference over non-Ig sequences (targeting depends on: transcription, RGYW/WRCY hotspot motifs, AID-associated protein complexes including RNA Pol II and Spt5). AID deaminates C→U in ssDNA: (1) Faithful replication → C→T transitions (predominantly); (2) UNG removes U → AP site → Pol η (error-prone) → A,G,C or T inserted → mutations at C:G pairs; (3) MSH2-MSH6 recognizes U:G mismatches → recruits Pol η (via ExoI) → mutations spread to A:T pairs. Result: high-frequency mutations (10⁻³/bp/generation) driving affinity maturation."
  },
  {
    id: 13,
    question: "The RecA protein's role in the bacterial SOS response involves stimulating which enzyme activity?",
    options: ["RecA stimulates DNA Pol III for error-prone replication (SOS mutagenesis directly)", "RecA∗ (ssDNA-RecA nucleoprotein filament) acts as a co-protease to stimulate the latent auto-cleavage activity of LexA repressor (and λ CI, UmuD) — cleaving LexA at Ala84-Gly85 bond → derepression of >40 SOS genes", "RecA activates UvrABC for enhanced NER during SOS response", "RecA phosphorylates LexA kinase to trigger its autolysis"],
    answer: 1,
    explanation: "RecA∗ (the activated nucleoprotein filament formed when RecA binds ssDNA/ATP under SOS conditions) co-protease function: facilitates the normally slow autodigestion of LexA at its Ala-Gly scissile bond (at high RecA∗ level — all SOS genes derepressed). RecA∗ also activates autodigestion of: λ cI repressor (induces phage lytic cycle during SOS — 'SOS induction of prophage'); UmuD → UmuD' (active form for SOS mutagenesis TLS with UmuC=Pol V). Pol V (UmuD'₂C) with RecA∗ on ssDNA performs error-prone TLS at SOS-induced levels."
  },
  {
    id: 14,
    question: "Meiotic recombination uses a unique mechanism of DSB formation. Which enzyme creates the DSBs at hotspots during meiosis?",
    options: ["RAD51 creates DSBs using its nuclease activity during meiotic prophase", "SPO11 (a topoisomerase II-like enzyme) creates DSBs by forming a covalent phosphotyrosine link to the 5' ends of both strands at hotspots — SPO11 remains covalently attached until removed by MRE11-RAD50-NBS1 (MRN) cleavage to release SPO11-oligonucleotide adducts", "MRE11 nuclease directly cleaves DNA to initiate meiotic recombination", "DNA Pol ε introduces DSBs at specific meiotic hotspots marked by H3K4me3"],
    answer: 1,
    explanation: "Meiotic DSBs: SPO11 (homolog of archaeal topoisomerase II subunit) forms a covalent 5'-phosphotyrosine bond at DSB sites (acting as a transesterase), introducing programmed DSBs throughout the genome (~250-300 per meiosis in mice, fewer in humans). SPO11-oligonucleotide adducts are removed by MRN endonuclease cleavage of the adduct strand → ssDNA 3' tails → SPO11-oligonucleotides released as indicators of meiotic DSB activity. Hotspots in mammals are determined by PRDM9 methyltransferase (H3K4me3 at hotspots recruits SPO11 complex)."
  },
  {
    id: 15,
    question: "The PRDM9 protein determines the location of meiotic recombination hotspots in mammals by:",
    options: ["PRDM9 is the meiotic recombinase that performs strand exchange at hotspots", "PRDM9 binds specific DNA sequences (via its zinc finger array, which varies between individuals due to PRDM9's tandem repeat zinc finger domain evolution) and tri-methylates H3K4 and H3K36 at these sites, marking them as DSB hotspots for SPO11 targeting", "PRDM9 recognizes γH2AX at hotspots from the previous generation and marks new sites", "PRDM9 is a transcription factor that activates SPO11 gene expression during meiosis"],
    answer: 1,
    explanation: "PRDM9 (PR domain zinc finger protein 9): (1) Zinc finger (ZnF) array determines DNA sequence specificity — PRDM9 ZnF arrays evolve rapidly (tandem repeat ZnF diversification), varying between individuals and populations, causing individual-specific hotspot positions; (2) SET domain trimethylates H3K4 (H3K4me3) and H3K36 (H3K36me3) at bound sites; (3) PRDM9-binding sites with H3K4me3 are enriched at SPO11 DSB sites. The 'hotspot paradox': recombination erodes PRDM9-binding sequences at hotspots; PRDM9's rapid ZnF evolution allows it to 'escape' eroded hotspot sequences by targeting new ones."
  },
  {
    id: 16,
    question: "Which protein forms the 'synaptonemal complex' (SC) that holds homologous chromosomes together during meiotic prophase I?",
    options: ["RAD51, which bridges homologs through strand invasion", "SYCP1 (transverse filament protein) and SYCP2/SYCP3 (axial/lateral element proteins) assemble the proteinaceous structure connecting homologs: axial elements (AEs) along each chromosome joined by transverse filaments (SYCP1) spanning the central element — the whole structure looks like a 'zipper' between homologs under EM", "Cohesins (SMC1β, SMC3, REC8, SA3) form the SC by encircling both homologs", "HORMAD1/HORMAD2 form the mature SC central element"],
    answer: 1,
    explanation: "Synaptonemal complex (SC) structure during meiotic prophase I: (1) Axial/lateral elements along each chromosome axis: SYCP2, SYCP3 (coiled-coil proteins); cohesins (SMC1β, REC8 replace SMC1α/RAD21) hold sister chromatids and support AE. (2) Transverse filaments: SYCP1 (coiled-coil) — N-terminus points to central element, C-terminus anchors to lateral element — spans the ~100 nm SC central region. (3) Central element: SYCE1, SYCE2, SYCE3, TEX12. SC assembles during zygotene (after DSBs), is fully formed in pachytene (where crossing over occurs), and disassembles in diplotene. HORMAD1/2 are on AEs."
  },
  {
    id: 17,
    question: "During meiotic recombination, the 'non-crossover' (gene conversion) outcome is preferred over crossovers in most organisms (~85:15 ratio). The primary pathway for non-crossover formation is:",
    options: ["SDSA (Synthesis-Dependent Strand Annealing) — the invading strand extends using the homolog as template, then dissociates and anneals back to the resected end of the original DSB without crossing over", "Double Holliday Junction dissolution by BLM-TOP3α — which produces only non-crossovers", "The NHEJ pathway that rejoins DSBs without any gene conversion tract", "Class I crossover interference-sensitive pathway using MLH1-MLH3"],
    answer: 0,
    explanation: "SDSA (Synthesis-Dependent Strand Annealing): predominant NCO pathway. (1) RAD51 filament invades homolog → D-loop; (2) New DNA synthesis extends from the 3'-OH using homolog as template; (3) The extended strand is displaced from D-loop (by helicases like RTEL1 or anti-crossover activities); (4) Displaced strand anneals with the resected 3' end of the other DSB side; (5) Second-end capture and ligation → no crossover, but gene conversion tract. SDSA dominates in mitotic HR. In meiosis, ~15% of events form crossovers (double Holliday junctions stabilized by ZMM proteins for Class I COs)."
  },
  {
    id: 18,
    question: "The Tn3 transposon family uses a two-step replicative transposition mechanism. The resolvase (TnpR) catalyzes the second step, which is:",
    options: ["Excising the transposon from the cointegrate donor backbone", "Site-specific recombination between the two directly repeated res (resolution) sites within the two transposon copies of a cointegrate — using a serine recombinase mechanism (DSB → rotation → religation) to produce two separate replicons, each with one copy of the transposon", "Non-replicative excision of the cointegrate into the target replicon", "Recombination between inverted terminal repeats of the two transposon copies"],
    answer: 1,
    explanation: "Tn3/γδ resolvase resolution: (1) Cointegrate has two directly repeated transposons, each containing a res site; (2) TnpR (resolvase) binds res sites and, as a tetramer/dimer-of-dimers, synapses both res sites (interwrapped); (3) Resolvase (serine recombinase) makes double-strand cuts (at top-strand and bottom-strand simultaneously, 2-bp stagger) at the center of res, forms covalent 5'-phosphoserine intermediates; (4) 180° rotation brings compatible ends together; (5) Ligation → two circles (replicons), each with one transposon copy. The serine recombinase mechanism is topologically locked (only resolves — cannot integrate like tyrosine recombinases)."
  },
  {
    id: 19,
    question: "Zinc finger nucleases (ZFNs), TALENs, and CRISPR-Cas9 are all 'genome editing' tools. What is a key mechanistic difference between them?",
    options: ["ZFNs and TALENs use RNA for target recognition; CRISPR uses protein", "ZFNs use engineered C2H2 zinc finger arrays for DNA recognition (protein-DNA); TALENs use TALE repeat arrays (modular protein-DNA contacts, 1 repeat:1 bp); CRISPR-Cas9 uses a guide RNA (sgRNA) complementary to the target sequence (RNA-DNA via Watson-Crick base pairing) — Cas9 cuts both strands via RuvC and HNH domains", "CRISPR and TALENs require dimerization for DSB formation; ZFNs act as monomers", "All three use identical FokI nuclease domains for DNA cleavage at the target site"],
    answer: 1,
    explanation: "ZFNs: engineered Cys2His2 zinc finger arrays (3-6 fingers, each recognizing 3 bp triplet) fused to FokI nuclease; require dimerization for DSB. TALENs: TALE repeat variable di-residues (RVDs: NI=A, NG=T, HD=C, NN=G/A) recognize 1 bp each; modular protein-DNA contacts; fused to FokI; require dimerization. CRISPR-Cas9: sgRNA (crRNA+tracrRNA) base-pairs with protospacer; PAM (NGG for SpCas9) required; Cas9 HNH cuts the strand complementary to sgRNA, RuvC cuts the non-complementary strand. CRISPR is most flexible (just change sgRNA sequence, no protein re-engineering needed)."
  },
  {
    id: 20,
    question: "The IS elements (insertion sequences) are the simplest mobile genetic elements in bacteria. They encode which proteins?",
    options: ["Transposase and resolvase genes flanked by inverted terminal repeats", "Only a transposase gene (or sometimes two overlapping ORFs encoding one functional transposase via frameshifting) flanked by short inverted terminal repeats (ITRs) — the minimum functional unit for transposition", "IS elements encode only drug resistance genes and require host transposase for movement", "IS elements encode reverse transcriptase for RNA-mediated transposition"],
    answer: 1,
    explanation: "IS (Insertion Sequence) elements are the simplest autonomous TEs in bacteria (~750-2500 bp): basic structure — inverted terminal repeats (ITRs, 10-40 bp) flanking a single ORF encoding the transposase (Tpase). Some IS elements have two overlapping ORFs that produce functional Tpase via programmed frameshift or read-through to regulate transposition frequency. IS elements generate target site duplications (TSDs) upon insertion. Complex transposons (Tn3, Tn10) carry additional cargo genes (antibiotic resistance) flanked by two IS elements or inverted repeats."
  },
  {
    id: 21,
    question: "The 'strand transfer' reaction in retroviral integration (performed by the viral integrase protein) involves which chemical step?",
    options: ["The integrase cuts both strands of target DNA simultaneously using its nuclease and joins them to viral DNA in a two-step reaction requiring ATP", "Integrase catalyzes a transesterification reaction: the 3'-OH ends of processed viral DNA (3' processing removed 2 nt from each end, creating recessed 3'-OH) act as nucleophiles attacking the target DNA phosphodiester bonds (at staggered sites), directly inserting viral DNA without ATP requirement — then host repair fills the gaps", "Integration uses a covalent protein-DNA intermediate on tyrosine residues", "Integration requires host topoisomerase II to pre-cut target DNA"],
    answer: 1,
    explanation: "HIV integrase (IN) mechanism: (1) 3' processing: IN (as dimer) removes 2 nt from 3' ends of LTR DNA (GT...AC → CpA-OH 3') in cytoplasm; (2) PIC (pre-integration complex) enters nucleus; (3) Strand transfer: the two 3'-OH ends (CpA-OH) attack the target DNA phosphodiester bonds at a staggered 5-bp site simultaneously (or sequentially), in a transesterification reaction — no covalent protein-DNA intermediate (unlike topoisomerase); (4) Host DNA repair (ERCC1-XPF, HMGB1, and LEDGF/p75) resolves the flanking 5-bp gap → 5-bp TSDs flanking the provirus."
  },
  {
    id: 22,
    question: "The Drosophila P element transposition is restricted to the germline, not the soma. The molecular basis for this germline specificity is:",
    options: ["P element transposase promoter is active only in germline cells", "The P element third intron contains a stop codon in somatic cells — somatic cells produce a truncated mRNA (the third intron is retained, creating a premature stop) encoding a 66-kDa repressor; germline cells splice all introns correctly, producing full-length 87-kDa functional transposase", "piRNA pathway in somatic cells destroys P element mRNA", "P element DNA is actively methylated in somatic cells to repress transcription"],
    answer: 1,
    explanation: "P element (Drosophila transposon) germline restriction: P element pre-mRNA has 3 introns. In soma: alternative splicing retains intron 3, introducing a stop codon → truncated 66-kDa protein (repressor of transposase activity). In germline: all 3 introns are correctly spliced → full-length 87-kDa transposase (functional). The factor controlling germline-specific splicing of intron 3 is PSI (P element somatic inhibitor) — present in soma, inhibiting intron 3 splicing. This intrinsic restriction plus maternal piRNA-based repression in hybrid dysgenesis model explain P element germline specificity."
  },
  {
    id: 23,
    question: "CRISPR-Cas immunity in bacteria: how is immunological 'memory' established after a viral infection?",
    options: ["Bacteria synthesize antiviral proteins that are stored as immunity", "New spacer sequences from foreign DNA (phage/plasmid) are integrated into the CRISPR array between the leader and the first repeat, by the Cas1-Cas2 complex (adaptation module) — this is the 'spacer acquisition' or 'adaptation' step; these spacers provide memory for future defense", "CRISPR immunity is passed only vertically, not acquired during the bacterial lifetime", "Phage DNA is directly inserted into CRISPR arrays by homologous recombination"],
    answer: 1,
    explanation: "CRISPR adaptation: (1) Cas1-Cas2 complex (the 'integrase' of CRISPR) recognizes PAM sequences on foreign DNA and captures ~33 bp of protospacer DNA; (2) Cas1-Cas2 inserts the new spacer into the leader-proximal end of the CRISPR array between two repeats — half-site integration reaction (tyrosine recombinase-like); (3) The new spacer is incorporated with flanking repeats; (4) New crRNA derived from this spacer provides new immunity. Adaptation favors sequences with functional PAMs. Some type I systems (e.g., I-E Cascade) also contribute to adaptation by primed acquisition."
  },
  {
    id: 24,
    question: "The CRISPR-Cas9 protein cuts DNA at a site determined by the guide RNA spacer sequence AND a short DNA sequence called PAM. What is the PAM (Protospacer Adjacent Motif) requirement for SpCas9 (from S. pyogenes)?",
    options: ["SpCas9 requires a 5'-NGG-3' PAM on the target strand, 3' of the protospacer (in the non-template strand), positioned adjacent to the 20-nt target sequence", "SpCas9 requires a 5'-TTTN-3' PAM on the non-template strand (5' of protospacer)", "SpCas9 has no PAM requirement — only guide RNA sequence determines specificity", "SpCas9 requires 5'-NNNGT-3' PAM for all target sequences"],
    answer: 0,
    explanation: "SpCas9 (Type II-A CRISPR-Cas) recognizes the PAM sequence 5'-NGG-3' on the non-template strand (the strand with same sequence as the protospacer in the sgRNA), immediately 3' of the 20-nt protospacer. PAM recognition (by the PAM-interacting/PI domain of Cas9) triggers R-loop formation — unwinding of dsDNA allowing sgRNA to base-pair with the target strand. Cutting occurs at position 3 nt upstream of the PAM (the 3rd bp from PAM proximal end). Different Cas9 orthologs have different PAMs (SaCas9: NNGRRT; NmCas9: NNNNGATT; Cas12a: TTTN 5' of protospacer)."
  },
  {
    id: 25,
    question: "In eukaryotes, gene conversion (non-crossover HR) between homologs can result in 'loss of heterozygosity' (LOH). How?",
    options: ["Gene conversion always involves crossover, creating chromosome arms with only one parental origin", "Gene conversion copies sequence from one homolog (donor) to the other (recipient) across the conversion tract; if the donor carries a different allele, the recipient becomes homozygous in that region — LOH without chromosomal loss; also, if a conversion event involves a tumor suppressor region, both copies can become mutant, promoting cancer", "Gene conversion only occurs in meiosis and cannot cause LOH in somatic cells", "Gene conversion creates DNA deletions that cause LOH by removing heterozygous segments"],
    answer: 1,
    explanation: "Gene conversion: during HR repair of a DSB in one chromosome, the repair uses the sister chromatid or homolog as template. If the homolog (not sister) is used as template, sequences from the homolog are 'copied' into the repaired chromosome (conversion tract ~1-2 kb). If the homolog carries a different allele at the break site, the repaired chromosome becomes homozygous (LOH without chromosomal loss — 'mitotic LOH'). This is a mechanism for second-hit tumor suppressor inactivation (e.g., NF1, RB1) where a deletion/mutation on one allele is 'copied' across to the other by gene conversion."
  },
  {
    id: 26,
    question: "The Cre-loxP system (from bacteriophage P1) is used in genetics as a conditional recombination tool. What is the mechanism?",
    options: ["Cre is a tyrosine recombinase that catalyzes site-specific recombination between two 34-bp loxP sites — the outcome depends on orientation: direct repeats → excision (deletion); inverted repeats → inversion; loxP sites on different chromosomes → translocation — all without ATP or DNA synthesis", "Cre is a serine recombinase like the Tn3 resolvase that requires a specific protein cofactor (IHF) for activity", "Cre recombination is similar to RAG1/RAG2 V(D)J recombination requiring RSS sequences", "Cre requires a 12/23 rule for loxP recombination analogous to V(D)J"],
    answer: 0,
    explanation: "Cre recombinase (bacteriophage P1): a tyrosine recombinase (like λ Int) that recombines 34-bp loxP sites (13-bp inverted repeats flanking an 8-bp asymmetric spacer). Mechanism: Cre tetramer synapses two loxP sites; sequential strand exchanges via 5'-phosphotyrosine intermediate through a Holliday junction intermediate. Outcome depends on loxP orientation: (1) Direct repeats (same orientation) → excision of intervening DNA as a circle; (2) Inverted repeats → inversion of intervening segment; (3) Different chromosomes → translocation. Used conditionally: 'floxed' (flanked by loxP) allele + tissue-specific Cre → conditional knockout."
  },
  {
    id: 27,
    question: "The 'hot' (hotspot) regions of the E. coli chromosome for homologous recombination are related to Chi sites because:",
    options: ["Chi sites are origins of replication that produce ssDNA for RecA loading", "Chi sites (GCTGGTGG, ~1000/chromosome) modify RecBCD activity from predominant degradation to recombinogenic: Chi attenuates RecD nuclease, switches RecBCD to produce RecA-coated 3' ssDNA, and RecBCD then continues unwinding in a recombination-promoting mode — making Chi sites hotspots where HR is initiated", "Chi sites form G-quadruplex structures that pause replication and promote DSBs", "Chi sites are methylated by Dam and recognized by MutH for MMR at recombination hotspots"],
    answer: 1,
    explanation: "Chi (χ) sites in E. coli: 8-mer 5'-GCTGGTGG-3'. RecBCD encounters Chi while unwinding from DSB ends: recognition causes (1) attenuation of RecD 5'→3' nuclease (or RecD release/inactivation); (2) RecBCD continues as a helicase but now primarily the RecB nuclease degrades the 5' strand rather than 3'; (3) RecB loads RecA onto the 3' ssDNA emerging from the complex. Net: Chi switches RecBCD from a degradation machine to a recombination-promoting helicase, generating RecA-ssDNA for strand invasion. Chi occurs 1 per 5 kb in E. coli — oriented toward replication terminus to bias repair toward the sister chromatid."
  },
  {
    id: 28,
    question: "Mariner elements (e.g., Tc1/mariner superfamily) are notable for their:",
    options: ["Dependence on host recombination machinery for transposition", "Autonomous transposition requiring only the element-encoded transposase and no host cofactors — the minimal system explains their widespread distribution across all animal phyla and potential utility in gene therapy vectors", "Exclusive transposition via RNA intermediates (unlike other DNA transposons)", "Preference for transcriptionally active genes (insertions into 5' ends of active genes)"],
    answer: 1,
    explanation: "Tc1/mariner elements: DNA transposons characterized by AT-rich TIRs (~30 bp) and a single transposase ORF. Their most distinctive feature is transposition autonomy — they can transpose in virtually any cell (bacteria, yeast, invertebrates, vertebrates) because they require ONLY the element-encoded transposase (no host cofactors beyond DNA). This makes them widely distributed across animal phylogeny (one of the most successful eukaryotic TE families). Mariner-derived vector systems (e.g., Mos1, Sleeping Beauty — derived from salmonid fish mariner) are used in gene therapy and mutagenesis screens."
  },
  {
    id: 29,
    question: "Sleeping Beauty (SB) transposon is a reconstructed, resurrected transposon used in gene therapy. It was derived by:",
    options: ["Engineering E. coli transposase for eukaryotic codon usage", "Comparative genomics and evolutionary biology: comparison of ~10 inactive Tc1/mariner transposons found in fish genomes allowed reconstruction of the ancestral active sequence by 'phylogenetic footprinting' (identifying conserved functional residues); the reconstructed transposase was shown to be active in vertebrate cells", "Chemical mutagenesis of the Tc1 transposase to increase activity", "Random gene synthesis of a hypothetical transposase based on structural models"],
    answer: 1,
    explanation: "Sleeping Beauty (1997, Ivics et al.): inactive Tc1-like fish transposons from salmonid genomes were analyzed. By comparing ~12 related inactive copies and phylogenetic reconstruction, ancestral codons at functionally critical positions were identified. These 12 'corrective mutations' were introduced into one inactive element → resurrected an active transposase. SB is now used in gene therapy (for hemophilia, sickle cell disease) and functional genomics (SB100X hyperactive variant). Its advantages: integrates into TA dinucleotides (not biased toward transcription start sites unlike AAV/lentivirus), relatively small size."
  },
  {
    id: 30,
    question: "The difference between Class I (LTR) and Class II (non-LTR/LINE) retrotransposons mechanistically is:",
    options: ["Class I uses integrase; Class II does not integrate into chromosomes", "LTR retrotransposons (Ty1, copia) produce an extrachromosomal dsDNA intermediate (reverse transcribed in viral-like particles, similar to retroviruses) that is then integrated by an integrase; non-LTR retrotransposons (LINEs) use target-primed reverse transcription (TPRT) — EN nicks target DNA, 3'-OH primes reverse transcription directly in situ on the target site, no extrachromosomal intermediate", "Both classes use identical TPRT mechanism but differ in LTR length", "Class I elements are found only in plants; Class II (LINEs) only in animals"],
    answer: 1,
    explanation: "LTR retrotransposons: similar to retroviruses (without envelope). GAG + POL (RT, integrase, PR). Mechanism: transcription → RNA exported → VLP (virus-like particle) → RT reverse-transcribes RNA to dsDNA in VLP → integrase integrates dsDNA into chromosome at new site. Non-LTR (LINEs, L1): ORF1 (RNA-binding/chaperone) + ORF2 (EN, RT). Mechanism: L1 mRNA translated → ORF2 EN nicks target DNA → target 3'-OH primes RT → new DNA strand synthesized from RNA template in situ → completion of second strand + ligation (imprecisely, causes 5' truncations). Key difference: extrachromosomal vs in situ reverse transcription."
  },
  {
    id: 31,
    question: "Lambda excisive recombination (integration reversal) requires additional factors beyond those needed for integration. Which factors are specifically needed for excision but not integration?",
    options: ["Xis protein (excisionase) is needed for excision but not integration; IHF is needed for both; Int alone can integrate but requires Int+Xis+IHF for excision from attL and attR sites", "Only IHF is additionally needed for excision, not integration", "RecA is specifically needed for excision to resolve Holliday junctions", "RNA Pol II transcription through the att sites is needed only for excision"],
    answer: 0,
    explanation: "λ integration vs excision: Integration: attP × attB → attL + attR, requires Int protein only (plus IHF that bends attP for efficient complex formation, and occasionally FIS). Excision: attL × attR → attP + attB, requires Int + Xis + IHF (and sometimes FIS). Xis (excisionase): a small basic protein that binds cooperatively to attR and attL; Xis changes the DNA architecture, enabling Int to catalyze the reverse (excision) reaction. Xis also inhibits integration to ensure directionality (prevents re-integration of excised phage DNA). This is exploited in the gateway cloning technology."
  },
  {
    id: 32,
    question: "In the context of DNA transposition, 'target immunity' refers to which phenomenon?",
    options: ["The immune system prevents transposition into antibody loci", "After a transposon inserts into a DNA molecule, that molecule becomes refractory to further insertions of the same transposon — preventing multiple insertions into the same replicon and ensuring even genome-wide distribution; mediated by transposase binding to TIRs of existing insertions and inhibiting synapsis of nearby sites", "Trans-acting repressors encode immunity molecules against transposon mRNAs", "Target immunity is the preference of some transposons for transcriptionally active chromatin"],
    answer: 1,
    explanation: "Target immunity (Tn3, Mu): replicons already containing a transposon are poor targets for subsequent insertions of the same element. Mechanism (for Mu phage): MuA transposase bound to existing Mu TIRs can inhibit MuA on a new Mu element from using the same DNA molecule as target (but not as donor). For Tn3: TnpA (resolvase) at existing res sites provides immunity. This ensures equitable distribution of insertions and prevents 'co-replication' artifacts. For Mu, HMGA/IHF-dependent long-range communication between bound TIRs and target sites across the same DNA molecule mediates immunity."
  },
  {
    id: 33,
    question: "Cas12a (Cpf1) differs from Cas9 in several key ways. Which of the following is correct?",
    options: ["Cas12a uses sgRNA with the same scaffold as SpCas9", "Cas12a requires only a crRNA (not tracrRNA), recognizes a T-rich PAM (5'-TTTN-3') 5' of the protospacer, cuts both strands with a single RuvC-like domain (no HNH equivalent), creates staggered cuts producing 5' overhangs, and shows collateral ssDNA cleavage activity activated by its target DNA binding — used in SHERLOCK/DETECTR diagnostics", "Cas12a cuts DNA at a site 3' of the PAM (same as Cas9)", "Cas12a and Cas9 produce identical blunt-end DSBs at the same position relative to PAM"],
    answer: 1,
    explanation: "Cas12a (formerly Cpf1): (1) Processes its own pre-crRNA array (no tracrRNA needed — crRNA alone sufficient); (2) PAM: 5'-TTTN-3' on the non-target strand, 5' of the 23-nt protospacer (opposite to Cas9's 3' NGG); (3) Cutting: single RuvC-like nuclease domain makes staggered cuts → 5-nt 5' overhangs (vs Cas9 blunt cuts); (4) Cuts ~18-23 nt from PAM (vs Cas9 cuts 3 nt from PAM); (5) Collateral (trans) cleavage: upon target binding, activated Cas12a degrades nearby ssDNA non-specifically → DETECTR diagnostic platform; (6) Smaller than Cas9 → easier AAV delivery. Used for SHERLOCK/DETECTR detection of SARS-CoV-2 and other pathogens."
  },
  {
    id: 34,
    question: "The SOS-induced TLS polymerase UmuD'₂C (DNA Pol V) in E. coli is regulated by which post-translational modification of UmuD?",
    options: ["UmuD is phosphorylated by a DNA damage-activated kinase to become UmuD'", "UmuD is activated by RecA∗-stimulated autocleavage at Cys24-Gly25, removing the N-terminal 24 amino acids to produce UmuD' (shorter form) — analogous to LexA autodigestion; UmuD'₂C (pol V) is the active TLS polymerase for bypassing UV lesions and causing SOS mutagenesis", "UmuD is activated by alkylation at its active site cysteine analogous to MGMT", "UmuD forms disulfide bonds with UmuC upon DNA damage to activate the complex"],
    answer: 1,
    explanation: "UmuD regulation: (1) Under SOS, LexA derepresses umuDC operon; (2) UmuD protein (15 kDa) is initially inactive; RecA∗ stimulates UmuD autocleavage (Cys24-Gly25 scissile bond) → UmuD' (12 kDa); (3) UmuD'₂ dimer interacts with UmuC → UmuD'₂C = Pol V (the SOS TLS polymerase); (4) Pol V preferentially incorporates opposite CPDs and other UV lesions (often incorrectly → SOS mutagenesis — ~80% of UV-induced mutations); (5) Pol V requires RecA∗ filament for activity (RecA∗ hands off ssDNA to Pol V active site). The cleaved N-terminal fragment of UmuD (UmuD1) has regulatory roles in DNA damage tolerance."
  },
  {
    id: 35,
    question: "Alu elements (human SINEs) are considered 'non-autonomous' retrotransposons because:",
    options: ["Alu elements have their own reverse transcriptase but require L1 for integration", "Alu elements lack functional ORFs encoding reverse transcriptase or endonuclease — they depend entirely on L1 ORF2 protein (which has both RT and EN activities) in trans to catalyze their retrotransposition via TPRT mechanism", "Alu elements are DNA transposons that require host transposase", "Alu elements use a piRNA-mediated replication mechanism"],
    answer: 1,
    explanation: "Alu elements (~280 bp dimers of 7SL RNA-derived monomers) are 'non-autonomous' SINE retrotransposons: they are transcribed by RNA Pol III (using internal A and B box promoters) but contain no ORFs. They 'hijack' the L1 retrotransposition machinery — specifically L1 ORF2p (which has EN and RT activities) recognizes the Alu poly-A tail and the RNA itself, performing TPRT on Alu RNA transcripts at new genomic locations. Alu insertions can cause genetic disease (hemophilia, breast cancer, neurofibromatosis) and drive genomic evolution. ~1.1 million Alu copies occupy ~11% of the human genome."
  },
  {
    id: 36,
    question: "During meiosis I, crossovers between homologous chromosomes are designated as 'Class I' or 'Class II'. The Class I pathway is characterized by:",
    options: ["Random distribution of crossovers without any spacing requirement", "Crossover interference — Class I COs show positive interference (one CO reduces the probability of nearby COs), are dependent on ZMM proteins (Zip1/SYCP1, Zip2-4, Mer3/HFM1, Msh4/5), and involve MLH1-MLH3 endonuclease for resolution — constituting the obligate CO per chromosome pair in most organisms", "Class I COs use the same resolution machinery as mitotic DSBs (SLX1-SLX4, GEN1)", "Class I COs are the minority pathway in Saccharomyces cerevisiae"],
    answer: 1,
    explanation: "Meiotic crossover classes: Class I (majority in most species): ZMM-dependent pathway. ZMM proteins (Zip1=SYCP1, Zip2, Zip3, Zip4, Mer3, Msh4, Msh5, Spo16) stabilize joint molecules and promote class I CO formation. Shows interference — if one CO occurs, another is less likely nearby (positive interference, ~50-70 cM spacing in humans). Resolution by MLH1-MLH3 endonuclease. Required for the 'obligate crossover' per bivalent. Class II (minority, ~15-30%): ZMM-independent, uses MUS81-EME1 (+SLX1-SLX4) resolvases, no interference. Both classes require initial strand invasion by RAD51/DMC1."
  },
  {
    id: 37,
    question: "Which enzyme is uniquely required for meiotic recombination (but not mitotic HR) as the meiosis-specific RecA homolog?",
    options: ["RAD51B (XRCC3) — a RAD51 paralog expressed only in meiosis", "DMC1 (Disrupted Meiotic cDNA 1) — the meiosis-specific RecA/RAD51 homolog that preferentially promotes inter-homolog strand invasion (rather than sister chromatid), essential for meiotic crossover formation; works with RAD51 in a mixed filament; regulated by HORMAD1/HORMAD2 and Hop2-Mnd1 complex", "SPO11 — a meiosis-specific topoisomerase that also performs strand exchange", "BRCA2 — overexpressed in meiosis to replace RAD51 in strand invasion"],
    answer: 1,
    explanation: "DMC1 (Disrupted Meiotic cDNA, also called LIM15): a meiosis-specific RecA/RAD51 family member expressed only in meiotic prophase I. It preferentially mediates inter-homolog strand invasion (necessary for meiotic crossovers between homologs) rather than sister chromatid invasion (which is preferred in mitosis). DMC1 requires: Hop2-Mnd1 complex (stabilizes DMC1 on ssDNA and promotes D-loop formation); regulated by HORMAD1/2 (axial element proteins that are 'sensors' of unrepaired DSBs on chromosome axes). DMC1 null mice are sterile — completely blocked meiosis. In yeast, DMC1 (dmc1) mutation causes identical phenotype."
  },
  {
    id: 38,
    question: "The 'gene drive' technology using CRISPR-Cas9 exploits which biological mechanism?",
    options: ["Gene drives use homologous recombination to insert a CRISPR-Cas9 system into a specific locus; when inherited heterozygously, the CRISPR-Cas9 cuts the wild-type allele and copies the drive (including Cas9 + guide RNA) via HDR into the cut site — converting heterozygotes to homozygotes at rates exceeding 50%, causing the drive to spread through populations", "Gene drives use NHEJ to randomly insert Cas9 throughout the genome", "Gene drives block meiotic recombination on specific chromosomes", "Gene drives use piRNA pathway to silence specific genes in all offspring"],
    answer: 0,
    explanation: "CRISPR gene drives: a Cas9 + sgRNA cassette is inserted (flanked by homology) at the target locus. In a heterozygote, Cas9 (expressed from the drive) is guided by the sgRNA to cut the wild-type allele → HDR uses the drive-containing chromosome as template → drive copies itself into the cut site → converts heterozygote to homozygote (carrying the drive). Since progeny inherit the drive >50% (approaching 100%), the drive spreads super-Mendelianly through populations. Applications: disease vector control (Anopheles mosquito for malaria), invasive species elimination. Risks: ecological impact, evolutionary resistance."
  },
  {
    id: 39,
    question: "The Cas13 system (Class 2, Type VI CRISPR) is distinct from Cas9 and Cas12a in that it:",
    options: ["Cas13 targets and cleaves ssDNA rather than dsDNA", "Cas13 is an RNA-guided RNA endonuclease — it binds and cleaves complementary ssRNA targets (not DNA) using its two HEPN (Higher Eukaryotes and Prokaryotes Nucleotide-binding) catalytic domains; it also has 'collateral' RNA cleavage activity upon target binding (cleaves bystander RNA non-specifically) — used in SHERLOCK diagnostics", "Cas13 cleaves dsDNA using its unique HNH and HEPN domains", "Cas13 performs base editing of RNA targets without strand cleavage"],
    answer: 1,
    explanation: "Cas13 (LwaCas13a, RfxCas13d/CasRx, etc.): Type VI CRISPR-Cas effector with two HEPN (Higher Eukaryotes and Prokaryotes Nucleotide-binding) RNase domains. It targets single-stranded RNA (not DNA). Upon crRNA-guided base pairing with target ssRNA, Cas13's HEPN domains are activated → cleaves target RNA AND collaterally cleaves bystander ssRNAs non-specifically. The collateral RNA cleavage (unlike Cas12a's collateral ssDNA cleavage) is used in SHERLOCK (Specific High-sensitivity Enzymatic Reporter unLOCKing) for sensitive RNA pathogen detection (SARS-CoV-2, HIV, Zika)."
  },
  {
    id: 40,
    question: "The 'priming' of piRNA biogenesis from new transposon insertions in Drosophila involves which mechanism?",
    options: ["New TE insertions are recognized by Toll-like receptors that activate piRNA gene transcription", "Transcripts from new TE insertions (sense TE RNA) enter the existing piRNA ping-pong cycle: antisense piRNAs from existing piRNA clusters guide PIWI proteins to slice the sense TE transcript → generates new piRNA precursors that are amplified by the ping-pong loop between PILI (Ago3) and Aub proteins; establishing ongoing silencing of the new TE family", "Piwi protein directly methylates the inserted TE DNA immediately after transposition", "New TE insertions are silenced by H3K9me2 deposited by G9a without any piRNA involvement"],
    answer: 1,
    explanation: "piRNA 'ping-pong' amplification in Drosophila: (1) Primary piRNAs (10A-enriched antisense, from cluster transcripts) load into Aubergine (Aub)/PIWI; (2) Aub-piRNA slices sense TE transcript → 5'-OH intermediate → Zucchini (mitochondria-associated nuclease) trims → new piRNA with 10A loading into Ago3; (3) Ago3-piRNA targets antisense TE transcripts (from piRNA clusters) → new piRNAs with 5'U loading into Aub. This amplification (ping-pong, detectable by 10-nt overlap signature between sense/antisense piRNAs) allows rapid adaptation to new TE insertions by 'recognizing' the new TE transcript sequence."
  },
  {
    id: 41,
    question: "Which feature of LINE-1 (L1) retrotransposition makes it potentially oncogenic?",
    options: ["L1 codes for a protein that acts as a direct transcription factor activating proto-oncogenes", "L1 insertions can disrupt gene function (insertion mutagenesis), activate nearby genes through their internal promoter (sense or antisense), or provide regulatory sequences; additionally, L1 ORF2p (EN+RT) has been implicated in causing DSBs at non-L1 sites (EN activity on genomic DNA) contributing to genome instability; and L1 is derepressed in many cancers due to global hypomethylation", "L1 encodes a direct oncogenic kinase (similar to v-Src)", "L1 insertions exclusively activate tumor suppressor genes"],
    answer: 1,
    explanation: "L1 oncogenic mechanisms: (1) Insertional mutagenesis: L1 insertions have been found disrupting APC, PTEN, TP53 in human tumors (Lee et al.); (2) L1 internal promoter can activate nearby genes (antisense promoter → chimeric transcripts, potential oncogene activation); (3) L1 EN activity can create DSBs at non-L1 sites → chromosomal instability; (4) L1 derepression: many cancers show global DNA hypomethylation → L1 promoter demethylation → transcriptional reactivation → L1 RNA/protein accumulates; (5) Reverse-transcribed DNA can trigger cGAS-STING innate immune activation. L1 derepression is a pan-cancer phenomenon."
  },
  {
    id: 42,
    question: "The γδ (or Tn1000) resolvase from Tn3 family and the λ integrase belong to different families of site-specific recombinases. Which statement correctly distinguishes them?",
    options: ["Both use serine as the active site nucleophile and form identical 5'-phosphoserine intermediates", "λ Int is a tyrosine recombinase: uses Tyr as nucleophile, 5'-phosphotyrosyl intermediate, sequential strand exchange through a Holliday junction, no double-strand break simultaneously; γδ resolvase is a serine recombinase: uses Ser as nucleophile, 5'-phosphoserine, both strands cut simultaneously (DSB), rotation mechanism, topologically locked for only deletion/resolution", "λ Int requires Mg2+ while γδ resolvase does not", "Both recombinases achieve identical topological outcomes (crossovers and non-crossovers)"],
    answer: 1,
    explanation: "Tyrosine recombinases (λ Int, Cre, FLP, XerCD): Tyr nucleophile → 3'-phosphotyrosyl intermediate → single-strand cleavage → HJ intermediate → sequential strand exchanges → no DSB simultaneously. Flexible topology (can integrate, excise, invert, depending on site orientation and accessory proteins). Serine recombinases (Tn3/γδ resolvase, β recombinase, Sin, CinH): Ser nucleophile → 5'-phosphoserine intermediate → simultaneous DSB at both strands → 180° rotation of cut subunits → religation → only deletion/resolution (topologically locked by subunit architecture — cannot integrate/invert). Key difference: Tyr→ HJ vs Ser→ rotation-DSB."
  },
  {
    id: 43,
    question: "The concept of 'topoisomerase poisoning' by camptothecin (CPT) relates to DNA repair because:",
    options: ["CPT inhibits topoisomerase I by blocking its initial DNA binding", "CPT stabilizes the topoisomerase I covalent cleavage complex (Top1cc — Top1 covalently attached via Tyr to the 3' end of nicked DNA), preventing religation; when replication forks collide with Top1cc, they create replication fork reversal or DSBs — requiring TDRD3-TOPO1, TDP1 (Tyrosyl-DNA Phosphodiesterase 1) or NEIL1/APEX to remove the 3'-Top1-DNA adduct, followed by DNA repair", "CPT prevents topoisomerase I from unwinding DNA ahead of replication forks", "CPT directly alkylates DNA creating DSBs without any topoisomerase involvement"],
    answer: 1,
    explanation: "Camptothecin (CPT) and clinical analogs (irinotecan, topotecan): Top1 creates nicks in DNA → CPT intercalates into the Top1-DNA interface, stabilizing the 3'-phosphotyrosyl cleavage complex (Top1cc). Top1cc normally rapidly re-ligates; CPT prevents religation. When replication forks encounter Top1cc: fork reversal/DSBs created (or transcription elongation complexes collide with Top1cc → R-loops). Repair: TDP1 (tyrosyl-DNA phosphodiesterase 1) hydrolyzes the 3'-phosphotyrosine bond after Top1 proteolysis (releasing a 3'-phosphate), then BER/SSBR completes repair. TDP1 mutations cause spinocerebellar ataxia with axonal neuropathy (SCAN1)."
  },
  {
    id: 44,
    question: "During meiosis II (equational division), why does the chromosome number remain the same (n → n) rather than halving again?",
    options: ["Meiosis II is only needed in females; males skip meiosis II", "Meiosis II separates sister chromatids (like mitosis), not homologs. After meiosis I, each secondary oocyte/spermatocyte has n chromosomes (each consisting of two sister chromatids still held by centromeric cohesin); meiosis II cleaves centromeric cohesin, separating sisters → n chromosomes per haploid gamete", "DNA replication occurs between meiosis I and II to restore the chromosome number", "Meiosis II involves a second round of homolog pairing to avoid losing chromosomes"],
    answer: 1,
    explanation: "Meiosis overview: (1) Meiosis I (reductional): separates homologous chromosomes (2n → two n cells, each with n chromosomes composed of two sister chromatids connected at centromere). Arm cohesion (non-centromeric cohesin with REC8) is cleaved in anaphase I by separase (after Securin degradation). Centromeric cohesin (SGO1/PP2A protected) remains. (2) Meiosis II (equational): separates sister chromatids (similar to mitosis). Centromeric cohesin cleaved by separase. Result: 4 haploid cells, each with n chromosomes of single chromatids. No DNA synthesis between meiosis I and II (unlike interphase in mitosis)."
  },
  {
    id: 45,
    question: "The Ku70-Ku80 heterodimer in NHEJ has affinity for DNA ends. What happens to the Ku complex after the broken ends are ligated?",
    options: ["Ku remains permanently at the ligation site as a mark of previous DSB repair", "Ku must be actively removed from internal DNA after ligation; AAA+ ATPase (VCP/p97 in vertebrates) extracts ubiquitylated Ku70/80 from DNA; in yeast, Ku undergoes ubiquitylation and proteasomal degradation to clear it post-ligation; failure to remove Ku can block subsequent repair or cause chromosomal abnormalities", "Ku is phosphorylated by DNA-PKcs and dissociates spontaneously after ligation", "Ku slides inward on the DNA until it falls off at the next transcription complex"],
    answer: 1,
    explanation: "Ku removal post-NHEJ: Ku (Ku70/80 heterodimer) is a ring that encircles dsDNA and cannot simply slide off closed/ligated DNA ends (it is topologically trapped). Removal requires: (1) In vertebrates: SPRTN/DVC1 and VCP/p97 (AAA+ ATPase, also called p97/CDC48) extract ubiquitylated Ku from DNA; (2) RNF8 (E3 ligase) and other ubiquitin machinery ubiquitylate Ku70; (3) In yeast: Ku undergoes ubiquitylation (via Cdc48/p97) and proteasomal degradation. Defective Ku removal leads to Ku-DNA adducts that block repair (similar to topoisomerase-DNA adducts). Ku dynamics are essential for proper NHEJ completion."
  },
  {
    id: 46,
    question: "Which small molecule inhibitor of PARP is specifically a 'trapper' (compared to PARP catalytic inhibitors) and what does PARP trapping mean?",
    options: ["A PARP trapper prevents PARP synthesis by inhibiting transcription of PARP1", "PARP trapping refers to inhibitors that block PARP1/2 catalytic activity AND additionally prevent PARP dissociation from SSB sites (converting transient SSB-binding events into long-lived, toxic PARP-DNA complexes); talazoparib (BMN-673) is the most potent trapper; the cytotoxic effect correlates with PARP trapping potency, not just catalytic inhibition — explaining why talazoparib is more potent than olaparib despite similar PARP inhibition", "PARP trapping refers to PARylation of nuclear pore proteins that traps chromatin in the nucleus", "PARP trappers prevent PARP PARylation of H2A at DSB sites to block 53BP1 signaling"],
    answer: 1,
    explanation: "PARP trapping (Murai et al. 2012): PARP1 binds SSBs, auto-PARylates and dissociates. PARP inhibitors reduce PARylation; but PARPi also have allosteric effects preventing PARP1 dissociation from DNA ('trapping'). Trapping potency ranking: talazoparib > niraparib > rucaparib > olaparib > veliparib. Trapped PARP1-DNA complexes are more cytotoxic than catalytic inhibition alone (the covalent-like protein-DNA complex blocks replication/transcription machinery). This explains: (1) Why some PARPi are more effective than others beyond their Ki for PARP; (2) Why talazoparib achieves similar efficacy at lower doses. Trapping sensitivity also differs by cancer mutations."
  },
  {
    id: 47,
    question: "CRISPR base editors (CBE and ABE) were developed to make specific base changes without DSBs. What is the mechanism of Cytosine Base Editor (CBE)?",
    options: ["CBE uses Cas9 to create a nick, then polymerase extends with a new C→T base change", "CBE: a catalytically impaired Cas9 (nickase, D10A mutation in RuvC domain) fused to a cytidine deaminase (APOBEC1 or similar) + UGI (uracil-glycosylase inhibitor); sgRNA directs the fusion to target site → R-loop formed → cytidine deaminase converts C→U in the displaced ssDNA (non-target strand) within an editing window (positions 4-8 of protospacer); UGI blocks UNG from removing U → nickase creates a nick in the non-C-containing strand → mismatch repair uses the U-containing strand as template → C→T (or G→A on opposite strand) transition without a DSB", "CBE uses Cas9 to delete a codon and replace it with a C→T mutation simultaneously", "CBE is a fusion of SpCas9 with adenosine deaminase that edits cytosines"],
    answer: 1,
    explanation: "CBE (Komor et al. 2016): nCas9(D10A)-APOBEC1-UGI. SpCas9 D10A nickase unwinds DNA via R-loop. Cytidine deaminase converts C→U in non-template ssDNA bubble (within editing window ~4-8 from PAM distal end). UGI prevents UNG from excising U (reverting the edit). nCas9 nicks the non-edited strand (template strand), biasing mismatch repair to use the U-containing strand → U read as T → C:G→T:A conversion. BE4max: additional Cas9 domains optimize the window and efficiency. ABE (Gaudelli et al.): evolved adenosine deaminase (TadA) converts A→I in ssDNA → I read as G → A:T→G:C conversion. Both require sgRNA but produce no DSBs."
  },
  {
    id: 48,
    question: "The resolution of meiotic double Holliday junctions (dHJ) to produce crossovers is dependent on which enzyme that differs from the mitotic BLM-TOP3α dissolution pathway?",
    options: ["SLX4-SLX1 resolves meiotic dHJs to crossovers in the same way as mitotic resolution", "MLH1-MLH3 (the MutL-gamma complex) acts as an endonuclease on meiotic dHJ intermediates stabilized by ZMM proteins — MLH1-MLH3 makes nicks to generate crossovers; MLH3 is the endonuclease subunit (PMS2-like DQHA(X)2E(X)4E motif); this explains why MLH3 mutations cause male infertility from lack of crossovers", "BLM helicase (instead of being anti-crossover in mitosis) generates meiotic crossovers in collaboration with TOP3α", "Mus81-EME1 is the only meiotic Class I crossover resolvase"],
    answer: 1,
    explanation: "MLH1-MLH3 (MutLγ): the Class I meiotic crossover resolution machinery. Structure-selective endonuclease using MLH3 metal coordination motif. In a ZMM-dependent pathway: dHJs stabilized by ZMM proteins (especially Zip4, Mer3/HFM1, Msh4-Msh5) → MLH1-MLH3 (with Exo1 and Sgs1/RECQL5 for nick-directed resolution) resolves them to crossovers. MLH1 or MLH3 null mice: sterile, lack crossovers on most chromosomes, non-disjunction. MutLγ also interacts with Exo1, RFC, PCNA for its endonuclease activity in vivo. Distinct from MLH1-PMS2 (MutLα) used for mismatch repair in somatic cells."
  },
  {
    id: 49,
    question: "Prime editing, developed by David Liu's lab, offers which advantage over CBEs and ABEs?",
    options: ["Prime editing is faster but less accurate than CBEs", "Prime editing (PE) can install all 12 types of point mutations, small insertions, and small deletions without DSBs or donor DNA templates. It uses a PE fusion protein (nCas9-D10A + engineered MMLV RT) and a pegRNA (contains spacer for nick site targeting + RT template + PBS sequence) — the RT template encodes the desired edit; PE makes a nick on the non-target strand, reverse transcribes the pegRNA template to create a 3' flap with the edit, which is incorporated by flap equilibration and mismatch repair", "Prime editing requires DSBs for efficient template integration", "Prime editing only corrects A:T to G:C transitions, same scope as ABEs"],
    answer: 1,
    explanation: "Prime editing (Anzalone et al. 2019): (1) nCas9(H840A) nicks non-target strand ~3 bp upstream of PAM; (2) 3'-OH primes reverse transcription using pegRNA as template; pegRNA = sgRNA + RT template (containing desired edit) + primer binding sequence (PBS, complementary to the 3'-OH released by nicking); (3) Reverse transcription by MMLV RT creates 3' flap with the desired edit; (4) Flap equilibration (5' flap excision by FEN1) and cellular MMR incorporate the edit. Scope: all 12 point mutation types, small indels up to ~80 nt insertions; disadvantages: lower efficiency than CBE/ABE for simple transitions, larger construct, pegRNA design required. PE3 uses a second nick to bias repair."
  },
  {
    id: 50,
    question: "In E. coli, RecFOR pathway (alternative to RecBCD) repairs ssDNA gaps at stalled replication forks. What is the role of RecF, RecO, and RecR?",
    options: ["RecFOR complex degrades the gap to create a DSB that RecBCD can then process", "RecF binds ssDNA-dsDNA junctions (gap edges); RecOR promotes RecA loading onto ssDNA gaps by replacing SSB; RecFOR together load RecA onto gapped ssDNA to form a filament extending from the 5' end of the gap — enabling template switching or post-replication repair of ssDNA gaps resulting from lesion bypass", "RecFOR primarily functions in mutagenic TLS repair", "RecFOR cleaves the SSB protein off ssDNA to expose it directly for RecA binding without any other function"],
    answer: 1,
    explanation: "RecFOR pathway (repairs ssDNA gaps, important for lagging-strand gap repair): (1) RecF binds ATP, recognizes ssDNA-dsDNA junctions (the edges of gaps); (2) RecOR: RecO binds SSB and displaces it from ssDNA; RecR stimulates RecO activity and stabilizes RecOR on ssDNA; RecOR together with RecF form a complex that loads RecA onto SSB-coated ssDNA at the 5' edge of the gap; (3) RecA extends the filament into the gap 5'→3'; (4) RecA filament on the gap allows: template switching (daughter strand gap repair using complementary sequence), or RecA-mediated repair synthesis. RecFOR is essential in recBC mutants and for repair of UV-induced ssDNA gaps on lagging strand."
  }
];

export default questions
