const questions = [
  // ===== DNA STRUCTURE & REPLICATION (Q1–Q15) =====
  {
    id: 1,
    question: "The B-form of DNA, most common under physiological conditions, has approximately how many base pairs per turn of the helix?",
    options: ["10", "11", "12", "8"],
    answer: 0,
    explanation: "B-DNA (Watson-Crick form) has ~10 base pairs per helical turn, a pitch of 3.4 nm, and a rise of 0.34 nm per base pair. A-DNA (dehydrated) has 11 bp/turn; Z-DNA (left-handed) has 12 bp/turn."
  },
  {
    id: 2,
    question: "Which bond holds the two strands of DNA together?",
    options: ["Covalent phosphodiester bonds", "Ionic bonds", "Hydrogen bonds between complementary bases", "Van der Waals forces only"],
    answer: 2,
    explanation: "The two strands of DNA are held together by hydrogen bonds between complementary base pairs: A-T (2 hydrogen bonds) and G-C (3 hydrogen bonds). The phosphodiester bonds form the backbone within each strand."
  },
  {
    id: 3,
    question: "Which experiment proved that DNA replication is semi-conservative?",
    options: ["Avery-MacLeod-McCarty experiment", "Hershey-Chase experiment", "Meselson-Stahl experiment", "Griffith's experiment"],
    answer: 2,
    explanation: "The Meselson-Stahl experiment (1958) used heavy (15N) and light (14N) nitrogen to label DNA. After one replication, all DNA was intermediate density (hybrid), proving semi-conservative replication — each new double helix contains one original and one new strand."
  },
  {
    id: 4,
    question: "Which enzyme synthesizes the RNA primer during DNA replication?",
    options: ["DNA polymerase I", "DNA polymerase III", "Primase", "Ligase"],
    answer: 2,
    explanation: "Primase (a specialized RNA polymerase) synthesizes short RNA primers (5–10 nucleotides) complementary to the template strand. These primers provide a 3'-OH group for DNA polymerase III to extend. Primers are later removed by DNA polymerase I (5'→3' exonuclease activity) and replaced with DNA."
  },
  {
    id: 5,
    question: "Telomeres are maintained by the enzyme:",
    options: ["DNA polymerase α", "Telomerase", "Topoisomerase II", "Reverse transcriptase"],
    answer: 1,
    explanation: "Telomerase is a ribonucleoprotein enzyme that adds telomeric repeats (TTAGGG in humans) to chromosome ends to prevent shortening with each replication cycle. It uses its RNA component as a template (reverse transcriptase activity). Telomerase is active in germ cells, stem cells, and most cancer cells."
  },
  {
    id: 6,
    question: "Which of the following best describes the role of topoisomerases during DNA replication?",
    options: ["They synthesize new DNA strands", "They remove supercoiling tension ahead of the replication fork", "They join Okazaki fragments", "They unwind the double helix"],
    answer: 1,
    explanation: "As helicase unwinds DNA, positive supercoils accumulate ahead of the replication fork. Topoisomerases relieve this torsional stress: Topoisomerase I cuts one strand (nicks) and rejoins it; Topoisomerase II cuts both strands and passes another double helix through the break."
  },
  {
    id: 7,
    question: "The 3' to 5' exonuclease activity of DNA polymerase is responsible for:",
    options: ["Removing RNA primers", "Proofreading and correcting replication errors", "Synthesizing the leading strand", "Joining Okazaki fragments"],
    answer: 1,
    explanation: "The 3' to 5' exonuclease (proofreading) activity of DNA polymerase III removes incorrectly incorporated nucleotides. If the wrong base is added, the polymerase backtracks, excises the mismatched nucleotide, and reinserts the correct one. This reduces the error rate to ~1 in 10^9."
  },
  {
    id: 8,
    question: "In eukaryotes, DNA replication begins at:",
    options: ["A single fixed origin (oriC)", "Multiple origins of replication (autonomously replicating sequences)", "The 3' end of each chromosome", "The centromere"],
    answer: 1,
    explanation: "Eukaryotic chromosomes have multiple origins of replication (thousands per chromosome), allowing the large genome to be replicated in a reasonable time. Prokaryotes like E. coli have a single origin (oriC). Replication proceeds bidirectionally from each origin."
  },
  {
    id: 9,
    question: "The Hayflick limit refers to:",
    options: ["The maximum number of DNA base pairs in a chromosome", "The finite number of times a normal somatic cell can divide before senescence", "The number of origins of replication per chromosome", "The maximum length of telomeres"],
    answer: 1,
    explanation: "The Hayflick limit (~50–70 divisions for human fibroblasts) is the number of times a normal somatic cell can divide before entering replicative senescence. This is linked to progressive telomere shortening with each division. Cancer cells overcome this limit through telomerase reactivation."
  },
  {
    id: 10,
    question: "Which type of DNA damage is repaired by nucleotide excision repair (NER)?",
    options: ["Mismatched bases", "Oxidized bases (e.g., 8-oxoguanine)", "Bulky helix-distorting lesions (e.g., UV-induced pyrimidine dimers)", "Double-strand breaks"],
    answer: 2,
    explanation: "Nucleotide excision repair removes bulky, helix-distorting DNA lesions such as cyclobutane pyrimidine dimers and 6-4 photoproducts caused by UV radiation, and chemical adducts. NER involves recognition, dual incision ~25 nt around the lesion, removal, resynthesis, and ligation. Defects cause xeroderma pigmentosum."
  },
  {
    id: 11,
    question: "Which experiment demonstrated that genes are made of DNA (not protein)?",
    options: ["Meselson-Stahl experiment", "Hershey-Chase experiment", "Griffith's transformation experiment", "Watson-Crick X-ray crystallography"],
    answer: 1,
    explanation: "Hershey and Chase (1952) used bacteriophage T2 with radioactively labeled DNA (32P) or protein (35S). After infection, 32P-labeled DNA entered bacteria while 35S-labeled protein remained outside. Progeny phage contained 32P, proving DNA is the genetic material."
  },
  {
    id: 12,
    question: "Supercoiling of DNA is relieved by which enzyme class?",
    options: ["Helicases", "Topoisomerases", "Ligases", "Primases"],
    answer: 1,
    explanation: "Topoisomerases change the topological state of DNA by transiently breaking one (type I) or both (type II) strands, allowing rotation or strand passage to relieve supercoiling. This is essential during replication and transcription."
  },
  {
    id: 13,
    question: "Chromatin is organized into nucleosomes. Each nucleosome core particle consists of DNA wrapped around:",
    options: ["2 copies each of H2A, H2B, H3, H4", "1 copy each of H1, H2A, H2B, H3", "4 copies of H1 histone", "2 copies of H3 and 2 copies of H4"],
    answer: 0,
    explanation: "The nucleosome core particle consists of ~147 bp of DNA wrapped 1.7 turns around a histone octamer comprising two copies each of histones H2A, H2B, H3, and H4. Histone H1 (linker histone) binds the DNA between nucleosomes and stabilizes the 30 nm fiber."
  },
  {
    id: 14,
    question: "CpG islands are regions in the genome characterized by:",
    options: ["High frequency of CG dinucleotides, often found at gene promoters", "Low GC content and high methylation", "Repetitive sequences near centromeres", "Trinucleotide repeats prone to expansion"],
    answer: 0,
    explanation: "CpG islands are stretches of DNA (~500 bp to several kb) with high CG content and high density of CpG dinucleotides, typically unmethylated. They are found at the promoters of ~60% of human genes. Aberrant methylation of CpG islands silences tumor suppressor genes in cancer."
  },
  {
    id: 15,
    question: "The process by which DNA sequence information is converted to RNA is called:",
    options: ["Translation", "Transcription", "Replication", "Transduction"],
    answer: 1,
    explanation: "Transcription is the synthesis of RNA from a DNA template by RNA polymerase. RNA polymerase reads the template strand (3'→5') and synthesizes mRNA in the 5'→3' direction. In eukaryotes, three RNA polymerases exist: Pol I (rRNA), Pol II (mRNA), Pol III (tRNA, 5S rRNA)."
  },

  // ===== TRANSCRIPTION & RNA PROCESSING (Q16–Q30) =====
  {
    id: 16,
    question: "The TATA box, a core promoter element in eukaryotes, is located approximately:",
    options: ["At the transcription start site (+1)", "25–30 bp upstream of the transcription start site", "500 bp upstream of the gene", "Within the first exon"],
    answer: 1,
    explanation: "The TATA box (consensus: TATAAA) is located ~25–30 bp upstream (−25 to −30) of the transcription start site. It is recognized by the TATA-binding protein (TBP), a component of TFIID, and positions RNA polymerase II for accurate initiation of transcription."
  },
  {
    id: 17,
    question: "Pre-mRNA processing in eukaryotes includes all of the following EXCEPT:",
    options: ["5' capping with 7-methylguanosine", "3' polyadenylation", "Splicing out of introns", "Removal of the TATA box"],
    answer: 3,
    explanation: "Pre-mRNA processing includes: (1) 5' capping (7-methylguanosine cap added co-transcriptionally), (2) 3' polyadenylation (addition of ~200 A residues after cleavage), and (3) splicing (removal of introns by the spliceosome). The TATA box is a DNA promoter element and is not part of the RNA."
  },
  {
    id: 18,
    question: "Alternative splicing allows:",
    options: ["Multiple proteins to be produced from a single pre-mRNA", "DNA to be replicated at different times", "Multiple genes to share the same promoter", "tRNA to be processed into rRNA"],
    answer: 0,
    explanation: "Alternative splicing is the process by which different combinations of exons from the same pre-mRNA are joined to produce multiple mRNA variants, which translate into different protein isoforms. This greatly expands the proteome — an estimated ~95% of human multi-exon genes undergo alternative splicing."
  },
  {
    id: 19,
    question: "The spliceosome is composed of:",
    options: ["Ribosomes and elongation factors", "Small nuclear RNAs (snRNAs) and associated proteins (snRNPs)", "Restriction enzymes and ligases", "Ribosomal RNA and proteins"],
    answer: 1,
    explanation: "The spliceosome is a large ribonucleoprotein complex consisting of five snRNAs (U1, U2, U4, U5, U6) assembled with proteins into snRNPs. The spliceosome recognizes splice sites (GU at 5' splice site, AG at 3' splice site) and catalyzes the two transesterification reactions that remove introns."
  },
  {
    id: 20,
    question: "MicroRNAs (miRNAs) regulate gene expression by:",
    options: ["Methylating gene promoters", "Binding to complementary mRNA sequences to inhibit translation or cause degradation", "Activating transcription factors", "Inserting into coding sequences"],
    answer: 1,
    explanation: "MicroRNAs (~22 nt) are processed from hairpin precursors by Drosha (nucleus) and Dicer (cytoplasm). The miRNA is loaded into RISC (RNA-induced silencing complex), which binds complementary sequences in the 3' UTR of target mRNAs, leading to translational repression or mRNA degradation."
  },
  {
    id: 21,
    question: "The Shine-Dalgarno sequence in prokaryotes is:",
    options: ["A termination signal for transcription", "A ribosome-binding site on mRNA that facilitates translation initiation", "A promoter element recognized by sigma factor", "The sequence at the 5' cap of eukaryotic mRNA"],
    answer: 1,
    explanation: "The Shine-Dalgarno (SD) sequence (consensus: AGGAGG) is located ~5–10 nt upstream of the AUG start codon in prokaryotic mRNA. It base-pairs with the complementary anti-SD sequence at the 3' end of 16S rRNA of the 30S ribosomal subunit, positioning the ribosome for translation initiation."
  },
  {
    id: 22,
    question: "Which of the following statements about the genetic code is TRUE?",
    options: ["Each codon codes for multiple amino acids (ambiguous)", "The code is non-overlapping, read in triplets, and nearly universal", "There are 20 codons for 20 amino acids", "Stop codons code for rare amino acids"],
    answer: 1,
    explanation: "The genetic code is: (1) triplet — three nucleotides per codon, (2) non-overlapping — each nucleotide belongs to only one codon, (3) degenerate — multiple codons code for the same amino acid, (4) nearly universal — same codons used in most organisms (minor exceptions in mitochondria), (5) unambiguous — each codon specifies only one amino acid."
  },
  {
    id: 23,
    question: "The wobble hypothesis (Crick) explains:",
    options: ["Why the genetic code is degenerate — one tRNA can recognize multiple codons via flexible base pairing at the 3rd codon position", "How ribosomes move along mRNA", "The mechanism of non-sense suppression", "How mutations affect protein folding"],
    answer: 0,
    explanation: "Crick's wobble hypothesis explains degeneracy: the anticodon's 3rd position (wobble position, 5' end of anticodon) can form non-Watson-Crick base pairs with the 3rd (3') position of the codon. For example, inosine (I) in the anticodon can pair with U, C, or A in the codon, allowing one tRNA to recognize multiple synonymous codons."
  },
  {
    id: 24,
    question: "RNA interference (RNAi) is triggered by:",
    options: ["Single-stranded RNA", "Double-stranded RNA (dsRNA)", "DNA-RNA hybrids", "Circular RNA"],
    answer: 1,
    explanation: "RNAi is triggered by double-stranded RNA (dsRNA) that is processed by Dicer into small interfering RNAs (siRNAs, ~21–23 nt). siRNAs are incorporated into RISC, which unwinds the duplex and uses the antisense strand to find and cleave complementary mRNA sequences, silencing gene expression."
  },
  {
    id: 25,
    question: "Long non-coding RNAs (lncRNAs) are defined as non-coding RNAs longer than:",
    options: ["21 nucleotides", "100 nucleotides", "200 nucleotides", "1000 nucleotides"],
    answer: 2,
    explanation: "Long non-coding RNAs (lncRNAs) are arbitrarily defined as non-coding RNAs >200 nucleotides. They regulate gene expression through various mechanisms including chromatin remodeling, transcription factor decoys, and scaffolding of regulatory complexes. Examples: XIST (X-inactivation), HOTAIR, MALAT1."
  },
  {
    id: 26,
    question: "During translation, the ribosome has three sites for tRNA binding. Which site holds the growing polypeptide chain?",
    options: ["A site (aminoacyl site)", "P site (peptidyl site)", "E site (exit site)", "D site (decoding site)"],
    answer: 1,
    explanation: "The ribosome has three tRNA-binding sites: A (aminoacyl) site — holds incoming aminoacyl-tRNA; P (peptidyl) site — holds the tRNA carrying the growing polypeptide chain; E (exit) site — holds the deacylated tRNA before it exits. Peptide bond formation transfers the polypeptide from P-site tRNA to A-site aminoacyl-tRNA."
  },
  {
    id: 27,
    question: "Nonsense-mediated mRNA decay (NMD) degrades mRNAs containing:",
    options: ["5' cap structures", "Premature stop codons", "Long 3' UTRs", "Excessive polyA tails"],
    answer: 1,
    explanation: "NMD is a surveillance mechanism that detects and degrades mRNAs with premature termination codons (PTCs). During translation, if a stop codon is encountered upstream of an exon junction complex (EJC), NMD factors (UPF1, UPF2, UPF3) trigger mRNA degradation, preventing production of truncated, potentially dominant-negative proteins."
  },
  {
    id: 28,
    question: "Which RNA polymerase transcribes protein-coding genes in eukaryotes?",
    options: ["RNA polymerase I", "RNA polymerase II", "RNA polymerase III", "All three polymerases equally"],
    answer: 1,
    explanation: "RNA polymerase II transcribes protein-coding genes (pre-mRNA), snRNAs, snoRNAs, and most lncRNAs. RNA Pol I transcribes large rRNA precursors (28S, 18S, 5.8S rRNA). RNA Pol III transcribes tRNAs, 5S rRNA, snRNA U6, and other small RNAs."
  },
  {
    id: 29,
    question: "The Kozak sequence in eukaryotes is important for:",
    options: ["Transcription termination", "Efficient translation initiation at the AUG start codon", "mRNA export from the nucleus", "tRNA aminoacylation"],
    answer: 1,
    explanation: "The Kozak sequence (consensus: GCCRCCAUGG, where R = purine) surrounds the AUG start codon and determines the efficiency of translation initiation. The ribosome (40S subunit) scans from the 5' cap and initiates translation most efficiently at AUG codons embedded in an optimal Kozak context."
  },
  {
    id: 30,
    question: "Riboswitches are regulatory elements found in:",
    options: ["Protein coding sequences", "The 5' or 3' UTR of mRNA, which undergo conformational changes upon binding small molecules", "DNA promoter regions", "tRNA anticodon loops"],
    answer: 1,
    explanation: "Riboswitches are structured RNA elements typically in the 5' UTR of bacterial mRNAs that directly bind small molecule ligands (metabolites, ions). Ligand binding causes conformational changes that regulate transcription termination or translation initiation without protein factors."
  },

  // ===== TRANSLATION & POST-TRANSLATIONAL MODIFICATION (Q31–Q40) =====
  {
    id: 31,
    question: "Protein ubiquitination targets proteins primarily for:",
    options: ["Secretion", "Nuclear import", "Proteasomal degradation", "Membrane insertion"],
    answer: 2,
    explanation: "Ubiquitination (attachment of ubiquitin chains, particularly K48-linked polyubiquitin) marks proteins for degradation by the 26S proteasome — the major pathway for regulated intracellular protein degradation. K63-linked ubiquitin chains have non-proteolytic functions (DNA repair, endocytosis)."
  },
  {
    id: 32,
    question: "Phosphorylation of proteins by kinases typically occurs on which amino acid residues?",
    options: ["Lysine, arginine, and histidine", "Serine, threonine, and tyrosine", "Cysteine and methionine", "Glycine and alanine"],
    answer: 1,
    explanation: "Protein phosphorylation by kinases occurs predominantly on hydroxyl-containing residues: serine (Ser), threonine (Thr), and tyrosine (Tyr). Serine/threonine kinases phosphorylate Ser/Thr; tyrosine kinases phosphorylate Tyr. Phosphorylation is a reversible modification reversed by phosphatases."
  },
  {
    id: 33,
    question: "The signal peptide (signal sequence) directs proteins to:",
    options: ["The nucleus", "The mitochondria", "The endoplasmic reticulum for secretion or membrane insertion", "The cytoskeleton"],
    answer: 2,
    explanation: "The N-terminal signal peptide (15–30 hydrophobic amino acids) is recognized by the signal recognition particle (SRP) and directs the ribosome to the ER membrane. The nascent protein is co-translationally inserted into the ER lumen or membrane. The signal peptide is then cleaved by signal peptidase."
  },
  {
    id: 34,
    question: "Chaperone proteins assist in:",
    options: ["DNA repair", "mRNA splicing", "Correct protein folding and preventing aggregation", "Protein degradation"],
    answer: 2,
    explanation: "Molecular chaperones (e.g., Hsp70, Hsp90, GroEL/GroES in bacteria) bind to hydrophobic regions of unfolded or misfolded proteins, facilitating correct folding and preventing aggregation. They are upregulated by heat shock and other stresses."
  },
  {
    id: 35,
    question: "N-glycosylation of proteins occurs:",
    options: ["In the cytoplasm", "Co-translationally in the ER lumen on asparagine residues", "In the nucleus on serine residues", "Post-translationally in the Golgi on threonine residues"],
    answer: 1,
    explanation: "N-glycosylation (attachment of oligosaccharides to the amide nitrogen of asparagine in the sequence Asn-X-Ser/Thr) occurs co-translationally in the ER lumen. The glycan is transferred from dolichol pyrophosphate to the consensus sequon. O-glycosylation occurs in the Golgi on serine/threonine."
  },
  {
    id: 36,
    question: "The unfolded protein response (UPR) is triggered by:",
    options: ["Excess ribosomes in the cytoplasm", "Accumulation of misfolded proteins in the ER lumen (ER stress)", "DNA damage", "Mitochondrial membrane depolarization"],
    answer: 1,
    explanation: "ER stress occurs when misfolded proteins accumulate in the ER lumen. The UPR is an adaptive response activated through three ER stress sensors (IRE1, PERK, ATF6) that: (1) reduce overall translation, (2) upregulate chaperones, and (3) increase ER-associated degradation (ERAD). Prolonged UPR can trigger apoptosis."
  },
  {
    id: 37,
    question: "SUMO (small ubiquitin-like modifier) modification of proteins affects:",
    options: ["Proteasomal degradation", "Subcellular localization, protein-protein interactions, and transcriptional regulation", "mRNA stability", "Ribosome assembly"],
    answer: 1,
    explanation: "SUMOylation attaches SUMO proteins to lysine residues of target proteins. Unlike ubiquitination, SUMOylation generally does not target proteins for degradation. Instead, it regulates protein localization, protein-protein interactions, transcriptional activity, and nuclear-cytoplasmic transport."
  },
  {
    id: 38,
    question: "The start codon in most organisms codes for which amino acid?",
    options: ["Valine", "Methionine (Met / AUG)", "Leucine", "Tryptophan"],
    answer: 1,
    explanation: "AUG is the universal start codon and codes for methionine (Met) in eukaryotes and N-formylmethionine (fMet) in prokaryotes. In most cases, the initiator methionine is subsequently cleaved from the mature protein."
  },
  {
    id: 39,
    question: "Selenocysteine, the 21st amino acid, is incorporated into proteins via:",
    options: ["A standard sense codon", "Recoding of the UGA stop codon in the presence of a SECIS element", "Post-translational modification of cysteine", "A unique 4-base codon"],
    answer: 1,
    explanation: "Selenocysteine is co-translationally inserted at UGA codons (normally a stop codon) when a specific mRNA stem-loop structure (SECIS — selenocysteine insertion sequence) in the 3' UTR redirects UGA from stop to selenocysteine. It is encoded by a specialized tRNA (Sec-tRNA)."
  },
  {
    id: 40,
    question: "Protein import into the mitochondria requires:",
    options: ["A signal peptide for the ER", "An N-terminal mitochondrial targeting sequence (MTS) recognized by TOM/TIM complexes", "GTP hydrolysis by Ras", "The 26S proteasome"],
    answer: 1,
    explanation: "Most mitochondrial proteins are encoded by nuclear DNA and imported post-translationally. They carry an N-terminal mitochondrial targeting sequence (MTS/presequence) that is recognized by the TOM (translocase of outer membrane) and TIM23 (translocase of inner membrane) complexes. The MTS is cleaved in the matrix by mitochondrial processing peptidase (MPP)."
  },

  // ===== GENE REGULATION (Q41–Q50) =====
  {
    id: 41,
    question: "The lac operon in E. coli is an example of:",
    options: ["Positive constitutive regulation", "Negative inducible regulation", "Positive repressible regulation", "Negative repressible regulation"],
    answer: 1,
    explanation: "The lac operon is negatively regulated (repressor controls expression) and inducible (expression is induced by allolactose, a lactose derivative). In the absence of lactose, the lac repressor binds the operator and blocks transcription. Allolactose (inducer) binds the repressor, causing conformational change and operator release."
  },
  {
    id: 42,
    question: "Enhancers differ from promoters in that enhancers:",
    options: ["Are always located immediately upstream of the gene", "Can function at large distances from the gene and in either orientation", "Bind RNA polymerase directly", "Are found only in prokaryotes"],
    answer: 1,
    explanation: "Enhancers are cis-regulatory elements that can activate transcription from large distances (up to 1 Mb away in mammals) and in either orientation relative to the gene. They work by looping of DNA to contact the promoter. Promoters are position- and orientation-specific, located near the transcription start site."
  },
  {
    id: 43,
    question: "Polycomb group (PcG) proteins are responsible for:",
    options: ["Activating developmental genes", "Maintaining long-term gene silencing through histone H3K27 methylation", "Synthesizing non-coding RNA", "Repairing double-strand DNA breaks"],
    answer: 1,
    explanation: "Polycomb group (PcG) proteins form two major complexes: PRC2 (which trimethylates H3K27) and PRC1 (which recognizes H3K27me3 and ubiquitinates H2AK119). Together, they maintain stable, heritable gene silencing (particularly of developmental genes like HOX genes) throughout cell divisions."
  },
  {
    id: 44,
    question: "The term 'epigenetics' refers to:",
    options: ["Mutations in the DNA sequence", "Heritable changes in gene expression that do not involve changes in DNA sequence", "Horizontal gene transfer between organisms", "The study of protein-protein interactions"],
    answer: 1,
    explanation: "Epigenetics refers to heritable changes in gene expression that occur without alterations to the underlying DNA sequence. Epigenetic mechanisms include DNA methylation, histone modifications, and non-coding RNAs. These changes can be transmitted through cell divisions and sometimes across generations."
  },
  {
    id: 45,
    question: "Zinc finger, leucine zipper, and helix-turn-helix are examples of:",
    options: ["DNA repair proteins", "DNA-binding domains of transcription factors", "Types of RNA secondary structures", "Chromatin remodeling complexes"],
    answer: 1,
    explanation: "Zinc finger, leucine zipper, and helix-turn-helix are structural motifs (DNA-binding domains) found in transcription factors that allow sequence-specific DNA binding. Zinc fingers coordinate zinc ions; leucine zippers dimerize via hydrophobic leucine residues; helix-turn-helix uses one helix for DNA recognition."
  },
  {
    id: 46,
    question: "SWI/SNF is a chromatin remodeling complex that:",
    options: ["Methylates cytosine in CpG dinucleotides", "Uses ATP hydrolysis to reposition or evict nucleosomes, making DNA accessible", "Adds acetyl groups to histones", "Degrades RNA in the cytoplasm"],
    answer: 1,
    explanation: "SWI/SNF is an ATP-dependent chromatin remodeling complex that uses the energy from ATP hydrolysis to slide, eject, or restructure nucleosomes. By repositioning nucleosomes, SWI/SNF regulates access of transcription factors, RNA polymerase, and repair proteins to DNA, thereby controlling gene expression."
  },
  {
    id: 47,
    question: "The trp operon in E. coli is an example of which regulatory system?",
    options: ["Inducible positive regulation", "Repressible negative regulation", "Constitutive positive regulation", "Inducible negative regulation"],
    answer: 1,
    explanation: "The trp operon is repressible and negatively regulated. Tryptophan (corepressor) binds the trp aporepressor, activating it. The activated repressor binds the operator and represses transcription of tryptophan biosynthesis genes. When tryptophan is scarce, the repressor is inactive and the operon is expressed."
  },
  {
    id: 48,
    question: "CHIP-seq (Chromatin Immunoprecipitation followed by sequencing) is used to:",
    options: ["Sequence entire genomes", "Map genome-wide binding sites of proteins (transcription factors, histones) to DNA", "Quantify mRNA expression levels", "Detect DNA methylation patterns"],
    answer: 1,
    explanation: "ChIP-seq combines chromatin immunoprecipitation (using antibodies against a specific protein) with high-throughput sequencing to map genome-wide protein-DNA interactions. It identifies binding sites of transcription factors, locations of histone modifications, or sites occupied by any chromatin-associated protein."
  },
  {
    id: 49,
    question: "The term 'transcriptome' refers to:",
    options: ["The complete set of proteins expressed by a cell", "The complete set of RNA transcripts produced by a cell under specific conditions", "The complete DNA sequence of an organism", "The set of all regulatory elements in a genome"],
    answer: 1,
    explanation: "The transcriptome is the complete set of all RNA molecules (mRNAs, non-coding RNAs, etc.) produced in a cell, tissue, or organism under specific conditions. RNA-seq (RNA sequencing) is used to characterize the transcriptome. Unlike the genome, the transcriptome varies by cell type, developmental stage, and physiological state."
  },
  {
    id: 50,
    question: "Attenuation, as seen in the regulation of the trp operon, involves:",
    options: ["Binding of a repressor to the operator", "Premature termination of transcription based on the translation of a leader peptide", "Methylation of the promoter", "Degradation of the mRNA"],
    answer: 1,
    explanation: "Attenuation is a transcriptional regulatory mechanism in which a leader sequence upstream of the structural genes is translated, and the rate of translation controls whether transcription terminates prematurely (at an attenuator) or continues. In the trp operon, when tryptophan (charged Trp-tRNA) is abundant, the ribosome translates the leader peptide rapidly, forming a terminator stem-loop that halts transcription."
  },
]

export default questions
