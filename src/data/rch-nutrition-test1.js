const questions = [
  {
    id: 1,
    question: "Maternal Mortality Ratio (MMR) is defined as the number of maternal deaths per:",
    options: [
      "1,00,000 live births",
      "1,00,000 total births",
      "1,00,000 women of reproductive age",
      "10,000 live births"
    ],
    answer: 0,
    explanation: "MMR is defined as the number of maternal deaths during a given time period per 100,000 live births during the same time period. It reflects the obstetric risk associated with each pregnancy, not the frequency of pregnancy."
  },
  {
    id: 2,
    question: "As per the Sample Registration System (SRS) 2018-20, the Maternal Mortality Ratio (MMR) of India is:",
    options: [
      "130 per 1,00,000 live births",
      "97 per 1,00,000 live births",
      "113 per 1,00,000 live births",
      "103 per 1,00,000 live births"
    ],
    answer: 1,
    explanation: "According to SRS 2018-20, India's MMR is 97 per 1,00,000 live births, a significant decline from 130 (SRS 2014-16) and 113 (SRS 2016-18). The SDG target is to reduce MMR to less than 70 per 1,00,000 live births by 2030."
  },
  {
    id: 3,
    question: "The leading direct cause of maternal mortality globally and in India is:",
    options: [
      "Sepsis",
      "Eclampsia",
      "Hemorrhage (obstetric hemorrhage)",
      "Obstructed labor"
    ],
    answer: 2,
    explanation: "Obstetric hemorrhage (postpartum hemorrhage being most common) is the leading direct cause of maternal deaths both globally and in India, accounting for approximately 27% of global maternal deaths. In India, hemorrhage contributes significantly along with anemia."
  },
  {
    id: 4,
    question: "The 'Three Delays Model' for maternal mortality was proposed by:",
    options: [
      "WHO Expert Committee, 1994",
      "Thaddeus and Maine, 1994",
      "McCarthy and Maine, 1992",
      "Ronsmans and Graham, 2006"
    ],
    answer: 1,
    explanation: "The Three Delays Model was proposed by Thaddeus and Maine in 1994. It identifies three phases of delay contributing to maternal death: (1) delay in deciding to seek care, (2) delay in reaching care, and (3) delay in receiving adequate care at facility."
  },
  {
    id: 5,
    question: "Which of the following is NOT a component of the 'Safe Motherhood Initiative' launched in Nairobi in 1987?",
    options: [
      "Family planning",
      "Antenatal care",
      "Clean/safe delivery",
      "Universal institutional delivery mandate"
    ],
    answer: 3,
    explanation: "The Safe Motherhood Initiative (1987, Nairobi) focused on family planning, antenatal care, clean and safe delivery, essential obstetric care, and postnatal care. There was no 'universal institutional delivery mandate' as a formal component; this is a policy goal, not a component of the initiative."
  },
  {
    id: 6,
    question: "The WHO 2016 recommendation on antenatal care contacts advocates for a minimum of how many contacts for a positive pregnancy experience?",
    options: [
      "4 focused antenatal visits",
      "6 antenatal contacts",
      "8 antenatal contacts",
      "12 antenatal contacts"
    ],
    answer: 2,
    explanation: "WHO 2016 ANC guidelines recommend a minimum of 8 antenatal contacts (replacing the previous 4-visit focused ANC model). The shift from 'visits' to 'contacts' emphasizes that each interaction should be meaningful. India's national program has adopted this 8-contact model."
  },
  {
    id: 7,
    question: "According to NFHS-5 (2019-21), the percentage of institutional deliveries in India is approximately:",
    options: [
      "69%",
      "79%",
      "89%",
      "95%"
    ],
    answer: 2,
    explanation: "NFHS-5 (2019-21) data shows that approximately 88.6% (approximately 89%) of deliveries in India are institutional deliveries, a significant increase from 78.9% in NFHS-4 (2015-16). This improvement is attributed to JSY and other government incentive programs."
  },
  {
    id: 8,
    question: "Comprehensive Emergency Obstetric Care (CEmOC) includes all of the following EXCEPT:",
    options: [
      "Caesarean section",
      "Blood transfusion",
      "Manual removal of placenta",
      "Partograph use"
    ],
    answer: 3,
    explanation: "CEmOC includes all 7 Basic EmOC signal functions (parenteral antibiotics, oxytocics, anticonvulsants, manual removal of placenta, removal of retained products, assisted vaginal delivery, neonatal resuscitation) PLUS caesarean section and blood transfusion. Partograph use is a monitoring tool, not a CEmOC signal function."
  },
  {
    id: 9,
    question: "A Skilled Birth Attendant (SBA) is best defined as:",
    options: [
      "Any health worker trained to conduct deliveries at home",
      "Accredited health professional trained in midwifery skills including EmOC and the ability to supervise normal deliveries and diagnose complications",
      "ASHA worker trained in safe delivery practices under the Navjaat Shishu Suraksha Karyakram",
      "Nurse-midwife with 3 years of obstetric experience"
    ],
    answer: 1,
    explanation: "A Skilled Birth Attendant (SBA) as defined by WHO/ICM/FIGO is an accredited health professional (midwife, doctor, or nurse) educated and trained to proficiency in the skills needed to manage normal pregnancies, childbirth, and the immediate postnatal period, and in the identification, management, and referral of complications in women and newborns."
  },
  {
    id: 10,
    question: "Maternal Death Surveillance and Response (MDSR) in India requires that all maternal deaths should be notified within:",
    options: [
      "24 hours",
      "48 hours",
      "72 hours",
      "7 days"
    ],
    answer: 0,
    explanation: "Under the MDSR system in India, all maternal deaths (both institutional and community) must be notified within 24 hours of occurrence. The review must be completed within a stipulated time to identify avoidable causes and implement corrective actions."
  },
  {
    id: 11,
    question: "The concept of 'Maternal Near Miss' is used to identify women who:",
    options: [
      "Died due to direct obstetric causes",
      "Survived life-threatening complications during pregnancy, childbirth, or within 42 days of termination of pregnancy",
      "Were at high risk but delivered normally without complications",
      "Had eclampsia managed successfully at primary level"
    ],
    answer: 1,
    explanation: "WHO defines a 'Maternal Near Miss' as a woman who nearly died but survived a severe life-threatening complication during pregnancy, childbirth, or within 42 days of termination of pregnancy. Studying near-miss cases helps understand the continuum between normal pregnancy and maternal death."
  },
  {
    id: 12,
    question: "Which condition is classified as an indirect cause of maternal mortality?",
    options: [
      "Postpartum hemorrhage",
      "Eclampsia",
      "Sepsis following delivery",
      "Anemia complicating pregnancy"
    ],
    answer: 3,
    explanation: "Indirect causes of maternal mortality are pre-existing diseases or conditions that develop during pregnancy (not due to direct obstetric causes) but are aggravated by the physiologic effects of pregnancy. Anemia complicating pregnancy is an indirect cause. Postpartum hemorrhage, eclampsia, and puerperal sepsis are direct obstetric causes."
  },
  {
    id: 13,
    question: "Infant Mortality Rate (IMR) is defined as the number of deaths of infants under 1 year per:",
    options: [
      "1,000 total births",
      "1,000 live births",
      "1,00,000 live births",
      "1,000 mid-year population"
    ],
    answer: 1,
    explanation: "IMR is the number of deaths of infants (under 1 year of age) per 1,000 live births in a given year. It is one of the most sensitive indicators of socioeconomic development and quality of health services."
  },
  {
    id: 14,
    question: "As per SRS 2020, the Infant Mortality Rate (IMR) of India is:",
    options: [
      "28 per 1,000 live births",
      "35 per 1,000 live births",
      "32 per 1,000 live births",
      "40 per 1,000 live births"
    ],
    answer: 0,
    explanation: "As per SRS 2020, India's IMR is 28 per 1,000 live births (SRS Bulletin 2020). This marks a consistent decline from 37 (SRS 2015) and 32 (SRS 2018). The SDG target is to reduce IMR to 12 per 1,000 live births by 2030."
  },
  {
    id: 15,
    question: "Neonatal Mortality Rate (NMR) refers to deaths in the first:",
    options: [
      "7 days of life per 1,000 live births",
      "28 days of life per 1,000 live births",
      "28 days of life per 1,000 total births",
      "42 days of life per 1,000 live births"
    ],
    answer: 1,
    explanation: "NMR is the number of deaths during the first 28 completed days of life per 1,000 live births. Early NMR covers 0-7 days and late NMR covers 7-28 days. India's NMR as per SRS 2020 is 20 per 1,000 live births."
  },
  {
    id: 16,
    question: "The most common cause of neonatal mortality in India is:",
    options: [
      "Birth asphyxia",
      "Neonatal sepsis",
      "Prematurity and low birth weight",
      "Congenital malformations"
    ],
    answer: 2,
    explanation: "Prematurity and low birth weight is the leading cause of neonatal mortality in India, contributing to approximately 35-40% of neonatal deaths. It is followed by birth asphyxia and neonatal infections/sepsis. This aligns with global trends where prematurity is the number one killer of newborns."
  },
  {
    id: 17,
    question: "Under-5 Mortality Rate (U5MR) as per NFHS-5 (2019-21) in India is:",
    options: [
      "42 per 1,000 live births",
      "32 per 1,000 live births",
      "50 per 1,000 live births",
      "28 per 1,000 live births"
    ],
    answer: 0,
    explanation: "NFHS-5 (2019-21) reports India's U5MR as 41.9 (approximately 42) per 1,000 live births, declining from 49.7 in NFHS-4. The SDG target is to reduce U5MR to at least 25 per 1,000 live births by 2030."
  },
  {
    id: 18,
    question: "The IMNCI (Integrated Management of Neonatal and Childhood Illness) strategy in India was adapted from which global strategy?",
    options: [
      "WHO-UNICEF IMCI strategy",
      "Alma Ata Declaration",
      "Child Survival Strategy WHO 1983",
      "GOBI-FFF strategy"
    ],
    answer: 0,
    explanation: "IMNCI is the Indian adaptation of the WHO-UNICEF IMCI (Integrated Management of Childhood Illness) strategy. India added 'N' for Neonates, extending the approach to cover newborns (0-2 months) in addition to children aged 2 months to 5 years, reflecting the high burden of neonatal mortality."
  },
  {
    id: 19,
    question: "Essential Newborn Care (ENC) includes all of the following EXCEPT:",
    options: [
      "Immediate drying and wrapping to provide warmth",
      "Delayed cord clamping (at least 1 minute after birth)",
      "Immediate bathing within 1 hour of birth",
      "Initiation of breastfeeding within 1 hour of birth"
    ],
    answer: 2,
    explanation: "Essential Newborn Care includes: drying and warming, delayed cord clamping, skin-to-skin contact, early breastfeeding initiation within 1 hour, clean cord care, eye care, and Vitamin K. Immediate bathing is NOT recommended; WHO advises delaying the first bath for at least 24 hours to prevent hypothermia and maintain vernix protection."
  },
  {
    id: 20,
    question: "Kangaroo Mother Care (KMC) is recommended for newborns with birth weight:",
    options: [
      "Less than 3 kg",
      "Less than 2.5 kg (low birth weight)",
      "Less than 2 kg, or stable preterm infants",
      "Only for infants weighing less than 1.5 kg"
    ],
    answer: 2,
    explanation: "KMC is primarily recommended for stable low birth weight newborns, particularly those weighing less than 2000 grams (2 kg) and stable preterm infants. It involves continuous skin-to-skin contact between mother and newborn, exclusive breastfeeding, and early discharge from hospital with follow-up. WHO 2022 guidelines also recommend KMC starting immediately after birth."
  },
  {
    id: 21,
    question: "The FBNC (Facility Based Newborn Care) model in India designates care of sick newborns at the district hospital level through:",
    options: [
      "Newborn Stabilization Unit (NBSU)",
      "Special Newborn Care Unit (SNCU)",
      "Sick Newborn Care Unit (SiCNU)",
      "Neonatal Intensive Care Unit (NICU)"
    ],
    answer: 1,
    explanation: "Under FBNC, the three levels of newborn care are: (1) Newborn corners at all delivery points for basic care, (2) Newborn Stabilization Units (NBSU) at FRUs/CHCs for moderately sick newborns, and (3) Special Newborn Care Units (SNCU) at district hospitals for critically ill newborns. SNCU is the highest level in the public sector hierarchy."
  },
  {
    id: 22,
    question: "Under the Home-Based Newborn Care (HBNC) program in India, the ASHA conducts postnatal home visits. The schedule includes visits on day:",
    options: [
      "1, 3, 7, 14, 28",
      "1, 2, 3, 7, 14, 21, 28",
      "3, 7, 14, 28, 42",
      "1, 3, 5, 7, 14"
    ],
    answer: 1,
    explanation: "Under HBNC, ASHA conducts 7 postnatal home visits on days 1, 2, 3, 7, 14, 21, and 28 after birth. For home deliveries, an additional visit on the day of birth is recommended. The HBNC program was later extended as HBYC (Home-Based Young Child Care) up to 15 months."
  },
  {
    id: 23,
    question: "WHO and UNICEF recommend exclusive breastfeeding for how long?",
    options: [
      "3 months",
      "4 months",
      "6 months",
      "1 year"
    ],
    answer: 2,
    explanation: "WHO and UNICEF recommend exclusive breastfeeding for the first 6 months of life. After 6 months, complementary foods should be introduced while continuing breastfeeding. Breastfeeding should continue up to 2 years of age or beyond alongside appropriate complementary foods."
  },
  {
    id: 24,
    question: "Which among the following is the most common cause of under-5 mortality globally?",
    options: [
      "Diarrhea",
      "Malaria",
      "Pneumonia (lower respiratory tract infections)",
      "Malnutrition"
    ],
    answer: 2,
    explanation: "Pneumonia (lower respiratory tract infections) is the leading infectious cause of under-5 mortality globally, accounting for approximately 15% of under-5 deaths. While malnutrition is an underlying factor in many deaths, as a direct cause, pneumonia ranks highest. Diarrhea is second, followed by malaria in high-burden regions."
  },
  {
    id: 25,
    question: "Underweight in children is defined as weight-for-age Z-score (WAZ):",
    options: [
      "Less than -1 SD",
      "Less than -2 SD",
      "Less than -3 SD",
      "Less than -1.5 SD"
    ],
    answer: 1,
    explanation: "Underweight is defined as weight-for-age Z-score (WAZ) < -2 SD from the median of the WHO Child Growth Standards. WAZ < -3 SD is severe underweight. Underweight is a composite measure reflecting both stunting and wasting."
  },
  {
    id: 26,
    question: "Stunting in children is defined as:",
    options: [
      "Weight-for-height Z-score < -2 SD",
      "Height-for-age Z-score < -2 SD",
      "Weight-for-age Z-score < -2 SD",
      "BMI-for-age Z-score < -2 SD"
    ],
    answer: 1,
    explanation: "Stunting is defined as height-for-age Z-score (HAZ) < -2 SD from the median of the WHO Child Growth Standards. It reflects chronic, cumulative nutritional deficiency and is an indicator of long-term undernourishment. It is irreversible after 2 years of age (first 1000 days window)."
  },
  {
    id: 27,
    question: "Severe Acute Malnutrition (SAM) in children 6-59 months is diagnosed by MUAC cut-off of:",
    options: [
      "Less than 12.5 cm",
      "Less than 11.5 cm",
      "Less than 13.5 cm",
      "Less than 10.5 cm"
    ],
    answer: 1,
    explanation: "SAM is diagnosed when MUAC < 11.5 cm in children 6-59 months, OR weight-for-height Z-score (WHZ) < -3 SD, OR bilateral pitting edema. MUAC between 11.5-12.5 cm indicates Moderate Acute Malnutrition (MAM). MUAC < 11.5 cm is the most commonly used community-level diagnostic criterion."
  },
  {
    id: 28,
    question: "Wasting in children is defined as:",
    options: [
      "Height-for-age Z-score < -2 SD",
      "Weight-for-age Z-score < -2 SD",
      "Weight-for-height Z-score < -2 SD",
      "MUAC < 12.5 cm in children under 5 years"
    ],
    answer: 2,
    explanation: "Wasting (acute malnutrition) is defined as weight-for-height Z-score (WHZ) < -2 SD. It represents recent and severe weight loss and is associated with high mortality risk. WHZ < -3 SD is severe wasting. Wasting is often seasonal and can be reversed with appropriate nutritional support."
  },
  {
    id: 29,
    question: "In Gomez classification of malnutrition, Grade III (severe) malnutrition is defined as weight for age less than:",
    options: [
      "60% of expected",
      "75% of expected",
      "80% of expected",
      "70% of expected"
    ],
    answer: 0,
    explanation: "Gomez classification (1956) uses weight-for-age as percentage of expected (Harvard standards): Grade I (mild) = 75-90%, Grade II (moderate) = 60-74%, Grade III (severe) = < 60% of expected weight-for-age. This was one of the earliest classification systems for PEM."
  },
  {
    id: 30,
    question: "Waterlow classification of malnutrition uses which two parameters?",
    options: [
      "Weight-for-age and height-for-age",
      "Weight-for-height (wasting) and height-for-age (stunting)",
      "MUAC and weight-for-age",
      "BMI-for-age and height-for-age"
    ],
    answer: 1,
    explanation: "Waterlow classification (1972) uses two parameters: (1) Weight-for-height to assess wasting (acute malnutrition) - normal >90%, mild 80-90%, moderate 70-80%, severe <70%; and (2) Height-for-age to assess stunting (chronic malnutrition) - normal >95%, mild 90-95%, moderate 85-90%, severe <85%."
  },
  {
    id: 31,
    question: "The MUAC cutoff used to diagnose Moderate Acute Malnutrition (MAM) in children 6-59 months is:",
    options: [
      "11.5 to 12.5 cm",
      "12.5 to 13.5 cm",
      "11.5 to 13.5 cm",
      "10.5 to 11.5 cm"
    ],
    answer: 1,
    explanation: "MAM in children 6-59 months is defined as MUAC between 12.5 cm and < 13.5 cm (or WHZ between -3 and < -2 SD without edema). SAM is MUAC < 11.5 cm. Children with MUAC 12.5-13.5 cm are at-risk/MAM category requiring supplementary feeding programs."
  },
  {
    id: 32,
    question: "For screening of malnutrition in pregnant women, the MUAC cutoff indicating malnutrition is:",
    options: [
      "Less than 18.5 cm",
      "Less than 21.0 cm",
      "Less than 23.0 cm",
      "Less than 25.0 cm"
    ],
    answer: 2,
    explanation: "In pregnant women, MUAC < 23 cm is used as a cutoff for identifying malnutrition/nutritional risk. Some guidelines use < 22.0 cm or < 21.0 cm for severe malnutrition. WHO and most national programs use MUAC < 23 cm as the threshold for nutritional support in pregnant women."
  },
  {
    id: 33,
    question: "Kwashiorkor differs from Marasmus primarily by the presence of:",
    options: [
      "Severe wasting",
      "Bilateral pitting edema and skin/hair changes",
      "Very low weight-for-height",
      "Absence of subcutaneous fat"
    ],
    answer: 1,
    explanation: "Kwashiorkor is characterized by bilateral pitting edema (which may mask weight loss), skin changes (flaky paint dermatosis, hyperpigmentation), hair changes (flag sign, reddish discoloration), fatty liver, and irritability. It results primarily from protein deficiency. Marasmus shows severe wasting and absence of subcutaneous fat without edema, resulting from severe energy-protein deficiency."
  },
  {
    id: 34,
    question: "Vitamin A deficiency causes all of the following EXCEPT:",
    options: [
      "Night blindness (Nyctalopia)",
      "Bitot's spots",
      "Keratomalacia",
      "Pinguecula"
    ],
    answer: 3,
    explanation: "Vitamin A deficiency causes: night blindness (earliest sign), conjunctival xerosis, Bitot's spots (white foamy spots on conjunctiva - pathognomonic of VAD), corneal xerosis, keratomalacia (corneal melting - may lead to blindness), and xerophthalmia. Pinguecula is a benign yellowish growth on the conjunctiva associated with UV exposure, not VAD."
  },
  {
    id: 35,
    question: "The 'double burden of malnutrition' refers to:",
    options: [
      "Coexistence of both underweight and stunting in the same child",
      "Coexistence of undernutrition and overweight/obesity at population or individual level",
      "High prevalence of both wasting and stunting in a community",
      "Simultaneous protein and energy deficiency"
    ],
    answer: 1,
    explanation: "The double burden of malnutrition refers to the coexistence of undernutrition alongside overweight, obesity, or diet-related non-communicable diseases within individuals, households, or populations. India faces this double burden - high prevalence of stunting and wasting alongside increasing overweight and obesity, especially in urban settings."
  },
  {
    id: 36,
    question: "WHO Growth Standards (2006) are based on children from which study?",
    options: [
      "NHANES study from USA",
      "WHO Multicentre Growth Reference Study (MGRS) from 6 countries",
      "Framingham Child Health Study",
      "NCHS reference data from 1977"
    ],
    answer: 1,
    explanation: "WHO Child Growth Standards (2006) are based on the WHO Multicentre Growth Reference Study (MGRS), which followed children from Brazil, Ghana, India, Norway, Oman, and USA who were raised under optimal conditions (breastfed, non-smoking environments, etc.). These standards describe how children should grow, unlike NCHS references which described how children did grow."
  },
  {
    id: 37,
    question: "Iodine Deficiency Disorder (IDD) causing goiter is due to deficiency of iodine which leads to:",
    options: [
      "Decreased TSH secretion from anterior pituitary",
      "Increased TSH secretion causing thyroid gland hyperplasia",
      "Direct toxic effect on thyroid follicular cells",
      "Increased thyroxine binding globulin"
    ],
    answer: 1,
    explanation: "Iodine deficiency leads to decreased thyroid hormone (T3, T4) synthesis. This causes increased TSH secretion from the anterior pituitary (negative feedback), which stimulates thyroid gland hyperplasia and hypertrophy, resulting in goiter. IDD spectrum includes: cretinism, mental retardation, goiter, hypothyroidism, and reproductive failure."
  },
  {
    id: 38,
    question: "Janani Suraksha Yojana (JSY) provides cash incentive to pregnant women for institutional delivery. In rural areas of Low Performing States (LPS), the incentive for the mother is:",
    options: [
      "Rs. 700",
      "Rs. 1400",
      "Rs. 1000",
      "Rs. 500"
    ],
    answer: 1,
    explanation: "Under JSY, in rural areas of Low Performing States (LPS - states with low institutional delivery rates), the cash incentive is Rs. 1400 for the mother and Rs. 600 for the ASHA. In High Performing States (HPS) rural areas, it is Rs. 700 for the mother. Urban areas of LPS: Rs. 1000; Urban HPS: Rs. 600."
  },
  {
    id: 39,
    question: "Janani Shishu Suraksha Karyakram (JSSK) entitles pregnant women to:",
    options: [
      "Free institutional delivery only",
      "Free and cashless services including delivery, caesarean, drugs, diagnostics, blood, diet, and transport in government facilities",
      "Cash transfer of Rs. 5000 for institutional delivery",
      "Free ante-natal check-ups only"
    ],
    answer: 1,
    explanation: "JSSK (launched June 2011) entitles all pregnant women delivering in government health facilities to: free and cashless delivery, free caesarean section, free drugs and consumables, free diagnostics (blood, urine, ultrasound), free blood transfusion, free diet (3 days for normal delivery, 7 days for caesarean), and free transport from home to facility and back. Sick neonates up to 30 days are also covered."
  },
  {
    id: 40,
    question: "Pradhan Mantri Jan Arogya Yojana (PM-JAY) / Ayushman Bharat provides health insurance cover of how much per family per year?",
    options: [
      "Rs. 1 lakh",
      "Rs. 2 lakh",
      "Rs. 5 lakh",
      "Rs. 10 lakh"
    ],
    answer: 2,
    explanation: "PM-JAY (Ayushman Bharat) provides health insurance coverage of Rs. 5 lakh per family per year for secondary and tertiary care hospitalization. It targets approximately 10.74 crore poor and vulnerable families (bottom 40% of population). It is cashless and paperless at empanelled public and private hospitals."
  },
  {
    id: 41,
    question: "Rashtriya Bal Swasthya Karyakram (RBSK) aims to screen children for:",
    options: [
      "Malnutrition and anemia only",
      "4 'D's - Defects at birth, Diseases, Deficiencies, Developmental delays including Disabilities",
      "Communicable diseases in school-going children",
      "Visual and hearing defects only"
    ],
    answer: 1,
    explanation: "RBSK (launched 2013) screens children from birth to 18 years for 4 'D's: (1) Defects at birth (30 conditions), (2) Diseases (4 conditions - dental caries, visual impairment, hearing loss, hypertension), (3) Deficiency conditions (anemia, Vitamin A deficiency, goiter), and (4) Developmental delays including disabilities. Mobile Health Teams screen at AWCs, schools, and health facilities."
  },
  {
    id: 42,
    question: "LaQshya program in India is designed to improve quality of care in:",
    options: [
      "Antenatal care clinics",
      "Labour rooms and Maternity Operation Theatres",
      "Nutrition Rehabilitation Centers",
      "Immunization clinics"
    ],
    answer: 1,
    explanation: "LaQshya (Labour Room Quality Improvement Initiative) was launched in 2017 to improve quality of care in Labour Rooms and Maternity Operation Theatres in public health facilities. It aims to reduce preventable maternal and newborn deaths, stillbirths, and injuries during childbirth through standards, checklists, and quality certification of facilities."
  },
  {
    id: 43,
    question: "Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) provides antenatal care to all pregnant women on which fixed day of every month?",
    options: [
      "1st of every month",
      "9th of every month",
      "15th of every month",
      "Last Saturday of every month"
    ],
    answer: 1,
    explanation: "PMSMA was launched in June 2016 and provides fixed-day, assured, comprehensive antenatal care to all pregnant women on the 9th of every month at government health facilities. Gynecologists/physicians volunteer services for high-risk ANC assessment. Women in second/third trimester are the primary target."
  },
  {
    id: 44,
    question: "The National Health Mission (NHM) in India comprises which two sub-missions?",
    options: [
      "National Rural Health Mission and Urban Health Mission",
      "National Rural Health Mission (NRHM) and National Urban Health Mission (NUHM)",
      "Reproductive Health Mission and Child Survival Mission",
      "Primary Health Mission and Secondary Health Mission"
    ],
    answer: 1,
    explanation: "NHM was launched in 2013 and comprises two sub-missions: (1) National Rural Health Mission (NRHM) - originally launched in 2005 - focusing on rural healthcare, and (2) National Urban Health Mission (NUHM) - focusing on urban primary healthcare, particularly for urban poor living in slums. NHM provides the overarching framework for RMNCH+A."
  },
  {
    id: 45,
    question: "The RMNCH+A strategy stands for:",
    options: [
      "Reproductive, Maternal, Neonatal, Child Health and Adolescent Health",
      "Reproductive, Maternal, Newborn, Child and Adolescent Health",
      "Rural Maternal, Newborn, Child Healthcare and Awareness",
      "Rapid Maternal Neonatal Care Hospital and Ambulance"
    ],
    answer: 1,
    explanation: "RMNCH+A stands for Reproductive, Maternal, Newborn, Child, and Adolescent Health. The '+A' denotes the inclusion of adolescent health as a key component. This strategy emphasizes a continuum of care approach across the lifecycle - from pre-pregnancy through childhood and adolescence - implemented under NHM."
  },
  {
    id: 46,
    question: "Integrated Child Development Services (ICDS) package includes all of the following EXCEPT:",
    options: [
      "Supplementary nutrition",
      "Immunization",
      "Non-formal pre-school education",
      "Inpatient management of severe acute malnutrition"
    ],
    answer: 3,
    explanation: "ICDS (launched 1975) provides 6 services through Anganwadi Centers: (1) Supplementary nutrition, (2) Immunization, (3) Health check-up, (4) Referral services, (5) Non-formal pre-school education (3-6 years), and (6) Nutrition and health education. Inpatient management of SAM is done at Nutrition Rehabilitation Centers (NRCs), not ICDS. ICDS targets children 0-6 years, pregnant women, and lactating mothers."
  },
  {
    id: 47,
    question: "POSHAN Abhiyaan (National Nutrition Mission) was launched in 2018. Its target is to reduce stunting in children by how much per year?",
    options: [
      "1% per year",
      "2% per year",
      "3% per year",
      "4% per year"
    ],
    answer: 1,
    explanation: "POSHAN Abhiyaan (PM's Overarching Scheme for Holistic Nutrition) targets: reduce stunting by 2% per year, reduce undernutrition/underweight by 2% per year, reduce anemia among young children, women and adolescent girls by 3% per year, and reduce low birth weight by 2% per year. The mission aims to make India stunting-free by 2022 (revised targets ongoing)."
  },
  {
    id: 48,
    question: "Pradhan Mantri Matru Vandana Yojana (PMMVY) provides a cash incentive of how much for the first living child?",
    options: [
      "Rs. 3,000",
      "Rs. 5,000",
      "Rs. 6,000",
      "Rs. 10,000"
    ],
    answer: 1,
    explanation: "PMMVY (formerly Indira Gandhi Matritva Sahyog Yojana) provides Rs. 5,000 as maternity benefit in three installments for the first living child: Rs. 1,000 at early registration of pregnancy, Rs. 2,000 after 6 months with one ANC visit, and Rs. 2,000 after childbirth registration and first cycle of immunization. The remaining Rs. 1,000 is given as JSY incentive for institutional delivery."
  },
  {
    id: 49,
    question: "Pradhan Mantri Jan Arogya Yojana (PM-JAY) targets the poorest population. The beneficiaries are identified using:",
    options: [
      "Below Poverty Line (BPL) cards",
      "Socio-Economic Caste Census (SECC) 2011 database",
      "Antyodaya Anna Yojana ration cards",
      "NFHS-4 survey data on household income"
    ],
    answer: 1,
    explanation: "PM-JAY beneficiaries are identified based on the Socio-Economic Caste Census (SECC) 2011 database. It covers all families identified as deprived in rural areas and occupationally defined families in urban areas as per SECC 2011. There is no restriction on family size, age, or gender. Beneficiaries can check eligibility using their mobile number or ration card."
  },
  {
    id: 50,
    question: "Which among the following best describes the 'First 1000 Days' concept in nutrition?",
    options: [
      "First 1000 days from birth to approximately 3 years of age",
      "Period from conception (270 days of pregnancy) to 2 years of age (730 days), totaling approximately 1000 days",
      "First 1000 days of a woman's reproductive life",
      "The period of first 1000 days of school nutrition program"
    ],
    answer: 1,
    explanation: "The 'First 1000 Days' refers to the critical window from conception to a child's second birthday: approximately 270 days of pregnancy + 365 days in the first year + 365 days in the second year = approximately 1000 days. This period is crucial for optimal brain development, growth, and long-term health. Nutritional interventions during this window have the greatest impact on preventing stunting and developmental impairment."
  },
];

export default questions;
