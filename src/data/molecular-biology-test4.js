export const questions = [
  {
    id: 1,
    question: "The lac operon in E. coli is under dual control. Which combination correctly describes its regulation?",
    options: ["Repressor control (negative) and CAP-cAMP control (positive)", "Repressor control (positive) and sigma factor control (negative)", "Activator control only via LacI binding to operator", "Sigma factor switching from σ70 to σ32 in presence of lactose"],
    answer: 0,
    explanation: "Lac operon has two regulatory systems: (1) Negative regulation by LacI repressor — binds operator O1 (and auxiliary operators O2, O3) to block RNA Pol; allolactose (lactose metabolite) acts as inducer, binding LacI and causing allosteric release from operator. (2) Positive regulation by CAP (Catabolite Activator Protein/CRP) + cAMP — high cAMP (glucose absent) activates CAP to bind CAP site and recruit RNA Pol. Both conditions (glucose absent AND lactose present) maximize transcription."
  },
  {
    id: 2,
    question: "The lac repressor (LacI) is a tetramer that binds which structural feature of DNA?",
    options: ["TATA box in the -10 region of the lac promoter", "Major groove of operator DNA using helix-turn-helix (HTH) motif; tetramer can simultaneously bind O1 and O2/O3 causing DNA looping", "Z-DNA structure formed at high negative supercoiling", "AATTC restriction sequence overlapping the SD sequence"],
    answer: 1,
    explanation: "LacI is a homotetramer with two dimers, each using a helix-turn-helix DNA-binding domain. The primary operator O1 overlaps the promoter (+11 downstream), and auxiliary operators O2 (+412) and O3 (-82) are occupied by the other dimer, causing DNA loop formation. This looping dramatically increases repression. Allolactose binds the inducer-binding domain and causes conformational change that reduces operator affinity ~1000-fold."
  },
  {
    id: 3,
    question: "cAMP levels in bacteria are controlled by which enzyme, and what regulates this enzyme?",
    options: ["cAMP phosphodiesterase; activated by glucose", "Adenylate cyclase (adenylyl cyclase); inhibited by the phosphorylated form of EIIAGlc (phosphotransferase system component) when glucose is present", "Guanylate cyclase; regulated by cGMP feedback", "CRP itself via autoinhibition of adenylate cyclase"],
    answer: 1,
    explanation: "Adenylate cyclase (CyaA in E. coli) converts ATP to cAMP. When glucose is present, the phosphoenolpyruvate phosphotransferase system (PTS) uses EIIAGlc phosphate to transport glucose, keeping EIIAGlc largely dephosphorylated. Unphosphorylated EIIAGlc inhibits adenylate cyclase (and also directly inhibits transporters for other sugars — inducer exclusion). Glucose absent → EIIAGlc-P accumulates → activates adenylate cyclase → high cAMP → CAP-cAMP activates lac."
  },
  {
    id: 4,
    question: "The trp operon uses 'attenuation' as a regulatory mechanism. The attenuation mechanism involves:",
    options: ["TrpR repressor binding the trpO operator in response to tryptophan", "Coupling of transcription and translation — when Trp is abundant, ribosomes translate the leader peptide quickly, favoring 3:4 terminator hairpin formation; when Trp is scarce, ribosomes stall at Trp codons, allowing 2:3 antiterminator to form", "CAP-cAMP activation of trp structural genes", "Small RNA (sRNA) base-pairing with the trp mRNA to block translation"],
    answer: 1,
    explanation: "The trp leader sequence contains two Trp codons. When [Trp] is high: ribosomes translate leader rapidly, region 3-4 forms terminator hairpin (intrinsic terminator), aborting ~90% of transcripts. When [Trp] is low: ribosomes stall at Trp codons in region 1, sequestering it; region 2-3 forms antiterminator hairpin, allowing RNA Pol to read through into structural genes. TrpR also represses the operator, providing a second layer of regulation."
  },
  {
    id: 5,
    question: "Which of the following is an example of a negative regulatory protein acting in trans on a prokaryotic operon?",
    options: ["CAP-cAMP complex activating the lac promoter", "LacI repressor binding the lac operator to block RNA Pol progression", "NusA stimulating termination", "Sigma factor directing RNA Pol to the -10 and -35 elements"],
    answer: 1,
    explanation: "LacI is a classic trans-acting negative regulator: it is encoded by the lacI gene (on the same or different DNA molecule), produced as a diffusible protein, and binds the lac operator (cis-acting element) to negatively regulate transcription. CAP is a positive regulator. NusA and sigma factor are transcriptional machinery components, not classical regulators of gene-specific expression."
  },
  {
    id: 6,
    question: "The ara operon (arabinose catabolism) in E. coli is unique because AraC protein acts as:",
    options: ["A pure repressor regardless of arabinose levels", "A dual-function protein — repressor (in the absence of arabinose, AraC loops DNA between araO2 and araI1) and activator (arabinose binds AraC, releases loop, AraC at araI sites recruits RNA Pol)", "A pure activator regardless of carbon source", "An anti-sigma factor that sequesters σ70"],
    answer: 1,
    explanation: "AraC is a paradigm for dual-function regulators. Without arabinose: AraC dimer bridges araO2 (300 bp upstream) and araI1, creating a repressive DNA loop. With arabinose: arabinose binds AraC, induces conformational change (arm repositioning) that disrupts the loop; AraC now binds araI1-araI2 as adjacent dimers and contacts RNA Pol αCTD (class II activation), stimulating transcription of araBAD and araE."
  },
  {
    id: 7,
    question: "Riboswitch-mediated regulation of gene expression in bacteria involves:",
    options: ["A protein regulator (riboswitch protein) that binds both the mRNA and a metabolite", "A structural element in the 5'UTR of mRNA that directly binds a small metabolite ligand, causing conformational change that alters transcription termination or translation initiation", "A two-component system that phosphorylates a sigma factor in response to metabolites", "A small regulatory RNA that base-pairs with the mRNA 5'UTR"],
    answer: 1,
    explanation: "Riboswitches are cis-acting RNA elements in 5'UTRs that serve as metabolite sensors. The aptamer domain binds the ligand specifically; ligand binding induces conformational change in the expression platform that either: (1) causes premature transcription termination (forms terminator hairpin) or antitermination, or (2) sequesters or exposes the SD sequence to control translation. No protein required. Examples: TPP riboswitch (B1), SAM riboswitch, cobalamin riboswitch, lysine riboswitch."
  },
  {
    id: 8,
    question: "Two-component signal transduction systems in bacteria consist of:",
    options: ["A receptor with intrinsic kinase and phosphatase activity in one polypeptide chain", "A membrane-bound histidine kinase (sensor) that autophosphorylates and transfers phosphate to a cytoplasmic response regulator (effector), which then regulates gene expression", "A sigma factor and an anti-sigma factor that interact in response to stress", "A second messenger (cAMP or c-di-GMP) and its cognate binding protein"],
    answer: 1,
    explanation: "Two-component systems: (1) Sensor histidine kinase (HK) detects environmental signal, autophosphorylates at a conserved His; (2) Response regulator (RR) receives phosphate on conserved Asp (phosphoryl transfer), undergoes conformational change, and activates/represses target gene promoters (most RRs have HTH DNA-binding domains). Many bacteria have dozens of such systems. Examples: EnvZ/OmpR (osmolarity), NtrB/NtrC (nitrogen), PhoQ/PhoP (Mg2+/antimicrobials)."
  },
  {
    id: 9,
    question: "The stringent response in bacteria, activated by amino acid starvation, involves production of which alarmone?",
    options: ["cAMP by adenylate cyclase", "(p)ppGpp (guanosine tetraphosphate and pentaphosphate) by RelA/SpoT", "c-di-GMP by diguanylate cyclase", "cGMP by guanylate cyclase"],
    answer: 1,
    explanation: "(p)ppGpp is the stringent response alarmone. RelA is a ribosome-associated enzyme activated by uncharged tRNA in the A site; it synthesizes ppGpp from ATP+GTP. SpoT has both synthetase and hydrolase activity. ppGpp (with DksA) binds RNA polymerase and shifts promoter selectivity: down-regulates rRNA/tRNA genes (stable RNA), amino acid biosynthesis operons are de-repressed; up-regulates stress genes. This reroutes resources from growth to survival."
  },
  {
    id: 10,
    question: "The 'quorum sensing' system in Vibrio fischeri (and related bacteria) regulates bioluminescence via which mechanism?",
    options: ["A two-component system activated by cell density", "LuxI synthase produces N-acyl homoserine lactone (AHL) autoinducer; at high cell density, AHL binds LuxR transcription activator, which then activates the lux operons", "A riboswitch that responds to cell density signals", "Sigma factor σS activation at high cell density"],
    answer: 1,
    explanation: "V. fischeri quorum sensing: LuxI produces 3OC6-HSL (AHL autoinducer) that diffuses freely. At low cell density, concentration is low; at high density, AHL accumulates. AHL binds and activates LuxR (a transcriptional activator); LuxR-AHL complex binds the lux box upstream of luxICDABEG operon, activating bioluminescence genes and more LuxI (positive feedback). This coordinates population-level behaviors like bioluminescence, biofilm, virulence factor production."
  },
  {
    id: 11,
    question: "The pho regulon is activated under phosphate limitation. Which sensor kinase-response regulator pair controls it?",
    options: ["NtrB-NtrC", "PhoR-PhoB", "EnvZ-OmpR", "CheA-CheY"],
    answer: 1,
    explanation: "Under phosphate limitation: PhoR (HK) is activated, autophosphorylates, and phosphorylates PhoB (RR). Phospho-PhoB binds Pho box sequences upstream of pho regulon genes (phoA — alkaline phosphatase, pstS, phoE outer membrane porin, etc.) to activate their transcription. When phosphate is present, PstS-PstCAB-PhoU transporter complex inhibits PhoR (keeps it in phosphatase mode toward PhoB-P)."
  },
  {
    id: 12,
    question: "Antitermination by bacteriophage lambda N protein prevents termination at which terminators?",
    options: ["tR1 and tL1 terminators immediately downstream of the N and cro genes respectively", "The terminator in the trp leader sequence", "Rho-independent terminators in the lac operon", "All bacterial intrinsic terminators throughout the genome"],
    answer: 0,
    explanation: "λN protein (with NusA/B/E/G and nut sites boxA/boxB in the nascent RNA) renders the transcription complex terminator-resistant. This allows readthrough past tL1 (left of N gene) enabling transcription of cIII, N-gene downstream, and tR1 (right of cro) enabling cII, O, P, Q gene transcription. This is required for both lytic and lysogenic development. N-mediated antitermination is specific to λ-derived transcripts (requires nut sites)."
  },
  {
    id: 13,
    question: "The SOS response in E. coli is regulated by RecA and LexA. Which accurately describes the mechanism?",
    options: ["RecA protein directly activates SOS gene transcription by binding their promoters", "DNA damage → single-stranded DNA → RecA filament forms → RecA co-protease activity stimulates LexA autodigestion → derepression of ~40 SOS genes", "LexA directly senses DNA damage and undergoes conformational change", "SOS response is mediated by sigma factor switching from σ70 to σ38"],
    answer: 1,
    explanation: "SOS response: DNA damage creates ssDNA → RecA loads onto ssDNA, forming nucleoprotein filament. RecA∗ (activated RecA) acts as co-protease to stimulate LexA autodigestion at the Ala84-Gly85 bond. Cleaved LexA no longer represses SOS genes (lexA, recA, uvrABC, sulA, polB, dinB, etc.). RecA∗ also activates autodigestion of λ cI repressor during SOS induction. Upon DNA repair, ssDNA disappears, LexA re-accumulates, and SOS shuts off."
  },
  {
    id: 14,
    question: "Small RNAs (sRNAs) in bacteria typically regulate gene expression by:",
    options: ["Encoding dominant negative variants of regulatory proteins", "Base-pairing with complementary sequences in target mRNAs (5'UTR most commonly), with Hfq chaperone facilitating interaction — often inhibiting translation or promoting mRNA degradation", "Modifying ribosomal RNA to alter ribosome specificity", "Directly binding sigma factors to alter their promoter specificity"],
    answer: 1,
    explanation: "Bacterial sRNAs (~50-500 nt) act through imperfect base-pairing with target mRNAs, typically in the 5'UTR near the SD sequence or start codon. Inhibitory sRNAs occlude ribosome binding site; some activate by disrupting inhibitory secondary structures. Hfq (Sm-like protein) stabilizes sRNAs and facilitates annealing. Paired sRNA-mRNA often degraded by RNase E. Examples: RyhB (represses iron-storage genes under iron limitation), OxyS, Spot42, DsrA."
  },
  {
    id: 15,
    question: "The catabolite repression system in B. subtilis differs from E. coli in that it uses:",
    options: ["cAMP-CRP like E. coli but with a different activator protein", "HPr kinase/phosphatase and HPr-Ser46-P that co-represses catabolic genes via CcpA (carbon catabolite protein A) binding cre sites", "A completely different PTS system without EII components", "Cyclic-di-GMP instead of cAMP as the second messenger"],
    answer: 1,
    explanation: "B. subtilis uses a fundamentally different catabolite repression: HPr kinase phosphorylates HPr at Ser46 (not His15 as in PTS transport) when carbohydrates are abundant. HPr-Ser46-P binds CcpA (LacI family transcription factor), enabling CcpA to bind cre (catabolite responsive element) sites and repress/activate target genes. Fructose-1,6-bisphosphate also stimulates HPr kinase. This is unrelated to cAMP-CRP mechanism."
  },
  {
    id: 16,
    question: "The λ phage lytic/lysogeny decision is primarily governed by competition between which proteins?",
    options: ["cI (CI repressor) and Cro, whose balance determines CI levels at OR1, OR2, OR3", "RecA and LexA competing for operator binding", "N protein and Q protein competing for antitermination", "CII/CIII (promoting lysogeny) competing with host proteases Lon and FtsH"],
    answer: 0,
    explanation: "The lysogeny/lysis switch centers on the right operator (OR) with three sites: OR3>OR2>OR1 for CI; Cro binds OR3>OR2>OR1. In lysogeny, CI occupies OR1+OR2 (autoactivating at PRM from OR2, repressing PR/PL). In lysis, Cro accumulates, occupies OR3 first (repressing PRM — preventing CI synthesis) then OR1+OR2. CII/CIII (and CIII protecting CII from proteases) push toward lysogeny by activating PRE and PI; environmental factors affecting CII stability (host proteases) determine the decision."
  },
  {
    id: 17,
    question: "Nutrient-dependent sporulation in B. subtilis is ultimately triggered by which transcription factor?",
    options: ["σ70 with co-activator SpoA", "Spo0A-P (phosphorylated form of Spo0A response regulator), which activates sporulation-specific sigma factors in both compartments", "σH alone is sufficient to initiate sporulation", "GerR repressor dephosphorylation"],
    answer: 1,
    explanation: "B. subtilis sporulation is initiated by Spo0A, a response regulator activated by a phosphorelay (KinA/B/C→Spo0F-P→Spo0B→Spo0A-P). Spo0A-P at high levels activates/represses >500 genes (including σH-dependent genes) and triggers asymmetric division. Subsequently, compartment-specific sigma cascades operate: σF → σE in forespore/mother cell, then σG → σK — coordinating the gene expression programs in two compartments through membrane-anchored anti-sigma factors and signaling."
  },
  {
    id: 18,
    question: "The E. coli global nitrogen regulator NtrC differs from most response regulators because:",
    options: ["It activates σ54-dependent promoters using an enhancer-like binding site and requires ATPase activity for σ54-open complex formation", "It directly methylates DNA to silence nitrogenase genes", "It uses cAMP as a signal rather than phosphorylation", "It acts as a two-component anti-sigma factor"],
    answer: 0,
    explanation: "NtrC is a σ54-dependent activator — it binds enhancer-like upstream activation sequences (UAS) 100-200 bp upstream of σ54 (σN) promoters. Phosphorylated NtrC-P self-oligomerizes into an active hexameric ring ATPase that hydrolyzes ATP to remodel the σ54-RNA Pol closed complex into an open complex (unique mechanism — most activators don't need to melt DNA themselves). DNA looping brings NtrC to contact σ54-Pol. Activated by NtrB kinase under nitrogen limitation."
  },
  {
    id: 19,
    question: "Protein-protein interactions in E. coli two-component systems are mediated by which signaling mechanism called 'phosphoryl transfer'?",
    options: ["Tyrosine phosphorylation as in eukaryotic receptor tyrosine kinases", "Serine/threonine phosphorylation by AGC kinases", "Histidine→Aspartate phosphoryl transfer using a high-energy acyl-phosphate intermediate", "Cysteine phosphorylation sensitive to reactive oxygen species"],
    answer: 2,
    explanation: "Two-component phosphoryl transfer: sensor HK autophosphorylates on a conserved His residue in the DHp (dimerization and histidine phosphorylation) domain. The phosphate is transferred to a conserved Asp in the receiver domain of the RR. The His-P is a high-energy acyl-phosphate-like intermediate with ~14 kcal/mol free energy. This differs from eukaryotic signaling which predominantly uses Ser/Thr/Tyr phosphorylation. Some phosphorelays involve His→Asp→His→Asp multi-step transfer."
  },
  {
    id: 20,
    question: "The E. coli mar (multiple antibiotic resistance) locus illustrates global regulation by:",
    options: ["Direct mutation of antibiotic target genes upon antibiotic exposure", "MarA, a global transcriptional activator that upregulates AcrAB-TolC efflux pump and downregulates OmpF porin upon activation of the marRAB operon", "RecA-mediated SOS pathway upregulating efflux pumps", "Sigma factor switching to σS under antibiotic stress"],
    answer: 1,
    explanation: "The mar locus: MarR repressor normally represses marRAB operon; salicylate, antibiotics, or oxidative stress compounds bind MarR causing derepression. Expressed MarA (a single-domain AraC family protein) acts as a global regulator binding the mar box in promoters of ~40 genes: activates acrAB efflux pump genes and down-regulates ompF (reducing outer membrane permeability). This gives broad-spectrum, low-level resistance without specific target mutations."
  },
  {
    id: 21,
    question: "The CRP (catabolite repressor protein) activates lac and other catabolic gene promoters. Class I CRP-activated promoters have the CRP binding site centered at -61.5, while class II have it at -41.5. What is the mechanistic difference?",
    options: ["Class I CRP contacts σ70 region 4; Class II CRP contacts α-CTD of RNA Pol AND displaces σ70 region 4 from the -35 element", "Class I uses cAMP; Class II uses cGMP", "Class I promoters have a TATA box; Class II have GC boxes", "Class I uses one CRP dimer; Class II requires two dimers"],
    answer: 0,
    explanation: "Class I CRP sites (-61.5 and further upstream): CRP contacts the αCTD (C-terminal domain of the RNA Pol α subunit) via Activation Region 1 (AR1); this recruits RNA Pol via αCTD. Class II CRP sites (-41.5): CRP contacts αCTD (AR1) and additionally contacts σ70 Region 4 (AR2), and may also contact another part of αNTD; CRP also overlaps the -35 element, displacing σ70 contact there. This explains why class II activators require two contact surfaces."
  },
  {
    id: 22,
    question: "Bacterial biofilm formation is often regulated by cyclic-di-GMP (c-di-GMP). Which enzymes synthesize and degrade c-di-GMP?",
    options: ["Adenylate cyclase (synthesis) and cAMP phosphodiesterase (degradation)", "Diguanylate cyclase/DGC (GGDEF domain, synthesis from 2×GTP) and phosphodiesterase/PDE (EAL or HD-GYP domain, degrades to pGpG or GMP)", "Guanylate cyclase (synthesis) and 5'-nucleotidase (degradation)", "RelA (synthesis from ATP+GTP) and SpoT (hydrolysis to GDP+Pi)"],
    answer: 1,
    explanation: "c-di-GMP is the master second messenger for biofilm regulation. GGDEF domain-containing diguanylate cyclases (DGCs) synthesize c-di-GMP from two GTP molecules (releasing 2 PPi). EAL domain phosphodiesterases (PDEs) hydrolyze c-di-GMP to 5'-pGpG, then to 2×GMP. High c-di-GMP → biofilm (activates cellulose/alginate synthesis, inhibits motility). Low c-di-GMP → planktonic. Organisms have many DGC/PDE pairs responding to different signals."
  },
  {
    id: 23,
    question: "The heat shock response in E. coli: what determines the specificity of σ32 activity immediately after induction and its subsequent decline?",
    options: ["σ32 is post-translationally modified by phosphorylation to increase activity", "σ32 mRNA secondary structure melts at 42°C to allow more translation; DnaK/DnaJ chaperones compete with RNA Pol for σ32 binding (regulating its activity) and target σ32 for FtsH protease degradation once proteostasis is restored", "σ32 gene is transcribed from a σ70 promoter only after heat shock gene products are made", "σ32 activates its own transcription in an autoinductory loop"],
    answer: 1,
    explanation: "Heat shock induction of σ32: at 42°C, the rpoH mRNA 5'UTR hairpin (which sequesters the SD sequence) melts, allowing rapid translation of σ32. Additionally, misfolded proteins titrate DnaK/DnaJ away from σ32, allowing σ32 to associate with RNA Pol. As chaperones restore protein homeostasis (their substrates decrease), free DnaK/DnaJ bind σ32 again, competing with RNA Pol; DnaK also delivers σ32 to the membrane protease FtsH for rapid degradation. σ32 t½ is ~1 min."
  },
  {
    id: 24,
    question: "Transcriptional activation by AraC in the presence of arabinose involves which type of protein-RNA Pol contact?",
    options: ["AraC contacts σ70 region 2 (which normally contacts the -10 element)", "AraC contacts the αCTD of RNA Pol and σ70 region 4 (contacts the -35 element in class I and II activation)", "AraC contacts β subunit NTP entry channel", "AraC contacts the ω subunit to stabilize RNA Pol holoenzyme"],
    answer: 1,
    explanation: "AraC (when arabinose-bound) binds as adjacent dimers to araI1 and araI2 (each half-site ~17-20 bp). The AraC monomer at araI2 contacts σ70 region 4 (AR2 activation), similar to class II CRP activation. This stimulates RNA Pol binding at the araBAD promoter. The αCTD is also involved. This positions RNA Pol to initiate from the araBAD promoter (pBAD)."
  },
  {
    id: 25,
    question: "The iron-responsive Fur (Ferric Uptake Regulator) regulon in E. coli: Fur represses iron acquisition genes when:",
    options: ["When iron is scarce and cells need more iron", "When iron is abundant — Fe2+-bound Fur (holo-Fur) binds the 'Fur box' operator DNA and represses transcription of siderophore biosynthesis and transport genes", "When sigma factor σH is active during heat shock", "When cAMP levels are high and CAP is active"],
    answer: 1,
    explanation: "Fur is a Fe2+-dependent global repressor. When iron is sufficient, Fe2+ binds Fur, changing its conformation to allow DNA binding at 'Fur boxes' (overlapping -10/-35 or upstream) and repressing iron acquisition genes (fepABCDEG, fhuACDB, cirA, ent biosynthesis, etc.). When iron is scarce, apo-Fur loses DNA binding activity, derepressing these genes. Fur also regulates acid resistance genes, and sRNAs like RyhB (which represses iron-storage proteins under iron limitation) are indirectly regulated by Fur."
  },
  {
    id: 26,
    question: "Transcriptional regulation by DNA methylation in E. coli involves Dam methylase (methylating GATC sequences). Which regulatory system uses Dam methylation as a signal?",
    options: ["lac operon activation requires Dam methylation of the CAP binding site", "SeqA sequestration of hemimethylated oriC GATC sites after replication, delaying re-initiation; also pap (pili) phase variation — GATC methylation within regulatory region creates a bistable switch for pap operon expression", "Restriction-modification systems that only cleave unmethylated DNA", "UV damage recognition for nucleotide excision repair"],
    answer: 1,
    explanation: "Dam (N6-adenine methylase) methylates GATC sequences. After replication, hemimethylated GATC at oriC is bound by SeqA protein, which prevents DnaA re-initiation (replication timing). In pap (pyelonephritis-associated pili) phase variation, two GATC sequences in the pap regulatory region are differentially methylated; Lrp binding to one or the other GATC region (protected from Dam methylation) creates a heritable epigenetic bistable switch for Phase ON or OFF — affecting PapI/PapB regulatory interactions."
  },
  {
    id: 27,
    question: "Antisense regulation in bacteria using trans-encoded sRNAs typically involves which RNA structural feature for function?",
    options: ["A perfect complement covering the entire mRNA coding sequence", "Short (6-12 nt) imperfect seed region that base-pairs with the target mRNA RBS/5'UTR, facilitated by Hfq — sufficient to block translation or initiate RNase E cleavage", "A ribozyme active site that cleaves the target mRNA catalytically", "Direct protein coding within the sRNA that inhibits target protein function"],
    answer: 1,
    explanation: "Trans-encoded sRNAs typically use short, imperfect complementarity (seed pairing, ~6-12 nt) near the mRNA's ribosome binding site. Hfq (a hexameric Sm-like protein) binds both the sRNA and mRNA, facilitating their annealing and often directing RNase E-mediated cleavage of the duplex. Unlike cis-encoded antisense RNAs (which have perfect complementarity), trans sRNAs target multiple mRNAs through seed sequences. This differs from eukaryotic miRNAs (seed 7-8 nt at positions 2-8 of miRNA)."
  },
  {
    id: 28,
    question: "In the pho regulon, what role does PhoU play?",
    options: ["PhoU is the response regulator that binds Pho box sequences", "PhoU is an inhibitor/adaptor that couples the Pst (phosphate-specific transport) system to PhoR, inhibiting PhoR kinase activity when phosphate is present — the Pst-PhoU-PhoR signaling complex", "PhoU is an alkaline phosphatase encoded by phoA", "PhoU is a phosphatase that dephosphorylates PhoB-P"],
    answer: 1,
    explanation: "PhoU works with the PstSCAB phosphate transporter to inhibit PhoR when phosphate is available (the 'inhibition model'). In the PhoR-inhibited state, PhoR acts as a phosphatase, dephosphorylating PhoB-P and keeping pho genes repressed. When phosphate is limiting, the Pst transporter is not occupied, PhoU inhibition is relieved, PhoR switches to kinase mode, and phospho-PhoB accumulates to activate pho genes. PhoU mutations result in constitutive pho expression."
  },
  {
    id: 29,
    question: "The gal operon in E. coli is unique in that GalR repressor bound at two operators (OE and OI, 113 bp apart) causes gene repression by:",
    options: ["Steric occlusion of RNA Pol at each operator independently", "GalR dimers at OE and OI interact to form a DNA loop, with HU protein bending DNA to allow OE-OI GalR-GalR interaction and repression", "GalR phosphorylation in response to galactose", "GalR binding the galactose permease to prevent galactose import"],
    answer: 1,
    explanation: "GalR (LacI family) represses gal operon by forming a DNA loop between OE (-60) and OI (+53) operators. The loop is facilitated by HU protein (which bends DNA) and by GalR-GalR interactions. This positions both operators on the same face of the helix (requires IHF/HU-induced DNA phasing). Without HU or with phasing mutations, GalR can still weakly repress from OE alone. Galactose (the inducer) converts GalR to non-operator-binding form."
  },
  {
    id: 30,
    question: "Which of the following describes an 'incoherent feedforward loop' (I-FFL) regulatory motif in bacteria?",
    options: ["A transcription factor (A) activates both a target gene (C) and an intermediate repressor (B) that also represses C — producing a pulse response in C when A is activated", "A mutual repression loop between two sigma factors creating bistability", "A positive feedback loop where product of a gene activates its own expression", "Two-component system activation of multiple independent operons"],
    answer: 0,
    explanation: "Type 1 incoherent FFL: A activates B; A activates C; B represses C. When A is suddenly activated, C is first rapidly induced by A, but as B accumulates (with a delay), B represses C, causing C to return toward baseline. This generates a pulse-like response that is useful for rapid adaptation and filtering sustained vs transient signals. Network motifs (Uri Alon's work) show this is overrepresented in E. coli regulatory networks."
  },
  {
    id: 31,
    question: "Transcriptional repression by CI repressor of phage lambda at OR1 occurs by which molecular mechanism?",
    options: ["CI cleaves the RNA Pol sigma subunit to prevent initiation", "CI is a HTH (helix-turn-helix) protein that binds OR1 DNA and sterically blocks RNA Pol from binding/proceeding from PL and PR promoters", "CI methylates the -10 element to prevent sigma factor recognition", "CI sequesters DnaA to prevent plasmid replication and associated transcription"],
    answer: 1,
    explanation: "λ CI repressor is a HTH protein that binds operator DNA as dimers. At OR1 and OR2 (cooperatively — dimer at OR2 facilitates OR1 binding via protein-protein contacts), CI blocks RNA Pol at PR (right promoter, drives cro, O, P). Simultaneously, CI dimer at OR2 activates PRM (repressor maintenance promoter) by contacting αCTD of RNA Pol — CI is both repressor and activator of its own synthesis. Tetramer (2 dimers) can loop OR to OL for ultra-cooperative long-range repression."
  },
  {
    id: 32,
    question: "The Lrp (leucine-responsive regulatory protein) in E. coli affects transcription of ~10% of all genes. Leucine primarily:",
    options: ["Acts as an inducer by binding Lrp and activating target gene transcription", "Modulates Lrp's DNA binding activity — leucine inhibits Lrp binding at some promoters (e.g., lrp itself, livJHMGF), while stimulating binding at others (e.g., ilvIH) — making Lrp a global metabolic sensor", "Acts as a corepressor always blocking Lrp DNA binding", "Converts Lrp from an octamer to a monomer to activate transcription"],
    answer: 1,
    explanation: "Lrp (an octameric/hexadecameric protein) is a global regulator affecting amino acid metabolism, pili, transport, and many other functions. Leucine's effect on Lrp is target-specific: for some operons (livJHMGF, lrp itself), leucine inhibits Lrp binding; for others (ilvIH, gltBDF), leucine stimulates Lrp binding; and some targets (e.g., ompC) are leucine-insensitive. This makes Lrp a nuanced sensor of amino acid availability/metabolic state."
  },
  {
    id: 33,
    question: "Transcriptional regulation of the araC gene itself in the arabinose system occurs by:",
    options: ["AraC protein autoregulates its own expression — AraC represses its own promoter (PC) by binding araO1 when arabinose is absent", "araC is constitutively expressed at a fixed level regardless of arabinose", "CRP-cAMP is required for araC transcription under all conditions", "σ32 regulates araC expression in response to arabinose-induced misfolded proteins"],
    answer: 0,
    explanation: "AraC autoregulates: the araO1 operator site overlaps the araC promoter (PC). AraC dimer binds araO1 (regardless of arabinose presence) to repress its own transcription. This autogenous negative feedback maintains AraC at a relatively constant low level. This is a common regulatory motif — keeping regulatory protein concentration buffered to prevent stochastic overexpression while allowing response to the actual inducer."
  },
  {
    id: 34,
    question: "The soxRS regulon in E. coli is activated by superoxide and provides resistance to oxidative stress. The mechanism involves:",
    options: ["OxyR protein sensing H2O2 via cysteine oxidation", "SoxR protein containing a [2Fe-2S] cluster that is oxidized by superoxide/redox cycling agents, activating SoxR to transcribe soxS, which then activates the regulon", "Sigma factor switching to σS under oxidative stress", "RecA-mediated SOS induction of oxidative stress genes"],
    answer: 1,
    explanation: "SoxRS two-stage regulation: SoxR has a [2Fe-2S] redox center. Superoxide (O2•−) and redox-cycling agents oxidize the cluster, converting SoxR to its active form as a transcriptional activator of soxS. SoxS (an AraC-family protein) then directly activates ~40 soxRS regulon genes: sodA (MnSOD), zwf (G6PDH), acnA (aconitase), fpr, fumC, nfo, tolC, and others involved in superoxide defense."
  },
  {
    id: 35,
    question: "Toxin-antitoxin (TA) systems in bacteria: in Type II TA systems, what is the mechanism of antitoxin activity?",
    options: ["Antitoxin is an antisense RNA that base-pairs with toxin mRNA to prevent translation", "Antitoxin is a protein that directly binds and inhibits the toxin protein, and the TA complex also autorepresses the TA operon promoter", "Antitoxin is an enzyme that degrades the toxin post-translationally", "Antitoxin is a membrane protein that sequesters the toxin in the periplasm"],
    answer: 1,
    explanation: "Type II TA systems (e.g., MazE-MazF, RelB-RelE, HipB-HipA): the antitoxin (AT) protein directly binds and inhibits the toxin (T) protein. Additionally, the AT-T complex (or AT alone) acts as a transcriptional autorepressor of the TA operon. Under stress (proteases like Lon/ClpXP preferentially degrade the less stable AT), free toxin accumulates: MazF cleaves mRNA, RelE cleaves ribosome-associated mRNA, HipA inhibits GltX aminoacyl-tRNA synthetase — inducing growth arrest/persistence."
  },
  {
    id: 36,
    question: "The sigma factor σS (RpoS) in E. coli is induced by stationary phase, osmotic stress, and other stresses. It is regulated primarily at which level?",
    options: ["Transcriptional induction of the rpoS gene by a stress-specific promoter", "Multiple levels: translation regulation (sRNA RprA/DsrA/OxyS bind rpoS mRNA 5'UTR via Hfq), protein stability (anti-adaptor RssB/ClpXP proteolysis antagonized by IraP, IraM, IraD under stress), and protein activity", "Post-translational modification by phosphorylation in response to stress signals", "sigma factor competition — σS simply outcompetes σ70 at all promoters during stress"],
    answer: 1,
    explanation: "σS (RpoS) regulation is complex: (1) Transcription: multiple promoters respond to different stresses. (2) mRNA translation: sRNAs DsrA, RprA (activate) and OxyS (represses) modulate 5'UTR structure with Hfq. (3) Protein stability: RssB (adaptor) delivers σS to ClpXP for degradation in exponential phase; anti-adaptors IraP (phosphate starvation), IraM (Mg2+ starvation), IraD (DNA damage) block RssB; ppGpp also stabilizes σS. (4) Activity: σS competes with σ70 for RNA Pol core. All levels are used."
  },
  {
    id: 37,
    question: "H-NS (histone-like nucleoid structuring protein) represses many foreign genes in E. coli. Its mechanism involves:",
    options: ["Sequence-specific binding to GC-rich promoters to block RNA Pol", "Preferential binding to AT-rich, curved DNA (typical of horizontally acquired genes), bridging distant DNA segments to form higher-order nucleoprotein complexes that silence gene expression", "Methylating cytosine residues in AT-rich regions of horizontally acquired genes", "Forming an anti-sigma complex that sequesters σ70"],
    answer: 1,
    explanation: "H-NS preferentially binds intrinsically curved, AT-rich DNA sequences (common in genomic islands, pathogenicity islands from HGT). H-NS forms filaments along DNA and can bridge two DNA segments, creating nucleoprotein complexes that 'silence' transcription. This 'xenogeneic silencing' suppresses horizontally acquired genes. Anti-silencer proteins like Ler (in EPEC), VirB (in Shigella), and SlyA counteract H-NS by binding the same sequences and disrupting the H-NS filament."
  },
  {
    id: 38,
    question: "Regulation of translation of the E. coli trpR mRNA (encodes TrpR repressor) by Trp-tRNA involves which mechanism?",
    options: ["Tryptophan-charged tRNA directly binds TrpR and activates its synthesis", "TRAP (trp RNA-binding attenuation protein) in B. subtilis binds trp-charged tRNA and forms a complex that binds the trpEDCFBA leader mRNA — different from E. coli which uses trp attenuation", "In E. coli, TrpR is autogenously regulated at the translational level by ribosomal protein-mRNA interactions", "The trpR mRNA contains a riboswitch for tryptophan"],
    answer: 1,
    explanation: "The question tests knowledge that B. subtilis (not E. coli) uses TRAP protein: TRAP (a 11-mer ring) binds tryptophan-charged tRNA (or actually tryptophan directly, with TRAP activated by Trp-tRNA interaction); Trp-activated TRAP binds (GAG)n repeats in the trp operon leader mRNA, causing structural change that promotes transcription termination (similar to attenuation but protein-mediated). E. coli uses the classical attenuation by ribosome stalling at Trp codons without a TRAP equivalent."
  },
  {
    id: 39,
    question: "The GacS-GacA two-component system in Pseudomonas aeruginosa controls virulence gene expression through a posttranscriptional regulatory cascade involving:",
    options: ["Direct binding of GacA-P to virulence gene promoters", "GacA-P activating transcription of small RNAs (RsmY, RsmZ), which sequester RsmA (CsrA homolog), releasing RsmA-repressed mRNAs to be translated", "GacS phosphorylation of the virulence effector proteins directly", "Quorum sensing signal AHL binding to GacS to activate the system"],
    answer: 1,
    explanation: "GacS-GacA controls a post-transcriptional regulatory cascade: GacA-P activates transcription of non-coding RNAs RsmY and RsmZ. These sRNAs contain multiple GGA sequences that sequester RsmA (an RNA-binding protein that represses translation by binding GGA sequences near the ribosome binding site of target mRNAs). When RsmA is sequestered, mRNAs for secondary metabolites, biofilm, and type VI secretion are derepressed."
  },
  {
    id: 40,
    question: "LexA repressor in the SOS system binds the 'SOS box' (also called LexA box) with the consensus:",
    options: ["CTGT(AT)₄ACAG", "AGGAGG (same as Shine-Dalgarno)", "TTGACA...TATAAT", "TGAAACNNNNGTTTCA (palindromic)"],
    answer: 0,
    explanation: "The LexA binding site (SOS box) consensus is CTGT(N8)ACAG — a degenerate palindrome with CTG on one side and CAG on the other. LexA binds as a dimer using its N-terminal HTH domain. Different SOS boxes have different affinities, creating a hierarchy of SOS gene induction: low-affinity operators (recA, lexA itself) are induced at low DNA damage levels; high-affinity operators (sulA, tisB) require higher RecA∗ levels to derepress fully."
  },
  {
    id: 41,
    question: "In E. coli, when glucose is present and lactose is absent, what is the state of the lac operon?",
    options: ["Maximally expressed because no repressor is bound", "Fully repressed — LacI repressor occupies operators (no inducer) AND CAP-cAMP is absent (low cAMP due to glucose), so even if repressor were absent, transcription would be low", "Constitutively expressed at a baseline level regardless of glucose/lactose", "Repressed only by glucose through direct blocking of RNA Pol by glucose"],
    answer: 1,
    explanation: "When glucose is present and lactose is absent: (1) No allolactose → LacI repressor is active and blocks operator; (2) Glucose suppresses cAMP levels via PTS/adenylate cyclase inhibition → low cAMP → CAP is inactive → no positive activation of the promoter. Therefore, the lac operon is essentially OFF (LacI repressor block + absence of CAP activation). This explains the diauxic growth curve preference for glucose."
  },
  {
    id: 42,
    question: "Bacterial 'chromosome immunoprecipitation' (ChIP-seq) in E. coli is used to map which features?",
    options: ["Only sigma factor binding sites", "Genome-wide binding sites of transcription factors, RNA polymerase, nucleoid-associated proteins, and modified histones — revealing regulatory network architecture", "Only DNA methylation patterns in GATC sequences", "Only ribosome positions on mRNA (Ribo-seq)"],
    answer: 1,
    explanation: "ChIP-seq can map any DNA-binding protein in bacteria. Cross-link protein-DNA in vivo, shear DNA, immunoprecipitate with antibody to the protein of interest, and sequence the enriched DNA. Has been used to map: RNA Pol occupancy (transcriptomics), σ factors, TFs like CRP/Fur/Lrp/GalR, nucleoid proteins H-NS/IHF/Fis, anti-sigma factors, repressors. This gives genome-wide regulatory network maps (e.g., EcoCyc database integrates ChIP-seq data for E. coli TRN)."
  },
  {
    id: 43,
    question: "The relA gene encodes the ribosome-associated (p)ppGpp synthetase. Which feature of uncharged tRNA binding activates RelA?",
    options: ["Uncharged tRNA binds the P site, activating RelA remotely", "Uncharged tRNA in the A site of a translating ribosome causes rejection by EF-Tu (no EF-Tu·GTP·uncharged-tRNA complex) and leaves A site empty; ribosome pausing and A-site uncharged tRNA directly activates ribosome-associated RelA", "Uncharged tRNA directly binds RelA in solution", "Uncharged tRNA activates GCN2 kinase to phosphorylate eIF2α (eukaryotic pathway)"],
    answer: 1,
    explanation: "RelA is activated by 'hungry codons': when a codon for an amino acid in short supply is in the A site, EF-Tu cannot deliver a charged tRNA (as charged tRNA is depleted). Uncharged tRNA can enter the A site and interacts with the ribosome-bound RelA, stimulating its (p)ppGpp synthetase activity. The resulting ppGpp triggers the stringent response. GCN2 is the eukaryotic uncharged tRNA-sensing kinase — structurally unrelated to RelA."
  },
  {
    id: 44,
    question: "The MerR family of transcription activators (e.g., MerR for mercury resistance) activates suboptimal promoters by:",
    options: ["Recruiting RNA Pol by protein-protein contacts alone, with no DNA structural change", "Binding between the -35 and -10 elements (in the spacer) and underwinding/twisting the DNA to convert a suboptimally spaced (19-20 bp spacer) promoter into an optimally aligned (17 bp-equivalent) geometry for RNA Pol open complex formation", "Recruiting σ32 to normally σ70 promoters in response to metal stress", "Preventing H-NS silencing of mer genes by competing for AT-rich sequences"],
    answer: 1,
    explanation: "MerR-family activators (MerR, BmrR, SoxR, ZntR) are unusual: they bind in the major groove between -35 and -10 elements of promoters with suboptimal 19-20 bp spacers. Upon metal binding (or oxidation for SoxR), MerR undergoes conformational change that untwists and compresses the DNA spacer, remodeling the promoter geometry to bring -35 and -10 into optimal alignment (~17 bp effective spacing) for σ70-RNA Pol binding. Activation is by a topological change in DNA, not direct RNA Pol recruitment."
  },
  {
    id: 45,
    question: "The cI repressor of lambda phage and the Cro protein compete for binding at the OR region. What is the consequence of Cro binding OR3 first during lytic development?",
    options: ["Cro at OR3 activates PL transcription to produce more N antiterminator", "Cro at OR3 represses PRM (maintenance promoter for cI), preventing CI repressor synthesis and committing the phage to the lytic cycle by ensuring CI cannot be maintained", "Cro at OR3 induces lambda DNA replication", "Cro at OR3 activates the att sites for phage integration"],
    answer: 1,
    explanation: "Cro has operator affinity OR3 > OR2 > OR1 (opposite to CI). Binding OR3 represses PRM — the promoter responsible for CI maintenance. This is the critical first step in lytic development: preventing any CI synthesis from PRM commits the phage to lysis. As Cro accumulates, OR2 and OR1 are also occupied, repressing CL as well. This is a classic molecular switch — once Cro levels tip above CI, the lytic program is irreversibly engaged."
  },
  {
    id: 46,
    question: "Bacterial anti-sigma factors work by which mechanism?",
    options: ["They degrade the sigma factor using their intrinsic protease activity", "They bind sigma factors directly, sequestering them and preventing association with RNA Pol core enzyme until stress signals trigger their release or degradation", "They methylate the sigma factor to block its DNA-binding domain", "They act as dominant negative forms of sigma factors that occupy promoters without enabling transcription"],
    answer: 1,
    explanation: "Anti-sigma factors directly bind and inhibit their cognate sigma factor: RseA sequesters σE (envelope stress); RseB and RseC modulate RseA; FlgM inhibits σ28 (flagellar σ) until the basal body hook structure is complete; SpoIIAB inhibits σF during sporulation until ADP-to-ATP exchange triggered by SpoIIE phosphatase releases σF. Stress signals often trigger anti-sigma factor proteolysis or conformational change to release the sigma factor for gene activation."
  },
  {
    id: 47,
    question: "Which of the following is an example of a positively regulated, inducible operon in E. coli?",
    options: ["lac operon (constitutively expressed, repressor-only control)", "mal regulon (maltose genes) — MalT (response regulator-like activator) activated by maltose and acetyl-CoA activates mal genes; also requires CAP-cAMP", "trp operon (positively regulated by TrpR corepressor)", "his operon (positively regulated by histidine aminoacyl-tRNA)"],
    answer: 1,
    explanation: "The mal (maltose) regulon is positively regulated: MalT (a solute-binding STAND ATPase activator) is activated by maltose (and acetyl-CoA as co-activators) and CAP-cAMP, then activates all mal structural genes. In the absence of maltose, MalT-DNA binding is very low. The trp operon is negatively regulated (TrpR is a repressor). The his operon uses attenuation (negative mechanism). The lac operon uses both positive (CAP) and negative (LacI) regulation."
  },
  {
    id: 48,
    question: "The NtrC response regulator activates σ54-dependent promoters. What is special about how NtrC contacts RNA Pol at σ54 promoters?",
    options: ["NtrC binds immediately upstream of the -10 element to contact σ54 directly", "NtrC binds to enhancer-like sites 100-200 bp upstream and contacts σ54-RNA Pol via DNA looping, using ATP hydrolysis to remodel the closed complex — unique in bacteria in requiring an upstream activator sequence (UAS) and ATP for open complex formation", "NtrC directly phosphorylates σ54 on a serine residue to activate it", "NtrC acts at the -35 element position (class II activation like CAP)"],
    answer: 1,
    explanation: "σ54 (σN) promoters are unique: they have -24 (GG) and -12 (GC) elements (not -35/-10); σ54-RNA Pol forms a stable closed complex that CANNOT spontaneously open. NtrC-P binds upstream UAS sites and self-assembles into a hexameric AAA+ ATPase ring. ATP hydrolysis drives a conformational cycle that allows NtrC to contact σ54 (via DNA looping bridged by IHF in some cases), hydrolyze ATP, and catalyze open complex formation by remodeling σ54."
  },
  {
    id: 49,
    question: "Osmoregulation of outer membrane porin genes ompF and ompC in E. coli involves the EnvZ-OmpR system and a regulatory sRNA. What is the sRNA and its mechanism?",
    options: ["RprA sRNA activates ompF translation under high osmolarity", "MicF sRNA (induced by OmpR-P at high osmolarity) base-pairs with ompF mRNA 5'UTR, blocking ompF translation — providing reciprocal control with direct OmpC induction by OmpR-P", "DsrA sRNA represses both ompF and ompC under low osmolarity", "RybB sRNA is activated by σE to repress porins during envelope stress"],
    answer: 1,
    explanation: "EnvZ/OmpR: at high osmolarity, OmpR-P levels rise; OmpR-P at high concentrations activates ompC (high-P binding sites) and represses ompF (different regulatory sites). Additionally, MicF sRNA (induced by OmpR-P) provides additional translational repression of ompF by base-pairing with its 5'UTR. At low osmolarity, low OmpR-P preferentially activates ompF. This reciprocal regulation ensures cells have large (OmpF) vs small (OmpC) porins according to osmolarity."
  },
  {
    id: 50,
    question: "The 'feed-forward loop' (FFL) in bacterial transcriptional regulation networks is enriched because:",
    options: ["It is the only way to achieve bistability in gene expression", "FFLs are network motifs that perform signal processing functions (e.g., delay in turning OFF, noise filtering, pulse generation) that are evolutionarily advantageous, and appear more frequently than expected by chance in random networks", "FFLs require fewer genes to implement than simple activation", "FFLs always result in constitutive gene expression"],
    answer: 1,
    explanation: "Alon's group showed that certain network motifs (patterns of 3 or more nodes) appear much more frequently in E. coli's transcription regulatory network than expected by chance (random networks). FFLs (especially the coherent type 1 FFL — A activates B, A activates C, B activates C) have functional advantages: coherent FFLs provide sign-sensitive delay (quick OFF, delayed ON — filtering transient signals). This overrepresentation suggests positive selection for circuits with specific information-processing properties."
  }
];
