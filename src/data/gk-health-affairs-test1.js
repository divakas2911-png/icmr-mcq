const questions = [
  {
    id: 1,
    question: "In which year did the World Health Assembly adopt the WHO Framework Convention on Tobacco Control (FCTC), making it the first international treaty negotiated under the auspices of WHO?",
    options: ["2000", "2003", "2005", "2007"],
    answer: 1,
    explanation: "The WHO FCTC was adopted by the World Health Assembly on 21 May 2003 (WHA56.1) and entered into force on 27 February 2005. It is the first international treaty negotiated under the auspices of WHO."
  },
  {
    id: 2,
    question: "The International Health Regulations (IHR) 2005 require State Parties to notify WHO of events that may constitute a Public Health Emergency of International Concern (PHEIC) within how many hours of assessing public health information?",
    options: ["12 hours", "24 hours", "48 hours", "72 hours"],
    answer: 2,
    explanation: "Under IHR 2005 Article 6, State Parties must notify WHO within 24 hours of assessment of public health information using the decision instrument in Annex 2, about all events which may constitute a PHEIC."
  },
  {
    id: 3,
    question: "Which SDG 3 target specifically calls for ending the AIDS, tuberculosis, malaria, and neglected tropical disease epidemics and combating hepatitis, water-borne diseases, and other communicable diseases by which year?",
    options: ["2025", "2030", "2035", "2040"],
    answer: 1,
    explanation: "SDG Target 3.3 calls for ending the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combating hepatitis, water-borne diseases and other communicable diseases by 2030."
  },
  {
    id: 4,
    question: "The Global Health Security Agenda (GHSA) was launched in February 2014 with an initial target of bringing how many countries to an 'advanced level of health security' within five years?",
    options: ["30 countries", "44 countries", "65 countries", "100 countries"],
    answer: 0,
    explanation: "GHSA was launched in February 2014 with an initial goal of assisting 30 countries to achieve advanced levels of health security capacity within five years. It has since grown to over 70 member countries."
  },
  {
    id: 5,
    question: "WHO declared the eradication of which disease in 1980, following a global campaign that lasted nearly two decades?",
    options: ["Poliomyelitis", "Smallpox", "Rinderpest", "Dracunculiasis"],
    answer: 1,
    explanation: "WHO declared smallpox eradicated on 8 May 1980 (WHA33.3), following the Global Smallpox Eradication Programme. The last natural case occurred in Somalia in 1977. It remains the only human infectious disease to be eradicated."
  },
  {
    id: 6,
    question: "Under WHO's Universal Health Coverage (UHC) Service Coverage Index, what score did India achieve in the 2023 UHC Global Monitoring Report?",
    options: ["58", "61", "65", "68"],
    answer: 1,
    explanation: "India scored 61 on the UHC Service Coverage Index in the 2023 WHO Global Monitoring Report on UHC, up from 55 in 2019, reflecting improvements in coverage of essential health services."
  },
  {
    id: 7,
    question: "The WHO prequalification programme for medicines was established in which year to facilitate access to priority medicines for HIV/AIDS, malaria, tuberculosis, and reproductive health?",
    options: ["1987", "1990", "2001", "2006"],
    answer: 2,
    explanation: "WHO's Prequalification Programme for medicines was established in 2001 initially to facilitate access to priority medicines for HIV/AIDS, malaria, and tuberculosis for procurement by UN agencies and the Global Fund."
  },
  {
    id: 8,
    question: "Which WHO initiative, launched in 2007, set the target of eliminating lymphatic filariasis as a public health problem by 2020 through mass drug administration (MDA)?",
    options: ["Global Programme to Eliminate Lymphatic Filariasis", "NTD Roadmap 2012-2020", "London Declaration on NTDs", "Uniting to Combat NTDs"],
    answer: 0,
    explanation: "The Global Programme to Eliminate Lymphatic Filariasis (GPELF) was launched by WHO in 2000 (not 2007), but the 2020 elimination target was part of the NTD Roadmap 2012-2020. The programme uses annual MDA with albendazole plus ivermectin or DEC."
  },
  {
    id: 9,
    question: "The WHO 'End TB Strategy' aims to reduce TB deaths by what percentage by 2030 compared to the 2015 baseline?",
    options: ["75%", "80%", "90%", "95%"],
    answer: 2,
    explanation: "The WHO End TB Strategy (2016-2035) sets a 2030 milestone of 90% reduction in TB deaths and 80% reduction in TB incidence rate compared to the 2015 baseline, with the ultimate goal of ending the global TB epidemic by 2035."
  },
  {
    id: 10,
    question: "At the 75th World Health Assembly in May 2022, member states agreed to negotiate a new pandemic accord. What is the official working title of this proposed instrument?",
    options: ["WHO Pandemic Prevention Treaty", "International Agreement on Pandemic Prevention, Preparedness and Response", "Global Health Security Convention", "Pandemic Influenza Preparedness Framework"],
    answer: 1,
    explanation: "The 75th WHA in May 2022 established an Intergovernmental Negotiating Body (INB) to draft and negotiate an 'International Agreement on Pandemic Prevention, Preparedness and Response' (the 'pandemic accord' or 'pandemic treaty')."
  },
  {
    id: 11,
    question: "According to NFHS-5 (2019-21), what was India's Total Fertility Rate (TFR) at the national level?",
    options: ["1.9", "2.0", "2.1", "2.3"],
    answer: 1,
    explanation: "NFHS-5 (2019-21) reported India's Total Fertility Rate (TFR) at 2.0, which is below the replacement level of 2.1 for the first time in NFHS history, indicating significant progress in family planning."
  },
  {
    id: 12,
    question: "NFHS-5 data revealed that India's Infant Mortality Rate (IMR) was how many deaths per 1000 live births?",
    options: ["32", "35", "38", "41"],
    answer: 1,
    explanation: "NFHS-5 (2019-21) reported India's Infant Mortality Rate as 35.2 per 1000 live births, a reduction from 40.7 per 1000 live births in NFHS-4 (2015-16), reflecting improvements in maternal and child health services."
  },
  {
    id: 13,
    question: "According to NFHS-5 (2019-21), what percentage of children under 5 years were stunted (low height-for-age) in India?",
    options: ["31.7%", "35.5%", "38.4%", "42.2%"],
    answer: 0,
    explanation: "NFHS-5 (2019-21) reported that 35.5% of children under 5 years were stunted in India, down from 38.4% in NFHS-4. However, some districts showed an increase, highlighting the need for targeted interventions."
  },
  {
    id: 14,
    question: "The Sample Registration System (SRS) Bulletin 2020, released by the Registrar General of India, reported India's Maternal Mortality Ratio (MMR) as how many per 100,000 live births?",
    options: ["97", "103", "113", "121"],
    answer: 0,
    explanation: "The SRS Bulletin 2020 (for the period 2018-2020) reported India's MMR as 97 per 100,000 live births, down from 103 (2017-19) and 113 (2016-18), putting India ahead of the SDG target of below 70 by 2030 — though some states still lag significantly."
  },
  {
    id: 15,
    question: "The India State-Level Disease Burden Initiative, a collaboration between ICMR, IHME, and PHFI published in The Lancet in 2017, found that the top contributor to disease burden in India (by DALYs) had shifted from communicable to non-communicable diseases in which decade?",
    options: ["1980s", "1990s", "2000s", "2010s"],
    answer: 1,
    explanation: "The ICMR-IHME India State-Level Disease Burden Initiative (Lancet 2017) found that the dominant contribution to disease burden in India shifted from communicable, maternal, neonatal, and nutritional diseases to non-communicable diseases during the 1990s, though the transition year varied by state."
  },
  {
    id: 16,
    question: "According to the National Health Profile 2022, what is India's doctor-to-population ratio (allopathic doctors registered with State Medical Councils per 1000 population)?",
    options: ["1:834", "1:1456", "1:1854", "1:2000"],
    answer: 0,
    explanation: "The National Health Profile 2022 (published by CBHI) reported approximately 1 doctor per 834 population when considering all registered allopathic doctors, which is better than the WHO recommendation of 1:1000, but distribution is highly skewed towards urban areas."
  },
  {
    id: 17,
    question: "NFHS-5 (2019-21) reported what percentage of women aged 15-49 years were anaemic in India?",
    options: ["52.6%", "57.0%", "59.1%", "63.4%"],
    answer: 1,
    explanation: "NFHS-5 (2019-21) reported 57.0% of women aged 15-49 years were anaemic in India, an increase from 53.1% in NFHS-4 (2015-16). This increase in anaemia prevalence despite overall health improvements is a major concern highlighted in the survey."
  },
  {
    id: 18,
    question: "According to NFHS-5 (2019-21), what percentage of children aged 12-23 months were fully immunised in India?",
    options: ["62.4%", "67.3%", "71.6%", "76.4%"],
    answer: 2,
    explanation: "NFHS-5 (2019-21) reported 76.4% full immunisation coverage for children aged 12-23 months in India, a substantial increase from 62.4% in NFHS-4 (2015-16), driven by the intensification of Mission Indradhanush."
  },
  {
    id: 19,
    question: "The Global Burden of Disease Study 2019 (GBD 2019) reported that ischaemic heart disease was the leading cause of death in India. Approximately how many deaths per year did it account for?",
    options: ["1.2 million", "1.7 million", "2.1 million", "2.8 million"],
    answer: 1,
    explanation: "GBD 2019 reported that ischaemic heart disease was the leading cause of death in India, accounting for approximately 1.7 million deaths annually. This highlights the growing NCD burden in India, particularly cardiovascular disease."
  },
  {
    id: 20,
    question: "India's Census 2011 recorded the sex ratio at birth as how many females per 1000 males, and what was the child sex ratio (0-6 years)?",
    options: ["943 overall, 914 child sex ratio", "933 overall, 919 child sex ratio", "940 overall, 928 child sex ratio", "950 overall, 907 child sex ratio"],
    answer: 0,
    explanation: "Census 2011 recorded the overall sex ratio as 943 females per 1000 males and the child sex ratio (0-6 years) as 914 females per 1000 males, a decline from 927 in 2001, indicating the persistent problem of female foeticide despite PCPNDT Act."
  },
  {
    id: 21,
    question: "The WHO declared COVID-19 a Public Health Emergency of International Concern (PHEIC) on which date?",
    options: ["31 December 2019", "11 January 2020", "30 January 2020", "11 March 2020"],
    answer: 2,
    explanation: "WHO declared COVID-19 a PHEIC on 30 January 2020, and subsequently declared it a pandemic on 11 March 2020. The initial cluster of cases was reported to WHO on 31 December 2019 from Wuhan, China."
  },
  {
    id: 22,
    question: "The SARS-CoV-2 variant of concern (VOC) designated as 'Omicron' was first reported to WHO from which country in November 2021?",
    options: ["Botswana only", "South Africa only", "Both Botswana and South Africa", "Zimbabwe"],
    answer: 2,
    explanation: "The Omicron variant (B.1.1.529) was first reported to WHO on 24 November 2021 from both Botswana and South Africa. WHO designated it as a Variant of Concern on 26 November 2021, replacing Delta as the dominant circulating variant globally."
  },
  {
    id: 23,
    question: "India's first indigenous COVID-19 vaccine, Covaxin (BBV152), was developed by Bharat Biotech in collaboration with which institution?",
    options: ["AIIMS New Delhi", "Indian Council of Medical Research (ICMR) / National Institute of Virology (NIV)", "NIMHANS Bengaluru", "Serum Institute of India"],
    answer: 1,
    explanation: "Covaxin (BBV152) was developed by Bharat Biotech in collaboration with ICMR and the National Institute of Virology (NIV), Pune. The virus strain was isolated by NIV and provided to Bharat Biotech for vaccine development."
  },
  {
    id: 24,
    question: "The Nipah virus outbreak in Kerala in 2018 was traced to which animal reservoir, and how many deaths occurred?",
    options: ["Pigs; 17 deaths", "Bats (Pteropus fruit bats); 17 deaths", "Bats (Pteropus fruit bats); 10 deaths", "Civets; 21 deaths"],
    answer: 1,
    explanation: "The 2018 Kerala Nipah outbreak was traced to Pteropus fruit bats (flying foxes). There were 19 confirmed cases with 17 deaths (case fatality rate ~89%). The outbreak was in Kozhikode and Malappuram districts and was contained through robust contact tracing."
  },
  {
    id: 25,
    question: "WHO declared Mpox (formerly Monkeypox) a PHEIC in July 2022. In which year was the name officially changed from Monkeypox to Mpox by WHO?",
    options: ["2021", "2022", "2023", "2024"],
    answer: 1,
    explanation: "WHO officially renamed Monkeypox to Mpox in November 2022, following consultations with global experts and member states to find a name that was not stigmatising to any cultural, social, national, regional, or ethnic group."
  },
  {
    id: 26,
    question: "The COVAX facility, co-led by CEPI, Gavi, and WHO, aimed to deliver how many COVID-19 vaccine doses to participating economies by the end of 2021?",
    options: ["1 billion doses", "2 billion doses", "500 million doses", "1.5 billion doses"],
    answer: 1,
    explanation: "COVAX aimed to deliver at least 2 billion doses of COVID-19 vaccines by the end of 2021, enough to protect high-risk populations (approximately 20% of the population) in all participating economies. However, supply shortages and export restrictions meant the target was not met."
  },
  {
    id: 27,
    question: "The Democratic Republic of Congo (DRC) declared the end of its 14th Ebola outbreak in June 2020. This outbreak was in which province?",
    options: ["North Kivu", "Équateur", "Ituri", "South Kivu"],
    answer: 1,
    explanation: "The 14th Ebola outbreak in DRC was declared in Équateur province in June 2020 (declared over on 18 November 2020). The concurrent and more severe 10th/11th outbreak was in North Kivu and Ituri provinces (2018-2020), which was declared over in June 2020."
  },
  {
    id: 28,
    question: "India reported its first Zika virus disease outbreak in which state in 2021, with over 70 confirmed cases?",
    options: ["Rajasthan", "Madhya Pradesh", "Kerala", "Uttar Pradesh"],
    answer: 3,
    explanation: "India reported a Zika virus outbreak in Kanpur, Uttar Pradesh in October-November 2021, with over 100 confirmed cases. While earlier cases had been reported in Gujarat (2016-17) and Rajasthan (2018), the 2021 UP outbreak was the largest cluster reported in India."
  },
  {
    id: 29,
    question: "The H5N1 Highly Pathogenic Avian Influenza (HPAI) strain that caused a global epizootic since 2021 belongs to which clade?",
    options: ["2.3.2.1c", "2.3.4.4b", "2.2.1", "1.1.2"],
    answer: 1,
    explanation: "The H5N1 HPAI clade 2.3.4.4b has been responsible for the unprecedented global epizootic since 2021-2022, spreading across wild birds, poultry, and mammals across multiple continents. This clade has shown unusual spread to marine mammals and dairy cattle in the USA."
  },
  {
    id: 30,
    question: "India's COVID-19 vaccination programme, the world's largest, administered its 200 crore (2 billion) vaccine doses by which month in 2022?",
    options: ["February 2022", "May 2022", "July 2022", "October 2022"],
    answer: 2,
    explanation: "India crossed the milestone of 200 crore (2 billion) COVID-19 vaccine doses administered on 17 July 2022 under the CoWIN platform. The vaccination programme began on 16 January 2021 with healthcare workers as the priority group."
  },
  {
    id: 31,
    question: "The National Health Policy 2017 set a target to increase government health expenditure to what percentage of GDP by 2025?",
    options: ["1.5%", "2.5%", "3.0%", "5.0%"],
    answer: 1,
    explanation: "The National Health Policy 2017 set a target of increasing government health expenditure to 2.5% of GDP by 2025, up from approximately 1.15% at the time of the policy. India's current government health expenditure remains around 1.5% of GDP."
  },
  {
    id: 32,
    question: "Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY) was launched on which date in 2018?",
    options: ["23 September 2018", "15 August 2018", "14 April 2018", "2 October 2018"],
    answer: 0,
    explanation: "PM-JAY was officially launched on 23 September 2018 by Prime Minister Narendra Modi in Ranchi, Jharkhand. The Health and Wellness Centres (HWCs) component of Ayushman Bharat was launched on 14 April 2018 in Bijapur, Chhattisgarh."
  },
  {
    id: 33,
    question: "What is the annual health insurance cover provided per family under PM-JAY (Ayushman Bharat)?",
    options: ["Rs. 3 lakh", "Rs. 5 lakh", "Rs. 7 lakh", "Rs. 10 lakh"],
    answer: 1,
    explanation: "PM-JAY provides a health insurance cover of Rs. 5 lakh per family per year for secondary and tertiary care hospitalisation. It covers over 1,500 medical and surgical procedures and targets approximately 50 crore beneficiaries (bottom 40% of India's population)."
  },
  {
    id: 34,
    question: "The National Digital Health Mission (NDHM), subsequently renamed Ayushman Bharat Digital Mission (ABDM), was officially launched nationwide on which date?",
    options: ["15 August 2020", "27 September 2021", "15 November 2021", "1 January 2022"],
    answer: 1,
    explanation: "The Ayushman Bharat Digital Mission (ABDM) was officially launched by PM Modi on 27 September 2021, building on the pilot launched in 6 Union Territories on 15 August 2020 as NDHM. ABDM aims to develop the digital health ecosystem of India."
  },
  {
    id: 35,
    question: "The Ayushman Bharat Health Account (ABHA) ID is a unique health identification number. How many digits does an ABHA ID contain?",
    options: ["10 digits", "12 digits", "14 digits", "16 digits"],
    answer: 3,
    explanation: "The ABHA (Ayushman Bharat Health Account) ID is a 14-digit unique health identification number assigned to individuals under the Ayushman Bharat Digital Mission (ABDM). It enables sharing of health records digitally across healthcare providers with consent."
  },
  {
    id: 36,
    question: "e-Sanjeevani, India's national telemedicine service, achieved a milestone of how many consultations in 2022, making it one of the world's largest telemedicine services?",
    options: ["3 crore", "5 crore", "7 crore", "10 crore"],
    answer: 0,
    explanation: "e-Sanjeevani achieved 3 crore (30 million) telemedicine consultations by early 2022, making it one of the world's largest government-run telemedicine services. It was launched in November 2019 for doctor-to-doctor consultations (eSanjeevani) and in April 2020 for patient-to-doctor consultations (eSanjeevaniOPD)."
  },
  {
    id: 37,
    question: "The National Medical Commission (NMC) Act, 2019, which replaced the Medical Council of India (MCI), established how many autonomous boards under the NMC?",
    options: ["2 boards", "3 boards", "4 boards", "5 boards"],
    answer: 2,
    explanation: "The NMC Act 2019 established 4 autonomous boards under the National Medical Commission: (1) Under-Graduate Medical Education Board (UGMEB), (2) Post-Graduate Medical Education Board (PGMEB), (3) Medical Assessment and Rating Board (MARB), and (4) Ethics and Medical Registration Board (EMRB)."
  },
  {
    id: 38,
    question: "CoWIN (Covid Vaccine Intelligence Network) was developed by which ministry/organisation in India?",
    options: ["Ministry of Electronics and Information Technology (MeitY)", "Ministry of Health and Family Welfare (MoHFW) with NIC support", "ICMR", "National Health Authority (NHA)"],
    answer: 1,
    explanation: "CoWIN was developed under the Ministry of Health and Family Welfare (MoHFW) with the technical support of the National Informatics Centre (NIC). It served as the digital backbone of India's COVID-19 vaccination programme, enabling scheduling, registration, and certificate generation."
  },
  {
    id: 39,
    question: "Aarogya Setu, India's COVID-19 contact tracing app, uses which technology for contact tracing?",
    options: ["GPS only", "Bluetooth only", "Both Bluetooth and GPS", "QR code scanning"],
    answer: 2,
    explanation: "Aarogya Setu uses both Bluetooth and GPS technology for contact tracing. Bluetooth is used for proximity-based contact detection (within 2 metres), while GPS provides location data. The app was launched on 2 April 2020 and became one of the world's most downloaded COVID apps."
  },
  {
    id: 40,
    question: "The National Health Policy 2017 targets what percentage reduction in premature mortality from cardiovascular diseases, cancer, diabetes, and chronic respiratory diseases by 2025?",
    options: ["15%", "20%", "25%", "30%"],
    answer: 2,
    explanation: "The National Health Policy 2017 targets a 25% reduction in premature mortality from cardiovascular diseases, cancer, diabetes, and chronic respiratory diseases (NCDs) by 2025, aligning with the WHO's Global Action Plan for the Prevention and Control of NCDs."
  },
  {
    id: 41,
    question: "The 2023 Nobel Prize in Physiology or Medicine was awarded to Katalin Karikó and Drew Weissman for discoveries concerning which technology?",
    options: ["CRISPR gene editing", "Nucleoside base modifications enabling mRNA vaccines", "Monoclonal antibody therapy", "CAR-T cell immunotherapy"],
    answer: 1,
    explanation: "The 2023 Nobel Prize in Physiology or Medicine was awarded jointly to Katalin Karikó and Drew Weissman for their discoveries concerning nucleoside base modifications that enabled the development of effective mRNA vaccines against COVID-19. Their work was foundational to the Pfizer-BioNTech and Moderna vaccines."
  },
  {
    id: 42,
    question: "The 2024 Nobel Prize in Physiology or Medicine was awarded to Victor Ambros and Gary Ruvkun for the discovery of which biological mechanism?",
    options: ["RNA interference (RNAi)", "MicroRNA and its role in post-transcriptional gene regulation", "CRISPR-Cas9 gene editing", "Epigenetic modifications in cancer"],
    answer: 1,
    explanation: "The 2024 Nobel Prize in Physiology or Medicine was awarded to Victor Ambros and Gary Ruvkun for the discovery of microRNA and its role in post-transcriptional gene regulation. Their foundational work in C. elegans revealed a new class of small RNA molecules that regulate gene expression."
  },
  {
    id: 43,
    question: "India received certification from WHO for eliminating which disease as a public health problem in 2017, achieving fewer than 1 case per 10,000 population at the national level?",
    options: ["Kala-azar (Visceral Leishmaniasis)", "Lymphatic Filariasis", "Trachoma", "Yaws"],
    answer: 0,
    explanation: "India has been working towards elimination of Kala-azar (Visceral Leishmaniasis) as a public health problem (less than 1 case per 10,000 population at sub-district level). India was certified yaws-free by WHO in 2016. The Kala-azar elimination programme targets the endemic states of Bihar, Jharkhand, West Bengal, and UP."
  },
  {
    id: 44,
    question: "WHO certified India as yaws-free in which year, making it the first country to eliminate the disease?",
    options: ["2014", "2015", "2016", "2018"],
    answer: 2,
    explanation: "WHO certified India as yaws-free in 2016, making India the first country in the world to eliminate yaws. The elimination was achieved through the National Yaws Eradication Programme using mass treatment with azithromycin (Morges Strategy)."
  },
  {
    id: 45,
    question: "The Global Fund to Fight AIDS, Tuberculosis and Malaria approved its Seventh Replenishment at the New York conference in 2022. What was the target amount pledged for the 2023-2025 period?",
    options: ["$14 billion", "$18 billion", "$22 billion", "$25 billion"],
    answer: 0,
    explanation: "The Global Fund's Seventh Replenishment conference in September 2022 in New York pledged approximately $14.25 billion for the 2023-2025 grant cycle, falling short of the $18 billion target set by the Global Fund but still representing a significant commitment to fighting AIDS, TB, and malaria."
  },
  {
    id: 46,
    question: "GAVI, the Vaccine Alliance, secured a record replenishment commitment for 2021-2025. What was the total amount pledged at the June 2020 Global Vaccine Summit?",
    options: ["$5.3 billion", "$7.4 billion", "$8.8 billion", "$12 billion"],
    answer: 2,
    explanation: "At the Global Vaccine Summit hosted by the UK in June 2020, Gavi secured pledges of $8.8 billion for the 2021-2025 period, exceeding the $7.4 billion target. This was the largest replenishment in Gavi's history and included significant support for COVAX."
  },
  {
    id: 47,
    question: "The Coalition for Epidemic Preparedness Innovations (CEPI) was founded in 2017 at the World Economic Forum in Davos. It was established following which epidemic that highlighted the need for rapid vaccine development?",
    options: ["SARS 2002-03", "Swine flu 2009", "Ebola 2014-16 West Africa", "MERS 2012"],
    answer: 2,
    explanation: "CEPI was founded in January 2017 at the World Economic Forum in Davos, inspired primarily by the catastrophic 2014-2016 West African Ebola outbreak, which demonstrated the world's inability to develop vaccines quickly enough to respond to emerging epidemic threats."
  },
  {
    id: 48,
    question: "India's first state to be declared malaria-free by elimination criteria was which state, having reported zero indigenous cases for three consecutive years?",
    options: ["Goa", "Kerala", "Himachal Pradesh", "Uttarakhand"],
    answer: 2,
    explanation: "Himachal Pradesh was among the first Indian states to achieve zero indigenous malaria cases over consecutive years. As of 2023, several Himalayan states and union territories including Himachal Pradesh and Uttarakhand reported zero indigenous malaria cases, progressing towards official elimination certification."
  },
  {
    id: 49,
    question: "Dr. Soumya Swaminathan served as WHO Chief Scientist from 2019 to 2022. She is primarily known for her research contributions in which disease area?",
    options: ["HIV/AIDS and Tuberculosis", "Malaria and vector-borne diseases", "NCD and cardiovascular diseases", "Mental health and neurology"],
    answer: 0,
    explanation: "Dr. Soumya Swaminathan, who served as WHO Deputy Director-General (2017-2019) and then Chief Scientist (2019-2022), is primarily known for her research in HIV/AIDS and tuberculosis, particularly in paediatric TB. She previously served as Director General of ICMR."
  },
  {
    id: 50,
    question: "The 'Lancet Countdown on Health and Climate Change' 2023 report highlighted that in 2022, heat-related mortality in people over 65 years was increasing. What was the estimated number of heat-related deaths globally attributed to climate change per year according to this report?",
    options: ["166,000", "256,000", "489,000", "743,000"],
    answer: 1,
    explanation: "The Lancet Countdown 2023 report estimated that approximately 489,000 heat-related deaths occur globally per year, attributing a significant proportion to anthropogenic climate change. The report noted a 68% increase in heat-related mortality in people over 65 years compared to the 1990s baseline, with India among the most severely affected countries."
  }
]

export default questions
