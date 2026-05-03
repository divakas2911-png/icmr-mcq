export const questions = [
  {
    id: 1,
    question: "The 'two-hit hypothesis' for tumor suppressor genes, proposed by Knudson, states that:",
    options: ["Two oncogenes must be activated simultaneously for cancer", "Both alleles of a tumor suppressor gene must be inactivated for loss of function", "Two DNA damage events must occur in the same cell within 24 hours", "A tumor suppressor and an oncogene must both be mutated"],
    answer: 1,
    explanation: "Knudson's two-hit hypothesis (1971): Tumor suppressor genes (TSGs) are recessive at the cellular level — both alleles must be inactivated. In hereditary retinoblastoma, the first hit is germline (inherited RB1 mutation), the second is somatic. In sporadic retinoblastoma, both hits are somatic. This explained the earlier onset and bilateral nature of familial vs sporadic cancers."
  },
  {
    id: 2,
    question: "TP53 is the most commonly mutated gene in human cancers. Mutant p53 often acts as a dominant negative because:",
    options: ["Mutant p53 activates MDM2 ubiquitin ligase to destroy wild-type p53", "Mutant p53 protein oligomerizes with wild-type p53 and inactivates the tetramer", "Mutant p53 sequesters ATM in the cytoplasm, preventing DNA damage response", "Mutant p53 epigenetically silences the wild-type TP53 allele"],
    answer: 1,
    explanation: "p53 functions as a tetramer (dimer of dimers). Many cancer-associated p53 missense mutations (R175H, R248W, R273H, R248Q, R249S, G245S, R282W) produce a stable mutant protein that co-oligomerizes with wild-type p53, inactivating the tetramer (dominant negative). Some 'gain-of-function' p53 mutants also actively promote tumorigenesis by binding and inhibiting p63, p73, or by activating new target genes."
  },
  {
    id: 3,
    question: "Which oncogene is amplified in ~20-25% of breast cancers and is targeted by trastuzumab?",
    options: ["EGFR (HER1/ErbB1)", "HER2 (ErbB2/ERBB2/NEU)", "MET", "FGFR1"],
    answer: 1,
    explanation: "HER2 (ErbB2) is a receptor tyrosine kinase of the EGF receptor family that lacks a known direct ligand — it is the preferred dimerization partner. HER2 gene amplification (17q12) occurs in ~20-25% of breast cancers and correlates with poor prognosis. Trastuzumab (Herceptin, anti-HER2 IgG1 mAb) and pertuzumab (targeting HER2 dimerization domain) are used therapeutically. Lapatinib (dual EGFR/HER2 TKI) and trastuzumab-emtansine (T-DM1, ADC) are also used."
  },
  {
    id: 4,
    question: "The hallmarks of cancer (Hanahan and Weinberg) include all of the following EXCEPT:",
    options: ["Sustaining proliferative signaling", "Evading growth suppressors", "Replicative immortality via telomerase", "Reversible senescence as a protective mechanism"],
    answer: 3,
    explanation: "The 8 hallmarks of cancer: sustaining proliferative signaling, evading growth suppressors, resisting cell death, enabling replicative immortality, inducing angiogenesis, activating invasion/metastasis, reprogramming energy metabolism (Warburg effect), and evading immune destruction. Enabling characteristics: genome instability/mutation and tumor-promoting inflammation. Senescence, while protective, is 'evaded' in cancer — not a hallmark itself."
  },
  {
    id: 5,
    question: "The Philadelphia chromosome (t(9;22)(q34;q11)) creates which fusion oncogene?",
    options: ["PML-RARα", "BCR-ABL1", "EWS-FLI1", "AML1-ETO"],
    answer: 1,
    explanation: "The Philadelphia chromosome is a reciprocal translocation joining BCR (breakpoint cluster region, chr22) with ABL1 (chr9), creating the BCR-ABL1 fusion gene encoding a constitutively active tyrosine kinase. Found in ~95% of CML and ~20-30% of adult B-ALL. BCR-ABL1 p210 (CML) and p190 (ALL) isoforms differ based on breakpoint location. Imatinib/nilotinib/dasatinib target the BCR-ABL1 kinase domain."
  },
  {
    id: 6,
    question: "Cancer cells frequently display the Warburg effect, which involves:",
    options: ["Enhanced oxidative phosphorylation even in low-oxygen conditions", "Preferential aerobic glycolysis — high glucose uptake and lactate production even in the presence of oxygen", "Suppression of glycolysis and activation of fatty acid oxidation", "Complete dependence on glutamine as the sole energy source"],
    answer: 1,
    explanation: "The Warburg effect (Otto Warburg, 1920s): cancer cells preferentially use aerobic glycolysis (glucose → lactate) even when oxygen is available, despite this being less energy-efficient. This generates lactate (acidifying TME), rapidly generates biosynthetic precursors (nucleotides, amino acids, lipids from glycolytic intermediates), and is driven by oncogenes (MYC upregulates LDHA, SLC16A1; HIF-1α upregulates GLUT1, HK2, LDHA, PDK1). PET imaging exploits high glucose uptake (18F-FDG)."
  },
  {
    id: 7,
    question: "Epithelial-to-mesenchymal transition (EMT) in cancer is associated with which molecular changes?",
    options: ["Upregulation of E-cadherin and tight junctions, downregulation of vimentin", "Loss of E-cadherin, gain of N-cadherin/vimentin, activation of SNAIL/TWIST/ZEB transcription factors", "Activation of the ERM complex and strong cell-matrix adhesion", "Upregulation of claudins and occludins, tightening of cell junctions"],
    answer: 1,
    explanation: "EMT: epithelial cells lose polarity and adhesion (E-cadherin downregulation — SNAIL/SLUG bind E-box in CDH1 promoter; ZEB1/ZEB2 also repress CDH1; TWIST promotes N-cadherin and fibronectin). Gain of mesenchymal markers: N-cadherin, vimentin, α-SMA, fibronectin. EMT is induced by TGF-β, Wnt, Notch, HIF-1α, and inflammatory signals. EMT drives invasion, intravasation, resistance to apoptosis, and cancer stem cell properties."
  },
  {
    id: 8,
    question: "Tumor-suppressing functions of TGF-β in normal epithelium include:",
    options: ["Promoting proliferation via SMAD2/3-cyclin D1 axis", "Inducing cell cycle arrest via SMAD-mediated upregulation of p15INK4b and p21, and repression of MYC", "Activating EMT and invasion in normal tissue", "Stimulating angiogenesis via VEGF upregulation"],
    answer: 1,
    explanation: "In normal epithelial cells, TGF-β is a potent growth inhibitor: SMAD2/3-SMAD4 complexes activate CDKN2B (p15INK4b — CDK4/6 inhibitor) and CDKN1A (p21 — CDK2 inhibitor) transcription, and directly repress MYC expression. TGF-β also induces apoptosis. In advanced cancer, TGF-β signaling is co-opted to promote EMT, immunosuppression, and metastasis — a paradox called the 'TGF-β switch.'"
  },
  {
    id: 9,
    question: "Microsatellite instability (MSI) in colorectal cancer results from defects in which pathway?",
    options: ["Nucleotide excision repair (NER)", "DNA mismatch repair (MMR) — loss of MLH1, MSH2, MSH6, or PMS2", "Homologous recombination (HR) — loss of BRCA1/BRCA2", "Base excision repair (BER) — loss of MUTYH"],
    answer: 1,
    explanation: "MSI-high (MSI-H) cancers have hypermutation of microsatellite sequences (simple sequence repeats) due to defective MMR. Causes: (1) Germline MMR gene mutations (Lynch syndrome — MLH1, MSH2, MSH6, PMS2), (2) MLH1 promoter methylation (sporadic MSI-H CRC, ~15% of CRC). MSI-H tumors have high tumor mutational burden (TMB), are immunogenic (neoantigen-rich), and respond well to PD-1 inhibitors (pembrolizumab FDA-approved for MSI-H tumors regardless of histology)."
  },
  {
    id: 10,
    question: "The RB1-E2F pathway controls cell cycle G1-S transition. How does CDK4/6-Cyclin D phosphorylation of RB release E2F?",
    options: ["CDK4/6 directly binds and degrades RB1 protein", "CDK4/6-CycD phosphorylates RB1 (in G1), releasing E2F transcription factors from repressive RB-HDAC complexes to activate S phase genes", "CDK2-CycE phosphorylates E2F directly, activating its DNA binding", "RB is ubiquitinated by MDM2 and degraded, freeing E2F"],
    answer: 1,
    explanation: "In G0/early G1: hypophosphorylated RB binds E2F and recruits HDAC1/2, repressing E2F target genes (CCNE1, CCNA1, DHFR, PCNA, etc.). CDK4/6-CyclinD phosphorylates RB at multiple sites in mid-G1 (partial release). CDK2-CyclinE completes hyperphosphorylation (G1-S checkpoint). Hyperphosphorylated RB cannot bind E2F → E2F activates S phase gene expression. CDK4/6 inhibitors (palbociclib, ribociclib, abemaciclib) used in HR+ HER2− breast cancer."
  },
  {
    id: 11,
    question: "Oncogene addiction refers to:",
    options: ["Cancer cells becoming addicted to glucose metabolism (Warburg effect)", "The dependence of cancer cells on continued activity of a specific oncogene for maintenance of the malignant phenotype", "Normal cells becoming addicted to growth factors due to epigenetic reprogramming", "Cancer stem cells depending on specific niche signals for survival"],
    answer: 1,
    explanation: "Oncogene addiction: cancer cells with a specific driver oncogene (EGFR mutation, ALK fusion, BRAF V600E, BCR-ABL) become dependent on that oncogene's signaling for survival and proliferation. Inhibiting the 'addicted' oncogene causes dramatic tumor regression (therapeutic window). This is the molecular basis for precision oncology — e.g., EGFR-mutant NSCLC exquisitely sensitive to EGFR TKIs (erlotinib, osimertinib)."
  },
  {
    id: 12,
    question: "Telomerase activation is a key step in cellular immortalization. In most human somatic cells, telomerase is repressed by:",
    options: ["Transcriptional repression of TERT (the catalytic subunit) by multiple transcription factors including WT1, E2F, MYC (negatively)", "Degradation of TERC (RNA component) by PARN deadenylase", "Sequestration of telomerase by telomere-binding proteins (TRF1/TRF2)", "Phosphorylation of TERT by CDK2 promoting its nuclear export"],
    answer: 0,
    explanation: "Telomerase activity is primarily regulated at the level of TERT (telomerase reverse transcriptase) gene transcription. In most somatic cells, TERT is silenced. Oncogenes can reactivate TERT: TERT promoter mutations (C228T, C250T) in ~70% of melanomas and many other cancers create new ETS transcription factor binding sites. MYC also directly activates TERT transcription. TERC (RNA template) and dyskerin are expressed in most cells."
  },
  {
    id: 13,
    question: "The INK4a/ARF locus (CDKN2A) encodes two different tumor suppressors from the same genomic region. They are:",
    options: ["p16INK4a (CDK4/6 inhibitor) and p14ARF (MDM2 inhibitor, stabilizing p53) — read in different reading frames", "p21 (CIP1) and p27 (KIP1) — Cip/Kip family CKIs", "RB1 and p53 — encoded by alternative splicing", "BRCA1 and BRCA2 — encoded by chromosomal proximity"],
    answer: 0,
    explanation: "CDKN2A encodes two tumor suppressors using alternative reading frames from the same locus: (1) p16INK4a (exons 1α-2-3) — inhibits CDK4/6, preventing RB phosphorylation; (2) p14ARF (exons 1β-2-3, different reading frame) — binds MDM2, preventing MDM2-mediated p53 degradation, stabilizing p53. CDKN2A is frequently deleted/silenced in many cancers, simultaneously inactivating both the RB and p53 pathways."
  },
  {
    id: 14,
    question: "Which enzyme is targeted by PARP inhibitors (olaparib, niraparib) in BRCA1/2-mutant cancers?",
    options: ["Topoisomerase II", "Poly(ADP-ribose) polymerase 1 (PARP1) — involved in base excision repair of SSBs", "DNA-PKcs (NHEJ kinase)", "Histone deacetylase (HDAC)"],
    answer: 1,
    explanation: "PARP1 detects SSBs and synthesizes PAR chains to recruit BER/SSB repair factors. PARP inhibitors trap PARP on DNA, causing SSBs to persist and collapse replication forks into DSBs. In BRCA1/2-wild-type cells, DSBs are repaired by HR. In BRCA1/2-mutant cells (HR-deficient), DSBs are lethal — synthetic lethality. PARP inhibitors are approved for BRCA1/2-mutant ovarian, breast, prostate, and pancreatic cancers."
  },
  {
    id: 15,
    question: "ALK (anaplastic lymphoma kinase) rearrangements/fusions occur in which cancers and are treated with which class of drugs?",
    options: ["Breast cancer — treated with CDK4/6 inhibitors", "NSCLC (EML4-ALK fusion ~5%) and ALCL (NPM-ALK) — treated with ALK TKIs (crizotinib, alectinib, brigatinib, lorlatinib)", "CML — treated with BCR-ABL inhibitors", "Colorectal cancer — treated with anti-VEGF antibodies"],
    answer: 1,
    explanation: "EML4-ALK (echinoderm microtubule-associated protein-like 4 fused to ALK) is a chromosomal inversion creating a constitutively active ALK fusion kinase in ~5% of NSCLC. NPM-ALK fusion occurs in ~80% of ALK+ ALCL. ALK TKIs have been highly successful: crizotinib (1st gen), alectinib/ceritinib (2nd gen with better CNS penetration), lorlatinib (3rd gen, overcomes resistance mutations including L1196M, G1202R)."
  },
  {
    id: 16,
    question: "Tumor mutational burden (TMB) correlates with response to checkpoint immunotherapy because:",
    options: ["High TMB means more DNA damage repair genes are mutated, reducing tumor fitness", "High TMB generates more neoantigens (mutant peptides presented on MHC-I) that can be recognized by tumor-infiltrating lymphocytes", "High TMB cancers express more PD-L1, making them more responsive to PD-1 blockade", "High TMB directly activates cGAS-STING in tumor cells, enhancing immunogenicity"],
    answer: 1,
    explanation: "Tumor mutational burden (TMB) = number of somatic nonsynonymous mutations per megabase of genome sequenced. High TMB → more mutant proteins → more neoantigens presented on MHC-I → increased probability of tumor-reactive TILs. MSI-H/dMMR tumors have high TMB. Pembrolizumab is FDA-approved for solid tumors with TMB ≥ 10 mutations/megabase. Note: TMB is not perfect predictor — TMB-high may not always respond to ICI."
  },
  {
    id: 17,
    question: "The cancer stem cell (CSC) hypothesis proposes that:",
    options: ["All cancer cells are equally capable of initiating new tumors", "A subpopulation of cancer cells with stem-like properties (self-renewal + multipotency) drives tumor initiation, growth, and recurrence", "Embryonic stem cells transform into cancer cells", "Cancer cells revert to a pluripotent state by expressing OCT4/SOX2/KLF4/MYC"],
    answer: 1,
    explanation: "Cancer stem cells (CSCs, also called tumor-initiating cells): a subset within a tumor with self-renewal capacity and ability to give rise to heterogeneous tumor bulk. First demonstrated in AML (CD34+CD38− leukemia-initiating cells). CSC markers vary by tumor type (CD44+CD24-low in breast CSCs; CD133/PROM1 in glioblastoma/colon CSCs). CSCs are often therapy-resistant (due to quiescence, high ALDH activity, drug efflux pumps), contributing to relapse."
  },
  {
    id: 18,
    question: "Which type of mutation typically activates proto-oncogenes to oncogenes?",
    options: ["Loss-of-function mutations (nonsense, frameshift)", "Gain-of-function mutations (missense), gene amplification, chromosomal translocation, promoter activation", "Synonymous (silent) mutations", "Loss of heterozygosity (LOH)"],
    answer: 1,
    explanation: "Proto-oncogene activation to oncogene: (1) Gain-of-function point mutations — KRAS G12D (constitutively active), BRAF V600E, PIK3CA H1047R; (2) Gene amplification — HER2, MYC, EGFR, CCND1; (3) Chromosomal translocation — BCR-ABL1 (CML), MYC-IgH (Burkitt lymphoma), PML-RARα (APL); (4) Promoter mutations — TERT promoter; (5) Insertion of viral promoter/enhancer. All result in increased or constitutive oncogenic activity."
  },
  {
    id: 19,
    question: "Angiogenesis in tumors is primarily driven by which factor produced by tumor cells under hypoxia?",
    options: ["EGF (epidermal growth factor)", "VEGF-A (vascular endothelial growth factor A), induced by HIF-1α", "FGF-2 (fibroblast growth factor 2)", "PDGF-BB (platelet-derived growth factor BB)"],
    answer: 1,
    explanation: "Under hypoxia (low O2), HIF-1α (normally hydroxylated by PHDs and degraded by VHL-mediated ubiquitination) accumulates, forms heterodimer with HIF-1β, and transcriptionally activates VEGF-A (primary tumor angiogenic driver), PDGF, FGF, angiopoietins, EPO, LDHA, GLUT1, and other genes. Bevacizumab (anti-VEGF-A mAb) blocks VEGF-A-VEGFR2 signaling. Sunitinib/sorafenib block VEGFR TK activity."
  },
  {
    id: 20,
    question: "KRAS G12C-specific inhibitors (sotorasib, adagrasib) work because G12C mutant KRAS:",
    options: ["Has enhanced GTPase activity that can be further stimulated by the inhibitor", "Contains a cysteine at position 12 that forms a covalent bond with the inhibitor in the GDP-bound (inactive) state, locking KRAS-OFF", "Is dependent on SOS for continuous activation and the inhibitor blocks SOS binding", "Has altered membrane localization that concentrates it at the plasma membrane where inhibitors are delivered"],
    answer: 1,
    explanation: "KRAS G12C (glycine→cysteine at codon 12) creates a nucleophilic cysteine near the switch II pocket that is accessible only in the GDP-bound state. Sotorasib (AMG-510) and adagrasib (MRTX849) covalently and irreversibly modify Cys12, locking KRAS G12C in the inactive GDP-bound conformation, preventing GEF-mediated activation. This is the first approved specific KRAS inhibitor, effective in KRAS G12C NSCLC and CRC."
  },
  {
    id: 21,
    question: "Which epigenetic mechanism is commonly targeted in cancer therapy?",
    options: ["DNA methyltransferase inhibitors (azacitidine/decitabine) and HDAC inhibitors (vorinostat/romidepsin)", "DNA polymerase inhibitors to block replication", "Histone methyltransferase overactivation to silence oncogenes", "RNase H inhibitors to promote RNA-DNA hybrid stability"],
    answer: 0,
    explanation: "Epigenetic therapies in cancer: (1) DNMT inhibitors — azacitidine, decitabine (5-aza-2'-deoxycytidine): incorporate into DNA and trap DNMTs, causing passive demethylation and re-expression of silenced TSGs. Approved for MDS/AML. (2) HDAC inhibitors (vorinostat, romidepsin, belinostat): cause hyperacetylation of histones and non-histone proteins, activating differentiation and apoptosis programs. Approved for CTCL, PTCL, MM. (3) EZH2 inhibitors (tazemetostat) — approved for EZH2-mutant FL."
  },
  {
    id: 22,
    question: "The APC (adenomatous polyposis coli) protein acts as a tumor suppressor in colorectal cancer primarily by:",
    options: ["Directly binding and inhibiting KRAS-GTP", "Scaffolding the β-catenin destruction complex (with Axin, CK1α, GSK3β) to target β-catenin for degradation", "Activating MLH1 expression to promote MMR", "Binding p53 and preventing MDM2-mediated degradation"],
    answer: 1,
    explanation: "APC is a scaffold protein in the β-catenin destruction complex. APC directly binds β-catenin and Axin, facilitating phosphorylation of β-catenin by CK1α/GSK3β and subsequent β-TrCP-mediated ubiquitination and proteasomal degradation. APC mutations (most commonly truncating mutations in the mutation cluster region) disrupt this complex, causing β-catenin accumulation and constitutive Wnt target gene activation (MYC, CCND1). APC mutations initiate >80% of sporadic CRC."
  },
  {
    id: 23,
    question: "Chromothripsis is a type of chromosomal catastrophe characterized by:",
    options: ["Gradual accumulation of individual chromosome mutations over years", "Massive rearrangements of one or a few chromosomes in a single catastrophic event, generating complex copy number alterations", "Simple reciprocal translocations between two chromosomes", "Whole-genome duplication followed by chromosome loss"],
    answer: 1,
    explanation: "Chromothripsis (chromosome shattering): one or a few chromosomes experience massive (10s-100s) double-strand breaks in a single catastrophic event (possibly due to micronucleus formation and replication in a micronucleus). The fragments are randomly reassembled by NHEJ/MMEJ, creating complex patterns of alternating two-copy-number states. Found in ~25% of cancers (especially bone tumors, brain tumors). Can activate oncogenes or inactivate TSGs."
  },
  {
    id: 24,
    question: "PD-L1 is expressed on cancer cells to evade immune destruction by:",
    options: ["Blocking NK cell FcγR-mediated ADCC", "Binding PD-1 on tumor-infiltrating T cells, delivering inhibitory signals that cause T cell exhaustion/dysfunction", "Activating complement-mediated opsonization of cancer cells", "Promoting Treg differentiation within the tumor microenvironment"],
    answer: 1,
    explanation: "PD-L1 (CD274/B7-H1) on cancer cells binds PD-1 on tumor-infiltrating T cells, triggering inhibitory signaling (SHP1/SHP2 dephosphorylation of TCR signaling molecules) that causes T cell exhaustion/anergy. PD-L1 expression is often induced by IFN-γ (via JAK1-STAT1-IRF1 → PD-L1 promoter), MYC, PI3K-AKT signaling, or epigenetic mechanisms. Anti-PD-1 (pembrolizumab, nivolumab) and anti-PD-L1 (atezolizumab, durvalumab) antibodies block this axis."
  },
  {
    id: 25,
    question: "Clonal hematopoiesis of indeterminate potential (CHIP) refers to:",
    options: ["Polyclonal hematopoiesis driven by multiple driver mutations", "Age-related clonal expansion of hematopoietic stem cells with somatic mutations (DNMT3A, TET2, ASXL1, JAK2) without hematologic malignancy", "Germline mutations predisposing to leukemia", "Clonal expansion of mature B cells in lymph nodes"],
    answer: 1,
    explanation: "CHIP: somatic mutations in hematopoietic stem cells (HSCs) drive clonal expansion detectable in peripheral blood (VAF ≥ 2%) without cytopenias or hematologic malignancy. Most common mutations: DNMT3A (DNA methylation), TET2 (5mC oxidation/demethylation), ASXL1 (chromatin remodeling), JAK2 V617F. CHIP increases with age (~10% of 70-year-olds), confers 0.5-1% per year risk of hematologic malignancy, and independently increases cardiovascular disease risk."
  },
  {
    id: 26,
    question: "Which gene is mutated in the majority of follicular lymphomas and diffuse large B cell lymphomas?",
    options: ["TP53", "BCL2", "MYC", "BCL6"],
    answer: 1,
    explanation: "BCL2 is overexpressed in follicular lymphoma due to t(14;18)(q32;q21) — the IGH-BCL2 translocation places BCL2 under IGH enhancer control. BCL2 (anti-apoptotic BCL-2 family member) prevents cytochrome c release. Venetoclax (BCL2-specific BH3 mimetic) induces apoptosis in BCL2-dependent tumors (approved for CLL, AML with IDH1 mutations). BCL6 is mutated/overexpressed in GCB-DLBCL (represses BLIMP1/p53/ATR)."
  },
  {
    id: 27,
    question: "Tumor microenvironment (TME) comprises which non-cancer cell types that support tumor growth?",
    options: ["Only fibroblasts and endothelial cells", "Cancer-associated fibroblasts (CAFs), tumor-associated macrophages (TAMs), myeloid-derived suppressor cells (MDSCs), Tregs, tumor-infiltrating lymphocytes (TILs), endothelial cells, and pericytes", "Only immune cells (T cells, B cells, NK cells)", "Only the extracellular matrix (collagen, fibronectin, laminin)"],
    answer: 1,
    explanation: "The TME is a complex ecosystem: Cancer-associated fibroblasts (CAFs) — secrete ECM (desmoplasia), growth factors (HGF, FGF), and immunosuppressive factors; Tumor-associated macrophages (TAMs/M2-like) — promote angiogenesis (VEGF), immunosuppression (IL-10, TGF-β), and invasion; MDSCs — suppress T and NK cell activity; Tregs — immunosuppression; Endothelial cells — angiogenesis; ECM — physical barrier and signaling."
  },
  {
    id: 28,
    question: "Receptor tyrosine kinase (RTK) resistance to targeted therapy commonly occurs via which mechanisms?",
    options: ["Upregulation of p53 and RB1", "Secondary kinase domain mutations (e.g., T790M in EGFR), bypass pathway activation (MET amplification), lineage plasticity (small cell transformation)", "Loss of the cancer stem cell phenotype", "Gain of MMR function"],
    answer: 1,
    explanation: "Acquired resistance to RTK inhibitors: (1) Secondary 'gatekeeper' mutations in the kinase domain that block drug binding (EGFR T790M — osimertinib overcomes; osimertinib resistance: C797S mutation); (2) Bypass pathway activation — MET amplification, ERBB2 amplification, KRAS/BRAF mutations bypassing EGFR; (3) Phenotypic transformation — EGFR-mutant NSCLC transforming to SCLC (RB1 loss); (4) EMT; (5) Amplification of target gene (BRAF amplification overcoming BRAF inhibitors)."
  },
  {
    id: 29,
    question: "The SWI/SNF (BAF) chromatin remodeling complex is mutated in ~20% of all cancers. These mutations are predominantly:",
    options: ["Gain-of-function mutations activating BAF ATPase activity", "Loss-of-function mutations in subunits (ARID1A, SMARCA4/BRG1, SMARCB1/SNF5, ARID2) — BAF acts as tumor suppressor", "Amplifications driving overexpression of the BAF complex", "Translocations fusing BAF subunits to oncogenic TFs"],
    answer: 1,
    explanation: "SWI/SNF/BAF complex subunits are among the most commonly mutated genes in cancer. SMARCB1/SNF5 — biallelic loss in malignant rhabdoid tumors and epithelioid sarcoma; SMARCA4/BRG1 — loss in NSCLC, bladder, and other cancers; ARID1A — most commonly mutated subunit in ovarian clear cell carcinoma, endometrioid, and gastric cancers. BAF opposes PRC2 (EZH2) function; BAF loss → increased H3K27me3 repression of TSGs. EZH2 inhibitors are synthetically lethal with SMARCB1 loss."
  },
  {
    id: 30,
    question: "IDH1 and IDH2 gain-of-function mutations in glioma and AML produce an oncometabolite. Which one?",
    options: ["Succinate (from SDH mutation)", "2-hydroxyglutarate (2-HG), a competitive inhibitor of α-KG-dependent dioxygenases", "Fumarate (from FH mutation)", "D-lactate (from altered LDHA activity)"],
    answer: 1,
    explanation: "Mutant IDH1/IDH2 (R132H in IDH1; R140Q, R172K in IDH2) converts α-ketoglutarate (α-KG) to 2-hydroxyglutarate (2-HG) using NADPH. 2-HG competitively inhibits α-KG-dependent dioxygenases including TET2 (DNA demethylation), KDM histone demethylases, and PHD (HIF hydroxylation). This causes global DNA hypermethylation (CpG island methylator phenotype, CIMP), histone hypermethylation, and HIF accumulation. IDH1 inhibitor: ivosidenib; IDH2 inhibitor: enasidenib."
  },
  {
    id: 31,
    question: "The metastatic cascade in cancer involves sequential steps. Which step involves cancer cells resisting anoikis after entering the circulation?",
    options: ["Local invasion (intravasation)", "Survival in circulation (anoikis resistance)", "Extravasation at distant site", "Colonization and metastatic outgrowth"],
    answer: 1,
    explanation: "Anoikis is apoptosis triggered by loss of cell-matrix attachment. Cancer cells in circulation (circulating tumor cells/CTCs) must resist anoikis to survive. Mechanisms: EMT activation (mesenchymal cells are more anoikis-resistant), BCL-2/BCL-XL overexpression, integrin signaling adaptations (αvβ3 — hematogenous metastasis), formation of CTC clusters (higher survival), and platelet cloaking. Survival in circulation is the rate-limiting step — <0.01% of CTCs form macrometastases."
  },
  {
    id: 32,
    question: "Oncogene-induced senescence (OIS) is a tumor-suppressive mechanism triggered by:",
    options: ["Loss of telomere function in aging cells", "Activation of oncogenes (e.g., KRAS G12V, RAF) causing replicative exhaustion, DNA damage signaling, and permanent cell cycle arrest", "Viral infection causing cytopathic effects", "Chemotherapy-induced DNA damage"],
    answer: 1,
    explanation: "OIS: When proto-oncogenes are strongly activated (e.g., KRAS G12V expression in normal cells), they drive unscheduled DNA replication, causing replication stress, DSBs, and activation of DDR (ATM/ATR → CHK1/CHK2 → p53 → p21). p53 and p16INK4a enforce stable G1 arrest (senescence), preventing malignant transformation. OIS is a barrier to early tumorigenesis that must be overcome (usually by p53 and p16/RB mutation). OIS produces the senescence-associated secretory phenotype (SASP)."
  },
  {
    id: 33,
    question: "The AML1-ETO fusion protein in t(8;21) acute myeloid leukemia acts by:",
    options: ["Constitutively activating tyrosine kinase signaling", "Dominant-negative inhibition of AML1 (RUNX1) target genes by recruiting NCoR/HDAC co-repressors, blocking myeloid differentiation", "Activating BCL2 transcription to prevent apoptosis", "Creating a constitutively active transcription factor that drives cell proliferation"],
    answer: 1,
    explanation: "AML1 (RUNX1) is a transcription factor essential for hematopoiesis. ETO (MTG8/RUNX1T1) is a transcriptional repressor. The AML1-ETO fusion retains AML1's DNA-binding domain but fuses it to ETO's repressor domain, which recruits NCoR/SMRT and HDAC complexes. This blocks transcription of myeloid differentiation genes normally activated by RUNX1 (CEBPA, PU.1, GATA1), arresting myeloid differentiation at the blast stage."
  },
  {
    id: 34,
    question: "Lynch syndrome is caused by germline mutations in MMR genes. Which cancer types are most commonly associated?",
    options: ["Breast, ovarian, and pancreatic cancers (BRCA-related)", "Colorectal cancer (most common), endometrial cancer, gastric, ovarian, urinary tract, and small bowel cancers", "Melanoma, renal cell carcinoma, and hemangioblastoma (VHL-related)", "Pheochromocytoma, medullary thyroid cancer, and parathyroid adenoma (MEN2-related)"],
    answer: 1,
    explanation: "Lynch syndrome (hereditary non-polyposis colorectal cancer, HNPCC): germline mutations in MLH1, MSH2 (most common), MSH6, PMS2, or EPCAM (upstream of MSH2). Lifetime CRC risk: 40-80%; endometrial cancer: 40-60%; ovarian: 10-15%; gastric, urethral/urinary tract, small bowel, biliary, pancreatic, and brain (Turcot syndrome variant). Amsterdam criteria II and revised Bethesda guidelines used for clinical diagnosis."
  },
  {
    id: 35,
    question: "Antibody-drug conjugates (ADCs) like trastuzumab emtansine (T-DM1) work by:",
    options: ["Delivering antibody as a carrier that opens tumor vasculature for drug uptake", "Targeting antibody delivers cytotoxic payload (DM1 = emtansine, a microtubule inhibitor) specifically to antigen-expressing tumor cells via receptor-mediated endocytosis and lysosomal payload release", "Activating complement cascade specifically at tumor sites via antibody Fc region", "Blocking growth factor receptor signaling while simultaneously stimulating immune recognition"],
    answer: 1,
    explanation: "ADC architecture: antigen-targeting mAb + linker + cytotoxic payload. T-DM1 (ado-trastuzumab emtansine): anti-HER2 trastuzumab linked to DM1 (maytansine derivative, potent microtubule inhibitor) via non-cleavable thioether linker. Mechanism: binds HER2 → receptor-mediated endocytosis → lysosomal degradation of ADC → release of Lys-MCC-DM1 → tubulin depolymerization and mitotic arrest → apoptosis. Also retains trastuzumab's anti-HER2 activity (ADCC, PI3K/AKT inhibition)."
  },
  {
    id: 36,
    question: "Which molecular change distinguishes a 'driver' mutation from a 'passenger' mutation in cancer?",
    options: ["Driver mutations are only found in protein-coding regions; passenger mutations are in introns", "Driver mutations confer selective growth advantage and are causally implicated in oncogenesis; passenger mutations are neutral and arise from genomic instability", "Driver mutations always occur at high allele frequency; passenger mutations are always subclonal", "Driver mutations are germline; passenger mutations are always somatic"],
    answer: 1,
    explanation: "Driver mutations confer a selective growth advantage to cancer cells (oncogene activation or TSG inactivation), are under positive selection, and are causally involved in carcinogenesis. Examples: KRAS G12D, TP53 R248W, EGFR exon 19 deletion. Passenger (or bystander) mutations arise from genomic instability but do not contribute to cancer growth — they are 'along for the ride.' Most somatic mutations in a tumor genome are passengers (~1-10 drivers per cancer genome)."
  },
  {
    id: 37,
    question: "PML-RARα fusion protein in acute promyelocytic leukemia (APL) causes disease by:",
    options: ["Constitutive tyrosine kinase activation driving leukemic proliferation", "Blocking retinoic acid-induced myeloid differentiation by dominant-negative repression of RAR target genes (recruiting HDAC/NCoR at physiological RA concentrations)", "Activating BCL2 by translocation to IgH locus", "Inactivating TP53 by direct protein interaction"],
    answer: 1,
    explanation: "PML-RARα (t(15;17)): RAR (retinoic acid receptor) normally activates myeloid differentiation genes at pharmacological RA. In PML-RARα, the PML portion allows formation of aberrant dimers with increased co-repressor (NCoR/SMRT-HDAC) affinity, requiring very high RA to displace. ATRA (all-trans retinoic acid) at pharmacological doses dissociates co-repressors, induces PML-RARα degradation (by proteasome), and forces terminal myeloid differentiation. ATRA + arsenic trioxide (degrades PML-RARα) are curative in APL without chemotherapy."
  },
  {
    id: 38,
    question: "Synthetic lethality exploited in cancer therapy means:",
    options: ["Two drugs are combined to produce a synergistic toxic effect", "The loss of one gene (e.g., BRCA1/2) creates dependence on a second pathway (e.g., PARP) — inhibiting the second pathway is lethal specifically to cancer cells with the first gene loss", "A cancer-specific mutation creates a neoantigenic peptide recognized by T cells", "A drug exploits metabolic differences between cancer and normal cells to selectively kill cancer"],
    answer: 1,
    explanation: "Synthetic lethality: loss of gene A is compatible with cell survival; loss of gene B is compatible with cell survival; but simultaneous loss of A and B is lethal. In BRCA1/2-mutant cancers (HR-deficient), PARP inhibition creates SSBs → replication fork collapse → DSBs that cannot be repaired by HR → cell death. Normal cells with intact BRCA1/2 repair DSBs by HR and survive. This concept is being expanded to other synthetic lethal pairs (e.g., SMARCB1-EZH2, KRAS-SOS1, ATM-ATR)."
  },
  {
    id: 39,
    question: "Tumor heterogeneity can arise from which evolutionary processes?",
    options: ["Only from germline genetic variation between patients", "Clonal evolution from cancer-initiating mutations, followed by branching evolution generating subclones with different mutations due to genomic instability", "Only from epigenetic reprogramming in response to therapy", "From horizontal gene transfer between cancer cells"],
    answer: 1,
    explanation: "Intratumoral heterogeneity (ITH) arises from: (1) Clonal evolution (Nowell model) — sequential accumulation of mutations creating a hierarchy; (2) Branching evolution — subclones diverge from a common ancestor, generating spatially and temporally distinct subpopulations; (3) Non-genetic heterogeneity — epigenetic variability, phenotypic plasticity (EMT, CSC state). ITH drives therapy resistance (pre-existing resistant clones are selected by therapy) and is visualized by multi-region sequencing and phylogenetic analysis."
  },
  {
    id: 40,
    question: "Which molecular characteristic defines Burkitt lymphoma at the genetic level?",
    options: ["BCL2 overexpression due to t(14;18)", "MYC translocation to immunoglobulin loci: t(8;14)(q24;q32) or t(2;8) or t(8;22)", "BCR-ABL1 fusion from t(9;22)", "ALK rearrangement"],
    answer: 1,
    explanation: "Burkitt lymphoma is characterized by translocations juxtaposing MYC (8q24) to immunoglobulin enhancers: t(8;14) — MYC to IGH (80% of cases); t(2;8) — IGK to MYC; t(8;22) — MYC to IGL. This places MYC under constitutive Ig enhancer control, driving massive MYC overexpression. MYC drives ribosome biogenesis, cell cycle entry, metabolic reprogramming. EBV is associated with endemic Burkitt (Africa) but not sporadic type."
  },
  {
    id: 41,
    question: "The tumor suppressor PTEN controls which metabolic pathway and its inactivation leads to which cancer phenotype?",
    options: ["PTEN inactivates fatty acid synthase, and its loss promotes lipid catabolism", "PTEN dephosphorylates PIP3 to oppose PI3K; PTEN loss → constitutive AKT-mTOR activation → proliferation, survival, protein synthesis, Warburg metabolism", "PTEN dephosphorylates RB1 and its loss prevents G1 checkpoint activation", "PTEN degrades cyclin D1 and its loss promotes CDK4/6 activity"],
    answer: 1,
    explanation: "PTEN (chromosome 10q23) is the most frequently mutated TSG after TP53. As a lipid phosphatase, PTEN dephosphorylates PIP3 → PIP2, opposing PI3K. PTEN loss → constitutive PIP3 accumulation → AKT hyperactivation → mTOR/S6K/4E-BP1 (translation/growth), BAD/FOXO (survival), GSK3β/glycogen synthesis. PTEN is lost (deletion, mutation, methylation) in prostate, endometrial, breast, glioblastoma, melanoma. Cowden syndrome: germline PTEN mutations."
  },
  {
    id: 42,
    question: "EZH2 is the catalytic subunit of PRC2 (Polycomb Repressive Complex 2). EZH2 can function as either oncogene or tumor suppressor depending on context. EZH2 gain-of-function mutations (Y641, A677, A687) in lymphoma cause:",
    options: ["Loss of H3K27me3, activating oncogenes epigenetically", "Increased H3K27me3, silencing tumor suppressor genes like CDKN2A", "Increased H3K4me3, activating transcription genome-wide", "Decreased DNA methylation at EZH2 target gene promoters"],
    answer: 1,
    explanation: "EZH2 trimethylates H3K27 (H3K27me3), a repressive chromatin mark that silences gene expression when combined with PRC1 (H2AK119ub). EZH2 gain-of-function mutations in follicular lymphoma and DLBCL (Y641F/N/S/H/C) alter cosubstrate specificity, producing predominantly H3K27me3 from H3K27me2, causing genome-wide H3K27 hypermethylation and silencing of TSGs (CDKN2A, etc.). Tazemetostat (EZH2 inhibitor) is approved for EZH2-mutant follicular lymphoma."
  },
  {
    id: 43,
    question: "Which concept describes the finding that tumor cells with the highest genomic instability can be both more aggressive and more immunogenic?",
    options: ["Precision paradox", "Mutational-immunogenic trade-off (more mutations = more neoantigens but also more structural variants causing immune evasion)", "Clonal interference and tumor evolution paradox", "The hallmarks of cancer complementarity"],
    answer: 1,
    explanation: "High genomic instability generates driver mutations driving aggressiveness AND more neoantigens (via higher TMB) increasing immunogenicity. However, highly unstable tumors may also evolve immune evasion mechanisms (HLA loss, beta-2-microglobulin mutations, PD-L1 upregulation) rapidly. This trade-off is clinically relevant: MSI-H cancers are simultaneously aggressive (rapid evolution) but respond dramatically to checkpoint immunotherapy (high neoantigen load). This explains why ICI can achieve durable remissions in what were previously poor-prognosis cancers."
  },
  {
    id: 44,
    question: "Gain-of-function TP53 mutations (vs loss-of-function) promote cancer through which additional mechanisms beyond dominant-negative activity?",
    options: ["GOF p53 binds and activates wild-type p53 target promoters more efficiently", "GOF p53 interacts with and inhibits p63/p73 family members, activates new transcriptional programs (VEGF, EZH2, MYC), promotes invasion, and provides resistance to therapy", "GOF p53 promotes degradation of MDM2, protecting itself from degradation", "GOF p53 acts as a cytoplasmic chaperone for misfolded proteins"],
    answer: 1,
    explanation: "TP53 GOF mutations (R175H, R248W, R273H, R248Q) exert dominant negative effects (vs WT p53 tetramers) AND gain new oncogenic functions: (1) Sequester/inhibit p63 and p73 (p53 family TSGs) — promoting invasion and metastasis; (2) Bind and activate novel target gene promoters (MYC, VEGFA, ID2, EZH2, PCNA); (3) Promote cancer cell metabolic reprogramming; (4) Confer chemo/radioresistance; (5) Interact with NF2, CBP, NF-Y, VDR to modulate distinct gene programs."
  },
  {
    id: 45,
    question: "The concordance between tumor histopathology and molecular driver alterations allows targeted therapy selection. Which statement about EGFR mutations in NSCLC is correct?",
    options: ["EGFR amplification (not mutation) is the primary driver in lung adenocarcinoma", "Exon 19 deletions and exon 21 L858R point mutation account for ~90% of sensitizing EGFR mutations and confer sensitivity to EGFR TKIs (erlotinib, gefitinib, osimertinib)", "EGFR exon 20 insertions are highly sensitive to first-generation TKIs", "EGFR mutations are most common in squamous cell carcinoma of the lung"],
    answer: 1,
    explanation: "Sensitizing EGFR mutations in NSCLC: exon 19 in-frame deletions (~45%) and exon 21 L858R missense mutation (~45%) together ~90% of EGFR-mutant NSCLC. Both activate EGFR kinase constitutively and confer dramatic sensitivity to EGFR TKIs. EGFR mutations are most common in lung adenocarcinoma (~15% of Western, ~50% of East Asian patients), never-smokers, women. Exon 20 insertions are resistant to most TKIs (amivantamab, mobocertinib target exon 20 insertions)."
  },
  {
    id: 46,
    question: "Cancer cells frequently silence genes via promoter hypermethylation. Which protein complex executes de novo methylation?",
    options: ["TET1/TET2/TET3 (5mC oxidases)", "DNMT3A-DNMT3B with cofactor DNMT3L (de novo methyltransferases)", "DNMT1 (maintenance methyltransferase copying methylation during replication)", "PRC2 with EZH2 (H3K27 methylation, not DNA methylation)"],
    answer: 1,
    explanation: "DNMT3A and DNMT3B are de novo DNA methyltransferases that establish new methylation patterns at unmethylated CpGs, guided by chromatin signals (H3K9me2/me3, H3K36me2). DNMT3L (catalytically inactive) stimulates DNMT3A/3B activity. De novo methylation silences gene promoters, including TSGs (MLH1, CDKN2A/p16, BRCA1, APC, CDH1). DNMT1 is the maintenance methyltransferase that copies methylation from parent to daughter strand during replication using hemi-methylated DNA as template."
  },
  {
    id: 47,
    question: "In which cancer type is the FGFR3 gain-of-function mutation (S249C or K652E) a key driver?",
    options: ["Colorectal cancer", "Urothelial (bladder) cancer — FGFR3 mutations in ~15% of muscle-invasive and ~50-60% of non-muscle-invasive bladder cancers", "Glioblastoma", "Prostate cancer"],
    answer: 1,
    explanation: "FGFR3 (Fibroblast Growth Factor Receptor 3) activating mutations (S249C, R248C, G372C, S373C in extracellular domain; K652E in kinase domain) are frequent in urothelial carcinoma (~50-60% of low-grade NMIBC, ~15% of MIBC). FGFR3 mutations also drive myeloma. Erdafitinib (pan-FGFR TKI) is FDA-approved for FGFR3-altered metastatic urothelial cancer. Infigratinib and pemigatinib target FGFR1-3 fusions in cholangiocarcinoma."
  },
  {
    id: 48,
    question: "Tumor suppressor RB1 was the first cloned TSG. Its protein product pRB is inactivated in cancer by:",
    options: ["Only direct mutation/deletion of RB1", "Multiple mechanisms: CDK4/6-CyclinD hyperphosphorylation (e.g., due to CCND1 amplification, CDK4 amplification, or p16INK4a/CDKN2A loss), viral oncoproteins (HPV E7, adenovirus E1A, SV40 T antigen), or direct RB1 mutation/deletion", "Only viral oncoprotein binding", "Only epigenetic silencing by DNMT3A"],
    answer: 1,
    explanation: "pRB inactivation in cancer: (1) Genomic — RB1 mutation/deletion (retinoblastoma, SCLC, osteosarcoma); (2) Epigenetic — RB1 promoter methylation; (3) Upstream pathway — CCND1 amplification (breast, head/neck), CDK4/6 amplification (liposarcoma), CDKN2A/p16 deletion/methylation (very common across cancers); (4) Viral oncoproteins — HPV E7 binds LXCXE motif on RB, E1A (adenovirus), SV40 large T antigen all inactivate pRB, disrupting RB-E2F repression."
  },
  {
    id: 49,
    question: "The concept of 'liquid biopsy' in oncology refers to:",
    options: ["Detecting circulating tumor cells only (not nucleic acids)", "Analysis of circulating tumor DNA (ctDNA), circulating tumor cells (CTCs), exosomes, and other tumor-derived material from blood or other body fluids", "Liquid biopsy of ascites or pleural effusions exclusively", "Urine-based detection of tumor-shed proteins"],
    answer: 1,
    explanation: "Liquid biopsy: non-invasive sampling of tumor-derived material from blood (or urine, CSF, saliva). Components: ctDNA (cell-free DNA with tumor mutations — used for mutation detection, TMB, MSI, copy number); CTCs (intact tumor cells — rare, ~1 per mL); exosomes/EVs (carrying tumor proteins, RNA, DNA); tumor-educated platelets. Applications: early detection, monitoring treatment response/resistance, MRD assessment, clonal dynamics. ctDNA detection uses ddPCR or ultra-deep NGS (error-corrected sequencing)."
  },
  {
    id: 50,
    question: "Colorectal cancer (CRC) follows a well-characterized adenoma-carcinoma sequence. The initiating event in the majority of sporadic CRCs is:",
    options: ["MLH1 promoter methylation causing MSI", "Loss-of-function mutation of APC, causing β-catenin accumulation and Wnt pathway activation", "KRAS G12D mutation in normal colonocyte", "TP53 mutation in normal colon epithelium"],
    answer: 1,
    explanation: "The Vogelstein model of CRC progression: APC mutation (initiating event in >80% of sporadic CRC — normal mucosa → early adenoma) → KRAS mutation (early → intermediate adenoma) → SMAD4/TGFβRII mutation (intermediate → late adenoma) → TP53 mutation (late adenoma → carcinoma). APC loss activates Wnt/β-catenin. KRAS drives proliferation. TP53 loss enables invasiveness. The serrated pathway (BRAF V600E + MLH1 methylation → MSI-H CRC) is an alternative route."
  }
];
