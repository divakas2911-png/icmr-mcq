import { useState } from 'react'
import TestDetail from './TestDetail'
import TestScreen from './TestScreen'
import ResultScreen from './ResultScreen'
import biostatTest1 from './data/biostatistics-test1'
import biostatTest2 from './data/biostatistics-test2'
import biostatTest3 from './data/biostatistics-test3'
import biostatTest4 from './data/biostatistics-test4'
import biostatTest5 from './data/biostatistics-test5'
import biostatTest6 from './data/biostatistics-test6'
import biostatTest7 from './data/biostatistics-test7'
import biostatTest8 from './data/biostatistics-test8'
import rmTest1 from './data/research-methodology-test1'
import rmTest2 from './data/research-methodology-test2'
import rmTest3 from './data/research-methodology-test3'
import rmTest4 from './data/research-methodology-test4'
import rmTest5 from './data/research-methodology-test5'
import rmTest6 from './data/research-methodology-test6'
import rmTest7 from './data/research-methodology-test7'
import rmTest8 from './data/research-methodology-test8'
import dtTest1 from './data/diagnostic-tests-test1'
import dtTest2 from './data/diagnostic-tests-test2'
import dtTest3 from './data/diagnostic-tests-test3'
import dtTest4 from './data/diagnostic-tests-test4'
import dtTest5 from './data/diagnostic-tests-test5'
import dtTest6 from './data/diagnostic-tests-test6'
import dtTest7 from './data/diagnostic-tests-test7'
import dtTest8 from './data/diagnostic-tests-test8'
import cdTest1 from './data/communicable-diseases-test1'
import cdTest2 from './data/communicable-diseases-test2'
import cdTest3 from './data/communicable-diseases-test3'
import cdTest4 from './data/communicable-diseases-test4'
import cdTest5 from './data/communicable-diseases-test5'
import cdTest6 from './data/communicable-diseases-test6'
import cdTest7 from './data/communicable-diseases-test7'
import cdTest8 from './data/communicable-diseases-test8'
import ncdTest1 from './data/non-communicable-diseases-test1'
import ncdTest2 from './data/non-communicable-diseases-test2'
import ncdTest3 from './data/non-communicable-diseases-test3'
import ncdTest4 from './data/non-communicable-diseases-test4'
import ncdTest5 from './data/non-communicable-diseases-test5'
import ncdTest6 from './data/non-communicable-diseases-test6'
import ncdTest7 from './data/non-communicable-diseases-test7'
import ncdTest8 from './data/non-communicable-diseases-test8'
import rchTest1 from './data/rch-nutrition-test1'
import rchTest2 from './data/rch-nutrition-test2'
import rchTest3 from './data/rch-nutrition-test3'
import rchTest4 from './data/rch-nutrition-test4'
import rchTest5 from './data/rch-nutrition-test5'
import rchTest6 from './data/rch-nutrition-test6'
import rchTest7 from './data/rch-nutrition-test7'
import rchTest8 from './data/rch-nutrition-test8'
import geneticsTest1 from './data/genetics-test1'
import geneticsTest2 from './data/genetics-test2'
import geneticsTest3 from './data/genetics-test3'
import geneticsTest4 from './data/genetics-test4'
import geneticsTest5 from './data/genetics-test5'
import geneticsTest6 from './data/genetics-test6'
import geneticsTest7 from './data/genetics-test7'
import geneticsTest8 from './data/genetics-test8'
import geneticsTest9 from './data/genetics-test9'
import geneticsTest10 from './data/genetics-test10'
import geneticsTest11 from './data/genetics-test11'
import geneticsTest12 from './data/genetics-test12'
import geneticsTest13 from './data/genetics-test13'
import geneticsTest14 from './data/genetics-test14'
import geneticsTest15 from './data/genetics-test15'
import geneticsTest16 from './data/genetics-test16'
import molecularBiologyTest1 from './data/molecular-biology-test1'
import molecularBiologyTest2 from './data/molecular-biology-test2'
import molecularBiologyTest3 from './data/molecular-biology-test3'
import molecularBiologyTest4 from './data/molecular-biology-test4'
import molecularBiologyTest5 from './data/molecular-biology-test5'
import molecularBiologyTest6 from './data/molecular-biology-test6'
import molecularBiologyTest7 from './data/molecular-biology-test7'
import molecularBiologyTest8 from './data/molecular-biology-test8'
import molecularBiologyTest9 from './data/molecular-biology-test9'
import molecularBiologyTest10 from './data/molecular-biology-test10'
import molecularBiologyTest11 from './data/molecular-biology-test11'
import molecularBiologyTest12 from './data/molecular-biology-test12'
import molecularBiologyTest13 from './data/molecular-biology-test13'
import molecularBiologyTest14 from './data/molecular-biology-test14'
import molecularBiologyTest15 from './data/molecular-biology-test15'
import molecularBiologyTest16 from './data/molecular-biology-test16'
import microscopyStainingTest1 from './data/microscopy-staining-microbial-test1'
import bioethicsTest1 from './data/bioethics-test1'
import bioethicsTest2 from './data/bioethics-test2'
import bioethicsTest3 from './data/bioethics-test3'
import bioethicsTest4 from './data/bioethics-test4'
import bioethicsTest5 from './data/bioethics-test5'
import bioethicsTest6 from './data/bioethics-test6'
import bioethicsTest7 from './data/bioethics-test7'
import bioethicsTest8 from './data/bioethics-test8'
import englishIdiomsTest1 from './data/english-idioms-test1'
import englishIdiomsTest2 from './data/english-idioms-test2'
import englishPhrasesTest1 from './data/english-phrases-test1'
import englishPhrasesTest2 from './data/english-phrases-test2'
import englishSpellingsTest1 from './data/english-spellings-test1'
import englishSpellingsTest2 from './data/english-spellings-test2'
import englishAnimalGroupsTest1 from './data/english-animal-groups-test1'
import englishAnimalGroupsTest2 from './data/english-animal-groups-test2'
import englishSynonymsTest1 from './data/english-synonyms-test1'
import englishSynonymsTest2 from './data/english-synonyms-test2'
import englishMeaningsTest1 from './data/english-meanings-test1'
import englishMeaningsTest2 from './data/english-meanings-test2'
import englishAntonymsTest1 from './data/english-antonyms-test1'
import englishAntonymsTest2 from './data/english-antonyms-test2'
import gkHealthAffairsTest1 from './data/gk-health-affairs-test1'
import gkHealthAffairsTest2 from './data/gk-health-affairs-test2'
import gkGovtSchemesTest1 from './data/gk-govt-schemes-test1'
import gkGovtSchemesTest2 from './data/gk-govt-schemes-test2'
import gkIcmrTest1 from './data/gk-icmr-test1'
import gkIcmrTest2 from './data/gk-icmr-test2'
import gkHealthBodiesTest1 from './data/gk-health-bodies-test1'
import gkHealthBodiesTest2 from './data/gk-health-bodies-test2'
import mockTest1 from './data/mock-test-1'
import mockTest2 from './data/mock-test-2'
import mockTest3 from './data/mock-test-3'
import mockTest4 from './data/mock-test-4'
import mockTest5 from './data/mock-test-5'
import mockTest6 from './data/mock-test-6'
import mockTest7 from './data/mock-test-7'
import mockTest8 from './data/mock-test-8'
import mockTest9 from './data/mock-test-9'
import mockTest10 from './data/mock-test-10'
import mockTest11 from './data/mock-test-11'
import mockTest12 from './data/mock-test-12'
import mockTest13 from './data/mock-test-13'
import mockTest14 from './data/mock-test-14'
import mockTest15 from './data/mock-test-15'
import mockTest16 from './data/mock-test-16'
import './App.css'

const tests = [/*
  { id: 1, title: "Biostatistics - Test 1 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest1, description: "Core fundamentals across all 5 syllabus topics" },
  { id: 2, title: "Biostatistics - Test 2 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest2, description: "Clinical contexts (hemoglobin, BP, vaccine trials, ICU)" },
  { id: 3, title: "Biostatistics - Test 3 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest3, description: "Calculation-heavy problems, tricky scenarios" },
  { id: 4, title: "Biostatistics - Test 4 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest4, description: "Trimmed/harmonic means, pooled variance, Bayesian reasoning, equivalence testing" },
  { id: 5, title: "Biostatistics - Test 5 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest5, description: "Distribution properties, z-scores, non-parametric vs parametric selection" },
  { id: 6, title: "Biostatistics - Test 6 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest6, description: "Transformations, probability trees, serial/parallel testing, power analysis" },
  { id: 7, title: "Biostatistics - Test 7 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest7, description: "Skewed data, likelihood ratios, p-value misconceptions, non-parametric equivalents" },
  { id: 8, title: "Biostatistics - Test 8 - 50 MCQs", questions: 50, category: "Biostatistics", data: biostatTest8, description: "Grouped data, Chebyshev's inequality, Poisson/binomial applications, multiple corrections" },
  { id: 9, title: "Research Methodology - Test 1 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest1, description: "Core fundamentals: study designs, incidence/prevalence, RR/OR, bias, screening" },
  { id: 10, title: "Research Methodology - Test 2 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest2, description: "Clinical contexts: drug trials, vaccination studies, hospital-based studies" },
  { id: 11, title: "Research Methodology - Test 3 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest3, description: "Calculation-heavy: person-time, Mantel-Haenszel OR, serial testing, lead-time bias" },
  { id: 12, title: "Research Methodology - Test 4 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest4, description: "Crossover trials, factorial designs, cluster RCTs, Berkson's/Neyman bias, PPV/NPV" },
  { id: 13, title: "Research Methodology - Test 5 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest5, description: "Ecological studies, ITT vs per-protocol, PAR%, effect modification, ROC curves" },
  { id: 14, title: "Research Methodology - Test 6 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest6, description: "Clinical trial phases, adaptive designs, herd immunity, overdiagnosis, Fagan nomogram" },
  { id: 15, title: "Research Methodology - Test 7 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest7, description: "Mendelian randomization, propensity scores, CONSORT/STROBE, immortal time bias" },
  { id: 16, title: "Research Methodology - Test 8 - 50 MCQs", questions: 50, category: "Research Methodology", data: rmTest8, description: "Case-crossover, DALYs, Bradford Hill criteria, publication bias, mass vs targeted screening" },
  { id: 17, title: "Diagnostic Tests - Test 1 - 50 MCQs", questions: 50, category: "Diagnostic Tests", data: dtTest1, description: "Core fundamentals: sensitivity, specificity, PPV/NPV, ROC basics, likelihood ratios" },
  { id: 18, title: "Diagnostic Tests - Test 2 - 50 MCQs", questions: 50, category: "Diagnostic Tests", data: dtTest2, description: "Clinical scenarios: cancer screening, infectious disease, cardiac biomarkers, drug screening" },
  { id: 19, title: "Diagnostic Tests - Test 3 - 50 MCQs", questions: 50, category: "Diagnostic Tests", data: dtTest3, description: "Calculation-heavy: 2x2 tables, Bayes theorem, LR calculations, Youden index" },
  { id: 20, title: "Diagnostic Tests - Test 4 - 50 MCQs", questions: 50, category: "Diagnostic Tests", data: dtTest4, description: "Serial/parallel testing, Bayesian reasoning, advanced ROC analysis, interval likelihood ratios" },
  { id: 21, title: "Diagnostic Tests - Test 5 - 50 MCQs", questions: 50, category: "Diagnostic Tests", data: dtTest5, description: "Sensitivity-specificity tradeoffs, spectrum bias, verification bias, gold standard issues" },
  { id: 22, title: "Diagnostic Tests - Test 6 - 50 MCQs", questions: 50, category: "Diagnostic Tests", data: dtTest6, description: "Predictive values & prevalence, base rate neglect, diagnostic accuracy measures" },
  { id: 23, title: "Diagnostic Tests - Test 7 - 50 MCQs", questions: 50, category: "Diagnostic Tests", data: dtTest7, description: "ROC curves & test comparison: AUC, optimal cutoffs, SROC curves, DeLong method" },
  { id: 24, title: "Diagnostic Tests - Test 8 - 50 MCQs", questions: 50, category: "Diagnostic Tests", data: dtTest8, description: "Comprehensive: decision analysis, kappa, STARD/QUADAS, integrated clinical scenarios" },
  { id: 25, title: "Communicable Diseases - Test 1 - 50 MCQs", questions: 50, category: "Communicable Diseases", data: cdTest1, description: "Core fundamentals: TB, HIV, malaria, dengue basics" },
  { id: 26, title: "Communicable Diseases - Test 2 - 50 MCQs", questions: 50, category: "Communicable Diseases", data: cdTest2, description: "Modes of transmission: direct, indirect, vector-borne, chain of infection" },
  { id: 27, title: "Communicable Diseases - Test 3 - 50 MCQs", questions: 50, category: "Communicable Diseases", data: cdTest3, description: "TB & HIV epidemiology and control: NTEP, NACP, India-specific programs" },
  { id: 28, title: "Communicable Diseases - Test 4 - 50 MCQs", questions: 50, category: "Communicable Diseases", data: cdTest4, description: "Malaria & dengue epidemiology and control: NVBDCP, vector indices, elimination" },
  { id: 29, title: "Communicable Diseases - Test 5 - 50 MCQs", questions: 50, category: "Communicable Diseases", data: cdTest5, description: "Outbreak investigation: detection, descriptive/analytical epi, response measures" },
  { id: 30, title: "Communicable Diseases - Test 6 - 50 MCQs", questions: 50, category: "Communicable Diseases", data: cdTest6, description: "Other communicable diseases: VPDs, waterborne, respiratory, zoonotic" },
  { id: 31, title: "Communicable Diseases - Test 7 - 50 MCQs", questions: 50, category: "Communicable Diseases", data: cdTest7, description: "Immunization & national programs: UIP, Mission Indradhanush, AMR, emerging infections" },
  { id: 32, title: "Communicable Diseases - Test 8 - 50 MCQs", questions: 50, category: "Communicable Diseases", data: cdTest8, description: "Comprehensive mixed: co-infections, epi calculations, program management, applied outbreaks" },
  { id: 33, title: "Non-Communicable Diseases - Test 1 - 50 MCQs", questions: 50, category: "Non-Communicable Diseases", data: ncdTest1, description: "Core fundamentals: diabetes, CVD, cancer, other NCDs overview" },
  { id: 34, title: "Non-Communicable Diseases - Test 2 - 50 MCQs", questions: 50, category: "Non-Communicable Diseases", data: ncdTest2, description: "Risk factors & prevention: tobacco, alcohol, diet, physical activity, screening" },
  { id: 35, title: "Non-Communicable Diseases - Test 3 - 50 MCQs", questions: 50, category: "Non-Communicable Diseases", data: ncdTest3, description: "Diabetes deep dive: epidemiology, diagnosis, complications, NPCDCS" },
  { id: 36, title: "Non-Communicable Diseases - Test 4 - 50 MCQs", questions: 50, category: "Non-Communicable Diseases", data: ncdTest4, description: "CVD deep dive: hypertension, IHD, stroke, INTERHEART, prevention" },
  { id: 37, title: "Non-Communicable Diseases - Test 5 - 50 MCQs", questions: 50, category: "Non-Communicable Diseases", data: ncdTest5, description: "Cancer deep dive: registries, risk factors, screening, NPCCP" },
  { id: 38, title: "Non-Communicable Diseases - Test 6 - 50 MCQs", questions: 50, category: "Non-Communicable Diseases", data: ncdTest6, description: "Other NCDs: COPD, CKD, mental health, injuries, obesity" },
  { id: 39, title: "Non-Communicable Diseases - Test 7 - 50 MCQs", questions: 50, category: "Non-Communicable Diseases", data: ncdTest7, description: "NCD epidemiology in India: NPCDCS, WHO frameworks, surveillance studies" },
  { id: 40, title: "Non-Communicable Diseases - Test 8 - 50 MCQs", questions: 50, category: "Non-Communicable Diseases", data: ncdTest8, description: "Comprehensive mixed: complex scenarios, epi calculations, policy, emerging issues" },
  { id: 41, title: "RCH & Nutrition - Test 1 - 50 MCQs", questions: 50, category: "RCH & Nutrition", data: rchTest1, description: "Core fundamentals: maternal health, child health, malnutrition indicators, national schemes" },
  { id: 42, title: "RCH & Nutrition - Test 2 - 50 MCQs", questions: 50, category: "RCH & Nutrition", data: rchTest2, description: "Maternal health programs: ANC, intranatal/postnatal care, family planning, JSY/JSSK" },
  { id: 43, title: "RCH & Nutrition - Test 3 - 50 MCQs", questions: 50, category: "RCH & Nutrition", data: rchTest3, description: "Child health programs: newborn care, IMNCI, immunization, RBSK" },
  { id: 44, title: "RCH & Nutrition - Test 4 - 50 MCQs", questions: 50, category: "RCH & Nutrition", data: rchTest4, description: "Malnutrition indicators: anthropometry, SAM/MAM management, micronutrient deficiencies" },
  { id: 45, title: "RCH & Nutrition - Test 5 - 50 MCQs", questions: 50, category: "RCH & Nutrition", data: rchTest5, description: "Nutrition programs: ICDS, POSHAN Abhiyaan, IYCF, food fortification" },
  { id: 46, title: "RCH & Nutrition - Test 6 - 50 MCQs", questions: 50, category: "RCH & Nutrition", data: rchTest6, description: "National health schemes: NHM, Ayushman Bharat, reproductive health, health information" },
  { id: 47, title: "RCH & Nutrition - Test 7 - 50 MCQs", questions: 50, category: "RCH & Nutrition", data: rchTest7, description: "Demographic indicators: fertility, population dynamics, health surveys, data sources" },
  { id: 48, title: "RCH & Nutrition - Test 8 - 50 MCQs", questions: 50, category: "RCH & Nutrition", data: rchTest8, description: "Comprehensive mixed: complex scenarios, calculations, program evaluation, emerging issues" },
  { id: 49, title: "Genetics - Test 1 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest1, description: "Mendelian genetics, molecular genetics, chromosomal disorders, population genetics, epigenetics" },
  { id: 50, title: "Genetics - Test 2 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest2, description: "DNA structure & replication, transcription & RNA processing, translation, gene regulation" },
  { id: 51, title: "Genetics - Test 3 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest3, description: "Genomics, next-generation sequencing, bioinformatics, epigenomics & functional genomics" },
  { id: 52, title: "Genetics - Test 4 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest4, description: "Cancer genetics, immunogenetics & HLA, developmental genetics, gene therapy & CAR-T" },
  { id: 53, title: "Genetics - Test 5 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest5, description: "Clinical genetics & inherited disorders, microbial genetics, statistical genetics & linkage" },
  { id: 54, title: "Genetics - Test 6 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest6, description: "Cell biology & cell cycle, protein structure & function, synthetic biology, bioethics & biosafety" },
  { id: 55, title: "Genetics - Test 7 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest7, description: "Evolution & phylogenetics, quantitative genetics, model organisms, applied & population genetics" },
  { id: 56, title: "Genetics - Test 8 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest8, description: "Comprehensive mixed: calculations, clinical scenarios, research methods & emerging tools" },
  { id: 57, title: "Genetics - Test 9 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest9, description: "Advanced Mendelian genetics: epistasis, penetrance, expressivity, lethal alleles, complementation" },
  { id: 58, title: "Genetics - Test 10 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest10, description: "Chromosomal biology & cytogenetics: FISH, CGH, karyotyping, rearrangements, cancer cytogenetics" },
  { id: 59, title: "Genetics - Test 11 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest11, description: "RNA biology & gene regulation: operons, eukaryotic transcription, ncRNA, splicing, translation" },
  { id: 60, title: "Genetics - Test 12 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest12, description: "Recombinant DNA technology & gene editing: CRISPR, PCR variants, cloning, base editing, NGS" },
  { id: 61, title: "Genetics - Test 13 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest13, description: "Human genetic diseases & clinical genetics: inherited disorders, cancer syndromes, counseling" },
  { id: 62, title: "Genetics - Test 14 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest14, description: "Genomics, GWAS & personalized medicine: HGP, SNPs, polygenic scores, pharmacogenomics" },
  { id: 63, title: "Genetics - Test 15 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest15, description: "Epigenetics & chromatin biology: DNA methylation, histone modifications, 3D genome, cancer" },
  { id: 64, title: "Genetics - Test 16 - 50 MCQs", questions: 50, category: "Genetics", data: geneticsTest16, description: "Comprehensive advanced: pedigree analysis, HWE calculations, gene therapy, precision medicine" },
  { id: 65, title: "Molecular Biology - Test 1 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest1, description: "DNA Structure, Replication & Chromosomes" },
  { id: 66, title: "Molecular Biology - Test 2 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest2, description: "Transcription — Prokaryotic & Eukaryotic" },
  { id: 67, title: "Molecular Biology - Test 3 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest3, description: "Translation & Protein Synthesis" },
  { id: 68, title: "Molecular Biology - Test 4 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest4, description: "Gene Expression Regulation — Prokaryotes" },
  { id: 69, title: "Molecular Biology - Test 5 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest5, description: "Gene Expression Regulation — Eukaryotes" },
  { id: 70, title: "Molecular Biology - Test 6 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest6, description: "DNA Damage & Repair" },
  { id: 71, title: "Molecular Biology - Test 7 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest7, description: "Recombination, Transposons & Mobile Elements" },
  { id: 72, title: "Molecular Biology - Test 8 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest8, description: "RNA Processing, Splicing & ncRNA" },
  { id: 73, title: "Molecular Biology - Test 9 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest9, description: "Protein Structure, Folding & PTMs" },
  { id: 74, title: "Molecular Biology - Test 10 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest10, description: "Cell Signaling & Signal Transduction" },
  { id: 75, title: "Molecular Biology - Test 11 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest11, description: "Molecular Virology" },
  { id: 76, title: "Molecular Biology - Test 12 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest12, description: "Molecular Immunology" },
  { id: 77, title: "Molecular Biology - Test 13 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest13, description: "Cancer Molecular Biology" },
  { id: 78, title: "Molecular Biology - Test 14 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest14, description: "Molecular Techniques & Diagnostics" },
  { id: 79, title: "Molecular Biology - Test 15 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest15, description: "Genomics, Proteomics & Bioinformatics" },
  { id: 80, title: "Molecular Biology - Test 16 - 50 MCQs", questions: 50, category: "Molecular Biology", data: molecularBiologyTest16, description: "Comprehensive Advanced Mixed" },
  { id: 81, title: "Microscopy, Staining & Microbial - Test 1 - 50 MCQs", questions: 50, category: "Microscopy & Microbiology", data: microscopyStainingTest1, description: "Microscopy principles, staining techniques, microbial structure & identification" },
  { id: 82, title: "Bioethics - Test 1 - 50 MCQs", questions: 50, category: "Bioethics", data: bioethicsTest1, description: "Principles of bioethics: autonomy, beneficence, non-maleficence, justice" },
  { id: 83, title: "Bioethics - Test 2 - 50 MCQs", questions: 50, category: "Bioethics", data: bioethicsTest2, description: "Informed consent: elements, types, exceptions, vulnerable populations" },
  { id: 84, title: "Bioethics - Test 3 - 50 MCQs", questions: 50, category: "Bioethics", data: bioethicsTest3, description: "ICMR ethical guidelines: 2017 guidelines, IEC, regulatory provisions" },
  { id: 85, title: "Bioethics - Test 4 - 50 MCQs", questions: 50, category: "Bioethics", data: bioethicsTest4, description: "Research ethics: Helsinki, Nuremberg, ICH-GCP, equipoise, placebo ethics" },
  { id: 86, title: "Bioethics - Test 5 - 50 MCQs", questions: 50, category: "Bioethics", data: bioethicsTest5, description: "Ethics committees & regulatory framework: IEC, CDSCO, international bodies" },
  { id: 87, title: "Bioethics - Test 6 - 50 MCQs", questions: 50, category: "Bioethics", data: bioethicsTest6, description: "Vulnerable populations: children, mentally ill, pregnant women, prisoners, tribal" },
  { id: 88, title: "Bioethics - Test 7 - 50 MCQs", questions: 50, category: "Bioethics", data: bioethicsTest7, description: "Publication ethics, scientific misconduct, authorship & data ethics" },
  { id: 89, title: "Bioethics - Test 8 - 50 MCQs", questions: 50, category: "Bioethics", data: bioethicsTest8, description: "Comprehensive: AI ethics, genetics, public health, end of life, global bioethics" },
  { id: 90, title: "English: Idioms & Proverbs - Test 1 - 50 MCQs", questions: 50, category: "English", data: englishIdiomsTest1, description: "Idiom meanings, proverb meanings, fill-in-the-blank, usage & origin" },
  { id: 91, title: "English: Idioms & Proverbs - Test 2 - 50 MCQs", questions: 50, category: "English", data: englishIdiomsTest2, description: "Advanced idioms, lesser-known proverbs, scenario-based application" },
  { id: 92, title: "English: Phrases - Test 1 - 50 MCQs", questions: 50, category: "English", data: englishPhrasesTest1, description: "Phrasal verbs, Latin/French phrases, fill-in-the-blank, expression replacement" },
  { id: 93, title: "English: Phrases - Test 2 - 50 MCQs", questions: 50, category: "English", data: englishPhrasesTest2, description: "Advanced phrasal verbs, formal/literary phrases, contextual usage" },
  { id: 94, title: "English: Spellings - Test 1 - 50 MCQs", questions: 50, category: "English", data: englishSpellingsTest1, description: "Correct spelling, misspelled words, confusing pairs, medical/scientific terms" },
  { id: 95, title: "English: Spellings - Test 2 - 50 MCQs", questions: 50, category: "English", data: englishSpellingsTest2, description: "Tricky spellings, homophones, near-homophones, subtle errors" },
  { id: 96, title: "English: Animal Groups - Test 1 - 50 MCQs", questions: 50, category: "English", data: englishAnimalGroupsTest1, description: "Collective nouns for animals: birds, mammals, marine, insects" },
  { id: 97, title: "English: Animal Groups - Test 2 - 50 MCQs", questions: 50, category: "English", data: englishAnimalGroupsTest2, description: "Rare collective nouns, reverse identification, correct/incorrect pairs" },
  { id: 98, title: "English: Synonyms - Test 1 - 50 MCQs", questions: 50, category: "English", data: englishSynonymsTest1, description: "Advanced synonyms, context-based, odd one out, sentence substitution" },
  { id: 99, title: "English: Synonyms - Test 2 - 50 MCQs", questions: 50, category: "English", data: englishSynonymsTest2, description: "GRE-level synonyms, nuanced vocabulary, contextual shade differences" },
  { id: 100, title: "English: Word Meanings - Test 1 - 50 MCQs", questions: 50, category: "English", data: englishMeaningsTest1, description: "Advanced word meanings, one-word substitution, foreign words in English" },
  { id: 101, title: "English: Word Meanings - Test 2 - 50 MCQs", questions: 50, category: "English", data: englishMeaningsTest2, description: "Polysemous words, one-word substitution, foreign phrases from 10+ languages" },
  { id: 102, title: "English: Antonyms - Test 1 - 50 MCQs", questions: 50, category: "English", data: englishAntonymsTest1, description: "Advanced antonyms, context-based, non-antonym identification, sentence reversal" },
  { id: 103, title: "English: Antonyms - Test 2 - 50 MCQs", questions: 50, category: "English", data: englishAntonymsTest2, description: "GRE-level antonyms, nuanced opposites, contextual antonym selection" },
  { id: 104, title: "GK: Health Current Affairs - Test 1 - 50 MCQs", questions: 50, category: "General Knowledge", data: gkHealthAffairsTest1, description: "WHO initiatives, India health indicators, outbreaks, health policies, awards" },
  { id: 105, title: "GK: Health Current Affairs - Test 2 - 50 MCQs", questions: 50, category: "General Knowledge", data: gkHealthAffairsTest2, description: "WHO health days, vaccination updates, global agreements, medical breakthroughs" },
  { id: 106, title: "GK: Government Schemes - Test 1 - 50 MCQs", questions: 50, category: "General Knowledge", data: gkGovtSchemesTest1, description: "Ayushman Bharat, MCH schemes, nutrition programmes, disease control" },
  { id: 107, title: "GK: Government Schemes - Test 2 - 50 MCQs", questions: 50, category: "General Knowledge", data: gkGovtSchemesTest2, description: "NHM, health insurance, WASH schemes, mental health, digital health" },
  { id: 108, title: "GK: ICMR Based - Test 1 - 50 MCQs", questions: 50, category: "General Knowledge", data: gkIcmrTest1, description: "ICMR history, institutes, research contributions, guidelines, fellowships" },
  { id: 109, title: "GK: ICMR Based - Test 2 - 50 MCQs", questions: 50, category: "General Knowledge", data: gkIcmrTest2, description: "ICMR institutes deep dive, COVID response, networks, collaborations, legacy" },
  { id: 110, title: "GK: Health Bodies - Test 1 - 50 MCQs", questions: 50, category: "General Knowledge", data: gkHealthBodiesTest1, description: "Central health bodies, regulatory bodies, research institutions, WHO, state bodies" },
  { id: 111, title: "GK: Health Bodies - Test 2 - 50 MCQs", questions: 50, category: "General Knowledge", data: gkHealthBodiesTest2, description: "Specialized institutes, biotech bodies, surveillance, WHO structure, accreditation" },
  { id: 112, title: "Mock Test 1 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest1, description: "Full-length mock: Research Methodology, Biostatistics, Diagnostics, Communicable & Non-Communicable Diseases, Bioethics, Molecular Biology, Microbiology, English, GK" },
  { id: 113, title: "Mock Test 2 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest2, description: "Full-length mock: Ecological studies, Chi-square/ANOVA, Bayes theorem, COVID-19, Metabolic syndrome, Belmont Report, DNA repair, Bacterial toxins, Phrasal verbs, Nobel prizes" },
  { id: 114, title: "Mock Test 3 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest3, description: "Full-length mock: Bradford Hill criteria, Survival analysis, Screening biases, Leprosy/Rabies, Nutrition deficiencies, Research misconduct, Population genetics, Staining techniques, Analogies, SDGs" },
  { id: 115, title: "Mock Test 4 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest4, description: "Full-length mock: Crossover trials, Poisson distribution, ELISA/Western blot, STIs/Helminths, RHD/COPD/CKD, Organ transplant ethics, Restriction enzymes, Fungal/Parasitic infections, Medical terminology, ICMR institutes" },
  { id: 116, title: "Mock Test 5 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest5, description: "Full-length mock: Berkson's/Neyman bias, Mantel-Haenszel, Pharmacogenomics, Emerging infections, Tobacco control, Digital health ethics, CRISPR/Gene therapy, Flow cytometry, Idioms, Government health schemes" },
  { id: 117, title: "Mock Test 6 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest6, description: "Full-length mock: GRADE system, Mixed-effects models, Screening programs, One Health, Double burden of malnutrition, AI ethics, Epigenetics, AMR mechanisms, Reading comprehension, Global health declarations" },
  { id: 118, title: "Mock Test 7 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest7, description: "Full-length mock: Randomization techniques, Epidemic curves, Cancer biomarkers, Hand hygiene/Waste management, FCTC MPOWER, Vulnerable populations, Blotting techniques, Specimen collection, Grammar, Indian medical research" },
  { id: 119, title: "Mock Test 8 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest8, description: "Full-length mock: Program evaluation, Spatial epidemiology, AI in diagnostics, Pandemic preparedness, Health promotion models, Publication ethics, Single-cell sequencing, Vaccines, Medical etymology, National Health Policy" },
  { id: 120, title: "Mock Test 9 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest9, description: "Full-length mock: Case-crossover design, Bland-Altman analysis, Fagan nomogram, Kala-azar/Scrub typhus, RHD/Sickle cell/Fluorosis, Nuremberg Code/CIOMS, Southern/Northern blotting, Widal test/ZN staining, Synonyms, WHO regions/Alma-Ata" },
  { id: 121, title: "Mock Test 10 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest10, description: "Full-length mock: Propensity scores/Instrumental variables, Poisson/Zero-inflated models, Decision curve analysis, COVID variants/Nipah/Ebola, Air pollution/Silicosis/Lead toxicity, Dual-use/Pandemic ethics, Epigenetic clocks/ChIP-seq, Biofilms/Quorum sensing, Latin medical terms, Nobel prizes/Global Fund" },
  { id: 122, title: "Mock Test 11 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest11, description: "Full-length mock: Factorial/Crossover/N-of-1 trials, Competing risks/Fine-Gray model, Multiplex PCR/LAMP, Hepatitis elimination/MDR-TB/HIV PrEP, Stroke/CKD/Diabetic retinopathy, Gene drive/Genetic privacy ethics, RNAi/miRNA/lncRNA, Mycobacterial culture/Parasitology, Health idioms, ICMR institutes" },
  { id: 123, title: "Mock Test 12 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest12, description: "Full-length mock: Verbal autopsy/LQAS/SMART surveys, Life tables/Demographic methods, Cardiac biomarkers/Tumor markers, Cholera/Typhoid/Rotavirus/WASH, Childhood obesity/Geriatric health/Palliative care, End-of-life/Organ donation ethics, Inborn errors of metabolism, Blood/CSF/Urine culture, Medical eponyms, SRS/NFHS/DLHS" },
  { id: 124, title: "Mock Test 13 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest13, description: "Full-length mock: Cluster RCTs/Stepped-wedge/SPIRIT, PCA/Factor analysis/Cronbach's alpha, Immunochromatography/Flow cytometry, Leprosy/Filariasis/Soil-transmitted helminths, Oral health/Blindness/Occupational health, Biobank governance/IP rights, Proteomics/Mass spectrometry, Anaerobic culture/Dermatophytes, Paragraph coherence, NMC Act/FSSAI" },
  { id: 125, title: "Mock Test 14 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest14, description: "Full-length mock: Health technology assessment/ICER, Bayesian statistics/Credible intervals, Pharmacogenomics/Liquid biopsy, AMR surveillance/ESKAPE/Colistin resistance, Cancer registries/TNM staging/HPV vaccination, AI ethics/Digital health privacy, CRISPR/Base editing/CAR-T therapy, CLSI breakpoints/MIC, Reading comprehension, Digital India/ABDM/CoWIN" },
  { id: 126, title: "Mock Test 15 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest15, description: "Full-length mock: Systematic reviews/PRISMA/GRADE, SEM/Mediation analysis/DAGs, Point-of-care ultrasound/Wearables, Measles-rubella elimination/Malaria RTS,S, Mental health/PHQ-9/Substance use, Indigenous research ethics/FPIC, Microbiome/16S rRNA/Metabolomics, Viral serology/Hepatitis panel, Antonyms/Analogies, NITI Aayog/SDGs/Essential medicines" },
  { id: 127, title: "Mock Test 16 - 100 MCQs", questions: 100, category: "Mock Tests", data: mockTest16, description: "Full-length mock: Real-world evidence/Pragmatic trials, Multiple imputation/E-value/IPTW, AI in diagnostics/Digital biomarkers, Pandemic preparedness/Genomic surveillance, Social determinants/Planetary health, Global health ethics/Open science, Single-cell multi-omics/Organoids, Phage therapy/Nanopore sequencing, Critical reasoning, One Health India/Genome India Project" },
*/]

const categories = [...new Set(tests.map(t => t.category))]

function App() {
  const [selectedTest, setSelectedTest] = useState(null)
  const [screen, setScreen] = useState('list') // list | detail | test | result
  const [testAnswers, setTestAnswers] = useState(null)
  const [timeTaken, setTimeTaken] = useState(0)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  function selectTest(test) {
    setSelectedTest(test)
    setScreen('detail')
  }

  function startTest() {
    setScreen('test')
  }

  function finishTest(answers, elapsed) {
    setTestAnswers(answers)
    setTimeTaken(elapsed)
    setScreen('result')
  }

  function backToList() {
    setSelectedTest(null)
    setTestAnswers(null)
    setScreen('list')
  }

  function backToDetail() {
    setTestAnswers(null)
    setScreen('detail')
  }

  if (screen === 'result' && selectedTest) {
    return (
      <ResultScreen
        questions={selectedTest.data}
        answers={testAnswers}
        testTitle={selectedTest.title}
        timeTaken={timeTaken}
        onBack={backToList}
      />
    )
  }

  if (screen === 'test' && selectedTest) {
    return (
      <TestScreen
        questions={selectedTest.data}
        testTitle={selectedTest.title}
        onFinish={finishTest}
        onQuit={backToDetail}
      />
    )
  }

  if (screen === 'detail' && selectedTest) {
    return (
      <TestDetail
        test={selectedTest}
        onBack={backToList}
        onStart={startTest}
      />
    )
  }

  const filteredTests = tests.filter(t => t.category === activeCategory)

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">ICMR</div>
        <h1>ICMR MCQ Tests</h1>
        <p className="subtitle">Indian Council of Medical Research — Practice Tests</p>
      </header>

      <div className="home-body">
        <aside className="sidebar">
          <div className="sidebar-title">Subjects</div>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`sidebar-tab ${activeCategory === cat ? 'sidebar-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </aside>

        <main className="main-content">
          <h2 className="main-content-title">{activeCategory}</h2>
          <p className="main-content-subtitle">{filteredTests.length} tests available</p>
          <section className="test-list">
            {filteredTests.map((test) => (
              <button
                key={test.id}
                className="test-card"
                onClick={() => selectTest(test)}
              >
                <div className="test-card-left">
                  <h2 className="test-card-title">{test.title}</h2>
                  <p className="test-card-desc">{test.description}</p>
                  <p className="test-card-meta">{test.questions} Questions &middot; +1 / -1/3 Marking</p>
                </div>
                <span className="test-card-arrow">&rarr;</span>
              </button>
            ))}
          </section>
        </main>
      </div>

      <footer className="footer">
        ICMR MCQ Tests
      </footer>
    </div>
  )
}

export default App
