/**
 * Human Body Explorer - Interactive Biological Processes Data
 * Multi-step physiological pathways with step-by-step mechanisms and visual highlights.
 */

const PROCESSES_DATA = [
  {
    id: "cardiac-cycle",
    slug: "cardiac-cycle-circulation",
    title: "How Your Heart Pumps Blood (The Cardiac Cycle)",
    subtitle: "The synchronized electrical and mechanical cycle circulating 7,200 liters of blood daily.",
    systemId: "cardiovascular",
    estimatedMinutes: 4,
    steps: [
      {
        stepNumber: 1,
        title: "Atrial Diastole & Passive Ventricular Filling",
        phase: "Early Diastole (Pressure: Atria ~4-8 mmHg, Ventricles ~0-2 mmHg)",
        action: "Heart muscle is fully relaxed. Venous blood from superior and inferior venae cavae passively flows into the right atrium, while blood from four pulmonary veins fills the left atrium. As atrial pressures rise above ventricular pressures, the tricuspid and mitral (bicuspid) atrioventricular (AV) valves open, allowing blood to passively fill approximately 70-80% of the ventricular volume.",
        structuresHighlighted: ["Right Atrium", "Left Atrium", "Tricuspid Valve", "Mitral Valve", "Ventricles"],
        chemicalOrElectricalEvent: "Resting transmembrane potential (-90 mV in ventricular myocytes). SA node pacemaker cells slowly depolarize toward threshold (-40 mV) via hyperpolarization-activated 'funny' sodium channels (If).",
        clinicalNote: "In stiff, hypertrophied ventricles (e.g. chronic hypertension), passive filling is impaired, making active atrial kick critically necessary."
      },
      {
        stepNumber: 2,
        title: "Sinoatrial (SA) Node Discharge & Atrial Systole",
        phase: "Late Diastole / Atrial Systole (Duration: ~0.1 s)",
        action: "The SA node at the right atrial crest fires an autonomous electrical action potential. Depolarization radiates across atrial myocardium like a wave, causing both atria to contract simultaneously ('atrial kick'). This forces the remaining 20-30% of blood through the open AV valves into the ventricles, establishing End-Diastolic Volume (EDV, ~120 mL).",
        structuresHighlighted: ["Sinoatrial (SA) Node", "Atrial Myocardium", "Atrioventricular (AV) Node"],
        chemicalOrElectricalEvent: "P wave on the Surface Electrocardiogram (ECG). Action potential enters the AV node, where conduction is delayed by ~0.1 seconds to allow atria to finish emptying.",
        clinicalNote: "In Atrial Fibrillation, coordinated atrial systole is lost, reducing cardiac output by 15-20%."
      },
      {
        stepNumber: 3,
        title: "Isovolumetric Ventricular Contraction",
        phase: "Early Ventricular Systole (Duration: ~0.05 s)",
        action: "The electrical impulse travels down the Bundle of His, left and right bundle branches, and terminal Purkinje fibers. Ventricular contraction begins from the apex upward. As intraventricular pressure spikes above atrial pressure, the tricuspid and mitral valves snap shut instantly. Because aortic and pulmonary semilunar valves are not yet open, all four valves are closed and ventricular volume does not change.",
        structuresHighlighted: ["Purkinje Fibers", "Ventricular Myocardium", "AV Valves (Closed)"],
        chemicalOrElectricalEvent: "QRS complex on ECG. Closure of AV valves produces the First Heart Sound ('S1' or 'Lub'). Intraventricular pressure skyrockets from 5 mmHg to >80 mmHg (left) and >10 mmHg (right).",
        clinicalNote: "Papillary muscles and chordae tendineae contract to prevent the AV valve cusps from prolapsing back into the atria."
      },
      {
        stepNumber: 4,
        title: "Ventricular Ejection Phase",
        phase: "Rapid & Reduced Ejection (Duration: ~0.25 s)",
        action: "When left ventricular pressure exceeds systemic aortic pressure (~80 mmHg) and right ventricular pressure exceeds pulmonary artery pressure (~10 mmHg), the Aortic and Pulmonary semilunar valves are forced open. Blood violently rushes out: the left ventricle ejects into the aorta to feed the body, and the right ventricle ejects into the pulmonary trunk to feed the lungs.",
        structuresHighlighted: ["Aortic Valve (Open)", "Pulmonary Valve (Open)", "Aorta", "Pulmonary Trunk"],
        chemicalOrElectricalEvent: "Ventricular myocytes remain in the plateau phase (Phase 2) of the cardiac action potential, sustained by inward L-type Ca2+ current maintaining cross-bridge cycling.",
        clinicalNote: "Each beat ejects ~70 mL of blood (Stroke Volume), leaving ~50 mL behind (End-Systolic Volume, ESV). Normal Ejection Fraction is 55-70%."
      },
      {
        stepNumber: 5,
        title: "Isovolumetric Relaxation & Semilunar Valve Closure",
        phase: "Early Diastole (Duration: ~0.08 s)",
        action: "Ventricular repolarization begins. As myocardial tension falls, intraventricular pressure drops below the pressures in the aorta and pulmonary trunk. Elastic recoil of the great arteries forces blood backward momentarily, snapping the aortic and pulmonary semilunar valves shut. With all four valves closed, the ventricles relax without volume change until pressures drop below atrial levels, resetting the cycle.",
        structuresHighlighted: ["Aortic Valve (Shut)", "Pulmonary Valve (Shut)", "Left Ventricle", "Right Ventricle"],
        chemicalOrElectricalEvent: "T wave on ECG. Closure of semilunar valves generates the Second Heart Sound ('S2' or 'Dub'). Intracellular Ca2+ is actively pumped back into the sarcoplasmic reticulum by SERCA.",
        clinicalNote: "Aortic valve incompetence (regurgitation) causes backflow into the left ventricle, leading to a high-pitched diastolic decrescendo murmur."
      }
    ]
  },
  {
    id: "pulmonary-gas-exchange",
    slug: "pulmonary-ventilation-gas-exchange",
    title: "How Your Lungs Exchange Oxygen & Carbon Dioxide",
    subtitle: "From atmospheric inhalation to molecular diffusion across the 0.5-micron blood-air barrier.",
    systemId: "respiratory",
    estimatedMinutes: 4,
    steps: [
      {
        stepNumber: 1,
        title: "Inspiratory Contraction & Pressure Drop (Boyle's Law)",
        phase: "Active Inspiration",
        action: "Medullary respiratory pacemaker neurons fire signals down the phrenic nerves (C3-C5) and intercostal nerves. The dome-shaped diaphragm contracts downward by 1.5 to 7 cm, while external intercostal muscles swing the ribs upward and outward like bucket handles. This expands thoracic cavity volume in all dimensions.",
        structuresHighlighted: ["Diaphragm", "Intercostal Muscles", "Ribcage", "Pleural Cavities"],
        chemicalOrElectricalEvent: "Boyle's Law: Pressure and volume of a gas are inversely proportional. Expanding thoracic volume decreases intrapulmonary pressure from 760 mmHg to 759 mmHg (-1 mmHg relative to atmosphere).",
        clinicalNote: "In tension pneumothorax, air trapped in the pleural cavity eliminates negative pressure, causing lung collapse (atelectasis)."
      },
      {
        stepNumber: 2,
        title: "Bulk Air Conduction down the Bronchial Tree",
        phase: "Conducting Zone Transit",
        action: "Atmospheric air rushes through the nasal cavity (where it is filtered by vibrissae hairs, warmed to 37°C by venous plexuses, and saturated to 100% relative humidity). Air conducts down the pharynx, through the larynx and trachea, bifurcates at the carina into primary bronchi, and cascades through 23 generations of branching bronchioles down to terminal bronchioles.",
        structuresHighlighted: ["Nasal Cavity", "Trachea", "Bronchial Tree", "Terminal Bronchioles"],
        chemicalOrElectricalEvent: "Mucociliary escalator: Ciliated pseudostratified columnar epithelial cells beat in rhythm (1,000 strokes/min) to propel mucus-trapped dust particles upward away from the lungs.",
        clinicalNote: "In Asthma, smooth muscle hyperreactivity in bronchioles causes bronchoconstriction and excessive mucus secretion, drastically raising airway resistance."
      },
      {
        stepNumber: 3,
        title: "Alveolar Gas Mixing & Fick's Law Diffusion",
        phase: "Respiratory Zone Exchange",
        action: "Air enters 300-500 million alveoli. Here, inspired gas encounters deoxygenated venous blood arriving from the pulmonary artery. Oxygen in alveolar air has a partial pressure (PO2) of 104 mmHg; deoxygenated blood in surrounding capillaries has a PO2 of only 40 mmHg. Driven by this steep gradient, O2 dissolves and diffuses across the 0.5 µm respiratory membrane.",
        structuresHighlighted: ["Alveoli", "Type I Pneumocytes", "Pulmonary Capillaries", "Respiratory Membrane"],
        chemicalOrElectricalEvent: "Fick's Law of Diffusion: Rate of gas diffusion is directly proportional to surface area (~80 m²) and partial pressure difference, and inversely proportional to membrane thickness (0.5 µm). Complete equilibration occurs in just 0.25 seconds (1/3 the capillary transit time).",
        clinicalNote: "In Pulmonary Fibrosis, collagen scarring thickens the basement membrane, impairing oxygen diffusion."
      },
      {
        stepNumber: 4,
        title: "Hemoglobin Oxygen Loading & Carbon Dioxide Unloading",
        phase: "Microvascular Binding",
        action: "As O2 molecules enter the plasma of pulmonary capillaries, they cross red blood cell membranes and bind to Fe2+ iron atoms in hemoglobin tetramers. Binding of the first O2 molecule alters hemoglobin quaternary structure (cooperative binding), making subsequent O2 molecules bind with higher affinity. Simultaneously, blood PCO2 (45 mmHg) exceeds alveolar PCO2 (40 mmHg), driving CO2 out of blood into alveoli.",
        structuresHighlighted: ["Red Blood Cells", "Hemoglobin Tetramer", "Carbonic Anhydrase"],
        chemicalOrElectricalEvent: "Haldane Effect: Deoxygenated hemoglobin carries more CO2; when hemoglobin binds O2, its affinity for CO2 and H+ decreases, displacing CO2 into plasma. RBC carbonic anhydrase converts bicarbonate (HCO3-) back into CO2 gas for exhalation.",
        clinicalNote: "Carbon monoxide (CO) binds hemoglobin with 200x greater affinity than oxygen, forming carboxyhemoglobin and preventing oxygen delivery."
      },
      {
        stepNumber: 5,
        title: "Passive Elastic Recoil Exhalation",
        phase: "Quiet Expiration",
        action: "Phrenic nerve firing stops. The diaphragm and external intercostal muscles relax. Elastic fibers within the lung parenchyma and surface tension in the alveoli recoil inward. Thoracic volume contracts, intrapulmonary pressure rises to +1 mmHg (761 mmHg), and gas containing 4% carbon dioxide is passively forced out of the lungs into the atmosphere.",
        structuresHighlighted: ["Elastic Lung Parenchyma", "Relaxed Diaphragm", "Trachea", "Exhaled Airway"],
        chemicalOrElectricalEvent: "Quiet expiration requires zero muscular energy (passive). During vigorous exercise or coughing, internal intercostals and abdominal muscles actively contract (forced expiration).",
        clinicalNote: "In Emphysema, elastase enzymes destroy alveolar elastic recoil, trapping air inside the lungs and making exhalation an exhausting active effort."
      }
    ]
  },
  {
    id: "nephron-filtration",
    slug: "nephron-blood-filtration-urine",
    title: "How Your Kidneys Filter Blood (Nephron Physiology)",
    subtitle: "How 2 million microscopic nephrons filter 180 liters of plasma daily to produce 1.5 liters of urine.",
    systemId: "urinary",
    estimatedMinutes: 5,
    steps: [
      {
        stepNumber: 1,
        title: "Glomerular Ultrafiltration",
        phase: "Renal Corpuscle (Bowman's Capsule)",
        action: "Blood enters the glomerulus via the wide afferent arteriole and exits through the narrower efferent arteriole, creating high capillary hydrostatic pressure (~55 mmHg). This pressure forces water and dissolved small solutes across the three-layered filtration barrier (fenestrated endothelium, negative basement membrane, and podocyte filtration slits) into Bowman's space.",
        structuresHighlighted: ["Afferent Arteriole", "Glomerulus", "Podocytes", "Bowman's Capsule"],
        chemicalOrElectricalEvent: "Net Filtration Pressure (NFP) = Glomerular Hydrostatic Pressure (55) - [Bowman's Capsule Hydrostatic (15) + Blood Colloid Osmotic (30)] = +10 mmHg. Normal Glomerular Filtration Rate (GFR) is ~125 mL/min (180 L/day). Plasma proteins (>70 kDa) and blood cells are strictly excluded.",
        clinicalNote: "Proteinuria (protein in urine) indicates breakdown of the negative electrostatic charge or physical integrity of the glomerular basement membrane."
      },
      {
        stepNumber: 2,
        title: "Massive Obligatory Reabsorption in Proximal Tubule (PCT)",
        phase: "Proximal Convoluted Tubule",
        action: "The ultrafiltrate enters the Proximal Convoluted Tubule. Simple cuboidal cells with dense brush borders perform bulk reclamation. Basolateral Na+/K+ ATPase pumps actively pump sodium into interstitial capillaries, creating a gradient that drives secondary active transport of all glucose, all amino acids, 65% of water, and 65% of Na+ and Cl- back into the blood.",
        structuresHighlighted: ["Proximal Convoluted Tubule", "Brush Border Microvilli", "Peritubular Capillaries"],
        chemicalOrElectricalEvent: "Apical SGLT2 symporters reabsorb glucose coupled with Na+. Carbonic anhydrase reclaims 85-90% of filtered bicarbonate (HCO3-). Water reabsorption is obligatory, moving passively through Aquaporin-1 channels.",
        clinicalNote: "Modern SGLT2 inhibitor drugs block glucose reabsorption in the PCT, causing glycosuria to lower blood sugar in Type 2 Diabetes."
      },
      {
        stepNumber: 3,
        title: "Countercurrent Multiplication in the Loop of Henle",
        phase: "Loop of Henle (Renal Medulla)",
        action: "Filtrate travels down the thin descending limb, which is highly permeable to water but impermeable to solutes; water exits into the hypertonic medulla, concentrating filtrate up to 1,200 mOsm/L at the loop hairpin. Filtrate then ascends through the thick ascending limb, which is completely impermeable to water but actively pumps out Na+, K+, and 2Cl- ions (NKCC2 transporters) into the medullary interstitium.",
        structuresHighlighted: ["Descending Limb", "Ascending Limb", "Medullary Interstitium", "Vasa Recta"],
        chemicalOrElectricalEvent: "The countercurrent multiplier establishes an osmotic gradient from 300 mOsm/L at the corticomedullary junction to 1,200 mOsm/L deep in the inner medulla. The hairpin loop of the vasa recta capillaries preserves this gradient (countercurrent exchanger).",
        clinicalNote: "Loop diuretics (e.g. Furosemide/Lasix) inhibit the NKCC2 symporter in the thick ascending limb, disrupting the medullary gradient and causing profound diuresis."
      },
      {
        stepNumber: 4,
        title: "Fine-Tuning Reabsorption & Secretion in Distal Tubule (DCT)",
        phase: "Distal Convoluted Tubule",
        action: "Hypo-osmotic filtrate (~100 mOsm/L) enters the DCT. Here, ion transport is subject to precise endocrine regulation. Parathyroid Hormone (PTH) stimulates calcium reabsorption. Principal cells reabsorb Na+ and secrete K+ under the control of Aldosterone. Intercalated cells secrete H+ and reabsorb HCO3- to regulate systemic acid-base balance.",
        structuresHighlighted: ["Distal Convoluted Tubule", "Macula Densa", "Principal Cells", "Intercalated Cells"],
        chemicalOrElectricalEvent: "Juxtaglomerular apparatus (JGA): Macula densa cells monitor luminal NaCl concentration, sending feedback signals to afferent arteriole granular cells to modulate renin secretion (Tubuloglomerular Feedback).",
        clinicalNote: "Spironolactone blocks aldosterone mineralocorticoid receptors in the DCT/collecting duct, sparing potassium while promoting mild sodium and water excretion."
      },
      {
        stepNumber: 5,
        title: "Hormone-Regulated Water Reclamation & Urine Excretion",
        phase: "Collecting Duct to Renal Pelvis",
        action: "Filtrate passes down through collecting ducts traversing the hyperosmotic medullary gradient. In dehydration, high circulating Anti-Diuretic Hormone (ADH/Vasopressin) causes Aquaporin-2 water channels to fuse with the luminal membrane. Water rushes out into the hypertonic medulla and back into the blood, producing concentrated, low-volume urine (~1,200 mOsm/L). In hyperhydration, low ADH leaves ducts water-impermeable, producing dilute urine (~50 mOsm/L).",
        structuresHighlighted: ["Collecting Duct", "Aquaporin-2 Channels", "Renal Papilla", "Minor Calyces", "Ureter"],
        chemicalOrElectricalEvent: "ADH binds V2 G-protein coupled receptors, activating adenylyl cyclase and cAMP-dependent PKA phosphorylation of Aquaporin-2 storage vesicles. Concentrated urine drips through the renal papillae into minor calyces, moving by peristalsis down the ureter to the bladder.",
        clinicalNote: "In Diabetes Insipidus (lack of ADH or mutated V2 receptors), collecting ducts cannot reabsorb water, resulting in 10 to 20 liters of dilute urine daily."
      }
    ]
  },
  {
    id: "synaptic-transmission",
    slug: "action-potential-synaptic-transmission",
    title: "How Neurons Communicate (Action Potentials & Synapses)",
    subtitle: "The electro-chemical language of the nervous system: millisecond voltage spikes and neurotransmitter exocytosis.",
    systemId: "nervous",
    estimatedMinutes: 4,
    steps: [
      {
        stepNumber: 1,
        title: "Resting Membrane Potential (-70 mV)",
        phase: "Electrochemical Polarized State",
        action: "The neuronal membrane maintains an electrical voltage gradient of -70 millivolts (inside negative relative to outside). The primary architect of this gradient is the Na+/K+ ATPase pump, which continuously expels 3 Na+ ions for every 2 K+ ions pumped inward, combined with high resting permeability of open potassium leak channels through which K+ diffuses outward.",
        structuresHighlighted: ["Neuronal Membrane", "Na+/K+ ATPase Pump", "Potassium Leak Channels"],
        chemicalOrElectricalEvent: "High intracellular K+ (~140 mM) vs low extracellular K+ (~4 mM); high extracellular Na+ (~145 mM) vs low intracellular Na+ (~12 mM). Nernst and Goldman-Hodgkin-Katz equations calculate resting Em near -70 mV.",
        clinicalNote: "Hypokalemia (low blood potassium) hyperpolarizes resting membrane potential, making neurons and cardiac myocytes harder to excite."
      },
      {
        stepNumber: 2,
        title: "Dendritic Summation & Threshold Depolarization (-55 mV)",
        phase: "Synaptic Integration at Axon Hillock",
        action: "Dendrites and cell body receive inputs from thousands of upstream synapses. Excitatory neurotransmitters (e.g. Glutamate) open ligand-gated cation channels, producing Excitatory Postsynaptic Potentials (EPSPs); inhibitory inputs (GABA) produce IPSPs. These graded local potentials summate spatially and temporally at the Axon Hillock (the trigger zone).",
        structuresHighlighted: ["Dendritic Spines", "Soma", "Axon Hillock (Trigger Zone)"],
        chemicalOrElectricalEvent: "If algebraic summation of EPSPs depolarizes the axon hillock membrane from -70 mV to the critical Threshold of -55 mV, voltage-gated sodium channels (Nav1.2/Nav1.6) undergo sudden activation gate opening.",
        clinicalNote: "Local anesthetics like Lidocaine bind the internal pore of voltage-gated Na+ channels, blocking action potential generation and eliminating pain transmission."
      },
      {
        stepNumber: 3,
        title: "Depolarization Spike & Repolarization Phase",
        phase: "Action Potential (Duration: ~1 ms)",
        action: "Opening of voltage-gated Na+ channels triggers massive sodium influx driven by electrical and chemical gradients (Hodgkin cycle). Membrane potential spikes from -55 mV to +30 mV. At peak voltage, Na+ channel inactivation gates close ('ball-and-chain' mechanism), while delayed rectifier voltage-gated K+ channels open, allowing rapid potassium efflux that restores the negative internal charge.",
        structuresHighlighted: ["Axon Hillock", "Voltage-Gated Na+ Channels", "Voltage-Gated K+ Channels"],
        chemicalOrElectricalEvent: "Absolute Refractory Period: While Na+ inactivation gates are closed, no stimulus, regardless of strength, can trigger another action potential. Relative Refractory Period follows during potassium-driven afterhyperpolarization (-80 mV).",
        clinicalNote: "Multiple Sclerosis (MS) is an autoimmune demyelinating disease where destruction of the myelin sheath impairs action potential conduction velocity."
      },
      {
        stepNumber: 4,
        title: "Saltatory Conduction down the Myelinated Axon",
        phase: "Axonal Signal Propagation",
        action: "In myelinated axons, myelin sheaths produced by oligodendrocytes (CNS) or Schwann cells (PNS) act as high-resistance electrical insulation. Ionic currents cannot cross the lipid myelin; instead, the action potential electrotonically leaps from one unmyelinated Node of Ranvier to the next, propagating at speeds up to 120 m/s (270 mph) with minimal ATP expenditure.",
        structuresHighlighted: ["Myelin Sheath", "Nodes of Ranvier", "Axon Axolemma"],
        chemicalOrElectricalEvent: "Saltatory conduction (from Latin 'saltare', to leap). Nodes of Ranvier are densely packed with voltage-gated Na+ channels (~12,000 per µm²), regenerating full action potential amplitude at each node.",
        clinicalNote: "Guillain-Barré syndrome is an acute autoimmune inflammatory polyradiculoneuropathy attacking peripheral nerve Schwann cell myelin."
      },
      {
        stepNumber: 5,
        title: "Synaptic Exocytosis & Postsynaptic Binding",
        phase: "Chemical Synaptic Transmission",
        action: "The action potential arrives at the presynaptic terminal, depolarizing the bouton and opening voltage-gated Ca2+ channels. Calcium rushes in, binding to Synaptotagmin on synaptic vesicles. This triggers SNARE complex protein zipper folding, forcing vesicles to fuse with the presynaptic membrane and dump thousands of neurotransmitter molecules across the 20-nanometer synaptic cleft to bind postsynaptic receptors.",
        structuresHighlighted: ["Presynaptic Terminal", "Synaptic Vesicles", "Synaptic Cleft (20 nm)", "Postsynaptic Receptors"],
        chemicalOrElectricalEvent: "Neurotransmitter action is terminated within milliseconds by: 1) enzymatic degradation (e.g. Acetylcholinesterase), 2) reuptake transporters (e.g. Serotonin Transporter SERT), or 3) astrocytic clearance.",
        clinicalNote: "Botulinum toxin (Botox) cleaves presynaptic SNARE proteins, preventing acetylcholine exocytosis and causing flaccid muscle paralysis."
      }
    ]
  },
  {
    id: "food-digestion",
    slug: "gastrointestinal-food-digestion",
    title: "How Your Digestive System Processes Food",
    subtitle: "From cephalic anticipation and enzymatic breakdown to nutrient absorption and waste elimination.",
    systemId: "digestive",
    estimatedMinutes: 5,
    steps: [
      {
        stepNumber: 1,
        title: "Oral Mastication & Salivary Amylase Action",
        phase: "Cephalic & Oral Phase",
        action: "The sight and smell of food trigger parasympathetic salivation via cranial nerves VII and IX. Teeth mechanically grind food into small particles (mastication), mixing it with saliva secreted by parotid, submandibular, and sublingual glands. Salivary amylase begins cleaving starch polysaccharides into maltose, while lingual lipase begins lipid digestion. The tongue rolls the food into a lubricated bolus.",
        structuresHighlighted: ["Teeth", "Tongue", "Salivary Glands", "Hard/Soft Palate"],
        chemicalOrElectricalEvent: "Saliva contains lysozyme and IgA antibodies for oral antimicrobial defense, and mucin glycoproteins to lubricate transit through the esophagus during swallowing.",
        clinicalNote: "Xerostomia (severe dry mouth) impairs swallowing, speech, and dental remineralization, significantly increasing tooth decay risk."
      },
      {
        stepNumber: 2,
        title: "Esophageal Deglutition & Peristalsis",
        phase: "Pharyngeal & Esophageal Transit",
        action: "Swallowing is initiated voluntarily, then transitions into an involuntary medullary reflex. The soft palate elevates to seal the nasopharynx, and the epiglottis tilts downward to seal the laryngeal airway. The upper esophageal sphincter relaxes, and coordinated sequential waves of circular muscle contraction (peristalsis) strip the bolus down the 25 cm esophagus in 4 to 8 seconds.",
        structuresHighlighted: ["Epiglottis", "Pharynx", "Esophagus", "Lower Esophageal Sphincter (LES)"],
        chemicalOrElectricalEvent: "The vagus nerve and myenteric plexus (Auerbach's plexus) coordinate proximal contraction and distal receptive relaxation. The lower esophageal sphincter relaxes to admit the bolus, then clamps shut.",
        clinicalNote: "Achalasia is a motility disorder where the lower esophageal sphincter fails to relax due to degeneration of inhibitory myenteric ganglion cells."
      },
      {
        stepNumber: 3,
        title: "Gastric Churning & Hydrochloric Acid Denaturation",
        phase: "Gastric Digestion",
        action: "Food enters the stomach, stimulating G cells to release Gastrin. Parietal cells pump out concentrated hydrochloric acid (pH 1.5-2.0), which denatures proteins, kills ingested bacteria, and cleaves chief cell pepsinogen into active pepsin. The stomach's three-layered muscular wall churns contents back and forth against the closed pyloric sphincter, pulverizing food into liquid chyme.",
        structuresHighlighted: ["Gastric Rugae", "Parietal Cells", "Chief Cells", "Pyloric Sphincter"],
        chemicalOrElectricalEvent: "Proton pumps (H+/K+ ATPase) in parietal cell apical membranes actively pump H+ ions against a million-fold gradient. Parietal cells also secrete Intrinsic Factor, essential for later Vitamin B12 absorption.",
        clinicalNote: "Proton Pump Inhibitors (PPIs like Omeprazole) irreversibly bind the H+/K+ ATPase pump, dramatically reducing gastric acid secretion."
      },
      {
        stepNumber: 4,
        title: "Duodenal Neutralization & Pancreatic-Biliary Digestion",
        phase: "Upper Small Intestine Phase",
        action: "Acidic chyme squirts through the pylorus into the duodenum. Acid triggers duodenal S cells to release Secretin, stimulating the pancreas to release sodium bicarbonate to neutralize pH to 7.0-8.0. Fatty acids trigger duodenal I cells to release Cholecystokinin (CCK), which causes the gallbladder to contract (releasing bile salts to emulsify fats) and acinar cells to secrete pancreatic enzymes.",
        structuresHighlighted: ["Duodenum", "Pancreas", "Gallbladder", "Hepatopancreatic Sphincter"],
        chemicalOrElectricalEvent: "Pancreatic amylase hydrolyzes carbohydrates; pancreatic lipase digests triglycerides into monoglycerides and free fatty acids; trypsin, chymotrypsin, and carboxypeptidase break down peptides.",
        clinicalNote: "Gallstones blocking the common bile duct impede both bile and pancreatic juice outflow, potentially causing acute gallstone pancreatitis."
      },
      {
        stepNumber: 5,
        title: "Jejunal Brush-Border Absorption & Colonic Water Recovery",
        phase: "Absorption & Elimination",
        action: "Chyme travels through the jejunum and ileum. Circular folds, villi, and enterocyte microvilli absorb monosaccharides, amino acids, and water into portal capillaries. Dietary fats are packaged into chylomicrons and absorbed into central lacteals. The remaining undigested fiber and fluid cross the ileocecal valve into the colon, where 1.5 L of water is reabsorbed and gut microbiota synthesize Vitamin K, forming solid feces.",
        structuresHighlighted: ["Intestinal Villi", "Enterocyte Brush Border", "Lacteals", "Colon", "Rectum"],
        chemicalOrElectricalEvent: "90% of water and electrolytes are recovered across enterocyte membranes. Terminal ileum reabsorbs 95% of bile acids to return to the liver via the enterohepatic circulation.",
        clinicalNote: "Celiac disease causes autoimmune blunting of jejunal villi in response to gluten, destroying absorptive surface area and leading to severe malabsorption."
      }
    ]
  },
  {
    id: "blood-glucose-regulation",
    slug: "blood-glucose-insulin-glucagon-feedback",
    title: "How Your Body Regulates Blood Sugar",
    subtitle: "The precise hormonal negative feedback loop maintained by the endocrine pancreas and liver.",
    systemId: "endocrine",
    estimatedMinutes: 3,
    steps: [
      {
        stepNumber: 1,
        title: "Postprandial Hyperglycemia Sensed by Beta Cells",
        phase: "High Blood Sugar State (>100 mg/dL)",
        action: "Following a carbohydrate-rich meal, absorbed glucose enters the bloodstream, elevating blood sugar above fasting levels (70-99 mg/dL). Blood flows through the pancreatic Islets of Langerhans, where beta cells directly sense elevated glucose concentrations.",
        structuresHighlighted: ["Pancreatic Islets of Langerhans", "Beta Cells", "GLUT2 Transporters"],
        chemicalOrElectricalEvent: "Glucose enters beta cells via GLUT2 transporters and is phosphorylated by glucokinase. Glycolytic and mitochondrial ATP production rises. Elevated ATP/ADP ratio closes ATP-sensitive K+ channels (K-ATP), depolarizing the beta cell membrane.",
        clinicalNote: "Sulfonylurea medications close K-ATP channels pharmacologically, stimulating insulin secretion in patients with Type 2 Diabetes."
      },
      {
        stepNumber: 2,
        title: "Insulin Exocytosis & Systemic Secretion",
        phase: "Endocrine Release",
        action: "Membrane depolarization opens voltage-gated Ca2+ channels. Calcium influx triggers rapid exocytosis of insulin storage granules into pancreatic capillaries. Insulin travels directly through the hepatic portal vein to the liver, then into systemic circulation.",
        structuresHighlighted: ["Insulin Storage Granules", "Pancreatic Capillaries", "Portal Vein"],
        chemicalOrElectricalEvent: "Beta cells secrete equimolar amounts of Insulin and C-peptide (cleaved from proinsulin). Measuring serum C-peptide reflects endogenous insulin production.",
        clinicalNote: "In Type 1 Diabetes, autoimmune T-cell destruction of beta cells abolishes insulin and C-peptide secretion completely."
      },
      {
        stepNumber: 3,
        title: "Target Tissue Uptake: Liver, Skeletal Muscle, and Adipose",
        phase: "Insulin Signaling & Glucose Clearing",
        action: "Circulating insulin binds to tyrosine kinase insulin receptors on skeletal muscle myocytes, adipocytes, and hepatocytes. In muscle and fat, signaling cascades cause intracellular vesicles containing GLUT4 glucose transporters to translocate and fuse with the plasma membrane, facilitating rapid glucose uptake from blood.",
        structuresHighlighted: ["Skeletal Muscle", "Adipose Tissue", "Hepatocytes", "GLUT4 Vesicles"],
        chemicalOrElectricalEvent: "In the liver: Insulin activates glycogen synthase (glycogenesis) and inhibits glycogen phosphorylase and gluconeogenesis. In adipose: Insulin stimulates lipogenesis and inhibits hormone-sensitive lipase.",
        clinicalNote: "In Insulin Resistance (pre-diabetes), receptor signaling is blunted, requiring compensatory beta-cell hypersecretion to maintain euglycemia."
      },
      {
        stepNumber: 4,
        title: "Fasting Hypoglycemia Sensed by Alpha Cells",
        phase: "Low Blood Sugar State (<70 mg/dL)",
        action: "Hours after a meal, during fasting or vigorous exercise, circulating glucose drops. Low blood glucose suppresses beta-cell insulin secretion and directly stimulates pancreatic alpha cells in the Islets of Langerhans to secrete the catabolic hormone Glucagon.",
        structuresHighlighted: ["Alpha Cells", "Glucagon Granules", "Hepatocytes"],
        chemicalOrElectricalEvent: "Decreased intracellular ATP in alpha cells leads to activation of low-threshold T-type and N-type calcium channels, triggering glucagon exocytosis into the portal vein.",
        clinicalNote: "Severe hypoglycemia (<55 mg/dL) triggers sympathoadrenal epinephrine release, causing tremors, palpitations, diaphoresis, and hunger."
      },
      {
        stepNumber: 5,
        title: "Hepatic Glycogenolysis & Gluconeogenesis Restoration",
        phase: "Endocrine Feedback Restoration",
        action: "Glucagon binds G-protein coupled receptors on hepatocytes, elevating cAMP and activating Protein Kinase A (PKA). PKA activates glycogen phosphorylase, rapidly cleaving stored liver glycogen into glucose (glycogenolysis), and upregulates gluconeogenesis from lactate and amino acids. Glucose is released into blood via GLUT2, restoring euglycemia.",
        structuresHighlighted: ["Liver Parenchyma", "Glycogen Stores", "Systemic Capillaries"],
        chemicalOrElectricalEvent: "Homeostatic equilibrium is restored to 70-99 mg/dL. Negative feedback shuts off further glucagon release, completing the homeostatic balance.",
        clinicalNote: "Muscle tissue cannot release free glucose into blood because it lacks the enzyme Glucose-6-Phosphatase; only the liver can buffer systemic blood sugar."
      }
    ]
  }
];

// Export to global scope
window.PROCESSES_DATA = PROCESSES_DATA;
