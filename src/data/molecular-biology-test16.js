export const questions = [
  {
    id: 1,
    question: "The central dogma of molecular biology (Crick, 1958) describes the flow of genetic information. Which exceptional pathway, demonstrated by Howard Temin's discovery of reverse transcriptase, was added later?",
    options: ["Protein → RNA", "RNA → DNA (reverse transcription)", "DNA → Protein (direct translation without RNA)", "RNA → RNA (direct RNA replication without DNA intermediate)"],
    answer: 1,
    explanation: "The classic central dogma: DNA→RNA→Protein. Howard Temin and David Baltimore (Nobel 1975) independently discovered reverse transcriptase in retroviruses, demonstrating RNA→DNA flow. Additional allowed flows: RNA→RNA (RNA viruses), DNA→DNA (replication). Still considered 'forbidden': DNA→Protein directly and Protein→Protein (except prion conformational conversion) or Protein→Nucleic acid."
  },
  {
    id: 2,
    question: "In eukaryotic cells, the origin recognition complex (ORC) marks replication origins. Which protein functions as the replicative helicase in eukaryotes?",
    options: ["DnaB (in bacteria only)", "MCM2-7 (loaded as a double hexamer; activated by CDC45 and GINS to form CMG helicase)", "T7 gp4 helicase-primase", "Werner syndrome helicase (WRN)"],
    answer: 1,
    explanation: "Eukaryotic replication initiation: ORC1-6 recruits CDC6 and CDT1 → MCM2-7 loaded as a double hexamer (head-to-head, forming a pre-replication complex) in G1. At S phase entry, CDK2-CycE and DDK (CDC7-DBF4) phosphorylate MCM2-7 → recruit GINS (SLD5-PSF1-PSF2-PSF3) and CDC45 → forms active CMG (CDC45-MCM2-7-GINS) helicase complex. MCM2-7 is the actual helicase ATPase, encircling ssDNA."
  },
  {
    id: 3,
    question: "Which statement about eukaryotic RNA Pol II elongation is correct?",
    options: ["RNA Pol II initiates transcription without any general transcription factors", "The CTD of the largest RPB1 subunit has 52 heptapeptide repeats (YSPTSPS) that are phosphorylated sequentially: Ser5 (initiation/5' capping) → Ser2 (elongation/3' processing)", "RNA Pol II cannot read through nucleosomes without assistance", "Pol II CTD phosphorylation is inhibited by CDK7 (TFIIH)"],
    answer: 1,
    explanation: "RNA Pol II CTD (C-terminal domain of RPB1): 52 heptad repeats (YSPTSPS). CTD code: (1) Ser5-P (by CDK7/TFIIH) marks promoter-proximal initiating Pol II → recruits 5' capping enzyme; (2) Ser2-P (by CDK9/P-TEFb) marks productively elongating Pol II → recruits 3' processing, splicing factors; (3) Ser7-P (by CDK7) marks snRNA gene Pol II. DSIF (SPT4-SPT5) and NELF initially pause Pol II at 30-50 nt; P-TEFb phosphorylates DSIF/NELF, releasing pause and enabling productive elongation."
  },
  {
    id: 4,
    question: "The splicing reaction in pre-mRNA processing involves two transesterification steps. What is the intermediate after the first step?",
    options: ["Excised linear intron and joined exons", "Lariat intermediate (branch point 2'-OH attacks 5' splice site) with free 3'-OH at 5' exon end", "Circular RNA produced by back-splicing", "U2-associated branch point snoRNA complex"],
    answer: 1,
    explanation: "Pre-mRNA splicing: Step 1 — 2'-OH of branch point adenosine (in BP sequence ~20-50 nt upstream of 3' splice site) attacks the 5' splice site phosphodiester bond → lariat intermediate (exon 1 freed with 3'-OH; intron adopts 2'-5' branch) + exon 2 attached to lariat. Step 2 — freed 3'-OH of exon 1 attacks 3' splice site → exon ligation and lariat excision. The lariat is debranched by DBR1 (RNA debranching enzyme) and degraded (or back-spliced to form circular RNA)."
  },
  {
    id: 5,
    question: "Which epigenetic mark is deposited by PRC2 (EZH2, EED, SUZ12) and functions as a repressive chromatin modification?",
    options: ["H3K4me3 (active promoter mark)", "H3K27me3 (Polycomb repression of developmental genes)", "H3K36me3 (active transcription elongation)", "H3K9ac (active enhancer/promoter mark)"],
    answer: 1,
    explanation: "PRC2 (Polycomb Repressive Complex 2): EZH2 is the H3K27 methyltransferase SET domain protein; EED allosterically stimulates EZH2 by reading H3K27me3 (propagation mechanism); SUZ12 is the scaffolding subunit. H3K27me3 recruits PRC1 (via CBX proteins reading H3K27me3) → PRC1 catalyzes H2AK119ub1 (via RING1A/RING1B) → compacted, transcriptionally silent chromatin. Polycomb repression governs developmental gene silencing (HOX genes) and X chromosome inactivation."
  },
  {
    id: 6,
    question: "The concept of 'synthetic biology' involves which molecular biology approach?",
    options: ["Using natural organisms for industrial fermentation", "Engineering novel biological systems with standardized genetic parts (promoters, RBS, ORFs, terminators — BioBricks) to create cells with new or enhanced functions not found in nature", "Studying the evolution of biological molecules in vitro", "Comparing genomes of extinct and living organisms"],
    answer: 1,
    explanation: "Synthetic biology: applies engineering principles to biological system design. Key concepts: (1) Standardized parts (iGEM registry — promoters, RBS, coding sequences, terminators as BioBricks); (2) Genetic circuits (toggle switches, oscillators, logic gates); (3) Chassis organisms (E. coli, S. cerevisiae, CHO cells for production); (4) DNA synthesis/assembly (Gibson, Golden Gate) to build pathways de novo; (5) Orthogonal genetic elements (xenobiology, unnatural amino acids). Applications: biofuel production (farnesene, butanol), metabolic engineering (artemisinin in yeast), cell-based therapeutics, biosensors."
  },
  {
    id: 7,
    question: "G-protein coupled receptors (GPCRs) are the largest family of drug targets. Approximately what percentage of approved drugs target GPCRs?",
    options: ["~5%", "~15%", "~34-35%", "~60%"],
    answer: 2,
    explanation: "GPCRs are the largest superfamily of cell surface receptors (~800 in human genome). Approximately 34-35% of all FDA-approved drugs target GPCRs, making them the most drugged target class (>700 GPCR-targeting drugs). This reflects their central roles in virtually all physiological processes. Notable drugs: beta-blockers (β1/β2-AR), ACE inhibitors work on RAAS pathway upstream; opioids (μ-opioid receptor), antihistamines (H1), antipsychotics (dopamine D2), salmeterol (β2-agonist for asthma)."
  },
  {
    id: 8,
    question: "The PTEN lipid phosphatase acts specifically on which substrate, and its loss leads to constitutive activation of which pathway?",
    options: ["PIP2 → PIP, leading to constitutive Wnt signaling", "PIP3 → PIP2 (removing 3-phosphate), and its loss leads to constitutive PI3K-AKT-mTOR signaling", "PIP2 → IP3 + DAG, activating PKC", "PI → PIP, preventing all phosphoinositide signaling"],
    answer: 1,
    explanation: "PTEN (Phosphatase and Tensin homolog): lipid phosphatase that dephosphorylates the 3-position of PIP3 (PI-3,4,5-P3) → PIP2 (PI-4,5-P2), directly opposing PI3K. PTEN also has protein phosphatase activity and nuclear functions. PTEN loss (one of the most frequent events in cancer: ~30-40% prostate, ~50% endometrial, ~40-50% GBM) → elevated PIP3 → constitutive AKT membrane recruitment → AKT phosphorylation by PDK1 (T308) and mTORC2 (S473) → activated AKT drives proliferation, survival, motility, and metabolic reprogramming."
  },
  {
    id: 9,
    question: "Nucleotide excision repair (NER) removes bulky DNA adducts. Global-genome NER (GG-NER) recognizes damage through:",
    options: ["ATR-ATRIP complex sensing RPA-coated ssDNA at stalled forks", "XPC-RAD23B (with UV-DDB in case of UV damage) recognizing distortions in the DNA helix from the undamaged strand", "RNA Pol II stalling at damage lesions (TC-NER mechanism)", "MutS-MutL complex recognizing base mismatches"],
    answer: 1,
    explanation: "GG-NER recognition: XPC-RAD23B senses DNA helix distortion (recognizes the undamaged strand, not the lesion itself). For UV damage (CPDs are poorly distorting): UV-DDB complex (DDB1-DDB2/XPE) first recognizes damage, then hands off to XPC. TC-NER recognition: RNA Pol II stalling at damage → CSB (ERCC6), CSA (ERCC8), and UVSSA recruited. Both pathways converge at TFIIH (XPB and XPD helicases unwind ~30 nt bubble) → XPA verifies damage → RPA stabilizes ssDNA → XPG and XPF-ERCC1 make dual incisions → 25-30 nt gap filled by Pol δ/ε → ligation."
  },
  {
    id: 10,
    question: "The Nobel Prize in Physiology/Medicine 2023 was awarded for discoveries enabling mRNA vaccines. What key modification was central to this advance?",
    options: ["5'-capping with m7GTP to prevent immune recognition", "Replacement of uridine with pseudouridine (Ψ) or N1-methylpseudouridine (m1Ψ), reducing innate immune activation and increasing mRNA stability/translation", "Codon optimization of spike protein mRNA for human codon usage", "Poly-A tail extension to 120 adenosines for enhanced stability"],
    answer: 1,
    explanation: "Karikó and Weissman (Nobel 2023): discovered that incorporating modified nucleosides (pseudouridine, Ψ, as in natural tRNA/rRNA) into IVT mRNA dramatically reduced TLR3, TLR7, TLR8, and RIG-I activation — the immune sensors that detect foreign RNA. Modified mRNA also has increased translational efficiency (~10-fold). This made mRNA therapeutically viable. COVID-19 mRNA vaccines (Moderna, Pfizer-BioNTech) use N1-methylpseudouridine (m1Ψ). This discovery built on decades of work on innate immune recognition of RNA modifications."
  },
  {
    id: 11,
    question: "Which feature of the CRISPR-Cas9 system determines its on-target vs off-target cleavage specificity?",
    options: ["The PAM sequence exclusively determines specificity", "The 20-nt spacer sequence in the sgRNA must base-pair with the target (protospacer); mismatches are tolerated in the PAM-distal 'seed region' but not in the PAM-proximal seed region (~1-12 nt adjacent to PAM)", "Cas9 protein sequence determines all cleavage specificity", "DNA methylation status of the target determines whether Cas9 can bind"],
    answer: 1,
    explanation: "Cas9 specificity: (1) PAM recognition (NGG) is required for initial dsDNA binding; (2) R-loop formation requires sgRNA:target complementarity; (3) Seed region (PAM-proximal ~12 nt): critical — mismatches here prevent cleavage; (4) PAM-distal region (~8-20): more tolerant of mismatches. Off-target effects: Cas9 can cleave at sites with ≤5 mismatches, especially in seed region. High-fidelity Cas9 variants (eSpCas9, SpCas9-HF1, HypaCas9, evoSpCas9) have reduced non-specific DNA binding, significantly improving specificity without compromising on-target activity."
  },
  {
    id: 12,
    question: "The molecular basis of long-term potentiation (LTP) at glutamatergic synapses involves which key molecular events?",
    options: ["Decrease in AMPA receptor expression and reduced glutamate release", "Ca2+ influx through NMDA receptors → CaMKII activation (autophosphorylation at Thr286) → AMPA receptor phosphorylation and insertion into the synapse, and AMPA receptor subunit expression via CREB phosphorylation", "cAMP-PKA activation leading to GABA receptor downregulation", "mGluR5 activation decreasing NMDA receptor surface expression"],
    answer: 1,
    explanation: "LTP (Bliss & Lømo, 1973): high-frequency stimulation → sufficient depolarization to remove Mg2+ block from NMDA receptors → Ca2+ influx → (1) Early LTP: CaMKII autophosphorylation (Thr286) → phosphorylates GluA1-AMPA receptors (Ser831) → increased conductance and AMPA receptor insertion (SNARE-mediated exocytosis); (2) Late LTP (L-LTP): PKA/MAPK → CREB Ser133 phosphorylation → new AMPA subunit synthesis (GluA1) → structural synaptic remodeling (spine enlargement). CPEB (local dendritic translation), Arc/Arg3.1 regulate L-LTP plasticity."
  },
  {
    id: 13,
    question: "Liquid-liquid phase separation (LLPS) forms membraneless organelles in cells. Which type of protein sequences drive LLPS?",
    options: ["Globular folded protein domains with defined hydrophobic cores", "Intrinsically disordered regions (IDRs) with repetitive, low-complexity sequences (e.g., FUS, TDP-43, hnRNPA1 with RGG/RS/YGGXQ motifs) that form multivalent weak interactions", "Transmembrane domains anchoring complexes at membranes", "Coiled-coil domains mediating specific binary interactions"],
    answer: 1,
    explanation: "LLPS (phase separation): concentrated IDR-containing proteins undergo concentration-dependent phase transition from dilute phase to dense liquid droplet phase. Driving forces: multivalent, weak, non-covalent interactions (π-π stacking between aromatic residues, cation-π between Arg/Lys and Tyr/Phe, electrostatic, hydrophobic, H-bonds). Key IDR sequences: LC (low-complexity) domains — RGG/RG boxes, YGGXQ, SYGQ, RS domains. Examples: FUS/TLS, TDP-43, hnRNPA1 in stress granules; FUS/EWS in oncogenic translocations; RNA Pol II CTD + Mediator at super-enhancers."
  },
  {
    id: 14,
    question: "Telomere biology: the 'end replication problem' causes telomere shortening. Which structure protects telomere ends from being recognized as DSBs?",
    options: ["H3K9me3 heterochromatin silencing the telomeric region", "T-loop structure (single-stranded G-overhang loops back into the double-stranded telomere, sequestered by TRF1/TRF2/POT1 shelterin complex)", "LaminB nuclear lamina anchoring telomeres to the nuclear envelope", "Histone H2A.X at telomere ends inhibiting ATM kinase"],
    answer: 1,
    explanation: "Shelterin complex (TRF1, TRF2, POT1, TIN2, TPP1, RAP1) protects chromosome ends: TRF1/TRF2 bind double-stranded TTAGGG repeats; POT1 binds single-stranded G-overhang. The G-overhang (~50-300 nt) invades adjacent dsDNA telomere to form a T-loop (D-loop at invasion site = D-loop). T-loop sequesters the 3' end, hiding the chromosome terminus from ATM-initiated DNA damage response. TRF2 prevents ATM activation and NHEJ at telomeres; POT1-TPP1 prevent ATR activation. Telomere dysfunction (shelterin loss, extreme shortening) activates p53-mediated replicative senescence or apoptosis."
  },
  {
    id: 15,
    question: "The Warburg effect in cancer cells involves high lactate production even in the presence of oxygen. Which enzyme catalyzes the final step of aerobic glycolysis converting pyruvate to lactate?",
    options: ["Pyruvate kinase M2 (PKM2)", "Lactate dehydrogenase A (LDHA)", "Pyruvate dehydrogenase complex (PDC)", "Phosphoglycerate mutase (PGM)"],
    answer: 1,
    explanation: "Aerobic glycolysis: Glucose → (glycolysis) → Pyruvate → LDHA → Lactate + NAD+ (cytoplasmic). LDHA converts pyruvate to L-lactate, regenerating NAD+ for continued glycolysis. Lactate is exported by MCT4 (SLC16A3), acidifying the TME. LDHA is transcriptionally activated by HIF-1α and MYC. Pyruvate dehydrogenase (PDH) converts pyruvate to acetyl-CoA for TCA cycle — this is inhibited in Warburg cancer cells by PDK1 (phosphorylating/inactivating PDH E1α), also induced by HIF-1α. PKM2 (embryonic isoform in cancer) is the penultimate glycolytic enzyme."
  },
  {
    id: 16,
    question: "The m6A modification of mRNA is deposited by which 'writer' complex and is the most abundant internal mRNA modification in eukaryotes?",
    options: ["DNMT3A-DNMT3B complex (DNA methylation)", "METTL3-METTL14 (catalytic subunit METTL3, regulatory METTL14) + WTAP complex — installs m6A at DRACH motifs", "EZH2-PRC2 complex (H3K27 methylation)", "PRMT5-MEP50 complex (Arg methylation)"],
    answer: 1,
    explanation: "m6A (N6-methyladenosine): most abundant internal mRNA modification. Writer: METTL3-METTL14-WTAP complex (+ other regulatory subunits: HAKAI, ZC3H13, VIRMA) installs m6A at DRACH motifs (D=A/G/U, R=A/G, A=A, C=C, H=A/C/U). Eraser: FTO, ALKBH5 (demethylases). Readers: YTHDF1 (promotes translation), YTHDF2 (promotes mRNA decay), YTHDF3, YTHDC1/2, IGF2BP1-3 (stabilize mRNA). m6A regulates mRNA stability, translation efficiency, splicing, export, and secondary structure. High m6A in stem cell pluripotency transcripts, heat shock response."
  },
  {
    id: 17,
    question: "VDJ recombination generates diverse antibody variable regions. The order of rearrangement in developing B cells is:",
    options: ["V first, then D, then J (at separate recombination events)", "DH-JH first (heavy chain), then VH-DJH joining; then light chain κ VL-JL (then λ if κ fails)", "Heavy chain VL-JL (no D segment), then light chain VH-DH-JH", "Random order determined by accessibility of gene segments"],
    answer: 1,
    explanation: "B cell development ordered V(D)J recombination: Pro-B stage — heavy chain D-J joining → V-DJ joining → express μ heavy chain on surface (pre-BCR checkpoint with surrogate light chain λ5-VpreB) → signals allelic exclusion (no rearrangement of second heavy chain allele). Pre-B stage — light chain κ VL-JL rearrangement → if non-productive, κ deletion → λ VL-JL. Successful BCR (IgM) surface expression → immature B cell → peripheral maturation. The ordered recombination and checkpoints ensure one specificity per B cell (clonal selection)."
  },
  {
    id: 18,
    question: "Nonsense-mediated mRNA decay (NMD) is a quality control mechanism. The EJC (exon junction complex) model of NMD explains how:",
    options: ["EJC marks splicing events and when a ribosome encounters a premature stop codon (PTC) more than ~50-55 nt upstream of an EJC, the ribosome stalls and the mRNA is degraded by UPF1-UPF2-UPF3", "EJC promotes translation of all mRNAs regardless of stop codon position", "EJC recruits NMD machinery to every mRNA that has been spliced", "EJC-associated ribosomes only translate ORFs without introns"],
    answer: 0,
    explanation: "NMD EJC model: EJCs (deposited ~20-24 nt upstream of each exon-exon junction by splicing) are normally displaced by the pioneer round of translation. If a PTC is more than ~50-55 nt upstream of an EJC, the EJC is not displaced → downstream EJC recruits UPF3B → UPF3B recruits UPF2 → UPF2-UPF3B activates UPF1 (ATP-dependent helicase/phosphorylated by SMG1) → SMG6 endonuclease cleaves near PTC, or SMG5-SMG7 recruit CCR4-NOT deadenylase → decapping → 5'→3' decay. Also: long 3' UTRs can trigger NMD (EJC-independent, boundary model)."
  },
  {
    id: 19,
    question: "Genome-wide CRISPR screening in cancer cells using a 'CRISPRi' approach (dCas9-KRAB fusion) rather than Cas9 nuclease:",
    options: ["Creates permanent mutations making it impossible to recover cells after screening", "Transcriptionally silences target genes without permanent DNA cutting — enables reversible, tunable knockdown and can target non-coding regulatory elements (enhancers, lncRNA promoters) without risk of NHEJ-mediated repair artifacts", "Cannot target essential genes (cells would die before sgRNA can be quantified)", "Only works for genes with CpG island promoters"],
    answer: 1,
    explanation: "CRISPRi (CRISPR interference): dCas9 (dead Cas9, D10A + H840A mutations — no cleavage) fused to KRAB (Krüppel-associated box repressor domain) → recruits KAP1/NuRD/SETDB1 → H3K9me3 → heterochromatin → transcriptional silencing at target gene TSS. Advantages: (1) No DSBs → no indels/artifacts; (2) Reversible (CRISPRi cells can be deinduced); (3) Tunable (multiple sgRNAs for stronger silencing); (4) Can target non-coding elements (enhancers, lncRNA promoters, non-transcribed regions); (5) Essential gene screens possible (partial knockdown vs lethal KO)."
  },
  {
    id: 20,
    question: "The structure of ribosome was elucidated by cryo-EM and X-ray crystallography. Which scientists received the 2009 Nobel Prize in Chemistry for ribosome structure?",
    options: ["Jennifer Doudna and Emmanuelle Charpentier (CRISPR)", "Venkatraman Ramakrishnan, Thomas Steitz, and Ada Yonath (ribosome structure)", "Roger Tsien, Osamu Shimomura, and Martin Chalfie (GFP)", "Roderick MacKinnon (ion channels)"],
    answer: 1,
    explanation: "2009 Nobel Prize in Chemistry: Venkatraman Ramakrishnan (MRC, UK), Thomas Steitz (Yale, USA), and Ada Yonath (Weizmann Institute, Israel) for structural studies of the ribosome by X-ray crystallography. Their structures revealed the atomic-level mechanisms of translation, including the peptidyl transferase center (rRNA-based ribozyme), antibiotic binding sites (tetracycline, chloramphenicol, erythromycin), and decoding center. These structures have guided structure-based antibiotic drug development."
  },
  {
    id: 21,
    question: "The 'restriction-modification' (R-M) system in bacteria functions as an innate immune system against bacteriophages by:",
    options: ["Encoding CRISPR arrays to adaptively memorize phage sequences", "Methylase modifying bacterial DNA at specific sequences (self-protection); restriction endonuclease cleaving unmethylated foreign DNA at the same recognition sequence", "Producing small RNA molecules that cleave phage RNA", "Producing toxins that kill infected cells (abortive infection)"],
    answer: 1,
    explanation: "R-M systems: bacteria protect own DNA by methylating specific recognition sequences (e.g., EcoRI methylase methylates GAATTC: 6mA). Foreign DNA (phage) lacking methylation at the same sites is cleaved by the cognate restriction endonuclease. Type I: one multifunctional enzyme complex, cleaves far from recognition site. Type II (most studied/used in molecular biology): separate methylase and restriction enzymes, cut at/near recognition site (e.g., EcoRI, HindIII, BamHI). Type III: similar to Type I but cuts ~25-27 bp downstream. Type IV: cleave modified DNA."
  },
  {
    id: 22,
    question: "Chimeric antigen receptor (CAR) T cell therapy in B-cell malignancies predominantly uses which target antigen?",
    options: ["CD3 (present on all T cells)", "CD19 (B cell-lineage antigen expressed from pro-B to mature B cells, and on B cell malignancies)", "CD33 (AML marker)", "CD20 (mature B cell marker)"],
    answer: 1,
    explanation: "CD19-targeted CAR T cells (tisagenlecleucel/Kymriah, axicabtagene ciloleucel/Yescarta, lisocabtagene maraleucel/Breyanzi): CD19 is expressed throughout B cell development (pro-B to mature B) and on most B cell malignancies (B-ALL, DLBCL, FL, MCL). FDA approved for relapsed/refractory B-ALL and large B cell lymphoma. Major adverse effects: cytokine release syndrome (CRS) and neurotoxicity (ICANS). CD19 antigen escape is a resistance mechanism. BCMA-targeted CAR T (idecabtagene vicleucel/ide-cel, ciltacabtagene autoleucel/cilta-cel) for multiple myeloma."
  },
  {
    id: 23,
    question: "The base excision repair (BER) pathway initiates with which type of enzyme recognizing damaged bases?",
    options: ["XPC helicase recognizing helix distortions (NER)", "DNA glycosylase specifically removing damaged/modified base, leaving an abasic (AP) site", "MSH2-MSH6 complex recognizing base mismatches (MMR)", "Ku70-Ku80 complex recognizing DSBs (NHEJ)"],
    answer: 1,
    explanation: "BER: (1) DNA glycosylase recognizes and excises damaged base (mono-functional: OGG1 removes 8-oxoG; UNG removes uracil; bi-functional glycosylase/lyase: NEIL1/2 also perform β-elimination); (2) APE1 endonuclease cleaves the AP site leaving a 3'-OH; (3) DNA Pol β (short-patch: 1 nt) or Pol δ/ε+PCNA (long-patch: 2-10 nt) fills the gap; (4) XRCC1-LIG3 (short-patch) or LIG1 (long-patch) seals the nick. BER is the primary pathway for oxidative, alkylation, deamination damage."
  },
  {
    id: 24,
    question: "The phosphoinositide 3-kinase (PI3K) family has which class that is most commonly activated in cancer?",
    options: ["Class III PI3K (VPS34) — produces PI3P for autophagy", "Class I PI3K (PI3Kα encoded by PIK3CA, PI3Kβ by PIK3CB, PI3Kδ by PIK3CD, PI3Kγ by PIK3CG) — produces PIP3 from PIP2, activating AKT", "Class II PI3K — produces PI3P and PI(3,4)P2 for endocytosis", "Class IV PI3K-related kinases (PI3KK) — ATM, ATR, mTOR, DNA-PKcs"],
    answer: 1,
    explanation: "Class IA PI3K: heterodimers of p110α/β/δ (catalytic, encoded by PIK3CA/B/D) with p85α/β (regulatory, encoded by PIK3R1/2). RTK activation → phospho-Y binds p85 SH2 → p110 released and activated → PIP2→PIP3. PIK3CA (p110α) is one of the most frequently mutated oncogenes (>30% breast cancer, >15% CRC, ~15% endometrial). Class IB: p110γ-p101 (PIK3CG+PIK3R5) activated by Gβγ. Class IA inhibitors: idelalisib (PI3Kδ for CLL/follicular lymphoma), copanlisib, alpelisib (PI3Kα for PIK3CA-mutant breast cancer)."
  },
  {
    id: 25,
    question: "DNA methylation at CpG islands in gene promoters is associated with which transcriptional state, and how is it maintained through cell division?",
    options: ["CpG island promoter methylation → gene activation; maintained by DNMT3A/B", "CpG island promoter methylation → gene silencing; maintained by DNMT1 recognizing hemi-methylated CpG after replication (with cofactors UHRF1/DNMT3L)", "CpG island methylation → gene activation in a tissue-specific manner", "CpG methylation in gene bodies → promoter silencing through chromatin looping"],
    answer: 1,
    explanation: "CpG island promoter methylation: silences gene expression by: (1) Blocking transcription factor binding (methyl-CpG repels most TFs except MBDs); (2) Recruiting methyl-CpG binding domain (MBD) proteins → HDAC/NuRD → histone deacetylation → compacted chromatin. Maintenance methylation: DNMT1 recognizes hemi-methylated CpG (methylated on one strand after replication) via UHRF1 (which also reads H3K9me2 and the hemi-methylated CpG mark) → DNMT1 methylates the new strand → faithfully propagates methylation pattern. DNMT3A/3B establish de novo methylation. TET1-3 demethylate via 5hmC oxidation."
  },
  {
    id: 26,
    question: "Autophagy is a cellular quality control process. Which protein complex initiates autophagosome formation?",
    options: ["ULK1-ATG13-FIP200-ATG101 complex (ULK1 complex) — activated by energy deficit/mTORC1 inhibition", "Beclin-1 alone — it forms autophagosomes independently", "LC3 conjugated to PE — LC3-II is the initiator", "p62/SQSTM1 alone initiates selective autophagy"],
    answer: 0,
    explanation: "Autophagy initiation: mTORC1 (nutrient-rich) phosphorylates ULK1 (Ser757) → ULK1 inactive. mTORC1 inhibition (starvation, AMPK activation) → ULK1 activated → phosphorylates ATG13, FIP200 → ULK1-ATG13-FIP200-ATG101 complex activates PI3KC3 complex (Beclin-1-VPS34-ATG14L) → generates PI3P at phagophore assembly site (PAS) → recruits WIPI2 → ATG12-ATG5-ATG16L1 (E3 ligase) conjugates LC3 to PE (LC3-II) → autophagosome membrane elongation. p62/SQSTM1 is a selective autophagy cargo receptor recognizing ubiquitin-tagged cargo and LC3."
  },
  {
    id: 27,
    question: "The one-carbon folate metabolism cycle is required for which biosynthetic processes critical for rapidly dividing cancer cells?",
    options: ["Lipid synthesis exclusively", "Purine and thymidylate synthesis (DNA), methionine regeneration (SAM for methylation), and serine-glycine interconversion", "Glucose oxidation via TCA cycle", "Cholesterol synthesis via mevalonate pathway"],
    answer: 1,
    explanation: "One-carbon (folate) metabolism: serine donates one-carbon unit to THF → produces 5,10-methylene-THF → DHFR/TYMS generates dTMP (thymidylate) for DNA synthesis → 5,10-methenyl-THF/5-formyl-THF → purine ring synthesis (GART, ATIC). Folate cycle also generates methionine (from homocysteine via MTHFR/5-methylTHF), producing SAM (universal methyl donor for DNA/RNA/histone methylation). Rapidly dividing cancer cells depend on this cycle → antifolates (methotrexate/MTX inhibiting DHFR, pemetrexed inhibiting TYMS) are anti-cancer drugs."
  },
  {
    id: 28,
    question: "Which technique is used to determine the tertiary structure of proteins in solution, particularly flexible or disordered proteins?",
    options: ["X-ray crystallography (requires crystals, loses dynamics)", "Nuclear Magnetic Resonance (NMR) spectroscopy — detects through-bond (J-coupling) and through-space (NOE) interactions between nuclear spins in solution, provides 3D structure AND dynamics", "Cryo-EM (excellent for large complexes, limited for small or highly dynamic proteins <100 kDa in practice)", "AlphaFold2 computational prediction (not experimental)"],
    answer: 1,
    explanation: "NMR structural biology: solution-state NMR measures chemical shifts (electronic environment), NOE (nuclear Overhauser effect, through-space ≤5 Å), J-coupling (dihedral angles), and RDC (residual dipolar coupling, global orientation). Best for: proteins <50 kDa (larger possible with TROSY), intrinsically disordered proteins (IDPs), protein dynamics (ps-μs timescales via relaxation measurements), protein-ligand binding (HSQC chemical shift perturbation), and protein-nucleic acid interactions. Tools: NOESY, HSQC, TOCSY spectra; ARIA, CYANA for structure calculation."
  },
  {
    id: 29,
    question: "The Cas13 CRISPR effector differs from Cas9/Cas12 in that it:",
    options: ["Cleaves dsDNA at RNA-directed sites", "Targets and cleaves single-stranded RNA (not DNA), and exhibits collateral RNA cleavage (trans-cleavage) upon target RNA binding — used for RNA knockdown, diagnostics (SHERLOCK), and RNA editing", "Requires a PAM sequence on RNA targets for cleavage", "Can only be used in bacterial cells, not eukaryotes"],
    answer: 1,
    explanation: "Cas13 (class 2, type VI CRISPR): targets single-stranded RNA via crRNA base-pairing (no PAM required on RNA targets; some Cas13 variants prefer PFS — protospacer flanking sequences). Contains two HEPN RNase domains (activated by target binding). Collateral cleavage: activated Cas13 non-specifically degrades nearby ssRNA — useful for SHERLOCK diagnostics (reporter RNA cleavage amplifies signal). Applications: (1) RNA knockdown in human cells (similar to RNAi but more specific); (2) RNA editing via Cas13-ADAR2 fusion (REPAIR, correcting pathogenic point mutations in RNA); (3) Antiviral strategies."
  },
  {
    id: 30,
    question: "The molecular clock concept in evolutionary biology proposes that:",
    options: ["Organisms evolve at the same rate regardless of generation time", "Neutral mutations accumulate at a roughly constant rate over time in a given gene/genome region — enabling estimation of divergence times between species from sequence differences", "Natural selection drives constant directional evolution", "DNA methylation changes at a constant rate during aging"],
    answer: 1,
    explanation: "Molecular clock (Zuckerkandl & Pauling, 1965): certain gene sequences (especially synonymous substitutions in protein-coding genes, or rapidly evolving regions) accumulate neutral mutations at an approximately constant rate ('ticks'). Comparing sequence divergence between two species, and knowing divergence rates (calibrated from fossil record), estimates the time since common ancestor. Clock rates vary by gene (slowly evolving: histones, rRNA; rapidly evolving: mtDNA) and by organism (generation time effect). Used for dating species divergence, tracing infectious disease outbreaks, and ancient DNA analysis."
  },
  {
    id: 31,
    question: "In bacteria, the twin-arginine translocation (Tat) pathway exports proteins in which folded state?",
    options: ["Completely unfolded, then refolds in the periplasm", "Already folded (pre-folded), with cofactors pre-assembled in the cytoplasm — the Tat translocase (TatABC in E. coli) translocates folded proteins across the membrane", "Partially folded with assistance from SecB chaperone", "Via autotransporter β-barrel assembly"],
    answer: 1,
    explanation: "Tat pathway: translocates fully folded proteins (often with cofactors already incorporated) across the inner membrane (bacteria) or thylakoid membrane (chloroplasts). Signal sequence contains twin-arginine motif (RRXFLK-like). TatBC recognize Tat signal → TatA oligomerizes to form translocon sized to the substrate protein. This contrasts with the Sec pathway (SecYEG translocon), which translocates unfolded proteins co-translationally or post-translationally. Tat substrates include many cofactor-containing enzymes (Fe-S clusters, Moco) that fold before translocation."
  },
  {
    id: 32,
    question: "The Nobel Prize in Chemistry 2020 was awarded for CRISPR-Cas9. Which scientists won this prize?",
    options: ["Feng Zhang and George Church", "Jennifer Doudna and Emmanuelle Charpentier", "Rodolphe Barrangou and Philippe Horvath", "Francisco Mojica and Jillian Banfield"],
    answer: 1,
    explanation: "2020 Nobel Prize in Chemistry: Jennifer A. Doudna (UC Berkeley) and Emmanuelle Charpentier (Max Planck Unit, Berlin) 'for the development of a method for genome editing.' Their 2012 Science paper demonstrated that Cas9 can be programmed with a synthetic sgRNA to cut specific dsDNA sequences. This work built on earlier foundational contributions by many (Francisco Mojica's CRISPR discovery, Charpentier's tracrRNA discovery, Zhang's application to human cells), but Doudna and Charpentier were recognized for the key mechanistic breakthrough."
  },
  {
    id: 33,
    question: "The 'guardian of the genome', p53, is activated by multiple stress signals. ATM activates p53 via which mechanism?",
    options: ["ATM directly binds p53 and stimulates its transcriptional activity", "ATM phosphorylates CHK2 (Thr68) → CHK2 phosphorylates p53 (Ser20, disrupting MDM2 binding) AND ATM phosphorylates p53 directly (Ser15) → p53 accumulates and activates target genes", "ATM ubiquitinates MDM2, targeting it for degradation, freeing p53", "ATM activates p19ARF which sequesters MDM2 in the nucleolus"],
    answer: 1,
    explanation: "ATM-CHK2-p53 pathway: ATM (activated by DSB-associated MRN complex and Ku80) phosphorylates: (1) CHK2 at Thr68 → CHK2 dimerizes/autophosphorylates → CHK2 phosphorylates p53 at Ser20 (disrupts MDM2-p53 interaction, stabilizing p53) and CDC25A/C (G1/S and G2/M checkpoint); (2) p53 directly at Ser15 (reduces MDM2 binding, increases p53-p300 interaction and transactivation potential). Stabilized, activated p53 tetramer transcribes CDKN1A (p21 → G1 arrest), GADD45A, BBC3/PUMA, BAX, MDM2 (feedback), TIGAR. ATR-CHK1 activated by ssDNA/replication stress → S-phase and G2/M checkpoint."
  },
  {
    id: 34,
    question: "Riboswitch mechanisms: how do riboswitches regulate gene expression in bacteria?",
    options: ["Riboswitches bind sigma factors to alter promoter recognition", "Riboswitches are structured RNA elements in 5' UTRs that directly bind small molecule metabolites (no protein required), changing the RNA secondary structure to regulate transcription termination or translation initiation", "Riboswitches are protein-RNA complexes regulating mRNA stability in eukaryotes", "Riboswitches function in trans to regulate multiple target mRNAs across the genome"],
    answer: 1,
    explanation: "Riboswitches: RNA aptamer domains in 5' UTRs of bacterial mRNAs that bind specific metabolites (vitamins: thiamine pyrophosphate/TPP, cobalamin B12/AdoCbl; amino acids: lysine, glycine, SAM; purines: adenine, guanine; fluoride; Mg2+). Ligand binding causes RNA conformational change → (1) Transcription: OFF — anti-terminator → terminator (Rho-independent terminator forms → ρ-independent transcription termination); ON — anti-terminator prevents terminator; (2) Translation: ligand sequesters SD sequence → no translation. Riboswitches represent regulatory RNA without protein — a remnant of the RNA world."
  },
  {
    id: 35,
    question: "Piggybac and Sleeping Beauty transposons used in gene therapy differ from viral vectors in that they:",
    options: ["Can package unlimited DNA size (>20 kb inserts)", "Are non-viral, use transposase enzyme for cut-and-paste integration, have preference for safe genomic loci, lower immunogenicity than viral vectors, and can be delivered as mRNA+DNA (transient transposase)", "Integrate exclusively into transcriptional start sites like retroviruses", "Are single-use vectors that cannot be re-administered"],
    answer: 1,
    explanation: "Transposon-based gene therapy: (1) Sleeping Beauty (SB): engineered Tc1/mariner transposon; integrates semi-randomly (mild preference for transcription units but less than retroviruses); SB100X is a hyperactive transposase; used in CAR T cell manufacturing (non-viral, scalable); (2) PiggyBac (PB): inserts at TTAA sites; hyperactive PBases; large cargo capacity (>100 kb); used for iPSC reprogramming and CAR T production. Advantages: lower cost, scalable manufacturing, lower insertional mutagenesis risk than γ-retroviruses, can be re-administered with transient transposase."
  },
  {
    id: 36,
    question: "Exosome biogenesis involves endosomal sorting into multivesicular bodies (MVBs). ESCRT complexes (0, I, II, III) are required for which step?",
    options: ["Fusion of exosomes with the plasma membrane for secretion", "Sorting ubiquitinated cargo into intraluminal vesicles (ILVs) within MVBs by recognizing ubiquitin on cargo, deforming the endosomal membrane, and driving ILV budding (inward budding)", "Clathrin-mediated endocytosis of external cargo at the plasma membrane", "Lysosomal fusion and degradation of MVB cargo"],
    answer: 1,
    explanation: "ESCRT pathway: ESCRT-0 (HRS-STAM) recognizes ubiquitinated cargo and recruits ESCRT-I → ESCRT-I recruits ESCRT-II → ESCRT-II recruits ESCRT-III (CHMP proteins forming filamentous polymer) → ESCRT-III drives membrane deformation and ILV budding (by pulling ESCRT-III inward in a 'wrist watch' model). VPS4 (AAA-ATPase) disassembles ESCRT-III. MVBs can fuse with lysosomes (cargo degradation) or plasma membrane (exosome secretion). Ceramide- and tetraspanin-dependent ESCRT-independent pathways also generate ILVs."
  },
  {
    id: 37,
    question: "The mTORC1 complex senses multiple signals to regulate anabolism. Which protein acts as a GEF for RHEB (the immediate mTORC1 activator)?",
    options: ["TSC2/tuberin is a GAP for RHEB (not GEF) — its loss activates RHEB; there is no known physiological GEF for RHEB", "TSC1/hamartin — TSC1 activates RHEB directly", "AKT — directly phosphorylates RHEB-GDP", "S6K1 — feeds back to activate RHEB"],
    answer: 0,
    explanation: "RHEB (Ras homolog enriched in brain) is the GTP-binding activator of mTORC1 (lysosomal membrane). TSC1-TSC2 (tuberous sclerosis complex) is a GAP for RHEB — TSC2/tuberin catalyzes GTP hydrolysis, keeping RHEB-GDP (inactive). No physiological GEF for RHEB has been identified — RHEB remains GTP-bound when TSC2 GAP is inhibited. AKT phosphorylates TSC2 → inhibiting TSC2 GAP activity → RHEB-GTP accumulates → activates mTORC1. Growth factors→PI3K→AKT→TSC2 inhibition→RHEB-GTP→mTORC1 active. AMPK activates TSC2 GAP activity (indirectly inhibiting mTORC1). TSC1/TSC2 mutations cause tuberous sclerosis (hamartomas)."
  },
  {
    id: 38,
    question: "Recombinant protein expression in E. coli commonly uses which promoter system for inducible, high-level protein production?",
    options: ["CMV promoter (cytomegalovirus — for mammalian expression only)", "T7 promoter system: T7 RNA Pol (from phage T7) expressed under lac promoter (induced by IPTG) → T7 Pol transcribes gene of interest behind T7 promoter at very high rate (5-10x faster than E. coli RNAP)", "Sp6 promoter for in vitro transcription only", "Constitutive trc promoter without inducibility"],
    answer: 1,
    explanation: "pET vector system (Novagen): most widely used E. coli expression system. Gene of interest behind T7ϕ10 promoter; host strain (BL21(DE3)) carries T7 RNA Pol gene under lacUV5 promoter in chromosome. IPTG induces lacUV5 → T7 RNAP made → T7 RNAP transcribes pET insert with high efficiency. Typical yield: >50% total cell protein. Modifications: pET vectors with 6xHis, MBP, SUMO, or GST N-terminal tags; BL21(DE3)/pLysS for tighter control (T7 lysozyme inhibits basal T7 RNAP); Rosetta strains for rare codon usage; Arctic Express for cold induction of soluble proteins."
  },
  {
    id: 39,
    question: "Methylation QTLs (meQTLs) in human genetics refers to:",
    options: ["Mutations in DNMT genes causing aberrant DNA methylation", "Genetic variants (SNPs) that influence DNA methylation levels at nearby (cis) or distant (trans) CpG sites", "Methylation changes causing quantitative trait loci (QTL) to shift", "Methods to map histone methylation across the genome"],
    answer: 1,
    explanation: "meQTLs: genetic variants associated with DNA methylation levels at CpG sites (measured by WGBS or 450K/EPIC array). Cis-meQTLs: SNP within ~1 Mb affecting nearby CpG methylation. Trans-meQTLs: SNP affecting distant CpG methylation (often mediated by TF binding changes). meQTLs provide a mechanistic link between GWAS variants and gene regulation: a GWAS SNP may be a meQTL affecting promoter CpG methylation, changing gene expression → disease risk. Key datasets: BLUEPRINT epigenome, GTEx v9, EWAS catalog. Used for causal inference (MR with methylation as mediator)."
  },
  {
    id: 40,
    question: "The CRISPR-Cas system was adapted from which discovery about bacterial immunity?",
    options: ["Bacteria developing restriction enzymes against phage DNA", "Repeating palindromic sequences in bacteria (first noted in E. coli 1987 by Nakata, described in multiple bacteria by Mojica) were found to contain spacers matching phage sequences — representing adaptive immunity memory", "Bacteria using RNAi-like mechanisms for gene silencing", "Bacteria producing small RNA decoys to sequester phage RNA"],
    answer: 1,
    explanation: "CRISPR history: (1) 1987 — Nakata (Osaka) first observed unusual repeat sequences in E. coli iap gene by accident; (2) 2000 — Mojica (Alicante) systematically characterized CRISPRs in many organisms; (3) 2005 — Mojica, Bolotin, Pourcel noticed spacers match phage sequences (suggesting adaptive immunity); (4) 2007 — Barrangou/Horvath (Danisco) demonstrated CRISPR is an adaptive immune system in Streptococcus thermophilus — acquiring spacers from phage conferred resistance; (5) 2012 — Charpentier/Doudna demonstrated in vitro Cas9 programmability; (6) 2013 — Zhang/Church/Doudna demonstrated genome editing in human cells."
  },
  {
    id: 41,
    question: "Which key experiment demonstrated that DNA, not protein, is the genetic material?",
    options: ["Watson & Crick's X-ray crystallography of DNA (1953)", "Hershey & Chase blender experiment (1952) — 32P-labeled DNA entered bacteria during phage infection; 35S-labeled protein stayed outside — proving DNA carries genetic information", "Griffith's transformation experiment (1928) showing virulent S strain transforming R strain", "Avery, MacLeod, and McCarty's (1944) identification of the 'transforming principle' as DNA by DNase sensitivity"],
    answer: 1,
    explanation: "Hershey & Chase (1952): T2 bacteriophage labeled with 32P (DNA) or 35S (protein) → infect E. coli → blender agitation (shears phage from bacteria) → centrifuge. 32P found in pellet (bacteria); 35S in supernatant. This showed DNA (not protein) enters the host cell and carries the genetic information. However, historically: (1) Griffith (1928): S→R transformation (evidence for 'transforming principle'); (2) Avery, MacLeod, McCarty (1944): identified transforming principle as DNA using DNase (destroyed activity), RNase and protease (did not destroy activity) — strongest biochemical evidence."
  },
  {
    id: 42,
    question: "Chaperone-mediated autophagy (CMA) is a selective autophagy pathway that:",
    options: ["Uses the UPS to degrade misfolded cytoplasmic proteins via the 26S proteasome", "Selectively degrades proteins bearing a KFERQ-like pentapeptide motif via HSC70-mediated direct translocation through LAMP2A pore into the lysosome", "Delivers ubiquitinated cargo to autophagosomes via p62/SQSTM1 cargo receptor", "Removes damaged mitochondria (mitophagy) via Parkin-PINK1 pathway"],
    answer: 1,
    explanation: "CMA (chaperone-mediated autophagy): HSC70 (heat shock cognate 70) recognizes cytoplasmic proteins with a KFERQ-like pentapeptide motif (biochemically similar to KFERQ: hydrophobic+basic/acidic+hydrophobic) → HSC70 chaperones substrate to lysosomal membrane → binds LAMP2A (lysosome-associated membrane protein 2A) → LAMP2A multimerizes forming a translocation pore → substrate unfolded and translocated into lysosome lumen → degraded by lysosomal proteases. Highly selective; activates under oxidative stress and prolonged starvation. Dysregulated in Parkinson's disease (α-synuclein impairs LAMP2A)."
  },
  {
    id: 43,
    question: "The polycomb repressive complex 1 (PRC1) catalyzes which histone modification?",
    options: ["H3K27me3 trimethylation (that is PRC2/EZH2)", "H2AK119 monoubiquitination (H2AK119ub1) via RING1A/RING1B ubiquitin E3 ligase", "H3K9me3 trimethylation (that is G9a/SUV39H1)", "H4K20me3 trimethylation (that is SUV4-20H1/H2)"],
    answer: 1,
    explanation: "PRC1 (Polycomb Repressive Complex 1): canonical PRC1 contains: CBX proteins (recognize H3K27me3 via chromodomain, deposited by PRC2), RING1A or RING1B (ubiquitin E3 ligase catalytic subunit), BMI1/PCGF4, PHC proteins, and SCMH/RYBP. RING1B catalyzes H2AK119ub1 — monoubiquitination of histone H2A at lysine 119. H2AK119ub1 is associated with transcriptional repression, compacts chromatin, and inhibits RNA Pol II pause release. Non-canonical PRC1 variants (RING1B with RYBP instead of CBX) can be recruited independently of H3K27me3 and also catalyze H2AK119ub1."
  },
  {
    id: 44,
    question: "Long non-coding RNAs (lncRNAs) regulate gene expression through which mechanisms?",
    options: ["lncRNAs encode small proteins (micropeptides) exclusively", "Multiple mechanisms: nuclear scaffold/decoy lncRNAs (HOTAIR recruits PRC2 to silence HOX genes in trans; XIST coats Xi chromosome for X-inactivation), cytoplasmic ceRNA (sponging miRNAs), and enhancer RNA function", "lncRNAs are primarily nuclear and only regulate chromatin compaction", "lncRNAs function exclusively as translation repressors by binding 5'UTRs"],
    answer: 1,
    explanation: "lncRNA mechanisms: (1) Nuclear chromatin regulation — HOTAIR (trans-acting, recruits PRC2+LSD1 to silence posterior HOX genes), XIST (coats Xi, recruits SHARP/HDAC3, PRC1/2 for X-inactivation), ANRIL (cis-regulates CDKN2A/B locus); (2) Nuclear phase-separation scaffold — NEAT1 in paraspeckles, TERRA in telomere architecture; (3) Cytoplasmic ceRNA — HULC, PTEN-P1 sponge miRNAs; (4) Enhancer RNA (eRNA) — produced from active enhancers, stabilize Mediator/cohesin loops; (5) Chromatin looping facilitation (HOTTIP, DIGIT). Most lncRNAs are nucleus-enriched and lowly expressed."
  },
  {
    id: 45,
    question: "Which molecular biology technique is used to study protein-DNA interactions in vivo at genome-wide scale in a single experiment, for proteins without available ChIP-grade antibodies?",
    options: ["EMSA (electrophoretic mobility shift assay) — in vitro only", "DAMiD (DNA adenine methyltransferase identification): fusion of Dam methylase to protein of interest marks nearby DNA with m6A → methylation-sensitive restriction enzymes or sequencing identifies binding sites in vivo", "DNase I footprinting — in vitro only", "Y1H (yeast one-hybrid) — only for TF-promoter interactions in yeast"],
    answer: 1,
    explanation: "DamID: protein of interest fused to E. coli Dam methylase (N6-methyladenine: dam-methylase writes GATC methylation). When the fusion protein binds chromatin, Dam methylates nearby GATC sites. After DNA extraction → DpnII (cuts unmethylated GATC) or DpnI (cuts methylated GATC) digestion → methylated fragments isolated → sequencing. Advantages: works for nuclear lamina (Lamin B1-DamID defines LADs — lamina-associated domains), TFs without antibodies, and in vivo without formaldehyde. TurboID proximity labeling is the protein analog. CUT&RUN/ChIP work for TFs with good antibodies."
  },
  {
    id: 46,
    question: "The STING (Stimulator of Interferon Genes) pathway is activated by which second messenger?",
    options: ["cAMP produced by adenylyl cyclase", "2'3'-cGAMP (cyclic GMP-AMP) produced by cGAS upon dsDNA sensing", "IP3 from PLC-mediated PIP2 hydrolysis", "Ceramide from sphingomyelin hydrolysis"],
    answer: 1,
    explanation: "cGAS-STING pathway: cGAS (cyclic GMP-AMP synthase) is a cytosolic DNA sensor. Upon binding dsDNA (viral, bacterial, self-DNA from micronuclei, damaged mitochondria, or retroelements), cGAS undergoes conformational change and catalyzes synthesis of 2'3'-cGAMP (a non-canonical cyclic dinucleotide with 2'-5' and 3'-5' phosphodiester bonds). 2'3'-cGAMP (metazoan second messenger) binds STING at high affinity (Kd ~3-4 nM) causing STING dimerization → ER-to-Golgi translocation → TBK1 recruitment → IRF3 phosphorylation → IFN-β; also activates NF-κB. STING agonists (DMXAA, diABZI) are being developed as cancer immunotherapy adjuvants."
  },
  {
    id: 47,
    question: "In the context of translational control, which kinase directly phosphorylates eIF2α to globally attenuate cap-dependent translation during ER stress?",
    options: ["mTORC1 (inhibiting 4E-BP1)", "PERK (PKR-like ER kinase, HRI, GCN2, PKR — all eIF2α kinases; PERK specifically activated by ER stress/unfolded protein response)", "CDK1 (cell division kinase 1)", "CK2 (casein kinase 2)"],
    answer: 1,
    explanation: "The Integrated Stress Response (ISR): four kinases phosphorylate eIF2α at Ser51: (1) HRI (heme-regulated inhibitor, EIF2AK1) — iron/heme deficiency, osmotic stress, heavy metals; (2) PKR (protein kinase R, EIF2AK2) — dsRNA/viral infection; (3) GCN2 (EIF2AK4) — amino acid deprivation (uncharged tRNAs); (4) PERK (EIF2AK3) — ER stress (unfolded proteins). Phospho-eIF2α prevents eIF2B-mediated GDP-GTP exchange on eIF2, blocking ternary complex formation → global translation attenuation. But ATF4 mRNA has uORFs that make it preferentially translated under these conditions → ISR gene expression."
  },
  {
    id: 48,
    question: "Bispecific antibodies that redirect immune effector cells differ in which key aspect from checkpoint inhibitors?",
    options: ["Bispecific antibodies only activate NK cells, not T cells", "Checkpoint inhibitors reinvigorate existing tumor-specific T cells in the patient; bispecific antibodies (like BiTE, DART) directly bridge effector cells (T cells or NK cells) to tumor cells, creating an artificial synapse that is independent of TCR specificity and MHC-antigen presentation", "Bispecific antibodies require prior tumor vaccination for efficacy", "Checkpoint inhibitors work intracellularly while bispecifics work extracellularly only"],
    answer: 1,
    explanation: "Mechanism distinction: (1) Checkpoint inhibitors (anti-PD-1, anti-CTLA-4) remove inhibitory signals from pre-existing tumor-reactive T cells, allowing them to expand and kill. Requires endogenous tumor-specific T cells; (2) T cell-engaging bispecific antibodies (BiTE: blinatumomab CD19×CD3; DART platform; ImmTAC: TCR×CD3 for peptide-MHC) directly redirect any T cell (regardless of TCR specificity) to kill antigen-expressing tumor cells by forming an artificial cytolytic synapse, bypassing TCR-MHC specificity requirement entirely. Different side effect profiles and indications."
  },
  {
    id: 49,
    question: "The Watson-Crick base pairs (A-T and G-C) in DNA involve which types of hydrogen bonds?",
    options: ["A-T: 3 H-bonds; G-C: 2 H-bonds", "A-T: 2 H-bonds; G-C: 3 H-bonds", "A-T: 1 H-bond; G-C: 2 H-bonds", "A-T: 2 H-bonds; G-C: 2 H-bonds (same)"],
    answer: 1,
    explanation: "Watson-Crick base pairing: A-T: 2 hydrogen bonds (N1 of A to N3 of T; 6-amino of A to 4-carbonyl of T). G-C: 3 hydrogen bonds (1-imino of G to 3-imino of C; 6-carbonyl of G to 4-amino of C; 2-amino of G to 2-carbonyl of C). G-C pairs are stronger → higher GC content = higher melting temperature (Tm). RNA A-U pairs: 2 H-bonds. G-wobble-U: 2 H-bonds (non-Watson-Crick). Hoogsteen base pairs (syn conformation) occur in triplexes and unusual DNA/RNA structures. G-quadruplex: Hoogsteen hydrogen bonding between 4 guanines in a planar G-quartet."
  },
  {
    id: 50,
    question: "The molecular mechanism of CRISPR-Cas9 'base editing' and 'prime editing' represent an advance over nuclease-based editing in clinical applications because:",
    options: ["They provide higher editing efficiency than CRISPR-Cas9 in all cell types", "They enable precise sequence correction without creating double-strand breaks, avoiding the NHEJ-mediated indels that are the predominant repair outcome of CRISPR-Cas9 in non-dividing cells (neurons, hepatocytes, cardiomyocytes) — important as most cells in the human body are post-mitotic and thus largely rely on NHEJ (error-prone) rather than HDR (precise)", "They require no guide RNA, making delivery simpler", "They can correct all types of mutations including large chromosomal inversions"],
    answer: 1,
    explanation: "DSB-free precision editing rationale: CRISPR-Cas9 creates DSBs that are predominantly repaired by NHEJ (creating indels) in most cell types — indels are useful for gene disruption but not for correcting pathogenic point mutations (requires HDR, which is inefficient in post-mitotic cells). Base editors (CBE: C→T; ABE: A→G) and prime editors (any point mutation + small indels) use nCas9 or dCas9 — no DSBs → no NHEJ-mediated indels → higher precision. Critical for therapeutic correction of single-base mutations (sickle cell Hbs E6V for ABE; Huntington's CAG expansion correction for prime editing; α1-antitrypsin deficiency E342K for ABE)."
  }
];
