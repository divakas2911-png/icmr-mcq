export const questions = [
  {
    id: 1,
    question: "The Human Genome Project (HGP) was completed in 2003. The human genome contains approximately how many protein-coding genes?",
    options: ["~100,000 protein-coding genes", "~20,000-25,000 protein-coding genes (only ~1.5% of the genome)", "~50,000 protein-coding genes", "~80,000 protein-coding genes based on expressed sequence tags"],
    answer: 1,
    explanation: "The HGP revealed ~20,000-25,000 protein-coding genes (current Ensembl estimates: ~20,400), far fewer than the pre-genome prediction of ~100,000. Protein-coding sequences represent only ~1.5% of the 3.2 billion base pair genome. Regulatory and non-coding sequences make up the majority. The ENCODE project (2012) showed ~80% of the genome has biochemical activity (but functional significance of all elements remains debated)."
  },
  {
    id: 2,
    question: "Genome-wide association studies (GWAS) identify disease-associated variants by:",
    options: ["Sequencing individual genes in patient cohorts", "Comparing allele frequencies of millions of SNPs across the genome between cases and controls to identify associated variants", "Measuring gene expression differences between healthy and diseased tissues", "Identifying de novo mutations in patient trios"],
    answer: 1,
    explanation: "GWAS: Genotype millions of SNPs (single nucleotide polymorphisms) using SNP arrays (Illumina/Affymetrix) in large case-control cohorts (thousands-hundreds of thousands of individuals) → statistical test (logistic regression) for association between allele frequency and disease → Manhattan plot (y-axis: -log10 p-value) → genome-wide significance threshold p<5×10^-8 (corrects for multiple testing). GWAS identifies risk loci (often in non-coding regions with regulatory function), not necessarily causal variants. Largest GWAS: UK Biobank, FINNGEN, BioBank Japan."
  },
  {
    id: 3,
    question: "Linkage disequilibrium (LD) in population genetics describes:",
    options: ["The physical distance between two genes on the same chromosome", "Non-random association of alleles at different loci — alleles that are found together on chromosomes more often than expected by chance due to limited recombination", "The rate of recombination between two markers", "The correlation between genetic distance and physical distance"],
    answer: 1,
    explanation: "LD (measured by D', r²): alleles at nearby loci that were introduced together on ancestral chromosomes remain associated (in LD) in the population until recombination separates them. LD decays with increasing chromosomal distance and with evolutionary time (more recombinations). LD blocks: regions of high LD separated by recombination hotspots. LD enables GWAS (one SNP in LD with a causal variant can 'tag' it), haplotype-based analyses, and imputation of ungenotyped variants."
  },
  {
    id: 4,
    question: "The 1000 Genomes Project (now extended to 3000+ genomes) characterized human genetic diversity by:",
    options: ["Sequencing the genomes of 1000 patients with rare diseases", "Sequencing genomes from ~2,500 individuals from 26 global populations to catalog common and rare human genetic variants (SNPs, indels, SVs)", "Comparing human genome to 1000 primate genomes", "Genotyping 1000 disease-associated SNPs in diverse populations"],
    answer: 1,
    explanation: "The 1000 Genomes Project (Phase 3): whole-genome sequencing of ~2,504 individuals from 26 populations (African, European, East Asian, South Asian, American ancestry). Cataloged: ~84 million SNPs, ~3.6 million indels, ~60,000 structural variants. Provides a reference panel for imputation (GWAS can impute ungenotyped variants using LD with the 1000G panel). Revealed that humans differ by ~1 variant per ~1,000 bases; African populations have highest diversity (longest history)."
  },
  {
    id: 5,
    question: "What is the significance of the 'pan-genome' concept in microbial genomics?",
    options: ["It describes the total genomic content of a single organism", "It describes the complete gene repertoire of a species: core genome (genes in all strains) + accessory genome (genes in some strains) + unique genes (strain-specific) — reflects bacterial gene content flexibility", "It refers to the metagenome of all organisms in an ecosystem", "It describes human genetic diversity across all 7 billion people"],
    answer: 1,
    explanation: "Pan-genome (Tettelin et al., 2005): The total gene set of a microbial species consists of: (1) Core genome — genes present in all strains (essential/housekeeping functions); (2) Accessory/dispensable genome — genes in some but not all strains (including pathogenicity islands, antibiotic resistance genes); (3) Unique genes — strain-specific. 'Open' pan-genome: each new strain adds unique genes (e.g., E. coli — open, >18,000 genes). 'Closed' pan-genome: few new genes with each new strain. Relevant for understanding bacterial virulence, evolution, and antibiotic resistance spread."
  },
  {
    id: 6,
    question: "De novo genome assembly (without a reference genome) uses which computational approaches?",
    options: ["Read alignment and variant calling (mapping approach)", "OLC (overlap-layout-consensus) for long reads or de Bruijn graph assembly for short reads — assembling overlapping reads into contigs/scaffolds/chromosomes", "Reference-based imputation of missing sequence", "Protein homology to infer gene sequences"],
    answer: 1,
    explanation: "De novo assembly: (1) OLC (Overlap-Layout-Consensus): compute pairwise overlaps between reads → layout graph → consensus sequence. Used for Sanger and long reads (Canu, Falcon for PacBio/Nanopore). (2) De Bruijn graph: break reads into k-mers → construct graph where nodes are k-mers and edges are (k+1)-mers → traverse graph (SOAPdenovo, SPAdes for short reads). Long reads (PacBio HiFi, Nanopore) enable chromosome-scale assemblies spanning repeats. Telomere-to-telomere (T2T) complete assembly: T2T-CHM13 (2022) — first complete human genome assembly."
  },
  {
    id: 7,
    question: "Comparative genomics identifies functional elements by:",
    options: ["Comparing gene expression between species", "Phylogenetic footprinting — conserved non-coding sequences across distantly related species are likely functional (constraint indicates functional pressure)", "Only comparing protein-coding sequences between closely related species", "Identifying synteny between species for positional gene identification"],
    answer: 1,
    explanation: "Comparative genomics: Sequence conservation across evolution indicates functional constraint. Phylogenetic footprinting: human genome compared to mouse, dog, chicken, frog etc. — non-coding conserved elements (CNEs, UCEs) are candidates for regulatory elements. PhyloP and phastCons scores measure conservation. The ENCODE project showed most evolutionarily constrained positions have biochemical activity. 30-40% of functionally constrained positions are non-coding. Multi-species genome alignment programs: LASTZ, MULTIZ, PECAN."
  },
  {
    id: 8,
    question: "The sequenceontology (SO) and gene ontology (GO) are controlled vocabularies used for:",
    options: ["Naming new genes in a standardized format", "Annotating biological entities with standardized terms: GO describes molecular function, biological process, and cellular component; SO describes sequence features (exon, intron, UTR, SNP, etc.)", "Standardizing experimental protocols for genome sequencing", "Classifying organisms by phylogenetic relationships"],
    answer: 1,
    explanation: "Gene Ontology (GO consortium, 1998): controlled vocabulary with three ontologies: (1) Molecular Function (MF) — biochemical activity (e.g., 'ATP binding', 'kinase activity'); (2) Biological Process (BP) — biological program (e.g., 'apoptotic process', 'cell migration'); (3) Cellular Component (CC) — location (e.g., 'nucleus', 'plasma membrane'). GO terms form a DAG (directed acyclic graph). GO enrichment analysis identifies overrepresented biological processes in gene lists from RNA-seq, GWAS, proteomics. KEGG pathways provide additional metabolic/signaling pathway annotation."
  },
  {
    id: 9,
    question: "Machine learning approaches in bioinformatics include which type of algorithm most commonly used for variant effect prediction?",
    options: ["K-means clustering for gene expression analysis", "Deep neural networks (e.g., DeepVariant for variant calling, Enformer for regulatory prediction, AlphaFold2 for protein structure)", "Principal component analysis (PCA) for batch correction", "Linear regression for eQTL mapping"],
    answer: 1,
    explanation: "Deep learning in genomics: (1) Variant calling — DeepVariant (Google): CNN-based, converts pileup images to variant calls; (2) Variant effect prediction — Enformer (DeepMind): transformer model predicting gene expression from sequence; (3) Protein structure — AlphaFold2 (DeepMind, 2021): predicted 200+ million protein structures, revolutionizing structural biology; (4) Splicing prediction — SpliceAI; (5) Regulatory sequence — Basenji, Sei. These complement traditional bioinformatics tools."
  },
  {
    id: 10,
    question: "The ENCODE project's major finding was that the human genome is:",
    options: ["Mostly 'junk DNA' with <5% functional", "~80% biochemically active (transcription factor binding, histone modifications, chromatin accessibility, transcription) — though the functional significance of all active regions is debated", "Mostly protein-coding sequence (>50% exonic)", "Entirely methylated in adult somatic cells"],
    answer: 1,
    explanation: "ENCODE Phase 2 (2012, Nature): ~80% of the human genome shows biochemical activity (RNA transcription, protein binding, chromatin accessibility, histone modification) in at least one of ~147 cell types tested. This challenged the 'junk DNA' paradigm. However, evolutionary constraint analysis (Graur et al.) argues only 8-15% is evolutionarily constrained (functionally essential). The discrepancy: many biochemical activities may be 'transcriptional noise' without functional consequences. ENCODE provides the most comprehensive annotation of regulatory elements."
  },
  {
    id: 11,
    question: "eQTL (expression quantitative trait loci) mapping identifies:",
    options: ["Structural variants causing chromosome rearrangements", "Genetic variants (SNPs) that affect the expression level of one or more genes — either in cis (affecting nearby genes) or in trans (affecting distant genes)", "Variants altering protein structure without affecting expression", "Copy number variants causing gene dosage effects"],
    answer: 1,
    explanation: "eQTLs: use genotype data + RNA-seq from same individuals to identify genetic variants associated with gene expression levels. Cis-eQTLs: variant affects expression of a gene within ~1 Mb (regulatory variants in promoters, enhancers). Trans-eQTLs: variant affects a gene on a different chromosome (often TF or splicing regulator variants). GTEx (Genotype-Tissue Expression) project mapped eQTLs in 54 human tissues from ~800 donors. eQTL colocalization with GWAS signals links disease variants to their target genes."
  },
  {
    id: 12,
    question: "BLAST (Basic Local Alignment Search Tool) is used to:",
    options: ["Assemble raw sequencing reads into contigs", "Search sequence databases for sequences similar to a query sequence using local alignment and scoring matrices (BLOSUM62 for proteins)", "Predict protein structure from amino acid sequence", "Cluster gene expression data by similarity"],
    answer: 1,
    explanation: "BLAST: heuristic algorithm for rapid sequence database searching. Nucleotide BLAST (blastn, megablast) or protein BLAST (blastp, PSI-BLAST). Algorithm: (1) Find high-scoring word hits (k-mers) in database; (2) Extend hits into High Scoring Pairs (HSPs); (3) Evaluate significance (E-value = expected number of hits by chance; E<0.001 typically significant). Score matrices: BLOSUM62 (protein, ~62% identity evolutionary divergence), PAM250. Used for: gene identification, homolog discovery, annotation transfer, primer specificity checking, contamination detection."
  },
  {
    id: 13,
    question: "Multiple sequence alignment (MSA) of protein sequences is used to:",
    options: ["Compare two DNA sequences to find single nucleotide differences", "Align homologous sequences from multiple species to identify conserved residues, evolutionary relationships, and functional motifs", "Predict 3D structure from primary sequence", "Classify sequences by GC content"],
    answer: 1,
    explanation: "MSA tools: ClustalW/Omega, MUSCLE, MAFFT, T-Coffee. Align homologous sequences by placing gaps to maximize column-wise similarity. Uses: (1) Identify conserved/variable positions (functional residues tend to be conserved); (2) Evolutionary analysis — MSA is the input for phylogenetic tree construction; (3) Identify protein domains, motifs (PROSITE, Pfam); (4) Predict structurally/functionally important residues; (5) Generate PSSM (Position-Specific Scoring Matrix) for PSI-BLAST searches. Output: colored alignments showing conservation per column."
  },
  {
    id: 14,
    question: "Phylogenetic tree construction methods include Maximum Likelihood (ML). What does ML optimize?",
    options: ["The total branch length (parsimony — minimum number of evolutionary changes)", "The probability of observing the sequence data given the tree topology and evolutionary model (substitution model like GTR+Γ)", "The pairwise distance between all sequences in the alignment", "The Bayesian posterior probability of each tree given the data"],
    answer: 1,
    explanation: "Maximum Likelihood (ML) phylogenetics: finds the tree topology and branch lengths that maximize the likelihood P(data|tree, model), where the substitution model describes how sequences evolve (nucleotide: GTR — General Time Reversible; protein: WAG, LG). Rate heterogeneity across sites modeled by Gamma distribution (Γ). Tools: RAxML, IQ-TREE (fastest), PhyML. ML is more accurate than distance methods (neighbor-joining) and parsimony. Bayesian phylogenetics (MrBayes, BEAST) uses MCMC to sample the posterior distribution of trees."
  },
  {
    id: 15,
    question: "Protein structure prediction tool AlphaFold2 (DeepMind, 2021) uses which key innovation?",
    options: ["Homology modeling based on the nearest structural template", "Attention-based deep learning (Evoformer transformer) operating on multiple sequence alignments (MSAs) and pairwise residue relationships to predict atomic coordinates", "Molecular dynamics simulation of protein folding trajectories", "Fragment-based assembly using Rosetta energy functions"],
    answer: 1,
    explanation: "AlphaFold2 (Jumper et al., Nature 2021): revolutionary advance in protein structure prediction. Architecture: (1) Input — MSA of homologs + pairwise distance predictions; (2) Evoformer — iterative attention module refining MSA representations and pair representations; (3) Structure module — predicts backbone torsion angles and all-atom coordinates using invariant point attention. Achieves TM-score >0.9 (near-experimental quality) for most proteins. 2022 CASP14 winner. AlphaFold Database: 200+ million predicted structures covering essentially all known proteins. 2024 Nobel Prize in Chemistry: Hasabis, Jumper (AlphaFold), Baker (Rosetta/protein design)."
  },
  {
    id: 16,
    question: "The R-value and Rfree in X-ray crystallography report on:",
    options: ["Protein purity and homogeneity in crystals", "Model quality: R-value = crystallographic R-factor (goodness of fit of model to observed diffraction data); Rfree = R calculated on ~5% data set aside during refinement (test set, unbiased model quality indicator)", "Crystal diffraction resolution", "Number of molecules in the asymmetric unit"],
    answer: 1,
    explanation: "X-ray crystallography quality indicators: (1) Resolution (Å) — lower = better (2.0 Å = good, <1.5 Å = excellent); (2) R-factor (R-work) = Σ|Fobs-Fcalc|/ΣFobs for all reflections used in refinement (~<0.2 for good structure); (3) Rfree = same calculation on ~5% test reflections never used in refinement — guards against overfitting (should be within 5% of R-work; Rfree<0.25-0.30 acceptable). Ramachandran plot shows >95% residues in allowed regions for good structures."
  },
  {
    id: 17,
    question: "Pathway enrichment analysis tools like GSEA (Gene Set Enrichment Analysis) work by:",
    options: ["Identifying individual differentially expressed genes and mapping them to pathways", "Testing whether a priori defined gene sets (pathways, GO terms) show statistically significant enrichment at the extremes of a ranked gene list (by fold change or statistical significance)", "Clustering genes by co-expression patterns and predicting pathway membership", "Searching for known motifs in promoters of differentially expressed genes"],
    answer: 1,
    explanation: "GSEA (Subramanian et al., PNAS 2005): (1) Rank all genes by differential expression score (e.g., signal-to-noise ratio); (2) Calculate enrichment score (ES) for each gene set — walks ranked list, incrementing when gene is in the set, decrementing when not (like a Kolmogorov-Smirnov test); (3) Normalized ES (NES); (4) FDR q-value by permutation. Does not require arbitrary cutoff — uses all genes. Alternative tools: fgsea (fast GSEA), DAVID, Enrichr, clusterProfiler. Hallmark gene sets (MSigDB) are commonly used."
  },
  {
    id: 18,
    question: "Principal Component Analysis (PCA) in genomics is used for:",
    options: ["Identifying differentially expressed genes between two conditions", "Dimensionality reduction — compressing high-dimensional genomic data (RNA-seq, SNP arrays) into PCs that capture maximum variance; used for batch effect detection, population stratification, and data visualization", "Building phylogenetic trees from genomic sequences", "Predicting protein-protein interactions from sequence"],
    answer: 1,
    explanation: "PCA: rotates high-dimensional data into orthogonal PCs that capture maximum variance in decreasing order. In genomics: (1) RNA-seq — PC1/PC2 plot reveals sample clustering by condition, and batch effects (technical variation); (2) GWAS — PC1-PC10 of SNP data captures population stratification (ancestry), which must be included as covariates to avoid false associations; (3) Single-cell — UMAP/tSNE are non-linear alternatives for visualization. PCA can reveal outlier samples and technical artifacts."
  },
  {
    id: 19,
    question: "The Needleman-Wunsch algorithm performs which type of sequence alignment?",
    options: ["Local alignment — finds the best matching subsequence (BLAST)", "Global alignment — aligns the full length of both sequences with gap penalties", "Semi-global alignment — allows gaps at ends without penalty", "Multiple sequence alignment of more than two sequences"],
    answer: 1,
    explanation: "Needleman-Wunsch (1970): dynamic programming algorithm for optimal global alignment of two sequences (full length of both). Uses a scoring matrix (match reward, mismatch penalty, gap open/extension penalty) → fills DP matrix → traceback gives optimal global alignment. Smith-Waterman (1981) adapts for local alignment (ignores poorly matching regions). Global alignment: best for similar-length, highly similar sequences. Local: for finding similar domains in otherwise dissimilar sequences."
  },
  {
    id: 20,
    question: "Proteome databases such as UniProt/Swiss-Prot are curated to provide:",
    options: ["Only protein 3D structures", "Manually curated protein records with functional annotation, domain architecture, PTM sites, disease associations, subcellular localization, protein-protein interactions, and cross-references to PDB, Ensembl, OMIM", "Predicted protein structures using AI tools only", "Raw mass spectrometry data from proteomics experiments"],
    answer: 1,
    explanation: "UniProtKB: (1) Swiss-Prot (~570,000 entries): manually reviewed, highly curated with experimental evidence for function, structure, PTMs, tissue expression, disease relevance, active sites, and cross-references to PDB, OMIM, Ensembl, RefSeq. (2) TrEMBL (~200 million entries): automatically annotated, unreviewed sequences. UniRef clusters reduce redundancy. UniParc archives all known protein sequences. PRIDE: proteomics data repository (MS raw data). PDB (Protein Data Bank): 3D structures from X-ray, NMR, cryo-EM."
  },
  {
    id: 21,
    question: "Variant annotation tools (SnpEff, VEP — Variant Effect Predictor) assess the likely functional impact of variants by:",
    options: ["Measuring variant allele frequency only", "Predicting variant effects on protein function (missense, nonsense, splice site), regulatory impact (CADD, SIFT, PolyPhen-2 scores), population frequency (gnomAD), and known disease associations (ClinVar, HGMD)", "Performing molecular dynamics simulation of mutant proteins", "Comparing variant distribution between populations only"],
    answer: 1,
    explanation: "Variant annotation pipeline: (1) Functional consequence — VEP/SnpEff: intergenic, intronic, synonymous, missense, nonsense, splice site, UTR effects; (2) Pathogenicity prediction — SIFT (conservation-based), PolyPhen-2 (structure+conservation), CADD (C-score; phred-scaled deleteriousness), REVEL, VEST4; (3) Population frequency — gnomAD (~800K genomes), 1000G, ExAC; (4) Known disease variants — ClinVar, OMIM, ClinGen, LOVD; (5) Regulatory impact — RegulomeDB, ENCODE annotations; (6) Splicing prediction — SpliceAI, MaxEntScan."
  },
  {
    id: 22,
    question: "The gnomAD (Genome Aggregation Database) is used in clinical genetics to:",
    options: ["Identify new variants by sequencing rare disease patients", "Provide allele frequencies of variants in large reference populations (~800,000 exomes+genomes) to assess whether a variant is too common to be pathogenic for a rare disease", "Perform variant effect prediction using machine learning", "Store clinical case reports with genotype-phenotype correlations"],
    answer: 1,
    explanation: "gnomAD (v4: ~800,000 exomes + genomes from diverse populations): provides allele frequencies for SNPs, indels, SVs with population-stratified frequencies. Key uses: (1) Filter variants too common to cause rare Mendelian disease (allele frequency >0.01 for dominant disease); (2) Identify loss-of-function intolerant (pLI score: probability of LoF intolerance) vs tolerant genes; (3) OEUF (observed/expected LoF upper confidence fraction) — lower = more intolerant. Essential for clinical variant interpretation (ACMG criteria: BA1, BS1 benign evidence if AF >5%/1%)."
  },
  {
    id: 23,
    question: "Protein-protein interaction (PPI) network analysis uses which database as a primary resource?",
    options: ["NCBI GenBank (nucleotide sequences)", "STRING database (curated PPI from experimental evidence, co-expression, genomic context, text mining) with confidence scores", "Ensembl genome browser", "KEGG pathway database exclusively"],
    answer: 1,
    explanation: "STRING (Search Tool for the Retrieval of Interacting Genes/Proteins): integrates multiple evidence channels with confidence scores: (1) Experimental — co-IP, Y2H, AP-MS; (2) Databases — curated pathways (KEGG, Reactome); (3) Co-expression — correlation across conditions; (4) Genomic context — conserved genomic neighborhood, gene fusion, phylogenetic co-occurrence; (5) Text mining — co-mention in PubMed abstracts. Network analysis: degree centrality (hub proteins), betweenness centrality, community detection (Markov clustering), network visualization (Cytoscape)."
  },
  {
    id: 24,
    question: "Which method is used to identify enhancers active in a specific cell type without prior knowledge of TF binding sites?",
    options: ["ChIP-seq for H3K4me3 (marks active promoters)", "ATAC-seq + H3K27ac ChIP-seq: ATAC-seq identifies open chromatin; H3K27ac marks active enhancers; overlap identifies active, accessible enhancers", "RNA-seq for identification of eRNA (enhancer RNA) transcription", "RRBS for DNA hypomethylation at enhancers"],
    answer: 1,
    explanation: "Active enhancer identification: Active enhancers have several marks: (1) Open chromatin (ATAC-seq or DNase-seq); (2) H3K27ac (active; absent in H3K27me3 Polycomb-repressed enhancers); (3) H3K4me1 (distal from TSS — poised or active; H3K4me3 = active promoters); (4) Transcription factor binding (ChIP-seq); (5) eRNA transcription (bidirectional RNA-seq or GRO-seq); (6) DNA hypomethylation (WGBS). 'Super-enhancers' defined by exceptionally high H3K27ac, BRD4, and Mediator occupancy using ROSE algorithm."
  },
  {
    id: 25,
    question: "Mendelian randomization (MR) uses genetic variants as instrumental variables to:",
    options: ["Identify causal genes for Mendelian disorders through linkage analysis", "Infer causal relationships between modifiable exposures and health outcomes from observational data, using genetic variants (eQTLs, pQTLs) as unconfounded proxies for exposures", "Detect gene-environment interactions in epidemiological studies", "Perform randomized assignment of genetic variants to treatment groups"],
    answer: 1,
    explanation: "MR exploits random assortment of alleles at conception (genetic Mendel randomization, analogous to a randomized trial). Example: Does BMI causally affect type 2 diabetes? Use SNPs associated with BMI as IVs → if BMI SNPs also associate with T2D, suggests causal effect (not confounding). Three IV assumptions: (1) relevance — IV associates with exposure; (2) independence — IV not confounded; (3) exclusion restriction — IV only affects outcome through exposure. Two-sample MR uses summary statistics from GWAS for exposure and outcome. MR Egger, weighted median for sensitivity analyses."
  },
  {
    id: 26,
    question: "Transcription factor motif analysis (MEME, JASPAR database) identifies:",
    options: ["All genomic regions bound by a specific TF (requires ChIP-seq)", "Overrepresented sequence patterns (motifs) in a set of genomic regions (e.g., ChIP-seq peaks, ATAC-seq peaks) suggesting which TFs may bind there", "Evolutionary conservation of TF binding sites across species", "Three-dimensional structure of TF-DNA complexes"],
    answer: 1,
    explanation: "Motif analysis: (1) MEME (Multiple EM for Motif Elicitation): de novo motif discovery from FASTA sequences using EM algorithm; (2) JASPAR/HOCOMOCO: databases of known TF binding motifs as position weight matrices (PWMs); (3) FIMO: scan sequences for JASPAR motif matches; (4) AME (Analysis of Motif Enrichment): compare motif enrichment between foreground (ChIP-seq peaks) and background. Used for: identifying which TFs bind in ATAC-seq peaks, TF footprinting (within ATAC-seq data), linking regulatory regions to regulators."
  },
  {
    id: 27,
    question: "Single nucleotide polymorphisms (SNPs) are defined as:",
    options: ["Any DNA sequence variant present in >1% minor allele frequency in the population", "Insertions or deletions of single bases", "Copy number variants involving >1 kb segments", "Tandem repeat expansions causing neurological diseases"],
    answer: 0,
    explanation: "SNPs: single base-pair differences between individuals present at minor allele frequency (MAF) ≥1% in the population (conventionally — rarer variants called rare variants). The human genome has ~4-5 million SNPs per individual vs reference, and ~3.6 million indels. Two individuals differ at ~1 per 1,000 bases. SNP arrays (Illumina, Affymetrix) genotype 500,000-5,000,000 SNPs simultaneously for GWAS. GWAS: identifies SNPs associated with traits/diseases."
  },
  {
    id: 28,
    question: "The Reactome database is used for which purpose in bioinformatics?",
    options: ["Storing and querying raw sequencing data", "Providing curated biochemical pathway diagrams and enabling pathway enrichment analysis — covering metabolism, signaling, immune response, and cell cycle", "Predicting protein-protein interactions using deep learning", "Annotating variants with clinical significance"],
    answer: 1,
    explanation: "Reactome (reactome.org): manually curated human pathways with ortholog data for ~75 other organisms. Covers: metabolism, signaling (RTK, GPCR, Wnt, Notch, NF-κB), gene expression, DNA repair, immune system, cell cycle, apoptosis, transport. Each reaction has: substrates/products/catalysts/activators with literature citations. Used for: pathway enrichment analysis (ReactomePA R package, Enrichr), understanding biological context of gene lists, identifying drug targets, comparing signaling networks across species."
  },
  {
    id: 29,
    question: "Differential gene expression analysis from RNA-seq data typically uses which statistical approach?",
    options: ["Simple fold-change thresholding without statistical test", "Negative binomial regression (DESeq2, edgeR) or Bayesian methods (limma-voom) to model count data and test for differential expression with appropriate multiple testing correction (Benjamini-Hochberg FDR)", "Parametric t-test assuming normal distribution", "Chi-square test on read count tables"],
    answer: 1,
    explanation: "RNA-seq count data follows a negative binomial (NB) distribution (overdispersed Poisson). Tools: (1) DESeq2: models counts with NB, shrinks dispersions toward a fitted trend, uses Wald test or LRT, shrinks log2 fold changes with apeglm; (2) edgeR: NB model with empirical Bayes dispersion estimation; (3) limma-voom: transforms counts to log-CPM with precision weights, uses linear model (most powerful for complex designs). Multiple testing: Benjamini-Hochberg FDR correction (p.adj<0.05 standard). Pseudobulk methods for scRNA-seq (aggregating cells from each sample)."
  },
  {
    id: 30,
    question: "Protein domain databases like Pfam, PROSITE, and InterPro are used to:",
    options: ["Store protein 3D structures from X-ray crystallography", "Annotate proteins by identifying conserved domains, motifs, and functional sites using hidden Markov models (HMMs) or sequence profiles", "Predict protein-protein interaction networks", "Store protein MS/MS spectra from proteomics experiments"],
    answer: 1,
    explanation: "Protein domain databases: (1) Pfam: protein family database using profile HMMs (HMMER) — >19,000 families; (2) PROSITE: patterns and profiles for functional sites; (3) PRINTS: fingerprints (group of motifs) for protein family classification; (4) SMART: signaling domain database; (5) InterPro: integrates all above databases for comprehensive domain annotation. Used for: inferring protein function from sequence (domain architecture); identifying evolutionary relationships; understanding domain shuffling in protein evolution; predicting functional residues (active sites, binding sites)."
  },
  {
    id: 31,
    question: "The Hidden Markov Model (HMM) in sequence analysis is used for:",
    options: ["Predicting protein structure from primary sequence using deep learning", "Probabilistic modeling of sequence profiles for domain detection (HMMER/Pfam) and sequence alignment, capturing position-specific residue frequencies and gap probabilities", "Identifying structural variants from short-read NGS data", "Performing multiple genome alignment between divergent species"],
    answer: 1,
    explanation: "Profile HMMs: represent conserved sequence patterns as probabilistic models where each column of an MSA is modeled as a probability distribution over amino acids or nucleotides, with match, insert, and delete states. HMMER builds and searches profile HMMs (hmmbuild → hmmsearch/hmmscan). Applications: (1) Domain detection in uncharacterized proteins (Pfam search); (2) Highly sensitive homology detection (more sensitive than BLAST, especially for remote homologs); (3) Protein family classification; (4) Alignment of distantly related sequences."
  },
  {
    id: 32,
    question: "The concept of 'polygenic risk score' (PRS) in precision medicine:",
    options: ["Uses a single high-impact variant to predict disease risk", "Aggregates the effects of thousands of common GWAS variants into a single score reflecting genetic predisposition to a disease, enabling individualized risk stratification", "Predicts which drugs will be effective based on pharmacogenomics", "Identifies Mendelian disease genes from family studies"],
    answer: 1,
    explanation: "PRS (polygenic risk score): combines genotype at thousands of SNPs (weighted by GWAS effect sizes) into a single score: PRS = Σ(β_i × genotype_i). Used for: risk stratification — individuals in top 1% PRS have substantially elevated disease risk (e.g., 3x for coronary artery disease, >10x for familial hypercholesterolemia-like risk); population screening; clinical trial enrichment. Limitations: largely developed in European populations (ancestry bias); doesn't replace clinical risk factors; gene-environment interactions. PRSice-2, LDpred2, PRS-CS are computation tools."
  },
  {
    id: 33,
    question: "Protein-ligand docking studies in drug discovery use which approach to predict binding mode and affinity?",
    options: ["X-ray crystallography of protein-drug co-crystals (experimental, not computational)", "Computational methods (AutoDock Vina, Glide, GOLD) sampling ligand conformations and orientations in the protein binding site, scoring poses by force field energy functions or empirical scoring functions to predict binding affinity", "NMR chemical shift perturbation to identify binding sites", "Molecular dynamics to simulate 1 microsecond trajectories"],
    answer: 1,
    explanation: "Structure-based virtual screening: (1) Protein structure (crystal, cryo-EM, or AlphaFold2 model) prepared (protonation, missing loops); (2) Binding site defined; (3) Ligand library prepared with 3D conformers; (4) Docking algorithm samples ligand poses (genetic algorithm: AutoDock, systematic: GOLD, hierarchical: Glide); (5) Scoring function predicts ΔG (force field-based, empirical, or ML-based); (6) Top-ranked compounds validated experimentally. Combined with ADMET prediction for drug-like properties."
  },
  {
    id: 34,
    question: "Functional genomics screens using genome-wide CRISPR libraries (Brunello, GeCKO) can identify:",
    options: ["All protein-protein interactions in a cell type", "Essential genes, drug resistance genes, and genes required for specific cellular phenotypes by knocking out each gene in the genome with unique sgRNAs and using NGS to quantify sgRNA abundance changes", "All splice isoforms of every gene", "Epigenetic modifications controlling gene expression"],
    answer: 1,
    explanation: "Genome-wide CRISPR screens: pooled library of 70,000-200,000 unique sgRNAs (~4-6 per gene, covering entire genome) → lentiviral transduction at MOI~0.3 (one sgRNA/cell) → selection for phenotype (growth, drug resistance, reporter, FACS sort) → NGS quantifies sgRNA abundance. Depleted sgRNAs → essential/vulnerability genes; enriched sgRNAs → resistance genes. Dropout analysis (MAGeCK, BAGEL) identifies hits. CRISPRi (dCas9-KRAB) and CRISPRa (dCas9-VP64/SAM) screens interrogate non-coding and regulatory elements."
  },
  {
    id: 35,
    question: "The Human Cell Atlas (HCA) project aims to:",
    options: ["Sequence the genomes of all human cell lines", "Create a comprehensive reference map of all cell types in the human body using single-cell technologies (scRNA-seq, scATAC-seq, spatial transcriptomics)", "Catalog all protein structures in human cells using cryo-EM", "Map all chromatin interactions in 200 human cell types"],
    answer: 1,
    explanation: "Human Cell Atlas (HCA, launched 2016): systematic atlas of all ~37 trillion human cells using primarily scRNA-seq across all organs, tissues, developmental stages, and disease states. Uses multi-organ sampling, 10x Genomics droplet microfluidics, plus spatial transcriptomics, CITE-seq, and other modalities. Goals: (1) Define all human cell types, subtypes, and states; (2) Map their spatial organization; (3) Understand cell-cell communication; (4) Identify disease-relevant cell types for therapeutic targeting. >50 million cells profiled as of 2023."
  },
  {
    id: 36,
    question: "Genome annotation pipelines (MAKER, BRAKER, Augustus) perform which function?",
    options: ["Variant calling from whole-genome sequencing data", "Predict the location and structure of all genes (exon-intron boundaries, UTRs, ORFs) in a newly assembled genome using ab initio gene models, RNA-seq evidence, and protein homology", "Comparative epigenomics between human and mouse genomes", "Functional annotation of variants from resequencing studies"],
    answer: 1,
    explanation: "Genome annotation: identifying all genes in an assembled genome sequence. Tools combine: (1) Ab initio prediction — Augustus, GeneMark, SNAP: train on known gene structures, predict using HMM-based gene models; (2) RNA-seq evidence — transcriptome assembly (Trinity, STAR), splice junctions inform intron boundaries; (3) Protein homology — align homologous proteins from related species; (4) Repeat masking — RepeatMasker identifies TEs/repeats to exclude. MAKER, BRAKER, EvidenceModeler combine evidence types. Output: GFF3/GTF gene annotation file."
  },
  {
    id: 37,
    question: "Copy number variation (CNV) analysis from NGS data identifies:",
    options: ["Single nucleotide substitutions", "Deletions and duplications of genomic segments (>50 bp to megabases) by analyzing read depth (coverage) or paired-end discordant read mapping", "Inversions and translocations exclusively", "Tandem repeat expansions using short-read NGS"],
    answer: 1,
    explanation: "CNV detection from WGS: (1) Read depth/coverage analysis — regions with ~0 coverage = deletion; ~2x = duplication; tools: CNVnator, Control-FREEC; (2) Paired-end mapping — discordant reads (wrong insert size/orientation) indicate CNV boundaries; (3) Split reads — reads spanning breakpoints. From SNP arrays: LogR ratio (copy number) + B allele frequency (allele balance). Clinical CNV detection uses array CGH or CMA (chromosomal microarray analysis). CNV databases: DGV (Database of Genomic Variants), ClinGen dosage sensitivity map."
  },
  {
    id: 38,
    question: "The concept of 'ortholog' vs 'paralog' in comparative genomics:",
    options: ["Orthologs are identical genes; paralogs are 99% similar genes", "Orthologs — genes in different species descended from a common ancestor by speciation (likely retain same function); paralogs — genes in same or different species descended from duplication (may diverge in function)", "Orthologs are protein-coding genes; paralogs are non-coding RNA genes", "Orthologs are located on the same chromosome; paralogs are on different chromosomes"],
    answer: 1,
    explanation: "Orthology/paralogy (Fitch, 1970): (1) Orthologs — genes in different species separated by speciation event (typically retain similar function; used for functional inference); (2) Paralogs — genes within or between species separated by duplication (may neo- or sub-functionalize). Example: human BRCA1 and mouse Brca1 are orthologs; HIF-1α and HIF-2α in humans are paralogs. Databases: OrthoFinder, OMA, InParanoid, NCBI Homologene, Ensembl Compara. Functional annotation is more reliable from orthologs than distant paralogs."
  },
  {
    id: 39,
    question: "The concept of 'synteny' in comparative genomics refers to:",
    options: ["Sequence similarity between coding regions of two genes", "Conservation of gene order and/or chromosomal location between species — syntenic regions share ancestral chromosomal segments", "The co-expression of genes in the same tissue", "The physical proximity of genes on the same chromosome within a species"],
    answer: 1,
    explanation: "Synteny: conserved gene order between chromosomal segments in different species (orthologs in the same relative order). Macro-synteny: large chromosomal segments conserved between species (e.g., much of human chr1 is syntenic with mouse chr4). Synteny allows positional cloning (identifying candidate genes by synteny with animal model QTL regions), understanding chromosomal evolution (inversions, translocations), and improving genome assembly of new species using synteny to an annotated reference. Tools: MCScanX, SyntenyDB, Ensembl synteny viewer."
  },
  {
    id: 40,
    question: "The ACMG/AMP guidelines (Richards et al., 2015) classify sequence variants in clinical genetics into which categories?",
    options: ["High penetrance, moderate penetrance, low penetrance, benign", "Pathogenic (P), Likely Pathogenic (LP), Variant of Uncertain Significance (VUS), Likely Benign (LB), Benign (B)", "Class 1-5 (WHO tumor classification)", "Gain-of-function, loss-of-function, dominant negative, haploinsufficient"],
    answer: 1,
    explanation: "ACMG/AMP (American College of Medical Genetics and Genomics/Association for Molecular Pathology) 2015 guidelines: 5-tier classification: (1) Pathogenic; (2) Likely pathogenic (>90% probability pathogenic); (3) VUS (variant of uncertain significance); (4) Likely benign; (5) Benign. Evidence codes: PVS1 (null variant in LoF gene), PS1-4 (strong pathogenic), PM1-6 (moderate), PP1-5 (supporting); BA1 (stand-alone benign — >5% MAF), BS1-4 (strong benign), BP1-7 (supporting benign). Evidence is combined using point-based rules. ClinVar stores classified variants with evidence."
  },
  {
    id: 41,
    question: "Transcriptomics analysis using microarrays (Affymetrix, Agilent) preceded RNA-seq. A key limitation of microarrays vs RNA-seq is:",
    options: ["Microarrays can detect all RNA species including novel transcripts", "Microarrays are limited by probes designed to known sequences (cannot detect novel transcripts, isoforms, or fusions), have limited dynamic range, and suffer from hybridization background", "RNA-seq requires prior knowledge of transcriptome; microarrays can sequence de novo", "Microarrays provide absolute quantification while RNA-seq is only relative"],
    answer: 1,
    explanation: "Microarray limitations vs RNA-seq: (1) Probe-based — only detects transcripts for which probes are designed (no novel transcript discovery); (2) Background hybridization — non-specific binding limits sensitivity for lowly expressed genes; (3) Saturation — signal saturates for very highly expressed genes (limited dynamic range ~3 log vs ~5 log for RNA-seq); (4) Cross-hybridization between similar sequences. RNA-seq: unbiased, detects novel transcripts, fusions, isoforms, SNPs from RNA; wider dynamic range; digital counting. Microarrays still used for rapid, cost-effective gene expression panels."
  },
  {
    id: 42,
    question: "The global protein structure initiative and AlphaFold database have implications for drug discovery because:",
    options: ["Most proteins were already structurally characterized before 2021", "Predicted structures of nearly all known proteins (including previously 'undruggable' targets) enable structure-based drug design for millions of proteins lacking experimental structures", "AlphaFold structures replace experimental validation entirely", "Only bacterial protein structures are predicted with high confidence by AlphaFold"],
    answer: 1,
    explanation: "AlphaFold Database (2022): ~200 million predicted protein structures covering essentially all known proteomes (human, model organisms, pathogen, UniProt). This enables: (1) Virtual screening for new drug targets with no prior structural data; (2) Understanding protein function from predicted domain architecture; (3) Identifying allosteric pockets not visible in traditional structures; (4) Designing protein-protein interaction inhibitors. Limitations: AlphaFold predicts single conformation (not flexibility/dynamics), cannot predict bound-ligand-induced conformational changes (apo vs holo), disorder regions may be less reliable."
  },
  {
    id: 43,
    question: "Variant phasing (haplotype phasing) determines:",
    options: ["Whether a variant is pathogenic or benign based on population frequency", "Which alleles of different variants are on the same chromosome (cis) vs different chromosomes (trans) — critical for compound heterozygosity in Mendelian disease and understanding haplotype effects", "The zygosity of a variant (homozygous vs heterozygous)", "The parental origin of de novo mutations"],
    answer: 1,
    explanation: "Phasing: determining which allele combinations are on the same haplotype (same chromosome copy). Critical for: (1) Compound heterozygosity — two pathogenic variants in the same gene on different chromosomes (trans configuration) cause recessive disease; same chromosome (cis) = one functional copy remains; (2) Pharmacogenomics — CYP2D6 star allele phasing; (3) Cancer — knowing which mutations co-occur in the same cancer clone. Methods: statistical phasing (SHAPEIT, Eagle using population LD patterns), physical phasing (long reads, Hi-C, 10x linked reads, trio sequencing)."
  },
  {
    id: 44,
    question: "The t-SNE (t-distributed stochastic neighbor embedding) and UMAP algorithms in single-cell genomics are used for:",
    options: ["Statistical testing for differential gene expression", "Non-linear dimensionality reduction for visualization of high-dimensional single-cell data in 2D/3D, preserving local neighborhood structure to reveal cell type clusters", "Trajectory inference to order cells in pseudotime", "Batch effect correction between samples"],
    answer: 1,
    explanation: "t-SNE (van der Maaten & Hinton, 2008) and UMAP (McInnes et al., 2018): non-linear dimensionality reduction algorithms that project high-dimensional data (e.g., ~3,000 PCs from scRNA-seq) into 2D/3D. Both preserve local structure (similar cells cluster together). UMAP: faster, better preserves global structure, more interpretable distances, recommended over t-SNE for most applications. Used in Seurat, Scanpy for single-cell visualization. Caveat: distances between clusters in t-SNE/UMAP are not directly interpretable; cluster distances depend on perplexity (t-SNE)/n_neighbors (UMAP) parameters."
  },
  {
    id: 45,
    question: "Drug repurposing using computational genomics approaches includes which strategies?",
    options: ["Only testing existing drugs in clinical trials for new indications", "Connectivity Map (CMap/LINCS) — matching disease gene expression signatures with drug-induced expression changes; network medicine — finding drugs targeting disease gene neighborhoods; genetic evidence — drugs targeting GWAS risk genes", "Only molecular docking of existing drugs to new protein targets", "Laboratory high-throughput screening of drug libraries"],
    answer: 1,
    explanation: "Computational drug repurposing strategies: (1) CMap/LINCS: compare disease vs normal transcriptome signature with drug-induced signatures — drugs whose signatures are inverse to disease may be therapeutic; (2) Network medicine: drugs targeting genes within the disease module in PPI network; (3) GWAS-guided — drugs already target GWAS risk genes with genetic support (e.g., statins already target PCSK9, confirmed by genetics); (4) PRS-based phenome-wide: test drug target genetic mimics for pleiotropic effects; (5) Knowledge graph embedding (e.g., BioKG, HetioNet) for drug-disease links."
  },
  {
    id: 46,
    question: "Chromatin Immunoprecipitation Exonuclease (ChIP-exo) or ChIP-nexus improves resolution of TF binding site mapping by:",
    options: ["Using higher-affinity antibodies for chromatin immunoprecipitation", "Treating immunoprecipitated chromatin with lambda exonuclease to degrade unprotected DNA from 5' ends, leaving only DNA footprinted by the TF — achieving near single-base resolution vs ~200 bp for ChIP-seq", "Performing ChIP in crosslink-free (native) conditions", "Using MNase instead of sonication for chromatin fragmentation"],
    answer: 1,
    explanation: "ChIP-exo: after ChIP, λ-exonuclease (5'→3' exonuclease on dsDNA) degrades from the 5' ends up to the crosslinked protein-DNA contact, generating sharp read-count peaks at precise boundaries of TF footprint. Achieves ~1-5 bp resolution vs ~100-200 bp for ChIP-seq. ChIP-nexus adds 5' adapter before exonuclease treatment to capture strand-specific boundaries. Advantages: precise binding site identification, reduced background, detects TF footprint shape (symmetric for non-specific, asymmetric for sequence-specific). Useful for mapping pioneer TFs, composite motifs, and nucleosome positioning at binding sites."
  },
  {
    id: 47,
    question: "The concept of 'transcription factor (TF) cooperativity' in gene regulation means:",
    options: ["TFs are structurally similar to each other", "Multiple TFs bind adjacent regulatory elements and physically or functionally interact to cooperatively activate or repress transcription — synergistically or in combinatorial control", "TFs can only bind their consensus motif, not degenerate sequences", "TFs act only at proximal promoters, not at enhancers"],
    answer: 1,
    explanation: "TF cooperativity: (1) Direct cooperativity — TFs physically interact (heterodimerize: AP-1 as Fos-Jun; SMAD-TF complexes), stabilizing each other's binding; (2) Indirect cooperativity — TF binding remodels chromatin, facilitating binding of secondary TFs; (3) Pioneer TFs (FOXA1, PU.1) open compacted chromatin enabling secondary TF binding; (4) Phase separation — multiple TFs in transcriptional condensates amplify each other's activity; (5) Enhanceosome — precisely positioned TF array (IFN-β enhanceosome: NF-κB, IRF3, AP-1 in exact spacing) maximally activates transcription. This combinatorial logic achieves cell-type specificity."
  },
  {
    id: 48,
    question: "The genome-scale metabolic model (GEM) reconstruction approach in systems biology enables:",
    options: ["Predicting protein structures from metabolic gene sequences", "Constructing stoichiometric models of all biochemical reactions in an organism using flux balance analysis (FBA) to predict metabolic phenotypes, drug targets, and engineering strategies", "Measuring metabolite concentrations using mass spectrometry", "Annotating metabolic genes by homology to model organisms"],
    answer: 1,
    explanation: "GEMs: comprehensive stoichiometric models (S matrix) of all metabolic reactions in an organism. Reconstruction: BIGG reactions + annotation → FBA (linear programming: maximize biomass flux subject to stoichiometric and flux capacity constraints) → predicts growth phenotypes, auxotrophies, essential genes. Human metabolic model (Recon3D, HumanGEM): ~13,000 reactions, ~4,000 genes. Applications: predict cancer metabolic vulnerabilities (synthetic lethality), personalize diet recommendations (gut microbiome GEMs), design microbial production strains (metabolic engineering), identify antibiotic targets."
  },
  {
    id: 49,
    question: "LoFreq and MuTect2 are variant callers specifically designed for:",
    options: ["Germline variant calling from WGS of healthy individuals", "Somatic variant calling from tumor-normal matched samples, detecting low-allele-frequency variants in heterogeneous tumor samples", "Single-cell genomics variant calling", "Variant calling from long-read PacBio/Nanopore sequencing"],
    answer: 1,
    explanation: "Somatic variant callers: designed to identify variants present in tumor but not matched normal tissue, at low allele frequency (due to tumor heterogeneity, purity). MuTect2 (GATK): Bayesian somatic genotyping with normal panel (PoN) to filter germline and technical artifacts, orientation bias filters; standard for clinical cancer sequencing. LoFreq: uses Poisson model for rare variants (down to 0.5% VAF). Matched normal removes germline variants. Key challenge: distinguish somatic mutation (true) from CHIP (clonal hematopoiesis) and technical sequencing errors."
  },
  {
    id: 50,
    question: "The International Cancer Genome Consortium (ICGC) and The Cancer Genome Atlas (TCGA) projects have contributed to cancer genomics by:",
    options: ["Developing cancer immunotherapy approaches", "Systematic whole-genome and exome sequencing of thousands of tumors across cancer types, identifying driver genes, mutational signatures, and molecular subtypes of cancer", "Creating cell line models of all cancer types", "Developing cancer screening tests for early detection"],
    answer: 1,
    explanation: "TCGA (US NIH): ~20,000 tumor samples from 33 cancer types; multi-platform profiling (WES, CNA, DNA methylation, mRNA, miRNA, protein). Identified: molecular subtypes (e.g., 4 breast cancer subtypes), driver genes per cancer type, mutational signatures (COSMIC catalog). ICGC (international): 50 cancer types, >25,000 genomes. Pan-Cancer Analysis of Whole Genomes (PCAWG, 2020): 2,658 whole cancer genomes across 38 cancer types; discovered non-coding drivers, mutational processes, timing of mutations. These datasets enable precision oncology, biomarker discovery, and understanding cancer evolution."
  }
];

export default questions
