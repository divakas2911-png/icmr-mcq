const questions = [
  {
    id: 1,
    question: "The Human Genome Project (HGP) was declared complete in April 2003. The key methods used included:",
    options: ["Whole genome shotgun sequencing exclusively using Illumina short-read technology", "Two parallel approaches: hierarchical shotgun sequencing (public consortium — BAC-by-BAC) and whole genome shotgun sequencing (Celera Genomics); both used Sanger sequencing as the sequencing chemistry", "CRISPR-based sequencing and nanopore technology", "Single-molecule real-time (SMRT) sequencing on PacBio instruments"],
    answer: 1,
    explanation: "The HGP used two approaches: (1) Public consortium (NIH/international) — hierarchical shotgun: BAC clones from physical map were individually shotgun-sequenced and assembled; (2) Celera Genomics (J. Craig Venter) — whole genome shotgun (WGS): the entire genome was randomly sheared and sequenced, assembled computationally. Both used Sanger dideoxy sequencing. The T2T (Telomere-to-Telomere) Consortium in 2022 completed the truly gapless sequence using PacBio HiFi and Oxford Nanopore long reads, revealing the previously missing ~8% of the genome (centromeric satellite repeats, rDNA)."
  },
  {
    id: 2,
    question: "Single nucleotide polymorphisms (SNPs) are defined as:",
    options: ["Any mutation in the genome regardless of frequency", "DNA sequence variants where a single nucleotide differs between individuals, present at >1% frequency in the population (minor allele frequency ≥ 1%); mutations <1% are called rare variants", "Only non-synonymous coding variants that change amino acid sequence", "Variants that cause disease"],
    answer: 1,
    explanation: "SNPs are the most common form of genetic variation (~1 per 100-300 bp; ~4-5 million SNPs between any two human genomes). Definition: single base pair differences between individuals at a locus where the less common allele has ≥1% frequency in the population. Below 1% frequency = rare variant. Types: synonymous (same amino acid), non-synonymous (different amino acid), splice site, intronic, intergenic. Most SNPs are neutral or near-neutral. The HapMap and 1000 Genomes Projects catalogued human SNPs. Common SNPs used in GWAS."
  },
  {
    id: 3,
    question: "Linkage disequilibrium (LD) in genomics refers to:",
    options: ["The tendency for disease-associated alleles to be linked to specific chromosomes", "The non-random association between alleles at two or more loci in a population — alleles that occur together more (or less) often than expected by chance based on their individual frequencies", "The equilibrium frequency of alleles in a population following Hardy-Weinberg law", "The degree to which two loci segregate together in a single family (linkage analysis)"],
    answer: 1,
    explanation: "Linkage disequilibrium (LD): two alleles at different loci are in LD if they occur together in a population more (or less) often than expected by random association. Measured by r² (correlation coefficient, 0-1) and D' (normalized D statistic, 0-1). LD blocks: regions of high LD spanning ~10-100 kb in Europeans, shorter in African populations (older population, more recombination events, more allelic diversity). LD decays with physical distance (recombination) and time. LD is the basis for GWAS: tag SNP can represent a haplotype block."
  },
  {
    id: 4,
    question: "Haplotype block structure and tagging SNPs are important in GWAS because:",
    options: ["Each SNP must be individually genotyped for accurate disease association", "Blocks of SNPs in high LD are inherited together; genotyping a subset of tag SNPs captures genetic variation across the entire block, reducing genotyping requirements by >90% while maintaining power to detect associations", "Haplotype blocks are identical in all human populations", "Tag SNPs are always the causal variants for disease associations"],
    answer: 1,
    explanation: "The HapMap Project identified haplotype blocks in the genome (regions of high LD). Tag SNPs efficiently capture common variation within blocks: by genotyping ~500,000-1,000,000 tag SNPs on commercial arrays (Affymetrix/Illumina SNP chips), >80% of common variants (MAF>5%) in populations of European/East Asian ancestry are captured through LD proxies. This reduced genotyping from ~12 million common SNPs to manageable numbers. Tag SNPs identify the region of association; the causal variant must be identified by fine-mapping and functional studies."
  },
  {
    id: 5,
    question: "A genome-wide association study (GWAS) for type 2 diabetes identifies a SNP (rs7903146) in the TCF7L2 gene with odds ratio = 1.37 and p-value = 3 × 10⁻¹⁰. The genome-wide significance threshold of p < 5 × 10⁻⁸ was set because:",
    options: ["This p-value threshold was arbitrarily chosen by the first GWAS researchers", "Testing ~1 million independent SNPs genome-wide requires Bonferroni correction (0.05/1,000,000 = 5 × 10⁻⁸) to control type I error (false positive) rate at 5%", "This threshold controls the false discovery rate (FDR) at 5%", "p < 5 × 10⁻⁸ ensures odds ratio > 1.5 for clinical utility"],
    answer: 1,
    explanation: "GWAS tests millions of SNPs simultaneously. Bonferroni correction: significance threshold = α/number of tests = 0.05/~1,000,000 = 5 × 10⁻⁸. This controls the experiment-wise error rate at 5% (expected ≤0.05 false positives per GWAS). The ~1 million independent tests reflects the number of approximately independent LD blocks in the genome. Using standard p < 0.05 would generate ~50,000 false positives per genome scan. The p < 5 × 10⁻⁸ threshold has been widely adopted as genome-wide significance since Dudbridge & Gusnanto (2008)."
  },
  {
    id: 6,
    question: "The 'missing heritability' problem in GWAS refers to:",
    options: ["The inability to find any genetic associations for common diseases", "The observation that all identified common SNP associations from GWAS explain only a fraction of the estimated trait heritability from twin studies; for most complex traits, GWAS explain 5-20% of heritability while twin studies suggest 40-80% heritability", "The loss of genetic information when DNA samples are stored incorrectly", "Genetic associations that are specific to one population and therefore 'missing' from multi-ethnic GWAS"],
    answer: 1,
    explanation: "Missing heritability: twin/family studies estimate high heritability for complex traits (height ~80%, BMI ~60-80%, schizophrenia ~80%). GWAS identified SNPs explain only a fraction: height GWAS SNPs explain ~10-20% of variance (though with >3000 SNPs identified, now explaining ~25-30%). Proposed explanations: (1) Many common SNPs with very small effects not yet detected; (2) Rare variants not captured by common SNP arrays; (3) Gene-gene interactions (epistasis); (4) Gene-environment interactions; (5) Epigenetic effects; (6) Overestimated heritability in twin studies. GWAS sample sizes continue to grow (UK Biobank: 500,000 participants)."
  },
  {
    id: 7,
    question: "Polygenic risk scores (PRS) are calculated by:",
    options: ["Adding up all risk alleles an individual carries regardless of effect size", "Summing the weighted genetic effects of multiple risk SNPs across the genome (Σ β_i × genotype_i, where β_i is the effect size/log odds ratio for each SNP from GWAS summary statistics), creating a continuous score predicting disease risk", "Using only the top 10 GWAS-significant SNPs to predict disease", "Calculating the ratio of risk to protective alleles in an individual's genome"],
    answer: 1,
    explanation: "Polygenic Risk Score (PRS) = Σ(β_i × dosage_i) summed across thousands to millions of SNPs, where β_i is the effect size from GWAS (log OR for binary traits, beta coefficient for quantitative traits) and dosage_i is the number of risk alleles (0, 1, or 2) at each SNP. Individuals in the top 10% of PRS distribution for coronary artery disease have 3× population average risk — comparable to monogenic risk factors. PRS can be used for disease risk stratification, pharmacogenomics, and screening priority. Limitation: population-specificity (GWAS from Europeans perform worse in non-European populations)."
  },
  {
    id: 8,
    question: "Copy number variants (CNVs) are defined as:",
    options: ["SNPs that change the copy number of amino acids in a protein", "Structural variants (deletions, duplications, inversions, translocations) ≥1 kb that alter the copy number of a genomic segment; they represent a major source of genetic variation (~0.5-1% of any individual's genome)", "All chromosomal rearrangements visible by karyotyping", "Tandem repeats of 1-6 bp units (microsatellites)"],
    answer: 1,
    explanation: "CNVs are structural variants ≥1 kb that alter copy number: deletions (loss of one or both copies) and duplications (extra copy/copies). CNVs affect ~0.5-1% of the human genome per individual (~1000 CNVs per genome). Large CNVs (>500 kb) are rare but strongly affect phenotype; small CNVs are common and often benign. CNVs affect gene dosage, disrupt genes, alter regulatory elements, or cause position effects. Detected by: chromosomal microarray, CNV calling from WGS/WES, SNP arrays. Major cause of intellectual disability, autism, schizophrenia, and other neurodevelopmental disorders."
  },
  {
    id: 9,
    question: "The 1000 Genomes Project primary contribution to genomics was:",
    options: ["Sequencing the first complete human reference genome", "Providing the most comprehensive catalog of common human genetic variation (SNPs, indels, CNVs) at >1% MAF in 26 populations from 5 continents, serving as a reference for imputation and GWAS analysis", "Identifying all protein-coding genes in the human genome", "Sequencing 1000 cancer genomes to identify somatic driver mutations"],
    answer: 1,
    explanation: "The 1000 Genomes Project (2008-2015) sequenced 2,504 individuals from 26 populations to low coverage (2-6×), identifying: >88 million SNPs, >3.6 million indels, ~60,000 structural variants. Most importantly: comprehensive catalog of common and low-frequency variants with population-specific allele frequencies. Used for: GWAS imputation reference panel (HRC, TOPMed), population genetics, evolutionary studies. Successor: gnomAD (>140,000 exomes, ~60,000 genomes) provides allele frequencies for variant interpretation."
  },
  {
    id: 10,
    question: "Whole exome sequencing (WES) covers which portion of the genome and has what primary advantage over whole genome sequencing (WGS) for rare disease diagnosis?",
    options: ["WES covers all genes including non-coding; WGS covers only exons", "WES targets the ~1-2% of the genome comprising protein-coding exons (~20,000 genes, ~60 Mb); lower cost than WGS (~$300-500 vs $800-1500), easier data analysis, and interpretability focuses on protein-altering variants where functional predictions are more reliable", "WES and WGS provide identical information for clinical diagnosis", "WES covers 50% of the genome; WGS covers 100% but is less accurate"],
    answer: 1,
    explanation: "WES targets all protein-coding exons using hybridization capture (baits). Advantages over WGS: (1) ~10× lower cost; (2) Less data to analyze (~6 GB vs ~60 GB); (3) Variant interpretation focused on coding regions where pathogenicity predictions (CADD, SIFT, PolyPhen) are more reliable; (4) Diagnostic yield for Mendelian diseases ~25-50% (WGS adds ~5-10% by detecting intronic/regulatory variants). WES misses: promoter/enhancer variants, splice site variants >±2 bp from exon, deep intronic variants, repeat expansions, SVs, and methylation. WGS detects all variant types."
  },
  {
    id: 11,
    question: "In GWAS methodology, population stratification is a major source of confounding because:",
    options: ["It occurs when study participants have different levels of disease severity", "Systematic ancestry differences between cases and controls create spurious associations (population-specific allele frequencies correlated with ancestry differ between ancestrally diverse cases and controls); corrected using principal component analysis (PCA) of genomic data", "It happens when the GWAS sample size is insufficient", "Population stratification refers to the stratification of variants by functional impact"],
    answer: 1,
    explanation: "Population stratification confounding: if cases and controls differ in ancestry composition, alleles with different frequencies across populations will appear associated with disease even if not causal. Classic example: chopstick GWAS — 'chopstick gene' would be positively associated with any disease more common in East Asians if East Asian ancestry is overrepresented in cases. Correction methods: (1) Principal Component Analysis (PCA) of SNP data to capture ancestry; (2) Genomic control (λ inflation factor); (3) Mixed models (BOLT-LMM, SAIGE) that explicitly model genetic relatedness. Multi-ancestry GWAS is now preferred."
  },
  {
    id: 12,
    question: "The 'winner's curse' in GWAS refers to:",
    options: ["The tendency for GWAS-identified variants to have larger effects than the true population effect, because the strongest signal in a limited sample is selected for publication and likely has an inflated estimate", "The problem that the most common SNPs 'win' by always being detected, while rare variants are missed", "The tendency for GWAS findings in European populations to always replicate in Asian populations", "The requirement that the first GWAS of a disease identifies all true associations"],
    answer: 0,
    explanation: "Winner's curse (ascertainment bias): in GWAS, a variant must exceed the significance threshold (p < 5×10⁻⁸) to be reported. The observed effect size in the discovery sample is inflated because upward chance fluctuations in effect size increase the probability of exceeding the threshold. In replication samples, the true effect size is typically smaller. This is especially pronounced for: just-significant signals, smaller discovery samples, smaller true effects. Solutions: Bayesian shrinkage, replication in independent samples, meta-analysis. Effect sizes shrink by ~10-30% in replication."
  },
  {
    id: 13,
    question: "Pharmacogenomics of CYP2D6 is clinically important because CYP2D6 metabolizes approximately 25% of all drugs. A patient classified as 'poor metabolizer' (PM) for CYP2D6 means:",
    options: ["They absorb drugs poorly from the GI tract", "They have two non-functional CYP2D6 alleles (*3, *4, *5, *6, etc.) → little or no CYP2D6 enzyme → reduced metabolism of CYP2D6 substrates → increased drug levels and toxicity risk for drugs that are inactivated by CYP2D6, OR reduced efficacy for prodrugs that require CYP2D6 activation", "They metabolize drugs too quickly, reducing drug effectiveness", "They have only one non-functional CYP2D6 allele (heterozygous)"],
    answer: 1,
    explanation: "CYP2D6 phenotypes: (1) Normal (extensive) metabolizers (EM) — two functional alleles; (2) Intermediate metabolizers (IM) — one functional + one reduced-function allele; (3) Poor metabolizers (PM) — two non-functional alleles (~5-10% Caucasians, ~1% Asians, ~1-3% Africans); (4) Ultrarapid metabolizers (UM) — gene duplication (*2xN) → excess enzyme. PM implications: Codeine (prodrug requiring CYP2D6 → morphine) — no analgesia; Tamoxifen (CYP2D6 → active endoxifen) — reduced efficacy; Tricyclic antidepressants — toxicity. FDA labels for ~30+ drugs include CYP2D6 genotype recommendations."
  },
  {
    id: 14,
    question: "The UK Biobank is a major resource for genomic research because it provides:",
    options: ["Whole genome sequence data only, without phenotypic information", "Linked genotype data (500,000 individuals, SNP array + imputed genome-wide variation) with extensive longitudinal health records, imaging (brain, heart, body), biomarkers, wearable data, and lifestyle information — enabling unprecedented multi-trait genomic analyses", "Data exclusively from patients with rare genetic diseases", "Only epigenetic methylation data from blood samples"],
    answer: 1,
    explanation: "UK Biobank (established 2006): ~500,000 volunteers aged 40-69 at recruitment, with: (1) Genotyping (Affymetrix array ~800K SNPs + imputed to ~90M variants using HRC); (2) Extensive phenotyping (>40,000 phenotypes): hospital records, cancer registries, GP records, biomarkers (blood, urine), imaging (brain MRI, cardiac MRI, DEXA, retinal), physical measurements, cognitive tests, lifestyle questionnaires; (3) Ongoing whole genome sequencing of all 500K. Enabled largest-ever GWAS for hundreds of traits, phenome-wide association studies (PheWAS), Mendelian randomization studies."
  },
  {
    id: 15,
    question: "Mendelian randomization (MR) is a method that uses genetic variants to:",
    options: ["Randomize patients to treatment groups based on their genotype", "Estimate causal effects of modifiable exposures (e.g., LDL cholesterol, BMI) on outcomes using genetic variants as instrumental variables, analogous to randomization in RCTs but using naturally occurring genetic variation", "Determine the Mendelian inheritance pattern of complex diseases", "Test whether a disease gene follows Hardy-Weinberg equilibrium"],
    answer: 1,
    explanation: "Mendelian randomization (MR): genetic variants associated with a modifiable exposure (instrument variables) are used to estimate causal effect of that exposure on disease. Assumptions: (1) Instrument relevance — genetic variants strongly associated with exposure; (2) Independence — variants not confounded with population structure; (3) Exclusion restriction — variants affect outcome only through the exposure. MR is analogous to an ITT RCT. Example: PCSK9 LOF variants → lower LDL → lower CAD risk → supports LDL-CAD causality (validated by statin trials). MR can test causality from observational data."
  },
  {
    id: 16,
    question: "The gnomAD (Genome Aggregation Database) is used in clinical variant interpretation to:",
    options: ["Predict protein structure from amino acid sequence", "Provide population allele frequencies for variants observed in large reference panels (>125,000 exomes, >15,000 genomes); variants with MAF >1% in gnomAD are generally classified as benign population polymorphisms for most Mendelian diseases", "Identify pathogenic variants in the BRCA1 gene specifically", "Serve as a gene expression database for variant effect prediction"],
    answer: 1,
    explanation: "gnomAD v3.1.2 contains: 76,156 genomes + 125,748 exomes from diverse populations (European, African, South Asian, East Asian, Latin American, others). Used for: (1) Population allele frequency filter — variants with MAF >5% in gnomAD are extremely unlikely to cause rare severe Mendelian disease; (2) Observed vs. expected variant counts to assess gene constraint (pLI score for loss-of-function intolerance, Z-score for missense constraint); (3) ACMG benign criterion BS1 (allele frequency too high for disease). An essential resource for rare disease variant interpretation."
  },
  {
    id: 17,
    question: "Exome aggregation data reveals 'constrained' genes with low observed/expected (O/E) ratios for loss-of-function variants. A gene with a high pLI score (≥0.9) indicates:",
    options: ["The gene is frequently mutated in human populations and tolerates LOF mutations well", "The gene is intolerant of loss-of-function (LOF) mutations (heterozygous LOF is likely deleterious); high pLI (probability of being LOF intolerant) suggests the gene is under strong purifying selection, and heterozygous LOF variants in this gene may cause disease", "The gene has multiple copies in the genome providing redundancy", "The gene has low expression levels in all human tissues"],
    answer: 1,
    explanation: "pLI (probability of loss-of-function intolerance) is derived from gnomAD by comparing observed to expected LOF variants. High pLI (>0.9) means far fewer LOF variants than expected from neutral evolution → strong purifying selection → heterozygous LOF is likely deleterious. ~3,000 human genes have pLI>0.9 (essential genes). ACMG criterion PM2 uses low allele frequency; combining with high pLI strengthens classification. The LOEUF score (LOF observed/expected upper fraction) is a newer, more continuous constraint metric used in gnomAD v2.1+."
  },
  {
    id: 18,
    question: "Tumor mutational burden (TMB) is a biomarker for immunotherapy response in cancer. It is measured as:",
    options: ["The number of specific driver mutations (KRAS, TP53, BRAF) per tumor", "The total number of somatic mutations (non-synonymous substitutions + indels) per megabase of the sequenced genome in a tumor sample; high TMB predicts response to checkpoint inhibitors (PD-1/PD-L1 blockade)", "The number of chromosomal rearrangements (translocations, inversions) in the tumor", "The percentage of tumor cells carrying the same driver mutation (variant allele frequency)"],
    answer: 1,
    explanation: "TMB (Tumor Mutational Burden) = total somatic mutations per Mb of sequenced genome. High TMB (≥10 mutations/Mb by FoundationOne CDx, FDA-approved threshold) predicts response to checkpoint inhibitors (pembrolizumab, approved for TMB-high solid tumors pan-tumor). Rationale: high TMB → more neoantigens → stronger anti-tumor immune response. High TMB seen in: mismatch repair deficient (MSI-H) tumors, UV-exposed melanomas, smoking-associated lung cancers. TMB can be measured by comprehensive genomic profiling (CGP) from tumor tissue or ctDNA."
  },
  {
    id: 19,
    question: "Cell-free DNA (cfDNA) and circulating tumor DNA (ctDNA) in liquid biopsies differ in that:",
    options: ["cfDNA comes exclusively from tumor cells; ctDNA comes from all cells in the body", "cfDNA is DNA released from all cells (predominantly non-tumor apoptotic cells); ctDNA is the tumor-derived fraction of cfDNA (~0.1-10% of cfDNA in cancer patients), carrying tumor-specific somatic mutations", "cfDNA is found only in CSF; ctDNA only in blood", "They are identical terms used interchangeably for cancer diagnostics"],
    answer: 1,
    explanation: "cfDNA: DNA shed into plasma from all cells (mainly apoptosis/necrosis → nucleosome-sized fragments ~150-170 bp). In healthy individuals, cfDNA comes mainly from hematopoietic cells. In cancer, tumor cells release ctDNA (a subset of cfDNA carrying tumor somatic mutations). ctDNA fraction varies: early-stage cancer <0.1% to advanced cancer >10% of cfDNA. Liquid biopsy applications: early detection, treatment monitoring (response/resistance), minimal residual disease (MRD), clonal hematopoiesis detection. Analytical methods: digital PCR (hotspot mutations), ultra-deep NGS (error-corrected sequencing for rare variants)."
  },
  {
    id: 20,
    question: "Somatic mutation calling in tumor-normal paired sequencing requires comparison to the matched normal because:",
    options: ["Tumor DNA is more degraded and requires the normal sample for quality control only", "Without the paired normal, germline polymorphisms (present in both tumor and normal) cannot be distinguished from somatic mutations (present only in tumor); tumor-only calling has high false positive rates from common germline variants", "Normal tissue sequencing provides the reference sequence for alignment", "Tumor cells have different GC content requiring normal tissue for normalization"],
    answer: 1,
    explanation: "Somatic variant calling requires tumor + matched germline (normal blood/adjacent tissue). Process: (1) Align tumor and normal reads to reference; (2) Identify variants in tumor; (3) Compare to normal — variants in normal = germline variants (filtered out); variants present only in tumor = somatic mutations. Tumor-only analysis: germline variants must be filtered by population databases (gnomAD), but rare germline variants with low population frequency look like somatic mutations → high false positive rate. Matched normal provides definitive germline baseline. Standard for clinical tumor profiling."
  },
  {
    id: 21,
    question: "Microsatellite instability (MSI) in colorectal cancer and its relationship to mismatch repair (MMR) deficiency is clinically important because:",
    options: ["MSI-H tumors are resistant to all chemotherapy agents", "MSI-H/dMMR tumors (from Lynch syndrome or sporadic MLH1 hypermethylation) have high neoantigen load due to accumulated frameshift mutations → highly immunogenic → dramatic response to PD-1 inhibitors (pembrolizumab); pembrolizumab is FDA-approved for all MSI-H solid tumors (pan-tumor approval)", "MSI-H status is only relevant for Lynch syndrome screening, not treatment", "MSI testing must be done on germline DNA, not tumor DNA"],
    answer: 1,
    explanation: "MMR deficiency → MSI (microsatellite instability high, MSI-H): frameshift indels accumulate at microsatellite repeats → altered open reading frames → novel frameshifted peptide neoantigens → high immunogenicity. MSI-H tumors respond dramatically to checkpoint inhibitors: ORR ~40% (colorectal), with durable responses. Pembrolizumab received pan-tumor FDA approval (2017) based on tumor MSI-H/dMMR status regardless of tissue type — a landmark biomarker-driven approval. MSI tested by: PCR (standard panel 5 markers), NGS-based MSI callers, or IHC for MMR proteins."
  },
  {
    id: 22,
    question: "The Pan-Cancer Analysis of Whole Genomes (PCAWG) and The Cancer Genome Atlas (TCGA) projects revealed that most cancer-driving mutations are in:",
    options: ["Only the coding exome (3% of the genome)", "Coding genes in most cases, but ~20% of driver mutations are in non-coding regulatory regions (promoters, enhancers, splice sites, 3'UTRs); TERT promoter mutations are the most common non-coding driver mutations across cancers", "Exclusively in tumor suppressor genes, never in oncogenes", "Mitochondrial DNA exclusively"],
    answer: 1,
    explanation: "PCAWG (2,658 cancer whole genomes) and TCGA (~10,000 tumors) revealed: (1) Most cancer genomes have 2-8 driver mutations in known cancer genes; (2) ~20% of driver mutations are non-coding: TERT promoter mutations (C228T and C250T create ETS binding sites → TERT overexpression) found in ~80% of gliomas, 70% of melanomas, 50% of hepatocellular carcinomas — most common non-coding driver; (3) Mutational signatures (APOBEC, UV, tobacco, mismatch repair deficiency) characterize tumor etiology; (4) ~5% of cancers are 'dark matter' — no identifiable driver in known cancer genes."
  },
  {
    id: 23,
    question: "Genome-wide methylation analysis using EPIC array (850K CpG sites) or WGBS (whole genome bisulfite sequencing) can identify methylation patterns in cancer that include:",
    options: ["Only methylation of protein-coding gene promoters", "CpG island hypermethylation (silencing tumor suppressors), global hypomethylation (genomic instability, activation of oncogenes/transposons), and differentially methylated regions (DMRs) serving as cancer classifiers for tumor-of-origin determination", "Only hypomethylation events in cancer", "Methylation patterns identical between cancer and normal tissue"],
    answer: 1,
    explanation: "Cancer epigenomics (methylation): (1) CpG island hypermethylation — silences tumor suppressors (MLH1 in sporadic CRC, CDKN2A/p16 in many cancers, BRCA1 in breast cancer, RB1 in some cancers); (2) Global DNA hypomethylation — repetitive elements (LINE-1, SINE) activated, oncogenes activated, genomic instability increased; (3) Cancer methylation classifiers — methylation patterns are more tissue-specific and stable than gene expression → basis for: CNS tumor classification (WHO 2021 brain tumor classification), liquid biopsy cancer-of-origin (Grail/Galleri multi-cancer screening test), methylation-based MRD detection."
  },
  {
    id: 24,
    question: "Long-read sequencing technologies (Pacific Biosciences SMRT, Oxford Nanopore) offer advantages over short-read Illumina sequencing primarily for:",
    options: ["Higher base accuracy and lower cost per base", "Resolving repetitive regions, phasing variants across long distances (haplotype phasing), detecting structural variants, sequencing methylation directly, and completing centromere/telomere sequences that are impossible with short reads", "Higher throughput (more bases per run)", "Lower PCR amplification bias"],
    answer: 1,
    explanation: "Long-read sequencing advantages: (1) Read length: PacBio HiFi 10-25 kb, ONT up to 1+ Mb → spans repetitive regions; (2) Phasing: long reads connect multiple variants on a single chromosome (haplotype phasing); (3) Structural variant detection: SVs >50 bp (inversions, translocations, complex rearrangements) detected with high sensitivity; (4) Direct sequencing of modifications: ONT detects 5mC, 5hmC, 6mA directly from signal without bisulfite conversion; (5) Complete genome assembly: T2T human genome used PacBio HiFi + ONT to resolve centromeric satellites, rDNA arrays. Disadvantage vs. short reads: higher error rate per raw read (improved by HiFi consensus)."
  },
  {
    id: 25,
    question: "Functional annotation of GWAS variants is important because most GWAS signals are in non-coding regions. The most informative functional annotations include:",
    options: ["SIFT and PolyPhen scores (designed for coding variants)", "eQTL (expression quantitative trait loci) data linking variants to gene expression changes, chromatin accessibility (ATAC-seq), enhancer marks (H3K27ac ChIP-seq), CTCF binding, and 3D chromatin looping (Hi-C) data to prioritize causal genes and mechanisms", "Only protein structure prediction databases (AlphaFold)", "Allele frequency databases (gnomAD) for determining population frequency"],
    answer: 1,
    explanation: "Non-coding GWAS variants are annotated using: (1) eQTL data (GTEx, 54 tissues) — do they regulate expression of a nearby gene? (2) Chromatin accessibility (ATAC-seq) — are they in open chromatin in relevant cell types? (3) Active enhancer marks (H3K4me1, H3K27ac ChIP-seq in relevant tissues); (4) Hi-C loops — which promoter does the enhancer contact?; (5) TF binding site disruption (motif analysis); (6) Allele-specific chromatin/expression. Colocalization analysis tests whether GWAS and eQTL signals share the same causal variant, linking non-coding SNP to regulatory gene and mechanism."
  },
  {
    id: 26,
    question: "The gnomAD constraint metric 'o/e LOEUF' (loss-of-function observed/expected upper bound fraction) is preferred over pLI because:",
    options: ["LOEUF requires larger sample sizes than pLI", "LOEUF provides a continuous measure of constraint rather than a binary probability, allows ranking genes by degree of intolerance, and has better calibration for intermediate constraint genes; lower LOEUF = more constrained (intolerant of LOF)", "pLI can only be calculated for autosomal genes, while LOEUF works for all genes", "LOEUF is calculated from protein structure data while pLI uses sequence data"],
    answer: 1,
    explanation: "LOEUF (loss-of-function observed/expected upper confidence bound): lower LOEUF = fewer observed LOF variants than expected = more constrained = more intolerant of LOF. Range 0-2+, threshold <0.35 for highly constrained genes. Advantages over pLI: (1) Continuous metric (vs. binary >0.9 cut-off for pLI); (2) Better at identifying moderately constrained genes (pLI gives these intermediate values that are hard to interpret); (3) Better calibrated. gnomAD v2.1+ uses LOEUF. Both metrics are used in variant interpretation and gene-disease confidence assessment (ClinGen gene curation uses both)."
  },
  {
    id: 27,
    question: "The CADD (Combined Annotation-Dependent Depletion) score is used in variant interpretation to:",
    options: ["Predict protein folding from amino acid sequence", "Integrate diverse functional annotations (conservation, regulatory elements, protein impact, accessible chromatin, etc.) into a single score quantifying the deleteriousness of any variant; variants with CADD score ≥15 are in the top 3% most deleterious variants", "Calculate population allele frequency from sequencing data", "Determine pathogenicity of variants based solely on evolutionary conservation"],
    answer: 1,
    explanation: "CADD (Combined Annotation-Dependent Depletion) score: trained on simulated variants (proxy benign) vs. fixed human variants (proxy deleterious). Integrates >60 annotations: conservation (PhyloP, PhastCons), regulatory (DNase, TFBS, chromatin), protein impact (SIFT, PolyPhen), GC content, ENCODE, etc. Output: Phred-scaled C-score (CADD score): score 10 = top 10% deleterious; score 20 = top 1%; score 30 = top 0.1%; score 15 = top 3.2%. CADD works for all variant types (SNVs, indels, coding, non-coding). Used as ACMG PP3/BP4 supporting criterion."
  },
  {
    id: 28,
    question: "RNA sequencing (RNA-seq) provides which advantages over microarray-based gene expression analysis?",
    options: ["Microarrays are more accurate for detecting novel transcripts", "RNA-seq detects novel transcripts and isoforms, has no upper limit on detection (dynamic range), can detect allele-specific expression, splicing changes, RNA editing, and fusions without prior probe design; quantifies both known and unknown transcripts", "RNA-seq only measures mRNA abundance, missing ncRNA like microarrays can detect", "Microarrays are preferred for clinical use due to their higher sensitivity"],
    answer: 1,
    explanation: "RNA-seq vs. microarray: (1) Novel discovery — RNA-seq detects unannotated transcripts, novel splicing, fusions; microarrays limited to probe-covered sequences; (2) Dynamic range — RNA-seq has essentially unlimited dynamic range; microarrays saturate at high expression and have floor at low expression; (3) Isoform resolution — RNA-seq can distinguish alternative splice variants; (4) Allele-specific expression — RNA-seq with phased genotype data; (5) No probe bias — RNA-seq unbiased across sequence space; (6) RNA fusion detection — critical for cancer diagnosis (BCR-ABL1, EWS-FLI1). RNA-seq higher cost and analysis complexity."
  },
  {
    id: 29,
    question: "Single-cell RNA sequencing (scRNA-seq) has revolutionized our understanding of cell biology because:",
    options: ["It provides higher accuracy than bulk RNA-seq for gene expression of major cell types", "It captures gene expression profiles of individual cells, revealing cellular heterogeneity, rare cell types, cell trajectory/differentiation states, and cell-type-specific gene regulation that are masked in bulk tissue averages", "It requires less computational analysis than bulk RNA-seq", "It can only be used for cell lines, not primary tissue"],
    answer: 1,
    explanation: "scRNA-seq (10x Genomics Chromium, Drop-seq, Smart-seq2) profiles thousands to millions of individual cells. Key discoveries: (1) Reveals rare cell populations (<0.1% of tissue) undetectable in bulk; (2) Defines cell states along differentiation trajectories (pseudotime analysis, RNA velocity); (3) Identifies cell-type-specific gene regulatory networks; (4) Characterizes tumor microenvironment heterogeneity; (5) Enabled Human Cell Atlas (cataloguing all cell types in the human body). UMAP/t-SNE visualizations cluster cells by expression profiles. Single-cell ATAC-seq, multiome (RNA+ATAC), and spatial transcriptomics extend the approaches."
  },
  {
    id: 30,
    question: "Genome sequencing of ancient DNA (aDNA) has revealed that modern Europeans are a mixture of at least three ancestral populations. The technical challenge in ancient DNA sequencing is primarily:",
    options: ["Ancient genomes have more gene copies making assembly difficult", "Extensive degradation, fragmentation (~50-100 bp fragments), deamination (C→U/T changes at 5' ends creating false variants), and high environmental DNA contamination; requires specialized library preparation and computational authentication", "Ancient DNA uses different base pairs requiring specialized sequencing chemistry", "Ancient genomes are diploid while modern genomes are haploid, complicating alignment"],
    answer: 1,
    explanation: "Ancient DNA (aDNA) technical challenges: (1) Fragmentation to <100 bp due to enzymatic and hydrolytic degradation; (2) Deamination: cytosine at 5' ends deaminates to uracil (reads as T) → characteristic C>T at 5' ends (mapDamage pattern confirms authenticity); (3) Low endogenous DNA fraction (often <1%, majority is microbial contamination); (4) Requires dedicated cleanroom facilities to prevent modern contamination; (5) Library preparation with no or minimal PCR (single-stranded library methods). Enabled reconstruction of Neandertal/Denisovan genomes, peopling of the Americas and Europe."
  },
  {
    id: 31,
    question: "The genotype-tissue expression (GTEx) project provides:",
    options: ["A database of protein structures for all human proteins", "Comprehensive mapping of genetic variants affecting gene expression (eQTLs) across 54 human tissues from ~1000 postmortem donors, enabling mechanistic interpretation of GWAS associations", "Genome sequences of individuals from 54 different countries", "Expression profiles of cancer cell lines treated with 54 different drugs"],
    answer: 1,
    explanation: "GTEx (v8): RNA-seq across 54 tissues from 838 donors with matched genotypes. Outputs: (1) cis-eQTLs — genetic variants within 1 Mb of gene affecting its expression in tissue-specific manner; (2) sGenes — genes with at least one significant cis-eQTL; (3) sVariants — significant eQTL variants. Used for: GWAS variant annotation (do GWAS variants regulate nearby gene expression?), Mendelian randomization, splicing QTL (sQTL) identification. Critical insight: most eQTLs are tissue-specific, explaining why GWAS associations may be relevant only in specific cell types relevant to disease pathogenesis."
  },
  {
    id: 32,
    question: "Imputation in genomics refers to:",
    options: ["Filling in missing genotype data using neighboring SNPs within the same individual", "Statistically predicting unobserved genotypes at untyped SNPs using the correlation structure (LD) of typed SNPs with a reference panel (e.g., HRC, 1000G, TOPMed); expands genotype coverage from ~800K array SNPs to ~10-90 million variants", "Replacing poor quality base calls with the reference allele", "Computing allele frequencies from incomplete datasets using statistical models"],
    answer: 1,
    explanation: "Genotype imputation: uses LD patterns between typed SNPs and a reference panel to infer unobserved genotypes. Process: (1) Phasing typed SNPs into haplotypes; (2) Matching haplotypes to reference panel (e.g., Haplotype Reference Consortium/HRC: 32K samples); (3) Predicting untyped SNPs using reference haplotype frequencies. Expands SNP array data (~800K SNPs) to ~10-90M imputed variants. Enables: meta-analysis across studies using different arrays, testing SNPs not on the array (including indels, rare variants in well-powered reference panels like TOPMed). Accuracy decreases for rare variants and in non-European populations."
  },
  {
    id: 33,
    question: "The concept of 'genomic medicine' differs from traditional genetics in that:",
    options: ["Genomic medicine focuses only on hereditary conditions; traditional genetics covers all diseases", "Genomic medicine integrates genome-scale data (whole genome sequences, transcriptomes, epigenomes) with clinical data to guide disease prevention, diagnosis, and treatment for common complex diseases and cancer, beyond the single-gene Mendelian diseases of traditional medical genetics", "Traditional genetics uses clinical examination; genomic medicine uses biochemical tests", "Genomic medicine replaces all other medical specialties"],
    answer: 1,
    explanation: "Traditional medical genetics: pedigree analysis, phenotyping, single gene testing, focused on rare Mendelian disorders. Genomic medicine: (1) Applies genome-wide approaches to common complex diseases; (2) Uses polygenic risk scores for risk stratification; (3) Integrates multi-omic data (genome, transcriptome, methylome, proteome, metabolome); (4) Precision oncology — tumor sequencing guiding therapy; (5) Pharmacogenomics — germline genotyping for drug selection; (6) Population screening with WGS/WES; (7) Microbiome genomics. The $1000 genome and declining sequencing costs are democratizing genomic medicine."
  },
  {
    id: 34,
    question: "Somatic mosaicism detection by next-generation sequencing requires:",
    options: ["Standard 30× depth sequencing, identical to germline variant calling", "Ultra-deep sequencing (>500-1000× depth) with error-suppression methods (UMIs, duplex sequencing) to distinguish true low-level somatic variants (variant allele frequency 1-10%) from PCR and sequencing errors (~0.1-1%)", "Only clinical information without laboratory testing", "Sanger sequencing of multiple clones to identify minority variants"],
    answer: 1,
    explanation: "Detecting somatic mosaicism: standard 30× WGS detects variants down to ~15-20% VAF reliably. Low-level mosaicism (1-10% VAF) requires: (1) Ultra-deep sequencing (500-10,000×) of targeted regions; (2) Error suppression: unique molecular identifiers (UMIs) to track individual molecules, duplex sequencing (both strands), SafeSeqs; (3) Sensitive callers (MosaicHunter, MosaicForecast). Clinical applications: detect post-zygotic mutations in suspected mosaic conditions (Proteus syndrome-PIK3CA, McCune-Albright-GNAS), somatic mosaicism explaining phenotypic discordance with predicted inheritance, clonal hematopoiesis."
  },
  {
    id: 35,
    question: "The heritability of a trait is estimated as h² = V_G / V_P (genetic variance / total phenotypic variance). Broad-sense heritability (H²) differs from narrow-sense heritability (h²) in that:",
    options: ["Broad-sense includes only additive genetic effects; narrow-sense includes all genetic effects", "Narrow-sense heritability (h²) includes only additive genetic variance (the component transmitted from parent to offspring and relevant to selection response); broad-sense heritability (H²) includes all genetic variance (additive + dominance + epistasis)", "They are equivalent measures calculated by different statistical methods", "Broad-sense heritability is always lower than narrow-sense because it uses a more conservative estimate"],
    answer: 1,
    explanation: "Heritability components: (1) Narrow-sense h² = V_A / V_P (additive genetic variance / total phenotypic variance) — the proportion of phenotypic variance attributable to breeding value; predicts response to selection and regression of offspring on parents; used in GWAS SNP-heritability estimation. (2) Broad-sense H² = V_G / V_P = (V_A + V_D + V_I) / V_P — includes all genetic effects including non-additive (dominance, epistasis); estimated from twins or full-sib vs. half-sib designs. H² ≥ h². The difference (V_D + V_I) represents non-additive genetic variance not transmitted through additive allelic effects."
  },
  {
    id: 36,
    question: "De novo mutations are particularly important in the genetics of autism spectrum disorder (ASD) because:",
    options: ["ASD is primarily caused by inherited recessive variants from both parents", "Spontaneous (de novo) mutations in genes essential for brain development occur in ~10-15% of ASD cases and are enriched in affected individuals vs. unaffected siblings; they arise in gametes or early embryogenesis and explain why ASD can occur with unaffected parents", "De novo mutations in ASD only affect mitochondrial genes", "ASD has no genetic component — de novo mutations in ASD are all somatic"],
    answer: 1,
    explanation: "ASD genetics: heritability ~50-90% from twin studies, yet often occurs with unaffected parents. De novo mutations explain ~10-15% of ASD: (1) Causally enriched de novo loss-of-function variants in brain-expressed synaptic/transcriptional regulator genes (SHANK3, SYNGAP1, ADNP, DYRK1A, CHD8, KATNAL2); (2) De novo CNVs (16p11.2 deletion/duplication, 15q11-q13 duplication); (3) Risk increases with paternal age (more mutations in sperm). The Simons Simplex Collection (SSC) and ASC (Autism Sequencing Consortium) systematically studied de novo mutations in ASD families."
  },
  {
    id: 37,
    question: "Rare variant association studies require different methods than common variant GWAS because:",
    options: ["Rare variants always have larger effects than common variants", "Individual rare variants (MAF < 1%) have insufficient statistical power for single-variant tests even in large samples; burden tests (collapse all rare variants in a gene) or variance-component tests (SKAT) that aggregate multiple rare variants per gene are necessary", "Rare variants cannot be detected by next-generation sequencing", "Standard GWAS methods with p < 5×10⁻⁸ threshold work equally well for rare variants"],
    answer: 1,
    explanation: "Rare variant statistical challenges: a MAF=0.1% variant needs ~1 million samples for 80% power with standard single-variant tests (OR=2). Aggregation tests improve power by combining rare variants per gene: (1) Burden test — sums count of rare variants per gene per individual (assumes all variants have same direction of effect); (2) SKAT (Sequence Kernel Association Test) — variance-component test that allows heterogeneous effects; (3) SKAT-O — optimal combination of burden and SKAT. Requires large biobanks (UKB, FinnGen, BMBBI) or disease-specific consortia for adequate power."
  },
  {
    id: 38,
    question: "Transcriptome-wide association studies (TWAS) combine GWAS summary statistics with eQTL data to:",
    options: ["Sequence all genes at the transcriptome level in a GWAS cohort", "Predict genetically regulated gene expression and test whether the predicted expression of a gene is associated with a trait, identifying gene-level mediators of GWAS associations and prioritizing causal genes", "Replace standard GWAS with a more powerful analytical approach", "Test whether epigenetic marks mediate GWAS associations"],
    answer: 1,
    explanation: "TWAS (Gusev et al., 2016; Gamazon et al. PrediXcan): uses SNP weights derived from reference eQTL data (GTEx) to predict individual-level gene expression from genotype, then tests predicted expression for trait association in GWAS data or a new cohort. Advantages: (1) Higher power than SNP-level GWAS (aggregates many SNPs' effects); (2) Gene-level resolution (easier functional interpretation than SNP); (3) Identifies mediating genes at GWAS loci. Limitations: LD contamination (nearby eQTL-associated genes may be false positives); colocalisation analysis (HEIDI, coloc) needed to distinguish shared vs. independent signals."
  },
  {
    id: 39,
    question: "Genome-wide significant GWAS loci for schizophrenia (SCZ) include the major histocompatibility complex (MHC) region on chromosome 6p21. The specific mechanism identified is:",
    options: ["HLA alleles directly cause psychosis by triggering autoimmune attack on neurons", "Complement component 4A (C4A) gene copy number and expression levels contribute to schizophrenia risk by mediating excessive synaptic pruning in adolescence through complement-mediated elimination of synapses", "The MHC association in SCZ is due to LD with the true causal variant in an unrelated gene", "MHC encodes dopamine receptors whose variation drives the dopamine hypothesis of schizophrenia"],
    answer: 1,
    explanation: "The MHC locus in schizophrenia (Sekar et al., Nature 2016): C4A (complement component 4A) gene is highly structurally variable (copy number variations of C4A and C4B). Higher C4A expression correlates with higher schizophrenia risk. C4A deposits on synapses (opsonizes them) → complement receptor 3 (CR3) on microglia mediates complement-dependent synapse elimination. In adolescence, synaptic pruning is normally extensive in prefrontal cortex. Excessive C4A-mediated pruning may eliminate too many synapses → schizophrenia circuitry. This connects genetics to neurobiology and the neurodevelopmental hypothesis of SCZ."
  },
  {
    id: 40,
    question: "Polygenic score cross-trait analyses and genetic correlation studies use LD score regression (LDSC) to:",
    options: ["Calculate LD between causal variants in GWAS loci", "Estimate genetic correlation between traits and distinguish polygenicity from population stratification in GWAS inflation; genetic correlation (r_g) quantifies shared genetic architecture between two traits", "Score individual polygenic risk based on LDSC weights", "Identify epistatic interactions between SNPs across the genome"],
    answer: 1,
    explanation: "LDSC (Linkage Disequilibrium Score Regression, Bulik-Sullivan et al.): (1) Intercept of LD score regression distinguishes inflation from polygenicity vs. confounding (population stratification inflates intercept above 1); (2) Cross-trait LDSC estimates genetic correlation (r_g) between two traits using their GWAS summary statistics — quantifies shared genetic basis. Examples: psychiatric disorders show high r_g (SCZ and BPD r_g ~0.7); educational attainment and IQ r_g ~0.75; MDD and anxiety r_g ~0.8. Partitioned LDSC (LDSC-SEG) attributes heritability to specific genomic annotations."
  },
  {
    id: 41,
    question: "Population-scale biobank studies enable identification of 'pLoF' (predicted loss-of-function) variant enrichment in specific genes in specific populations. This is clinically relevant because:",
    options: ["pLoF variants are always pathogenic and immediately actionable clinically", "Some populations have high-frequency pLoF variants in pharmacogenes (e.g., CYP2D6*5 deletion, SLCO1B1 variants in Africans) or disease-relevant genes that may represent ancestral adaptations or neutral variants unique to that population, informing both disease risk and drug dosing in precision medicine", "All populations have identical pLoF variant frequencies in pharmacogenes", "pLoF enrichment only occurs due to inbreeding"],
    answer: 1,
    explanation: "Population-specific pLoF variants: (1) FUT2 (secretor gene) — pLoF variants >20% frequency in some populations, protective against norovirus and H. pylori; (2) G6PD deficiency variants at high frequency in malaria-endemic regions (protective against malaria); (3) PCSK9 LOF variants at higher frequency in African Americans (naturally lower LDL); (4) Population-specific CYP2C19, CYP2D6 alleles affecting drug metabolism. Large biobanks (FinnGen for Finnish population, Biobank Japan, AoU) identify population-specific variants important for clinical genomics in diverse populations."
  },
  {
    id: 42,
    question: "Spatial transcriptomics technologies (10x Visium, SLIDE-seq, MERFISH) add what dimension to gene expression analysis?",
    options: ["Temporal information about when genes are expressed during development", "Spatial location of gene expression within tissue sections, enabling analysis of gene expression in the context of tissue architecture and cellular microenvironments while maintaining anatomical context", "Single-cell resolution of chromatin accessibility across tissues", "Quantification of protein translation rates alongside mRNA levels"],
    answer: 1,
    explanation: "Spatial transcriptomics captures the WHERE of gene expression: (1) Spot-based methods (10x Visium): barcoded capture spots (~55 μm) on glass slide; tissue section placed on slide; mRNA captured and sequenced with spatial barcode; ~4,000 spots per slide, ~5-20 cells per spot; (2) Single-cell resolution: SLIDE-seq (10 μm beads), HDST, Seq-scope; (3) FISH-based: MERFISH/seqFISH+ simultaneously image >10,000 genes in single cells with spatial context. Applications: tumor microenvironment structure, brain regional gene expression, developmental gradients, cell-type spatial organization in health/disease."
  },
  {
    id: 43,
    question: "Multi-ancestry GWAS is increasingly important in genomics because:",
    options: ["It dilutes association signals by mixing population-specific variants", "It increases statistical power, fine-maps causal variants (smaller LD blocks in African ancestry → narrower credible sets), improves polygenic score portability across populations, and identifies population-specific associations missed in Eurocentric GWAS", "Most common diseases have identical genetic architecture in all populations", "It replaces the need for population-stratification correction"],
    answer: 1,
    explanation: "Multi-ancestry GWAS advantages: (1) Power: larger combined sample sizes; (2) Fine-mapping: African populations have shorter LD blocks → smaller credible sets of causal variants (better localization); (3) Portability: PRS built from European-only GWAS perform 4-5× worse in African ancestry individuals; multi-ancestry GWAS improve PRS equity; (4) Population-specific signals: some associations are unique to or more common in specific ancestries. Historical inequity: >80% of GWAS participants are European, leaving non-European populations underserved by precision medicine. Initiatives: PAGE, APCDR, H3Africa, Global Biobank Meta-analysis Initiative."
  },
  {
    id: 44,
    question: "The FinnGen Study and Iceland deCODE genetics population studies can identify rare variants with large effects because:",
    options: ["Finnish and Icelandic populations have higher mutation rates", "These founder populations (with recent population bottlenecks) have elevated frequency of specific rare variants compared to cosmopolitan populations; combined with complete health records and large sample sizes, power to detect rare variant-disease associations is dramatically increased", "Finland and Iceland have all-genome sequenced populations since 1990", "These countries have less environmental confounding in GWAS"],
    answer: 1,
    explanation: "Finnish Disease Heritage and Icelandic genetics: (1) Founder effects in Finnish and Icelandic populations elevated specific rare variants to frequencies of 0.5-5% (vs. <0.01% elsewhere); (2) FinnGen: >500,000 Finns with WGS/WES + national health registries → massive biobank; (3) deCODE (Iceland): ~90% of Icelanders genotyped, WGS of >50,000 → identified many rare coding variants causally affecting common diseases (PCSK9 LOF, LPA variants, BRCA2 in Icelanders). These studies have disproportionately large impact on rare variant discovery and gene-disease curation."
  },
  {
    id: 45,
    question: "Direct-to-consumer (DTC) genetic testing (e.g., 23andMe, AncestryDNA) raises which primary genetic counseling concerns?",
    options: ["DTC tests provide more accurate results than clinical laboratory tests", "Concerns include: absence of pre-test genetic counseling, return of health-related findings without clinical context (risk of misinterpretation), testing for serious adult-onset conditions (BRCA1/2, APOE ε4) without genetic counselor support, third-party privacy risks (law enforcement database access), and insurance/employment implications", "DTC tests are equivalent to clinically certified genetic tests", "DTC testing is not regulated in any country"],
    answer: 1,
    explanation: "DTC genetic testing concerns: (1) No mandatory pre/post-test genetic counseling → patients may misinterpret results (especially VUS, risk scores); (2) Health-related findings (BRCA1/2, pharmacogenomics) returned without clinical support; (3) APOE ε4 (Alzheimer risk) reporting without counseling creates anxiety without clear management options; (4) Privacy: genetic data sold to pharmaceutical companies, accessible to law enforcement (GEDmatch used in Golden State Killer case); (5) Ancestry information may reveal unexpected relationship findings (misattributed parentage, unknown relatives, adoption); (6) Accuracy of health reports varies widely by trait and population."
  },
  {
    id: 46,
    question: "Multi-omics integration (combining genomics, transcriptomics, epigenomics, proteomics, and metabolomics) aims to:",
    options: ["Replace single-omic studies with a comprehensive single-layer analysis", "Provide a more complete understanding of gene regulation and disease mechanisms by linking genetic variation to molecular phenotypes (gene expression, methylation, protein levels, metabolites) that mediate disease pathogenesis — moving from genotype to phenotype mechanistically", "Reduce data complexity by selecting only the most relevant omic layer", "Primarily improve computational tools for bioinformatics analysis"],
    answer: 1,
    explanation: "Multi-omics integration: each 'omic' layer captures different aspects of biology. Integration approaches: (1) Pairwise: link genomic variants to transcriptomic (eQTL), epigenomic (mQTL), proteomic (pQTL), or metabolomic (metQTL) traits; (2) Network-based: co-expression, protein-protein interaction networks; (3) Mediation analysis: variant → expression → disease; (4) Multi-omics factor analysis (MOFA). The Personal Genome Project and All of Us Research Program aim to integrate multi-omic data with clinical phenotypes at population scale. Key insight: disease genes are perturbed coordinately across multiple omic layers, and intervention points may be downstream of genetics."
  },
  {
    id: 47,
    question: "Proteome-wide association studies (PWAS) test genetic variants associated with plasma protein levels (pQTLs). The advantage over GWAS of clinical endpoints is:",
    options: ["Protein levels are less heritable than disease phenotypes", "Proteins are closer to genetic variation and more mechanistically interpretable than clinical diagnoses; identifying pQTLs provides drug targets (if a protein's level is genetically associated with disease, the protein is a potential drug target — Mendelian randomization with protein as mediator)", "PWAS have lower statistical power than GWAS", "Protein measurements in plasma are technically too difficult for population-scale studies"],
    answer: 1,
    explanation: "Plasma pQTL studies (INTERVAL: Suhre 2017, deCODE: Ferkingstad 2021 with >4700 proteins in 35K Icelanders, UKB: Sun 2023): genetic variants associated with protein levels (pQTLs) provide drug target validation — if a protein is genetically associated with a disease (through MR), and existing drugs modulate that protein, trial success rates are approximately 2× higher than genetic-target-naive drug programs. Examples: LPA-cardiovascular disease (antisense LON RNA trials), GLP1R-type 2 diabetes (GLP-1 agonists validated). Proteomics at scale (Olink, SomaScan) enables population-scale pQTL discovery."
  },
  {
    id: 48,
    question: "The T2T (Telomere-to-Telomere) CHM13 human reference genome released in 2022 represents an advance over GRCh38 because:",
    options: ["It uses a different species as the reference genome for comparison", "It provides the first truly complete human genome assembly, adding ~400 Mb of previously unresolved sequence including all centromeric satellite repeats, rDNA arrays, segmental duplications, and short arms of acrocentric chromosomes — 8 additional chromosomes' worth of sequence previously missing from GRCh38", "It sequences the genome from all human populations simultaneously", "It includes mitochondrial and plastid DNA not previously sequenced"],
    answer: 1,
    explanation: "GRCh38 had ~151 Mb of gaps (~5% of genome) — mostly centromeric alpha-satellite repeats, acrocentric short arms, and segmental duplications. T2T-CHM13 (CHM13hTERT cell line — near-completely homozygous hydatidiform mole): (1) Used PacBio HiFi + Oxford Nanopore reads; (2) Complete sequences of all 22 autosomes + chrX; (3) Added ~200 Mb of centromeric satellite sequences, ~30 Mb of segmental duplications, ~10 Mb of rDNA; (4) Corrected >150 structurally errors in GRCh38; (5) Revealed ~2 million additional SNPs not in GRCh38. Important for accurate mapping in previously missing regions."
  },
  {
    id: 49,
    question: "In pharmacogenomics, the Clinical Pharmacogenomics Implementation Consortium (CPIC) guidelines provide:",
    options: ["Drug approval recommendations based on pharmacogenomic data", "Gene/drug pair dosing recommendations based on a patient's genetic phenotype, designed to help clinicians implement pharmacogenomic test results already in hand into prescribing decisions", "Drug-gene interaction databases for regulatory submissions", "Genotyping protocols for pharmacogenomics laboratories"],
    answer: 1,
    explanation: "CPIC guidelines translate pharmacogenomic test results into prescribing recommendations. Format: for a given gene/drug pair (e.g., CYP2C19/clopidogrel), classify patient into phenotype group (IM, PM, EM, UM) and provide specific dosing recommendations: (1) Clopidogrel + CYP2C19 PM → consider alternative antiplatelet (prasugrel, ticagrelor); (2) Warfarin + CYP2C9/VKORC1 → lower initial dose; (3) Codeine + CYP2D6 UM → avoid (toxic morphine levels); (4) Abacavir + HLA-B*57:01 → contraindicated (hypersensitivity). CPIC is the primary resource for clinical pharmacogenomics implementation."
  },
  {
    id: 50,
    question: "Clonal hematopoiesis of indeterminate potential (CHIP) refers to:",
    options: ["Expansion of a single hematopoietic stem cell clone due to driver mutations in cancer-relevant genes (DNMT3A, TET2, ASXL1, TP53) with variant allele frequency ≥2% in blood, in the absence of hematologic malignancy", "All somatic mutations detected in blood that are not present in other tissues", "A precancerous condition exclusively predisposing to myelodysplastic syndrome", "Normal clonal expansion of T and B cells during immune responses"],
    answer: 0,
    explanation: "CHIP (JAXter et al., Genovese et al., Jaiswal et al., Xie et al. 2014): somatic mutations (most commonly DNMT3A ~50%, TET2 ~20%, ASXL1 ~10%, JAK2, SF3B1) in blood at VAF ≥2% in the absence of hematologic malignancy. CHIP prevalence increases with age (>50 years). Clinical significance: (1) 10-20× increased risk of hematologic malignancy; (2) Paradoxically 40% increased cardiovascular risk (TET2 CHIP → macrophage IL-8/IL-1β overexpression → atherosclerosis); (3) Graft-versus-host disease in recipients of CHIP+ donor transplants; (4) False positive cancer ctDNA screening (shed blood CHIP mutations mistaken for tumor). Managed with surveillance."
  }
];

export default questions;
