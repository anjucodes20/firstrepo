/**
 * Human Body Explorer - Organ Systems Data
 * Scientifically verified information based on OpenStax Anatomy and Physiology, NIH, and Gray's Anatomy.
 */

const SYSTEMS_DATA = [
  {
    id: "nervous",
    slug: "nervous-system",
    name: "Nervous System",
    latinName: "Systema Nervosum",
    tagline: "The body's electrical master control, communication, and processing network.",
    color: "#8b5cf6", // Purple/Violet
    accentColor: "#a78bfa",
    icon: "brain",
    majorOrgans: ["Brain", "Spinal Cord", "Peripheral Nerves", "Hypothalamus", "Thalamus", "Cerebellum", "Neurons"],
    overview: "The nervous system regulates and coordinates virtually all body activities. It consists of the Central Nervous System (CNS) — the brain and spinal cord — and the Peripheral Nervous System (PNS) — branching nerves extending throughout the body. It detects external and internal stimuli, integrates information, and triggers rapid electro-chemical responses.",
    primaryFunctions: [
      "Sensory input reception from somatic and visceral receptors",
      "Information integration, memory formation, and cognitive reasoning in the cerebrum",
      "Motor output signaling to muscles and glands",
      "Coordination of autonomic visceral functions (heart rate, breathing, peristalsis)"
    ],
    divisions: [
      {
        name: "Central Nervous System (CNS)",
        description: "Comprising the brain and spinal cord. Serves as the primary integration and command hub."
      },
      {
        name: "Peripheral Nervous System (PNS)",
        description: "12 pairs of cranial nerves and 31 pairs of spinal nerves transmitting signals between the CNS and peripheral tissues."
      },
      {
        name: "Autonomic Nervous System (ANS)",
        description: "Involuntary branch partitioned into Sympathetic ('fight or flight') and Parasympathetic ('rest and digest') divisions."
      }
    ],
    cellularComponents: "Neurons (functional units transmitting action potentials) and Neuroglia (astrocytes, oligodendrocytes, microglia, Schwann cells that insulate and nourish).",
    stats: {
      cells: "approx. 86 Billion Neurons",
      signalSpeed: "Up to 120 m/s (270 mph)",
      energyUse: "Consumes 20% of total body oxygen and glucose"
    }
  },
  {
    id: "cardiovascular",
    slug: "cardiovascular-system",
    name: "Cardiovascular System",
    latinName: "Systema Cardiovasculare",
    tagline: "The body's vital transit highway transporting oxygen, nutrients, and waste.",
    color: "#e11d48", // Crimson / Red
    accentColor: "#fb7185",
    icon: "heart",
    majorOrgans: ["Heart", "Aorta", "Venae Cavae", "Coronary Arteries", "Capillaries", "Blood"],
    overview: "The cardiovascular system comprises the muscular four-chambered heart and an extensive vascular circuit exceeding 60,000 miles in an adult. Powered by rhythmic myocardial contractions, it circulates blood through pulmonary and systemic loops, delivering oxygen, glucose, hormones, and immune cells while removing metabolic wastes like carbon dioxide and urea.",
    primaryFunctions: [
      "Rapid transport of oxygenated blood from lungs to systemic capillaries",
      "Nutrient delivery (glucose, amino acids, fatty acids) to all metabolically active tissues",
      "Thermoregulation through cutaneous vasodilation and vasoconstriction",
      "Maintenance of fluid balance and systemic blood pressure homeostasis"
    ],
    divisions: [
      {
        name: "Pulmonary Circulation",
        description: "Carries deoxygenated blood from the right ventricle through pulmonary arteries to the lungs, returning oxygenated blood via pulmonary veins to the left atrium."
      },
      {
        name: "Systemic Circulation",
        description: "Pumps oxygenated blood from the high-pressure left ventricle into the aorta, through distributing arteries and capillary beds, returning deoxygenated blood through venae cavae."
      },
      {
        name: "Coronary Circulation",
        description: "Specialized direct arterial branching from the aortic root supplying the hard-working myocardium itself."
      }
    ],
    cellularComponents: "Erythrocytes (red blood cells with hemoglobin), Leukocytes (immune white cells), Platelets (thrombocytes for clotting), and Endothelial cells lining vessel lumens.",
    stats: {
      dailyBeats: "100,000+ contractions/day",
      volumePumped: "Approx. 7,200 Liters (1,900 gal) daily",
      vesselLength: "Approx. 60,000 miles of vessels"
    }
  },
  {
    id: "respiratory",
    slug: "respiratory-system",
    name: "Respiratory System",
    latinName: "Systema Respiratorium",
    tagline: "The biological ventilation engine exchanging oxygen and carbon dioxide.",
    color: "#0284c7", // Sky Blue
    accentColor: "#38bdf8",
    icon: "wind",
    majorOrgans: ["Lungs", "Trachea", "Alveoli", "Diaphragm", "Bronchi", "Larynx", "Pharynx"],
    overview: "The respiratory system facilitates pulmonary ventilation (breathing) and external gas exchange. Inhaled atmospheric air passes through the conducting zone (nasal cavity, pharynx, larynx, trachea, bronchi) into the respiratory zone, culminating in approximately 300 to 500 million microscopic alveoli where thin membrane diffusion transfers oxygen into capillary blood and expels carbon dioxide.",
    primaryFunctions: [
      "Inhalation of atmospheric oxygen and exhalation of metabolic carbon dioxide",
      "Rapid regulation of blood pH via carbonic acid / bicarbonate buffer equilibrium",
      "Vocalization through air movement across vibrating vocal folds in the larynx",
      "Filtration, warming, and humidification of inspired air to protect delicate lung parenchyma"
    ],
    divisions: [
      {
        name: "Conducting Zone",
        description: "Nose, pharynx, larynx, trachea, bronchi, and terminal bronchioles that conduct, warm, and filter air without gas exchange."
      },
      {
        name: "Respiratory Zone",
        description: "Respiratory bronchioles, alveolar ducts, and alveoli surrounded by capillaries where actual gas diffusion occurs across the 0.5-micron blood-air barrier."
      }
    ],
    cellularComponents: "Type I alveolar pneumocytes (thin squamous diffusion cells), Type II pneumocytes (secreting surfactant to prevent alveolar collapse), and ciliated pseudostratified columnar epithelial cells with mucus goblet cells.",
    stats: {
      alveoliCount: "300–500 Million alveoli",
      surfaceArea: "Approx. 70–100 m² (size of a tennis court)",
      dailyBreaths: "17,000–23,000 breaths per day"
    }
  },
  {
    id: "digestive",
    slug: "digestive-system",
    name: "Digestive System",
    latinName: "Systema Digestorium",
    tagline: "The biochemical refining engine extracting fuel, nutrients, and electrolytes.",
    color: "#f59e0b", // Amber / Warm Orange
    accentColor: "#fbbf24",
    icon: "utensils",
    majorOrgans: ["Stomach", "Liver", "Small Intestine", "Large Intestine", "Pancreas", "Gallbladder", "Esophagus"],
    overview: "The digestive system comprises the 30-foot gastrointestinal (GI) tract and accessory digestive organs (liver, pancreas, gallbladder, salivary glands). It breaks down ingested food into molecular nutrients through mechanical mastication and enzymatic hydrolysis, absorbs vitamins, minerals, and water across intestinal villi, and eliminates undigested residue.",
    primaryFunctions: [
      "Mechanical breakdown (mastication, churning) and chemical digestion via digestive enzymes and bile",
      "Absorption of monosaccharides, amino acids, lipids, electrolytes, and water across enterocytes",
      "Hepatic metabolic processing, glycogen storage, plasma protein synthesis, and detoxification",
      "Elimination of solid metabolic waste products and maintenance of gut microbiome symbiosis"
    ],
    divisions: [
      {
        name: "Upper GI Tract",
        description: "Oral cavity, salivary glands, pharynx, esophagus, and stomach where mechanical digestion and initial acid-pepsin proteolysis occur."
      },
      {
        name: "Lower GI Tract",
        description: "Duodenum, jejunum, ileum (small intestine for primary nutrient absorption), followed by cecum, colon, and rectum (large intestine for water recovery)."
      },
      {
        name: "Accessory Organs",
        description: "Liver (produces bile), Gallbladder (stores and concentrates bile), and Exocrine Pancreas (secretes digestive enzymes and alkaline bicarbonate)."
      }
    ],
    cellularComponents: "Parietal cells (secreting HCl and intrinsic factor), Chief cells (pepsinogen), Enterocytes with microvillar brush border, Goblet cells (protective mucin), and Hepatocytes.",
    stats: {
      giLength: "Approx. 9 meters (30 feet) total length",
      absorptiveArea: "Approx. 32 m² (due to circular folds, villi, and microvilli)",
      microbiome: "38+ Trillion symbiotic gut bacteria"
    }
  },
  {
    id: "urinary",
    slug: "urinary-system",
    name: "Urinary System",
    latinName: "Systema Urinarium",
    tagline: "The master filtration and chemical equilibrium regulator of blood.",
    color: "#0d9488", // Medical Teal
    accentColor: "#14b8a6",
    icon: "droplet",
    majorOrgans: ["Kidneys", "Nephrons", "Ureters", "Urinary Bladder", "Urethra"],
    overview: "The urinary system maintains homeostatic equilibrium of extracellular fluids. The bilateral retroperitoneal kidneys filter roughly 180 liters of blood plasma daily through over 2 million microscopic nephrons, reabsorbing essential solutes and water while excreting metabolic wastes (urea, uric acid, creatinine, foreign toxins) as urine stored in the bladder and voided through the urethra.",
    primaryFunctions: [
      "Continuous ultrafiltration of blood plasma and excretion of nitrogenous waste compounds",
      "Precision regulation of systemic blood volume, osmolarity, and arterial blood pressure via renin-angiotensin-aldosterone axis",
      "Electrolyte concentration balance (Na+, K+, Ca2+, Mg2+, Cl-, PO4 3-)",
      "Acid-base homeostasis through active excretion of H+ and conservation of HCO3-",
      "Endocrine synthesis of erythropoietin (RBC stimulation) and activation of Vitamin D (calcitriol)"
    ],
    divisions: [
      {
        name: "Renal Parenchyma",
        description: "Outer renal cortex and inner renal medulla containing nephrons and collecting ducts arranged in renal pyramids."
      },
      {
        name: "Urinary Excretory Pathway",
        description: "Minor/major calyces, renal pelvis, muscular ureters employing peristalsis, distensible urinary bladder, and urethra."
      }
    ],
    cellularComponents: "Podocytes forming the glomerular filtration slits, simple cuboidal brush-border cells of the proximal convoluted tubule, and transitional epithelium (urothelium) accommodating bladder stretch.",
    stats: {
      filtrationVolume: "180 Liters of blood filtered per day",
      urineExcreted: "1.5–2 Liters of concentrated urine daily",
      nephronCount: "Approx. 2 Million nephrons in both kidneys"
    }
  },
  {
    id: "skeletal",
    slug: "skeletal-system",
    name: "Skeletal System",
    latinName: "Systema Skeletale",
    tagline: "The living architectural framework providing protection, levers, and mineral vaults.",
    color: "#64748b", // Slate / Steel
    accentColor: "#94a3b8",
    icon: "shield",
    majorOrgans: ["Skull", "Vertebral Column", "Ribcage", "Pelvis", "Femur", "Joints & Cartilage", "Bone Marrow"],
    overview: "The human skeletal system is an active, dynamic living tissue comprised of 206 bones in an adult, interconnected by cartilages, ligaments, and synovial joints. Far from an inert scaffold, bones continuously remodel under mechanical stress, house hematopoietic red marrow producing billions of blood cells daily, and serve as the body's primary reservoir for calcium and phosphate ions.",
    primaryFunctions: [
      "Rigid structural framework supporting soft tissues and maintaining upright posture",
      "Mechanical protection for vital organs (cranium protects brain, thoracic cage protects heart and lungs)",
      "System of levers acted upon by skeletal muscles to produce locomotion and dexterity",
      "Hematopoiesis — red bone marrow synthesizes erythrocytes, leukocytes, and platelets",
      "Mineral and energy homeostasis storing 99% of bodily calcium, phosphorus, and yellow marrow lipids"
    ],
    divisions: [
      {
        name: "Axial Skeleton (80 bones)",
        description: "Skull, vertebral column, ribs, and sternum along the central axis protecting central organs and the spinal cord."
      },
      {
        name: "Appendicular Skeleton (126 bones)",
        description: "Pectoral girdles, upper limbs, pelvic girdle, and lower limbs built for locomotion and environmental manipulation."
      }
    ],
    cellularComponents: "Osteoblasts (bone builders), Osteocytes (mature mechanosensors embedded in lacunae), Osteoclasts (bone resorbers), and Chondrocytes within articular cartilage.",
    stats: {
      totalBones: "206 Adult bones (infants start with approx. 270)",
      strongestBone: "Femur (thigh bone) can resist 30x body weight in compressive force",
      calciumStore: "Houses 99% of the human body's calcium"
    }
  },
  {
    id: "muscular",
    slug: "muscular-system",
    name: "Muscular System",
    latinName: "Systema Musculare",
    tagline: "The biological engine of force generation, locomotion, and metabolic heat.",
    color: "#dc2626", // Deep Red
    accentColor: "#f87171",
    icon: "activity",
    majorOrgans: ["Skeletal Muscles", "Cardiac Muscle", "Smooth Muscles", "Tendons", "Diaphragm"],
    overview: "Consisting of over 600 skeletal muscles along with specialized cardiac and smooth muscle layers, the muscular system converts biochemical adenosine triphosphate (ATP) into mechanical work. Skeletal muscles attach to bones via dense fibrous tendons to articulate joints, maintain posture, support visceral organs, and generate roughly 85% of total body heat through shivering and active contraction.",
    primaryFunctions: [
      "Voluntary body movement and fine motor control of limbs, vocal cords, and facial expressions",
      "Maintenance of posture and joint stabilization against gravitational force",
      "Thermogenesis — production of vital metabolic heat during skeletal muscle activity",
      "Involuntary circulation of blood (cardiac myocardium) and visceral propulsion (smooth muscle peristalsis)"
    ],
    divisions: [
      {
        name: "Skeletal Muscle",
        description: "Striated, multinucleated, voluntary muscle fibers anchored to bones via tendons."
      },
      {
        name: "Cardiac Muscle",
        description: "Striated, branching, involuntary fibers joined by intercalated discs with gap junctions for synchronized pumping."
      },
      {
        name: "Smooth Muscle",
        description: "Non-striated, spindle-shaped, involuntary sheets lining blood vessels, stomach, intestines, and bronchi."
      }
    ],
    cellularComponents: "Myocytes packed with myofibrils composed of repeating sarcomeres containing actin (thin filaments) and myosin (thick filaments with molecular cross-bridge heads).",
    stats: {
      muscleCount: "Over 640 skeletal muscles",
      bodyMassShare: "Approx. 40% of adult body weight",
      busiestMuscles: "Eye muscles move more than 100,000 times a day"
    }
  },
  {
    id: "endocrine",
    slug: "endocrine-system",
    name: "Endocrine System",
    latinName: "Systema Endocrinum",
    tagline: "The biochemical wireless broadcast network regulating metabolism, growth, and mood.",
    color: "#d97706", // Gold / Amber
    accentColor: "#fcd34d",
    icon: "zap",
    majorOrgans: ["Pituitary Gland", "Hypothalamus", "Thyroid Gland", "Adrenal Glands", "Pancreas (Islets)", "Pineal Gland", "Ovaries/Testes"],
    overview: "Unlike the localized, millisecond signaling of the nervous system, the endocrine system uses ductless glands that secrete chemical messengers (hormones) directly into the bloodstream. These hormones diffuse to distant target cells possessing specific receptor proteins, orchestrating sustained, long-term processes including metabolic rate, growth, fluid balance, stress responses, and reproductive cycles.",
    primaryFunctions: [
      "Regulation of basal metabolic rate and cellular energy usage (Thyroid hormones T3/T4)",
      "Strict control of blood glucose homeostasis (Pancreatic insulin and glucagon)",
      "Adaptation to acute and chronic psychological/physical stressors (Adrenal cortisol and epinephrine)",
      "Growth, cellular differentiation, and tissue maturation (Growth Hormone, IGF-1)",
      "Coordination of sexual development, fertility, and circadian sleep rhythms (Melatonin)"
    ],
    divisions: [
      {
        name: "Hypothalamic-Pituitary Axis",
        description: "The primary command bridge where neural inputs trigger releasing hormones that direct anterior pituitary trophic hormones."
      },
      {
        name: "Peripheral Gland Feedback Loops",
        description: "Negative feedback systems where circulating target hormone concentrations directly inhibit upstream pituitary and hypothalamic secretion."
      }
    ],
    cellularComponents: "Follicular and parafollicular cells of thyroid, chromaffin cells of adrenal medulla, and alpha/beta/delta islet cells of the endocrine pancreas.",
    stats: {
      hormoneTypes: "Over 50 distinct hormones circulating in human blood",
      potency: "Active at concentrations as low as picograms per milliliter (10^-12 g/mL)",
      masterGland: "Pituitary gland is only the size of a green pea"
    }
  },
  {
    id: "immune-lymphatic",
    slug: "immune-and-lymphatic-systems",
    name: "Immune & Lymphatic Systems",
    latinName: "Systema Lymphoideum",
    tagline: "The body's multi-layered defense garrison, fluid scavenger, and pathogen surveillance team.",
    color: "#059669", // Emerald Green
    accentColor: "#34d399",
    icon: "shield-check",
    majorOrgans: ["Spleen", "Thymus", "Lymph Nodes", "Bone Marrow", "Lymphatic Vessels", "Tonsils", "White Blood Cells"],
    overview: "The lymphatic system is an open vascular network of blind-ended capillaries, vessels, and lymph nodes that retrieves roughly 3 liters of interstitial fluid daily, filtering it before returning it to the venous bloodstream. Integrated with this network is the immune system: an army of innate phagocytes, complement proteins, and antigen-specific adaptive T and B lymphocytes capable of neutralizing pathogens and cancer cells.",
    primaryFunctions: [
      "Drainage of excess tissue interstitial fluid back to venous circulation to prevent lymphedema",
      "Absorption and transportation of dietary fats and fat-soluble vitamins (chylomicrons) via intestinal lacteals",
      "Surveillance and filtration of lymph by macrophages and dendritic cells within hundreds of lymph nodes",
      "Generation of durable pathogen-specific immunological memory via B and T lymphocytes"
    ],
    divisions: [
      {
        name: "Innate Immunity",
        description: "Non-specific rapid response: physical skin barrier, stomach acid, natural killer (NK) cells, neutrophils, macrophages, and inflammatory cascades."
      },
      {
        name: "Adaptive Immunity",
        description: "Highly specialized response: cytotoxic T cells (cell-mediated) and B-cell derived plasma cells secreting antibodies (humoral immunity)."
      },
      {
        name: "Primary vs Secondary Lymphoid Organs",
        description: "Primary (bone marrow and thymus for leukocyte generation/maturation) vs Secondary (spleen, lymph nodes, tonsils, Peyer's patches for immune activation)."
      }
    ],
    cellularComponents: "T-lymphocytes (CD4+ Helper, CD8+ Cytotoxic), B-lymphocytes, Plasma cells, Natural Killer cells, Macrophages, Dendritic cells, Neutrophils.",
    stats: {
      lymphNodes: "Approx. 500–700 lymph nodes throughout the body",
      fluidRecycled: "Returns 3–4 Liters of filtered lymph to blood daily",
      antibodyDiversity: "Can produce over 10 Billion distinct antibody variants"
    }
  },
  {
    id: "integumentary",
    slug: "integumentary-system",
    name: "Integumentary System",
    latinName: "Systema Integumentarium",
    tagline: "The resilient, waterproof barrier defending against microbes, chemicals, and dehydration.",
    color: "#ea580c", // Deep Orange
    accentColor: "#fb923c",
    icon: "layers",
    majorOrgans: ["Skin (Cutis)", "Epidermis", "Dermis", "Hypodermis", "Hair Follicles", "Nails", "Sweat & Sebaceous Glands"],
    overview: "Covering roughly 2 square meters and accounting for 16% of total body weight, the skin is the largest organ in the human body. Together with hair, nails, and exocrine glands, it forms a dynamic multi-layered barrier that shields deeper structures from microbial invasion, ultraviolet radiation, and mechanical shearing, while playing a critical role in thermoregulation, sensation, and Vitamin D synthesis.",
    primaryFunctions: [
      "Physical, biological, and chemical protection against pathogens, UV radiation, and abrasions",
      "Thermoregulation via eccrine sweat secretion and dermal capillary vasoconstriction/vasodilation",
      "Sensory reception through tactile Meissner corpuscles, Pacinian vibration sensors, and free nerve endings",
      "Prevention of vital bodily dehydration and electrolyte desiccation",
      "Photochemical synthesis of cholecalciferol (precursor to active Vitamin D3) via UV-B sunlight exposure"
    ],
    divisions: [
      {
        name: "Epidermis",
        description: "Avascular stratified squamous keratinized epithelium composed of five distinct layers (strata) renewing every 28-30 days."
      },
      {
        name: "Dermis",
        description: "Tough, vascular connective tissue layer containing collagen, elastin, hair follicles, nerves, sweat glands, and sebaceous glands."
      },
      {
        name: "Hypodermis (Subcutaneous)",
        description: "Adipose and loose connective tissue layer anchoring skin to underlying fascia while providing insulation and shock absorption."
      }
    ],
    cellularComponents: "Keratinocytes (90% of epidermis), Melanocytes (producing photoprotective melanin), Langerhans cells (antigen presentation), and Merkel cells (light touch).",
    stats: {
      totalArea: "Approx. 1.5 to 2.0 m² (16–22 sq ft)",
      weight: "Accounts for approx. 16% of total body weight (8–10 lbs)",
      shedding: "Sheds 30,000–40,000 dead skin cells every minute"
    }
  },
  {
    id: "reproductive",
    slug: "reproductive-system",
    name: "Reproductive System",
    latinName: "Systema Genitale",
    tagline: "The biological system dedicated to genetic continuity, gametogenesis, and life perpetuation.",
    color: "#db2777", // Rose / Pink
    accentColor: "#f472b6",
    icon: "users",
    majorOrgans: ["Ovaries", "Testes", "Uterus", "Fallopian Tubes", "Prostate", "Vas Deferens"],
    overview: "The reproductive system is uniquely structured to ensure the continuation of the species through gametogenesis (spermatogenesis and oogenesis), hormone production (testosterone, estrogens, progesterone), and in females, the support and nourishment of developing offspring during gestation and lactation.",
    primaryFunctions: [
      "Production of haploid gametes (spermatozoa and ova) through meiotic reduction division",
      "Secretion of sex steroids governing secondary sexual characteristics, libido, and bone density",
      "Facilitation of fertilization, blastocyst implantation, and embryological/fetal gestation (females)",
      "Lactation — post-partum synthesis and ejection of colostrum and breast milk via mammary glands"
    ],
    divisions: [
      {
        name: "Male Reproductive Anatomy",
        description: "Testes (spermatogenesis and testosterone), epididymides (sperm maturation), vas deferens, seminal vesicles, and prostate gland."
      },
      {
        name: "Female Reproductive Anatomy",
        description: "Bilateral ovaries (oogenesis and estrogen/progesterone), uterine tubes (fertilization site), uterus (endometrial implantation site), cervix, and vagina."
      }
    ],
    cellularComponents: "Spermatogenic cells and supportive Sertoli cells in testes, Leydig cells producing testosterone, granulosa and theca cells surrounding developing ovarian follicles.",
    stats: {
      spermProduction: "Healthy males produce 100–300 million sperm cells daily",
      ovumReserve: "Females are born with approx. 1–2 million primordial follicles, releasing ~400 during lifetime",
      largestCell: "Human ovum (egg) is the largest single cell in the human body (~120 µm)"
    }
  },
  {
    id: "special-senses",
    slug: "special-senses",
    name: "Special Sense Organs",
    latinName: "Organa Sensuum",
    tagline: "The sophisticated biological transducers converting light, waves, and chemicals into conscious perception.",
    color: "#0891b2", // Cyan
    accentColor: "#22d3ee",
    icon: "eye",
    majorOrgans: ["Eyes (Vision)", "Ears (Hearing & Vestibular)", "Nose (Olfaction)", "Tongue (Gustation)", "Skin Receptors"],
    overview: "Special sense organs house specialized sensory receptor cells localized in cranial structures. Unlike general somatic touch receptors distributed throughout the skin, the special senses include vision (photoreceptors), hearing and balance (mechanoreceptors with stereocilia), smell (chemoreceptors), and taste (gustatory receptors in papillae), projecting to designated primary sensory cortices in the brain.",
    primaryFunctions: [
      "Phototransduction of electromagnetic radiation (380–750 nm) into visual neural signals",
      "Acoustic frequency analysis and sound localization via cochlear hair cells",
      "Vestibular detection of linear acceleration, gravity, and angular head rotation for balance",
      "Chemoreceptive recognition of volatile odor molecules and dissolved gustatory tastants"
    ],
    divisions: [
      {
        name: "Visual System",
        description: "Cornea, lens, pupil, vitreous humor, and retina containing 120 million rods and 6 million cones."
      },
      {
        name: "Auditory & Vestibular System",
        description: "External ear, tympanic membrane, ossicles (malleus, incus, stapes), cochlea, and semicircular canals."
      },
      {
        name: "Chemical Senses",
        description: "Olfactory epithelium in nasal vault and taste buds situated on fungiform, foliate, and circumvallate papillae."
      }
    ],
    cellularComponents: "Rods & Cones, Cochlear Hair Cells with tip-links, Olfactory Bipolar Neurons with cilia, Gustatory Receptor cells.",
    stats: {
      colorsDistinguished: "Can distinguish approx. 10 Million different colors",
      auditoryRange: "Detects sound frequencies from 20 Hz to 20,000 Hz",
      smellMemory: "Can identify over 1 Trillion distinct olfactory scents"
    }
  }
];

// Export to global scope
window.SYSTEMS_DATA = SYSTEMS_DATA;
