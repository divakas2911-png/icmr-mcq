const questions = [
  // ===== COMPREHENSIVE MIXED — CALCULATIONS & APPLICATIONS (Q1–Q15) =====
  {
    id: 1,
    question: "In a population of 10,000 individuals, 9,000 show the dominant phenotype and 1,000 show the recessive phenotype. Assuming Hardy-Weinberg equilibrium, the frequency of the dominant allele (p) is approximately:",
    options: ["0.68", "0.90", "0.68", "0.32"],
    answer: 0,
    explanation: "q² = 1000/10000 = 0.10 → q = √0.10 ≈ 0.316. p = 1 − q = 1 − 0.316 = 0.684 ≈ 0.68. Carrier frequency (2pq) = 2 × 0.684 × 0.316 ≈ 0.432 (43.2%). The population has q² = 10% recessive, p² = 46.8% homozygous dominant, and 2pq = 43.2% heterozygous carriers."
  },
  {
    id: 2,
    question: "Cystic fibrosis affects approximately 1 in 2,500 Caucasians (q² = 1/2500). The carrier frequency (2pq) in this population is approximately:",
    options: ["1 in 25", "1 in 50", "1 in 100", "1 in 10"],
    answer: 0,
    explanation: "q² = 1/2500, so q = 1/50 = 0.02. p ≈ 1 − 0.02 = 0.98. Carrier frequency = 2pq = 2 × 0.98 × 0.02 ≈ 0.0392 ≈ 1 in 25.5. For AR disorders, the carrier frequency is approximately 2q when q is small. Knowing carrier frequency is essential for risk calculation in genetic counselling."
  },
  {
    id: 3,
    question: "In a pedigree analysis, two carrier parents (Aa × Aa) for an autosomal recessive condition have 4 unaffected children. The probability that ALL four unaffected children are carriers is:",
    options: ["(2/3)⁴ = 16/81 ≈ 0.198", "(1/2)⁴ = 1/16 = 0.0625", "(3/4)⁴ = 81/256 ≈ 0.316", "(1/4)⁴ = 1/256 ≈ 0.004"],
    answer: 0,
    explanation: "Among unaffected offspring of Aa × Aa: conditional probabilities are P(AA|unaffected) = 1/3 and P(Aa|unaffected) = 2/3. For all 4 unaffected children to be carriers: (2/3)⁴ = 16/81 ≈ 0.198 (19.8%). This conditional probability calculation (conditioning on being unaffected) is commonly tested in genetic counselling scenarios."
  },
  {
    id: 4,
    question: "A person has a family history of Huntington's disease. Their affected parent has HD. What is the risk that this person carries the expanded HTT allele?",
    options: ["100%", "50%", "25%", "75%"],
    answer: 1,
    explanation: "Huntington's disease is autosomal dominant. An affected parent is typically heterozygous (one expanded allele, one normal allele). Offspring inherit either the expanded allele (50%) or the normal allele (50%). Therefore, a person with one affected parent has a 50% risk of carrying the expanded HTT CAG repeat. Predictive genetic testing is available but requires careful pre-test genetic counselling given the lack of curative treatment."
  },
  {
    id: 5,
    question: "A gene encodes a 300 amino acid protein. The minimum length of the mRNA coding sequence (CDS) is approximately:",
    options: ["300 nucleotides", "900 nucleotides", "903 nucleotides", "1200 nucleotides"],
    answer: 2,
    explanation: "300 amino acids × 3 nucleotides/codon = 900 nt for the amino acids + 3 nt for the stop codon = 903 nt minimum coding sequence. The actual mRNA is longer, including 5' UTR, 3' UTR, and poly-A tail. The start codon (AUG) encodes the first Met but is included in the 300 codons."
  },
  {
    id: 6,
    question: "If the mutation rate at a locus is 10⁻⁵ per generation and the heterozygous fitness cost (selection coefficient against heterozygotes, hs) = 0.01, at mutation-selection balance the expected frequency of the deleterious allele (q) is approximately:",
    options: ["q ≈ μ/s = 10⁻³", "q ≈ √(μ/s) = 10⁻¹·⁵", "q ≈ μ/(hs) = 10⁻³", "q ≈ μ = 10⁻⁵"],
    answer: 2,
    explanation: "At mutation-selection balance for a partially dominant allele: q̂ ≈ μ/(hs), where μ is mutation rate, h is dominance coefficient, and s is selection coefficient. q̂ ≈ 10⁻⁵/0.01 = 10⁻³. For completely recessive alleles, the balance is q̂ ≈ √(μ/s). For dominant alleles, q̂ ≈ μ/s. These equilibria maintain deleterious alleles at low frequencies in populations."
  },
  {
    id: 7,
    question: "A scientist performs a dihybrid cross of RrYy × rrYy. What proportion of offspring would be expected to be rrYY?",
    options: ["1/16", "1/8", "3/16", "1/4"],
    answer: 1,
    explanation: "RrYy × rrYy: separately calculate each locus. Rr × rr → Rr(1/2), rr(1/2). Yy × Yy → YY(1/4), Yy(1/2), yy(1/4). P(rrYY) = P(rr) × P(YY) = 1/2 × 1/4 = 1/8. Since the genes assort independently (Mendel's second law), multiply the individual probabilities."
  },
  {
    id: 8,
    question: "The recombination frequency between two genes is 20%. This means that the two genes are approximately:",
    options: ["On different chromosomes", "20 centiMorgans (cM) apart on the same chromosome", "100 cM apart", "20 base pairs apart"],
    answer: 1,
    explanation: "1 centiMorgan (cM, or map unit) = 1% recombination frequency. Therefore, 20% recombination = 20 cM genetic distance. Genes >50 cM apart (or on different chromosomes) show 50% recombination and appear unlinked. At short distances, physical distance and genetic distance (cM) are roughly proportional, but recombination hotspots and coldspots cause deviations at larger scales."
  },
  {
    id: 9,
    question: "In an RNA-seq experiment, a gene has 1,000 mapped reads out of 10 million total reads, and the gene is 2 kb long. What is the RPKM (Reads Per Kilobase per Million mapped reads)?",
    options: ["100 RPKM", "50 RPKM", "200 RPKM", "500 RPKM"],
    answer: 1,
    explanation: "RPKM = (reads per gene) / [(total reads in millions) × (gene length in kb)] = 1,000 / [10 × 2] = 1,000/20 = 50 RPKM. RPKM normalizes for library size (per million reads) and gene length (per kb). FPKM is the paired-end equivalent; TPM (transcripts per million) is now preferred as it sums to 1 million and is more comparable across samples."
  },
  {
    id: 10,
    question: "A frameshift mutation caused by a single nucleotide deletion at position 100 of a 300-codon coding sequence would affect:",
    options: ["Only codon 33 (position 100/3 + 1)", "All codons from position 34 onwards, generating a completely altered protein sequence until a new stop codon appears", "Only the deleted codon and the one downstream", "The 5' UTR of the mRNA"],
    answer: 1,
    explanation: "A single nucleotide deletion shifts the reading frame at position 100 (approximately codon 34). Every codon downstream is shifted, generating a completely different amino acid sequence from codon 34 until a new stop codon is encountered in the new frame (often much earlier or later than the original stop codon), producing a truncated or elongated non-functional protein. Frameshift mutations are typically loss-of-function."
  },
  {
    id: 11,
    question: "In a PCR experiment with 30 cycles, starting with a single DNA template molecule, the theoretical maximum number of copies produced is:",
    options: ["30", "2^30 ≈ 10⁹", "30²", "10^30"],
    answer: 1,
    explanation: "In PCR, each cycle theoretically doubles the number of copies: after n cycles, you have 2ⁿ copies of the target sequence. After 30 cycles: 2³⁰ = 1,073,741,824 ≈ 10⁹ copies. In practice, efficiency is <100%, but PCR can still amplify a single molecule to detectable quantities. Starting from higher copy numbers proportionally amplifies the product."
  },
  {
    id: 12,
    question: "If two restriction enzymes (EcoRI and BamHI) cut a circular plasmid (5 kb) at one site each, gel electrophoresis of the double digest would produce:",
    options: ["One band at 5 kb", "Two bands that sum to 5 kb", "Three bands", "A smear"],
    answer: 1,
    explanation: "A circular plasmid cut by one restriction enzyme produces one linear fragment (5 kb). Cut by two different enzymes (each with one site) simultaneously: the two cuts linearize and then cut the linear molecule into two fragments. These fragments sum to 5 kb. The sizes depend on the distance between the two restriction sites. Running on a gel would show two bands of different sizes (unless the sites are equidistant, which would show one band at ~2.5 kb)."
  },
  {
    id: 13,
    question: "In linkage analysis, a LOD score of −2 at θ = 0.1 suggests:",
    options: ["Strong evidence for linkage at 10 cM", "Evidence AGAINST linkage at this recombination fraction", "The gene is located at 100 cM from the marker", "Evidence for heterogeneity"],
    answer: 1,
    explanation: "LOD score interpretation: LOD ≥ +3: evidence FOR linkage (1000:1 odds); LOD ≤ −2: evidence AGAINST linkage at that θ. A LOD of −2 at θ = 0.1 means the data are 100:1 against the gene being 10 cM from the marker. This rules out linkage within ~10 cM at this locus. Exclusion mapping uses negative LOD scores to exclude chromosomal regions."
  },
  {
    id: 14,
    question: "A protein is 200 amino acids long. If there is an average of one rare missense mutation per 1,000 nucleotides sequenced, approximately how many missense variants would be expected across the coding sequence of this protein?",
    options: ["0.2", "0.6", "0.3", "1.8"],
    answer: 1,
    explanation: "200 amino acids × 3 nt/codon = 600 nt coding sequence. At 1 mutation per 1,000 nt: 600/1,000 = 0.6 expected missense mutations across the CDS. (This is an approximation; not all mutations in coding sequence are missense — ~75% of random mutations are missense, ~25% synonymous, and ~5% nonsense, but the question asks about missense mutations at a rate of 1/1000.)"
  },
  {
    id: 15,
    question: "In gel electrophoresis, to accurately determine the size of an unknown PCR product, you must include:",
    options: ["A loading dye only", "A DNA size ladder/molecular weight marker with known fragment sizes for comparison", "A restriction digest of a known plasmid only", "A positive control PCR product of any size"],
    answer: 1,
    explanation: "A DNA molecular weight marker (ladder) with fragments of known sizes must be included in adjacent lane(s). By comparing migration distances of unknown fragments to the ladder, sizes can be estimated by interpolation (linear regression on log(size) vs migration distance). Common ladders: 100 bp ladder (50–1000 bp), 1 kb ladder (250 bp–10 kb), λ HindIII digest (23 kb–564 bp)."
  },

  // ===== COMPREHENSIVE MIXED — CONCEPTS & CLINICAL (Q16–Q35) =====
  {
    id: 16,
    question: "Meiotic drive (segregation distortion) refers to:",
    options: ["Normal Mendelian segregation with 50:50 ratio", "A phenomenon where certain alleles are transmitted to progeny at greater than 50% frequency, violating Mendelian segregation", "The equal distribution of chromosomes to gametes", "Genetic drift affecting allele frequencies in meiosis"],
    answer: 1,
    explanation: "Meiotic drive (segregation distortion) violates Mendel's first law: one allele at a locus is transmitted to >50% of offspring (sometimes >90%). Examples: Segregation Distorter (SD) locus in Drosophila causes degeneration of sperm not carrying SD; t-haplotypes in mice; Spore Killer in Neurospora. Meiotic drive increases allele frequency even if it reduces fitness, and is relevant to gene drive technology design."
  },
  {
    id: 17,
    question: "Heteroplasmy refers to:",
    options: ["Different genotypes in different tissues due to somatic mutation", "The coexistence of two or more mitochondrial DNA variants within a single cell or individual", "Expression of two different alleles at a heterozygous locus", "Random X-inactivation creating different phenotypes in females"],
    answer: 1,
    explanation: "Heteroplasmy: a cell/individual contains a mixture of different mitochondrial DNA (mtDNA) sequences (wild-type and mutant) because mitochondria divide independently of cell division and mtDNA copies are ~1000s per cell. Disease expression in mitochondrial disorders depends on the heteroplasmy level (proportion of mutant mtDNA) — the 'threshold effect.' High heteroplasmy in energy-demanding tissues (brain, muscle, heart) causes disease."
  },
  {
    id: 18,
    question: "Pleiotropy in genetics means:",
    options: ["One trait is controlled by multiple genes", "One gene affects multiple phenotypic traits", "Two genes have identical effects on one trait", "Multiple alleles exist at one locus"],
    answer: 1,
    explanation: "Pleiotropy: a single gene influences multiple seemingly unrelated phenotypic traits. Examples: FBN1 mutations (Marfan syndrome) affect skeletal, cardiovascular, ocular, and pulmonary systems. PKU mutations affect brain development, hair/skin pigmentation. CFTR mutations affect lungs, pancreas, sweat glands, and vas deferens. Pleiotropy reflects the widespread role of many proteins in multiple biological processes."
  },
  {
    id: 19,
    question: "The ABO blood group system in forensics is useful for:",
    options: ["Definitive identification of a person from a blood sample", "Exclusion evidence — certain blood group incompatibilities can exclude a suspect or paternity, but cannot definitively identify", "Determining the ethnicity of an unknown suspect", "DNA profiling by STR analysis"],
    answer: 1,
    explanation: "ABO blood typing can be used as exclusion evidence: if blood at a crime scene is group B but the suspect is group A, the suspect is excluded. However, ABO types are shared by large fractions of the population (~9% B in Europeans), so they cannot definitively identify an individual. Modern forensics uses STR DNA profiling for identification. Paternity testing by ABO is only useful for exclusion."
  },
  {
    id: 20,
    question: "Robertsonian translocation involves:",
    options: ["Reciprocal exchange of segments between two non-homologous chromosomes", "Fusion of the long arms of two acrocentric chromosomes (13, 14, 15, 21, 22) at their centromeres, with loss of short arms", "Inversion of a chromosomal segment", "Insertion of one chromosome into a non-homologous chromosome"],
    answer: 1,
    explanation: "Robertsonian translocations (rob) occur between two acrocentric chromosomes (13, 14, 15, 21, 22), which fuse at their centromeric regions. The short arms (containing only rRNA genes) are lost. A Robertsonian carrier has only 45 chromosomes (one fusion chromosome) but may be phenotypically normal. rob(14;21) carriers can produce unbalanced offspring with Down syndrome (trisomy 21)."
  },
  {
    id: 21,
    question: "The FISH probe for a gene-specific test gives two signals in normal cells. A cancer cell shows three signals on interphase FISH. This indicates:",
    options: ["Loss of one copy of the gene", "Gain of one copy — gene amplification or polysomy", "Normal diploid status", "Complete deletion of the gene"],
    answer: 1,
    explanation: "In diploid cells, gene-specific FISH probes typically give 2 signals (one per chromosome). Three signals indicate: trisomy of the chromosome carrying that gene (polysomy), or focal gene amplification (multiple copies of the gene on one chromosome — more than 3 signals, often 10+, in many cancer cells). Clinical examples: 3+ HER2 FISH signals indicate HER2 amplification in breast cancer, guiding trastuzumab therapy."
  },
  {
    id: 22,
    question: "The principle of forensic DNA mixture interpretation states that:",
    options: ["Multiple DNA contributors to a sample can always be perfectly separated", "Mixtures of DNA from multiple individuals can complicate profile interpretation; probabilistic genotyping tools (LRmix, STRmix) model mixtures statistically", "DNA mixtures cannot be analyzed in forensics", "Minor contributors' alleles always appear as separate bands from major contributors"],
    answer: 1,
    explanation: "DNA mixtures (e.g., gang rape evidence, touch DNA) contain alleles from ≥2 individuals. Interpretation challenges: determining number of contributors, deconvoluting profiles, and assigning alleles to individuals. Probabilistic genotyping software (STRmix, TrueAllele, LRmix) uses mixture deconvolution algorithms to calculate likelihood ratios for propositions about contributors' identities. This has replaced binary (inclusion/exclusion) interpretation for complex mixtures."
  },
  {
    id: 23,
    question: "Genetic testing for BRCA1/2 is offered to patients with all of the following EXCEPT:",
    options: ["Family history of breast cancer in multiple close relatives", "Personal history of triple-negative breast cancer under age 60", "Sporadic non-familial breast cancer in a 75-year-old with no family history", "Ashkenazi Jewish ancestry (three founder mutations prevalent at 1 in 40)"],
    answer: 2,
    explanation: "BRCA testing criteria (NCCN/NICE): personal/family history of breast or ovarian cancer, particularly at young ages (<50), bilateral disease, triple-negative breast cancer ≤60 years, male breast cancer, or ≥2 close relatives affected. Ashkenazi Jewish ancestry justifies testing (1-in-40 prevalence of 3 founder mutations). Sporadic, elderly, low-risk patients without family history are not standard testing indications — germline testing should be guided by genetic counselling."
  },
  {
    id: 24,
    question: "The term 'de novo mutation' in clinical genetics refers to:",
    options: ["A mutation inherited from a carrier parent", "A mutation that arose newly in the affected individual (not present in either parent's germline)", "A mutation shared by all family members", "A mutation inherited from a distant ancestor many generations back"],
    answer: 1,
    explanation: "De novo mutations arise spontaneously in the germline (egg/sperm) or early embryo of the affected individual — not inherited from either parent (parents test negative). De novo mutations are important in: dominant diseases in sporadic cases (Huntington's: paternal de novo expansions; NF1: ~50% de novo; tuberous sclerosis), autism spectrum disorder (large CNVs), and intellectual disability. Advanced paternal age increases de novo mutation rate."
  },
  {
    id: 25,
    question: "mosaicism in genetics occurs when:",
    options: ["A person has two different alleles at a heterozygous locus", "An individual has two or more genetically distinct cell populations arising from a post-zygotic mutation event", "Two different species share the same gene sequence", "An organism has multiple copies of a gene through duplication"],
    answer: 1,
    explanation: "Mosaicism: a post-zygotic somatic or germline mutation creates genetically distinct cell populations within one individual. Somatic mosaicism: mosaic Down syndrome (may have milder features), McCune-Albright syndrome (GNAS mutation), many cancer mutations. Germline mosaicism: a mutation present only in gonads (not blood) can be passed to offspring even when the parent tests negative by blood testing — important for genetic counselling recurrence risk."
  },
  {
    id: 26,
    question: "Quantitative PCR (qPCR) for viral load measurement (e.g., HIV, HCV RNA) provides clinically useful information for:",
    options: ["Determining the viral genotype/subtype", "Monitoring treatment response, predicting disease progression, and guiding treatment initiation/modification", "Serological confirmation of infection", "Vaccine efficacy assessment only"],
    answer: 1,
    explanation: "Viral load quantification by RT-qPCR measures circulating virus levels (HIV RNA copies/mL, HCV RNA IU/mL). Clinical uses: (1) HIV: treatment initiation threshold (CD4 <200 or any high VL), monitoring viral suppression (<50 copies/mL) and detecting treatment failure, (2) HCV: define treatment duration and assess sustained virologic response (SVR) at 12 weeks post-treatment, (3) prognosis: higher viral load correlates with faster disease progression."
  },
  {
    id: 27,
    question: "The International HapMap Project mapped patterns of human genetic variation by characterizing:",
    options: ["All rare variants in the genome", "Linkage disequilibrium (LD) patterns and haplotype blocks across the genome in multiple world populations (HapMap I: 270 individuals; HapMap 3: 11 populations)", "Only disease-associated SNPs from GWAS", "Full genome sequences of 1000 individuals"],
    answer: 1,
    explanation: "HapMap (2002–2009) genotyped millions of SNPs across the genomes of 270 individuals from 4 populations (Yoruba, European, Chinese, Japanese) in HapMap I; expanded to 11 populations in HapMap III. Key contributions: defined common haplotype blocks (regions of high LD), identified tag SNPs (a few SNPs that capture most LD block variation), and provided the foundation for GWAS by enabling efficient genotyping of representative SNPs across the genome."
  },
  {
    id: 28,
    question: "Which of the following best explains why population bottlenecks affect genetic diversity?",
    options: ["Bottlenecks increase mutation rates", "A severe reduction in population size eliminates most allelic variation because survivors carry only a small subset of the original gene pool", "Bottlenecks increase selection pressure only", "Bottlenecks cause chromosomal rearrangements"],
    answer: 1,
    explanation: "Genetic bottleneck: a drastic population reduction (disease, disaster, colonization event) means survivors carry only a fraction of the original allelic diversity. Recovery from the bottleneck — even to large numbers — does not restore lost alleles (which can only return through new mutations over long timescales). Examples: cheetah (severely bottlenecked, extreme low diversity), Ashkenazi Jewish founder mutations, Finnish disease heritage (rare recessive disorders highly prevalent)."
  },
  {
    id: 29,
    question: "Tandem repeats (STRs, VNTRs) are useful as genetic markers because:",
    options: ["They have single, stable alleles in all populations", "They are highly polymorphic (many alleles with different repeat numbers), making them highly discriminating markers for forensics, kinship testing, and genetic mapping", "They are found only in non-coding regions", "They mutate at very low rates"],
    answer: 1,
    explanation: "Tandem repeats: STRs (2–7 bp unit, microsatellites) and VNTRs (>7 bp unit, minisatellites) are highly polymorphic because of their high mutation rates due to replication slippage. Many alleles per locus exist in a population, giving high heterozygosity. This makes them ideal for: forensic DNA profiling, paternity/kinship testing, identity verification in transplantation, and genetic linkage mapping. The CODIS STR system uses 20 core STR loci."
  },
  {
    id: 30,
    question: "Multivariate analysis in complex trait genetics (including factor analysis and structural equation modeling) is used to:",
    options: ["Sequence multiple genes simultaneously", "Decompose the genetic architecture of correlated phenotypes, estimating genetic and environmental components of covariance between traits", "Identify the causal variant for each trait", "Perform multiple GWAS simultaneously"],
    answer: 1,
    explanation: "Structural equation modeling (SEM) and factor analysis in genetic epidemiology (e.g., biometric twin model decomposition) partition the variance and covariance of multiple correlated phenotypes into additive genetic (A), common environmental (C), and unique environmental (E) components. This reveals whether trait correlations are primarily genetic or environmental in origin, and whether common genetic factors underlie clusters of related traits."
  },

  // ===== COMPREHENSIVE MIXED — RESEARCH METHODS & EMERGING TOPICS (Q31–Q50) =====
  {
    id: 31,
    question: "The GATK (Genome Analysis Toolkit) Best Practices pipeline is used for:",
    options: ["RNA-seq differential expression analysis", "Germline and somatic variant calling from NGS data — including SNP/indel genotyping from whole genome or exome sequencing", "Genome assembly from long reads", "Chromatin accessibility analysis (ATAC-seq)"],
    answer: 1,
    explanation: "GATK (Broad Institute) is the gold-standard pipeline for variant calling: BWA alignment → duplicate marking (Picard/GATK) → base quality score recalibration (BQSR) → HaplotypeCaller genotyping (germline) or Mutect2 (somatic) → variant filtering (VQSR). GATK handles large cohort joint calling (GenomicsDBImport) for population-scale genomics and is used in gnomAD and major biobank analyses."
  },
  {
    id: 32,
    question: "Variant of Uncertain Significance (VUS) in clinical genetics is defined as:",
    options: ["A variant that definitely causes disease", "A variant where available evidence is insufficient to classify it as either pathogenic or benign — requiring ongoing surveillance and reclassification as evidence accumulates", "A variant found only in affected individuals", "A common polymorphism present in >1% of the population"],
    answer: 1,
    explanation: "VUS (ACMG/AMP classification): evidence is insufficient, conflicting, or intermediate. VUSs are not used clinically to guide management decisions. Reclassification over time is common as more evidence accumulates (functional studies, segregation data, population frequency). Patients with VUSs should be counselled about uncertainty and enrolled in variant-sharing initiatives (ClinVar, ClinGen). VUSs pose significant challenges in clinical genetics."
  },
  {
    id: 33,
    question: "The R software package DESeq2 is used for:",
    options: ["Genome assembly", "Differential gene expression analysis of RNA-seq count data using a negative binomial statistical model", "DNA methylation analysis", "ChIP-seq peak calling"],
    answer: 1,
    explanation: "DESeq2 (Love, Huber, Anders) models RNA-seq count data with the negative binomial distribution, accounting for overdispersion (variance > mean). It estimates size factors (normalization), fits gene-wise dispersion estimates with an empirical Bayes shrinkage procedure, and performs Wald or likelihood ratio tests for differential expression. DESeq2 and edgeR are the most widely used tools for count-based RNA-seq differential expression analysis."
  },
  {
    id: 34,
    question: "Genome-scale metabolic models (GEMs) are used to:",
    options: ["Map genetic variants to metabolic pathways", "Computationally reconstruct and simulate all metabolic reactions in an organism to predict metabolic capabilities, essential genes, and drug targets", "Quantify metabolite concentrations by mass spectrometry", "Identify regulatory elements controlling metabolic gene expression"],
    answer: 1,
    explanation: "GEMs represent all known metabolic reactions in an organism as a stoichiometric matrix. Constraint-based modeling methods (flux balance analysis, FBA) predict metabolic fluxes under different conditions. Applications: identify essential genes (lethal reactions), predict metabolic phenotypes, engineer metabolic pathways for bioproduction, and identify drug targets. GEMs exist for thousands of microorganisms and human cell types (Recon2, Human1)."
  },
  {
    id: 35,
    question: "Proximity ligation assay (Hi-C) and related chromosome conformation capture methods measure:",
    options: ["Transcription factor binding across the genome", "Physical proximity between genomic loci in 3D nuclear space, revealing chromatin loops and topological domains", "Protein-RNA interactions across the transcriptome", "DNA methylation at single-nucleotide resolution"],
    answer: 1,
    explanation: "Chromosome conformation capture (3C and derivatives 4C, 5C, Hi-C, Micro-C): formaldehyde cross-links interacting chromatin regions, restriction digestion fragments, ligation of proximal fragments, and sequencing identifies which genomic loci are spatially close in the nucleus. Hi-C maps genome-wide contact maps revealing: A/B compartments (active/inactive chromatin), topologically associating domains (TADs), and long-range enhancer-promoter loops."
  },
  {
    id: 36,
    question: "The concept of 'genetic architecture' of a disease refers to:",
    options: ["The chromosomal location of disease genes only", "The number of causal variants, their allele frequencies, effect sizes, and interactions that together determine disease susceptibility", "The protein structure of the disease-causing gene product", "The inheritance pattern (AD, AR, X-linked) of the disease"],
    answer: 1,
    explanation: "Genetic architecture encompasses: number of causal loci (oligogenic vs polygenic), frequency spectrum of risk alleles (common, low-frequency, rare), effect sizes (large vs small), dominance/recessivity, penetrance, gene-gene interactions (epistasis), gene-environment interactions, and population-specific effects. Monogenic diseases have simple architecture; complex diseases like schizophrenia and T2D have highly polygenic architectures."
  },
  {
    id: 37,
    question: "Single-molecule sequencing (e.g., Oxford Nanopore) allows direct detection of DNA base modifications because:",
    options: ["Modified bases migrate differently on gels", "Current disruptions caused by modified bases (5mC, 5hmC, 6mA) as they translocate through the nanopore differ from unmodified bases, enabling direct methylation detection without bisulfite treatment", "Antibodies against modified bases are used in the nanopore", "Mass spectrometry detects modified bases within the nanopore"],
    answer: 1,
    explanation: "Nanopore sequencing measures electrical current through the pore as DNA translocates. Base modifications (5-methylcytosine, 5-hydroxymethylcytosine, N6-methyladenine, base damage) produce distinct current disruption patterns compared to canonical bases. Neural network-based basecallers (Guppy, Dorado) can detect these modifications directly from the raw signal, enabling simultaneous sequence and methylome characterization without bisulfite conversion."
  },
  {
    id: 38,
    question: "ENCODE's discovery that most GWAS variants lie in non-coding regions suggests that disease-associated variants predominantly:",
    options: ["Affect protein structure directly", "Alter the function of regulatory elements (enhancers, promoters) controlling gene expression in disease-relevant tissues", "Create frameshifts in coding sequences", "Are synonymous mutations with no functional effect"],
    answer: 1,
    explanation: ">90% of GWAS hits map to non-coding regions, enriched in tissue-specific regulatory elements (enhancers, promoters) identified by ENCODE. This implies most disease mechanisms operate through altered gene expression regulation rather than direct protein coding changes. Connecting regulatory variants to their target genes (via eQTLs, chromatin looping) is a major challenge in translating GWAS findings to biological mechanisms and therapeutic targets."
  },
  {
    id: 39,
    question: "Prenatal non-invasive prenatal testing (NIPT) works by:",
    options: ["Sequencing fetal cells from maternal blood", "Analyzing cell-free fetal DNA (cffDNA) — fragments of placental DNA circulating in maternal plasma — by massively parallel sequencing to detect fetal chromosomal aneuploidies", "Measuring fetal proteins in maternal serum (AFP, β-hCG)", "Ultrasound measurement of nuchal translucency"],
    answer: 1,
    explanation: "NIPT analyzes cell-free fetal DNA (cffDNA) from maternal blood (~10–15% of total cfDNA, of placental origin) by massively parallel shotgun sequencing or targeted sequencing. Aneuploidy (excess chromosomal material) is detected as over/underrepresentation of reads mapping to specific chromosomes. NIPT screens for T21 (Down), T18 (Edwards), T13 (Patau), and sex chromosome aneuploidies with high sensitivity/specificity. Positive NIPT requires invasive confirmation (CVS/amniocentesis)."
  },
  {
    id: 40,
    question: "Whole genome bisulfite sequencing (WGBS) and reduced representation bisulfite sequencing (RRBS) differ in that:",
    options: ["WGBS uses CRISPR for methylation editing; RRBS uses standard bisulfite", "WGBS provides genome-wide methylation at every CpG at high cost; RRBS enriches for CpG-rich regions (promoters, CpG islands) at lower cost and depth but with reduced genome coverage", "RRBS is more accurate than WGBS for all regions", "WGBS only measures 5hmC; RRBS measures only 5mC"],
    answer: 1,
    explanation: "WGBS (whole-genome bisulfite sequencing) provides comprehensive single-CpG methylation across the entire genome but requires high sequencing depth (~30×) and is expensive. RRBS uses MspI restriction enzyme digestion to enrich for CpG-dense regions (CpG islands, promoters) before bisulfite conversion, reducing sequencing costs ~10-fold but covering only ~1–5% of CpGs. RRBS is preferred for large sample studies where complete genome-wide coverage is less critical."
  },
  {
    id: 41,
    question: "Proteomics differs from genomics in that proteomics studies:",
    options: ["All genes expressed in a cell at the DNA level", "The complete set of proteins expressed by a genome — including post-translational modifications, isoforms, protein complexes, and abundance at a given time and condition", "Only the sequence of all proteins encoded by a genome", "Protein-DNA interactions genome-wide"],
    answer: 1,
    explanation: "Proteomics: the study of all proteins (the proteome) in a cell, tissue, or organism at a specific time. Unlike the genome (relatively stable), the proteome is dynamic — changing with cell type, developmental stage, cellular state, and disease. Proteomics encompasses: protein identification, quantification, PTM mapping (phosphoproteomics, ubiquitomics), protein-protein interactions, and structural proteomics. Mass spectrometry is the primary proteomics tool."
  },
  {
    id: 42,
    question: "The concept of gene dosage compensation in mammals is achieved by:",
    options: ["Upregulation of both X-linked alleles in females", "X-inactivation (Lyonization) silencing one X chromosome in each female somatic cell, equalizing X-linked gene expression between XX females and XY males", "Imprinting of all X-linked genes", "Preferential inactivation of X chromosomes with harmful alleles"],
    answer: 1,
    explanation: "Dosage compensation ensures roughly equal X-linked gene expression in XX females and XY males. In mammals (placental, X-inactivation): one X is randomly silenced early in development (XIST lncRNA coats and silences the inactive X). The choice is random but clonal — all descendants of one cell maintain the same X inactivated. ~15% of X-linked genes escape inactivation (expressed from both Xs), contributing to sex-specific phenotypic differences."
  },
  {
    id: 43,
    question: "Which of the following best describes the mechanism of DNA transposon (Class II transposable element) mobilization?",
    options: ["RNA intermediate produced, reverse transcribed to cDNA, and cDNA integrated elsewhere (copy and paste)", "Cut and paste — transposase cuts the transposon from its current location and reinserts it elsewhere in the genome", "Recombination between long terminal repeats (LTRs) causing deletion", "Integration via a single-strand integration mechanism"],
    answer: 1,
    explanation: "DNA transposons (Class II TEs, e.g., Tc1/mariner, P elements, Ac/Ds in maize) mobilize via a 'cut and paste' mechanism: transposase binds terminal inverted repeats (TIRs), excises the transposon from the donor site, and reinserts it at a new target site. This is a conservative mechanism (no increase in copy number unless the cut site is repaired by using sister chromatid as template). Class I retrotransposons use RNA-mediated 'copy and paste'."
  },
  {
    id: 44,
    question: "The term 'loss of heterozygosity' (LOH) in cancer genetics refers to:",
    options: ["Loss of one allele of a tumor suppressor gene, leaving only the mutant allele — unmasking the first hit", "Loss of both alleles of a gene", "Acquisition of an additional mutant allele", "Loss of heterozygosity at microsatellite loci due to MMR deficiency"],
    answer: 0,
    explanation: "LOH: a cancer cell that was heterozygous at a tumor suppressor locus (one mutant + one wild-type allele) loses the wild-type allele through chromosomal deletion, LOH through uniparental disomy, or mitotic recombination. This leaves only the mutant allele (second hit for the two-hit model). LOH at specific chromosomal loci (e.g., 3p in lung cancer, 17p TP53 locus, 13q RB1 locus) is a key feature of specific cancers detected by SNP array or microsatellite analysis."
  },
  {
    id: 45,
    question: "Exome sequencing reveals a heterozygous rare variant (MAF = 0.001%) in a patient with a dominant disease. This variant is predicted pathogenic by multiple in silico tools (SIFT, PolyPhen-2, CADD score >30). Under ACMG/AMP guidelines, relevant criteria include:",
    options: ["Only the disease phenotype matters — computational tools cannot be used", "PP3 (multiple computational evidence supporting pathogenicity), PM2 (absent/rare in population databases), and clinical correlation criteria — contributing toward likely pathogenic or pathogenic classification", "The variant can be immediately classified as pathogenic based on computational tools alone", "Variants below 0.01% MAF are always pathogenic"],
    answer: 1,
    explanation: "ACMG/AMP guidelines assign criteria: PM2 (rare in population controls, <0.001% in gnomAD) is supporting-moderate evidence for pathogenicity; PP3 (multiple computational tools predict pathogenicity) is supporting evidence. CADD >30 (top 0.1% of most deleterious variants) is a strong indicator but not sufficient alone. These criteria combine with phenotypic match, segregation data, and functional studies to reach a classification of pathogenic, likely pathogenic, or VUS."
  },
  {
    id: 46,
    question: "The India Genome Initiative (IndiGen) found that approximately what percentage of clinically relevant variants reported in global databases were rare or absent in the Indian population?",
    options: ["~10%", "~30%", "~60%", "~90%"],
    answer: 2,
    explanation: "ICMR-CSIR IndiGen Programme WGS analysis showed that a substantial fraction (~60%) of clinically reported variants in ClinVar had very different allele frequencies in Indian populations compared to European reference populations. This underscores the critical need for Indian-specific reference databases for accurate variant interpretation, as European-dominated databases systematically misclassify Indian population variants. The study also identified 2.3 million novel variants specific to Indian populations."
  },
  {
    id: 47,
    question: "Ethical issues unique to germline gene editing (compared to somatic gene therapy) include:",
    options: ["Risk of allergic reactions to the viral vector", "Heritable changes — modifications affect all cells of the edited individual AND all future generations; lack of consent from future individuals; potential for enhancement and eugenics", "Higher cost compared to somatic therapy", "Limited efficacy in post-mitotic cells"],
    answer: 1,
    explanation: "Germline editing concerns: (1) heritable modifications without consent from future generations, (2) potential for 'designer babies' and eugenics, (3) unknown long-term effects of genetic changes in all body cells and descendants, (4) safety risks from off-target edits in every cell of an individual who cannot consent, and (5) equity concerns. Most regulatory bodies and scientific societies call for prohibition of clinical germline editing until safety and ethics are resolved."
  },
  {
    id: 48,
    question: "The recurrence risk for a couple who already have a child with an autosomal recessive condition (both parents confirmed carriers) is:",
    options: ["25% for every subsequent pregnancy, regardless of the number of previously affected children", "Lower for each subsequent pregnancy because they have already had one affected child", "50% for each subsequent pregnancy", "100% if both parents are homozygous carriers"],
    answer: 0,
    explanation: "For carriers of AR disease (Aa × Aa): each pregnancy independently has a 25% risk of being affected, 50% carrier, and 25% unaffected homozygous. The risk does NOT decrease because previous children were affected — each conception is an independent event, like flipping a coin. This is a fundamental concept in genetic counselling. The recurrence risk for parents of an affected child (assuming confirmed carrier status) is 25% per pregnancy."
  },
  {
    id: 49,
    question: "The term 'functional annotation' in genomics refers to:",
    options: ["Determining the DNA sequence of a genome", "Assigning biological meaning to genomic sequences — identifying genes, regulatory elements, repeats, and predicting function based on sequence homology, expression data, and experimental evidence", "Measuring the expression levels of all annotated genes", "Converting raw sequencing reads to aligned sequences"],
    answer: 1,
    explanation: "Genome annotation: genome sequence → functional meaning. Structural annotation: gene prediction (ab initio, homology-based, RNA-seq guided) identifies gene locations, exons, introns, UTRs. Functional annotation: assigns gene ontology (GO) terms, pathway membership, protein function predictions (InterPro domains), regulatory element classification (ENCODE), and disease gene identification (OMIM). Key databases: Ensembl, UCSC Genome Browser, RefSeq, NCBI Gene."
  },
  {
    id: 50,
    question: "Whole exome sequencing (WES) has an average diagnostic yield of approximately what percentage in patients with rare suspected genetic disorders?",
    options: ["~10–15%", "~25–30%", "~60–70%", "~90%"],
    answer: 1,
    explanation: "WES diagnostic yield: ~25–30% in unselected rare disease patients (intellectual disability, congenital anomalies, rare diseases of unknown etiology). Yield is higher in: consanguineous families (~40%), neurodevelopmental disorders with family history (~35%), early childhood death (~40%), or trio analysis (proband + both parents). Yield improves over time as VUSs are reclassified and new gene-disease associations are established. WGS has ~5–10% higher yield than WES, primarily from non-coding and structural variants."
  },
]

export default questions
