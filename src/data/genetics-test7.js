const questions = [
  // ===== EVOLUTION & PHYLOGENETICS (Q1–Q12) =====
  {
    id: 1,
    question: "The neutral theory of molecular evolution (Kimura, 1968) proposes that:",
    options: ["All mutations are either beneficial or deleterious", "The majority of molecular evolutionary changes are selectively neutral and are fixed by genetic drift", "Natural selection drives all allele frequency changes", "Genetic drift only affects non-coding sequences"],
    answer: 1,
    explanation: "Kimura's neutral theory proposes that most substitutions fixed in evolution (at the molecular level) are neutral (no fitness effect) rather than adaptive, driven to fixation by random genetic drift. The rate of neutral evolution equals the neutral mutation rate (μ), and evolutionary substitution rates are relatively constant (molecular clock). This theory explains the high levels of molecular polymorphism and evolutionary substitution rates observed."
  },
  {
    id: 2,
    question: "The molecular clock hypothesis states that:",
    options: ["All genes evolve at the same rate", "Neutral mutations accumulate at roughly constant rates over time, allowing molecular data to estimate divergence times", "Natural selection drives evolutionary change at constant rates", "All organisms evolved from a common ancestor at the same time"],
    answer: 1,
    explanation: "The molecular clock (Zuckerkandl & Pauling, 1962) proposes that amino acid (or nucleotide) substitutions accumulate at approximately constant rates over time in neutral or nearly neutral sequences. This allows calibrated phylogenies to estimate divergence times. Different genes have different rates (fast-evolving for recent divergences, slow for ancient). Strict clocks are approximations; relaxed clock models better accommodate rate variation."
  },
  {
    id: 3,
    question: "Speciation by allopatry (allopatric speciation) occurs when:",
    options: ["Two populations in the same geographic area diverge without physical barriers", "A geographic barrier physically separates populations, preventing gene flow, allowing independent divergence leading to reproductive isolation", "A polyploidy event instantly creates a new species", "Two subspecies hybridize to create a new species"],
    answer: 1,
    explanation: "Allopatric speciation (most common mode): geographic isolation (mountain ranges, oceans, rivers) separates populations, preventing gene flow. Isolated populations diverge by natural selection, genetic drift, and mutation independently. Eventually, reproductive isolating mechanisms (behavioral, morphological, genetic incompatibilities) accumulate so that if the populations come into contact again, they cannot interbreed — new species formed. Classic example: Darwin's finches."
  },
  {
    id: 4,
    question: "Horizontal gene transfer (HGT) challenges traditional phylogenetic tree construction because:",
    options: ["It makes all genes evolve faster", "Genes acquired by HGT have evolutionary histories different from the organismal history (species tree ≠ gene trees for HGT genes)", "It only occurs in eukaryotes", "It prevents genetic diversity in bacterial populations"],
    answer: 1,
    explanation: "HGT (lateral gene transfer): genes transferred between non-sexually reproducing or unrelated organisms have phylogenetic histories inconsistent with the vertical inheritance species tree. In bacteria, 10–30% of genes may have been acquired by HGT (antibiotic resistance, pathogenicity islands). HGT makes prokaryotic evolution a web (reticulate evolution) rather than a strict bifurcating tree, requiring network-based phylogenetic methods."
  },
  {
    id: 5,
    question: "The dN/dS ratio (ω) in molecular evolution is used to detect:",
    options: ["Synonymous substitution rates only", "The ratio of non-synonymous (dN, amino acid-changing) to synonymous (dS, silent) substitutions — ω > 1 indicates positive selection, ω < 1 indicates purifying selection", "Insertions and deletions in protein-coding genes", "Recombination breakpoints in sequences"],
    answer: 1,
    explanation: "dN = non-synonymous substitution rate per non-synonymous site; dS = synonymous substitution rate per synonymous site. ω (dN/dS): ω < 1 → purifying (negative) selection (conserved proteins); ω = 1 → neutral evolution; ω > 1 → positive (diversifying) selection (adaptive evolution, immune evasion, antigen divergence). PAML (codeml) software performs codon-substitution model analysis for detecting selection."
  },
  {
    id: 6,
    question: "Convergent evolution refers to:",
    options: ["Two species diverging from a common ancestor into different forms", "Independent evolution of similar traits in unrelated lineages due to similar selective pressures", "Evolution reversing to an ancestral state (atavism)", "Rapid evolution of many traits simultaneously"],
    answer: 1,
    explanation: "Convergent evolution: similar phenotypic traits evolve independently in phylogenetically unrelated lineages due to similar environmental pressures. Examples: streamlined body shape in dolphins (mammals) and sharks (fish); echolocation in bats and cetaceans; camera eyes in vertebrates and octopus; antifreeze proteins in Arctic fish and Antarctic fish (evolved different mechanisms). Convergence can mislead phenotype-based phylogenies."
  },
  {
    id: 7,
    question: "The LUCA (Last Universal Common Ancestor) refers to:",
    options: ["The first multicellular organism", "The hypothetical ancestral cell from which all extant life (bacteria, archaea, eukaryotes) descended", "The common ancestor of all animals", "The first photosynthetic organism"],
    answer: 1,
    explanation: "LUCA was not the first life but the common ancestor of all three domains of life (Bacteria, Archaea, Eukarya). Comparative genomics identifies universal gene families shared by all life as LUCA's likely genome components: ribosome, translation machinery, core metabolic enzymes, DNA replication proteins. LUCA is estimated to have lived ~3.5–3.8 billion years ago, was anaerobic, thermophilic, and had DNA-based genetics."
  },
  {
    id: 8,
    question: "Endosymbiotic theory explains the origin of mitochondria and chloroplasts by:",
    options: ["De novo synthesis of organellar membranes from the ER", "Engulfment of free-living prokaryotes (α-proteobacteria for mitochondria, cyanobacteria for chloroplasts) by ancestral eukaryotic cells, with subsequent integration as organelles", "Gene duplication events creating pseudo-organelles", "Viral infection of ancestral cells that introduced oxidative phosphorylation genes"],
    answer: 1,
    explanation: "Margulis's endosymbiotic theory (1967): mitochondria evolved from engulfed α-proteobacteria (Rickettsiales relatives); chloroplasts from cyanobacteria. Evidence: own circular DNA, 70S ribosomes, double membrane, binary fission, sensitivity to prokaryotic antibiotics, and phylogenetic placement of organellar genomes within bacteria. Many prokaryotic genes transferred to the nuclear genome during endosymbiotic evolution."
  },
  {
    id: 9,
    question: "Maximum likelihood phylogenetics is preferred over parsimony because:",
    options: ["It always produces the correct tree topology", "It uses an explicit model of sequence evolution, accounts for multiple substitutions at the same site (homoplasy), and provides a statistical framework for hypothesis testing", "It is computationally much faster", "It does not require a molecular clock"],
    answer: 1,
    explanation: "Maximum likelihood (ML) phylogenetics uses substitution models (GTR+Γ for DNA; LG, WAG for protein) that account for: rate variation among sites, transition/transversion bias, base frequency inequalities, and multiple hits (saturation). ML evaluates the probability of observing the data given the tree and model, maximizing this probability. Statistical support is assessed by bootstrapping. ML outperforms parsimony for divergent sequences and long branch attraction."
  },
  {
    id: 10,
    question: "Which evolutionary process explains why the same antibiotic resistance mutation can appear independently in multiple hospital wards?",
    options: ["Genetic drift", "Parallel evolution (convergent evolution at the molecular level) — the same mutation arises independently because it is the optimal solution to the selective pressure", "Horizontal gene transfer from a single source", "Founder effect"],
    answer: 1,
    explanation: "Parallel molecular evolution: when the same (or equivalent) mutation arises independently in multiple lineages under the same selection pressure. In antibiotic resistance, specific mutations in the drug target confer the optimal fitness benefit; with strong selection, these mutations arise de novo in parallel in multiple ward isolates. Distinguishing parallel evolution from HGT requires phylogenetic analysis."
  },
  {
    id: 11,
    question: "Pseudogenes are:",
    options: ["Non-functional genes in bacteria only", "Genomic sequences closely resembling functional genes but non-functional due to mutations, premature stops, or disrupted reading frames — molecular fossils", "Alternative splice forms of functional genes", "Regulatory RNA genes that lack protein products"],
    answer: 1,
    explanation: "Pseudogenes arise from: (1) duplication followed by degenerative mutations (duplicate pseudogene), (2) retrotransposition (processed pseudogene — cDNA copy, no introns), or (3) direct inactivation of the parental gene. They lack functional gene products but can serve as evolutionary records of ancient gene duplications, transfer of gene expression elements, and regulate parent genes via lncRNA, miRNA sponge, or endogenous siRNA mechanisms."
  },
  {
    id: 12,
    question: "The Jukes-Cantor model in molecular evolution assumes:",
    options: ["All four nucleotides have different substitution rates", "Equal substitution rates between all four nucleotides and equal base frequencies — the simplest substitution model", "Two rate categories (transitions and transversions)", "Site-specific rate variation across the sequence"],
    answer: 1,
    explanation: "The Jukes-Cantor (JC69) model assumes: (1) all substitutions occur at equal rates (one rate parameter α), (2) equal base frequencies (0.25 each), and (3) nucleotide sites evolve independently. It is the simplest nucleotide substitution model, often too simplistic for real data. More realistic models: Kimura 2-parameter (K80, transitions ≠ transversions), HKY85 (unequal base frequencies), GTR (all 6 rates different, 4 base frequencies)."
  },

  // ===== QUANTITATIVE GENETICS & COMPLEX TRAITS (Q13–Q25) =====
  {
    id: 13,
    question: "Quantitative traits (polygenic traits) differ from Mendelian traits in that:",
    options: ["They are controlled by a single gene", "They are controlled by many genes each of small effect, and show continuous variation in the population (bell curve distribution)", "They show clear dominant-recessive patterns", "Environmental factors do not influence them"],
    answer: 1,
    explanation: "Quantitative (complex, polygenic) traits are influenced by many loci (each with small, additive effects) plus environmental factors. They show continuous variation (height, weight, blood pressure, IQ) following approximately normal distributions in the population. Unlike Mendelian traits, they do not segregate in simple ratios. Their genetic architecture is studied by GWAS, QTL mapping, and twin studies."
  },
  {
    id: 14,
    question: "A QTL (Quantitative Trait Locus) study maps:",
    options: ["Single causal Mendelian mutations", "Chromosomal regions containing genes that contribute to variation in a quantitative trait, using genetic markers in experimental crosses or populations", "Transposable element insertion sites", "RNA expression levels across the genome"],
    answer: 1,
    explanation: "QTL mapping identifies chromosomal regions associated with variation in quantitative traits by tracking genetic markers (SNPs, microsatellites) and trait values in mapping populations (F2 intercross, RIL populations, backcross, or human populations). Statistical methods (interval mapping, composite interval mapping) detect linkage between marker regions and phenotypic variation. Each QTL is typically a chromosomal interval containing one or more causal genes."
  },
  {
    id: 15,
    question: "Genomic selection in plant/animal breeding uses:",
    options: ["QTL mapping to select the few major-effect loci", "Genome-wide marker data to estimate breeding values for all individuals without prior QTL identification, improving selection for polygenic traits", "Marker-assisted backcrossing of a single gene", "Whole genome sequencing of all breeding animals only"],
    answer: 1,
    explanation: "Genomic selection (Meuwissen et al., 2001): simultaneously estimates the effects of thousands of SNPs across the entire genome (GBLUP, BayesA/B methods), producing genomic estimated breeding values (GEBVs). Because all loci are included, polygenic traits (milk yield, disease resistance) are predicted more accurately than with QTL-based marker-assisted selection. Genomic selection has transformed dairy cattle and wheat breeding."
  },
  {
    id: 16,
    question: "Genetic correlations between traits indicate:",
    options: ["Two traits are caused by the same single gene", "Pleiotropic or linkage effects — the same genetic variants influence both traits, so selection on one trait will also change the other", "The two traits have identical heritabilities", "Environmental correlations between traits"],
    answer: 1,
    explanation: "Genetic correlation (rG) measures the extent to which the same genetic variants underlie variation in two different traits. rG can arise from pleiotropy (one gene affecting multiple traits) or gametic phase disequilibrium. Negative genetic correlations between traits indicate they share common genetic variants with opposing effects. GWAS-based genetic correlation can be estimated using LD score regression (LDSC)."
  },
  {
    id: 17,
    question: "The infinitesimal model of quantitative genetics assumes:",
    options: ["A small number of large-effect loci control a trait", "An infinite number of loci each with infinitely small effect underlie quantitative traits — the mathematical foundation of quantitative genetic theory", "All variation is environmental", "Only additive effects contribute to trait variation"],
    answer: 1,
    explanation: "The infinitesimal model (Fisher, 1918): quantitative traits are influenced by an infinite number of loci, each with infinitesimally small effects. Under this model, the central limit theorem predicts a normal distribution of breeding values and trait values. The model is the foundation for BLUP, animal model, and genomic prediction methods. Real traits have a mixture of many small-effect and a few larger-effect loci (the 'omnigenic model' is a modern extension)."
  },
  {
    id: 18,
    question: "Natural selection acts on phenotypes but evolutionary change is caused by changes in:",
    options: ["Phenotype frequencies", "Allele frequencies in the gene pool", "Protein structure frequencies", "Environmental conditions only"],
    answer: 1,
    explanation: "Natural selection differentially affects survival and reproduction based on phenotypes, but evolutionary change (descent with modification) is measured by changes in allele frequencies in the population gene pool across generations. Phenotypic selection is translated into allele frequency change through the additive genetic component of the trait. The breeder's equation: Response = heritability × selection differential (R = h²S)."
  },
  {
    id: 19,
    question: "GCTA (Genome-wide Complex Trait Analysis) software is used to:",
    options: ["Perform classical linkage analysis in families", "Estimate heritability from genome-wide SNP data in unrelated individuals (SNP heritability), and perform bivariate genetic correlation analysis", "Perform whole genome sequencing data analysis", "Map QTLs in model organisms"],
    answer: 1,
    explanation: "GCTA uses genome-wide SNP data from unrelated individuals to estimate SNP-based heritability (h²SNP) using restricted maximum likelihood (REML). By computing the genomic relationship matrix (GRM) from SNPs, GCTA estimates the proportion of phenotypic variance captured by common SNPs. GCTA also estimates bivariate genetic correlations, performs GREML analysis, and implements conditional/joint GWAS analysis (COJO)."
  },
  {
    id: 20,
    question: "Assortative mating (positive assortative mating) occurs when individuals preferentially mate with those:",
    options: ["Of different genotypes or phenotypes", "Of similar phenotypes or genotypes to themselves", "Randomly with respect to phenotype", "Who are closely related (inbreeding)"],
    answer: 1,
    explanation: "Positive assortative mating: individuals prefer partners with similar phenotypes (tall × tall, high IQ × high IQ, similar educational attainment). Like inbreeding, assortative mating increases trait-relevant homozygosity but does not change allele frequencies. It increases the correlation between partners' genotypes, inflating heritability estimates from nuclear family-based methods. Educational attainment shows strong positive assortative mating."
  },
  {
    id: 21,
    question: "Omnigenic model (Boyle, Li & Pritchard, 2017) proposes that for complex traits:",
    options: ["Only a few core genes drive all genetic variation", "All genes expressed in disease-relevant cell types are likely to have some effect on complex traits because of highly interconnected regulatory networks ('omnigenic' effects)", "Genetic variants outside genes (non-coding) are unimportant", "Polygenic risk scores can explain all heritable variation"],
    answer: 1,
    explanation: "The omnigenic model proposes that regulatory networks in disease-relevant cells are so interconnected that variants affecting the expression of virtually any gene can have trans-regulatory effects on 'core' disease genes. This explains why GWAS hits are spread across the genome, including many intergenic and functionally obscure regions. It implies that many or all expressed genes contribute indirectly to complex trait variation."
  },
  {
    id: 22,
    question: "In a randomized controlled trial (RCT), why is a genetic substudy (pharmacogenetics) valuable?",
    options: ["It increases the placebo effect", "It identifies patient subgroups with different drug responses (responders vs non-responders) based on genetic variants, enabling precision medicine", "It reduces the sample size needed for the RCT", "It proves causality between a genetic variant and the outcome"],
    answer: 1,
    explanation: "Embedding pharmacogenetic studies within RCTs allows identification of genetic predictors of drug efficacy or adverse effects. If the RCT shows average treatment benefit, the genetic substudy can identify which patients benefit most (predictive biomarkers), enabling precision prescribing. Examples: SLCO1B1 variants predicting statin myopathy, TPMT variants predicting thiopurine toxicity identified through RCT substudies."
  },
  {
    id: 23,
    question: "Balancing selection maintains genetic polymorphism in a population through mechanisms including:",
    options: ["Genetic drift removing rare alleles", "Heterozygote advantage, frequency-dependent selection, and spatially/temporally varying selection", "Mutation-selection balance for deleterious alleles only", "Migration introducing new alleles continuously"],
    answer: 1,
    explanation: "Balancing selection actively maintains polymorphism: (1) Heterozygote advantage (overdominance, e.g., HbA/HbS in malaria), (2) negative frequency-dependent selection (rare allele has higher fitness, e.g., MHC diversity for immune recognition of diverse pathogens), (3) temporally or spatially varying environments where different alleles are favored at different times/places. Balanced polymorphisms show deep coalescence times and excess variation vs neutral expectations."
  },
  {
    id: 24,
    question: "Selective sweep signatures in the genome are detected by looking for:",
    options: ["High heterozygosity around a selected locus", "Reduced nucleotide diversity, extended haplotype homozygosity (EHH), and altered allele frequency spectrum around a positively selected locus", "Elevated dN/dS ratios in conserved genes", "Increased insertional polymorphism rates"],
    answer: 1,
    explanation: "When a beneficial mutation is rapidly fixed by positive selection, linked neutral variants hitchhike to high frequency (selective sweep). Signatures: (1) reduced nucleotide diversity (Pi, θ) flanking the selected site, (2) extended haplotype homozygosity (EHH, iHS, XP-EHH for ongoing sweeps), (3) skewed site frequency spectrum (Tajima's D < 0). LCT/MCM6 (lactase persistence), EDAR (hair morphology), ACKR1 (Duffy antigen) show clear sweep signatures."
  },
  {
    id: 25,
    question: "The concept of 'population stratification' in GWAS can cause:",
    options: ["Reduced statistical power to detect true associations", "Spurious associations (false positives) when genetic ancestry differences between cases and controls are confounded with allele frequency differences", "Underestimation of heritability", "Increased linkage disequilibrium between all markers"],
    answer: 1,
    explanation: "Population stratification: if cases have a different genetic ancestry from controls (not just disease status), many alleles with different frequencies between populations will appear 'associated' with the disease spuriously. Example: if cases are predominantly European and controls Asian, Japanese-enriched variants will be 'associated'. Corrections: genomic control (λGC), principal component analysis (PC adjustment), mixed model methods (BOLT-LMM, SAIGE)."
  },

  // ===== MODEL ORGANISMS & RESEARCH TOOLS (Q26–Q40) =====
  {
    id: 26,
    question: "Which model organism is most widely used to study the genetics of aging and longevity?",
    options: ["Mus musculus (mouse)", "Caenorhabditis elegans (roundworm)", "Saccharomyces cerevisiae (yeast)", "Danio rerio (zebrafish)"],
    answer: 1,
    explanation: "C. elegans (Ken. elegans) is the premier model for aging genetics: short lifespan (~21 days), transparent (GFP reporters), fully sequenced genome, invariant cell lineage (959 somatic cells), and powerful genetics (RNAi by feeding). DAF-2/DAF-16 (insulin/IGF-1 signaling → FOXO transcription factor) was discovered in C. elegans and is conserved in mammals. Many longevity genes discovered in worms are functionally conserved."
  },
  {
    id: 27,
    question: "Zebrafish (Danio rerio) are valuable genetic models because:",
    options: ["They are mammals with physiology similar to humans", "They have transparent embryos, rapid external development, large clutch sizes, and are highly amenable to forward and reverse genetics and live imaging", "Their genome is closest to human among all model organisms", "They can survive without a functional genome"],
    answer: 1,
    explanation: "Zebrafish advantages: external development and transparency enable real-time live imaging of development; large clutch size (200–300 eggs/week); forward genetics ENU mutagenesis screens identified >5000 mutants; reverse genetics (morpholinos, CRISPR), transgenesis (Tol2 system), and pharmacological screens in larvae. Human disease models: cardiac, neural, metabolic, and cancer models. Genome is well-annotated with orthologues for ~70% of human disease genes."
  },
  {
    id: 28,
    question: "Drosophila melanogaster (fruit fly) is particularly valuable for studying:",
    options: ["Mammalian-specific developmental pathways", "Basic developmental biology and genetics — many fundamental discoveries (chromosome theory, homeotic genes, signaling pathways) were made in Drosophila", "Complex nervous system behavior only", "Vertebrate immune function"],
    answer: 1,
    explanation: "Drosophila contributions: T.H. Morgan — sex-linked inheritance and chromosome theory (Nobel 1933); Beadle & Tatum — one gene, one enzyme (Nobel 1958); Lewis, Nüsslein-Volhard, Wieschaus — homeotic genes and embryonic pattern formation (Nobel 1995). Advantages: short generation (2 weeks), large offspring numbers, balancer chromosomes, P-element transposon tools, UAS-GAL4 system for tissue-specific expression, and powerful forward genetics."
  },
  {
    id: 29,
    question: "The Arabidopsis thaliana (thale cress) genome was the first plant genome sequenced and is valuable because:",
    options: ["It is a crop plant with major agricultural importance", "It has a small genome (~135 Mb), short generation time, prolific seed production, and is amenable to forward/reverse genetics — the primary model plant", "It tolerates extreme environmental conditions making it a stress model", "Its genome is most similar to rice among plants"],
    answer: 1,
    explanation: "Arabidopsis thaliana (Brassicaceae) is the primary plant model: small diploid genome (~135 Mb, ~27,000 genes), short life cycle (6 weeks seed-to-seed), self-compatible (easy genetics), fertile single plants in small spaces, well-developed transformation tools (floral dip method with Agrobacterium), and extensive mutant collections (T-DNA insertion lines at TAIR/NASC). Key discoveries: floral development (ABC model), vernalization, plant immunity, and hormone signaling."
  },
  {
    id: 30,
    question: "The GAL4/UAS system in Drosophila is used to:",
    options: ["Induce random mutagenesis throughout the genome", "Drive tissue-specific or temporal expression of any transgene — GAL4 (yeast transcription factor) expressed in specific cells activates UAS-linked transgene expression only in those cells", "Perform CRISPR editing in specific tissues", "Map the Drosophila genome by recombination"],
    answer: 1,
    explanation: "GAL4/UAS (Upstream Activation Sequence) binary system: yeast GAL4 transcription factor is expressed in desired cells under a tissue-specific promoter. A separate 'responder' strain carries any gene of interest downstream of UAS. Crossing the two strains restricts transgene expression to GAL4-expressing cells. This allows misexpression, RNAi knockdown, cell ablation, or calcium imaging in precise tissues/times in adult or larval flies."
  },
  {
    id: 31,
    question: "Morpholino oligonucleotides in zebrafish function by:",
    options: ["Integrating into the genome to create permanent knockouts", "Transiently blocking translation or splicing of target mRNA by antisense complementarity, without degrading the RNA", "Inserting reporter genes downstream of target genes", "Activating CRISPR-based editing in embryos"],
    answer: 1,
    explanation: "Morpholinos are synthetic antisense oligonucleotides with a morpholine backbone (more stable than RNA/DNA) that block gene function transiently (diluted over several days of development). Translation-blocking MOs target the 5' UTR or start codon; splice-blocking MOs target splice sites. They are microinjected into 1-cell zebrafish embryos for rapid loss-of-function analysis, though phenotypes must be validated by genetic mutants (CRISPR) to rule out off-target effects."
  },
  {
    id: 32,
    question: "The mouse conditional knockout (using Cre-lox) is advantageous over constitutive knockout because:",
    options: ["Conditional knockouts are easier and cheaper to generate", "Tissue-specific or inducible deletion avoids embryonic lethality caused by ubiquitous gene deletion, allowing study of gene function in specific tissues/time points", "Conditional knockouts have higher knockout efficiency", "They do not require ES cell manipulation"],
    answer: 1,
    explanation: "Constitutive knockout of essential genes often causes embryonic lethality. Cre-lox conditional knockout: floxed allele (loxP sites flanking critical exon) + tissue-specific Cre transgene → gene deletion only in Cre-expressing cells. Inducible Cre (CreERT2 + tamoxifen) allows temporal control. This enables study of gene X specifically in the brain, liver, or heart at defined developmental or adult timepoints, revealing tissue-specific functions."
  },
  {
    id: 33,
    question: "CRISPR base editing in mouse embryos (or human cells) produces:",
    options: ["Large genomic deletions at the target site", "Precise single-base changes (C→T or A→G) without double-strand breaks, useful for modeling point mutations or correcting pathogenic SNPs", "Random insertions throughout the genome", "Large transgene insertions at target sites"],
    answer: 1,
    explanation: "Base editors (CBE: C→T; ABE: A→G) coupled to Cas9 nickase and guide RNA enable precise single-nucleotide changes in the genome of mouse embryos, human cell lines, or patient-derived iPSCs without introducing double-strand breaks. Applications: creating disease models recapitulating patient mutations, gene correction of pathogenic SNPs (e.g., sickle cell disease HBB Glu6Val), and studying variant functional effects."
  },
  {
    id: 34,
    question: "Single-cell multiomics simultaneously measures:",
    options: ["mRNA expression from bulk tissue plus protein from blood", "Multiple molecular modalities (e.g., RNA + chromatin accessibility + protein + genomic mutations) from the same single cell", "Gene expression averaged across many cells of the same type", "Spatial gene expression without single-cell resolution"],
    answer: 1,
    explanation: "Single-cell multiomics: technologies like CITE-seq (RNA + surface protein), scATAC+scRNA (chromatin + transcriptome), SHARE-seq, SNARE-seq, and 10x Multiome simultaneously profile multiple molecular layers from the same cell. This connects gene regulatory state (open chromatin) with transcriptional output and protein expression, resolving how regulatory elements control specific gene expression programs within defined cell types."
  },
  {
    id: 35,
    question: "The ENCODE Roadmap Epigenomics project generated reference epigenomes for:",
    options: ["A single reference tissue from one individual", "Hundreds of human cell types and primary tissues, mapping histone modifications, DNA methylation, and chromatin accessibility", "Model organism tissues (mouse and Drosophila) only", "Cancer cell lines exclusively"],
    answer: 1,
    explanation: "The NIH Roadmap Epigenomics Mapping Consortium generated reference epigenomes (histone marks: H3K4me3, H3K4me1, H3K27me3, H3K36me3, H3K9me3; DNA methylation; chromatin accessibility) for 111 primary human cell and tissue types. Combined with ENCODE (cancer cell lines, IPs), this provides a comprehensive reference for interpreting GWAS non-coding variants and understanding cell-type-specific gene regulation."
  },
  {
    id: 36,
    question: "Protein-protein interaction networks in systems biology are used to:",
    options: ["Identify the sequence of every protein in a cell", "Understand how proteins work together in pathways/complexes, identify disease-associated network modules, and predict drug targets based on network topology", "Determine the 3D structure of protein complexes", "Measure protein expression levels across tissues"],
    answer: 1,
    explanation: "PPI networks represent proteins as nodes and interactions as edges. Network analysis: centrality measures identify hub proteins (essential, often disease-associated); community detection identifies functional modules; network medicine maps diseases to PPI network neighborhoods; drug targets tend to be network hubs or lie between disease modules. The human interactome (HuRI, STRING, BioGRID) is a key systems biology resource."
  },
  {
    id: 37,
    question: "The CRISPR-Cas13 system differs from CRISPR-Cas9 in that Cas13:",
    options: ["Cleaves both strands of double-stranded DNA", "Targets and cleaves single-stranded RNA, enabling RNA knockdown, RNA editing, and RNA detection (SHERLOCK diagnostics)", "Requires two guide RNAs instead of one", "Only works in prokaryotic cells"],
    answer: 1,
    explanation: "CRISPR-Cas13 (type VI CRISPR) targets RNA rather than DNA. Cas13 is guided by a crRNA to its target ssRNA and cleaves it (plus collateral ssRNA cleavage). Applications: RNA knockdown (alternative to RNAi), RNA base editing (with ADAR-Cas13 fusion for A→I editing in RNA), RNA imaging, and diagnostics (SHERLOCK). Advantage over siRNA: programmable, no off-target genomic editing."
  },
  {
    id: 38,
    question: "Live-cell imaging with genetically encoded fluorescent reporters (GFP, mCherry) enables:",
    options: ["Post-translational modification mapping", "Real-time visualization of protein dynamics, localization, and interactions in living cells over time", "Sequencing of protein-coding genes in living cells", "Measuring gene expression from fixed tissue samples"],
    answer: 1,
    explanation: "Genetically encoded fluorescent proteins (GFP, YFP, mCherry, mNeonGreen) fused to proteins of interest enable live-cell microscopy. Applications: tracking protein localization and dynamics (FRAP — fluorescence recovery after photobleaching), detecting protein-protein interactions (FRET, BiFC), monitoring gene expression in real time (MS2/PP7 RNA labeling), and measuring concentrations in living cells (fluorescence correlation spectroscopy)."
  },
  {
    id: 39,
    question: "The concept of synthetic lethality in cancer therapy proposes that:",
    options: ["Two drugs are lethal when combined but not individually", "When two genes are each individually non-essential, loss of both is lethal — exploited by targeting gene B (e.g., PARP) when cancer cells already have loss of gene A (e.g., BRCA1/2)", "Drugs kill cancer cells by inducing DNA synthesis", "Oncogene inhibition is always synthetic lethal with DNA repair inhibition"],
    answer: 1,
    explanation: "Synthetic lethality: two genes are synthetically lethal when simultaneous loss of both is lethal, while loss of either alone is tolerated. BRCA1/2-deficient cancer cells rely on PARP-mediated DNA repair. PARP inhibition (olaparib) kills BRCA-deficient cells (which cannot perform HR) but spares normal cells (with intact BRCA/HR). This is the basis of olaparib/rucaparib/niraparib treatment for BRCA-mutant breast, ovarian, and prostate cancers."
  },
  {
    id: 40,
    question: "Genome-scale CRISPR screens (pooled library screens) are used to:",
    options: ["Edit every gene simultaneously in a single cell", "Identify genes required for a specific phenotype by systematically knocking out or activating each gene across a cell population and selecting for cells with altered phenotype", "Sequence the transcriptome at single-cell resolution", "Perform whole-genome sequencing of cancer samples"],
    answer: 1,
    explanation: "Pooled CRISPR screens: libraries of guide RNAs (>100,000) targeting all human genes are transduced at low MOI into cells. After selection (drug treatment, tumor implantation, FACS for a phenotype), deep sequencing quantifies guide RNA abundance. Depleted guides identify essential/resistance genes; enriched guides identify tumor suppressor or vulnerability genes. Major tool for cancer biology and drug target identification (e.g., Project Achilles, DepMap)."
  },

  // ===== COMPREHENSIVE APPLIED GENETICS (Q41–Q50) =====
  {
    id: 41,
    question: "Next-generation sequencing of tumors (somatic mutation profiling) is performed to:",
    options: ["Diagnose cancer by germline variant detection", "Identify somatic driver mutations, guide targeted therapy selection, and assess tumor mutational burden (TMB) and microsatellite instability (MSI) for immunotherapy", "Perform population frequency estimation", "Sequence normal tissue for biobanking"],
    answer: 1,
    explanation: "Tumor somatic profiling by NGS (comprehensive genomic profiling, e.g., FoundationOne, MSK-IMPACT): identifies actionable mutations in oncogenes (EGFR, KRAS, BRAF, PIK3CA, ALK fusions), tumor suppressor losses, copy number alterations, and signatures (TMB, MSI). Results guide targeted therapy (e.g., osimertinib for EGFR L858R lung cancer) and immunotherapy eligibility. Paired tumor-normal sequencing distinguishes somatic from germline variants."
  },
  {
    id: 42,
    question: "The concept of 'driver' versus 'passenger' mutations in cancer distinguishes:",
    options: ["Mutations in oncogenes versus tumor suppressors", "Mutations that confer a fitness advantage (drivers, causally selected) versus neutral mutations that accumulate along for the ride (passengers)", "Germline versus somatic mutations", "Early versus late mutations in cancer progression"],
    answer: 1,
    explanation: "Driver mutations: mutations that provide a competitive growth advantage, are positively selected, and causally contribute to cancer development (e.g., KRAS G12D, EGFR L858R, IDH1 R132H). Passenger mutations: neutral mutations accumulated during tumor evolution without selective advantage. Distinguishing drivers from passengers uses: recurrence across tumors, functional data, evolutionary conservation, dN/dS > 1 analysis, and computational tools (MutSigCV, OncodriveFML)."
  },
  {
    id: 43,
    question: "TCGA (The Cancer Genome Atlas) is:",
    options: ["A database of animal model cancer genetics", "A comprehensive multi-platform molecular profiling dataset of >11,000 samples from 33 cancer types, including WES, RNA-seq, methylation, and clinical data", "A single-gene cancer database", "A cancer protein structure database"],
    answer: 1,
    explanation: "TCGA (2006–2017, NCI/NHGRI) molecularly profiled >11,000 primary tumor samples across 33 cancer types using: whole exome sequencing (somatic mutations, CNV), RNA-seq (expression, fusions, splicing), DNA methylation arrays, miRNA-seq, and RPPA (protein). TCGA data are freely available (GDC portal) and have been the basis of thousands of publications defining cancer molecular subtypes and therapeutic vulnerabilities."
  },
  {
    id: 44,
    question: "Molecular epidemiology in infectious disease uses genetic data to:",
    options: ["Predict which patients will develop severe disease", "Trace transmission chains, identify outbreak sources, and characterize pathogen evolution using whole-genome sequencing of pathogens from cases", "Diagnose infections by serological methods", "Design antimicrobial drugs"],
    answer: 1,
    explanation: "Molecular epidemiology: whole genome sequencing (WGS) of pathogens from cases enables: outbreak cluster identification (closely related isolates = linked cases), super-spreader identification, transmission network reconstruction, phylogeographic spread analysis, and rapid detection of drug-resistant variants. SARS-CoV-2 genomic surveillance (GISAID database, Nextstrain) exemplified this at global scale during the COVID-19 pandemic."
  },
  {
    id: 45,
    question: "Newborn screening programs in India under NHM currently mandate screening for which conditions?",
    options: ["Only congenital heart disease by echocardiography", "Congenital hypothyroidism, sickle cell anemia/hemoglobinopathies, and G6PD deficiency are included in expanded NBS programs under NHM", "Only PKU and cystic fibrosis", "All metabolic disorders detectable by tandem mass spectrometry"],
    answer: 1,
    explanation: "India's NHM-supported newborn screening programs (varying by state) include: congenital hypothyroidism (TSH spot test, most widely implemented), hemoglobinopathies (sickle cell, thalassemia, particularly in high-prevalence states), and G6PD deficiency. Some states (Tamil Nadu, Maharashtra) have expanded panels. National comprehensive NBS for metabolic disorders by tandem MS is aspirational and being piloted."
  },
  {
    id: 46,
    question: "Sickle cell disease is most prevalent in which Indian states?",
    options: ["Kerala, Tamil Nadu, and Karnataka", "Odisha, Jharkhand, Chhattisgarh, Madhya Pradesh, Maharashtra (tribal belt), and Gujarat", "Uttar Pradesh, Bihar, and West Bengal", "Rajasthan, Punjab, and Haryana"],
    answer: 1,
    explanation: "Sickle cell disease (HbSS) has high prevalence (~1–30% HbS carrier frequency) among tribal (Adivasi) populations in India's central-eastern states: Odisha, Jharkhand, Chhattisgarh, Madhya Pradesh (MP), Maharashtra (Vidarbha), Gujarat (Saurashtra), and parts of Andhra Pradesh. The National Sickle Cell Anaemia Elimination Mission (2023) aims for elimination by 2047 through universal screening, counselling, and treatment."
  },
  {
    id: 47,
    question: "India's National Thalassemia Control Program aims to reduce thalassemia burden through:",
    options: ["Only treating existing thalassemia major patients with transfusion", "A combination of carrier screening, genetic counselling, prenatal diagnosis, prevention of at-risk marriages/pregnancies, and improving treatment", "Gene therapy for all thalassemia major patients", "International adoption programs"],
    answer: 1,
    explanation: "India has the world's highest thalassemia burden (~12,000 thalassemia major births/year). Prevention strategies: community-based carrier screening (especially Gujarat, Punjab, Maharashtra — 3–17% carrier rate), genetic counselling of carrier couples, offering prenatal diagnosis (CVS/amniocentesis + mutation analysis), and informing about reproductive choices. Combined with improved treatment (hydroxyurea, regular transfusion + chelation), these reduce morbidity."
  },
  {
    id: 48,
    question: "ICMR has developed which initiative to build genomic data infrastructure for the Indian population?",
    options: ["HapMap India", "IndiGen Programme and IGVDB (Indian Genomic Variant Database)", "Genomics India Initiative", "National DNA Biobank"],
    answer: 1,
    explanation: "ICMR-CSIR's IndiGen Programme (2019) whole-genome sequenced 1029 individuals representing diverse Indian populations (>10 ethnic groups). The resulting Indian Genomic Variant Database (IGVDB) characterizes allele frequencies of clinically relevant variants in the Indian population — essential for accurate interpretation of genetic variants in Indian patients. This addresses the underrepresentation of South Asians in global genomic databases (which are predominantly European)."
  },
  {
    id: 49,
    question: "The genetics of tuberculosis susceptibility in India is being studied because:",
    options: ["TB is exclusively a genetic disease in India", "Host genetic variants influence TB susceptibility (e.g., HLA alleles, SP110, IL12, TIRAP) — understanding these can aid in identifying high-risk individuals and designing host-directed therapies", "Only vaccinated individuals get TB", "Mycobacterium tuberculosis resistance is determined entirely by human genetics"],
    answer: 1,
    explanation: "Despite universal exposure, only ~10% of M. tuberculosis-infected individuals develop active TB, suggesting genetic susceptibility factors. GWAS studies have identified associations with: HLA-DRB1 (especially in HIV+TB), TNFRSF9, IL12B, TIRAP (adaptor in TLR signaling). Vitamin D receptor (VDR) polymorphisms affect 1,25(OH)2D3-mediated macrophage killing. India, with the highest global TB burden (27% of cases), benefits from understanding host genetics for risk stratification and targeted interventions."
  },
  {
    id: 50,
    question: "The pharmacogenomics of warfarin (anticoagulant) dosing is primarily influenced by variants in:",
    options: ["CYP2D6 and ABCB1 genes", "CYP2C9 (warfarin metabolism) and VKORC1 (warfarin target — vitamin K epoxide reductase)", "CYP3A4 and MDR1 genes", "HLA-B and CYP1A2 genes"],
    answer: 1,
    explanation: "Warfarin dose requirements vary >10-fold between individuals. Key pharmacogenomic determinants: CYP2C9 variants (*2, *3) reduce warfarin S-enantiomer metabolism → lower dose needed; VKORC1 -1639G>A promoter variant reduces target enzyme expression → lower dose needed. Together, CYP2C9 + VKORC1 genotypes + clinical factors explain ~50% of warfarin dose variability. FDA-approved pharmacogenomics-guided warfarin dosing algorithms (CPIC) reduce bleeding risk."
  },
]

export default questions
