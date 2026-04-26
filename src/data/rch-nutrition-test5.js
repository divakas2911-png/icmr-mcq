const questions = [
  {
    id: 1,
    question: "In which year was the Integrated Child Development Services (ICDS) scheme launched in India?",
    options: ["1972", "1975", "1978", "1980"],
    answer: 1,
    explanation: "ICDS was launched on 2nd October 1975 as a centrally sponsored scheme. It is the world's largest and most unique programme for early childhood development and is India's primary response to addressing the challenge of child nutrition, health, and development."
  },
  {
    id: 2,
    question: "How many services are provided under the ICDS programme?",
    options: ["4", "5", "6", "8"],
    answer: 2,
    explanation: "ICDS provides 6 services: (1) Supplementary nutrition, (2) Immunization, (3) Health checkup, (4) Referral services, (5) Nutrition and health education, and (6) Pre-school non-formal education. The first three are delivered through the health system while the remaining three are delivered by the Anganwadi worker."
  },
  {
    id: 3,
    question: "Which of the following is NOT a direct beneficiary of the ICDS programme?",
    options: ["Children below 6 years of age", "Pregnant and lactating women", "Adolescent girls (11-18 years)", "School-going children aged 6-14 years"],
    answer: 3,
    explanation: "The beneficiaries of ICDS are: children below 6 years of age, pregnant women, lactating mothers, and adolescent girls (11-18 years) in selected blocks. School-going children aged 6-14 years are covered under the PM POSHAN (Mid-Day Meal) scheme, not under ICDS."
  },
  {
    id: 4,
    question: "The primary functionary of the Anganwadi Centre who is responsible for delivering ICDS services at the grassroots level is called:",
    options: ["ASHA worker", "Anganwadi Worker (AWW)", "Auxiliary Nurse Midwife (ANM)", "Lady Health Visitor (LHV)"],
    answer: 1,
    explanation: "The Anganwadi Worker (AWW) is the primary grassroots-level functionary of ICDS. She is a honorary worker selected from the local community, trained for 4 months, and responsible for delivering services like supplementary nutrition, pre-school education, health and nutrition education, and growth monitoring at the Anganwadi Centre."
  },
  {
    id: 5,
    question: "What is the recommended daily supplementary nutrition norm for severely malnourished children (below 6 years) under ICDS?",
    options: ["300 kcal and 8-10 g protein", "500 kcal and 12-15 g protein", "800 kcal and 20-25 g protein", "600 kcal and 16-20 g protein"],
    answer: 2,
    explanation: "Under ICDS, severely malnourished children (below 6 years) are entitled to 800 kcal energy and 20-25 g protein per day as supplementary nutrition. Normal children below 6 years receive 500 kcal and 12-15 g protein, while pregnant and lactating women receive 600 kcal and 18-20 g protein per day."
  },
  {
    id: 6,
    question: "Under ICDS, what are the daily supplementary nutrition norms for pregnant and lactating women?",
    options: ["300 kcal and 8 g protein", "400 kcal and 12 g protein", "500 kcal and 15 g protein", "600 kcal and 18-20 g protein"],
    answer: 3,
    explanation: "Under ICDS, pregnant and lactating women are entitled to 600 kcal energy and 18-20 g protein per day as supplementary nutrition. This is provided for 300 days in a year. The supplementary nutrition supplements the home diet and does not replace it."
  },
  {
    id: 7,
    question: "The Village Health, Sanitation and Nutrition Day (VHSND) is a community-based event held at the Anganwadi Centre. What is its recommended frequency?",
    options: ["Daily", "Weekly", "Monthly", "Quarterly"],
    answer: 2,
    explanation: "Village Health, Sanitation and Nutrition Day (VHSND) is held once a month at the Anganwadi Centre. It is a convergence platform where ASHA, AWW, and ANM come together to provide services like immunization, antenatal care, growth monitoring, health education, and referral services to the community."
  },
  {
    id: 8,
    question: "Growth monitoring and promotion under ICDS involves weighing children at Anganwadi Centres. What is the recommended frequency of weighing for children below 3 years?",
    options: ["Monthly", "Bi-monthly", "Quarterly", "Six-monthly"],
    answer: 0,
    explanation: "Under ICDS, children below 3 years should be weighed monthly for growth monitoring and promotion. Children between 3-6 years are weighed quarterly. The weight is plotted on the Road to Health card (growth chart) to monitor growth faltering and identify children at risk of malnutrition."
  },
  {
    id: 9,
    question: "The Anganwadi worker (AWW) under ICDS receives an initial training of:",
    options: ["1 month", "2 months", "3 months", "4 months"],
    answer: 3,
    explanation: "The Anganwadi Worker (AWW) receives an initial induction training of 4 months conducted at the CDPO/project level and Lady Welfare Officer training centres. This is followed by periodic refresher training. The AWW is a community-level worker selected from within the village/locality she serves."
  },
  {
    id: 10,
    question: "ICDS-IV (restructured/strengthened ICDS) introduced which major change for urban and tribal areas?",
    options: ["Introduction of Take-Home Ration (THR)", "Providing hot cooked meals at the Anganwadi Centre", "Universalization of ICDS to all blocks", "Separate Anganwadi centres for adolescent girls"],
    answer: 2,
    explanation: "The restructured/strengthened ICDS (ICDS-IV) focused on the universalization of ICDS to all CD blocks in the country, including tribal, rural, and urban areas. It also emphasized quality improvement, community mobilization, convergence with health services, and capacity building of the functionaries."
  },
  {
    id: 11,
    question: "According to ICDS norms, one Anganwadi Centre (AWC) is established to serve approximately how many population in rural areas?",
    options: ["500-1000 population", "1000-1500 population", "1500-2000 population", "2000-3000 population"],
    answer: 1,
    explanation: "As per ICDS norms, one Anganwadi Centre (AWC) is established to serve 1000-1500 population in rural and urban areas, and 700-800 population in tribal/hilly areas. A mini Anganwadi Centre serves 150-400 population in areas where a full AWC is not required."
  },
  {
    id: 12,
    question: "The convergence between ICDS and the health department is best exemplified by which of the following?",
    options: ["Supplementary nutrition delivery by AWW", "Immunization services at AWC provided by ANM", "Pre-school education at AWC", "Growth monitoring by AWW"],
    answer: 1,
    explanation: "Immunization services at the Anganwadi Centre provided by the ANM (Auxiliary Nurse Midwife) best exemplifies convergence between ICDS and the health department. The ANM conducts immunization sessions at AWC as part of the VHSND, while the AWW mobilizes beneficiaries and maintains records. This represents a key convergence point between ICDS and the National Health Mission."
  },
  {
    id: 13,
    question: "POSHAN Abhiyaan (PM's Overarching Scheme for Holistic Nutrition) was launched in which year?",
    options: ["2014", "2016", "2018", "2020"],
    answer: 2,
    explanation: "POSHAN Abhiyaan was launched on 8th March 2018 by the Prime Minister from Jhunjhunu, Rajasthan. It is India's flagship programme aimed at improving nutritional outcomes for children, adolescent girls, pregnant women, and lactating mothers. It was launched with a target of making India malnutrition-free by 2022."
  },
  {
    id: 14,
    question: "What is the annual target of POSHAN Abhiyaan to reduce stunting among children under 6 years?",
    options: ["1% per year", "2% per year", "3% per year", "4% per year"],
    answer: 1,
    explanation: "POSHAN Abhiyaan aims to reduce stunting by 2% per year and underweight by 2% per year among children below 6 years. It also targets reducing anemia by 3% per year among children, adolescent girls, and women of reproductive age, and reducing low birth weight by 2% per year."
  },
  {
    id: 15,
    question: "The technology platform used under POSHAN Abhiyaan for real-time monitoring of ICDS services is called:",
    options: ["HMIS portal", "POSHAN Tracker / ICDS-CAS", "RCH portal", "NHM-MIS"],
    answer: 1,
    explanation: "POSHAN Tracker (earlier known as ICDS-CAS - Common Application Software) is the technology platform used under POSHAN Abhiyaan. It is a mobile-based application used by Anganwadi Workers and supervisors for real-time data entry, growth monitoring, beneficiary tracking, and supply chain management. It was a landmark reform in the digitization of ICDS services."
  },
  {
    id: 16,
    question: "POSHAN Maah (Nutrition Month) is observed in which month every year under POSHAN Abhiyaan?",
    options: ["March", "June", "September", "November"],
    answer: 2,
    explanation: "POSHAN Maah is observed during the month of September every year. It is a month-long campaign to create awareness about nutrition among communities through Jan Andolan (people's movement). Activities include community events, Gram Sabhas, cultural programmes, and distribution of nutritional supplements."
  },
  {
    id: 17,
    question: "Jan Andolan under POSHAN Abhiyaan refers to:",
    options: ["A government scheme for food security", "A people's movement to make nutrition a jan andolan (public movement)", "A community health worker training programme", "A social audit mechanism for nutrition programmes"],
    answer: 1,
    explanation: "Jan Andolan (People's Movement) under POSHAN Abhiyaan refers to creating mass awareness and mobilization around nutrition through community participation, behavior change communication, and convergence. It aims to make 'good nutrition' a people's movement by involving communities, elected representatives, civil society, and the media in addressing malnutrition."
  },
  {
    id: 18,
    question: "The National Nutrition Strategy was released by NITI Aayog in which year?",
    options: ["2015", "2016", "2017", "2018"],
    answer: 2,
    explanation: "The National Nutrition Strategy was released by NITI Aayog in 2017. It provides a roadmap for India's nutrition sector, aiming to reach the Sustainable Development Goals (SDGs) by 2030. It focuses on a life-cycle approach, convergence, community-based interventions, and addressing the underlying determinants of malnutrition."
  },
  {
    id: 19,
    question: "Under the National Food Security Act (NFSA) 2013, what quantity of foodgrain is entitled to priority households per person per month?",
    options: ["3 kg at Rs. 1/kg", "5 kg at Rs. 1-3/kg", "7 kg at Rs. 2/kg", "10 kg at subsidized rates"],
    answer: 1,
    explanation: "Under the National Food Security Act (NFSA) 2013, priority households are entitled to 5 kg of foodgrain per person per month at subsidized prices - rice at Rs. 3/kg, wheat at Rs. 2/kg, and coarse grains at Rs. 1/kg. The Antyodaya Anna Yojana (AAY) households receive 35 kg per household per month."
  },
  {
    id: 20,
    question: "The Mid-Day Meal scheme, now renamed as PM POSHAN, is governed by which ministry?",
    options: ["Ministry of Health and Family Welfare", "Ministry of Women and Child Development", "Ministry of Education", "Ministry of Food and Public Distribution"],
    answer: 2,
    explanation: "PM POSHAN (Pradhan Mantri Poshan Shakti Nirman), the renamed Mid-Day Meal scheme, is governed by the Ministry of Education (formerly Human Resource Development). It provides hot cooked meals to children in government and government-aided schools from Classes I to VIII across the country."
  },
  {
    id: 21,
    question: "'Saksham Anganwadi' refers to:",
    options: ["An Anganwadi Centre with a trained specialist doctor", "A new and upgraded Anganwadi Centre with better infrastructure under POSHAN 2.0", "An Anganwadi Centre with 100% vaccination coverage", "A model Anganwadi Centre established in tribal areas"],
    answer: 1,
    explanation: "Saksham Anganwadi is a new and upgraded version of the Anganwadi Centre introduced under POSHAN 2.0 (Mission Saksham Anganwadi and POSHAN 2.0). These centres have better infrastructure, digital facilities (tablet/smart TV), and improved amenities to provide enhanced services to children and women beneficiaries."
  },
  {
    id: 22,
    question: "POSHAN 2.0 was launched as a convergence of which programmes?",
    options: ["ICDS + PMMVY + NHM", "ICDS + SAG + NPAG + National Nutrition Mission", "ICDS + Mid-Day Meal + PDS", "NIDDCP + NIPI + Vitamin A programme"],
    answer: 1,
    explanation: "POSHAN 2.0 was launched in 2021 as a convergence of ICDS (Integrated Child Development Services), SAG (Scheme for Adolescent Girls), NPAG (National Programme for Adolescent Girls), and the National Nutrition Mission (POSHAN Abhiyaan). It aims to strengthen nutritional content, delivery, outreach, and outcomes through a holistic approach."
  },
  {
    id: 23,
    question: "The Eat Right India movement is an initiative of which regulatory body?",
    options: ["ICMR (Indian Council of Medical Research)", "FSSAI (Food Safety and Standards Authority of India)", "NIN (National Institute of Nutrition)", "Ministry of Health and Family Welfare"],
    answer: 1,
    explanation: "The Eat Right India movement is an initiative of FSSAI (Food Safety and Standards Authority of India). It aims to improve the health and well-being of India's citizens by bringing about sustainable positive changes in the food system. It includes campaigns on safe and healthy food, reduction of salt/sugar/fat, food safety, and food fortification."
  },
  {
    id: 24,
    question: "POSHAN Abhiyaan is implemented under the overall supervision of which ministry?",
    options: ["Ministry of Health and Family Welfare", "Ministry of Women and Child Development", "NITI Aayog", "Ministry of Rural Development"],
    answer: 1,
    explanation: "POSHAN Abhiyaan is implemented under the Ministry of Women and Child Development (MoWCD). It involves convergence with multiple ministries including Health, Education, Water and Sanitation, Rural Development, and Food and Public Distribution for a holistic approach to addressing malnutrition in India."
  },
  {
    id: 25,
    question: "According to WHO/UNICEF IYCF recommendations, within what time period after birth should breastfeeding be initiated?",
    options: ["Within 30 minutes", "Within 1 hour", "Within 4 hours", "Within 24 hours"],
    answer: 1,
    explanation: "WHO/UNICEF recommend that breastfeeding should be initiated within 1 hour of birth (early initiation of breastfeeding). This ensures the newborn receives colostrum, helps establish breastfeeding, promotes mother-infant bonding, and reduces neonatal mortality. India also promotes this through the MAA (Mothers' Absolute Affection) programme."
  },
  {
    id: 26,
    question: "What is the recommended duration of exclusive breastfeeding as per WHO/UNICEF and India's national guidelines?",
    options: ["3 months", "4 months", "6 months", "12 months"],
    answer: 2,
    explanation: "Exclusive breastfeeding (no other food or liquid except breast milk, not even water) is recommended for the first 6 months of life. After 6 months, complementary foods should be introduced while continuing breastfeeding up to 2 years of age and beyond. This is the recommendation of WHO, UNICEF, and India's National IYCF guidelines."
  },
  {
    id: 27,
    question: "According to IYCF guidelines, complementary feeding should be started at:",
    options: ["4 months of age", "5 months of age", "6 months of age", "8 months of age"],
    answer: 2,
    explanation: "Complementary feeding (introduction of semi-solid/solid foods in addition to breast milk) should be started at 6 months (completed) of age. Before 6 months, the infant's digestive system is immature and exclusive breastfeeding meets all nutritional needs. Starting too early increases the risk of infections and allergies; starting too late causes malnutrition."
  },
  {
    id: 28,
    question: "The first yellowish milk produced by the mother immediately after delivery, rich in antibodies and nutrients, is called:",
    options: ["Foremilk", "Hindmilk", "Colostrum", "Transitional milk"],
    answer: 2,
    explanation: "Colostrum is the first yellowish, thick milk produced by the mother in the first 2-3 days after delivery. It is rich in immunoglobulins (especially IgA), proteins, vitamins, and minerals. It provides passive immunity to the newborn, acts as a laxative (helps pass meconium), and is often called the 'first vaccine' of the newborn."
  },
  {
    id: 29,
    question: "The IMS Act of 1992 in India regulates:",
    options: ["Immunization of infants and mothers under ICDS", "Marketing of infant milk substitutes, feeding bottles, and infant foods", "Iron and micronutrient supplementation for infants", "Integrated management of sick children"],
    answer: 1,
    explanation: "The IMS Act (Infant Milk Substitutes, Feeding Bottles and Infant Foods - Regulation of Production, Supply and Distribution Act) 1992, amended in 2003, regulates the production, supply, and distribution of infant milk substitutes, feeding bottles, and infant foods. It prohibits direct advertising of these products to the public and restricts promotions to healthcare professionals."
  },
  {
    id: 30,
    question: "Baby Friendly Hospital Initiative (BFHI) is based on how many steps to successful breastfeeding?",
    options: ["7 steps", "8 steps", "10 steps", "12 steps"],
    answer: 2,
    explanation: "The Baby Friendly Hospital Initiative (BFHI), launched by WHO and UNICEF, is based on '10 Steps to Successful Breastfeeding.' These steps include having a written breastfeeding policy, training staff, informing pregnant women about breastfeeding, helping mothers initiate breastfeeding within 1 hour, exclusive breastfeeding, rooming-in, feeding on demand, avoiding artificial teats, fostering breastfeeding support groups, and not giving breast milk substitutes."
  },
  {
    id: 31,
    question: "The MAA (Mothers' Absolute Affection) programme in India primarily aims to:",
    options: ["Provide supplementary nutrition to lactating mothers under ICDS", "Promote and support breastfeeding through health system strengthening", "Ensure antenatal care coverage for all pregnant women", "Provide financial incentives to mothers for institutional delivery"],
    answer: 1,
    explanation: "The MAA (Mothers' Absolute Affection) programme was launched in 2016 by the Ministry of Health and Family Welfare. It aims to promote and support breastfeeding through health system strengthening, capacity building of health care providers, interpersonal communication, and community mobilization. It focuses on early initiation, exclusive breastfeeding, and continued breastfeeding."
  },
  {
    id: 32,
    question: "Minimum Dietary Diversity (MDD) in IYCF is defined as consumption of at least how many food groups out of 8 recommended food groups?",
    options: ["3 food groups", "4 food groups", "5 food groups", "6 food groups"],
    answer: 2,
    explanation: "Minimum Dietary Diversity (MDD) is defined as consumption of foods from at least 5 out of 8 food groups on the previous day. The 8 food groups are: breast milk, grains/roots/tubers, legumes and nuts, dairy, flesh foods (meat/fish/poultry), eggs, vitamin A-rich foods, and other fruits and vegetables. MDD is a proxy indicator of dietary quality in children aged 6-23 months."
  },
  {
    id: 33,
    question: "For low birth weight (LBW) infants who cannot be put to the breast, what is the recommended feeding method?",
    options: ["Bottle feeding with infant formula", "Nasogastric tube feeding only", "Cup and spoon feeding with expressed breast milk", "Dropper feeding with cow's milk"],
    answer: 2,
    explanation: "For LBW infants who cannot directly breastfeed, cup and spoon feeding with expressed breast milk is recommended. This avoids nipple confusion associated with bottle feeding, maintains the mother's milk supply, provides the benefits of breast milk, and can be transitioned to direct breastfeeding as the infant matures. Paladai (a small cup) is commonly used in Indian settings."
  },
  {
    id: 34,
    question: "What is the difference between foremilk and hindmilk?",
    options: ["Foremilk is produced in the first trimester; hindmilk in the third trimester", "Foremilk comes first during a feed and is high in water content; hindmilk comes later and is high in fat", "Foremilk is produced by the right breast; hindmilk by the left breast", "Foremilk has more protein; hindmilk has more carbohydrates"],
    answer: 1,
    explanation: "Foremilk is the milk produced at the beginning of a breastfeed - it is watery, high in volume, and rich in lactose and proteins. It quenches the infant's thirst. Hindmilk comes towards the end of a feed and is rich in fat, providing most of the caloric content. Both foremilk and hindmilk are important, which is why complete emptying of one breast before switching is recommended."
  },
  {
    id: 35,
    question: "Relactation refers to:",
    options: ["Breastfeeding after a C-section delivery", "Re-establishing breastfeeding after it has been stopped or reduced", "Breastfeeding twins simultaneously", "Breastfeeding beyond 2 years of age"],
    answer: 1,
    explanation: "Relactation refers to the process of re-establishing breast milk production in a mother who has stopped breastfeeding or whose milk supply has diminished. It is possible with adequate support, frequent suckling by the infant, and sometimes galactagogues. It is particularly important for infants whose mothers had stopped breastfeeding due to illness or misinformation."
  },
  {
    id: 36,
    question: "Expressed breast milk can be safely stored at room temperature (25-37°C) for how long?",
    options: ["1-2 hours", "4-6 hours", "8-12 hours", "24 hours"],
    answer: 1,
    explanation: "Expressed breast milk can be safely stored at room temperature (25-37°C) for up to 4-6 hours in clean, covered containers. It can be stored in a refrigerator (4°C) for up to 72 hours (3-5 days) and in a freezer (-18°C) for up to 6 months. Stored breast milk should be gently warmed (not microwaved) before feeding."
  },
  {
    id: 37,
    question: "Minimum Meal Frequency (MMF) for breastfed children aged 6-8 months as per IYCF guidelines is:",
    options: ["1-2 times per day", "2 times per day", "3 times per day", "4 times per day"],
    answer: 1,
    explanation: "Minimum Meal Frequency (MMF) for breastfed children aged 6-8 months is 2 times per day. For breastfed children aged 9-23 months, it is 3 times per day. For non-breastfed children aged 6-23 months, MMF is 4 times per day. These are the WHO/UNICEF IYCF recommendations adopted in India's national guidelines."
  },
  {
    id: 38,
    question: "The National Iodine Deficiency Disorders Control Programme (NIDDCP) aims to achieve universal iodization of salt. What is the recommended iodine content of salt at the production level?",
    options: ["15 ppm (parts per million)", "30 ppm", "45 ppm", "60 ppm"],
    answer: 1,
    explanation: "Under NIDDCP, the recommended iodine content of salt is 30 ppm (parts per million) at the production level and 15 ppm at the consumer level. This reduction from 30 to 15 ppm accounts for losses during transport, storage, and cooking. The Prevention of Food Adulteration (PFA) Act mandates the use of iodized salt in India."
  },
  {
    id: 39,
    question: "Under the National Iron Plus Initiative (NIPI), what is the dose of iron and folic acid given to children aged 6-59 months?",
    options: ["1 mg elemental iron + 5 mcg folic acid per kg body weight per day", "20 mg elemental iron + 100 mcg folic acid per week", "30 mg elemental iron + 250 mcg folic acid per day", "45 mg elemental iron + 400 mcg folic acid per day"],
    answer: 0,
    explanation: "Under NIPI, children aged 6-59 months receive 1 mg elemental iron per kg body weight per day (with folic acid 5 mcg/kg/day) as daily supplementation. This is given as liquid iron (syrup). Children aged 5-10 years receive 30 mg elemental iron + 250 mcg folic acid weekly, while adolescents (10-19 years) receive 60 mg elemental iron + 400 mcg folic acid weekly."
  },
  {
    id: 40,
    question: "Weekly Iron and Folic Acid Supplementation (WIFS) programme targets which population group?",
    options: ["Pregnant women and lactating mothers only", "Children below 5 years of age", "Adolescent girls and boys aged 10-19 years", "All women of reproductive age"],
    answer: 2,
    explanation: "The Weekly Iron and Folic Acid Supplementation (WIFS) programme targets adolescent girls and boys aged 10-19 years, both in school and out of school settings. It provides weekly supervised supplementation of 60 mg elemental iron and 400 mcg folic acid. It was implemented to address the high burden of anemia in adolescents in India."
  },
  {
    id: 41,
    question: "Under the National Prophylaxis Programme against Nutritional Blindness due to Vitamin A Deficiency, Vitamin A supplementation is given every 6 months up to what age?",
    options: ["2 years", "3 years", "5 years", "6 years"],
    answer: 2,
    explanation: "Under the National Programme for Prophylaxis against Nutritional Blindness due to Vitamin A Deficiency (now integrated into NIPI), Vitamin A is given every 6 months to children from 9 months up to 5 years of age. The first dose (1 lakh IU) is given at 9 months, and subsequent doses (2 lakh IU) are given every 6 months till 5 years, totaling 9 doses."
  },
  {
    id: 42,
    question: "The dose of Vitamin A given to a child aged 9 months (first dose) under the national prophylaxis programme is:",
    options: ["25,000 IU", "50,000 IU", "1,00,000 IU (1 lakh IU)", "2,00,000 IU (2 lakh IU)"],
    answer: 2,
    explanation: "The first dose of Vitamin A given at 9 months (along with measles vaccine) is 1,00,000 IU (1 lakh IU). All subsequent doses given every 6 months up to 5 years of age are 2,00,000 IU (2 lakh IU). The Vitamin A is given as a water-miscible preparation (retinol palmitate) orally."
  },
  {
    id: 43,
    question: "Food fortification of wheat flour under FSSAI standards requires the addition of which micronutrients?",
    options: ["Iron, Folic Acid, and Vitamin B12 only", "Iron, Folic Acid, Vitamin B12, Vitamin A, and Zinc", "Vitamin A, Vitamin D, and Calcium", "Iodine, Iron, and Zinc"],
    answer: 1,
    explanation: "FSSAI standards for fortification of wheat flour require the addition of Iron (14-42 mg/kg), Folic Acid (100-300 mcg/kg), Vitamin B12 (0.75-2.25 mcg/kg), and optionally Zinc (10-30 mg/kg) and Vitamin A (500-2500 mcg RE/kg). Food fortification is a cost-effective strategy to address micronutrient deficiencies at the population level."
  },
  {
    id: 44,
    question: "Biofortification refers to:",
    options: ["Fortification of processed food with vitamins and minerals in factories", "Breeding crops to be naturally rich in micronutrients", "Addition of probiotics and prebiotics to food products", "Fortification of food through genetic modification only"],
    answer: 1,
    explanation: "Biofortification refers to the process of increasing the nutritional value (micronutrient content) of food crops through agronomic practices, conventional plant breeding, or biotechnology. Examples in India include iron-rich pearl millet (Dhan Shakti), zinc-rich wheat (MACS 6222), orange-fleshed sweet potato (rich in beta-carotene), and vitamin A-rich maize."
  },
  {
    id: 45,
    question: "Take-Home Ration (THR) under ICDS is primarily provided to which beneficiaries?",
    options: ["All children below 6 years only", "Pregnant women and lactating mothers only", "Children below 3 years, severely malnourished children, and pregnant/lactating women", "Adolescent girls only"],
    answer: 2,
    explanation: "Take-Home Ration (THR) under ICDS is provided to children below 3 years of age, severely malnourished children under 6 years, and pregnant and lactating women. Children aged 3-6 years receive hot cooked meals (morning snack and supplementary nutrition) at the Anganwadi Centre itself. THR is given monthly and should supplement the home diet."
  },
  {
    id: 46,
    question: "Pradhan Mantri Matru Vandana Yojana (PMMVY) provides a cash incentive of Rs. 5000 for:",
    options: ["All births regardless of birth order", "First live birth to eligible beneficiaries", "Only institutional deliveries", "Births where mother has received all antenatal care visits"],
    answer: 1,
    explanation: "PMMVY (earlier Indira Gandhi Matritva Sahyog Yojana - IGMSY) provides a cash incentive of Rs. 5000 in three installments for the first live birth to eligible women aged 19 years and above. The objectives include improving the health and nutrition of pregnant and lactating mothers, promoting early registration, ANC, institutional delivery, and breastfeeding practices."
  },
  {
    id: 47,
    question: "The Scheme for Adolescent Girls (SAG) under the Ministry of Women and Child Development targets girls in which age group?",
    options: ["10-14 years", "11-14 years", "11-18 years", "14-18 years"],
    answer: 2,
    explanation: "The Scheme for Adolescent Girls (SAG), now integrated into POSHAN 2.0, targets adolescent girls aged 11-18 years. It is delivered through the Anganwadi Centre and provides nutrition supplementation (600 kcal and 18-20 g protein per day for out-of-school girls), nutrition and health education, home management skills, life skills, vocational training guidance, and mainstreaming out-of-school girls."
  },
  {
    id: 48,
    question: "The Comprehensive National Nutrition Survey (CNNS) 2016-18 was conducted by which organizations?",
    options: ["ICMR and NIN", "Ministry of Health and Family Welfare with UNICEF and Population Council", "Ministry of Women and Child Development and NITI Aayog", "WHO and Government of India"],
    answer: 1,
    explanation: "The Comprehensive National Nutrition Survey (CNNS) 2016-18 was conducted by the Ministry of Health and Family Welfare (MoHFW) in collaboration with UNICEF and the Population Council. It provided comprehensive data on the nutritional status of children (0-19 years) including anthropometric indicators, micronutrient deficiencies, and diet quality across India."
  },
  {
    id: 49,
    question: "As per CNNS 2016-18, the prevalence of stunting (low height-for-age) among children under 5 years in India was approximately:",
    options: ["25%", "35%", "45%", "55%"],
    answer: 1,
    explanation: "As per CNNS 2016-18, the prevalence of stunting (low height-for-age, <-2 SD) among children under 5 years in India was approximately 35%. NFHS-5 (2019-21) showed further improvement with stunting at 35.5% nationally. These surveys guide nutrition policy and programme planning in India."
  },
  {
    id: 50,
    question: "Under POSHAN 2.0 (Mission Saksham Anganwadi and Poshan 2.0), the focus has shifted to a mission-mode approach covering which key pillars?",
    options: ["Supplementary nutrition and health education only", "Nutrition content, delivery, outreach, outcomes, and technology", "Convergence, community mobilization, and monitoring only", "Immunization, growth monitoring, and referral services only"],
    answer: 1,
    explanation: "POSHAN 2.0, launched in 2021, focuses on five key pillars: (1) Strengthening nutritional content and delivery, (2) Improving outreach and coverage, (3) Enhancing outcomes through convergence, (4) Technology-driven monitoring through POSHAN Tracker, and (5) Community-based activities. It merges ICDS, PMMVY, SAG, and other nutrition schemes into a comprehensive mission-mode programme for holistic nutrition."
  },
];

export default questions;
