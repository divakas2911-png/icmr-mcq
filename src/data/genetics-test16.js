const questions = [
  {
    id: 1,
    question: "A couple's first child has cystic fibrosis (autosomal recessive). The mother is pregnant again. What is the probability that the second child will be affected?",
    options: ["100%", "50%", "25%", "0%"],
    answer: 2,
    explanation: "Since the first child has CF (autosomal recessive), both parents must be carriers (Aa × Aa). Each subsequent pregnancy has an independent 25% chance of producing an affected child (aa). This probability applies regardless of the first child's outcome — each pregnancy is an independent event following the same Mendelian rules. Genetic counseling and prenatal testing (CVS or amniocentesis + CF genotyping) are available."
  },
  {
    id: 2,
    question: "A couple where the man has hemophilia A (X-linked recessive) and the woman has no family history — what is the probability their daughters will be carriers?",
    options: ["0%", "50%", "100%", "25%"],
    answer: 2,
    explanation: "Hemophilia A: X-linked, man is XhY (affected). His daughters receive his Xh chromosome, making all daughters XHXh (carriers, inheriting the father's X). His sons receive the Y chromosome, so no sons will be affected or carriers. All daughters (100%) will be obligate carriers, and no sons will be affected. This is why X-linked conditions never pass directly from affected father to affected son (sons receive Y from father)."
  },
  {
    id: 3,
    question: "In Hardy-Weinberg equilibrium, a population has a disease allele frequency of q = 0.02 for an autosomal recessive disorder. What percentage of the population are carriers?",
    options: ["0.04%", "2%", "3.92%", "0.04%"],
    answer: 2,
    explanation: "Carrier frequency = 2pq = 2 × (1 - 0.02) × 0.02 = 2 × 0.98 × 0.02 = 0.0392 = 3.92%. Disease frequency = q² = 0.02² = 0.0004 = 0.04%. p = 1 - q = 0.98. HWE assumptions: random mating, large population size, no selection, no mutation, no migration. Carrier frequency is always approximately 2q when q is small (2pq ≈ 2q when p ≈ 1). Carriers are far more numerous than affected individuals for rare recessive diseases."
  },
  {
    id: 4,
    question: "A LOD score in genetic linkage analysis represents:",
    options: ["Level of Disease significance (analogous to p-value)", "The log10 of the odds ratio comparing the probability of the observed family data if two loci are linked (at a given recombination fraction θ) vs. unlinked (θ=0.5); LOD ≥ 3 is considered significant evidence of linkage", "Loss of DNA (quantity metric in sequencing)", "Likelihood of Dominant inheritance"],
    answer: 1,
    explanation: "LOD score (Z) = log10[L(θ)/L(θ=0.5)] — logarithm of odds of linkage. LOD ≥ 3 (1000:1 odds) is traditionally accepted as significant evidence for linkage; LOD ≤ -2 excludes linkage. LOD scores from multiple families are additive (reason for log transformation). The maximum LOD (Zmax) occurs at the most likely recombination fraction (θmax = estimated map distance). LOD score analysis was the primary method for mapping Mendelian disease genes before WES/WGS. For complex diseases, parametric LOD is replaced by non-parametric linkage (NPL) methods."
  },
  {
    id: 5,
    question: "The Guthrie test for newborn screening of PKU uses which principle?",
    options: ["Colorimetric enzyme assay measuring phenylalanine hydroxylase activity", "Bacterial inhibition assay where B. subtilis growth is inhibited by β-aminobenzoic acid analog; high phenylalanine in the dried blood spot overcomes the inhibition, allowing bacterial growth proportional to phenylalanine concentration", "PCR amplification of PAH gene mutations", "Mass spectrometry of phenylalanine metabolites in dried blood spots"],
    answer: 1,
    explanation: "Guthrie bacterial inhibition assay (now largely replaced): B. subtilis growth is inhibited by β-thienylalanine (phenylalanine analog). High phenylalanine in the bloodspot competitively reverses the inhibition → bacterial growth around the disk = positive PKU screen. This semi-quantitative assay uses dried blood spot (Guthrie card) from heel prick at 24-48 hours after birth. Now replaced by tandem mass spectrometry (MS/MS) which simultaneously measures multiple amino acids, acylcarnitines, and can screen 50+ disorders from one dried blood spot with better sensitivity/specificity."
  },
  {
    id: 6,
    question: "In a pedigree with autosomal dominant polycystic kidney disease (ADPKD), an at-risk individual has a 50% prior probability of carrying the PKD1 mutation. A normal renal ultrasound at age 30 reduces this risk to:",
    options: ["0% — normal ultrasound completely excludes ADPKD", "35-40% — substantially but not completely excluded (ultrasound sensitivity at age 30 is ~85-90% for PKD1, so a normal scan modifies risk but doesn't eliminate it; Bayesian calculation: posterior = prior × likelihood ratio)", "50% — ultrasound has no diagnostic value in ADPKD", "5% — normal ultrasound is highly specific for excluding PKD1"],
    answer: 1,
    explanation: "Bayesian calculation for ADPKD (PKD1): Prior P(carrier) = 0.5. Ultrasound sensitivity at age 30 for PKD1 (Ravine criteria) ≈ 95%; specificity ~100%. If ultrasound is normal: likelihood of normal scan given carrier (LR-) = 1 - sensitivity = 0.05; given non-carrier = 1. Posterior P(carrier | normal US) = (0.5 × 0.05) / (0.5 × 0.05 + 0.5 × 1) = 0.025/0.525 ≈ 5%. A normal ultrasound at age 30 in PKD1 reduces risk to ~5%. Molecular genetic testing of PKD1/PKD2 is now preferred for definitive diagnosis and risk stratification."
  },
  {
    id: 7,
    question: "In an autosomal recessive condition, the carrier rate in a population is 1 in 25. What is the probability that two unrelated carriers will marry?",
    options: ["1 in 25", "1 in 50", "1 in 625", "1 in 2500"],
    answer: 2,
    explanation: "Probability that both parents are carriers = (1/25) × (1/25) = 1/625. This is the probability of a carrier-carrier mating in the population. Each pregnancy of two carriers has a 1/4 risk of being affected. Therefore, disease frequency = (1/625) × (1/4) = 1/2500 = q². This is consistent with q = 1/50 and HWE (q² = 1/2500). This calculation explains why carrier frequency (~1/25) is much higher than disease frequency (~1/2500)."
  },
  {
    id: 8,
    question: "The ACMG guidelines recommend reporting certain 'secondary findings' genes in clinical exome/genome sequencing. The rationale is based on which primary criterion?",
    options: ["All genetic variants found should be reported regardless of clinical significance", "Genes on the SF list (currently 80+ genes) are associated with conditions where clinical intervention can reduce morbidity/mortality; the benefit of knowing outweighs risks of anxiety/discrimination for these actionable conditions", "Only variants already documented in ClinVar as pathogenic should be reported", "Secondary findings are only reported if the patient specifically requests cancer predisposition results"],
    answer: 1,
    explanation: "ACMG secondary findings (SF3.2 list, 2021): 80+ genes (previously 59 in v2.0) associated with: hereditary cancer syndromes (BRCA1/2, Lynch MMR genes, TP53, RET, VHL, MEN1), cardiovascular conditions (KCNQ1, LDLR, PKP2, RYR2), and metabolic conditions (OTC). Criteria for inclusion: intervention can reduce morbidity/mortality or prevent/treat disease. Patients can opt out of receiving SF results, though ACMG initially recommended they should not be able to opt out (controversial). Professional societies debate: pro-reporting (actionability, family implications) vs. anti-reporting (patient autonomy, uncertain penetrance)."
  },
  {
    id: 9,
    question: "The genetic code is considered 'degenerate' or 'redundant.' The most accurate statement about degeneracy is:",
    options: ["Multiple codons code for the same amino acid (up to 6 codons per amino acid), but the genetic code is still unambiguous — each codon specifies only one amino acid", "Multiple amino acids are encoded by the same codon — one codon can code for 2-3 different amino acids", "The genetic code is completely random with no systematic relationship between codons and amino acids", "Degeneracy means that stop codons can sometimes encode amino acids in certain organisms"],
    answer: 0,
    explanation: "Code degeneracy: 64 codons encode 20 amino acids + 3 stop codons. Multiple codons → same amino acid (synonymous codons). Example: Leu (6 codons: UUA, UUG, CUU, CUC, CUA, CUG); Arg (6 codons); Met and Trp (1 codon each). Wobble position (3rd codon position) accounts for most degeneracy. The code is unambiguous (each codon encodes only one amino acid) but degenerate (each amino acid encoded by 1-6 codons). Degeneracy provides robustness — synonymous mutations don't change amino acid (silent mutations). Some degeneracy follows wobble rules (Crick 1966)."
  },
  {
    id: 10,
    question: "A child presents with profound intellectual disability, ataxia, absent speech, and a happy, easily excitable demeanor. Methylation testing of chromosome 15q11-q13 shows abnormal maternal pattern. The diagnosis and molecular mechanism is:",
    options: ["Prader-Willi syndrome (PWS) due to paternal UPD15", "Angelman syndrome (AS) — loss of maternal 15q11-q13 function (deletion OR paternal UPD15 OR ICR defect OR UBE3A mutation); AS is caused by loss of maternally expressed UBE3A (E3 ubiquitin ligase) in neurons, with abnormal methylation test showing absence of the maternal band", "Fragile X syndrome — CGG expansion at Xq27.3", "Rett syndrome — MECP2 mutation on Xq28"],
    answer: 1,
    explanation: "Angelman syndrome clinical triad: severe ID, absence of speech, ataxia/tremor, happy sociable demeanor, seizures (EEG abnormalities), microcephaly. Methylation test: abnormal (shows only paternal methylation pattern at 15q11-q13 — maternal band absent). Molecular causes: (1) Maternal deletion (70%) — del(15)(q11-q13) on maternal chromosome; (2) Paternal UPD15 (5%) — two paternal copies, no maternal UBE3A; (3) Imprinting center defect (3%); (4) UBE3A mutation (10%); (5) Unknown (12%). UBE3A (E6-AP ubiquitin ligase) is biallelically expressed in non-neuronal cells but imprinted (only maternal allele active) in neurons. UBE3A antisense RNA silences paternal UBE3A in neurons."
  },
  {
    id: 11,
    question: "In population genetics, genetic drift has a greater effect in:",
    options: ["Large populations with high gene flow", "Small, isolated populations where random fluctuations in allele frequency are proportionally larger and can lead to allele fixation or loss", "Populations subject to strong directional selection", "Panmictic populations with random mating"],
    answer: 1,
    explanation: "Genetic drift: random changes in allele frequency due to chance sampling in finite populations. Effect is inversely proportional to population size (N): variance in allele frequency change per generation ≈ p(1-p)/(2N). Small N → large drift → can rapidly fix or lose alleles regardless of fitness. Effective population size (Ne) accounts for population structure, sex ratio, variance in reproductive success. Examples of drift consequences: (1) Founder effect — new population from few founders; (2) Bottleneck — population size temporarily reduced; (3) Island effect — isolation + small size → fixation of rare alleles. The neutral theory of molecular evolution (Kimura): most molecular evolution is by drift, not selection."
  },
  {
    id: 12,
    question: "The neutral theory of molecular evolution (Kimura, 1968) predicts that:",
    options: ["All genetic variants in a population are under strong selection pressure", "Most molecular variation (SNPs, synonymous changes) is selectively neutral — not beneficial or harmful; their fate is determined by random genetic drift rather than natural selection; the rate of neutral molecular evolution equals the neutral mutation rate (μ)", "Protein-changing variants are always neutral while regulatory variants are under selection", "Neutral theory applies only to prokaryotic genomes"],
    answer: 1,
    explanation: "Kimura's neutral theory: the majority of molecular polymorphisms within species and substitution differences between species are selectively neutral. Key predictions: (1) Rate of neutral molecular evolution = neutral mutation rate (μ) regardless of population size; (2) Synonymous (silent) substitutions evolve faster than non-synonymous (protein-changing) because fewer synonymous changes are deleterious; (3) The nearly neutral theory (Ohta) extends this — slightly deleterious mutations are nearly neutral in large populations but drift to fixation in small populations. Molecular clock: neutral substitutions accumulate at approximately constant rate per unit time — useful for dating divergence events."
  },
  {
    id: 13,
    question: "Gene therapy for hemophilia B using AAV5-FIX (etranacogene dezaparvovec/Hemgenix) targets which organ, and what is the rational for this choice?",
    options: ["Bone marrow — because hematopoietic stem cells produce coagulation factors", "Liver — because hepatocytes are the primary site of Factor IX (FIX) synthesis in vivo; liver-tropic AAV serotypes (AAV5, AAVrh10, AAV8) efficiently transduce hepatocytes, achieving therapeutic FIX expression from a single intravenous injection in clinical trials", "Brain — because the CNS requires FIX for neurological protection", "Muscle — because stable muscle transduction is more durable than liver transduction"],
    answer: 1,
    explanation: "Hemophilia B gene therapy: FIX (F9 gene) is produced exclusively in hepatocytes. AAV5-hFIX variant Padua (E531K) — this gain-of-function FIX variant has 8× higher specific activity, allowing lower vector dose. Etranacogene dezaparvovec (Hemgenix, CSL Behring): AAV5 vector with liver-specific promoter (ApoE enhancer + hAAT promoter) driving FIX-Padua; single IV infusion → sustained FIX expression ~42 IU/dL at 18 months → eliminates annual bleeding rate. FDA approved 2022 — most expensive drug at approval (~$3.5M/dose). Limitation: pre-existing AAV5 neutralizing antibodies excludes some patients."
  },
  {
    id: 14,
    question: "Exome sequencing in a patient with unexplained intellectual disability reveals a de novo heterozygous missense variant in DYRK1A (p.Arg525Trp). The variant is classified as pathogenic because:",
    options: ["The variant changes an amino acid, which always causes disease", "Multiple lines of evidence support pathogenicity: de novo occurrence (PS2, strong), known disease gene with established mechanism (loss-of-function haploinsufficiency in syndromic ID — PM1/PP2), CADD score indicating high deleteriousness (PP3), compatible phenotype (PP4), and absence from population databases (PM2); together these criteria classify it as Pathogenic per ACMG/AMP guidelines", "The variant was not found in the unaffected parents, proving it is causative", "The variant is at a highly conserved position in a phosphorylation domain"],
    answer: 1,
    explanation: "ACMG/AMP 2015 pathogenicity criteria applied to de novo DYRK1A variant: (1) PS2 — de novo (confirmed parentage) in disease-consistent presentation = Strong Pathogenic; (2) PM1 — located in critical functional domain (kinase catalytic domain) = Moderate Pathogenic; (3) PM2 — absent from gnomAD (or very rare) = Moderate Pathogenic; (4) PP2 — missense variant in DYRK1A where missense variants are a common mechanism of disease = Supporting Pathogenic; (5) PP3 — multiple in silico predictors (CADD, SIFT, PolyPhen) predict damaging = Supporting Pathogenic; (6) PP4 — phenotype consistent with DYRK1A haploinsufficiency syndrome. Combination → Pathogenic classification."
  },
  {
    id: 15,
    question: "In genetics, 'genetic anticipation' observed in myotonic dystrophy type 1 (DM1) has been particularly noted with maternal transmission producing congenital DM1. The molecular explanation is:",
    options: ["Maternal imprinting of the DMPK gene silences the paternal copy, causing maternal-origin expansions to be more pathogenic", "CTG repeat expansion in DMPK is particularly prone to further expansion during oogenesis (compared to spermatogenesis); maternal transmissions of premutation alleles (50-150 CTG) frequently expand to congenital DM1 alleles (1000-5000+ CTG), which cause the most severe form (congenital DM1 with neonatal hypotonia and respiratory failure)", "The maternal uterine environment amplifies repeat instability postnatally", "The DMPK gene shows X-linked imprinting specific to the maternal allele"],
    answer: 1,
    explanation: "DM1 (19q13.3 DMPK CTG repeat): meiotic instability of CTG repeats is strongly influenced by sex of transmitting parent. Maternal transmission: Oogenesis shows greater expansion tendency especially for large premutation alleles (100-150 CTG) → frequent expansion to 1000-5000 CTG (congenital DM1 range). Congenital DM1 (>1000 CTG) causes: severe neonatal hypotonia, respiratory failure, intellectual disability, clubfoot. Paternal transmission: shows less consistent expansion; rarely produces congenital DM1 from premutation alleles. CTG repeat instability in somatic tissues also contributes to disease progression over lifetime."
  },
  {
    id: 16,
    question: "Which statement BEST describes the CRISPR-Cas12a (Cpf1) system compared to CRISPR-Cas9?",
    options: ["Cas12a uses the same guide RNA structure as Cas9 and has identical PAM requirements", "Cas12a uses a crRNA (without tracrRNA), requires a T-rich PAM (TTTV) on the 5' side of the target, creates staggered DSBs (5-nt 5' overhangs) rather than blunt cuts, and also exhibits collateral trans-cleavage of ssDNA upon target binding — used in diagnostics (DETECTR)", "Cas12a has the same PAM (NGG) as SpCas9 but different guide architecture", "Cas12a was the first CRISPR effector discovered and was used before Cas9 in genome editing"],
    answer: 1,
    explanation: "Cas12a (Cpf1) from Acidaminococcus/Lachnospiraceae: (1) Single crRNA (no tracrRNA needed — RNase activity in Cas12a processes its own pre-crRNA array); (2) PAM: 5'-TTTV-3' (T-rich, on 5' side of protospacer — different from SpCas9's NGG on 3' side); (3) Staggered cut: cleaves 18 bp from PAM on non-template strand, 23 bp on template strand → 5-nt 5' overhang (vs. Cas9 blunt cut); (4) Smaller than Cas9 (easier AAV packaging); (5) Collateral trans-cleavage of ssDNA upon activation → DETECTR (DNA Endonuclease-Targeted CRISPR Trans Reporter) diagnostic platform. First applied in SHERLOCK (Cas13) and DETECTR (Cas12a) for COVID-19 diagnostics."
  },
  {
    id: 17,
    question: "In trisomy 21 (Down syndrome), the karyotype shows 47,XX,+21 or 47,XY,+21. The extra chromosome 21 most commonly arises from:",
    options: ["Paternal meiosis II nondisjunction", "Maternal meiosis I nondisjunction (failure of homologous chromosome 21 pair to separate at anaphase I of maternal meiosis), occurring in ~75% of standard trisomy 21 cases, with frequency increasing with advanced maternal age", "Random de novo somatic mutation in early embryogenesis", "Uniparental disomy where both copies come from the father"],
    answer: 1,
    explanation: "Trisomy 21 origin: ~93% standard trisomy 21 (nondisjunction); ~4% Robertsonian translocation; ~3% mosaic. Of standard trisomy 21: ~75-80% from maternal meiosis I nondisjunction (the most common origin); ~15% maternal meiosis II nondisjunction; ~5% paternal origin; <1% postzygotic mitotic error. Maternal age effect: chromosome 21 bivalent is particularly vulnerable to age-dependent chiasma loss (chiasmata normally hold bivalents together). Maternal age-specific risk: age 35 → 1/350; age 40 → 1/100; age 45 → 1/30. The recombinant bivalent stability theory: young women have distal recombinants near telomere (stable); older women have predisposed bivalents that fail to segregate."
  },
  {
    id: 18,
    question: "The protein product of the SRY gene (sex-determining region Y) initiates male sex determination by:",
    options: ["Directly converting female gonads into testes through hormonal signaling", "SRY protein (HMG-box domain transcription factor) activates SOX9 expression in the gonadal ridge by binding and bending the SOX9 testis-specific enhancer (TESCO); SOX9 then drives the entire testis-determining cascade including Sertoli cell differentiation, Müllerian inhibiting substance (AMH) production, and testosterone synthesis", "SRY encodes testosterone, directly causing male development", "SRY silences FOXL2 (ovarian determinant) through direct methylation of the FOXL2 promoter"],
    answer: 1,
    explanation: "SRY → sex determination: SRY is expressed in gonadal ridge supporting cells at E10.5-11.5 in mice. SRY protein (HMG box) binds and bends DNA at TESCO (testis-specific enhancer of Sox9) → activates SOX9 → self-reinforcing loop (SOX9 + SF1 + GATA4 further activate TESCO). SOX9 drives Sertoli cell differentiation → AMH (Müllerian regression) + testosterone (masculinization via DHT). SRY-SOX9 also suppresses FOXL2 (female determining TF) and WNT4/RSPO1/β-catenin (female pathway). 46,XY females with SRY deletion → gonadal dysgenesis. 46,XX males with SRY translocation → testes develop."
  },
  {
    id: 19,
    question: "Restriction fragment length polymorphisms (RFLPs) were historically used as genetic markers. They differ from modern SNP genotyping in that:",
    options: ["RFLPs are more numerous in the genome than SNPs, providing better coverage", "RFLPs detect variation at restriction enzyme cut sites (presence/absence of a cut site changes fragment size on Southern blot); they have only 2 alleles per locus, require radioactive Southern blotting, and are technically laborious compared to modern SNP arrays that genotype millions of SNPs simultaneously using fluorescence", "RFLPs were discovered after SNPs and represent a refinement of SNP technology", "RFLPs detect insertions/deletions while SNPs detect only nucleotide substitutions"],
    answer: 1,
    explanation: "RFLPs (Botstein et al., 1980): restriction enzyme cuts DNA at sequence GAATTC (EcoRI); if SNP changes GAATTC → non-recognition sequence, no cut → different fragment sizes. Detected by Southern blot. Limitations: only 2 alleles (biallelic), low heterozygosity (often <50%), technically demanding, requires micrograms of DNA, radioactive labeling. Replaced by: STR/microsatellite markers (more polymorphic, PCR-based, multiplex panels), then SNP arrays (Affymetrix/Illumina genotyping chips interrogate 500K-5M SNPs simultaneously from <1 μg DNA using fluorescent labeled primer extension). Historical importance: RFLPs enabled first human genetic maps and Huntington disease gene linkage."
  },
  {
    id: 20,
    question: "In Mendelian genetics, Mendel's second law (law of independent assortment) applies only when:",
    options: ["Both genes are dominant and located on different chromosomes", "The two genes are on different chromosomes (or sufficiently far apart on the same chromosome so that recombination creates apparent independence); genes close together on the same chromosome are linked and do NOT assort independently", "The two traits are controlled by codominant alleles", "Both genes show incomplete penetrance in the hybrid cross"],
    answer: 1,
    explanation: "Mendel's law of independent assortment holds when: genes are on different chromosomes (random orientation of bivalents at meiosis I → independent segregation). Genes on the same chromosome violate independent assortment (they are 'linked') unless sufficiently far apart (>50 cM, where recombination makes them appear to assort independently). Mendel was fortunate — his 7 pea traits happened to be on different chromosomes or sufficiently separated. Linkage was discovered after Mendel's laws, explaining apparent exceptions (e.g., two traits in coupling showing 3:1 ratio instead of expected 9:3:3:1)."
  },
  {
    id: 21,
    question: "Next-generation sequencing-based non-invasive prenatal testing (NIPT) for fetal chromosomal aneuploidies relies on which key principle?",
    options: ["Sequencing only maternal DNA to find chromosomal abnormalities", "The fraction of cell-free DNA in maternal plasma derived from placental trophoblasts (cffDNA, ~10-15% of total cfDNA after 10 weeks) can be counted and statistically analyzed — overrepresentation of reads from chromosome 21 (vs. expected from a normal diploid fetus) indicates fetal trisomy 21", "Sequencing fetal cells collected by fluorescent activated cell sorting of maternal blood", "Detecting fetal-specific protein markers in maternal blood for chromosomal abnormality prediction"],
    answer: 1,
    explanation: "NIPT principle: maternal plasma cfDNA mixture (85-90% maternal, 10-15% fetal from placental syncytiotrophoblasts). Sequencing-based NIPT: massive parallel sequencing (MPS) of all cfDNA → count reads mapping to each chromosome → statistical test (z-score or similar) compares observed fraction mapping to chr21 vs. expected based on chr21 size → z-score >3 indicates probable trisomy 21. Alternatively, SNP-based NIPT (e.g., Panorama) uses SNP polymorphisms to distinguish maternal and fetal alleles with greater precision. Sensitivity >99% for T21; specificity >99.9%. Must be followed by diagnostic testing for positive results."
  },
  {
    id: 22,
    question: "In a family, the proband has a point mutation in the PTEN gene (hamartoma tumor syndrome/Cowden syndrome). Cascade testing reveals the mother has the same mutation. This finding implies:",
    options: ["The mutation arose de novo in the mother and the proband inherited it", "PTEN mutation is autosomal dominant — the mother's presence of mutation explains inheritance (50% risk to each sibling of proband); the mutation may have been inherited from the maternal grandfather or arose de novo in the mother; siblings have 50% risk and maternal relatives should be offered cascade testing", "Both mother and proband must have a second somatic mutation for disease to manifest (two-hit model)", "PTEN Cowden syndrome is X-linked, so the father's mutation status should be checked"],
    answer: 1,
    explanation: "PTEN mutations cause Cowden syndrome (autosomal dominant — haploinsufficiency mechanism). Finding mutation in mother of proband: (1) Mother may have inherited from her parent (proband's grandparent) → maternal grandparents should be tested; (2) Mother had de novo mutation → no risk to maternal relatives before her. Implications: (1) Each sibling of proband has 50% risk (from carrier mother); (2) Mother's siblings have 50% risk from their shared parent; (3) Cascade testing: all first-degree relatives of confirmed carriers should be offered testing. PTEN Cowden: surveillance for breast (70-85% lifetime risk), thyroid, endometrial, colorectal cancers."
  },
  {
    id: 23,
    question: "Which genetic condition demonstrates 'genomic imprinting' with the affected phenotype determined by the parent of origin of a normal chromosome 15?",
    options: ["Down syndrome — extra chromosome 21", "Angelman syndrome (AS) vs. Prader-Willi syndrome (PWS) — identical 15q11-q13 deletions cause PWS (paternal deletion) or AS (maternal deletion), demonstrating that the parental origin of the deleted chromosome determines the syndrome", "Turner syndrome — monosomy X", "DiGeorge syndrome — 22q11 deletion"],
    answer: 1,
    explanation: "Genomic imprinting at 15q11-q13: this region contains maternally expressed genes (UBE3A in neurons) and paternally expressed genes (SNRPN, NDN, MKRN3, MAGEL2, snoRNAs). Deletion of maternal 15q11 → loss of maternal UBE3A → Angelman syndrome. Deletion of paternal 15q11 → loss of paternally expressed genes → Prader-Willi syndrome. The same chromosomal deletion produces different syndromes depending purely on which parent contributed the deleted chromosome. This is the classic proof of genomic imprinting in humans, established by analyzing patients with deletions of known parental origin vs. UPD cases."
  },
  {
    id: 24,
    question: "The genetic mechanism explaining why females are mosaic for X-linked traits (while males are hemizygous) is called Lyon's hypothesis. Lyon's hypothesis predicts which of the following?",
    options: ["X-inactivation is a permanent, irreversible epigenetic mechanism established early in development; inactivation is random (either X can be inactivated in each cell); once established it is clonally maintained through all subsequent cell divisions, creating a mosaic of two cell populations in females", "X-inactivation occurs in all cells including gametes (oocytes), meaning all eggs have an inactive X", "X-inactivation preferentially inactivates the paternal X chromosome in all tissues (imprinted X-inactivation)", "The active X chromosome in females is always the maternal X chromosome"],
    answer: 0,
    explanation: "Lyon hypothesis (1961): (1) One X chromosome is inactivated in each somatic cell early in female embryo development (at blastocyst stage, ~6.5 days in mice, day 12-16 in humans in epiblast); (2) Inactivation is random (maternal or paternal X equally likely, unless skewed by selection or chance); (3) Clonally maintained — all daughter cells maintain the same inactive X as established in the founder cell. Exceptions: PAR (pseudoautosomal regions) genes and ~15% of X-linked genes escape inactivation. Note: imprinted X-inactivation (always paternal X silenced) occurs in extraembryonic tissues (trophoblast) but not in embryo proper."
  },
  {
    id: 25,
    question: "In a genome-wide association study, a SNP shows association with lung cancer risk (OR = 1.35, p = 3×10⁻⁹). The rs number is rs6857 in a 15q25 region containing nicotinic acetylcholine receptor (CHRNA5-CHRNA3-CHRNB4) genes. The primary challenge in interpreting this association is:",
    options: ["The p-value is not statistically significant (below genome-wide threshold)", "Disentangling whether the association is direct (variants directly increase lung cancer risk) or indirect (variants influence smoking behavior/nicotine dependence, which then causes lung cancer — a classic confounding by intermediate phenotype issue); Mendelian randomization using these SNPs as instruments for smoking behavior can partially address this", "OR=1.35 is too small to be biologically meaningful", "15q25 SNPs cannot be genotyped on current SNP arrays"],
    answer: 1,
    explanation: "15q25 CHRNA5-A3-B4 locus: among the strongest GWAS signals for lung cancer. The challenge: these nicotinic receptor variants also strongly associate with smoking behavior (cigarettes per day, nicotine dependence, smoking initiation). So the lung cancer association could be: (1) Direct — nicotinic receptor variant increases lung cancer risk independently of smoking (e.g., altered cellular proliferation signaling); (2) Indirect (mediated) — variant → increased smoking → increased cancer; (3) Both pathways. Mendelian randomization analyses and tumor mutation signatures suggest both direct and mediated effects contribute. This exemplifies pleiotropy and intermediate phenotype challenges in GWAS interpretation."
  },
  {
    id: 26,
    question: "Whole genome sequencing (WGS) of a patient with rare disease after negative standard clinical work-up reveals a tandem duplication of exon 16 in the TSC2 gene by read depth analysis. This finding would:",
    options: ["Be classified as a VUS (variant of uncertain significance) because duplications always require functional studies", "Be classified as likely pathogenic/pathogenic if: the duplication disrupts the TSC2 reading frame (predicted to cause loss-of-function via frameshift/NMD), family history is consistent with TSC, phenotype includes tuberous sclerosis complex features, and WGS read depth analysis (CNV) and/or MLPA confirmation show the duplication — fulfilling multiple ACMG criteria", "Not be reported because WGS does not detect copy number variants", "Require Sanger sequencing confirmation before any clinical interpretation"],
    answer: 1,
    explanation: "Tandem exon duplication in TSC2 in a patient with TSC-consistent features: (1) Pathogenicity depends on effect — if in-frame duplication producing functional protein may be tolerated; if frameshifting duplication → premature stop → NMD → haploinsufficiency → pathogenic; (2) TSC2 is a well-established dominant tumor suppressor (haploinsufficiency mechanism) with >2800 pathogenic variants documented; (3) Exon duplications are typically missed by Sanger/sequencing but detected by WGS CNV calling, MLPA, or exon-targeted microarray; (4) MLPA (Multiplex Ligation-dependent Probe Amplification) is the standard method to confirm exon-level copy number changes in TSC1/TSC2. WGS CNV analysis requires confirmation by orthogonal method."
  },
  {
    id: 27,
    question: "A 5-year-old boy with rapidly progressive neurodegeneration has WES showing a homozygous variant in POLG (polymerase gamma). The inheritance pattern and clinical relevance is:",
    options: ["X-linked recessive — POLG is on the X chromosome", "Autosomal recessive — POLG encodes mitochondrial DNA polymerase gamma; homozygous/compound heterozygous POLG mutations cause mitochondrial DNA depletion/deletion syndromes (Alpers syndrome, SANDO, PEO); mitochondrial disease despite POLG being a nuclear gene (autosomal recessive)", "Mitochondrial inheritance — POLG is on mtDNA", "Autosomal dominant — heterozygous POLG mutations cause disease"],
    answer: 1,
    explanation: "POLG (chromosome 15q26.1) encodes the catalytic subunit of mitochondrial DNA polymerase gamma — a nuclear gene with mitochondrial function. Mutations cause: (1) Alpers syndrome (AR POLG): childhood onset hepatoencephalopathy, seizures, liver failure, progressive neurodegeneration → death in childhood. Liver failure risk with valproic acid. (2) SANDO (Sensory Ataxic Neuropathy, Dysarthria, Ophthalmoplegia): adult onset. (3) Progressive external ophthalmoplegia (PEO): with mtDNA deletions. Mechanism: defective mtDNA replication → mtDNA depletion or accumulation of large mtDNA deletions in affected tissues. Inheritance: AR for most severe childhood forms; AD for adult-onset milder forms. Mitochondrial disease from nuclear gene mutation = important diagnostic concept."
  },
  {
    id: 28,
    question: "In a four-generation family, a condition affects only males and is transmitted through unaffected carrier females. The condition affects 50% of sons of carrier females. This inheritance pattern is:",
    options: ["Autosomal dominant with sex-limited expression", "X-linked recessive — consistent with all described features: affected males (hemizygous XhY), carrier females (XHXh, unaffected), 50% of sons affected, 50% of daughters carriers, no male-to-male transmission", "Y-linked (holandric) — all males in each generation are affected", "Autosomal recessive with male sex as an environmental modifier"],
    answer: 1,
    explanation: "X-linked recessive (XLR) inheritance features: (1) Males affected (hemizygous, only one X copy), females usually unaffected (carriers with 50% expression from inactivated X in some cells); (2) Carrier females have 50% affected sons and 50% carrier daughters per pregnancy; (3) No male-to-male transmission (sons receive Y from father, not X); (4) Affected males receive X from carrier mothers; (5) All daughters of affected males are obligate carriers. This pattern fits hemophilia A/B, DMD, G6PD deficiency, X-linked agammaglobulinemia, Fabry disease, and ~400 other X-linked conditions."
  },
  {
    id: 29,
    question: "Sickle cell anemia is caused by a single nucleotide substitution (HBB c.20A>T, p.Glu6Val) that causes hemoglobin to polymerize when deoxygenated. This mutation provides evidence for which evolutionary concept?",
    options: ["Neutral evolution — the HbS allele is neutral in all environments", "Heterozygote advantage (overdominance) — HbS/HbA carriers have higher fitness in malaria-endemic regions (reduced malaria severity) than either HbS/HbS (sickle cell disease) or HbA/HbA (full malaria susceptibility); this balancing selection maintains the HbS allele at high frequency (8-30%) in malaria-endemic African populations", "Directional selection removing the HbS allele from the population", "Genetic drift causing high HbS frequency in African populations without any selective advantage"],
    answer: 1,
    explanation: "Heterozygote advantage (balancing selection): Hb sickle cell (HbS): (1) HbS/HbS — sickle cell disease (severe, reduced fitness without modern treatment); (2) HbA/HbS — sickle cell trait, largely asymptomatic, partially protects against Plasmodium falciparum malaria (reduced parasitemia, sickling in infected cells impairs parasite growth); (3) HbA/HbA — fully susceptible to malaria. In malaria-endemic Africa, HbA/HbS heterozygotes have highest overall fitness → balancing selection maintains HbS at 8-30% carrier frequency. Without malaria, selection against HbS/HbS would remove HbS from the population (directional selection toward HbA). This is the classic example of overdominance in human genetics."
  },
  {
    id: 30,
    question: "A patient with familial hypercholesterolemia undergoes liver transplantation. This could theoretically cure FH because:",
    options: ["The transplanted liver will be from an FH-negative donor and will produce normal levels of LDL receptors, restoring normal LDL cholesterol clearance from the blood", "Liver transplantation corrects the underlying LDL receptor deficiency only if combined with statins", "The transplant liver will produce HDL that compensates for absent LDL receptors", "Liver transplantation is not effective for FH — only bone marrow transplant helps"],
    answer: 0,
    explanation: "Liver is the major site of LDL receptor (LDLR) expression — accounts for ~70% of LDL clearance from circulation. In homozygous FH (both LDLR alleles non-functional): severe hypercholesterolemia from birth → premature atherosclerosis in childhood/teens. Liver transplantation with a LDLR-normal donor liver provides functional LDLRs → restores LDL clearance → dramatic LDL reduction. Case reports show substantial LDL reduction and cardiovascular improvement. However: donor organ availability, immunosuppression risks, and now availability of PCSK9 inhibitors + lomitapide + evinacumab limit transplant use to refractory cases. Gene therapy with AAV8-LDLR is in clinical trials."
  },
  {
    id: 31,
    question: "CRISPR-based diagnostic platforms (SHERLOCK, DETECTR) exploit which Cas enzyme property for pathogen detection?",
    options: ["Precise on-target DNA editing creating a detectable size shift", "Collateral (trans) cleavage activity — upon activating recognition of a specific target nucleic acid sequence, the Cas effector (Cas13 for SHERLOCK, Cas12a for DETECTR) non-specifically cleaves nearby reporter molecules (labeled ssRNA for Cas13, ssDNA for Cas12a) releasing a fluorescent or colorimetric signal proportional to target presence", "PCR-like amplification using Cas9 as a thermostable polymerase", "CRISPR base editing that changes a diagnostic SNP to a detectable sequence"],
    answer: 1,
    explanation: "CRISPR diagnostics exploit collateral (trans) cleavage: (1) SHERLOCK (Specific High-Sensitivity Enzymatic Reporter unLOCKing, Cas13a): target RNA + Cas13a crRNA → Cas13a activated → non-specific cleavage of reporter ssRNA (fluorescent or LFD dipstick) → signal; combined with RPA + T7 transcription for pre-amplification; attomolar sensitivity; (2) DETECTR (DNA Endonuclease-Targeted CRISPR Trans Reporter, Cas12a): target DNA (or RT-LAMP amplicon) + Cas12a crRNA → Cas12a activated → non-specific cleavage of ssDNA reporter → signal. Both applied to SARS-CoV-2, HIV, HPV, dengue detection in point-of-care format. Key advantage: isothermal, simple format, no qPCR required."
  },
  {
    id: 32,
    question: "An individual's carrier status for a balanced chromosomal translocation is established. Their physician counsels them that the recurrence risk for chromosomally unbalanced offspring depends on which factor?",
    options: ["The individual's age at time of conception", "The specific chromosomes and breakpoints involved in the translocation, and whether the carrier is male or female (sex of carrier can affect recurrence risk for some translocations); translocation type (reciprocal vs. Robertsonian) and involved chromosomes determine the proportion of abnormal gametes and viability of unbalanced conceptions", "Whether the translocation occurred de novo or was inherited from a parent", "The number of previous unaffected pregnancies"],
    answer: 1,
    explanation: "Balanced translocation carrier counseling: recurrence risk depends on: (1) Type: Robertsonian translocation (specific chromosome pairs, e.g., rob(14;21) → up to 10-15% Down syndrome risk in maternal carrier vs. ~2-5% in paternal carrier); (2) Reciprocal translocations: risk varies widely based on chromosomes involved — adjacent-1 and adjacent-2 segregation products viability (some unbalanced karyotypes are lethal in utero, others viable and abnormal); (3) Sex of carrier: some translocations have differential male/female segregation (e.g., 46,XX carriers of some translocations have higher risk than 46,XY carriers due to selection against some unbalanced sperm); (4) Specific breakpoints determine which gene regions are disrupted in unbalanced products."
  },
  {
    id: 33,
    question: "In population genetics, effective population size (Ne) differs from census population size (N) because:",
    options: ["Ne is always larger than N due to gene flow from neighboring populations", "Ne is the size of an idealized population that would have the same rate of genetic drift as the observed population; Ne < N in most real populations due to unequal sex ratio, variance in reproductive success, historical bottlenecks, and population subdivision — Ne for humans is ~10,000-20,000 despite census population of billions", "Ne and N are identical when random mating occurs", "Ne measures population size in an ecologically defined habitat while N measures genetically defined groups"],
    answer: 1,
    explanation: "Effective population size (Ne): the size of an idealized Wright-Fisher population (random mating, equal sex ratio, Poisson reproductive variance) experiencing the same rate of drift as the actual population. Factors reducing Ne below N: (1) Unequal sex ratio: Ne = 4NmNf/(Nm+Nf); (2) High variance in reproductive success (superpowers reproduce more → less effective breeders contribute); (3) Historical bottlenecks permanently reduce Ne (Bottleneck effect on coalescence times); (4) Population structure. Human historical Ne ≈ 10,000-20,000 (from pairwise sequence diversity), much less than current 8 billion census size — reflects historical small tribe sizes and repeated bottlenecks during Out-of-Africa migrations. High LD in human genome reflects small Ne relative to recombination rate."
  },
  {
    id: 34,
    question: "A de novo pathogenic variant in a developmental gene causes a syndrome with 100% penetrance. Two unrelated children with the same variant have different phenotypes (variable expressivity). The BEST explanation is:",
    options: ["Variable expressivity cannot occur with de novo variants; the diagnosis must be incorrect in one child", "Variable expressivity is explained by differences in the genetic background (modifier genes), stochastic developmental variation, and environmental differences; even with identical causal variants, phenotypic severity varies due to the epistatic effects of the remaining ~20,000 gene backgrounds", "One child must have a second de novo mutation modifying the phenotype", "Variable expressivity is exclusively observed in autosomal dominant conditions, not de novo mutations"],
    answer: 1,
    explanation: "Variable expressivity with identical mutations: (1) Genetic modifiers — other genetic variants in the genetic background modify expression of the primary mutation; (2) Stochastic developmental variation — random cellular events (cell division timing, signal gradients) create phenotypic variation even with identical genetics (explains monozygotic twin discordance); (3) Environmental factors (in utero environment, nutrition, infections). Examples: NF1 (same NF1 mutation in parent and child can have café-au-lait spots vs. plexiform neurofibroma); RET mutations in MEN2A (age of onset and tumor spectrum varies). Modifier gene approaches (GWAS in single-gene disorder patients) identify variant modifiers."
  },
  {
    id: 35,
    question: "What is the significance of the 'obligate carrier' concept in X-linked recessive genetic counseling?",
    options: ["An obligate carrier is a female who must have the X-linked condition (affected female)", "An obligate carrier is an individual who can be deduced to be a carrier based on their family relationships, regardless of molecular testing; for X-linked conditions: mothers of two or more affected sons, daughters of affected fathers, and mothers of one affected son who also have an affected brother or maternal uncle are obligate carriers", "Obligate carriers should undergo prophylactic treatment regardless of their own phenotype", "Obligate carrier status can only be established by molecular genetic testing"],
    answer: 1,
    explanation: "Obligate carrier: a person who must be a carrier based on their pedigree position, even before any testing. For X-linked recessive: (1) Daughter of affected father = obligate carrier (she received his Xh); (2) Mother of two affected sons = obligate carrier (probability is essentially 1 by Bayes); (3) Mother of one affected son who also has an affected brother = obligate carrier (shared source of Xh allele). Obligate carrier status is certain by logic alone — molecular testing confirms the specific mutation for cascade testing but doesn't change carrier status itself. Obligate carriers are counseled about 50% risk to sons and 50% carrier risk to daughters."
  },
  {
    id: 36,
    question: "In genetic counseling for autosomal dominant conditions with reduced penetrance, the risk of transmitting the disease allele vs. developing the disease phenotype must be separately communicated. For BRCA1 mutations with ~70% lifetime breast cancer penetrance:",
    options: ["Each child of a BRCA1 carrier has a 70% risk of developing breast cancer", "Each child of a BRCA1 carrier has a 50% risk of inheriting the BRCA1 mutation; of those who inherit it, approximately 70% lifetime risk of breast cancer; an individual's overall risk = 50% × 70% = 35% absolute risk of BRCA1-related breast cancer as a first-degree relative of a carrier", "100% of BRCA1 carriers will develop breast cancer if they live long enough", "Penetrance is irrelevant for counseling; only transmission risk (50%) needs to be communicated"],
    answer: 1,
    explanation: "Counseling for AD conditions with incomplete penetrance requires separating transmission risk from disease risk: (1) Inheritance risk = 50% (autosomal dominant — 50% of children inherit the mutation); (2) Penetrance risk = given they inherited the mutation, ~70% lifetime breast cancer risk for BRCA1 (varies by specific mutation, family history, population); (3) Absolute risk to first-degree relative = 50% × 70% = 35%. This distinction is crucial for counseling young individuals about their risk of disease development vs. risk of transmitting to their children. Risk-reducing interventions (prophylactic mastectomy, oophorectomy, chemoprevention, intensive surveillance) significantly reduce realized risk below the penetrance estimates."
  },
  {
    id: 37,
    question: "A genome-wide sequencing study in a consanguineous family with unexplained intellectual disability identifies multiple homozygous regions (runs of homozygosity, ROH). The diagnostic strategy should prioritize:",
    options: ["Reporting all variants in all homozygous regions as pathogenic", "Identifying the largest ROH regions (most likely to contain the causal recessive variant due to identity-by-descent from shared ancestors), then applying WES or targeted filtering for rare homozygous variants within these ROH regions; combining ROH mapping with segregation analysis in the family maximizes diagnostic yield", "Ignoring consanguinity and applying standard trio exome analysis", "Only testing for known recessive conditions common in the ethnicity of the family"],
    answer: 1,
    explanation: "ROH-guided analysis for consanguineous families: (1) SNP array or WGS identifies ROH (regions of homozygous SNPs = autozygous regions IBD from shared ancestors); (2) Larger ROH = more distant common ancestor = more informative; (3) ROH that are consistent in all affected siblings and absent in unaffected members prioritize candidate regions; (4) Within candidate ROH, filter WES/WGS data for rare homozygous variants — the causal variant must be homozygous in the ROH region; (5) Segregation analysis confirms. This approach ('homozygosity mapping') successfully identified >100 new autosomal recessive ID genes in consanguineous populations. ROH >1 Mb in a random individual vs. >20% genome in ROH in offspring of first-cousin mating."
  },
  {
    id: 38,
    question: "The genetic basis of blood type ABO system involves three alleles (IA, IB, i) at a single locus. The glycosyltransferase encoded by the I locus determines blood type through:",
    options: ["Producing different hemoglobin variants that affect red cell surface antigens", "IA allele encodes an N-acetylgalactosaminyltransferase (adds GalNAc to H-antigen → A antigen); IB allele encodes a galactosyltransferase (adds Gal to H-antigen → B antigen); i (null/recessive) produces no functional enzyme → H-antigen unmodified (type O); IA and IB are codominant (both expressed in AB individuals); i is recessive to both IA and IB", "A, B, and O blood groups are controlled by separate genes on different chromosomes", "The ABO locus encodes antibodies against foreign blood group antigens"],
    answer: 1,
    explanation: "ABO blood group genetics: (1) I locus (chromosome 9q34.2) encodes glycosyltransferase; (2) IA allele — N-acetylgalactosaminyltransferase (GBGT → adds GalNAc to H-substance precursor → A antigen; specific amino acids at 176, 235, 266, 268 in IA transferase); (3) IB allele — galactosyltransferase (adds Gal to H → B antigen; same positions differ from IA by 4 amino acids); (4) i (null) — 1 bp deletion causes frameshift → no enzyme → H-antigen unmodified → O blood type; (5) Inheritance: IAIA or IAi = type A; IBIB or IBi = type B; IAIB = type AB (codominance); ii = type O. H-antigen produced by FUT1 gene (independently of ABO)."
  },
  {
    id: 39,
    question: "A 25-year-old patient with multiple café-au-lait spots, axillary freckling, and 2 dermal neurofibromas is clinically diagnosed with NF1. Molecular testing of the NF1 gene is LEAST useful for:",
    options: ["Confirming the diagnosis when the clinical diagnosis is uncertain", "Cascade testing of at-risk family members who may be carriers", "Predicting the severity of clinical manifestations or likelihood of malignant peripheral nerve sheath tumor development in the index patient — genotype-phenotype correlations in NF1 are generally poor (except for specific deletions causing more severe phenotypes)", "Identifying the specific mutation for reproductive counseling and PGD"],
    answer: 2,
    explanation: "NF1 molecular testing utility: (1) Diagnosis — NF1 clinical diagnosis (NIH criteria: 2+ of 7 criteria) is sufficient in most typical cases; molecular testing helpful for atypical presentations or prenatal diagnosis; (2) Cascade testing — identifying familial mutation enables definitive testing of at-risk relatives; (3) Reproductive counseling/PGD — knowing the specific mutation allows PGD in IVF; (4) Genotype-phenotype in NF1: generally poor correlation. Exception: NF1 microdeletion (~5% of cases, removing entire NF1 gene ± flanking genes) → more severe NF1 with facial dysmorphism, multiple neurofibromas early, worse cognitive outcomes, higher MPNST risk. But point mutations in NF1 (~95%) show poor genotype-phenotype correlation — severity varies even within families."
  },
  {
    id: 40,
    question: "The genetic cause of the most common inherited immunodeficiency — IgA deficiency — is:",
    options: ["RAG1/RAG2 mutations causing complete absence of B and T cells", "Largely unknown (polygenic/multifactorial); associated with HLA alleles (HLA-DR3, HLA-DR7) and shared genetic basis with common variable immunodeficiency (CVID) — the two conditions co-occur in families, suggesting a disease spectrum with variable expressivity; rarely caused by specific mutations in TACI (TNFRSF13B) or BAFF-R", "BTK mutations causing X-linked agammaglobulinemia", "ADA (adenosine deaminase) deficiency causing SCID"],
    answer: 1,
    explanation: "Selective IgA deficiency (SIgAD): most common primary antibody deficiency (~1/600 in Europeans). Usually sporadic; HLA-DR3 and HLA-DR7 associated. ~15-25% of SIgAD patients have CVID in first-degree relatives (suggesting shared genetic basis). Rare monogenic causes: TACI mutations (~2-8%), BAFF-R mutations, NFKB1 mutations. Most SIgAD is polygenic/multifactorial without identified single gene cause. Clinical: usually asymptomatic but increased susceptibility to respiratory/GI infections, higher rate of autoimmune diseases, allergy, risk of anaphylaxis to IgA-containing blood products (IgA-containing transfusions → anti-IgA antibodies). Distinguished from CVID by preserved IgG/IgM."
  },
  {
    id: 41,
    question: "In DNA fingerprinting (STR/microsatellite typing for forensic identification), what property makes STRs ideal markers?",
    options: ["STRs have very low mutation rates (near zero), ensuring identical patterns in all biological samples from one individual", "STRs are highly polymorphic (many alleles at each locus due to repeat number variation), codominant (both alleles detected), easily amplified by PCR from minute samples (saliva, blood, hair), and the combined probability of a random match at 15-20 STR loci is ~1 in 10^17 — making individuals uniquely identifiable", "STRs are located only in non-coding regions and do not affect gene expression or function", "STR alleles are identical between monozygotic twins, making familial identification possible even from twin DNA"],
    answer: 1,
    explanation: "STR (Short Tandem Repeat, microsatellite) properties for DNA typing: (1) High polymorphism — many alleles per locus (e.g., 5-30 alleles); (2) Codominance — both alleles of a heterozygote are detected; (3) PCR amplification from very small samples (~1 ng DNA); (4) Multiplex PCR — CODIS (FBI Combined DNA Index System) uses 20 STR loci simultaneously; (5) Cumulative discrimination: probability of random match at 20 CODIS loci = ~1 in 10^20 (essentially unique except MZ twins). STR mutation rate ~10^-3-10^-4 per generation (higher than SNPs). STRs detect parental relationships with high statistical confidence. MZ twins — identical STR profiles (cannot be distinguished by STRs)."
  },
  {
    id: 42,
    question: "A patient with unexplained cardiomyopathy and sensorineural hearing loss has WGS revealing a heteroplasmic mtDNA variant (m.3243A>G in MT-TL1) at 68% heteroplasmy in blood. The clinical relevance is:",
    options: ["A 68% heteroplasmy level means the patient is not truly affected since the majority of mtDNA is wild-type", "m.3243A>G is the most common mtDNA point mutation (MELAS syndrome — Mitochondrial Encephalomyopathy, Lactic Acidosis, Stroke-like episodes); the 68% blood heteroplasmy is a minimum estimate — muscle/urine heteroplasmy is higher; at this level in blood, cardiac and audiological involvement is expected and the patient should be evaluated for a mitochondrial disease spectrum including MELAS/MIDD (Maternally Inherited Deafness and Diabetes)", "mtDNA variants at <100% heteroplasmy are always benign passenger variants", "The variant can only cause disease if it reaches 100% heteroplasmy (homoplasmy)"],
    answer: 1,
    explanation: "m.3243A>G in MT-TL1 (mitochondrial tRNA-Leu gene): most common pathogenic mtDNA mutation. Blood heteroplasmy underestimates muscle/urine (due to negative selection against mutant mtDNA in rapidly dividing blood cells). At 68% blood heteroplasmy, actual tissue heteroplasmy is higher. MELAS: encephalomyopathy, lactic acidosis, stroke-like episodes. MIDD (Maternally Inherited Deafness and Diabetes): same mutation, milder phenotype (sensorineural hearing loss + diabetes + cardiomyopathy). Phenotype depends on heteroplasmy level and tissue distribution. Counseling: maternal inheritance, siblings and maternal relatives should be offered testing; heteroplasmy can vary dramatically between relatives."
  },
  {
    id: 43,
    question: "The difference between 'linkage analysis' and 'association analysis' in mapping disease genes is best described as:",
    options: ["Linkage analysis uses families; association analysis uses unrelated case-control cohorts; they detect different scales of genetic variants", "Linkage analysis (pedigree-based): detects co-segregation of chromosomal regions with disease within families; detects large genetic effects at low resolution (~10-20 cM, identifies 10-20 Mb regions); powerful for rare Mendelian diseases. Association analysis (population-based): tests individual SNPs/alleles for frequency difference between cases and controls; detects modest effects at high resolution (GWAS, fine-mapping to single variant); powerful for common complex diseases with common variants", "They are identical methods applied to different organisms", "Association analysis uses pedigrees while linkage analysis uses unrelated populations"],
    answer: 1,
    explanation: "Linkage vs. Association: (1) Linkage (parametric LOD or non-parametric NPL): examines co-segregation of genetic markers with disease in multi-generational families; identifies chromosomal regions containing disease genes (broad regions requiring follow-up fine-mapping); powerful for large-effect Mendelian diseases (HD, BRCA1 mapped by linkage); resistant to allelic heterogeneity. (2) Association (GWAS, candidate gene): tests individual markers in population samples; fine resolution (LD-based, identifies causal variants if LD blocks are narrow); powerful for common variants with modest effects; requires large samples (thousands to millions); affected by population stratification. Combined approaches: linkage + association fine-mapping → BRCA1 mapped by linkage → positional cloning → identification."
  },
  {
    id: 44,
    question: "In genetic diagnosis of a patient with suspected Duchenne muscular dystrophy, which approach is most informative as the FIRST-LINE diagnostic test?",
    options: ["Muscle biopsy for dystrophin immunofluorescence and Western blot as the only reliable test", "Multiplex ligation-dependent probe amplification (MLPA) for the DMD gene as first-line — detects the ~65% of cases due to exon deletions/duplications (exon copy number analysis); positive result enables exon-skipping therapy eligibility determination; followed by DMD gene sequencing for MLPA-negative cases (detecting the ~35% with point mutations, small indels)", "Standard Sanger sequencing of all 79 DMD exons simultaneously", "Serum creatine kinase level only (sufficient for DMD diagnosis)"],
    answer: 1,
    explanation: "DMD diagnosis algorithm: (1) Clinical + elevated CK → molecular testing first; (2) MLPA (Multiplex Ligation-dependent Probe Amplification) of all DMD exons: detects ~65% of cases (exon deletions ~60%, duplications ~5%); results guide exon-skipping therapy eligibility (exon 51-skipping for del49-50, exon 45-skipping for del44, etc.); (3) If MLPA normal → next-generation sequencing (NGS) of entire DMD gene: detects point mutations, splice site variants, small indels (~35%); (4) Muscle biopsy (dystrophin IHC/WB) now less commonly first-line but useful for confirming diagnosis and distinguishing DMD vs. BMD when molecular results are ambiguous (in-frame vs. out-of-frame unclear). RNA studies may be needed for deep intronic or splice site variants."
  },
  {
    id: 45,
    question: "The pharmacogenetic relationship between thiopurine drugs (6-mercaptopurine, azathioprine) and TPMT (thiopurine methyltransferase) is clinically important because:",
    options: ["TPMT activates thiopurines by methylation, so TPMT-deficient patients do not benefit from these drugs", "TPMT inactivates thiopurines; TPMT poor metabolizers (*2, *3A, *3B, *3C) accumulate toxic thiopurine metabolites (thioguanine nucleotides/TGN) → severe myelosuppression; routine TPMT genotyping/phenotyping before thiopurine prescription guides dose reduction (10% normal dose for *1/*3A) or alternative drug selection", "TPMT high activity leads to drug toxicity in ultrarapid metabolizers", "TPMT pharmacogenetics only applies to adults, not children with leukemia"],
    answer: 1,
    explanation: "TPMT pharmacogenetics (FDA black box warning): TPMT metabolizes 6-MP and AZA by S-methylation (inactivation pathway). 10% of population are IM (TPMT*1/*3A, *1/*3C, *1/*2); ~0.3% PM (TPMT*3A/*3A, *3A/*3C, etc.). PMs accumulate TGN (thioguanine nucleotides — active metabolites) → severe life-threatening myelosuppression. CPIC guidelines: *1/*1 (normal) → standard dose; IM → reduce dose 30-70%; PM → use alternative drug or reduce dose to 10% and monitor intensively. TPMT testing (genotype or RBC enzyme activity assay) recommended before starting thiopurines in ALL, IBD, organ transplant. NUDT15 *3 allele (East Asian PM) provides additional myelotoxicity risk particularly in Asians."
  },
  {
    id: 46,
    question: "For a couple with a previous child with neural tube defect (NTD), the recommended periconceptional folic acid supplementation dose is:",
    options: ["0.4 mg/day (same as primary prevention for general population)", "4-5 mg/day (high-dose folic acid) — ~10× the primary prevention dose; reduces NTD recurrence risk by ~70%; mechanism: folate is essential for one-carbon metabolism and neural tube closure; polymorphisms in MTHFR (677C>T, TT homozygotes have reduced MTHFR activity) increase NTD risk and respond to higher folate doses", "No folic acid supplement — the NTD in the previous child was due to genetic factors, not folate deficiency", "40 mg/day — extreme high dose needed for recurrence prevention"],
    answer: 1,
    explanation: "NTD recurrence prevention: MRC Vitamin Study (1991) demonstrated 4-5 mg/day folate reduces NTD recurrence by 72% in high-risk women (previous NTD child, themselves with NTD, or partner with NTD). Primary prevention (no prior NTD): 0.4-0.8 mg/day starting 1 month before conception through first trimester. High-risk dose: 4-5 mg/day starting ≥1 month before conception. MTHFR 677TT: higher NTD risk, benefits more from supplementation. NTD mechanism: insufficient methionine/SAM for methylation reactions during neural fold closure (~days 21-28 post-conception). Food fortification with folic acid in the US since 1998 reduced NTD prevalence by ~36%."
  },
  {
    id: 47,
    question: "The 'imprinting center' (IC) at chromosome 15q11-q13 can be epimutated (methylation error without sequence change). This causes which diagnostic challenge?",
    options: ["Epimutations cannot cause disease — only sequence mutations are pathogenic", "Epimutations in the IC can cause Prader-Willi or Angelman syndrome without a detectable sequence mutation; they are detected by methylation-specific testing (MS-PCR, MLPA with methylation) which shows abnormal methylation patterns; standard DNA sequencing would be negative; some IC epimutations are reversible through germline and may have lower recurrence risk than sequence mutations", "IC epimutations are always inherited from the affected grandparent", "Epimutations in IC region cause Turner syndrome not PWS/AS"],
    answer: 1,
    explanation: "Imprinting center (IC) epimutations: ~2-5% of PWS and ~5% of AS are caused by IC epimutation — abnormal methylation at ICR without sequence mutation. In PWS: failure to establish paternal methylation → SNRPN etc. not expressed → PWS phenotype. In AS: failure to establish maternal unmethylation → UBE3A imprint maintained on maternal allele → UBE3A not expressed. Diagnosis: methylation-specific PCR (MS-PCR) or MLPA with methylation probes shows abnormal pattern; sequence analysis shows normal sequence. Prognosis: primary IC epimutations (not caused by IC sequence mutation) may have lower recurrence risk and lower risk in next generation (some may revert in germline). Genetic counseling is complex."
  },
  {
    id: 48,
    question: "In an undiagnosed rare disease patient, the diagnostic yield of exome sequencing (WES) compared to genomic sequencing (WGS) can be summarized as:",
    options: ["WGS always diagnoses more patients than WES due to complete genome coverage", "WES achieves ~25-50% diagnostic yield for Mendelian diseases; WGS adds ~5-10% additional diagnoses beyond WES negative cases (by detecting: deep intronic/splice variants, promoter variants, structural variants, repeat expansions, mtDNA variants, and regions poorly captured by WES); WGS is preferred for patients who remain undiagnosed after WES", "WES and WGS have identical diagnostic yields for all disease categories", "WGS is only useful for chromosomal disorders; WES is better for single gene disorders"],
    answer: 1,
    explanation: "WES vs. WGS diagnostic yield: WES (clinical): ~25-50% diagnostic yield in undiagnosed rare disease cohorts (varies by phenotype, family structure: trios > probands alone, age group: pediatric > adult-onset). WGS adds ~5-10% additional diagnoses over WES-negative cases through: (1) Non-coding (intronic, splice site, promoter) variants missed by WES; (2) Structural variants (inversions, complex rearrangements) not detected by WES read depth analysis; (3) STR/repeat expansions (e.g., RFC1 CANVAS, GGC repeats in CANVAS); (4) Regions poorly captured by WES baits; (5) mtDNA variants (WES captures some mtDNA but WGS is more reliable). WGS is increasingly first-line for rapid ICU diagnosis (24-48 hr WGS in critically ill infants)."
  },
  {
    id: 49,
    question: "Genetic testing for Lynch syndrome currently uses a 'universal screening' strategy in colorectal cancer patients. This means:",
    options: ["Testing all adults over 50 years for Lynch syndrome regardless of cancer status", "Testing all newly diagnosed colorectal cancer (and endometrial cancer) tumors for MMR deficiency (IHC for MLH1, MSH2, MSH6, PMS2 protein expression, or MSI-PCR testing) — positive IHC/MSI leads to germline MMR gene testing; this strategy identifies Lynch syndrome families who would be missed by family history criteria alone", "Testing only patients with >10 colorectal polyps for Lynch syndrome", "Screening only patients who meet Amsterdam criteria for Lynch syndrome germline testing"],
    answer: 1,
    explanation: "Universal Lynch syndrome screening (Bethesda 2004, NCCN, ASCO): IHC for all 4 MMR proteins (MLH1, MSH2, MSH6, PMS2) on all colorectal and endometrial tumors at diagnosis. Loss of protein expression triggers: (1) MLH1 loss → MLH1 promoter methylation testing (sporadic) or germline MLH1 testing; (2) MSH2/MSH6/PMS2 loss → germline testing of respective gene. Advantage over family history criteria (Amsterdam II, Bethesda guidelines): captures ~60% more Lynch syndrome cases that would be missed by clinical criteria (especially patients without clear family history). Cost-effective given lifetime cancer risk to affected individuals and relatives."
  },
  {
    id: 50,
    question: "The future of precision medicine in genetics hinges on which convergence of technologies and databases?",
    options: ["Using genetics only for rare disease diagnosis, with complex common diseases managed without genetic information", "Integration of clinical-grade WGS from birth with longitudinal EHR data, polygenic risk scores for common diseases, pharmacogenomics pre-emptive testing, microbiome sequencing, multi-omic biomarkers, and AI-based clinical decision support — enabling truly individualized risk prediction, prevention, and treatment selection across the lifespan for both rare and common diseases", "Replacing traditional medical diagnosis with direct-to-consumer genetic tests", "Using only GWAS data (ignoring clinical and family history) for all medical decisions"],
    answer: 1,
    explanation: "Precision medicine vision: (1) Genomic sequencing at birth — newborn WGS for rare disease detection + pharmacogenomic pre-emptive testing; (2) Polygenic risk scores integrated with clinical risk factors for common diseases (CAD, type 2 diabetes, breast cancer); (3) Pharmacogenomics — pre-emptive germline genotyping to guide all drug therapy; (4) Tumor genomics — comprehensive genomic profiling of all cancers at diagnosis; (5) AI clinical decision support — GPT4/LLM integration with genomic + clinical data for real-time diagnostic support; (6) Microbiome integration; (7) Multi-omic biomarker panels for disease monitoring. Challenges: data privacy, health equity (diversity of genomic databases), clinical implementation at scale, regulation of AI diagnostics."
  }
];

export default questions;
