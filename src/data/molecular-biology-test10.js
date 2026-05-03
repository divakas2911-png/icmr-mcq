export const questions = [
  {
    id: 1,
    question: "Which second messenger is produced by adenylyl cyclase activation?",
    options: ["cGMP", "IP3", "cAMP", "DAG"],
    answer: 2,
    explanation: "Adenylyl cyclase converts ATP to cAMP (cyclic AMP), the classic second messenger that activates PKA. It is stimulated by Gs-coupled receptors and inhibited by Gi-coupled receptors."
  },
  {
    id: 2,
    question: "Which G-protein alpha subunit inhibits adenylyl cyclase?",
    options: ["Gsα", "Gqα", "Giα", "G12α"],
    answer: 2,
    explanation: "Giα (inhibitory Gα) inhibits adenylyl cyclase, reducing cAMP production. Gsα stimulates adenylyl cyclase, Gqα activates PLCβ, and G12α activates RhoGEFs."
  },
  {
    id: 3,
    question: "Phospholipase C-β cleaves PIP2 to produce which two second messengers?",
    options: ["cAMP and cGMP", "IP3 and DAG", "PA and LPA", "PIP3 and PIP"],
    answer: 1,
    explanation: "PLCβ (activated by Gq) cleaves phosphatidylinositol 4,5-bisphosphate (PIP2) into IP3 (inositol 1,4,5-trisphosphate) and DAG (diacylglycerol). IP3 releases Ca2+ from ER; DAG activates PKC."
  },
  {
    id: 4,
    question: "Which enzyme is the primary target of cAMP signaling?",
    options: ["PKC", "PKA", "CaMKII", "MAPK"],
    answer: 1,
    explanation: "cAMP directly activates Protein Kinase A (PKA) by binding the regulatory subunits (R), releasing catalytic subunits (C) that phosphorylate downstream substrates including CREB at Ser133."
  },
  {
    id: 5,
    question: "The EGFR (ErbB1) is activated by which mechanism upon EGF binding?",
    options: ["Dimerization and trans-autophosphorylation of cytoplasmic tyrosine residues", "Recruitment of Gα subunit and GDP-GTP exchange", "Association with JAK kinases and STAT phosphorylation", "Ligand-induced endocytosis and nuclear translocation"],
    answer: 0,
    explanation: "EGF binding promotes EGFR dimerization, activating intrinsic RTK activity and trans-autophosphorylation of cytoplasmic tyrosine residues, creating docking sites for SH2-domain proteins like GRB2, SHC, and PLCγ."
  },
  {
    id: 6,
    question: "Which adaptor protein links activated RTKs to the RAS-MAPK pathway?",
    options: ["GRB2-SOS", "SHC-CRK", "IRS-1-PI3K", "GAB1-SHP2"],
    answer: 0,
    explanation: "GRB2 (via SH2 domain) binds phosphotyrosines on activated RTKs and recruits SOS (a GEF) via its SH3 domains. SOS then catalyzes GDP→GTP exchange on RAS, initiating the MAPK cascade."
  },
  {
    id: 7,
    question: "In the canonical RAS-MAPK cascade, the order of kinases is:",
    options: ["MAPK → MEK → RAF", "RAF → MEK → ERK", "MEK → ERK → RAF", "ERK → RAF → MEK"],
    answer: 1,
    explanation: "RAS-GTP activates RAF (MAP3K), which phosphorylates MEK1/2 (MAP2K), which phosphorylates ERK1/2 (MAPK) on both Thr and Tyr residues. ERK translocates to the nucleus to phosphorylate transcription factors."
  },
  {
    id: 8,
    question: "PI3K phosphorylates PIP2 at which position to generate PIP3?",
    options: ["2-position", "3-position", "4-position", "5-position"],
    answer: 1,
    explanation: "Class I PI3K phosphorylates the 3-OH of the inositol ring of PIP2 (PI-4,5-P2) to generate PIP3 (PI-3,4,5-P3). PIP3 recruits PH domain-containing proteins like AKT and PDK1 to the membrane."
  },
  {
    id: 9,
    question: "PTEN is a tumor suppressor that acts by:",
    options: ["Phosphorylating AKT at Thr308", "Dephosphorylating PIP3 to PIP2", "Ubiquitinating RAS-GTP", "Activating mTORC2"],
    answer: 1,
    explanation: "PTEN (Phosphatase and Tensin homolog) is a lipid phosphatase that removes the 3-phosphate from PIP3, converting it back to PIP2. This opposes PI3K signaling and suppresses AKT activation. PTEN is the second most commonly mutated tumor suppressor after p53."
  },
  {
    id: 10,
    question: "AKT (PKB) is fully activated by phosphorylation at which two residues?",
    options: ["Ser473 (mTORC2) and Thr308 (PDK1)", "Thr308 (PDK1) and Ser9 (GSK3)", "Ser136 (PHLPP) and Thr450 (mTOR)", "Tyr315 (EGFR) and Ser473 (mTORC1)"],
    answer: 0,
    explanation: "Full AKT activation requires phosphorylation at Thr308 by PDK1 (which is recruited to PIP3) and at Ser473 by mTORC2. The hydrophobic motif phosphorylation (Ser473) stabilizes the active conformation."
  },
  {
    id: 11,
    question: "Which is the primary substrate of AKT that regulates cell survival?",
    options: ["mTOR", "GSK3β", "BAD", "FOXO1"],
    answer: 2,
    explanation: "AKT phosphorylates the pro-apoptotic protein BAD at Ser136, causing BAD to dissociate from BCL-XL and be sequestered by 14-3-3 proteins, thus promoting cell survival. AKT also phosphorylates GSK3, FOXO, TSC2, and MDM2."
  },
  {
    id: 12,
    question: "mTORC1 promotes protein synthesis primarily by phosphorylating:",
    options: ["4E-BP1 and S6K1", "eIF2α and eIF4A", "eEF2 and eEF1A", "eIF4G and PABP"],
    answer: 0,
    explanation: "mTORC1 phosphorylates 4E-BP1 (releasing eIF4E to promote cap-dependent translation) and S6K1 (which activates ribosome biogenesis and translation). mTORC1 integrates nutrient, energy, and growth factor signals."
  },
  {
    id: 13,
    question: "The JAK-STAT pathway is activated by which class of receptors?",
    options: ["RTKs", "GPCRs", "Cytokine receptors (lacking intrinsic kinase activity)", "Nuclear receptors"],
    answer: 2,
    explanation: "Cytokine receptors (e.g., for IFN, IL-6, EFO, LIF) lack intrinsic kinase activity but associate with JAK family tyrosine kinases (JAK1, JAK2, JAK3, TYK2). Cytokine binding causes JAK transphosphorylation and STAT recruitment and activation."
  },
  {
    id: 14,
    question: "Which STAT is critically activated by IFN-γ signaling?",
    options: ["STAT1", "STAT3", "STAT5", "STAT6"],
    answer: 0,
    explanation: "IFN-γ signals through JAK1/JAK2 and activates STAT1 homodimers (GAF — gamma-activated factor) that bind GAS elements in promoters of interferon-stimulated genes (ISGs). STAT3 is activated by IL-6; STAT5 by IL-2/EPO; STAT6 by IL-4/IL-13."
  },
  {
    id: 15,
    question: "SOCS proteins negatively regulate JAK-STAT signaling by:",
    options: ["Dephosphorylating STAT proteins", "Inhibiting JAK kinase activity and targeting receptors for degradation", "Activating SHP2 phosphatase", "Sequestering IFN in the extracellular space"],
    answer: 1,
    explanation: "SOCS (Suppressors of Cytokine Signaling) proteins are induced by STAT activation (feedback inhibition). They inhibit JAK kinase activity directly (via KIR domain) and recruit E3 ubiquitin ligases to degrade cytokine receptor complexes. SOCS1 and SOCS3 are most studied."
  },
  {
    id: 16,
    question: "In Wnt/β-catenin signaling, the 'destruction complex' is composed of which proteins?",
    options: ["APC, Axin, CK1, GSK3β", "DVL, FRAT, PP2A, LRP6", "TCF, LEF, β-TrCP, CUL1", "FZD, LRP5/6, ROR2, RSPO"],
    answer: 0,
    explanation: "The destruction complex contains APC (scaffold), Axin (scaffold), CK1α (phosphorylates β-catenin at Ser45), and GSK3β (phosphorylates β-catenin at Thr41/Ser37/Ser33). Phosphorylated β-catenin is recognized by β-TrCP (SCF E3 ligase) for ubiquitination and proteasomal degradation."
  },
  {
    id: 17,
    question: "Upon Wnt receptor activation, β-catenin accumulates and acts as a co-activator with which transcription factor family?",
    options: ["AP-1", "NF-κB", "TCF/LEF", "SMAD"],
    answer: 2,
    explanation: "In Wnt-ON state, β-catenin escapes destruction, translocates to the nucleus, and co-activates TCF/LEF transcription factors (displacing co-repressor Groucho) to drive expression of Wnt target genes like MYC, CCND1, and AXIN2."
  },
  {
    id: 18,
    question: "TGF-β signals through receptor serine/threonine kinases that phosphorylate which downstream effectors?",
    options: ["STAT proteins", "SMAD proteins", "ERK kinases", "AKT kinases"],
    answer: 1,
    explanation: "TGF-β binds TβRII, which recruits and transphosphorylates TβRI (ALK5). Activated TβRI phosphorylates R-SMADs (SMAD2/3). These associate with SMAD4 and translocate to the nucleus to regulate gene expression."
  },
  {
    id: 19,
    question: "Which protein negatively regulates TGF-β/SMAD signaling?",
    options: ["SMAD4", "SMAD7", "SMAD2", "SMAD1"],
    answer: 1,
    explanation: "SMAD7 is an inhibitory SMAD (I-SMAD) induced by TGF-β signaling as a negative feedback. SMAD7 competes with R-SMADs for TβRI binding, recruits SMURF ubiquitin ligases to degrade receptor complexes, and recruits phosphatases."
  },
  {
    id: 20,
    question: "The Notch signaling pathway is activated by which mechanism?",
    options: ["Ligand-induced dimerization and RTK activation", "Ligand-induced receptor cleavage releasing NICD for nuclear translocation", "GPCR-mediated cAMP production", "Proteoglycan-mediated FGF gradient sensing"],
    answer: 1,
    explanation: "Delta/Jagged ligands on adjacent cells bind Notch receptors, triggering two proteolytic cleavages: ADAM metalloprotease (S2 cleavage) and γ-secretase (S3 cleavage). The released Notch Intracellular Domain (NICD) translocates to the nucleus and displaces co-repressor from CSL (RBPJ) to activate target genes (HES/HEY)."
  },
  {
    id: 21,
    question: "Hedgehog signaling: in the absence of HH ligand, PTCH1 inhibits SMO by which mechanism?",
    options: ["Direct protein-protein interaction blocking SMO dimerization", "Preventing SMO trafficking into primary cilia", "Phosphorylating SMO to promote its degradation", "Sequestering SMO in the ER via retention signal"],
    answer: 1,
    explanation: "PTCH1 (Patched 1) inhibits SMO (Smoothened) not by direct binding but by preventing SMO localization to the primary cilium. Current models suggest PTCH1 regulates an oxysterol/cholesterol-like ligand that activates SMO. HH binding to PTCH1 relieves SMO inhibition, allowing SMO ciliary accumulation and GLI transcription factor activation."
  },
  {
    id: 22,
    question: "The Hippo pathway effectors YAP and TAZ are inhibited by phosphorylation, which leads to:",
    options: ["Nuclear translocation and TEAD co-activation", "14-3-3-mediated cytoplasmic sequestration and degradation", "HAT recruitment and chromatin remodeling", "HDAC deacetylation of histones"],
    answer: 1,
    explanation: "When Hippo is ON, MST1/2 phosphorylate LATS1/2, which phosphorylate YAP (Ser127) and TAZ (Ser89). Phospho-YAP/TAZ are sequestered in cytoplasm by 14-3-3 proteins and targeted for β-TrCP-mediated degradation. When Hippo is OFF, YAP/TAZ enter nucleus and co-activate TEAD transcription factors."
  },
  {
    id: 23,
    question: "Receptor tyrosine kinase signaling is terminated by which mechanism(s)?",
    options: ["Receptor ubiquitination by CBL and endocytosis/lysosomal degradation", "Spontaneous GDP/GTP exchange on Gα", "Nuclear receptor phosphorylation by CK2", "SOCS-mediated JAK inhibition"],
    answer: 0,
    explanation: "Activated RTKs are ubiquitinated by CBL E3 ligases (recognizing phosphotyrosines) and internalized via clathrin-mediated endocytosis. Ubiquitinated receptors are sorted by ESCRT complexes into multivesicular bodies (MVBs) and degraded in lysosomes. Receptor dephosphorylation by PTPs also terminates signaling."
  },
  {
    id: 24,
    question: "NF-κB is retained in the cytoplasm by which inhibitor?",
    options: ["SMAD7", "IκB", "SOCS3", "PTEN"],
    answer: 1,
    explanation: "IκB proteins (IκBα, IκBβ, IκBε) mask the nuclear localization sequences (NLS) of NF-κB subunits, retaining them in the cytoplasm. IKK complex phosphorylation of IκBα (Ser32/36) triggers SCF^β-TrCP ubiquitination and proteasomal degradation, freeing NF-κB to translocate to the nucleus."
  },
  {
    id: 25,
    question: "Which kinase complex phosphorylates IκBα to activate canonical NF-κB signaling?",
    options: ["IKKα-IKKβ-NEMO (IKKγ)", "TAK1-TAB1-TAB2", "RIP1-TRAF2-TRAF5", "MEKK3-MEK5-ERK5"],
    answer: 0,
    explanation: "The IKK complex (IκB Kinase) consists of two catalytic subunits (IKKα/IKK1 and IKKβ/IKK2) and a regulatory subunit NEMO (IKKγ). IKKβ is the primary kinase that phosphorylates IκBα at Ser32 and Ser36 in response to inflammatory signals like TNF and IL-1."
  },
  {
    id: 26,
    question: "Calcium/calmodulin-dependent protein kinase II (CaMKII) is activated by Ca2+-calmodulin and can autophosphorylate to become:",
    options: ["Inactivated permanently", "Ca2+-independent (constitutively active)", "Degraded by the proteasome", "Translocated to the nucleus only"],
    answer: 1,
    explanation: "CaMKII autophosphorylates at Thr286 (α subunit), trapping calmodulin and rendering the kinase constitutively active (Ca2+-independent). This molecular 'memory' mechanism is crucial for synaptic plasticity (LTP) and learning/memory."
  },
  {
    id: 27,
    question: "The cGMP-PKG pathway is activated by which signaling molecule?",
    options: ["Nitric oxide (NO)", "Prostacyclin", "Thromboxane A2", "Leukotriene B4"],
    answer: 0,
    explanation: "Nitric oxide (NO) synthesized by NOS (neuronal, endothelial, inducible) activates soluble guanylyl cyclase (sGC), producing cGMP from GTP. cGMP activates PKG (cGMP-dependent protein kinase), phosphodiesterases (PDEs), and cyclic nucleotide-gated ion channels."
  },
  {
    id: 28,
    question: "Which small GTPase regulates actin stress fiber formation via ROCK kinase?",
    options: ["RAC1", "CDC42", "RHOA", "ARF1"],
    answer: 2,
    explanation: "RHOA activates ROCK (Rho-associated coiled-coil kinase), which phosphorylates myosin light chain phosphatase (inhibiting it) and MLC directly, promoting actin-myosin contractility and stress fiber formation. RAC1 promotes lamellipodia (via ARP2/3); CDC42 promotes filopodia (via N-WASP/ARP2/3 and mDia2)."
  },
  {
    id: 29,
    question: "Integrin signaling activates which non-receptor tyrosine kinase at focal adhesions?",
    options: ["SRC", "FAK", "ABL", "ZAP70"],
    answer: 1,
    explanation: "FAK (Focal Adhesion Kinase) is activated by integrin clustering at focal adhesions. FAK autophosphorylates at Tyr397, creating a docking site for SRC. The FAK-SRC complex phosphorylates downstream targets including paxillin, vinculin, and p130CAS to regulate cell migration and survival."
  },
  {
    id: 30,
    question: "The insulin receptor signaling cascade activates GLUT4 translocation to the plasma membrane via which effector?",
    options: ["PKA-CREB axis", "PI3K-AKT-AS160 (TBC1D4) axis", "MAPK-RSK axis", "PLCγ-PKC axis"],
    answer: 1,
    explanation: "Insulin→IR tyrosine kinase→IRS1/IRS2→PI3K→PIP3→PDK1+mTORC2→AKT activation. AKT phosphorylates AS160 (TBC1D4), inactivating its RabGAP activity. This allows RAB10 to remain GTP-bound and promote GLUT4 vesicle exocytosis to the plasma membrane."
  },
  {
    id: 31,
    question: "Receptor desensitization via β-arrestin involves which enzymes?",
    options: ["GRKs (GPCR kinases) phosphorylate the active receptor, recruiting β-arrestin", "PKA phosphorylates Gs and uncouples it", "PDE hydrolyzes cAMP preventing further activation", "RGS proteins accelerate GTP hydrolysis on Gα"],
    answer: 0,
    explanation: "Homologous desensitization: GRKs (GRK2-7) phosphorylate serine/threonine residues in the C-terminus of active GPCRs. β-arrestins bind phosphorylated receptors, sterically blocking G-protein coupling and promoting clathrin-mediated internalization. β-arrestins also scaffold alternative signaling pathways (biased agonism)."
  },
  {
    id: 32,
    question: "RGS proteins regulate G-protein signaling by:",
    options: ["Blocking GDP exchange on Gα", "Accelerating intrinsic GTPase activity of Gα (GAP function)", "Stabilizing the Gαβγ heterotrimer", "Phosphorylating Gβγ subunits"],
    answer: 1,
    explanation: "RGS (Regulators of G-protein Signaling) proteins contain a RGS domain that acts as a GTPase Accelerating Protein (GAP) for Gα subunits, stabilizing the transition state and accelerating GTP hydrolysis by up to 1000-fold. This terminates G-protein signaling."
  },
  {
    id: 33,
    question: "Which second messenger activates protein kinase C (PKC) at the plasma membrane?",
    options: ["cAMP", "IP3", "DAG (together with Ca2+)", "cGMP"],
    answer: 2,
    explanation: "Classical PKC isoforms (α, β, γ) are activated by DAG (diacylglycerol) produced from PIP2 hydrolysis, together with Ca2+ and phosphatidylserine. DAG is mimicked by phorbol esters (PMA/TPA), which are tumor-promoting agents. Novel PKCs require DAG but not Ca2+."
  },
  {
    id: 34,
    question: "The AMPK (AMP-activated protein kinase) is activated by energy stress and functions to:",
    options: ["Promote anabolic biosynthesis and mTOR activation", "Inhibit catabolic pathways and activate fatty acid synthesis", "Restore energy balance by inhibiting anabolic and activating catabolic pathways", "Activate gluconeogenesis and glycogen synthesis"],
    answer: 2,
    explanation: "AMPK is activated when AMP/ADP:ATP ratio rises (energy stress). AMPK (phosphorylated by LKB1 at Thr172) phosphorylates: ACC (inhibiting fatty acid synthesis), HMGCR (inhibiting cholesterol synthesis), TSC2 (inhibiting mTOR/protein synthesis), and activates GLUT4/mitophagy. Net effect: catabolism ON, anabolism OFF."
  },
  {
    id: 35,
    question: "Metformin, the anti-diabetic drug, primarily acts by:",
    options: ["Directly activating AMPK via AMP mimicry", "Inhibiting mitochondrial complex I, raising AMP/ATP ratio and activating AMPK", "Binding to insulin receptor and mimicking insulin signaling", "Inhibiting glucagon receptor signaling"],
    answer: 1,
    explanation: "Metformin inhibits mitochondrial complex I (NADH dehydrogenase), reducing oxidative phosphorylation and increasing the AMP/ATP ratio, which activates AMPK indirectly. AMPK activation reduces hepatic gluconeogenesis (phosphorylation of CRTC2, reducing CREB-TORC2 activity) and improves insulin sensitivity."
  },
  {
    id: 36,
    question: "The stress-activated MAPK pathways include:",
    options: ["ERK1/2", "JNK and p38 MAPK", "ERK5 (BMK1)", "ERK3/ERK4"],
    answer: 1,
    explanation: "JNK (c-Jun N-terminal kinase, stress-activated protein kinase) and p38 MAPK are activated by cellular stresses including UV, osmotic stress, cytokines (TNF, IL-1), and inflammatory signals. They phosphorylate AP-1 component c-Jun and heat shock proteins, respectively. ERK1/2 is primarily activated by growth factors."
  },
  {
    id: 37,
    question: "Cross-talk between GPCR signaling and RTK signaling occurs through which mechanism?",
    options: ["GPCR directly phosphorylates RTKs", "Gβγ activates PI3K, and transactivation of RTKs by metalloprotease-released RTK ligands", "RTK phosphorylates GPCR kinases", "cAMP activates RAS directly"],
    answer: 1,
    explanation: "Transactivation: GPCR activation can activate matrix metalloproteases (ADAMs) that cleave pro-HB-EGF, which then binds and activates EGFR — a form of RTK transactivation. Also, Gβγ subunits directly activate PI3K and PLCβ. GPCR-activated PKC can phosphorylate and modulate RTKs."
  },
  {
    id: 38,
    question: "Which domain in SRC kinase is responsible for recognizing phosphotyrosine-containing peptides?",
    options: ["SH3 domain", "SH2 domain", "Kinase domain", "SH4 domain"],
    answer: 1,
    explanation: "SH2 (Src Homology 2) domains recognize phosphotyrosine-containing peptide motifs with specificity determined by flanking residues (+1 to +3 positions). SH3 domains recognize PXXP proline-rich sequences. SRC is kept inactive by intramolecular SH2 binding to pTyr527 (C-terminal regulatory tyrosine)."
  },
  {
    id: 39,
    question: "The GEF (Guanine nucleotide Exchange Factor) for RAS is:",
    options: ["RasGAP (p120-GAP)", "SOS1", "NF1", "SHC"],
    answer: 1,
    explanation: "SOS1 (Son of Sevenless 1) is the primary RAS-GEF that catalyzes GDP→GTP exchange on RAS. SOS is recruited to the membrane via GRB2. Conversely, RasGAP and NF1 (neurofibromin) accelerate GTP hydrolysis, inactivating RAS. NF1 mutations cause neurofibromatosis type 1."
  },
  {
    id: 40,
    question: "In T-cell activation, the proximal signaling event downstream of TCR engagement is:",
    options: ["Direct activation of PI3K by TCR cytoplasmic tail", "Phosphorylation of CD3 ITAMs by LCK, recruiting ZAP-70", "cAMP production by adenylyl cyclase", "Wnt/β-catenin activation through LRP5/6"],
    answer: 1,
    explanation: "TCR lacks intrinsic enzymatic activity. TCR engagement activates LCK (associated with CD4/CD8), which phosphorylates ITAMs (immunoreceptor tyrosine-based activation motifs) in CD3ζ and ε chains. ZAP-70 binds doubly-phosphorylated ITAMs via its SH2 domains and is activated by LCK, initiating downstream signaling through LAT and SLP-76."
  },
  {
    id: 41,
    question: "The BCR-ABL oncoprotein in CML constitutively activates which signaling pathway?",
    options: ["HH-SMO-GLI", "RAS-MAPK and PI3K-AKT", "Wnt-β-catenin", "TGF-β-SMAD"],
    answer: 1,
    explanation: "BCR-ABL (t(9;22) Philadelphia chromosome) is a constitutively active tyrosine kinase. It activates RAS-MAPK (proliferation), PI3K-AKT (survival), JAK-STAT5, and MYC pathways. Imatinib (Gleevec) targets the BCR-ABL kinase domain by competing with ATP."
  },
  {
    id: 42,
    question: "KRAS mutations in cancer are predominantly at which codon?",
    options: ["Codon 12 (Gly12)", "Codon 61 (Gln61)", "Codon 13 (Gly13)", "Codon 117 (Lys117)"],
    answer: 0,
    explanation: "The majority (~85%) of KRAS mutations in human cancers occur at codon 12 (Gly12), with common substitutions G12D, G12V, G12C. These mutations impair intrinsic GTPase activity and render KRAS insensitive to GAPs, locking it in the active GTP-bound state. G12C is targeted by AMG 510 (Sotorasib)."
  },
  {
    id: 43,
    question: "The PI3K p110α catalytic subunit is encoded by which gene frequently mutated in cancer?",
    options: ["PIK3R1", "PIK3CA", "PIK3CG", "PIK3CD"],
    answer: 1,
    explanation: "PIK3CA (encoding p110α) is one of the most frequently mutated oncogenes, particularly in breast, colorectal, and endometrial cancers. Common hotspot mutations (H1047R, E545K, E542K) constitutively activate PI3K, driving AKT-mTOR signaling. PIK3R1 encodes the p85α regulatory subunit."
  },
  {
    id: 44,
    question: "The second messenger IP3 binds to its receptor on the ER to release:",
    options: ["Na+", "Ca2+", "K+", "Mg2+"],
    answer: 1,
    explanation: "IP3 (inositol 1,4,5-trisphosphate) binds IP3 receptors (IP3R1, IP3R2, IP3R3), which are tetrameric Ca2+ channels on the ER membrane. IP3 binding opens the channel, releasing Ca2+ from the ER lumen into the cytosol. This Ca2+ activates CaM, CaMKII, PKC, and other effectors."
  },
  {
    id: 45,
    question: "Store-operated calcium entry (SOCE) is mediated by which proteins?",
    options: ["IP3R and RYR", "STIM1 and ORAI1", "SERCA and NCX", "Calbindin and calreticulin"],
    answer: 1,
    explanation: "When ER Ca2+ stores are depleted, STIM1 (ER Ca2+ sensor) oligomerizes and translocates to ER-PM junctions where it activates ORAI1 (plasma membrane Ca2+ channel), causing CRAC (calcium release-activated calcium) current. SOCE replenishes ER Ca2+ and sustains cytosolic Ca2+ signaling."
  },
  {
    id: 46,
    question: "Calcineurin (PP2B) is a calcium-calmodulin-activated phosphatase that dephosphorylates which substrate?",
    options: ["IκBα", "NFAT (nuclear factor of activated T-cells)", "SMAD2/3", "STAT3"],
    answer: 1,
    explanation: "Calcineurin is activated by Ca2+-CaM and dephosphorylates NFAT family transcription factors, exposing their NLS and allowing nuclear translocation. Nuclear NFAT activates genes for T-cell activation (IL-2, cytokines). Calcineurin is inhibited by cyclosporin A (via cyclophilin A) and FK506 (via FKBP12) — immunosuppressants."
  },
  {
    id: 47,
    question: "Tyrosine phosphatase SHP2 (encoded by PTPN11) in RAS-MAPK signaling acts as:",
    options: ["A negative regulator by dephosphorylating active EGFR", "A positive regulator by dephosphorylating Sprouty and other negative regulators", "A negative regulator by inactivating RAS-GTP", "A positive regulator by phosphorylating SOS at activating tyrosines"],
    answer: 1,
    explanation: "SHP2 has a paradoxical positive role in RAS-MAPK signaling. It dephosphorylates negative regulators like Sprouty proteins, CBL (reducing RTK degradation), and GRB2-associated GAPs. Gain-of-function PTPN11 mutations cause Noonan syndrome and juvenile myelomonocytic leukemia (JMML)."
  },
  {
    id: 48,
    question: "BRAF V600E, the most common mutation in melanoma, constitutively activates which pathway?",
    options: ["PI3K-AKT", "JAK-STAT", "RAS-MEK-ERK", "Wnt-β-catenin"],
    answer: 2,
    explanation: "BRAF V600E mutation (valine to glutamic acid at position 600) creates a negatively charged residue that mimics phosphorylation of the activation loop, constitutively activating BRAF kinase activity ~500-fold. This drives continuous MEK-ERK signaling independent of upstream RAS. Targeted by vemurafenib and dabrafenib."
  },
  {
    id: 49,
    question: "The cAMP response element-binding protein (CREB) is phosphorylated at Ser133 by which kinase?",
    options: ["ERK1/2", "PKA (catalytic subunit)", "AKT", "PKC"],
    answer: 1,
    explanation: "PKA catalytic subunit (translocated to nucleus upon cAMP elevation) phosphorylates CREB at Ser133. Phospho-CREB recruits CBP/p300 co-activators, which possess HAT activity, to activate CRE (cAMP response element)-containing genes. CREB is also phosphorylated by RSK, CaMKIV, and MAPKAPK2."
  },
  {
    id: 50,
    question: "Which concept describes different ligands activating the same receptor to preferentially signal through distinct pathways (G-protein vs. β-arrestin)?",
    options: ["Receptor cooperativity", "Biased agonism (functional selectivity)", "Receptor reserve", "Silent antagonism"],
    answer: 1,
    explanation: "Biased agonism (functional selectivity) describes the ability of different ligands (biased agonists) to stabilize distinct receptor conformations that preferentially engage G-proteins or β-arrestins. This concept is therapeutically important — β-arrestin-biased opioids (like TRV130) may provide analgesia with fewer G-protein-mediated side effects (respiratory depression, constipation)."
  }
];

export default questions
