const questions = [
  {
    id: 1,
    question: "A 24-year-old primigravida at 32 weeks gestation presents to the PHC with Hb 6.2 g/dL, BP 148/96 mmHg, and mid-upper arm circumference (MUAC) of 19 cm. She has pedal edema and 2+ proteinuria. Which is the MOST appropriate immediate action by the Medical Officer?",
    options: [
      "Administer IV iron sucrose and schedule next ANC after 2 weeks",
      "Start oral antihypertensives and give iron-folic acid tablets",
      "Refer immediately to FRU/CEmOC facility as she has severe anemia with superimposed pre-eclampsia",
      "Admit at PHC, start magnesium sulfate, and arrange blood transfusion"
    ],
    answer: 2,
    explanation: "This patient has multiple high-risk features: severe anemia (Hb <7 g/dL), pre-eclampsia (BP >=140/90 with proteinuria), and maternal undernutrition (MUAC <23 cm indicates CED). A PHC is not equipped for this combination. The standard protocol mandates immediate referral to a First Referral Unit (FRU) or CEmOC facility. Magnesium sulfate loading dose can be given before referral if available, but definitive management requires higher level care."
  },
  {
    id: 2,
    question: "A 2-year-old child weighing 5.8 kg (expected weight ~12 kg) is admitted to a Nutrition Rehabilitation Centre (NRC) with severe acute malnutrition, bilateral pitting edema, hypothermia (35.8 C), and a blood glucose of 38 mg/dL. He is lethargic but responds to stimulation. According to WHO/FANTA stabilization phase protocol, which therapeutic feed is CONTRAINDICATED at this stage?",
    options: [
      "F-75 therapeutic milk formula",
      "Ready-to-use therapeutic food (RUTF) as starter diet",
      "10% glucose solution orally for hypoglycemia",
      "Continued breastfeeding alongside F-75"
    ],
    answer: 1,
    explanation: "In the stabilization phase of SAM management, RUTF (Ready-to-use Therapeutic Food) is CONTRAINDICATED because it has high protein and energy density that a compromised gut and metabolic system cannot handle - it causes refeeding syndrome, cardiac failure, and metabolic derangement. F-75 is the correct starter therapeutic milk providing 75 kcal/100 mL with low protein and sodium. RUTF is used only in the rehabilitation phase after stabilization. Hypoglycemia must be corrected with 10% glucose. Continued breastfeeding is encouraged alongside F-75."
  },
  {
    id: 3,
    question: "An ASHA in a tribal block conducts a home visit to a 16-year-old unmarried adolescent girl who weighs 36 kg and has a BMI of 15.8 kg/m2 with Hb of 8.4 g/dL. The girl is not enrolled in any school. Under which convergent programs should ASHA simultaneously mobilize services for her?",
    options: [
      "WIFS and ICDS only",
      "WIFS, ICDS, SABLA/UDAAN, and out-of-school linkage with MK/NLM",
      "POSHAN Abhiyaan and PM-POSHAN only",
      "WIFS, JSY, and JSSK"
    ],
    answer: 1,
    explanation: "This out-of-school adolescent girl has both iron deficiency anemia and severe undernutrition (BMI <16 indicates Grade III thinness). She is eligible for: (1) WIFS - Weekly Iron Folic Acid Supplementation for adolescents (both school and out-of-school); (2) ICDS - Supplementary Nutrition Programme for adolescent girls; (3) SABLA/UDAAN - scheme for adolescent girls including nutrition, health, life skills, home skills, and mainstreaming; (4) NLM/MK - literacy linkage since she is out of school. JSY/JSSK apply to pregnant women, not this unmarried non-pregnant girl."
  },
  {
    id: 4,
    question: "An ASHA assists a home delivery at 38 weeks. The newborn is born with a weak cry, HR 90/min, and blue extremities. The mother develops PPH with estimated blood loss >500 mL within 15 minutes of delivery. As per HBNC protocol, what is ASHA's priority action?",
    options: [
      "Initiate newborn resuscitation first, then manage PPH",
      "Administer oxytocin 10 IU IM to mother and simultaneously stimulate the newborn",
      "Call for 108 ambulance immediately, administer misoprostol to mother, and initiate newborn stimulation - both simultaneously",
      "Transport to PHC first, provide no intervention at home"
    ],
    answer: 2,
    explanation: "ASHA's HBNC protocol for simultaneous life-threatening emergencies: For PPH - administer misoprostol 600 mcg orally (ASHAs are trained and equipped with misoprostol in their drug kit), uterine massage, and ensure referral. For the newborn with Apgar features (HR <100, weak cry, blue) - stimulation by drying and rubbing. Both must be done simultaneously. Calling 108 is the first step for referral. ASHA does NOT have oxytocin IM in her kit - that is for ANM/nurse. Misoprostol is the ASHA-level intervention for PPH prevention and management."
  },
  {
    id: 5,
    question: "During an ANC camp at a PHC, a 28-year-old multigravida at 36 weeks has BP 160/110 mmHg, severe headache, epigastric pain, and blurring of vision. Urine shows 3+ protein. What is the CORRECT sequence of management before referral to CEmOC?",
    options: [
      "IV antihypertensives, then MgSO4 loading dose, then refer",
      "MgSO4 loading dose (4g IV + 5g IM), antihypertensive (labetalol/hydralazine), arrange referral - all initiated simultaneously",
      "Refer immediately without any intervention to avoid delay",
      "Oral nifedipine, wait for BP to settle, then refer if BP remains high"
    ],
    answer: 1,
    explanation: "This is severe pre-eclampsia/impending eclampsia requiring: (1) MgSO4 loading dose - 4g slow IV over 20 minutes + 5g IM each buttock (Pritchard regimen) for seizure prophylaxis and treatment - this is the priority; (2) Antihypertensive - IV labetalol or hydralazine to reduce BP to <160/110; (3) Immediate referral with a companion, MgSO4 continuation en route if possible. The WHO and NHM protocol mandates MgSO4 BEFORE referral at PHC level where trained staff exist. Waiting for BP to settle is dangerous; referring without any intervention is substandard care."
  },
  {
    id: 6,
    question: "A 3-year-old malnourished child (weight-for-age Z-score -3.5) presents with fever, maculopapular rash, coryza, and Koplik spots. After measles is confirmed, which Vitamin A supplementation protocol is recommended by WHO/NVBDCP for a child in India aged 12-59 months?",
    options: [
      "Vitamin A 100,000 IU single dose orally",
      "Vitamin A 200,000 IU on diagnosis and repeat next day; a third dose in 2-4 weeks if evidence of xerophthalmia",
      "Vitamin A 50,000 IU IM injection on three consecutive days",
      "Vitamin A 200,000 IU only once at discharge"
    ],
    answer: 1,
    explanation: "WHO recommends Vitamin A supplementation for all children with measles: For children 12 months and older - 200,000 IU orally on Day 1 and Day 2 (two doses). A third dose (200,000 IU) after 2-4 weeks is given only if the child has clinical signs of Vitamin A deficiency (xerophthalmia, Bitot's spots, night blindness). This is especially critical in malnourished children where measles causes severe vitamin A depletion, worsening both measles severity and nutritional status. The 100,000 IU dose applies to children 6-11 months."
  },
  {
    id: 7,
    question: "A postnatal mother who delivered 2 hours ago at a PHC has Hb of 7.1 g/dL and experiences PPH (blood loss 700 mL). Her baby weighs 2.1 kg. According to JSSK and NHM norms, which set of services should be simultaneously ensured for BOTH mother and newborn?",
    options: [
      "Blood transfusion for mother; KMC and expressed breast milk for baby",
      "Refer both mother and baby to FRU after stabilizing with IV fluids; ensure transport through Janani Shishu Suraksha Karyakram (JSSK)",
      "Manage PPH with uterotonics and refer only the mother; LBW baby can be managed at PHC",
      "Provide iron tablets and discharge both after 48 hours"
    ],
    answer: 1,
    explanation: "Both require higher-level care: Mother has PPH (active hemorrhage) with pre-existing severe anemia requiring blood transfusion not available at PHC. Baby at 2.1 kg is LBW requiring specialized newborn care (KMC protocols, monitoring for hypothermia, feeding support). JSSK entitles free transport, treatment, and diet for both mother and sick newborn. Initial stabilization (IV fluids, uterotonics for PPH, warmth for baby) at PHC followed by immediate referral is the correct protocol. Attempting to manage PPH requiring transfusion at PHC level without blood bank is dangerous."
  },
  {
    id: 8,
    question: "A 23-year-old woman visits the PHC for post-MTP counselling after a second-trimester MTP (at 18 weeks) for fetal anomaly under MTP Act 2021. She has two living children and wishes to space her next pregnancy by 3 years. Which is the MOST appropriate family planning method to counsel her at this visit?",
    options: [
      "Oral contraceptive pills starting immediately",
      "IUCD insertion immediately post-MTP before discharge (post-abortal IUCD)",
      "Barrier methods only until next menstrual cycle",
      "Depot-medroxyprogesterone acetate (DMPA) injection after 3 weeks"
    ],
    answer: 1,
    explanation: "Post-abortal IUCD (Cu-T 380A) insertion immediately after MTP (within 10 minutes of uterine evacuation or before discharge) is the MOST appropriate method. It is WHO MEC Category 1 (no restriction), highly effective (>99%), long-acting (10 years), immediately reversible, and avoids repeat clinic visits. The National Family Planning Program actively promotes post-abortal IUCD under the IUCD-related services expansion. DMPA is also appropriate but requires a 3-week wait post-abortion for some protocols. OCP can start immediately but requires daily compliance. Post-abortal IUCD is the evidence-based gold standard for this scenario."
  },
  {
    id: 9,
    question: "A 28-year-old woman with gestational diabetes mellitus (GDM diagnosed at 24 weeks) delivers a baby weighing 4.3 kg at 38 weeks via LSCS due to cephalopelvic disproportion. The macrosomic baby develops symptomatic hypoglycemia (blood glucose 28 mg/dL) at 3 hours of life. What is the CORRECT initial management for the neonate?",
    options: [
      "IV 10% dextrose bolus 2 mL/kg over 5 minutes, followed by continuous IV infusion at 6-8 mg/kg/min",
      "Oral sugar water 10 mL and wait 30 minutes before repeating glucose",
      "Glucagon 0.1 mg/kg IM injection and monitor",
      "Breastfeeding only; IV glucose is not indicated for symptomatic hypoglycemia"
    ],
    answer: 0,
    explanation: "Symptomatic neonatal hypoglycemia (blood glucose <40 mg/dL with symptoms) requires IMMEDIATE IV treatment. The correct protocol per NNF/AAP: IV 10% dextrose mini-bolus 2 mL/kg over 5 minutes (=200 mg/kg glucose), followed by maintenance infusion at 6-8 mg/kg/min (GIR). Oral sugar water is inadequate for symptomatic hypoglycemia. Glucagon has limited efficacy in macrosomic infants of diabetic mothers (depleted glycogen stores). Breastfeeding alone is appropriate only for asymptomatic mild hypoglycemia. Infants of GDM mothers should be screened at 1, 2, 3, 6, 12, and 24 hours due to persistent hyperinsulinism."
  },
  {
    id: 10,
    question: "A health team conducting a tribal area RCH assessment finds: institutional delivery rate 24%, full immunization rate 18%, contraceptive prevalence rate 12%, ANC registration 31%, and skilled birth attendance 27%. The primary barriers identified include distance >10 km to PHC, no female health worker for 6 months, and language/cultural barriers. Which strategy has the STRONGEST evidence for improving RCH outcomes in such tribal settings?",
    options: [
      "Mass media campaigns using radio and television",
      "Deployment of local tribal women as ASHAs with tribal language training plus mobile health camps",
      "Establishing a new CHC in the tribal area",
      "Distributing contraceptives and iron tablets through PDS shops"
    ],
    answer: 1,
    explanation: "Evidence from multiple studies and NFHS data shows that in tribal areas with language and cultural barriers, deployment of local community members (tribal women) as ASHAs who speak the local language and understand cultural practices is the most effective intervention for improving RCH indicators. Mobile health camps address geographic inaccessibility. This community-based strategy outperforms facility construction (which takes years and requires sustained staffing) and passive mass media in reaching hard-to-reach populations. India's ASHA program has demonstrated greatest impact in tribal and remote areas when ASHAs belong to the same community."
  },
  {
    id: 11,
    question: "A district health officer reviews data showing that 68% of maternal deaths in the district occurred in the postpartum period (within 24 hours of delivery) among women who had delivered at home. The PPH rate at home deliveries is 12%. ASHA involvement in home deliveries is 45%. What intervention would MOST effectively reduce this specific mortality?",
    options: [
      "Increasing ANC visits from 4 to 8",
      "Universal distribution of misoprostol to ASHAs for active management of third stage of labor at home deliveries",
      "Training dais (traditional birth attendants) in sterile delivery technique",
      "Improving postnatal home visit coverage from day 3 to day 1"
    ],
    answer: 1,
    explanation: "Since 68% of maternal deaths occur within 24 hours postpartum (PPH window) at home, and ASHA involvement is 45%, providing ASHAs with misoprostol 600 mcg oral for Active Management of Third Stage of Labor (AMTSL) at home births is the most evidence-based, cost-effective intervention. WHO and NHM recommend misoprostol for community-level PPH prevention where oxytocin is unavailable. The Misoprostol PPH Prevention program in India has shown significant MMR reduction. Training dais in sterile technique does not address PPH. Earlier PNC home visits address only post-PPH newborn care. Increasing ANC has no impact on postpartum hemorrhage management."
  },
  {
    id: 12,
    question: "In a district with poor RCH indicators, a concurrent evaluation reveals that VHSNC meetings occur only once in 3 months (vs. monthly mandate), untied funds are being used for infrastructure repair, and ASHA payments are delayed by 4-5 months. Which systemic bottleneck framework best classifies these findings?",
    options: [
      "Tanahashi framework - Availability bottleneck",
      "Tanahashi framework - Accessibility bottleneck",
      "Tanahashi framework - Utilization and Acceptability bottlenecks",
      "Tanahashi framework - multiple bottlenecks including Contact coverage and Effectiveness coverage"
    ],
    answer: 3,
    explanation: "The Tanahashi (1978) bottleneck analysis framework has five coverage determinants: Availability, Accessibility, Acceptability, Contact coverage, and Effectiveness coverage. The findings describe multiple bottlenecks: (1) ASHA payment delays reduce motivation = Availability of human resources; (2) Misuse of untied funds = Availability of commodities/resources; (3) Infrequent VHSNC meetings = Community participation/Contact coverage bottleneck; (4) Combination of these reduces effectiveness coverage. This is a multi-level systemic bottleneck. Single-level classification (just accessibility or just utilization) would be incomplete for what represents a governance and accountability failure across multiple Tanahashi levels."
  },
  {
    id: 13,
    question: "In a district with 500,000 population, there were 12,000 live births and 48 maternal deaths in a year. What is the Maternal Mortality Ratio (MMR), and how does it compare to India's NFHS-5 MMR?",
    options: [
      "MMR = 400 per 100,000 live births; significantly higher than India's MMR of 97 (SRS 2018-20)",
      "MMR = 96 per 100,000 live births; approximately equal to India's national MMR",
      "MMR = 240 per 100,000 live births; higher than India's MMR",
      "MMR = 48 per 100,000 live births; lower than India's national MMR"
    ],
    answer: 0,
    explanation: "MMR = (Number of maternal deaths / Number of live births) x 100,000 = (48/12,000) x 100,000 = 400 per 100,000 live births. India's MMR per SRS 2018-20 is 97 per 100,000 live births. India's SDG target is MMR <70 by 2030. The NHM target is MMR <100 by 2020 (achieved nationally). This district's MMR of 400 is approximately 4 times the national average, indicating extremely poor maternal health services. NFHS-5 (2019-21) does not directly measure MMR but tracks proximate determinants. SRS is the gold standard for MMR estimation in India."
  },
  {
    id: 14,
    question: "A district reports: Total live births = 8,500; Deaths in age 0-6 days = 51; Deaths in age 7-28 days = 25; Deaths in age 29 days to 1 year = 34. Calculate the Neonatal Mortality Rate (NMR) and Infant Mortality Rate (IMR).",
    options: [
      "NMR = 6 per 1000 LB; IMR = 4 per 1000 LB",
      "NMR = 9 per 1000 LB; IMR = 13 per 1000 LB",
      "NMR = 76 per 1000 LB; IMR = 110 per 1000 LB",
      "NMR = 18 per 1000 LB; IMR = 13 per 1000 LB"
    ],
    answer: 1,
    explanation: "NMR = (Early neonatal deaths 0-6 days + Late neonatal deaths 7-28 days) / Live births x 1000 = (51+25)/8500 x 1000 = 76/8500 x 1000 = 8.94 approximately 9 per 1000 LB. IMR = (All infant deaths 0-365 days) / Live births x 1000 = (51+25+34)/8500 x 1000 = 110/8500 x 1000 = 12.94 approximately 13 per 1000 LB. India's NMR per SRS 2020 = 20 per 1000 LB; IMR = 28 per 1000 LB. NFHS-5 IMR = 35.2 per 1000 LB. This district performs better than national average. Note: Post-neonatal mortality = IMR - NMR = 13-9 = 4 per 1000 LB."
  },
  {
    id: 15,
    question: "In a district with 200,000 women of reproductive age (15-49 years), 60,000 are currently using any contraceptive method. Of the 140,000 non-users, 28,000 want to have no more children and 14,000 want to space their next pregnancy. Calculate the Contraceptive Prevalence Rate (CPR) and Unmet Need.",
    options: [
      "CPR = 30%; Total Unmet Need = 21%",
      "CPR = 42%; Total Unmet Need = 18%",
      "CPR = 30%; Total Unmet Need = 14%",
      "CPR = 60%; Total Unmet Need = 7%"
    ],
    answer: 0,
    explanation: "CPR = (Current contraceptive users / Women of reproductive age) x 100 = 60,000/200,000 x 100 = 30%. Unmet Need for Limiting = Women wanting no more children but not using contraceptives = 28,000. Unmet Need for Spacing = Women wanting to space but not using contraceptives = 14,000. Total Unmet Need = (28,000 + 14,000)/200,000 x 100 = 42,000/200,000 x 100 = 21%. India's NFHS-5 CPR = 66.7%; Total Unmet Need = 9.4%. An unmet need of 21% is extremely high, indicating a large gap in family planning services. Total demand = CPR + Unmet Need = 30% + 21% = 51%; Demand satisfied = CPR/Total demand = 30/51 = 58.8%."
  },
  {
    id: 16,
    question: "In a diarrhea outbreak investigation in a village of 500 people, 180 persons developed diarrhea after attending a community feast. Of 500 attendees, 400 ate the rice pudding (kheer) and 80 of them fell ill. Of 100 who did not eat kheer, 20 fell ill. Calculate the food-specific attack rate and relative risk for kheer.",
    options: [
      "Attack rate for kheer eaters = 20%; RR = 2.0",
      "Attack rate for kheer eaters = 80%; RR = 4.0",
      "Attack rate for kheer eaters = 20%; Attack rate for non-eaters = 20%; RR = 1.0",
      "Attack rate for kheer eaters = 40%; RR = 8.0"
    ],
    answer: 0,
    explanation: "Attack rate for kheer eaters = (Ill among kheer eaters / Total kheer eaters) x 100 = 80/400 x 100 = 20%. Attack rate for non-kheer eaters = (Ill among non-eaters / Total non-eaters) x 100 = 20/100 x 100 = 20%. Relative Risk = Attack rate in exposed / Attack rate in unexposed = 20%/20% = 1.0. Since RR = 1.0, kheer is NOT the vehicle of infection. This is a key epidemiological principle - when attack rates are equal in exposed and unexposed groups, the food item is not responsible for the outbreak. The investigator must look for another common exposure. This tests ability to correctly interpret attack rate tables, a common pitfall in outbreak investigations."
  },
  {
    id: 17,
    question: "In a measles vaccine efficacy trial, 500 vaccinated and 500 unvaccinated children were followed during an epidemic. 10 vaccinated and 100 unvaccinated children developed measles. Calculate vaccine efficacy.",
    options: [
      "Vaccine Efficacy = 90%",
      "Vaccine Efficacy = 80%",
      "Vaccine Efficacy = 10%",
      "Vaccine Efficacy = 50%"
    ],
    answer: 0,
    explanation: "Attack Rate in Vaccinated (ARV) = 10/500 = 0.02 (2%). Attack Rate in Unvaccinated (ARU) = 100/500 = 0.20 (20%). Vaccine Efficacy (VE) = (ARU - ARV) / ARU x 100 = (0.20 - 0.02) / 0.20 x 100 = 0.18/0.20 x 100 = 90%. This means vaccination prevented 90% of cases that would have occurred without vaccination. The measles vaccine has a real-world efficacy of 85-95% for the first dose and >95% for two doses. VE can also be calculated as (1 - RR) x 100 = (1 - 0.02/0.20) x 100 = (1 - 0.1) x 100 = 90%. This is a standard ICMR/epidemiology calculation."
  },
  {
    id: 18,
    question: "In a community study on iron supplementation for pregnant women, 200 women received iron supplements and 200 received placebo. The incidence of severe anemia at delivery was 10% in the iron group and 30% in the placebo group. Calculate the Number Needed to Treat (NNT).",
    options: [
      "NNT = 5",
      "NNT = 10",
      "NNT = 20",
      "NNT = 3"
    ],
    answer: 0,
    explanation: "Absolute Risk Reduction (ARR) = Risk in Control - Risk in Treatment = 30% - 10% = 20% = 0.20. Number Needed to Treat (NNT) = 1/ARR = 1/0.20 = 5. This means 5 pregnant women need to receive iron supplementation to prevent 1 case of severe anemia at delivery. NNT is a clinically intuitive measure of treatment effectiveness - lower NNT means more effective treatment. Relative Risk Reduction (RRR) = ARR/Control Risk = 0.20/0.30 = 66.7%. Relative Risk = 10/30 = 0.33. This is a fundamental biostatistics/clinical epidemiology calculation in community nutrition research."
  },
  {
    id: 19,
    question: "A population of 1,000,000 had 25,000 live births in a year. Calculate the Crude Birth Rate (CBR) and Couple Protection Rate (CPR) given that 180,000 eligible couples exist, of which 108,000 are protected by any contraceptive method.",
    options: [
      "CBR = 25 per 1000 population; CPR = 60%",
      "CBR = 2.5 per 1000 population; CPR = 40%",
      "CBR = 25 per 1000 population; CPR = 18%",
      "CBR = 50 per 1000 population; CPR = 60%"
    ],
    answer: 0,
    explanation: "Crude Birth Rate (CBR) = (Number of live births / Mid-year population) x 1000 = 25,000/1,000,000 x 1000 = 25 per 1000 population. India's CBR (SRS 2020) = 19.5 per 1000; replacement level requires CBR around 21 per 1000. Couple Protection Rate (CPR) = (Number of couples effectively protected / Total eligible couples) x 100 = 108,000/180,000 x 100 = 60%. Note: CPR is the family planning program indicator used by NHM India, distinct from WHO's Contraceptive Prevalence Rate which uses women 15-49 as denominator. India's CPR target was 65% by 2020 under NHM. National CPR from NFHS-5 = 56.5% (modern methods only)."
  },
  {
    id: 20,
    question: "A DALY (Disability-Adjusted Life Year) calculation is done for maternal conditions in a district. A woman dies at age 28 from PPH; standard life expectancy at age 28 = 52 years. Another woman develops obstetric fistula at age 20 and lives 30 more years with a disability weight of 0.50. Calculate total DALYs lost from both cases (using no age weighting, no discounting).",
    options: [
      "52 YLL + 15 YLD = 67 DALYs",
      "28 YLL + 10 YLD = 38 DALYs",
      "52 YLL + 30 YLD = 82 DALYs",
      "80 YLL + 20 YLD = 100 DALYs"
    ],
    answer: 0,
    explanation: "DALY = Years of Life Lost (YLL) + Years Lived with Disability (YLD). YLL = Standard Life Expectancy at age of death - Age at death = 52 - 0 = 52 years (life expectancy AT age 28 is the REMAINING expected years = 52). YLD = Duration of disability x Disability Weight = 30 years x 0.50 = 15 YLD. Total DALYs = 52 + 15 = 67 DALYs. The key distinction: YLL uses REMAINING life expectancy at age of death, not total life expectancy from birth. Obstetric fistula disability weight (0.50) reflects severe social and physical consequences. DALYs are used in the Global Burden of Disease study and for health priority setting."
  },
  {
    id: 21,
    question: "In a district immunization survey of 750 children aged 12-23 months, 600 received BCG, 525 received all 3 doses of Pentavalent, 480 received Measles-Rubella (MR), and 450 received all antigens including MR. Calculate the full immunization coverage.",
    options: [
      "80% (BCG coverage)",
      "64% (MR coverage)",
      "60% (full immunization coverage)",
      "70% (Pentavalent coverage)"
    ],
    answer: 2,
    explanation: "Full immunization coverage = Children who received ALL scheduled vaccines / Total children surveyed x 100 = 450/750 x 100 = 60%. Full immunization in India's UIP for children 12-23 months = BCG + 3 doses Pentavalent (DPT+HepB+Hib) + 3 doses OPV + 2 doses IPV + 2 doses PCV + 2 doses Rotavirus + MR (2 doses). The child must have received ALL antigens to be counted as 'fully immunized.' Drop-out rate = (BCG-MR)/BCG x 100 = (600-480)/600 x 100 = 20%. NFHS-5 full immunization coverage = 76.4% (India). WHO target for full immunization = 90%. This district at 60% is significantly below target."
  },
  {
    id: 22,
    question: "Using the given data for a taluka: Total women 15-49 years = 50,000; Currently pregnant = 2,000; Currently breastfeeding and amenorrhoeic = 8,000; Using modern contraception = 15,000. Calculate the 'demand satisfied by modern methods' indicator used in SDG monitoring.",
    options: [
      "Demand satisfied = 15,000/50,000 = 30%",
      "Demand satisfied = 15,000/(15,000 + unmet need) - unmet need cannot be determined from given data",
      "Demand satisfied = Modern contraceptive users / (Modern users + Unmet need for limiting + Unmet need for spacing) - additional unmet need data needed",
      "Demand satisfied = 60% if total unmet need = 10,000 women"
    ],
    answer: 3,
    explanation: "SDG Indicator 3.7.1: Proportion of women of reproductive age who have their need for family planning satisfied with modern methods = Modern method users / (Modern method users + Unmet Need). If total unmet need = 10,000 women (given in option), then Demand satisfied = 15,000/(15,000 + 10,000) = 15,000/25,000 = 60%. This is different from CPR (which is users/all women 15-49) and different from traditional CPR calculation. India's NFHS-5: Demand satisfied with modern methods = 77.1% (improved from 75.5% in NFHS-4). Without unmet need data, the calculation cannot be completed - options A and B correctly identify this but option D provides the complete calculation with the additional data."
  },
  {
    id: 23,
    question: "A nutrition survey finds that in a population of children under 5: Stunting prevalence = 35%, Wasting prevalence = 20%, Underweight prevalence = 32%, Overweight prevalence = 3%. The survey methodology used NCHS reference standards. If WHO 2006 Growth Standards are applied instead, which direction would these prevalences likely shift?",
    options: [
      "Stunting and wasting would decrease; overweight would increase",
      "Stunting and wasting would increase; overweight would decrease using WHO 2006 standards compared to NCHS",
      "All indicators would remain the same as reference changes do not affect z-scores",
      "Underweight would increase but stunting would decrease"
    ],
    answer: 1,
    explanation: "WHO 2006 Child Growth Standards vs NCHS reference: WHO 2006 standards describe optimal growth of breastfed children in ideal conditions across 6 countries. They show higher weight-for-length in early infancy and different height-for-age patterns. When countries shift from NCHS to WHO 2006 standards: (1) Stunting (height-for-age <-2 SD) typically INCREASES because WHO 2006 shows taller expected heights; (2) Wasting (weight-for-height <-2 SD) typically INCREASES in early infancy; (3) Overweight typically DECREASES. India switched to WHO 2006 standards. This is why comparisons of NFHS data across time periods require careful attention to methodology - NFHS-3 and NFHS-4 both used WHO 2006, enabling valid comparison."
  },
  {
    id: 24,
    question: "In a community study, 1000 pregnant women were enrolled. 400 received IFA supplementation for >90 days and 600 received <90 days. Preterm birth rates were 8% and 16% respectively. Calculate the Odds Ratio for preterm birth with adequate IFA supplementation.",
    options: [
      "OR = 0.46 (protective effect)",
      "OR = 2.0 (harmful effect)",
      "OR = 1.0 (no association)",
      "OR = 0.25 (strong protective effect)"
    ],
    answer: 0,
    explanation: "Exposed (adequate IFA >90 days, n=400): Preterm = 32 (8%), No preterm = 368. Unexposed (<90 days, n=600): Preterm = 96 (16%), No preterm = 504. Odds of preterm in exposed = 32/368 = 0.087. Odds of preterm in unexposed = 96/504 = 0.190. Odds Ratio = 0.087/0.190 = 0.458 approximately 0.46. OR <1 indicates protective effect. Adequate IFA supplementation (>90 days, as per WHO/NHM recommendation of 180 IFA tablets during pregnancy) reduces odds of preterm birth by 54%. This is consistent with evidence that iron deficiency anemia increases preterm birth risk. RR = 8%/16% = 0.5, which approximates OR since preterm birth is rare."
  },
  {
    id: 25,
    question: "Comparing NFHS-4 (2015-16) and NFHS-5 (2019-21) for India, which combination of findings CORRECTLY represents both an improvement AND a persisting gap?",
    options: [
      "Improvement: Institutional delivery rose from 78.9% to 88.6%; Gap: Stunting in children under 5 remains high at 35.5% (reduced from 38.4%)",
      "Improvement: Full immunization coverage rose from 62% to 76.4%; Gap: Total unmet need for family planning remains at 30%",
      "Improvement: Wasting reduced from 21% to 11%; Gap: MMR remains at 300",
      "Improvement: Skilled birth attendance reached 99%; Gap: Institutional delivery remains below 50%"
    ],
    answer: 0,
    explanation: "NFHS-5 vs NFHS-4 key comparisons: Institutional delivery improved from 78.9% (NFHS-4) to 88.6% (NFHS-5) - a significant improvement driven by JSY, JSSK, and LaQshya. Stunting reduced from 38.4% to 35.5% - improvement but still very high (SDG target <25% by 2025 per WHA Global Nutrition Targets). Wasting in NFHS-5 = 19.3% (increased from 21% - wasting actually WORSENED in NFHS-5 compared to NFHS-4's 21%, making option C wrong). Full immunization improved from 62% to 76.4% (option B wrong - unmet need improved to 9.4% not 30%). Skilled birth attendance and institutional delivery are related but not as stated in option D."
  },
  {
    id: 26,
    question: "An evaluation of the ICDS program found: 90% of AWCs have functional weighing machines, 75% conduct monthly weighing, but only 40% of severely malnourished children identified are referred to NRCs, and only 25% of referred children actually complete NRC treatment. This represents which type of coverage gap?",
    options: [
      "Input-output gap",
      "Coverage-quality gap with a specific referral completion bottleneck",
      "Availability-accessibility gap",
      "Structural-functional gap"
    ],
    answer: 1,
    explanation: "This illustrates the coverage-quality gap and the concept of 'effective coverage.' Input coverage (weighing machine availability = 90%) is high, but the cascade loses effectiveness at each step: Weighing done = 75%, SAM identified (from weighing) = implicit, Referral made = 40% of identified, Referral completed = 25% of referred. This is the coverage-quality gap where high structural coverage (inputs present) does not translate to effective coverage (desired health outcomes). The referral completion bottleneck (25%) represents a critical dropout - possibly due to cost, distance, caregiver reluctance, or poor NRC quality. Tanahashi would classify this as an effectiveness coverage bottleneck."
  },
  {
    id: 27,
    question: "A district evaluation of JSY (Janani Suraksha Yojana) finds: institutional delivery increased from 45% to 82% over 5 years, but maternal mortality reduction was only 15% despite 82% institutional delivery. Neonatal mortality reduction was 22%. What does this discrepancy MOST likely indicate?",
    options: [
      "JSY has no effect on maternal mortality; the program should be discontinued",
      "Quality of care at institutions is inadequate; institutional delivery alone without quality EmOC does not reduce MMR proportionally",
      "MMR data is inaccurate and should be recalculated",
      "Neonatal mortality is always more responsive to institutional delivery than maternal mortality"
    ],
    answer: 1,
    explanation: "This is the classic 'coverage-quality paradox' in maternal health. Large-scale programs like JSY successfully increased institutional delivery (coverage), but if the quality of obstetric care at these institutions is poor (no skilled EmOC, no blood bank, no OT, delayed referrals), then facility delivery without quality care does not save mothers. This is supported by evidence from India where MMR reduction lagged behind institutional delivery improvements in some states. The concept of 'effective coverage' (coverage x quality) explains this gap. NMR showed better response because basic newborn care (warmth, clean cord, breastfeeding) improved with institutional delivery even without full EmOC capacity."
  },
  {
    id: 28,
    question: "LaQshya (Labour Room Quality Improvement Initiative) uses which set of quality indicators to assess intrapartum care quality?",
    options: [
      "Maternal mortality rate, perinatal mortality rate, and CS rate only",
      "Respectful maternity care score, partograph use rate, AMTSL compliance rate, newborn resuscitation rate, and delays in EmOC",
      "NABH accreditation status, bed occupancy rate, and patient satisfaction score",
      "Number of ANCs conducted, delivery kit availability, and JSSK benefit utilization"
    ],
    answer: 1,
    explanation: "LaQshya program (launched 2017) focuses on improving quality of care in labor rooms and maternity operation theatres. Its key process indicators include: (1) Respectful Maternity Care - preventing disrespect and abuse; (2) Partograph use rate - for monitoring labor progress; (3) Active Management of Third Stage of Labor (AMTSL) compliance; (4) Newborn resuscitation readiness and rates; (5) Three delays analysis (delay in decision, reaching facility, receiving care); (6) Oxytocin availability; (7) Episiotomy rates. LaQshya gold, silver, and bronze certifications are awarded based on achieving these quality benchmarks. It is distinct from NABH (institutional accreditation)."
  },
  {
    id: 29,
    question: "In assessing ASHA performance, the 'aspiration to reality gap' is best measured by which combination of metrics?",
    options: [
      "ASHA's educational qualification and training completion certificates",
      "Number of home visits versus NHM expected norms, proportion of incentive tasks completed, and community satisfaction scores",
      "Salary received per month and attendance at monthly meetings",
      "Number of deliveries conducted and children immunized"
    ],
    answer: 1,
    explanation: "ASHA performance assessment should capture both the quantitative (volume of work) and qualitative (community perception, outcome-linked incentives) dimensions. Key metrics: (1) Home visits - HBNC protocol requires 6 visits in first 42 days (3 visits if institutional delivery); gap between actual and expected visits measures performance; (2) Incentive task completion rate - proportion of 21 eligible tasks for which incentives are claimed/paid; (3) Community satisfaction - whether communities feel ASHA is accessible and effective (measured through HMIS review and concurrent monitoring). ASHAs are not 'salaried' employees but receive incentives, so salary metrics are inappropriate. Conducting deliveries is not an ASHA role."
  },
  {
    id: 30,
    question: "HMIS data quality issues in India include: facility-level data entry errors, double counting of beneficiaries across months, under-reporting of maternal deaths, and poor denominators from census projections. Which quality dimension does 'under-reporting of maternal deaths' MOST specifically violate?",
    options: [
      "Timeliness",
      "Completeness and Accuracy (specifically Sensitivity)",
      "Confidentiality",
      "Accessibility"
    ],
    answer: 1,
    explanation: "Under-reporting of maternal deaths violates COMPLETENESS (not all events are captured) and specifically SENSITIVITY of the reporting system (ability to detect true events). In health information systems quality assessment using the WHO framework, data quality dimensions include: Accuracy, Completeness, Timeliness, Accessibility, and Confidentiality. Under-reporting means true deaths are not recorded = Completeness failure. Among reporting errors, under-reporting of maternal deaths is a known systematic bias in India - many home maternal deaths and early postpartum deaths are missed. MDSR (Maternal Death Surveillance and Response) was introduced to specifically address this completeness gap. This is distinct from random errors affecting Accuracy."
  },
  {
    id: 31,
    question: "POSHAN Abhiyaan (National Nutrition Mission) set targets to reduce stunting, wasting, anemia, and LBW by 2 percentage points per year. NFHS-5 data shows stunting at 35.5% (down from 38.4% in NFHS-4 over ~4 years). What is the annual rate of reduction achieved, and how does it compare to the POSHAN Abhiyaan target?",
    options: [
      "Annual reduction = 0.7 pp/year; below the 2 pp/year target",
      "Annual reduction = 2.9 pp/year; exceeds the 2 pp/year target",
      "Annual reduction = 2.0 pp/year; exactly meets the target",
      "Annual reduction = 1.5 pp/year; slightly below target"
    ],
    answer: 0,
    explanation: "Total stunting reduction = 38.4% - 35.5% = 2.9 percentage points. Time period NFHS-4 to NFHS-5 = approximately 4 years (2015-16 to 2019-21). Annual rate of reduction = 2.9/4 = 0.725 approximately 0.7 percentage points per year. POSHAN Abhiyaan target = 2 percentage points reduction per year (very ambitious). The achieved rate of ~0.7 pp/year is significantly below the target. This is a major finding showing that despite POSHAN Abhiyaan's launch in 2018, India has not achieved the targeted nutrition reduction velocity. Wasting actually increased from 21% (NFHS-4) to 19.3% - wait, NFHS-5 wasting = 19.3% showing slight reduction. But anemia in children 6-59 months INCREASED from 58.4% to 67.1% in NFHS-5, which is a significant setback."
  },
  {
    id: 32,
    question: "Comparing MDG targets (2000-2015) with SDG targets (2016-2030) for maternal and child health, which statement is MOST accurate?",
    options: [
      "MDGs had time-bound numeric targets; SDGs shift to universal targets without specific numbers",
      "MDG 4 targeted 2/3 reduction in U5MR; SDG 3.2 targets U5MR <25 per 1000 LB and NMR <12 per 1000 LB - more specific and country-level accountable",
      "SDGs eliminated maternal mortality targets, focusing only on child health",
      "MDGs and SDGs have identical targets; the difference is only in the monitoring framework"
    ],
    answer: 1,
    explanation: "MDG 4 (1990-2015): Reduce under-5 mortality by 2/3 from 1990 levels - a relative target. SDG 3.2 (2016-2030): By 2030, end preventable deaths of newborns and under-5 children, with countries targeting NMR <12 per 1000 LB and U5MR <25 per 1000 LB - absolute threshold targets. MDG 5: Reduce MMR by 75% from 1990 (relative). SDG 3.1: Reduce global MMR to <70 per 100,000 LB - absolute target. Key SDG additions: SDG 3.7 (universal reproductive health access), SDG 3.8 (UHC), emphasis on equity (leave no one behind). SDGs are more transformational, cover all countries (not just developing), and include social determinants. India's 2020 SDG India Index tracks these."
  },
  {
    id: 33,
    question: "An equity analysis of NFHS-5 data shows that stunting prevalence in the poorest wealth quintile (Q1) = 48% versus richest quintile (Q5) = 18%. Institutional delivery in Q1 = 72% versus Q5 = 98%. Skilled birth attendance in Q1 = 75% versus Q5 = 99%. What is the Concentration Index interpretation for these findings?",
    options: [
      "Concentration Index near +1 indicates equitable distribution favoring the poor",
      "Concentration Index for stunting is negative (concentrated among poor); Concentration Index for institutional delivery is positive (concentrated among rich) - indicating pro-rich inequity in service utilization and pro-poor burden of malnutrition",
      "Concentration Index = 0 indicates perfect equity has been achieved",
      "Concentration Index is not applicable for categorical health outcomes"
    ],
    answer: 1,
    explanation: "Concentration Index (CI) measures socioeconomic inequality: CI = 0 is perfect equality, CI > 0 means outcome concentrated in rich, CI < 0 means outcome concentrated in poor. For stunting (a negative health outcome): CI is NEGATIVE (concentrated among poor) - poorest have highest stunting (48% vs 18%). For institutional delivery (a positive health service): CI is POSITIVE (concentrated among rich) - richest have highest utilization (98% vs 72%). This pro-rich inequity in service use combined with pro-poor burden of malnutrition demonstrates that the current RCH system benefits the rich more while the poor bear greater disease burden. Addressing this equity gap is central to SDG's 'leaving no one behind' principle and Lancet 2003 equity analysis framework."
  },
  {
    id: 34,
    question: "Bottleneck analysis for immunization in a district finds: vaccine availability = 95%, cold chain functionality = 88%, session site reach = 70%, caregiver awareness = 55%, utilization rate = 48%, full immunization coverage = 38%. Which bottleneck, if addressed, would have the GREATEST immediate impact on coverage?",
    options: [
      "Improving vaccine availability from 95% to 100%",
      "Improving cold chain from 88% to 95%",
      "Improving caregiver awareness from 55% - as demand-side bottleneck is the rate-limiting step",
      "Adding more session sites to improve reach from 70%"
    ],
    answer: 2,
    explanation: "In cascade/bottleneck analysis, coverage at each step is limited by the lowest-performing upstream bottleneck. The cascade: Availability (95%) > Cold chain (88%) > Session reach (70%) > Awareness (55%) > Utilization (48%) > Full coverage (38%). The biggest DROP in the cascade is from Reach (70%) to Awareness (55%) = 15 percentage point drop, and Awareness to Utilization = 7 pp drop. However, awareness at 55% is the demand-side bottleneck that translates reach into utilization. Improving awareness from 55% would directly increase utilization closer to the reach level (70%), potentially gaining 15+ percentage points versus marginal gains from improving supply-side near-maximum indicators. This is Tanahashi framework applied to immunization program analysis."
  },
  {
    id: 35,
    question: "The concept of 'effective coverage' in RCH differs from 'crude coverage' in that it accounts for quality. If institutional delivery coverage = 85% but only 60% of institutional deliveries receive all four signal functions of basic EmOC (oxytocin, MgSO4, manual removal of placenta, assisted vaginal delivery), what is the 'effective coverage' of quality delivery care?",
    options: [
      "Effective coverage = 85% (institutional delivery rate is the true coverage)",
      "Effective coverage = 60% x 85% = 51%",
      "Effective coverage = 85% - 60% = 25%",
      "Effective coverage = (85 + 60)/2 = 72.5%"
    ],
    answer: 1,
    explanation: "Effective Coverage = Crude Coverage x Quality Score = 85% x 60% = 51%. This framework (Shengelia et al., 2005; Victora et al., 2018) recognizes that coverage counts individuals who received a service, but not whether the service was of adequate quality to produce health benefit. Here, 15% of women deliver at home (no institutional care). Of the 85% who deliver at institutions, only 60% receive adequate EmOC signal functions. So true effective coverage of quality delivery care = 85% x 60% = 51%. This is markedly lower than the reported 85% and explains why high institutional delivery rates do not always translate to proportional MMR reductions. The Lancet 2018 series on quality of care in LMICs highlights this gap extensively."
  },
  {
    id: 36,
    question: "An ASHA performance review in 10 districts finds that districts with highest ASHA incentive payment regularity (within 30 days) have full immunization coverage 15 percentage points higher than districts with delayed payments (>90 days). This finding relates to which health systems framework concept?",
    options: [
      "Human resources for health - remuneration and motivation as determinants of performance and service delivery outcomes",
      "Health financing - government expenditure on CHWs",
      "Governance - ASHA program management",
      "Service delivery - community outreach session frequency"
    ],
    answer: 0,
    explanation: "This finding directly illustrates the Human Resources for Health (HRH) framework principle: worker motivation (operationalized through timely remuneration) is a key determinant of performance and, ultimately, health outcomes (immunization coverage). The WHO Health Systems Framework (2007) identifies six building blocks: Service Delivery, Health Workforce, Health Information, Medical Products/Vaccines/Technologies, Financing, and Leadership/Governance. This falls under Health Workforce - specifically the motivation component of HRH management. Global evidence consistently shows that CHW motivation (including financial incentives and recognition) is among the strongest predictors of performance. India's ASHA program improvement strategy must address payment delays as a systemic HRH bottleneck."
  },
  {
    id: 37,
    question: "A district with 40% scheduled tribe (ST) population shows the following NFHS-5 data: Full immunization in ST children = 52% vs Non-ST = 78%. Institutional delivery in ST women = 58% vs Non-ST = 91%. Antenatal care (4+ visits) in ST women = 34% vs Non-ST = 72%. Which program mechanism MOST specifically targets this ST-Non-ST gap?",
    options: [
      "Universal programs like JSY and JSSK which cover all communities equally",
      "Tribal sub-plan (TSP) allocation with specific RCH fund ring-fencing and tribal health sub-strategy under NHM",
      "Creating separate ST-only health facilities",
      "Training more MBBS doctors for tribal areas"
    ],
    answer: 1,
    explanation: "NHM addresses tribal health disparities through: (1) Tribal Sub-Plan (TSP) - mandatory fund allocation proportional to ST population percentage in districts, ring-fenced for tribal communities; (2) Tribal Health Strategy under NHM with specific interventions for hard-to-reach tribal areas; (3) ASHA recruitment from tribal communities; (4) Mobile Medical Units for inaccessible tribal hamlets; (5) Flexible fund allocation for tribal-specific barriers. Universal programs like JSY/JSSK help but do not address the access, cultural, and language barriers that create the gap. Separate facilities create segregation. The specific mechanism for tribal equity is the TSP/tribal health sub-plan with monitoring against disaggregated tribal indicators."
  },
  {
    id: 38,
    question: "National Health Policy 2017 set a target for Maternal Mortality Ratio of _____ per 100,000 live births by 2020, and Under-5 Mortality Rate of _____ per 1000 live births by 2025.",
    options: [
      "MMR <100 by 2020; U5MR <23 by 2025",
      "MMR <70 by 2020; U5MR <30 by 2025",
      "MMR <50 by 2020; U5MR <20 by 2025",
      "MMR <100 by 2025; U5MR <25 by 2030"
    ],
    answer: 0,
    explanation: "National Health Policy 2017 specific RCH targets: MMR <100 per 100,000 live births by 2020 (India achieved ~97 per SRS 2018-20, meeting this target), Under-5 Mortality Rate <23 per 1000 live births by 2025, Neonatal Mortality Rate <16 per 1000 live births by 2025, Infant Mortality Rate <28 per 1000 live births by 2019 (India SRS 2020 IMR = 28, borderline), Total Fertility Rate 2.1 by 2025, and reducing malnutrition (wasting <5%, stunting <25%, anemia <25%). The SDG target for MMR is <70 by 2030. NHP 2017 is more ambitious than previous policies and aligns with but has intermediate milestones toward SDGs."
  },
  {
    id: 39,
    question: "The 'first 1000 days' concept in nutrition spans conception to age 2 years. A policy intervention targets only the 6-23 months period (complementary feeding). What percentage of the 1000-day window is MISSED by this intervention?",
    options: [
      "Approximately 27% missed (conception to 6 months)",
      "Approximately 45% missed (prenatal period of 270 days + first 6 months of 180 days = 450 days = 45%)",
      "Approximately 10% missed (only prenatal period)",
      "Nothing is missed; 6-23 months is the most critical period"
    ],
    answer: 1,
    explanation: "The 1000 days window: Pregnancy (270 days from conception) + Birth to 6 months (180 days) + 6-23 months (540 days) = approximately 990 days (typically rounded to 1000). A 6-23 month only intervention misses: Prenatal 270 days + First 6 months 180 days = 450 days = 450/1000 = 45% of the window. This is critical because: (1) Prenatal undernutrition causes intrauterine growth restriction and programs epigenetic changes; (2) Exclusive breastfeeding (0-6 months) is the most protective nutritional intervention; (3) Prenatal IFA, protein-energy supplementation, and maternal nutrition are part of the 1000-day approach. Intervening only from 6 months misses nearly half the critical window for brain development and growth trajectory setting."
  },
  {
    id: 40,
    question: "The lifecycle approach to Reproductive and Child Health recognizes that health outcomes are shaped across generations. Which of the following BEST illustrates an intergenerational cycle of malnutrition and its health consequences?",
    options: [
      "An obese woman delivers a macrosomic baby who becomes obese in childhood",
      "An undernourished adolescent girl becomes an undernourished pregnant woman delivering a LBW baby who has impaired growth and becomes an undernourished adolescent in the next generation",
      "A woman with sickle cell disease passes the gene to her child",
      "A teenage mother has a premature baby due to immature uterus"
    ],
    answer: 1,
    explanation: "The intergenerational cycle of malnutrition (also called the 'malnutrition trap') follows: Undernourished girl child > Stunted adolescent (short stature, narrow pelvis, iron deficiency) > Undernourished pregnant woman (inadequate weight gain, anemia, micronutrient deficiencies) > Low birth weight baby (intrauterine growth restriction) > LBW infant with impaired growth and immune function > Undernourished child > Stunted adolescent (repeating cycle). This explains why stunting rates change so slowly - they are programmed across generations. Breaking this cycle requires intervening at EVERY stage of the lifecycle, especially adolescent nutrition and preconception care. Option A describes double burden of malnutrition; Option D describes obstetric risk of teenage pregnancy but not the malnutrition cycle."
  },
  {
    id: 41,
    question: "The 'continuum of care' framework for maternal, newborn, and child health describes care linkages across time and place. Which gap in the continuum is associated with the HIGHEST burden of deaths in India?",
    options: [
      "Gap between ANC and skilled birth attendance (missing delivery care)",
      "Gap between postnatal care and immunization (missing early PNC to immunization linkage)",
      "The intrapartum period (childbirth and first 24-48 hours) with highest concentration of maternal and neonatal deaths",
      "Gap between child immunization and school health services"
    ],
    answer: 2,
    explanation: "The continuum of care framework (Kerber et al., Lancet 2007) identifies care from preconception through adolescence, across home, community, and facility. In India, the intrapartum/early postnatal period (birth and first 24-48 hours) accounts for the HIGHEST mortality concentration: approximately 45% of maternal deaths occur during delivery/first 24 hours, >50% of neonatal deaths occur in the first 24-48 hours, and the perinatal period (35+ weeks to day 7) has highest death density. This is why interventions like skilled birth attendance, active management of third stage, and immediate newborn care (warmth, clean cord, breathing support) have the highest impact potential. The gap between ANC (high coverage) and skilled delivery care was a major focus of JSY."
  },
  {
    id: 42,
    question: "Universal Health Coverage (UHC) has three dimensions: population coverage, service coverage, and financial protection. Under India's Ayushman Bharat scheme, PMJAY provides health insurance for hospitalization. Which dimension of UHC does PMJAY most directly address, and what remains its primary gap regarding RCH?",
    options: [
      "Financial protection for hospitalization; gap is that it excludes outpatient and preventive RCH services like ANC, immunization, and contraception",
      "Population coverage for all Indians; gap is low awareness",
      "Service coverage for all diseases; gap is hospital bed shortage",
      "All three dimensions equally; no specific gap in RCH"
    ],
    answer: 0,
    explanation: "PMJAY (Pradhan Mantri Jan Arogya Yojana) under Ayushman Bharat: Coverage = bottom 40% of population (50 crore beneficiaries) for secondary and tertiary hospitalization up to Rs 5 lakh/family/year. It directly addresses FINANCIAL PROTECTION for hospitalization costs (catastrophic health expenditure). Critical RCH gap: ANC visits, immunization, contraception, outpatient nutrition counselling, growth monitoring (ICDS), postnatal home visits - all OUTPATIENT and PREVENTIVE services - are NOT covered under PMJAY. Most RCH deaths and morbidity are preventable through outpatient/community-level care. AB-HWCs (Health and Wellness Centres) under the other Ayushman Bharat pillar are meant to address this gap but are separately implemented. True UHC for RCH requires integration of both pillars."
  },
  {
    id: 43,
    question: "Social determinants of maternal mortality include all of the following EXCEPT:",
    options: [
      "Low women's educational attainment and literacy",
      "Low social status and decision-making autonomy of women",
      "Pathophysiology of obstetric complications (hemorrhage, eclampsia, sepsis)",
      "Poverty and lack of economic resources to access care"
    ],
    answer: 2,
    explanation: "Social determinants of health (SDOH) are the conditions in which people are born, grow, live, work, and age that shape health outcomes. For maternal mortality, key social determinants include: Women's education (each additional year of maternal schooling reduces child mortality 7-9%), Decision-making autonomy (ability to decide to seek care), Poverty and income (affects care-seeking, nutrition, transport), Gender norms and discrimination, Caste and social exclusion, Geographic access, Social support. Pathophysiology of obstetric complications (hemorrhage, eclampsia, sepsis, obstructed labor, septic abortion) are the DIRECT/MEDICAL causes of maternal death, NOT social determinants. The three delays model (decision, reaching, receiving care) mediates between social determinants and medical outcomes."
  },
  {
    id: 44,
    question: "Research shows that in India, women who can read and write have institutional delivery rates approximately 25 percentage points higher than illiterate women. This association between gender (expressed as women's education) and RCH outcomes is best addressed through which type of intervention?",
    options: [
      "Medical interventions targeting individual women",
      "Structural interventions addressing gender equity - girls' education promotion, Beti Bachao Beti Padhao, conditional cash transfers for girls' schooling, and community gender norm change",
      "Health education alone through ASHAs",
      "Training doctors to be gender-sensitive"
    ],
    answer: 1,
    explanation: "The education-maternal health relationship operates through multiple pathways: literate women have better health knowledge, greater autonomy, better ability to navigate health systems, and higher social status enabling care-seeking decisions. Individual medical interventions cannot address structural gender inequity. Structural interventions are required: (1) Beti Bachao Beti Padhao - targeting sex ratio and girls' education; (2) Kasturba Gandhi Balika Vidyalaya - residential schools for girls in backward blocks; (3) Conditional cash transfers like Kanya Sumangala Yojana; (4) Community-level gender norm change through MAS (Mahila Arogya Samiti) and self-help groups. These are intersectoral (education + health + social welfare) structural interventions addressing gender as a social determinant of RCH outcomes."
  },
  {
    id: 45,
    question: "Climate change impacts on nutrition in India include all of the following EXCEPT:",
    options: [
      "Increased heat stress reducing crop yields and food availability affecting dietary diversity",
      "Changing rainfall patterns causing drought and flooding, affecting agricultural output and child food security",
      "Direct improvement of breastfeeding rates due to climate-induced behavioral changes",
      "Increased aflatoxin contamination of grains in warmer, humid conditions affecting child growth"
    ],
    answer: 2,
    explanation: "Climate change pathways affecting nutrition in India: (1) Food AVAILABILITY - extreme weather (drought, flood) reduces agricultural yields, disrupts supply chains, increases food prices; (2) Food UTILIZATION - heat stress, water scarcity, reduced water/sanitation quality increase diarrhea burden, worsening child undernutrition (the nutrition-infection cycle); (3) Aflatoxin - warmer temperatures and humidity promote Aspergillus mold growth on maize and groundnuts, producing aflatoxins that impair child linear growth even without overt illness; (4) Dietary diversity - crop failure reduces access to diverse foods. Climate change does NOT directly improve breastfeeding rates. If anything, climate disasters displace families, disrupt lactation, and may increase use of infant formula in emergency settings, potentially harming breastfeeding rates. Option C is false."
  },
  {
    id: 46,
    question: "During COVID-19 pandemic (2020-21), which combination of RCH service disruptions was documented in India's HMIS data?",
    options: [
      "Antenatal care visits declined, immunization sessions were suspended, ICDS centers closed, and ASHA home visits reduced due to lockdown restrictions",
      "Only immunization declined; maternal health services were unaffected",
      "Only ICDS was affected; health facility services continued normally",
      "COVID-19 had no measurable impact on RCH services in India"
    ],
    answer: 0,
    explanation: "India's HMIS data during COVID-19 (April-June 2020) showed: (1) ANC registrations declined 17-25%; (2) Institutional deliveries decreased 10-15% nationally with some states showing up to 40% decline; (3) Immunization - routine immunization sessions suspended during lockdown (April-May 2020), then partially resumed with COVID safety protocols; (4) ICDS centers closed during lockdown - supplementary nutrition disrupted (dry ration home delivery attempted but coverage was incomplete); (5) ASHA home visits for HBNC reduced due to movement restrictions; (6) Family planning services (sterilization camps) suspended. The Lancet 2020 and UNICEF analyses documented 60+ countries with >50% decline in essential health services. India's COVID-19 disruption was most severe for preventive/promotive services."
  },
  {
    id: 47,
    question: "The RCH Portal and Mother and Child Tracking System (MCTS)/Reproductive Child Health portal tracks beneficiaries. Which of the following BEST describes the primary public health value of the MCTS/RCH Portal?",
    options: [
      "Enables real-time financial transaction tracking for JSY payments",
      "Enables individual-level tracking of pregnant women and children from ANC registration through delivery and child immunization, allowing identification of drop-outs for targeted follow-up",
      "Provides telemedicine consultations for high-risk pregnancies",
      "Manages ASHA training and certification records"
    ],
    answer: 1,
    explanation: "Mother and Child Tracking System (MCTS), subsequently upgraded to RCH Portal (Reproductive and Child Health Portal), is India's individual beneficiary tracking system launched in 2011. Its core public health value: (1) Registers every pregnant woman at the time of ANC and assigns a unique ID; (2) Tracks ALL ANC contacts (4+ ANC, TT, IFA); (3) Links to delivery outcome; (4) Tracks newborn registration and all immunization contacts; (5) Identifies women who miss ANC visits or children who miss vaccines (drop-outs) for targeted ASHA follow-up; (6) Generates due-lists for ASHAs/ANMs enabling proactive outreach. This shifts from aggregate reporting to individual-level accountability. The data quality of MCTS/RCH Portal is however variable due to entry quality issues."
  },
  {
    id: 48,
    question: "Village Health, Sanitation and Nutrition Committees (VHSNCs) are mandated to: meet monthly, prepare village health plans, utilize untied funds (Rs 10,000/year), and conduct community monitoring. Mahila Arogya Samitis (MAS) in urban areas serve a similar function. What is the PRIMARY governance role of these community institutions?",
    options: [
      "Delivering clinical health services at the village level",
      "Social accountability and community participation in health planning, monitoring, and resource management for local health priorities",
      "Selecting ASHA workers for appointment",
      "Managing PHC infrastructure and equipment"
    ],
    answer: 1,
    explanation: "VHSNCs (and urban MAS) are community governance structures under NHM representing the social accountability mechanism. Primary roles: (1) SOCIAL ACCOUNTABILITY - holding health system accountable through community monitoring, reviewing ASHA performance, tracking health outcomes; (2) COMMUNITY PARTICIPATION in identifying local health priorities and planning; (3) RESOURCE MANAGEMENT - managing Rs 10,000/year untied fund for local health priorities (vector control, sanitation, emergency transport); (4) Convergence platform - bringing together ASHA, AWW, ANM and Panchayat for intersectoral coordination. They do NOT deliver clinical services, appoint ASHAs (that is the block/district selection committee), or manage PHC infrastructure. The Community Monitoring Initiative under NHM operationalizes social accountability through VHSNCs."
  },
  {
    id: 49,
    question: "Intersectoral convergence for addressing child undernutrition in India requires coordinated action across multiple sectors. The POSHAN Abhiyaan convergence framework mandates synergy between which set of ministries/departments?",
    options: [
      "Health and Family Welfare alone",
      "WCD (ICDS/nutrition) + Health (immunization, ANC) + Water and Sanitation (WASH) + Agriculture/Food (dietary diversification) + Education + Social Protection (PDS, MGNREGA)",
      "Finance and Health only",
      "WCD and NITI Aayog only"
    ],
    answer: 1,
    explanation: "POSHAN Abhiyaan (2018) explicitly adopts the Scaling Up Nutrition (SUN) movement's framework of 'nutrition-sensitive' and 'nutrition-specific' interventions requiring TRUE intersectoral convergence: (1) WCD/ICDS - nutrition-specific: supplementary nutrition, growth monitoring, early childhood care; (2) Health/MoHFW - ANC, immunization, micronutrient supplementation, diarrhea management; (3) Drinking Water and Sanitation (Jal Shakti) - WASH interventions reduce environmental enteropathy, diarrhea; (4) Agriculture - dietary diversity through kitchen gardens, biofortified crops; (5) Education - girls' schooling, mid-day meal; (6) Social Protection - PDS for food security, MGNREGA for income/women's empowerment. The POSHAN Abhiyaan uses a convergence action plan (CAP) format requiring all these departments to contribute to district nutrition plans, with the District Collector as convergence champion."
  },
  {
    id: 50,
    question: "A systematic review of community-based nutrition interventions in South Asia identifies that the highest impact package for reducing child stunting includes which combination of interventions delivered in the first 1000 days?",
    options: [
      "Vitamin A supplementation and deworming alone",
      "Balanced protein-energy supplementation for pregnant women + promotion and support for exclusive breastfeeding + appropriate complementary feeding with micronutrient supplementation + WASH interventions + women's empowerment",
      "Iron-folic acid for pregnant women and zinc supplementation for children only",
      "Ready-to-use therapeutic food (RUTF) distribution to all under-5 children"
    ],
    answer: 1,
    explanation: "The Lancet 2013 Maternal and Child Nutrition Series identified the highest-impact interventions for reducing stunting (Lives Saved Tool modeling): (1) Maternal balanced protein-energy supplementation during pregnancy - reduces IUGR/SGA births by 21%; (2) Promotion and support for EXCLUSIVE breastfeeding 0-6 months - reduces stunting, diarrhea mortality, and SIDS; (3) Appropriate complementary feeding (6-23 months) + micronutrient supplementation (zinc, iron, MNPs) + behavioral change communication; (4) WASH (Water, Sanitation, Hygiene) - reduces diarrheal disease and environmental enteropathy that drive stunting; (5) Women's nutrition and empowerment (addressing gender equity). RUTF is for treatment of SAM, not prevention of stunting in general population. Vitamin A alone and IFA alone have insufficient impact on linear growth. The package approach with synergy between nutrition-specific and nutrition-sensitive interventions is key."
  }
];

export default questions;
