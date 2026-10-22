/**
 * Human Body Explorer - Comprehensive Quizzes Dataset
 * Categorized by organ system and difficulty levels with immediate explanations.
 */

const QUIZZES_DATA = [
  // ===================== CARDIOVASCULAR =====================
  {
    id: "cardio-1",
    systemId: "cardiovascular",
    difficulty: "Beginner",
    question: "Which chamber of the human heart pumps oxygenated blood into the aorta to supply the entire body?",
    options: ["Right Atrium", "Right Ventricle", "Left Atrium", "Left Ventricle"],
    answer: 3,
    explanation: "The left ventricle has the thickest muscular wall and generates high systolic pressure (~120 mmHg) to pump oxygen-rich blood through the aorta into the systemic circulation."
  },
  {
    id: "cardio-2",
    systemId: "cardiovascular",
    difficulty: "Beginner",
    question: "What produces the first heart sound ('Lub' or S1) heard through a stethoscope?",
    options: ["Closure of the aortic and pulmonary semilunar valves", "Closure of the tricuspid and mitral atrioventricular (AV) valves", "Rushing of blood into the vena cava", "Contraction of the aorta"],
    answer: 1,
    explanation: "The first heart sound (S1 / 'Lub') is caused by the sudden closure and vibration of the atrioventricular (tricuspid and mitral) valves at the onset of ventricular systole."
  },
  {
    id: "cardio-3",
    systemId: "cardiovascular",
    difficulty: "Intermediate",
    question: "What is the primary physiological function of the abundant elastic fibers in the aortic wall (the Windkessel effect)?",
    options: [
      "To produce red blood cells under high pressure",
      "To expand during systole and recoil during diastole to maintain continuous forward capillary flow",
      "To prevent blood from clotting inside the heart",
      "To filter nitrogenous wastes from the bloodstream"
    ],
    answer: 1,
    explanation: "The elastic fibers in the aorta stretch during ventricular systole, storing mechanical energy, and recoil during diastole, keeping blood flowing forward and protecting delicate capillaries from destructive pressure spikes."
  },
  {
    id: "cardio-4",
    systemId: "cardiovascular",
    difficulty: "Advanced",
    question: "Which specialized node in the cardiac conduction system imposes a ~0.1-second delay on the electrical impulse to allow atria to finish emptying?",
    options: ["Sinoatrial (SA) Node", "Atrioventricular (AV) Node", "Bundle of His", "Purkinje Fibers"],
    answer: 1,
    explanation: "The Atrioventricular (AV) node slows conduction velocity to ~0.05 m/s, creating a critical ~0.1-second delay that ensures the atria have fully ejected their blood into the ventricles before ventricular systole begins."
  },

  // ===================== NERVOUS SYSTEM =====================
  {
    id: "nervous-1",
    systemId: "nervous",
    difficulty: "Beginner",
    question: "Which lobe of the cerebral cortex is primarily responsible for processing visual information from the eyes?",
    options: ["Frontal Lobe", "Parietal Lobe", "Temporal Lobe", "Occipital Lobe"],
    answer: 3,
    explanation: "The occipital lobe, situated at the back of the skull, contains the primary visual cortex (Brodmann area 17) where visual signals from the optic radiations are decoded."
  },
  {
    id: "nervous-2",
    systemId: "nervous",
    difficulty: "Intermediate",
    question: "What is the primary role of the Cerebellum in motor control?",
    options: [
      "Initiating voluntary muscle contractions directly",
      "Acting as a motor comparator to coordinate timing, correct movement errors, and maintain balance",
      "Regulating basic breathing rhythms",
      "Storing semantic factual memories"
    ],
    answer: 1,
    explanation: "The cerebellum does not initiate movement; it compares intended motor plans with real-time sensory feedback, smoothing out jerky contractions, correcting movement errors, and preserving posture."
  },
  {
    id: "nervous-3",
    systemId: "nervous",
    difficulty: "Intermediate",
    question: "Which insulating glial cells produce the protective myelin sheath surrounding axons in the Central Nervous System (brain and spinal cord)?",
    options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
    answer: 1,
    explanation: "Oligodendrocytes myelinate multiple axon segments in the CNS (brain and spinal cord), whereas Schwann cells myelinate single axon segments in the PNS."
  },
  {
    id: "nervous-4",
    systemId: "nervous",
    difficulty: "Advanced",
    question: "During an action potential, what causes the rapid repolarization phase that returns the membrane potential back toward resting levels?",
    options: [
      "Massive influx of calcium ions into the cell",
      "Activation of the Na+/K+ ATPase pump pumping sodium inward",
      "Closure of voltage-gated Na+ channels and opening of voltage-gated K+ channels",
      "Opening of chloride leak channels"
    ],
    answer: 2,
    explanation: "Repolarization is achieved when voltage-gated Na+ channel inactivation gates close ('ball-and-chain') and delayed rectifier voltage-gated K+ channels open, allowing rapid potassium efflux down its electrochemical gradient."
  },

  // ===================== RESPIRATORY SYSTEM =====================
  {
    id: "resp-1",
    systemId: "respiratory",
    difficulty: "Beginner",
    question: "What is the primary muscle responsible for quiet inspiration (breathing in)?",
    options: ["Internal intercostal muscles", "Diaphragm", "Rectus abdominis", "Sternocleidomastoid"],
    answer: 1,
    explanation: "The diaphragm is the primary muscle of inspiration, accounting for roughly 75% of thoracic volume expansion during quiet, resting breathing."
  },
  {
    id: "resp-2",
    systemId: "respiratory",
    difficulty: "Intermediate",
    question: "What is the vital physiological role of pulmonary surfactant secreted by Type II alveolar cells?",
    options: [
      "To kill inhaled bacteria by producing acid",
      "To lower surface tension and prevent small alveoli from collapsing during exhalation",
      "To carry oxygen directly across the blood-air barrier",
      "To increase the thickness of the respiratory membrane"
    ],
    answer: 1,
    explanation: "Pulmonary surfactant (a lipid-protein complex) disrupts hydrogen bonds between water molecules lining the alveoli, drastically lowering surface tension and preventing end-expiratory alveolar collapse (atelectasis)."
  },
  {
    id: "resp-3",
    systemId: "respiratory",
    difficulty: "Advanced",
    question: "According to Boyle's Law, what happens to intrapulmonary pressure when the diaphragm contracts and thoracic volume expands?",
    options: [
      "Intrapulmonary pressure rises above atmospheric pressure, pushing air out",
      "Intrapulmonary pressure drops below atmospheric pressure (-1 mmHg), pulling air in",
      "Intrapulmonary pressure stays exactly equal to atmospheric pressure",
      "Intrapulmonary pressure drops to absolute zero"
    ],
    answer: 1,
    explanation: "Boyle's Law dictates that pressure and volume are inversely proportional. Expanding thoracic volume decreases intrapulmonary pressure to ~759 mmHg (-1 mmHg relative to atmosphere), creating a pressure gradient that draws air into the lungs."
  },

  // ===================== DIGESTIVE SYSTEM =====================
  {
    id: "digest-1",
    systemId: "digestive",
    difficulty: "Beginner",
    question: "Which organ produces bile, a fluid essential for the emulsification and digestion of dietary fats?",
    options: ["Gallbladder", "Pancreas", "Liver", "Stomach"],
    answer: 2,
    explanation: "Bile is synthesized continuously by hepatocytes in the liver. The gallbladder merely stores and concentrates it until fatty food enters the duodenum."
  },
  {
    id: "digest-2",
    systemId: "digestive",
    difficulty: "Intermediate",
    question: "What critical substance secreted by gastric parietal cells is indispensable for the absorption of Vitamin B12 in the terminal ileum?",
    options: ["Pepsinogen", "Intrinsic Factor", "Gastrin", "Hydrochloric Acid"],
    answer: 1,
    explanation: "Parietal cells secrete Intrinsic Factor, a glycoprotein that binds Vitamin B12 and protects it from degradation until it reaches specific cubilin receptors in the ileum. Absence of Intrinsic Factor causes pernicious anemia."
  },
  {
    id: "digest-3",
    systemId: "digestive",
    difficulty: "Advanced",
    question: "What is the name of the specialized lymphatic capillaries located inside intestinal villi that absorb dietary fats packaged as chylomicrons?",
    options: ["Peyer's Patches", "Lacteals", "Crypts of Lieberkühn", "Sinusoids"],
    answer: 1,
    explanation: "Lacteals are blind-ended lymphatic capillaries in the center of each intestinal villus. Because chylomicrons are too large to penetrate blood capillary fenestrations, they enter lacteals to be transported via the thoracic duct into venous blood."
  },

  // ===================== URINARY SYSTEM =====================
  {
    id: "urinary-1",
    systemId: "urinary",
    difficulty: "Beginner",
    question: "What is the microscopic, functional structural unit of the kidney responsible for filtering blood and making urine?",
    options: ["Nephron", "Alveolus", "Hepatocyte", "Neuron"],
    answer: 0,
    explanation: "The nephron is the microscopic functional unit of the kidney; each human kidney contains approximately 1 to 1.2 million nephrons."
  },
  {
    id: "urinary-2",
    systemId: "urinary",
    difficulty: "Intermediate",
    question: "Which hormone produced by the kidneys in response to low tissue oxygenation stimulates red bone marrow to accelerate red blood cell production?",
    options: ["Renin", "Aldosterone", "Erythropoietin (EPO)", "Calcitriol"],
    answer: 2,
    explanation: "Erythropoietin (EPO) is a glycoprotein hormone synthesized by peritubular interstitial cells of the kidney in response to hypoxia; it travels through blood to stimulate erythrocyte maturation in red bone marrow."
  },
  {
    id: "urinary-3",
    systemId: "urinary",
    difficulty: "Advanced",
    question: "Under normal physiological conditions, which segment of the nephron reabsorbs 100% of filtered glucose and amino acids?",
    options: ["Collecting Duct", "Proximal Convoluted Tubule (PCT)", "Ascending Loop of Henle", "Distal Convoluted Tubule (DCT)"],
    answer: 1,
    explanation: "The Proximal Convoluted Tubule (PCT) contains dense brush-border microvilli packed with Na+/glucose cotransporters (SGLT2/SGLT1) that reabsorb 100% of filtered glucose and amino acids back into peritubular capillaries."
  },

  // ===================== SKELETAL & MUSCULAR =====================
  {
    id: "skel-1",
    systemId: "skeletal",
    difficulty: "Beginner",
    question: "What is the longest, heaviest, and strongest bone in the human body?",
    options: ["Humerus", "Tibia", "Femur", "Fibula"],
    answer: 2,
    explanation: "The femur (thigh bone) is the longest and strongest bone in the skeleton, capable of supporting compressive forces exceeding 30 times body weight."
  },
  {
    id: "skel-2",
    systemId: "muscular",
    difficulty: "Intermediate",
    question: "During skeletal muscle contraction, calcium ions released from the sarcoplasmic reticulum bind directly to which regulatory protein?",
    options: ["Tropomyosin", "Troponin", "Myosin", "Actin"],
    answer: 1,
    explanation: "Calcium binds directly to Troponin C on the thin filament, inducing a conformational shift that pulls Tropomyosin away from actin active sites, permitting myosin heads to bind and cycle."
  },
  {
    id: "skel-3",
    systemId: "skeletal",
    difficulty: "Advanced",
    question: "Which multinucleated bone cells secrete hydrochloric acid and proteolytic cathepsin enzymes to resorb bone matrix?",
    options: ["Osteocytes", "Osteoblasts", "Osteoclasts", "Chondroblasts"],
    answer: 2,
    explanation: "Osteoclasts are specialized multinucleated giant cells derived from macrophage lineages that adhere to bone surfaces and pump acid and cathepsin K to dissolve mineralized bone matrix during remodeling."
  },

  // ===================== ENDOCRINE & IMMUNE =====================
  {
    id: "endo-1",
    systemId: "endocrine",
    difficulty: "Beginner",
    question: "Which endocrine gland perched atop each kidney produces adrenaline (epinephrine) and cortisol during stress?",
    options: ["Thyroid Gland", "Adrenal Gland", "Pituitary Gland", "Pineal Gland"],
    answer: 1,
    explanation: "The adrenal glands sit atop each kidney; the adrenal cortex produces steroid hormones like cortisol, while the adrenal medulla secretes catecholamines like adrenaline (epinephrine)."
  },
  {
    id: "endo-2",
    systemId: "immune-lymphatic",
    difficulty: "Intermediate",
    question: "What is the primary role of the Thymus gland in the human immune system?",
    options: [
      "Filtering aged red blood cells from the bloodstream",
      "Educating, differentiating, and selecting immunocompetent, self-tolerant T-lymphocytes",
      "Synthesizing antibodies to neutralize bacterial toxins",
      "Storing platelets for blood coagulation"
    ],
    answer: 1,
    explanation: "The thymus is a primary lymphoid organ where bone-marrow-derived thymocytes undergo positive and negative selection to mature into immunocompetent, self-tolerant T cells (CD4+ Helper and CD8+ Cytotoxic)."
  },
  {
    id: "endo-3",
    systemId: "endocrine",
    difficulty: "Advanced",
    question: "A high blood glucose level stimulates pancreatic beta cells to secrete insulin through which cellular sequence?",
    options: [
      "Glucose enters via GLUT2 -> ATP production rises -> K-ATP channels close -> membrane depolarizes -> Ca2+ enters -> insulin exocytoses",
      "Insulin enters beta cells -> membrane hyperpolarizes -> K+ channels open -> insulin leaks out",
      "Glucagon binds beta cells -> cAMP drops -> insulin is synthesized from scratch",
      "Calcium is pumped out of beta cells -> sodium channels open -> vesicles break down"
    ],
    answer: 0,
    explanation: "Glucose entering beta cells through GLUT2 undergoes glycolysis and oxidative phosphorylation; the increased ATP/ADP ratio closes ATP-sensitive K+ channels, depolarizing the cell and opening voltage-gated Ca2+ channels to trigger insulin granule exocytosis."
  }
];

// Export to global scope
window.QUIZZES_DATA = QUIZZES_DATA;
