const questions = [
  {
    id: 1,
    question: "The centromere of a chromosome is essential for:",
    options: ["DNA replication initiation", "Proper chromosome segregation during mitosis and meiosis via kinetochore attachment to spindle fibers", "Telomere maintenance and chromosome stability", "Transcription of centromeric repeat sequences"],
    answer: 1,
    explanation: "The centromere is the chromosomal region that assembles the kinetochore, a protein complex that attaches to spindle microtubules. This attachment is essential for proper chromosome segregation. Chromosomes without functional centromeres (acentric) fail to segregate and are lost. Centromeric DNA is typically composed of satellite (repetitive) sequences like alpha-satellite DNA in humans."
  },
  {
    id: 2,
    question: "Telomeres protect chromosome ends by:",
    options: ["Encoding essential genes that must be present at chromosomal termini", "Forming T-loop structures and binding shelterin proteins that prevent end-joining and exonuclease degradation", "Anchoring chromosomes to the nuclear envelope for stability", "Serving as origins of replication for terminal chromosome regions"],
    answer: 1,
    explanation: "Telomeres (TTAGGG repeats in humans) protect chromosome ends from being recognized as double-strand breaks. They form T-loops (the 3' single-stranded overhang loops back and invades the double-stranded region) and associate with shelterin complex (TRF1, TRF2, POT1, RAP1, TIN2, TPP1). Without telomere protection, chromosomes undergo end-to-end fusions and degradation."
  },
  {
    id: 3,
    question: "Constitutive heterochromatin differs from facultative heterochromatin in that:",
    options: ["Constitutive heterochromatin is always condensed and contains mostly repetitive DNA; facultative heterochromatin can be either active or condensed depending on developmental context", "Constitutive heterochromatin contains active genes; facultative heterochromatin is permanently silent", "Constitutive heterochromatin is found only at telomeres; facultative heterochromatin is at centromeres", "They are identical in composition but differ in chromosomal location"],
    answer: 0,
    explanation: "Constitutive heterochromatin (e.g., pericentromeric regions, satellite DNA) is permanently condensed and transcriptionally silent across all cell types; it contains mostly repetitive, non-coding sequences. Facultative heterochromatin (e.g., inactive X chromosome, imprinted regions) can change condensation state depending on developmental stage or cell type; it can contain genes that are silenced in specific contexts."
  },
  {
    id: 4,
    question: "A standard G-banding karyotype analysis detects chromosomal abnormalities of what minimum size?",
    options: ["1-5 kb", "50-100 kb", "5-10 Mb", "50-100 Mb"],
    answer: 2,
    explanation: "G-banding (Giemsa staining) has a resolution of approximately 5-10 Mb, depending on the quality of the preparation and chromosome spread. Each chromosome band visible under the microscope represents 5-10 Mb of DNA. Smaller rearrangements (microdeletions, microduplications) require higher-resolution techniques like FISH, chromosomal microarray, or sequencing."
  },
  {
    id: 5,
    question: "Fluorescence in situ hybridization (FISH) with a locus-specific probe for the BCR-ABL1 fusion gene in chronic myeloid leukemia would show:",
    options: ["Loss of one signal on chromosome 22", "Two separate signals (one ABL1 on chr9, one BCR on chr22) fused into one or two fusion signals", "Amplification of BCR signal on chromosome 22", "Deletion of the entire chromosome 22"],
    answer: 1,
    explanation: "In CML, t(9;22)(q34;q11) creates the Philadelphia chromosome. Dual-fusion FISH using BCR (green) and ABL1 (red) probes shows: normal cells have 2 green + 2 red; CML cells show 1 green + 1 red + 2 fusion signals (one on der22/Ph chromosome, one on der9). This is the gold standard for confirming BCR-ABL1 rearrangement."
  },
  {
    id: 6,
    question: "Comparative genomic hybridization (CGH) arrays detect:",
    options: ["Balanced chromosomal translocations", "Copy number variations (deletions and duplications) throughout the genome", "Single nucleotide polymorphisms (SNPs)", "Chromosomal inversions without copy number change"],
    answer: 1,
    explanation: "Array CGH detects copy number variations (CNVs) — gains (duplications, amplifications) and losses (deletions) of DNA. Patient and reference DNA are differentially labeled and co-hybridized to an array of probes. It cannot detect balanced rearrangements (translocations, inversions) because copy number is unchanged. Resolution is much higher than conventional karyotyping (as small as 1 kb with high-density arrays)."
  },
  {
    id: 7,
    question: "A paracentric inversion differs from a pericentric inversion in that:",
    options: ["Paracentric inversions involve the centromere; pericentric inversions do not", "Paracentric inversions do not include the centromere; pericentric inversions include the centromere", "Paracentric inversions occur on metacentric chromosomes; pericentric on acrocentric chromosomes", "They are detected by different laboratory methods"],
    answer: 1,
    explanation: "Paracentric inversion: both breakpoints are on the same chromosome arm (centromere NOT included in the inverted segment). Pericentric inversion: breakpoints are on different arms (centromere IS included in the inverted segment). Pericentric inversions can alter chromosome arm ratios and be detected by karyotype. Inversions in carriers produce unbalanced offspring only if crossing over occurs within the inverted segment."
  },
  {
    id: 8,
    question: "A Robertsonian translocation most commonly involves which chromosomes?",
    options: ["Large metacentric chromosomes (1, 2, 3)", "Acrocentric chromosomes (13, 14, 15, 21, 22) that fuse at their centromeres", "The sex chromosomes (X and Y)", "Any two chromosomes through reciprocal exchange"],
    answer: 1,
    explanation: "Robertsonian translocations involve fusion of the long arms of two acrocentric chromosomes (13, 14, 15, 21, 22), with loss of the short arms (which contain only rRNA genes, present in multiple copies). The carrier has 45 chromosomes but near-normal phenotype. The most clinically important is rob(14;21), which carriers can transmit an unbalanced 46 chromosomes (trisomy 21/Down syndrome)."
  },
  {
    id: 9,
    question: "A carrier of a balanced reciprocal translocation between chromosomes 3 and 7 has a normal phenotype. The risk of having chromosomally unbalanced offspring is due to:",
    options: ["Nondisjunction of the translocated chromosomes during meiosis I", "Alternate, adjacent-1, and adjacent-2 segregation patterns at meiosis I producing different gamete types", "Imbalanced X-inactivation affecting gene dosage", "Errors in DNA repair at the translocation breakpoints"],
    answer: 1,
    explanation: "During meiosis in a balanced translocation carrier, the four chromosomes (normal 3, normal 7, der3, der7) form a quadrivalent. Three segregation modes: (1) Alternate segregation — normal + balanced (offspring with normal phenotype, ~50% of viable offspring); (2) Adjacent-1 — unbalanced gametes with partial trisomy/monosomy; (3) Adjacent-2 — unbalanced gametes. Adjacent-1 and adjacent-2 produce chromosomally unbalanced, often abnormal offspring."
  },
  {
    id: 10,
    question: "The Philadelphia chromosome, found in >95% of chronic myeloid leukemia (CML) cases, results from:",
    options: ["Deletion of chromosome 22q11", "Reciprocal translocation t(9;22)(q34;q11) creating BCR-ABL1 fusion", "Trisomy of chromosome 22", "Inversion of chromosome 9 involving ABL1"],
    answer: 1,
    explanation: "The Philadelphia chromosome is a derivative chromosome 22 resulting from t(9;22)(q34;q11.2). This creates the BCR-ABL1 fusion gene on der(22), encoding a constitutively active tyrosine kinase that drives CML. Imatinib (Gleevec) specifically inhibits BCR-ABL1 kinase and revolutionized CML treatment. It was the first recurrent chromosomal translocation associated with a specific malignancy."
  },
  {
    id: 11,
    question: "Chromosomal nondisjunction during meiosis I versus meiosis II can be distinguished by:",
    options: ["The type of chromosome affected (sex vs. autosome)", "Whether the resulting trisomic offspring received two identical copies (from MII nondisjunction) or two homologous but non-identical copies (from MI nondisjunction) of the chromosome", "The age of the mother at conception", "The specific chromosome number in the aneuploid offspring"],
    answer: 1,
    explanation: "MI nondisjunction: both homologs go to same cell, producing trisomic offspring with two NON-IDENTICAL copies (both homologs present — detectable with polymorphic markers showing heterodisomy). MII nondisjunction: sister chromatids fail to separate, producing two IDENTICAL copies of one chromatid (isodisomy at the pericentromeric region). This distinction is important in clinical genetics for understanding uniparental disomy origin."
  },
  {
    id: 12,
    question: "Turner syndrome (45,X) is most commonly due to:",
    options: ["Deletion of the entire X chromosome", "Nondisjunction, with the lost sex chromosome most often being of paternal origin", "Translocation of X-linked genes to an autosome", "Lyonization (X-inactivation) of both X chromosomes"],
    answer: 1,
    explanation: "45,X (Turner syndrome) occurs in ~1/2500 live-born females. About 80% result from nondisjunction or anaphase lag, with the missing chromosome most often the paternal sex chromosome (paternal origin, meaning it's the paternal X or Y that is lost). 45,X fetuses have very high lethality (~98% of 45,X conceptions miscarry). Clinically: short stature, primary amenorrhea, webbed neck, streak gonads."
  },
  {
    id: 13,
    question: "Spectral karyotyping (SKY) and multicolor FISH (M-FISH) differ from conventional FISH in that:",
    options: ["They use radioactive probes instead of fluorescent probes", "They paint each entire chromosome in a unique color, allowing identification of all chromosomes and complex rearrangements simultaneously", "They only detect deletions and not translocations", "They require fresh (unfixed) tissue and cannot be used on paraffin sections"],
    answer: 1,
    explanation: "SKY and M-FISH use combinatorial labeling with multiple fluorophores to paint each of the 24 human chromosomes a unique color. This allows simultaneous identification of all chromosomes and detection of complex rearrangements (translocations, insertions, marker chromosomes) that may be missed by conventional FISH or karyotyping. Particularly useful in cancer cytogenetics with complex karyotypes."
  },
  {
    id: 14,
    question: "A ring chromosome forms when:",
    options: ["Two chromosomes fuse end-to-end creating a circular structure", "Both telomeres of a single chromosome are lost, and the resulting sticky ends fuse, forming a circular chromosome", "A chromosome undergoes pericentric inversion forming a ring shape", "Multiple small chromosomes fuse to create a ring marker chromosome"],
    answer: 1,
    explanation: "Ring chromosomes form when both ends of a single chromosome lose their telomeres (through terminal deletions), and the sticky ends rejoin forming a circular (ring) chromosome. Ring chromosomes are mitotically unstable (tendency to form sister chromatid exchanges and interlocking rings), leading to size variability and mosaicism. Clinical features depend on which genes are lost at the breakpoints."
  },
  {
    id: 15,
    question: "Isochromosome formation results in:",
    options: ["One chromosome with two long arms (duplicated long arm) and loss of the short arm, creating a metacentric chromosome with two identical arms", "A chromosome composed of one arm from each of two different chromosomes", "A chromosome with inverted repeats at both ends", "Loss of one entire chromosome arm"],
    answer: 0,
    explanation: "Isochromosomes form when a chromosome divides transversely rather than longitudinally during cell division, or through U-type exchange. The most common clinically: i(17q) — isochromosome 17q with two long arms and no short arm. This causes partial trisomy 17q and partial monosomy 17p, seen in medulloblastoma, isochromosome Xq [i(X)(q10)] in Turner syndrome mosaics."
  },
  {
    id: 16,
    question: "In chromosomal microarray analysis (CMA), SNP arrays offer an advantage over CGH arrays because they can detect:",
    options: ["Smaller deletions and duplications than CGH arrays", "Balanced chromosomal rearrangements", "Copy-neutral loss of heterozygosity (CN-LOH) and uniparental disomy (UPD)", "All chromosomal abnormalities with 100% sensitivity"],
    answer: 2,
    explanation: "SNP arrays probe both copy number AND allele state at each locus. This uniquely allows detection of copy-neutral loss of heterozygosity (CN-LOH), which occurs in uniparental disomy (UPD) and acquired somatic LOH in cancer. CGH arrays measure only copy number ratios and miss CN-LOH. SNP arrays also provide zygosity information useful for diagnosing imprinting disorders."
  },
  {
    id: 17,
    question: "The 22q11.2 deletion syndrome (DiGeorge/velocardiofacial syndrome) is best diagnosed by:",
    options: ["Standard G-band karyotyping (850 band level)", "FISH with a 22q11.2 locus-specific probe or chromosomal microarray", "Southern blotting for the TBX1 gene", "Methylation analysis of chromosome 22"],
    answer: 1,
    explanation: "22q11.2 deletion (~3 Mb, sometimes 1.5 Mb) is the most common microdeletion syndrome (1/4000 live births). Standard karyotyping usually misses it (too small). FISH with a 22q11.2 probe (typically showing deletion of TUPLE1/HIRA region) or chromosomal microarray are diagnostic. Features: conotruncal heart defects, palatal anomalies, hypocalcemia, immune deficiency (thymic hypoplasia), learning disabilities."
  },
  {
    id: 18,
    question: "Somatic mosaicism occurs when:",
    options: ["A chromosomal mutation occurs post-zygotically (after fertilization) in one cell, and its descendants form a clone of cells with the mutation", "Different tissues in an organism have the same genotype but different gene expression", "Two genetically distinct organisms are joined (e.g., dizygotic twins sharing placenta)", "Germline mosaicism in a parent transmits a mutation to offspring"],
    answer: 0,
    explanation: "Somatic mosaicism arises from a mutation occurring in a somatic cell after fertilization. The individual has two or more genetically distinct cell populations. Phenotypic severity depends on the proportion of mutant cells and when during development the mutation occurred. Examples: McCune-Albright syndrome (GNAS mosaicism), ring chromosome mosaicism, mosaic Down syndrome (trisomy 21/normal mosaic)."
  },
  {
    id: 19,
    question: "The Barr body observed in somatic cell nuclei of normal females represents:",
    options: ["The active X chromosome, which is condensed for efficient transcription", "The inactive X chromosome, which remains condensed as facultative heterochromatin throughout interphase", "A sex-specific chromatin domain on autosomes", "Condensed satellite DNA from the Y chromosome"],
    answer: 1,
    explanation: "Barr bodies (sex chromatin bodies) are the condensed, inactive X chromosomes visible in interphase nuclei. The number of Barr bodies = (number of X chromosomes - 1). Normal females (46,XX): 1 Barr body. 47,XXY (Klinefelter): 1 Barr body. 47,XXX (Triple X): 2 Barr bodies. Normal males (46,XY): 0 Barr bodies. The inactive X is replicated late in S phase."
  },
  {
    id: 20,
    question: "XIST RNA (X-inactive specific transcript) functions in X-inactivation by:",
    options: ["Encoding a transcription factor that activates genes on the active X", "Coating the inactive X chromosome in cis, recruiting chromatin-modifying complexes that establish and maintain silencing", "Methylating CpG islands on both X chromosomes", "Producing a non-coding RNA that degrades mRNAs from the inactive X"],
    answer: 1,
    explanation: "XIST is a long non-coding RNA (lncRNA) transcribed exclusively from the future inactive X chromosome (Xi). XIST RNA coats Xi in cis and recruits Polycomb repressive complexes (PRC1 and PRC2), leading to H3K27me3 deposition, DNA methylation of CpG islands, and late replication. TSIX (antisense to XIST) is expressed from the active X and represses XIST transcription."
  },
  {
    id: 21,
    question: "A chromosomal deletion is classified as terminal or interstitial based on:",
    options: ["The size of the deleted segment", "Whether the deletion extends to the chromosome end (terminal) or is within a chromosome arm (interstitial)", "Whether genes are included (interstitial) or only repetitive DNA (terminal)", "The chromosome arm involved (p for interstitial, q for terminal)"],
    answer: 1,
    explanation: "Terminal deletions remove the chromosome end from the breakpoint to the telomere (require new telomere formation or telomere capture). Interstitial deletions involve two internal breakpoints within a chromosome arm, with the segment between them being lost and the two ends rejoining. The distinction affects clinical features and whether new telomere sequences are added."
  },
  {
    id: 22,
    question: "Wolf-Hirschhorn syndrome (4p16.3 deletion) and cri-du-chat syndrome (5p15.3 deletion) are both examples of:",
    options: ["Contiguous gene syndromes caused by chromosomal deletions affecting multiple adjacent genes", "Imprinting disorders affecting specific loci", "Point mutation disorders affecting single genes", "Chromosomal duplications causing dosage-sensitive phenotypes"],
    answer: 0,
    explanation: "Both are contiguous gene deletion syndromes where loss of multiple adjacent genes in a chromosomal region causes a recognizable syndrome. Wolf-Hirschhorn: del(4p16.3) — features include growth retardation, intellectual disability, 'Greek warrior helmet' facies. Cri-du-chat: del(5p15.3) — named for cat-like cry due to laryngeal malformation, intellectual disability, microcephaly."
  },
  {
    id: 23,
    question: "The mechanism underlying Charcot-Marie-Tooth disease type 1A (PMP22 duplication) and hereditary neuropathy with liability to pressure palsies (HNPP, PMP22 deletion) is best described as:",
    options: ["Point mutations in the same gene causing opposite effects", "Reciprocal products of nonallelic homologous recombination (NAHR) between flanking low-copy repeats", "Expansion of trinucleotide repeats in the PMP22 gene", "Mitochondrial DNA mutations affecting peripheral nerve myelin"],
    answer: 1,
    explanation: "CMT1A (duplication) and HNPP (deletion) at 17p11.2 are reciprocal products of NAHR between flanking Charcot-Marie-Tooth disease type 1A repeat elements (CMT1A-REPs). NAHR during meiosis between misaligned repeats produces a duplication in one chromosome and deletion in the other. This mechanism explains many recurrent microdeletion/microduplication syndromes (15q11.2, 22q11.2, 1q21.1, etc.)."
  },
  {
    id: 24,
    question: "In cancer cytogenetics, 'aneuploidy' is significant because:",
    options: ["It only occurs in hematological malignancies, not solid tumors", "It reflects chromosomal instability (CIN) and correlates with tumor progression, poor prognosis, and drug resistance in many cancers", "All aneuploid cells are malignant", "It results exclusively from point mutations in checkpoint genes"],
    answer: 1,
    explanation: "Chromosomal instability (CIN) — ongoing rates of whole chromosome or segmental chromosome gains/losses — is a hallmark of cancer. CIN tumors have complex karyotypes (polyploidy, aneuploidy). CIN correlates with poor prognosis, metastatic potential, and resistance to chemotherapy. CIN arises from defects in mitotic checkpoints (SAC), centrosome duplication, cohesion, and DNA repair."
  },
  {
    id: 25,
    question: "The short arm (p) of acrocentric chromosomes (13, 14, 15, 21, 22) in humans contains:",
    options: ["Essential protein-coding genes not found elsewhere in the genome", "Ribosomal RNA (rRNA) genes (18S and 28S), organized in nucleolar organizer regions (NORs)", "Centromere alpha-satellite DNA", "Imprinted gene clusters critical for development"],
    answer: 1,
    explanation: "The short arms of acrocentric chromosomes (13, 14, 15, 21, 22) are called stalks and satellites, and contain tandem arrays of 45S rRNA genes (encoding 18S, 5.8S, and 28S rRNA) organized in nucleolar organizer regions (NORs). During interphase, NORs aggregate to form the nucleolus. Loss of these short arms in Robertsonian translocations is tolerated because multiple copies exist on other acrocentrics."
  },
  {
    id: 26,
    question: "FISH with a telomere-specific probe (TTAGGG probe) would be most useful to detect:",
    options: ["Centromere deletions", "Subtelomeric chromosome rearrangements that are undetectable by conventional karyotyping", "Gene amplification in cancer cells", "Trisomy conditions"],
    answer: 1,
    explanation: "Subtelomeric regions are gene-rich and frequently involved in cryptic rearrangements that cause intellectual disability. Telomere-specific FISH (TTAGGG repeat probe) verifies telomere presence and integrity. Subtelomere FISH panels use locus-specific probes for each subtelomeric region to detect cryptic deletions/duplications in patients with unexplained intellectual disability and normal karyotype."
  },
  {
    id: 27,
    question: "A patient with Down syndrome has a karyotype of 46 chromosomes including a Robertsonian translocation rob(14;21). The mother has 45 chromosomes with rob(14;21) carrier karyotype. The recurrence risk for Down syndrome in future pregnancies is approximately:",
    options: ["1-2% (same as population risk)", "10-15% empirical risk (higher than population because of maternal translocation carrier)", "100%", "25%"],
    answer: 1,
    explanation: "Maternal carrier of rob(14;21) has an empirical recurrence risk of ~10-15% for Down syndrome offspring (translocation trisomy 21). The theoretical risk is 1/3 of viable pregnancies, but not all unbalanced conceptuses survive. Paternal carrier risk is lower (~2-5%). This is much higher than the general population risk (~1/700 births overall, age-dependent for standard trisomy 21)."
  },
  {
    id: 28,
    question: "Sister chromatid exchange (SCE) is increased in patients with Bloom syndrome because of:",
    options: ["Deficiency in topoisomerase II activity", "Mutations in BLM helicase, which normally suppresses inappropriate recombination between sister chromatids", "Increased activity of RAD51 recombinase", "Defective telomere maintenance"],
    answer: 1,
    explanation: "Bloom syndrome (BS) is caused by mutations in BLM (RecQ helicase family). BLM helicase normally dissolves Holliday junctions and double Holliday junctions between sister chromatids via the BTR complex (BLM-TOPOIIIα-RMI1-RMI2). Without BLM, inappropriate recombination between sister chromatids leads to very high SCE rates (10-100× normal). BS features: growth retardation, immunodeficiency, cancer predisposition, sun sensitivity."
  },
  {
    id: 29,
    question: "The 'fragile site' on chromosome X at Xq27.3 in Fragile X syndrome is visible under specific culture conditions because:",
    options: ["The CCG repeat expansion causes a gap or break when cells are cultured in folate-deficient medium", "The FMR1 gene undergoes chromosomal deletion visible at this resolution", "The region undergoes early replication and appears as a constriction", "Methylation of the repeat causes visible chromosome condensation"],
    answer: 0,
    explanation: "The Fragile X fragile site (FRAXA) is a folate-sensitive fragile site visible as a chromosomal gap/break when cells are cultured in conditions of folate deficiency or thymidylate synthase inhibition. The CGG repeat expansion in FMR1 and hypermethylation leads to replication fork stalling at this region. Historically detected cytogenetically; now diagnosed by Southern blot and PCR to measure repeat number and methylation."
  },
  {
    id: 30,
    question: "In prenatal cytogenetic diagnosis using amniocentesis, which of the following cannot be reliably detected by standard G-banded karyotype?",
    options: ["Trisomy 21 (Down syndrome)", "Balanced chromosomal translocation", "Single gene mutations like cystic fibrosis or sickle cell disease", "Chromosomal deletions >5 Mb"],
    answer: 2,
    explanation: "Standard G-banded karyotype detects numerical (aneuploidy) and structural (large rearrangements) chromosomal abnormalities with ~5-10 Mb resolution. It cannot detect single gene mutations (point mutations, small indels) like CFTR mutations (cystic fibrosis) or HBB mutations (sickle cell disease), which require molecular testing (PCR, sequencing, MLPA). For single gene disorders, specific molecular tests must be ordered separately."
  },
  {
    id: 31,
    question: "Interphase FISH (iSH) has the advantage over metaphase FISH because:",
    options: ["It uses different fluorescent probes with better resolution", "It can be performed on non-dividing cells in interphase nuclei without need for cell culture or metaphase spreads", "It detects smaller deletions than metaphase FISH", "It provides information about chromosomal gene expression"],
    answer: 1,
    explanation: "Interphase FISH can be performed directly on non-dividing cells (tissue sections, blood smears, uncultured amniocytes) without requiring cell culture or metaphase spreads. This makes it faster and applicable to tissues where cells rarely divide. It is widely used in oncology (HER2 amplification in breast cancer, BCR-ABL in CML) and rapid prenatal diagnosis for common aneuploidies."
  },
  {
    id: 32,
    question: "The ISCN (International System for Human Cytogenomic Nomenclature) designation 46,XX,del(5)(p15.3) means:",
    options: ["46 chromosomes, female, with a deletion on chromosome 5 involving band p15.3", "46 chromosomes, female, with a duplication on chromosome 5", "46 chromosomes, with a monosomy of chromosome 5 short arm", "45 chromosomes due to deletion of chromosome 5"],
    answer: 0,
    explanation: "ISCN notation: 46 = total chromosome number; XX = sex chromosome complement (female); del = deletion; (5) = chromosome 5; (p15.3) = breakpoint at band p15.3. This is a terminal deletion of the short arm of chromosome 5 beginning at band p15.3, corresponding to cri-du-chat syndrome. ISCN provides standardized nomenclature for cytogenomic findings."
  },
  {
    id: 33,
    question: "The phenomenon of 'anticipation' in myotonic dystrophy type 1 is associated with which chromosomal/molecular mechanism?",
    options: ["Progressive deletion of the DMPK gene in successive generations", "Expansion of CTG trinucleotide repeat in the 3'UTR of DMPK gene with larger expansions correlating with earlier onset", "Methylation of DMPK promoter becoming more extensive in successive generations", "Chromosomal translocation involving DMPK becoming more complex"],
    answer: 1,
    explanation: "Myotonic dystrophy type 1 (DM1) is caused by CTG repeat expansion in the 3'UTR of the DMPK gene on chromosome 19q13.3. Normal: 5-37 repeats; premutation: 38-49; full mutation: 50-10,000+. The expanded CUG RNA sequesters splicing factors (MBNL proteins), causing aberrant splicing of multiple transcripts. Larger expansions cause earlier onset (congenital DM1 in neonates). Maternal transmission shows greater expansion tendency."
  },
  {
    id: 34,
    question: "In multicolor banding (MCB) or RxFISH, what is the primary clinical utility compared to conventional FISH?",
    options: ["It detects single nucleotide variants", "It characterizes the chromosomal origin of marker chromosomes and complex rearrangements by providing band-specific color patterns", "It replaces standard karyotyping for all clinical applications", "It can detect methylation patterns directly"],
    answer: 1,
    explanation: "Multicolor banding uses multiple overlapping probes covering each chromosome arm to create a unique color pattern for each chromosomal band. This is particularly useful for: (1) characterizing small supernumerary marker chromosomes (sSMCs) of unknown origin; (2) defining precise breakpoints in complex rearrangements; (3) identifying intrachromosomal rearrangements like inversions that might be missed by M-FISH/SKY."
  },
  {
    id: 35,
    question: "Premutation carriers of FMR1 (55-200 CGG repeats) are at risk for which of the following conditions?",
    options: ["Full Fragile X syndrome (same risk as full mutation carriers)", "Fragile X-associated tremor/ataxia syndrome (FXTAS) in older males and Fragile X-associated primary ovarian insufficiency (FXPOI) in females", "Down syndrome in offspring", "Anticipation exclusively through paternal transmission"],
    answer: 1,
    explanation: "FMR1 premutation carriers (55-200 CGG repeats) do NOT have full FXS (which requires >200 repeats + methylation). However, premutation expansions cause FXTAS in older males (>50 years: tremor, ataxia, cognitive decline due to toxic RNA gain-of-function) and FXPOI in females (premature menopause in ~20% of female premutation carriers). The permutation RNA is overproduced and toxic, unlike the silenced full mutation."
  },
  {
    id: 36,
    question: "Supernumerary marker chromosomes (sSMCs) are best characterized by which combination of techniques?",
    options: ["G-banding only", "G-banding plus FISH with chromosome-specific probes and/or chromosomal microarray", "Exome sequencing alone", "Southern blotting and PCR"],
    answer: 1,
    explanation: "sSMCs are extra chromosomal material of unknown origin that appear as small supernumerary chromosomes in the karyotype. G-banding identifies their presence and size but usually cannot determine chromosomal origin. FISH with chromosome-enumeration probes and/or chromosomal microarray identifies the chromosomal origin and gene content. Clinical significance depends on which chromosome and whether imprinted regions are involved."
  },
  {
    id: 37,
    question: "The 'end-replication problem' that telomeres solve refers to:",
    options: ["The inability of DNA polymerase to initiate synthesis de novo at chromosome ends", "Progressive shortening of chromosome ends with each cell division because DNA polymerase cannot fully replicate the 3' lagging strand template end", "The difficulty of packaging terminal DNA into nucleosomes", "Replication fork collapse at repetitive terminal sequences"],
    answer: 1,
    explanation: "Conventional DNA replication cannot fully replicate the 3' end of the lagging strand template, because the RNA primer at the very end cannot be replaced with DNA. This causes progressive telomere shortening (~50-200 bp per division). Telomerase (an RNA-directed reverse transcriptase with TERC as template and TERT as catalytic subunit) extends telomeres. Absent in most somatic cells (causing replicative senescence) but active in stem cells and cancer."
  },
  {
    id: 38,
    question: "Prenatal FISH for rapid aneuploidy detection typically tests for aneuploidies of chromosomes:",
    options: ["1, 2, 3, 4, 5", "13, 18, 21, X, Y (the most clinically common aneuploidies in liveborns)", "All 24 different chromosomes simultaneously", "Only chromosome 21 for Down syndrome screening"],
    answer: 1,
    explanation: "Rapid prenatal FISH (Interphase FISH) uses probes for chromosomes 13, 18, 21, X, and Y — the chromosomes most commonly involved in viable aneuploidies (trisomy 21/Down, trisomy 18/Edwards, trisomy 13/Patau, and sex chromosome aneuploidies). Results are available in 24-48 hours without waiting for cell culture. Full karyotype from cultured cells follows to detect other abnormalities."
  },
  {
    id: 39,
    question: "The phenomenon where a chromosomal rearrangement changes the expression of a gene by placing it in a new chromatin environment is called:",
    options: ["Translocation-induced haploinsufficiency", "Position effect (chromosomal position effect)", "Epistasis at the chromosomal level", "Anticipation through structural rearrangement"],
    answer: 1,
    explanation: "Chromosomal position effect occurs when a gene is translocated to a different chromosomal environment that alters its expression. Classic example: variegated position effect in Drosophila — genes translocated near heterochromatin are silenced in some cells (variegation). In humans: some balanced translocations cause disease by disrupting gene regulation rather than the gene itself, or by placing a proto-oncogene near an enhancer (as in Burkitt lymphoma: IgH enhancer activates MYC after t(8;14))."
  },
  {
    id: 40,
    question: "In the Human Genome Project, the number of protein-coding genes identified in the human genome was approximately:",
    options: ["10,000-15,000", "20,000-25,000", "50,000-100,000", "3 million"],
    answer: 1,
    explanation: "The Human Genome Project and subsequent analyses revised the protein-coding gene count to approximately 20,000-25,000 genes (~19,000-21,000 current estimates), far fewer than the ~100,000 predicted before the HGP. This was surprising and demonstrated that complexity arises from alternative splicing, post-translational modifications, and regulatory non-coding RNAs rather than gene number alone."
  },
  {
    id: 41,
    question: "Chromosomal arm gains (polysomy) are common in certain cancers. In neuroblastoma, MYCN amplification is detected by FISH as:",
    options: ["Extra copies of chromosome 2 (polysomy 2)", "Discrete clusters of FISH signals called 'double minutes' or 'homogeneously staining regions' (HSRs) indicating gene amplification far beyond normal copy number", "Loss of one copy of chromosome 2 (monosomy 2)", "A balanced translocation involving chromosome 2p24 (MYCN locus)"],
    answer: 1,
    explanation: "MYCN amplification in neuroblastoma (chromosome 2p24) is visualized by FISH as clusters of numerous signals (amplicons) present either as extrachromosomal circular DNA (double minutes, lacking centromeres) or integrated in chromosomes as homogeneously staining regions (HSRs). MYCN amplification (>10 copies) is a major adverse prognostic marker in neuroblastoma, associated with rapid progression and poor outcome."
  },
  {
    id: 42,
    question: "The chromosomal abnormality characteristic of Burkitt lymphoma involves:",
    options: ["Deletion of tumor suppressor genes on chromosome 13", "Translocation t(8;14)(q24;q32) placing MYC oncogene under immunoglobulin heavy chain enhancer control", "Amplification of BCL2 on chromosome 18", "Monosomy 7 causing loss of tumor suppressor function"],
    answer: 1,
    explanation: "Burkitt lymphoma is characterized by t(8;14)(q24;q32) in ~80% of cases (or t(2;8) and t(8;22) in the rest). MYC (8q24) is translocated next to the IgH enhancer on chromosome 14q32, causing constitutive MYC overexpression and uncontrolled cell proliferation. MYC drives ribosome biogenesis and cell cycle progression. This is the paradigm for translocation-mediated oncogene activation."
  },
  {
    id: 43,
    question: "A patient's karyotype is reported as 46,XY,t(11;22)(q23;q11.2). This individual has:",
    options: ["Down syndrome due to extra chromosome 22", "A balanced reciprocal translocation between chromosomes 11 and 22 at the specified bands; likely a normal phenotype but risk for unbalanced offspring", "Emanuel syndrome (supernumerary der(22) chromosome)", "Philadelphia chromosome from BCR-ABL fusion"],
    answer: 1,
    explanation: "46,XY,t(11;22)(q23;q11.2) represents the most common constitutional reciprocal translocation in humans. Balanced carriers are phenotypically normal but have ~4-5% risk for a liveborn child with Emanuel syndrome (supernumerary der(22)t(11;22) chromosome causing 47 chromosomes). The t(11;22) breakpoints coincide with palindromic AT-rich repeat (PATRR) sequences that predispose to this translocation."
  },
  {
    id: 44,
    question: "Mosaicism for trisomy 21 (46/47,+21 mosaic) compared to full trisomy 21 typically shows:",
    options: ["More severe intellectual disability than full trisomy 21", "Variable phenotype, often milder features of Down syndrome, with the proportion of trisomic cells influencing severity", "Normal intelligence with only physical features of Down syndrome", "Exclusively postnatal onset of Down syndrome features"],
    answer: 1,
    explanation: "Mosaic Down syndrome (46/47,+21 mosaic) results from a postzygotic nondisjunction event after fertilization. The proportion of trisomic cells and when during development the error occurred determines phenotypic severity. Generally milder than full trisomy 21 but with wide variability. Some mosaic individuals have near-normal intelligence; others are indistinguishable from full trisomy 21. Diagnosis requires karyotyping of multiple cells."
  },
  {
    id: 45,
    question: "The SRY gene is normally located on the Y chromosome. In 46,XX males with SRY-positive karyotype, the most likely mechanism is:",
    options: ["X chromosome inactivation failure causing inappropriate SRY expression", "Translocation of SRY from the Y chromosome to the X chromosome during paternal meiosis (through aberrant X-Y recombination)", "De novo SRY mutation occurring on the X chromosome", "Uniparental disomy of the Y chromosome"],
    answer: 1,
    explanation: "46,XX males (de la Chapelle syndrome) occur when aberrant X-Y recombination during paternal meiosis causes SRY to translocate from the Y to the X chromosome. The father passes an X chromosome containing SRY to a daughter, creating an XX male. These individuals have male phenotype, small testes, and azoospermia (infertile). FISH with Y-specific and SRY probes confirms the diagnosis."
  },
  {
    id: 46,
    question: "Premature chromatid separation (PCS) observed in mitotic chromosomes at low frequency in normal cells versus high frequency in mosaic variegated aneuploidy (MVA) syndrome implicates mutations in:",
    options: ["BRCA1 and BRCA2", "BUB1B (BUBR1) or TRIP13, components of the spindle assembly checkpoint (SAC)", "ATM and ATR checkpoint kinases", "Telomerase components TERT and TERC"],
    answer: 1,
    explanation: "Mosaic variegated aneuploidy (MVA) syndrome features premature chromatid separation (PCS) in >25% of cells and is caused by biallelic mutations in BUB1B (encoding BUBR1, a kinetochore kinase essential for spindle assembly checkpoint) or TRIP13. MVA causes childhood cancer predisposition, growth retardation, and intellectual disability. The SAC normally delays anaphase until all chromosomes are properly attached to spindle."
  },
  {
    id: 47,
    question: "The 'recombination nodule' visible on synaptonemal complexes in meiotic prophase I chromosomes represents:",
    options: ["The site of centromere attachment to the synaptonemal complex", "The site where crossing over (recombination) will occur, marked by the MLH1 protein complex", "A structural protein maintaining chromosomal axis rigidity", "The kinetochore precursor assembled during prophase"],
    answer: 1,
    explanation: "Recombination nodules are multiprotein complexes visible on synaptonemal complexes during pachytene of meiosis I. Late recombination nodules mark the sites of crossover (reciprocal recombination), and contain MLH1 (mismatch repair protein that resolves Holliday junctions). The number of late nodules corresponds to the number of crossovers per meiosis. Early nodules may mark all DSB sites, only some becoming crossovers."
  },
  {
    id: 48,
    question: "A chromosomal region showing 'copy number neutral loss of heterozygosity' (CN-LOH) detected by SNP array but not CGH array indicates:",
    options: ["A deletion of DNA without loss of overall genomic content", "A region where heterozygous SNPs have been replaced by homozygous SNPs without change in copy number, consistent with uniparental disomy or mitotic recombination", "Balanced translocation of the region to another chromosome", "Technical artifact from the SNP array platform"],
    answer: 1,
    explanation: "CN-LOH (copy neutral LOH) occurs when a heterozygous region becomes homozygous without overall DNA copy number change. Mechanisms: (1) UPD — both copies from one parent; (2) Mitotic recombination — somatic crossing over creates LOH in a clone. Detected by SNP arrays (loss of heterozygosity) but invisible to CGH arrays (no copy number change). In cancer, CN-LOH can homozygose tumor suppressor mutations."
  },
  {
    id: 49,
    question: "During meiosis, the synaptonemal complex (SC) forms between:",
    options: ["Sister chromatids to hold them together before anaphase II", "Homologous chromosomes during zygotene-pachytene of meiosis I to facilitate recombination", "All four chromatids of a bivalent simultaneously", "Chromosomes and the nuclear envelope for attachment"],
    answer: 1,
    explanation: "The synaptonemal complex (SC) is a proteinaceous tripartite structure (two lateral elements + central element) that forms between homologous chromosome pairs (bivalents) during zygotene-pachytene of meiosis I prophase. The SC maintains homolog synapsis and facilitates crossing over. Components include SYCP1 (transverse filaments), SYCP2/3 (lateral elements), and SYCE1-4 (central element). SC dissolution occurs in diplotene."
  },
  {
    id: 50,
    question: "Chromosomal heteromorphisms (normal variants) most commonly involve which chromosomal regions?",
    options: ["The genes within coding regions of chromosome arms", "Pericentromeric heterochromatin (especially chromosomes 1, 9, 16) and satellite stalks of acrocentrics (13, 14, 15, 21, 22)", "Subtelomeric regions of all chromosomes", "Gene-rich R-bands that stain lightly with G-banding"],
    answer: 1,
    explanation: "Chromosomal heteromorphisms are normal, heritable size variations in specific chromosomal regions. They most commonly involve: pericentromeric heterochromatin of chromosomes 1, 9, and 16 (variable block sizes); stalks and satellites of acrocentric chromosomes (variable rRNA gene copy numbers); and the heterochromatic block on Yq (Yqh). Heteromorphisms are typically familial, have no phenotypic consequence, and help track chromosome transmission in families."
  }
];

export default questions;
