export const questions = [
  {
    id: 1,
    question: "The ribosome subunit sizes in prokaryotes (70S) are made up of which combination?",
    options: ["40S + 60S", "30S + 50S", "30S + 60S", "40S + 50S"],
    answer: 1,
    explanation: "Prokaryotic ribosomes are 70S: 30S small subunit (containing 16S rRNA + ~21 proteins) and 50S large subunit (containing 23S + 5S rRNA + ~31 proteins). Eukaryotic ribosomes are 80S (40S + 60S). The 'S' values are Svedberg units — they are not additive because shape affects sedimentation."
  },
  {
    id: 2,
    question: "The Shine-Dalgarno (SD) sequence in prokaryotic mRNA is complementary to which part of the ribosome?",
    options: ["23S rRNA in the 50S subunit", "3' end of 16S rRNA in the 30S subunit", "5' end of 5S rRNA", "Initiator tRNA (fMet-tRNA)"],
    answer: 1,
    explanation: "The Shine-Dalgarno sequence (consensus AGGAGG), located ~5-10 nt upstream of the AUG start codon, base-pairs with the anti-SD sequence at the 3' end of 16S rRNA (3'-UCCUCC-5'). This positions the ribosome to place the AUG in the P site and recruits IF3 to ensure correct start codon selection."
  },
  {
    id: 3,
    question: "In eukaryotic translation initiation, what is the function of the 43S pre-initiation complex (43S PIC)?",
    options: ["It is the complete 80S ribosome ready for elongation", "It consists of 40S subunit + eIF2-GTP-Met-tRNA(i) + eIF3 + eIF1 + eIF1A, scanning for the AUG codon", "It is the 60S subunit loaded with peptidyl-tRNA", "It is eIF4E bound to the 5' cap structure"],
    answer: 1,
    explanation: "The 43S PIC comprises the 40S small subunit loaded with the eIF2-GTP-Met-tRNAi ternary complex (TC), plus eIF3, eIF1, eIF1A, and eIF5. This complex attaches to the 5' end of mRNA (facilitated by eIF4F/eIF4B) and scans 5'→3' for an AUG in favorable Kozak context. On AUG recognition, eIF2-GTP is hydrolyzed (with eIF5 as GAP), locking the initiator tRNA in the P site."
  },
  {
    id: 4,
    question: "Which aminoacyl-tRNA synthetase is unique in that it aminoacylates tRNA with a non-cognate amino acid (glutamate) which is subsequently converted?",
    options: ["Glutaminyl-tRNA synthetase (GlnRS) in all organisms", "Glutamyl-tRNA synthetase (GluRS) acting on tRNA(Gln) via a transamidation pathway in some organisms", "Alanyl-tRNA synthetase misacylating tRNA(Ser)", "Selenocysteinyl-tRNA synthetase"],
    answer: 1,
    explanation: "Many bacteria, archaea, and organelles lack GlnRS. They use an indirect pathway: GluRS (which can aminoacylate both tRNA(Glu) and tRNA(Gln) with glutamate) produces Glu-tRNA(Gln), which is then converted to Gln-tRNA(Gln) by a transamidase (GatABC/GatDE). This 'misacylation and repair' pathway is absent in eukaryotic cytoplasm, which has proper GlnRS."
  },
  {
    id: 5,
    question: "The peptidyl transferase activity of the ribosome is catalyzed by:",
    options: ["A protein enzyme in the 50S subunit (specifically L3)", "23S rRNA (in prokaryotes) — the ribosome is a ribozyme", "A protein-RNA co-catalyst requiring both the A2451 base and protein L27", "eEF1A with GTP hydrolysis"],
    answer: 1,
    explanation: "The ribosome is a ribozyme: peptidyl transferase activity is catalyzed by the 23S rRNA (prokaryotes) / 28S rRNA (eukaryotes) at the peptidyl transferase center (PTC). The key base is A2451 of E. coli 23S rRNA. Ribosomal proteins are structural scaffolding and regulatory but do not directly catalyze peptide bond formation. Steitz and Moore's crystallographic work confirmed this."
  },
  {
    id: 6,
    question: "The elongation factor EF-Tu (prokaryote) / eEF1A (eukaryote) delivers aminoacyl-tRNA to the ribosome. After GTP hydrolysis by EF-Tu, which event occurs?",
    options: ["The amino acid is immediately incorporated into the peptide chain", "EF-Tu·GDP dissociates from the ribosome, allowing aa-tRNA to fully accommodate into the A site", "EF-Ts directly catalyzes peptide bond formation", "EF-G is activated to translocate the ribosome"],
    answer: 1,
    explanation: "EF-Tu·GTP delivers aa-tRNA to the A site. Codon-anticodon recognition triggers GTPase activation (by the sarcin-ricin loop of 23S rRNA/ribosome). EF-Tu·GDP has low affinity for aa-tRNA and dissociates. The aa-tRNA then 'accommodates' into the A site PTC, positioning the amino acid for peptide bond formation. EF-Ts is the GEF that recharges EF-Tu·GDP to EF-Tu·GTP."
  },
  {
    id: 7,
    question: "Translocation of the ribosome after peptide bond formation requires:",
    options: ["eIF5B/IF2 with GTP hydrolysis", "EF-G (prokaryotes) or eEF2 (eukaryotes) with GTP hydrolysis", "EF-Tu·GTP and the hybrid state tRNA", "Direct ATP hydrolysis by the ribosome itself"],
    answer: 1,
    explanation: "After peptide bond formation, peptidyl-tRNA is in the A site (hybrid A/P state). EF-G (prokaryotes) / eEF2 (eukaryotes) binds and hydrolyzes GTP, driving translocation: peptidyl-tRNA moves to the P site, deacylated tRNA moves to the E site, and the ribosome advances 3 nt on the mRNA. EF-G mimics the shape of EF-Tu·GTP-tRNA (molecular mimicry)."
  },
  {
    id: 8,
    question: "In the 'proofreading' mechanism during aminoacyl-tRNA selection at the ribosome, which step provides kinetic discrimination against near-cognate tRNAs?",
    options: ["Initial codon-anticodon recognition (initial selection) and then GTP hydrolysis kinetics (proofreading/accommodation)", "Peptide bond formation rate differences between cognate and near-cognate aa-tRNAs", "EF-Ts discrimination between charged and uncharged tRNAs", "A-minor interactions between 16S rRNA and the mRNA cap structure"],
    answer: 0,
    explanation: "Ribosomal accuracy has two checkpoints: (1) Initial selection — cognate aa-tRNA induces GTPase activation of EF-Tu faster (lower activation energy); near-cognate tRNAs dissociate preferentially before GTP hydrolysis. (2) Proofreading — after EF-Tu·GDP dissociates, near-cognate aa-tRNA accommodates more slowly and can dissociate before peptide bond formation. Both steps amplify accuracy."
  },
  {
    id: 9,
    question: "Stop codon recognition during translation termination in bacteria is performed by:",
    options: ["Specific aminoacyl-tRNAs (suppressor tRNAs) in all cases", "Release factors RF1 (reads UAA, UAG) and RF2 (reads UAA, UGA) — protein factors that mimic tRNA", "The ribosome RNA alone without protein factors", "EF-G mimicking the stop codon structure"],
    answer: 1,
    explanation: "In bacteria, RF1 decodes UAA and UAG; RF2 decodes UAA and UGA (class I release factors). They are protein mimics of tRNA (molecular mimicry) that enter the A site, recognize stop codons, and catalyze hydrolysis of the peptidyl-tRNA ester bond, releasing the completed polypeptide. RF3 (class II RF) is a GTPase that promotes RF1/2 dissociation."
  },
  {
    id: 10,
    question: "IRES (Internal Ribosome Entry Site) elements allow cap-independent translation. What is a well-known example of a virus using IRES?",
    options: ["Influenza A virus", "Poliovirus (Picornaviridae) — IRES in the 5'UTR allows hepatitis C virus-like internal initiation", "Adenovirus (uses ribosome shunting instead)", "HIV (uses frameshifting, not IRES)"],
    answer: 1,
    explanation: "Poliovirus and other picornaviruses (FMDV, HCV-like IRES in HCV itself) use IRES elements in their 5'UTR to recruit ribosomes internally without the 5' cap. Poliovirus cleaves eIF4G (retaining eIF4A-binding domain) to suppress host cap-dependent translation while IRES-mediated viral translation continues. HCV IRES directly binds the 40S subunit and eIF3."
  },
  {
    id: 11,
    question: "The 'Kozak sequence' in eukaryotic mRNA affects translation efficiency by:",
    options: ["Binding eIF4E directly to increase cap recognition", "Providing optimal context around the AUG for AUG recognition by the 43S PIC during scanning", "Forming a stem-loop that prevents leaky scanning", "Base-pairing with 18S rRNA (analogous to SD sequence)"],
    answer: 1,
    explanation: "The Kozak consensus (GCCACCAUGG in vertebrates, specifically the -3 purine and +4 G are most critical) determines AUG recognition efficiency during scanning. Weak Kozak context leads to 'leaky scanning' where the 43S PIC bypasses the first AUG and initiates at a downstream AUG. Strong Kozak context maximizes recognition and reduces reinitiation at downstream AUGs."
  },
  {
    id: 12,
    question: "Puromycin terminates translation by:",
    options: ["Blocking the A site sterically to prevent aa-tRNA binding", "Mimicking aminoacyl-tRNA, entering the A site and forming a peptide bond with the nascent chain, but the puromycylated peptide cannot translocate and is released prematurely", "Inhibiting EF-G/eEF2 GTPase activity", "Competing with GTP for EF-Tu binding"],
    answer: 1,
    explanation: "Puromycin is an aminonucleoside antibiotic that mimics the 3' end of aminoacyl-tRNA (aminoacyl-adenosine). It enters the A site and the PTC catalyzes peptide bond formation, creating a peptide-puromycin conjugate. However, the amide bond (not the ester bond of normal aa-tRNA) cannot be translocated properly, causing premature peptide release. Used to study translation and as an antibiotic/selection marker."
  },
  {
    id: 13,
    question: "The 'A-site,' 'P-site,' and 'E-site' of the ribosome refer to:",
    options: ["Sites for Acceptor, Processivity, and Elongation factor binding", "Aminoacyl, Peptidyl, and Exit sites for tRNA binding during elongation", "ATP, Protein, and Enzyme binding pockets", "Assembly, Peptide, and Export sites"],
    answer: 1,
    explanation: "The three tRNA binding sites: A (aminoacyl) site — incoming aa-tRNA; P (peptidyl) site — tRNA carrying the growing peptide chain; E (exit) site — deacylated tRNA after translocation, before release. During elongation, tRNAs move A→P→E. The peptide bond forms between P-site tRNA's amino acid (now peptide) and A-site aa-tRNA."
  },
  {
    id: 14,
    question: "Frameshifting during HIV-1 translation produces the Gag-Pol fusion protein. This −1 programmed ribosomal frameshifting requires:",
    options: ["A slippery sequence and a downstream stimulatory structure (pseudoknot/stem-loop) in the mRNA", "Suppressor tRNA reading a −1 codon", "Specific IRES element in the 5'UTR", "eIF2 phosphorylation to pause the ribosome"],
    answer: 0,
    explanation: "HIV-1 −1 frameshifting requires two cis-acting elements: (1) a slippery sequence (UUUUUUA) where the ribosome slips backward 1 nt; and (2) a downstream stimulatory structure (stem-loop or pseudoknot ~6-8 nt downstream) that causes the ribosome to pause at the slippery sequence. ~5% of ribosomes frameshift, producing Gag-Pol (reverse transcriptase, integrase, protease) while the rest make Gag only."
  },
  {
    id: 15,
    question: "Aminoacyl-tRNA synthetases (aaRS) use a 'double-sieve' editing mechanism to maintain accuracy. This involves:",
    options: ["A synthetic site that rejects amino acids too large, and an editing site that hydrolyzes misactivated or mischarged tRNAs that are too small", "Two separate synthetase molecules checking each other's work", "GTP hydrolysis to reject incorrect amino acids before tRNA charging", "Ribosomal A-site proofreading of misaminoacylated tRNAs"],
    answer: 0,
    explanation: "Class I aaRS double-sieve: the synthetic (activation) active site rejects amino acids larger than the cognate (first sieve); smaller structurally similar amino acids can be misactivated. The separate editing (hydrolytic) active site (pre-transfer editing of aa-AMP or post-transfer editing of mischarged aa-tRNA) rejects and hydrolyzes products too small for the cognate (second sieve). Example: IleRS editing of Val-tRNAIle."
  },
  {
    id: 16,
    question: "Selenocysteine (Sec) incorporation into proteins is directed by:",
    options: ["A standard cysteine codon with a modified tRNA", "The UGA stop codon in the presence of a SECIS element in the 3'UTR and specialized elongation factor SelB/eEFSec", "A unique 21st codon UAU that only Sec-tRNA reads", "A frameshift event at the Sec position"],
    answer: 1,
    explanation: "Selenocysteine is the 21st amino acid. UGA (normally a stop codon) is recoded as Sec by: (1) Sec-tRNA(Sec) (charged via Ser → Sep → Sec pathway), (2) SECIS (SElenoCysteine Insertion Sequence) element in the 3'UTR, and (3) specialized elongation factor SelB (bacteria) / eEFSec+SBP2 complex (eukaryotes) that delivers Sec-tRNA specifically to UGA in the presence of SECIS."
  },
  {
    id: 17,
    question: "Trans-translation (tmRNA rescue) in bacteria is activated when:",
    options: ["A ribosome encounters a premature stop codon from a truncated mRNA", "A ribosome stalls at the 3' end of a truncated mRNA lacking a stop codon (non-stop mRNA)", "Translation is too fast and needs slowing", "A damaged ribosome needs to be exchanged for a functional one"],
    answer: 1,
    explanation: "tmRNA (encoded by ssrA) rescues ribosomes stalled on non-stop mRNAs (mRNAs lacking stop codons, often from endonucleolytic cleavage). tmRNA acts first as a tRNA (entering the A site and adding Ala to the stalled peptide) then as an mRNA (providing a short ORF with a stop codon). The rescued protein carries an ssrA-tag (AANDENYALAA) targeting it for proteolysis. SmpB protein assists tmRNA."
  },
  {
    id: 18,
    question: "In eukaryotes, the eIF2α kinases (HRI, PKR, GCN2, PERK) share which common function?",
    options: ["Phosphorylating eIF4E to prevent cap-dependent translation", "Phosphorylating eIF2α at Ser51, blocking eIF2B-mediated GTP exchange and globally reducing cap-dependent translation while allowing some IRES-mediated or uORF-regulated translation", "Activating mTORC1 to enhance ribosome biogenesis", "Promoting P-body formation by phosphorylating PABP"],
    answer: 1,
    explanation: "These four kinases constitute the 'integrated stress response' (ISR). Each senses different stresses (HRI: heme deficiency; PKR: double-stranded RNA/virus; GCN2: amino acid deprivation; PERK: ER stress). All phosphorylate eIF2α Ser51, converting eIF2α-GDP into a competitive inhibitor of eIF2B (the GEF), depleting TC and globally reducing translation while allowing stress-responsive mRNAs with uORFs (ATF4, ATF5) to be preferentially translated."
  },
  {
    id: 19,
    question: "The 'cap-snatching' mechanism used by influenza virus involves:",
    options: ["Stealing the 5' cap from host mRNA to prime viral mRNA synthesis using the viral endonuclease PA and cap-binding PB2", "Translating viral RNA without a cap using an IRES element", "Methylating the viral RNA cap to prevent recognition by host restriction factors", "Using the host capping enzyme to cap viral mRNAs in the cytoplasm"],
    answer: 0,
    explanation: "Influenza RNA polymerase (PA-PB1-PB2 heterotrimer) performs cap-snatching: PB2 binds the 5' cap of host pre-mRNA; PA subunit cleaves the capped fragment (10-15 nt) endonucleolytically; the capped fragment is then used as a primer for viral mRNA synthesis by PB1 (the polymerase). This both provides capped primers and inhibits host mRNA processing."
  },
  {
    id: 20,
    question: "The charging of tRNA by aminoacyl-tRNA synthetase involves two main steps. The first step produces:",
    options: ["Aminoacyl-tRNA directly in one step requiring ATP", "Aminoacyl-adenylate (aa-AMP) with release of pyrophosphate (PPi)", "Aminoacyl-AMP with release of AMP", "Amino acid-CoA activated intermediate"],
    answer: 1,
    explanation: "Step 1 (amino acid activation): aa + ATP → aa-AMP + PPi (pyrophosphate). The pyrophosphate is hydrolyzed by pyrophosphatase, driving the reaction forward. Step 2 (tRNA charging): aa-AMP + tRNA → aa-tRNA + AMP. The aminoacyl group is transferred to the 2'- or 3'-OH of the 3' terminal adenosine (A76) of tRNA. Overall, two 'high-energy' bonds of ATP are consumed per amino acid activated."
  },
  {
    id: 21,
    question: "Chloramphenicol inhibits translation by:",
    options: ["Binding 30S and blocking Shine-Dalgarno base-pairing with 16S rRNA", "Binding the 50S peptidyl transferase center (A site region of 23S rRNA) and blocking peptide bond formation", "Mimicking the aminoacyl end of tRNA and entering the P site", "Inhibiting EF-G translocation by binding the L7/L12 stalk"],
    answer: 1,
    explanation: "Chloramphenicol binds to the 50S ribosomal subunit at the peptidyl transferase center (PTC), specifically blocking binding of the aminoacyl end of aa-tRNA in the A site. This prevents peptide bond formation. It is bacteriostatic and inhibits prokaryotic (and mitochondrial) ribosomes but not eukaryotic cytoplasmic 80S ribosomes (explaining selective toxicity and mitochondrial side effects)."
  },
  {
    id: 22,
    question: "Tetracycline antibiotics block translation by:",
    options: ["Blocking peptide bond formation at the PTC of the 50S subunit", "Binding the 30S subunit A site and blocking aa-tRNA-EF-Tu·GTP ternary complex delivery", "Inhibiting the GTPase activity of EF-G", "Causing misreading of the mRNA by destabilizing ribosome structure"],
    answer: 1,
    explanation: "Tetracyclines (binding Mg²⁺ complexes) bind primarily to the 30S subunit (helix 34 of 16S rRNA, near the A site) and sterically block the delivery of aminoacyl-tRNA·EF-Tu·GTP ternary complex to the A site, preventing elongation. They are bacteriostatic and also accumulate in bacterial cells more than mammalian cells (contributing to selectivity)."
  },
  {
    id: 23,
    question: "The 'hybrid states' model of translocation proposes that after peptide bond formation:",
    options: ["tRNAs move simultaneously in one large conformational change driven by EF-G", "tRNAs spontaneously move to hybrid A/P and P/E positions on the large subunit while mRNA remains stationary, then EF-G completes full translocation", "EF-G moves first and tRNAs follow", "The ribosome splits into subunits, releases the tRNA, and reassembles"],
    answer: 1,
    explanation: "Frank and Noller's hybrid states model: after peptide bond formation, tRNAs spontaneously fluctuate between classical (A and P sites) and hybrid states (where tRNA acceptor stems move to P and E sites on the 50S but anticodon loops remain in A and P sites on 30S). EF-G·GTP binds the hybrid state and catalyzes the second step — translocation of anticodon loops on the 30S — completing translocation."
  },
  {
    id: 24,
    question: "The ribosome recycling factor (RRF) in bacteria, together with EF-G, mediates:",
    options: ["Assembly of the 70S initiation complex from subunits", "Disassembly of post-termination 70S ribosomes into 50S and 30S subunits for reuse", "Recycling of deacylated tRNAs from the E site", "Rescue of stalled ribosomes on non-stop mRNAs"],
    answer: 1,
    explanation: "After peptide release by RF1/RF2, the ribosome remains assembled as a post-termination complex (70S·mRNA·deacylated tRNA·RF3). RRF (which mimics tRNA structure) binds the A site; EF-G·GTP drives RRF into the P site (mimicking translocation), splitting the 70S into 50S + 30S·mRNA·tRNA. IF3 then displaces the deacylated tRNA and stabilizes free 30S for the next round."
  },
  {
    id: 25,
    question: "Nonsense-mediated decay (NMD) in eukaryotes is triggered by:",
    options: ["A stop codon located upstream of the 5' cap", "A premature termination codon (PTC) located upstream of an exon junction complex (EJC) deposited during splicing", "Any stop codon that is found more than 30 nt from the poly(A) tail", "UGA stop codons specifically (not UAA or UAG)"],
    answer: 1,
    explanation: "NMD is activated when a ribosome encounters a PTC that is located >50-55 nt upstream of an EJC (exon junction complex deposited 20-24 nt upstream of each exon-exon junction during splicing). The terminating ribosome recruits UPF1, which interacts with UPF2/UPF3 bound to the EJC, triggering decapping, deadenylation, and endonucleolytic cleavage of the mRNA to degrade aberrant transcripts."
  },
  {
    id: 26,
    question: "mTORC1 regulates translation by phosphorylating which two key targets?",
    options: ["eIF4E and eIF4G", "S6K1 (which phosphorylates S6 ribosomal protein and eIF4B) and 4E-BP1 (releasing eIF4E to cap-dependent translation)", "eIF2α (Ser51) and eIF2B", "eIF5B and eIF3"],
    answer: 1,
    explanation: "mTORC1 promotes translation via: (1) phosphorylating and activating S6 Kinase 1 (S6K1), which phosphorylates rpS6, eIF4B, PDCD4, and SKAR — all promoting translation; and (2) phosphorylating 4E-BPs (eIF4E-binding proteins), causing their dissociation from eIF4E, freeing eIF4E to form the eIF4F cap-binding complex. Together, these increase cap-dependent translation especially of mRNAs with structured 5'UTRs encoding growth-related proteins."
  },
  {
    id: 27,
    question: "Erythromycin (a macrolide antibiotic) inhibits translation by:",
    options: ["Blocking the A site of the 30S subunit", "Binding in the 50S ribosomal exit tunnel and blocking nascent peptide progression after 5-10 amino acids", "Inhibiting EF-G GTP hydrolysis and translocation", "Preventing 70S initiation complex formation by blocking 50S joining"],
    answer: 1,
    explanation: "Erythromycin and other macrolides bind in the nascent peptide exit tunnel (NPET) of the 50S subunit, just below the PTC, near the A2058 residue of 23S rRNA. This does not block peptide bond formation itself but obstructs the passage of growing nascent chains after ~5-10 amino acids, causing ribosomes to stall and fall off the mRNA. A2058G mutation confers macrolide resistance."
  },
  {
    id: 28,
    question: "The 'decoding center' of the ribosome, where codon-anticodon interactions are monitored for accuracy, is located in the:",
    options: ["50S peptidyl transferase center (PTC)", "30S subunit A site — helix 44 of 16S rRNA (A1492, A1493, G530 universally conserved bases)", "E site of the 30S subunit", "Interface of 30S and 50S subunits (inter-subunit bridge B2a)"],
    answer: 1,
    explanation: "The decoding center is in the 30S A site: A1492 and A1493 of 16S rRNA (E. coli numbering) flip out of helix 44 and insert into the minor groove of the codon-anticodon helix to monitor Watson-Crick geometry. G530 also undergoes conformational change. Cognate codon-anticodon binding induces a 'closed' 30S conformation that triggers GTPase activation of EF-Tu. Near-cognate base pairs cannot satisfy these A-minor interactions fully."
  },
  {
    id: 29,
    question: "In eukaryotic translation initiation, how does eIF4F facilitate ribosome recruitment to mRNA?",
    options: ["eIF4F directly binds the poly(A) tail and loops the mRNA", "eIF4F (eIF4E + eIF4G + eIF4A) binds the 5' cap, and eIF4G scaffolds interactions with eIF3 (connected to 40S), PABP (stimulating closed-loop formation), and eIF4A (unwinding 5'UTR secondary structure)", "eIF4F binds the Kozak sequence directly and positions the AUG in the P site", "eIF4F is the GEF that recharges eIF2 with GTP"],
    answer: 1,
    explanation: "The eIF4F complex: eIF4E binds the 7-methyl-guanosine cap; eIF4G is a scaffold protein bridging eIF4E, eIF4A (DEAD-box RNA helicase), eIF3 (on the 40S), and PABP (on poly(A) tail, creating a closed-loop/mRNA circularization). eIF4A (with eIF4B) unwinds secondary structures in the 5'UTR, allowing the 43S PIC to scan. eIF4G also interacts with Mnk1/2 kinases that phosphorylate eIF4E."
  },
  {
    id: 30,
    question: "Aminoglycoside antibiotics (streptomycin, gentamicin) cause bacterial translational errors by:",
    options: ["Blocking the translocation step by inhibiting EF-G", "Binding helix 44 of 16S rRNA, stabilizing a 'ram' (ribosome ambiguity) state that allows near-cognate tRNAs to be accepted, causing misreading", "Inhibiting IF3 and promoting miscomplexes of 70S at wrong start codons", "Blocking A1492/A1493 flipping and preventing any codon reading"],
    answer: 1,
    explanation: "Aminoglycosides bind to helix 44 of 16S rRNA in the decoding center, locking A1492 and A1493 in the flipped-out conformation regardless of codon-anticodon complementarity. This stabilizes a 'ram' (ribosome ambiguity) state, promoting acceptance of near-cognate aa-tRNAs and inducing misreading/miscoding. Streptomycin binds slightly differently and additionally induces a conformational change that prevents factor binding."
  },
  {
    id: 31,
    question: "The ribosome exit tunnel (NPET) is approximately how long and can accommodate how many amino acids of the nascent polypeptide?",
    options: ["~30 Å long, ~5 amino acids", "~100 Å long, ~30-40 amino acids", "~200 Å long, ~70 amino acids", "~50 Å long, ~15 amino acids"],
    answer: 1,
    explanation: "The NPET is approximately 100 Å (10 nm) long and ~10-20 Å wide at the narrowest constriction. It can accommodate approximately 30-40 amino acids of an unfolded polypeptide. Certain nascent peptide sequences can interact with NPET walls (e.g., SecM, ErmCL, TnaC) to regulate ribosome dynamics. The NPET is lined mainly by rRNA and a few ribosomal proteins (L4, L17, L22)."
  },
  {
    id: 32,
    question: "Quality control mechanism 'No-go decay' (NGD) in eukaryotes is activated by:",
    options: ["Ribosomes encountering rare codons that deplete aa-tRNA pools", "Ribosomes stalled on stable secondary structures or damaged bases (non-stop/no-go substrates), recruits Dom34/Hbs1 for cleavage of the mRNA near the stall site", "Premature polyadenylation creating a non-stop mRNA", "mRNA lacking a 5' cap being degraded by Xrn1"],
    answer: 1,
    explanation: "NGD targets ribosomes stalled on secondary structures, pseudoknots, or damaged/modified bases. Dom34 (Pelota in mammals) and Hbs1 (eRF3 paralogs) recognize stalled ribosomes, cleave the mRNA ~1-2 codons upstream of the stall, and then promote ribosome recycling (subunit splitting). Ski complex and Xrn1/exosome then degrade the mRNA fragments."
  },
  {
    id: 33,
    question: "Linezolid (an oxazolidinone antibiotic) inhibits translation by:",
    options: ["Blocking peptide exit tunnel like macrolides", "Binding the 50S subunit A site and preventing formyl-methionyl-tRNA binding during initiation complex formation", "Inhibiting EF-Tu by locking it in the GDP-bound form", "Targeting the 30S decoding center"],
    answer: 1,
    explanation: "Linezolid binds to the 50S subunit at the PTC A site, overlapping with the binding site of chloramphenicol and lincosamides. It specifically inhibits the formation of the 70S initiation complex by preventing the binding of fMet-tRNA to the P site (or blocking P-A site interaction). It is active against Gram-positive bacteria including MRSA and VRE."
  },
  {
    id: 34,
    question: "What determines the reading frame during translation elongation?",
    options: ["The start codon AUG sets the reading frame; the ribosome then reads every subsequent 3 nt sequentially", "The Shine-Dalgarno sequence sets the reading frame for each codon", "tRNA wobble positions determine the reading frame at each step", "The poly(A) tail length sets the reading frame for the first codon"],
    answer: 0,
    explanation: "The reading frame is established by the start AUG codon. Once the initiator Met-tRNA is placed in the P site base-paired with AUG, subsequent codons are read sequentially every 3 nt as the ribosome translocates precisely 3 nt with each cycle. Mutations that insert or delete non-multiples of 3 nt cause frameshifts that disrupt this fixed reading frame."
  },
  {
    id: 35,
    question: "The 'closed-loop' model of eukaryotic mRNA involves simultaneous interaction of which complex components?",
    options: ["5' cap — eIF4E — eIF4G — PABP — poly(A) tail forming a closed mRNA circle", "5' cap — m6A modification — YTHDF1 — PolyA signal — CPSF", "IRES — eIF3 — 40S — eIF2 — AUG", "eIF4A helicase — eIF4B — 5'UTR stem-loops — ribosome"],
    answer: 0,
    explanation: "Closed-loop: eIF4E binds the 5' 7-methylguanosine cap; eIF4G is the scaffold linking eIF4E to PABP (poly(A)-binding protein) bound to the 3' poly(A) tail. This effectively circularizes the mRNA, stimulating translation by facilitating ribosome recycling (post-termination 80S can be delivered back to the 5' end), protecting mRNA from decay, and ensuring 3' integrity before translation."
  },
  {
    id: 36,
    question: "GTP hydrolysis by eIF5B is required for which step in eukaryotic translation initiation?",
    options: ["Scanning of the 43S PIC along the 5'UTR", "Joining of the 60S subunit to the 48S complex at the AUG, forming the 80S initiation complex", "Dissociation of eIF2-GDP from the Met-tRNA", "Release of eIF4E from the cap after PIC loading"],
    answer: 1,
    explanation: "After AUG recognition, eIF5 (GAP for eIF2) triggers GTP hydrolysis by eIF2, releasing eIF2-GDP and other initiation factors (eIF1, eIF1A, eIF3, eIF5). eIF5B (the eukaryotic homolog of IF2) then binds and catalyzes 60S subunit joining. GTP hydrolysis by eIF5B drives conformational changes that release eIF5B and eIF1A from the 80S complex, completing the initiation phase and allowing elongation to begin."
  },
  {
    id: 37,
    question: "Which antibiotic blocks translocation by mimicking EF-G and stabilizing the post-translocation state?",
    options: ["Spectinomycin", "Fusidic acid", "Linezolid", "Streptomycin"],
    answer: 1,
    explanation: "Fusidic acid (a steroidal antibiotic) binds EF-G·GDP after GTP hydrolysis and locks EF-G on the ribosome, preventing EF-G dissociation after translocation. This traps the ribosome in the post-translocation state and blocks the next cycle of aa-tRNA delivery. It is structurally unrelated to GTP and its resistance mutations map to EF-G, not the ribosome."
  },
  {
    id: 38,
    question: "The 'ribosome profiling' (Ribo-seq) technique measures:",
    options: ["Total mRNA abundance by RNA-seq", "Ribosome-protected mRNA fragments (~28-30 nt) generated by RNase I digestion, giving a genome-wide snapshot of ribosome positions and translational efficiency", "Ribosome abundance by mass spectrometry", "tRNA aminoacylation levels across the transcriptome"],
    answer: 1,
    explanation: "Ribo-seq (Ingolia et al., 2009): cells are lysed and ribosomes are stabilized with cycloheximide; RNase I digests exposed mRNA; ribosome-protected fragments (RPFs, ~28-30 nt) are isolated, converted to cDNA, and sequenced. The triplet periodicity of reads confirms reading frames. Data reveal ribosome density (translational efficiency), pause sites, uORF translation, frameshifting, and co-translational events."
  },
  {
    id: 39,
    question: "In bacteria, the initiator tRNA (fMet-tRNAfMet) is unique because:",
    options: ["It base-pairs with UAA instead of AUG at the start site", "It is charged with methionine and then formylated by formyl-methionyl-tRNA transformylase (fmt), and it directly enters the P site during initiation without going through the A site", "It is synthesized only during heat shock", "It lacks a CCA-3' terminus and requires a 3'-adenylation step before use"],
    answer: 1,
    explanation: "Unlike elongator Met-tRNA (which enters the A site via EF-Tu), initiator fMet-tRNAfMet is recognized by IF2 (in bacteria) and placed directly into the P site. It is first charged with Met by MetRS, then the Met is formylated at the α-amino group by methionyl-tRNAfMet formyltransferase (using 10-formyl-THF). Formylation prevents EF-Tu binding and marks it for initiator function."
  },
  {
    id: 40,
    question: "The 'wobble hypothesis' by Francis Crick explains which observation in translation?",
    options: ["More than one codon can specify the same amino acid (degeneracy) because the tRNA anticodon third position (wobble position) can form non-Watson-Crick base pairs with multiple codons", "Ribosomes can translate in both 5'→3' and 3'→5' directions on mRNA", "tRNAs can accommodate multiple amino acids depending on cellular conditions", "EF-Tu can bind multiple different aminoacyl-tRNAs with the same affinity"],
    answer: 0,
    explanation: "Crick proposed that the third position of the codon (3' end) and first position of the anticodon (5' end, the 'wobble position') allow non-standard base pairing. For example, inosine (I) in the anticodon wobble position can base-pair with U, C, or A in the codon. This explains how ~45 different tRNAs decode 61 sense codons (fewer tRNAs than codons), enabling the synonymous codon degeneracy of the genetic code."
  },
  {
    id: 41,
    question: "Ribosome stalling during co-translational protein targeting to the ER membrane is initiated by:",
    options: ["Polypeptide emerging from the tunnel folding prematurely in the cytoplasm", "SRP (Signal Recognition Particle) binding the signal sequence emerging from the exit tunnel, slowing elongation until the ribosome docks at the ER translocon", "GRP78/BiP in the ER lumen pulling the nascent chain through", "Puromycin-sensitive mechanism causing peptide release at the ER surface"],
    answer: 1,
    explanation: "When a signal sequence (or signal anchor) emerges from the NPET, SRP (a 7SL RNA + 6 proteins) binds it and the ribosome. SRP slows elongation (translational pausing/attenuation) and targets the ribosome-nascent chain-SRP complex to the ER membrane by binding SRP receptor (SR/docking protein). GTP hydrolysis by SRP and SR releases SRP, allowing the ribosome to engage the translocon (Sec61 complex) and resume translation."
  },
  {
    id: 42,
    question: "What is the 'GTPase associated center' (GAC) of the ribosome and why is it important?",
    options: ["The GTP-binding site of EF-Tu located on the 40S subunit", "A region of the 50S/60S subunit (sarcin-ricin loop + L10/L12 stalk proteins) that activates GTPase activity of translation factors including EF-Tu, EF-G, IF2, and RF3", "The active site of the ribosome where GTP is used directly for peptide bond formation", "A regulatory site on eIF2 that monitors GTP/GDP ratio in the cell"],
    answer: 1,
    explanation: "The GAC on the 50S subunit includes: the sarcin-ricin loop (SRL, helix 95 of 23S rRNA — universally conserved, targeted by sarcin and ricin toxins) and the L10/L11/L12 stalk proteins. The SRL makes direct contacts with the GTPase domain of translation factors (EF-Tu, EF-G, RF3, IF2) and stimulates GTP hydrolysis. Ricin cleaves the SRL, blocking all GTPase-dependent steps."
  },
  {
    id: 43,
    question: "Polysome formation (polysomes/polyribosomes) represents:",
    options: ["A pathological aggregation of misfolded ribosomes", "Multiple ribosomes simultaneously translating the same mRNA molecule, increasing translational output per mRNA", "Ribosome subunits aggregated during stress conditions", "Ribosomes stalled at the same codon on multiple mRNA molecules"],
    answer: 1,
    explanation: "Polysomes (polyribosomes) are clusters of multiple ribosomes translating the same mRNA molecule simultaneously. Once the first ribosome has moved far enough from the AUG (>~25-30 codons), a second ribosome can initiate, and so on. Polysomes maximize the number of protein molecules produced per mRNA per unit time. They can be visualized by electron microscopy or sedimented in sucrose gradients."
  },
  {
    id: 44,
    question: "The genetic code was experimentally cracked primarily by which approach used by Nirenberg and Matthei (1961)?",
    options: ["X-ray crystallography of aminoacyl-tRNA synthetases", "Cell-free translation of synthetic polynucleotide homopolymers (e.g., poly-U codes for Phe)", "Sequencing of early viral RNA genomes", "In vitro mutagenesis of the E. coli genome"],
    answer: 1,
    explanation: "Nirenberg and Matthei (1961) added synthetic poly-U RNA to cell-free E. coli translation extracts and observed synthesis of polyphenylalanine — demonstrating UUU codes for Phe. Similar experiments with poly-A (Lys) and poly-C (Pro) followed. Later, trinucleotide codon binding assays (ribosome filter binding with specific aminoacyl-tRNAs) by Nirenberg and Leder assigned most codons. Khorana's chemical synthesis of defined codons completed the table."
  },
  {
    id: 45,
    question: "What is the significance of the 'peptide exit tunnel constriction' formed by ribosomal proteins L4 and L22?",
    options: ["It is the site of signal sequence recognition by SRP", "It is the narrowest point of the NPET that can sense specific nascent peptide sequences and regulate elongation speed or cause arrest", "It is where macrolide antibiotics primarily bind", "It is where the signal peptidase cleaves the signal sequence"],
    answer: 1,
    explanation: "L4 and L22 form a narrow constriction (~10 Å) about two-thirds down the NPET. Certain regulatory nascent peptide sequences (SecM, TnaC, ErmCL) interact with the tunnel walls at this constriction and the PTC, inducing ribosome arrest. This self-arresting mechanism regulates downstream gene expression (e.g., SecM stalling controls SecA expression). Macrolides bind above this constriction, closer to the PTC."
  },
  {
    id: 46,
    question: "Readthrough of stop codons (suppression) can be promoted by which conditions?",
    options: ["High aminoacyl-tRNA concentrations that outcompete release factors", "Presence of natural suppressor tRNAs (with anticodon matching stop codon), aminoglycosides causing misreading, or specific mRNA sequences downstream of the stop codon", "Phosphorylation of eRF1 by mTORC1", "Mutations in the poly(A) polymerase that extend 3' ends"],
    answer: 1,
    explanation: "Stop codon readthrough occurs via: (1) suppressor tRNAs (natural or introduced) that read stop codons — used in genetic code expansion; (2) aminoglycosides (like gentamicin, ataluren-like molecules for NMD suppression in nonsense mutation diseases); (3) specific 3' downstream sequences that reduce decoding efficiency (e.g., selenoprotein SECIS elements for UGA); and (4) certain viral sequences. Low-level natural readthrough occurs at all stop codons."
  },
  {
    id: 47,
    question: "In which direction does translation proceed on the mRNA, and in which direction does the polypeptide grow?",
    options: ["3'→5' on mRNA; C-terminus to N-terminus", "5'→3' on mRNA; N-terminus to C-terminus", "5'→3' on mRNA; C-terminus to N-terminus", "3'→5' on mRNA; N-terminus to C-terminus"],
    answer: 1,
    explanation: "Translation proceeds 5'→3' on the mRNA (the ribosome moves from the 5' end toward the 3' end, reading codons in the 5'→3' direction). The polypeptide grows from its N-terminus to C-terminus: the first amino acid (Met/fMet) is the N-terminal residue, and each subsequent amino acid is added to the C-terminal end of the growing chain."
  },
  {
    id: 48,
    question: "The eukaryotic release factor eRF1 recognizes stop codons and eRF3 is its GTPase partner. GTP hydrolysis by eRF3 promotes:",
    options: ["Loading of eRF1 into the A site", "Conformational rearrangement that repositions the GGQ loop of eRF1 into the PTC, enabling peptidyl-tRNA hydrolysis", "Ribosome recycling by ABCE1 ATPase recruitment", "Decapping of the mRNA by DCP1/DCP2"],
    answer: 1,
    explanation: "eRF1 recognizes all three stop codons; eRF3·GTP stabilizes eRF1 in the A site. GTP hydrolysis by eRF3 (stimulated by the ribosome) induces a conformational change in eRF1 that repositions the universally conserved GGQ motif (in eRF1 domain 2) into the PTC, where the glutamine of GGQ catalyzes hydrolysis of the peptidyl-tRNA ester bond, releasing the polypeptide. ABCE1 (Rli1 in yeast) then facilitates subunit dissociation."
  },
  {
    id: 49,
    question: "Diphtheria toxin (from Corynebacterium diphtheriae) kills eukaryotic cells by:",
    options: ["Cleaving the sarcin-ricin loop of 28S rRNA", "ADP-ribosylating the diphthamide residue of eEF2, permanently inactivating it and blocking translocation", "Cleaving the GGQ loop of eRF1 to prevent termination", "Phosphorylating eIF2α to cause global translational repression"],
    answer: 1,
    explanation: "Diphtheria toxin (DT) A-domain is an ADP-ribosyltransferase that adds ADP-ribose (from NAD+) to diphthamide — a uniquely modified histidine residue (His715 in human eEF2). This modification permanently inactivates eEF2, blocking translocation and halting translation. A single DT molecule can inactivate all eEF2 in a cell, making it extremely potent. Diphthamide is unique to eukaryotic EF-2."
  },
  {
    id: 50,
    question: "The concept of 'translation efficiency' in the context of codon usage refers to:",
    options: ["The ratio of amino acids correctly incorporated vs total incorporated", "The rate of elongation at each codon, influenced by tRNA abundance and codon-anticodon complementarity, with rare codons slowing elongation and affecting protein folding", "The number of ribosomes initiating per mRNA per minute", "The fidelity of start codon recognition by the 43S PIC"],
    answer: 1,
    explanation: "Translation efficiency at each codon depends on the abundance of the cognate tRNA (highly expressed genes use codons matched to abundant tRNAs — 'codon optimization'). Rare codons (decoded by rare tRNAs) slow elongation. This regulated pausing affects co-translational protein folding by giving the nascent peptide time to fold domain-by-domain, and also affects mRNA stability. Codon optimization is used biotechnologically to increase recombinant protein yield."
  }
];

export default questions
