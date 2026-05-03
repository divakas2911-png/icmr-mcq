export const questions = [
  {
    id: 1,
    question: "B cell receptor (BCR) signaling is initiated by which tyrosine kinase?",
    options: ["LCK", "ZAP-70", "SYK", "BTK"],
    answer: 2,
    explanation: "BCR cross-linking recruits and activates SYK (spleen tyrosine kinase), which phosphorylates ITAMs in Igα/Igβ (CD79a/CD79b) — the signaling components of the BCR complex. SYK is analogous to ZAP-70 in T cells. Downstream: SYK phosphorylates BLNK (adaptor), which recruits BTK and PLCγ2 to activate Ca2+ signaling and NF-κB."
  },
  {
    id: 2,
    question: "Somatic hypermutation (SHM) of immunoglobulin variable regions occurs in which cellular structure?",
    options: ["Bone marrow primary follicle", "Germinal center (GC) of secondary lymphoid organs", "Thymic medulla", "Marginal zone of the spleen"],
    answer: 1,
    explanation: "SHM occurs in germinal centers (GCs) of secondary lymphoid organs (lymph nodes, spleen, Peyer's patches). Activated B cells proliferate rapidly in GCs, and AID (activation-induced cytidine deaminase) deaminates cytosines in VH/VL regions, introducing mutations. B cells with higher-affinity BCRs are positively selected by follicular dendritic cells presenting antigen (affinity maturation)."
  },
  {
    id: 3,
    question: "Activation-induced cytidine deaminase (AID) is required for both SHM and class switch recombination (CSR). In CSR, AID deaminates cytosines in:",
    options: ["V(D)J recombination signal sequences (RSS)", "Switch (S) regions upstream of constant gene segments, initiating double-strand breaks", "CDR3 complementarity-determining regions", "Promoters of activation-induced genes"],
    answer: 1,
    explanation: "During CSR, AID deaminates cytosines in repetitive switch (S) regions (intronic sequences upstream of CH genes like Sμ, Sγ, Sε, Sα). dU residues are processed to generate DSBs. NHEJ repairs breaks between two S regions (e.g., Sμ-Sγ1), deleting intervening DNA and changing the expressed heavy chain constant region (IgM→IgG/IgA/IgE)."
  },
  {
    id: 4,
    question: "V(D)J recombination is initiated by which enzyme complex that introduces double-strand breaks?",
    options: ["AID-UNG-APE1", "RAG1-RAG2 complex at recombination signal sequences (RSS)", "Ku70-Ku80-DNA-PKcs", "TdT-Artemis-XRCC4"],
    answer: 1,
    explanation: "RAG1-RAG2 (Recombination Activating Gene 1 and 2) complex recognizes and binds RSS (12/23 rule: RSS with 12 bp spacer pairs with RSS with 23 bp spacer). RAG1 has the catalytic activity; RAG2 is regulatory. RAGs introduce hairpin DSBs at the junction between coding segments and RSS. Hairpins are opened by Artemis (with DNA-PKcs), and NHEJ repairs the break."
  },
  {
    id: 5,
    question: "Which enzyme adds non-templated nucleotides (N-nucleotides) to V(D)J junctions, increasing CDR3 diversity?",
    options: ["AID (activation-induced cytidine deaminase)", "TdT (terminal deoxynucleotidyl transferase)", "DNA Pol β", "DNA Pol η"],
    answer: 1,
    explanation: "TdT (terminal deoxynucleotidyl transferase) is a template-independent DNA polymerase expressed in developing B and T lymphocytes. It adds random non-templated nucleotides (N-nucleotides) to the 3' ends of coding segments during V(D)J joining, dramatically expanding CDR3 junctional diversity (10^15 potential combinations). TdT is absent in fetal lymphocytes."
  },
  {
    id: 6,
    question: "CD4+ T helper cell subset Th17 produces which cytokines and is regulated by which transcription factor?",
    options: ["IFN-γ, regulated by T-bet", "IL-4, IL-5, IL-13, regulated by GATA3", "IL-17A, IL-17F, IL-22, regulated by RORγt (RORC)", "IL-10, TGF-β, regulated by FOXP3"],
    answer: 2,
    explanation: "Th17 cells produce IL-17A, IL-17F, IL-22, and IL-21. They are induced by TGF-β + IL-6 (in mice) or IL-1β + IL-6 + IL-23 (in humans) and require the master transcription factor RORγt (RORC2). Th17 cells protect against extracellular bacteria and fungi but contribute to autoimmune diseases (MS, rheumatoid arthritis, psoriasis)."
  },
  {
    id: 7,
    question: "Regulatory T cells (Tregs) suppress immune responses via which mechanism?",
    options: ["Production of IFN-γ to polarize effector T cells", "Expression of FOXP3 and production of IL-10, TGF-β, IL-35 and contact-dependent killing via CTLA-4 sequestering CD80/CD86", "Upregulation of MHC-II to outcompete APCs", "Secretion of granzyme B to kill activated B cells"],
    answer: 1,
    explanation: "nTregs express FOXP3 (master regulator, mutations cause IPEX syndrome). Treg suppression mechanisms: (1) cytokine-mediated (IL-10, TGF-β, IL-35), (2) metabolic disruption (cAMP transfer through gap junctions), (3) cytolysis (granzyme A/B, perforin), (4) CTLA-4 binds CD80/CD86 on APCs with higher affinity than CD28, depriving effector T cells of costimulation and inducing IDO in APCs."
  },
  {
    id: 8,
    question: "The major histocompatibility complex (MHC) class I pathway presents peptides derived from:",
    options: ["Extracellular proteins endocytosed by phagocytosis (exogenous pathway)", "Intracellular proteins degraded by the proteasome and transported to the ER by TAP (endogenous pathway)", "Glycolipids on CD1 molecules", "RNA intermediates in the cytoplasm"],
    answer: 1,
    explanation: "MHC class I (antigen presentation to CD8+ T cells): Intracellular proteins (self, viral, bacterial) are ubiquitinated and degraded by the 26S proteasome into peptides (8-10 aa). Peptides are transported into the ER by the TAP1/TAP2 transporter. In the ER, peptides are loaded onto MHC-I-β2m complexes (aided by tapasin, calreticulin, ERp57), which traffic to the cell surface."
  },
  {
    id: 9,
    question: "Cross-presentation allows dendritic cells to present exogenous antigens on MHC class I. The major pathway involves:",
    options: ["Direct translocation from endosomes to cytoplasm → proteasome → TAP → MHC-I", "Fusion of lysosome-derived peptides directly onto MHC-I in late endosomes", "MHC-II molecules switching to MHC-I conformation", "Transfer of MHC-I-peptide complexes from dying cells to DCs"],
    answer: 0,
    explanation: "In cross-presentation, exogenous antigens from endosomes/phagosomes are translocated to the cytosol (via Sec61 translocon or ERAD-like pathway), degraded by the proteasome, transported by TAP into the ER, and loaded onto MHC-I. Alternatively, TAP may be recruited to specialized early endosomes (vacuolar cross-presentation pathway without cytosolic routing). Critical for CTL responses against viruses and tumors."
  },
  {
    id: 10,
    question: "The invariant chain (Ii/CD74) plays which role in MHC class II antigen presentation?",
    options: ["Stabilizes MHC-I in the ER by acting as a chaperone", "Blocks MHC-II peptide groove in the ER, targets MHC-II to endosomes, and is cleaved leaving CLIP until HLA-DM facilitates peptide loading", "Mediates endosome-lysosome fusion for antigen degradation", "Activates CD4+ T cells by directly binding TCR"],
    answer: 1,
    explanation: "Invariant chain (Ii/CD74) performs three functions: (1) occupies MHC-II groove in ER with CLIP (class II-associated Ii chain peptide) preventing premature peptide loading, (2) promotes MHC-II trimerization and export from ER, (3) targets MHC-II to endosomal compartments (MIIC). In late endosomes, proteases cleave Ii leaving CLIP, and HLA-DM (non-classical MHC-II) catalyzes CLIP removal and exchange with antigenic peptide."
  },
  {
    id: 11,
    question: "Natural killer (NK) cell killing is governed by the balance between which types of receptors?",
    options: ["TCRα and TCRβ chains activating or inhibiting transcription", "Activating receptors (NKG2D, NCRs, DNAM-1) and inhibitory receptors (KIRs recognizing MHC-I, NKG2A-CD94)", "BCR signaling and Fcγ receptors", "TLRs and NLRs balancing inflammatory output"],
    answer: 1,
    explanation: "NK cells use 'missing-self' and 'induced-self' recognition. Inhibitory receptors (KIRs: KIR2DL1/2/3, KIR3DL1; NKG2A-CD94 recognizing HLA-E) detect normal MHC-I — preventing killing of self. Activating receptors (NKG2D detecting MICA/MICB/ULBPs, NKp46/NKp30/NKp44 NCRs, DNAM-1/CD226) detect stress ligands upregulated on infected/transformed cells. When activating > inhibitory signals, NK kills."
  },
  {
    id: 12,
    question: "Complement activation via the classical pathway is initiated by which molecule recognizing immune complexes?",
    options: ["MBL (mannose-binding lectin)", "C1q (part of C1 complex — C1q, C1r, C1s)", "Properdin (factor P) stabilizing C3bBb", "Factor D cleaving factor B"],
    answer: 1,
    explanation: "Classical pathway: C1q (subcomponent of C1 = C1q·C1r2·C1s2) recognizes Fc regions of IgM or clustered IgG in immune complexes. C1q binding activates C1r (autoactivation), which cleaves/activates C1s. C1s then cleaves C4 → C4b and C2 → C2a, forming C3 convertase C4b2a. MBL initiates the lectin pathway; C3bBb is the alternative pathway C3 convertase."
  },
  {
    id: 13,
    question: "The membrane attack complex (MAC) in complement is formed by:",
    options: ["C3b, Factor B, Factor D (alternative C3 convertase)", "C5b-6-7-8-9 (poly-C9) forming a transmembrane pore", "C1q-C1r-C1s (C1 complex)", "C4b2a3b (C5 convertase, classical pathway)"],
    answer: 1,
    explanation: "C5 convertase (C4b2a3b classical; C3bBbC3b alternative) cleaves C5→C5b+C5a. C5b initiates MAC: C5b binds C6→C5b6 binds C7→C5b67 inserts into membrane→C8 binds→multiple C9 molecules polymerize around C8, forming a transmembrane poly-C9 pore (~10 nm diameter) that causes osmotic lysis. C5a and C3a are anaphylatoxins that recruit and activate leukocytes."
  },
  {
    id: 14,
    question: "Toll-like receptor 4 (TLR4) recognizes which pathogen-associated molecular pattern (PAMP)?",
    options: ["Flagellin", "CpG DNA", "dsRNA (polyI:C)", "LPS (lipopolysaccharide) from Gram-negative bacteria"],
    answer: 3,
    explanation: "TLR4 (with co-receptors MD-2 and CD14) recognizes LPS (lipid A moiety) from Gram-negative bacterial outer membranes. TLR4 signals via two adaptors: MyD88 (via TIRAP) → NF-κB/MAPK → pro-inflammatory cytokines, and TRIF (via TRAM) → IRF3 → type I IFN. TLR4 is unique among TLRs in signaling through both MyD88 and TRIF."
  },
  {
    id: 15,
    question: "The NLRP3 inflammasome is activated by which signals and produces which cytokines?",
    options: ["TLR4-LPS, producing TNF and IL-6", "Various DAMPs/PAMPs (uric acid crystals, ATP, nigericin), producing IL-1β and IL-18 via caspase-1", "RIG-I-dsRNA, producing type I interferons", "BCR engagement, producing IL-10"],
    answer: 1,
    explanation: "NLRP3 inflammasome: NLRP3 senses diverse danger signals (ATP, uric acid crystals, silica, cholesterol crystals, K+ efflux, mitochondrial ROS, lysosomal rupture). Assembly: NLRP3 oligomerization → recruits ASC adaptor → recruits and activates caspase-1 (autocatalytic). Caspase-1 cleaves pro-IL-1β → mature IL-1β and pro-IL-18 → IL-18, and cleaves Gasdermin D → pyroptosis."
  },
  {
    id: 16,
    question: "Checkpoint inhibitor immunotherapy targets which coinhibitory pathways?",
    options: ["CD28-CD80/86 costimulatory pathway (agonistic antibodies)", "CTLA-4 (anti-CTLA-4: ipilimumab) and PD-1/PD-L1 (anti-PD-1: pembrolizumab, nivolumab; anti-PD-L1: atezolizumab)", "CD40-CD40L pathway to enhance APC activation", "IL-2 receptor signaling (IL-2-toxin conjugates)"],
    answer: 1,
    explanation: "Immune checkpoint inhibitors release T cell braking mechanisms. CTLA-4 (on Tregs and activated T cells) competes with CD28 for CD80/86 binding on APCs. PD-1 (on exhausted T cells) binds PD-L1 (on tumor cells, APCs) or PD-L2, inducing T cell exhaustion. Antibodies blocking CTLA-4 or PD-1/PD-L1 reinvigorate tumor-specific T cells, revolutionizing cancer immunotherapy."
  },
  {
    id: 17,
    question: "The germline configuration of the immunoglobulin heavy chain locus (5' to 3') in humans is:",
    options: ["V-J-C segments (no D segments)", "V-D-J-Cμ-Cδ-Cγ-Cε-Cα segments", "C-J-D-V segments (3' to 5' organization)", "V-J-Cκ/Cλ segments (for heavy chain)"],
    answer: 1,
    explanation: "The germline IGH locus on chromosome 14 (5'→3'): ~40 functional VH segments → ~25 DH segments → 6 JH segments → Cμ-Cδ-Cγ3-Cγ1-Cα1-Cγ2-Cγ4-Cε-Cα2 constant region segments. V(D)J recombination joins one each of V, D, J to form the expressed variable domain. Transcription reads into the constant region (initially Cμ for IgM, Cδ for IgD from same VDJ by alternative splicing)."
  },
  {
    id: 18,
    question: "MHC restriction means that T cells recognize antigen:",
    options: ["Only when presented as free peptide in solution", "In the context of self-MHC molecules on antigen-presenting cells", "Via Fc receptors on NK cells", "Via pattern recognition receptors like TLRs on innate cells"],
    answer: 1,
    explanation: "MHC restriction (Zinkernagel and Doherty, Nobel 1996): T cells recognize peptide-MHC complexes, not free antigens. CD8+ T cells recognize peptides in MHC class I (expressed on all nucleated cells). CD4+ T cells recognize peptides in MHC class II (on professional APCs: DCs, macrophages, B cells). T cells are educated during thymic selection to be self-MHC restricted."
  },
  {
    id: 19,
    question: "Thymic positive selection selects T cells that:",
    options: ["React strongly to self-antigen-MHC (deleted by negative selection)", "Can interact with self-MHC with at least moderate affinity (ensuring MHC restriction)", "Express both CD4 and CD8 (double positive survival)", "Cannot bind any MHC molecule (ensuring foreign-antigen specificity)"],
    answer: 1,
    explanation: "Positive selection in thymic cortex: double-positive (CD4+CD8+) thymocytes are tested by cortical thymic epithelial cells (cTECs) presenting self-peptide-MHC. Cells with TCRs that bind self-MHC with sufficient affinity survive (positive selection) and downregulate one co-receptor: MHC-I binders → CD8+ SP; MHC-II binders → CD4+ SP. Non-selected cells die by neglect. Too-strong interaction → negative selection (clonal deletion)."
  },
  {
    id: 20,
    question: "AIRE (autoimmune regulator) in thymic medullary epithelial cells prevents autoimmunity by:",
    options: ["Promoting expression of CD25 (IL-2Rα) on developing Tregs", "Driving ectopic expression of peripheral tissue antigens for negative selection of autoreactive T cells", "Preventing RAG-mediated T cell receptor rearrangements", "Activating FOXP3 transcription in developing Tregs"],
    answer: 1,
    explanation: "AIRE (expressed in medullary thymic epithelial cells, mTECs) drives ectopic expression of thousands of tissue-specific antigens (e.g., insulin, thyroglobulin, salivary antigens). This allows negative selection (clonal deletion) of autoreactive T cells in the thymus. AIRE mutations cause APS-1 (autoimmune polyendocrinopathy-candidiasis-ectodermal dystrophy, APECED) with multi-organ autoimmunity."
  },
  {
    id: 21,
    question: "The NOD-like receptor NLRP1 was the first inflammasome identified. Its activation in humans (vs mice) primarily requires:",
    options: ["K+ efflux and mitochondrial ROS", "Anthrax lethal factor (LF) protease activity or dipeptidyl peptidase inhibitors (Val-boroPro)", "LPS and ATP co-stimulation", "Muramyl dipeptide (MDP) recognition"],
    answer: 1,
    explanation: "Human NLRP1 is activated by direct proteolytic cleavage at its N-terminus — anthrax lethal factor (LF) cleaves human NLRP1, activating the inflammasome. Additionally, inhibitors of dipeptidyl peptidases (like DPP9/DPP8), including clinical drugs Val-boroPro, activate NLRP1 by blocking DPP9-mediated inhibition. NLRP1 undergoes functional degradation (N-terminal ubiquitination and degradation liberating active C-terminal CARD-CT fragment)."
  },
  {
    id: 22,
    question: "IgE-mediated type I hypersensitivity (allergy) is initiated by:",
    options: ["IgG immune complexes depositing in tissues (type III)", "IgE cross-linking on mast cells/basophils by allergen → degranulation releasing histamine, leukotrienes, prostaglandins", "IgG/IgM-mediated complement activation (type II)", "T cell-mediated delayed-type hypersensitivity (type IV)"],
    answer: 1,
    explanation: "Type I hypersensitivity: Sensitization — IL-4/IL-13 (Th2) drive IgE production; IgE binds FcεRI on mast cells/basophils. Challenge — allergen cross-links FcεRI-bound IgE, triggering degranulation (pre-formed granules: histamine, tryptase, heparin) and lipid mediator synthesis (PGD2, LTC4, PAF) and cytokine production (IL-4, IL-5, TNF). Anaphylaxis involves systemic mast cell/basophil activation."
  },
  {
    id: 23,
    question: "Which cytokine is the master regulator of Th2 differentiation?",
    options: ["IL-12", "IFN-γ", "IL-4 (signaling via STAT6 to activate GATA3)", "TGF-β"],
    answer: 2,
    explanation: "IL-4 (produced initially by NKT cells, basophils, mast cells, or pre-existing Th2 cells) signals through IL-4Rα/γc → JAK1/JAK3 → STAT6 phosphorylation. STAT6 activates GATA3 transcription factor, which is the master regulator of Th2 differentiation. GATA3 drives IL-4, IL-5, IL-13 production. Th1 master TF: T-bet (activated by IL-12→STAT4+IFN-γ→STAT1); Treg master TF: FOXP3."
  },
  {
    id: 24,
    question: "IL-6 and TNF are pro-inflammatory cytokines produced primarily by macrophages. Which cytokine is uniquely crucial for Th17 induction (in synergy with TGF-β)?",
    options: ["IL-12", "IL-6", "IFN-γ", "IL-10"],
    answer: 1,
    explanation: "TGF-β alone induces Foxp3+ Treg differentiation. TGF-β + IL-6 (in mice) or IL-1β + IL-6 + IL-23 (in humans) shift differentiation toward Th17. IL-6 signals via STAT3, which cooperates with RORγt to drive Th17 program while simultaneously inhibiting FOXP3/Treg differentiation. IL-23 (IL-12 family) stabilizes and maintains the Th17 phenotype."
  },
  {
    id: 25,
    question: "Chimeric Antigen Receptor (CAR) T cell therapy works by engineering T cells to:",
    options: ["Express T cell receptors specific for MHC-presented tumor peptides", "Express synthetic receptors (antigen-binding domain + CD3ζ + costimulatory domains) that recognize tumor surface antigens independent of MHC", "Secrete high levels of IFN-γ to activate NK cells around tumors", "Upregulate PD-1 to maintain memory T cell homeostasis"],
    answer: 1,
    explanation: "CAR T cells: patient T cells are engineered (lentivirus/retrovirus) to express a chimeric receptor combining: (1) extracellular scFv from a monoclonal antibody (targets tumor antigen like CD19, BCMA, HER2), (2) transmembrane domain, (3) intracellular CD3ζ (ITAM signaling) + costimulatory domain (CD28 or 4-1BB). This bypasses MHC restriction, enabling recognition of surface proteins without antigen processing."
  },
  {
    id: 26,
    question: "The Bruton's tyrosine kinase (BTK) inhibitor ibrutinib is used in B cell malignancies because BTK is essential for:",
    options: ["V(D)J recombination in pro-B cells", "BCR signaling and B cell survival/proliferation", "Class switch recombination in germinal centers", "Plasma cell differentiation and antibody secretion"],
    answer: 1,
    explanation: "BTK is a Tec family kinase activated downstream of SYK in BCR signaling. BTK phosphorylates PLCγ2 → IP3/DAG → Ca2+/PKC → NF-κB/NFAT, driving B cell activation and survival. BTK mutations cause X-linked agammaglobulinemia (XLA) — absence of mature B cells. Ibrutinib (irreversible BTK inhibitor, Cys481) is used in CLL, MCL, and other B cell malignancies. Acalabrutinib/zanubrutinib are more selective next-gen BTK inhibitors."
  },
  {
    id: 27,
    question: "Which process is responsible for generating antibody diversity before antigen exposure (antigen-independent)?",
    options: ["Somatic hypermutation", "Class switch recombination", "V(D)J recombination (combinatorial and junctional diversity)", "Affinity maturation in germinal centers"],
    answer: 2,
    explanation: "Pre-immune antibody diversity is generated by V(D)J recombination through: (1) Combinatorial diversity — multiple V, D, J segment combinations (~40VH × ~25DH × 6JH = ~6,000 heavy chain combinations); (2) Junctional diversity — imprecise joining (exonuclease trimming), P-nucleotides (hairpin opening), and N-nucleotides (TdT addition) at joints. This generates ~10^15 primary repertoire diversity before any antigen encounter."
  },
  {
    id: 28,
    question: "Innate lymphoid cells (ILCs) are lymphocytes that lack antigen-specific receptors. ILC3s produce which cytokines and serve which function?",
    options: ["IFN-γ (ILC1 equivalents protecting against intracellular pathogens)", "IL-5, IL-13, amphiregulin (ILC2 equivalents mediating allergic responses)", "IL-17, IL-22 (ILC3 equivalents protecting mucosal barriers against extracellular bacteria and fungi)", "TNF, IL-6 (inflammatory ILCs mediating sepsis)"],
    answer: 2,
    explanation: "ILC3s (equivalent to innate version of Th17): respond to IL-23, IL-1β from macrophages/DCs; produce IL-17, IL-22, GM-CSF; regulated by RORγt. IL-22 acts on epithelial cells to enhance barrier function, antimicrobial peptide production (defensins, RegIIIγ), and tissue repair. ILC3s also include lymphoid tissue inducer (LTi) cells crucial for secondary lymphoid organ development."
  },
  {
    id: 29,
    question: "The classical pathway of complement regulation involves which soluble inhibitor that cleaves C3b and C4b?",
    options: ["C1-inhibitor (C1-INH)", "Factor I (with cofactors H, MCP, CR1)", "CD59 (protectin) blocking MAC", "Properdin (Factor P)"],
    answer: 1,
    explanation: "Factor I is a serine protease that cleaves C3b (→iC3b) and C4b (→C4c+C4d) in the presence of cofactors: factor H (fluid phase C3b regulator), MCP (CD46, membrane-bound), CR1 (CD35), and C4BP. This inactivates amplification loop and MAC formation. Factor H deficiency → uncontrolled alternative pathway activation → atypical hemolytic uremic syndrome (aHUS). CD59 blocks poly-C9 polymerization."
  },
  {
    id: 30,
    question: "Which cells are the primary producers of IFN-α during systemic viral infection?",
    options: ["Conventional dendritic cells (cDC1/cDC2)", "Plasmacytoid dendritic cells (pDCs)", "NK cells", "Macrophages"],
    answer: 1,
    explanation: "Plasmacytoid dendritic cells (pDCs) are the major producers of type I IFN-α (up to 1000-fold more than other cells). pDCs sense viral nucleic acids via endosomal TLR7 (ssRNA) and TLR9 (CpG DNA) signaling through MyD88→IRAK4→TRAF6/TRAF3→IRF7→IFN-α. pDCs constitutively express high levels of IRF7, enabling rapid and massive IFN-α production."
  },
  {
    id: 31,
    question: "Secondary antibody response after re-exposure to antigen is characterized by:",
    options: ["Predominantly IgM production with no class switching", "Faster, higher-titer IgG/IgA/IgE production with higher affinity due to memory B cells and long-lived plasma cells", "Slower response requiring de novo B cell development from HSCs", "T-independent response not requiring CD4+ T cell help"],
    answer: 1,
    explanation: "Secondary (anamnestic) response features: shorter lag phase (days vs 1-2 weeks), higher antibody titer (10-100x), predominantly isotype-switched antibodies (IgG, IgA, IgE — higher affinity), and longer duration. This is due to memory B cells (rapidly proliferating and differentiating to plasma cells) and long-lived plasma cells in bone marrow niches. This is the molecular basis of protective vaccination."
  },
  {
    id: 32,
    question: "The JAK3 kinase is associated with which cytokine receptors and why is JAK3 inhibition useful as an immunosuppressant?",
    options: ["JAK3 associates with gp130 of IL-6 receptor family; inhibition treats cytokine storm", "JAK3 associates with γc (common gamma chain) of IL-2, IL-4, IL-7, IL-9, IL-15, IL-21 receptors; inhibition (tofacitinib) broadly suppresses lymphocyte function", "JAK3 associates with IFNAR1/2; inhibition blocks type I IFN signaling", "JAK3 associates with IFN-γR; inhibition blocks Th1 responses"],
    answer: 1,
    explanation: "JAK3 is exclusively associated with the common gamma chain (γc/CD132) shared by receptors for IL-2, IL-4, IL-7, IL-9, IL-15, and IL-21 — critical lymphocyte growth/differentiation cytokines. JAK3 inhibitors (tofacitinib, upadacitinib) broadly suppress T and B lymphocyte function. JAK3 mutations cause X-SCID (severe combined immunodeficiency), identical to γc mutations."
  },
  {
    id: 33,
    question: "Pyroptosis is an inflammatory form of programmed cell death mediated by:",
    options: ["Caspase-3/caspase-7 cleaving ICAD → DNA fragmentation", "Caspase-1 or caspase-4/5/11 cleaving Gasdermin D → pore formation and release of IL-1β/IL-18", "RIPK3-MLKL-mediated membrane disruption (necroptosis)", "BID-BAX-BAK cytochrome c release → apoptosome → caspase-9"],
    answer: 1,
    explanation: "Pyroptosis is initiated by inflammasome-activated caspase-1 (canonical: NLRP3, NLRC4, AIM2 inflammasomes) or directly activated caspase-4/5 (human)/caspase-11 (mouse) sensing cytosolic LPS (non-canonical). These caspases cleave Gasdermin D (GSDMD) at Asp276 (human), releasing the N-terminal domain that oligomerizes and forms large membrane pores (10-15 nm), causing osmotic lysis and release of IL-1β/IL-18 (also cleaved by caspase-1)."
  },
  {
    id: 34,
    question: "Rituximab, an anti-CD20 monoclonal antibody, depletes B cells through which mechanisms?",
    options: ["Directly blocking BCR signaling", "ADCC (antibody-dependent cellular cytotoxicity), CDC (complement-dependent cytotoxicity), and direct apoptosis induction", "Preventing B cell trafficking from bone marrow", "Inhibiting AID to block class switch recombination"],
    answer: 1,
    explanation: "Rituximab (chimeric anti-CD20 IgG1) depletes B cells via: (1) ADCC — Fc region recruits NK cells and macrophages expressing FcγRIII/CD16 that kill CD20+ B cells; (2) CDC — Fc activates complement classic pathway → MAC lysis; (3) Direct apoptosis induction via CD20 crosslinking. Used in NHL, CLL, rheumatoid arthritis, and other autoimmune diseases."
  },
  {
    id: 35,
    question: "The T cell immunological synapse (IS) forms between T cells and APCs. The central supramolecular activation cluster (cSMAC) contains:",
    options: ["LFA-1/ICAM-1 adhesion molecules", "TCR-MHC-peptide complexes, CD3, ZAP-70, PKCθ, and CD28-CD80/86 interactions", "Perforin and granzyme B secretory granules only", "Cytoskeletal proteins (actin, talin, vinculin)"],
    answer: 1,
    explanation: "The immunological synapse has concentric domains: cSMAC (center) — enriched for TCR/CD3 complexes, signaling molecules (ZAP-70, PKCθ, PLC-γ1), and CD28-CD80/86 costimulatory interactions; pSMAC (peripheral ring) — LFA-1/ICAM-1 adhesion molecules (with talin, vinculin); dSMAC (distal ring) — CD45 phosphatase, CD43. The IS concentrates and sustains TCR signaling and directs secretory vesicle targeting."
  },
  {
    id: 36,
    question: "Toll-like receptor signaling through the MyD88 adaptor activates which downstream transcription factors?",
    options: ["STAT1 and STAT3", "NF-κB and AP-1 (via IRAK4-IRAK1-TRAF6-TAK1 cascade)", "SMAD2/3 and SMAD4", "IRF3 (through TBK1 phosphorylation)"],
    answer: 1,
    explanation: "MyD88 pathway: TLR-MyD88 → IRAK4 (phosphorylates IRAK1) → TRAF6 (E3 ubiquitin ligase) → K63-polyubiquitin chains on TRAF6 → TAK1 (MAP3K) activation → (1) IKK complex → NF-κB, (2) MKK3/6 → p38 → MAPKAPK2, (3) MKK4/7 → JNK → AP-1. NF-κB+AP-1 drive pro-inflammatory cytokine transcription (TNF, IL-6, IL-12, IL-1β). IRF3 is activated by TRIF (not MyD88)."
  },
  {
    id: 37,
    question: "IgA is the predominant antibody at mucosal surfaces. It exists there as which specialized form?",
    options: ["IgA monomer bound to Fcα receptor on epithelial cells", "Dimeric IgA with J chain, transported across epithelium by poly-Ig receptor (pIgR) as secretory IgA (SIgA) with secretory component", "IgA pentamer similar to IgM structure", "IgA in complex with IgM for cooperative opsonization"],
    answer: 1,
    explanation: "Secretory IgA (SIgA): plasma cells in mucosa produce dimeric IgA joined by J chain. pIgR (polymeric immunoglobulin receptor) on basolateral surface of epithelial cells binds dimeric IgA, internalizes it, transcytoses it to the apical surface, and cleaves, releasing SIgA + secretory component (SC, a fragment of pIgR). SC protects SIgA from proteolysis. SIgA neutralizes pathogens without activating complement (preventing inflammation at mucosa)."
  },
  {
    id: 38,
    question: "Which specific type of T cell provides help for B cells to undergo germinal center reactions?",
    options: ["Th1 cells producing IFN-γ", "Cytotoxic T cells (CD8+)", "Follicular helper T cells (Tfh) expressing CXCR5, PD-1, and ICOS", "Regulatory T cells (FOXP3+)"],
    answer: 2,
    explanation: "Tfh (follicular helper T cells) are CD4+ T cells that migrate to B cell follicles (guided by CXCR5 chemokine receptor). They express high ICOS (costimulatory), PD-1, and secrete IL-21 (driving B cell differentiation/germinal center formation) and IL-4. Tfh master regulator: Bcl-6. Tfh-B cell interactions via CD40L-CD40 and ICOS-ICOSL provide essential signals for germinal center formation, affinity maturation, and class switching."
  },
  {
    id: 39,
    question: "Macrophage polarization: the M1/M2 paradigm describes:",
    options: ["M1 (classical activation by IFN-γ/LPS → pro-inflammatory, antimicrobial) vs M2 (alternative activation by IL-4/IL-13/IL-10 → anti-inflammatory, tissue repair)", "M1 (IL-10-producing tolerogenic) vs M2 (TNF/IL-12-producing inflammatory)", "M1 (resident tissue macrophages) vs M2 (circulating monocyte-derived)", "M1 (phagocytic) vs M2 (antigen-presenting)"],
    answer: 0,
    explanation: "M1 macrophages (classically activated): induced by IFN-γ (from T cells/NK) and LPS (via TLR4). Produce TNF, IL-12, IL-6, IL-1β, ROS, NO (via iNOS). Antimicrobial, pro-inflammatory, tumor-killing. M2 macrophages (alternatively activated): induced by IL-4/IL-13 (via STAT6). Express CD206 (mannose receptor), CD163, Arg1 (arginase), Fizz1, Ym1. Anti-inflammatory, tissue repair, fibrosis promotion, tumor promotion. This is a simplified spectrum — macrophages show diverse context-dependent states."
  },
  {
    id: 40,
    question: "The costimulatory molecule CD28 activates which downstream pathway critical for T cell activation and metabolic reprogramming?",
    options: ["PI3K-AKT-mTOR and enhanced IL-2 production", "MAPK-ERK pathway exclusively", "JAK-STAT3 promoting Th17 differentiation", "Wnt-β-catenin promoting T cell stemness"],
    answer: 0,
    explanation: "CD28 (activated by CD80/CD86 on APCs) costimulation recruits PI3K (via YMNM motif in its cytoplasmic tail), generating PIP3 → AKT activation → mTOR → enhanced glucose metabolism (Warburg effect) and T cell proliferation/survival. CD28 also recruits GRB2, activates RAS-MAPK, and via VAV1 promotes IL-2 production. Without costimulation, TCR signaling alone leads to anergy."
  },
  {
    id: 41,
    question: "Myeloid differentiation primary response protein 88 (MyD88) gain-of-function mutations cause which disease?",
    options: ["IPEX syndrome (autoimmune enteropathy)", "Diffuse large B cell lymphoma (DLBCL), ABC type — constitutive NF-κB activation", "Wiskott-Aldrich syndrome (WAS)", "Autoimmune lymphoproliferative syndrome (ALPS)"],
    answer: 1,
    explanation: "MyD88 L265P mutation is found in ~30% of activated B cell-type DLBCL (ABC-DLBCL) and ~90% of Waldenström macroglobulinemia. MyD88 L265P forms a spontaneous signaling complex (Myddosome) with IRAK4 and IRAK1, constitutively activating NF-κB and JAK-STAT3 pathways, driving malignant B cell survival. MYD88 mutation co-occurs with CD79B ITAM mutations in ABC-DLBCL."
  },
  {
    id: 42,
    question: "The cGAS-STING pathway is activated by self-DNA in autoimmune contexts. STING is located on which membrane?",
    options: ["Plasma membrane", "Endosomal membrane", "ER membrane (translocates to Golgi upon activation)", "Mitochondrial outer membrane"],
    answer: 2,
    explanation: "STING (Stimulator of Interferon Genes) is a transmembrane adaptor protein anchored in the ER membrane under basal conditions. Upon cGAMP binding, STING undergoes conformational change and translocates from ER to Golgi (ERGIC/Golgi) via COPII vesicles. In the Golgi, STING recruits and activates TBK1, which phosphorylates IRF3 and IKKβ, leading to IFN-β and NF-κB-dependent gene expression."
  },
  {
    id: 43,
    question: "Which Fc receptor on NK cells mediates antibody-dependent cellular cytotoxicity (ADCC)?",
    options: ["FcγRI (CD64)", "FcγRIII (CD16)", "FcεRI (IgE receptor)", "FcαRI (CD89)"],
    answer: 1,
    explanation: "FcγRIII (CD16) is the low-affinity IgG receptor expressed on NK cells (CD16a/FcγRIIIa) and neutrophils (CD16b/FcγRIIIb). Antibody-coated target cells are recognized by NK cell CD16, triggering degranulation (perforin, granzymes) and ADCC. CD16 signals through DAP12 and FcεRIγ ITAMs in NK cells. CD16 expression defines mature NK cells. NK cell ADCC is used by therapeutic antibodies like rituximab, trastuzumab, cetuximab."
  },
  {
    id: 44,
    question: "Type II hypersensitivity (cytotoxic hypersensitivity) involves:",
    options: ["Allergen-specific IgE on mast cells", "IgG or IgM antibodies against cell-surface or ECM antigens, causing complement/ADCC-mediated destruction", "Immune complex deposition in vessel walls (Arthus reaction/serum sickness)", "CD4+ T cell-mediated macrophage activation (contact dermatitis)"],
    answer: 1,
    explanation: "Type II hypersensitivity: antibodies (IgG/IgM) target antigens on cell surfaces or extracellular matrix → cell destruction via: (1) complement activation (CDC, MAC lysis), (2) ADCC by NK cells/macrophages, (3) phagocytosis (opsonization). Examples: autoimmune hemolytic anemia (anti-RBC), myasthenia gravis (anti-AChR), Goodpasture syndrome (anti-GBM/collagen IV), pemphigus vulgaris (anti-desmoglein), transfusion reactions, hemolytic disease of the newborn."
  },
  {
    id: 45,
    question: "TCR α/β versus γ/δ T cells differ in which key characteristic?",
    options: ["αβ T cells are innate; γδ T cells are adaptive", "αβ T cells are MHC-restricted; γδ T cells can recognize lipid antigens, stress molecules, and phosphoantigens without MHC restriction", "γδ T cells undergo V(D)J recombination; αβ T cells have germline-encoded receptors", "αβ T cells are CD4+CD8+ throughout life; γδ T cells are single positive from development"],
    answer: 1,
    explanation: "αβ T cells (majority in blood/periphery): recognize peptide-MHC complexes (MHC-restricted). γδ T cells (innate-like): do not require MHC presentation; recognize phosphoantigens (e.g., isopentenyl pyrophosphate from mevalonate pathway in stressed cells, recognized by Vγ9Vδ2 cells), lipid antigens on CD1, MICA/MICB on stressed cells. γδ T cells have limited diversity and are enriched in gut epithelium (intraepithelial lymphocytes)."
  },
  {
    id: 46,
    question: "The complement protein C3d deposited on antigens can enhance B cell activation by binding which receptor on B cells?",
    options: ["CR1 (CD35) inhibiting B cell activation", "CR2 (CD21) forming a complex with CD19 and CD81 that lowers BCR signaling threshold 1000-fold", "FcγRIIb inhibiting B cell activation", "TLR2 synergizing with BCR"],
    answer: 1,
    explanation: "Complement CR2 (CD21) on B cells binds C3d (iC3b degradation product deposited on antigen surfaces). The BCR bound to antigen and CR2 bound to C3d on the same antigen brings the CR2-CD19-CD81 complex in proximity to the BCR. CD19 (ITAM-containing) amplifies BCR signaling ~1000-fold, dramatically lowering the amount of antigen needed for B cell activation — this is the 'complement link to adaptive immunity.'"
  },
  {
    id: 47,
    question: "Neutrophil extracellular traps (NETs) are formed by:",
    options: ["Neutrophil degranulation releasing defensins extracellularly", "Active extrusion of chromatin (DNA + histones) with antimicrobial proteins (elastase, myeloperoxidase) that trap pathogens", "Neutrophil polarization and directed secretion of ROS toward pathogens", "Neutrophil apoptosis releasing cytoplasmic enzymes"],
    answer: 1,
    explanation: "NETosis: neutrophils activated by strong stimuli (PMA, bacteria, fungi, LPS) extrude chromatin decorated with antimicrobial proteins (MPO, elastase, cathepsin G, calprotectin, defensins) forming NETs. Classical NETosis requires ROS (NADPH oxidase), histone citrullination (PAD4), and can lead to cell death. Vital NETosis can occur without cell death. NETs trap and kill pathogens but also contribute to thrombosis, ARDS, and autoimmunity (NETs are a source of autoantigens in SLE)."
  },
  {
    id: 48,
    question: "The antigen-binding site of an antibody is formed by:",
    options: ["Constant regions of heavy and light chains (Fc region)", "Variable regions of heavy (VH) and light chain (VL), specifically the 3 CDR loops of each chain (CDR-H1-3 and CDR-L1-3)", "Hinge region connecting Fab and Fc", "J chain linking polymeric antibody subunits"],
    answer: 1,
    explanation: "The antigen-binding site (paratope) is formed by 6 complementarity-determining regions (CDRs): 3 from VH (CDR-H1, H2, H3) and 3 from VL (CDR-L1, L2, L3). CDR3s are most variable (generated by junctional diversity in V(D)J recombination) and make the most antigen contacts. The CDRs are loops supported by the β-sheet framework regions (FRs). CDR grafting onto human FRs produces 'humanized' antibodies."
  },
  {
    id: 49,
    question: "Tolerogenic dendritic cells (tDCs) maintain peripheral tolerance by:",
    options: ["Presenting high levels of MHC-II to maximize T cell activation", "Expressing low costimulatory molecules, producing IL-10/TGF-β, upregulating IDO, and inducing Treg differentiation or T cell anergy", "Producing IL-12 to drive Th1 responses against self-antigens", "Secreting type I IFN to maintain DC activation state"],
    answer: 1,
    explanation: "Tolerogenic DCs (immature DCs or specialized tDCs) present self-antigens in a non-stimulatory context: low CD80/CD86/CD40 expression, production of IL-10 and TGF-β, upregulation of IDO (indoleamine 2,3-dioxygenase, depleting tryptophan needed for T cell proliferation), and expression of PD-L1. This drives T cell anergy (antigen-specific unresponsiveness) or Treg induction. Disruption of peripheral tolerance causes autoimmunity."
  },
  {
    id: 50,
    question: "Bispecific antibodies (like blinatumomab) work by:",
    options: ["Simultaneously blocking two different cytokines", "Bridging tumor cells (via one antigen-binding arm, e.g., CD19) and T cells (via other arm, e.g., CD3) to redirect T cell killing", "Carrying cytotoxic drugs directly to tumor cells", "Activating two complement pathways simultaneously"],
    answer: 1,
    explanation: "Blinatumomab (BiTE — bispecific T cell engager): one arm binds CD19 on B cell tumor cells; other arm binds CD3ε on T cells. This brings T cells into proximity with tumor cells, forming a cytolytic synapse — enabling T cell killing of CD19+ tumor cells independent of antigen-specific TCR recognition. MHC-unrestricted killing. Used in relapsed/refractory B-ALL. T cell redirection is also achieved by tebentafusp (TCR-CD3ε bispecific)."
  }
];
