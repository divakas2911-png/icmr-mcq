const questions = [
  // ===== MENDELIAN GENETICS (Q1–Q10) =====
  {
    id: 1,
    question: "In Mendel's law of segregation, alleles separate during:",
    options: ["Mitosis", "Meiosis I", "Fertilization", "DNA replication"],
    answer: 1,
    explanation: "Mendel's law of segregation states that the two alleles of a gene separate (segregate) during gamete formation, specifically during Meiosis I (first meiotic division), so each gamete receives only one allele."
  },
  {
    id: 2,
    question: "A cross between two heterozygous individuals (Aa × Aa) produces offspring in the ratio:",
    options: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
    answer: 1,
    explanation: "Aa × Aa produces AA : Aa : aa in a 1:2:1 genotypic ratio, which translates to a 3:1 phenotypic ratio (3 dominant : 1 recessive) when one allele is completely dominant over the other."
  },
  {
    id: 3,
    question: "Which of the following is an example of codominance?",
    options: ["ABO blood group system", "Height in humans", "Sickle cell trait", "Huntington's disease"],
    answer: 0,
    explanation: "In the ABO blood group system, both A and B antigens are expressed simultaneously in individuals with blood group AB — this is codominance. Each allele contributes equally to the phenotype without one masking the other."
  },
  {
    id: 4,
    question: "Mendel's law of independent assortment applies to genes that are:",
    options: ["On the same chromosome", "Linked", "On different chromosomes or far apart on same chromosome", "Allelic"],
    answer: 2,
    explanation: "The law of independent assortment states that alleles of different genes assort independently during gamete formation. This applies to genes on different (non-homologous) chromosomes or those far apart on the same chromosome, so they are not genetically linked."
  },
  {
    id: 5,
    question: "In a testcross, an individual with an unknown genotype is crossed with:",
    options: ["A homozygous dominant individual", "A heterozygous individual", "A homozygous recessive individual", "An individual of unknown genotype"],
    answer: 2,
    explanation: "A testcross involves crossing the individual with an unknown genotype with a homozygous recessive individual (aa). The ratio of offspring phenotypes reveals the genotype of the unknown parent."
  },
  {
    id: 6,
    question: "Incomplete dominance is best illustrated by which of the following crosses?",
    options: ["Red × White → All Red", "Red × White → All Pink", "Red × White → 1 Red : 1 White", "Red × White → 3 Red : 1 White"],
    answer: 1,
    explanation: "Incomplete dominance occurs when neither allele is completely dominant, resulting in a blended phenotype in heterozygotes. Red × White → All Pink is the classic example (e.g., in snapdragons), where the heterozygous F1 shows an intermediate pink phenotype."
  },
  {
    id: 7,
    question: "A man with blood group A (heterozygous) and a woman with blood group B (heterozygous) can have children with which blood groups?",
    options: ["A and B only", "A, B, and O only", "A, B, AB, and O", "AB and O only"],
    answer: 2,
    explanation: "Man (I^A i) × Woman (I^B i): offspring can be I^A I^B (AB), I^A i (A), I^B i (B), or ii (O). So all four blood groups A, B, AB, and O are possible."
  },
  {
    id: 8,
    question: "Epistasis refers to:",
    options: ["The interaction between alleles at the same locus", "The interaction between alleles at different loci where one masks the other", "The expression of both alleles in heterozygotes", "The independent assortment of genes"],
    answer: 1,
    explanation: "Epistasis is a gene interaction where one gene (epistatic gene) masks or suppresses the expression of another gene at a different locus (hypostatic gene). This is an interaction between non-allelic genes."
  },
  {
    id: 9,
    question: "In a dihybrid cross (AaBb × AaBb), the expected phenotypic ratio is:",
    options: ["9:3:3:1", "3:1", "1:2:1", "1:1:1:1"],
    answer: 0,
    explanation: "In a dihybrid cross with two independently assorting genes, each showing complete dominance, the expected phenotypic ratio is 9:3:3:1 (9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb)."
  },
  {
    id: 10,
    question: "Penetrance is defined as:",
    options: ["The degree to which a genotype is expressed phenotypically", "The proportion of individuals with a given genotype who show the expected phenotype", "The number of alleles at a locus", "The frequency of a gene in a population"],
    answer: 1,
    explanation: "Penetrance is the proportion of individuals carrying a particular genotype who exhibit the associated phenotype. For example, if 80% of individuals with a dominant allele show the trait, penetrance is 80%."
  },

  // ===== MOLECULAR GENETICS (Q11–Q20) =====
  {
    id: 11,
    question: "The central dogma of molecular biology describes the flow of genetic information as:",
    options: ["RNA → DNA → Protein", "DNA → RNA → Protein", "Protein → RNA → DNA", "DNA → Protein → RNA"],
    answer: 1,
    explanation: "The central dogma, proposed by Francis Crick, states that genetic information flows from DNA → RNA (transcription) → Protein (translation). RNA can also be reverse transcribed to DNA in retroviruses."
  },
  {
    id: 12,
    question: "The Chargaff's rules state that in double-stranded DNA:",
    options: ["A = C and G = T", "A = G and C = T", "A = T and G = C", "A + T = G + C"],
    answer: 2,
    explanation: "Chargaff's rules: in double-stranded DNA, the amount of adenine equals thymine (A = T) and guanine equals cytosine (G = C). This reflects the complementary base pairing: A-T (2 hydrogen bonds) and G-C (3 hydrogen bonds)."
  },
  {
    id: 13,
    question: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
    options: ["DNA polymerase", "Ligase", "Helicase", "Primase"],
    answer: 2,
    explanation: "Helicase unwinds and separates the two strands of the DNA double helix at the replication fork by breaking the hydrogen bonds between complementary bases. This creates the template strands for DNA polymerase."
  },
  {
    id: 14,
    question: "The Okazaki fragments are synthesized on which strand during DNA replication?",
    options: ["Leading strand", "Lagging strand", "Both strands", "Template strand only"],
    answer: 1,
    explanation: "DNA polymerase can only synthesize in the 5' to 3' direction. On the lagging strand (template read 5'→3'), synthesis proceeds away from the replication fork in short discontinuous fragments called Okazaki fragments, which are later joined by DNA ligase."
  },
  {
    id: 15,
    question: "A codon is defined as:",
    options: ["A single nucleotide that codes for an amino acid", "A triplet of nucleotides in mRNA that codes for an amino acid", "A sequence of nucleotides in tRNA", "The entire coding sequence of a gene"],
    answer: 1,
    explanation: "A codon is a triplet of three consecutive nucleotides in mRNA that specifies a particular amino acid (or a start/stop signal). There are 64 possible codons (4³) coding for 20 amino acids, making the genetic code degenerate."
  },
  {
    id: 16,
    question: "Which type of mutation results in premature termination of protein synthesis?",
    options: ["Missense mutation", "Silent mutation", "Nonsense mutation", "Frameshift mutation"],
    answer: 2,
    explanation: "A nonsense mutation converts an amino acid codon into a stop codon (UAA, UAG, or UGA), causing premature termination of translation and producing a truncated, non-functional protein."
  },
  {
    id: 17,
    question: "The PCR (Polymerase Chain Reaction) technique was developed by:",
    options: ["Frederick Sanger", "Kary Mullis", "James Watson", "Francis Crick"],
    answer: 1,
    explanation: "PCR was invented by Kary Mullis in 1983, for which he received the Nobel Prize in Chemistry in 1993. PCR amplifies specific DNA sequences exponentially using thermostable DNA polymerase (Taq polymerase), primers, and thermal cycling."
  },
  {
    id: 18,
    question: "Restriction enzymes (restriction endonucleases) cut DNA at:",
    options: ["Random positions", "Specific palindromic sequences", "Single-stranded regions", "Promoter sequences only"],
    answer: 1,
    explanation: "Restriction enzymes recognize and cleave DNA at specific palindromic sequences (sequences that read the same on both strands in the 5'→3' direction). For example, EcoRI recognizes GAATTC and cuts between G and A on each strand."
  },
  {
    id: 19,
    question: "Which DNA repair mechanism corrects mismatched bases introduced during DNA replication?",
    options: ["Nucleotide excision repair", "Base excision repair", "Mismatch repair", "Direct reversal"],
    answer: 2,
    explanation: "Mismatch repair (MMR) corrects base mismatches and small insertions/deletions that escape proofreading during DNA replication. The MMR system identifies the newly synthesized strand and corrects the mismatch. Defects in MMR genes (MLH1, MSH2) cause hereditary non-polyposis colorectal cancer (Lynch syndrome)."
  },
  {
    id: 20,
    question: "Southern blotting is used to detect:",
    options: ["Specific RNA sequences", "Specific DNA sequences", "Specific proteins", "Specific carbohydrates"],
    answer: 1,
    explanation: "Southern blotting (developed by Edwin Southern in 1975) detects specific DNA sequences. DNA is separated by gel electrophoresis, transferred to a membrane, and hybridized with a labeled probe. Northern blotting detects RNA; Western blotting detects proteins."
  },

  // ===== CHROMOSOMAL GENETICS (Q21–Q30) =====
  {
    id: 21,
    question: "Down syndrome is caused by:",
    options: ["Monosomy of chromosome 21", "Trisomy of chromosome 21", "Deletion of chromosome 21", "Translocation of chromosome 18"],
    answer: 1,
    explanation: "Down syndrome (trisomy 21) is caused by having three copies of chromosome 21 instead of two. It is the most common chromosomal aneuploidy and occurs due to non-disjunction during meiosis. The risk increases with advanced maternal age."
  },
  {
    id: 22,
    question: "Turner syndrome (45, X) is characterized by:",
    options: ["Presence of an extra X chromosome in females", "Absence of one X chromosome in females", "Trisomy of the X chromosome", "Deletion of the Y chromosome in males"],
    answer: 1,
    explanation: "Turner syndrome occurs in females with only one X chromosome (45, X or 45, X0), resulting from non-disjunction. Features include short stature, gonadal dysgenesis, webbed neck, coarctation of aorta, and primary amenorrhea."
  },
  {
    id: 23,
    question: "Klinefelter syndrome (47, XXY) is characterized by all EXCEPT:",
    options: ["Male phenotype", "Hypogonadism", "Gynecomastia", "Normal fertility"],
    answer: 3,
    explanation: "Klinefelter syndrome (47, XXY) males have hypogonadism (small testes), infertility (azoospermia), gynecomastia, tall stature, and learning difficulties. Fertility is affected, not normal — patients are typically infertile due to testicular atrophy."
  },
  {
    id: 24,
    question: "The Philadelphia chromosome, associated with chronic myelogenous leukemia (CML), results from:",
    options: ["Trisomy 22", "Deletion of chromosome 22", "Translocation t(9;22)", "Inversion of chromosome 9"],
    answer: 2,
    explanation: "The Philadelphia chromosome results from a reciprocal translocation between chromosomes 9 and 22 [t(9;22)(q34;q11)]. This creates the BCR-ABL fusion oncogene, which encodes a constitutively active tyrosine kinase, driving uncontrolled cell proliferation in CML."
  },
  {
    id: 25,
    question: "Which of the following is an X-linked recessive disorder?",
    options: ["Marfan syndrome", "Huntington's disease", "Hemophilia A", "Neurofibromatosis type 1"],
    answer: 2,
    explanation: "Hemophilia A (factor VIII deficiency) is an X-linked recessive disorder. It primarily affects males (who have only one X chromosome). Females are usually carriers. Marfan syndrome, Huntington's disease, and neurofibromatosis type 1 are autosomal dominant."
  },
  {
    id: 26,
    question: "Lyonization (X-inactivation) in females results in:",
    options: ["Expression of both X chromosomes in all cells", "Random inactivation of one X chromosome in each somatic cell", "Inactivation of the paternal X chromosome only", "Complete inactivation of both X chromosomes"],
    answer: 1,
    explanation: "Lyonization (Lyon hypothesis) states that in female somatic cells, one X chromosome is randomly inactivated early in embryonic development. This inactivated X becomes the Barr body. The result is that females are mosaics for X-linked gene expression."
  },
  {
    id: 27,
    question: "Genomic imprinting refers to:",
    options: ["The process of DNA methylation during replication", "Differential gene expression depending on the parent of origin", "The silencing of both alleles of a gene", "Genetic recombination during meiosis"],
    answer: 1,
    explanation: "Genomic imprinting is an epigenetic phenomenon where gene expression depends on whether the gene was inherited from the mother or father. Examples: Prader-Willi syndrome (loss of paternal 15q11-q13) and Angelman syndrome (loss of maternal 15q11-q13)."
  },
  {
    id: 28,
    question: "A pericentric inversion includes:",
    options: ["Only one arm of the chromosome", "The centromere within the inverted segment", "Only the short arm of the chromosome", "A terminal segment of the chromosome"],
    answer: 1,
    explanation: "A pericentric inversion includes the centromere within the inverted segment (involves both arms of the chromosome). A paracentric inversion involves only one arm and does not include the centromere."
  },
  {
    id: 29,
    question: "The normal human karyotype is:",
    options: ["44 autosomes + XX or XY", "46 chromosomes total (22 pairs of autosomes + 1 pair of sex chromosomes)", "48 chromosomes", "23 chromosomes"],
    answer: 1,
    explanation: "Normal human karyotype: 46 chromosomes total — 22 pairs of autosomes (44 autosomes) + 1 pair of sex chromosomes (XX in females, XY in males). Gametes have 23 chromosomes (haploid)."
  },
  {
    id: 30,
    question: "Fragile X syndrome is caused by:",
    options: ["Deletion of the FMR1 gene", "CGG trinucleotide repeat expansion in the FMR1 gene", "Point mutation in the FMR1 gene", "Trisomy of the X chromosome"],
    answer: 1,
    explanation: "Fragile X syndrome results from expansion of a CGG trinucleotide repeat in the 5' UTR of the FMR1 gene on the X chromosome. Normal: <55 repeats; Premutation: 55–200; Full mutation: >200, causing methylation and silencing of FMR1, leading to intellectual disability."
  },

  // ===== POPULATION GENETICS (Q31–Q38) =====
  {
    id: 31,
    question: "The Hardy-Weinberg equilibrium assumes all of the following EXCEPT:",
    options: ["Random mating", "No mutation", "Large population size", "Natural selection favoring certain genotypes"],
    answer: 3,
    explanation: "Hardy-Weinberg equilibrium requires: random mating, no mutation, no migration, large population size, and no natural selection. If natural selection favors certain genotypes, allele frequencies will change and the population will NOT be in equilibrium."
  },
  {
    id: 32,
    question: "In a population where the frequency of allele 'a' is q = 0.3, the frequency of homozygous recessive individuals (aa) under Hardy-Weinberg equilibrium is:",
    options: ["0.3", "0.09", "0.42", "0.49"],
    answer: 1,
    explanation: "Under Hardy-Weinberg equilibrium, the frequency of homozygous recessive (aa) = q² = (0.3)² = 0.09. The frequency of allele A (p) = 1 - 0.3 = 0.7. So genotype frequencies: AA = p² = 0.49, Aa = 2pq = 0.42, aa = q² = 0.09."
  },
  {
    id: 33,
    question: "Genetic drift has the greatest effect on allele frequencies in:",
    options: ["Large populations", "Small isolated populations", "Populations with high gene flow", "Populations with balanced selection"],
    answer: 1,
    explanation: "Genetic drift (random changes in allele frequencies due to chance) has the greatest effect in small populations. In large populations, chance fluctuations average out. In small populations, alleles can become fixed or lost by chance alone, regardless of selective advantage."
  },
  {
    id: 34,
    question: "The founder effect is a form of genetic drift that occurs when:",
    options: ["A large population suddenly decreases due to a catastrophic event", "A small group separates from a larger population to establish a new colony", "Two populations with different allele frequencies interbreed", "A population undergoes strong directional selection"],
    answer: 1,
    explanation: "The founder effect occurs when a small group of individuals (founders) establishes a new population, taking only a subset of the original genetic variation. This can lead to high frequencies of certain alleles (including deleterious ones) in the new population."
  },
  {
    id: 35,
    question: "Heterozygote advantage (overdominance) is best illustrated by:",
    options: ["Cystic fibrosis in Caucasians", "Sickle cell trait and malaria resistance", "Huntington's disease", "PKU in northern Europeans"],
    answer: 1,
    explanation: "Sickle cell trait (HbAS heterozygotes) provides protection against severe Plasmodium falciparum malaria, giving heterozygotes higher fitness than either homozygote in malaria-endemic regions. This heterozygote advantage maintains both alleles at high frequency (balanced polymorphism)."
  },
  {
    id: 36,
    question: "Gene flow between populations tends to:",
    options: ["Increase genetic differences between populations", "Decrease genetic differences between populations", "Have no effect on allele frequencies", "Increase the rate of mutation"],
    answer: 1,
    explanation: "Gene flow (migration of individuals between populations followed by interbreeding) introduces new alleles and tends to homogenize allele frequencies between populations, thereby decreasing genetic differentiation."
  },
  {
    id: 37,
    question: "FST (fixation index) is a measure of:",
    options: ["Mutation rate within a population", "Genetic differentiation between populations", "Natural selection intensity", "Heterozygosity within a population"],
    answer: 1,
    explanation: "FST (fixation index or F-statistic) measures the degree of genetic differentiation between subpopulations relative to total population. FST = 0 means no differentiation (identical allele frequencies); FST = 1 means complete differentiation (fixed for different alleles)."
  },
  {
    id: 38,
    question: "Which mating system increases the frequency of homozygotes in a population?",
    options: ["Random mating (panmixia)", "Assortative mating", "Inbreeding", "Outbreeding"],
    answer: 2,
    explanation: "Inbreeding (mating between related individuals) increases the probability that offspring are homozygous at any locus (increased homozygosity). This does not change allele frequencies but changes genotype frequencies, increasing homozygotes and decreasing heterozygotes."
  },

  // ===== HUMAN GENETIC DISORDERS & EPIGENETICS (Q39–50) =====
  {
    id: 39,
    question: "Cystic fibrosis is caused by mutations in which gene?",
    options: ["BRCA1", "CFTR", "APC", "TP53"],
    answer: 1,
    explanation: "Cystic fibrosis is caused by mutations in the CFTR (Cystic Fibrosis Transmembrane conductance Regulator) gene on chromosome 7. The most common mutation is ΔF508 (deletion of phenylalanine at position 508). CFTR encodes a chloride ion channel."
  },
  {
    id: 40,
    question: "Anticipation in genetics refers to:",
    options: ["The earlier onset and increasing severity of a disease in successive generations", "The delayed expression of a genetic disease", "The skipping of a generation in inheritance", "The variable expressivity of a gene"],
    answer: 0,
    explanation: "Anticipation is a phenomenon where a genetic disease appears earlier and with greater severity in successive generations. It is typically associated with trinucleotide repeat expansions (e.g., Huntington's disease, myotonic dystrophy, fragile X). The number of repeats tends to increase with each generation."
  },
  {
    id: 41,
    question: "Phenylketonuria (PKU) is due to deficiency of which enzyme?",
    options: ["Homogentisate oxidase", "Phenylalanine hydroxylase", "Tyrosinase", "Fumarylacetoacetase"],
    answer: 1,
    explanation: "PKU is caused by deficiency of phenylalanine hydroxylase (PAH), which converts phenylalanine to tyrosine. This leads to accumulation of phenylalanine and its metabolites, causing intellectual disability if untreated. It is autosomal recessive and diagnosed by newborn screening."
  },
  {
    id: 42,
    question: "Which of the following is an autosomal dominant disorder?",
    options: ["Cystic fibrosis", "Phenylketonuria", "Tay-Sachs disease", "Marfan syndrome"],
    answer: 3,
    explanation: "Marfan syndrome (FBN1 gene mutation) is autosomal dominant — one mutant allele is sufficient to cause the disease. Cystic fibrosis, PKU, and Tay-Sachs are autosomal recessive disorders requiring two mutant alleles."
  },
  {
    id: 43,
    question: "DNA methylation in gene promoter regions generally leads to:",
    options: ["Increased gene expression", "Decreased gene expression (silencing)", "No change in gene expression", "Increased mutation rate"],
    answer: 1,
    explanation: "Methylation of CpG dinucleotides in gene promoter regions is an epigenetic modification associated with transcriptional silencing (gene repression). Methylated DNA recruits proteins that compact chromatin, making it inaccessible to transcription factors."
  },
  {
    id: 44,
    question: "Histone acetylation is generally associated with:",
    options: ["Chromatin condensation and gene silencing", "Chromatin relaxation and gene activation", "DNA replication", "Mismatch repair"],
    answer: 1,
    explanation: "Histone acetylation by histone acetyltransferases (HATs) neutralizes the positive charge on histones, reducing their interaction with negatively charged DNA. This relaxes chromatin (euchromatin) and allows transcription factors to access the DNA, activating gene expression."
  },
  {
    id: 45,
    question: "BRCA1 and BRCA2 mutations are associated with increased risk of:",
    options: ["Colorectal cancer only", "Breast and ovarian cancer", "Lung cancer", "Leukemia"],
    answer: 1,
    explanation: "Germline mutations in BRCA1 (chromosome 17) and BRCA2 (chromosome 13) are associated with greatly increased lifetime risk of breast cancer (up to 70%) and ovarian cancer (up to 44%). They encode proteins involved in homologous recombination DNA repair."
  },
  {
    id: 46,
    question: "Linkage disequilibrium (LD) refers to:",
    options: ["The equal distribution of alleles across populations", "Non-random association of alleles at two or more loci", "The random segregation of alleles during meiosis", "The equilibrium state of a population under Hardy-Weinberg conditions"],
    answer: 1,
    explanation: "Linkage disequilibrium is the non-random association of alleles at two or more loci in a population — certain allele combinations occur more (or less) frequently than expected by chance. LD decreases over generations due to recombination and is used in genome-wide association studies (GWAS)."
  },
  {
    id: 47,
    question: "A genome-wide association study (GWAS) is used to:",
    options: ["Sequence entire genomes of individuals", "Identify associations between genetic variants (SNPs) and complex traits or diseases", "Determine protein structures from gene sequences", "Measure gene expression levels across the genome"],
    answer: 1,
    explanation: "GWAS identifies associations between millions of single nucleotide polymorphisms (SNPs) across the genome and complex traits or diseases in large populations. It has identified thousands of genetic variants associated with common diseases like diabetes, hypertension, and schizophrenia."
  },
  {
    id: 48,
    question: "Mitochondrial DNA (mtDNA) is inherited:",
    options: ["Equally from both parents", "Only from the father", "Only from the mother (maternal inheritance)", "Randomly from either parent"],
    answer: 2,
    explanation: "Mitochondrial DNA is maternally inherited because the egg contributes virtually all the cytoplasm (and mitochondria) to the zygote, while sperm mitochondria are usually eliminated. Mitochondrial diseases show maternal inheritance — all children of an affected mother may be affected."
  },
  {
    id: 49,
    question: "CRISPR-Cas9 gene editing technology works by:",
    options: ["Introducing random mutations throughout the genome", "Using a guide RNA to direct the Cas9 nuclease to a specific DNA sequence for cutting", "Inserting large segments of DNA into random locations", "Silencing genes through RNA interference"],
    answer: 1,
    explanation: "CRISPR-Cas9 uses a guide RNA (gRNA) complementary to the target DNA sequence to direct the Cas9 endonuclease to the precise genomic location. Cas9 creates a double-strand break, which can be repaired by non-homologous end joining (NHEJ, causing disruption) or homology-directed repair (HDR, for precise editing)."
  },
  {
    id: 50,
    question: "Uniparental disomy (UPD) occurs when:",
    options: ["A child inherits one chromosome from each parent", "A child inherits both copies of a chromosome from the same parent", "A parent contributes no chromosomes to the offspring", "Both alleles at a locus are from different chromosomes"],
    answer: 1,
    explanation: "Uniparental disomy (UPD) occurs when both copies of a chromosome (or chromosomal segment) are inherited from one parent only, with no contribution from the other parent. UPD can cause disease when imprinted regions are involved — e.g., maternal UPD15 causes Prader-Willi syndrome; paternal UPD15 causes Angelman syndrome."
  },
]

export default questions
