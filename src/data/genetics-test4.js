const questions = [
  // ===== CANCER GENETICS (Q1–Q18) =====
  {
    id: 1,
    question: "Proto-oncogenes become oncogenes through:",
    options: ["Loss-of-function mutations", "Gain-of-function mutations, amplification, or chromosomal translocation", "Deletion of both copies", "Epigenetic silencing"],
    answer: 1,
    explanation: "Proto-oncogenes are normal genes that promote cell growth. They become oncogenes (cancer-causing) via gain-of-function mutations (point mutations making the protein constitutively active), gene amplification (overexpression), or chromosomal translocations creating fusion proteins. Only one mutated allele is needed (dominant)."
  },
  {
    id: 2,
    question: "The two-hit hypothesis (Knudson's hypothesis) applies to:",
    options: ["Oncogenes", "Tumor suppressor genes — both alleles must be inactivated for cancer to develop", "DNA repair genes only", "Mitochondrial genes"],
    answer: 1,
    explanation: "Knudson's two-hit hypothesis (1971) proposes that both copies of a tumor suppressor gene must be inactivated for cancer to develop. In hereditary cancers (e.g., familial retinoblastoma), the first hit is inherited (germline mutation in one allele) and the second hit is somatic. In sporadic cancers, both hits are somatic."
  },
  {
    id: 3,
    question: "RB1 (retinoblastoma protein) normally functions as:",
    options: ["A transcription activator for S-phase genes", "A cell cycle brake — hypophosphorylated Rb binds E2F and prevents S-phase entry", "A pro-apoptotic factor", "A DNA repair protein"],
    answer: 1,
    explanation: "Hypophosphorylated Rb binds and sequesters E2F transcription factors, preventing transcription of S-phase genes (cyclin E, DHFR). Mitogens activate CDK4/6-cyclin D, which phosphorylates Rb, releasing E2F and allowing S-phase entry. Loss of Rb (retinoblastoma, osteosarcoma) removes this critical brake on the cell cycle."
  },
  {
    id: 4,
    question: "TP53, the most commonly mutated gene in human cancers, encodes a protein that:",
    options: ["Promotes DNA replication", "Acts as a transcription factor that activates cell cycle arrest, DNA repair, and apoptosis in response to stress", "Stimulates angiogenesis", "Activates the Wnt signaling pathway"],
    answer: 1,
    explanation: "p53 (guardian of the genome) is activated by DNA damage, hypoxia, and oncogenic signals. It transcriptionally activates: p21 (CDK inhibitor, causing G1 arrest), GADD45 (DNA repair), and BAX/PUMA (apoptosis). TP53 is mutated in >50% of human cancers; Li-Fraumeni syndrome is caused by germline TP53 mutations."
  },
  {
    id: 5,
    question: "The hallmarks of cancer (Hanahan & Weinberg) include all of the following EXCEPT:",
    options: ["Sustaining proliferative signaling", "Evading growth suppressors", "Increased expression of tumor suppressor genes", "Activating invasion and metastasis"],
    answer: 2,
    explanation: "The hallmarks of cancer include: (1) sustaining proliferative signaling, (2) evading growth suppressors, (3) resisting cell death, (4) enabling replicative immortality, (5) inducing angiogenesis, (6) activating invasion/metastasis, and extended hallmarks including reprogramming energy metabolism and evading immune destruction. Increased tumor suppressor expression is the opposite of what occurs."
  },
  {
    id: 6,
    question: "KRAS mutations in cancer result in:",
    options: ["Constitutively inactive RAS protein", "Constitutively active RAS protein that continuously stimulates cell proliferation", "Overexpression of EGFR", "Silencing of MAP kinase pathway"],
    answer: 1,
    explanation: "KRAS (and other RAS family members) are GTPases that cycle between active (GTP-bound) and inactive (GDP-bound) states. Oncogenic mutations (most commonly G12D, G12V, G12C) impair GTPase activity, locking RAS in the GTP-bound active state. This constitutively activates downstream proliferation pathways (RAF-MEK-ERK, PI3K-AKT). KRAS is mutated in ~25% of all cancers."
  },
  {
    id: 7,
    question: "Microsatellite instability (MSI) in colorectal cancer is caused by:",
    options: ["BRCA1/2 mutations", "Defective mismatch repair (MMR) system, leading to accumulation of mutations in repetitive sequences", "TP53 mutations", "RAS activation"],
    answer: 1,
    explanation: "MSI results from defective MMR (mutations in MLH1, MSH2, MSH6, PMS2 or epigenetic silencing of MLH1). Without MMR, replication errors in microsatellite sequences accumulate. MSI-high (MSI-H) tumors have good prognosis and respond well to immune checkpoint inhibitors (pembrolizumab). MSI testing guides treatment decisions in colorectal, endometrial, and other cancers."
  },
  {
    id: 8,
    question: "HER2 (ERBB2) amplification in breast cancer is important because:",
    options: ["It predicts sensitivity to hormonal therapy (tamoxifen)", "It drives cancer growth and predicts response to anti-HER2 therapies (trastuzumab, pertuzumab)", "It indicates a very low-grade tumor", "It is associated with MSI-H status"],
    answer: 1,
    explanation: "HER2 (chromosome 17q12) is a receptor tyrosine kinase. Amplification/overexpression (~15–20% of breast cancers) drives aggressive tumor growth. HER2-positive cancers are treated with trastuzumab (Herceptin), pertuzumab, lapatinib, and T-DM1. HER2 testing by IHC and FISH is mandatory for breast cancer management."
  },
  {
    id: 9,
    question: "Epithelial-mesenchymal transition (EMT) in cancer promotes:",
    options: ["Cell cycle arrest", "Metastasis — cancer cells lose epithelial characteristics and gain migratory, invasive mesenchymal properties", "Apoptosis", "Antigen presentation"],
    answer: 1,
    explanation: "EMT is a process where cancer cells lose epithelial features (E-cadherin, tight junctions) and acquire mesenchymal characteristics (vimentin, fibronectin, motility). EMT is driven by transcription factors (Snail, Slug, Twist, ZEB1) and signaling pathways (TGF-β, Wnt, Notch). It enables local invasion, intravasation, and metastasis."
  },
  {
    id: 10,
    question: "Tumor angiogenesis is primarily driven by:",
    options: ["TNF-α secreted by T cells", "VEGF (Vascular Endothelial Growth Factor) secreted by tumor cells under hypoxia", "Insulin-like growth factor", "EGF receptor signaling"],
    answer: 1,
    explanation: "Tumor angiogenesis (formation of new blood vessels to supply the tumor) is primarily driven by VEGF-A secreted by tumor cells, macrophages, and stromal cells in response to hypoxia. HIF-1α (hypoxia-inducible factor) transcriptionally activates VEGF. Anti-VEGF therapy (bevacizumab) and anti-VEGFR therapy are used clinically."
  },
  {
    id: 11,
    question: "Immune checkpoint inhibitors (e.g., anti-PD-1, anti-CTLA-4 antibodies) work by:",
    options: ["Directly killing tumor cells via cytotoxicity", "Releasing the inhibitory brakes on T cells so the immune system can recognize and kill tumor cells", "Activating natural killer cells specifically", "Blocking tumor angiogenesis"],
    answer: 1,
    explanation: "Immune checkpoints (PD-1/PD-L1, CTLA-4/CD80) are inhibitory pathways that normally prevent autoimmunity but are exploited by tumors to evade T-cell killing. Checkpoint inhibitors (pembrolizumab, nivolumab for anti-PD-1; ipilimumab for anti-CTLA-4) block these interactions, reactivating tumor-specific T cells. They have transformed treatment of melanoma, lung cancer, and others."
  },
  {
    id: 12,
    question: "Liquid biopsy for cancer detection refers to:",
    options: ["Needle biopsy of tumor tissue under ultrasound guidance", "Analysis of circulating tumor DNA (ctDNA), circulating tumor cells (CTCs), or exosomes in blood", "Biopsy of liquid tumors (leukemias)", "Cytology of pleural effusion"],
    answer: 1,
    explanation: "Liquid biopsy analyzes tumor-derived material in blood or other body fluids: circulating tumor DNA (ctDNA — shed by dying tumor cells), circulating tumor cells (CTCs), exosomes, and cell-free RNA. Advantages: non-invasive, captures tumor heterogeneity, serial monitoring. Used for early detection, resistance mutation identification, and minimal residual disease monitoring."
  },
  {
    id: 13,
    question: "The Warburg effect in cancer refers to:",
    options: ["Preferential use of oxidative phosphorylation in cancer cells", "Cancer cells preferentially using aerobic glycolysis even in the presence of oxygen", "Increased glutamine uptake by cancer cells", "Mitochondrial dysfunction leading to cell death"],
    answer: 1,
    explanation: "The Warburg effect (aerobic glycolysis) describes cancer cells' preference for glycolysis → lactate even in the presence of oxygen (unlike normal cells which use oxidative phosphorylation under normoxia). This is metabolically inefficient but provides biosynthetic precursors (nucleotides, lipids, amino acids) and maintains redox balance for rapidly proliferating cells. Basis of FDG-PET imaging."
  },
  {
    id: 14,
    question: "Circular binary segmentation (CBS) in tumor genomics is used to:",
    options: ["Sequence circular bacterial chromosomes", "Identify boundaries of copy number alterations from SNP array or sequencing data", "Analyze circular RNA expression", "Segment the genome for methylation analysis"],
    answer: 1,
    explanation: "CBS is a statistical algorithm used to identify segments of constant copy number in tumor genomic data from SNP arrays or sequencing. It detects change points in the data to define boundaries of copy number alterations (gains/losses/amplifications). It is widely used in tumor copy number analysis tools (e.g., DNAcopy R package)."
  },
  {
    id: 15,
    question: "Chromothripsis is a catastrophic chromosomal event characterized by:",
    options: ["Gradual accumulation of chromosomal aberrations over years", "Massive, localized chromosomal shattering and reassembly in a single event, causing complex rearrangements", "Telomere shortening leading to chromosome fusions", "Whole genome duplication followed by chromosome loss"],
    answer: 1,
    explanation: "Chromothripsis (chromosome shattering) involves a single catastrophic event causing tens to hundreds of chromosomal rearrangements in one or a few chromosomes. It likely occurs when a chromosome is extruded into a micronucleus, which then ruptures. Chromothripsis is found in ~2–3% of all cancers and up to 25% of bone tumors, often activating oncogenes or inactivating tumor suppressors."
  },
  {
    id: 16,
    question: "Lynch syndrome (hereditary non-polyposis colorectal cancer, HNPCC) is caused by germline mutations in:",
    options: ["APC gene", "BRCA1/2 genes", "Mismatch repair genes (MLH1, MSH2, MSH6, PMS2)", "TP53 gene"],
    answer: 2,
    explanation: "Lynch syndrome is caused by autosomal dominant germline mutations in mismatch repair genes (most commonly MLH1 and MSH2, also MSH6 and PMS2). It is the most common hereditary colorectal cancer syndrome, with high lifetime risk of CRC (~80%), endometrial cancer (~40–60%), and other cancers. Tumors show microsatellite instability (MSI-H)."
  },
  {
    id: 17,
    question: "Imatinib (Gleevec) treats chronic myelogenous leukemia (CML) by:",
    options: ["Inhibiting the BCR-ABL fusion protein's tyrosine kinase activity", "Blocking VEGF receptor signaling", "Inhibiting proteasomal degradation", "Activating TP53 transcription"],
    answer: 0,
    explanation: "Imatinib is a small molecule tyrosine kinase inhibitor that competitively binds the ATP-binding site of the BCR-ABL fusion protein (product of the Philadelphia chromosome translocation). By blocking ABL kinase activity, it inhibits downstream proliferative signaling. Imatinib was the first rationally designed cancer drug targeting a specific molecular lesion."
  },
  {
    id: 18,
    question: "Tumor mutational burden (TMB) is defined as:",
    options: ["The number of driver mutations in a tumor", "The total number of somatic mutations per megabase of sequenced genome in a tumor", "The number of chromosomal rearrangements", "The burden of tumor in terms of total mass"],
    answer: 1,
    explanation: "TMB (mutations/Mb) quantifies the number of somatic mutations throughout the tumor genome. High TMB tumors generate more neoantigens, making them more recognizable by the immune system. TMB-high (≥10 mutations/Mb) is FDA-approved as a biomarker for pembrolizumab in solid tumors. TMB is measured by comprehensive genomic profiling (e.g., FoundationOne CDx)."
  },

  // ===== IMMUNOGENETICS & HLA (Q19–Q30) =====
  {
    id: 19,
    question: "The Major Histocompatibility Complex (MHC) in humans is called:",
    options: ["Immunoglobulin gene complex", "Human Leukocyte Antigen (HLA) complex, located on chromosome 6p21", "T cell receptor locus", "Complement gene cluster"],
    answer: 1,
    explanation: "The human MHC is called the HLA (Human Leukocyte Antigen) complex, located on chromosome 6p21.3. It encodes the highly polymorphic HLA molecules (class I: HLA-A, -B, -C; class II: HLA-DR, -DQ, -DP) that present peptides to T cells, playing central roles in adaptive immunity and transplantation immunology."
  },
  {
    id: 20,
    question: "HLA class I molecules present peptides to:",
    options: ["CD4+ T helper cells", "CD8+ cytotoxic T lymphocytes (CTLs)", "B cells", "Natural killer cells only"],
    answer: 1,
    explanation: "HLA class I molecules (HLA-A, -B, -C) present endogenous peptides (8–10 aa) to CD8+ cytotoxic T lymphocytes (CTLs). This allows CTLs to recognize and kill infected or cancerous cells. HLA class II molecules (HLA-DR, -DQ, -DP) present exogenous peptides (13–25 aa) to CD4+ T helper cells."
  },
  {
    id: 21,
    question: "V(D)J recombination in lymphocytes generates antibody and T cell receptor diversity by:",
    options: ["Somatic hypermutation of variable regions", "Random joining of variable (V), diversity (D), and joining (J) gene segments with additional nucleotide additions/deletions", "Alternative splicing of immunoglobulin pre-mRNA", "Class switch recombination"],
    answer: 1,
    explanation: "V(D)J recombination generates the primary antibody and TCR repertoire by randomly combining V, D, and J gene segments (combinatorial diversity) and adding/deleting nucleotides at junctions (junctional diversity, via TdT). RAG1 and RAG2 endonucleases initiate recombination. This creates theoretical diversity of >10^18 different antibodies."
  },
  {
    id: 22,
    question: "Somatic hypermutation occurs in:",
    options: ["All proliferating cells", "Germinal center B cells, in immunoglobulin variable regions, to generate higher-affinity antibodies (affinity maturation)", "T cells in the thymus", "Hematopoietic stem cells"],
    answer: 1,
    explanation: "After antigen stimulation, B cells enter germinal centers where AID (activation-induced cytidine deaminase) introduces point mutations at high frequency in the variable regions of immunoglobulin genes (somatic hypermutation). B cells with higher-affinity mutations are positively selected (affinity maturation), producing the high-affinity antibodies of the secondary immune response."
  },
  {
    id: 23,
    question: "HLA matching in transplantation is important to prevent:",
    options: ["Hyperacute rejection mediated by pre-formed antibodies only", "T cell-mediated allograft rejection — mismatched HLA alleles present alloantigens that trigger recipient T cell responses", "Infection by donor-derived pathogens", "Graft-versus-host disease in all transplants"],
    answer: 1,
    explanation: "HLA mismatch triggers allograft rejection because recipient T cells recognize donor HLA molecules as foreign (direct pathway) or recipient APCs present processed donor peptides (indirect pathway). Closer HLA matching (especially HLA-A, -B, -DR) improves long-term graft survival. HLA matching is most critical for hematopoietic stem cell transplants."
  },
  {
    id: 24,
    question: "The complement system includes proteins activated in cascade patterns. Which pathway is triggered by antibody-antigen complexes?",
    options: ["Lectin pathway", "Alternative pathway", "Classical pathway", "Intrinsic pathway"],
    answer: 2,
    explanation: "The classical complement pathway is activated when C1q binds antibody-antigen complexes (IgG or IgM). Alternative pathway is activated by pathogen surfaces (LPS, fungal walls) spontaneously. Lectin pathway is triggered by MBL (mannose-binding lectin) binding carbohydrates on pathogens. All three converge at C3 convertase."
  },
  {
    id: 25,
    question: "Autoimmune diseases are frequently associated with specific HLA alleles because:",
    options: ["HLA alleles affect blood group antigens", "Certain HLA variants bind self-peptides and present them to autoreactive T cells, breaking self-tolerance", "HLA genes control B cell numbers", "HLA alleles affect NK cell activity"],
    answer: 1,
    explanation: "HLA associations with autoimmune diseases reflect the role of HLA molecules in presenting self-peptides to T cells. For example: HLA-B27 is strongly associated with ankylosing spondylitis (>90% of patients); HLA-DR3 and DR4 with type 1 diabetes; HLA-DR4 with rheumatoid arthritis. Specific HLA alleles may present self-peptides more efficiently, activating autoreactive T cells."
  },
  {
    id: 26,
    question: "Antibody isotype switching (class switch recombination) changes:",
    options: ["The antigen-binding specificity (variable region) of the antibody", "The constant region (isotype: IgM→IgG, IgA, or IgE) while maintaining antigen specificity", "The light chain type (kappa vs lambda)", "The heavy chain variable region"],
    answer: 1,
    explanation: "Class switch recombination (CSR) changes the immunoglobulin heavy chain constant region (isotype: IgM→IgG, IgA, IgE) while preserving the variable region (antigen specificity). CSR is triggered by T cell help (CD40L-CD40 interaction) and cytokines (IL-4→IgE; TGF-β→IgA). AID (activation-induced cytidine deaminase) is essential for both CSR and somatic hypermutation."
  },
  {
    id: 27,
    question: "Primary immunodeficiency diseases are typically caused by:",
    options: ["HIV infection depleting CD4+ cells", "Genetic defects in components of the immune system", "Immunosuppressive drug therapy", "Malnutrition"],
    answer: 1,
    explanation: "Primary immunodeficiencies (PIDs) are caused by genetic defects affecting immune cell development or function. Examples: X-linked agammaglobulinemia (BTK mutation, no B cells), DiGeorge syndrome (22q11 deletion, T cell deficiency), SCID (combined B and T cell deficiency from RAG1/2, ADA, or γc chain mutations), chronic granulomatous disease (NADPH oxidase mutation)."
  },
  {
    id: 28,
    question: "Chimerism after hematopoietic stem cell transplantation (HSCT) refers to:",
    options: ["Rejection of the donor graft", "Coexistence of donor and recipient hematopoietic cells in the recipient", "Development of graft-versus-host disease", "Complete reconstitution with recipient cells"],
    answer: 1,
    explanation: "Post-HSCT chimerism is the presence of both donor and recipient hematopoietic cells. Complete chimerism (100% donor) is the goal. Mixed chimerism (both donor and recipient) may be acceptable in some settings. Chimerism is monitored by STR analysis or SNP typing to assess engraftment and early detect relapse."
  },
  {
    id: 29,
    question: "Natural killer (NK) cells recognize and kill target cells based on:",
    options: ["Recognizing specific MHC-peptide complexes via T cell receptors", "The missing-self hypothesis: absence of self-MHC class I on target cells activates NK killing", "Antibody-independent mechanisms only", "Cytokine receptor signaling exclusively"],
    answer: 1,
    explanation: "NK cells use inhibitory receptors (KIRs, NKG2A) that recognize self-MHC class I. Normal cells express self-MHC I and are protected from NK killing. Virus-infected or cancer cells downregulate MHC I (to evade CTLs), removing the inhibitory signal and allowing NK cells to kill them (missing-self recognition). NK cells also express activating receptors for stress-induced ligands."
  },
  {
    id: 30,
    question: "Recombinant monoclonal antibodies produced for therapy (e.g., trastuzumab, pembrolizumab) are predominantly of which isotype?",
    options: ["IgM", "IgA", "IgG", "IgE"],
    answer: 2,
    explanation: "Therapeutic monoclonal antibodies are almost exclusively IgG isotype (particularly IgG1 or IgG4). IgG has a long half-life (~21 days, due to FcRn recycling), can cross the placenta, and can mediate effector functions (ADCC, CDC for IgG1). IgG4 variants are used when effector function is undesirable (as in some checkpoint inhibitors)."
  },

  // ===== DEVELOPMENTAL GENETICS & GENE THERAPY (Q31–Q50) =====
  {
    id: 31,
    question: "HOX genes are highly conserved transcription factors that specify:",
    options: ["Cell cycle progression", "Anterior-posterior body axis patterning during development", "Neural crest cell migration", "Germ cell specification"],
    answer: 1,
    explanation: "HOX genes encode homeodomain transcription factors organized in chromosomal clusters (HOXA-D in humans). They specify positional identity along the anterior-posterior axis during embryonic development. The spatial and temporal order of HOX gene expression along the chromosome correlates with their expression along the body axis (colinearity). HOX genes are regulated by Polycomb and Trithorax complexes."
  },
  {
    id: 32,
    question: "Sonic Hedgehog (SHH) signaling is critical for:",
    options: ["B cell development", "Dorso-ventral neural tube patterning, limb development, and cerebellum formation", "T cell receptor rearrangement", "Antibody class switching"],
    answer: 1,
    explanation: "SHH (Sonic Hedgehog) is a secreted morphogen critical for: ventral neural tube patterning (floor plate induction, motor neuron specification), left-right body axis specification, limb development (zone of polarizing activity), and cerebellar granule cell proliferation. SHH signals through Patched (PTCH) and Smoothened (SMO). Aberrant SHH signaling drives basal cell carcinoma and medulloblastoma."
  },
  {
    id: 33,
    question: "Induced pluripotent stem cells (iPSCs) are generated by:",
    options: ["Somatic cell nuclear transfer into enucleated eggs", "Introducing defined reprogramming factors (Oct4, Sox2, Klf4, c-Myc — Yamanaka factors) into somatic cells", "Embryonic stem cell differentiation in vitro", "Viral infection of fibroblasts"],
    answer: 1,
    explanation: "Shinya Yamanaka (Nobel Prize 2012) demonstrated that introducing four transcription factors (OCT4, SOX2, KLF4, c-MYC) into somatic cells (fibroblasts) reprograms them to a pluripotent state. iPSCs are ethically less controversial than embryonic stem cells and can be patient-specific, enabling personalized disease modeling and potential cell therapy."
  },
  {
    id: 34,
    question: "Organoids are:",
    options: ["Two-dimensional cell monolayers used for drug testing", "Three-dimensional self-organizing miniature organs grown from stem cells in vitro, recapitulating organ architecture and function", "Animal organ transplants modified for human use", "Synthetic polymer scaffolds for tissue engineering"],
    answer: 1,
    explanation: "Organoids are 3D self-organizing structures derived from adult stem cells or pluripotent stem cells in vitro that recapitulate the architecture and function of specific organs (intestinal, brain, liver, kidney, pancreas organoids). They are valuable for studying development, disease modeling, drug screening, and personalized medicine."
  },
  {
    id: 35,
    question: "Gene therapy using AAV (adeno-associated virus) vectors is advantageous because:",
    options: ["AAV integrates efficiently into defined chromosomal loci", "AAV is non-pathogenic, induces minimal immune response, and efficiently transduces non-dividing cells for long-term expression", "AAV can carry very large transgenes (>10 kb)", "AAV replicates rapidly to amplify therapeutic gene expression"],
    answer: 1,
    explanation: "AAV vectors are preferred for in vivo gene therapy because: AAV is not associated with human disease, it is non-integrating (exists as episome, reducing insertional mutagenesis risk), it transduces multiple post-mitotic tissues (brain, muscle, liver, retina), and provides durable expression. Limitations: small cargo capacity (~4.7 kb), pre-existing immunity. FDA-approved therapies: Luxturna (RPE65), Zolgensma (SMN1)."
  },
  {
    id: 36,
    question: "Ex vivo gene therapy involves:",
    options: ["Direct injection of viral vectors into the patient's bloodstream", "Removing cells from the patient, modifying them genetically in the laboratory, and reinfusing them", "Using non-viral nanoparticle delivery directly to tissues", "Gene editing performed entirely inside the body"],
    answer: 1,
    explanation: "Ex vivo gene therapy: cells are harvested from the patient (HSCs, T cells, hepatocytes), transduced or edited in vitro under controlled conditions, quality-controlled, and reinfused. Advantages: controlled editing, selection of corrected cells, safety testing before infusion. Examples: CAR-T cell therapy, HSC gene therapy for ADA-SCID, sickle cell disease (betibeglogene, exa-cel)."
  },
  {
    id: 37,
    question: "CAR-T cell therapy (Chimeric Antigen Receptor T cells) works by:",
    options: ["Cloning T cell receptors from tumor-infiltrating lymphocytes", "Engineering a patient's T cells to express a synthetic receptor targeting a tumor antigen (e.g., CD19), directing T cells to kill cancer cells", "Infusing HLA-matched donor T cells into the patient", "Using natural killer cells engineered with antibody fragments"],
    answer: 1,
    explanation: "CAR-T therapy involves: (1) collecting patient T cells by apheresis, (2) engineering them to express a chimeric antigen receptor (single-chain antibody fragment + T cell signaling domains) targeting a tumor antigen, (3) expanding them in culture, and (4) reinfusing them. CAR-T cells directly recognize and kill antigen-expressing tumor cells in an MHC-independent manner. FDA-approved for B-cell ALL (CD19), lymphomas, and multiple myeloma (BCMA)."
  },
  {
    id: 38,
    question: "Antisense oligonucleotides (ASOs) therapeutic mechanism involves:",
    options: ["Gene editing via CRISPR", "Binding complementary sequences in mRNA, modifying splicing, or triggering RNA degradation by RNase H", "Delivering functional copies of defective genes", "Blocking protein-protein interactions"],
    answer: 1,
    explanation: "ASOs are short synthetic single-stranded oligonucleotides (15–25 nt) with chemical modifications for stability. They work by: (1) RNase H-mediated degradation of target RNA after ASO-RNA duplex formation, (2) steric blocking of translation or splicing (splice-switching ASOs to restore reading frame, e.g., nusinersen for SMA, eteplirsen for DMD). ASOs are used for neurodegenerative diseases, familial hypercholesterolemia, and rare diseases."
  },
  {
    id: 39,
    question: "mRNA therapeutics (e.g., mRNA vaccines) are advantageous over traditional vaccines because:",
    options: ["mRNA permanently integrates into the genome", "mRNA can be rapidly designed and produced once the target antigen sequence is known, without handling live pathogens", "mRNA vaccines require no cold chain", "mRNA is more immunogenic than protein antigens always"],
    answer: 1,
    explanation: "mRNA vaccines (COVID-19 mRNA vaccines: BNT162b2, mRNA-1273) are rapidly designed/manufactured, scalable, and safe (mRNA does not enter the nucleus or integrate). Modified nucleosides (pseudouridine, N1-methylpseudouridine) reduce innate immune activation and increase stability. Lipid nanoparticles (LNPs) deliver mRNA into cells. The cell's own ribosomes produce the antigen."
  },
  {
    id: 40,
    question: "Genome editing using prime editing (compared to base editing) can:",
    options: ["Only perform C→T and A→G conversions", "Introduce all 12 types of point mutations, small insertions, and small deletions without double-strand breaks", "Perform large chromosomal inversions", "Only work in dividing cells"],
    answer: 1,
    explanation: "Prime editing (Liu lab, 2019) uses a nickase Cas9 fused to an engineered reverse transcriptase, guided by a pegRNA (prime editing guide RNA) that encodes both the target site and the desired edit. It can install all 12 types of point mutations (all 4 transitions and 8 transversions), plus small insertions and deletions, without DSBs or donor templates."
  },
  {
    id: 41,
    question: "The Notch signaling pathway regulates:",
    options: ["DNA damage repair", "Cell fate decisions through direct cell-cell contact — activated when membrane-bound Notch receptor on one cell is cleaved after binding Delta/Jagged ligand on adjacent cell", "Cytokine production by macrophages", "Androgen receptor signaling"],
    answer: 1,
    explanation: "Notch signaling requires direct cell-cell contact: membrane-bound Delta-like or Jagged ligands on signal-sending cells activate Notch receptors on adjacent signal-receiving cells. Ligand binding triggers two proteolytic cleavages (ADAM metalloprotease, then γ-secretase), releasing NICD (Notch intracellular domain), which translocates to the nucleus and activates target genes (HES, HEY). Notch regulates differentiation in many tissues."
  },
  {
    id: 42,
    question: "Wnt/β-catenin signaling is important for which process?",
    options: ["Lipid metabolism", "Stem cell self-renewal, development, and is aberrantly activated in colorectal cancer via APC mutations", "Antiviral immune response", "Purine biosynthesis"],
    answer: 1,
    explanation: "Canonical Wnt signaling stabilizes β-catenin, which translocates to the nucleus and activates Wnt target genes (Myc, cyclin D1) via TCF/LEF. In the absence of Wnt, the destruction complex (APC, Axin, GSK3β, CK1) phosphorylates β-catenin for proteasomal degradation. APC mutations (colorectal cancer) constitutively activate Wnt signaling."
  },
  {
    id: 43,
    question: "Morphogens are signaling molecules that:",
    options: ["Are present at uniform concentrations throughout the embryo", "Form concentration gradients and specify different cell fates at different threshold concentrations", "Function only in adult tissue homeostasis", "Act exclusively through nuclear receptors"],
    answer: 1,
    explanation: "Morphogens are secreted signaling molecules that form concentration gradients across a tissue. Different cell fates are specified at different threshold concentrations of the morphogen. Examples: Bicoid (Drosophila anterior patterning), SHH (ventral neural tube), BMP4 (dorso-ventral patterning), Activin (mesoderm induction). The gradient provides positional information."
  },
  {
    id: 44,
    question: "In embryology, the term 'induction' refers to:",
    options: ["Spontaneous differentiation of a tissue without signals", "One tissue (the inducer/organizer) signaling to an adjacent tissue (the responding tissue) to change its developmental fate", "The self-organization of cells into tissues", "Gastrulation movements"],
    answer: 1,
    explanation: "Induction is a fundamental developmental mechanism where one group of cells (inducer or organizer) produces signals that influence the developmental fate of adjacent cells (responding tissue). The organizer (Spemann-Mangold, Nobel 1935) was the first discovered embryonic inducer. Examples: lens induction by the optic cup; neural induction by the notochord."
  },
  {
    id: 45,
    question: "Programmed cell death (apoptosis) in development is regulated by:",
    options: ["p53 exclusively", "Bcl-2 family proteins balancing pro-apoptotic (Bax, Bak) and anti-apoptotic (Bcl-2, Bcl-XL) members, plus caspase cascades", "Cyclin-CDK complexes only", "Growth factor receptor signaling only"],
    answer: 1,
    explanation: "Apoptosis is regulated by the Bcl-2 family: pro-apoptotic members (Bax, Bak, BH3-only proteins: Bim, PUMA, Noxa) promote cytochrome c release from mitochondria; anti-apoptotic members (Bcl-2, Bcl-XL, Mcl-1) prevent it. Cytochrome c activates the apoptosome (Apaf-1), activating caspase-9 → caspase-3. Apoptosis is essential for normal development (digit formation, neural pruning, immune selection)."
  },
  {
    id: 46,
    question: "Germ cells are specified in mice by:",
    options: ["Positional information from the primitive streak", "BMP signals from extra-embryonic ectoderm inducing PRDM14 and BLIMP1 expression in cells at the posterior epiblast", "Direct inheritance of P granules from the egg", "Wnt signaling from the organizer"],
    answer: 1,
    explanation: "In mice, primordial germ cells (PGCs) are specified by BMP4 and BMP8b signals from the extra-embryonic ectoderm, which induce transcription factors BLIMP1 (PRDM1) and PRDM14 in posterior epiblast cells at E6.25. This epigenetic reprogramming erases somatic epigenetic marks and resets the germline. (In contrast, Drosophila germ cells are determined maternally by P granule inheritance.)"
  },
  {
    id: 47,
    question: "Cre-lox technology is used in mouse genetics to:",
    options: ["Create random mutations throughout the genome", "Achieve conditional (tissue-specific or inducible) gene knockout by Cre recombinase excising DNA flanked by loxP sites", "Introduce point mutations at specific sites", "Perform whole-chromosome deletions"],
    answer: 1,
    explanation: "Cre-lox: DNA flanked by loxP sites (floxed) is excised by Cre recombinase. Tissue-specific Cre expression (driven by tissue-specific promoters, e.g., albumin-Cre for liver) allows conditional knockout in specific tissues. Inducible Cre (ERT2 fusion, activated by tamoxifen) permits temporal control. This avoids embryonic lethality of constitutive knockouts."
  },
  {
    id: 48,
    question: "Zygotic genome activation (ZGA) in mammals refers to:",
    options: ["The beginning of meiosis in the zygote", "The onset of transcription from the embryonic genome, replacing maternal mRNA control", "Fertilization of the egg by sperm", "Implantation of the blastocyst"],
    answer: 1,
    explanation: "ZGA (embryonic genome activation) is the developmental transition from reliance on maternally stored mRNAs/proteins to transcription from the embryonic (zygotic) genome. In humans, major ZGA occurs at the 4-8 cell stage; in mice at the 2-cell stage. ZGA involves extensive chromatin remodeling and is essential for embryonic development."
  },
  {
    id: 49,
    question: "Maternal-effect genes act by:",
    options: ["Being expressed in the embryo to pattern the mother's body", "The mother contributing gene products (mRNA, proteins) to the egg that pattern the early embryo before ZGA", "Being transmitted through the paternal germline only", "Controlling placental development"],
    answer: 1,
    explanation: "Maternal-effect genes are expressed in the mother (not the embryo) and deposit gene products (mRNA, proteins) into the egg during oogenesis. These maternal products control early development before zygotic genome activation. Examples: bicoid and nanos mRNAs in Drosophila (anterior-posterior patterning). A maternal-effect mutation produces abnormal offspring regardless of the offspring's genotype."
  },
  {
    id: 50,
    question: "The JASPAR database is a resource for:",
    options: ["Gene expression data from RNA-seq experiments", "Curated transcription factor binding motifs (position frequency matrices) for computational regulatory analysis", "Human disease-associated SNPs from GWAS", "Protein structure predictions"],
    answer: 1,
    explanation: "JASPAR is an open-access database of curated, non-redundant transcription factor binding profiles (position frequency matrices/PFMs) for eukaryotes. It is widely used for: predicting TF binding sites in genomic sequences, annotating regulatory elements, and interpreting the effects of regulatory variants. It includes matrices from experimental data (ChIP-seq, SELEX, PBM)."
  },
]

export default questions
