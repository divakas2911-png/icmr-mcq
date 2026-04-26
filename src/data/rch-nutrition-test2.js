const questions = [
  {
    id: 1,
    question: "As per the WHO 2016 revised guidelines, the recommended minimum number of antenatal care (ANC) contacts during pregnancy is:",
    options: ["4 visits", "6 contacts", "8 contacts", "12 contacts"],
    answer: 2,
    explanation: "The WHO 2016 ANC model recommends a minimum of 8 contacts during pregnancy (replacing the older 4-visit focused ANC model). This change was made to improve perinatal outcomes and enhance the woman's experience of care."
  },
  {
    id: 2,
    question: "Under the RMNCH+A strategy in India, ANC registration should ideally be done within:",
    options: ["First 8 weeks of pregnancy", "First 12 weeks of pregnancy", "First 16 weeks of pregnancy", "First 20 weeks of pregnancy"],
    answer: 1,
    explanation: "Under RMNCH+A, early ANC registration should be completed within the first trimester, i.e., within 12 weeks of pregnancy. Early registration enables timely provision of all ANC components including IFA supplementation, TT immunization, and screening tests."
  },
  {
    id: 3,
    question: "The total number of iron-folic acid (IFA) tablets prescribed to a pregnant woman under the National Iron Plus Initiative is:",
    options: ["90 tablets", "120 tablets", "180 tablets", "360 tablets"],
    answer: 2,
    explanation: "Under the National Iron Plus Initiative, pregnant women are prescribed 180 IFA tablets (containing 60 mg elemental iron and 500 mcg folic acid), to be consumed daily starting from the second trimester (approximately 20 weeks) through 6 months of the postpartum period."
  },
  {
    id: 4,
    question: "Which of the following investigations is NOT routinely included in the standard ANC investigations package under the Government of India guidelines?",
    options: ["Blood group and Rh typing", "Hemoglobin estimation", "Oral glucose tolerance test (OGTT) for all", "VDRL test"],
    answer: 2,
    explanation: "Routine ANC investigations include Hb estimation, blood group/Rh typing, urine for albumin and sugar, VDRL/RPR, and HIV testing. OGTT for all pregnant women is not a universal routine ANC investigation; it is reserved for those with risk factors for gestational diabetes. Screening is done with urine sugar initially."
  },
  {
    id: 5,
    question: "Calcium supplementation during pregnancy is recommended under Government of India guidelines at a dose of:",
    options: ["500 mg/day from 20 weeks onwards", "1000 mg/day from the first trimester", "1500 mg/day from 20 weeks to 6 months postpartum", "2000 mg/day throughout pregnancy"],
    answer: 2,
    explanation: "The Government of India recommends calcium supplementation at 1500 mg/day (three tablets of 500 mg each) from 20 weeks of gestation until 6 months postpartum to prevent pre-eclampsia and improve maternal and fetal outcomes."
  },
  {
    id: 6,
    question: "A primigravida presents for ANC at 16 weeks. She has not received any tetanus toxoid (TT) vaccination before. What is the correct TT immunization schedule for her?",
    options: ["TT1 immediately, TT2 after 4 weeks", "TT1 immediately, TT2 after 4 weeks, Booster at term", "TT1 immediately, TT2 after 1 month, both must be given before 36 weeks", "TT Booster single dose is sufficient as she is primi"],
    answer: 0,
    explanation: "For an unimmunized primigravida, two doses of TT are given: TT1 as early as possible after confirmation of pregnancy, and TT2 four weeks after TT1, with TT2 ideally given before 36 weeks. There is no routine booster at term under this schedule for a first-time fully immunized woman."
  },
  {
    id: 7,
    question: "Recommended weight gain during pregnancy for a woman with normal pre-pregnancy BMI (18.5-24.9 kg/m2) as per IOM guidelines is:",
    options: ["5-9 kg", "7-11 kg", "11.5-16 kg", "14-20 kg"],
    answer: 2,
    explanation: "As per the Institute of Medicine (IOM) guidelines, women with normal pre-pregnancy BMI (18.5-24.9 kg/m2) are recommended to gain 11.5-16 kg during pregnancy. Underweight women should gain 12.5-18 kg, overweight women 7-11.5 kg, and obese women 5-9 kg."
  },
  {
    id: 8,
    question: "Which of the following is NOT a recognized danger sign during pregnancy that warrants immediate referral?",
    options: ["Severe headache with visual disturbances", "Decreased fetal movements", "Mild ankle edema in the third trimester", "Vaginal bleeding at any time"],
    answer: 2,
    explanation: "Mild dependent ankle edema in the third trimester is a normal physiological finding and is not a danger sign. Danger signs in pregnancy include severe headache with visual disturbances (suggestive of pre-eclampsia), decreased fetal movements, vaginal bleeding, fever, severe vomiting, and convulsions."
  },
  {
    id: 9,
    question: "The diagnostic criterion for gestational diabetes mellitus (GDM) using the DIPSI (Diabetes in Pregnancy Study group India) method is:",
    options: ["Fasting plasma glucose >= 92 mg/dL", "2-hour plasma glucose >= 140 mg/dL after 75g oral glucose load (non-fasting)", "2-hour plasma glucose >= 200 mg/dL after 75g oral glucose load", "Random plasma glucose >= 200 mg/dL with symptoms"],
    answer: 1,
    explanation: "The DIPSI method, recommended in India for GDM screening, uses a non-fasting 75g oral glucose load with a 2-hour plasma glucose cutoff of >= 140 mg/dL to diagnose GDM. This single-step method is practical for field settings as it does not require fasting."
  },
  {
    id: 10,
    question: "For pre-eclampsia screening during ANC, blood pressure is measured at every visit. Hypertension in pregnancy is defined as:",
    options: ["BP >= 130/85 mmHg on two occasions 4 hours apart", "BP >= 140/90 mmHg on two occasions 4 hours apart after 20 weeks of gestation", "BP >= 150/100 mmHg on a single reading after 20 weeks", "Diastolic BP > 90 mmHg on a single occasion at any gestational age"],
    answer: 1,
    explanation: "Hypertension in pregnancy (gestational hypertension/pre-eclampsia) is defined as BP >= 140/90 mmHg on two separate occasions at least 4 hours apart, after 20 weeks of gestation. Pre-eclampsia additionally requires proteinuria (>= 300 mg/24 hours or >= 1+ on dipstick) or end-organ dysfunction."
  },
  {
    id: 11,
    question: "Birth preparedness and complication readiness (BPCR) counseling is an integral part of ANC. Which of the following is a component of BPCR?",
    options: ["Identification of skilled birth attendant only", "Identification of delivery place, skilled birth attendant, transport, blood donor, and funds", "Only saving money for delivery", "Planning for contraception after delivery"],
    answer: 1,
    explanation: "Birth preparedness and complication readiness (BPCR) counseling involves: identifying the place of delivery, skilled birth attendant, transport arrangement, a compatible blood donor, and saving funds for emergencies. This multi-component approach ensures women and families are prepared for both normal delivery and unexpected complications."
  },
  {
    id: 12,
    question: "Under RMNCH+A, the ANC package includes 'Four ANC checkups.' Which visit includes fundal height measurement, assessment of fetal lie and presentation?",
    options: ["First ANC visit at < 12 weeks", "Second ANC visit at 14-26 weeks", "Third ANC visit at 28-34 weeks", "Fourth ANC visit at 36 weeks onwards"],
    answer: 3,
    explanation: "At the fourth ANC visit (36 weeks onwards), assessment of fetal presentation (cephalic/breech) and lie is critical to plan the mode of delivery. Fundal height measurement is done at all visits from mid-trimester, but assessment of fetal lie and presentation for delivery planning is particularly important at the fourth visit."
  },
  {
    id: 13,
    question: "A skilled birth attendant (SBA) as defined by WHO is a person who:",
    options: ["Has completed at least 10 years of formal schooling and trained in delivery", "Is proficient in the skills to manage normal deliveries and diagnose or refer obstetric complications, having been trained to proficiency", "Is a doctor with MBBS degree", "Is a traditional birth attendant trained in hygienic delivery practices"],
    answer: 1,
    explanation: "According to WHO, a skilled birth attendant (SBA) is 'an accredited health professional — such as a midwife, doctor or nurse — who has been educated and trained to proficiency in the skills needed to manage normal (uncomplicated) pregnancies, childbirth and the immediate postnatal period, and in the identification, management and referral of complications in women and newborns.' Traditional birth attendants (dais) are NOT classified as SBAs."
  },
  {
    id: 14,
    question: "The partograph is a graphic tool used to monitor labor. The 'alert line' on the partograph indicates:",
    options: ["Cervical dilatation of 1 cm/hour starting from 3 cm dilatation", "Rate of cervical dilatation expected in normal active labor (1 cm/hour) from 4 cm onwards", "The point beyond which augmentation of labor should be started immediately", "The time when oxytocin infusion must be started"],
    answer: 1,
    explanation: "The alert line on the WHO partograph represents the expected minimum rate of cervical dilatation of 1 cm/hour in the active phase of labor, starting from 4 cm cervical dilatation. The action line is plotted 4 hours to the right of the alert line; when cervical dilatation crosses the action line, active intervention (augmentation or caesarean) is warranted."
  },
  {
    id: 15,
    question: "Active management of the third stage of labor (AMTSL) includes all of the following EXCEPT:",
    options: ["Oxytocin 10 IU IM within 1 minute of delivery of baby", "Controlled cord traction (CCT)", "Uterine massage after delivery of placenta", "Routine manual removal of placenta"],
    answer: 3,
    explanation: "AMTSL consists of: (1) administration of a uterotonic (oxytocin 10 IU IM) within 1 minute of delivery of the baby, (2) controlled cord traction (Brandt-Andrews maneuver), and (3) uterine massage after delivery of the placenta. Routine manual removal of the placenta is NOT a component of AMTSL and carries risk of infection and hemorrhage."
  },
  {
    id: 16,
    question: "Basic Emergency Obstetric Care (BEmOC) includes 7 signal functions. Which of the following is a CEmOC (Comprehensive EmOC) function but NOT a BEmOC function?",
    options: ["Administer parenteral oxytocics", "Perform manual removal of placenta", "Perform assisted vaginal delivery (vacuum/forceps)", "Perform blood transfusion and caesarean section"],
    answer: 3,
    explanation: "BEmOC includes 7 signal functions: (1) administer parenteral antibiotics, (2) administer parenteral oxytocics, (3) administer parenteral anticonvulsants, (4) manual removal of placenta, (5) removal of retained products, (6) assisted vaginal delivery, (7) neonatal resuscitation. CEmOC includes all 7 BEmOC functions PLUS (8) blood transfusion and (9) caesarean section."
  },
  {
    id: 17,
    question: "The recommended postnatal care (PNC) schedule under RMNCH+A includes visits at which of the following time points?",
    options: ["24 hours, 48 hours, 7 days, 14 days, 28 days, 42 days", "Within 1 hour, 24 hours, 48 hours, 7 days, 28 days, 42 days", "6 hours, 24 hours, 72 hours, 7 days, 28 days, 42 days", "24 hours, 3 days, 7 days, 14 days, 21 days, 42 days"],
    answer: 2,
    explanation: "Under RMNCH+A, the postnatal care schedule recommends 6 visits: within 6 hours of delivery, at 24 hours, at 72 hours (3 days), at 7 days, at 28 days, and at 42 days. This schedule is designed to identify and manage complications in both mother and newborn during the critical postnatal period."
  },
  {
    id: 18,
    question: "Which of the following is a postnatal danger sign in a mother that requires IMMEDIATE referral?",
    options: ["Mild breast engorgement on day 3", "Lochia rubra for first 3 days", "Foul-smelling vaginal discharge with fever > 38 degrees C", "Uterine fundus at umbilicus level on day 1"],
    answer: 2,
    explanation: "Foul-smelling vaginal discharge accompanied by fever (> 38 degrees C) is a danger sign indicating puerperal sepsis, which requires immediate referral and antibiotic treatment. Other postnatal danger signs include heavy bleeding (soaking > 1 pad/hour), severe headache/fits (eclampsia), difficulty breathing, and severe abdominal pain."
  },
  {
    id: 19,
    question: "The most common cause of maternal mortality globally and in India is:",
    options: ["Sepsis", "Obstructed labor", "Postpartum hemorrhage (PPH)", "Hypertensive disorders of pregnancy"],
    answer: 2,
    explanation: "Postpartum hemorrhage (PPH) is the leading cause of maternal mortality globally, accounting for approximately 27% of maternal deaths. In India also, PPH is the leading direct cause of maternal death. Hypertensive disorders are the second most common cause."
  },
  {
    id: 20,
    question: "Postpartum family planning counseling should ideally be initiated:",
    options: ["Only at the 6-week postnatal visit", "During the third trimester ANC visits and continued during postnatal care", "Only after cessation of breastfeeding", "Only when the woman specifically asks for it"],
    answer: 1,
    explanation: "Postpartum family planning (PPFP) counseling should begin during the antenatal period (third trimester) and be reinforced at all postnatal contacts. This ensures informed decision-making. PPFP methods include LAM (Lactational Amenorrhea Method), IUCD (postpartum within 48 hours or after 6 weeks), OCP (progestin-only after 6 weeks if breastfeeding), and sterilization."
  },
  {
    id: 21,
    question: "Early initiation of breastfeeding (within 1 hour of birth) is recommended primarily because:",
    options: ["It prevents postpartum hemorrhage in the mother", "It provides colostrum rich in immunoglobulins (especially IgA) and promotes bonding, reducing neonatal mortality", "It helps the mother lose weight quickly", "It is easier when the mother is still numb from epidural anesthesia"],
    answer: 1,
    explanation: "Early initiation of breastfeeding within the first hour of birth is recommended because: (1) colostrum is rich in secretory IgA and other immunoprotective factors, (2) it stimulates oxytocin release helping uterine contraction and reducing PPH, (3) it promotes mother-infant bonding, and (4) it has been shown to reduce neonatal mortality by up to 22%. Both WHO and UNICEF strongly advocate this practice."
  },
  {
    id: 22,
    question: "Rooming-in, as promoted under the Baby-Friendly Hospital Initiative (BFHI), means:",
    options: ["The baby is kept in the nursery but brought to the mother for feeding every 3 hours", "The mother and baby remain together in the same room for 24 hours a day", "The father rooms in with the baby in a separate room", "The baby shares a room with other babies in a common ward"],
    answer: 1,
    explanation: "Rooming-in means allowing the mother and her newborn to remain together in the same room 24 hours a day. This is a core component of the Baby-Friendly Hospital Initiative (BFHI) and facilitates breastfeeding on demand, mother-infant bonding, and helps the mother learn newborn care."
  },
  {
    id: 23,
    question: "Maternal Death Review (MDR) at the facility level is conducted by:",
    options: ["Only the medical officer who attended the case", "A multidisciplinary team including obstetricians, anesthesiologists, nurses, and administrators", "The District Collector and health officials", "Only the State Health Department officials"],
    answer: 1,
    explanation: "Facility-based Maternal Death Review (FBMDR) is conducted by a multidisciplinary team at the facility including the obstetrician, anesthesiologist, nurses/midwives, medical officer, and administrator. The aim is to identify avoidable factors (delays in seeking care, reaching care, and receiving care) and implement corrective measures."
  },
  {
    id: 24,
    question: "The 'Three Delays Model' in maternal mortality refers to delays in:",
    options: ["First ANC, Second ANC, and Third ANC registration", "Deciding to seek care, reaching an appropriate facility, and receiving adequate care", "Diagnosis, treatment, and discharge", "Referral from ASHA, referral from PHC, and referral from CHC"],
    answer: 1,
    explanation: "The Three Delays Model (Thaddeus and Maine, 1994) identifies three phases of delay contributing to maternal mortality: (1) Delay in deciding to seek care (influenced by recognition of complication, financial, social, and cultural factors), (2) Delay in reaching an appropriate health facility (transport, distance), and (3) Delay in receiving adequate care at the facility (staff, drugs, equipment)."
  },
  {
    id: 25,
    question: "As per NFHS-5 (2019-21), the Contraceptive Prevalence Rate (CPR) for modern methods among currently married women in India is approximately:",
    options: ["37%", "57%", "67%", "77%"],
    answer: 1,
    explanation: "According to NFHS-5 (2019-21), the total CPR in India is 67% and the modern CPR is approximately 56.5% (approximately 57%) among currently married women. Female sterilization remains the most commonly used modern method (37.9%)."
  },
  {
    id: 26,
    question: "Unmet need for family planning is defined as the proportion of women who:",
    options: ["Are not currently using any contraceptive method", "Are fecund, sexually active, do not want a child soon or at all, but are not using any method of contraception", "Have not achieved their desired family size", "Are using a traditional contraceptive method instead of a modern one"],
    answer: 1,
    explanation: "Unmet need for family planning refers to fecund women (not pregnant, not infertile) who are sexually active (married or in union), do not want to become pregnant (want to space or limit births), but are not using any method of contraception. As per NFHS-5, unmet need in India is approximately 9.4%."
  },
  {
    id: 27,
    question: "The Eligible Couple Register (ECR) maintained at the sub-center level records:",
    options: ["All couples in the village regardless of age", "All married couples where the wife is in the reproductive age group (15-45 years) and is not permanently sterile", "Only couples who have never used contraception", "Only couples with two or more children"],
    answer: 1,
    explanation: "The Eligible Couple Register (ECR) is a village-level register maintained at the sub-center that records all married couples where the wife is in the reproductive age group (15-45 years) and is not permanently protected (not sterilized). It is used to provide targeted family planning services and is the basis for family planning target calculation."
  },
  {
    id: 28,
    question: "The injectable contraceptive Depot Medroxyprogesterone Acetate (DMPA) available under the government family planning program in India is given at what interval?",
    options: ["Every month", "Every 2 months", "Every 3 months", "Every 6 months"],
    answer: 2,
    explanation: "DMPA (Medroxyprogesterone acetate 150 mg, brand name Antara) is given as an intramuscular injection every 3 months (13 weeks). It was introduced under the National Family Planning Programme in India in 2016-17 as an injectable spacing method, expanding the basket of choice."
  },
  {
    id: 29,
    question: "The CuT 380A IUCD provides protection against pregnancy for:",
    options: ["3 years", "5 years", "7 years", "10 years"],
    answer: 3,
    explanation: "The CuT 380A is a copper-bearing intrauterine contraceptive device (IUCD) that provides effective contraception for up to 10 years. It is the most widely used IUCD in the government family planning program in India. CuT 375 provides protection for 5 years, and the Levonorgestrel-releasing IUS (LNG-IUS/Mirena) provides protection for 5 years."
  },
  {
    id: 30,
    question: "Centchroman (Ormeloxifene), marketed as Saheli or Chhaya, is taken as:",
    options: ["Daily pill throughout the cycle", "Once weekly for the first 3 months, then once every 2 weeks", "Once daily for 5 days at the start of each menstrual cycle", "Twice weekly throughout use"],
    answer: 1,
    explanation: "Centchroman (Ormeloxifene/Saheli/Chhaya) is a non-steroidal selective estrogen receptor modulator (SERM). The regimen is: once weekly for the first 3 months, then once every 2 weeks (fortnightly) thereafter. It is available in the government program and is the only non-hormonal oral contraceptive pill available."
  },
  {
    id: 31,
    question: "Emergency contraception using Levonorgestrel (ECPs) is most effective when taken:",
    options: ["Within 24 hours of unprotected intercourse", "Within 72 hours of unprotected intercourse", "Within 120 hours of unprotected intercourse", "Anytime within 7 days of unprotected intercourse"],
    answer: 1,
    explanation: "Levonorgestrel ECPs (1.5 mg single dose or 0.75 mg x 2 doses 12 hours apart) are most effective when taken within 72 hours (3 days) of unprotected intercourse, with efficacy declining over time. The copper IUCD is the most effective emergency contraceptive method and can be inserted up to 5 days (120 hours) after unprotected intercourse."
  },
  {
    id: 32,
    question: "The Medical Termination of Pregnancy (MTP) Act 2021 amendment extended the upper gestational limit for abortion to 24 weeks for special categories of women. Which of the following is NOT a special category under this amendment?",
    options: ["Survivors of sexual assault or rape", "Minors", "Women with change in marital status during pregnancy (widowhood or divorce)", "All women on request regardless of reason"],
    answer: 3,
    explanation: "The MTP (Amendment) Act 2021 extended the upper gestational limit from 20 to 24 weeks for special categories including: survivors of sexual assault/rape, minors, change in marital status (divorce/widowhood), women with disabilities, and women with fetal anomalies. However, abortion on request for all women without specific reasons is NOT permitted beyond 20 weeks under the Act."
  },
  {
    id: 33,
    question: "Under the MTP Act, for termination of pregnancy up to 20 weeks gestation, the opinion required is:",
    options: ["Opinion of one registered medical practitioner for up to 12 weeks, two practitioners for 12-20 weeks", "Opinion of two registered medical practitioners for all cases up to 20 weeks", "Opinion of one registered medical practitioner for up to 20 weeks after the 2021 amendment", "No medical opinion required for self-managed abortion up to 9 weeks"],
    answer: 0,
    explanation: "As per the MTP (Amendment) Act 2021: (1) Up to 20 weeks - opinion of ONE registered medical practitioner is sufficient (changed from previous law where 2 opinions were needed for 12-20 weeks). (2) 20-24 weeks - opinion of TWO registered medical practitioners is required (for special categories). (3) Beyond 24 weeks - Medical Board at the State level for substantial fetal abnormalities."
  },
  {
    id: 34,
    question: "Mission Parivar Vikas is a government initiative focused on:",
    options: ["Reducing infant mortality in all districts of India", "Accelerating family planning services in 146 high-fertility districts across 7 states with TFR > 3", "Providing maternal nutrition supplements to pregnant women", "Increasing institutional delivery rates in rural areas"],
    answer: 1,
    explanation: "Mission Parivar Vikas (MPV) was launched in 2016 by the Ministry of Health and Family Welfare to accelerate access to contraceptives and family planning services in 146 high-fertility districts across 7 high-focus states (UP, Bihar, Rajasthan, MP, Chhattisgarh, Jharkhand, and Assam) where the Total Fertility Rate (TFR) is greater than 3."
  },
  {
    id: 35,
    question: "The 'basket of choice' approach in family planning means:",
    options: ["Promoting only permanent methods like sterilization", "Providing a range of contraceptive options to clients so they can choose based on their individual needs and preferences", "Distributing condoms and OCP through ASHAs only", "Limiting contraceptive choices to 3 government-approved methods"],
    answer: 1,
    explanation: "The 'basket of choice' approach ensures that a variety of contraceptive methods (spacing methods: condoms, OCPs, IUCD, injectables, LAM, EC; and limiting methods: tubectomy, vasectomy) are available at all health facilities, and clients are counseled to make an informed voluntary choice based on their needs, preferences, and medical eligibility."
  },
  {
    id: 36,
    question: "Laproscopic tubectomy (female sterilization) in India is recommended to be performed within what period postpartum for the 'interval' procedure?",
    options: ["Within 7 days postpartum", "After 6 weeks (42 days) postpartum", "After 3 months postpartum", "After cessation of breastfeeding only"],
    answer: 1,
    explanation: "Interval tubectomy (mini-laparotomy or laparoscopic) is performed after 6 weeks (42 days) postpartum when the uterus has involuted and there are no postpartum complications. Postpartum tubectomy can be performed within 48 hours of delivery (puerperal sterilization) or after 6 weeks. Laparoscopic sterilization should not be performed within 7 days to 6 weeks postpartum."
  },
  {
    id: 37,
    question: "Non-scalpel vasectomy (NSV) compared to conventional vasectomy has the advantage of:",
    options: ["Higher efficacy in preventing pregnancy", "Lower complication rates, faster healing, no suturing needed, and shorter procedure time", "It is reversible unlike conventional vasectomy", "It can be performed without local anesthesia"],
    answer: 1,
    explanation: "Non-scalpel vasectomy (NSV) uses a small puncture instead of a scalpel incision to deliver the vas deferens. Advantages over conventional vasectomy include: lower complication rates (hematoma, infection), faster healing, no suture required, shorter operative time, less pain, and quicker return to normal activities. Both procedures have similar efficacy."
  },
  {
    id: 38,
    question: "Janani Suraksha Yojana (JSY) was launched in which year and is a modification of which previous scheme?",
    options: ["2003, National Maternity Benefit Scheme", "2005, National Maternity Benefit Scheme", "2005, Reproductive and Child Health Programme", "2007, Pradhan Mantri Matru Vandana Yojana"],
    answer: 1,
    explanation: "Janani Suraksha Yojana (JSY) was launched in April 2005 as a modification of the National Maternity Benefit Scheme (NMBS). It is a conditional cash transfer scheme to promote institutional deliveries and reduce maternal and neonatal mortality, implemented under the National Health Mission."
  },
  {
    id: 39,
    question: "Under JSY, in a Low Performing State (LPS), the cash incentive for a BPL woman delivering in a government institution is:",
    options: ["Rs. 700 in rural areas, Rs. 600 in urban areas", "Rs. 1400 in rural areas, Rs. 1000 in urban areas", "Rs. 1000 in rural areas, Rs. 600 in urban areas", "Rs. 2000 in rural areas, Rs. 1500 in urban areas"],
    answer: 1,
    explanation: "Under JSY in Low Performing States (LPS - 10 states including UP, Bihar, Rajasthan, MP, Jharkhand, Chhattisgarh, Orissa, J&K, Uttarakhand, Assam), the cash benefit is Rs. 1400 for BPL women delivering in government institutions in rural areas, and Rs. 1000 in urban areas. In High Performing States (HPS), the benefit is Rs. 700 (rural) and Rs. 600 (urban)."
  },
  {
    id: 40,
    question: "Janani Shishu Suraksha Karyakram (JSSK) entitles pregnant women and sick newborns to free services. Which of the following is NOT an entitlement under JSSK for pregnant women?",
    options: ["Free and cashless delivery including caesarean section", "Free drugs, consumables, and diagnostics", "Free diet during hospital stay (up to 3 days for normal delivery, 7 days for C-section)", "Free health insurance coverage up to Rs. 5 lakh"],
    answer: 3,
    explanation: "JSSK (launched June 2011) entitlements for pregnant women include: free normal and operative (C-section) delivery, free drugs and consumables, free diagnostics, free diet (3 days for normal delivery, 7 days for C-section), free blood transfusion, free referral transport (home to facility and between facilities), and exemption from user charges. Health insurance coverage up to Rs. 5 lakh is under PM-JAY (Ayushman Bharat), not JSSK."
  },
  {
    id: 41,
    question: "LaQshya (Labour Room Quality Improvement Initiative) aims to improve quality of care in labour rooms and maternity operation theatres. LaQshya certification is awarded at which score on assessment?",
    options: ["Score >= 50% - Bronze, >= 70% - Silver, >= 90% - Gold", "Score >= 70% - Bronze, >= 80% - Silver, >= 90% - Gold", "Score >= 60% for certification, one level only", "Score >= 80% - National Certification, >= 90% - State Certification"],
    answer: 1,
    explanation: "LaQshya (launched 2017) awards certification based on assessment scores: >= 70% score - Bronze certification, >= 80% - Silver certification, >= 90% - Gold certification (National LaQshya certification). The initiative focuses on improving quality of care during childbirth in labour rooms and maternity OTs of government facilities."
  },
  {
    id: 42,
    question: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) provides guaranteed ANC checkup to pregnant women on the:",
    options: ["1st of every month", "9th of every month", "15th of every month", "Last Saturday of every month"],
    answer: 1,
    explanation: "PMSMA (launched June 2016) provides pregnant women guaranteed, comprehensive, and quality ANC on the 9th of every month at government health facilities. The checkup is conducted by OBGY specialists/physicians and includes clinical examination, essential investigations, and IFA/calcium supplementation. High-risk pregnancies are identified and tracked with a red sticker system."
  },
  {
    id: 43,
    question: "Surakshit Matritva Aashwasan (SUMAN) initiative was launched to provide:",
    options: ["Free nutrition supplements to all pregnant women", "Assured, dignified, respectful, and quality healthcare at no cost to all pregnant women and newborns visiting government facilities", "Home-based newborn care by ASHAs for all deliveries", "Emergency obstetric care only at district hospitals"],
    answer: 1,
    explanation: "Surakshit Matritva Aashwasan (SUMAN) was launched in October 2019 to provide assured, dignified, respectful, and quality healthcare at zero cost and zero denial to every woman and newborn visiting public health facilities. It encompasses entitlements for ANC, delivery care, PNC, and newborn care, and makes denial of services a punishable offense."
  },
  {
    id: 44,
    question: "Maternal Death Surveillance and Response (MDSR) system in India is characterized by all of the following EXCEPT:",
    options: ["Immediate notification of all maternal deaths", "Community-based verbal autopsy for home deaths", "Criminal prosecution of the attending physician for every maternal death", "Facility-based review of all institutional maternal deaths"],
    answer: 2,
    explanation: "MDSR is a continuous cycle of identification, notification, review, and response to maternal deaths. It includes: immediate notification of all maternal deaths (within 24 hours) from facility and community, verbal autopsy for community/home deaths, facility-based death reviews, analysis to identify avoidable factors, and implementation of corrective actions. MDSR is a quality improvement process, NOT a punitive/criminal process."
  },
  {
    id: 45,
    question: "A 'maternal near-miss' case is defined as:",
    options: ["A pregnant woman with severe pre-eclampsia who is admitted to hospital", "A woman who nearly died but survived a severe life-threatening complication during pregnancy, childbirth, or within 42 days of termination", "A woman who had a stillbirth after a complicated delivery", "A maternal death that was avoidable with timely intervention"],
    answer: 1,
    explanation: "A maternal near-miss (MNM) case is a woman who nearly died but survived a severe life-threatening complication that occurred during pregnancy, childbirth, or within 42 days of termination of pregnancy. Near-miss review complements maternal death review and provides larger numbers for analysis of avoidable factors in severe maternal morbidity."
  },
  {
    id: 46,
    question: "The WHO quality of care framework for maternal and newborn health identifies which of the following domains?",
    options: ["Only provision of care and experience of care", "Provision of care (evidence-based practices, actionable information, effective resources) and experience of care (respectful care, effective communication, emotional support)", "Only technical competence of healthcare providers", "Only infrastructure and equipment availability"],
    answer: 1,
    explanation: "The WHO quality of care (QoC) framework for maternal and newborn health has two main domains: (1) Provision of care - including evidence-based practices for routine and emergency care, actionable information systems, and availability of effective resources (competent staff, essential medicines, equipment); and (2) Experience of care - including respectful and dignified care, effective communication and counseling, and emotional support."
  },
  {
    id: 47,
    question: "Respectful Maternity Care (RMC) addresses mistreatment of women during facility-based childbirth. Which of the following is a form of mistreatment documented in the literature?",
    options: ["Allowing the woman to choose her delivery position", "Physical abuse, non-consented care, non-confidential care, non-dignified care, discrimination, abandonment, and detention in facilities", "Providing pain relief during labor", "Encouraging the presence of a companion during delivery"],
    answer: 1,
    explanation: "Respectful Maternity Care (RMC) addresses seven categories of mistreatment of women during childbirth: physical abuse, sexual abuse, verbal abuse, non-consented care, non-confidential care, non-dignified care (including neglect), discrimination (based on ethnicity, age, status), abandonment of care, and detention in facilities. RMC is a core component of quality of care for women during childbirth."
  },
  {
    id: 48,
    question: "The ASHA incentive under JSY for promoting institutional delivery in a Low Performing State (LPS) is:",
    options: ["Rs. 200 per case", "Rs. 300 per case in urban areas, Rs. 600 per case in rural areas", "Rs. 600 per case regardless of rural or urban", "Rs. 1000 per case"],
    answer: 1,
    explanation: "Under JSY in Low Performing States (LPS), ASHAs receive an incentive of Rs. 600 per case for facilitating institutional deliveries in rural areas, and Rs. 200 per case in urban areas. In High Performing States (HPS), ASHAs receive Rs. 300 per case in rural areas. The incentive is in addition to what the beneficiary receives."
  },
  {
    id: 49,
    question: "The Health Management Information System (HMIS) maternal health indicator 'Maternal Mortality Ratio (MMR)' is defined as:",
    options: ["Number of maternal deaths per 1000 live births", "Number of maternal deaths per 100,000 live births in a given period", "Number of maternal deaths per 1000 women of reproductive age", "Number of maternal deaths per 100,000 total population"],
    answer: 1,
    explanation: "Maternal Mortality Ratio (MMR) is defined as the number of maternal deaths (deaths of women during pregnancy or within 42 days of termination of pregnancy from causes related to or aggravated by the pregnancy) per 100,000 live births in a given period. India's MMR as per the Sample Registration System (SRS) 2018-20 is 97 per 100,000 live births."
  },
  {
    id: 50,
    question: "Pradhan Mantri Matru Vandana Yojana (PMMVY), a maternity benefit scheme, provides a cash benefit of Rs. 5000 to eligible beneficiaries. Eligibility includes:",
    options: ["All pregnant women for all pregnancies", "Pregnant and lactating women for the first living child, excluding regular central/state government employees", "Only BPL women for the first two pregnancies", "All women below 35 years of age for first pregnancy only"],
    answer: 1,
    explanation: "PMMVY (earlier Indira Gandhi Matritva Sahyog Yojana) provides a cash benefit of Rs. 5000 (in 3 installments) to pregnant and lactating women for the first living child. Eligibility: all pregnant and lactating women EXCEPT those who are regular employees of central/state government or PSUs who already receive paid maternity leave benefits. The benefit is for the first living child only (since 2017 amendment)."
  },
];

export default questions;
