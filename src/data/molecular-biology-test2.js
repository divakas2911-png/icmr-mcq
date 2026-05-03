export const questions = [
  {
    id: 1,
    question: "Which sigma factor in E. coli is primarily responsible for transcription of heat shock genes?",
    options: ["σ70 (RpoD)", "σ32 (RpoH)", "σ54 (RpoN)", "σ38 (RpoS)"],
    answer: 1,
    explanation: "σ32 (encoded by rpoH) is induced upon heat shock and directs RNA polymerase to promoters of heat shock genes (chaperones, proteases). σ70 is the housekeeping sigma factor, σ54 is used for nitrogen metabolism, and σ38 is the stationary-phase sigma factor."
  },
  {
    id: 2,
    question: "The -10 consensus sequence of a typical E. coli σ70 promoter is:",
    options: ["TTGACA", "TATAAT", "TATAAA", "CAAT box"],
    answer: 1,
    explanation: "The -10 element (Pribnow box) consensus is TATAAT for σ70 promoters. The -35 consensus is TTGACA. TATAAA is the eukaryotic TATA box, and CAAT box is a eukaryotic enhancer element."
  },
  {
    id: 3,
    question: "During transcription initiation, the transition from 'abortive initiation' to 'promoter escape' is associated with:",
    options: ["Sigma factor dissociation from core enzyme", "Loss of the 5' RNA-DNA hybrid and sigma release", "Phosphorylation of RNA Pol II CTD", "Formation of the open complex from closed complex"],
    answer: 1,
    explanation: "Promoter escape involves sigma factor release as the elongation complex forms. The RNA-DNA hybrid length reaches a critical threshold (~9-10 nt) that destabilizes sigma contacts. Abortive initiation produces short transcripts until this escape occurs."
  },
  {
    id: 4,
    question: "Rho-independent (intrinsic) termination in prokaryotes requires:",
    options: ["ATP hydrolysis and Rho helicase activity", "A GC-rich hairpin followed by a U-rich stretch in nascent RNA", "NusA protein and poly(A) addition", "Recognition of a specific DNA sequence by Rho protein"],
    answer: 1,
    explanation: "Intrinsic termination occurs when the nascent RNA forms a GC-rich stem-loop (hairpin) immediately followed by a run of U residues. The hairpin stalls the polymerase and the weak rU-dA RNA-DNA hybrid dissociates, releasing the transcript without requiring any protein factors."
  },
  {
    id: 5,
    question: "Rho-dependent termination: Rho protein binds to the nascent RNA at which site?",
    options: ["Rut site (Rho utilization site) — C-rich, G-poor region", "Poly(A) signal in the RNA", "The 5' cap structure", "NusA binding region near the promoter"],
    answer: 0,
    explanation: "Rho is an RNA-dependent ATPase/helicase that binds to Rut (Rho utilization) sites — unstructured, C-rich/G-poor regions on the nascent RNA. It then tracks along the RNA and unwinds the RNA-DNA hybrid at the pause site, releasing the transcript."
  },
  {
    id: 6,
    question: "Which subunit of the prokaryotic RNA polymerase is responsible for promoter recognition?",
    options: ["β subunit", "β' subunit", "α subunit", "Sigma (σ) factor"],
    answer: 3,
    explanation: "The sigma (σ) factor confers promoter specificity to the holoenzyme. The β subunit contains the catalytic center (phosphodiester bond formation), β' binds DNA non-specifically, and α subunits interact with upstream activators and help assemble the core enzyme."
  },
  {
    id: 7,
    question: "Which component of RNA Pol II is unique and essential for transcription, splicing coupling, and mRNA capping?",
    options: ["TFIID (TBP subunit)", "C-terminal domain (CTD) of the largest subunit (RPB1)", "Mediator complex", "TFIIH helicase subunit XPB"],
    answer: 1,
    explanation: "The CTD of RPB1 consists of tandem heptapeptide repeats (YSPTSPS). Phosphorylation at Ser5 during initiation recruits capping enzymes; Ser2 phosphorylation during elongation recruits splicing and 3'-processing factors. It is the key platform coupling transcription to co-transcriptional RNA processing."
  },
  {
    id: 8,
    question: "TFIIH performs which catalytic activity critical for transcription initiation?",
    options: ["TBP binding to TATA box", "Phosphorylation of CTD Ser5 (by CDK7) and DNA strand separation (by XPB helicase)", "Recruitment of Mediator to UAS elements", "5' capping of nascent RNA"],
    answer: 1,
    explanation: "TFIIH has two enzymatic activities: (1) XPB (ERCC3) is a 3'→5' helicase that unwinds DNA at the promoter for open complex formation, and (2) CDK7 kinase phosphorylates the RNA Pol II CTD at Ser5, triggering promoter clearance and recruiting mRNA capping enzymes."
  },
  {
    id: 9,
    question: "The general transcription factor that directly binds the TATA box is:",
    options: ["TFIIA", "TFIIB", "TFIID (TBP subunit)", "TFIIE"],
    answer: 2,
    explanation: "TBP (TATA-binding protein), a subunit of TFIID, binds the TATA box by inserting into the minor groove, bending DNA ~80°. This nucleates pre-initiation complex (PIC) assembly. TFIIB bridges TBP to RNA Pol II, TFIIA stabilizes TBP-DNA interaction, and TFIIE recruits TFIIH."
  },
  {
    id: 10,
    question: "In eukaryotic RNA Pol II transcription, which step requires ATP hydrolysis?",
    options: ["TBP binding to TATA box", "TFIID recruitment to the promoter", "DNA melting by TFIIH XPB helicase at the transcription start site", "Mediator bridging enhancers to the promoter"],
    answer: 2,
    explanation: "TFIIH's XPB subunit is a 3'→5' DNA helicase that uses ATP to unwind ~11-15 bp of DNA around the transcription start site, forming the open complex. All other steps listed are ATP-independent protein-DNA or protein-protein interactions."
  },
  {
    id: 11,
    question: "The bacterial NusA protein primarily functions to:",
    options: ["Load the σ factor onto core RNA polymerase", "Stimulate pausing and facilitate both intrinsic and Rho-dependent termination", "Act as a processivity clamp like the β-clamp", "Initiate Rho-independent termination by binding Rut sites"],
    answer: 1,
    explanation: "NusA binds the core RNA polymerase and stabilizes paused elongation complexes. It enhances hairpin formation that triggers intrinsic termination and cooperates with Rho in Rho-dependent termination. NusA also participates in N-protein antitermination in bacteriophage lambda."
  },
  {
    id: 12,
    question: "Eukaryotic transcription by RNA Pol I primarily produces:",
    options: ["mRNA precursors (pre-mRNA)", "45S pre-rRNA (processed into 28S, 18S, 5.8S rRNA)", "5S rRNA and tRNA", "snRNA and snoRNA"],
    answer: 1,
    explanation: "RNA Pol I transcribes rDNA repeats to produce the 45S pre-rRNA, which is processed into 28S, 18S, and 5.8S rRNAs. RNA Pol II transcribes protein-coding genes and most snRNAs. RNA Pol III transcribes 5S rRNA, tRNAs, and other small structural RNAs."
  },
  {
    id: 13,
    question: "Which of the following correctly describes the function of TFIIB in RNA Pol II transcription?",
    options: ["It unwinds DNA to form the open complex", "It bridges TBP to RNA Pol II and helps position the TSS by specifying the BRE element", "It phosphorylates the CTD at Ser2 to promote elongation", "It is the universal downstream promoter element binding factor"],
    answer: 1,
    explanation: "TFIIB binds TBP on one surface and RNA Pol II on another, bridging them. It contains a B-reader loop that enters the active site cleft and contacts the TSS region, helping define where transcription starts. It recognizes the BRE (TFIIB recognition element) upstream and downstream of the TATA box."
  },
  {
    id: 14,
    question: "During RNA Pol II elongation, negative elongation factor (NELF) and DRB sensitivity-inducing factor (DSIF) cause:",
    options: ["Premature termination at poly(A) sites", "Promoter-proximal pausing ~20-60 nt downstream of TSS", "Splicing of the first intron co-transcriptionally", "Recruitment of XPC nucleotide excision repair factors"],
    answer: 1,
    explanation: "NELF and DSIF together cause RNA Pol II to pause 20-60 nt downstream of the TSS (promoter-proximal pausing), a regulated checkpoint widespread in metazoans. P-TEFb (CDK9/cyclin T) phosphorylates NELF (causing its dissociation), DSIF (converting it to a positive factor), and CTD Ser2, releasing the paused polymerase into productive elongation."
  },
  {
    id: 15,
    question: "The antibiotic rifampicin inhibits bacterial RNA polymerase by:",
    options: ["Blocking the catalytic site and preventing phosphodiester bond formation after the first 2-3 nucleotides", "Competing with sigma factor for core enzyme binding", "Intercalating into DNA template", "Inhibiting Rho-dependent termination"],
    answer: 0,
    explanation: "Rifampicin binds to the β subunit of bacterial RNA polymerase in a pocket near the active site. It sterically blocks the path of the nascent RNA chain after 2-3 nucleotides are incorporated, without affecting nucleotide binding or the first phosphodiester bond formation. It does not intercalate into DNA."
  },
  {
    id: 16,
    question: "α-Amanitin, a toxin from Amanita phalloides, at low concentrations inhibits:",
    options: ["RNA Pol I", "RNA Pol II", "RNA Pol III", "Both RNA Pol II and III equally"],
    answer: 1,
    explanation: "α-Amanitin inhibits eukaryotic RNA polymerases with different sensitivities: RNA Pol II is inhibited at very low concentrations (~0.02 µg/mL), RNA Pol III at intermediate concentrations (~20 µg/mL), while RNA Pol I is resistant. This differential sensitivity was used to identify the three polymerases."
  },
  {
    id: 17,
    question: "The bacterial antitermination system involving bacteriophage lambda N protein requires which RNA sequence elements?",
    options: ["boxA, boxB, boxC (nut sites) and NusA, NusB, NusE, NusG proteins", "Rut sites and Rho protein", "Poly(U) tail and stem-loop structure", "CAP binding site and cAMP"],
    answer: 0,
    explanation: "Lambda N protein antitermination requires nut (N utilization) sites — boxA and boxB sequences in the nascent RNA. N binds boxB; along with NusA, NusB, NusE (S10), and NusG, it assembles a ribonucleoprotein complex on the transcription elongation complex that suppresses both intrinsic and Rho-dependent termination."
  },
  {
    id: 18,
    question: "Supercoiling generated ahead of the transcription bubble by RNA Pol II is relieved by which topoisomerase?",
    options: ["Topoisomerase I (nicks one strand — relaxes without ATP)", "Topoisomerase II (gyrase in bacteria)", "Topoisomerase III", "Reverse gyrase"],
    answer: 0,
    explanation: "Eukaryotic Topoisomerase I (Top1) relieves positive supercoiling generated ahead of the moving RNA Pol II transcription bubble by transiently nicking one strand, allowing rotation, and religating — without ATP. Gyrase (Top II) introduces negative supercoiling in bacteria. Transcription-associated supercoiling can affect gene expression."
  },
  {
    id: 19,
    question: "In the eukaryotic pre-initiation complex (PIC), the Mediator complex functions by:",
    options: ["Directly binding the TATA box as an alternative to TBP", "Serving as a co-activator that bridges enhancer-bound activators to RNA Pol II and TFIIH", "Phosphorylating Ser5 of the CTD to initiate capping", "Unwinding the double helix at the promoter"],
    answer: 1,
    explanation: "Mediator is a large (~1.2 MDa, ~30 subunits) co-activator complex that forms a bridge between DNA-bound transcriptional activators and the RNA Pol II PIC. It does not bind DNA directly but modulates CTD phosphorylation by CDK8 and regulates both basal and activated transcription."
  },
  {
    id: 20,
    question: "The discriminator sequence in prokaryotic promoters (between -10 and +1) is particularly important for:",
    options: ["Sigma factor recognition and binding affinity", "Stringent response control of stable RNA (rRNA/tRNA) promoters", "Rho-dependent termination initiation", "NusB binding to boxA"],
    answer: 1,
    explanation: "The discriminator sequence (between -10 element and TSS) is rich in GC in rRNA and tRNA promoters and AT-rich in mRNA promoters. During stringent response, ppGpp binds the RNA polymerase-promoter interface and, combined with DksA, preferentially destabilizes open complexes at GC-rich discriminator promoters, down-regulating stable RNA synthesis."
  },
  {
    id: 21,
    question: "Which of the following is the first event in eukaryotic mRNA processing that occurs co-transcriptionally?",
    options: ["Polyadenylation at the 3' end", "5' capping with 7-methylguanosine", "Removal of the first intron by splicing", "Export to the cytoplasm via nuclear pore"],
    answer: 1,
    explanation: "5' capping is the first co-transcriptional processing event, occurring when the nascent transcript is only ~20-25 nt long. Capping enzymes (triphosphatase, guanylyltransferase, methyltransferase) are recruited by the Ser5-phosphorylated CTD and add the 7-methylguanosine cap via a 5'-5' triphosphate linkage."
  },
  {
    id: 22,
    question: "The polyadenylation signal AAUAAA in eukaryotic pre-mRNA is recognized by which cleavage/polyadenylation factor?",
    options: ["CPSF (Cleavage and Polyadenylation Specificity Factor)", "CstF (Cleavage stimulation Factor)", "CF Im/II (Cleavage Factors Im and II)", "PAP (Poly(A) Polymerase)"],
    answer: 0,
    explanation: "CPSF directly recognizes the AAUAAA hexamer through its CPSF-160 and WDR33/CPSF-30 subunits. CstF binds the downstream GU/U-rich element. CF Im/IIm carry out cleavage ~10-30 nt downstream of AAUAAA, and then Poly(A) Polymerase (PAP) adds the poly(A) tail of ~200 A residues."
  },
  {
    id: 23,
    question: "Transcription-coupled nucleotide excision repair (TC-NER) is initiated by:",
    options: ["XPA recognizing distorted DNA globally", "Stalling of RNA Pol II at a lesion, recruiting CSB and CSA proteins", "ATM kinase sensing DNA double-strand breaks", "p53 activating NER gene transcription"],
    answer: 1,
    explanation: "When RNA Pol II stalls at a DNA lesion, CSB (Cockayne syndrome B, an ATPase) binds and recruits CSA (a WD40-repeat E3 ligase adaptor). This triggers displacement/backtracking of RNA Pol II and recruitment of the core NER machinery (TFIIH, XPA, XPG, XPF-ERCC1) to repair the lesion. This is faster than global genome NER."
  },
  {
    id: 24,
    question: "In bacteria, what is the 'stressed intermediate' that forms before transition from closed to open complex?",
    options: ["IB intermediate (slightly DNA unwound complex)", "Abortive initiation complex", "Sigma release complex", "NusA-stabilized pause complex"],
    answer: 0,
    explanation: "Bacterial transcription initiation proceeds: closed complex (RPc) → intermediates (RPi1, RPi2, IB) → open complex (RPo). The IB complex is a stressed intermediate with DNA scrunching (pulling downstream DNA into the active site) before full strand separation. This scrunching stores energy that drives promoter escape."
  },
  {
    id: 25,
    question: "The 'DNA scrunching' model of transcription initiation proposes that:",
    options: ["Sigma factor moves along DNA scanning for promoters", "RNA polymerase remains stationary while pulling downstream DNA into itself during initial RNA synthesis", "The polymerase slides backwards (backtracks) to release abortive RNA", "DNA template strand loops out into the active site cleft"],
    answer: 1,
    explanation: "DNA scrunching (demonstrated by Kapanidis et al. using single-molecule FRET) shows that during abortive initiation, RNA polymerase stays fixed at the promoter while pulling ('scrunching') downstream DNA through itself. The accumulated stress is released as the polymerase escapes the promoter, breaking sigma contacts."
  },
  {
    id: 26,
    question: "Which transcription factor is the master regulator of RNA Pol III gene transcription and is found at nearly all Pol III promoters?",
    options: ["TBP (part of TFIIIB)", "TFIIIC", "Brf1 (part of TFIIIB)", "SNAPc"],
    answer: 0,
    explanation: "TBP (TATA-binding protein) is a subunit of TFIIIB, which is essential for all RNA Pol III transcription. For type 1 (5S rRNA) and type 2 (tRNA) Pol III promoters, TFIIIC first binds internal promoter elements (A-box, B-box, C-box), then recruits TFIIIB (containing TBP, Brf1, Bdp1) upstream, which then recruits RNA Pol III."
  },
  {
    id: 27,
    question: "In the context of co-transcriptional splicing, the 'exon definition' model proposes that:",
    options: ["Introns are defined by recognition of 5' and 3' splice sites flanking each intron", "Splicing factors recognize the exon by bridging the 5' splice site of the downstream intron and the 3' splice site of the upstream intron across the exon", "Branch point sequence recognition by U2 snRNP defines the exon boundaries", "The cap-binding complex marks the first exon for splicing"],
    answer: 1,
    explanation: "In exon definition (dominant in vertebrates with long introns), SR proteins and U1 snRNP bind the downstream 5'SS, while U2AF and other factors bind the upstream 3'SS, and interactions across the exon (via SR protein-SR protein or U1-U2AF bridges) define and stabilize exon recognition before cross-intron complexes form."
  },
  {
    id: 28,
    question: "The bacterial 16S rRNA, 23S rRNA, and 5S rRNA genes are:",
    options: ["Transcribed separately from individual promoters", "Cotranscribed as a single 30S precursor from the rrnB promoter", "Transcribed by RNA Pol I only", "Processed from a 45S precursor analogous to eukaryotes"],
    answer: 1,
    explanation: "E. coli has 7 rrn operons, each producing a 30S precursor RNA co-transcribed by RNA Pol with σ70. RNase III cleaves within double-stranded stems flanking 16S and 23S rRNA to release precursors, which are further trimmed by RNase E, G, and others. This is different from eukaryotes where RNA Pol I produces the 45S pre-rRNA."
  },
  {
    id: 29,
    question: "Enhancers can activate transcription from promoters thousands of base pairs away by which primary mechanism?",
    options: ["Diffusion of transcription factors along the DNA helix", "DNA looping bringing the enhancer-bound activators in direct contact with the promoter-PIC complex", "Transcription of an enhancer RNA that activates the downstream promoter by base-pairing", "Sliding of the Mediator complex along DNA"],
    answer: 1,
    explanation: "The predominant model is DNA looping (facilitated by cohesin/CTCF and the Mediator complex), which brings enhancer-bound activators into direct proximity with the promoter PIC. This is supported by chromatin conformation capture (3C, Hi-C, ChIA-PET) data showing enhancer-promoter loops. Enhancer RNAs (eRNAs) also contribute but are not the primary mechanism."
  },
  {
    id: 30,
    question: "The Inr (initiator element) in eukaryotic promoters is recognized by which factor?",
    options: ["TBP in TFIID at TATA-less promoters", "TAF1 and TAF2 subunits of TFIID", "TFIIB B-reader loop", "Sp1 binding the GC box"],
    answer: 1,
    explanation: "The Inr element (consensus PyPyAN(T/A)PyPy) surrounding the TSS is recognized by TAF1 and TAF2 subunits of TFIID independently of the TATA box. Many TATA-less promoters use the Inr alone or with the DPE (downstream promoter element, recognized by TAF6/TAF9) for accurate TSS selection."
  },
  {
    id: 31,
    question: "Transcriptional pausing in bacteria (elemental pause) is caused by:",
    options: ["Sigma factor re-binding to the elongation complex", "Formation of a pause RNA hairpin and rearrangement of the trigger loop in the active site", "Rho protein catching up to the elongation complex", "NTP depletion at fast pause sites"],
    answer: 1,
    explanation: "The elemental (consensus) pause involves a specific DNA/RNA sequence that causes rearrangement of the RNA polymerase trigger loop and clamp domains, slowing catalysis. Secondary pauses are stabilized by hairpin formation in the exit channel (e.g., his pause) or by NusA. These pauses regulate elongation rates and allow factor loading."
  },
  {
    id: 32,
    question: "In eukaryotic transcription, the role of FACT (Facilitates Chromatin Transcription) is to:",
    options: ["Recruit TFIID to TATA-less promoters", "Disassemble and reassemble nucleosomes ahead of and behind RNA Pol II during elongation", "Phosphorylate the CTD to promote elongation", "Bring the poly(A) signal to CPSF"],
    answer: 1,
    explanation: "FACT is a histone chaperone that destabilizes H2A-H2B dimers ahead of the elongating RNA Pol II (facilitating nucleosome traversal) and helps reassemble nucleosomes behind the polymerase. This maintains chromatin structure while allowing transcription. FACT also interacts with H3-H4 tetramers."
  },
  {
    id: 33,
    question: "The startpoint of transcription (+1) in bacteria is typically located:",
    options: ["Exactly 10 bp downstream of the -10 element", "5-8 bp downstream of the -10 element center", "35 bp downstream of the -35 element", "At the AUG start codon of the mRNA"],
    answer: 1,
    explanation: "The transcription start site (+1) in bacteria is typically 5-8 bp downstream of the center (or 3' end) of the -10 element (Pribnow box). The -35 element is ~17 ± 1 bp upstream of the -10 element. The TSS (+1) is not the same as the AUG start codon (which is usually located ~5-10 nt downstream of the ribosome binding site in the mRNA)."
  },
  {
    id: 34,
    question: "Which enzyme adds the poly(A) tail to eukaryotic mRNA without a DNA template?",
    options: ["Primase", "RNA Pol II (read-through transcription)", "Poly(A) Polymerase (PAP)", "Terminal transferase (TdT)"],
    answer: 2,
    explanation: "Poly(A) Polymerase (PAP/PAPOLA) is a template-independent RNA polymerase that adds ATP residues one at a time to the 3'-OH end of the cleaved pre-mRNA. It uses ATP as the nucleotide precursor (releasing pyrophosphate) and is stimulated by CPSF and PABPN1 for processive addition of ~200 A residues."
  },
  {
    id: 35,
    question: "Streptolydigin inhibits bacterial RNA polymerase by a mechanism distinct from rifampicin. It:",
    options: ["Prevents sigma factor binding to the -35 element", "Blocks RNA chain elongation by stabilizing a non-catalytic conformation of the trigger loop", "Causes premature Rho-independent termination", "Inhibits RNA polymerase assembly by chelating Mg2+"],
    answer: 1,
    explanation: "Streptolydigin binds at the base of the trigger loop (bridge helix region) in the RNA polymerase active site and stabilizes an open/inactive conformation of the trigger loop, preventing the conformational change needed for NTP addition. This blocks elongation specifically, unlike rifampicin which blocks initiation."
  },
  {
    id: 36,
    question: "The 'collision model' for Rho-dependent transcription termination is best supported by which observation?",
    options: ["Rho binds the 3' end of the RNA chain and works backward", "Rho binds Rut sites and translocates 5'→3' on RNA, catching the paused polymerase to displace it", "Rho directly contacts the β' subunit of RNA polymerase at Rut sites", "Rho acts as an RNA cap-binding protein at the 5' end"],
    answer: 1,
    explanation: "The 'tethered tracking' or collision model holds that Rho (a hexameric ring) binds Rut sites on the nascent RNA and translocates 5'→3' using ATP hydrolysis. When RNA Pol II pauses (often induced by NusA), Rho catches up, unwinds the RNA-DNA hybrid, and releases the transcript. This explains why secondary structures between Rut site and pause site prevent Rho termination."
  },
  {
    id: 37,
    question: "In supercoiling terms, when RNA polymerase moves along DNA, it generates:",
    options: ["Positive supercoils ahead and negative supercoils behind the moving polymerase (twin-domain model)", "Negative supercoils ahead and positive supercoils behind", "Only positive supercoils throughout the gene", "No supercoiling if the DNA is relaxed initially"],
    answer: 0,
    explanation: "Liu and Wang's twin-domain model (1987): Because RNA polymerase cannot freely rotate around the DNA helix during transcription, it generates positive supercoiling ahead (the template overwound) and negative supercoiling behind (template underwound). Topoisomerases (Top I, gyrase) relax these to allow continued transcription."
  },
  {
    id: 38,
    question: "CpG island promoters (found in ~70% of human gene promoters) are characterized by all of the following EXCEPT:",
    options: ["High CpG density relative to bulk genomic DNA", "Usually unmethylated in normal somatic cells", "Strong dependence on TATA box for accurate TSS selection", "Often bidirectional transcription producing sense and antisense transcripts"],
    answer: 2,
    explanation: "CpG island promoters are typically TATA-less and use dispersed TSSs (broad initiation) rather than a sharp TATA-dependent TSS. They rely on Inr elements, DPEs, and GC-box binding factors (Sp1). They are normally unmethylated, have high CpG density (observed/expected >0.6), and often drive bidirectional transcription of upstream antisense noncoding RNAs."
  },
  {
    id: 39,
    question: "The phenomenon of 'transcriptional interference' (TI) refers to:",
    options: ["Competition between RNA Pol I and Pol II for the same DNA template", "One transcriptional process inhibiting another transcriptional process in cis on the same DNA molecule", "Interference of transcription by antisense RNA hybridization to template DNA", "Repressor protein blocking RNA polymerase access by steric occlusion"],
    answer: 1,
    explanation: "Transcriptional interference occurs when one transcription event suppresses another in cis on the same DNA. Mechanisms include: (1) transcriptional occlusion (upstream polymerase prevents binding at downstream promoter), (2) collision between convergent polymerases, (3) sitting duck interference (promoter competition). TI regulates gene expression in retroviruses, imprinted loci, and bacterial operons."
  },
  {
    id: 40,
    question: "The CTD of RNA Pol II largest subunit (RPB1) in humans contains how many heptapeptide repeats?",
    options: ["26 repeats", "52 repeats", "17 repeats", "100 repeats"],
    answer: 1,
    explanation: "The human RPB1 CTD contains 52 tandem repeats of the consensus heptad YSPTSPS. Yeast has 26 repeats (the minimum for viability is ~8). The repeats serve as a landing pad for RNA processing factors, with differential phosphorylation patterns (Ser2, Ser5, Ser7, Tyr1, Thr4) at different stages coordinating the transcription cycle with RNA maturation."
  },
  {
    id: 41,
    question: "Sigma factor cycling during multiple rounds of transcription initiation: which model is currently favored?",
    options: ["Sigma factor remains bound throughout elongation and dissociates only at termination", "Sigma factor is released stochastically early during elongation (after ~10-15 nt synthesis) but can re-associate", "Sigma factor remains permanently part of the holoenzyme for all three stages", "Sigma factor is destroyed by proteolysis after each round of initiation"],
    answer: 1,
    explanation: "Biochemical and single-molecule studies show that sigma dissociates stochastically from the elongation complex relatively early (after the RNA reaches ~10-15 nt and promoter escape occurs), not necessarily at a fixed point. However, some sigma retention during elongation occurs and may facilitate reinitiation. The 'holoenzyme recycling' vs 'sigma cycling' debate has favored partial/stochastic sigma release."
  },
  {
    id: 42,
    question: "Which of the following RNA polymerase II inhibitors is used in clinical oncology for its CDK9 inhibition activity (targeting P-TEFb)?",
    options: ["Rifampicin", "Flavopiridol", "α-amanitin", "Actinomycin D"],
    answer: 1,
    explanation: "Flavopiridol inhibits CDK9 (the kinase component of P-TEFb), blocking release of promoter-proximally paused RNA Pol II and preventing productive elongation. It has been investigated in hematologic malignancies. Actinomycin D intercalates into DNA and blocks all polymerases. Rifampicin is bacterial-specific; α-amanitin directly targets the Pol II bridge helix."
  },
  {
    id: 43,
    question: "The minimal promoter elements recognized by RNA Pol III for type 2 (tRNA) genes are located:",
    options: ["Upstream of the TSS (-25 to -55)", "Internally within the gene body (A-box at +8 to +19, B-box at +52 to +67)", "In the 3'UTR after the stop codon", "In the SRP RNA structure domain"],
    answer: 1,
    explanation: "Type 2 Pol III promoters (tRNA, VA RNA genes) have internal promoter elements: the A-box (~+8 to +19) and B-box (~+52 to +67) within the gene sequence itself. These are recognized by TFIIIC, which then recruits TFIIIB upstream to position the TSS. Type 1 (5S rRNA) has an internal C-box; type 3 promoters (U6, 7SK) are upstream."
  },
  {
    id: 44,
    question: "During bacterial transcription elongation, the 'trigger loop' (TL) plays which essential role?",
    options: ["It forms the exit channel for nascent RNA", "It closes over correctly base-paired NTPs in the active site, catalyzing phosphodiester bond formation", "It clamps onto the downstream DNA duplex", "It forms the rudder that separates RNA from template DNA"],
    answer: 1,
    explanation: "The trigger loop (or bridge helix TL) is a mobile element in the RNA polymerase active site. Upon binding a correct (Watson-Crick base-paired) NTP in the active site, the TL folds and closes, positioning the incoming NTP for SN2 nucleophilic attack on the RNA 3'-OH. TL mutations reduce fidelity and catalysis. Mismatched NTPs do not trigger TL closure efficiently."
  },
  {
    id: 45,
    question: "The 5' triphosphate of the first nucleotide incorporated during bacterial transcription is important because:",
    options: ["It signals ribosome binding site assembly", "It is recognized by RIG-I as a PAMP indicating non-self RNA in innate immunity", "It is required for sigma factor release", "It base-pairs with the Shine-Dalgarno sequence"],
    answer: 1,
    explanation: "Bacterial RNA retains a 5' triphosphate on the first nucleotide (unlike eukaryotic mRNA which is capped). RIG-I (retinoic acid-inducible gene I) and related PRRs detect 5' triphosphate RNA as a pathogen-associated molecular pattern (PAMP), triggering innate immune signaling. This is exploited in some therapeutic strategies and is why RIG-I is activated by some viral RNAs."
  },
  {
    id: 46,
    question: "How does the antiterminator protein Q from bacteriophage lambda (λQ) mediate antitermination?",
    options: ["Q protein binds boxA sequences in the RNA like N protein", "Q protein binds the QBE (Q binding element) in the promoter DNA and is then delivered to the elongating polymerase at the pause site", "Q protein sequesters Rho protein away from the nascent transcript", "Q protein cleaves the stem-loop structure that causes pausing"],
    answer: 1,
    explanation: "λQ protein works differently from λN: Q protein binds the QBE (Q-binding element) DNA sequence in the PR' promoter, then interacts with the paused RNA polymerase at a downstream σ70-dependent pause site, and travels with the elongation complex as an antiterminator. This allows readthrough of multiple terminators in the late gene region."
  },
  {
    id: 47,
    question: "In eukaryotes, the Integrator complex is associated with:",
    options: ["Polyadenylation of mRNA at canonical poly(A) sites", "3' processing of snRNAs transcribed by RNA Pol II and regulation of Pol II pausing at enhancers", "Pre-rRNA processing and nucleolar organization", "tRNA aminoacylation and quality control"],
    answer: 1,
    explanation: "Integrator is a ~1.5 MDa complex (>14 subunits) that associates with the RNA Pol II CTD (phospho-Ser7). It mediates 3' end processing (cleavage) of small nuclear RNAs (snRNAs) and enhancer RNAs (eRNAs) transcribed by Pol II. Recent evidence also shows Integrator regulates promoter-proximal pausing by dephosphorylating the CTD and stimulating premature termination."
  },
  {
    id: 48,
    question: "Transcription of ribosomal RNA genes in eukaryotes occurs in which nuclear subcompartment?",
    options: ["Nuclear lamina", "Cajal bodies (coilin-containing)", "Nucleolus (specifically the fibrillar center/dense fibrillar component boundary)", "Nuclear speckles (SC35 domains)"],
    answer: 2,
    explanation: "rRNA genes are transcribed in the nucleolus — more specifically at the border of the fibrillar center (FC) and dense fibrillar component (DFC). RNA Pol I, UBF, and SL1/TIF-IB are concentrated there. The large ribosomal subunit (granular component) is assembled further out. The nucleolus organizes around NOR (nucleolar organizer regions) on chromosomes 13, 14, 15, 21, 22 in humans."
  },
  {
    id: 49,
    question: "The Mediator 'kinase module' (containing CDK8 and cyclin C) primarily functions to:",
    options: ["Phosphorylate RNA Pol II CTD to release it from the PIC for elongation", "Repress transcription by preventing Mediator interaction with RNA Pol II and phosphorylating transcription activators", "Activate transcription of heat shock genes during stress", "Add the 5' cap to nascent mRNA"],
    answer: 1,
    explanation: "The CDK8/cyclin C 'kinase module' of Mediator is generally repressive: it phosphorylates and destabilizes transcriptional activators, and its association with Mediator is mutually exclusive with RNA Pol II binding. CDK8 can phosphorylate substrates including the Notch ICD, SMAD transcription factors, and Pol II CTD under certain conditions. CDK8 is amplified in colorectal cancer."
  },
  {
    id: 50,
    question: "The phenomenon of 'bursting' in transcription (observed by single-molecule imaging) refers to:",
    options: ["Rapid degradation of mRNA immediately after transcription", "Gene expression occurring in stochastic pulses of multiple rounds of transcription, separated by periods of inactivity", "Simultaneous firing of hundreds of promoters across the genome during S phase", "Burst of rRNA synthesis during nucleolar stress"],
    answer: 1,
    explanation: "Single-molecule RNA FISH and live-cell imaging (MS2 loops) revealed that most genes transcribe in stochastic 'bursts' — multiple rapid rounds of transcription (burst size) followed by refractory OFF periods (burst frequency). Both burst size and frequency are gene-specific and regulated by enhancers, TFs, and chromatin state. This underlies cell-to-cell variability (noise) in gene expression."
  }
];
