const questions = [
  // ===== CELL BIOLOGY & CELL CYCLE (Q1–Q15) =====
  {
    id: 1,
    question: "The cell cycle checkpoint at the G1/S boundary is primarily controlled by:",
    options: ["Cyclin B – CDK1 complex", "Cyclin D – CDK4/6 complex (and cyclin E – CDK2) phosphorylating Rb", "Cyclin A – CDK2 complex", "p21 activation by CDK4"],
    answer: 1,
    explanation: "The G1/S restriction point is governed by: Cyclin D–CDK4/6 phosphorylating Rb (first wave), releasing E2F, activating cyclin E transcription → Cyclin E–CDK2 hyperphosphorylates Rb (second wave), fully activating E2F targets for S-phase entry. CDK inhibitors (p16, p21, p27) block this transition. This checkpoint integrates mitogenic signals before committing to DNA replication."
  },
  {
    id: 2,
    question: "The mitotic spindle checkpoint (spindle assembly checkpoint, SAC) ensures:",
    options: ["DNA replication is complete before S phase ends", "All kinetochores are properly attached to spindle microtubules before anaphase begins", "Cytokinesis is coordinated with chromosome segregation", "DNA damage is repaired before M phase entry"],
    answer: 1,
    explanation: "The SAC prevents premature anaphase onset. Unattached kinetochores produce a 'wait anaphase' signal (MCC — mitotic checkpoint complex containing Mad2, BubR1, Bub3, Cdc20). MCC sequesters and inhibits APC/C-Cdc20, preventing securin and cyclin B degradation. Once all kinetochores achieve amphitelic attachment, MCC disassembly activates APC/C-Cdc20, triggering anaphase."
  },
  {
    id: 3,
    question: "Sister chromatid cohesion is mediated by which protein complex?",
    options: ["Condensin", "Cohesin (SMC1, SMC3, RAD21, SA)", "Kinesin-5", "Aurora B kinase"],
    answer: 1,
    explanation: "Cohesin (SMC1-SMC3-RAD21-SA1/SA2) topologically entraps sister chromatids within its ring structure, holding them together from S phase until anaphase. At anaphase onset, APC/C-Cdc20 activates separase by degrading securin. Separase cleaves the cohesin subunit RAD21, releasing sister chromatids and allowing them to segregate to opposite poles."
  },
  {
    id: 4,
    question: "The process of autophagy involves:",
    options: ["Proteasomal degradation of ubiquitinated proteins", "Sequestration of cellular components in double-membrane autophagosomes, followed by lysosomal degradation", "Mitochondria-dependent apoptosis", "Selective mRNA degradation by nonsense-mediated decay"],
    answer: 1,
    explanation: "Autophagy (self-eating) sequesters cytoplasmic material (organelles, protein aggregates, pathogens) in double-membrane autophagosomes, which fuse with lysosomes for degradation and recycling. Autophagy is induced by starvation, stress, and is regulated by mTOR (inhibits autophagy) and AMPK (activates autophagy). Key machinery: ULK1, beclin-1, ATG proteins. Selective autophagy: mitophagy (mitochondria), xenophagy (bacteria)."
  },
  {
    id: 5,
    question: "Contact inhibition of proliferation in normal cells occurs because:",
    options: ["Cells cannot uptake nutrients once crowded", "Cell-cell contact activates inhibitory signals (e.g., Hippo pathway, cadherin signaling) that downregulate proliferative transcription factors (YAP/TAZ)", "Cells physically cannot divide when touching", "Growth factors are diluted in crowded conditions"],
    answer: 1,
    explanation: "Contact inhibition: when normal epithelial cells reach confluence, cell-cell contact activates inhibitory pathways. The Hippo pathway (LATS1/2 kinases activated by Merlin/NF2 at cell junctions) phosphorylates and inactivates YAP/TAZ (transcriptional co-activators of proliferative genes). Cancer cells lose contact inhibition due to Hippo pathway mutations or YAP amplification."
  },
  {
    id: 6,
    question: "Centrosomes duplicate during which phase of the cell cycle?",
    options: ["G1 phase", "S phase (concurrent with DNA replication)", "G2 phase", "Mitosis (M phase)"],
    answer: 1,
    explanation: "Centrosome duplication occurs during S phase (semi-conservative, like DNA replication). Each cell has one centrosome (2 centrioles) in G1. During S phase, each centriole serves as a template for pro-centriole assembly. By G2, two centrosomes exist, which separate to form the bipolar mitotic spindle in mitosis. Centrosome amplification (more than 2) is common in cancer and causes chromosomal instability."
  },
  {
    id: 7,
    question: "Karyokinesis and cytokinesis refer to:",
    options: ["Nuclear and cytoplasmic division, respectively", "Chromosome condensation and decondensation", "Cell migration and adhesion", "DNA replication and transcription"],
    answer: 0,
    explanation: "Karyokinesis: division of the nucleus (mitosis — prophase, metaphase, anaphase, telophase). Cytokinesis: division of the cytoplasm to produce two daughter cells, beginning in late anaphase/telophase via the contractile ring (actin-myosin II) forming the cleavage furrow in animal cells, or cell plate formation (Golgi-derived vesicles) in plant cells."
  },
  {
    id: 8,
    question: "The nuclear pore complex (NPC) regulates:",
    options: ["DNA replication within the nucleus", "Bidirectional transport of macromolecules (proteins, RNA) between nucleus and cytoplasm", "Chromosome condensation during mitosis", "mRNA splicing in the nucleus"],
    answer: 1,
    explanation: "NPCs (~120 MDa, ~1000 per nucleus) are embedded in the nuclear envelope and mediate: passive diffusion of small molecules (<40 kDa), active import of proteins bearing nuclear localization signals (NLS) via importins, active export of mRNA (capped, polyadenylated, spliced), and tRNA, ribosomal subunits, and snRNPs. RanGTP/GDP gradient drives directionality."
  },
  {
    id: 9,
    question: "Telomere dysfunction leads to chromosomal instability through:",
    options: ["Increased DNA methylation at telomeres", "Activation of DNA damage responses, end-to-end chromosomal fusions (breakage-fusion-bridge cycles), leading to chromosomal rearrangements", "Silencing of nearby genes by position effect", "Prevention of DNA replication at chromosome ends only"],
    answer: 1,
    explanation: "Critically short or uncapped telomeres activate the ATM/ATR DNA damage response. Non-homologous end joining (NHEJ) can fuse chromosomal ends, creating dicentric chromosomes. During mitosis, dicentric chromosomes break as they are pulled to opposite poles (anaphase bridge breakage), generating new double-strand breaks. This breakage-fusion-bridge (BFB) cycle drives complex chromosomal rearrangements in cancer."
  },
  {
    id: 10,
    question: "The endoplasmic reticulum (ER) stress response (UPR) is activated by:",
    options: ["Excess ribosomes in the cytoplasm", "Accumulation of unfolded proteins in the ER lumen, sensed by IRE1, PERK, and ATF6", "DNA damage in the nucleus", "Mitochondrial membrane permeabilization"],
    answer: 1,
    explanation: "ER stress sensors (IRE1α, PERK, ATF6) are normally held inactive by the chaperone BiP/GRP78 bound to their luminal domains. When misfolded proteins accumulate, BiP is titrated away, activating the three sensors. IRE1α: splices XBP1 mRNA (encodes XBP1s, a transcription activator of UPR genes); PERK: phosphorylates eIF2α (attenuates translation); ATF6: cleaved in Golgi, activates ER chaperone genes."
  },
  {
    id: 11,
    question: "Reactive oxygen species (ROS) in cells can cause which type of DNA damage?",
    options: ["Thymine dimers", "8-oxoguanine (8-OxoG) and other oxidized bases, as well as single- and double-strand breaks", "Intrastrand crosslinks", "Large insertions/deletions"],
    answer: 1,
    explanation: "ROS (superoxide, hydrogen peroxide, hydroxyl radical) produced by mitochondria, NADPH oxidase, and exogenous sources oxidize guanine to 8-oxoguanine (8-OxoG), the most common oxidative DNA lesion. 8-OxoG mis-pairs with adenine, causing G→T transversions. 8-OxoG is repaired by base excision repair (BER) initiated by OGG1 glycosylase."
  },
  {
    id: 12,
    question: "Which type of cell death is immunologically silent (non-inflammatory)?",
    options: ["Necrosis", "Apoptosis", "Pyroptosis", "Ferroptosis"],
    answer: 1,
    explanation: "Apoptosis is immunologically silent (non-inflammatory) — apoptotic cells package their contents into apoptotic bodies that are rapidly phagocytosed by macrophages/neighboring cells (efferocytosis) before contents can be released, preventing inflammation. 'Find-me' signals (ATP, lysophosphatidylcholine) and 'eat-me' signals (phosphatidylserine on outer leaflet) facilitate clearance. In contrast, necrosis and pyroptosis are inflammatory."
  },
  {
    id: 13,
    question: "Ferroptosis is a form of regulated cell death driven by:",
    options: ["Caspase activation", "Iron-dependent lipid peroxidation — accumulation of lipid hydroperoxides due to GPX4 inactivation", "Gasdermin D pore formation", "RIPK3 activation"],
    answer: 1,
    explanation: "Ferroptosis requires iron (catalyzes lipid peroxidation via Fenton reaction) and involves GPX4 (glutathione peroxidase 4) inactivation. GPX4 normally reduces lipid hydroperoxides; its inhibition allows lethal accumulation of oxidized polyunsaturated fatty acids in membranes. System Xc- (cystine/glutamate antiporter) depletion depletes GSH, indirectly inactivating GPX4. Ferroptosis is relevant in cancer therapy and ischemia-reperfusion injury."
  },
  {
    id: 14,
    question: "Primary cilia are non-motile organelles that function primarily as:",
    options: ["Propulsion organelles like motile cilia in airways", "Cellular antennae that sense and transduce extracellular signals (SHH, Wnt, growth factors)", "Secretory organelles for hormone release", "Structural components of the mitotic spindle"],
    answer: 1,
    explanation: "Primary cilia (one per cell) are non-motile 9+0 microtubule structures (compared to 9+2 in motile cilia) that project from the cell surface. They concentrate signaling components and transduce hedgehog (SHH), PDGF, and other signals. Defects in primary cilia cause ciliopathies (Bardet-Biedl syndrome, polycystic kidney disease, Joubert syndrome). Smoothened (SHH pathway) localizes to cilia upon SHH stimulation."
  },
  {
    id: 15,
    question: "The G2/M checkpoint delays mitotic entry after DNA damage by:",
    options: ["Activating cyclin B–CDK1", "ATM/ATR → Chk1/Chk2 → CDC25C phosphatase degradation/sequestration, preventing CDK1 activation", "Inhibiting the spindle assembly checkpoint", "Activating APC/C-Cdh1"],
    answer: 1,
    explanation: "G2/M checkpoint: DNA damage activates ATM/ATR, which phosphorylate Chk2/Chk1 respectively. Chk1/Chk2 phosphorylate CDC25C (phosphatase that activates CDK1 by dephosphorylating Tyr15), targeting it for 14-3-3σ binding and nuclear export (or degradation). Without CDC25C activity, CDK1 remains inactive (phosphorylated on Thr14/Tyr15) and cells arrest in G2 for repair."
  },

  // ===== PROTEIN STRUCTURE & FUNCTION (Q16–Q28) =====
  {
    id: 16,
    question: "The four levels of protein structure are:",
    options: ["Amino acid → peptide → domain → protein", "Primary (AA sequence) → secondary (α-helix, β-sheet) → tertiary (3D fold) → quaternary (multi-subunit assembly)", "Nucleotide → codon → exon → gene", "Signal peptide → propeptide → mature protein → modified protein"],
    answer: 1,
    explanation: "Protein structure: Primary — amino acid sequence (peptide bonds). Secondary — local regular structures stabilized by hydrogen bonds (α-helix, β-sheet, β-turn). Tertiary — overall 3D fold of a single polypeptide (hydrophobic core, disulfide bonds, Van der Waals, electrostatic interactions). Quaternary — assembly of two or more polypeptide subunits (e.g., hemoglobin tetramer, antibody structure)."
  },
  {
    id: 17,
    question: "X-ray crystallography determines protein structure by:",
    options: ["NMR chemical shift analysis of protein in solution", "Diffracting X-rays through protein crystals and computing electron density maps from the diffraction pattern", "Imaging individual proteins with electron beam at cryogenic temperatures", "Measuring protein size by hydrodynamic radius"],
    answer: 1,
    explanation: "X-ray crystallography: protein crystals are exposed to X-rays, which diffract off repeating units. The diffraction pattern (intensities and phases) is used to calculate the electron density map. Fitting the amino acid sequence into the electron density map gives the atomic structure. X-ray crystallography has determined the majority of known protein structures (>150,000 in the PDB)."
  },
  {
    id: 18,
    question: "Cryo-electron microscopy (Cryo-EM) has become a major tool for structural biology because:",
    options: ["It requires protein crystallization like X-ray crystallography", "It can determine structures of large protein complexes, membrane proteins, and flexible molecules without crystallization, at near-atomic resolution", "It is faster and cheaper than all other methods", "It only works for proteins <100 kDa"],
    answer: 1,
    explanation: "Cryo-EM vitrifies proteins in thin ice layers and uses a transmission electron microscope to image single particles in multiple orientations. Computational averaging of thousands to millions of particle images yields high-resolution 3D structures without crystallization. Cryo-EM excels for large complexes (ribosomes, spliceosomes), membrane proteins, and dynamic/heterogeneous systems. The 2017 Nobel Prize in Chemistry was awarded for cryo-EM development."
  },
  {
    id: 19,
    question: "AlphaFold2 (DeepMind/Google) represents a breakthrough in:",
    options: ["De novo protein design (creating new proteins)", "Predicting protein 3D structure from amino acid sequence with near-experimental accuracy using deep learning", "Protein expression and purification", "Identifying disease-causing mutations by functional screening"],
    answer: 1,
    explanation: "AlphaFold2 (published 2021) uses deep learning (multiple sequence alignments + structural templates + attention-based neural networks) to predict protein 3D structure from sequence with accuracy comparable to X-ray crystallography (median TM-score >0.9). It has predicted structures for virtually all ~200 million known proteins (UniProt database), revolutionizing structural biology, drug discovery, and evolutionary analysis."
  },
  {
    id: 20,
    question: "Protein domains are defined as:",
    options: ["Individual α-helices within a protein", "Discrete, independently folding structural and functional units within a protein that can often fold and function independently", "Post-translational modification sites", "Signal sequences for subcellular targeting"],
    answer: 1,
    explanation: "Protein domains are compact, independently folding structural units with specific functions. Domains can be combined in different ways (domain shuffling) to create proteins with new functional combinations. Examples: SH2 domain (binds phosphotyrosine), kinase domain (phosphorylates substrates), DNA-binding domain (binds specific DNA sequences), PH domain (binds phosphoinositides)."
  },
  {
    id: 21,
    question: "Intrinsically disordered proteins (IDPs) lack a stable 3D structure under physiological conditions but are functionally important because:",
    options: ["They are non-functional degradation intermediates", "Their disorder allows binding to multiple partners (one-to-many or many-to-one), rapid post-translational modification, and phase separation into liquid droplets", "They are only found in viruses", "They always aggregate into amyloid fibrils"],
    answer: 1,
    explanation: "IDPs (also called intrinsically disordered regions, IDRs) lack fixed 3D structure but have critical functions: (1) binding promiscuity — can adopt different conformations when binding different partners (e.g., p53 C-terminal IDR binds >25 partners), (2) abundant post-translational modification sites, (3) hub roles in signaling networks, and (4) ability to phase separate into condensates (P bodies, stress granules, nuclear speckles)."
  },
  {
    id: 22,
    question: "Phase separation of proteins (liquid-liquid phase separation, LLPS) creates:",
    options: ["Crystalline aggregates of misfolded proteins", "Membraneless organelles (condensates) — dynamic liquid droplets that concentrate specific proteins and nucleic acids", "Solid amyloid fibrils", "ER membrane-enclosed compartments"],
    answer: 1,
    explanation: "LLPS occurs when intrinsically disordered proteins (often with low-complexity domains — poly-RG, poly-SY) concentrate above a saturation threshold, demixing from the solvent to form liquid droplets. These condensates (P bodies, stress granules, nuclear speckles, nucleoli, super-enhancers) concentrate specific molecules without a membrane. Phase separation is increasingly recognized as fundamental to gene regulation, signaling, and disease (ALS, FTD)."
  },
  {
    id: 23,
    question: "The proteasome degrades proteins that have been tagged with which molecular signal?",
    options: ["Phosphoserine residues", "K48-linked polyubiquitin chains", "Sumoylation", "N-terminal methionine cleavage"],
    answer: 1,
    explanation: "The 26S proteasome (20S catalytic core + 19S regulatory caps) recognizes and degrades proteins tagged with K48-linked polyubiquitin chains (≥4 ubiquitin units). The 19S cap deubiquitylates the substrate, unfolds it using AAA-ATPases, and threads it into the 20S barrel, where the β-subunits (chymotrypsin-like, trypsin-like, caspase-like activities) cleave it into short peptides. This is the major pathway for regulated intracellular proteolysis."
  },
  {
    id: 24,
    question: "Prions are infectious agents that propagate by:",
    options: ["Carrying a nucleic acid genome like viruses", "Converting normal cellular protein (PrPᶜ) into an abnormal misfolded conformation (PrPˢᶜ) that templates further misfolding", "Stimulating the host immune response to damage neurons", "Integrating into the host genome like retroviruses"],
    answer: 1,
    explanation: "Prions (Stanley Prusiner, Nobel 1997) are infectious proteins with no nucleic acid. The PrP gene encodes normal cellular PrPᶜ (α-helical). PrPˢᶜ (β-sheet-rich, protease-resistant) contacts and converts PrPᶜ to PrPˢᶜ, creating an autocatalytic chain reaction. PrPˢᶜ aggregates and causes spongiform degeneration. Prion diseases: CJD, variant CJD (BSE exposure), kuru, scrapie, fatal familial insomnia."
  },
  {
    id: 25,
    question: "The RING-finger domain in E3 ubiquitin ligases functions by:",
    options: ["Directly catalyzing ubiquitin attachment to substrates", "Acting as a scaffold that positions the E2-ubiquitin thioester to transfer ubiquitin to the substrate lysine", "Deubiquitylating substrates", "Binding K48-linked polyubiquitin chains"],
    answer: 1,
    explanation: "E3 ubiquitin ligases provide substrate specificity in the ubiquitin cascade. RING-type E3s (the largest family) do not directly catalyze the transfer; instead, the RING finger coordinates two zinc atoms, creating a platform that positions the E2~ubiquitin thioester optimally for direct transfer of ubiquitin from E2 to the substrate. HECT-type E3s form a catalytic intermediate with ubiquitin before transfer."
  },
  {
    id: 26,
    question: "Two-dimensional gel electrophoresis (2DE) separates proteins in two dimensions by:",
    options: ["Molecular weight in both dimensions", "Isoelectric point (pI) in the first dimension (IEF) and molecular weight in the second dimension (SDS-PAGE)", "Hydrophobicity in the first dimension and charge in the second", "Protein-protein interactions in native conditions"],
    answer: 1,
    explanation: "2DE combines two orthogonal separations: (1) isoelectric focusing (IEF) — proteins migrate in a pH gradient to their isoelectric point (net charge = 0); (2) SDS-PAGE — denatured proteins are separated by molecular weight. 2DE resolves thousands of proteins simultaneously. Spots are identified by mass spectrometry. It is a classic proteomics technique for comparing protein expression profiles between samples."
  },
  {
    id: 27,
    question: "Mass spectrometry (MS)-based proteomics identifies proteins by:",
    options: ["Their antibody-binding epitopes", "Measuring the mass-to-charge (m/z) ratio of peptides and comparing against protein databases to identify proteins", "Running proteins on a gel and staining with Coomassie", "Measuring absorbance at 280 nm"],
    answer: 1,
    explanation: "MS-based proteomics: proteins are digested by trypsin into peptides, which are ionized (ESI or MALDI) and analyzed by mass spectrometry. Tandem MS (MS/MS) fragments peptides, generating sequence-specific ion series (b and y ions). The mass spectra are searched against protein databases (Mascot, Sequest) for protein identification. Label-free or isotopic labeling (SILAC, TMT) enables quantitative proteomics."
  },
  {
    id: 28,
    question: "The term 'interactome' refers to:",
    options: ["The complete set of genetic interactions (epistasis) in an organism", "The complete set of protein-protein interactions within a cell or organism", "All chemical reactions occurring in a cell (metabolome)", "All transcription factor binding events in the genome"],
    answer: 1,
    explanation: "The interactome is the complete set of molecular interactions in a cell, typically referring to the protein-protein interaction (PPI) network. Mapping the interactome uses techniques like yeast two-hybrid (Y2H), affinity purification-mass spectrometry (AP-MS), and proximity labeling (BioID, TurboID). The human interactome is estimated to contain ~130,000–650,000 binary interactions."
  },

  // ===== GENE EDITING, SYNTHETIC BIOLOGY & BIOETHICS (Q29–Q50) =====
  {
    id: 29,
    question: "Synthetic biology aims to:",
    options: ["Sequence and annotate all genomes on Earth", "Design and construct new biological parts, devices, and systems or re-design existing natural biological systems for useful purposes", "Study natural evolution of microorganisms", "Develop CRISPR tools for gene editing exclusively"],
    answer: 1,
    explanation: "Synthetic biology applies engineering principles to biology: (1) standardizing biological parts (promoters, ribosome binding sites, terminators — BioBricks), (2) designing genetic circuits (toggle switches, oscillators, logic gates) analogous to electronic circuits, and (3) applications including biosensors, biofuels, vaccines (self-amplifying RNA), and bioproduction of artemisinin, insulin, and more."
  },
  {
    id: 30,
    question: "The first human whose germline was edited using CRISPR, generating worldwide ethical controversy, was performed by:",
    options: ["Jennifer Doudna's laboratory in California", "He Jiankui in China in 2018, who edited CCR5 in embryos to confer HIV resistance", "Emmanuelle Charpentier's laboratory in Germany", "ICMR researchers in India"],
    answer: 1,
    explanation: "In November 2018, He Jiankui (China) announced the birth of twin girls (Lulu and Nana) whose embryos had been CRISPR-edited at the CCR5 gene (hoping to confer HIV resistance). This was widely condemned by the scientific community for bypassing ethical oversight, lacking rigorous justification, and creating heritable changes without consent. He was later sentenced to 3 years in prison."
  },
  {
    id: 31,
    question: "Biosafety level 4 (BSL-4) laboratories are required for working with:",
    options: ["Non-pathogenic laboratory strains of E. coli", "Moderate-risk pathogens like Salmonella", "Lethal pathogens with no vaccine or treatment, such as Ebola, Marburg, and Lassa viruses", "Recombinant DNA work with antibiotic resistance genes"],
    answer: 2,
    explanation: "BSL-4 is the highest biosafety level, required for dangerous/exotic agents causing life-threatening disease with no vaccine or therapy (Ebola, Marburg, Nipah, Lassa, CCHF). Requirements: positive-pressure full-body suits or class III biosafety cabinets, airlocks, isolated ventilation, chemical decontamination showers. BSL-1 (non-hazardous), BSL-2 (moderate risk), BSL-3 (serious disease, aerosol risk)."
  },
  {
    id: 32,
    question: "Gain-of-function (GOF) research on pathogens is controversial because:",
    options: ["It is always illegal and banned globally", "It enhances pathogen properties (transmissibility, virulence) for scientific insight but carries dual-use risks (biosafety accidents, bioweapons potential)", "It reduces pathogen virulence only", "It is solely used for vaccine development with no risk"],
    answer: 1,
    explanation: "GOF research (e.g., creating transmissible H5N1 influenza, SARS-CoV-2 GOF studies) can generate scientific insight into pandemic risk and inform surveillance, but raises concerns about laboratory escapes causing pandemics and dual-use misuse. The 2011-12 H5N1 GOF controversy led to a US moratorium on certain GOF research. Oversight frameworks (HHS P3CO) review experiments likely to enhance pandemic pathogens."
  },
  {
    id: 33,
    question: "The Declaration of Helsinki provides ethical guidelines for:",
    options: ["Environmental protection in biological research", "Biomedical research involving human subjects — principles for research ethics, informed consent, IRB oversight", "Laboratory animal care standards", "Intellectual property rights in genetics"],
    answer: 1,
    explanation: "The Declaration of Helsinki (World Medical Association, 1964, regularly updated) is the foundational international ethical framework for medical research involving human subjects. Key principles: scientific merit and IRB approval, informed and voluntary consent, justice (equitable subject selection), minimization of risk, and post-trial access to beneficial interventions. It underlies all national research ethics regulations."
  },
  {
    id: 34,
    question: "Intellectual property protection for gene sequences or biological inventions is typically sought through:",
    options: ["Copyright", "Trade secret", "Patent protection — providing exclusive rights for ~20 years in exchange for public disclosure", "Trademark"],
    answer: 2,
    explanation: "Gene patents and biotech patents are protected through utility patents, providing ~20 years of exclusivity. The US Supreme Court (Association for Molecular Pathology v. Myriad Genetics, 2013) ruled that naturally occurring DNA sequences cannot be patented (as products of nature), but cDNA and synthetic sequences can. Gene patents are controversial regarding access to genetic testing and research."
  },
  {
    id: 35,
    question: "De-identification of genetic data is challenging because:",
    options: ["Genetic data has low information content", "The genetic sequence itself can be used to re-identify individuals — long-range kin searches using genealogy databases can identify anonymous samples", "Genetic data cannot be stored digitally", "Only mitochondrial DNA can re-identify individuals"],
    answer: 1,
    explanation: "Genetic data is inherently identifying — even 'anonymous' genomic data can be re-identified by: (1) comparing SNP profiles across databases, (2) long-range familial searches using consumer genomics databases (23andMe, AncestryDNA), (3) combining with metadata (age, location, phenotype). This creates privacy risks for research participants. Responsible data sharing (dbGaP, controlled access) balances utility and privacy."
  },
  {
    id: 36,
    question: "Gene drive technology uses CRISPR to:",
    options: ["Edit somatic cells to treat genetic diseases", "Propagate a genetic modification through a wild population faster than Mendelian inheritance would allow, potentially to suppress or modify species populations", "Create sterile insects for pest control without genetic modification of the population", "Prevent horizontal gene transfer in GMOs"],
    answer: 1,
    explanation: "Gene drives use CRISPR: the drive element encodes Cas9 and a guide RNA targeting the wild-type allele. When the drive organism mates with a wild-type individual, Cas9 cuts the wild-type allele and copies the drive element through homology-directed repair. This results in >50% inheritance, rapidly spreading the drive through the population. Proposed for: malaria control (Anopheles modification), invasive species eradication. Containment and reversibility are major concerns."
  },
  {
    id: 37,
    question: "The Nagoya Protocol on Access and Benefit Sharing (ABS) governs:",
    options: ["Biosafety standards for GMO release", "Access to genetic resources and fair sharing of benefits arising from their utilization, especially from biodiversity-rich developing countries", "International standards for clinical genetic testing", "Sharing of pathogen sequences in public databases"],
    answer: 1,
    explanation: "The Nagoya Protocol (2010, entered into force 2014), under the Convention on Biological Diversity (CBD), establishes rules for access to genetic resources (biodiversity) from countries of origin, and equitable sharing of benefits derived from their use (bioprospecting, drug development). It requires prior informed consent from the providing country and mutually agreed terms."
  },
  {
    id: 38,
    question: "Preimplantation genetic testing (PGT) involves:",
    options: ["Testing amniotic fluid at 15–20 weeks gestation", "Genetic analysis of biopsied cells from IVF-generated embryos before uterine transfer to select unaffected embryos", "Carrier testing of parents before conception", "Genetic testing of the mother's blood for fetal chromosomal anomalies"],
    answer: 1,
    explanation: "PGT (formerly PGD — preimplantation genetic diagnosis) involves: IVF, biopsy of 1–2 cells from the trophectoderm of blastocysts on day 5–6, genetic analysis, and selection/transfer of unaffected embryos. PGT-M (monogenic disease), PGT-A (aneuploidy screening), PGT-SR (structural rearrangement). PGT enables selection against serious Mendelian diseases or chromosomal abnormalities before pregnancy establishment."
  },
  {
    id: 39,
    question: "Whole genome sequencing (WGS) in newborn screening programs would allow:",
    options: ["Screening only for the standard 30 conditions detected by tandem MS", "Simultaneous screening for hundreds to thousands of genetic conditions from a single blood spot", "Diagnosis of acquired disorders in neonates", "Detection of congenital infections only"],
    answer: 1,
    explanation: "Applying WGS to newborn screening (NBS) pilot programs (e.g., BabySeq project, GUARDIAN study) could screen for hundreds of genetic conditions beyond the standard 30–60 conditions. Advantages: broader coverage, early diagnosis, facilitating treatment. Challenges: incidental findings (adult-onset diseases), variants of uncertain significance, consent complexities, and genomic privacy for children."
  },
  {
    id: 40,
    question: "Nutrigenomics studies:",
    options: ["The effect of nutrients on pathogen growth", "How genetic variation influences individual responses to nutrients, and how nutrients affect gene expression", "The nutritional composition of genetically modified foods", "Nutritional supplements for athletes based on blood type"],
    answer: 1,
    explanation: "Nutrigenomics studies: (1) nutrigenetics — how genetic polymorphisms affect individual responses to nutrients and dietary patterns (e.g., MTHFR variants affecting folate metabolism, LCT genotype determining lactose tolerance, APOE genotype affecting saturated fat response), and (2) how nutrients alter gene expression, epigenome, and metabolome. Aimed at personalized dietary recommendations."
  },
  {
    id: 41,
    question: "The ENCODE project found that approximately what fraction of the human genome has 'biochemical activity'?",
    options: ["~5%", "~10%", "~80%", "~100%"],
    answer: 2,
    explanation: "The ENCODE project (2012) reported that ~80% of the human genome shows at least one biochemical mark (RNA transcription, protein binding, chromatin modifications) in at least one cell type. This contrasted sharply with ~2% protein-coding sequence. However, this 80% figure is debated — many argue it reflects biochemical noise rather than function, and evolutionarily constrained sequence is ~8–15%."
  },
  {
    id: 42,
    question: "Forensic DNA profiling (DNA fingerprinting) typically analyzes:",
    options: ["Whole genome sequencing of crime scene samples", "Short tandem repeats (STRs) at 13–20+ loci to generate a unique genetic profile", "Single gene sequences for identity", "Mitochondrial DNA exclusively for all forensic cases"],
    answer: 1,
    explanation: "Forensic DNA profiling (developed by Alec Jeffreys, 1984) analyzes STRs (microsatellites: 2–7 bp repeat units) at standardized loci (CODIS 20 core STRs in the US). Allele sizes at each locus form a genotypic profile with very high discriminatory power. The probability of a random match is < 1 in a quintillion for full profiles. STR typing is performed by PCR and capillary electrophoresis."
  },
  {
    id: 43,
    question: "RNA-seq (RNA sequencing) measures:",
    options: ["The sequence of all DNA in a cell", "Gene expression levels by sequencing the transcriptome and counting reads mapping to each gene", "Protein abundance using mass spectrometry", "DNA methylation patterns"],
    answer: 1,
    explanation: "RNA-seq: total RNA or poly-A selected mRNA is converted to cDNA (random hexamer or oligo-dT primed), fragmented, ligated to adapters, and sequenced. Reads are aligned to the reference genome/transcriptome, and reads mapping to each gene are counted (count-based quantification). This provides: gene expression levels, alternative splicing, novel transcripts, allele-specific expression, and gene fusions."
  },
  {
    id: 44,
    question: "GWAS for pharmacogenomics can identify variants associated with:",
    options: ["Only rare Mendelian drug reactions", "Adverse drug reactions, drug metabolism, and efficacy across the genome in large patient cohorts", "New drug targets through Mendelian randomization only", "Drug resistance in bacteria"],
    answer: 1,
    explanation: "Pharmacogenomics GWAS (PharmGKB, CPIC consortium) identifies common genetic variants associated with: drug response (efficacy — e.g., clopidogrel and CYP2C19), adverse drug reactions (Stevens-Johnson syndrome and HLA-B*1502, warfarin sensitivity and CYP2C9/VKORC1 variants), and drug metabolism. CPIC guidelines translate pharmacogenomic evidence into clinical dosing recommendations."
  },
  {
    id: 45,
    question: "The Institutional Biosafety Committee (IBC) in India oversees:",
    options: ["Only animal experiments in research institutions", "Biosafety measures for recombinant DNA research, GMO work, and pathogen handling in research institutions, under RCGM (Review Committee on Genetic Manipulation)", "Patent filing for biotechnology inventions", "Ethics review of human clinical trials"],
    answer: 1,
    explanation: "In India, IBCs are mandated by the Rules for the Manufacture, Use, Import, Export and Storage of Hazardous Microorganisms/GMOs (Environment Protection Act, 1986). IBCs function under RCGM (DBTGOI) oversight to review and approve rDNA, GMO, and biosafety-level experiments at the institutional level. GEAC (Genetic Engineering Appraisal Committee) approves environmental release of GMOs."
  },
  {
    id: 46,
    question: "Digital PCR (dPCR) differs from quantitative PCR (qPCR) in that dPCR:",
    options: ["Uses gel electrophoresis for quantification", "Partitions the reaction into thousands of nanodroplets/wells, enables absolute quantification without a standard curve, and is more sensitive for rare variants (ctDNA, rare mutations)", "Requires reverse transcription for DNA quantification", "Can amplify RNA without cDNA conversion"],
    answer: 1,
    explanation: "dPCR (droplet digital PCR — ddPCR, or chip-based): the sample is partitioned into ~20,000 droplets, each containing 0 or 1 template molecules. After endpoint PCR, positive droplets (containing target) are counted (Poisson statistics), providing absolute copy number without standard curves. dPCR is more precise, less affected by inhibitors, and more sensitive for rare alleles (1 mutant in >10,000 normal copies) — ideal for ctDNA, copy number determination, and rare mutation detection."
  },
  {
    id: 47,
    question: "Which international database is the primary public repository for nucleotide sequences?",
    options: ["PDB (Protein Data Bank)", "GenBank/INSDC (International Nucleotide Sequence Database Collaboration: GenBank, EMBL-EBI ENA, DDBJ)", "UniProt", "KEGG"],
    answer: 1,
    explanation: "INSDC is a collaboration of three nucleotide sequence databases: NCBI GenBank (USA), EMBL-EBI ENA (Europe), and DDBJ (Japan). Data submitted to any one database is exchanged daily, so all three are equivalent. GenBank/INSDC is the primary repository for nucleotide sequences (DNA, RNA), genome assemblies, and sequence-associated metadata for all organisms."
  },
  {
    id: 48,
    question: "Oxford Nanopore Technology (ONT) sequences DNA by:",
    options: ["Sequencing by synthesis with reversible terminators", "Detecting changes in electrical current as single DNA molecules translocate through protein nanopores", "Sequencing from fluorescently labeled nucleotides incorporated during extension", "Hybridization to microarray probes"],
    answer: 1,
    explanation: "ONT nanopore sequencing: a single-stranded DNA molecule is translocated through a protein nanopore (MspA or CsgG derivatives) by a motor protein. Each base disrupts the ionic current through the pore differently, and the characteristic current signal is decoded (basecalling) to determine the sequence. Advantages: ultra-long reads (hundreds of kb), real-time sequencing, direct RNA sequencing, direct base modification detection. Disadvantages: higher raw error rates (~5–10% vs ~0.1% for Illumina)."
  },
  {
    id: 49,
    question: "The FAIR data principles in research data management stand for:",
    options: ["Fast, Accurate, Integrated, Reproducible", "Findable, Accessible, Interoperable, Reusable", "Free, Available, Indexed, Retrievable", "Formatted, Annotated, Indexed, Referenced"],
    answer: 1,
    explanation: "FAIR principles (Wilkinson et al., 2016) guide scientific data management for maximizing reuse: Findable (unique identifiers, rich metadata, indexed in searchable resource), Accessible (retrievable by identifier using open protocol, with authentication where needed), Interoperable (using community standards, formal languages, FAIR vocabularies), Reusable (clear usage license, detailed provenance, community standards). FAIR is essential for open science and reproducibility."
  },
  {
    id: 50,
    question: "ICMR's National Bioethics Committee in India is responsible for:",
    options: ["Regulating pharmaceutical company clinical trials only", "Developing ethical guidelines for biomedical and health research involving human participants in India, and providing guidance on emerging ethical issues", "Approving GMO crops for commercial cultivation", "Issuing biosafety permits for pathogen research"],
    answer: 1,
    explanation: "ICMR's National Bioethics Committee formulates ethical guidelines for biomedical research in India. Key documents: 'National Ethical Guidelines for Biomedical and Health Research Involving Human Participants' (2017, ICMR). It addresses: informed consent, research on vulnerable populations, stem cell research, genetics research, dual-use research, and emerging technologies. The Institutional Ethics Committees (IECs) at local institutions implement these guidelines."
  },
]

export default questions
