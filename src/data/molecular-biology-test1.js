const questions = [
  {
    id: 1,
    question: "The B-form of DNA, which is the most common form in physiological conditions, has which of the following structural characteristics?",
    options: ["Left-handed double helix with 11 bp per turn and narrow major groove", "Right-handed double helix with 10.5 bp per turn, 3.4 Å rise per base pair, and wide major groove accessible to proteins", "Right-handed double helix with 11 bp per turn and equal-width major and minor grooves", "Left-handed double helix with 12 bp per turn found in GC-rich sequences"],
    answer: 1,
    explanation: "B-DNA (Watson-Crick model): right-handed double helix, 10.5 bp per turn (36° rotation/bp), 3.4 Å rise per bp, 34 Å pitch, ~20 Å diameter. Wide major groove (12 Å wide, 8.5 Å deep) and narrow minor groove (6 Å wide, 7.5 Å deep). Most transcription factors and restriction enzymes contact DNA in the major groove where the chemical identity of each base pair is accessible. A-DNA (dehydrated, 11 bp/turn, right-handed) and Z-DNA (GC-rich, left-handed, 12 bp/turn, zigzag backbone) are alternative conformations."
  },
  {
    id: 2,
    question: "Chargaff's rules state that in double-stranded DNA, [A]=[T] and [G]=[C]. This reflects which structural feature?",
    options: ["Both strands have identical base sequences", "Complementary antiparallel base pairing: A pairs with T via 2 hydrogen bonds, G pairs with C via 3 hydrogen bonds — so each base on one strand is paired with its complement on the other strand", "All four bases are present in equal amounts in the genome", "DNA strands run parallel to each other with complementary sequences"],
    answer: 1,
    explanation: "Chargaff's rules (1950): [A]=[T] and [G]=[C] in dsDNA, directly reflecting Watson-Crick base pairing. A:T pairs form 2 hydrogen bonds (N1-N3 and N6-O4); G:C pairs form 3 hydrogen bonds (N1-N3, N2-O2, O6-N4) — which is why G:C-rich sequences have higher melting temperature (Tm). The antiparallel orientation (5'→3' on one strand paired with 3'→5' on the other) is also fundamental. These rules led Watson and Crick to propose the double helix model."
  },
  {
    id: 3,
    question: "The Meselson-Stahl experiment (1958) demonstrated semi-conservative DNA replication using:",
    options: ["Radioactive ³²P labeling of DNA followed by ultracentrifugation", "¹⁵N (heavy nitrogen) labeling of E. coli DNA followed by cesium chloride (CsCl) equilibrium density gradient ultracentrifugation, showing that replicated DNA has one heavy and one light strand", "Electron microscopy of replication forks in E. coli", "Autoradiography of ³H-thymidine labeled chromosomes"],
    answer: 1,
    explanation: "Meselson-Stahl: E. coli grown in ¹⁵N medium (heavy DNA) → transferred to ¹⁴N medium → DNA extracted at each generation → CsCl density gradient centrifugation. Results: Generation 0: all heavy (HH). Generation 1: all hybrid (HL). Generation 2: equal heavy-light hybrid (HL) and light (LL). This definitively proved semi-conservative replication (each new DNA molecule has one parental strand + one new strand). Conservative (both parental strands together in one molecule) and dispersive (strands randomly mixed) models were excluded."
  },
  {
    id: 4,
    question: "DNA Polymerase III (Pol III) in E. coli differs from DNA Polymerase I in that:",
    options: ["Pol III has 3'→5' exonuclease activity; Pol I does not", "Pol III is the main replicative polymerase with high processivity (synthesis of thousands of nucleotides without dissociation); Pol I has gap-filling and nick-translation activity used for removing RNA primers and filling the resulting gaps", "Pol I synthesizes DNA in the 3'→5' direction; Pol III synthesizes in the 5'→3' direction", "Pol III requires no primer; Pol I requires an RNA primer for synthesis"],
    answer: 1,
    explanation: "E. coli DNA Pol III: main replicative enzyme, high processivity (>50,000 nt without dissociation, enabled by the β-clamp sliding clamp), 5'→3' polymerase + 3'→5' proofreading exonuclease. Pol I (Kornberg enzyme): 5'→3' polymerase + 5'→3' exonuclease (nick-translation) + 3'→5' proofreading exonuclease — used for removing RNA primers and filling resulting gaps. Both enzymes require a 3'-OH primer. Pol II: DNA repair. Pol IV and V: error-prone translesion synthesis (SOS response)."
  },
  {
    id: 5,
    question: "The lagging strand during DNA replication requires discontinuous synthesis because:",
    options: ["The lagging strand template is single-stranded and cannot be read by Pol III", "DNA polymerase can only synthesize DNA in the 5'→3' direction; on the lagging strand, which runs 3'→5' in the direction of replication fork movement, synthesis must occur in short Okazaki fragments (100-200 nt in eukaryotes, 1000-2000 nt in prokaryotes) each initiated by a new RNA primer", "The lagging strand has more secondary structures blocking continuous synthesis", "Lagging strand synthesis requires a different polymerase that lacks processivity"],
    answer: 1,
    explanation: "The replication fork moves in one direction, but both template strands must be replicated. The leading strand template runs 3'→5' (same direction as fork movement) allowing continuous synthesis by Pol III. The lagging strand template runs 5'→3' opposite to fork movement, so Pol III synthesizes short Okazaki fragments (each in 5'→3' direction, but overall in the opposite direction to fork movement). Each Okazaki fragment requires: primase synthesizing RNA primer (8-12 nt) → Pol III extends → Pol I replaces RNA primer → DNA ligase seals the nick between adjacent fragments."
  },
  {
    id: 6,
    question: "The function of the DnaA protein in E. coli DNA replication initiation is:",
    options: ["Synthesizing the RNA primer at oriC", "Binding to DnaA boxes (9-mer repeats) at the oriC replication origin, unwinding the AT-rich 13-mer repeats to create a single-stranded region for helicase (DnaB) loading — the first step in replication initiation", "Unwinding the double helix ahead of the replication fork", "Sealing the nick between the new DNA strand and the RNA primer"],
    answer: 1,
    explanation: "E. coli replication initiation at oriC (~245 bp): (1) Multiple DnaA-ATP monomers bind 9-mer DnaA boxes in oriC, oligomerize → form filament that wraps oriC DNA; (2) This induces structural distortion → unwinding of three 13-mer AT-rich repeats → ssDNA bubble; (3) DnaC chaperone loads DnaB helicase onto ssDNA; (4) Two replication forks assemble bidirectionally; (5) SSB stabilizes ssDNA; (6) Primase (DnaG) synthesizes RNA primers. DnaA activity is regulated by GATC methylation, DnaN binding, and Hda protein — ensuring once-per-cell-cycle replication."
  },
  {
    id: 7,
    question: "Telomerase, the enzyme that maintains telomere length, is a ribonucleoprotein complex. Its mechanism involves:",
    options: ["Conventional DNA polymerase activity using a protein template", "Reverse transcriptase activity using the integral RNA component (TERC/TR) as the template to add TTAGGG repeats to chromosome ends; TERT is the catalytic reverse transcriptase subunit that extends telomeres to compensate for incomplete end-replication", "Helicase activity that unwinds telomeric G-quadruplexes for replication", "Endonuclease activity that trims overhangs after telomere addition"],
    answer: 1,
    explanation: "Telomerase: ribonucleoprotein complex with TERT (telomerase reverse transcriptase, catalytic subunit) + TERC (telomerase RNA component, ~450 nt in humans, contains the template sequence 3'-AAUCCC-5' for synthesizing TTAGGG repeats) + dyskerin (biogenesis/stabilization). Mechanism: (1) TERC template aligns with 3' end of chromosome; (2) TERT adds TTAGGG (dNTP addition in 5'→3' direction using RNA template, i.e., reverse transcription); (3) Translocation — telomerase moves to extend again; (4) DNA replication of lagging strand fills the C-strand. Active in stem cells and cancer (~90% of cancers). Mutations in TERT or TERC cause dyskeratosis congenita."
  },
  {
    id: 8,
    question: "The processivity of DNA polymerase is dramatically increased in E. coli by the β-sliding clamp. The β-clamp functions by:",
    options: ["Increasing the catalytic rate of nucleotide addition by allosteric activation of Pol III", "Forming a ring-shaped homodimer (two β-subunits form a closed ring around dsDNA) loaded by the γ-complex (clamp loader) in an ATP-dependent manner, tethering Pol III to the template and enabling thousands of nucleotides to be synthesized without dissociation", "Proofreading synthesized DNA in the 3'→5' direction independently of Pol III", "Recruiting primase to initiate new Okazaki fragments on the lagging strand"],
    answer: 1,
    explanation: "β-clamp (encoded by dnaN): homodimeric ring with a 35 Å central channel that encircles dsDNA. Loaded by the γ-complex (clamp loader, part of Pol III holoenzyme) using ATP hydrolysis: γ-complex opens β-clamp → slides onto DNA at primer-template junction → closes → Pol III binds β-clamp via its δ-subunit. Result: Pol III is tethered to DNA → processivity >50,000 nt. Eukaryotic equivalent: PCNA (proliferating cell nuclear antigen) — homotrimeric ring loaded by RFC (replication factor C). PCNA interacts with p21^CIP1, FEN1, DNA ligase I, and many repair factors."
  },
  {
    id: 9,
    question: "Supercoiling of DNA ahead of the replication fork is relieved by which enzyme?",
    options: ["Helicase (DnaB) which unwinds supercoils in an ATP-dependent manner", "DNA gyrase (a type II topoisomerase) in bacteria introduces negative supercoils and relieves positive supercoiling ahead of the replication fork by cutting both strands, passing a DNA segment through the break, and resealing — using ATP hydrolysis", "Topoisomerase I which cuts one strand to relieve supercoiling using ATP", "SSB (single-strand binding protein) which prevents re-formation of supercoils"],
    answer: 1,
    explanation: "As helicases unwind DNA at the replication fork, positive supercoils accumulate ahead of the fork. Relief mechanisms: (1) DNA gyrase (E. coli type II topoisomerase): introduces negative supercoils (compensating the positive supercoils) by double-strand cleavage, strand passage, and religation, using ATP; target of fluoroquinolone antibiotics (ciprofloxacin inhibits gyrase/topo IV); (2) Topoisomerase IV (E. coli): decatenates linked daughter chromosomes after replication; (3) Eukaryotic Topo I: relieves positive supercoiling by transient single-strand cleavage (no ATP); (4) Eukaryotic Topo II: decatenation + supercoil relief (target of topoisomerase II poisons: etoposide, doxorubicin)."
  },
  {
    id: 10,
    question: "In eukaryotic DNA replication, multiple origins of replication are used. The origin recognition complex (ORC) differs from E. coli DnaA in that:",
    options: ["ORC is active throughout the cell cycle while DnaA is cell cycle regulated", "ORC (a 6-subunit ATP-dependent complex) remains bound at replication origins throughout the cell cycle, serving as a platform for licensing factor loading; actual firing is controlled by CDK and DDK kinase activation of MCM2-7 helicase in S-phase — separating origin recognition from origin firing", "ORC unwinds dsDNA directly at origins using its own helicase activity", "ORC functions only at a single replication origin per chromosome, unlike the multiple DnaA boxes in E. coli"],
    answer: 1,
    explanation: "Eukaryotic origin licensing (pre-RC assembly at origins in G1): ORC (ORC1-6, bound to ARS-like sequences all cell cycle) → recruits Cdc6 and Cdt1 → loads MCM2-7 hexameric helicase ring (inactive as double hexamer) → licensed origin (pre-RC). In S phase: DDK (Dbf4-dependent kinase/Cdc7) phosphorylates MCM2-7 → recruits GINS and Cdc45 → CMG helicase complex (Cdc45-MCM2-7-GINS) activated → origin firing. CDK prevents re-licensing (phosphorylates and degrades Cdc6, exports Cdt1, degrades Cdt1 via PCNA-Cul4-Ddb1-geminin). This prevents re-replication within one cell cycle."
  },
  {
    id: 11,
    question: "The fidelity of DNA replication is approximately 1 error per 10⁹-10¹⁰ base pairs replicated. The three main mechanisms contributing to this accuracy are:",
    options: ["Base selection by the polymerase, 5'→3' exonuclease proofreading, and strand ligation by DNA ligase", "Nucleotide selection (correct base pairing reduces insertion rate to ~10⁻⁵), 3'→5' exonuclease proofreading (corrects ~99% of errors, overall error rate to ~10⁻⁷), and mismatch repair (MMR) after replication (reduces to ~10⁻⁹-10⁻¹⁰)", "Restriction enzymes recognizing and cleaving mismatched bases, topoisomerase-mediated correction, and UV-induced photoreactivation", "Histone H1 compaction preventing random base incorporation, and checkpoint activation halting replication at errors"],
    answer: 1,
    explanation: "Three-step fidelity: (1) Initial nucleotide selection: Watson-Crick geometry discrimination + induced fit by polymerase — correct dNTP insertion ~10⁻⁵ error rate; (2) 3'→5' exonuclease proofreading: incorporated mismatches are excised (mismatch stalls polymerase, which backtracks exposing 3' end to proofreading domain) — reduces error to ~10⁻⁷; (3) Post-replication mismatch repair (MMR): MutSα recognizes mismatches → MutL → MutH nicks hemimethylated GATC on new strand → excision → resynthesis — reduces to ~10⁻⁹-10⁻¹⁰. MMR deficiency causes microsatellite instability (Lynch syndrome, sporadic CRC)."
  },
  {
    id: 12,
    question: "Okazaki fragments in eukaryotic cells are shorter (~150-200 nt) than in prokaryotes (~1000-2000 nt) primarily because:",
    options: ["Eukaryotic DNA Pol δ is less processive than E. coli Pol III", "Eukaryotic DNA is packaged into nucleosomes — each Okazaki fragment is roughly the length of one nucleosome unit (~200 bp), as nucleosome disassembly and reassembly sets the interval for new primer synthesis by primase-Pol α", "Eukaryotic primase synthesizes longer RNA primers (~50 nt vs. 10 nt in bacteria)", "Eukaryotic chromosomes have more secondary structure blocking longer synthesis"],
    answer: 1,
    explanation: "Eukaryotic Okazaki fragment length (~150-200 nt) correlates with nucleosome repeat unit (~200 bp). As the replication fork disassembles nucleosomes on the parental strands, the lagging strand template is exposed in ~200 bp segments (one nucleosome worth), and each exposure allows one Okazaki fragment synthesis: Pol α-primase synthesizes RNA primer (~8-10 nt RNA + 15-30 nt DNA) → PCNA/RFC load Pol δ → Pol δ extends and performs strand displacement → FEN1 removes RNA primer flap → DNA ligase I seals nick. Histone chaperones (CAF-1, FACT) reassemble nucleosomes on both daughter strands."
  },
  {
    id: 13,
    question: "The nucleosome, the fundamental unit of chromatin, consists of:",
    options: ["Two copies of H2A, H2B, H3, and H4 histones (octamer) wrapped by ~147 bp of DNA in 1.65 turns of left-handed superhelix, plus linker histone H1 at the entry/exit", "Four copies of H1 histone plus H2A and H2B forming a tetrameric core", "A single copy of each of the five histone types (H1, H2A, H2B, H3, H4) bound to 200 bp DNA", "H3-H4 tetramer plus H2A-H2B dimer, with H1 replacing one H2A-H2B dimer upon activation"],
    answer: 0,
    explanation: "Nucleosome core particle (NCP): 147 bp of DNA wrapped 1.65 turns in a left-handed superhelix around the histone octamer (two each of H2A, H2B, H3, H4 — central H3-H4 tetramer + two H2A-H2B dimers). Crystal structure solved at 1.9 Å (Luger et al., 1997). The histone fold domains mediate histone-histone interactions; flexible N-terminal tails protrude from the NCP and are extensively post-translationally modified. Linker histone H1 binds the nucleosome dyad and the two linker DNA segments (entering/exiting DNA), compacting nucleosomal arrays into 30 nm chromatin fiber (beads-on-a-string = 10 nm fiber)."
  },
  {
    id: 14,
    question: "During eukaryotic DNA replication, parental histones are recycled onto newly replicated DNA. The primary histone chaperone responsible for H3-H4 deposition behind the replication fork is:",
    options: ["FACT (FAcilitates Chromatin Transcription), which deposits H2A-H2B dimers", "CAF-1 (Chromatin Assembly Factor 1), which interacts with PCNA and deposits H3.1-H4 tetramers onto newly replicated DNA in a replication-coupled manner", "HIRA, which deposits H3.3-H4 histone variant in a replication-independent manner", "Nucleoplasmin, which deposits all four core histones simultaneously"],
    answer: 1,
    explanation: "Replication-coupled chromatin assembly: CAF-1 (p150-p60-p48 heterotrimer) interacts with PCNA via p150's PIP-box → deposited at replication fork → delivers newly synthesized H3.1-H4 tetramers to newly replicated DNA. Recycled parental H3-H4 tetramers are also distributed (random segregation to sister chromatids). H2A-H2B dimers added subsequently by NAP1. Replication-independent (RI) assembly: HIRA deposits H3.3-H4 at active genes, regulatory elements, and after DNA repair (replacing nucleosomes displaced during transcription). Daxx/ATRX deposits H3.3 at telomeres/pericentric heterochromatin."
  },
  {
    id: 15,
    question: "The replication checkpoint (S-phase checkpoint) is activated when replication forks stall. The key sensor kinase in eukaryotes and its signal transduction are:",
    options: ["ATM kinase is activated by ssDNA at stalled forks and phosphorylates CHK1", "ATR kinase (ATRIP-ATR complex) recognizes RPA-coated ssDNA at stalled forks (generated by uncoupling of helicase and polymerase) → phosphorylates CHK1 → CHK1 inactivates CDC25A phosphatase → CDK2 remains inactive → replication slows and late origins are suppressed", "CDK2 directly senses replication stress and activates the checkpoint", "Pol δ stalling activates the checkpoint via direct signaling to CHK2"],
    answer: 1,
    explanation: "Replication checkpoint (intra-S checkpoint): (1) Helicase-polymerase uncoupling at stalled forks → long ssDNA → RPA coating; (2) ATRIP recognizes RPA-ssDNA → recruits ATR; (3) 9-1-1 complex (Rad9-Rad1-Hus1) loaded by Rad17-RFC at ssDNA-dsDNA junction → TopBP1 activates ATR; (4) ATR phosphorylates CHK1 (Ser317, Ser345); (5) CHK1 phosphorylates CDC25A → degradation → CDK2 cannot be activated → replication block; (6) Dormant late origins suppressed; (7) Fork stabilization. ATM/CHK2 pathway: DSBs → MRN complex → ATM activation → CHK2 → CDC25A/C degradation, p53 stabilization."
  },
  {
    id: 16,
    question: "Rolling circle replication (RCR) occurs in which of the following biological contexts?",
    options: ["All circular bacterial chromosomes during normal chromosomal replication", "Replication of circular viral genomes (phage λ, phage M13 in vegetative phase), plasmid rolling circle replication (Staphylococcal plasmids), amplification of rDNA in Xenopus oocytes, and immunoglobulin gene class switch recombination intermediates", "Exclusively in linear viral genomes like herpes simplex virus", "Eukaryotic telomere replication to compensate for end-replication problem"],
    answer: 1,
    explanation: "Rolling circle replication: a nuclease nicks one strand of circular dsDNA → 3'-OH end used as primer → DNA polymerase synthesizes new strand using intact circle as template → parental strand is displaced as a long ss-tail → complementary strand synthesized on displaced tail. Used for: (1) Bacteriophage (λ, T4 late phase, M13) to rapidly amplify genomes; (2) F-plasmid conjugation (rolling circle transfers ssDNA to recipient); (3) Staphylococcal and Streptococcal plasmid replication; (4) Xenopus laevis rDNA amplification in oocytes (for rRNA supply); (5) Some transposable elements."
  },
  {
    id: 17,
    question: "Primase (DnaG in E. coli) synthesizes RNA primers. Which property distinguishes primase from other polymerases?",
    options: ["Primase can synthesize RNA in both 5'→3' and 3'→5' directions", "Primase can initiate de novo synthesis without a pre-existing 3'-OH primer, using NTPs (ribonucleotides) to begin a new polynucleotide chain on an ssDNA template — this initiation capacity is unique among polymerases that typically require a primer", "Primase synthesizes DNA directly using dNTPs like other polymerases", "Primase has both 5'→3' and 3'→5' exonuclease proofreading activity"],
    answer: 1,
    explanation: "A fundamental property: all known DNA polymerases require a pre-formed 3'-OH primer. RNA polymerases (including primase) can initiate de novo synthesis by forming the first phosphodiester bond between two NTPs on a template strand. Primase (DnaG in bacteria; Pol α-primase complex in eukaryotes) synthesizes RNA primers (~10-12 nt in bacteria, ~8-10 nt RNA + 20-30 nt DNA in eukaryotes) that provide 3'-OH groups for DNA polymerase extension. This is why every replicated DNA segment begins with RNA, which is subsequently removed by RNase H / DNA polymerase I (bacteria) or FEN1 + RNase H (eukaryotes)."
  },
  {
    id: 18,
    question: "Z-DNA is a left-handed double helical form found transiently at specific genomic locations. Which sequence and conditions favor Z-DNA formation?",
    options: ["AT-rich sequences under positive supercoiling conditions", "Alternating purine-pyrimidine sequences (especially CG repeats: 5'-CGCGCG-3') under negative supercoiling, high salt concentration, or binding of specific Z-DNA binding proteins (ZBPs) like ADAR1 and DAI (ZBP1)", "All DNA sequences under physiological conditions", "GC-rich sequences in heterochromatin regions"],
    answer: 1,
    explanation: "Z-DNA characteristics: left-handed helix (vs. right-handed B/A-DNA), 12 bp per turn, zigzag backbone (alternating syn/anti glycosidic bonds — purine residues in syn, pyrimidines in anti — hence alternating purine-pyrimidine requirement). Z-form favored by: (1) Negative supercoiling (naturally occurs behind transcribing RNA Pol — provides energy for B→Z transition); (2) Alternating CG or CA/TG sequences; (3) High salt (shields phosphate charges); (4) Cytosine methylation at C5; (5) Z-DNA binding proteins (Zα domain): ADAR1 (RNA editor), DAI/ZBP1 (innate immunity sensor), vaccinia virus E3L. Z-DNA may regulate transcription by stabilizing negative supercoils."
  },
  {
    id: 19,
    question: "The human genome contains approximately 3 billion base pairs per haploid set. If the total contour length of DNA in a diploid human cell is approximately 2 meters, this is compacted into a nucleus of ~6 μm diameter. The first level of DNA compaction is:",
    options: ["30 nm chromatin fiber formation by H1 histone binding", "Nucleosome formation: 147 bp of DNA wraps 1.65 turns around the histone octamer, achieving ~7-fold linear compaction (from ~50 nm of B-DNA to nucleosomal 'beads on a string' with 10 nm diameter = 10 nm fiber)", "Scaffold-loop organization into 300 nm chromatin domains", "Heterochromatin condensation mediated by HP1 protein binding"],
    answer: 1,
    explanation: "Levels of chromatin compaction: (1) 2 nm B-DNA; (2) 10 nm fiber (nucleosome 'beads-on-a-string', ~7× compaction); (3) 30 nm chromatin fiber (~50× compaction, solenoid or zigzag model with H1 and linker DNA compacting nucleosomal arrays — existence debated in vivo); (4) Loop domains (~300 nm, ~700-fold compaction, loop bases anchored by cohesin/CTCF/SATB1 on nuclear scaffold); (5) Mitotic chromosome (~250 nm width, ~10,000-fold compaction). Recent cryo-EM and Hi-C studies suggest 10 nm fibers form irregular 3D 'polymer melt' rather than regular 30 nm fibers in living nuclei. Total compaction: ~100,000-fold in mitotic chromosomes."
  },
  {
    id: 20,
    question: "Satellite DNA refers to genomic DNA sequences that:",
    options: ["Encode satellite RNA molecules with regulatory functions", "Band at different positions (buoyant densities) than bulk genomic DNA in CsCl equilibrium density gradients due to unusual base compositions; satellite DNA consists of highly repetitive tandem sequences found at centromeres and telomeres (e.g., α-satellite, β-satellite, satellite 1, 2, 3)", "Are derived from satellite viruses integrated into the genome", "Are located at the chromosomal periphery (satellite chromosomal loops)"],
    answer: 1,
    explanation: "Satellite DNA: named because it 'satellites' (separate as distinct bands) from bulk genomic DNA in CsCl density gradients due to unusual (AT-rich or GC-rich) base composition → different buoyant density. Characteristics: (1) Highly repetitive tandem arrays (up to millions of copies); (2) Located at centromeres (α-satellite/alphoid DNA, 171 bp repeat unit), pericentromeric heterochromatin (satellites 1, 2, 3), and telomeres (TTAGGG repeats); (3) Generally transcriptionally silent; (4) Important for centromere function (CENP-A nucleosomes on α-satellite DNA define functional centromere). Minisatellites (~15-100 bp repeat units) and microsatellites/STRs (2-6 bp repeats) are related repeat categories."
  },
  {
    id: 21,
    question: "During DNA replication, the primase-DNA polymerase α (Pol α) complex in eukaryotes functions as:",
    options: ["The main high-fidelity replicative polymerase for leading strand synthesis", "A specialized initiation complex: primase synthesizes a short RNA primer (~8-10 nt), then Pol α extends it with ~20-30 nt of DNA — this chimeric RNA-DNA primer is then handed off to PCNA/RFC-loaded Pol δ (lagging strand) or Pol ε (leading strand) for processive high-fidelity synthesis", "An error-prone polymerase used during translesion synthesis across damaged templates", "The polymerase responsible for filling gaps after RNA primer removal by FEN1"],
    answer: 1,
    explanation: "Eukaryotic replication initiation: Pol α-primase (4-subunit complex: p180 = Pol α, p70 = B subunit, p58 = primase large, p49 = primase small): (1) Primase synthesizes ~10 nt RNA primer; (2) Pol α extends with ~20-30 nt DNA (low fidelity, no proofreading); (3) RFC clamp loader recognizes the RNA-DNA primer-template junction and loads PCNA; (4) Pol δ (lagging strand) or Pol ε (leading strand) displaces Pol α via competitive binding to PCNA. Pol ε: high fidelity, proofreading (ε-exonuclease) + stimulated by PCNA. Pol δ: high fidelity, proofreading. This 'polymerase switch' from initiation (Pol α) to elongation (Pol δ/ε) is a key regulatory step."
  },
  {
    id: 22,
    question: "The concept of 'replication timing' in eukaryotes refers to the observation that:",
    options: ["All chromosomal origins fire simultaneously at the beginning of S-phase", "Different genomic regions replicate at different times during S-phase; euchromatin/gene-rich regions replicate early in S-phase while heterochromatin/gene-poor regions replicate late; replication timing correlates with chromatin state, gene expression, and lamina association", "The entire genome is replicated within the first 30 minutes of S-phase", "Replication always proceeds from telomeres toward centromeres"],
    answer: 1,
    explanation: "Replication timing: in mammalian cells, S-phase lasts ~6-8 hours; different chromosomal domains (replication timing domains, ~400-800 kb) fire at characteristic times. Early-replicating: A compartment, gene-rich, active euchromatin, H3K27ac-positive, nuclear interior. Late-replicating: B compartment, gene-poor, heterochromatin, H3K9me3/H3K27me3, nuclear periphery/LADs. Correlation with epigenetic state: H3K4me3 and open chromatin → early replication. Replication timing is developmentally regulated (changes during differentiation), heritable (clonal), and correlates with mutation rates (late-replicating regions accumulate more somatic mutations). The timing program coordinates with gene expression to maintain epigenetic state."
  },
  {
    id: 23,
    question: "Restriction endonucleases protect bacteria from foreign DNA (bacteriophage) through which mechanism?",
    options: ["They degrade all single-stranded DNA including phage DNA", "Restriction enzymes recognize specific short DNA sequences and cleave the DNA; host (bacterial) DNA is protected by methylation at the same recognition sites by cognate methyltransferases (restriction-modification system); phage DNA lacking host methylation is cleaved upon entry", "They activate the host immune system against bacteriophage proteins", "Restriction enzymes clip bacteriophage RNA, preventing phage gene expression"],
    answer: 1,
    explanation: "Restriction-modification (R-M) systems: (1) Restriction endonuclease: cleaves foreign DNA at specific recognition sites (4-8 bp, often palindromic); (2) Methyltransferase: methylates the same recognition sites on host DNA (typically N6-methyladenine or 5-methylcytosine) → protected from cleavage. Bacteriophage DNA entering without methylation → cleaved immediately. Types: Type I (separate R and M activities, cut far from recognition site, require ATP), Type II (separate R and M enzymes, cut at/near recognition site, used in molecular biology), Type III (combined R+M, cut 25-27 bp from recognition site). CRISPR-Cas systems: another bacterial adaptive immune mechanism against phage."
  },
  {
    id: 24,
    question: "G-quadruplex (G4) structures in DNA form preferentially in which sequences and have what biological significance?",
    options: ["AT-rich sequences in heterochromatin that stabilize chromatin compaction", "Guanine-rich sequences (GGG repeats in 4 tracts: G₃N₁₋₇G₃N₁₋₇G₃N₁₋₇G₃) that form planar G-quartets stacked in a quadruplex held by Hoogsteen base pairing and central monovalent cations (K⁺ or Na⁺); found at telomeres, oncogene promoters (MYC, VEGF, BCL2), and origins of replication — regulating replication, transcription, and telomere maintenance", "CpG dinucleotides that form cruciform structures at palindromic sequences", "A:T base pairs in homopolymeric tracts that form triple helix structures"],
    answer: 1,
    explanation: "G-quadruplexes (G4): four-stranded DNA/RNA structures where four guanines form a planar G-quartet (Hoogsteen base pairing in a square arrangement) → multiple quartets stack → G4 structure stabilized by K⁺/Na⁺ in the central channel. Found at: (1) Telomeres (TTAGGG repeats can form parallel G4 → inhibits telomerase → therapeutic target); (2) Oncogene promoters (MYC NHE III₁ region controls ~80% MYC transcription; G4 stabilization → NHE III₁ → represses MYC); (3) ~700,000 putative G4 sites in human genome; (4) Origins of replication. G4-stabilizing ligands (pyridostatin, PDS, BRACO-19) are explored as anticancer drugs. Helicases (FANCJ, BLM, WRN, RHAU) resolve G4 structures."
  },
  {
    id: 25,
    question: "The process by which bacteria import plasmid DNA from other bacteria during conjugation involves:",
    options: ["The pilus pulling DNA into the recipient cell without any copying", "Rolling circle replication in the donor cell, with the F-factor nicked at oriT by relaxase (TraI), a single strand transferred through the mating channel (type IV secretion system), and simultaneous synthesis of complementary strands in both donor and recipient", "Transformation — passive uptake of free DNA from lysed donor cells", "Transduction — phage-mediated transfer of plasmid DNA between cells"],
    answer: 1,
    explanation: "Conjugation (F-plasmid transfer in E. coli): (1) Donor (F⁺) contacts recipient (F⁻) via F-pilus → stable mating bridge forms; (2) Relaxase (TraI) nicks F-plasmid at oriT → covalently attached to 5' end of nicked strand; (3) Rolling circle replication in donor displaces nicked 5'→3' strand; (4) Relaxosome-DNA complex transferred through T4SS (VirB/D-like complex) into recipient; (5) Complementary strand synthesized in recipient by recipient's own DNA polymerase; (6) F-plasmid ligated into circle in recipient; recipient becomes F⁺. Hfr (High frequency recombination) strains: F integrated into chromosome → chromosome transfer, enabling gene mapping."
  },
  {
    id: 26,
    question: "Eukaryotic chromosomes are linear. The 'end-replication problem' refers to:",
    options: ["The inability of replication to proceed through heterochromatin at chromosome ends", "The progressive shortening of chromosome ends with each cell division because DNA Pol cannot synthesize the very 3' end of the lagging strand template — when the terminal RNA primer is removed, the gap cannot be filled (no upstream 3'-OH to extend from) → ~50-200 bp loss per division", "The difficulty of unwinding tightly packed telomeric heterochromatin for replication", "The inability to replicate circular chromosomes in eukaryotes"],
    answer: 1,
    explanation: "End-replication problem: (1) Lagging strand synthesis requires RNA primers at each Okazaki fragment; (2) The last Okazaki fragment on the lagging strand cannot be primed upstream because there is no more template; (3) When the terminal primer is removed, the gap at the 5' end of the newly synthesized strand cannot be filled by any conventional polymerase → progressive 3' overhang on the template strand → 50-200 bp shortening per cell division. Solutions: (1) Telomerase extends the 3' overhang using its internal RNA template; (2) ALT (Alternative Lengthening of Telomeres) by HR in telomerase-negative cancer cells; (3) Terminally differentiated cells undergo replicative senescence when critically short telomeres form."
  },
  {
    id: 27,
    question: "Cruciform structures in DNA form at which type of sequences and under what conditions?",
    options: ["Cruciform structures form at GC-rich sequences under high salt conditions", "Cruciform structures form at inverted repeat (palindromic) sequences under negative supercoiling conditions; the two palindromic halves on the same strand fold back and base-pair with each other, extruding two hairpin loops (the 'cruciform') from the linear duplex", "Cruciform structures form at all AT-rich sequences when DNA is denatured", "Cruciform structures form exclusively at centromeric α-satellite sequences"],
    answer: 1,
    explanation: "Cruciform extrusion: inverted repeats (palindromes, e.g., 5'-GCATCGATGC-3') form intra-strand hairpins when negative supercoiling provides the energy to melt the duplex at the palindrome site. The extruded cruciform contains two hairpin loops perpendicular to the main axis. Biological roles (proposed): (1) Replication origin structures (oriC-like hairpins in bacteria); (2) Transcription initiation signals; (3) Targets for enzymes (RecA, SbcCD); (4) Genome instability sites (palindromes at cancer translocation breakpoints). Supercoiling-dependent cruciform extrusion can be visualized by S1 nuclease cleavage (cleaves single-stranded cruciform tips)."
  },
  {
    id: 28,
    question: "The Watson-Crick model of DNA structure proposed in 1953 was supported by which key experimental data?",
    options: ["X-ray crystallography data from Rosalind Franklin and Raymond Gosling showing the helical structure and 3.4 Å repeat, Chargaff's base composition ratios, and model-building analysis showing complementary base pairing", "Ultracentrifugation data showing DNA is a double-stranded molecule", "Electron microscopy showing the double helix directly", "Chemical hydrolysis showing that DNA contains equal amounts of purines and pyrimidines"],
    answer: 0,
    explanation: "Watson and Crick's 1953 model was built on: (1) Rosalind Franklin's and Raymond Gosling's X-ray diffraction Photo 51 (B-form pattern: X-shaped pattern → helical, 3.4 Å meridional reflection → base pair rise, 34 Å layer line → pitch, ~20 Å diameter); (2) Chargaff's rules ([A]=[T], [G]=[C]) suggesting specific base pairing; (3) Physical model-building at correct bond angles and van der Waals radii. The major controversy: Franklin's data was shared with Watson and Crick without her full knowledge via Max Perutz/MRC committee. Franklin, who died in 1958, did not share the 1962 Nobel Prize (awarded to Watson, Crick, and Wilkins)."
  },
  {
    id: 29,
    question: "The SSB (Single-Strand DNA Binding Protein) in E. coli has which essential functions during DNA replication?",
    options: ["It synthesizes short RNA primers for the lagging strand", "SSB (tetramer in bacteria, RPA heterotrimer in eukaryotes) stabilizes ssDNA at the replication fork by: (1) preventing re-annealing of separated strands; (2) preventing ssDNA from forming secondary structures that would block polymerase; (3) stimulating primase activity; (4) recruiting repair proteins through protein-protein interactions via its C-terminal domain", "It proofreads newly synthesized DNA strands for errors", "It ligates Okazaki fragments on the lagging strand"],
    answer: 1,
    explanation: "SSB (32 kDa subunit, forms tetramer): binds ssDNA with high affinity and positive cooperativity (SSB-65 mode: one tetramer covers ~65 nt). Functions: (1) Prevents complementary strand re-annealing; (2) Melts secondary structures (hairpins, G4) blocking Pol III; (3) Stimulates DnaG primase by protein-protein interaction; (4) Recruits proteins via C-terminal intrinsically disordered region (IDR): DnaG, RecA, RecQ, PriA, Pol V, RNase HI. Eukaryotic equivalent: RPA (heterotrimer: RPA70/RPA32/RPA14) — essential for replication initiation (recruits ATR/ATRIP, RFC), NER, HR, and checkpoint signaling."
  },
  {
    id: 30,
    question: "The concept of 'replication fidelity' and 'mutation rate' are related but distinct. The spontaneous base substitution mutation rate in E. coli is approximately:",
    options: ["1 mutation per 100 base pairs per generation (high rate due to lack of proofreading)", "~10⁻¹⁰ per base pair per generation, achieved through the combined fidelity of nucleotide selection, 3'→5' proofreading exonuclease, and post-replication mismatch repair (MMR)", "1 mutation per million base pairs per generation without any repair systems", "~10⁻³ per base pair per generation, which is similar to RNA viruses"],
    answer: 1,
    explanation: "E. coli mutation rate: ~10⁻¹⁰ per bp per generation. Error sources: (1) Pol III initial error rate ~10⁻⁵-10⁻⁶ (base selection); (2) 3'→5' proofreading reduces to ~10⁻⁷-10⁻⁸; (3) MMR (MutS-MutL-MutH system) reduces to ~10⁻¹⁰. This low rate ensures genome stability (~4.6 Mb genome → ~0.001 errors per genome per generation). Human somatic mutation rate: ~1-2 mutations per genome per cell division. RNA viruses (e.g., HIV, influenza): ~10⁻⁴-10⁻⁵ per site per replication (RNA-dependent RNA Pol lacks proofreading) → quasi-species evolution, rapid drug resistance."
  },
  {
    id: 31,
    question: "Chloroplast and mitochondrial genomes replicate using which mechanism, and how does this relate to their evolutionary origin?",
    options: ["They replicate using the same mechanisms as eukaryotic nuclear chromosomes with ORC and MCM helicases", "Organellar genomes replicate using mechanisms similar to bacterial chromosomes (D-loop replication in mitochondria; multiple origins with RecA-like proteins in chloroplasts) — reflecting their endosymbiotic origin from ancient bacteria (mitochondria from α-proteobacteria, chloroplasts from cyanobacteria)", "Organellar genomes do not replicate — they are derived from the nuclear genome by RNA transcription and reverse transcription", "They use RNA-primed replication identical to retrovirus replication"],
    answer: 1,
    explanation: "Endosymbiotic theory (Margulis): mitochondria (from α-proteobacterial ancestor, ~1.5 Bya) and chloroplasts (from cyanobacterial ancestor, ~1.2 Bya) retain remnant circular genomes (mtDNA: 16.6 kb circular in humans; cpDNA: 100-200 kb circular). Replication: (1) Mitochondrial DNA replication: strand-asynchronous D-loop replication (leading strand initiates at OH, lagging strand much later at OL) using Pol γ (a single-subunit enzyme with 3'→5' proofreading, encoded by nuclear POLG gene); (2) Chloroplast: multiple origins, RecA homologs. Both organelles encode some of their own proteins but most proteins are nuclear-encoded and imported via TOM/TIM (mitochondria) or TOC/TIC (chloroplasts) translocation machinery."
  },
  {
    id: 32,
    question: "The restriction-modification system in bacteria has three components: restriction enzyme, methyltransferase, and specificity protein (in Type I systems). Type II restriction enzymes differ from Type I in that:",
    options: ["Type II enzymes require ATP for DNA cleavage; Type I enzymes cleave without energy", "Type II restriction enzymes: (1) cut at specific defined positions within or adjacent to the recognition sequence (not at random distant sites); (2) have separate restriction and methylation activities (no coupled restriction-methylation); (3) require only Mg²⁺ cofactor (no ATP); (4) are simpler in structure — making them the practical tools in molecular biology", "Type II enzymes recognize longer sequences (10-12 bp) than Type I enzymes (4-6 bp)", "Type II enzymes methylate DNA at recognition sites before cleaving them"],
    answer: 1,
    explanation: "Comparison of restriction enzyme types: Type I: large multi-subunit complexes (HsdR, HsdM, HsdS subunits); recognize bipartite sequences (two non-contiguous halves); cleave random sequences far from recognition site (>1 kb away); require ATP + SAM + Mg²⁺; translocate along DNA before cleavage. Type II: separate R and M proteins; recognize 4-8 bp palindromic sequences; cleave at defined positions within/adjacent to recognition site; require only Mg²⁺; type IIS (FokI, BsaI) cleave outside recognition site. Type III: intermediate; bipartite recognition; cleave 25-27 bp from one end of recognition sequence; require ATP. Type II are used in recombinant DNA technology."
  },
  {
    id: 33,
    question: "Chromosomal territories in the cell nucleus are defined by the organization of chromatin. The significance of chromosome territories is:",
    options: ["Chromosomes are evenly distributed throughout the nucleus with no spatial organization", "Each chromosome occupies a distinct non-randomly positioned territory in the interphase nucleus (gene-rich chromosomes near the center, gene-poor near the periphery); chromosome territory organization facilitates: regulation of long-range gene interactions, co-transcription of gene loci from different chromosomes, and containment of chromosome-specific nuclear processes", "Chromosome territories are only present during cell division, not in interphase", "All chromosomes occupy identical territories with identical epigenetic environments"],
    answer: 1,
    explanation: "Chromosome territories (CTs): first visualized by Cremer and Cremer (1980s) using microbeam experiments; confirmed by fluorescence in situ hybridization (FISH) with chromosome painting probes. Features: (1) Each chromosome occupies a distinct non-overlapping territory; (2) Gene-rich (HSA17, HSA19, HSA22) chromosomes are more centrally located; gene-poor (HSA4, HSA13, HSA18) chromosomes near nuclear periphery; (3) CTs are not isolated — intermingling at boundaries allows inter-chromosomal gene regulation; (4) Nuclear pore complexes preferentially associate with active chromatin; (5) Transcription factories (shared between multiple genes). CT organization is disrupted in cancer."
  },
  {
    id: 34,
    question: "The concept of 'replication stress' has implications for cancer development and therapy. Replication stress is defined as:",
    options: ["Normal DNA replication during S-phase in healthy cells", "A cellular state characterized by slowing or stalling of replication fork progression, leading to ssDNA accumulation, fork collapse, and DSB formation — caused by nucleotide depletion, oncogene activation (constitutive CDK2/Cyclin E activity), R-loop formation, transcription-replication conflicts, or chemical agents (hydroxyurea, aphidicolin)", "DNA damage occurring only during UV light exposure of cells", "The mechanical stress placed on chromosomes during cell division"],
    answer: 1,
    explanation: "Replication stress: one of the earliest events in carcinogenesis (Bartkova et al., Gorgoulis et al., Nature 2005). Oncogene activation (RAS, MYC, CCNE1 amplification) → constitutive CDK activity → firing of too many origins simultaneously → dNTP depletion → fork stalling. Stalled forks → RPA-coated ssDNA → ATR activation → DDR (DNA damage response) → senescence barrier or apoptosis (tumor suppression mechanism). Cancers that bypass this barrier (p53 loss, CDK inhibitor loss) continue replicating with chronic RS → genomic instability → tumor evolution. Therapeutic targeting: ATR inhibitors (VE-821, AZD6738) exploit replication stress in cancer cells with defective DDR."
  },
  {
    id: 35,
    question: "The melting temperature (Tm) of a DNA duplex is determined primarily by:",
    options: ["The total length of the DNA molecule (longer DNA always has higher Tm regardless of sequence)", "The G+C content (G:C pairs have 3 H-bonds vs 2 for A:T) and the sodium ion concentration (counterion shielding of phosphate charges); Tm ≈ 81.5 + 16.6(log[Na⁺]) + 0.41(%GC) - 675/n for fragments >500 bp; the simple approximation for short oligonucleotides: Tm ≈ 4°C × (G+C) + 2°C × (A+T)", "The specific sequence of the DNA rather than GC content", "The number of supercoils in the DNA molecule"],
    answer: 1,
    explanation: "DNA melting (denaturation): thermal denaturation separates complementary strands → hyperchromic effect (absorbance at 260 nm increases ~40% as stacked bases unstacked). Tm: temperature at which 50% of DNA is denatured. Key determinants: (1) G+C content: higher %GC → higher Tm (G:C 3 H-bonds vs A:T 2 H-bonds + G:C contributes more base stacking energy); (2) [Na⁺]: higher salt → higher Tm (counterion shielding reduces strand repulsion); (3) DNA length: longer → higher Tm; (4) Formamide/urea: denaturants lower Tm. The two-state melting of short oligonucleotides is sharp; long genomic DNA melts over broader temperature range. Tm used in designing PCR primers, hybridization conditions."
  },
  {
    id: 36,
    question: "Homologous chromosomes pair during meiotic prophase I through a process requiring the synaptonemal complex (SC). The SC structure has which molecular components?",
    options: ["Sister chromatid cohesins that hold homologs together throughout prophase I", "Tripartite proteinaceous scaffold: two lateral elements (SYCP2/SYCP3, one per homolog, replacing meiotic cohesin-based chromosome axes) connected by transverse filaments (SYCP1, bridging from each lateral element to the central region) and central element proteins (SYCE1-4, SIX6OS1) — the SC maintains homolog synapsis for ~1-3 days during pachytene", "H1 histone linker forming continuous chromatin fiber between paired homologs", "RecA protein forming the initial synaptic filament between homologs"],
    answer: 1,
    explanation: "Synaptonemal complex (SC) assembly (meiotic prophase I): Leptotene: chromosome axes form (SYCP2/SYCP3 lateral elements assembled on meiotic cohesin axes containing HORMAD1/2). Zygotene: SYCP1 central elements initiate synapsis at specific sites; transverse filaments of SYCP1 extend from each lateral element to meet at the central element → partial synapsis. Pachytene: full synapsis of all homologs; SC spans entire chromosome length; crossing over occurs at recombination nodules (MLH1/MLH3 foci). Diplotene: SC disassembles; chiasmata visible; homologs held only by chiasmata + pericentromeric cohesion. SC mutations (SYCP3, SYCP1, SYCE1) cause male infertility and/or POI (premature ovarian insufficiency)."
  },
  {
    id: 37,
    question: "The 'euchromatin vs. heterochromatin' distinction in terms of DNA replication and gene expression means:",
    options: ["Euchromatin contains satellite DNA; heterochromatin contains all protein-coding genes", "Euchromatin: loosely packaged, gene-rich, transcriptionally active, early-replicating, H3K4me3/H3K27ac-marked. Heterochromatin: densely packaged, gene-poor, transcriptionally silent, late-replicating; further divided into constitutive heterochromatin (centromeres, telomeres — H3K9me3, HP1-associated) and facultative heterochromatin (developmentally regulated, H3K27me3, inactive X chromosome)", "All chromatin in a cell is either fully euchromatic or fully heterochromatic", "Euchromatin is found only in stem cells; heterochromatin only in terminally differentiated cells"],
    answer: 1,
    explanation: "Euchromatin: decondensed in interphase, DNase I hypersensitive sites at regulatory elements, HAT activity, H3K4me3 at active promoters, H3K27ac at active enhancers, H3K36me3 in transcribed gene bodies, replicates in early S-phase. Constitutive heterochromatin (pericentromeric, telomeric): present in all cell types, H3K9me3 + HP1, H4K20me3, DNA methylation at satellite repeats, silences TEs, replicates in late S-phase. Facultative heterochromatin: cell-type-specific silencing, H3K27me3 (Polycomb), e.g., inactive X (Barr body), tissue-specific gene silencing. The transition between these states occurs during development and is dysregulated in cancer."
  },
  {
    id: 38,
    question: "The process of strand invasion during DNA double-strand break repair by homologous recombination (HR) is facilitated by which recombinase and cofactors?",
    options: ["DNA Pol III directly invades the homologous template without recombinase assistance", "RAD51 (eukaryotic homolog of bacterial RecA): RAD51 forms a nucleoprotein filament on RPA-coated 3' ssDNA tail (with BRCA2 loading RAD51 onto ssDNA and displacing RPA) → RAD51 filament scans duplex DNA for homology → strand invasion (D-loop formation) → priming of DNA synthesis by using the intact sister chromatid as template → HR resolution", "Ku70/Ku80 heterodimer mediates strand invasion in HR", "Single-strand annealing (SSA) by RPA protein mediates all HR reactions"],
    answer: 1,
    explanation: "HR strand invasion: after DSB resection (MRN/CtIP → RPA-coated 3' ssDNA), BRCA2 (BRC repeats) displaces RPA and loads RAD51 → RAD51-ssDNA filament (right-handed helical, 1 RAD51/3 nt, stretched DNA). RAD51 filament: (1) synaptic phase — scans homologous duplex for complementary sequence; (2) strand exchange — displaces non-complementary strand, forms D-loop (displacement loop); (3) DNA synthesis using intact sister chromatid template; (4) Resolution: SDSA (synthesis-dependent strand annealing, no crossover) or DSBR (double strand break repair, can form Holliday junctions → crossover or non-crossover). RAD54 (SWI2/SNF2 ATPase) stabilizes D-loop and removes RAD51 after strand invasion."
  },
  {
    id: 39,
    question: "Horizontal gene transfer (HGT) in bacteria includes transformation, conjugation, and transduction. Natural transformation differs from laboratory transformation in that:",
    options: ["Natural transformation is identical to laboratory CaCl₂ heat shock transformation", "Natural competence is a genetically programmed state where specific bacteria (e.g., Streptococcus pneumoniae, Bacillus subtilis, Haemophilus influenzae) express competence genes for active DNA uptake via dedicated transport systems; this is distinct from artificial competence induced by CaCl₂, heat shock, or electroporation in laboratory settings", "Natural transformation only occurs in gram-positive bacteria, never gram-negative", "Natural transformation requires phage particles as intermediaries"],
    answer: 1,
    explanation: "Natural transformation: genetically programmed in naturally competent species. In S. pneumoniae: competence stimulating peptide (CSP) → ComD/ComE two-component quorum sensing → expression of late competence genes (ComEA DNA receptor, ComEC DNA channel, DprA RecA loader). Incoming dsDNA bound at cell surface → one strand degraded by nuclease → single strand imported through membrane → DprA-RecA recombination into chromosome. B. subtilis: similar ComK/ComS regulatory circuit. H. influenzae: species-specific uptake sequences (UPS: 11 bp repeat in Haemophilus genome). Clinical significance: S. pneumoniae natural transformation spreads antibiotic resistance genes (penicillin-binding protein mutations) between strains."
  },
  {
    id: 40,
    question: "Chromosome segregation during cell division requires centromere-kinetochore assembly. The specific chromatin mark at centromeres consists of:",
    options: ["H3K9me3 and HP1α defining the centromere identity through heterochromatin", "CENP-A (centromere protein A, a histone H3 variant) nucleosomes replacing canonical H3 nucleosomes at the functional centromere; CENP-A is specifically deposited by the HJURP (Holliday junction recognition protein) chaperone and defines the kinetochore assembly platform independent of DNA sequence (epigenetically inherited centromere identity)", "α-satellite DNA sequence alone specifying centromere location without any protein mark", "Methylation of centromeric α-satellite DNA by DNMT3B defining centromere identity"],
    answer: 1,
    explanation: "CENP-A (CENH3 in plants, Cse4 in yeast): histone H3 variant with unique C-terminal CATD (CENP-A targeting domain) that specifies centromeric localization and HJURP interaction. Key features: (1) Epigenetic specification: CENP-A nucleosomes mark functional centromeres even on ectopic DNA sequences (neocentromeres — centromeres that form on non-α-satellite DNA); (2) CENP-A is diluted 2-fold after replication → replenished in late mitosis/early G1 via HJURP-mediated deposition; (3) CENP-A nucleosome serves as platform for CCAN (constitutive centromere-associated network: CENP-B, CENP-C, CENP-HIKM, CENP-LN, CENP-OPQUR, CENP-T, CENP-W) → outer kinetochore assembly → spindle attachment."
  },
  {
    id: 41,
    question: "The 'operon' concept, first proposed for the lac operon, represents a fundamental unit of prokaryotic gene organization. An operon is defined as:",
    options: ["A single gene with multiple transcription factor binding sites", "A cluster of functionally related genes under the control of a single promoter and regulated as a unit; transcribed as a polycistronic mRNA (a single mRNA encoding multiple proteins) — allowing coordinated expression of genes in the same biochemical pathway", "A group of genes on separate chromosomes that are co-regulated through long-range DNA looping", "Multiple promoters driving expression of a single protein-coding gene"],
    answer: 1,
    explanation: "Operon (Jacob and Monod, 1961): basic unit of prokaryotic gene expression. Components: promoter + operator + structural genes → polycistronic mRNA (one mRNA, multiple ORFs). Examples: lac operon (lacZ-lacY-lacA, all encoding lactose metabolism enzymes), trp operon (trpEDCBA, tryptophan biosynthesis, 5 genes), his operon (histidine biosynthesis, 10 genes). Not found in eukaryotes (which have monocistronic mRNAs and individual promoters per gene) — except in C. elegans (polycistronic operons that are trans-spliced into individual mRNAs). Polycistronic mRNAs allow stoichiometric co-expression of related proteins."
  },
  {
    id: 42,
    question: "Bidirectional replication from multiple origins in eukaryotes results in replication 'bubbles.' When two adjacent replication bubbles meet, the mechanism for joining the replicated regions is:",
    options: ["Helicase activity joins the two bubbles by re-annealing the strands", "When forks from adjacent origins converge, the leading strands meet; the last Okazaki fragment of the lagging strand at the 5' end of the fork is processed: FEN1 removes the RNA primer flap, Pol δ fills the resulting gap, and DNA ligase I joins the nick — completing replication between origins", "Endonuclease cleavage of the converging forks followed by ligation", "Fork stalling at the junction followed by restart by a specialized helicase"],
    answer: 1,
    explanation: "Replication fork convergence (termination): (1) Two converging forks each have a leading strand extending toward the other fork; (2) At convergence, the leading strands from opposite directions meet and provide the 3'-OH for final synthesis; (3) The last Okazaki fragment from each fork's lagging strand synthesis must be completed: RNA primer removed by RNase H1 and FEN1 (flap endonuclease 1) → DNA gap filled by Pol δ → nick sealed by DNA ligase I; (4) Topo II decatenates the interlinked daughter circles. The site of termination is not sequence-specific in most organisms (unlike bacteria where Ter sites/Tus protein create replication fork barriers)."
  },
  {
    id: 43,
    question: "The concept of 'replication licensing' in eukaryotes prevents re-replication within a single cell cycle. The licensing factor that is specifically destroyed in S-phase to prevent re-licensing is:",
    options: ["ORC (origin recognition complex) is degraded in S-phase", "Cdt1 (Chromatin licensing and DNA Replication factor 1) is rapidly degraded in S-phase through: (1) CRL4-Cdt2 ubiquitin E3 ligase (PCNA-dependent, on chromatin) → proteasomal degradation; (2) SCF-cyclin F ubiquitin ligase; and is also inhibited by geminin (binds Cdt1 directly) — preventing Cdt1 from reloading MCM2-7 onto already replicated origins", "MCM2-7 helicase is exported from the nucleus during S-phase", "CDC6 is acetylated in S-phase, preventing MCM loading"],
    answer: 1,
    explanation: "Re-replication prevention: Cdt1 is the Achilles' heel of licensing. Multiple mechanisms destroy/inhibit Cdt1 in S-phase: (1) PCNA (loaded onto replicating DNA) binds CRL4-Cdt2 E3 ligase → Cdt1 polyubiquitination → 26S proteasome degradation (fast, primary mechanism); (2) CDK phosphorylation of Cdt1 → SCF-cyclin F ubiquitination → degradation; (3) Geminin (synthesized in S-phase, destroyed in G1 by APC/C-Cdh1) binds Cdt1 directly → inhibits MCM loading. Additionally: ORC1 (licensed ORC subunit) degraded in S/G2; Cdc6 exported from nucleus or degraded by CDKs. Overexpression of Cdt1 or Cdc6 can cause re-replication and DNA damage."
  },
  {
    id: 44,
    question: "The Tm (melting temperature) of a 20-mer oligonucleotide with sequence 5'-ATCGATCGATCGATCGATCG-3' can be calculated by the simple formula Tm = 4°C × (G+C) + 2°C × (A+T). If the GC content is 50%, the Tm is approximately:",
    options: ["40°C", "60°C", "52°C", "72°C"],
    answer: 1,
    explanation: "For the 20-mer with 50% GC: G+C = 10 bases, A+T = 10 bases. Simple formula: Tm = 4°C × (G+C) + 2°C × (A+T) = 4×10 + 2×10 = 40 + 20 = 60°C. This approximation is valid for short oligonucleotides (10-20 nt) under standard salt conditions (~50 mM Na⁺). For longer DNA or more precise calculations, the nearest-neighbor thermodynamic method accounts for stacking interactions between adjacent base pairs. PCR primer design typically aims for Tm 55-65°C to enable annealing at ~50-60°C (5°C below Tm). Actual 20-mer Tm would also depend on the specific sequence context (nearest-neighbor parameters) and salt concentration."
  },
  {
    id: 45,
    question: "The MCM2-7 complex in eukaryotic DNA replication functions as:",
    options: ["A single-subunit replicative helicase similar to DnaB in bacteria", "The replicative helicase: MCM2-7 forms a ring-shaped heterohexameric complex that unwinds DNA at the replication fork as part of the CMG (Cdc45-MCM2-7-GINS) holohelicase; it is loaded as an inactive double hexamer during G1 (pre-RC assembly) and activated by DDK/CDK phosphorylation in S-phase → single active hexamer encircling ssDNA, translocating 3'→5' on the leading strand", "A clamp loader that loads PCNA onto primer-template junctions", "The replication checkpoint sensor that detects stalled forks"],
    answer: 1,
    explanation: "MCM2-7 (minichromosome maintenance 2-7): eukaryotic replicative helicase. Inactive double hexamer loaded at origins in G1 by ORC-Cdc6-Cdt1-mediated mechanism. Activation in S-phase: DDK (Dbf4-Cdc7) phosphorylates MCM4 → recruits Sld3-Sld7-Cdc45; CDK phosphorylates Sld2-Sld3 → GINS (Sld5-Psf1-Psf2-Psf3 tetramer) recruited → CMG holohelicase (hexadecameric: Cdc45+MCM2-7+GINS) assembled. CMG operates as two single hexamers in a head-to-head configuration, unwinding DNA with each hexamer encircling one ssDNA strand, translocating 3'→5'. MCM8-MCM9: a separate hexameric complex functioning in HR."
  },
  {
    id: 46,
    question: "Nucleotide analogs like ara-CTP (cytarabine) and AZT (zidovudine) function as chain terminators in DNA synthesis because:",
    options: ["They inhibit the nucleotide kinases required to phosphorylate dNTPs to active forms", "They lack a 3'-OH group (3'-dideoxy analogs) or have modified 3'-groups (arabinosyl configuration in ara-C) that prevent the 3'-OH from forming the next phosphodiester bond after incorporation; the analog is incorporated but the chain cannot be extended — chain termination", "They directly bind and block the active site of DNA polymerase without being incorporated", "They inhibit helicase activity preventing template unwinding during replication"],
    answer: 1,
    explanation: "Chain-terminating nucleoside analogs: (1) AZT (3'-azidothymidine/zidovudine): lacks 3'-OH (3'-azido group) → incorporated by HIV reverse transcriptase → no 3'-OH available → chain termination. Active form: AZT-TP. (2) Ara-C (cytarabine): arabinosyl configuration (2'-OH in arabinose vs. deoxyribose in DNA) → ara-CTP incorporated → severely distorted primer-template junction → chain elongation severely impaired + blocked by steric clash. (3) Acyclovir (acycloguanosine): no 3' carbon → activated by viral thymidine kinase (selective activation in HSV-infected cells) → terminates viral DNA Pol. These analogs exploit polymerase's inability to extend from a blocked 3' position."
  },
  {
    id: 47,
    question: "DNA gyrase, a type IIA topoisomerase in bacteria, is the target of fluoroquinolone antibiotics. Fluoroquinolones (ciprofloxacin, levofloxacin) inhibit gyrase by:",
    options: ["Blocking the ATP-binding site, preventing gyrase from using energy for strand passage", "Intercalating into DNA and displacing the gyrase-DNA cleavage complex — stabilizing the gyrase-DNA covalent intermediate (with GyrA subunit linked to cleaved DNA 5' ends) rather than allowing religation; this generates permanent DSBs in the bacterial chromosome, leading to SOS response and bacterial death", "Binding the GyrB (ATPase) subunit and preventing subunit dimerization", "Methylating the DNA recognition sequence preventing gyrase binding"],
    answer: 1,
    explanation: "Fluoroquinolone mechanism: gyrase (GyrA₂GyrB₂): (1) GyrA cleaves both strands of the gate (G) segment with 4-bp stagger → 5' ends linked to GyrA Tyr122 tyrosyl-phosphate; (2) Transport (T) segment passes through gate → rejoining. Fluoroquinolones intercalate between DNA bases at the GyrA cleavage site and hydrogen bond with GyrA residues → stabilize the GyrA-DNA cleavage complex (prevent rejoining step) → irreversible DSBs → chromosomal fragmentation → cell death. Resistance: GyrA mutations (Ser83 → Leu/Trp, Asp87 → Asn/Gly) reduce drug binding without abolishing gyrase activity. Also target topoisomerase IV (ParC-ParE). Essential drugs for gram-negative infections."
  },
  {
    id: 48,
    question: "The 'C-value paradox' refers to which observation in molecular genetics?",
    options: ["The carbon (C) content of DNA correlates with gene number across species", "The haploid genome size (C-value) does not correlate with organismal complexity — some organisms have much larger genomes than humans (e.g., some salamanders, lilies, amoeba) with no greater gene number; this paradox is explained by the variable content of non-coding DNA, repetitive elements, transposable elements, introns, and polyploidy", "The coding capacity (C) of the genome is proportional to the GC content", "The chromosome (C) number determines biological complexity in eukaryotes"],
    answer: 1,
    explanation: "C-value paradox: C-value = haploid DNA content (e.g., human = 3×10⁹ bp, C-value = 3 pg DNA). Paradox: some salamanders (Plethodon glutinosus ~47 pg) and lily (Fritillaria assyriacam ~125 pg) have vastly larger genomes than humans despite similar or lesser complexity. Explanation: (1) ~45-80% of large genomes are transposable elements (LINE-1, SINEs, LTR retrotransposons, DNA transposons); (2) Large introns; (3) Polyploidy (especially in plants); (4) Non-coding tandem repeats; (5) Pseudogenes; (6) Non-functional sequence. The C-value is thus a poor predictor of biological complexity. Gene number (G-value paradox) is also poorly correlated with complexity."
  },
  {
    id: 49,
    question: "In eukaryotic chromosomes, the 30 nm chromatin fiber remains controversial as an in vivo structure. Recent evidence from cryo-electron tomography suggests that chromatin in living cells is organized as:",
    options: ["Regular 30 nm solenoid fibers identical to in vitro reconstituted chromatin", "Irregular, heterogeneous chromatin fibers with variable nucleosome spacing and no regular higher-order structure in most of the nucleus; the 10 nm nucleosomal fiber forms an 'open polymer' or 'liquid-like' disordered arrangement — with more compact chromatin found only at constitutive heterochromatin domains", "Condensed 100 nm chromatin domains throughout all interphase cells", "Uniform 11 nm fibers without nucleosomes in transcriptionally active regions"],
    answer: 1,
    explanation: "The 30 nm fiber controversy: In vitro reconstituted chromatin forms regular 30 nm fibers (solenoid or two-start zigzag models). In living cells: (1) Cryo-ET of vitrified sections shows nucleosomes are irregularly packed — no discernible 30 nm fiber in euchromatin; (2) SAXS (small-angle X-ray scattering) of cell nuclei shows ~6 nm features (nucleosomes) but no 30 nm periodicity; (3) Super-resolution microscopy (STORM/PALM) shows irregular chromatin domains ~50-200 nm. Current model: chromatin exists as polymer melt/liquid with local nucleosome clutches (2-10 nucleosomes), separated by nucleosome-free linker DNA. Regular 30 nm-like fibers may exist only at constitutive heterochromatin (centromeres, telomeres)."
  },
  {
    id: 50,
    question: "Sister chromatid cohesion, maintained by the cohesin complex, is essential for accurate chromosome segregation. Cohesin's molecular structure and mode of chromosome binding involves:",
    options: ["Cohesin crosslinks sister chromatids through multiple covalent disulfide bonds between cohesion proteins", "Cohesin is a ring-shaped protein complex (SMC1-SMC3 ATPase heterodimer + kleisin subunit RAD21/SCC1 + SA1/SA2 HEAT-repeat subunit) that entraps both sister chromatid DNAs within its ring — topological entrapment (not covalent) allows cohesin rings to slide along DNA while maintaining cohesion", "Cohesin functions by direct DNA-DNA bridging using non-covalent hydrogen bonds between sister chromatid strands", "Cohesin is a histone modification reader that binds H3K9me3 on both sister chromatids simultaneously"],
    answer: 1,
    explanation: "Cohesin (SMC1-SMC3-RAD21-SA1/SA2 tetrameric ring): ~50 nm diameter ring. SMC1/SMC3: long coiled-coil arms connected at the hinge, ATP-binding/hydrolysis heads at the distal end. RAD21 connects the two SMC ATPase heads; SA1/SA2 HEAT repeats bridge RAD21 to DNA. Ring topology: cohesin entraps two chromatid DNAs within its ring lumen (topological embrace model). Cohesin loading: Scc2-Scc4 (NIPBL-MAU2) loader complex. Cohesin establishment: during DNA replication, Eco1/ESCO1/ESCO2 acetylates SMC3 Lys112/113 → stabilizes entrapment. Cohesin dissolution: prophase pathway (WAPL removes non-centromeric cohesin) + centromeric cohesin released at anaphase by separase cleaving RAD21."
  }
];

export default questions;
