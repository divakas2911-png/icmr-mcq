const questions = [
  {
    id: 1,
    question: "Cystic fibrosis (CF) is caused by mutations in the CFTR gene (chromosome 7q31.2). The most common mutation, ΔF508, causes CF because:",
    options: ["It creates a premature stop codon that triggers nonsense-mediated decay", "It deletes phenylalanine at position 508, causing CFTR protein misfolding and ER retention/degradation, resulting in absent or severely reduced CFTR at the cell surface", "It creates a frameshift leading to a truncated non-functional protein with dominant negative effects", "It disrupts the CFTR promoter, reducing mRNA transcription by 50%"],
    answer: 1,
    explanation: "ΔF508 (deletion of 3 bp encoding Phe508) accounts for ~70% of CF alleles in Caucasians. The mutant CFTR protein misfolds due to loss of a key hydrophobic residue in NBD1 (nucleotide-binding domain 1), is retained in the ER, ubiquitinated, and degraded by ERAD (ER-associated degradation)/proteasome. Little or no CFTR reaches the apical membrane. CFTR is a cAMP-regulated chloride channel; its absence impairs Cl⁻ and fluid secretion → thickened mucus in lungs, pancreatic ducts. Lumacaftor (corrector) + ivacaftor (potentiator) rescue ΔF508 CFTR."
  },
  {
    id: 2,
    question: "Phenylketonuria (PKU) is caused by deficiency of phenylalanine hydroxylase (PAH). The relationship between enzyme deficiency and clinical phenotype demonstrates:",
    options: ["Dominant negative effect — one mutant copy poisons the entire enzyme pool", "Autosomal recessive inheritance — carriers (heterozygotes) have ~50% PAH activity and are phenotypically normal; homozygotes have severely reduced PAH activity causing phenylalanine accumulation", "Anticipation — PKU becomes more severe in successive generations", "X-linked inheritance — males are more severely affected"],
    answer: 1,
    explanation: "PKU (autosomal recessive, chromosome 12q23.2): carriers have ~50% PAH activity (sufficient for normal phenylalanine metabolism). Affected individuals (homozygous or compound heterozygous) have <1% PAH activity → phenylalanine accumulates → neurotoxic phenylalanine metabolites. Features: intellectual disability, seizures, eczema, musty odor. Neonatal screening (Guthrie test → tandem MS) and phenylalanine-restricted diet since birth prevents manifestation. Sapropterin (BH4 cofactor) improves PAH activity in some patients."
  },
  {
    id: 3,
    question: "Huntington disease (HD) is caused by expansion of CAG repeats in the HTT gene. The pathogenic mechanism involves:",
    options: ["Loss of function of huntingtin protein due to its degradation by expanded repeat RNA", "Gain-of-function toxicity of the expanded polyglutamine (polyQ) tract in mutant huntingtin protein, which misfolds, aggregates, and disrupts multiple cellular functions including transcription, axonal transport, and mitochondrial function", "Haploinsufficiency — one functional HTT allele is insufficient for normal neuronal function", "Nonsense-mediated decay of mutant HTT mRNA causing complete loss of huntingtin protein"],
    answer: 1,
    explanation: "HD (autosomal dominant, chromosome 4p16.3): normal alleles have 6-35 CAG repeats (encoding glutamine); HD alleles have ≥36 repeats (>39 fully penetrant). The expanded polyQ tract causes mutant huntingtin (mHTT) to misfold and form nuclear/cytoplasmic aggregates. mHTT sequesters transcription factors (CBP, SP1), impairs BDNF transport, disrupts proteasome function, and induces mitochondrial dysfunction → striatal medium spiny neuron death. HD is completely dominant — homozygotes have similar onset to heterozygotes (pure gain-of-function)."
  },
  {
    id: 4,
    question: "Neurofibromatosis type 1 (NF1) shows extreme variable expressivity and is caused by mutations in the NF1 gene encoding neurofibromin. Neurofibromin functions as:",
    options: ["A transcription factor that activates tumor suppressor p53", "A GTPase-activating protein (GAP) for RAS, converting active RAS-GTP to inactive RAS-GDP; loss of neurofibromin leads to constitutive RAS-MAPK pathway activation", "A DNA repair protein involved in nucleotide excision repair", "A cell adhesion molecule preventing abnormal neurite outgrowth"],
    answer: 1,
    explanation: "NF1 (autosomal dominant, chromosome 17q11.2) encodes neurofibromin, a RAS-GAP that accelerates RAS GTP hydrolysis (RAS inactivation). Loss of neurofibromin → sustained RAS-GTP → constitutive MAPK/PI3K-AKT signaling → increased proliferation, reduced apoptosis. NF1 is both a haploinsufficient tumor suppressor (heterozygosity contributes to phenotype) and requires second hit (LOH) in tumor cells. Features: Café-au-lait spots, neurofibromas, Lisch nodules, learning disabilities, plexiform neurofibromas, malignant peripheral nerve sheath tumors."
  },
  {
    id: 5,
    question: "Duchenne muscular dystrophy (DMD) is caused by large deletions in the DMD gene (Xp21.2). The reading frame hypothesis predicts that:",
    options: ["All deletions in DMD cause the same severity of disease", "Out-of-frame deletions cause severe DMD (no functional dystrophin); in-frame deletions preserve the reading frame, producing a shorter but partially functional dystrophin (Becker muscular dystrophy, BMD), which is milder", "Nonsense mutations in DMD cause Becker, while missense mutations cause Duchenne", "Exon duplications always cause more severe disease than deletions"],
    answer: 1,
    explanation: "The reading frame rule (Monaco et al.): DMD deletions that disrupt the reading frame (out-of-frame) produce premature stop codons, triggering NMD → no dystrophin → severe DMD. Deletions that maintain the reading frame (in-frame) produce a shorter, semi-functional dystrophin → milder BMD. ~85% of cases follow this rule. Exon skipping therapy (eteplirsen — targets exon 51) converts out-of-frame to in-frame deletions in eligible patients, converting DMD to a BMD-like phenotype. Micro-dystrophin gene therapy is in trials."
  },
  {
    id: 6,
    question: "Beta-thalassemia arises from reduced or absent HBB (beta-globin) synthesis. Compound heterozygotes for one β⁰ and one β+ allele present with:",
    options: ["Normal hemoglobin (both alleles partially compensate)", "Thalassemia intermedia (moderate anemia, variable transfusion dependence, splenomegaly) — intermediate between thalassemia minor and thalassemia major", "Sickle cell disease (if the β+ allele is the HbS mutation)", "Thalassemia major requiring regular transfusions (identical to β⁰/β⁰)"],
    answer: 1,
    explanation: "Beta-thalassemia genotypes: β⁰ = no beta-globin; β+ = reduced beta-globin. Combinations: (1) β/β = normal; (2) β⁰/β or β+/β = thalassemia minor (mild anemia, microcytosis, usually asymptomatic); (3) β⁰/β⁰ = thalassemia major (Cooley's anemia, severe); (4) β⁰/β+ or β+/β+ = thalassemia intermedia (variable, intermediate severity depending on residual β+ production). HbF production (HPFH) can ameliorate thalassemia severity. Hydroxyurea and BCL11A gene editing (to reactivate HbF) are therapeutic strategies."
  },
  {
    id: 7,
    question: "Marfan syndrome (MFS) is caused by mutations in FBN1 (fibrillin-1, chromosome 15q21.1). The pathogenic mechanism involves:",
    options: ["Loss of structural function only — fibrillin-1 is a scaffold protein and its loss weakens connective tissue", "Both structural loss of fibrillin-1 microfibrils AND dysregulation of TGF-β signaling (fibrillin normally sequesters latent TGF-β; loss of fibrillin increases active TGF-β), contributing to aortic and skeletal manifestations", "Gain-of-function of fibrillin-1 causing excessive collagen crosslinking", "Dominant negative mutations cause aggregation of wild-type fibrillin-1 with mutant fibrillin-1"],
    answer: 1,
    explanation: "FBN1 mutations cause MFS (autosomal dominant) through: (1) Haploinsufficiency — 50% reduction in fibrillin-1 weakens microfibril network in connective tissue; (2) Dominant negative — mutant fibrillin-1 can poison heterotypic microfibrils; (3) TGF-β dysregulation — fibrillin-1 normally sequesters LLC (large latent complex containing TGF-β) in ECM; loss → elevated free TGF-β → abnormal aortic smooth muscle cell signaling and skeletal overgrowth. Losartan (AT1R antagonist, reduces TGF-β signaling) shows benefit in Marfan mouse models and some clinical trials."
  },
  {
    id: 8,
    question: "Osteogenesis imperfecta (OI, brittle bone disease) most commonly follows which inheritance pattern and molecular mechanism?",
    options: ["Autosomal recessive with both COL1A1 alleles producing non-functional protein", "Autosomal dominant — heterozygous mutations in COL1A1 or COL1A2 (encoding type I collagen chains) often act as dominant negatives; one mutant chain can disrupt the entire type I collagen triple helix if incorporated", "Autosomal dominant with haploinsufficiency only (50% reduction in collagen)", "X-linked because collagen genes are on the X chromosome"],
    answer: 1,
    explanation: "Most OI cases are autosomal dominant (types I-IV). COL1A1 null mutations (producing no protein from one allele) cause OI type I (mildest — haploinsufficiency, ~50% collagen). But glycine substitution mutations in COL1A1/COL1A2 glycine repeat (Gly-X-Y) cause a dominant negative effect: mutant alpha chains incorporate into triple helix and disrupt its structure (one mutant alpha chain among three → ~7/8 of molecules affected) → severe OI types II-III. This explains why glycine substitutions are more severe than null mutations despite both being heterozygous."
  },
  {
    id: 9,
    question: "Li-Fraumeni syndrome (LFS) is caused by germline TP53 mutations. The characteristic cancer spectrum includes:",
    options: ["Only colorectal cancer and thyroid cancer", "Breast cancer, sarcomas, brain tumors, leukemia, adrenocortical carcinoma — presenting at early ages; virtually all affected individuals develop cancer by age 70 (near-complete penetrance)", "Only leukemia in children", "Melanoma and uveal melanoma exclusively"],
    answer: 1,
    explanation: "Li-Fraumeni syndrome (autosomal dominant): germline TP53 mutations confer ~90% lifetime cancer risk. Classic spectrum: soft tissue sarcomas (especially in children), osteosarcomas, breast cancer (especially premenopausal), brain tumors (gliomas, medulloblastoma), adrenocortical carcinoma, leukemia. The Chompret criteria are used for clinical diagnosis. TP53 is the most frequently mutated gene in human cancer (somatic) and the most common cause of hereditary cancer syndrome. Carriers should avoid radiation therapy when possible."
  },
  {
    id: 10,
    question: "BRCA1 and BRCA2 proteins are involved in which DNA repair pathway, explaining why their loss predisposes to cancer?",
    options: ["Mismatch repair (MMR) of replication errors", "Homologous recombination (HR) repair of double-strand DNA breaks; BRCA1/2 deficiency impairs HR, causing genomic instability with reliance on error-prone NHEJ", "Nucleotide excision repair (NER) of bulky adducts", "Base excision repair (BER) of oxidative DNA damage"],
    answer: 1,
    explanation: "BRCA1 coordinates S-phase checkpoint and HR by interacting with RAD51 and PALB2. BRCA2 directly loads RAD51 onto resected ssDNA at DSBs. Without functional BRCA1/2, DSBs are repaired by error-prone NHEJ → genomic instability → chromosomal rearrangements, deletions → cancer driver mutations. BRCA-deficient cancers are sensitive to PARP inhibitors (olaparib, rucaparib) — PARP traps cause BER collapse → DSBs → lethal in BRCA-deficient cells (synthetic lethality). Germline BRCA1/2 mutations: ~70-80% lifetime breast cancer risk, ~40-46% ovarian cancer risk."
  },
  {
    id: 11,
    question: "Lynch syndrome (hereditary non-polyposis colorectal cancer, HNPCC) is characterized by:",
    options: ["Thousands of colorectal polyps due to FAP-like APC mutation", "Germline mutations in mismatch repair (MMR) genes (MLH1, MSH2, MSH6, PMS2), causing microsatellite instability (MSI-H) in tumors and predisposing to colorectal, endometrial, ovarian, and other cancers", "APC germline mutation causing adenomatous polyposis throughout the colon", "RAS proto-oncogene activation causing sporadic colorectal cancer"],
    answer: 1,
    explanation: "Lynch syndrome (autosomal dominant): germline mutations in MLH1, MSH2, MSH6, or PMS2 impair MMR → accumulation of insertion/deletion mutations especially in microsatellite repeats → MSI-H (microsatellite instability high) tumors. The Amsterdam II criteria and revised Bethesda guidelines identify at-risk patients. Cumulative CRC risk: ~52-82% for MLH1/MSH2 mutations. IHC for MMR proteins on tumor tissue is the standard screening test (loss of a MMR protein suggests Lynch). PD-1/PD-L1 checkpoint inhibitors (pembrolizumab) are highly effective for MMR-deficient tumors."
  },
  {
    id: 12,
    question: "Familial adenomatous polyposis (FAP) is caused by germline APC mutations. The molecular consequence of APC loss is:",
    options: ["Activation of the RAS-MAPK pathway leading to increased cell proliferation", "Loss of APC function in the β-catenin destruction complex → β-catenin accumulates, translocates to nucleus, activates Wnt target genes (MYC, CCND1) promoting cell proliferation", "Loss of p53 function allowing abnormal cells to survive DNA damage", "Gain-of-function of APC causing excessive Wnt pathway activation"],
    answer: 1,
    explanation: "APC is a scaffold component of the β-catenin destruction complex (APC + AXIN + CK1α + GSK3β). In the absence of Wnt signaling, this complex phosphorylates β-catenin → ubiquitination → proteasomal degradation. Loss of APC → β-catenin not destroyed → nuclear β-catenin → TCF4/LEF transcriptional activation → MYC, cyclin D1, other proliferation genes → polyp formation. FAP patients develop hundreds-thousands of adenomatous polyps from age ~10; near 100% CRC risk without colectomy. Attenuated FAP (AFAP) = 5' or 3' APC mutations, fewer polyps."
  },
  {
    id: 13,
    question: "The genetic counseling principle of 'autonomy' in the context of predictive genetic testing means:",
    options: ["Genetic counselors make decisions about testing on behalf of patients who cannot decide", "Individuals have the right to make their own informed decisions about genetic testing, including the right not to know, without coercion from family members or healthcare providers", "Testing must be done for all at-risk family members to protect public health", "Children should be tested for adult-onset genetic conditions to allow early preparation"],
    answer: 1,
    explanation: "Genetic counseling respects patient autonomy — the principle that individuals have the right to make their own informed decisions about their genetic health. This includes: (1) the right to decline testing ('right not to know'); (2) the right to not share results with at-risk relatives; (3) minors should generally not be tested for adult-onset conditions (decision deferred until they can make their own autonomous choice). Counselors provide information and support without directing patient choices (non-directiveness)."
  },
  {
    id: 14,
    question: "Prenatal diagnosis for chromosomal disorders most commonly uses which specimen obtained by which procedure at which gestational age?",
    options: ["Fetal blood from cordocentesis at 8-10 weeks gestation", "Amniotic fluid (amniocytes) from amniocentesis at 15-20 weeks, or chorionic villi from CVS at 10-13 weeks gestation", "Fetal cells from maternal blood by NIPT at 6-8 weeks", "Placental biopsy at 25-30 weeks for karyotype analysis"],
    answer: 1,
    explanation: "Prenatal diagnosis options: (1) CVS (chorionic villus sampling): 10-13 weeks, biopsy of placental villi (fetal origin), allows first-trimester diagnosis; miscarriage risk ~0.5-1%; (2) Amniocentesis: 15-20 weeks, amniotic fluid sampling, amniocytes cultured for karyotype; miscarriage risk ~0.5%; (3) NIPT (non-invasive prenatal testing): 10+ weeks, cell-free fetal DNA from maternal blood for aneuploidy screening (not diagnostic); (4) Cordocentesis (PUBS): 18+ weeks, umbilical vein blood, used for fetal infections, hemoglobinopathies, very high risk."
  },
  {
    id: 15,
    question: "Achondroplasia, the most common cause of short-limb dwarfism, is caused by gain-of-function mutations in FGFR3. The recurrence risk for parents of an achondroplastic child, if BOTH parents have achondroplasia:",
    options: ["0% — achondroplasia only affects first-generation offspring", "25% homozygous achondroplasia (lethal), 50% heterozygous achondroplasia (affected), 25% unaffected — the homozygous condition causes lethal neonatal death", "50% affected, 50% unaffected with no lethality risk", "100% of children will have achondroplasia"],
    answer: 1,
    explanation: "Achondroplasia (autosomal dominant, FGFR3 Gly380Arg in >98%): Aa × Aa cross (both parents affected, heterozygous) gives: 1 AA (homozygous — lethal neonatal death due to severe skeletal/respiratory compromise) : 2 Aa (heterozygous achondroplasia, viable) : 1 aa (normal stature). So recurrence risk: 25% lethal, 50% achondroplasia, 25% normal. >80% of achondroplasia cases are de novo mutations (normal-stature parents). FGFR3 gain-of-function constitutively activates STAT1/ERK/MAPK signaling, inhibiting chondrocyte proliferation."
  },
  {
    id: 16,
    question: "Prader-Willi syndrome (PWS) and Angelman syndrome (AS) both involve chromosome 15q11-q13 but have different clinical presentations because:",
    options: ["PWS is caused by deletion; AS is caused by duplication of the same region", "The same chromosomal region contains imprinted genes — deletion of paternal chromosome 15q11-q13 causes PWS; deletion of maternal 15q11-q13 causes AS, because different genes are expressed from each parental allele due to imprinting", "PWS is X-linked while AS is autosomal", "PWS is caused by UBE3A mutation while AS is caused by SNRPN mutation"],
    answer: 1,
    explanation: "15q11-q13 contains imprinted genes: (1) SNRPN and other paternally expressed genes — expressed only from paternal allele. Deletion of paternal 15q11 OR maternal UPD15 (two maternal copies, no paternal) → PWS (hypotonia, hyperphagia, hypogonadism, intellectual disability). (2) UBE3A — expressed only from maternal allele in neurons. Deletion of maternal 15q11 OR paternal UPD15 OR UBE3A mutations → AS (severe intellectual disability, ataxia, seizures, happy demeanor, absent speech). This imprinting paradigm explains why parent of origin determines the syndrome."
  },
  {
    id: 17,
    question: "Fragile X syndrome (FXS) is the most common inherited cause of intellectual disability. The molecular mechanism of full mutation alleles (>200 CGG repeats) is:",
    options: ["The expanded repeat directly disrupts the FMR1 coding sequence, creating a premature stop codon", "Hypermethylation of the expanded CGG repeat region and FMR1 promoter silences FMR1 transcription, leading to absence of FMRP (fragile X mental retardation protein) which normally represses translation of synaptic proteins", "Expanded CGG repeats encode a polyglycine tract in FMRP that makes it toxic", "FMR1 mRNA is degraded by NMD due to the repeat expansion in the 5'UTR"],
    answer: 1,
    explanation: "FXS (X-linked): >200 CGG repeats in FMR1 5'UTR → hypermethylation of repeats + CpG island → transcriptional silencing of FMR1 → absence of FMRP. FMRP is an RNA-binding protein that transports mRNAs to synapses and represses their local translation (stalls polyribosomes). Without FMRP, synaptic mRNAs (CaMKII, MAP1B, PSD-95, AMPA receptors) are overexpressed → exaggerated mGluR-LTD → dysfunctional synaptic plasticity. mGluR5 antagonists (fenobam) showed promise in animal models but failed in clinical trials."
  },
  {
    id: 18,
    question: "Spinal muscular atrophy (SMA) is caused by homozygous deletion of SMN1 (chromosome 5q13.2). The severity of SMA depends on:",
    options: ["The size of the SMN1 deletion (larger deletions = more severe)", "The copy number of SMN2 (near-identical paralog of SMN1); higher SMN2 copy number produces more full-length SMN protein and correlates with milder SMA type (SMA type I: 1-2 copies; type IV: 4+ copies)", "Whether the deletion is paternally or maternally inherited (imprinting effect)", "The age at which SMN1 deletion occurs somatically"],
    answer: 1,
    explanation: "SMA (autosomal recessive): SMN1 deletion → no functional SMN protein from SMN1. SMN2 is a nearly identical paralog that predominantly produces truncated SMN due to exon 7 skipping (C→T at position +6 of exon 7). ~10-15% of SMN2 produces full-length SMN. More SMN2 copies → more SMN → milder disease. Nusinersen (exon 7 inclusion ASO), risdiplam (small molecule exon 7 inclusion), and onasemnogene abeparvovec (AAV9-SMN1 gene therapy, FDA-approved) are treatments. Newborn screening enables pre-symptomatic treatment."
  },
  {
    id: 19,
    question: "Tuberous sclerosis complex (TSC) involves mutations in TSC1 or TSC2, both of which act as:",
    options: ["Oncogenes that promote tumor formation when hyperactivated", "Tumor suppressors — the TSC1/TSC2 complex inhibits mTORC1 signaling by acting as GAP for Rheb GTPase; loss of TSC1/2 → constitutive mTORC1 activation → uncontrolled cell growth", "Transcription factors regulating neural differentiation", "Structural proteins maintaining neuronal axonal integrity"],
    answer: 1,
    explanation: "TSC complex (hamartin/TSC1 + tuberin/TSC2) is a GAP for Rheb GTPase. Active Rheb-GTP activates mTORC1 → protein synthesis, cell growth, autophagy inhibition. TSC1/TSC2 mutations → loss of mTORC1 inhibition → constitutive mTORC1 → benign hamartomas in brain (cortical tubers, subependymal nodules), kidneys (angiomyolipomas), lungs (LAM), skin, heart (cardiac rhabdomyomas). Everolimus and sirolimus (mTORC1 inhibitors/rapamycin analogs) are effective treatments — rationale directly from understanding pathogenic mechanism."
  },
  {
    id: 20,
    question: "Hereditary hemochromatosis (HH) most commonly results from mutations in the HFE gene, specifically C282Y homozygosity. The pathophysiology involves:",
    options: ["Reduced red blood cell production leading to chronic anemia and compensatory iron absorption", "Impaired hepcidin upregulation — mutant HFE cannot properly interact with HJV/BMP-SMAD pathway, reducing hepcidin production → unregulated ferroportin activity → excessive intestinal iron absorption and release from macrophages → iron overload", "Excessive hepcidin production blocking all iron absorption", "Dysfunction of transferrin receptor leading to impaired iron delivery to marrow"],
    answer: 1,
    explanation: "HFE (autosomal recessive, chromosome 6p21.3): C282Y homozygosity disrupts HFE's association with β2-microglobulin and TfR1/TfR2, impairing HFE's role in sensing body iron stores. Without proper HFE function, hepcidin is inappropriately low → ferroportin (iron exporter) remains active → excessive iron absorption from duodenum → iron accumulates in liver, heart, pancreas, joints, pituitary. Consequences: cirrhosis, cardiomyopathy, diabetes, arthropathy, bronzed skin ('bronze diabetes'). Treatment: therapeutic phlebotomy. Penetrance is incomplete (especially in females, before menopause iron loss delays accumulation)."
  },
  {
    id: 21,
    question: "Wilson disease (hepatolenticular degeneration) is caused by mutations in ATP7B. The clinical consequence is:",
    options: ["Excess iron accumulation in liver and brain due to ceruloplasmin deficiency", "Impaired copper excretion into bile and deficient incorporation into ceruloplasmin → copper accumulates in liver, brain, and other organs (Kayser-Fleischer rings in cornea)", "Copper deficiency causing depigmentation and seizures (Menkes disease)", "Defective zinc transport causing immune dysfunction"],
    answer: 1,
    explanation: "Wilson disease (autosomal recessive, chromosome 13q14.3): ATP7B encodes a P-type ATPase copper transporter in hepatocytes that: (1) incorporates copper into ceruloplasmin; (2) excretes excess copper into bile. Loss of ATP7B → copper accumulates in liver → hepatitis/cirrhosis; excess spills into blood → deposits in brain (basal ganglia → movement disorder, psychiatry), cornea (Kayser-Fleischer rings at Descemet's membrane), kidney. Diagnosis: low ceruloplasmin, low serum copper, high 24h urine copper, liver biopsy. Treatment: penicillamine, trientine (copper chelators), or zinc (blocks absorption)."
  },
  {
    id: 22,
    question: "Gaucher disease (glucocerebrosidase deficiency, GBA gene) is the most common lysosomal storage disorder. Its significance in genetics extends beyond the enzyme deficiency because:",
    options: ["Gaucher disease only affects Ashkenazi Jewish populations exclusively", "GBA heterozygous carriers and patients have significantly elevated risk of Parkinson's disease — GBA is the most common genetic risk factor for PD, though mechanism involves lysosomal dysfunction affecting alpha-synuclein clearance", "The GBA gene encodes a protein involved in DNA repair", "Gaucher disease is entirely curable by dietary modification"],
    answer: 1,
    explanation: "GBA (chromosome 1q22) encodes lysosomal acid beta-glucosidase. Biallelic loss → Gaucher disease (glucocerebroside accumulates in macrophages → hepatosplenomegaly, bone marrow failure, bone disease). ERT (imiglucerase, velaglucerase) and SRT (miglustat, eliglustat) are effective. Importantly: GBA heterozygous carriers (N370S, L444P, etc.) have 5-15× increased risk of Parkinson's disease. Both pathways involve lysosomal dysfunction and alpha-synuclein aggregation — impaired GBA activity reduces lysosomal degradation of alpha-synuclein → synuclein accumulation → Lewy body pathology."
  },
  {
    id: 23,
    question: "Fabry disease is an X-linked lysosomal storage disorder caused by alpha-galactosidase A (GLA) deficiency. An important clinical consideration regarding carrier females is:",
    options: ["Carrier females are always completely unaffected due to normal X-inactivation compensating", "Carrier females have highly variable clinical manifestations due to skewed X-inactivation; those with predominantly active X carrying the mutation can have significant symptoms (cardiac, renal, neurological)", "Carrier females pass the condition to all daughters and all sons", "Carrier females have 25% risk of having an affected child"],
    answer: 1,
    explanation: "Fabry disease (X-linked, GLA deficiency → globotriaosylceramide/GL-3 accumulation): classically considered X-linked recessive with predominantly male disease. However, carrier females have highly variable phenotypes due to skewed X-inactivation (Lyon effect). Females with predominantly active X carrying the GLA mutation have significant GL-3 accumulation → cardiac complications (LVH, HCM), renal disease (CKD), TIA/stroke, neuropathic pain. ~70% of carrier females have clinical manifestations. Female carriers should be offered enzyme replacement therapy (agalsidase alfa/beta) and regular cardiac/renal surveillance."
  },
  {
    id: 24,
    question: "Newborn screening programs use the principle of identifying which category of disorders?",
    options: ["All genetic disorders regardless of treatability", "Disorders meeting Wilson-Jungner criteria: common, serious but treatable, with a valid screening test, where early treatment significantly improves outcome (e.g., PKU, hypothyroidism, CAH, CF, SMA, sickle cell)", "Only chromosomal disorders detectable by karyotype in neonatal blood", "Only autosomal recessive conditions affecting metabolism"],
    answer: 1,
    explanation: "Wilson-Jungner criteria (WHO 1968) for screening: (1) Important health problem; (2) Treatment available; (3) Facilities for diagnosis and treatment; (4) Recognizable latent/early symptomatic stage; (5) Suitable test exists; (6) Acceptable test to population; (7) Natural history known; (8) Agreed policy on who to treat; (9) Cost-effective. ACMG recommended uniform screening panel (RUSP) currently includes 35 core conditions and 26 secondary conditions in USA. Expanded NBS with tandem mass spectrometry (MS/MS) identifies >50 metabolic disorders from dried blood spots."
  },
  {
    id: 25,
    question: "Alpha-1 antitrypsin deficiency (A1AT/AATD) is characterized by the Z allele (Glu342Lys mutation in SERPINA1). The pathogenic mechanism involves:",
    options: ["Insufficient alpha-1 antitrypsin production from both liver and lung, causing neutrophil elastase damage to both organs equally", "A dual mechanism: Z-A1AT polymerizes in hepatocytes → liver disease (toxic gain-of-function, 'retained polymer' ER stress); lung receives insufficient A1AT → uncontrolled neutrophil elastase → emphysema (loss-of-function)", "Loss of A1AT function causes only lung disease; liver disease is unrelated", "The Z allele produces a truncated A1AT that is secreted but non-functional"],
    answer: 1,
    explanation: "SERPINA1 Z allele (Glu342Lys): Z-A1AT folds abnormally and polymerizes in the ER of hepatocytes instead of being secreted. Consequences: (1) Liver disease — polymer accumulation → ER stress → hepatocyte apoptosis → cirrhosis, HCC (gain-of-toxic-function); (2) Lung disease — inadequate circulating A1AT → neutrophil elastase activity unopposed → protease-antiprotease imbalance → panacinar emphysema (loss-of-function). Smoking dramatically accelerates lung disease. Intravenous A1AT augmentation therapy addresses the lung disease but not liver (which needs A1AT polymer-clearing strategies or liver transplant)."
  },
  {
    id: 26,
    question: "A patient presents with multiple endocrine neoplasia type 2A (MEN2A). The underlying genetic alteration is:",
    options: ["Loss-of-function mutation in APC tumor suppressor gene", "Gain-of-function missense mutation in RET proto-oncogene (commonly C634R), constitutively activating RET tyrosine kinase receptor", "Germline deletion of BRCA2 tumor suppressor", "VHL tumor suppressor inactivation"],
    answer: 1,
    explanation: "MEN2A (autosomal dominant): caused by activating (gain-of-function) mutations in RET proto-oncogene, most commonly in exon 10/11 (cysteine codons, e.g., C634R/F/S/G/W/Y). Mutant RET forms constitutive dimers without ligand → constitutive kinase activation → cell proliferation/survival. Clinical triad: medullary thyroid carcinoma (MTC, >95% penetrance), pheochromocytoma (~50%), hyperparathyroidism (~25%). Prophylactic thyroidectomy is recommended based on codon-specific mutation risk stratification. Vandetanib/cabozantinib (RET inhibitors) for advanced MTC."
  },
  {
    id: 27,
    question: "The ACMG (American College of Medical Genetics) variant classification system uses five categories. A variant classified as 'Pathogenic' (Class 5) means:",
    options: ["The variant definitely causes disease in everyone who carries it (100% penetrance guaranteed)", "Evidence strongly supports that this variant causes the disease in question, with the recommendation to report and act on it clinically, though penetrance may still vary", "The variant has been found in a patient with the disease (therefore it must be causative)", "The variant changes an amino acid (therefore it affects protein function)"],
    answer: 1,
    explanation: "ACMG/AMP variant classification (5 classes): Pathogenic, Likely Pathogenic, Variant of Uncertain Significance (VUS), Likely Benign, Benign. Pathogenic = strong evidence for disease causation using ACMG criteria (PVS1, PS1-4, PM1-6, PP1-5 for pathogenicity; BA1, BS1-4, BP1-7 for benignity). Does NOT mean 100% penetrance. VUS is a major challenge in clinical genomics — found in ~40-50% of rare disease patients. Reclassification is dynamic as new evidence accumulates. Sobering: ~90% of rare variant-disease claims in literature have been overinterpreted."
  },
  {
    id: 28,
    question: "Familial hypercholesterolemia (FH) is one of the most common serious genetic disorders. The most common genetic cause is:",
    options: ["Gain-of-function mutations in PCSK9 gene", "Loss-of-function mutations in LDLR gene (LDL receptor), causing reduced LDL clearance from plasma; heterozygous FH affects ~1/250 individuals worldwide", "Loss-of-function mutations in APOB preventing LDL binding to LDLR", "Gain-of-function mutations in APOE causing LDL accumulation"],
    answer: 1,
    explanation: "FH genetic causes: (1) LDLR mutations (>1700 known) — ~80% of FH; heterozygous FH (~1/250) → LDL-C 3.5-6.0 mmol/L, premature CHD; homozygous FH (~1/250,000) → LDL-C >13 mmol/L, CHD in childhood; (2) APOB mutations (familial defective ApoB, ~10%) — ApoB R3527Q reduces LDLR binding; (3) PCSK9 gain-of-function mutations (~1-5%) — PCSK9 normally degrades LDLR; gain-of-function → fewer LDLRs. PCSK9 inhibitors (evolocumab, alirocumab) are highly effective for all three genetic causes by preventing LDLR degradation."
  },
  {
    id: 29,
    question: "Von Hippel-Lindau (VHL) syndrome is caused by germline VHL mutations. The VHL protein is a component of an E3 ubiquitin ligase complex that targets which protein for degradation under normoxic conditions?",
    options: ["MDM2 (the p53 E3 ligase), causing p53 accumulation under hypoxia", "HIF-1α (hypoxia-inducible factor 1-alpha); loss of VHL → HIF-1α not degraded → HIF target gene overexpression (VEGF, EPO, GLUT1) even in normal oxygen → angiogenesis → hemangioblastomas, clear cell renal carcinoma", "BRCA1, causing DNA repair deficiency", "Cyclin D1, causing cell cycle dysregulation"],
    answer: 1,
    explanation: "VHL (autosomal dominant, chromosome 3p25.3): The VHL-elongin B/C-Cullin2-Rbx1 E3 ubiquitin ligase complex polyubiquitinates hydroxylated HIF-1α/2α (hydroxylation by PHD enzymes at Pro402/564 in normoxia), targeting it for proteasomal degradation. Loss of VHL function → HIF-1α/2α stable → VEGF, EPO, GLUT1, PDGF overexpression → angiogenesis → vascularized tumors: hemangioblastomas (cerebellum, retina), clear cell RCC, pheochromocytoma, pancreatic neuroendocrine tumors. Belzutifan (HIF-2α inhibitor) is FDA-approved for VHL-associated RCC."
  },
  {
    id: 30,
    question: "Treacher Collins syndrome (mandibulofacial dysostosis) is caused by mutations in TCOF1 encoding Treacle protein. The pathophysiology involves:",
    options: ["Activation of the BMP pathway causing craniosynostosis", "Treacle is essential for ribosome biogenesis (rDNA transcription and pre-rRNA processing) in cranial neural crest cells (CNCCs); TCOF1 haploinsufficiency → p53-mediated apoptosis of CNCCs → facial bone/cartilage deficiency", "Loss of Treacle causes aberrant Wnt signaling in pharyngeal arch development", "TCOF1 mutation impairs FGF receptor signaling in the facial mesoderm"],
    answer: 1,
    explanation: "Treacher Collins syndrome (autosomal dominant, TCOF1/POLR1C/POLR1D): TCOF1 (encoding Treacle) is involved in RNA Pol I transcription and pre-rRNA processing in the nucleolus. Haploinsufficiency → reduced ribosome biogenesis → nucleolar stress → p53 activation → apoptosis of neuroepithelial cells and neural crest cells migrating to facial structures during development. Facial features: malar hypoplasia, micrognathia, coloboma, external ear anomalies, conductive hearing loss. Notably, p53 inhibition (pifithrin-α) rescues the zebrafish model, suggesting therapeutic potential."
  },
  {
    id: 31,
    question: "In autosomal recessive disorders, the risk of an affected child from two carrier parents is 25% per pregnancy. However, if the disease is very rare, the CARRIER frequency can be determined using Hardy-Weinberg equilibrium as approximately:",
    options: ["Equal to the disease frequency", "2√(disease frequency), since if disease frequency = q², then q = √(disease frequency) and carrier frequency = 2pq ≈ 2q", "The square root of the disease frequency (q, not 2q)", "Equal to twice the disease frequency"],
    answer: 1,
    explanation: "For a rare autosomal recessive disease with frequency q² in the population: q = √(q²) = √(disease frequency). p ≈ 1 (since q is small). Carrier frequency = 2pq ≈ 2q = 2√(disease frequency). Example: Cystic fibrosis frequency = 1/2500; q = 1/50; carrier frequency = 2/50 = 1/25. Sickle cell disease in African Americans: 1/400 → q = 1/20 → carrier frequency = 1/10. This is the fundamental population genetics calculation used in genetic counseling."
  },
  {
    id: 32,
    question: "Hereditary breast and ovarian cancer syndrome (HBOC) genetic testing using multi-gene panels reveals pathogenic variants in genes beyond BRCA1/2. Which additional genes are most clinically actionable?",
    options: ["Only BRCA1 and BRCA2 have clinical significance; other gene findings are all VUS", "PALB2 (breast cancer risk similar to BRCA2), ATM and CHEK2 (moderate risk genes), RAD51C/D (ovarian cancer risk) — each with specific surveillance/management implications", "TP53 and APC mutations are the most important beyond BRCA1/2", "MLPA analysis of LDLR gene is the next most important test"],
    answer: 1,
    explanation: "HBOC multi-gene panel testing identifies clinically actionable variants in multiple genes: (1) PALB2 — ~33-58% lifetime breast cancer risk (BRCA2-like), ovarian cancer risk; NCCPA guidelines recommend enhanced surveillance; (2) ATM — moderate breast cancer risk (~25-30%); ATM heterozygotes may have adverse radiation reactions; (3) CHEK2 — moderate breast cancer risk (~20-25%), colon cancer risk; (4) RAD51C/D — elevated ovarian cancer risk (~10-15%), breast cancer uncertain; (5) STK11 (Peutz-Jeghers), CDH1 (diffuse gastric/lobular breast cancer), PTEN (Cowden syndrome) — each with specific management protocols."
  },
  {
    id: 33,
    question: "The recurrence risk for a couple who has had a child with Down syndrome due to standard (non-translocation) trisomy 21 is:",
    options: ["The same as population risk (entirely age-dependent)", "Approximately age-specific risk + 1% additional risk (~1% above background); empirical studies show slightly elevated recurrence, likely due to genetic susceptibility to nondisjunction in some families", "25% — same as autosomal recessive", "50% — same as autosomal dominant"],
    answer: 1,
    explanation: "For standard trisomy 21 (from meiotic nondisjunction, not translocation): recurrence risk is age-specific risk + approximately 1% additional empirical risk. Most trisomy 21 is sporadic (99%) from maternal meiosis I nondisjunction; risk increases sharply with maternal age (1/1500 at 20, 1/270 at 35, 1/100 at 40). After one trisomy 21 child, the empirical recurrence risk is age-specific risk + ~1% — for young mothers this is meaningfully elevated above background. For translocation Down syndrome, risk depends on carrier parent and translocation type."
  },
  {
    id: 34,
    question: "In genetic counseling, the term 'genetic discrimination' refers to concerns addressed by legislation such as GINA (Genetic Information Nondiscrimination Act). GINA (USA) protects against:",
    options: ["Discrimination in life insurance, disability insurance, and long-term care insurance based on genetic information", "Discrimination in health insurance (Title I) and employment (Title II) based on genetic information, including results of genetic tests and family history of genetic conditions", "Only pre-symptomatic testing for adult-onset conditions", "Discrimination against individuals with visible genetic conditions (phenotypic discrimination)"],
    answer: 1,
    explanation: "GINA (2008) has two titles: (1) Title I — prohibits health insurance companies from using genetic information for eligibility, coverage, or premium setting; prohibits requiring genetic testing; (2) Title II — prohibits employers with >15 employees from using genetic information in hiring, firing, pay, or terms of employment; prohibits requesting/requiring genetic testing. GINA does NOT cover life insurance, disability insurance, or long-term care insurance (significant gap). The ADA (Americans with Disabilities Act) provides some additional protection for manifested genetic conditions."
  },
  {
    id: 35,
    question: "The recurrence risk for siblings of a proband with a polygenic multifactorial condition (e.g., neural tube defects, cleft lip/palate) is approximately:",
    options: ["Same as population risk (no familial aggregation)", "Significantly higher than population risk but less than Mendelian expectations; typically √(population prevalence) — for NTD with 1/1000 prevalence, sibling risk is ~3-5% (~30-50× population risk)", "25% — Mendelian recessive pattern", "50% — Mendelian dominant pattern"],
    answer: 1,
    explanation: "Polygenic/multifactorial conditions show familial aggregation but not Mendelian ratios. Sibling recurrence risk is: (1) Higher than population risk due to shared genes and environment; (2) Lower than Mendelian expectations. Empirically: sibling recurrence risk ≈ √(population prevalence) — the Falconer liability-threshold model prediction. For NTD (1/1000): sibling risk ~3-5%. For CLP (1/1000): sibling risk ~4%. Risk increases with more affected relatives and more severe phenotype. Folic acid supplementation reduces NTD recurrence risk by ~70%."
  },
  {
    id: 36,
    question: "Preimplantation genetic diagnosis (PGD) differs from prenatal diagnosis in that:",
    options: ["PGD tests embryos after birth, while prenatal diagnosis tests during pregnancy", "PGD tests embryos created by IVF before transfer to the uterus, allowing selection of unaffected embryos and avoiding therapeutic termination of pregnancy; it requires biopsy of 1-2 cells from day 3 embryo or 5-8 cells from blastocyst trophectoderm", "PGD only works for chromosomal abnormalities, not single gene disorders", "PGD cannot be used for X-linked disorders"],
    answer: 1,
    explanation: "PGD (preimplantation genetic diagnosis): IVF → embryo culture → biopsy at cleavage stage (day 3, 1-2 blastomeres) or blastocyst stage (day 5-6, 5-10 trophectoderm cells) → genetic analysis → transfer of unaffected embryo. Applications: single gene disorders (CF, HD, SCA, BRCA1/2), chromosomal translocations (PGD-SR), aneuploidy screening (PGD-A/PGS). Advantage: avoids termination of affected pregnancies. Disadvantage: technically demanding, expensive, requires IVF, limited number of embryos for selection, some couples have ethical concerns."
  },
  {
    id: 37,
    question: "Hemophilia A (factor VIII deficiency) affects males because it is X-linked recessive. A carrier mother who has no family history might be identified through:",
    options: ["Random testing of all women before childbearing", "Factor VIII activity levels (often 40-60% in carriers), or molecular testing for FMR1 mutations", "Identification of her carrier status after having an affected son, or by molecular testing of FVIII gene (F8), or by coagulation factor activity measurement (often reduced in carriers)", "APTT testing alone, which always detects carriers reliably"],
    answer: 2,
    explanation: "Hemophilia A carrier identification: (1) Clinical diagnosis after birth of affected son (most common); (2) Factor VIII activity levels — carriers often have 40-60% of normal FVIII activity (vs. <1% in severe hemophilia); some carriers have lower levels due to skewed X-inactivation and may bleed; (3) Molecular testing of F8 gene — intron 22 inversion (45% of severe HA), intron 1 inversion, point mutations detected by sequencing; (4) Prenatal/cascade testing of female relatives of known carriers. APTT is prolonged when FVIII < 30% but may be normal in carriers."
  },
  {
    id: 38,
    question: "Mitochondrial DNA (mtDNA) disorders show heteroplasmy. The 'threshold effect' in heteroplasmic mitochondrial disease means:",
    options: ["Below a threshold of mutant mtDNA, there is no cellular dysfunction; above the threshold, function falls critically (typically >60-80% mutant mtDNA for most tissues)", "A threshold of inheritance exists below which mitochondrial disorders are not transmitted", "The genetic threshold refers to the minimum age at which mitochondrial diseases manifest", "Only a threshold number of mitochondria per cell is required for normal function"],
    answer: 0,
    explanation: "Heteroplasmy = mixture of mutant and wild-type mtDNA within cells/tissues. Mitochondrial function remains normal until mutant mtDNA exceeds a threshold (varies by tissue/mutation): typically >60-80% mutant for most tissues (neurons and muscle have higher energy demand → lower tolerance). Below threshold: enough wild-type mtDNA to maintain function. Above threshold: bioenergetic failure. Threshold differs among organs (explains tissue specificity). Segregation of heteroplasmy during oogenesis (mitotic segregation) causes variable offspring heteroplasmy levels and disease severity."
  },
  {
    id: 39,
    question: "Non-invasive prenatal testing (NIPT) for fetal chromosomal aneuploidies uses cell-free fetal DNA (cffDNA) from maternal plasma. The major limitations of NIPT include:",
    options: ["NIPT is 100% accurate and requires no confirmatory testing", "NIPT is a screening test (not diagnostic); positive results require confirmation by invasive testing (amniocentesis/CVS); false positives from confined placental mosaicism, maternal chromosomal abnormalities, or vanishing twin; low fetal fraction (<4%) causes test failure", "NIPT can only detect Down syndrome (trisomy 21)", "NIPT requires 30 mL of fetal blood, not maternal blood"],
    answer: 1,
    explanation: "NIPT (cfDNA-based prenatal screening): maternal plasma contains cffDNA (placental trophoblast DNA, ~10-15% of total cfDNA, mainly from placenta). NIPT sensitively detects trisomies 21, 18, 13, and sex chromosome aneuploidies. Limitations: (1) Screening test — positive NIPT requires diagnostic confirmation by amniocentesis/CVS; (2) False positives from confined placental mosaicism (CPM — placenta has different karyotype than fetus), maternal aneuploidy/mosaicism, vanishing twin syndrome; (3) False negatives (low sensitivity for small deletions/duplications); (4) Low fetal fraction causes failure."
  },
  {
    id: 40,
    question: "Charcot-Marie-Tooth disease (CMT) type 1A (duplication of 17p12 containing PMP22) and hereditary neuropathy with liability to pressure palsies (HNPP, deletion of 17p12) demonstrate gene dosage sensitivity because:",
    options: ["PMP22 is a transcription factor requiring precise dosage for myelin gene regulation", "PMP22 encodes a myelin protein whose dosage is critical: 1.5× normal PMP22 (duplication) causes CMT1A with demyelinating neuropathy; 0.5× normal (deletion) causes HNPP with episodic demyelination at pressure points — reflecting strict dosage requirement for peripheral myelin formation", "The reciprocal exchange between normal chromosomes creates a new toxic protein in CMT1A", "HNPP patients have dominant negative PMP22 that poisons normal PMP22 function"],
    answer: 1,
    explanation: "PMP22 (peripheral myelin protein 22) demonstrates dose sensitivity: normal 2 copies → normal peripheral myelin. 3 copies (17p12 duplication, CMT1A, ~1/2500) → demyelinating polyneuropathy (slow nerve conduction velocities, pes cavus, hand weakness). 1 copy (17p12 deletion, HNPP) → episodic demyelination at entrapment sites (carpal tunnel syndrome, peroneal palsy). Both are among the most common hereditary peripheral neuropathies. Mechanism: PMP22 dosage affects myelin compaction, protein stoichiometry in compact myelin. CMT1A is treatable with low-dose progesterone antagonists (preclinically)."
  },
  {
    id: 41,
    question: "The 'founder effect' in medical genetics is most relevant when:",
    options: ["A new mutation spontaneously arises in an isolated population", "A small group colonizing a new area carries a few alleles from the founding population; certain genetic conditions become more common in the isolated population due to high frequency of a specific allele derived from the founder(s)", "Natural selection increases the frequency of beneficial alleles", "Gene flow between populations introduces new alleles"],
    answer: 1,
    explanation: "Founder effect: when a small group establishes a new population, they carry a subset of alleles from the source population. By chance, certain rare alleles may be overrepresented. Examples: Tay-Sachs disease in Ashkenazi Jews (~1/30 carrier frequency vs 1/300 in non-Jewish); phenylketonuria in Ireland/Ireland-derived populations (PAH mutations overrepresented); familial hypercholesterolemia in Afrikaners (South Africa) from Dutch founder (~1/70 in Afrikaners). Founder mutations can be traced to specific individual ancestors and often show characteristic haplotype backgrounds."
  },
  {
    id: 42,
    question: "Lesch-Nyhan syndrome is an X-linked disorder caused by hypoxanthine-guanine phosphoribosyltransferase (HPRT) deficiency. The characteristic behavior of self-mutilation is thought to be due to:",
    options: ["Excess uric acid directly damaging the basal ganglia, causing the behavior", "Profound dopaminergic dysfunction in the basal ganglia (striatum lacks dopaminergic innervation) due to impaired purine metabolism; exact mechanism of self-injurious behavior linking HPRT deficiency to dopamine dysfunction is not fully established but involves nigrostriatal pathway defects", "Direct toxicity of hypoxanthine to neurons causing seizures", "Absence of purines causing inability to produce ATP in neurons"],
    answer: 1,
    explanation: "Lesch-Nyhan syndrome (X-linked recessive, HPRT1 gene on Xq26.2): HPRT is essential for purine salvage (recycling hypoxanthine/guanine to IMP/GMP). Loss → de novo purine synthesis overactivated → excess uric acid (gout, kidney stones, nephropathy). The neurological features (self-mutilation, dystonia, intellectual disability, spasticity) are due to dopaminergic nigrostriatal pathway deficiency. HPRT is highly expressed in basal ganglia; its loss disrupts dopamine neurodevelopment. Allopurinol treats hyperuricemia but does NOT improve neurological features."
  },
  {
    id: 43,
    question: "Hereditary retinoblastoma (germline RB1 mutation) follows the two-hit model. Children with germline RB1 mutations develop tumors earlier and more frequently (often bilateral) compared to sporadic retinoblastoma because:",
    options: ["Germline RB1 mutations have dominant negative activity directly causing transformation", "In hereditary RB, every retinal cell already carries one RB1 mutation (first hit); only one additional somatic event (second hit) is required for tumor formation, making tumor development statistically certain in many retinal cells", "Germline RB1 mutations are more severe (complete deletions) than somatic mutations", "Hereditary retinoblastoma involves a different genetic mechanism than Knudson's two-hit model"],
    answer: 1,
    explanation: "Hereditary retinoblastoma (40% of all RB, 90% due to germline RB1 mutations): Every somatic cell carries one mutant RB1 (first hit, inherited). In retinal progenitor cells, loss of the second RB1 allele (LOH, deletion, mutation, methylation — second hit) leads to tumor formation. With ~1 million retinal cells potentially at risk and only one additional event needed, multiple tumors develop (average 2-5 tumors per eye, often bilateral). Sporadic RB requires two independent somatic events in the same cell — statistically rare, usually one unilateral tumor, later onset."
  },
  {
    id: 44,
    question: "Phenotypic heterogeneity (same gene causing different conditions) is exemplified by which of the following?",
    options: ["Different mutations in CFTR causing cystic fibrosis (a single disease)", "Different mutations in LMNA (lamin A/C) causing progeria (premature aging), Emery-Dreifuss muscular dystrophy, familial partial lipodystrophy, dilated cardiomyopathy, and Charcot-Marie-Tooth disease — completely different clinical phenotypes from the same gene", "Different populations having different frequencies of the same disease", "The same mutation causing different phenotypes based on the patient's sex"],
    answer: 1,
    explanation: "Phenotypic heterogeneity (same gene, different phenotypes) is exemplified by LMNA: mutations in the gene encoding nuclear lamins A and C cause >15 clinically distinct diseases ('laminopathies'): Hutchinson-Gilford progeria (R527H de novo), Emery-Dreifuss muscular dystrophy (several mutations), dilated cardiomyopathy (various), familial partial lipodystrophy Dunnigan type (R482), Charcot-Marie-Tooth 2B1, mandibuloacral dysplasia. Different mutations affect different lamin A/C functions (nuclear structural integrity, chromatin organization, mechanosensing, gene regulation)."
  },
  {
    id: 45,
    question: "The 'lethal equivalents' concept in population genetics quantifies the fitness cost of inbreeding. One lethal equivalent represents:",
    options: ["A single lethal recessive allele carried in the population", "The average number of recessive alleles per genome that would kill one individual if homozygous; each person carries approximately 1-2 lethal equivalents (0.02 lethals per locus per haploid genome across all loci)", "The inbreeding coefficient (F) × population size", "The fraction of the genome that is homozygous due to inbreeding"],
    answer: 1,
    explanation: "'Lethal equivalents' (Morton et al., 1956): humans carry an average of 1-2 lethal equivalents per gamete (~2-4 per individual, or estimates range to higher values with modern genome sequencing showing ~3-7 recessive lethal equivalents per individual). One lethal equivalent = the combined effect of recessive alleles that would kill one individual if all were homozygous. This explains why inbreeding (increasing homozygosity) increases early mortality and morbidity — it exposes deleterious recessive alleles as homozygotes. First-cousin marriages increase F by 0.0625, exposing ~5-6% additional homozygosity."
  },
  {
    id: 46,
    question: "The OMIM database (Online Mendelian Inheritance in Man) categorizes genetic phenotypes with mim numbers. A mim number preceded by '#' (e.g., #277900) indicates:",
    options: ["An autosomal dominant condition confirmed by molecular data", "A confirmed Mendelian phenotype with known molecular basis, described with specific molecular relationships", "A phenotype with uncertain Mendelian basis (provisional)", "An X-linked condition in MIM numbering convention"],
    answer: 1,
    explanation: "OMIM uses mim number prefixes: '*' = gene with known sequence; '#' = phenotype with known molecular basis (most informative for clinicians); '%' = Mendelian phenotype with unknown molecular basis; '+' = gene with known sequence and associated with a phenotype; '{  }' = susceptibility loci. '#277900 is Phenylketonuria (PAH mutations). The '#' designation means the gene(s) causing this phenotype are known and the phenotype-gene relationship is firmly established. OMIM is curated at Johns Hopkins and is the authoritative reference for Mendelian genetic disorders."
  },
  {
    id: 47,
    question: "Incidental findings (IFs) or variants of uncertain significance (VUS) in clinical genome sequencing present an ethical challenge because:",
    options: ["They always need to be reported to prevent harm to the patient", "They create dilemmas balancing the patient's right to know vs. potential harms of anxiety/unnecessary interventions; the ACMG recommends reporting a list of 80+ 'secondary findings' genes (SF3.2 list) in clinical exome/genome sequencing with patient consent to opt in/out", "All VUS should be withheld from patients to prevent confusion", "Incidental findings only occur in research settings, not clinical testing"],
    answer: 1,
    explanation: "ACMG recommends reporting pathogenic/likely pathogenic variants in a list of 80+ genes (SF3.2 list, 2021) associated with actionable conditions (cancer, cardiac conditions, metabolic disorders) as secondary findings in clinical genome/exome sequencing — regardless of the primary indication. Patients should be counseled and can opt out (with some debate about whether opt-out should be allowed). VUS present additional challenges: they should NOT be acted upon clinically but patients often misinterpret them as disease-causing. VUS reclassification over time adds further complexity to post-test counseling."
  },
  {
    id: 48,
    question: "In a family with autosomal dominant retinitis pigmentosa due to a RHO (rhodopsin) mutation, molecular testing of at-risk family members serves primarily to:",
    options: ["Cure the disease before symptoms onset by early treatment", "Identify mutation carriers who can benefit from surveillance, family planning decisions (including PGD), and enrollment in emerging gene therapy trials; non-carriers can be reassured without lifelong ophthalmological surveillance", "Determine the severity of disease expected in each carrier", "Establish eligibility for disability benefits based on genetic status"],
    answer: 1,
    explanation: "Predictive testing for adRP (RHO mutations, chromosome 3q22.1) identifies mutation carriers who: (1) benefit from regular ophthalmological surveillance; (2) can make informed reproductive decisions; (3) are eligible for gene therapy clinical trials (retinal gene therapy with AAV vectors is in active development); (4) can share information with at-risk relatives. Non-carriers need no further surveillance. Important: genetic testing in autosomal dominant conditions is highly predictive (penetrance of adRP is nearly complete) unlike VUS in complex conditions. Predictive testing requires pre-test counseling."
  },
  {
    id: 49,
    question: "The 'Cascade screening' approach in familial hypercholesterolemia (FH) is cost-effective because:",
    options: ["It tests all family members simultaneously regardless of the proband's genetic result", "Starting from a genetically-confirmed proband, systematic testing of first-degree relatives (50% risk), then their at-risk relatives reveals carriers before disease events, enabling early statin/PCSK9i treatment preventing premature atherosclerosis", "It uses population-level screening of all adults rather than targeted family testing", "It only tests children of affected parents, not adult siblings"],
    answer: 1,
    explanation: "Cascade genetic screening for FH: (1) Genetically confirm FH in proband (index case); (2) Test all first-degree relatives (50% prior probability); (3) Affected relatives test their first-degree relatives; and so on (cascading outward). Highly cost-effective because: prior probability is high (1/2 for first-degree relatives); each generation tested identifies more carriers at high risk for premature CHD; early statin therapy is inexpensive and highly effective; prevents expensive CHD events. Simon Broome, Dutch Lipid Clinic Network, and MEDPED criteria are used for clinical FH diagnosis."
  },
  {
    id: 50,
    question: "Pharmacogenetics of warfarin dosing demonstrates the clinical utility of genetic testing for drug dosing. The two most important pharmacogenetic variants affecting warfarin response are:",
    options: ["BRCA1 variants affecting DNA repair and drug sensitivity", "VKORC1 promoter variants (affecting target enzyme sensitivity, primarily explaining dose variance) and CYP2C9 variants (*2, *3 — slow metabolizers requiring lower doses); CYP4F2 variants have smaller effects", "CYP3A4 and CYP2D6 variants affecting warfarin metabolism", "MDR1 (ABCB1) variants affecting warfarin bioavailability"],
    answer: 1,
    explanation: "Warfarin pharmacogenetics: (1) VKORC1 (vitamin K epoxide reductase complex 1, target enzyme) — promoter variant A haplotype (-1639G>A) reduces VKORC1 expression → more warfarin-sensitive → lower dose required. Explains ~25% of dose variance; (2) CYP2C9 (metabolizes S-warfarin, the active isomer) — *2 (R144C, ~35% reduced activity) and *3 (I359L, ~5% residual activity) → reduced warfarin clearance → lower dose, higher bleeding risk. Together explain ~40-50% of dose variance. FDA-approved warfarin label includes VKORC1 and CYP2C9 genotype-based dosing recommendations."
  }
];

export default questions;
