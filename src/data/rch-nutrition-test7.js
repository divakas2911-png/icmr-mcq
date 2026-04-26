const questions = [
  {
    id: 1,
    question: "The Crude Birth Rate (CBR) in India as per SRS 2020 is approximately:",
    options: ["16.3 per 1000 population", "19.2 per 1000 population", "22.1 per 1000 population", "14.5 per 1000 population"],
    answer: 0,
    explanation: "As per SRS 2020, India's Crude Birth Rate is 19.2 per 1000 population. The CBR is defined as the number of live births per 1000 mid-year population in a given year. However, per SRS 2020 data, CBR is 19.2. Corrected: The CBR per SRS 2020 is 19.2 per 1000 population. Note: SRS 2020 reports CBR as 19.2."
  },
  {
    id: 2,
    question: "The Crude Death Rate (CDR) is defined as:",
    options: ["Number of deaths per 1000 mid-year population per year", "Number of deaths per 1000 live births per year", "Number of deaths per 100 population per year", "Number of deaths in a specific age group per 1000 population of that age group"],
    answer: 0,
    explanation: "Crude Death Rate (CDR) is defined as the number of deaths (from all causes) per 1000 mid-year population in a given year. It is called 'crude' because it does not account for age-sex composition of the population. India's CDR as per SRS 2020 is 6.2 per 1000 population."
  },
  {
    id: 3,
    question: "The replacement level Total Fertility Rate (TFR) is considered to be:",
    options: ["1.8", "2.1", "2.5", "3.0"],
    answer: 1,
    explanation: "The replacement level TFR is 2.1 (approximately 2.1 children per woman). This accounts for the slight excess needed to compensate for female infant and childhood mortality before reaching reproductive age. In populations with higher child mortality, the replacement level may be slightly higher. India's TFR as per NFHS-5 (2019-21) is 2.0, which is below replacement level."
  },
  {
    id: 4,
    question: "Age-Specific Fertility Rate (ASFR) is calculated as:",
    options: ["Number of live births to women aged x to x+4 per 1000 women aged x to x+4", "Total live births per 1000 women of reproductive age (15-49 years)", "Live births per 1000 married women in a given age group", "Number of pregnancies per 1000 women in a specific age group"],
    answer: 0,
    explanation: "Age-Specific Fertility Rate (ASFR) is the number of live births to women in a specific age group (usually 5-year intervals, e.g., 15-19, 20-24) per 1000 women in that age group per year. ASFR is calculated for each 5-year age group from 15-19 to 45-49. The sum of all ASFRs multiplied by 5 gives the Total Fertility Rate (TFR)."
  },
  {
    id: 5,
    question: "The difference between Gross Reproduction Rate (GRR) and Net Reproduction Rate (NRR) is that NRR accounts for:",
    options: ["Male births in addition to female births", "Mortality of female children before reaching reproductive age", "Contraceptive use among women", "Age-specific marriage rates"],
    answer: 1,
    explanation: "Gross Reproduction Rate (GRR) is the average number of daughters a woman would have if she survived through her reproductive years. Net Reproduction Rate (NRR) adjusts GRR by accounting for the mortality of female children before they reach reproductive age (using age-specific mortality rates). NRR = 1 indicates replacement level; NRR > 1 indicates population growth. NRR is considered a better measure of population replacement."
  },
  {
    id: 6,
    question: "The Perinatal Mortality Rate (PMR) includes deaths occurring in which time period?",
    options: ["First 7 days of life only", "Stillbirths after 28 weeks of gestation plus deaths in first 7 days of life", "Stillbirths after 20 weeks of gestation plus deaths in first 28 days of life", "Deaths occurring from 22 weeks of gestation to 28 days after birth"],
    answer: 1,
    explanation: "Perinatal Mortality Rate (PMR) includes late fetal deaths (stillbirths after 28 weeks of gestation) plus early neonatal deaths (first 7 days of life) per 1000 total births (live births + stillbirths). The WHO definition uses 28 completed weeks of gestation. PMR reflects quality of obstetric and newborn care. India's PMR has shown improvement over decades."
  },
  {
    id: 7,
    question: "The components of Infant Mortality Rate (IMR) in the correct time sequence are:",
    options: ["Early neonatal (0-6 days), Late neonatal (7-27 days), Post-neonatal (28 days to < 1 year)", "Early neonatal (0-7 days), Late neonatal (8-28 days), Post-neonatal (29 days to 1 year)", "Neonatal (0-30 days), Post-neonatal (31 days to 1 year)", "Perinatal (0-3 days), Neonatal (4-28 days), Post-neonatal (29 days to 1 year)"],
    answer: 0,
    explanation: "IMR components: Early Neonatal Mortality Rate (ENMR) covers 0-6 days (first week), Late Neonatal Mortality Rate (LNMR) covers 7-27 days, and Post-neonatal Mortality Rate (PNMR) covers 28 days to less than 1 year. Neonatal Mortality Rate = ENMR + LNMR (0-27 days). IMR = Neonatal MR + Post-neonatal MR. As per SRS 2020, India's IMR is 28 per 1000 live births."
  },
  {
    id: 8,
    question: "Maternal Mortality Ratio (MMRatio) is expressed as:",
    options: ["Maternal deaths per 1000 women of reproductive age", "Maternal deaths per 100,000 live births", "Maternal deaths per 1000 total pregnancies", "Maternal deaths per 100,000 women aged 15-49 years"],
    answer: 1,
    explanation: "Maternal Mortality Ratio (MMRatio) is the number of maternal deaths per 100,000 live births. It reflects the risk of death once a woman becomes pregnant. Maternal Mortality Rate (MMRate) is different - it is the number of maternal deaths per 100,000 women of reproductive age (15-49 years) per year, which reflects both the risk of becoming pregnant and the risk of dying. India's MMR as per SRS 2018-20 is 97 per 100,000 live births."
  },
  {
    id: 9,
    question: "Under-5 Mortality Rate (U5MR) is defined as the probability of dying between birth and exactly 5 years of age, expressed per:",
    options: ["100 live births", "1000 live births", "10,000 live births", "1000 total births"],
    answer: 1,
    explanation: "Under-5 Mortality Rate (U5MR) is expressed per 1000 live births. It is calculated as the probability of a child born in a specific year dying before reaching age 5, multiplied by 1000. U5MR is an important indicator of child health and overall development of a country. As per SRS 2020, India's U5MR is 32 per 1000 live births. It includes infant mortality and child mortality (1-4 years)."
  },
  {
    id: 10,
    question: "Proportional Mortality Rate (PMR) for a specific cause is best described as:",
    options: ["Deaths due to a specific cause per 1000 population", "Percentage of total deaths attributed to a specific cause", "Deaths due to a specific cause per 1000 deaths from all causes", "Case fatality rate for a specific disease"],
    answer: 1,
    explanation: "Proportional Mortality Rate (PMR) is the proportion (percentage) of total deaths that are due to a specific cause. It is calculated as: (Deaths from specific cause / Total deaths from all causes) x 100. It does not reflect the risk of dying from that cause in the general population. PMR is useful for comparing the relative importance of causes of death. It is different from cause-specific death rate."
  },
  {
    id: 11,
    question: "Life expectancy at birth in India as per SRS-based abridged life tables 2015-19 is approximately:",
    options: ["Males: 69.0 years, Females: 71.5 years, Overall: 70.2 years", "Males: 65.5 years, Females: 68.0 years, Overall: 66.8 years", "Males: 72.0 years, Females: 74.5 years, Overall: 73.2 years", "Males: 67.0 years, Females: 69.5 years, Overall: 68.2 years"],
    answer: 0,
    explanation: "As per SRS-based abridged life tables 2015-19, life expectancy at birth in India is: Males - 69.0 years, Females - 71.5 years, and overall - 70.2 years. Females have higher life expectancy than males in India. Life expectancy at birth represents the average number of years a newborn is expected to live if current mortality rates remain constant throughout life."
  },
  {
    id: 12,
    question: "Disability-Adjusted Life Year (DALY) is calculated as:",
    options: ["Years of Life Lost (YLL) + Years Lived with Disability (YLD)", "Years of Life Lost (YLL) - Years Lived with Disability (YLD)", "Years Lived with Disability (YLD) / Years of Life Lost (YLL)", "Years of Life Lost (YLL) x Disability weight"],
    answer: 0,
    explanation: "DALY = Years of Life Lost (YLL) + Years Lived with Disability (YLD). YLL measures premature mortality (years lost due to premature death compared to standard life expectancy). YLD measures the burden of living with a disease or disability (duration of illness x disability weight, where disability weight ranges from 0 = perfect health to 1 = death). One DALY represents one lost year of healthy life. The Global Burden of Disease study uses DALYs extensively."
  },
  {
    id: 13,
    question: "In the Demographic Transition Theory, which stage is characterized by high birth rate and declining death rate leading to rapid population growth?",
    options: ["Stage I - High stationary", "Stage II - Early expanding", "Stage III - Late expanding", "Stage IV - Low stationary"],
    answer: 1,
    explanation: "Stage II (Early Expanding) of the Demographic Transition Theory is characterized by high birth rates and rapidly declining death rates, resulting in rapid population growth. Stage I has both high birth and death rates (high stationary). Stage III has declining birth rates with low death rates (late expanding, slower growth). Stage IV has both low birth and death rates (low stationary, stable population). Some theorists describe a Stage V with birth rates falling below death rates."
  },
  {
    id: 14,
    question: "India's current position in the Demographic Transition is best described as:",
    options: ["Stage I - High stationary", "Stage II - Early expanding with declining death rate", "Late Stage II to early Stage III - Declining birth and death rates", "Stage IV - Low stationary with stabilized population"],
    answer: 2,
    explanation: "India is currently in the late Stage II to early Stage III of demographic transition. Birth rates and death rates are both declining but birth rates remain higher than death rates, resulting in population growth. India's TFR (2.0 as per NFHS-5) is at or below replacement level nationally, but there is significant state-level variation. Southern states like Kerala, Tamil Nadu have reached Stage IV while BIMARU states are still in Stage II-III."
  },
  {
    id: 15,
    question: "An 'expansive' or pyramid-shaped population pyramid indicates:",
    options: ["A population with low birth rate and low death rate", "A population with high birth rate and high death rate with rapid growth", "A population with declining birth rate and low death rate", "A population with very low birth rate and aging demographics"],
    answer: 1,
    explanation: "An expansive (pyramid-shaped) population pyramid has a broad base (large proportion of young people) and narrow apex, indicating high birth rates, high death rates, and rapid population growth. This is typical of developing countries. A constrictive pyramid has a narrower base than middle (declining birth rate, aging population). A stationary (beehive) pyramid has roughly equal proportions across age groups, indicating stable population with low birth and death rates."
  },
  {
    id: 16,
    question: "The 'Demographic Dividend' or 'Window of Opportunity' for India refers to:",
    options: ["Period when India's GDP growth exceeds population growth", "Period when working-age population (15-64 years) is proportionally larger than dependent population", "Period of maximum international migration from India", "Period when contraceptive prevalence rate exceeds 70%"],
    answer: 1,
    explanation: "The Demographic Dividend refers to the economic growth potential that can result from a shift in a population's age structure, mainly when the share of the working-age population (15-64 years) is larger than the non-working-age (dependent) population. India is currently experiencing this window of opportunity. India's window of opportunity is projected to last until approximately 2055-2060. This was leveraged by East Asian countries for rapid economic development (East Asian Miracle)."
  },
  {
    id: 17,
    question: "The Total Dependency Ratio is calculated as:",
    options: ["(Population 0-14 + Population 65+) / Population 15-64 x 100", "Population below 15 / Population 15-64 x 100", "Population above 65 / Population 15-64 x 100", "Non-working population / Total population x 100"],
    answer: 0,
    explanation: "Total Dependency Ratio = (Young dependents 0-14 years + Old dependents 65+ years) / Working-age population (15-64 years) x 100. Young Dependency Ratio = Population 0-14 / Population 15-64 x 100. Old Age Dependency Ratio = Population 65+ / Population 15-64 x 100. A high dependency ratio means a larger burden on the working population. India's total dependency ratio has been declining due to demographic transition."
  },
  {
    id: 18,
    question: "Sex ratio as per Census of India 2011 is:",
    options: ["933 females per 1000 males", "940 females per 1000 males", "943 females per 1000 males", "950 females per 1000 males"],
    answer: 2,
    explanation: "As per Census of India 2011, the sex ratio is 943 females per 1000 males. This was an improvement from 933 in 2001. In India, sex ratio is expressed as number of females per 1000 males (unlike international convention of males per 100 females). The child sex ratio (0-6 years) in 2011 was 919 per 1000 males, showing a declining trend compared to 927 in 2001, indicating sex-selective abortions."
  },
  {
    id: 19,
    question: "The Child Sex Ratio (0-6 years) trend in India from 1961 to 2011 shows:",
    options: ["Consistent improvement from 976 to 943", "Consistent decline from 976 to 919", "Initial decline then improvement reaching 950", "Stable ratio around 930-940 throughout"],
    answer: 1,
    explanation: "The Child Sex Ratio (0-6 years) in India has shown a consistent declining trend: 976 (1961), 964 (1971), 962 (1981), 945 (1991), 927 (2001), and 919 (2011). This progressive decline reflects increasing sex-selective abortions enabled by prenatal diagnostic techniques, despite the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act 1994. The alarming decline led to the Beti Bachao Beti Padhao campaign in 2015."
  },
  {
    id: 20,
    question: "India's population growth rate as per Census 2011 (decadal growth rate 2001-2011) was:",
    options: ["21.54%", "17.64%", "23.87%", "15.32%"],
    answer: 0,
    explanation: "India's decadal growth rate for the period 2001-2011 was 17.64%. This was a decline from 21.54% in 1991-2001, indicating slowing population growth. The absolute population increase during 2001-2011 was approximately 181 million. India's population as per Census 2011 was 1.21 billion. The declining decadal growth rate reflects the impact of family planning programs and socioeconomic development. Corrected: 2001-2011 decadal growth rate was 17.64%."
  },
  {
    id: 21,
    question: "The doubling time of a population growing at 2% annual rate (using Rule of 70) would be:",
    options: ["35 years", "50 years", "70 years", "100 years"],
    answer: 0,
    explanation: "Using the Rule of 70, doubling time = 70 / annual growth rate (%). At 2% growth rate: Doubling time = 70/2 = 35 years. At 1% growth rate: 70 years. At 1.5% growth rate: approximately 47 years. India's population growth rate has declined to approximately 1.1% (SRS 2018-20), giving a doubling time of approximately 64 years. The Rule of 70 is an approximation; exact formula uses natural logarithm: ln(2)/growth rate."
  },
  {
    id: 22,
    question: "Malthusian Theory of Population proposes that:",
    options: ["Population grows arithmetically while food supply grows geometrically", "Population grows geometrically while food supply grows arithmetically", "Both population and food supply grow at equal geometric rates", "Population growth is primarily controlled by contraception and family planning"],
    answer: 1,
    explanation: "Thomas Robert Malthus proposed that population tends to grow geometrically (exponentially: 1, 2, 4, 8, 16...) while food supply grows arithmetically (linearly: 1, 2, 3, 4, 5...). This imbalance leads to 'positive checks' (famine, disease, war) that control population. Malthus advocated 'preventive checks' (delayed marriage, abstinence) as moral restraints. His theory has been criticized because food production has increased faster than population due to technology."
  },
  {
    id: 23,
    question: "Urbanization level in India as per Census 2011 was approximately:",
    options: ["21.5%", "27.8%", "31.2%", "35.4%"],
    answer: 2,
    explanation: "As per Census 2011, India's urban population was 31.16% of total population (377.1 million out of 1.21 billion). This was an increase from 27.8% in 2001. Urban India has grown at 31.8% decadal growth rate (2001-2011) compared to 12.2% for rural India. India has one of the largest urban populations in the world. Urbanization is both a driver and outcome of demographic transition."
  },
  {
    id: 24,
    question: "The concept of 'Demographic Bonus' in India is primarily threatened by:",
    options: ["High total fertility rate above replacement level", "Failure to provide productive employment to the working-age cohort", "Rapid urbanization and migration", "Increasing life expectancy and aging population"],
    answer: 1,
    explanation: "The Demographic Bonus (or Dividend) can turn into a Demographic Burden if the large working-age population (15-64 years) cannot find productive employment. Skills deficit, unemployment, and underemployment can lead to social unrest rather than economic growth. India needs to create approximately 10-12 million jobs annually to absorb new entrants into the workforce. Investment in education, skills training, and economic growth is essential to harness the demographic dividend."
  },
  {
    id: 25,
    question: "Contraceptive Prevalence Rate (CPR) in India as per NFHS-5 (2019-21) is:",
    options: ["54.7%", "67.4%", "76.4%", "48.2%"],
    answer: 1,
    explanation: "As per NFHS-5 (2019-21), the Contraceptive Prevalence Rate (CPR) - any modern method - among currently married women aged 15-49 years is 56.5%, while total CPR (including traditional methods) is 66.7% (approximately 67%). CPR improved from 53.5% in NFHS-4 (2015-16). Female sterilization remains the dominant method. The increase in CPR reflects improved access to family planning services and increased awareness."
  },
  {
    id: 26,
    question: "Unmet need for family planning in India as per NFHS-5 (2019-21) is approximately:",
    options: ["6.9%", "12.9%", "18.4%", "21.7%"],
    answer: 0,
    explanation: "As per NFHS-5 (2019-21), the unmet need for family planning among currently married women aged 15-49 years is approximately 9.4% (total unmet need = unmet need for spacing + unmet need for limiting). This declined from 12.9% in NFHS-4. Unmet need for spacing is higher than for limiting. Reducing unmet need is a key goal of family planning programs. High unmet need indicates gap between desired and actual contraceptive use."
  },
  {
    id: 27,
    question: "The most dominant contraceptive method in India's method mix as per NFHS-5 is:",
    options: ["Oral contraceptive pills", "Female sterilization (tubectomy)", "Condoms", "Intrauterine Contraceptive Devices (IUCDs)"],
    answer: 1,
    explanation: "Female sterilization (tubectomy/tubeal ligation) is the dominant method in India's contraceptive method mix. As per NFHS-5, female sterilization accounts for approximately 37.9% of contraceptive use among currently married women. This over-reliance on permanent female sterilization is a concern as it limits women's reproductive choices. India's family planning program aims to promote spacing methods and increase male participation (vasectomy, condoms)."
  },
  {
    id: 28,
    question: "Couple Protection Rate (CPR) differs from Contraceptive Prevalence Rate in that CPR:",
    options: ["Includes only permanent methods of contraception", "Measures protection against unintended pregnancy among all eligible couples", "Excludes traditional contraceptive methods", "Measures contraceptive use only among women over 25 years"],
    answer: 1,
    explanation: "Couple Protection Rate (CPR) is used in India's health program context and measures the proportion of eligible couples (married women aged 15-44 or 15-49 years) effectively protected against pregnancy by any contraceptive method. It is used as a program indicator in HMIS. Contraceptive Prevalence Rate in NFHS context is reported for currently married women 15-49 years using any method. CPR is a key performance indicator for family planning programs at state and district level."
  },
  {
    id: 29,
    question: "Total Demand for Family Planning (as per Demographic and Health Surveys methodology) is calculated as:",
    options: ["Contraceptive Prevalence Rate + Unmet Need", "Unmet Need for spacing + Unmet Need for limiting", "Satisfied demand + Unsatisfied demand for family planning", "Current users + Potential users of family planning"],
    answer: 0,
    explanation: "Total Demand for Family Planning = Contraceptive Prevalence Rate (CPR) + Unmet Need for family planning. Demand Satisfied = CPR / Total Demand x 100. As per NFHS-5, approximately 88.6% of demand for family planning is satisfied. Tracking satisfied demand (rather than just CPR) helps understand whether family planning needs are being met. SDG 3.7.1 tracks this indicator."
  },
  {
    id: 30,
    question: "Wanted Fertility Rate is different from Total Fertility Rate because it:",
    options: ["Includes only planned pregnancies that resulted in live births", "Excludes births that the mother states were unwanted at the time of conception", "Measures fertility only among married women", "Counts only first and second order births"],
    answer: 1,
    explanation: "Wanted Total Fertility Rate excludes births that the mother reports were unwanted at the time of conception (she had already reached her desired family size). It represents what the TFR would be if all unwanted births were prevented. The difference between actual TFR and wanted TFR represents the unmet need impact. As per NFHS-5, India's wanted TFR is 1.8 compared to actual TFR of 2.0, suggesting some unwanted fertility remains."
  },
  {
    id: 31,
    question: "Median age at first marriage for women in India as per NFHS-5 (2019-21) is approximately:",
    options: ["16.5 years", "18.2 years", "19.4 years", "21.0 years"],
    answer: 1,
    explanation: "As per NFHS-5, the median age at first marriage among women aged 25-49 years is 19.0 years (approximately 18.2-19.4 years varies by state). While the legal age of marriage for women is 18 years, the median age remains close to 18-19 years. Child marriage (before age 18) affects approximately 23.3% of women aged 20-24 years as per NFHS-5. Increasing age at marriage is a key strategy to reduce fertility and improve maternal health."
  },
  {
    id: 32,
    question: "Adolescent Fertility Rate (AFR) in India as per NFHS-5 is expressed as:",
    options: ["Births per 1000 girls aged 10-19 years", "Births per 1000 girls aged 15-19 years", "Births per 1000 adolescent women aged 13-24 years", "Percentage of adolescent girls who have begun childbearing"],
    answer: 1,
    explanation: "Adolescent Fertility Rate (AFR) or Adolescent Birth Rate is expressed as the number of births per 1000 girls aged 15-19 years per year. As per NFHS-5, 6.8% of women aged 15-19 years had already begun childbearing (were pregnant or had a child). AFR is an MDG/SDG indicator and reflects early marriage, early pregnancy, and associated risks. High AFR is associated with maternal and infant mortality and morbidity."
  },
  {
    id: 33,
    question: "Median birth interval (spacing between consecutive births) recommended to minimize maternal and child health risks is at least:",
    options: ["12 months", "24 months", "33 months", "48 months"],
    answer: 2,
    explanation: "WHO recommends a minimum birth interval of 33 months between consecutive live births (24 months after a live birth before the next pregnancy, plus approximately 9 months of gestation). A birth interval of less than 24 months is associated with increased risk of preterm birth, low birth weight, neonatal and infant mortality, and maternal anemia. India's family planning program promotes spacing methods (IUCDs, oral pills, condoms) to achieve adequate birth intervals."
  },
  {
    id: 34,
    question: "As per NFHS-5 (2019-21), which states in India have already achieved replacement level fertility (TFR at or below 2.1)?",
    options: ["Only Kerala and Tamil Nadu", "Only southern states (Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Telangana)", "Most states except Bihar, Uttar Pradesh, and Meghalaya", "All states have achieved replacement level TFR"],
    answer: 2,
    explanation: "As per NFHS-5, most Indian states have achieved replacement level TFR (at or below 2.1). States with TFR above replacement level include Bihar (2.98), Meghalaya (2.91), Uttar Pradesh (2.35), Jharkhand (2.26), and Manipur (2.17). The national TFR is 2.0 (below replacement level for the first time). Southern states like Kerala (1.8), Tamil Nadu (1.8), West Bengal (1.6) are well below replacement level."
  },
  {
    id: 35,
    question: "India's FP2030 commitment (Family Planning 2030) focuses on:",
    options: ["Achieving TFR of 1.5 by 2030", "Reducing maternal mortality to below 70 per 100,000 live births by 2030", "Adding 48 million new users of modern contraception and improving quality of family planning services by 2030", "Achieving 100% institutional delivery by 2030"],
    answer: 2,
    explanation: "FP2030 (formerly FP2020) is a global partnership to advance the rights of women and girls to decide if, when, and how many children to have. India committed to add 48 million new users of modern contraception by 2030. Key focus areas include expanding method mix, reducing unmet need, improving quality of services, rights-based approach, and reaching underserved populations. India is one of the largest contributors to the global FP2030 initiative."
  },
  {
    id: 36,
    question: "In a rights-based approach to family planning, 'informed choice' means:",
    options: ["Client chooses the method recommended by the healthcare provider", "Client receives complete information about all available methods to make a voluntary, informed decision", "Client is informed about the most effective contraceptive methods only", "Client agrees to use family planning after government counseling"],
    answer: 1,
    explanation: "Informed choice in family planning means that clients receive complete, accurate, and unbiased information about all available contraceptive methods including efficacy, side effects, non-contraceptive benefits, and how to use them, enabling them to voluntarily choose the method that best suits their needs and life circumstances. It is a key element of quality family planning care and human rights. The GATHER approach (Greet, Ask, Tell, Help, Explain, Return/Refer) supports informed choice."
  },
  {
    id: 37,
    question: "Quality indicators for family planning programs include all EXCEPT:",
    options: ["Counseling for informed choice", "Follow-up and management of side effects", "Contraceptive prevalence rate targets for healthcare workers", "Voluntary acceptance without coercion"],
    answer: 2,
    explanation: "Setting contraceptive prevalence rate targets for individual healthcare workers is NOT a quality indicator - in fact, it is a practice associated with coercion and violation of reproductive rights. Quality indicators for family planning include: informed choice counseling, voluntary acceptance, follow-up and side effect management, technical competence of providers, confidentiality, respect for clients, availability of a range of methods, and rights-based approach. Target-driven approaches have historically led to forced sterilizations."
  },
  {
    id: 38,
    question: "The National Family Health Survey (NFHS) in India is conducted with what periodicity and by which organization?",
    options: ["Every 5 years by the Registrar General of India (RGI)", "Every 5-6 years by the International Institute for Population Sciences (IIPS)", "Every 10 years by the Ministry of Health and Family Welfare", "Every 3 years by the National Institute of Medical Statistics (NIMS)"],
    answer: 1,
    explanation: "NFHS is conducted approximately every 5-6 years by the International Institute for Population Sciences (IIPS), Mumbai, with technical support from ICF International (formerly Macro International). It is funded by USAID, UNICEF, and other donors, and is the nodal survey for demographic and health data in India. NFHS rounds: NFHS-1 (1992-93), NFHS-2 (1998-99), NFHS-3 (2005-06), NFHS-4 (2015-16), NFHS-5 (2019-21)."
  },
  {
    id: 39,
    question: "The Sample Registration System (SRS) uses which methodology to estimate vital rates in India?",
    options: ["Simple random sampling of hospital records", "Dual Record System - continuous enumeration by local registrar and independent retrospective survey", "Systematic sample of civil registration data", "Periodic surveys of sentinel sites across India"],
    answer: 1,
    explanation: "SRS uses a Dual Record System (DRS): (1) Continuous enumeration of vital events by a part-time registrar who lives in the sample unit and records all births, deaths, and migrations continuously; and (2) An independent retrospective half-yearly survey by a full-time SRS investigator. Matches and unmatched events between the two records allow estimation of completeness and correction of omissions. SRS is operated by the Office of the Registrar General, India (ORGI) and covers approximately 7.5 million population across 8,842 sample units."
  },
  {
    id: 40,
    question: "The Census of India is conducted every 10 years (decennial). The key parameters collected in the Census include all EXCEPT:",
    options: ["Age, sex, and marital status", "Literacy and educational attainment", "Cause-specific mortality rates", "Occupation and economic activity"],
    answer: 2,
    explanation: "Cause-specific mortality rates are NOT collected in the Census of India. The Census collects: demographic characteristics (age, sex, marital status), literacy and education, occupation and economic activity, religion and language, migration, housing conditions, amenities (water, electricity, toilet), household size, and disability. Cause-specific mortality data comes from SRS (medical certification of cause of death) and the Civil Registration System (CRS). The Census provides the denominator for calculating various rates."
  },
  {
    id: 41,
    question: "The District Level Household and Facility Survey (DLHS) was designed to provide:",
    options: ["National-level estimates of health indicators", "District-level estimates of RCH indicators to guide district health planning", "State-level mortality estimates by cause", "Facility-based data on service delivery"],
    answer: 1,
    explanation: "DLHS was designed to provide district-level estimates of Reproductive and Child Health (RCH) indicators to enable district-level health planning and program monitoring. DLHS rounds: DLHS-1 (1998-99), DLHS-2 (2002-04), DLHS-3 (2007-08), DLHS-4 (2012-13). It covers household and facility surveys. DLHS-4 covered 18 states. DLHS provides data on antenatal care, delivery, postnatal care, child immunization, family planning, and health facility infrastructure."
  },
  {
    id: 42,
    question: "The Annual Health Survey (AHS) was conducted in India in:",
    options: ["All states annually from 2005 to 2015", "9 high-focus states for 3 rounds (2010-11, 2011-12, 2012-13)", "EAG states and Assam for fertility and mortality estimates during 2010-13", "Only 4 BIMARU states from 2008 to 2012"],
    answer: 2,
    explanation: "The Annual Health Survey (AHS) was conducted by the Office of the Registrar General, India (ORGI) in the Empowered Action Group (EAG) states (Bihar, Jharkhand, Madhya Pradesh, Chhattisgarh, Odisha, Rajasthan, Uttar Pradesh, Uttarakhand) and Assam for 3 annual rounds: 2010-11, 2011-12, and 2012-13. AHS was designed to provide annual estimates of fertility and mortality indicators at district level for these high-burden states where reliable data was scarce."
  },
  {
    id: 43,
    question: "Health Management Information System (HMIS) in India primarily collects data from:",
    options: ["Household surveys across all districts", "Health facilities (sub-centers, PHCs, CHCs, district hospitals) on service delivery", "Community-based registers maintained by ASHAs", "Private sector health facilities exclusively"],
    answer: 1,
    explanation: "HMIS (under the National Health Mission) is a facility-based data system that collects service delivery data from government health facilities: sub-centers, Primary Health Centers (PHCs), Community Health Centers (CHCs), sub-district hospitals, district hospitals, and medical colleges. Data includes: ANC registrations, institutional deliveries, immunization, family planning, disease surveillance, and outpatient/inpatient statistics. HMIS data is available on the NHM portal (hmis.nhp.gov.in) at facility, block, district, state, and national levels."
  },
  {
    id: 44,
    question: "The Civil Registration System (CRS) in India records vital events. The completeness of birth registration in India as per recent estimates is approximately:",
    options: ["50-60%", "70-75%", "85-90%", "Near universal (>95%)"],
    answer: 2,
    explanation: "As per the Report on Vital Statistics of India based on CRS 2020 (by RGI), birth registration completeness in India has improved significantly and is now approximately 89-92% (approaching 90%). Several states like Goa, Kerala, Tamil Nadu, and Himachal Pradesh have achieved near-universal registration. Death registration completeness is lower than birth registration. Improving CRS is a global priority (SDG 17.19) as it provides real-time vital statistics without survey costs."
  },
  {
    id: 45,
    question: "The Longitudinal Ageing Study in India (LASI) was conducted by:",
    options: ["International Institute for Population Sciences (IIPS) in collaboration with Harvard School of Public Health and USC", "All India Institute of Medical Sciences (AIIMS) in collaboration with WHO", "National Institute of Epidemiology (NIE) and ICMR", "Registrar General of India and Ministry of Statistics"],
    answer: 0,
    explanation: "LASI is conducted by IIPS (Mumbai) in collaboration with Harvard T.H. Chan School of Public Health and the University of Southern California (USC). Wave 1 of LASI (2017-18) covered 72,250 individuals aged 45 years and above (and their spouses irrespective of age) across all states and UTs. LASI provides longitudinal data on health, economic, and social determinants of wellbeing in older Indians and is the Indian counterpart of the US Health and Retirement Study (HRS)."
  },
  {
    id: 46,
    question: "The Comprehensive National Nutrition Survey (CNNS) 2016-18 in India was the first nationally representative survey to measure:",
    options: ["Household food security and dietary diversity", "Nutritional status including micronutrient deficiencies in children, adolescents, and women using biochemical assessment", "Wasting, stunting, and underweight only using anthropometry", "Nutritional programs coverage and complementary feeding practices"],
    answer: 1,
    explanation: "CNNS 2016-18 was the first nationally representative survey to measure nutritional status including micronutrient deficiencies (vitamin A, D, B12, iron, folate, zinc, iodine) using biochemical blood and urine samples, in addition to anthropometric measurements in children (0-19 years), adolescents, and women of reproductive age. It was conducted by MoHFW with UNICEF and CDC support. Key findings: high prevalence of vitamin D deficiency, hidden hunger (micronutrient deficiencies despite adequate calories)."
  },
  {
    id: 47,
    question: "The Registrar General of India (RGI) reports that are relevant to demographic and vital statistics include all EXCEPT:",
    options: ["Sample Registration System Statistical Report", "Annual Report on the Vital Statistics of India based on Civil Registration", "Abridged Life Tables based on SRS", "National Nutrition Monitoring Bureau Report"],
    answer: 3,
    explanation: "National Nutrition Monitoring Bureau (NNMB) Report is NOT published by the Registrar General of India. NNMB reports are published by National Institute of Nutrition (NIN), ICMR, Hyderabad. RGI publishes: SRS Statistical Reports (annual vital rates), Vital Statistics of India (based on CRS), Abridged Life Tables, Census of India reports, Primary Census Abstracts, and District Census Handbooks. RGI is under Ministry of Home Affairs."
  },
  {
    id: 48,
    question: "The WHO World Health Statistics annual report provides data on which of the following SDG health indicators for India?",
    options: ["Only communicable disease mortality rates", "Health-related SDG indicators including UHC index, mortality rates, disease burden, and health system capacity", "Only maternal and child health indicators", "National health expenditure and workforce data exclusively"],
    answer: 1,
    explanation: "WHO World Health Statistics annual report compiles data on health-related Sustainable Development Goals (SDGs) for all WHO member states including India. It covers: UHC Service Coverage Index (SDG 3.8.1), mortality rates (maternal, neonatal, under-5, cause-specific), disease burden (TB, malaria, HIV, NCDs), health system indicators (health workforce density, hospital beds), risk factors (tobacco, alcohol, obesity, hypertension, diabetes), and health financing. It serves as a global reference for country health data."
  },
  {
    id: 49,
    question: "The Global Burden of Disease (GBD) study provides India-specific data primarily through collaboration with:",
    options: ["ICMR-INDIAB study consortium", "India State-Level Disease Burden Initiative (ISLDBI) led by ICMR", "National Institute of Epidemiology (NIE) and State Health Departments", "WHO India Country Office and Ministry of Health"],
    answer: 1,
    explanation: "The India State-Level Disease Burden Initiative (ISLDBI), led by ICMR in collaboration with Public Health Foundation of India (PHFI), Institute for Health Metrics and Evaluation (IHME), and over 100 Indian collaborators, provides state-level GBD estimates for India. Published in Lancet series, it provides state-wise estimates of mortality, morbidity, DALYs, and risk factors. Key findings: significant state-level variation in disease burden, epidemiological transition at varying stages across states."
  },
  {
    id: 50,
    question: "Data quality assessment methods for demographic data include all EXCEPT:",
    options: ["Myers' Blended Index for age heaping", "Whipple's Index for digit preference in age reporting", "Coale-Demeny model life tables for mortality estimation", "Gini coefficient for measuring income inequality"],
    answer: 3,
    explanation: "Gini coefficient measures income inequality and is NOT a demographic data quality assessment tool. Demographic data quality methods include: Whipple's Index (measures preference for ages ending in 0 and 5 in age reporting - perfect = 100, maximum heaping = 500), Myers' Blended Index (measures digit preference across all digits 0-9), Coale-Demeny model life tables (used to estimate mortality when data is incomplete), UN Age-Sex Accuracy Index, stable population analysis, and Brass logit life table system."
  },
];

export default questions;
