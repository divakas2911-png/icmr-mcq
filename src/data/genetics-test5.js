const questions = [
  // ===== HUMAN GENETIC DISORDERS — CLINICAL GENETICS (Q1–Q18) =====
  {
    id: 1,
    question: "Autosomal dominant disorders are characterized by all of the following EXCEPT:",
    options: ["Affected individuals in every generation (vertical transmission)", "Both sexes equally affected", "Two copies of the mutant allele required for disease expression", "50% risk of transmission from an affected parent"],
    answer: 2,
    explanation: "Autosomal dominant (AD) disorders require only ONE mutant allele for disease expression. Two copies are required for autosomal recessive disorders, not AD. AD features: vertical transmission (disease in every generation), equal sex incidence, 50% offspring risk from an affected heterozygous parent. Examples: Huntington's, Marfan syndrome, ADPKD."
  },
  {
    id: 2,
    question: "Duchenne muscular dystrophy (DMD) is caused by mutations in the dystrophin gene and is characterized by:",
    options: ["X-linked dominant inheritance", "X-linked recessive inheritance — frameshift/nonsense mutations in DMD gene on Xp21 causing absent dystrophin protein", "Autosomal recessive inheritance", "Mitochondrial inheritance"],
    answer: 1,
    explanation: "DMD is X-linked recessive, caused by out-of-frame mutations (large deletions, duplications, nonsense mutations) in the DMD gene (Xp21), resulting in absent dystrophin. It presents in boys at ages 3–5 with progressive proximal weakness, calf pseudohypertrophy, and cardiomyopathy. Carriers (females) are usually asymptomatic but may have mild features (manifesting carriers)."
  },
  {
    id: 3,
    question: "Huntington's disease is caused by a CAG repeat expansion in the HTT gene. What does the expanded polyglutamine tract do?",
    options: ["Prevents protein translation", "Creates a toxic gain-of-function — the mutant huntingtin protein misfolds, aggregates, and causes neuronal death", "Silences the HTT gene", "Activates huntingtin's anti-apoptotic function"],
    answer: 1,
    explanation: "Huntington's is caused by CAG expansion (>36 repeats) in exon 1 of HTT, encoding an expanded polyglutamine (polyQ) tract. The mutant huntingtin protein misfolds, forms intranuclear inclusions, disrupts transcription, impairs proteasomal and mitochondrial function, and causes selective death of striatal medium spiny neurons. This toxic gain-of-function dominates over the normal allele."
  },
  {
    id: 4,
    question: "Neurofibromatosis type 1 (NF1) is caused by mutations in the NF1 gene encoding neurofibromin, which is a:",
    options: ["Oncogene", "RAS-GAP (GTPase-activating protein) that normally stimulates RAS GTPase activity, inactivating RAS", "Receptor tyrosine kinase", "DNA mismatch repair protein"],
    answer: 1,
    explanation: "Neurofibromin is a RAS-GAP that accelerates the intrinsic GTPase activity of RAS, converting active RAS-GTP to inactive RAS-GDP. Loss of neurofibromin leads to constitutively active RAS, promoting cell proliferation. NF1 (autosomal dominant) features: café-au-lait spots, axillary freckling, Lisch nodules, neurofibromas, and increased risk of malignant peripheral nerve sheath tumors."
  },
  {
    id: 5,
    question: "Osteogenesis imperfecta (brittle bone disease) is most commonly caused by mutations in:",
    options: ["FGFR3 gene", "COL1A1 or COL1A2 genes encoding type I collagen", "FBN1 gene encoding fibrillin-1", "NF1 gene"],
    answer: 1,
    explanation: "Most OI cases (~90%) are caused by autosomal dominant mutations in COL1A1 or COL1A2 (encoding type I collagen chains). Glycine substitutions in the Gly-X-Y triple helix disrupt collagen structure, causing brittle bones, blue sclerae, hearing loss, and dentinogenesis imperfecta. Severity ranges from mild (type I) to lethal perinatally (type II)."
  },
  {
    id: 6,
    question: "Achondroplasia, the most common form of dwarfism, is caused by a gain-of-function mutation in:",
    options: ["COL2A1 (type II collagen)", "FGFR3 (Fibroblast Growth Factor Receptor 3), constitutively activating it and inhibiting chondrocyte proliferation", "GH receptor", "IGF1 gene"],
    answer: 1,
    explanation: "Achondroplasia is autosomal dominant, caused by a specific gain-of-function mutation in FGFR3 (G380R, in the transmembrane domain) in >98% of cases. Activated FGFR3 inhibits chondrocyte proliferation in the growth plate, causing rhizomelic short-limbed dwarfism, macrocephaly, and midface hypoplasia. Paradoxically, FGFR3 normally inhibits bone growth."
  },
  {
    id: 7,
    question: "Wilson's disease is an autosomal recessive disorder of copper metabolism caused by mutations in:",
    options: ["HFE gene (hemochromatosis)", "ATP7B gene encoding a copper-transporting ATPase in the liver", "ABCB4 gene", "FIC1 gene"],
    answer: 1,
    explanation: "Wilson's disease is caused by mutations in ATP7B (chromosome 13q14), which encodes a hepatic copper-transporting P-type ATPase responsible for incorporating copper into ceruloplasmin and excreting it into bile. Defective ATP7B causes copper accumulation in liver, brain (basal ganglia), Descemet's membrane (Kayser-Fleischer rings), and kidneys. Diagnosed by low serum ceruloplasmin, elevated urine copper."
  },
  {
    id: 8,
    question: "Hemochromatosis type 1 (HFE hemochromatosis) is most commonly caused by the mutation:",
    options: ["HAMP (hepcidin) deletion", "HFE p.C282Y (homozygosity in ~85% of HFE hemochromatosis)", "TMPRSS6 gain-of-function", "TF gene deletion"],
    answer: 1,
    explanation: "HFE hemochromatosis is caused by mutations in HFE gene (chromosome 6p21). The p.C282Y variant (homozygosity ~85% of cases) disrupts HFE interaction with β2-microglobulin, impairing hepcidin regulation. Reduced hepcidin leads to uncontrolled dietary iron absorption. Features: liver cirrhosis, 'bronze diabetes', hypogonadism, arthropathy, and cardiomyopathy."
  },
  {
    id: 9,
    question: "Spinal muscular atrophy (SMA) is caused by homozygous deletion of which gene?",
    options: ["DMD (dystrophin)", "SMN1 (Survival Motor Neuron 1) on chromosome 5q13", "ALS2 (alsin)", "SOD1 (superoxide dismutase 1)"],
    answer: 1,
    explanation: "SMA is an autosomal recessive disease caused by biallelic loss of SMN1 gene (5q13), which encodes the SMN protein essential for snRNP assembly and motor neuron survival. SMN2 (a nearly identical paralog) produces only ~10% full-length protein. SMA severity correlates inversely with SMN2 copy number. Treatments: nusinersen (ASO), onasemnogene abeparvovec (gene therapy), risdiplam (SMN2 splicing modifier)."
  },
  {
    id: 10,
    question: "Tuberous sclerosis complex (TSC) is caused by mutations in TSC1 or TSC2 genes, which form the TSC complex that normally:",
    options: ["Activates mTOR signaling", "Inhibits mTOR (mechanistic target of rapamycin) signaling by acting as a GAP for Rheb GTPase", "Promotes cell cycle entry", "Activates RAS signaling"],
    answer: 1,
    explanation: "The TSC1-TSC2 complex inhibits mTOR signaling by acting as a GAP for Rheb (RAS homologue enriched in brain), converting active Rheb-GTP to inactive Rheb-GDP. Loss of TSC1/TSC2 leads to constitutive mTOR activation, causing cellular overgrowth and hamartoma formation (cortical tubers, subependymal nodules, cardiac rhabdomyomas, renal angiomyolipomas). Rapamycin (mTOR inhibitor) treats TSC-related tumors."
  },
  {
    id: 11,
    question: "In a pedigree, a disease affecting only sons born to carrier mothers (with unaffected fathers) suggests:",
    options: ["Autosomal recessive inheritance", "Autosomal dominant inheritance", "X-linked recessive inheritance", "Mitochondrial inheritance"],
    answer: 2,
    explanation: "X-linked recessive inheritance: carrier females (X^A X^a) pass the mutant allele to 50% of sons (who express the disease as X^a Y) and 50% of daughters (who become carriers as X^A X^a). Fathers cannot pass X-linked traits to sons (they pass Y to sons). Key features: primarily affects males, transmitted through carrier females, no male-to-male transmission."
  },
  {
    id: 12,
    question: "Variable expressivity in genetics means:",
    options: ["A condition where some individuals with the genotype show no features (incomplete penetrance)", "The range of phenotypic severity among individuals who carry the same disease-causing genotype", "The trait being expressed in variable proportions of the population", "The different ages of onset of the same disease"],
    answer: 1,
    explanation: "Variable expressivity refers to the range of phenotypic manifestations among individuals carrying the same pathogenic genotype. For example, NF1 patients with the same mutation can range from minimal (café-au-lait spots only) to severe (plexiform neurofibromas, malignancy). Modifier genes, environmental factors, and epigenetic variation contribute to expressivity."
  },
  {
    id: 13,
    question: "The risk of Down syndrome increases with maternal age primarily because:",
    options: ["Older mothers have more chromosomal mutations from radiation exposure", "Meiotic non-disjunction of chromosome 21 is more likely in oocytes that have been arrested in meiosis I for decades", "Paternal age contributes more to trisomy risk", "Older mothers have lower folic acid levels"],
    answer: 1,
    explanation: "Human female oocytes are arrested in prophase I (dictyate stage) from fetal life until ovulation, which can be 12–50 years later. The spindle checkpoint mechanisms become less efficient with age, increasing the risk of non-disjunction at meiosis I. Most trisomy 21 cases (~95%) result from maternal meiosis I non-disjunction, and the risk rises sharply after maternal age 35."
  },
  {
    id: 14,
    question: "Prader-Willi syndrome is caused by loss of paternal 15q11-q13, while Angelman syndrome is caused by loss of maternal 15q11-q13. This demonstrates:",
    options: ["X-linked inheritance", "Genomic imprinting — the same chromosomal region produces different diseases depending on which parent's copy is affected", "Anticipation due to trinucleotide repeats", "Variable expressivity"],
    answer: 1,
    explanation: "PWS and AS are classical examples of genomic imprinting. The 15q11-q13 region contains imprinted genes: paternal allele expresses SNORD genes and SNRPN (silenced on maternal allele); maternal allele expresses UBE3A (silenced on paternal allele in neurons). Loss of paternal 15q11-q13 → PWS (hyperphagia, obesity, hypogonadism, learning difficulties); loss of maternal 15q11-q13 → AS (severe ID, seizures, happy demeanor)."
  },
  {
    id: 15,
    question: "Prenatal genetic testing by amniocentesis is typically performed at:",
    options: ["8–10 weeks gestation", "11–14 weeks gestation", "15–20 weeks gestation", "24–28 weeks gestation"],
    answer: 2,
    explanation: "Amniocentesis is performed at 15–20 weeks of gestation (most commonly at 15–17 weeks) to sample amniotic fluid containing fetal cells for karyotyping, chromosomal microarray, or specific genetic tests. CVS (chorionic villus sampling) is performed at 11–14 weeks for earlier results. NIPT (non-invasive prenatal testing) screens cell-free fetal DNA from maternal blood from 10 weeks."
  },
  {
    id: 16,
    question: "The recurrence risk for an autosomal recessive disorder (e.g., cystic fibrosis) when both parents are carriers is:",
    options: ["100%", "50%", "25%", "12.5%"],
    answer: 2,
    explanation: "When both parents are carriers (Aa × Aa), each pregnancy has a 25% chance of being homozygous affected (aa), 50% chance of carrier (Aa), and 25% chance of unaffected homozygous (AA). This 1:2:1 genotypic ratio translates to 25% disease risk per pregnancy, independent of previous children's status."
  },
  {
    id: 17,
    question: "Fluorescence resonance energy transfer (FRET) in genetics research is used to:",
    options: ["Sequence DNA in real time", "Detect protein-protein interactions or molecular distances by measuring energy transfer between fluorophores", "Identify chromosomal deletions", "Amplify specific DNA sequences"],
    answer: 1,
    explanation: "FRET occurs when a donor fluorophore transfers energy to an acceptor fluorophore when they are 1–10 nm apart. In genetics/biochemistry, FRET detects: protein-protein interactions (distance < 10 nm for FRET), conformational changes, nucleic acid hybridization, and enzymatic reactions. Live-cell FRET microscopy monitors dynamic molecular interactions in real time."
  },
  {
    id: 18,
    question: "Genetic counselling follows which ethical principles?",
    options: ["Directive counselling — telling patients what decisions to make", "Non-directive counselling — presenting all options without bias, respecting patient autonomy", "Focusing solely on medical facts without emotional support", "Mandatory testing of all family members"],
    answer: 1,
    explanation: "Genetic counselling is non-directive — counsellors present accurate, complete information about diagnosis, inheritance, recurrence risks, and options without imposing personal views, respecting patient autonomy in decision-making. It also incorporates psychosocial support. Key ethical principles: autonomy, beneficence, non-maleficence, confidentiality, and justice."
  },

  // ===== MICROBIAL GENETICS (Q19–Q35) =====
  {
    id: 19,
    question: "Bacterial conjugation is best described as:",
    options: ["Transfer of phage DNA between bacteria", "Direct transfer of DNA from a donor to recipient cell through physical contact via a pilus, often transferring the F plasmid or chromosomal DNA", "Uptake of naked DNA from the environment", "Transposition of mobile genetic elements"],
    answer: 1,
    explanation: "Conjugation is horizontal gene transfer via direct cell-cell contact mediated by the F (fertility) pilus (sex pilus). The F+ (donor) bacterium forms a pilus with an F- (recipient), retracts it to form a mating bridge, and transfers a copy of the F plasmid. Hfr (high frequency recombination) strains have F integrated into the chromosome, allowing chromosomal gene transfer."
  },
  {
    id: 20,
    question: "Transformation in bacteria refers to:",
    options: ["Insertion of phage DNA into the bacterial chromosome", "Uptake of naked (free) DNA from the environment by a competent bacterium", "DNA transfer through cell-cell contact", "Gene silencing by methylation"],
    answer: 1,
    explanation: "Transformation is the uptake and incorporation of naked (free) DNA from the environment by naturally competent bacteria (e.g., Streptococcus pneumoniae, Haemophilus influenzae, Bacillus subtilis). Griffith's experiment (1928) first demonstrated transformation. In the laboratory, artificial competence is induced in E. coli by CaCl2 treatment or electroporation."
  },
  {
    id: 21,
    question: "Transduction in bacteria is the transfer of bacterial DNA via:",
    options: ["Conjugation pili", "Bacteriophages (bacterial viruses) that accidentally package bacterial DNA", "Transformation with extracellular DNA", "Transposons"],
    answer: 1,
    explanation: "Transduction uses bacteriophages as vehicles: generalized transduction (phages randomly package bacterial DNA during lytic cycle, e.g., phage P1 in E. coli) or specialized transduction (lysogenic phage excises imprecisely, carrying adjacent bacterial genes, e.g., phage λ). Transduction is used for fine-structure genetic mapping in bacteria."
  },
  {
    id: 22,
    question: "Insertional inactivation using a transposon is used in molecular biology to:",
    options: ["Silence genes by methylation", "Create random loss-of-function mutations by inserting a transposable element into genes, useful for genome-wide mutagenesis screens", "Transfer genes between organisms", "Replicate plasmid DNA"],
    answer: 1,
    explanation: "Transposon insertion mutagenesis: transposons randomly insert throughout the genome, disrupting (inactivating) genes they land in. Transposon-insertion sequencing (Tn-seq, TraSH) performs genome-wide essential gene identification by mapping transposon insertions in the mutant population — genes depleted of insertions are essential for growth under tested conditions."
  },
  {
    id: 23,
    question: "CRISPR-Cas systems in bacteria naturally function as:",
    options: ["Mechanisms for horizontal gene transfer", "Adaptive immune systems that store memories of past phage infections and degrade matching phage DNA upon re-infection", "DNA repair mechanisms", "Regulatory systems for gene expression"],
    answer: 1,
    explanation: "CRISPR-Cas is a prokaryotic adaptive immune system. After phage infection, spacers (short phage sequences) are incorporated into the CRISPR array. Upon re-infection, CRISPR RNAs (crRNAs) guide Cas nucleases to cleave matching phage DNA (interference). This memory allows rapid, specific defense against recurring phage attacks."
  },
  {
    id: 24,
    question: "The SOS response in bacteria is triggered by:",
    options: ["Nutrient starvation", "Accumulation of single-stranded DNA after DNA damage, activating RecA, which co-protease-activates LexA repressor auto-cleavage", "Antibiotic exposure to cell wall inhibitors", "Temperature shock"],
    answer: 1,
    explanation: "The SOS response is triggered by DNA damage causing ssDNA accumulation. ssDNA activates RecA ATPase, which forms a co-protease that facilitates LexA self-cleavage. LexA normally represses SOS genes (recA, uvrABC, sulA, umuDC). SOS induction upregulates DNA repair (NER, RecA-mediated recombination) and error-prone bypass polymerases (PolV/UmuCD), causing mutagenesis."
  },
  {
    id: 25,
    question: "Quorum sensing in bacteria allows:",
    options: ["Individual bacteria to sense and respond to DNA damage", "Population-density-dependent gene regulation — bacteria detect their own population density via secreted signaling molecules (autoinducers) and coordinate behavior", "Regulation of metabolism based on nutrient availability", "Induction of sporulation upon carbon depletion"],
    answer: 1,
    explanation: "Quorum sensing (QS) enables bacteria to collectively control gene expression based on cell density. Bacteria produce, secrete, and detect autoinducers (AHL in Gram-negatives, AI-2 in many species). When autoinducer exceeds a threshold concentration, it activates QS regulons controlling bioluminescence (Vibrio fischeri), biofilm formation, virulence, and sporulation. QS inhibitors are potential anti-virulence drugs."
  },
  {
    id: 26,
    question: "Antibiotic resistance via beta-lactamase production inactivates penicillin by:",
    options: ["Modifying the drug's target (PBP)", "Hydrolyzing the beta-lactam ring of penicillin/cephalosporins, rendering them inactive", "Actively pumping the antibiotic out of the cell", "Preventing antibiotic entry through modified porins"],
    answer: 1,
    explanation: "β-Lactamases hydrolyze the β-lactam ring of penicillins and cephalosporins (and in ESBLs, also aztreonam), inactivating them. β-Lactamase genes are often carried on plasmids (mobile), enabling rapid spread. Extended-spectrum β-lactamases (ESBLs), AmpC, and carbapenemases (KPC, NDM, OXA-48) are clinically important. Clavulanate and other inhibitors protect against β-lactamases when combined with penicillins."
  },
  {
    id: 27,
    question: "Plasmids that carry antibiotic resistance genes and can be transferred between bacteria by conjugation are called:",
    options: ["Bacteriophages", "Resistance plasmids (R-plasmids)", "Transposons", "Cosmids"],
    answer: 1,
    explanation: "R-plasmids (resistance plasmids) carry antibiotic resistance genes and possess the tra genes for conjugative transfer. A single R-plasmid often carries multiple resistance determinants (multidrug resistance), which can be transferred simultaneously to recipient bacteria. The global spread of multidrug resistance in pathogens (E. coli, K. pneumoniae) is largely driven by conjugative R-plasmids and transposons."
  },
  {
    id: 28,
    question: "Lysogeny occurs when a bacteriophage:",
    options: ["Infects and immediately lyses the bacterial host", "Integrates its DNA into the bacterial chromosome (prophage) and replicates with it, without killing the host", "Transfers bacterial genes between cells", "Binds to but cannot infect the bacterium"],
    answer: 1,
    explanation: "In lysogeny, a temperate phage (e.g., phage λ) integrates its genome into the bacterial chromosome as a prophage. The prophage is replicated along with bacterial DNA and passed to daughter cells. CI repressor maintains the lysogenic state by repressing lytic genes. DNA damage induces the SOS response, which cleaves CI repressor, leading to prophage excision and lytic replication."
  },
  {
    id: 29,
    question: "Pathogenicity islands in bacterial genomes are characterized by:",
    options: ["Being present in all strains of the species", "Horizontally acquired DNA blocks (often with different GC content) encoding virulence factors", "Being located only on plasmids", "Containing only antibiotic resistance genes"],
    answer: 1,
    explanation: "Pathogenicity islands (PAIs) are discrete genomic regions (10–200 kb) present in pathogenic but not nonpathogenic strains. They have atypical GC content (reflecting acquisition from another organism by HGT), encode virulence factors (type III secretion systems, toxins, adhesins, iron acquisition), and are often flanked by mobile genetic elements. They typically insert at tRNA genes."
  },
  {
    id: 30,
    question: "The MLST (Multilocus Sequence Typing) method characterizes bacterial strains by:",
    options: ["Whole genome sequencing and BLAST analysis", "Sequencing internal fragments of 7 housekeeping genes and assigning allele numbers to define sequence types (STs)", "Restriction fragment length polymorphism (RFLP) of 16S rRNA", "Pulse-field gel electrophoresis of chromosomal DNA"],
    answer: 1,
    explanation: "MLST sequences internal fragments (~450 bp) of 7 housekeeping genes. Each unique sequence at each locus is assigned an allele number; the combination of 7 allele numbers defines the sequence type (ST). MLST provides a standardized, portable, globally comparable strain typing scheme. It identifies clonal complexes and tracks the global spread of pandemic pathogen lineages."
  },
  {
    id: 31,
    question: "Retroviral replication requires which unique enzyme?",
    options: ["DNA-dependent DNA polymerase", "Reverse transcriptase (RNA-dependent DNA polymerase)", "RNA replicase", "Ribonuclease P"],
    answer: 1,
    explanation: "Retroviruses (e.g., HIV) carry reverse transcriptase (RT), which copies the viral RNA genome into double-stranded DNA. The viral DNA integrates into the host chromosome (via integrase) as a provirus, which is transcribed by host RNA polymerase II to produce viral RNA and proteins. RT is a key drug target (nucleoside/non-nucleoside RT inhibitors in HIV therapy)."
  },
  {
    id: 32,
    question: "Genetic recombination in influenza virus occurs by a process called:",
    options: ["Homologous recombination", "Reassortment — exchange of entire RNA segments when two influenza strains co-infect the same cell", "Site-specific recombination", "V(D)J recombination"],
    answer: 1,
    explanation: "Influenza virus has a segmented RNA genome (8 segments). When two different influenza strains co-infect a cell, the segments mix and reassort, generating novel combinations in progeny virions. This genetic reassortment is responsible for antigenic shift — major antigenic changes producing pandemic influenza strains (e.g., 2009 H1N1 pandemic arose by reassortment between human, swine, and avian influenza viruses)."
  },
  {
    id: 33,
    question: "Biofilm formation confers antibiotic resistance primarily by:",
    options: ["Active efflux pump upregulation only", "Multiple mechanisms including reduced antibiotic penetration, metabolically inactive persister cells, and altered gene expression within the biofilm matrix", "Horizontal transfer of resistance genes only", "Production of beta-lactamases exclusively"],
    answer: 1,
    explanation: "Biofilm bacteria (encased in polysaccharide/protein/eDNA matrix) are 100–1000× more resistant to antibiotics than planktonic bacteria via: (1) limited antibiotic diffusion through the matrix, (2) persister cells (metabolically dormant, antibiotic-tolerant), (3) altered gene expression (stress responses, efflux pumps), and (4) exchange of resistance genes via HGT. Biofilms cause chronic infections (prosthetic joints, catheters, CF lung)."
  },
  {
    id: 34,
    question: "CRISPR-based diagnostics (e.g., SHERLOCK, DETECTR) use Cas13 or Cas12a for:",
    options: ["Gene editing in patients", "Sensitive and specific nucleic acid detection (e.g., pathogens, SNPs) using collateral cleavage of reporter molecules", "Antibiotic susceptibility testing only", "Whole genome sequencing"],
    answer: 1,
    explanation: "SHERLOCK (CRISPR-Cas13, RNA target) and DETECTR (CRISPR-Cas12a, DNA target) exploit collateral cleavage: after target recognition, activated Cas13/Cas12a non-specifically cleave nearby single-stranded reporter molecules (quenched fluorophore-RNA/DNA). This produces a detectable fluorescent signal, enabling rapid, highly sensitive (<1 copy/μL), field-deployable diagnostic tests for pathogens (SARS-CoV-2, Zika, dengue)."
  },
  {
    id: 35,
    question: "The 16S ribosomal RNA gene is used in microbial identification and phylogeny because:",
    options: ["It is present only in pathogenic bacteria", "It is universally conserved in all bacteria, contains both conserved (for primer design) and variable regions (for species discrimination)", "It encodes antibiotic resistance determinants", "It is the smallest bacterial gene"],
    answer: 1,
    explanation: "16S rRNA gene (~1500 bp) is present in all bacteria (and archaea), making it a universal marker for microbial phylogeny and identification. It contains conserved regions (allowing universal primer design for PCR) alternating with 9 hypervariable regions (V1-V9) that differ between taxa, enabling species-level discrimination. 16S rRNA sequencing is the gold standard for culture-independent microbial identification."
  },

  // ===== STATISTICAL GENETICS & RESEARCH METHODS (Q36–Q50) =====
  {
    id: 36,
    question: "LOD score analysis in genetic linkage studies — a LOD score of +3 is considered evidence for linkage because:",
    options: ["It means 3 cM recombination distance between markers", "It represents odds of 1000:1 in favor of linkage (log10 of 1000 = 3)", "It is the p-value threshold for multiple testing correction", "It means 3% probability of a false positive"],
    answer: 1,
    explanation: "LOD (Logarithm of the Odds) score is log10 of the likelihood ratio of linkage versus no linkage at a given recombination fraction. A LOD ≥ 3 (odds 1000:1 for linkage) is the conventional significance threshold, and LOD ≤ −2 is evidence against linkage. LOD scores from multiple families or markers are additive. Originally developed by Newton Morton."
  },
  {
    id: 37,
    question: "Heritability (h²) in the narrow sense measures:",
    options: ["The proportion of population variation due to environment", "The proportion of phenotypic variance attributable to additive genetic effects", "The proportion of variance due to all genetic effects including dominance and epistasis", "The probability of a trait being inherited"],
    answer: 1,
    explanation: "Narrow-sense heritability (h²) = additive genetic variance (VA) / total phenotypic variance (VP). It measures how much of the phenotypic variation is due to additive effects of alleles (the component relevant to response to selection). Broad-sense heritability (H²) = total genetic variance (VA+VD+VI) / VP. h² is estimated from twin studies, adoption studies, and GCTA analysis."
  },
  {
    id: 38,
    question: "The concept of 'missing heritability' in GWAS refers to:",
    options: ["GWAS failing to identify any genetic variants for complex traits", "The gap between heritability estimated from twin studies and the variance explained by identified GWAS SNPs", "The inability to sequence rare variants by genotyping arrays", "Epigenetic contributions to phenotypic variation"],
    answer: 1,
    explanation: "Missing heritability: twin studies suggest high heritability for many complex traits (e.g., height h²~0.8, schizophrenia h²~0.8), but GWAS-identified common SNPs explain only a fraction of this variation. Causes: rare variants not captured by arrays, variants with small effects below significance threshold, gene-gene and gene-environment interactions, structural variants, and epigenetic effects."
  },
  {
    id: 39,
    question: "Mendelian randomization uses genetic variants as instrumental variables to:",
    options: ["Identify mutations causing Mendelian diseases", "Infer causal relationships between modifiable exposures and disease outcomes, avoiding confounding and reverse causation", "Randomly assign genetic variants to study participants", "Map Mendelian disease genes to chromosomes"],
    answer: 1,
    explanation: "Mendelian randomization (MR) exploits the random allocation of genetic variants at conception (analogous to randomization in an RCT) to estimate the causal effect of an exposure on an outcome. Genetic variants (instruments) associated with the exposure are used as proxies, avoiding confounding by lifestyle factors and reverse causation. MR has demonstrated causal effects of LDL on CHD, BMI on various diseases, etc."
  },
  {
    id: 40,
    question: "The sibling relative risk (λs) is defined as the ratio of:",
    options: ["Prevalence in siblings of affected individuals to prevalence in the general population", "Risk in parents to risk in offspring", "Risk in twins to risk in singleton siblings", "Prevalence in affected families to prevalence in unaffected families"],
    answer: 0,
    explanation: "Sibling relative risk (λs) = disease prevalence in siblings of affected individuals / disease prevalence in the general population. λs measures the familial aggregation of a disease. High λs (e.g., schizophrenia λs~10, MS λs~25, T1D λs~15) indicates strong genetic contribution. λs combined with twin heritability estimates characterize the genetic architecture of complex diseases."
  },
  {
    id: 41,
    question: "Epistasis in quantitative genetics refers to:",
    options: ["Additive effects of multiple genes on a trait", "Non-additive interactions between loci where the effect of one locus depends on genotype at another locus", "The contribution of environmental factors to a trait", "Dominance variance at a single locus"],
    answer: 1,
    explanation: "Statistical epistasis in quantitative genetics refers to non-additive genetic interactions between loci (also called gene-gene interactions or interaction epistasis, VI). The effect of alleles at one locus differs depending on the genotype at another locus. Epistasis can explain part of the missing heritability and shapes the genetic architecture of complex traits."
  },
  {
    id: 42,
    question: "Identity by descent (IBD) differs from identity by state (IBS) in that IBD means:",
    options: ["Two identical alleles are inherited from the same common ancestor (by descent)", "Two alleles are identical in DNA sequence but from different lineages (by state)", "Two alleles are found in the same individual", "Two alleles have the same phenotypic effect"],
    answer: 0,
    explanation: "IBS (identity by state): two alleles are identical in sequence regardless of ancestry. IBD (identity by descent): two alleles are identical because they were inherited from the same common ancestor (same ancestral copy). IBD is relevant for calculating inbreeding coefficients, relatedness between individuals, and detecting autozygosity in disease mapping."
  },
  {
    id: 43,
    question: "Fine mapping after GWAS is performed to:",
    options: ["Replicate the GWAS findings in a new population", "Identify the causal variant within an associated locus by increasing resolution through dense genotyping, resequencing, and functional annotation", "Perform meta-analysis of multiple GWAS datasets", "Estimate the heritability explained by the GWAS locus"],
    answer: 1,
    explanation: "GWAS typically identifies a 'sentinel SNP' in a linkage disequilibrium block; the actual causal variant may be in LD with the sentinel. Fine mapping uses dense genotyping/resequencing, conditional analysis, Bayesian credible sets, and integration with functional annotation (ATAC-seq, eQTL, ChIP-seq data) to localize the causal variant within the associated locus."
  },
  {
    id: 44,
    question: "Expression quantitative trait loci (eQTLs) are genetic variants that:",
    options: ["Affect the phenotype directly through protein structure changes", "Are associated with differences in gene expression levels, linking regulatory variants to target genes", "Control the timing of DNA replication at specific loci", "Cause chromosomal rearrangements"],
    answer: 1,
    explanation: "eQTLs are genetic variants (usually SNPs) that affect gene expression levels in cis (affecting nearby gene expression, within ~1 Mb) or trans (affecting distant gene expression). eQTL mapping integrates genotype data with RNA-seq gene expression data. Colocalization of GWAS loci with eQTLs helps identify the effector gene through which the GWAS variant exerts its effect. GTEx is a major eQTL resource."
  },
  {
    id: 45,
    question: "The ACMG/AMP variant classification framework categorizes variants as:",
    options: ["Dominant, recessive, X-linked, and mitochondrial", "Pathogenic, likely pathogenic, variant of uncertain significance (VUS), likely benign, or benign — based on population, computational, functional, and segregation evidence", "Driver and passenger mutations", "Missense, nonsense, frameshift, and synonymous"],
    answer: 1,
    explanation: "The ACMG/AMP guidelines (Richards et al. 2015) provide a standardized framework for classifying sequence variants in the context of Mendelian disease using 28 evidence criteria (population data, computational predictions, functional studies, segregation data, de novo evidence). Variants are classified into 5 tiers: pathogenic (P), likely pathogenic (LP), VUS, likely benign (LB), or benign (B)."
  },
  {
    id: 46,
    question: "SNP microarrays (genotyping arrays) are used for which of the following in clinical genetics?",
    options: ["Detecting point mutations in coding sequences", "Chromosomal microarray analysis (CMA) — detecting copy number variants and copy-neutral loss of heterozygosity across the genome", "Sequencing exonic regions", "Measuring gene expression levels"],
    answer: 1,
    explanation: "Clinical chromosomal microarray analysis (CMA) uses SNP arrays to detect: (1) copy number variants (CNVs — deletions and duplications ≥50–100 kb), and (2) copy-neutral regions of homozygosity (ROH) indicating loss of heterozygosity (uniparental disomy, consanguinity, mosaicism). CMA has replaced G-banded karyotyping as the first-line test for intellectual disability, autism, and congenital anomalies."
  },
  {
    id: 47,
    question: "Penetrance of a genetic variant is best estimated from:",
    options: ["Case-control studies with affected individuals only", "Population-based cohorts or large unselected biobanks, to avoid ascertainment bias from clinically ascertained families", "Twin studies", "In vitro functional assays"],
    answer: 1,
    explanation: "Penetrance estimates from clinically ascertained families overestimate penetrance due to ascertainment bias (families are selected because of multiple affected members). Population-based estimates from biobanks (e.g., UK Biobank, gnomAD) identify individuals who carry variants but may be unaffected, providing more accurate penetrance estimates. Many variants classified as high-penetrance may be moderate-penetrance in unselected populations."
  },
  {
    id: 48,
    question: "The coefficient of relationship (r) between first cousins is:",
    options: ["1/2", "1/4", "1/8", "1/16"],
    answer: 2,
    explanation: "The coefficient of relationship (r) measures the proportion of alleles shared by descent. Parent-offspring: r = 1/2; Full siblings: r = 1/2; Half siblings: r = 1/4; First cousins: r = 1/8; First cousins once removed: r = 1/16. The inbreeding coefficient (F) of the offspring of first cousins = r/2 = 1/16 (6.25%), meaning 6.25% of their loci will be homozygous by descent."
  },
  {
    id: 49,
    question: "Genetic anticipation in myotonic dystrophy type 1 (DM1) is associated with:",
    options: ["Point mutations accumulating over generations", "Expansion of CTG trinucleotide repeats in DMPK gene, with longer repeats causing earlier onset and more severe disease in successive generations", "Increasing chromosomal deletions over generations", "Epigenetic methylation spreading over generations"],
    answer: 1,
    explanation: "DM1 is caused by CTG expansion in the 3' UTR of DMPK (chromosome 19q13). Normal: 5–37 repeats; Premutation: 38–49; Full mutation: ≥50. The expanded repeats are unstable and tend to expand further in intergenerational transmission (especially maternal transmission). Longer repeats correlate with earlier onset and more severe disease — the molecular basis of anticipation in DM1."
  },
  {
    id: 50,
    question: "Which database is the primary repository for human genetic variation (SNPs, indels, structural variants) in clinical genetics?",
    options: ["GenBank", "ClinVar", "PDB (Protein Data Bank)", "KEGG"],
    answer: 1,
    explanation: "ClinVar is NCBI's freely accessible database aggregating interpretations of variants' clinical significance from submitting laboratories worldwide, linked to supporting evidence (literature, functional data, patient phenotypes). It is the primary resource for variant classification in clinical molecular genetics. dbSNP stores all variants; ClinGen (Clinical Genome Resource) performs expert curation of gene-disease validity and variant classification."
  },
]

export default questions
