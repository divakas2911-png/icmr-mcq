const questions = [
  {
    id: 1,
    question: "The lac operon in E. coli is a classic example of negative gene regulation. The lac repressor protein binds the operator and prevents transcription. In the presence of allolactose (an inducer):",
    options: ["Allolactose binds RNA polymerase and directly activates transcription", "Allolactose binds the repressor, causing a conformational change that reduces DNA-binding affinity, allowing RNA polymerase to transcribe the operon", "Allolactose methylates the operator DNA, preventing repressor binding", "Allolactose degrades the repressor protein via protease activation"],
    answer: 1,
    explanation: "The lac operon uses negative regulation: the lac repressor (encoded by lacI) binds the operator (lacO) and blocks RNA polymerase progression. When allolactose (the true inducer, a lactose isomer) is present, it binds the repressor at an allosteric site, causing conformational change that reduces DNA affinity ~1000-fold. The repressor dissociates, allowing transcription of lacZ, lacY, and lacA. This demonstrates allosteric regulation of transcription."
  },
  {
    id: 2,
    question: "Catabolite repression of the lac operon involves the catabolite activator protein (CAP, also called CRP). When glucose is absent and cAMP is high, CAP-cAMP complex:",
    options: ["Binds the operator and blocks repressor binding", "Binds an upstream DNA sequence (CAP site) and directly contacts RNA polymerase alpha subunit, stimulating transcription", "Degrades cAMP to terminate activation of the lac operon", "Inhibits translation of lac mRNA by competing with ribosomes"],
    answer: 1,
    explanation: "CAP (catabolite activator protein/CRP) is a positive regulatory protein. When cAMP levels are high (glucose absent), cAMP-CAP complex binds the CAP site upstream of the lac promoter. CAP makes direct protein-protein contacts with the alpha subunit of RNA polymerase, stimulating transcription by ~50-fold. This ensures lac operon is maximally expressed only when glucose is absent (catabolite repression prevents wasteful use of alternative carbon sources when glucose is available)."
  },
  {
    id: 3,
    question: "The trp operon uses attenuation as a regulatory mechanism. Attenuation is based on:",
    options: ["Ribosomal stalling when tryptophan levels are low, allowing formation of an anti-terminator RNA hairpin that permits read-through transcription", "Methylation of the trp promoter when tryptophan levels are high", "Binding of tryptophan directly to RNA polymerase to terminate transcription", "CAP-cAMP activation of a trp-specific terminator sequence"],
    answer: 0,
    explanation: "Attenuation couples transcription and translation in prokaryotes. The trp leader RNA has a Trp-rich peptide sequence. When tryptophan is plentiful, ribosomes translate the leader peptide without stalling at Trp codons, allowing formation of a terminator hairpin (structures 3-4) that terminates transcription. When tryptophan is scarce, ribosomes stall at Trp codons, favoring anti-terminator hairpin (2-3) formation, allowing read-through transcription of trp structural genes."
  },
  {
    id: 4,
    question: "In eukaryotes, RNA Polymerase II transcribes:",
    options: ["Ribosomal RNA (rRNA) genes for 18S, 5.8S, and 28S rRNA", "Messenger RNA (mRNA) precursors (pre-mRNA) for protein-coding genes, as well as most snRNAs and miRNAs", "Transfer RNA (tRNA) and 5S rRNA", "Telomerase RNA component (TERC)"],
    answer: 1,
    explanation: "Eukaryotic RNA polymerases have distinct roles: RNA Pol I transcribes 45S pre-rRNA (processed into 18S, 5.8S, 28S); RNA Pol II transcribes protein-coding genes (pre-mRNA), most snRNAs, and most miRNAs; RNA Pol III transcribes tRNAs, 5S rRNA, 7SL RNA (SRP component), and U6 snRNA. TERC (telomerase RNA) is transcribed by RNA Pol III. The carboxyl-terminal domain (CTD) of Pol II's largest subunit is uniquely phosphorylated to coordinate transcription and RNA processing."
  },
  {
    id: 5,
    question: "The TATA box in eukaryotic promoters is recognized by:",
    options: ["RNA Polymerase II directly binding to TATA sequence", "TATA-binding protein (TBP), which is a component of TFIID and initiates pre-initiation complex assembly", "Enhancer-binding transcription factors that recruit RNA Pol II remotely", "Mediator complex that bridges enhancers and promoters"],
    answer: 1,
    explanation: "The TATA box (consensus TATAAA, ~25-30 bp upstream of TSS) is recognized by TBP (TATA-binding protein), a universal component of TFIID. TBP binding creates a sharp bend in DNA (~90°) and serves as a platform for assembly of the pre-initiation complex (PIC). Not all promoters have TATA boxes (~10-20% of human genes); TATA-less promoters use other elements (Inr, DPE, BRE). TBP binds to the minor groove of TATA DNA."
  },
  {
    id: 6,
    question: "Enhancers differ from promoters primarily in that:",
    options: ["Enhancers are always located immediately upstream of the gene they regulate", "Enhancers can function in either orientation and at great distances (up to 1 Mb) from the gene, acting through DNA looping", "Enhancers contain the TATA box and core promoter elements", "Enhancers are only active in differentiated cells, never in stem cells"],
    answer: 1,
    explanation: "Enhancers are cis-regulatory elements that: (1) can act over large distances (hundreds of kb to ~1 Mb); (2) function in either orientation (orientation independent); (3) work upstream or downstream of the gene; (4) are cell-type specific (bound by specific transcription factors). Enhancers act by DNA looping to contact promoters, mediated by cohesin and CTCF. They are marked by H3K4me1 and H3K27ac histone modifications."
  },
  {
    id: 7,
    question: "Alternative splicing of pre-mRNA contributes to proteome diversity primarily by:",
    options: ["Changing the DNA sequence of the gene to produce different proteins", "Including or excluding specific exons or portions of exons to produce multiple protein isoforms from a single gene", "Editing individual nucleotides in the mRNA to change amino acid codons", "Adding or removing post-translational modifications to proteins"],
    answer: 1,
    explanation: "Alternative splicing is a major source of proteome complexity: ~95% of human multi-exon genes are alternatively spliced. Mechanisms include: exon skipping (most common), alternative 5' splice site, alternative 3' splice site, intron retention, and mutually exclusive exons. The spliceosome (snRNPs: U1, U2, U4, U5, U6 + hundreds of proteins) carries out splicing. SR proteins promote exon inclusion; hnRNPs often promote exon skipping."
  },
  {
    id: 8,
    question: "The 5' cap of eukaryotic mRNA (7-methylguanosine cap) functions in:",
    options: ["Serving as the Shine-Dalgarno sequence equivalent for ribosome binding in eukaryotes", "Protecting mRNA from 5' exonuclease degradation, facilitating nuclear export, and promoting translation initiation via eIF4E binding", "Providing the signal for polyadenylation of the 3' end", "Marking the mRNA for NMD (nonsense-mediated decay) if a premature stop codon is present"],
    answer: 1,
    explanation: "The 5' m7G cap is added co-transcriptionally by capping enzyme complex. Functions: (1) protects mRNA from 5' exonuclease degradation; (2) facilitates nuclear export (recognized by CBC, cap-binding complex); (3) promotes translation initiation (recognized by eIF4E, the cap-binding translation initiation factor); (4) essential for splicing of the first intron. Cap is added to all RNA Pol II transcripts when ~25 nt RNA has been synthesized."
  },
  {
    id: 9,
    question: "The poly(A) tail added to the 3' end of most eukaryotic mRNAs is important for:",
    options: ["Terminating transcription by RNA Pol II", "mRNA stability (protecting 3' end from exonucleolytic degradation), nuclear export, and translation efficiency (interaction with PABP/eIF4G)", "Providing the signal sequence for protein targeting to the ER", "Determining the reading frame for translation"],
    answer: 1,
    explanation: "The poly(A) tail (~150-250 adenosines in mammals) is added post-transcriptionally by poly(A) polymerase after cleavage at the poly(A) signal (AATAAA). Functions: (1) protects mRNA from 3' exonuclease degradation; (2) facilitates nuclear export; (3) enhances translation (PABP bound to poly(A) tail interacts with eIF4G, stimulating cap-dependent translation); (4) aids ribosome recycling. Deadenylation is the major trigger for mRNA decay in eukaryotes."
  },
  {
    id: 10,
    question: "Nonsense-mediated mRNA decay (NMD) specifically targets mRNAs that:",
    options: ["Have very short poly(A) tails", "Contain a premature termination codon (PTC) upstream of an exon junction complex (EJC), recognized during the pioneer round of translation", "Have incomplete 5' capping", "Are transcribed from imprinted loci"],
    answer: 1,
    explanation: "NMD is a quality control mechanism that degrades mRNAs with premature stop codons (from nonsense mutations, frameshifts, or aberrant splicing) to prevent production of truncated, potentially dominant-negative proteins. Key rule: if a stop codon is >50-55 nt upstream of the last exon-exon junction (where EJC is deposited), UPF1/UPF2/UPF3 trigger NMD during the pioneer round of translation. NMD explains why many loss-of-function mutations produce no stable truncated protein."
  },
  {
    id: 11,
    question: "MicroRNAs (miRNAs) regulate gene expression post-transcriptionally by:",
    options: ["Acting as antisense oligonucleotides that block DNA transcription", "Binding to the 3' UTR of target mRNAs through complementary base pairing, leading to translational repression and/or mRNA degradation via the RISC complex", "Methylating the promoters of target genes to silence them", "Activating RNA Pol III to produce inhibitory RNA from target gene sequences"],
    answer: 1,
    explanation: "miRNAs (~22 nt) are processed from pri-miRNA (Drosha cleavage in nucleus) → pre-miRNA (Dicer cleavage in cytoplasm) → mature miRNA duplex. One strand is loaded into RISC (RNA-induced silencing complex) with AGO2 (Argonaute). The guide strand base-pairs with 3' UTR of target mRNAs via seed sequence (nt 2-8). Partial complementarity → translational repression + deadenylation/decay; perfect complementarity → mRNA cleavage. One miRNA can regulate hundreds of targets."
  },
  {
    id: 12,
    question: "Small interfering RNAs (siRNAs) differ from miRNAs primarily in that:",
    options: ["siRNAs are encoded by the host genome while miRNAs are of viral origin", "siRNAs show perfect complementarity to their targets causing precise mRNA cleavage, while miRNAs typically show imperfect base pairing and primarily cause translational repression", "siRNAs are nuclear while miRNAs are cytoplasmic", "siRNAs require Drosha for processing; miRNAs require Dicer"],
    answer: 1,
    explanation: "siRNAs typically show perfect or near-perfect complementarity to their target mRNAs, leading to AGO2-mediated endonuclytic cleavage (slicing) of the target. siRNAs are exogenous (from viral dsRNA, transposons, or laboratory-introduced dsRNA) or can originate from inverted repeat loci. miRNAs are encoded in the genome, show imperfect 3'UTR base pairing, and primarily cause translational repression + mRNA destabilization. Both use RISC, but the degree of complementarity determines the mechanism."
  },
  {
    id: 13,
    question: "The spliceosome major assembly pathway involves which snRNPs and in what order?",
    options: ["U1 → U2 → U4/U6.U5 tri-snRNP → catalytic activation requiring U4 displacement", "U2 → U1 → U5 → U6 → U4", "U6 → U4 → U5 → U1 → U2", "All five snRNPs (U1,U2,U4,U5,U6) assemble simultaneously on the pre-mRNA"],
    answer: 0,
    explanation: "Major spliceosome (U2-type) assembly: (1) U1 snRNP recognizes 5' splice site (5'SS); (2) SF1/BB protein + U2AF recognize branch point and polypyrimidine tract/3'SS; (3) U2 snRNP binds branch point (forming pre-spliceosome/complex A); (4) U4/U6.U5 tri-snRNP joins (complex B); (5) U1 and U4 are displaced (Bact complex); (6) B* activated for two transesterification steps; (7) lariat intron removed; (8) exons ligated. U6 forms catalytic metal-coordinating helix with intron."
  },
  {
    id: 14,
    question: "RNA editing in mammals most commonly involves:",
    options: ["C-to-U editing of apolipoprotein B mRNA by APOBEC1, and A-to-I editing of mRNAs by ADAR enzymes", "Insertional RNA editing adding uridines to mRNA in trypanosomes", "Deletion of nucleotides from mRNA by editosome complexes", "G-to-A editing of mitochondrial mRNAs"],
    answer: 0,
    explanation: "Two main RNA editing types in mammals: (1) A-to-I editing by ADAR (adenosine deaminase acting on RNA) enzymes — converts adenosine to inosine (read as G by ribosomes). Important in brain (AMPA receptor GluA2, serotonin 2C receptor). Thousands of sites in Alu repeats. (2) C-to-U editing by APOBEC1 — converts specific cytidine to uridine in ApoB mRNA in intestine, creating a premature stop codon, producing shorter ApoB48 instead of liver ApoB100."
  },
  {
    id: 15,
    question: "Long non-coding RNAs (lncRNAs) are defined by which of the following criteria?",
    options: [">200 nt in length and lacking a significant open reading frame (ORF) for protein coding, though they may have regulatory functions", "Being encoded exclusively in intergenic regions with no overlap with protein-coding genes", "Being transcribed by RNA Pol III and processed like tRNAs", "Having no secondary structure and functioning purely as single-stranded RNA molecules"],
    answer: 0,
    explanation: "lncRNAs are defined as RNA transcripts >200 nt that lack significant protein-coding potential (distinguish from small RNAs). They are transcribed by RNA Pol II (capped, polyadenylated, spliced like mRNAs). Functions include: chromatin remodeling (XIST, HOTAIR, NEAT1), transcriptional regulation (enhancer RNAs), post-transcriptional regulation, nuclear architecture (paraspeckles). >10,000 human lncRNAs identified; most have cell-type specific expression."
  },
  {
    id: 16,
    question: "Riboswitches are regulatory RNA elements found in the 5' UTR of bacterial mRNAs that:",
    options: ["Recruit regulatory proteins to control splicing", "Directly sense small molecule ligands (metabolites) through specific RNA aptamer domains, causing structural changes that control transcription termination or translation initiation", "Are cleaved by RNase III to generate small regulatory RNAs", "Base-pair with sRNA (small regulatory RNAs) to modulate translation"],
    answer: 1,
    explanation: "Riboswitches are aptamer-expression platform combinations in 5' UTRs. The aptamer domain binds a specific metabolite ligand (e.g., TPP/thiamine pyrophosphate, SAM, adenine, lysine, cobalamin). Ligand binding causes conformational change in the expression platform: (1) intrinsic terminator hairpin formation → transcription termination; or (2) sequestration of Shine-Dalgarno sequence → inhibition of translation. Most riboswitches are 'off-switches'; ligand binding represses gene expression."
  },
  {
    id: 17,
    question: "The sigma (σ) factor in bacterial RNA polymerase is responsible for:",
    options: ["Phosphodiester bond formation during RNA chain elongation", "Promoter recognition and specificity, directing the holoenzyme to specific promoter sequences; released after transcription initiation", "Proofreading and correcting errors during RNA synthesis", "Terminating transcription at Rho-dependent termination sequences"],
    answer: 1,
    explanation: "The bacterial RNA polymerase holoenzyme = core enzyme (α₂ββ'ω) + sigma (σ) factor. The sigma factor confers promoter specificity by recognizing the -10 (TATAAT) and -35 (TTGACA) elements of σ70-dependent promoters. After initiation (formation of open complex and synthesis of first ~8-9 nt), sigma is released and core enzyme continues elongation. Different sigma factors (σ32, σ54, σS, σB) recognize different promoter sequences for stress responses."
  },
  {
    id: 18,
    question: "Transcription-coupled nucleotide excision repair (TC-NER) is initiated when:",
    options: ["XPC protein detects DNA damage during genome-wide scanning", "RNA Pol II stalls at a DNA lesion on the template strand, triggering recruitment of CSA, CSB, and TFIIH for rapid repair of transcribed strand lesions", "ATR kinase phosphorylates histone H2AX at the lesion site", "The 8-oxoguanine glycosylase initiates base excision repair"],
    answer: 1,
    explanation: "TC-NER rapidly repairs bulky DNA lesions (CPDs from UV, chemical adducts) on the transcribed strand by coupling repair to RNA Pol II stalling. Stalled Pol II recruits CSB (Cockayne syndrome B) → CSA → UVSSA → TFIIH → XPA → XPG/XPF-ERCC1. The damaged ~25-30 nt oligonucleotide is excised, gap is filled, and Pol II resumes transcription. TC-NER is faster than global genome NER. Mutations in CSA/CSB cause Cockayne syndrome (photosensitivity, neurodegeneration)."
  },
  {
    id: 19,
    question: "In eukaryotic translation, the Kozak sequence context around the AUG initiation codon is important because:",
    options: ["It is the sequence recognized by the large ribosomal subunit for 60S joining", "It optimizes the efficiency of AUG recognition by the 43S pre-initiation complex during scanning; the consensus is (gcc)gccRccAUGG", "It determines the codon usage bias of the entire mRNA", "It is cleaved by the signal recognition particle (SRP) to direct ribosomes to the ER"],
    answer: 1,
    explanation: "The Kozak sequence (consensus: gccRccAUGG, where R is a purine) flanks the AUG start codon in eukaryotic mRNAs and optimizes translation initiation efficiency. The most important positions are: a purine (usually A) at -3 and G at +4 (just after AUG). Strong Kozak context increases translation efficiency ~10-fold. Weak Kozak sequences lead to leaky scanning (ribosome scans past the first AUG), which can be exploited for regulatory uORFs (upstream open reading frames)."
  },
  {
    id: 20,
    question: "Rho-dependent transcription termination in bacteria requires:",
    options: ["Formation of a GC-rich palindromic hairpin in the RNA followed by a U-rich sequence", "Rho factor (ATP-dependent RNA translocase) that binds rut sites on nascent RNA and tracks along RNA, translocating faster than RNA polymerase to catch stalled Pol and disrupt the RNA-DNA hybrid", "Sigma factor dissociation from the core enzyme to expose the termination sequence", "Poly(A) addition to the 3' end of the mRNA transcript"],
    answer: 1,
    explanation: "Rho-dependent termination: (1) Rho factor (hexameric RNA translocase) binds rut (Rho utilization) sites — C-rich, unstructured RNA segments; (2) Rho uses ATP hydrolysis to translocate along RNA in 5'→3' direction; (3) Rho catches paused RNA Pol and uses helicase activity to unwind the RNA-DNA hybrid, releasing the transcript. Used for ~50% of E. coli transcription termination. Rho-independent (intrinsic) termination uses hairpin + U-rich sequences."
  },
  {
    id: 21,
    question: "The process of 'transcriptional interference' occurs when:",
    options: ["A repressor protein from one promoter binds and blocks an adjacent promoter", "Transcription from one promoter physically or mechanistically suppresses transcription from an adjacent or overlapping promoter, often due to RNA Pol collision or promoter occlusion", "Two transcription factors compete for the same enhancer binding site", "Methylation of one gene promoter spreads to silence an adjacent gene"],
    answer: 1,
    explanation: "Transcriptional interference (TI) occurs when transcription from one promoter inhibits transcription from a nearby promoter. Mechanisms include: (1) promoter occlusion — elongating Pol from upstream promoter passes through and disrupts downstream promoter assembly; (2) squelching — competition for shared activators; (3) roadblocking — Pol pausing blocks approach to downstream promoter; (4) sitting duck — elongating Pol displaces bound activators from downstream promoter. TI is important in lentiviral LTR regulation and some eukaryotic gene pairs."
  },
  {
    id: 22,
    question: "piRNAs (PIWI-interacting RNAs) are important in the germline primarily for:",
    options: ["Regulating developmental gene expression similar to miRNAs", "Suppressing transposable element (TE) activity in the germline to maintain genome integrity, working with PIWI proteins (MILI, MIWI, MIWI2 in mice)", "Processing of pre-mRNA in spermatocytes", "Directing DNA methylation at all CpG sites genome-wide"],
    answer: 1,
    explanation: "piRNAs (24-32 nt) are produced by a ping-pong amplification cycle in the germline and interact with PIWI-clade Argonaute proteins (MILI/PIWIL2, MIWI/PIWIL1, MIWI2/PIWIL4 in mice). piRNAs silence transposable elements (TEs) through: (1) post-transcriptional slicing of TE mRNAs; (2) directing de novo DNA methylation at TE loci (via MIWI2 in nuclei). piRNA loss causes transposon derepression, genome instability, and male infertility. Abundant in testes."
  },
  {
    id: 23,
    question: "The Mediator complex in eukaryotes functions to:",
    options: ["Process pre-mRNA by coordinating the capping and splicing machinery", "Bridge gene-specific transcriptional activators/repressors to the general transcription machinery (RNA Pol II PIC), transmitting regulatory signals to control transcription", "Directly methylate histone H3 lysine 4 at active promoters", "Transport mature mRNA from nucleus to cytoplasm"],
    answer: 1,
    explanation: "Mediator is a ~30-subunit coactivator complex (organized into head, middle, tail modules + kinase module) that serves as a bridge between enhancer-bound transcription factors and RNA Pol II/general transcription factors. It transmits regulatory information from gene-specific activators/repressors to the Pol II pre-initiation complex. Mediator is required for most RNA Pol II transcription. The kinase module (CDK8) can repress or activate transcription depending on context."
  },
  {
    id: 24,
    question: "In the context of gene expression, 'transcriptional bursting' refers to:",
    options: ["The coordinated induction of multiple genes in response to a single signal", "Stochastic, pulsatile gene expression where genes switch between active (ON) and inactive (OFF) states, producing episodic bursts of mRNA", "The simultaneous transcription of a gene by multiple RNA polymerases (as seen in lampbrush chromosomes)", "Rapid degradation of mRNA after a peak of transcription"],
    answer: 1,
    explanation: "Single-cell gene expression measurements (smFISH, scRNA-seq) reveal that many genes are not transcribed continuously but in stochastic bursts — periods of high transcriptional activity (ON state) alternating with silent periods (OFF state). This transcriptional bursting causes cell-to-cell variability (noise) in gene expression even in genetically identical cells. Burst frequency and burst size are independently regulated by different regulatory mechanisms (enhancers affect burst frequency; promoter affects burst size)."
  },
  {
    id: 25,
    question: "Splicing regulatory elements (SREs) include exonic splicing enhancers (ESEs) that are bound by:",
    options: ["hnRNP proteins that repress splicing of the associated exon", "SR proteins (serine-arginine-rich proteins) that promote exon inclusion by recruiting U1/U2 snRNPs or antagonizing silencers", "RNA Pol II CTD to couple splicing with transcription", "The branch point binding protein SF1 to define the branch point adenosine"],
    answer: 1,
    explanation: "Exonic splicing enhancers (ESEs) are short sequences within exons that enhance splicing of the associated exon. They are bound by SR proteins (SRSF1-12) — characterized by RRM (RNA recognition motif) and RS domain (serine-arginine dipeptides). SR proteins promote exon inclusion by: recruiting U1 snRNP to 5'SS, U2AF to 3'SS, and antagonizing exonic splicing silencers (ESSs) bound by hnRNP proteins. ESE mutations can cause exon skipping (e.g., in BRCA1, SMN2)."
  },
  {
    id: 26,
    question: "The 7SK snRNA acts as a regulator of transcription elongation by:",
    options: ["Methylating RNA Pol II CTD Ser2 to promote elongation", "Sequestering positive transcription elongation factor b (P-TEFb = CDK9/cyclin T1) in an inactive form, limiting the available active P-TEFb for transcription elongation", "Base-pairing with the nascent RNA to pause RNA Pol II at promoter-proximal regions", "Promoting polyadenylation of transcripts from paused RNA Pol II"],
    answer: 1,
    explanation: "7SK snRNA forms the 7SK snRNP complex with HEXIM1/2 (inhibitory proteins) and LARP7/MePCE (structural proteins), which sequesters P-TEFb (CDK9-CyclinT1) in an inactive form. Active P-TEFb phosphorylates RNA Pol II CTD Ser2 and DSIF/NELF (elongation factors), releasing promoter-proximal paused Pol II into productive elongation. Signal-dependent release of P-TEFb from 7SK complex (e.g., by BRD4) allows burst transcription of target genes. This is critical for rapid induction of stress-response genes."
  },
  {
    id: 27,
    question: "The nuclear pore complex (NPC) controls mRNA export from nucleus to cytoplasm. mRNA export requires:",
    options: ["The mRNA to be fully translated within the nucleus first", "TREX (Transcription-Export) complex loading on processed mRNA, with TAP-p15 heterodimer as the major export receptor recognizing EJC/cap/poly(A) signals", "Splicing of all introns before nuclear export is permitted", "Retrograde transport of mRNA through the endoplasmic reticulum"],
    answer: 1,
    explanation: "mRNA nuclear export is coupled to transcription and processing. TREX (THO complex + ALYREF/UAP56) is loaded on mRNA co-transcriptionally. ALYREF serves as an adaptor for TAP/NXF1 (the major mRNA export receptor). TAP-p15 heterodimer directs mRNA to NPC, interacting with FG-repeat nucleoporins. The EJC deposited at exon junctions also promotes export. mRNA export is checked — incompletely processed mRNAs are retained in the nucleus by TREX-2/GANP surveillance."
  },
  {
    id: 28,
    question: "Promoter-proximal pausing of RNA Pol II is a regulatory mechanism where:",
    options: ["RNA Pol II terminates transcription ~30-50 bp downstream of the TSS due to an intrinsic termination sequence", "RNA Pol II pauses 25-60 bp downstream of TSS in a stable, halted conformation (induced by DSIF and NELF), poised for rapid release upon signaling", "RNA Pol II backtracks and cleaves the nascent RNA, then restarts from the cleavage site", "RNA Pol II recruits the spliceosome before continuing transcription"],
    answer: 1,
    explanation: "Promoter-proximal pausing (PPP) is widespread in metazoans (~50-70% of genes). After initiating, RNA Pol II pauses 25-60 nt downstream of TSS in a stable conformation stabilized by DSIF (Spt4-Spt5) and NELF (negative elongation factor). This poised Pol II creates a 'loaded gun' for rapid gene induction. Release requires P-TEFb (CDK9/CycT1) phosphorylation of DSIF, NELF, and Pol II CTD Ser2. PPP coordinates transcription with RNA processing (capping, splicing)."
  },
  {
    id: 29,
    question: "In bacteria, the Shine-Dalgarno (SD) sequence facilitates translation initiation by:",
    options: ["Binding the sigma factor to activate RNA Pol II at the start codon", "Base-pairing with the 3' end of 16S rRNA (anti-SD sequence) to position the ribosome on the mRNA with the AUG start codon in the P-site", "Recruiting tRNA-fMet directly to the mRNA without ribosome involvement", "Serving as the binding site for release factors that terminate translation"],
    answer: 1,
    explanation: "The Shine-Dalgarno (SD) sequence (consensus AGGAGG) is located ~5-10 nt upstream of the AUG start codon in bacterial mRNAs. It base-pairs with the complementary anti-SD sequence (CCUCCU) at the 3' end of 16S rRNA in the 30S subunit. This positions the AUG directly in the P-site of the ribosome, facilitating fMet-tRNA binding and translation initiation. The SD-anti-SD interaction is a key determinant of translation efficiency."
  },
  {
    id: 30,
    question: "The ENCODE project major finding regarding the human genome was that:",
    options: ["The human genome contains exactly 30,000 protein-coding genes", "Approximately 80% of the human genome shows biochemical activity (transcription, protein/RNA binding, chromatin accessibility) in at least one cell type, challenging the 'junk DNA' concept", "The human genome contains fewer transposable elements than previously estimated", "Protein-coding exons constitute ~50% of the human genome"],
    answer: 1,
    explanation: "ENCODE (Encyclopedia of DNA Elements) project found that ~80% of the human genome shows biochemical functionality (transcription, TF binding, chromatin marks, DNase hypersensitivity) in at least one of the many cell types studied. This challenged the simplistic 'junk DNA' view. However, 'biochemical activity' doesn't necessarily mean 'biological function' — the interpretation remains debated. The project identified ~20,000 distal regulatory elements (enhancers, silencers) for each cell type."
  },
  {
    id: 31,
    question: "In eukaryotic cells, the 'closed to open' transition of the RNA Pol II pre-initiation complex (PIC) refers to:",
    options: ["The transition from heterochromatin to euchromatin enabling RNA Pol access", "Melting of the DNA duplex around the TSS by TFIIH helicase (XPB subunit) to form the transcription bubble, creating an open complex for template strand scanning", "Release of chromatin remodeling complexes after PIC assembly", "Transition of TFIIH from kinase to helicase activity"],
    answer: 1,
    explanation: "After PIC assembly at the promoter (closed complex: dsDNA, Pol II, TFIIA, TFIIB, TFIID, TFIIE, TFIIF, TFIIH), TFIIH's XPB (ERCC3) helicase uses ATP hydrolysis to unwind ~10-15 bp of promoter DNA around the TSS, creating the transcription bubble (open complex). The template strand threads into the Pol II active site cleft. This transition is analogous to bacterial open complex formation by sigma factor and is required for productive RNA synthesis."
  },
  {
    id: 32,
    question: "Circular RNA (circRNA) is generated by:",
    options: ["3'-5' ligation of linear RNA ends by RNA ligase enzymes", "Back-splicing where a downstream 5' splice site is joined to an upstream 3' splice site, creating a covalently closed loop", "Rolling circle transcription from circular plasmid-like DNA elements", "Retrotransposition of mRNA into circular DNA that is then transcribed"],
    answer: 1,
    explanation: "Circular RNAs (circRNAs) are produced by back-splicing: the spliceosome joins a downstream exon's 5' splice site to an upstream exon's 3' splice site in reverse order, creating a covalently closed circular molecule. circRNAs are highly stable (resistant to exonucleases), can act as miRNA sponges (e.g., CDR1as/ciRS-7 sponges miR-7), regulate RNA-binding proteins, and some are translated. Many are tissue-specifically expressed. Detected by total RNA-seq after rRNA depletion."
  },
  {
    id: 33,
    question: "The concept of 'mRNA stability' in eukaryotes is primarily regulated by:",
    options: ["The number of ribosomes actively translating the mRNA (polysome loading)", "Specific sequences in the 3' UTR (AU-rich elements/AREs, miRNA binding sites) and 5' UTR, as well as RNA-binding proteins and codon usage", "The degree of 5' cap methylation", "Chromosomal position of the gene (proximity to centromere affects mRNA half-life)"],
    answer: 1,
    explanation: "mRNA stability is regulated by multiple mechanisms: (1) AU-rich elements (AREs) in 3'UTR recruit deadenylases (e.g., TNFΑ, GM-CSF mRNAs have unstable AREs); (2) miRNA binding sites in 3'UTR promote deadenylation/decay; (3) RNA-binding proteins (e.g., HuR stabilizes, TTP destabilizes ARE-mRNAs); (4) codon optimality — optimal codons slow ribosome, protect mRNA; rare codons accelerate decay; (5) 5'UTR secondary structure affects ribosome access and mRNA half-life."
  },
  {
    id: 34,
    question: "Transfer RNA (tRNA) undergoes extensive post-transcriptional modifications. Which modification is essential for wobble base pairing at the anticodon wobble position?",
    options: ["Pseudouridine (Ψ) at position 55 in the TΨC loop", "Inosine (I) at anticodon position 34 (wobble position), derived from adenosine deamination by ADAT", "Queuosine at position 34 in the anticodon", "m7G (7-methylguanosine) at position 46"],
    answer: 1,
    explanation: "Inosine (I) at the wobble position (position 34) of the anticodon is derived from adenosine by ADAT (adenosine deaminase acting on tRNA). Inosine can wobble base pair with U, C, or A at the 3rd codon position, allowing one tRNA to recognize multiple codons (e.g., INN anticodon reads UN, CN, and AN codons). This 'inosine wobble' expands decoding capacity. Without inosine at position 34, more distinct tRNA species would be required to decode all synonymous codons."
  },
  {
    id: 35,
    question: "Aminoacyl-tRNA synthetases (aaRS) ensure accurate translation by:",
    options: ["Reading the mRNA codon sequence to match the correct amino acid", "Charging specific tRNAs with their cognate amino acids; proofreading activity (editing) at the editing active site hydrolyzes mischarged amino acids to ensure accuracy", "Processing tRNA from pre-tRNA to mature tRNA", "Recycling ribosome after peptide release"],
    answer: 1,
    explanation: "Aminoacyl-tRNA synthetases (one per canonical amino acid, or shared in some organisms) catalyze aminoacylation in two steps: (1) amino acid activation to aminoacyl-AMP (adenylation); (2) transfer to 3' OH of tRNA (transesterification). Editing (proofreading) occurs post-transfer (post-transfer editing) or pre-transfer: mischarged amino acids are hydrolyzed in the editing active site (distinct from aminoacylation site). Editing ensures translation accuracy (~1 error per 10,000 amino acid incorporations)."
  },
  {
    id: 36,
    question: "Stress granules (SGs) and P-bodies (GW-bodies) in eukaryotic cells are related to mRNA metabolism in that:",
    options: ["They are sites of active translation where mRNAs are efficiently translated under stress", "P-bodies are sites of mRNA degradation and miRNA-mediated silencing; stress granules form under stress conditions and contain stalled translation pre-initiation complexes and mRNAs sequestered from active translation", "They are equivalent structures with identical RNA and protein composition", "They form only in the nucleus and do not affect cytoplasmic mRNA"],
    answer: 1,
    explanation: "P-bodies (processing bodies) are constitutive cytoplasmic foci containing mRNA degradation machinery (DCP1/DCP2 decapping enzymes, XRN1 5'→3' exoribonuclease, AGO2/RISC). Stress granules (SGs) form under stress conditions (heat, oxidative stress, dsRNA) when eIF2α is phosphorylated by stress kinases (HRI, PKR, GCN2, PERK), stalling translation initiation. SGs contain mRNAs, stalled 43S PICs, poly(A)-binding protein, and RNA-binding proteins. SGs and P-bodies can physically interact and exchange components."
  },
  {
    id: 37,
    question: "The translation termination codons UAA, UAG, and UGA are recognized by:",
    options: ["Specific tRNAs called release tRNAs that carry a water molecule instead of an amino acid", "Protein release factors (eRF1 in eukaryotes, RF1/RF2 in bacteria) that mimic tRNA structure (molecular mimicry) and recognize stop codons in the ribosomal A-site", "Ribosomal RNA directly, without any protein cofactors", "Nonsense suppressor tRNAs encoded in the standard genetic code"],
    answer: 1,
    explanation: "Stop codons (UAA, UAG, UGA) are not decoded by tRNAs but by protein release factors: In bacteria, RF1 (UAA, UAG) and RF2 (UAA, UGA) recognize stop codons via PVT/SPF tripeptide motifs (molecular mimicry of tRNA structure). RF3 (GTP-binding) helps release RF1/RF2. In eukaryotes, eRF1 recognizes all three stop codons; eRF3 (GTP-binding) stimulates peptide release. Peptidyl-tRNA hydrolysis releases the polypeptide; the ribosome is recycled by ABCE1 (eukaryotes) or RRF+EF-G (bacteria)."
  },
  {
    id: 38,
    question: "Upstream open reading frames (uORFs) in the 5' UTR of eukaryotic mRNAs typically:",
    options: ["Enhance translation of the main ORF by pre-positioning ribosomes at the start site", "Reduce translation of the main ORF under normal conditions by causing ribosome release or stalling before reaching the main AUG", "Have no effect on main ORF translation, as ribosomes scan through the 5' UTR", "Are exclusively found in stress-response genes"],
    answer: 1,
    explanation: "Upstream ORFs (uORFs) are regulatory sequences in 5' UTRs upstream of the main ORF. Ribosomes scanning from the 5' cap may initiate at the uORF AUG, translate the short uORF peptide, and then: (1) terminate and fail to re-initiate at main ORF (reducing main ORF translation); or (2) reinitiate at main ORF if reinitiation efficiency is high. Under ER stress, phospho-eIF2α paradoxically increases translation of ATF4 by allowing ribosomes to bypass inhibitory uORFs and initiate at the main ATF4 ORF."
  },
  {
    id: 39,
    question: "In bacteria, the 70S ribosome initiates translation from 30S and 50S subunits. The accuracy of decoding in the A site involves which mechanism?",
    options: ["Kinetic proofreading where EF-Tu hydrolyzes GTP twice for each cognate aminoacyl-tRNA", "Induced fit: cognate codon-anticodon interactions induce conformational change in the 30S decoding center, promoting GTP hydrolysis by EF-Tu and accommodation of correct aminoacyl-tRNA", "RNA editing to correct mismatched codon-anticodon pairs", "DNA template-based proofreading analogous to DNA replication"],
    answer: 1,
    explanation: "Ribosomal decoding accuracy relies on: (1) initial selection — cognate codon-anticodon base pairing at 16S rRNA A1492/A1493/G530 causes induced fit (domain closure), stabilizing the ternary complex and promoting GTP hydrolysis by EF-Tu; (2) proofreading — after GTP hydrolysis and EF-Tu release, non-cognate aminoacyl-tRNAs dissociate before accommodation into the peptidyl transferase center. This two-step kinetic proofreading achieves ~10⁻⁴ error rate."
  },
  {
    id: 40,
    question: "The 'codon usage bias' phenomenon refers to:",
    options: ["The universal preference of all organisms for the same codons to encode each amino acid", "The non-random use of synonymous codons in different organisms, reflecting tRNA abundance, GC content, and translational efficiency requirements", "The bias of the genetic code toward encoding certain amino acids more frequently than others", "The preference of ribosomes to read codons in the 5' to 3' direction"],
    answer: 1,
    explanation: "Synonymous codons (encoding the same amino acid) are not used equally. Codon bias reflects: (1) tRNA availability — abundant tRNAs have cognate codons used more frequently (optimal codons); (2) GC content of the organism; (3) translational speed — optimal codons speed translation, rare codons cause pausing (important for co-translational folding); (4) mRNA stability. Codon optimization is used in gene expression systems to maximize protein production (e.g., therapeutic proteins, COVID vaccines)."
  },
  {
    id: 41,
    question: "Nuclear retained lncRNAs like NEAT1 form:",
    options: ["Nuclear pores for RNA export", "Paraspeckles — membraneless nuclear organelles involved in stress response and possibly nuclear mRNA retention through sequestration of adenosine-to-inosine edited mRNAs", "Nucleolar structures for rRNA processing", "Chromatin loops that insulate gene loci"],
    answer: 1,
    explanation: "NEAT1 lncRNA (two isoforms: NEAT1_1 at ~3.7 kb and NEAT1_2 at ~22.7 kb) is essential for paraspeckle formation — nuclear bodies assembled around the NEAT1_2 RNA scaffold. Paraspeckles sequester specific proteins and mRNAs (particularly those containing A-to-I edited inverted Alu repeats). Under stress, paraspeckles disassemble releasing sequestered factors. NEAT1 is upregulated in many cancers and stress conditions."
  },
  {
    id: 42,
    question: "TmRNA (transfer-messenger RNA) in bacteria resolves:",
    options: ["Frameshifting errors during translation elongation", "Ribosome stalling on mRNAs lacking a stop codon (non-stop mRNAs), by adding a tag sequence to the stalled polypeptide targeting it for degradation and rescuing the ribosome", "Premature termination at internal stop codons", "Ribosome collision during polysome translation"],
    answer: 1,
    explanation: "tmRNA (product of the ssrA gene) has both tRNA-like and mRNA-like domains. When ribosomes stall at the 3' end of truncated mRNAs (lacking stop codon) — trans-translation occurs: (1) tmRNA-SmpB mimics Ala-tRNA, entering the A-site and accepting the stalled polypeptide; (2) the ribosome switches from the truncated mRNA to the tmRNA's ORF; (3) tmRNA encodes a degradation tag (ANDENYALAA in E. coli); (4) the ribosome terminates at the tmRNA stop codon; (5) the tagged protein is degraded by ClpXP/ClpAP proteases."
  },
  {
    id: 43,
    question: "IRES (Internal Ribosome Entry Site) elements in eukaryotic mRNAs allow:",
    options: ["Prokaryote-type Shine-Dalgarno-mediated translation in eukaryotes", "Cap-independent translation initiation by recruiting ribosomes directly to an internal region of the mRNA, used during stress when cap-dependent translation is inhibited", "Selective amplification of mRNA during stress conditions via RNA replication", "Alternative polyadenylation directing the ribosome to the 3' end"],
    answer: 1,
    explanation: "IRES elements (found in picornavirus RNAs, HCV, and some cellular mRNAs like VEGF, XIAP, p53) allow cap-independent translation by recruiting ribosomes directly to an internal position. This is critical during stress (eIF4E inhibition, apoptosis) or viral infection when cap-dependent translation is globally suppressed. Viral IRESes use highly structured RNA to directly contact ribosomes. Cellular IRESes are generally less efficient and more cell-type/condition specific."
  },
  {
    id: 44,
    question: "The concept of 'RNA granules' in the context of phase separation refers to:",
    options: ["RNA molecules that form crystalline granules in the nucleus", "Membraneless organelles formed by liquid-liquid phase separation (LLPS) of RNA-binding proteins with low-complexity/intrinsically disordered regions and RNA molecules", "Granules formed by ribosomal subunits during ribosome biogenesis", "Condensates of heterochromatin-associated RNAs"],
    answer: 1,
    explanation: "RNA granules (stress granules, P-bodies, neuronal granules, germ granules) form through liquid-liquid phase separation (LLPS) of RNA-binding proteins with intrinsically disordered/low-complexity regions (IDRs/LCRs) — notably FUS, TDP-43, hnRNPA1 — and RNA. These form dynamic liquid droplets with rapid internal exchange. Mutations in IDRs (FUS in ALS/FTD) can cause aberrant solidification into pathological aggregates. LLPS is driven by multivalent weak interactions."
  },
  {
    id: 45,
    question: "In eukaryotic transcription, the CTD (C-terminal domain) of RNA Pol II is phosphorylated at Ser5 and Ser2 of the heptapeptide repeat (YSPTSPS). The functional significance is:",
    options: ["Ser5 phosphorylation promotes transcription termination; Ser2 promotes initiation", "Ser5 phosphorylation by TFIIH (CDK7) promotes early elongation and cap addition; Ser2 phosphorylation by P-TEFb (CDK9) promotes productive elongation and polyadenylation", "Both Ser5 and Ser2 phosphorylation independently promote enhancer-promoter looping", "CTD phosphorylation recruits the spliceosome to splice out introns from the CTD itself"],
    answer: 1,
    explanation: "The RNA Pol II CTD has 52 heptapeptide repeats (YSPTSPS). Phosphorylation state changes during transcription cycle: (1) Hypophosphorylated CTD in PIC (binds Mediator); (2) Ser5-P (by TFIIH/CDK7 at initiation) — recruits capping enzyme for m7G cap addition, promotes early elongation; (3) Ser2-P (by P-TEFb/CDK9 at elongation) — recruits splicing factors, 3' end processing/polyadenylation machinery; (4) Dephosphorylated by CTD phosphatases (Ssu72, RPAP2) to recycle Pol II."
  },
  {
    id: 46,
    question: "The decapping of mRNA, a key step in 5' to 3' cytoplasmic mRNA decay, is catalyzed by:",
    options: ["XRN1 exoribonuclease that removes the cap while degrading the 5' end", "DCP1-DCP2 decapping enzyme complex (activated by LSm1-7 ring and DDX6/Pat1) that cleaves the cap after deadenylation", "DCPS scavenger decapping enzyme that acts on free cap structures released during mRNA decay", "PARN deadenylase that coordinately removes both the poly(A) tail and cap"],
    answer: 1,
    explanation: "mRNA decay (major pathway): (1) deadenylation (CCR4-NOT/PAN2-PAN3 complexes shorten poly(A) tail); (2) DCP1-DCP2 decapping (stimulated by LSm1-7 ring bound to oligoadenylated mRNA + Pat1 scaffolding + DDX6/Dhh1 helicase); (3) XRN1 (5'→3' exoribonuclease) degrades the decapped body. Alternative pathway: exosome complex degrades mRNA 3'→5' after deadenylation. Both pathways occur in P-bodies. DCPS scavenger decapping enzyme clears free cap structures."
  },
  {
    id: 47,
    question: "Transcription factor binding in chromatin is governed by 'pioneer factors' that differ from classical transcription factors in that:",
    options: ["Pioneer factors only function at constitutively open chromatin regions", "Pioneer factors can bind nucleosomal/compacted chromatin and open it for binding by other transcription factors and RNA Pol II", "Pioneer factors are exclusively expressed during embryonic development", "Pioneer factors directly synthesize RNA without requiring RNA Pol II"],
    answer: 1,
    explanation: "Pioneer transcription factors (e.g., FOXA, OCT4, SOX2, GATA proteins) have the unique ability to bind nucleosome-compacted chromatin and initiate chromatin opening. They bind partial motifs on nucleosome surfaces and recruit chromatin remodelers (SWI/SNF) and histone-modifying complexes (HATs). This creates accessible chromatin for non-pioneer transcription factors and RNA Pol II. Pioneer factors are critical for cell fate decisions, reprogramming, and cancer lineage plasticity."
  },
  {
    id: 48,
    question: "RNA Pol I transcribes the 45S pre-rRNA in which nuclear compartment?",
    options: ["Cajal bodies", "The nucleolus, specifically at the fibrillar center/dense fibrillar component junction", "The nuclear speckles (interchromatin granule clusters)", "Nuclear lamina-associated domains"],
    answer: 1,
    explanation: "RNA Pol I transcribes 45S pre-rRNA exclusively within the nucleolus, at the interface of the fibrillar center (FC) and dense fibrillar component (DFC). The fibrillar center contains rDNA repeats and nascent Pol I; the DFC contains early rRNA processing factors (fibrillarin, Nop58); the granular component (GC) contains later processing factors (B23/nucleophosmin) and assembling pre-ribosomes. The nucleolus disassembles during mitosis and reassembles from NOR (nucleolar organizer regions) in G1."
  },
  {
    id: 49,
    question: "Exon definition in splice site recognition means:",
    options: ["Exons are defined by their consensus GT-AG boundaries at 5' and 3' splice sites", "The spliceosome defines exons by simultaneously interacting with the 5' splice site (U1 snRNP) and 3' splice site (U2AF/SF1) flanking each exon across the exon (~50-300 nt), rather than across the intron", "Exon sequences always begin with the sequence ATG and end with a stop codon", "The length of exons (50-200 nt) determines which sequences are recognized as exons vs. introns"],
    answer: 1,
    explanation: "Exon definition model: for short exons flanked by long introns (common in vertebrates), the spliceosome initially defines each exon by U1 snRNP binding the downstream 5'SS and U2AF/SF1 binding the upstream 3'SS across the short exon. This cross-exon complex then converts to a cross-intron complex for actual splicing. This explains why exon size is constrained (~50-300 nt) and why exon mutations affecting splice regulatory elements cause exon skipping."
  },
  {
    id: 50,
    question: "The integrated stress response (ISR) is triggered by phosphorylation of eIF2α by stress kinases. This results in:",
    options: ["Global upregulation of all translation to compensate for cellular stress", "Global downregulation of cap-dependent translation while selectively upregulating translation of specific mRNAs with uORFs (like ATF4) that promote stress adaptation", "Activation of IRES-dependent translation of all mRNAs in the cell", "Nuclear export of ribosomes to prevent translation of stress-response mRNAs"],
    answer: 1,
    explanation: "The ISR involves phosphorylation of eIF2α at Ser51 by four kinases: HRI (heme deficiency), PKR (viral dsRNA), GCN2 (amino acid deprivation), PERK (ER stress). Phospho-eIF2α is a competitive inhibitor of eIF2B (the GEF for eIF2), reducing active eIF2-GTP globally and inhibiting most translation. However, specific mRNAs with inhibitory uORFs (ATF4, ATF5, CHOP) are paradoxically upregulated by a uORF bypass mechanism, producing stress-adaptive transcription factors. This is the 'integrated' ISR."
  }
];

export default questions;
