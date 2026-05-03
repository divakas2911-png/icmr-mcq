export const questions = [
  {
    id: 1,
    question: "Which type of DNA damage is caused by ultraviolet (UV) radiation at 260 nm (UVB)?",
    options: ["Double-strand breaks (DSBs) by direct ionization", "Cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts between adjacent pyrimidines on the same strand", "Oxidative guanine damage (8-oxoguanine)", "Alkylation of adenine (3-methyladenine)"],
    answer: 1,
    explanation: "UV radiation (primarily UVB at 254-280 nm, peak absorption ~260 nm) causes two major types of photoproducts between adjacent pyrimidines on the same DNA strand: (1) Cyclobutane pyrimidine dimers (CPDs) — most common (~70-80% of UV lesions), ring fusion between C5-C6 bonds; (2) 6-4 photoproducts (6-4PPs) — bond between C6 of 5' pyrimidine and C4 of 3' pyrimidine. Both block DNA replication and RNA Pol progression, causing mutations if bypassed incorrectly."
  },
  {
    id: 2,
    question: "Base excision repair (BER) is initiated by which type of enzyme?",
    options: ["Nucleotide excision repair factors XPC-RAD23B", "DNA glycosylases that cleave the N-glycosidic bond between the damaged base and deoxyribose, creating an apurinic/apyrimidinic (AP) site", "Mismatch repair factors MSH2-MSH6", "Photolyase that directly monomerizes pyrimidine dimers"],
    answer: 1,
    explanation: "BER initiates with a DNA glycosylase that recognizes and removes a specific damaged/mismatched base by cleaving the N-glycosidic bond, creating an AP (apurinic/apyrimidinic) site. Then AP endonuclease (APE1) cuts the phosphodiester bond 5' to the AP site. DNA Pol β (short-patch BER) or Pol δ/ε (long-patch BER) fills the gap; DNA ligase seals. Key glycosylases: UNG (uracil), OGG1 (8-oxoguanine), NEIL1/2 (oxidized bases), MPG/AAG (3-methyladenine), TDG/MBD4 (G:T mismatches)."
  },
  {
    id: 3,
    question: "Nucleotide excision repair (NER) removes bulky adducts. The two sub-pathways are:",
    options: ["Short-patch NER (removes 1-2 nt) and long-patch NER (removes 20-30 nt)", "Global genome NER (GG-NER) — repairs entire genome with XPC-RAD23B as damage sensor; and Transcription-coupled NER (TC-NER) — repairs transcribed strand using stalled RNA Pol II as sensor with CSB/CSA", "Canonical NER and backup NER mediated by PARP1", "Oxidative NER and UV NER based on lesion type"],
    answer: 1,
    explanation: "NER sub-pathways differ in damage recognition: (1) GG-NER: XPC-RAD23B (and DDB2/DDB1 for CPDs) scans the genome for helix distortions. (2) TC-NER: RNA Pol II stalling at a lesion recruits CSB (CKN2) ATPase, then CSA (CKN1/ERCC8) E3 ligase complex, UVSSA-USP7. Both pathways converge: TFIIH (XPB, XPD helicases) verify lesion and open DNA ~30 bp; XPA-RPA stabilize; XPG (3') and XPF-ERCC1 (5') dual incision releases ~25-30 nt fragment; Pol δ/ε fills gap; LigI/LigIIIα seals."
  },
  {
    id: 4,
    question: "8-Oxoguanine (8-oxoG) is a common oxidative DNA lesion. If unrepaired, 8-oxoG causes which type of mutation?",
    options: ["G:C → A:T transitions (because 8-oxoG mispairs with cytosine)", "G:C → T:A transversions (because 8-oxoG mispairs with adenine, causing G→T mutation after replication)", "C:G → T:A transitions", "Frameshift insertions at the site of 8-oxoG"],
    answer: 1,
    explanation: "8-Oxoguanine (the most common oxidative base damage) can adopt the syn conformation, forming a Hoogsteen base pair with adenine. If 8-oxoG (derived from G) mispairs with A during replication, the next round of replication incorporates T opposite the A → original G:C becomes T:A — a G:C→T:A transversion (the most common mutation in lung cancer from reactive oxygen species). OGG1 glycosylase removes 8-oxoG when paired with C (BER). MUTYH glycosylase removes A misincorporated opposite 8-oxoG (GO system)."
  },
  {
    id: 5,
    question: "Mismatch repair (MMR) in eukaryotes corrects replication errors. How does the MMR system distinguish the newly synthesized strand (containing the error) from the parental strand?",
    options: ["Dam methylation (as in bacteria) distinguishes parental GATC sequences from newly synthesized unmethylated DNA", "In eukaryotes, MMR is coupled to replication — PCNA, RFC, and nicks/gaps present in the newly synthesized strand (lagging strand Okazaki fragment nicks, leading strand) direct MMR to the new strand; MSH2-MSH6 or MSH2-MSH3 recognize the mismatch and recruit MLH1-PMS2 which creates an incision near the mismatch", "The MMR system does not distinguish strands — it repairs both strands with equal probability", "Histone H3K36me3 (deposited on chromatin during replication) marks the new strand for MMR recognition"],
    answer: 1,
    explanation: "Eukaryotic MMR strand discrimination: Unlike bacteria (Dam methylation at GATC), eukaryotes use pre-existing strand discontinuities (3'-OH nicks in Okazaki fragments; the leading strand nick from RFC removal). MSH2-MSH6 (recognizes base-base mismatches and single base insertions/deletions) or MSH2-MSH3 (recognizes larger insertion/deletion loops) binds the mismatch → recruits MLH1-PMS2 → PMS2 endonuclease creates incision in new strand → EXO1 degrades from nick past mismatch → Pol δ/RFC/PCNA fills → LigI seals. H3K36me3 also recruits MSH2-MSH6."
  },
  {
    id: 6,
    question: "Homologous recombination (HR) repairs DNA double-strand breaks primarily during which cell cycle phase(s), and why?",
    options: ["G1 phase only, because the DNA is single-stranded at that point", "S and G2 phases — when sister chromatids are available as repair templates; HR requires a homologous sequence to copy, and sister chromatids (still joined by cohesin) are the ideal template", "Only during mitosis when chromosomes are condensed", "G0 phase when cells are quiescent and have the most time for accurate repair"],
    answer: 1,
    explanation: "HR is restricted to S/G2 phases by CDK-mediated phosphorylation: CDK1/2 phosphorylate CtIP (promoting resection at DSBs), BRCA2 (nuclear localization), and RPA to favor the HR pathway. The sister chromatid (held by cohesin) provides an identical template for error-free repair. In G1 (when no sister chromatid is available), NHEJ is preferred. CDK1 also phosphorylates PALB2 and BRCA1 to regulate their HR-promoting activity. RB1 also regulates HR by binding C-terminal of BRCA2."
  },
  {
    id: 7,
    question: "The MRN complex (MRE11-RAD50-NBS1) at a DNA double-strand break functions to:",
    options: ["Directly repair the DSB by ligating the broken ends without processing", "Sense and process DSBs — MRE11 has endo- and exonuclease activities for end processing; RAD50 is a cohesin-like ATPase that tethers broken ends; NBS1 recruits ATM kinase; together they recruit and activate ATM for the DNA damage response", "Inhibit ATM kinase to prevent premature checkpoint activation", "Recruit RPA to block exonuclease activity at broken ends"],
    answer: 1,
    explanation: "MRN (Mre11-Rad50-Nbs1) is the first responder at DSBs: (1) RAD50 (SMC superfamily ATPase) forms coiled-coil structures that can bridge broken DNA ends; (2) MRE11 has both 3'→5' exonuclease and endonuclease activity for DSB end processing (initial resection); (3) NBS1 (Nibrin) contains FHA/BRCT domains binding γH2AX, MDC1, and phospho-ATM — critically recruits ATM kinase to DSBs; (4) Together MRN activates ATM ~1000-fold by opening ATM dimers; ATM then phosphorylates H2AX (γH2AX), CHK2, p53, BRCA1, etc."
  },
  {
    id: 8,
    question: "PARP1 (Poly(ADP-ribose) Polymerase 1) is recruited to single-strand breaks and BER intermediates. What is the mechanism of PARP inhibitor (PARPi) synthetic lethality with BRCA1/2 mutations?",
    options: ["PARP inhibitors poison the cell by causing excessive poly(ADP-ribosylation)", "PARPi traps PARP1 at SSBs, converting SSBs to DSBs during replication; normally, BRCA1/2-dependent HR repairs these replication-associated DSBs; BRCA1/2-mutant cells lack HR and cannot repair these DSBs → cell death specifically in BRCA-mutant tumor cells", "PARPi blocks PARP's role in activating ATM at DSBs", "PARP inhibitors prevent BER, causing excessive 8-oxoG accumulation that kills BRCA-mutant cells by base mismatch"],
    answer: 1,
    explanation: "PARP1 normally senses SSBs, modifies proteins with PAR chains, and then dissociates ('relay race'). PARPi prevent PARP1 catalytic activity and cause PARP1 to be trapped on DNA (PARP-DNA 'poisoning'). Trapped PARP creates cytotoxic replication fork blocks that collapse into DSBs during S phase. Cells with functional HR (BRCA1/2 intact) repair these DSBs. BRCA1/2-mutant cells lack HR → rely on error-prone NHEJ/MMEJ → massive chromosomal instability → death. This synthetic lethality is exploited by olaparib, rucaparib, niraparib, talazoparib in BRCA-mutant cancers."
  },
  {
    id: 9,
    question: "Non-homologous end joining (NHEJ) is the primary DSB repair pathway in mammalian cells during G1. Which complex initially binds and protects the broken DNA ends?",
    options: ["RPA heterotrimeric complex coats ssDNA ends", "Ku70-Ku80 (Ku) heterodimer encircles dsDNA at the broken end with high affinity, protecting from resection and recruiting DNA-PKcs", "MRN complex provides initial end protection and recruits DNA-PKcs", "XRCC4-Lig4 complex binds ends directly without prior Ku binding"],
    answer: 1,
    explanation: "NHEJ: (1) Ku70-Ku80 heterodimer rapidly (within seconds) loads onto DSB ends by threading onto the duplex near the break — it is ring-shaped; (2) Ku-DNA complex recruits DNA-PKcs (a Ser/Thr kinase, the catalytic subunit of DNA-PK); (3) DNA-PKcs autophosphorylation and trans-phosphorylation of partner regulate access for processing enzymes; (4) Artemis (with DNA-PKcs) trims 5' overhangs and opens hairpins; (5) DNA Pol μ/λ fill gaps; (6) XRCC4-Lig4-XLF/NHEJ1 complex ligates the ends. NHEJ is error-prone but rapid."
  },
  {
    id: 10,
    question: "Translesion synthesis (TLS) polymerases (Rev1, Pol η, Pol ι, Pol κ, Pol ζ) are specialized because they:",
    options: ["Are more accurate than replicative polymerases and proofread TLS products", "Have spacious active sites and lack intrinsic proofreading activity — they can accommodate bulky/distorted template lesions but have reduced fidelity; they extend from opposite a lesion when replicative polymerases stall, preventing replication arrest at the cost of potential mutations", "Only operate during G2/M phase after replication is complete", "Are restricted to mitochondrial DNA repair"],
    answer: 1,
    explanation: "TLS polymerases (Y-family: Pol η/POLH, Pol ι/POLI, Pol κ/POLK, Rev1; B-family: Pol ζ/REV3-REV7): Their active sites are larger and more flexible than replicative polymerases, accommodating distorted template bases. No intrinsic 3'→5' proofreading exonuclease → higher error rates (~10⁻² vs 10⁻⁷). PCNA ubiquitination (K164-Ub by RAD6/RAD18 at stalled forks) recruits TLS Pols. Pol η (POLH, mutated in XPV) accurately inserts dAMP opposite CPD dimers (both template A and T). Pol ζ is the extender."
  },
  {
    id: 11,
    question: "Xeroderma pigmentosum (XP) is caused by defects in which DNA repair pathway, and XP-V (variant) is caused by mutation in which gene?",
    options: ["MMR defects cause XP; XP-V is caused by MLH1 mutation", "NER defects cause XP (groups A-G); XP-V is caused by mutation in POLH (DNA Pol η), a TLS polymerase that accurately bypasses UV-induced CPD dimers", "NHEJ defects cause XP; XP-V involves RAD54 mutation", "BER defects cause XP; XP-V involves APE1 mutation"],
    answer: 1,
    explanation: "Xeroderma pigmentosum: XP-A to XP-G are caused by mutations in NER genes (XPA through XPG/ERCC5). Complementation group XP-V (variant) is caused by mutation in POLH (encoding DNA Pol η). Pol η normally accurately inserts AA opposite CPDs (template TT). XP-V patients have normal NER but during replication, other error-prone TLS polymerases bypass the CPD incorrectly, causing mutations → extreme UV sensitivity, sunburn, skin cancer (1000× normal risk), and CNS abnormalities (XP-A, D, G groups with neurodegeneration)."
  },
  {
    id: 12,
    question: "ATM and ATR are the two main DNA damage response kinases. What is the difference in their activation signals?",
    options: ["ATM is activated by ssDNA; ATR is activated by DSBs", "ATM is activated by DNA DSBs (via MRN complex sensing); ATR is activated by ssDNA-RPA complexes at stalled replication forks, nucleotide excision repair intermediates, or resected DSBs — via ATRIP binding RPA and TOPBP1/ETAA1 activating ATR", "Both ATM and ATR are activated only by ionizing radiation", "ATM is activated in S phase only; ATR is activated in G1/G2 only"],
    answer: 1,
    explanation: "ATM (PI3K-related kinase): Activated by DSBs → MRN recruits ATM dimers to DSBs → MRN's NBS1 and DNA-end binding opens ATM dimers → ATM autophosphorylation (S1981) → active ATM monomer. Substrates: H2AX, CHK2, p53, BRCA1, NBS1, MDM2. ATR (with ATRIP partner): Activated by RPA-coated ssDNA (at stalled forks, resected DSBs, NER intermediates) → ATRIP binds RPA → RAD17-RFC loads 9-1-1 clamp (RAD9-HUS1-RAD1) → TOPBP1 or ETAA1 activates ATR → CHK1 phosphorylation (S317, S345) → cell cycle arrest. ATR is essential for viability (unlike ATM)."
  },
  {
    id: 13,
    question: "γH2AX (phosphorylated histone H2AX at Ser139) serves as a DSB marker. Which kinases phosphorylate H2AX at Ser139?",
    options: ["Only ATM phosphorylates H2AX", "ATM (at DSBs), ATR (at stalled forks/resected DSBs), and DNA-PKcs (at NHEJ sites) — all three PI3K-related kinases can phosphorylate H2AX S139, creating γH2AX foci that span Mb around each DSB", "CHK1 and CHK2 phosphorylate H2AX as downstream effectors", "CDK2 phosphorylates H2AX during S phase as a replication marker"],
    answer: 1,
    explanation: "All three PIKKs (ATM, ATR, DNA-PKcs) phosphorylate H2AX S139, creating γH2AX foci. ATM-dependent γH2AX at DSBs: spreads rapidly (~kb/min) via MDC1 (which binds γH2AX, recruits more MRN → more ATM → more γH2AX amplification cascade). γH2AX recruits: MDC1 → MRN → ATM; BRCA1 (via BARD1); 53BP1 (via Tudor domain reading methylated H4K20me2). γH2AX foci count correlates with DSB number — used clinically to measure radiation-induced DNA damage and repair capacity."
  },
  {
    id: 14,
    question: "Direct reversal of DNA damage (without base excision or nucleotide excision) occurs for which type of lesion?",
    options: ["UV-induced CPD dimers in all organisms", "O6-methylguanine — directly repaired by MGMT (O6-methylguanine-DNA methyltransferase), which transfers the methyl group to its own cysteine residue, inactivating itself irreversibly (suicide enzyme)", "8-oxoguanine oxidative damage", "Abasic (AP) sites — directly repaired by AP-lyase activity"],
    answer: 1,
    explanation: "Direct reversal is rare. Best examples: (1) O6-methylguanine → MGMT (O6-alkylguanine-DNA alkyltransferase) transfers the O6-alkyl group to its own Cys145, restoring guanine. MGMT is consumed (stoichiometric, not catalytic) — one MGMT molecule per repair event. MGMT is silenced by promoter methylation in many GBMs (making them sensitive to temozolomide). (2) AlkB (bacteria) / ALKBH2/3 (mammals) are Fe2+/αKG dioxygenases that directly oxidatively demethylate 1-methyladenine and 3-methylcytosine. (3) Photolyase reverses CPDs/6-4PPs (not in placental mammals)."
  },
  {
    id: 15,
    question: "In E. coli, the adaptive response to DNA alkylation damage is mediated by the Ada protein. Which unique property does Ada have?",
    options: ["Ada is a two-component sensor kinase that detects alkyl groups", "Ada acts as both a DNA repair enzyme (alkyl-transfer to Cys residues in two domains — one for O6-methylguanine, one for methylphosphotriesters) and a transcription activator for adaptive response genes (including its own gene, ogt, alkA, aidB) after auto-methylation of its N-terminal domain Cys38", "Ada is an RNA-binding protein that stabilizes DNA repair mRNAs during alkylation stress", "Ada is cleaved by a protease upon alkylation, releasing an active fragment that enters the nucleus"],
    answer: 1,
    explanation: "Ada has two alkyl-acceptor cysteine residues in two domains: (1) C-terminal domain (Cys321) repairs O6-methylguanine and O4-methylthymine; (2) N-terminal domain (Cys38) repairs methylphosphotriesters. Crucially, after Cys38 methylation, the N-terminal domain becomes a transcriptional activator that binds Ada boxes in promoters of ada, aidB, alkA, and ogt genes → adaptive response. This 'suicide' chemistry + activation is a unique mechanism where the repair event itself creates the transcriptional signal."
  },
  {
    id: 16,
    question: "Fanconi anemia (FA) pathway repairs which type of DNA damage?",
    options: ["Single-strand breaks caused by reactive oxygen species", "DNA interstrand crosslinks (ICLs) — the FA pathway coordinates NER, HR, and TLS to unhook and repair ICLs that block both strands of DNA and cannot be repaired by any single pathway alone", "UV-induced photodimers via a backup NER pathway", "Telomere shortening in bone marrow stem cells"],
    answer: 1,
    explanation: "ICLs (caused by cisplatin, mitomycin C, psoralen) covalently link both DNA strands, blocking both replication and transcription. FA pathway (FANC proteins A, B, C, D1/BRCA2, D2, E, F, G, I, J/BRIP1, L, M, N/PALB2, P, Q, R, S/BRCA1, T, U, V): FANCI-FANCD2 (I-D2) complex is monoubiquitylated by the FA core complex (FANCL E3 ligase) → I-D2-Ub recruited to ICL → NER endonucleases (XPF-ERCC1) unhook one strand → TLS Pol η/ζ/Rev1 bypass the unhooked adduct → HR (FANCD1/BRCA2, FANCN/PALB2, FANCS/BRCA1) repairs the resulting DSB."
  },
  {
    id: 17,
    question: "The 9-1-1 clamp (RAD9-HUS1-RAD1) in eukaryotic DNA damage response functions analogously to which replication factor?",
    options: ["It functions like the sliding clamp PCNA — loaded onto DNA at ssDNA/dsDNA junctions by RAD17-RFC complex, and serves as a scaffold to recruit checkpoint and repair proteins including TopBP1/ATRIP", "It functions like the MCM helicase complex during replication initiation", "It replaces the MRN complex for DSB sensing in ATR pathway", "It functions like RPA to coat ssDNA and prevent hairpin formation"],
    answer: 0,
    explanation: "The 9-1-1 clamp (RAD9-HUS1-RAD1 heterotrimer) is structurally similar to PCNA (both are ring-shaped sliding clamps). RAD17-RFC2-5 (alternative RFC) loads 9-1-1 at ssDNA-dsDNA junctions (RPA-coated ssDNA directs loading). 9-1-1 interacts with TOPBP1 (through RAD9 C-terminus) to activate ATR kinase. 9-1-1 also recruits: MutL homologs, claspin (CHK1 scaffold), DNA Pol α, DNMT3a — serving as a scaffold at damage sites to coordinate checkpoint and repair signals."
  },
  {
    id: 18,
    question: "Which DNA damage-induced post-translational modification marks chromatin around DSBs and is required for 53BP1 recruitment?",
    options: ["H3K4me3 (active gene mark) is lost and H3K27me3 accumulates at DSBs", "H4K20 dimethylation (H4K20me2) is recognized by the Tudor domain of 53BP1; additionally, H2AK15 mono-ubiquitylation (by RNF168) is read by 53BP1's UDR motif; ATM-dependent γH2AX recruits MDC1 and RNF8/RNF168 ubiquitin ligases that establish this chromatin mark", "H3K9me3 is deposited de novo by SUV39H1 at DSBs for 53BP1 recruitment", "H4K16 acetylation is removed by HDAC1 at DSBs, and this deacetylated H4K16 is recognized by 53BP1"],
    answer: 1,
    explanation: "53BP1 recruitment requires two histone marks: (1) H4K20me2 (constitutive mark recognized by 53BP1 Tudor domain — normally occluded by L3MBTL1 or JMJD2A/KDM4A; DSB-induced RNF8/RNF168 ubiquitylation of L3MBTL1 or demethylase activation exposes H4K20me2); (2) H2AK15-Ub (deposited by RNF168 in a cascade: γH2AX → MDC1 → RNF8 → RNF168 → H2AK13/15-Ub) read by 53BP1's UDR (ubiquitylation-dependent recruitment) motif. 53BP1 promotes NHEJ by blocking resection (via RIF1-Shieldin) and opposing BRCA1."
  },
  {
    id: 19,
    question: "The 'resection' step in homologous recombination, converting DSBs to ssDNA, is performed by which nucleases?",
    options: ["MRE11 alone performs all resection using its 3'→5' exonuclease activity", "Two-step resection: (1) MRE11-RAD50 (with CtIP) initial short-range resection (endonuclease cleavage, then 3'→5' exonuclease); (2) Long-range resection by EXO1 (5'→3' exonuclease) or BLM-DNA2-RPA (BLM helicase + DNA2 endonuclease) generating 3' ssDNA overhangs coated by RPA", "XPF-ERCC1 performs DSB resection analogously to NER incision", "Artemis exonuclease performs all resection in HR"],
    answer: 1,
    explanation: "HR resection: (1) Short-range: MRN complex (MRE11 endonuclease, activated by CtIP phosphorylation by CDK2) nicks DNA ~100-300 bp from the end; MRE11 3'→5' exonuclease then resects back toward the break, creating an initial ssDNA flap. (2) Long-range (>1 kb): EXO1 5'→3' exonuclease extends resection; OR BLM (RecQ helicase) unwinds DNA while DNA2 nuclease/helicase degrades 5' strand. RPA coats the resulting 3' ssDNA, which is then replaced by RAD51 (loaded by BRCA2) to form the nucleoprotein filament."
  },
  {
    id: 20,
    question: "The p53 checkpoint response to DNA damage: when p53 activates CDKN1A (p21), how does p21 cause G1 arrest?",
    options: ["p21 directly binds and methylates histones to compact the promoters of S-phase genes", "p21 (CDKN1A) is a CDK inhibitor that binds and inhibits CDK2-Cyclin E and CDK4-Cyclin D complexes, preventing RB1 phosphorylation → RB1 stays hypophosphorylated → represses E2F → no S-phase gene expression", "p21 phosphorylates p53 to create a positive feedback loop for sustained G1 arrest", "p21 activates RB1 kinase activity to directly phosphorylate E2F"],
    answer: 1,
    explanation: "DNA damage → ATM/ATR → CHK2/CHK1 → phosphorylate p53 (Ser15, Ser20) → MDM2 binding inhibited → p53 stabilized → p53 tetramer activates CDKN1A/p21. p21 is a universal CDK inhibitor (CIP/KIP family): binds CDK2-CycE (blocking S-phase entry) and CDK4/6-CycD (blocking G1 progression). Hypophosphorylated RB1 maintained → E2F target genes (CCNE, CDK2, PCNA, DHFR) repressed → G1 arrest. p21 also directly binds PCNA (via its C-terminal PIP box) to inhibit Pol δ and stall DNA replication at S phase entry."
  },
  {
    id: 21,
    question: "Which repair pathway is responsible for correcting errors in rRNA genes transcribed by RNA Pol I, which cannot use TC-NER?",
    options: ["RNA Pol I uses a unique Pol I-specific TC-NER pathway with CSB-ERCC6L2", "Actively transcribed rRNA genes are primarily repaired by GG-NER (since rDNA is wrapped in nucleosomes between transcription cycles) supplemented by a Pol I-specific transcription-coupled repair mechanism involving CSB protein", "rRNA genes are rapidly degraded and re-synthesized rather than repaired", "rRNA genes use MMR machinery for all lesion recognition"],
    answer: 1,
    explanation: "rRNA gene repair is complex. While RNA Pol I does not associate with CSA/CSB in the classical TC-NER manner, CSB (ERCC6) has been shown to associate with RNA Pol I and facilitate NER of actively transcribed rDNA. Between transcription rounds, rDNA chromatin is accessible to GG-NER. Recent evidence shows ERCC6L2 (CSB-like protein) and CSB contribute to an Pol I TC-NER-like mechanism. Heavily damaged rDNA can also be silenced and the template replaced by recombination with undamaged copies (homologous gene conversion)."
  },
  {
    id: 22,
    question: "Alternative end joining (Alt-EJ / MMEJ) at DSBs differs from canonical NHEJ by:",
    options: ["Alt-EJ is completely error-free and uses longer template sequences than NHEJ", "Alt-EJ requires end resection to expose microhomologies (2-25 nt) that anneal to join DSBs; uses PARP1, POLQ (Pol θ), and Lig1/LigIIIα; is highly mutagenic (deletions, translocations); prevalent in NHEJ- and HR-deficient cells and at specific sites (telomere fusions)", "Alt-EJ requires RAD51 and is therefore a form of HR", "Alt-EJ occurs only at mitochondrial DNA DSBs"],
    answer: 1,
    explanation: "Alt-EJ/MMEJ (microhomology-mediated end joining): initial resection exposes ssDNA with complementary microhomologies; annealing occurs; flaps are removed; gaps filled; ligated. Key players: PARP1 (early), CtIP, MRE11, FEN1, POLQ (Pol theta — anneals ssDNA and extends even mismatched templates), LIG1/LIG3. Results in deletions (the flap sequences) and is highly error-prone. POLQ inhibitors are being developed for BRCA-deficient cancer (where cells depend on MMEJ). MMEJ also generates insertions (templated insertions by POLQ)."
  },
  {
    id: 23,
    question: "Deamination of 5-methylcytosine (5mC) produces which base, and why is this significant?",
    options: ["5mC deamination produces uracil (repaired by UNG) — same as unmodified cytosine deamination", "5mC deamination produces thymine (T), creating a G:T mismatch; TDG or MBD4 glycosylases remove the T, initiating BER; but if unrepaired, replication makes a heritable C→T mutation — explaining why CpG dinucleotides are hotspots for C→T transitions in cancer", "5mC deamination produces 5-hydroxy-uracil, repaired by SMUG1 glycosylase", "5mC deamination produces xanthine, repaired by MPG glycosylase"],
    answer: 1,
    explanation: "Cytosine deaminates to uracil (quickly repaired by UNG — uracil-DNA glycosylase). 5-Methylcytosine deaminates to thymine. G:T mismatch: TDG (thymine-DNA glycosylase) or MBD4 removes the T, initiating BER to restore G:C. However, the repair is less efficient than UNG-mediated repair, and if missed, replication creates C→T transition. This is why CpG dinucleotides are C→T mutation hotspots in human tumors (CpG islands are often methylated at CG → TG/CA after deamination → CpG depletion in the genome over evolutionary time)."
  },
  {
    id: 24,
    question: "The concept of 'replication stress' refers to which situation?",
    options: ["Replication stress is the mechanical stress on DNA caused by overwinding during replication", "Replication stress is the stalling or collapse of replication forks due to various impediments (nucleotide depletion, DNA lesions, secondary structures, protein-DNA complexes, transcription-replication conflicts, oncogene activation), leading to ssDNA exposure and ATR activation", "Replication stress is caused only by UV irradiation during S phase", "Replication stress describes the metabolic demands of replicating the genome"],
    answer: 1,
    explanation: "Replication stress: replication forks can stall due to many impediments: hydroxyurea (dNTP depletion), DNA damage/adducts, G-quadruplexes, R-loops (RNA-DNA hybrids), common fragile sites, transcription-replication conflicts, oncogene activation (MYC, Ras — causing excessive origin firing and dNTP depletion). Stalled forks: (1) Accumulate ssDNA → RPA → ATR activation → CHK1 → S-phase checkpoint; (2) Can regress (fork reversal); (3) Can collapse to DSBs. Replication stress is a major source of genomic instability in precancerous cells."
  },
  {
    id: 25,
    question: "Bloom syndrome (BLM helicase mutation) is associated with which specific molecular consequence of HR deficiency?",
    options: ["Inability to repair DSBs — like BRCA2 deficiency", "Elevated sister chromatid exchanges (SCEs) due to aberrant HR — BLM normally dissolves double Holliday junctions (dHJ) via 'dissolution' pathway to prevent crossovers; BLM absence leads to excessive crossover resolution and SCEs", "Complete block of all homologous recombination events", "Deficiency in Fanconi anemia pathway leading to ICL sensitivity"],
    answer: 1,
    explanation: "BLM (RecQ helicase) is part of the BTR complex (BLM-TOP3α-RMI1-RMI2): it migrates double Holliday junctions by 'dissolution' (convergent branch migration toward each other + TOP3α topoisomerase III decatenation), producing only non-crossover products. BLM deficiency → dHJs are resolved by resolvases (SLX1-SLX4 or GEN1) → both crossover and non-crossover products → dramatically elevated SCEs (50-100× normal). SCEs indicate inappropriate crossovers between sister chromatids. Bloom syndrome: cancer predisposition, immunodeficiency, short stature, characteristic facial telangiectasias."
  },
  {
    id: 26,
    question: "The 'tolerance' of DNA damage by template switching (TS) during replication involves:",
    options: ["Random use of a homologous chromosome as template instead of sister chromatid", "When a replicative polymerase stalls at a lesion, it can use the newly synthesized strand of the sister chromatid as template (template switching/fork regression) — using the undamaged sister to bypass the lesion on the damaged template, avoiding TLS mutagenesis; requires PCNA polyubiquitylation (K63-linked chains by RAD6/RAD18/UBC13/MMS2)", "Template switching means using the RNA transcript as template to repair the damaged DNA strand", "TS involves switching from lagging strand to leading strand template at damaged sites"],
    answer: 1,
    explanation: "Post-replication repair/damage tolerance has two pathways: (1) TLS (mutagenic bypass — mono-Ub PCNA K164 by RAD6-RAD18 recruits TLS Pols); (2) Template switching (error-free — poly-Ub PCNA K63-linked chains by RAD6-RAD18-UBC13-MMS2 recruits TS machinery). Template switching: stalled fork regresses (forms 'chicken foot' structure), and the nascent leading strand invades the sister chromatid to use it as template, copying past the lesion error-free. This is mediated by ZRANB3, HLTF (fork remodelers), and template annealing (ssDNA binding by RAD51 or PCNA-interacting factors)."
  },
  {
    id: 27,
    question: "Li-Fraumeni syndrome (TP53 germline mutation) predisposes to diverse cancers because p53 regulates which processes?",
    options: ["Only apoptosis — cells with DNA damage cannot undergo programmed cell death", "p53 is a master sensor of multiple stresses (DNA damage, oncogene activation, hypoxia, ribosomal stress, nucleotide depletion) that activates: G1/S and G2/M cell cycle arrest, apoptosis (PUMA, BAX, FAS), senescence (p21, PUMA), metabolism, DNA repair gene induction, and anti-angiogenesis — loss allows damaged cells to proliferate without restriction", "p53 regulates only MMR gene expression", "p53 controls only apoptosis in hematopoietic cells"],
    answer: 1,
    explanation: "p53 (TP53, 'guardian of the genome') responds to diverse stresses: ATM/ATR (DNA damage), ARF/MDM2 (oncogene activation by MYC/RAS), RPL11 (ribosomal stress), HIF-1 (hypoxia, paradoxically — p53 represses HIF-1), p14ARF (activated by hyperproliferative signals). p53 target genes include: CDKN1A/p21 (cell cycle arrest), PUMA/BBC3, NOXA (apoptosis), BAX (apoptosis), GADD45 (DNA repair), TIGAR (anti-glycolysis), GDF15 (growth inhibition), miR-34a (targets CDK6, BCL2, MET). Li-Fraumeni: breast, brain, sarcomas, leukemia, adrenocortical carcinoma."
  },
  {
    id: 28,
    question: "UV radiation-induced DNA damage can be repaired by photolyase in bacteria. In mammals, photolyase is absent because of which evolutionary event?",
    options: ["Mammals evolved from aquatic ancestors that never needed photolyase", "Placental mammals lost the PHR gene (encoding photolyase) at some point during evolution — cryptochrome genes (CRY1/CRY2, which evolved from photolyase-like genes) are retained but function as circadian clock proteins, not DNA repair enzymes; placental mammals must use NER for UV damage repair", "Mammals have photolyase but it is only active in skin cells", "Mammalian photolyase activity was replaced by MGMT"],
    answer: 1,
    explanation: "Photolyase uses visible light (300-500 nm) to directly reverse CPDs (CPD photolyase) and 6-4 photoproducts (6-4 photolyase) by electron transfer using MTHF and FADH− as cofactors. Most bacteria, fungi, plants, and non-placental mammals have photolyase. Placental mammals (including humans) lost PHR genes — cryptochrome proteins (CRY1, CRY2) evolved from animal 6-4 photolyase progenitors but function exclusively as repressors in the circadian clock (CLOCK-BMAL1 → PER/CRY feedback loop). Humans rely entirely on NER for UV damage repair."
  },
  {
    id: 29,
    question: "In Lynch syndrome (hereditary non-polyposis colorectal cancer, HNPCC), germline mutations in MMR genes cause microsatellite instability (MSI). What is the mechanism?",
    options: ["MMR mutations cause hypermethylation of microsatellites, expanding repeat tracts", "MSH2/MLH1/MSH6/PMS2 mutations → MMR deficiency → failure to correct slippage errors at microsatellite repeats (short tandem repeats) during replication → insertion/deletion loops (IDLs) persist → microsatellites expand or contract throughout the genome; MSI-H tumors have hundreds of mutations per Mb and are immunogenic", "MMR mutations directly cause deletions in MLH1 gene to expand Mb-scale repeats", "MMR deficiency allows recombination between microsatellite repeat units, causing expansion"],
    answer: 1,
    explanation: "Microsatellite instability: During replication, the replisome frequently slips on repetitive sequences (mono-, di-, trinucleotide repeats), creating IDLs (insertion/deletion loops — misaligned strands). MMR (MSH2-MSH6 for 1-2 nt IDLs; MSH2-MSH3 for larger IDLs) recognizes and removes these loops. With MMR deficiency (MLH1 hypermethylation in sporadic tumors; germline MSH2, MLH1, MSH6, PMS2 mutations in Lynch), IDLs accumulate → microsatellite length changes (MSI) at thousands of loci. MSI-High tumors have high mutation burden, increased neoantigens, and respond to PD-1/PD-L1 checkpoint immunotherapy."
  },
  {
    id: 30,
    question: "The choice between NHEJ and HR at a DSB is regulated by the cell cycle. What molecular mechanisms enforce this choice?",
    options: ["Random stochastic choice between NHEJ and HR at each DSB regardless of cell cycle", "CDK activity (high in S/G2) promotes HR by: phosphorylating CtIP (allowing resection), phosphorylating BRCA1 (activating HR), and promoting nuclear BRCA2; NHEJ is favored in G1 when CDK is low because 53BP1-RIF1-Shieldin blocks resection. RB1/E2F also regulate BRCA1/RAD51 expression. Additionally, cohesin (available in S/G2) holds sister chromatids for HR templates", "NHEJ occurs only at night; HR occurs during daytime in dividing cells", "The choice is determined entirely by DSB end structure (blunt vs 4-nt overhangs)"],
    answer: 1,
    explanation: "Cell cycle regulation of DSB repair: G1 (CDK low): 53BP1-RIF1-Shieldin (CST complex-Pol α) inhibits resection, promotes NHEJ; BRCA1 inactive (not phosphorylated). S/G2 (CDK2/CDK1 active): (1) CDK2 phosphorylates CtIP → joins MRE11 to initiate resection; (2) CDK1 phosphorylates BRCA1 at S1524, promoting BRCA1-PALB2 interaction and HR; (3) BRCA1 competes with 53BP1 for H2AK13/15-ub binding; (4) Sister chromatids available; (5) PALB2-BRCA2-RAD51 pathway active. This bistable switch ensures correct pathway choice per phase."
  },
  {
    id: 31,
    question: "Werner syndrome (WRN helicase-exonuclease deficiency) and Rothmund-Thomson syndrome (RECQL4 mutation) share which clinical feature related to DNA repair deficiency?",
    options: ["Both are caused by the same RECQL4 mutation and have identical phenotypes", "Both are RecQ helicase disorders showing accelerated aging, genomic instability, and cancer predisposition — WRN (premature progeria-like aging, increased cancer especially sarcomas) and Rothmund-Thomson (bone abnormalities, alopecia, skin atrophy, osteosarcoma) — reflecting roles in replication fork stability, HR, and telomere maintenance", "Both primarily affect RNA Pol I-dependent rRNA synthesis", "Both are caused by DNA-PKcs deficiency affecting NHEJ"],
    answer: 1,
    explanation: "RecQ helicases in humans (BLM, WRN, RECQL4, RECQL1, RECQL5): diseases of BLM (Bloom), WRN (Werner), RECQL4 (Rothmund-Thomson, Baller-Gerold, RAPADILINO). All share genomic instability and cancer predisposition. WRN has unique 3'→5' exonuclease activity (besides helicase) and acts in replication restart, BER, NER, and telomere maintenance. Werner cells show premature replicative senescence. RTS (RECQL4): skin photosensitivity, skeletal abnormalities, cataracts, osteosarcoma (RTS type II). Both reflect the broad roles of RecQ helicases in multiple repair pathways."
  },
  {
    id: 32,
    question: "The drug temozolomide (TMZ) is used in glioblastoma (GBM) treatment. Its mechanism of action and resistance are:",
    options: ["TMZ intercalates into DNA and blocks RNA Pol progression; resistance is by ABC transporter upregulation", "TMZ alkylates DNA at O6-guanine (major lesion) and N7-guanine; O6-methylguanine → G:C→A:T transitions activating MMR-mediated futile repair cycle causing cell death; resistance in GBM is primarily mediated by MGMT promoter methylation status (unmethylated MGMT = TMZ resistance; methylated MGMT = MGMT silenced = TMZ sensitive)", "TMZ is an inhibitor of PARP1 that converts SSBs to DSBs specifically in GBM cells", "TMZ blocks NER by directly inhibiting XPA-RPA interaction at O6-methylguanine lesions"],
    answer: 1,
    explanation: "TMZ (an imidazotetrazine prodrug, spontaneously produces MTIC → methyldiazonium) methylates DNA: ~5% at O6-G (cytotoxic), ~70% N7-G, ~9% N3-A. O6-methylG:C is read during replication as O6-mG:T by MISMATCH REPAIR (because O6-mG prefers T over C in Hoogsteen pairing) → MMR attempts repair → futile repair cycle → cell death. MGMT (present in 45% of GBMs as unmethylated promoter) removes O6-methylG → TMZ resistance. MGMT promoter methylation (silencing MGMT) → TMZ sensitivity → improved GBM survival with Stupp protocol."
  },
  {
    id: 33,
    question: "The replication protein complex RFC-PCNA during BER (long-patch pathway) serves which function?",
    options: ["RFC-PCNA is only involved in replication, not DNA repair", "RFC loads PCNA onto DNA at a 3'-OH terminus (created by APE1 at AP site); PCNA then acts as sliding clamp for processive DNA synthesis by Pol δ or Pol ε (displacing the damaged strand in long-patch BER, 2-12 nt synthesis), followed by FEN1 flap endonuclease removal of the displaced 5' flap and Lig1 ligation", "RFC-PCNA promotes Pol β binding at SSBs in short-patch BER", "RFC is the Ku-loading factor for NHEJ repair"],
    answer: 1,
    explanation: "Long-patch BER (LP-BER): after APE1 creates a 5'-nick, short-patch Pol β sometimes displaces synthesis to LP-BER: RFC loads PCNA at the 3'-OH; Pol δ (or Pol ε, or Pol β with PCNA) synthesizes 2-12 nt while displacing the 5' end (strand displacement synthesis); FEN1 (Flap EndonuclEase 1) cleaves the displaced 5' flap (often 5'-dRP — which Pol β can remove by dRP lyase in short-patch, but LP-BER avoids this when 5'-dRP resists Pol β lyase). Lig1 (recruited by PCNA) seals the nick. PARP1 regulates LP-BER strand displacement."
  },
  {
    id: 34,
    question: "Homologous recombination uses the Holliday junction as a key intermediate. The classical Holliday junction is resolved by which eukaryotic resolvases?",
    options: ["Only BLM-TOP3α (dissolution — always giving non-crossovers)", "SLX1-SLX4 (endonuclease) and GEN1 (Yen1 in yeast) — these structure-selective endonucleases cleave Holliday junctions symmetrically, producing either crossover or non-crossover products; SLX4 acts as a scaffold also binding XPF-ERCC1 and MUS81-EME1 for other DNA structures", "MRE11 exonuclease activity resolves Holliday junctions", "PCNA recruits a Holliday junction-specific resolvase (HJURP) that cleaves junctions"],
    answer: 1,
    explanation: "Holliday junction resolution in eukaryotes: (1) SLX1-SLX4 (SLX complex): SLX1 is a Holliday junction resolving endonuclease; SLX4 (scaffold, also contains XPF-ERCC1 and MUS81-EME1 interactions). SLX1 makes symmetric paired cuts → crossovers and non-crossovers. (2) GEN1 (Yen1): a Holliday junction resolvase that cleaves both strands symmetrically → crossovers and non-crossovers. (3) MUS81-EME1 (with SLX4): cleaves nicked HJ or D-loops (not intact HJ efficiently). (4) BLM-TOP3α-RMI1-RMI2 'dissolves' (not resolves) double HJ → only non-crossovers."
  },
  {
    id: 35,
    question: "Nucleotide excision repair dual incision in humans creates an oligonucleotide of approximately what length?",
    options: ["5-7 nucleotides (short patch, like BER)", "25-30 nucleotides (incisions ~20-24 nt 5' by XPF-ERCC1 and 5-8 nt 3' by XPG — releasing a fragment of ~25-30 nt containing the lesion)", "100-200 nucleotides (matching MMR patch length)", "1-2 nucleotides (direct base removal like BER glycosylases)"],
    answer: 1,
    explanation: "NER dual incision: XPF-ERCC1 (structure-specific endonuclease) cuts ~15-25 nt 5' of the lesion on the damaged strand; XPG (structure-specific endonuclease, also needed for TC-NER independently of cleavage) cuts ~6-8 nt 3' of the lesion. Net excision: ~27-30 nt fragment containing the lesion (average ~27 nt in human NER). The resulting ssDNA gap is filled by Pol δ or Pol ε (using undamaged strand as template) with PCNA/RFC, and Lig1 or Lig3/XRCC1 seals the nick."
  },
  {
    id: 36,
    question: "The enzyme MGMT (O6-methylguanine-DNA methyltransferase) is described as a 'suicide enzyme' because:",
    options: ["MGMT irreversibly inactivates itself after each repair event by accepting the alkyl group onto its own active-site cysteine, becoming permanently modified and degraded via ubiquitin-proteasome pathway", "MGMT triggers apoptosis in the cell that contains alkylated DNA", "MGMT destroys itself by attacking the N-glycosidic bond of the methylated guanine", "MGMT is only expressed in cells destined for apoptosis"],
    answer: 0,
    explanation: "MGMT is stoichiometric (not catalytic): Cys145 in the active site performs a direct methyl group transfer from O6-methylguanine (or O6-ethylguanine, O4-methylthymine) to its own sulfur atom, restoring guanine and creating S-methylcysteine in MGMT. This methylation permanently inactivates MGMT — it cannot donate the methyl group or accept another. Alkylated MGMT is ubiquitylated and degraded by the 26S proteasome. Cells have a finite amount of MGMT (1,000-5,000 molecules/cell) that must be replenished by new synthesis."
  },
  {
    id: 37,
    question: "Which of the following DNA repair proteins is recruited specifically through interaction with the γH2AX phospho-epitope?",
    options: ["RAD51 (directly recognizes γH2AX through its BRCT domain)", "MDC1 (Mediator of DNA Checkpoint 1) — its BRCT domain binds γH2AX S139 directly, serving as the key amplification platform that further recruits RNF8 E3 ligase to ubiquitylate H1 and H2A, enabling 53BP1 and BRCA1 BARD1 complex recruitment", "XRCC4 recognizes γH2AX to guide NHEJ to DSBs", "ATR directly binds γH2AX to propagate DSB checkpoint signals"],
    answer: 1,
    explanation: "MDC1 (Mediator of DNA Damage Checkpoint 1): its C-terminal tandem BRCT domain directly binds the γH2AX S139-phospho-epitope with high affinity (~Kd 1-5 µM for each BRCT, much higher combined). MDC1 accumulates at DSB foci via this interaction and then recruits: (1) additional MRN (via NBS1-MDC1 FHA domain interaction) → more ATM; (2) RNF8 (via TQXF motifs phosphorylated by ATM in MDC1) → RNF8 ubiquitylates H1; (3) RNF168 (recruited by ubiquitylated H1) → H2AK13/15-Ub → 53BP1 recruitment. MDC1 is the primary γH2AX effector protein."
  },
  {
    id: 38,
    question: "The DNA damage response includes transcriptional repression of non-essential genes to redirect cellular resources. This global transcriptional repression is mediated by:",
    options: ["p53 directly binding and repressing all RNA Pol II promoters genome-wide", "ATM-dependent phosphorylation of HDAC1/2, NuRD complex relocalization to DSBs, FACT complex sequestration, and PRC2 recruitment — collectively evicting activators and compacting chromatin at non-damaged gene loci, while also genome-wide Pol II pausing increases", "Sigma factor switching analogous to bacterial stress response", "Global capping of mRNAs by RNMT to stabilize existing transcripts while new synthesis is halted"],
    answer: 1,
    explanation: "DNA damage-induced transcriptional repression: Multiple mechanisms contribute: (1) ATM phosphorylates KAP1/TRIM28 (an HDAC recruiter) → HDAC-mediated deacetylation near DSBs; (2) NuRD complex (CHD3/HDAC1/2) is recruited to DSBs and causes local chromatin compaction; (3) DNA-PK phosphorylates RNAP II and general transcription factors; (4) The recruitment of repair factors to DSB-associated chromatin competes with transcription; (5) ATM phosphorylates SMC1 of cohesin → cohesin-mediated domain effects. This redirects chromatin from transcription to repair."
  },
  {
    id: 39,
    question: "BRCA1-BARD1 heterodimer functions in DNA repair by:",
    options: ["BRCA1-BARD1 is primarily a histone acetyltransferase that marks DSBs with H3K18ac", "BRCA1-BARD1 is an E3 ubiquitin ligase (RING domain of BARD1 activates BRCA1 RING ligase activity); it ubiquitylates H2AK127/129 (represses transcription near DSBs); BRCA1 also promotes HR by recruiting CtIP for resection, interacting with PALB2-BRCA2-RAD51, and countering 53BP1-mediated NHEJ", "BRCA1-BARD1 is a BRCt-domain containing exonuclease that performs DSB resection", "BRCA1 functions only in checkpoint activation by binding CHK1 and activating it"],
    answer: 1,
    explanation: "BRCA1-BARD1: (1) E3 ligase activity — RING domains of both BRCA1 and BARD1 cooperate; ubiquitylates H2AK127/129 near DSBs to repress transcription on damaged chromatin; (2) Scaffold for HR factors — via BRCT domains (phospho-BACH1/BRIP1 and phospho-Abraxas/CCDC98 interactions) and coiled-coil domain (PALB2 interaction); (3) Opposes 53BP1 — BRCA1 competes for H2AK13/15-ub binding via BARD1 BRCT domain; (4) BRCA1 MBR domain binds γH2AX; (5) Interacts with RAD51 and RAD51AP1 to promote strand invasion."
  },
  {
    id: 40,
    question: "Deficiency in ERCC1-XPF causes which clinical syndrome, and why is this complex essential for multiple DNA repair pathways?",
    options: ["ERCC1-XPF deficiency causes xeroderma pigmentosum (NER only) — no other repair pathways are affected", "ERCC1-XPF (XPF/ERCC4) deficiency causes overlapping XP, Cockayne syndrome, and Fanconi anemia phenotypes because XPF-ERCC1 is required for multiple pathways: NER 5' incision, ICL unhooking (FA pathway), and DSB repair (unhooking ICL-associated DSBs) — making it uniquely essential for diverse repair contexts", "ERCC1-XPF deficiency only causes Cockayne syndrome features without UV sensitivity", "ERCC1-XPF deficiency causes Werner syndrome by affecting telomere maintenance"],
    answer: 1,
    explanation: "XPF-ERCC1 heterodimer is a structure-selective endonuclease (cuts at ssDNA/dsDNA junctions) required for: (1) NER: 5' incision ~20-24 nt from lesion (along with XPG for 3'); (2) ICL repair: FA pathway unhooking of interstrand crosslinks (SLX4 scaffolds XPF-ERCC1 and SLX1 at ICLs); (3) Single-strand annealing (SSA) — trimming 3' flaps after ssDNA annealing at DSBs. XPF mutations cause XP (mild), XP+CS (severe), Xeroderma pigmentosum-Cockayne syndrome, or COFS (cerebro-oculo-facio-skeletal syndrome). ERCC1-null mice are born but die within 3 weeks of liver failure."
  },
  {
    id: 41,
    question: "Clustered DNA lesions (complex DNA damage) are caused by which type of radiation, and present special challenges for repair?",
    options: ["UV radiation causes clustered lesions in a 10-bp window most efficiently", "Ionizing radiation (especially high-LET radiation: neutrons, alpha particles, heavy ions) causes clustered damage — multiple damage sites within 10-15 bp on both strands (oxidized bases, abasic sites, SSBs, DSBs in close proximity); BER repair of one lesion can create a DSB if the opposing strand is also being processed simultaneously", "Visible light creates clustered oxidative damage most efficiently", "Chemical alkylating agents always create clustered lesions at CpG sites"],
    answer: 1,
    explanation: "Ionizing radiation (especially high-LET particles) creates 'locally multiply damaged sites' (LMDS) or 'clustered lesions': 2+ lesions within 1-2 helical turns (~10-20 bp). These include bi-stranded damage (lesions on both strands facing each other). Challenge: If BER processes one lesion while the complementary strand has a nearby lesion, the intermediate AP site or SSB opposite the other lesion creates a de facto DSB. Clustered lesions are difficult for repair enzymes to resolve sequentially without creating DSBs. High-LET radiation is therefore more biologically effective per Gray."
  },
  {
    id: 42,
    question: "The 'RAD51-BRCA2' interaction during HR is critical because BRCA2:",
    options: ["BRCA2 directly hydrolyzes ATP to power RAD51 strand invasion", "BRCA2 acts as a mediator to load RAD51 onto RPA-coated ssDNA — it contains 8 BRC repeats (each binding one RAD51 monomer) and a C-terminal TR2 domain; BRCA2 displaces RPA with RAD51 to form the presynaptic RAD51 nucleoprotein filament for strand invasion", "BRCA2 acts as a chaperone to fold RAD51 into its active conformation", "BRCA2 recruits RAD54 to displace RAD51 after strand invasion"],
    answer: 1,
    explanation: "BRCA2 is the canonical HR mediator: (1) 8 BRC repeats (each ~35 aa) in the central domain each bind one RAD51 monomer in ATP-bound (monomeric) form, preventing premature RAD51 oligomerization; (2) C-terminal TR2/OB fold binds ssDNA and ssDNA-bound RAD51; (3) Together these interactions allow BRCA2 to load RAD51 onto RPA-coated resected ssDNA, displacing RPA (RAD51 has lower affinity for ssDNA than RPA alone), forming the active presynaptic filament. PALB2 bridges BRCA1 to BRCA2 (PALB2-BRCA1 interaction site is a coiled-coil)."
  },
  {
    id: 43,
    question: "Which of the following repair pathways corrects G:T mismatches that arise from spontaneous deamination of 5-methylcytosine?",
    options: ["MMR corrects G:T mismatches — MSH2-MSH6 recognizes G:T and removes T from the new strand", "BER using TDG (Thymine-DNA Glycosylase) or MBD4 glycosylase to remove the inappropriate T from G:T mismatch, restoring the G:C pair — followed by AP endonuclease, gap-filling, and ligation", "NER removes the damaged strand containing T mismatched with G", "NHEJ repairs the double-strand character of G:T mismatch loops"],
    answer: 1,
    explanation: "G:T mismatches from 5mC deamination: TDG (thymine-DNA glycosylase) and MBD4 (methyl-CpG binding domain protein 4) are dedicated glycosylases for removing T from G:T mismatches in CpG contexts. TDG is more active at CpG-TpG mismatches; it also removes 5-formylcytosine (5fC) and 5-carboxylcytosine (5caC) from G:C pairs (linking BER to active demethylation). After T removal → AP site → APE1 → Pol β fills → Lig3/XRCC1 seals. MMR can also process G:T mismatches but TDG/MBD4-BER is the primary pathway."
  },
  {
    id: 44,
    question: "The 'Alternative lengthening of telomeres' (ALT) pathway is used by ~10-15% of tumors to maintain telomere length without telomerase. This pathway uses:",
    options: ["c-NHEJ between different chromosome ends to generate long telomeres", "A recombination-based mechanism where telomere sequences from one chromatid are copied using another telomere as template (T-SCE, telomere sister chromatid exchange, or break-induced replication BIR); ALT cells have APBs (ALT-associated PML bodies) with telomeric DNA, PCNA, and recombination proteins", "TERT re-expression through promoter mutations (like in most tumors)", "RNA-templated synthesis of telomeric DNA by a reverse transcriptase other than TERT"],
    answer: 1,
    explanation: "ALT mechanism: uses HR-mediated template copying of existing telomeric sequences. ALT hallmarks: (1) APBs (ALT-associated PML bodies) containing telomeric DNA, SMN3, RPA, RAD51, RAD52, WRN, BLM, PCNA; (2) T-SCEs (elevated telomere sister chromatid exchanges); (3) Extrachromosomal telomeric repeats (ECTRs — circular C-circles, t-circles); (4) Heterogeneous telomere lengths (very long and very short). ALT is common in osteosarcoma, astrocytoma, liposarcoma. DAXX/ATRX mutations (encoding histone chaperones) are frequently found in ALT tumors — ATRX normally suppresses ALT."
  },
  {
    id: 45,
    question: "Cisplatin (cis-diamminedichloroplatinum II) causes which specific type of DNA damage?",
    options: ["Single-strand breaks by direct strand scission", "Intrastrand crosslinks (primarily 1,2-d(GpG) and 1,2-d(ApG) adducts on adjacent purines, ~65% and ~25% respectively) and interstrand crosslinks (ICLs, ~5%); these crosslinks distort the DNA helix, block replication and transcription, and require NER/FA/HR for removal", "Oxidation of guanine to 8-oxoguanine", "Alkylation of O6 position of guanine only"],
    answer: 1,
    explanation: "Cisplatin: After entering cells, aquation replaces Cl- with OH2 → reactive electrophile. Reacts with N7 of adjacent purines on the same strand: 1,2-GG intrastrand crosslink (~65%), 1,2-AG (~25%), 1,3-GNG (~10%), and ICLs (~5%). GG crosslinks bend DNA ~40° and unwind ~13°. NER removes intrastrand adducts (recognized by XPC-RAD23B or HMGB1/XPA). ICLs are repaired by FA pathway. Cisplatin is used in testicular (95% cure), ovarian, lung, bladder, cervical cancers. Resistance via: increased drug efflux (MRP, ABCC2), reduced influx (CTR1), increased NER, increased MMR loss (paradox — MMR tolerates adducts), GSH-platinum conjugation."
  },
  {
    id: 46,
    question: "The error-prone repair pathway called 'Single-strand annealing' (SSA) at DSBs uses which mechanism?",
    options: ["SSA requires RAD51 and BRCA2 to perform strand exchange between two directly repeated sequences flanking a DSB", "SSA: after extensive resection, complementary ssDNA from directly repeated sequences (repeats flanking the DSB) anneal without RAD51; the intervening sequence and 3' flaps are removed by XPF-ERCC1 and SLX4; SSA deletes all sequence between the repeats — highly mutagenic but important at repetitive sequences", "SSA creates insertions rather than deletions at the DSB site", "SSA uses the homologous chromosome (not sister chromatid) as template, producing diploid gene conversions"],
    answer: 1,
    explanation: "SSA: (1) Extensive 5'→3' resection by EXO1 or BLM-DNA2 exposes long ssDNA tracts; (2) If direct repeats flank the DSB (e.g., Alu elements), complementary sequences from each side anneal; (3) 3' ssDNA flaps are cleaved by XPF-ERCC1 (with SLX4) and Rad1-Rad10 (yeast); (4) Gap-fill and ligation restore continuous chromosome. SSA deletes all sequences between the repeats plus one copy of the repeat — highly mutagenic. SSA is RAD51-independent but RAD52-dependent in yeast (RAD52's role less clear in mammals). Common at genome-wide repeated sequences."
  },
  {
    id: 47,
    question: "The cell cycle checkpoint activated by ATR during S phase ('intra-S checkpoint') primarily works by:",
    options: ["Rapidly halting all DNA synthesis by destroying all CDK2-CyclinE complexes", "CHK1-mediated phosphorylation and degradation of CDC25A phosphatase → less dephosphorylation of CDK2 Y15 → CDK2 inactivated → new origin firing reduced (replicon inhibition); also slows existing forks; prevents premature mitotic entry", "Directly cleaving RPA from ssDNA to remove the ATR activation signal", "Inducing rapid p53-independent apoptosis to eliminate stressed S-phase cells"],
    answer: 1,
    explanation: "ATR → CHK1 (phospho-S317, S345) → multiple targets: (1) CDC25A phosphorylation (S76) → SCFβ-TrCP ubiquitylation → proteasomal degradation → CDK2-Tyr15 cannot be dephosphorylated → CDK2 inactive → CDK2-dependent origin firing blocked; (2) CDC25B/C phosphorylation (S309, S216) → 14-3-3 binding → nuclear exclusion → CDK1 inactivated → no premature mitosis; (3) WEE1 kinase stabilization; (4) FANCD2 phosphorylation → FA pathway activation; (5) RPA phosphorylation. Net: suppress new origin firing, slow fork progression, prevent mitosis entry until repair is complete."
  },
  {
    id: 48,
    question: "Nucleotide pool imbalance as a source of mutation: which enzyme maintains balanced dNTP pools during S phase?",
    options: ["RNR (Ribonucleotide Reductase) converts NDPs to dNDPs — allosterically regulated by dATP (overall activity inhibitor), dTTP (specific inhibitor increasing dCDP/dGDP ratio), and ATP (overall activity activator) to maintain balanced pools", "dUTPase (DUT) removes dUTP from pools to prevent U incorporation opposite A in DNA", "DNPH1 dephosphorylates dNTPs to regulate pool sizes", "SAMHD1 degrades dNTPs to prevent excess incorporation in non-dividing cells"],
    answer: 0,
    explanation: "RNR (RRM1-RRM2 or RRM1-RRM2B/p53R2): converts rNDPs → dNDPs via radical-mediated mechanism. Allosteric regulation: activity site (AS) — ATP activates, dATP inhibits overall activity; specificity site (SS) — dATP/ATP directs dCDP/dGDP reduction; dTTP/dGTP specifies dGDP/dCDP or dADP reduction. This maintains ~1:1:1:1 dNTP ratios. Imbalanced pools increase misincorporation and replication stress. SAMHD1 degrades dNTPs in G1/G0 (restricts HIV replication in non-dividing cells). DUT removes dUTP. Hydroxyurea inhibits RNR → depletes dNTPs → replication stress."
  },
  {
    id: 49,
    question: "Which checkpoint pathway mediates G2/M arrest after DNA damage, and what are the key mediators?",
    options: ["ATM-CHK2-CDC25C pathway: CHK2 phosphorylates CDC25C at Ser216 → 14-3-3σ binding → cytoplasmic sequestration → CDK1-Tyr15 remains phosphorylated (by WEE1/MYT1) → mitotic CDK1 inactive → G2 arrest; simultaneously ATM→WEE1 stabilization; ATR-CHK1-CDC25A pathway also contributes", "p53-p21 axis is the only G2/M checkpoint (same as G1 checkpoint but slower)", "The spindle assembly checkpoint (SAC) at kinetochores mediates G2/M arrest after DNA damage", "ATM directly phosphorylates Cyclin B1 for its destruction at the G2/M checkpoint"],
    answer: 0,
    explanation: "G2/M DNA damage checkpoint: (1) ATM-CHK2 axis: CHK2 phosphorylates CDC25C S216 → 14-3-3σ binding → cytoplasmic sequestration → CDK1-Y15 cannot be dephosphorylated → CDK1-CycB1 inactive. (2) ATR-CHK1 axis: CHK1 also phosphorylates CDC25A/C. (3) ATM → WEE1 kinase stabilization → more CDK1-Y15 phosphorylation. (4) ATM-PLK1 pathway: ATM phosphorylates BARD1, which promotes PLK1 degradation at G2. (5) Late p53-p21 contributes to sustained G2 arrest. This G2 checkpoint prevents cells with unrepaired DSBs from entering mitosis."
  },
  {
    id: 50,
    question: "The concept of 'synthetic lethality' in DNA repair is exploited therapeutically. Which pair represents a clinically validated synthetic lethality beyond BRCA/PARPi?",
    options: ["ATM mutation + cisplatin (no synthetic lethality documented)", "WRN helicase expression synthetic lethality with microsatellite instability (MSI) — MSI colorectal cancer cells show WRN dependence because their elevated levels of single-stranded DNA at expanded microsatellite repeats require WRN for resolution; WRN inhibitors selectively kill MSI cells", "KRAS mutation + EGFR inhibitors (actually causes resistance)", "TP53 mutation + MDM2 inhibitors (p53 null cells are resistant, not sensitized)"],
    answer: 1,
    explanation: "WRN-MSI synthetic lethality: Chan et al. (2019) identified that MSI cancer cells have a specific dependency on WRN helicase, which is not seen in microsatellite-stable (MSS) cells. The mechanism involves MSI cells' dependence on WRN to resolve secondary structures (G4s, hairpins) at expanded poly(AT) and other repeats. WRN inhibitors (e.g., HRO761, VVD-214) selectively kill MSI-H cancer cells. This is a promising therapeutic approach since ~15% of colorectal, 22% of endometrial, and variable proportions of gastric/ovarian/pancreatic cancers are MSI-H."
  }
];

export default questions
