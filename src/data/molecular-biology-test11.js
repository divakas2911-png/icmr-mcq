export const questions = [
  {
    id: 1,
    question: "Which Baltimore classification includes HIV and other retroviruses?",
    options: ["Class I (dsDNA)", "Class IV (ssRNA+)", "Class VI (ssRNA-RT)", "Class VII (dsDNA-RT)"],
    answer: 2,
    explanation: "Baltimore Class VI includes RNA-reverse transcribing viruses (retroviruses, including HIV-1/HIV-2, HTLV). They have ssRNA (+) genomes that are reverse transcribed into dsDNA before integration. Class VII (e.g., HBV) uses dsDNA-RT. Class IV is positive-sense ssRNA (e.g., poliovirus, SARS-CoV-2)."
  },
  {
    id: 2,
    question: "The HIV-1 reverse transcriptase (RT) has both which enzymatic activities?",
    options: ["RNA-dependent RNA polymerase and helicase", "RNA-dependent DNA polymerase and RNase H", "DNA-dependent DNA polymerase and endonuclease", "Integrase and protease"],
    answer: 1,
    explanation: "HIV-1 RT is a heterodimer (p66/p51) with two activities: (1) RNA-dependent DNA polymerase (reverse transcribes genomic RNA into DNA) and (2) RNase H (degrades the RNA strand of RNA:DNA hybrids). RT also has DNA-dependent DNA polymerase activity to synthesize the second DNA strand."
  },
  {
    id: 3,
    question: "HIV integration into the host genome requires which viral enzyme?",
    options: ["Protease", "Reverse transcriptase", "Integrase", "Capsid protein p24"],
    answer: 2,
    explanation: "HIV integrase (IN) catalyzes two reactions: (1) 3' processing — removes two nucleotides from each 3' end of viral dsDNA in the cytoplasm, and (2) strand transfer — inserts processed viral DNA into host chromosomal DNA. This creates the provirus. Integrase strand transfer inhibitors (INSTIs) like raltegravir block strand transfer."
  },
  {
    id: 4,
    question: "HIV-1 uses which host cell receptor and co-receptor for entry into CD4+ T cells?",
    options: ["CD4 + CCR5 or CXCR4", "CD8 + CCR2", "MHC-II + CXCR4", "CD3 + CCR5"],
    answer: 0,
    explanation: "HIV-1 gp120 binds CD4 (primary receptor), causing conformational changes that expose the V3 loop for co-receptor binding (CCR5 for R5-tropic strains, CXCR4 for X4-tropic strains). gp41 then mediates membrane fusion. Individuals homozygous for CCR5-Δ32 deletion are highly resistant to HIV infection."
  },
  {
    id: 5,
    question: "The HIV-1 accessory protein VIF counteracts which host restriction factor?",
    options: ["TRIM5α", "APOBEC3G", "Tetherin (BST-2)", "SAMHD1"],
    answer: 1,
    explanation: "APOBEC3G is a cytidine deaminase that, in the absence of VIF, is packaged into HIV virions and causes G-to-A hypermutations in the viral genome. VIF (virion infectivity factor) recruits an E3 ubiquitin ligase (CBCB5-CRL2) to polyubiquitinate and degrade APOBEC3G, enabling productive infection."
  },
  {
    id: 6,
    question: "Which influenza protein is responsible for receptor binding and determines host tropism?",
    options: ["Neuraminidase (NA)", "Hemagglutinin (HA)", "Matrix protein (M1)", "PB2 cap-binding protein"],
    answer: 1,
    explanation: "Hemagglutinin (HA) binds sialic acid receptors on host cells. Human influenza viruses prefer α-2,6-linked sialic acids (found in upper respiratory tract), while avian strains prefer α-2,3-linked sialic acids (found in lower respiratory tract and avian gut). HA is also the major target for neutralizing antibodies."
  },
  {
    id: 7,
    question: "Influenza neuraminidase (NA) function and its inhibitors:",
    options: ["NA binds sialic acid to allow entry; inhibited by amantadine", "NA cleaves sialic acid to release new virions; inhibited by oseltamivir/zanamivir", "NA catalyzes RNA replication; inhibited by ribavirin", "NA prevents endosome acidification; inhibited by chloroquine"],
    answer: 1,
    explanation: "NA (neuraminidase/sialidase) cleaves sialic acid bonds on host cell surfaces and newly formed virions, enabling release and spread of progeny virions. Without NA, virions aggregate. Oseltamivir (Tamiflu) and zanamivir (Relenza) are NA inhibitors that prevent virion release. Amantadine blocks M2 ion channel."
  },
  {
    id: 8,
    question: "Antigenic shift in influenza A viruses results from:",
    options: ["Accumulation of point mutations in HA and NA genes", "Reassortment of gene segments when two strains co-infect the same cell", "Recombination between influenza A and B strains", "Integration of influenza genome into host chromosomes"],
    answer: 1,
    explanation: "Antigenic shift is reassortment of influenza A's 8 segmented RNA genome segments when two different strains co-infect the same cell. This creates entirely new HA/NA combinations against which there is no pre-existing immunity — leading to pandemic potential (1918, 1957, 1968, 2009 pandemics). Antigenic drift = gradual mutations."
  },
  {
    id: 9,
    question: "The SARS-CoV-2 spike protein binds to which human receptor for cell entry?",
    options: ["CD26 (DPP4)", "ACE2", "CD13 (aminopeptidase N)", "TMPRSS11D"],
    answer: 1,
    explanation: "SARS-CoV-2 spike (S) protein binds ACE2 (angiotensin-converting enzyme 2) via its receptor-binding domain (RBD). TMPRSS2 (a host serine protease) primes the spike, enabling membrane fusion. ACE2 is highly expressed in lung type II pneumocytes, enterocytes, and cardiac/renal tissues."
  },
  {
    id: 10,
    question: "The SARS-CoV-2 genome organization (5' to 3') includes which major elements?",
    options: ["5'cap-ORF1a/1b (pp1ab replicase)-Structural genes (S-E-M-N)-3'polyA", "5'IRES-gag-pol-env-3'LTR", "5'cap-NS1-NS2-PA-PB1-PB2-HA-NA-NP-M-NS-3'", "5'VPg-P1-P2-P3-3'OH"],
    answer: 0,
    explanation: "SARS-CoV-2 (and other betacoronaviruses) have a ~30kb positive-sense ssRNA genome: 5'cap-UTR-ORF1a/1b (encodes 16 nonstructural proteins via ribosomal frameshifting)-Structural genes in order S(spike)-E(envelope)-M(membrane)-N(nucleocapsid)-3'UTR-polyA. Subgenomic RNAs encode structural and accessory proteins."
  },
  {
    id: 11,
    question: "Which mechanism do coronaviruses use to express the RNA-dependent RNA polymerase (RdRp)?",
    options: ["Independent cap-snatching from host mRNAs", "-1 programmed ribosomal frameshifting at the ORF1a/1b junction", "IRES-mediated internal ribosome entry", "Splicing of a precursor mRNA"],
    answer: 1,
    explanation: "Coronavirus RdRp (nsp12) is encoded in ORF1b, which is expressed by -1 programmed ribosomal frameshifting at a slip site near the ORF1a/1b junction (~25-30% of ribosomes slip). This produces the longer pp1ab (790 aa) polyprotein, which is cleaved by papain-like protease (PLpro) and 3C-like protease (3CLpro/Mpro) to release the 16 nsp proteins."
  },
  {
    id: 12,
    question: "Hepatitis B virus (HBV) has a unique replication strategy involving:",
    options: ["Integration into host genome as obligate step, then transcription", "Reverse transcription of pre-genomic RNA (pgRNA) within the capsid", "Two-step integration similar to retroviruses", "Direct translation of relaxed circular DNA (rcDNA)"],
    answer: 1,
    explanation: "HBV replication: cccDNA (covalently closed circular DNA) in nucleus → pregenomic RNA (pgRNA) and subgenomic mRNAs → pgRNA packaged with viral polymerase (RT+RNase H) → reverse transcription of pgRNA → DNA(-)strand synthesis → RNase H degrades pgRNA → DNA(+)strand synthesis → relaxed circular DNA (rcDNA) → recycled to cccDNA or enveloped and secreted."
  },
  {
    id: 13,
    question: "Which herpesvirus protein establishes latency in neurons?",
    options: ["UL30 (DNA polymerase)", "LAT (Latency-Associated Transcripts)", "ICP4 (immediate early transactivator)", "VP16 (virion protein 16)"],
    answer: 1,
    explanation: "During HSV-1 latency in sensory neurons, the LAT (Latency-Associated Transcripts) are the major viral RNAs expressed from the latency-associated promoter (LAP). LATs are non-coding RNAs (including miRNAs) that inhibit lytic gene expression and promote neuronal survival. Reactivation restores VP16, ICP0, ICP4 expression and lytic replication."
  },
  {
    id: 14,
    question: "The Epstein-Barr Virus (EBV) protein responsible for immortalizing B cells in latency III is:",
    options: ["EBNA1", "LMP1 (latent membrane protein 1)", "EBER RNAs", "EBNA3C"],
    answer: 1,
    explanation: "LMP1 is the key EBV oncoprotein that functions as a constitutively active CD40 receptor mimic. It activates NF-κB, JAK-STAT, PI3K, and MAPK pathways without ligand, driving B-cell proliferation and survival. LMP1's C-terminal domain contains TRAFs (tumor necrosis factor receptor-associated factors). EBNA1 is required for episome maintenance."
  },
  {
    id: 15,
    question: "Type I interferons (IFN-α/β) are induced by viral infection through which sensor pathway?",
    options: ["TLR4-MyD88-TRIF", "cGAS-STING (cytosolic DNA) and RIG-I/MDA5-MAVS (cytosolic RNA)", "NOD2-RIPK2", "NLRP3-ASC-caspase-1"],
    answer: 1,
    explanation: "Cytosolic DNA sensing: cGAS detects double-stranded DNA, produces cGAMP which activates STING→TBK1→IRF3→IFN-β. Cytosolic RNA sensing: RIG-I detects short dsRNA/5'ppp RNA; MDA5 detects long dsRNA. Both signal through MAVS on mitochondria→TBK1/IKKε→IRF3/IRF7 phosphorylation→IFN-α/β production."
  },
  {
    id: 16,
    question: "Viral proteases in picornaviruses (e.g., poliovirus 2A and 3C proteases) cleave host proteins including:",
    options: ["Histone H3 to disrupt chromatin", "eIF4G (disrupting cap-dependent translation) and promoting IRES-mediated translation", "p53 to prevent apoptosis", "MAVS to prevent interferon induction"],
    answer: 1,
    explanation: "Poliovirus 2A protease cleaves eIF4G (the scaffold of eIF4F cap-dependent translation initiation complex), shutting off host cap-dependent translation. Poliovirus uses IRES-mediated (cap-independent) translation. Many picornaviruses also cleave MAVS (MDA5/RIG-I adaptor) via 3C protease to block IFN production."
  },
  {
    id: 17,
    question: "The HIV-1 Tat protein functions by:",
    options: ["Directly binding LTR DNA and recruiting RNA Pol II", "Binding TAR RNA element and recruiting P-TEFb (CDK9-CycT1) to stimulate elongation", "Cleaving host mRNA to generate noncapped fragments", "Inhibiting proteasomal degradation of viral proteins"],
    answer: 1,
    explanation: "HIV-1 Tat binds the TAR (Trans-Activation Response) RNA element at the 5' end of nascent HIV transcripts and recruits P-TEFb (CDK9-CyclinT1). CDK9 phosphorylates RNA Pol II CTD at Ser2 and DSIF/NELF, converting paused RNA Pol II to productive elongation, dramatically increasing HIV genome transcription."
  },
  {
    id: 18,
    question: "Bacterial phage lambda undergoes lysogeny vs lytic decision based on:",
    options: ["Host ADP-to-ATP ratio", "The ratio of CI (λ repressor) to Cro protein activity at OR operators", "Availability of RecA for phage replication", "Concentration of DnaA protein in host"],
    answer: 1,
    explanation: "Lambda phage fate depends on CI (lysogeny repressor) vs Cro competition at OR1/OR2/OR3 operators. CI (cooperatively bound at OR1/OR2) represses lytic genes and activates its own transcription (from PRM). Cro (at OR3 first) reduces CI synthesis. High MOI, slow host growth, cII/cIII activity favor lysogeny (CI>Cro). Host RecA activation (SOS) cleaves CI autoproteolytically, inducing lytic cycle."
  },
  {
    id: 19,
    question: "CRISPR-Cas9 immunity in bacteria against phage works by which mechanism?",
    options: ["Producing restriction enzymes that cleave phage DNA", "Spacer acquisition from phage DNA into CRISPR array, then Cas9 guided by crRNA cleaves invading phage DNA", "Methylation of host DNA to prevent phage DNA injection", "Toxin-antitoxin systems abortively killing infected cells"],
    answer: 1,
    explanation: "CRISPR-Cas9 adaptive immunity: (1) Adaptation/acquisition — Cas1-Cas2 complex inserts short spacers from phage DNA into CRISPR array. (2) Expression — CRISPR array transcribed into pre-crRNA, processed into crRNA. (3) Interference — Cas9 loaded with crRNA:tracrRNA scans for complementary sequences (protospacer) adjacent to PAM (NGG), cleaving phage dsDNA."
  },
  {
    id: 20,
    question: "Parvovirus B19 requires which characteristic for replication?",
    options: ["Helper virus co-infection", "Host cells in S phase (actively dividing, replication-competent cells)", "Reverse transcriptase activity", "Nuclear membrane breakdown"],
    answer: 1,
    explanation: "Parvovirus B19 (ssDNA virus) lacks DNA polymerase and depends entirely on host DNA replication machinery. It preferentially infects erythroid progenitor cells in S phase (when cellular DNA polymerases are active). Infection causes erythema infectiosum (fifth disease) and aplastic crises in hemolytic anemia patients."
  },
  {
    id: 21,
    question: "The Hepatitis C virus (HCV) genome is a positive-sense ssRNA that encodes a single polyprotein cleaved by:",
    options: ["Host signal peptidase and viral NS3/4A serine protease", "HIV-like aspartyl protease", "3C-like cysteine protease only", "Cathepsin B/D in lysosomes"],
    answer: 0,
    explanation: "HCV encodes a single ~3,010 amino acid polyprotein: structural proteins (C-E1-E2-p7) cleaved by host signal peptidase and NS2 metalloprotease; non-structural proteins (NS3-NS4A-NS4B-NS5A-NS5B) cleaved by NS3/4A serine protease (a key drug target: boceprevir, telaprevir, simeprevir). NS5B is the RNA-dependent RNA polymerase."
  },
  {
    id: 22,
    question: "Which virus uses a segmented (-) ssRNA genome?",
    options: ["Poliovirus", "Influenza A virus", "HIV-1", "HPV-16"],
    answer: 1,
    explanation: "Influenza A virus has 8 segments of negative-sense single-stranded RNA, each encoding one or two proteins. The segmented genome enables genetic reassortment (antigenic shift). Other segmented (-) ssRNA viruses include bunyaviruses (3 segments) and arenaviruses (2 segments)."
  },
  {
    id: 23,
    question: "The mechanism by which SARS-CoV-2 NSP1 suppresses host gene expression is:",
    options: ["Degrading host mRNAs via RNase activity in the nucleus", "Binding 40S ribosome and blocking host mRNA access/translation", "Sequestering cap-binding eIF4E in the cytoplasm", "Phosphorylating eIF2α to activate integrated stress response"],
    answer: 1,
    explanation: "SARS-CoV-2 NSP1 inserts its C-terminal domain into the mRNA channel of the 40S ribosomal subunit, physically blocking translation of host mRNAs. Viral mRNAs with a specific 5'UTR leader sequence escape this inhibition, giving the virus a competitive advantage over host gene expression."
  },
  {
    id: 24,
    question: "Rabies virus (a rhabdovirus) is classified as a Baltimore Class V virus. Its genome is:",
    options: ["dsDNA that is reverse transcribed", "Positive-sense ssRNA translated directly as mRNA", "Negative-sense ssRNA that requires viral RNA-dependent RNA polymerase to make mRNA", "Double-stranded RNA"],
    answer: 2,
    explanation: "Class V viruses have negative-sense ssRNA genomes that cannot be directly translated. The viral RNA-dependent RNA polymerase (L protein/RdRp) packaged in the virion first transcribes the (-) genome into (+) mRNAs (primary transcription). The L protein of rhabdoviruses also caps and polyadenylates mRNAs co-transcriptionally."
  },
  {
    id: 25,
    question: "Virus-like particles (VLPs) used as vaccines lack which component?",
    options: ["Envelope proteins", "Viral genome (nucleic acid)", "Capsid proteins", "Lipid bilayer"],
    answer: 1,
    explanation: "VLPs are self-assembling structures formed by viral structural proteins (capsid and/or envelope) but lacking the viral genome. They are non-infectious, non-replicating, and highly immunogenic (mimicking native virus morphology). Examples: HBV surface antigen (HBsAg) VLPs (recombivax), HPV L1 VLPs (Gardasil), HEV VLPs (Hecolin)."
  },
  {
    id: 26,
    question: "HIV-1 encodes how many genes and what are the major structural genes?",
    options: ["3 genes: gag, pol, env", "9 genes: gag, pol, env + 6 regulatory/accessory (tat, rev, vif, vpr, vpu, nef)", "6 genes: gag, pol, env, tat, rev, nef", "12 genes including matrix, capsid, and nucleocapsid separately"],
    answer: 1,
    explanation: "HIV-1 encodes 9 genes. The 3 structural: gag (matrix MA p17, capsid CA p24, nucleocapsid NC p7, p6), pol (protease PR, reverse transcriptase RT, integrase IN), env (gp120/gp41). Regulatory: tat (transcriptional activator), rev (RNA export). Accessory: vif, vpr, vpu, nef."
  },
  {
    id: 27,
    question: "HIV Rev protein is required for:",
    options: ["Transcription from the LTR promoter", "Export of unspliced and partially spliced HIV mRNAs from nucleus to cytoplasm", "Integration of proviral DNA", "Protease-mediated Gag/Pol polyprotein processing"],
    answer: 1,
    explanation: "Rev (Regulator of Expression of Virion proteins) binds the RRE (Rev Response Element) in unspliced/partially spliced HIV mRNAs and recruits XPO1 (CRM1/exportin) to export these large RNAs from the nucleus. This is essential because unspliced mRNA (encoding Gag/Pol) and singly-spliced mRNA (encoding env, vif, vpr, vpu) would otherwise be retained in the nucleus."
  },
  {
    id: 28,
    question: "The mechanism of action of nucleoside reverse transcriptase inhibitors (NRTIs) like zidovudine (AZT) is:",
    options: ["Blocking HIV protease-mediated Gag cleavage", "Acting as chain terminators — lacking 3'-OH, they terminate DNA synthesis after incorporation by RT", "Blocking HIV integrase strand transfer", "Preventing gp120-CD4 binding"],
    answer: 1,
    explanation: "NRTIs are nucleoside analogues that lack a 3'-OH group. After phosphorylation to the triphosphate form by host kinases, they are incorporated by HIV RT into the growing DNA chain. Since there is no 3'-OH, the next nucleotide cannot be added — chain termination. AZT (3'-azido), lamivudine (3TC), emtricitabine (FTC), tenofovir (TDF) are examples."
  },
  {
    id: 29,
    question: "The prion protein (PrPSc) causes disease by which mechanism?",
    options: ["Encoding a viral genome that hijacks cellular machinery", "Inducing misfolding of normal PrPC into infectious β-sheet-rich PrPSc aggregates (protein-only hypothesis)", "Triggering immune-mediated neuronal destruction", "Producing toxic RNA species from mitochondrial DNA"],
    answer: 1,
    explanation: "Prion diseases (CJD, scrapie, BSE) are caused by PrPSc — a misfolded conformer of the normal GPI-anchored PrPC protein. PrPSc acts as a template to convert PrPC into PrPSc (exponential seeded aggregation). PrPSc is rich in β-sheet structure (vs α-helical PrPC) and resistant to protease and denaturing agents. The 'protein-only hypothesis' (Prusiner) won the 1997 Nobel Prize."
  },
  {
    id: 30,
    question: "Which oncogenic viruses use E6 and E7 proteins to inactivate tumor suppressors?",
    options: ["HIV-1 (using Vpr and Vpx)", "High-risk HPV types (16, 18) — E6 degrades p53; E7 inactivates RB1", "EBV (using LMP1 and EBNA2)", "HBV (using HBx protein)"],
    answer: 1,
    explanation: "High-risk HPV E6 oncoprotein forms a complex with E6AP (ubiquitin E3 ligase) that targets p53 for proteasomal degradation. HPV E7 binds and inactivates RB1 (retinoblastoma protein), releasing E2F and driving cell cycle entry. Together, E6+E7 immortalize cells, explaining HPV's role in cervical, oropharyngeal, anal, and other cancers."
  },
  {
    id: 31,
    question: "The measles virus uses which cellular receptor for entry in immune cells?",
    options: ["CD4", "SLAM (signaling lymphocytic activation molecule, CD150)", "ACE2", "CCR5"],
    answer: 1,
    explanation: "Measles virus (paramyxovirus) uses two entry receptors: SLAM (CD150) on lymphocytes and dendritic cells (immunological receptor for wild-type strains), and nectin-4 on epithelial cells (for viral shedding). Attenuated vaccine strains can also use CD46. The hemagglutinin (H protein) mediates receptor binding."
  },
  {
    id: 32,
    question: "Dengue virus, a flavivirus, causes severe dengue (dengue hemorrhagic fever) in secondary infection due to:",
    options: ["Viral mutation to more virulent strain during secondary infection", "Antibody-dependent enhancement (ADE) — non-neutralizing antibodies from primary infection enhance uptake into FcγR+ cells", "Cross-reactivity destroying endothelial cells via molecular mimicry", "Serotype recombination creating hypervirulent reassortants"],
    answer: 1,
    explanation: "There are 4 dengue serotypes (DENV1-4). Primary infection induces serotype-specific immunity. Secondary infection with a different serotype: non-neutralizing cross-reactive antibodies from primary infection bind DENV virions and facilitate their uptake via FcγR into monocytes/macrophages (ADE). Higher viral load → severe disease. This complicates vaccine development."
  },
  {
    id: 33,
    question: "Adeno-associated virus (AAV) is used as a gene therapy vector because:",
    options: ["It has a large packaging capacity (>30 kb) for gene inserts", "It is generally replication-defective, non-pathogenic, and can transduce non-dividing cells", "It integrates exclusively into safe harbor loci in the genome", "It has broad tropism exclusively for hepatocytes"],
    answer: 1,
    explanation: "AAV is a preferred gene therapy vector because: (1) wild-type AAV is non-pathogenic, (2) recombinant AAV (rAAV) lacks viral genes — replication defective, (3) can transduce non-dividing cells (important for neurons, muscle, liver), (4) multiple serotypes with different tropisms (AAV2 retina, AAV9 CNS/liver, AAV8 liver). Limitation: ~4.7 kb packaging capacity."
  },
  {
    id: 34,
    question: "Phage T4's DNA injection uses which structure to breach the bacterial cell wall?",
    options: ["Tail fibers only — passive diffusion", "Tail spike proteins that dissolve peptidoglycan", "Contractile tail sheath that drives tail tube through bacterial envelope", "Endolysins that lyse the cell wall before injection"],
    answer: 2,
    explanation: "T4 phage has a contractile tail with a sheath surrounding the tail tube. Upon receptor binding (via long tail fibers to LPS, then short tail fibers triggering contraction), the tail sheath contracts, driving the rigid tail tube through the bacterial outer membrane and cell wall like a molecular syringe to inject the viral genome into the cytoplasm."
  },
  {
    id: 35,
    question: "The M2 protein of influenza A is the target of which antiviral drug?",
    options: ["Oseltamivir", "Zanamivir", "Amantadine", "Baloxavir marboxil"],
    answer: 2,
    explanation: "M2 is a proton-selective ion channel (tetramer) in the influenza A virion envelope. After endocytosis, acidification of the endosome drives H+ through M2, acidifying the virion interior to trigger HA conformational change and M1 dissociation from vRNP — required for uncoating. Amantadine and rimantadine block M2. Most current strains are amantadine-resistant (S31N mutation)."
  },
  {
    id: 36,
    question: "mRNA vaccines (like Pfizer-BioNTech BNT162b2 for COVID-19) use modified nucleosides to:",
    options: ["Enhance viral replication in vaccine recipients", "Reduce innate immune recognition (particularly TLR7/8/3 sensing) and increase mRNA stability and translation", "Enable mRNA integration into the host genome", "Provide long-term storage at room temperature"],
    answer: 1,
    explanation: "BNT162b2 incorporates N1-methylpseudouridine (m1Ψ) instead of uridine. This modification reduces recognition by innate immune sensors (TLR7, TLR8, RIG-I) that detect foreign RNA, decreases type I IFN induction (which would degrade the mRNA and suppress translation), and increases ribosome binding efficiency, collectively enhancing protein expression."
  },
  {
    id: 37,
    question: "Bacteriophage lambda's lytic-to-lysogenic switch involves cleavage of CI repressor by:",
    options: ["RecBCD nuclease", "LexA protease", "RecA-mediated autoproteolysis (co-protease activity of activated RecA)", "Cro protein directly"],
    answer: 2,
    explanation: "During SOS response, activated RecA (bound to ssDNA) acts as a co-protease that stimulates autoproteolysis (self-cleavage) of the CI repressor at its linker region (Ala111-Gly112). Loss of CI allows Cro to accumulate, promoting lytic gene expression. This is the molecular mechanism of prophage induction."
  },
  {
    id: 38,
    question: "The broad-spectrum antiviral drug ribavirin acts primarily by which mechanism?",
    options: ["Blocking neuraminidase activity", "Competitively inhibiting viral RdRp and causing lethal mutagenesis via misincorporation", "Blocking viral protease", "Inducing interferon production in host cells"],
    answer: 1,
    explanation: "Ribavirin (a guanosine analogue) works through multiple mechanisms: (1) competitive inhibition of viral RdRp (IMP dehydrogenase inhibition depletes GTP pool), (2) incorporation into viral RNA causing lethal mutagenesis (error catastrophe), (3) some immunomodulatory effects. Used against RSV, HCV (with pegIFN), Lassa fever, hantavirus."
  },
  {
    id: 39,
    question: "HTLV-1 (Human T-cell leukemia virus) causes adult T-cell leukemia/lymphoma (ATLL) through which oncoprotein?",
    options: ["Tax (transcriptional transactivator activating NF-κB and CREB/ATF)", "Gag p24 capsid protein", "Rev export factor", "Protease-processed polyprotein"],
    answer: 0,
    explanation: "HTLV-1 Tax is the major oncogenic protein. Tax activates NF-κB (by activating IKK complex), CREB/ATF pathways, and drives expression of IL-2, IL-2Rα (autocrine growth), and cell cycle genes. Tax also inactivates p16INK4a and p53, promoting genomic instability. Another protein HBZ maintains the malignant phenotype in late-stage ATLL."
  },
  {
    id: 40,
    question: "Kaposi's Sarcoma Herpesvirus (KSHV/HHV-8) encodes viral homologues of host genes to promote oncogenesis, including:",
    options: ["Viral IL-6 (vIL-6), viral FLIP (vFLIP), viral cyclin D (vCyclin), and viral G-protein-coupled receptor (vGPCR)", "Viral p53, viral RB, viral PTEN", "Viral EGFR, viral KRAS, viral MYC", "Viral TLR4, viral MyD88, viral IRF3"],
    answer: 0,
    explanation: "KSHV encodes numerous pirated host gene homologues: vIL-6 (activates JAK-STAT, promotes angiogenesis), vFLIP (blocks apoptosis, activates NF-κB), vCyclin (CDK6-activating cyclin D homologue, promotes cell cycle), vGPCR (constitutively active GPCR driving VEGF production and angiogenesis), viral BCL-2, viral IRF proteins (blocking IFN response)."
  },
  {
    id: 41,
    question: "VSV (vesicular stomatitis virus) is used as a pseudovirus system for studying viral entry because:",
    options: ["VSV is naturally non-pathogenic in all species", "VSV ΔG can be pseudotyped with foreign viral glycoproteins and encodes reporter genes, enabling BSL-2 study of BSL-3/4 pathogens", "VSV integrates into the host genome stably", "VSV can infect non-dividing cells only"],
    answer: 1,
    explanation: "VSV-ΔG (VSV with G protein deleted) pseudovirus system: VSV bearing a foreign viral envelope protein (e.g., SARS-CoV-2 spike, Ebola GP) and encoding GFP or luciferase. This allows safe study of entry mechanisms and neutralizing antibodies for high-risk pathogens in BSL-2 conditions. The pseudovirus infects cells expressing the cognate receptor but produces no new infectious particles."
  },
  {
    id: 42,
    question: "Which class of HIV drugs targets the final step of new virion maturation?",
    options: ["Integrase strand transfer inhibitors (INSTIs)", "HIV protease inhibitors (lopinavir, ritonavir, darunavir)", "Non-nucleoside RT inhibitors (NNRTIs)", "Entry inhibitors (maraviroc)"],
    answer: 1,
    explanation: "HIV protease (aspartyl protease) cleaves Gag and Gag-Pol polyproteins during or shortly after budding, converting immature (non-infectious) virions into mature (infectious) particles. Protease inhibitors (lopinavir, atazanavir, darunavir) are competitive inhibitors of the active site that block Gag/Pol processing, producing non-infectious immature virions."
  },
  {
    id: 43,
    question: "Interferon-stimulated genes (ISGs) that restrict viral replication include:",
    options: ["PCNA, RFC, RPA (DNA replication factors)", "MX1, IFIT1-3, OAS1-3/RNase L, PKR, ISG15", "STING, cGAS, RIG-I (virus sensors, not ISGs themselves)", "RAD51, BRCA1, ATM (DNA repair proteins)"],
    answer: 1,
    explanation: "Key ISGs with antiviral activity: MX1/MX2 (GTPases blocking nucleocapsid transport), OAS1/2/3 (2'-5' oligoadenylate synthetases activating RNase L to degrade dsRNA), PKR (eIF2α kinase blocking translation), IFIT1-3 (5'ppp RNA binding, blocking translation), ISG15 (ubiquitin-like modifier conjugated to viral and host proteins), APOBEC3G/F, tetherin."
  },
  {
    id: 44,
    question: "Zika virus (a flavivirus) causes microcephaly by:",
    options: ["Infecting and lysing mature neurons", "Infecting neural progenitor cells (NPCs) and disrupting cortical development/causing NPC death", "Crossing the blood-brain barrier and triggering autoimmune neurodegeneration", "Integrating into host genome and silencing brain-specific genes"],
    answer: 1,
    explanation: "Zika virus infects neural progenitor cells (NPCs) in the developing brain using AXL (TAM receptor) and other entry receptors. In NPCs, Zika causes cell cycle arrest, apoptosis, asymmetric division defects, and centrosome abnormalities, reducing the cortical progenitor pool and producing microcephaly. Zika also targets the centrosome (SASS6/CPAP)."
  },
  {
    id: 45,
    question: "The rolling circle mechanism of replication used by circular ssDNA viruses (e.g., geminiviruses, phage ΦX174) produces:",
    options: ["Circular dsDNA molecules for integration", "Concatemeric linear dsDNA for packaging", "A concatemeric ssDNA product that is cleaved to unit-length circles", "An episomal dsDNA intermediate transcribed into mRNA"],
    answer: 2,
    explanation: "Rolling circle replication (RCR): The nick-closing (Rep) protein nicks the ssDNA circle at the origin, generating a 3'-OH for DNA synthesis. DNA polymerase extends the 3' end, displacing the old strand. The origin strand is displaced as a concatemer of unit genomes. The Rep protein nicks at each origin site and ligates to circularize unit-length ssDNA molecules."
  },
  {
    id: 46,
    question: "The innate immune sensor cGAS (cyclic GMP-AMP synthase) detects:",
    options: ["Single-stranded RNA in the cytoplasm", "Double-stranded DNA in the cytoplasm (from viruses, bacteria, or aberrant self-DNA)", "Unmethylated CpG DNA in endosomes", "Viral 5'-triphosphate RNA"],
    answer: 1,
    explanation: "cGAS detects double-stranded DNA in the cytoplasm (foreign DNA from viruses, bacteria, or endogenous DNA from micronuclei, mitochondrial DNA leakage). cGAS synthesizes 2'3'-cGAMP (a non-canonical cyclic dinucleotide) that binds and activates STING, leading to TBK1→IRF3 activation and IFN-β production."
  },
  {
    id: 47,
    question: "Bacteriophage endolysins are being developed as antimicrobials because they:",
    options: ["Insert into bacterial DNA and prevent replication", "Enzymatically degrade bacterial cell wall peptidoglycan, causing osmotic lysis", "Block bacterial ribosomes like chloramphenicol", "Prevent biofilm formation by degrading exopolysaccharides"],
    answer: 1,
    explanation: "Endolysins are phage-encoded murein hydrolases (peptidoglycan-degrading enzymes) that the phage uses to lyse the bacterial host at the end of the lytic cycle. When applied externally to Gram-positive bacteria, they rapidly lyse cells by degrading exposed peptidoglycan. They are active against antibiotic-resistant bacteria (MRSA, VRE) with minimal resistance development."
  },
  {
    id: 48,
    question: "Ebola virus (a filovirus) encodes which protein that inhibits interferon signaling?",
    options: ["NP (nucleoprotein)", "VP35 (blocks RIG-I/MDA5 sensing) and VP24 (blocks STAT1 nuclear import)", "GP (glycoprotein) shedding decoys", "L protein (RdRp) directly degrading IRF3"],
    answer: 1,
    explanation: "Ebola VP35 acts as dsRNA mimic/antagonist, blocking RIG-I and MDA5 sensing and preventing IRF3/IRF7 phosphorylation. VP24 blocks importin-α-mediated nuclear import of phospho-STAT1, preventing ISG transcription. These two innate immune evasion proteins are critical for Ebola's high lethality and contribute to the cytokine storm in severe disease."
  },
  {
    id: 49,
    question: "HIV-1 capsid protein p24 forms the conical core of the virion. Recent research shows that in the cytoplasm after entry, intact capsid:",
    options: ["Immediately disassembles (uncoats) to release viral RNA for reverse transcription", "Travels to the nucleus pore where uncoating occurs, allowing RT and integration in the nucleus", "Is degraded by the proteasome as a prerequisite for reverse transcription", "Is exported to the nucleus without uncoating, where the entire capsid is integrated"],
    answer: 1,
    explanation: "Recent data (2021-2023) shows HIV-1 capsid (composed of ~1,500 CA hexamers/pentamers) remains largely intact during cytoplasmic transport to the nuclear envelope. The intact capsid can pass through expanded nuclear pores (aided by nucleoporin interactions, particularly NUP153/NUP358), and uncoating occurs in the nucleus near nuclear pore complexes. Nuclear entry of intact capsid shields viral DNA from innate immune sensing."
  },
  {
    id: 50,
    question: "The spike protein of SARS-CoV-2 contains a furin cleavage site (RRAR↓S) at the S1/S2 junction, which compared to SARS-CoV-1:",
    options: ["Makes SARS-CoV-2 less transmissible by requiring cell-specific proteases", "Enhances SARS-CoV-2 transmissibility and cell-cell fusion by allowing pre-activation by furin in producer cells", "Is unique to bat coronaviruses and acquired by recombination", "Allows the virus to evade vaccine-induced immunity"],
    answer: 1,
    explanation: "SARS-CoV-2's polybasic furin cleavage site (RRAR↓S) at S1/S2 allows furin-like proteases (expressed in many cell types including airway epithelium) to pre-cleave spike in producer cells. This pre-processed spike is more fusion-competent and allows more efficient TMPRSS2-mediated priming at the cell surface (vs endosomal cathepsin entry). This likely contributes to SARS-CoV-2's superior transmission compared to SARS-CoV-1."
  }
];

export default questions
