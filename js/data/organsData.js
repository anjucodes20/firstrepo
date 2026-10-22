/**
 * Human Body Explorer - Comprehensive Organs and Anatomical Structures Data
 * Standardized 15-point schema for every structure.
 * Sources: OpenStax Anatomy & Physiology 2e, NIH / NLM, Gray's Anatomy.
 */

const ORGANS_DATA = [
  // ===================== CARDIOVASCULAR =====================
  {
    id: "heart",
    slug: "heart",
    name: "Heart",
    latinName: "Cor",
    pronunciation: "hahrt (Latin: kor)",
    category: "Internal Organs",
    systemId: "cardiovascular",
    relatedSystemIds: ["cardiovascular", "respiratory", "nervous"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 52, y: 31, r: 18 },
    location: "Middle mediastinum of the thoracic cavity, posterior to the sternum and costal cartilages, rested on the central tendon of the diaphragm, tilted obliquely with two-thirds of its mass lying to the left of the midline.",
    svgType: "heart",
    overview: "The heart is a muscular, double-sided biological pump roughly the size of a clenched fist. Beating approximately 100,000 times each day, it simultaneously drives deoxygenated blood through the low-pressure pulmonary circuit to the lungs and propels oxygen-rich blood through the high-pressure systemic circuit to the entire body.",
    structure: {
      macroscopic: "Enclosed in a double-walled fibroserous pericardial sac. Divided into four chambers: right atrium, right ventricle, left atrium, and left ventricle. Separated by the interatrial and interventricular septa.",
      microscopic: "Composed of three layers: Epicardium (outer visceral pericardium), Myocardium (thick involuntary striated cardiac muscle with branching fibers joined by intercalated discs with gap junctions), and Endocardium (smooth inner endothelial lining continuous with blood vessels).",
      valves: "Tricuspid and Mitral (bicuspid) atrioventricular valves prevent backflow into atria during ventricular systole; Aortic and Pulmonary semilunar valves prevent arterial backflow during diastole."
    },
    primaryFunctions: [
      "Generates hydrostatic pressure required to circulate blood through 60,000 miles of vessels",
      "Maintains complete physiological separation between deoxygenated and oxygenated blood",
      "Regulates stroke volume and heart rate dynamically in response to metabolic demands and autonomic stimuli",
      "Secretes Atrial Natriuretic Peptide (ANP) hormone in response to atrial stretch to lower blood pressure"
    ],
    howItWorks: {
      inputs: "Receives venous blood from superior/inferior venae cavae (deoxygenated) and pulmonary veins (oxygenated). Receives autonomic neural impulses and circulating catecholamines.",
      mechanism: "1. Pacemaker Generation: The Sinoatrial (SA) node in the right atrium spontaneously depolarizes (generating cardiac action potentials at 60-100 bpm).\n2. Atrial Systole: Depolarization spreads across both atria, causing synchronized contraction and filling the ventricles through open AV valves.\n3. AV Node Delay: The Atrioventricular (AV) node delays the electrical impulse for 0.1 seconds, allowing ventricles to fully fill with blood.\n4. Ventricular Systole: The impulse shoots down the Bundle of His, bundle branches, and Purkinje fibers. Ventricles contract from the apex upward, snapping AV valves shut (First Heart Sound 'Lub') and forcing open semilunar valves.\n5. Diastole: As ventricles relax, intraventricular pressure drops, semilunar valves close (Second Heart Sound 'Dub'), and chambers refill under low pressure.",
      cellsInvolved: "Cardiomyocytes, SA/AV nodal pacemaker cells, Purkinje conduction fibers, endothelial cells, cardiac fibroblasts.",
      outputs: "Ejection of approx. 70 mL of blood per stroke (Cardiac Output ~5.0 L/min at rest; up to 25 L/min during vigorous exercise).",
      systemicImpact: "Ensures uninterrupted perfusion of oxygen and glucose to every viable tissue in the body, sustaining cellular ATP synthesis."
    },
    interactions: [
      { organ: "Lungs", relationship: "Sends deoxygenated blood to pulmonary capillaries for CO2-O2 exchange and receives reoxygenated blood via four pulmonary veins." },
      { organ: "Brain", relationship: "Cardiovascular control centers in the medulla oblongata adjust heart rate via vagus nerve (parasympathetic braking) and sympathetic cardiac nerves." },
      { organ: "Kidneys", relationship: "Pumps blood under pressure for renal filtration; in turn, kidneys regulate plasma volume and blood pressure via renin-angiotensin-aldosterone axis." }
    ],
    processes: ["Cardiac Cycle", "Systemic and Pulmonary Circulation", "Myocardial Excitation-Contraction Coupling"],
    facts: [
      "The human heart pumps enough blood over an average lifetime to fill more than three supertankers (over 1 million barrels).",
      "Because the heart possesses its own intrinsic conduction pacemaker system (SA node), it can continue to beat outside the body as long as it has oxygen and nutrients.",
      "The left ventricle myocardium is roughly three times thicker than the right ventricle because it must generate enough pressure (120 mmHg vs 25 mmHg) to overcome systemic vascular resistance."
    ],
    conditions: [
      { name: "Coronary Artery Disease (CAD)", desc: "Atherosclerotic plaque accumulation in coronary arteries reducing myocardial perfusion, potentially causing angina pectoris or myocardial infarction." },
      { name: "Heart Failure", desc: "A chronic progressive condition in which the myocardium cannot pump sufficient blood volume to satisfy metabolic requirements." },
      { name: "Arrhythmias (e.g. Atrial Fibrillation)", desc: "Disruptions in the heart's normal electrical conduction pathways leading to irregular, abnormally fast, or slow heartbeats." }
    ],
    quickRevision: [
      "Four chambers: 2 atria (receiving chambers) and 2 ventricles (pumping chambers).",
      "Pacemaker of the heart: Sinoatrial (SA) node initiates autonomous electrical rhythms.",
      "Right side pumps to lungs (pulmonary circuit); left side pumps to body (systemic circuit).",
      "Valves (Tricuspid, Mitral, Aortic, Pulmonary) ensure strictly unidirectional blood flow."
    ],
    quizQuestions: [
      {
        question: "Which anatomical structure is known as the natural pacemaker of the heart?",
        options: ["Atrioventricular (AV) Node", "Sinoatrial (SA) Node", "Bundle of His", "Purkinje Fibers"],
        answer: 1,
        explanation: "The Sinoatrial (SA) node, situated in the superior posterolateral wall of the right atrium, spontaneously depolarizes at the highest intrinsic rate, pacing the entire heart."
      },
      {
        question: "Why is the left ventricular myocardium significantly thicker than the right?",
        options: ["It holds more blood volume", "It pumps blood against much higher systemic vascular resistance", "It contains more fatty tissue", "It connects directly to the brain"],
        answer: 1,
        explanation: "The left ventricle pumps oxygenated blood throughout the entire systemic circulation against arterial pressures around 120 mmHg, whereas the right ventricle pumps only through low-resistance pulmonary vessels (~25 mmHg)."
      }
    ],
    relatedOrgans: ["aorta", "lungs", "capillaries", "blood", "kidneys"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 19: The Cardiovascular System - The Heart", "Hall, J. E. (2020). Guyton and Hall Textbook of Medical Physiology (14th ed.)"]
  },

  {
    id: "aorta",
    slug: "aorta",
    name: "Aorta",
    latinName: "Aorta",
    pronunciation: "ay-OR-tuh",
    category: "Internal Organs",
    systemId: "cardiovascular",
    relatedSystemIds: ["cardiovascular"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 50, y: 27, r: 10 },
    location: "Emerges from the left ventricle of the heart, arches superiorly in the superior mediastinum (aortic arch), and descends through the thorax and abdomen along the anterior surface of the vertebral column.",
    svgType: "vessel",
    overview: "The aorta is the largest artery in the human body, with a diameter of roughly 2.5 to 3.0 centimeters. Functioning as a high-pressure elastic conduit and mechanical damper, it receives pulsating blood directly from the left ventricle and distributes oxygenated blood to all systemic arterial branches.",
    structure: {
      macroscopic: "Divided into four primary sections: Ascending Aorta (giving off coronary arteries), Aortic Arch (giving off brachiocephalic trunk, left common carotid, and left subclavian arteries), Thoracic Aorta, and Abdominal Aorta (bifurcating at L4 into common iliac arteries).",
      microscopic: "Features three distinct concentric tunics: Tunica Intima (endothelium), Tunica Media (abundant concentric fenestrated elastic lamellae interspersed with smooth muscle), and Tunica Externa (dense collagenous adventitia with vasa vasorum providing microcirculation).",
      valves: "Aortic valve at the aortic orifice with three semilunar cusps (left, right, and posterior)."
    },
    primaryFunctions: [
      "Distributes high-pressure oxygenated blood from the left ventricle to all systemic organ circuits",
      "Windkessel effect: Elastic wall distension during systole stores hydraulic energy and recoils during diastole, maintaining continuous forward capillary flow",
      "Houses arterial baroreceptors and chemoreceptors in the aortic arch for autonomic blood pressure and pH regulation"
    ],
    howItWorks: {
      inputs: "Receives pulsatile boluses of stroke volume (~70 mL) at peak systolic pressure (120 mmHg) from the left ventricle.",
      mechanism: "1. Systolic Expansion: When the left ventricle contracts, blood rushes into the ascending aorta. Its rich elastic fibers stretch, absorbing extreme kinetic shock waves.\n2. Diastolic Elastic Recoil (Windkessel effect): When the aortic valve snaps shut during diastole, the elastic walls recoil inward, propelling blood forward and into coronary arteries.\n3. Pressure Reservoir: Prevents systemic arterial pressure from dropping to zero during ventricular relaxation, maintaining a steady mean arterial pressure (MAP).",
      cellsInvolved: "Endothelial cells, vascular smooth muscle cells, elastic fibroblasts.",
      outputs: "Steady, smoothed arterial perfusion to every major organ and tissue bed.",
      systemicImpact: "Protects delicate downstream microvessels and capillaries from destructive pulsatile hydraulic shock waves."
    },
    interactions: [
      { organ: "Heart", relationship: "Arises from the left ventricle; the aortic sinuses give immediate origin to the right and left coronary arteries supplying heart muscle." },
      { organ: "Brain", relationship: "The carotid branches arising from the aortic arch convey roughly 15-20% of total cardiac output to cerebral hemispheres." }
    ],
    processes: ["Windkessel Elastic Reservoir Function", "Systemic Arterial Pressure Regulation"],
    facts: [
      "The aorta is so elastic and robust that an adult aorta can handle internal pressures over 300 mmHg before rupturing under healthy conditions.",
      "At rest, blood travels through the ascending aorta at peak velocities approaching 1 meter per second."
    ],
    conditions: [
      { name: "Aortic Aneurysm", desc: "Abnormal ballooning or dilation of the aortic wall (thoracic or abdominal), carrying risks of fatal dissection or rupture." },
      { name: "Aortic Coarctation", desc: "A congenital narrowing of the aorta that impedes normal blood flow to the lower extremities." }
    ],
    quickRevision: [
      "Largest artery in the body, originating at the left ventricle.",
      "Windkessel effect: Stretches during systole and recoils during diastole to maintain steady perfusion.",
      "Arches over the heart and descends through thorax and abdomen down to the iliac bifurcation."
    ],
    quizQuestions: [
      {
        question: "What is the primary physiological function of the abundant elastic fibers in the aortic wall (Windkessel effect)?",
        options: ["To produce new red blood cells", "To absorb systolic shock and recoil during diastole to maintain blood flow", "To filter bacteria from arterial blood", "To secrete digestive enzymes"],
        answer: 1,
        explanation: "The elastic fibers expand under systolic pressure and recoil during diastole, smoothing out pulsatile cardiac output into continuous forward flow."
      }
    ],
    relatedOrgans: ["heart", "capillaries", "blood", "lungs"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 20: Blood Vessels and Circulation"]
  },

  {
    id: "capillaries",
    slug: "capillaries",
    name: "Capillaries",
    latinName: "Vasa Capillaria",
    pronunciation: "kuh-PIL-er-eez",
    category: "Internal Organs",
    systemId: "cardiovascular",
    relatedSystemIds: ["cardiovascular", "respiratory", "digestive", "urinary"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 44, y: 35, r: 8 },
    location: "Distributed extensively throughout nearly all metabolically active tissues, forming dense microvascular networks interconnecting arterioles and venules.",
    svgType: "microscopic",
    overview: "Capillaries are the microscopic functional exchange vessels of the circulatory system. With an inner diameter barely wide enough for a single red blood cell to pass (5 to 10 micrometers) and walls consisting of only a single layer of endothelial cells, capillaries allow rapid diffusion of gases, nutrients, metabolic wastes, and water between blood and surrounding interstitial fluids.",
    structure: {
      macroscopic: "Branching networks called capillary beds. Blood flow through them is regulated by smooth muscle precapillary sphincters at metarteriolar junctions.",
      microscopic: "Wall consists exclusively of a single layer of simple squamous endothelial cells resting on a thin basal lamina, with occasional pericytes for stability. No tunica media or adventitia.",
      types: "Continuous (tight junctions; brain, skin, muscles), Fenestrated (pores for rapid filtration; kidneys, small intestine, endocrine glands), and Sinusoid/Discontinuous (wide gaps for whole proteins and cells; liver, spleen, bone marrow)."
    },
    primaryFunctions: [
      "Microvascular exchange of oxygen, carbon dioxide, glucose, amino acids, and lipids via diffusion",
      "Fluid filtration and reabsorption governed by Starling forces (capillary hydrostatic vs. colloid osmotic pressure)",
      "Transmigration site for leukocytes (diapedesis) during localized immune responses and inflammation"
    ],
    howItWorks: {
      inputs: "Oxygenated, nutrient-dense blood entering from terminal arterioles under ~35 mmHg hydrostatic pressure.",
      mechanism: "1. Flow Deceleration: Because the total cross-sectional area of billions of capillaries is enormous, blood velocity drops to a sluggish 0.1 cm/s, maximizing contact time.\n2. Arterial End Filtration: Capillary hydrostatic pressure (35 mmHg) exceeds blood colloid osmotic pressure (26 mmHg), pushing fluid, glucose, and oxygen into interstitial spaces.\n3. Cellular Exchange: Cells absorb glucose and O2, releasing CO2, urea, and metabolic byproducts into interstitial fluid.\n4. Venous End Reabsorption: Hydrostatic pressure drops to ~16 mmHg while oncotic pressure remains ~26 mmHg. Net pressure pulls 85-90% of fluid back into the capillary lumen.",
      cellsInvolved: "Vascular endothelial cells, pericytes, traversing red blood cells.",
      outputs: "Deoxygenated blood carrying metabolic waste into postcapillary venules.",
      systemicImpact: "The sole site where the cardiovascular system directly interfaces with and nourishes living cells."
    },
    interactions: [
      { organ: "Lungs", relationship: "Alveolar capillaries absorb oxygen and release carbon dioxide across the respiratory membrane." },
      { organ: "Kidneys", relationship: "Glomerular capillaries filter blood plasma under high hydrostatic pressure into Bowman's capsule." }
    ],
    processes: ["Microvascular Fluid Exchange (Starling Principle)", "Gas and Solute Diffusion Across Endothelium"],
    facts: [
      "There are approximately 10 to 40 billion capillaries in an adult body, with a combined surface area exceeding 1,000 square meters.",
      "Red blood cells (7.5 µm wide) must frequently deform and squeeze in single file through capillary lumens (5-8 µm wide)."
    ],
    conditions: [
      { name: "Edema", desc: "Excess fluid accumulation in interstitial tissues caused by elevated capillary hydrostatic pressure, decreased plasma albumin, or lymphatic blockage." },
      { name: "Diabetic Microangiopathy", desc: "Chronic hyperglycemia damaging capillary basement membranes, particularly in the retina and renal glomeruli." }
    ],
    quickRevision: [
      "Microscopic vessels composed of only a single layer of endothelial cells and basal lamina.",
      "Three structural types: Continuous, Fenestrated, and Sinusoidal.",
      "Governed by Starling forces: Hydrostatic pressure drives filtration; Colloid osmotic pressure drives reabsorption."
    ],
    quizQuestions: [
      {
        question: "Which type of capillary features large fenestrations and intercellular clefts allowing whole proteins and cells to cross, as seen in the liver and spleen?",
        options: ["Continuous capillaries", "Fenestrated capillaries", "Sinusoid (discontinuous) capillaries", "Arteriolar capillaries"],
        answer: 2,
        explanation: "Sinusoids have extensive intercellular gaps, fenestrations, and an incomplete basement membrane, allowing large proteins and blood cells to pass between blood and tissue parenchyma."
      }
    ],
    relatedOrgans: ["heart", "aorta", "blood", "lungs", "kidneys"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 20: Blood Vessels and Circulation"]
  },

  {
    id: "blood",
    slug: "blood",
    name: "Blood & Formed Elements",
    latinName: "Sanguis",
    pronunciation: "bluhd (Latin: SAN-gwis)",
    category: "Blood and Body Fluids",
    systemId: "cardiovascular",
    relatedSystemIds: ["cardiovascular", "immune-lymphatic", "respiratory"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 48, y: 38, r: 8 },
    location: "Circulates through the entire closed cardiovascular circuit of heart chambers, arteries, arterioles, capillaries, venules, and veins.",
    svgType: "fluid",
    overview: "Blood is a specialized liquid connective tissue comprising cellular formed elements suspended in a protein-rich fluid matrix called plasma. Totaling about 5 liters in an adult (approx. 8% of body weight), blood maintains tissue viability through continuous gas transport, nutrient distribution, immune patrol, coagulation, and systemic pH and temperature regulation.",
    structure: {
      macroscopic: "When centrifuged, separates into three distinct layers: Erythrocytes (approx. 45% hematocrit), Buffy Coat (<1% leukocytes and platelets), and Blood Plasma (approx. 55% straw-colored liquid).",
      microscopic: "Erythrocytes (biconcave, anucleated discs packed with hemoglobin), Leukocytes (granulocytes: neutrophils, eosinophils, basophils; agranulocytes: lymphocytes, monocytes), and Platelets (cytoplasmic fragments of bone marrow megakaryocytes).",
      plasma: "91-92% water, 7-8% plasma proteins (Albumin for oncotic pressure, Globulins for antibodies and transport, Fibrinogen for clotting), and 1-2% dissolved electrolytes, nutrients, and hormones."
    },
    primaryFunctions: [
      "Gas transport: Hemoglobin binds O2 in lungs and releases it in tissues, while transporting 23% of CO2 as carbaminohemoglobin",
      "Nutrient and waste transit: Delivers glucose, fatty acids, amino acids, and removes urea and creatinine",
      "Hemostasis: Platelet plug formation and coagulation cascade fibrin mesh preventing fatal hemorrhage",
      "Immune defense: Leukocytes and circulating immunoglobulins actively seek out and neutralize foreign pathogens"
    ],
    howItWorks: {
      inputs: "Synthesized in red bone marrow via hematopoiesis. Absorbs oxygen in pulmonary capillaries and nutrients from the intestines.",
      mechanism: "1. Oxygen Binding: In lungs, high PO2 drives cooperative binding of four O2 molecules to each hemoglobin tetramer, forming bright red oxyhemoglobin.\n2. Systemic Delivery: In tissues with low PO2 and acidic pH (Bohr effect), hemoglobin releases O2 to diffuse into mitochondria.\n3. Carbon Dioxide Transport: CO2 enters RBCs; carbonic anhydrase rapidly converts it to carbonic acid (H2CO3), which dissociates into bicarbonate (HCO3-) exported to plasma.\n4. Clotting: Vascular injury triggers platelets to adhere to exposed collagen, releasing granules that trigger thrombin conversion of soluble fibrinogen into an insoluble fibrin mesh.",
      cellsInvolved: "Erythrocytes (RBCs), Neutrophils, Lymphocytes, Monocytes, Eosinophils, Basophils, Platelets.",
      outputs: "Continuous cellular nourishment, metabolic waste clearance, and maintenance of 7.35-7.45 blood pH.",
      systemicImpact: "The universal connective fluid that unifies and stabilizes internal physiological conditions across all organ systems."
    },
    interactions: [
      { organ: "Lungs", relationship: "Exchanges O2 and CO2 across alveolar membranes; RBC carbonic anhydrase converts bicarbonate back to CO2 for exhalation." },
      { organ: "Kidneys", relationship: "Renal glomeruli filter plasma water and nitrogenous wastes; erythropoietin from kidneys stimulates RBC production." },
      { organ: "Spleen", relationship: "Spleen red pulp phagocytoses aging, rigid erythrocytes (>120 days old) and recycles iron." }
    ],
    processes: ["Hemopoiesis", "Hemostasis and Blood Coagulation", "Oxygen-Hemoglobin Dissociation"],
    facts: [
      "Every single red blood cell contains approximately 270 million hemoglobin molecules, allowing each cell to transport over 1 billion oxygen molecules.",
      "Red blood cells have no nucleus or mitochondria, allowing maximum interior space for hemoglobin and preventing the cell from consuming the oxygen it carries.",
      "Your body produces about 2 to 3 million new red blood cells every single second in the red bone marrow."
    ],
    conditions: [
      { name: "Anemia", desc: "A deficiency in erythrocytes or hemoglobin concentration impairing the blood's oxygen-carrying capacity." },
      { name: "Hemophilia", desc: "A genetic bleeding disorder characterized by deficiencies in specific clotting factors (Factor VIII or IX) leading to impaired coagulation." }
    ],
    quickRevision: [
      "Composed of 55% plasma (water, albumin, globulins, fibrinogen) and 45% formed elements.",
      "Formed elements: Erythrocytes (O2 transport), Leukocytes (immune defense), Platelets (blood clotting).",
      "Normal blood pH is strictly maintained between 7.35 and 7.45 by bicarbonate buffers, lungs, and kidneys."
    ],
    quizQuestions: [
      {
        question: "Which plasma protein is primarily responsible for generating colloid osmotic pressure to retain water inside capillary lumens?",
        options: ["Fibrinogen", "Albumin", "Gamma globulin", "Hemoglobin"],
        answer: 1,
        explanation: "Albumin makes up about 60% of total plasma proteins and is the primary contributor to blood colloid osmotic pressure, preventing tissue edema."
      }
    ],
    relatedOrgans: ["heart", "capillaries", "spleen", "lungs", "kidneys"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 18: An Introduction to the Cardiovascular System - Blood"]
  },

  // ===================== NERVOUS SYSTEM =====================
  {
    id: "brain",
    slug: "brain",
    name: "Brain (Cerebrum)",
    latinName: "Encephalon (Cerebrum)",
    pronunciation: "brayn (Latin: en-SEF-uh-lon)",
    category: "Brain and Nervous System",
    systemId: "nervous",
    relatedSystemIds: ["nervous", "endocrine", "special-senses"],
    bodyRegion: "head",
    view: "front",
    hotspot: { x: 50, y: 8, r: 16 },
    location: "Enclosed inside the neurocranium of the skull, suspended in cerebrospinal fluid (CSF) within the subarachnoid space.",
    svgType: "brain",
    overview: "The human cerebrum is the command center of the central nervous system and the organ of consciousness. Weighing roughly 1.4 kilograms and housing an estimated 86 billion neurons, it governs conscious perception, voluntary movement, cognition, speech, memory, reasoning, and emotions.",
    structure: {
      macroscopic: "Separated into right and left cerebral hemispheres by the deep longitudinal fissure, connected by the massive myelinated tract known as the Corpus Callosum. Divided into four major lobes: Frontal (executive function, motor planning), Parietal (somatosensation, spatial mapping), Temporal (audition, memory, language comprehension), and Occipital (primary visual processing).",
      microscopic: "Outer 2-4 mm is the Cerebral Cortex (Gray Matter: unmyelinated neuronal cell bodies, dendrites, and synapses arranged in 6 distinct neocortical laminar layers). Beneath lies White Matter (bundles of myelinated axons forming association, commissural, and projection tracts) and deep Basal Ganglia.",
      meninges: "Protected by three meningeal coverings: Dura Mater (outermost fibrous), Arachnoid Mater (spider-web trabeculae), and Pia Mater (delicate, highly vascular inner sheet)."
    },
    primaryFunctions: [
      "Conscious sensory perception and spatial awareness in primary sensory cortices",
      "Executive decision-making, working memory, impulse regulation, and personality in the prefrontal cortex",
      "Voluntary initiation and precise execution of motor commands via the primary motor cortex",
      "Language processing, including Broca's area (speech production) and Wernicke's area (language comprehension)",
      "Long-term memory consolidation in collaboration with the hippocampus and limbic structures"
    ],
    howItWorks: {
      inputs: "Receives processed sensory afferents routed through the thalamus, along with proprioceptive and visceral feedback.",
      mechanism: "1. Synaptic Integration: Dendrites receive neurotransmitters (e.g. Glutamate, GABA) generating excitatory/inhibitory postsynaptic potentials (EPSPs/IPSPs).\n2. Action Potential Generation: When membrane potential reaches the threshold (-55 mV) at the axon hillock, voltage-gated Na+ channels open, propagating a 100 mV action potential.\n3. Neurotransmitter Release: Action potentials arriving at axon terminals open voltage-gated Ca2+ channels, triggering exocytosis of synaptic vesicles into the synaptic cleft.\n4. Cortical Network Processing: Milliseconds-level parallel oscillations across distributed cortical columns synthesize perceptions, thoughts, and motor plans.",
      cellsInvolved: "Pyramidal neurons, interneurons, astrocytes (blood-brain barrier maintenance), oligodendrocytes (myelination), microglia (immune phagocytes).",
      outputs: "Efferent corticospinal motor commands to skeletal muscles and autonomic motor signals to visceral organs.",
      systemicImpact: "Maintains conscious control, bodily equilibrium, cognitive adaptability, and mental life."
    },
    interactions: [
      { organ: "Spinal Cord", relationship: "Sends descending upper motor neuron pathways (corticospinal tract) to coordinate limb movements; receives ascending spinothalamic sensory streams." },
      { organ: "Hypothalamus", relationship: "Integrates limbic emotional states directly into neuroendocrine and autonomic visceral directives." },
      { organ: "Eyes", relationship: "Visual signals from retina travel via optic radiations to the primary visual cortex in the occipital lobe." }
    ],
    processes: ["Action Potential Conduction", "Synaptic Neurotransmission", "Long-Term Potentiation and Neuroplasticity"],
    facts: [
      "Although the brain represents only about 2% of total adult body weight, it consumes roughly 20% of the body's total oxygen and glucose supply.",
      "The cerebral cortex is extensively folded into gyri (ridges) and sulci (grooves), which triples its available cortical surface area to about 2,200 cm².",
      "Information can travel along myelinated axons at velocities of up to 120 meters per second (over 260 miles per hour)."
    ],
    conditions: [
      { name: "Cerebrovascular Accident (Stroke)", desc: "Acute neurological deficit caused by localized ischemia (ischemic stroke) or intracranial hemorrhage (hemorrhagic stroke)." },
      { name: "Alzheimer's Disease", desc: "A neurodegenerative disorder characterized by extracellular amyloid-beta plaques and intracellular hyperphosphorylated tau neurofibrillary tangles." }
    ],
    quickRevision: [
      "Divided into two hemispheres connected by the corpus callosum.",
      "Four lobes: Frontal (motor/executive), Parietal (sensory), Temporal (audition/memory), Occipital (vision).",
      "Outer gray matter cortex contains 6 layers of neuronal cell bodies; underlying white matter contains myelinated tracts.",
      "Consumes 20% of bodily resting energy despite being only 2% of body mass."
    ],
    quizQuestions: [
      {
        question: "Which cerebral lobe houses the primary visual cortex responsible for processing sight?",
        options: ["Frontal Lobe", "Temporal Lobe", "Parietal Lobe", "Occipital Lobe"],
        answer: 3,
        explanation: "The primary visual cortex (Brodmann area 17) is located in the occipital lobe at the posterior pole of the cerebral hemisphere."
      },
      {
        question: "Which insulating glial cells produce the myelin sheath surrounding axons in the Central Nervous System?",
        options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"],
        answer: 1,
        explanation: "Oligodendrocytes myelinate axons in the Central Nervous System (brain and spinal cord), whereas Schwann cells myelinate axons in the Peripheral Nervous System."
      }
    ],
    relatedOrgans: ["cerebellum", "brainstem", "hypothalamus", "spinal-cord", "pituitary"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 13: The Anatomy of the Nervous System", "Kandel, E. R., et al. (2021). Principles of Neural Science (6th ed.)"]
  },

  {
    id: "cerebellum",
    slug: "cerebellum",
    name: "Cerebellum",
    latinName: "Cerebellum",
    pronunciation: "sair-uh-BEL-um (Latin: Little Brain)",
    category: "Brain and Nervous System",
    systemId: "nervous",
    relatedSystemIds: ["nervous", "muscular", "skeletal"],
    bodyRegion: "head",
    view: "back",
    hotspot: { x: 50, y: 15, r: 12 },
    location: "Posterior cranial fossa, positioned dorsal to the pons and medulla oblongata, separated from the overlying occipital lobes by the tentorium cerebelli.",
    svgType: "brain",
    overview: "Known as the 'little brain', the cerebellum contains more than 50% of all neurons in the entire human brain, packed into a densely folded structure that represents only 10% of total brain volume. It acts as a real-time motor comparator, calculating timing, correcting movement errors, smoothing muscular contractions, and preserving balance.",
    structure: {
      macroscopic: "Consists of two lateral cerebellar hemispheres joined in the midline by the vermis. Features three anatomical lobes: Anterior, Posterior, and Flocculonodular lobe.",
      microscopic: "Features a three-layered cortex: Molecular layer (dendrites of Purkinje cells and parallel fibers), Purkinje cell layer (large inhibitory GABAergic Purkinje neurons), and Granule cell layer (billions of tiny, densely packed granule neurons).",
      tracts: "Connected to the brainstem via three pairs of cerebellar peduncles (Superior, Middle, Inferior) carrying millions of afferent and efferent fibers."
    },
    primaryFunctions: [
      "Motor coordination: Compares intended motor actions from the motor cortex with actual body performance reported by proprioceptors, correcting deviations",
      "Equilibrium and postural stability in coordination with vestibular signals from inner ear semicircular canals",
      "Motor learning: Stores procedural muscle memory (riding a bicycle, typing, musical instrument execution)",
      "Cognitive timing: Participates in perceptual timing, language articulation, and sensory prediction"
    ],
    howItWorks: {
      inputs: "Receives copies of motor intentions (mossy fibers from motor cortex via pontine nuclei) and real-time sensory proprioception (climbing fibers from inferior olive and spinocerebellar tracts).",
      mechanism: "1. Comparison: Purkinje cells receive inputs from parallel fibers (granule cells) and powerful climbing fibers.\n2. Error Detection: When movement deviates from the plan, climbing fiber bursts signal a mismatch.\n3. Synaptic Plasticity (LTD): Long-Term Depression weakens erroneous synaptic connections, refining future motor outputs.\n4. Inhibitory Modulation: Purkinje cells project inhibitory GABAergic signals to Deep Cerebellar Nuclei (dentate, emboliform, globose, fastigial), which project corrective signals to the thalamus and red nucleus.",
      cellsInvolved: "Purkinje cells, Granule cells, Basket cells, Stellate cells, Golgi cells, Deep nuclear neurons.",
      outputs: "Smoothed, precisely timed motor correction signals sent back to the primary motor cortex via the thalamus.",
      systemicImpact: "Converts jerky, fragmented muscle commands into graceful, fluid, athletic motion."
    },
    interactions: [
      { organ: "Brain", relationship: "Receives efference copies of planned motor movements from cerebral motor cortices via corticopontocerebellar tracts." },
      { organ: "Spinal Cord", relationship: "Receives continuous high-speed proprioceptive position data from muscle spindles and tendon organs via spinocerebellar tracts." }
    ],
    processes: ["Cerebellar Motor Error Correction", "Motor Skill Learning and Consolidation"],
    facts: [
      "Despite occupying only 10% of total brain mass, the cerebellum contains roughly 50 to 70 billion neurons — more than the rest of the brain combined!",
      "A single Purkinje cell in the cerebellar cortex can receive synaptic inputs from as many as 200,000 distinct parallel fibers, making it one of the most complex computing units in nature."
    ],
    conditions: [
      { name: "Cerebellar Ataxia", desc: "Loss of coordinated voluntary muscle movements, resulting in unsteady, wide-based gait, intention tremors, and dysmetria." },
      { name: "Dysdiadochokinesia", desc: "Inability to perform rapid, alternating antagonist muscle movements (such as rapid forearm pronation and supination)." }
    ],
    quickRevision: [
      "Located in posterior cranial fossa beneath the occipital lobes.",
      "Houses over half of the brain's total neurons in a tightly packed folia arrangement.",
      "Functions as an error-correcting motor comparator for smooth posture, gait, and fine motor skills.",
      "Damage causes ataxia (lack of voluntary coordination) without muscle paralysis."
    ],
    quizQuestions: [
      {
        question: "What is the primary hallmark symptom of cerebellar damage or dysfunction?",
        options: ["Complete muscle paralysis", "Ataxia (loss of coordination and balance)", "Loss of auditory sensation", "Inability to form new memories"],
        answer: 1,
        explanation: "Damage to the cerebellum does not cause paralysis; instead, it causes ataxia — uncoordinated, clumsy, jerky movements, balance deficits, and tremors during voluntary action."
      }
    ],
    relatedOrgans: ["brain", "brainstem", "spinal-cord", "muscular"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 13: The Anatomy of the Nervous System"]
  },

  {
    id: "brainstem",
    slug: "brainstem",
    name: "Brainstem",
    latinName: "Truncus Encephali",
    pronunciation: "BRAYN-stem",
    category: "Brain and Nervous System",
    systemId: "nervous",
    relatedSystemIds: ["nervous", "cardiovascular", "respiratory"],
    bodyRegion: "head",
    view: "front",
    hotspot: { x: 50, y: 17, r: 10 },
    location: "Positioned at the base of the brain, continuous superiorly with the diencephalon and inferiorly with the spinal cord at the foramen magnum.",
    svgType: "brain",
    overview: "The brainstem is the vital stalk connecting the cerebrum and cerebellum to the spinal cord. It serves as both the bidirectional transit superhighway for all ascending sensory and descending motor tracts and the autonomic command center housing nuclei that control essential survival functions like breathing, heart rate, and arterial blood pressure.",
    structure: {
      macroscopic: "Divided into three rostrocaudal anatomical segments: Midbrain (Mesencephalon), Pons, and Medulla Oblongata.",
      cranialNerves: "Houses the motor and sensory nuclei for 10 of the 12 pairs of cranial nerves (CN III through CN XII).",
      reticularFormation: "Diffuse, interconnected network of over 100 nuclei extending throughout the brainstem core, containing the Reticular Activating System (RAS) which mediates consciousness, alertness, and sleep-wake cycles."
    },
    primaryFunctions: [
      "Autonomic cardiovascular control: Medullary cardiac and vasomotor centers regulate heart rate, contractility, and systemic vascular resistance",
      "Respiratory rhythm generation: Medullary dorsal/ventral respiratory groups and pontine centers regulate automatic breathing cycles",
      "Vital protective reflexes: Integrates swallowing, coughing, sneezing, gagging, and vomiting reflex arcs",
      "Arousal and consciousness: Reticular Activating System (RAS) filters sensory input and activates the cerebral cortex for wakefulness"
    ],
    howItWorks: {
      inputs: "Receives baroreceptor blood pressure data from carotid sinuses/aortic arch, central/peripheral chemoreceptor CO2/pH data, and somatic sensory tracts.",
      mechanism: "1. Autonomic Sensing: Medullary central chemoreceptors monitor cerebrospinal fluid [H+] concentrations driven by arterial PCO2.\n2. Rhythmic Firing: Pre-Bötzinger complex pacemaker neurons in the ventrolateral medulla fire rhythmic bursts driving the phrenic nerve to contract the diaphragm.\n3. Vasomotor Regulation: Medullary vasomotor neurons adjust tonic sympathetic discharges to vascular smooth muscle to preserve mean arterial pressure.\n4. Reticular Filtering: The Reticular Activating System continuously relays sensory arousal signals to the thalamus, keeping the cerebral cortex awake.",
      cellsInvolved: "Pacemaker respiratory neurons, autonomic preganglionic neurons, reticular neurons, cranial nerve motor/sensory neurons.",
      outputs: "Phrenic/intercostal motor commands for ventilation; sympathetic/parasympathetic outputs to the heart and vasculature.",
      systemicImpact: "Sustains automatic vegetative life; brainstem death equals clinical biological death."
    },
    interactions: [
      { organ: "Heart", relationship: "Medullary cardioaccelerator and cardioinhibitor centers control heart rate via sympathetic nerves and the vagus nerve (CN X)." },
      { organ: "Lungs", relationship: "Rhythmically generates motor drive to the diaphragm (phrenic nerve) to sustain continuous breathing without conscious effort." }
    ],
    processes: ["Automatic Respiratory Rhythm Generation", "Cardiovascular Reflex Regulation", "Reticular Activation and Sleep-Wake Transitions"],
    facts: [
      "You can survive extensive damage to portions of the cerebral cortex, but even minute damage to the medulla oblongata can cause instant respiratory arrest and cardiac cessation.",
      "The crossing of corticospinal motor fibers (Pyramidal Decussation) occurs in the caudal medulla, explaining why the right side of the brain controls the left side of the body."
    ],
    conditions: [
      { name: "Brainstem Stroke (Locked-in Syndrome)", desc: "Infarction of the ventral pons causing complete quadriplegia and paralysis of lower cranial nerves, leaving consciousness and vertical eye movements intact." },
      { name: "Central Sleep Apnea", desc: "Dysfunction of medullary respiratory centers resulting in periodic failure to trigger respiratory effort during sleep." }
    ],
    quickRevision: [
      "Three sections: Midbrain, Pons, and Medulla Oblongata.",
      "Houses cardiovascular and respiratory pacemaker centers essential for basic life support.",
      "Houses nuclei for Cranial Nerves III through XII and the Reticular Activating System (wakefulness).",
      "Site of pyramidal decussation where motor tracts cross to the opposite side."
    ],
    quizQuestions: [
      {
        question: "In which region of the brainstem is the decussation of pyramids (motor tract crossing) located?",
        options: ["Midbrain", "Pons", "Medulla Oblongata", "Thalamus"],
        answer: 2,
        explanation: "Approximately 90% of descending corticospinal motor fibers cross the midline at the decussation of the pyramids in the caudal medulla oblongata."
      }
    ],
    relatedOrgans: ["brain", "cerebellum", "spinal-cord", "heart", "lungs"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 13: The Anatomy of the Nervous System"]
  },

  {
    id: "hypothalamus",
    slug: "hypothalamus",
    name: "Hypothalamus",
    latinName: "Hypothalamus",
    pronunciation: "hy-poh-THAL-uh-mus",
    category: "Glands and Hormones",
    systemId: "endocrine",
    relatedSystemIds: ["endocrine", "nervous"],
    bodyRegion: "head",
    view: "front",
    hotspot: { x: 50, y: 12, r: 8 },
    location: "Ventral part of the diencephalon, lying directly inferior to the thalamus and forming the floor and lower walls of the third ventricle.",
    svgType: "gland",
    overview: "Weighing only about 4 grams (less than 1% of total brain mass), the hypothalamus is the master neuroendocrine integrator and homeostatic regulator of the body. It links the nervous system to the endocrine system via the pituitary gland and governs essential drives including hunger, thirst, thermoregulation, circadian rhythms, and stress responses.",
    structure: {
      macroscopic: "Connected to the underlying pituitary gland via a slender stalk termed the Infundibulum (pituitary stalk). Features distinct bilateral clusters of nuclei.",
      nuclei: "Supraoptic and Paraventricular nuclei (synthesize oxytocin and ADH), Suprachiasmatic nucleus (master biological clock), Arcuate and Preoptic nuclei (releasing hormones), Ventromedial (satiety) and Lateral (hunger) nuclei.",
      vascularConnection: "Hypophyseal portal system: specialized capillary plexus carrying hypothalamic hypophysiotropic hormones directly to the anterior pituitary without entering general circulation."
    },
    primaryFunctions: [
      "Thermoregulation: Preoptic anterior hypothalamus senses core blood temperature and triggers sweating or shivering",
      "Osmoregulation and thirst: Monitors plasma osmolality and triggers thirst while commanding ADH release to conserve renal water",
      "Neuroendocrine control: Secretes releasing and inhibiting hormones (GnRH, TRH, CRH, GHRH, Somatostatin, Dopamine) controlling anterior pituitary",
      "Circadian pacemaker: Suprachiasmatic nucleus synchronizes 24-hour sleep-wake cycles with environmental light-dark cues"
    ],
    howItWorks: {
      inputs: "Receives neural inputs from the retina, limbic system, and visceral sensors, alongside chemical inputs (blood glucose, leptin, ghrelin, temperature, osmolarity).",
      mechanism: "1. Homeostatic Sensing: Osmoreceptors detect elevated blood solute concentration (>295 mOsm/kg).\n2. Neuropeptide Synthesis: Supraoptic/paraventricular magnocellular neurons synthesize Anti-Diuretic Hormone (ADH/Vasopressin).\n3. Axonal Transport: ADH travels down axons through the infundibulum into the posterior pituitary for release into capillaries.\n4. Portal Secretion: Parvocellular neurons secrete Corticotropin-Releasing Hormone (CRH) into the primary hypophyseal portal plexus to trigger pituitary ACTH release.\n5. Negative Feedback: Circulating target hormones (cortisol, thyroid hormones) bind to hypothalamic receptors to shut off further stimulation.",
      cellsInvolved: "Neurosecretory parvocellular and magnocellular neurons, tanycytes, glial astrocytes.",
      outputs: "Releasing/inhibiting hormones into portal blood; neurohypophyseal hormones (oxytocin, ADH); autonomic sympathetic/parasympathetic outflow.",
      systemicImpact: "Preserves internal physiological homeostasis across fluctuating external environmental conditions."
    },
    interactions: [
      { organ: "Pituitary Gland", relationship: "Physically and functionally controls the pituitary via releasing hormones (hypophyseal portal veins) and direct axonal projections (infundibulum)." },
      { organ: "Adrenal Glands", relationship: "Initiates the HPA axis (Hypothalamic-Pituitary-Adrenal) during psychological or physical stress by secreting CRH." }
    ],
    processes: ["Hypothalamic-Pituitary Neuroendocrine Axis", "Thermoregulatory Negative Feedback", "Circadian Rhythm Generation"],
    facts: [
      "The Suprachiasmatic Nucleus (SCN) within your hypothalamus contains about 20,000 neurons that coordinate all cellular circadian clocks throughout your body.",
      "The hypothalamus possesses an incomplete blood-brain barrier at circumventricular organs, allowing it to directly 'sample' blood glucose, hormones, and osmolality."
    ],
    conditions: [
      { name: "Central Diabetes Insipidus", desc: "Deficiency of hypothalamic ADH synthesis or release, resulting in excessive dilute urination (polyuria) and unquenchable thirst (polydipsia)." },
      { name: "Hypothalamic Amenorrhea", desc: "Cessation of menstrual cycles caused by suppressed hypothalamic GnRH secretion during severe energy deficit or chronic stress." }
    ],
    quickRevision: [
      "Primary neuroendocrine bridge located in diencephalon below thalamus.",
      "Governs the 4 Fs of biological survival: Fighting, Fleeing, Feeding, and Reproduction.",
      "Produces Oxytocin and ADH (stored in posterior pituitary) and releasing hormones (controlling anterior pituitary).",
      "Contains the body's central thermostat and master circadian clock."
    ],
    quizQuestions: [
      {
        question: "Which hormones are actually synthesized in hypothalamic nuclei, though released by the posterior pituitary?",
        options: ["Insulin and Glucagon", "Oxytocin and Anti-Diuretic Hormone (ADH)", "Growth Hormone and Prolactin", "Thyroid-Stimulating Hormone and ACTH"],
        answer: 1,
        explanation: "Oxytocin and ADH are synthesized by magnocellular neurons in the paraventricular and supraoptic nuclei of the hypothalamus, then transported down axons to the posterior pituitary."
      }
    ],
    relatedOrgans: ["brain", "pituitary", "thyroid", "adrenal", "kidneys"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 17: The Endocrine System"]
  },

  {
    id: "pituitary",
    slug: "pituitary-gland",
    name: "Pituitary Gland (Hypophysis)",
    latinName: "Hypophysis Cerebri",
    pronunciation: "pih-TOO-ih-tair-ee",
    category: "Glands and Hormones",
    systemId: "endocrine",
    relatedSystemIds: ["endocrine", "nervous", "reproductive"],
    bodyRegion: "head",
    view: "front",
    hotspot: { x: 50, y: 14, r: 6 },
    location: "Housed within the sella turcica ('Turkish saddle') of the sphenoid bone at the skull base, directly suspended from the hypothalamus by the infundibular stalk.",
    svgType: "gland",
    overview: "Traditionally crowned the 'master gland' of the endocrine system, the pea-sized pituitary gland produces hormones that orchestrate growth, basal metabolic rate, water balance, reproduction, lactation, and stress responses, acting as the primary effector arm of the hypothalamus.",
    structure: {
      macroscopic: "Weighs about 0.5 grams. Divided into two functionally and embryologically distinct lobes: Anterior Pituitary (Adenohypophysis, derived from oral ectoderm) and Posterior Pituitary (Neurohypophysis, derived from neural ectoderm).",
      anteriorLobe: "Highly cellular endocrine tissue containing specialized chromophils (Somatotrophs, Lactotrophs, Corticotrophs, Thyrotrophs, Gonadotrophs).",
      posteriorLobe: "Neural tissue composed of unmyelinated axons whose cell bodies reside in the hypothalamus, supported by glial-like pituicytes."
    },
    primaryFunctions: [
      "Stimulates thyroid hormone synthesis via Thyroid-Stimulating Hormone (TSH)",
      "Governs adrenal glucocorticoid secretion during stress via Adrenocorticotropic Hormone (ACTH)",
      "Stimulates longitudinal somatic growth, protein synthesis, and lipolysis via Growth Hormone (GH)",
      "Controls gametogenesis and sex steroid synthesis via Follicle-Stimulating Hormone (FSH) and Luteinizing Hormone (LH)",
      "Regulates renal water retention (ADH/Vasopressin) and uterine contractions/milk ejection (Oxytocin)"
    ],
    howItWorks: {
      inputs: "Receives hypophysiotropic releasing/inhibiting hormones from the hypothalamus via portal blood and action potentials via the hypothalamo-hypophyseal nerve tract.",
      mechanism: "1. Hypothalamic Stimulation: Hypothalamic TRH enters the hypophyseal portal system.\n2. Anterior Lobe Binding: TRH binds to G-protein coupled receptors on anterior pituitary thyrotrophs.\n3. Hormone Secretion: Thyrotrophs secrete TSH into secondary capillary plexus.\n4. Systemic Release: TSH circulates via systemic veins to stimulate the thyroid gland.\n5. Posterior Lobe Secretion: Action potentials propagating down axons from supraoptic/paraventricular nuclei cause exocytosis of ADH or oxytocin directly into fenestrated capillaries.",
      cellsInvolved: "Somatotrophs (GH), Corticotrophs (ACTH), Thyrotrophs (TSH), Gonadotrophs (LH/FSH), Lactotrophs (Prolactin), Pituicytes.",
      outputs: "6 anterior trophic hormones (GH, TSH, ACTH, FSH, LH, PRL) and 2 posterior neurohormones (ADH, Oxytocin).",
      systemicImpact: "Broadly synchronizes endocrine organ activities to govern human growth, fertility, and survival."
    },
    interactions: [
      { organ: "Hypothalamus", relationship: "Direct anatomical connection via infundibulum and portal blood supply; hypothalamus provides master releasing signals." },
      { organ: "Thyroid Gland", relationship: "Pituitary TSH stimulates follicular cells of thyroid to produce T4 and T3." },
      { organ: "Adrenal Glands", relationship: "Pituitary ACTH stimulates adrenal cortex to synthesize and release cortisol." }
    ],
    processes: ["Anterior Pituitary Trophic Cascades", "Neurohypophyseal Hormone Secretion", "Endocrine Negative Feedback"],
    facts: [
      "The anterior and posterior lobes of the pituitary are entirely different in origin: the anterior lobe develops from an upward pouch of the roof of the primitive mouth (Rathke's pouch), while the posterior lobe buds downward from the developing brain.",
      "Despite being only the size of a green pea (1 cm across), the pituitary gland directs the actions of nearly every other endocrine gland in the body."
    ],
    conditions: [
      { name: "Pituitary Adenoma", desc: "Benign tumor of pituitary glandular cells that can cause hormone hypersecretion (e.g. acromegaly from excess GH) or optic chiasm compression causing bitemporal hemianopsia." },
      { name: "Hypopituitarism", desc: "Diminished hormone secretion across anterior pituitary lineages, leading to secondary adrenal insufficiency, hypothyroidism, and growth failure." }
    ],
    quickRevision: [
      "Situated in the sella turcica of the sphenoid bone.",
      "Anterior lobe (Adenohypophysis): Produces 6 hormones (GH, TSH, ACTH, FSH, LH, Prolactin).",
      "Posterior lobe (Neurohypophysis): Stores and releases ADH and Oxytocin made by hypothalamus.",
      "Regulated via negative feedback loops from peripheral target organs."
    ],
    quizQuestions: [
      {
        question: "A pituitary tumor that compresses the overlying Optic Chiasm typically causes which classic visual field defect?",
        options: ["Complete blindness in the right eye", "Bitemporal hemianopsia (loss of peripheral visual fields in both eyes)", "Tunnel vision", "Night blindness"],
        answer: 1,
        explanation: "Because crossing nasal retinal fibers pass through the optic chiasm directly superior to the sella turcica, upward pituitary tumor growth compresses these fibers, causing bitemporal hemianopsia."
      }
    ],
    relatedOrgans: ["hypothalamus", "thyroid", "adrenal", "ovaries-testes", "kidneys"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 17: The Endocrine System"]
  },

  {
    id: "spinal-cord",
    slug: "spinal-cord",
    name: "Spinal Cord",
    latinName: "Medulla Spinalis",
    pronunciation: "SPY-nuhl kord",
    category: "Brain and Nervous System",
    systemId: "nervous",
    relatedSystemIds: ["nervous", "muscular", "skeletal"],
    bodyRegion: "spine",
    view: "back",
    hotspot: { x: 50, y: 35, r: 14 },
    location: "Enclosed within the vertebral canal formed by the vertebral foramina, extending from the foramen magnum of the occipital bone to approximately the L1-L2 vertebral level in an adult.",
    svgType: "spine",
    overview: "The spinal cord is the principal two-way information superhighway connecting the brain to the peripheral body. Approximately 45 cm long and 1.5 cm thick, it relays sensory feedback to the brain, distributes descending motor plans to muscles, and independently executes vital spinal reflex arcs without requiring brain input.",
    structure: {
      macroscopic: "Cylindrical structure tapering caudally at the Conus Medullaris (L1-L2), terminating in the Filum Terminale, flanked by the Cauda Equina ('horse's tail' of lumbosacral nerve roots). Features two enlargements: Cervical (upper limb nerves) and Lumbar (lower limb nerves).",
      microscopic: "Central butterfly-shaped Gray Matter (Dorsal Horns: sensory interneurons; Ventral Horns: somatic alpha motor neurons; Lateral Horns: autonomic preganglionics) surrounded by peripheral White Matter organized into dorsal, lateral, and ventral funiculi/columns.",
      segments: "31 paired spinal nerves: 8 Cervical, 12 Thoracic, 5 Lumbar, 5 Sacral, 1 Coccygeal."
    },
    primaryFunctions: [
      "Ascending sensory transmission: Carries pain, temperature, touch, and proprioception via spinothalamic tracts and dorsal columns",
      "Descending motor transmission: Carries voluntary movement directives from cerebral motor cortex via lateral corticospinal tracts",
      "Spinal reflex integration: Mediates rapid, protective somatic reflexes (stretch reflex, withdrawal reflex) independently of conscious brain oversight",
      "Autonomic outflow: Houses sympathetic preganglionic neurons in T1-L2 lateral horns and parasympathetic preganglionics in S2-S4."
    ],
    howItWorks: {
      inputs: "Receives sensory afferents from peripheral receptors via dorsal root ganglia; receives descending upper motor commands from the motor cortex.",
      mechanism: "1. Reflex Processing (e.g. Patellar Stretch): A hammer taps the patellar tendon, stretching muscle spindles in the quadriceps.\n2. Afferent Inflow: Ia sensory fibers fire action potentials into the dorsal horn of the spinal cord.\n3. Monosynaptic Activation: Sensory neurons synapse directly onto alpha motor neurons in the ventral horn.\n4. Efferent Outflow: Motor neurons fire down the femoral nerve, contracting quadriceps and kicking the lower leg forward in under 30 milliseconds.\n5. Tract Propagation: Simultaneously, collaterals ascend through the dorsal column to notify the somatosensory cortex after the reflex is already complete.",
      cellsInvolved: "Alpha and gamma motor neurons, Renshaw cells, sensory interneurons, oligodendrocytes, ependymal cells lining central canal.",
      outputs: "Motor impulses to voluntary skeletal muscles, preganglionic autonomic signals to viscera, ascending sensory data to the brain.",
      systemicImpact: "Enables instant protective reactions against tissue damage and coordinates posture and ambulation."
    },
    interactions: [
      { organ: "Brain", relationship: "Transmits sensory data up to cerebral sensory areas and receives voluntary motor directives down from motor cortex." },
      { organ: "Skeletal Muscles", relationship: "Ventral horn motor neurons directly innervate neuromuscular junctions to drive muscle contraction." }
    ],
    processes: ["Monosynaptic and Polysynaptic Spinal Reflexes", "Somatotopic Sensory and Motor Conduction"],
    facts: [
      "In an adult, the spinal cord ends around the L1-L2 vertebra, whereas the vertebral column continues downward. This anatomical difference allows clinicians to perform safe lumbar punctures (spinal taps) in the L3-L4 or L4-L5 space without risking spinal cord puncture.",
      "The simple knee-jerk reflex bypasses the brain entirely; your leg begins extending before your brain even perceives that the tendon was struck!"
    ],
    conditions: [
      { name: "Spinal Cord Injury (SCI)", desc: "Traumatic laceration or compression of spinal pathways causing paraplegia (thoracic/lumbar damage) or quadriplegia/tetraplegia (cervical damage) below the level of the lesion." },
      { name: "Amyotrophic Lateral Sclerosis (ALS)", desc: "Progressive neurodegenerative degeneration of upper and lower motor neurons in the spinal cord ventral horns, leading to muscle atrophy and loss of voluntary movement." }
    ],
    quickRevision: [
      "Extends from foramen magnum to L1-L2 vertebral level, ending at conus medullaris.",
      "Internal butterfly-shaped gray matter (dorsal = sensory, ventral = motor) surrounded by external white matter tracts.",
      "Gives rise to 31 pairs of spinal nerves.",
      "Executes autonomous spinal reflexes and conducts sensory/motor signals between body and brain."
    ],
    quizQuestions: [
      {
        question: "In which horn of the spinal cord gray matter are the cell bodies of somatic alpha motor neurons located?",
        options: ["Dorsal Horn", "Ventral Horn", "Lateral Horn", "Posterior Funiculus"],
        answer: 1,
        explanation: "The ventral (anterior) horns of spinal gray matter contain the large cell bodies of somatic motor neurons that innervate skeletal muscles."
      }
    ],
    relatedOrgans: ["brain", "brainstem", "muscular", "skeletal"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 13: The Anatomy of the Nervous System"]
  },

  // ===================== RESPIRATORY SYSTEM =====================
  {
    id: "lungs",
    slug: "lungs",
    name: "Lungs",
    latinName: "Pulmones",
    pronunciation: "luhngz (Latin: pul-MOH-neez)",
    category: "Internal Organs",
    systemId: "respiratory",
    relatedSystemIds: ["respiratory", "cardiovascular"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 38, y: 31, r: 16 },
    location: "Bilateral pleural cavities of the thoracic cage, flanking the central mediastinum and heart, resting inferiorly on the diaphragm and extending superiorly just above the clavicles.",
    svgType: "lungs",
    overview: "The lungs are the principal organs of the respiratory system, consisting of spongy, light, elastic parenchyma engineered for gas exchange. With every breath, they process atmospheric air across an internal surface area roughly the size of a tennis court, allowing oxygen to diffuse into venous blood while extracting carbon dioxide.",
    structure: {
      macroscopic: "Right lung has 3 lobes (Superior, Middle, Inferior) separated by horizontal and oblique fissures; Left lung has 2 lobes (Superior, Inferior) with a Cardiac Notch accommodating the heart apex.",
      pleura: "Enclosed by the double-layered serous pleura: Visceral pleura (clinging to lung surface) and Parietal pleura (lining thoracic wall), separated by lubricating pleural fluid creating negative intrapleural pressure.",
      bronchialTree: "Trachea branches into Primary Bronchi -> Lobar (Secondary) Bronchi -> Segmental (Tertiary) Bronchi -> Conducting Bronchioles -> Terminal Bronchioles -> Respiratory Bronchioles -> Alveolar Ducts and Alveoli."
    },
    primaryFunctions: [
      "Pulmonary ventilation: Moving air into (inhalation) and out of (exhalation) the respiratory zone",
      "External respiration: Diffusion of atmospheric O2 into pulmonary capillaries and CO2 out into alveolar air",
      "Acid-base balance: Rapidly alters blood pH by blowing off CO2 or retaining it (carbonic acid equilibrium)",
      "Endocrine enzymatic processing: Pulmonary vascular endothelium houses Angiotensin-Converting Enzyme (ACE) converting Angiotensin I to II"
    ],
    howItWorks: {
      inputs: "Atmospheric air (21% O2, 0.04% CO2, 78% N2) inhaled under atmospheric pressure; deoxygenated venous blood from pulmonary arteries.",
      mechanism: "1. Inhalation Mechanics: Diaphragm contracts downward and external intercostals pull ribs upward. Thoracic volume expands.\n2. Negative Pressure: Intrapulmonary pressure drops below atmospheric pressure (-1 mmHg), pulling air down the bronchial tree.\n3. Alveolar Diffusion: Air reaches 300 million alveoli. O2 diffuses across the 0.5 µm blood-air barrier into capillaries due to partial pressure gradients (PO2 104 vs 40 mmHg).\n4. CO2 Elimination: CO2 diffuses out of blood into alveoli (PCO2 45 vs 40 mmHg).\n5. Exhalation: Diaphragm relaxes, thoracic volume decreases, intrapulmonary pressure rises above atmospheric (+1 mmHg), and gas is passively exhaled.",
      cellsInvolved: "Type I alveolar pneumocytes (gas diffusion), Type II pneumocytes (pulmonary surfactant), alveolar macrophages (dust cells), ciliated bronchial cells.",
      outputs: "Exhaled air enriched with CO2 (~4%) and depleted of O2 (~16%); fully oxygenated blood (PaO2 ~95-100 mmHg) sent to left atrium.",
      systemicImpact: "Powers cellular aerobic metabolism (oxidative phosphorylation) throughout all tissues."
    },
    interactions: [
      { organ: "Heart", relationship: "Receives deoxygenated cardiac output via pulmonary trunk; returns freshly oxygenated blood through four pulmonary veins to left atrium." },
      { organ: "Diaphragm", relationship: "The primary muscle of inspiration; its rhythmic contractions drive pressure changes inside the pleural cavities." },
      { organ: "Kidneys", relationship: "Coordinates with kidneys to maintain physiological arterial blood pH between 7.35 and 7.45." }
    ],
    processes: ["Pulmonary Ventilation Mechanics (Boyle's Law)", "Alveolar Gas Exchange", "Pulmonary Surfactant Surface Tension Regulation"],
    facts: [
      "If you were to unroll and spread flat all the alveoli in both adult lungs, they would cover a surface area of about 75 to 100 square meters — equivalent to half a tennis court!",
      "The left lung is about 10% smaller than the right lung to make anatomical space for the apex of the heart (the cardiac notch)."
    ],
    conditions: [
      { name: "Pneumonia", desc: "Infection of the lung parenchyma causing alveolar inflammation, exudate accumulation, and impaired gas diffusion." },
      { name: "Chronic Obstructive Pulmonary Disease (COPD)", desc: "Progressive airflow limitation caused by chronic bronchitis and emphysematous destruction of alveolar walls, primarily linked to smoking." }
    ],
    quickRevision: [
      "Right lung has 3 lobes; Left lung has 2 lobes with a cardiac notch.",
      "Enclosed by double-layered pleura maintaining negative intrapleural pressure.",
      "Contains 300-500 million alveoli delivering massive surface area for diffusion.",
      "Driven by diaphragm and intercostal muscles following Boyle's pressure-volume law."
    ],
    quizQuestions: [
      {
        question: "Why does the left lung have only two lobes while the right lung has three?",
        options: ["The left lung needs to store more surfactant", "To accommodate the asymmetrical position of the heart in the chest", "The left lung does not perform gas exchange", "The left diaphragm sits higher"],
        answer: 1,
        explanation: "The left lung is slightly smaller and has two lobes with a cardiac notch to provide anatomical space for the heart, which tilts toward the left side of the thoracic cavity."
      }
    ],
    relatedOrgans: ["alveoli", "trachea", "diaphragm", "heart", "blood"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 22: The Respiratory System"]
  },

  {
    id: "alveoli",
    slug: "alveoli",
    name: "Alveoli (Microscopic Air Sacs)",
    latinName: "Alveoli Pulmonis",
    pronunciation: "al-VEE-uh-ly",
    category: "Cells and Tissues",
    systemId: "respiratory",
    relatedSystemIds: ["respiratory", "cardiovascular"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 36, y: 34, r: 8 },
    location: "Terminal ends of the respiratory tree within the lungs, clustered like grapes at the ends of alveolar ducts.",
    svgType: "microscopic",
    overview: "Alveoli are microscopic, cup-shaped outpouchings that represent the functional structural units of the respiratory system. Numbering approximately 300 to 500 million in an adult, they form the ultra-thin respiratory membrane through which atmospheric oxygen enters the bloodstream and metabolic carbon dioxide is expelled.",
    structure: {
      macroscopic: "Alveolar sacs surrounded by dense, basket-like networks of pulmonary capillaries and elastic fibers that recoil during expiration.",
      microscopic: "Lined primarily by Type I pneumocytes (extremely thin, flattened simple squamous epithelial cells, 0.1-0.2 µm thick) that form 95% of the surface. Interspersed are cuboidal Type II pneumocytes and mobile alveolar macrophages.",
      respiratoryMembrane: "A three-layered diffusion barrier: Type I alveolar epithelium, shared fused basement membrane, and capillary endothelial cell layer — total thickness only 0.2 to 0.5 micrometers!"
    },
    primaryFunctions: [
      "Ultra-rapid passive gas exchange via simple Fickian diffusion driven by partial pressure gradients",
      "Surfactant secretion: Type II alveolar cells produce pulmonary surfactant (dipalmitoylphosphatidylcholine) to reduce surface tension",
      "Prevention of alveolar atelectasis (collapse) during end-expiration",
      "Immune phagocytosis: Alveolar macrophages engulf inhaled particulate matter and airborne pathogens"
    ],
    howItWorks: {
      inputs: "Inspired air rich in O2 (PO2 ~100-104 mmHg); deoxygenated blood arriving from pulmonary arterioles (PO2 ~40 mmHg, PCO2 ~45 mmHg).",
      mechanism: "1. Capillary Perfusion: Blood enters the dense capillary mesh surrounding each alveolus in a thin film.\n2. Oxygen Diffusion: High PO2 in the alveolus drives O2 down its pressure gradient across the 0.5 µm respiratory membrane in just 0.25 seconds.\n3. Carbon Dioxide Diffusion: PCO2 in capillary blood (45 mmHg) exceeds alveolar air (40 mmHg), driving CO2 out into the air sac.\n4. Surfactant Stabilization: Pulmonary surfactant intercalates between water molecules at the air-liquid interface, lowering surface tension according to Laplace's Law and preventing small alveoli from collapsing into larger ones.",
      cellsInvolved: "Type I pneumocytes, Type II pneumocytes, Alveolar macrophages (dust cells), Endothelial cells.",
      outputs: "Oxygen-saturated capillary blood (PO2 ~100 mmHg); alveolar gas loaded with expelled carbon dioxide ready for exhalation.",
      systemicImpact: "The indispensable microscopic gateway sustaining aerobic cellular respiration throughout the entire human organism."
    },
    interactions: [
      { organ: "Lungs", relationship: "Constitutes the primary functional gas exchange parenchyma of the entire lung organ." },
      { organ: "Blood", relationship: "Capillary red blood cells uptake oxygen molecules directly onto hemoglobin iron centers as they traverse alveolar walls." }
    ],
    processes: ["Fickian Gas Diffusion Across Blood-Air Barrier", "Surfactant-Mediated Surface Tension Reduction (Laplace's Law)"],
    facts: [
      "The barrier separating air in an alveolus from blood in a capillary is less than 0.5 micrometers thick — roughly 1/150th the thickness of a single sheet of paper!",
      "Without pulmonary surfactant produced by Type II pneumocytes, the surface tension of water lining the alveoli would create an inward collapsing force so strong that your chest muscles could not re-expand the lungs."
    ],
    conditions: [
      { name: "Infant Respiratory Distress Syndrome (IRDS)", desc: "Occurs in premature infants lacking mature Type II pneumocytes, leading to surfactant deficiency, alveolar collapse, and severe hypoxemia." },
      { name: "Pulmonary Emphysema", desc: "Enzymatic destruction of elastic alveolar walls and septa, creating enlarged, floppy air spaces with drastically reduced surface area for gas diffusion." }
    ],
    quickRevision: [
      "Microscopic functional units of lungs numbering 300–500 million.",
      "Respiratory membrane is only 0.2–0.5 µm thick, enabling rapid O2/CO2 diffusion.",
      "Type I cells provide thin diffusion barrier; Type II cells produce pulmonary surfactant.",
      "Surfactant reduces surface tension to prevent end-expiratory alveolar collapse."
    ],
    quizQuestions: [
      {
        question: "What is the critical physiological role of pulmonary surfactant secreted by Type II alveolar cells?",
        options: ["To digest inhaled airborne bacteria", "To lower surface tension and prevent alveolar collapse during exhalation", "To thicken the blood-air barrier", "To carry carbon dioxide into the blood"],
        answer: 1,
        explanation: "Surfactant disrupts hydrogen bonding between water molecules lining the alveoli, drastically reducing surface tension and preventing small alveoli from collapsing during expiration."
      }
    ],
    relatedOrgans: ["lungs", "trachea", "capillaries", "heart", "blood"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 22: The Respiratory System"]
  },

  {
    id: "diaphragm",
    slug: "diaphragm",
    name: "Diaphragm",
    latinName: "Diaphragma",
    pronunciation: "DY-uh-fram",
    category: "Muscles and Movement",
    systemId: "respiratory",
    relatedSystemIds: ["respiratory", "muscular"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 50, y: 39, r: 18 },
    location: "Spans the entire inferior boundary of the thoracic cage, separating the thoracic cavity from the abdominal cavity.",
    svgType: "muscle",
    overview: "The diaphragm is a broad, dome-shaped musculotendinous sheet that serves as the primary muscle of respiration. Accounting for roughly 75% of inspiratory ventilation during quiet breathing, its rhythmic contraction and relaxation alter intra-thoracic pressure, drawing air into the lungs and expelling it.",
    structure: {
      macroscopic: "Consists of peripheral skeletal muscle fibers originating from the xiphoid process, lower six costal cartilages, and upper lumbar vertebrae, converging onto a strong, crescentic Central Tendon.",
      apertures: "Pierced by three major openings: Vena Caval Foramen (T8, for inferior vena cava), Esophageal Hiatus (T10, for esophagus and vagus nerves), and Aortic Hiatus (T12, for aorta and thoracic duct).",
      innervation: "Exclusively innervated by the bilateral Phrenic Nerves originating from cervical spinal cord segments C3, C4, and C5 ('C3, 4, 5 keep the diaphragm alive')."
    },
    primaryFunctions: [
      "Inspiratory contraction: Flattens inferiorly to expand thoracic vertical volume, pulling air into the lungs",
      "Increases intra-abdominal pressure (Valsalva maneuver) to assist urination, defecation, and parturition",
      "Venous return pump: Compresses abdominal viscera while expanding the chest, drawing venous blood upward into the right atrium",
      "Anti-reflux barrier: Muscular fibers of the esophageal hiatus reinforce the lower esophageal sphincter"
    ],
    howItWorks: {
      inputs: "Rhythmic motor impulses conducted along the phrenic nerves from the medullary respiratory rhythm generators in the brainstem.",
      mechanism: "1. Contraction: Phrenic nerve firing triggers acetylcholine release at neuromuscular junctions. Diaphragmatic muscle fibers contract, pulling the central tendon downward.\n2. Volume Expansion: The dome flattens by 1.5 to 7 cm, increasing thoracic volume.\n3. Pressure Drop: Intrapleural and intrapulmonary pressures drop below atmospheric pressure.\n4. Inhalation: Air rushes into the lungs.\n5. Relaxation: As phrenic motor discharges cease, elastic recoil of the lungs and chest wall pushes the diaphragm upward back into its resting dome position, driving passive exhalation.",
      cellsInvolved: "Skeletal myocytes packed with slow-twitch (Type I) fatigue-resistant muscle fibers, fibroblasts of the central tendon.",
      outputs: "Generation of negative thoracic pressure driving 500 mL tidal volume ventilation per breath.",
      systemicImpact: "The continuous mechanical pump sustaining pulmonary ventilation for a lifetime."
    },
    interactions: [
      { organ: "Lungs", relationship: "Downwards excursion expands pleural cavities, creating negative pressure that inflates lung parenchyma." },
      { organ: "Brainstem", relationship: "Receives rhythmic involuntary motor pacing from the medulla oblongata via phrenic nerves (C3-C5)." },
      { organ: "Stomach", relationship: "The muscular esophageal hiatus of the diaphragm helps prevent acidic gastric contents from refluxing into the esophagus." }
    ],
    processes: ["Inspiratory Diaphragmatic Flattening", "Thoracoabdominal Pressure Gradient Dynamics"],
    facts: [
      "The medical memory device 'C3, C4, C5 keep the diaphragm alive' highlights that the phrenic nerves originate in the cervical neck, allowing breathing to continue even if the thoracic spinal cord is severed.",
      "Hiccups (singultus) are involuntary, spasmodic contractions of the diaphragm followed by sudden closure of the vocal cords (glottis)."
    ],
    conditions: [
      { name: "Hiatal Hernia", desc: "Protrusion of the upper stomach into the thoracic cavity through an enlarged diaphragmatic esophageal hiatus." },
      { name: "Diaphragmatic Paralysis", desc: "Loss of diaphragmatic motor function caused by phrenic nerve trauma or cervical spine injury, causing respiratory distress." }
    ],
    quickRevision: [
      "Dome-shaped musculotendinous partition between thoracic and abdominal cavities.",
      "Primary muscle of inspiration; accounts for 75% of resting quiet breathing.",
      "Innervated by phrenic nerves originating from C3, C4, and C5 cervical roots.",
      "Has three major apertures at T8 (IVC), T10 (esophagus), and T12 (aorta)."
    ],
    quizQuestions: [
      {
        question: "Which spinal cord nerve roots give rise to the phrenic nerve that innervates the diaphragm?",
        options: ["T1 to T4", "C3, C4, and C5", "L1 to L3", "C1 and C2"],
        answer: 1,
        explanation: "The phrenic nerves arise from cervical spinal cord segments C3, C4, and C5. An injury below C5 preserves spontaneous diaphragmatic breathing."
      }
    ],
    relatedOrgans: ["lungs", "stomach", "brainstem", "heart"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 11: The Muscular System"]
  },

  // ===================== DIGESTIVE SYSTEM =====================
  {
    id: "stomach",
    slug: "stomach",
    name: "Stomach",
    latinName: "Gaster / Ventriculus",
    pronunciation: "STUM-uk (Latin: GAS-ter)",
    category: "Internal Organs",
    systemId: "digestive",
    relatedSystemIds: ["digestive"],
    bodyRegion: "abdomen",
    view: "front",
    hotspot: { x: 53, y: 44, r: 14 },
    location: "Left upper quadrant (epigastric, umbilical, and left hypochondriac regions) of the abdominal cavity, directly inferior to the diaphragm.",
    svgType: "stomach",
    overview: "The stomach is a distensible, J-shaped muscular organ of the gastrointestinal tract that serves as a temporary food holding reservoir, acid sterilizer, and mechanical churn. It converts ingested solid food into a semi-liquid acidic mixture called chyme before metering it into the small intestine.",
    structure: {
      macroscopic: "Divided into four anatomical regions: Cardia (surrounding esophageal junction), Fundus (dome above cardia), Body (large central portion), and Pylorus (funnel terminating at pyloric sphincter). Features Lesser and Greater Curvatures and prominent internal folds called Rugae that flatten as the stomach fills.",
      musculature: "Unique three-layered muscularis externa: Inner Oblique, Middle Circular, and Outer Longitudinal layers providing three-dimensional churning power.",
      mucosa: "Deep gastric pits leading to tubular gastric glands containing specialized secretory cells."
    },
    primaryFunctions: [
      "Mechanical churning: Breaks food into microscopic particles and blends it with gastric secretions",
      "Chemical proteolysis: Hydrochloric acid denatures proteins and activates pepsinogen into active pepsin",
      "Bactericidal barrier: High acidity (pH 1.5 to 2.5) destroys the vast majority of ingested bacteria and pathogens",
      "Intrinsic factor secretion: Parietal cells produce intrinsic factor, essential for Vitamin B12 absorption in the terminal ileum"
    ],
    howItWorks: {
      inputs: "Food boluses propelled through lower esophageal sphincter; parasympathetic vagal stimulation and gastrin hormone.",
      mechanism: "1. Acid Secretion: Parietal cells pump H+ into the lumen via H+/K+ ATPase proton pumps while secreting Cl-, creating concentrated HCl.\n2. Enzyme Activation: Pepsinogen secreted by Chief cells undergoes acid-catalyzed cleavage into active pepsin, initiating peptide bond digestion.\n3. Muscular Churning: Waves of peristalsis (3 per minute) generated by pacemaker interstitial cells of Cajal grind food against the closed pyloric sphincter (retropulsion).\n4. Chyme Formation: Food is reduced to liquefied chyme.\n5. Gastric Emptying: Small aliquots (~3 mL) of chyme squirt through the momentarily relaxed pyloric sphincter into the duodenum.",
      cellsInvolved: "Parietal cells (HCl and Intrinsic Factor), Chief cells (Pepsinogen and Gastric Lipase), G cells (Gastrin hormone), Enterochromaffin-like (ECL) cells (Histamine), Mucous Neck cells (bicarbonate-rich protective mucus).",
      outputs: "Liquefied acidic chyme metered into the duodenum; absorbed small molecules (alcohol, aspirin).",
      systemicImpact: "Sterilizes ingested food and begins protein catabolism while preserving vitamin B12 absorption."
    },
    interactions: [
      { organ: "Small Intestine", relationship: "Meters small amounts of acidic chyme into duodenum, which triggers secretin and CCK release." },
      { organ: "Pancreas", relationship: "Gastric acid entering duodenum stimulates pancreas to secrete alkaline bicarbonate to neutralize pH." },
      { organ: "Liver", relationship: "Absorbed water, alcohol, and medications from gastric mucosa enter portal circulation directly to hepatocytes." }
    ],
    processes: ["Gastric Acid Production (Proton Pump Mechanism)", "Pepsinogen Proteolytic Activation", "Gastric Peristalsis and Retropulsion"],
    facts: [
      "The hydrochloric acid in your stomach has a pH of 1.5 to 2.0 — concentrated enough to dissolve zinc metal. To keep from digesting itself, the stomach produces a thick, alkaline mucus barrier and replaces its entire epithelial lining every 3 to 6 days!",
      "The empty stomach has an internal volume of only about 50 mL, but its rugae folds can expand comfortably to hold up to 1 to 1.5 liters of food."
    ],
    conditions: [
      { name: "Peptic Ulcer Disease (PUD)", desc: "Erosion of the gastric or duodenal mucosa caused by Helicobacter pylori bacterial infection or chronic NSAID use inhibiting protective prostaglandins." },
      { name: "Gastroesophageal Reflux Disease (GERD)", desc: "Incompetence of the lower esophageal sphincter allowing acidic gastric chyme to reflux upward, causing heartburn and mucosal metaplasia (Barrett's esophagus)." }
    ],
    quickRevision: [
      "J-shaped muscular organ with unique 3-layered muscularis externa for multi-directional churning.",
      "Internal mucosal folds called rugae allow expansion up to 1.5 liters.",
      "Parietal cells secrete HCl (pH ~2) and Intrinsic Factor (vital for Vitamin B12 absorption).",
      "Chief cells secrete pepsinogen, cleaved by acid into protein-digesting pepsin."
    ],
    quizQuestions: [
      {
        question: "Which vital substance secreted by gastric parietal cells is indispensable for the absorption of Vitamin B12 in the ileum?",
        options: ["Pepsinogen", "Intrinsic Factor", "Gastrin", "Hydrochloric Acid"],
        answer: 1,
        explanation: "Parietal cells secrete Intrinsic Factor, a glycoprotein that binds Vitamin B12 in the stomach, protecting it until it is absorbed in the terminal ileum. Deficiency causes pernicious anemia."
      }
    ],
    relatedOrgans: ["small-intestine", "pancreas", "liver", "gallbladder"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System"]
  },

  {
    id: "liver",
    slug: "liver",
    name: "Liver",
    latinName: "Hepar",
    pronunciation: "LIV-er (Latin: HEP-ar)",
    category: "Internal Organs",
    systemId: "digestive",
    relatedSystemIds: ["digestive", "cardiovascular", "endocrine"],
    bodyRegion: "abdomen",
    view: "front",
    hotspot: { x: 44, y: 42, r: 16 },
    location: "Right upper quadrant of the abdominal cavity, nestled directly under the diaphragm, protected by ribs 7 through 11.",
    svgType: "liver",
    overview: "Weighing roughly 1.5 kg (3.3 lbs), the liver is the largest internal solid organ and the central metabolic refinery of the human body. Performing over 500 distinct vital biochemical functions, it processes nutrient-rich blood arriving from the gastrointestinal tract, synthesizes essential plasma proteins, produces bile for fat digestion, and neutralizes toxins and drugs.",
    structure: {
      macroscopic: "Divided into four lobes: large Right Lobe, Left Lobe, and inferior Quadrate and Caudate lobes, separated anteriorly by the Falciform Ligament.",
      dualBloodSupply: "Hepatic Artery brings oxygenated blood (25%); Hepatic Portal Vein brings deoxygenated, nutrient-loaded venous blood from stomach, intestines, and spleen (75%).",
      microscopic: "Organized into roughly 100,000 hexagonal Liver Lobules centered around a Central Vein, flanked by Portal Triads (hepatic arteriole, portal venule, bile ductule) with fenestrated Sinusoids lined by Kupffer cells (macrophages)."
    },
    primaryFunctions: [
      "Bile synthesis: Produces 500-1000 mL of bile salts daily to emulsify dietary lipids in the duodenum",
      "Carbohydrate metabolism: Buffers blood glucose via glycogenesis, glycogenolysis, and gluconeogenesis",
      "Plasma protein synthesis: Manufactures albumin, fibrinogen, prothrombin, and complement cascade proteins",
      "Detoxification: Modifies drugs, alcohol, and ammonia (converted to harmless urea via the urea cycle)",
      "Storage depot: Stores glycogen, iron (ferritin), copper, and fat-soluble vitamins (A, D, E, K, B12)"
    ],
    howItWorks: {
      inputs: "Nutrient-rich, deoxygenated blood from hepatic portal vein; oxygenated blood from hepatic artery.",
      mechanism: "1. Sinusoidal Perfusion: Mixed blood flows through lobule sinusoids toward the central vein.\n2. Hepatocyte Uptake: Hepatocytes absorb glucose, amino acids, and fatty acids across wide fenestrations.\n3. Glycogen Buffering: Excess glucose is polymerized into glycogen under insulin signaling.\n4. Detoxification: Cytochrome P450 enzymes oxidize hydrophobic toxins into water-soluble conjugates for renal excretion.\n5. Bile Secretion: Hepatocytes secrete bile acids and bilirubin into bile canaliculi, which flow in the opposite direction toward portal bile ducts.\n6. Venous Outflow: Filtered blood collects in central veins, merging into hepatic veins draining into the inferior vena cava.",
      cellsInvolved: "Hepatocytes (80% of volume), Kupffer cells (resident macrophages), Hepatic Stellate (Ito) cells (vitamin A storage / fibrosis), Sinusoidal Endothelial cells.",
      outputs: "Bile into biliary tree; cleansed blood into inferior vena cava; glucose, albumin, and clotting factors into circulation.",
      systemicImpact: "The indispensable metabolic and chemical governor of whole-body homeostasis."
    },
    interactions: [
      { organ: "Gallbladder", relationship: "Synthesizes bile continuously, which flows down hepatic ducts to be stored and concentrated in the gallbladder." },
      { organ: "Pancreas", relationship: "Coordinates blood glucose levels in response to pancreatic hormones (insulin drives glycogenesis; glucagon drives glycogenolysis)." },
      { organ: "Small Intestine", relationship: "Receives all absorbed nutrients and water from mesenteric veins via the hepatic portal vein before blood enters systemic circulation." }
    ],
    processes: ["Hepatic First-Pass Metabolism", "Urea Cycle (Ammonia Detoxification)", "Glycogen Homeostasis", "Bile Synthesis and Secretion"],
    facts: [
      "The liver is the only internal organ capable of true regeneration. If as much as 70% of healthy liver mass is surgically removed, the remaining hepatocytes can regenerate back to full original size within weeks!",
      "The liver contains about 10% of the body's total blood volume at any given second, filtering roughly 1.4 liters of blood every minute."
    ],
    conditions: [
      { name: "Cirrhosis", desc: "End-stage fibrosis of liver parenchyma with architectural distortion and regenerative nodules, resulting in portal hypertension and hepatic failure." },
      { name: "Hepatitis", desc: "Inflammation of liver tissue typically caused by viral infection (Hepatitis A, B, C) or toxic agents (alcohol, acetaminophen)." }
    ],
    quickRevision: [
      "Largest internal organ, situated in the right upper quadrant under the diaphragm.",
      "Dual blood supply: 75% from hepatic portal vein (nutrients) and 25% from hepatic artery (oxygen).",
      "Synthesizes bile, albumin, clotting factors, and converts toxic ammonia to urea.",
      "Has remarkable regenerative capacity to regrow after surgical resection."
    ],
    quizQuestions: [
      {
        question: "Through which major blood vessel does nutrient-rich blood from the stomach and intestines travel directly into the liver?",
        options: ["Hepatic Artery", "Hepatic Vein", "Hepatic Portal Vein", "Inferior Vena Cava"],
        answer: 2,
        explanation: "The Hepatic Portal Vein carries deoxygenated, nutrient-rich blood directly from the digestive tract and spleen to the liver sinusoids for first-pass processing."
      }
    ],
    relatedOrgans: ["gallbladder", "pancreas", "stomach", "small-intestine", "blood"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System"]
  },

  {
    id: "gallbladder",
    slug: "gallbladder",
    name: "Gallbladder",
    latinName: "Vesica Biliaris / Fellea",
    pronunciation: "GAWL-blad-er",
    category: "Internal Organs",
    systemId: "digestive",
    relatedSystemIds: ["digestive"],
    bodyRegion: "abdomen",
    view: "front",
    hotspot: { x: 44, y: 47, r: 8 },
    location: "Shallow depression on the posterior, visceral surface of the liver's right lobe, in the right upper quadrant.",
    svgType: "gland",
    overview: "The gallbladder is a small, pear-shaped muscular sac roughly 7 to 10 centimeters long. It does not produce bile itself; rather, it stores and concentrates dilute bile produced continuously by the liver, ejecting a concentrated bolus into the duodenum when fatty foods enter the digestive tract.",
    structure: {
      macroscopic: "Divided into three anatomical regions: Fundus (distal rounded end), Body, and Neck (tapering into the Cystic Duct). Capacity of 30 to 50 mL.",
      biliaryTract: "The Cystic Duct joins the Common Hepatic Duct (from liver) to form the Common Bile Duct, which merges with the Main Pancreatic Duct at the Hepatopancreatic Ampulla (Ampulla of Vater), guarded by the Sphincter of Oddi.",
      wall: "Mucosa lined by simple columnar epithelium with microvilli specialized for active water and electrolyte absorption, surrounded by smooth muscle and outer serosa."
    },
    primaryFunctions: [
      "Concentration of bile: Absorbs water and inorganic salts, concentrating bile acids up to 5- to 10-fold",
      "Storage reservoir: Stores 30 to 50 mL of concentrated bile between meals when the Sphincter of Oddi is closed",
      "Hormone-triggered ejection: Contracts forcefully in response to Cholecystokinin (CCK) to deliver bile to the duodenum"
    ],
    howItWorks: {
      inputs: "Dilute, golden-yellow bile from hepatic ducts; neural vagal stimulation and hormonal Cholecystokinin (CCK).",
      mechanism: "1. Interdigestive Storage: Between meals, the muscular Sphincter of Oddi remains contracted. Hepatic bile backs up into the cystic duct and fills the gallbladder.\n2. Concentration: Epithelial sodium-hydrogen exchangers pump Na+ and water out of bile into capillaries, concentrating bile salts and cholesterol.\n3. Fatty Meal Ingestion: Dietary lipids and peptides in the duodenum trigger endocrine I cells to secrete Cholecystokinin (CCK) into the bloodstream.\n4. Coordinated Ejection: CCK stimulates gallbladder smooth muscle contraction while simultaneously causing the Sphincter of Oddi to relax.\n5. Duodenal Delivery: Concentrated bile squirts through the ampulla into the duodenum to emulsify large fat globules into microscopic micelles.",
      cellsInvolved: "Simple columnar absorptive cells, smooth muscle cells of muscularis layer.",
      outputs: "Concentrated bile acids, cholesterol, lecithin, and conjugated bilirubin into the duodenum.",
      systemicImpact: "Essential for efficient dietary lipid emulsification and absorption of fat-soluble vitamins (A, D, E, K)."
    },
    interactions: [
      { organ: "Liver", relationship: "Receives bile synthesized continuously by hepatocytes via the hepatic and cystic ducts." },
      { organ: "Small Intestine", relationship: "Ejects bile into the duodenum upon stimulation by duodenal Cholecystokinin (CCK)." },
      { organ: "Pancreas", relationship: "Shares the common hepatopancreatic ampulla and sphincter of Oddi to empty secretions together into the duodenum." }
    ],
    processes: ["Bile Concentration via Epithelial Absorption", "CCK-Mediated Gallbladder Contraction and Sphincter of Oddi Relaxation"],
    facts: [
      "The gallbladder concentrates bile so effectively that bile stored in it can be 10 times more concentrated in bile salts and cholesterol than freshly synthesized hepatic bile.",
      "Humans can live completely normal, healthy lives without a gallbladder (after a cholecystectomy); bile simply trickles continuously from the liver directly into the small intestine."
    ],
    conditions: [
      { name: "Cholelithiasis (Gallstones)", desc: "Formation of crystalline cholesterol or pigment stones in the gallbladder caused by bile supersaturation or impaired motility." },
      { name: "Cholecystitis", desc: "Acute inflammation of the gallbladder wall, commonly caused by a gallstone obstructing the cystic duct (biliary colic)." }
    ],
    quickRevision: [
      "Pear-shaped muscular sac under the right lobe of the liver.",
      "Stores and concentrates bile (up to 10x) produced by the liver.",
      "Contracts in response to Cholecystokinin (CCK) released when fatty food enters the duodenum.",
      "Not an essential organ; bile can flow directly from the liver into the intestine if removed."
    ],
    quizQuestions: [
      {
        question: "Which gastrointestinal hormone triggers contraction of the gallbladder and relaxation of the Sphincter of Oddi?",
        options: ["Gastrin", "Secretin", "Cholecystokinin (CCK)", "Insulin"],
        answer: 2,
        explanation: "Cholecystokinin (CCK), released by duodenal endocrine I cells in response to fatty chyme, causes powerful gallbladder contraction and relaxes the Sphincter of Oddi."
      }
    ],
    relatedOrgans: ["liver", "small-intestine", "pancreas", "stomach"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System"]
  },

  {
    id: "pancreas",
    slug: "pancreas",
    name: "Pancreas",
    latinName: "Pancreas",
    pronunciation: "PAN-kree-us",
    category: "Glands and Hormones",
    systemId: "digestive",
    relatedSystemIds: ["digestive", "endocrine"],
    bodyRegion: "abdomen",
    view: "front",
    hotspot: { x: 50, y: 46, r: 10 },
    location: "Retroperitoneal organ situated transversely across the posterior abdominal wall, behind the stomach, extending from the C-loop of the duodenum to the spleen.",
    svgType: "gland",
    overview: "The pancreas is a dual-function gland possessing both exocrine digestive and endocrine hormonal roles. Roughly 99% of its mass consists of exocrine acini producing pancreatic juice packed with digestive enzymes and alkaline bicarbonate, while the remaining 1% comprises scattered endocrine Islets of Langerhans regulating blood glucose.",
    structure: {
      macroscopic: "Elongated, soft, lobulated organ (12-15 cm) partitioned into Head (nestled in duodenal curve), Neck, Body, and Tail (touching splenic hilum).",
      ducts: "Main Pancreatic Duct (of Wirsung) travels the length of the gland, joining the common bile duct at the hepatopancreatic ampulla; accessory pancreatic duct (of Santorini) often present.",
      microscopic: "Exocrine tissue: Acini and intercalated ducts lined with carbonic anhydrase. Endocrine tissue: roughly 1 to 2 million Islets of Langerhans."
    },
    primaryFunctions: [
      "Exocrine digestion: Acinar cells synthesize and secrete pancreatic enzymes (trypsinogen, chymotrypsinogen, amylase, lipase, nucleases)",
      "Acid neutralization: Duct cells secrete sodium bicarbonate (HCO3-) to neutralize acidic gastric chyme entering the duodenum",
      "Blood glucose regulation: Beta cells secrete Insulin (lowers blood sugar); Alpha cells secrete Glucagon (elevates blood sugar)",
      "Somatostatin modulation: Delta cells secrete somatostatin to inhibit both insulin and glucagon secretion locally"
    ],
    howItWorks: {
      inputs: "Secretin and CCK hormones from duodenal mucosa; vagal parasympathetic stimulation; circulating blood glucose concentrations.",
      mechanism: "1. Neutralization Drive: Acidic chyme entering the duodenum stimulates duodenal S cells to release Secretin, triggering pancreatic duct cells to secrete HCO3- rich fluid.\n2. Enzyme Drive: Fatty acids and peptides stimulate duodenal I cells to release CCK, inducing acinar cells to exocytose digestive proenzymes.\n3. Brush Border Activation: Inactive trypsinogen enters the duodenum and is cleaved into active Trypsin by enterokinase, which then activates all other pancreatic proteases safely inside the intestinal lumen.\n4. Endocrine Glucose Sensing: Elevated postprandial glucose enters pancreatic beta cells via GLUT2 transporters, raising ATP levels, closing K-ATP channels, depolarizing the membrane, and exocytosing insulin.",
      cellsInvolved: "Acinar cells, Ductal epithelial cells, Beta cells (insulin), Alpha cells (glucagon), Delta cells (somatostatin), PP cells.",
      outputs: "1.5 Liters of alkaline pancreatic juice daily into duodenum; insulin and glucagon directly into portal vein.",
      systemicImpact: "Allows complete molecular digestion of carbohydrates, proteins, and fats, while preserving tight glycemic control."
    },
    interactions: [
      { organ: "Small Intestine", relationship: "Secretes bicarbonate to neutralize acidic stomach chyme and digestive enzymes to complete nutrient breakdown in the duodenum." },
      { organ: "Liver", relationship: "Insulin and glucagon travel via portal vein directly to the liver to govern glycogen synthesis and gluconeogenesis." },
      { organ: "Stomach", relationship: "Sits directly behind the stomach and acts upon the acidic chyme produced by gastric digestion." }
    ],
    processes: ["Pancreatic Exocrine Enzyme Secretion", "Insulin-Glucagon Homeostatic Feedback Axis", "Proenzyme Activation Cascades"],
    facts: [
      "To prevent the pancreas from digesting itself, its powerful protein-destroying enzymes (like trypsin and chymotrypsin) are synthesized and stored in inactive precursor forms called zymogens, which are only activated once they safely reach the small intestine.",
      "If the digestive enzymes become accidentally activated within the pancreas itself, the resulting condition — acute pancreatitis — literally causes the organ to begin autodigesting its own tissue."
    ],
    conditions: [
      { name: "Diabetes Mellitus (Type 1 and Type 2)", desc: "Type 1 is autoimmune destruction of pancreatic beta cells causing absolute insulin deficiency; Type 2 involves progressive peripheral insulin resistance and relative secretory failure." },
      { name: "Acute and Chronic Pancreatitis", desc: "Severe inflammation of the pancreas typically precipitated by gallstone duct obstruction or chronic alcohol toxicity, leading to parenchymal necrosis." }
    ],
    quickRevision: [
      "Dual-function retroperitoneal gland: 99% exocrine (digestive enzymes & bicarbonate), 1% endocrine (islet hormones).",
      "Secretes alkaline bicarbonate fluid to neutralize gastric acid in the duodenum.",
      "Synthesizes proteases as inactive zymogens (e.g., trypsinogen) to protect itself from autodigestion.",
      "Islets of Langerhans: Alpha cells produce glucagon; Beta cells produce insulin."
    ],
    quizQuestions: [
      {
        question: "Which enzyme on the duodenal brush border activates inactive pancreatic trypsinogen into active trypsin?",
        options: ["Enteropeptidase (Enterokinase)", "Amylase", "Pepsin", "Lactase"],
        answer: 0,
        explanation: "Enteropeptidase (enterokinase), bound to the duodenal brush border membrane, cleaves trypsinogen into active trypsin, which then activates the remaining pancreatic proteases."
      }
    ],
    relatedOrgans: ["liver", "stomach", "small-intestine", "gallbladder"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System"]
  },

  {
    id: "small-intestine",
    slug: "small-intestine",
    name: "Small Intestine & Villi",
    latinName: "Intestinum Tenue",
    pronunciation: "in-TES-tin (Latin: in-tes-TI-num TEN-yoo-ay)",
    category: "Internal Organs",
    systemId: "digestive",
    relatedSystemIds: ["digestive", "immune-lymphatic", "cardiovascular"],
    bodyRegion: "abdomen",
    view: "front",
    hotspot: { x: 50, y: 52, r: 16 },
    location: "Convoluted tubular organ occupying the central and lower abdominal cavity, bordered laterally and superiorly by the large intestine.",
    svgType: "intestine",
    overview: "The small intestine is the longest section of the gastrointestinal tract, measuring roughly 6 meters (20 feet) in length. It is the primary site of both chemical enzymatic digestion and nutrient absorption in the human body, absorbing approximately 90% of all calories, vitamins, and water from ingested food.",
    structure: {
      macroscopic: "Divided into three continuous segments: Duodenum (first 25 cm, C-shaped, receiving bile and pancreatic juice), Jejunum (approx. 2.5 m, primary site of nutrient absorption), and Ileum (approx. 3.5 m, absorbing B12 and bile salts, ending at ileocecal valve).",
      absorptiveSurface: "Surface area amplified over 600-fold by three structural adaptations: Plicae circulares (circular mucosal folds), Villi (finger-like mucosal projections, 0.5-1 mm tall), and Microvilli (microscopic brush border on each enterocyte).",
      lymphatics: "Each villus contains a central core featuring a capillary network and a specialized lymphatic capillary called a Lacteal for absorbing dietary lipids."
    },
    primaryFunctions: [
      "Terminal enzymatic digestion: Brush-border enzymes (maltase, sucrase, lactase, aminopeptidases) finalize macromolecule hydrolysis",
      "Nutrient absorption: Absorbs monosaccharides, amino acids, dipeptides, free fatty acids, electrolytes, and vitamins",
      "Lipid transport: Packages absorbed dietary triglycerides into chylomicrons for transport through lacteals into the lymphatic system",
      "Immune surveillance: Gut-associated lymphoid tissue (GALT) including Peyer's patches in the ileum guards against bacterial translocation"
    ],
    howItWorks: {
      inputs: "Chyme from stomach, bile from gallbladder, alkaline pancreatic juice.",
      mechanism: "1. Peristalsis and Segmentation: Rhythmic contractions of circular muscle (segmentation) slosh chyme back and forth against the mucosal brush border.\n2. Brush Border Hydrolysis: Membrane enzymes split disaccharides into glucose, galactose, and fructose, and oligopeptides into single amino acids.\n3. Active Transport: Enterocyte apical Na+/glucose cotransporters (SGLT1) pull nutrients into cells against concentration gradients.\n4. Capillary & Lacteal Entry: Water-soluble nutrients diffuse into villus capillaries draining to the hepatic portal vein; fatty acids enter the central lacteal as chylomicrons.\n5. Ileal Recycling: Terminal ileum reabsorbs 95% of bile salts for return to the liver (enterohepatic circulation).",
      cellsInvolved: "Enterocytes (absorptive cells with brush border), Goblet cells (protective mucus), Paneth cells (antimicrobial defensins), Enteroendocrine cells, M cells (antigen sampling).",
      outputs: "Absorbed nutrients into portal circulation and lymph; indigestible residue and water passed to cecum.",
      systemicImpact: "The indispensable gateway supplying every cell of the body with metabolic fuels and building blocks."
    },
    interactions: [
      { organ: "Liver", relationship: "All water-soluble nutrients absorbed by small intestine enter the portal vein to be processed first by hepatocytes." },
      { organ: "Pancreas", relationship: "Receives pancreatic digestive enzymes and bicarbonate required to neutralize stomach acid and digest macromolecules." },
      { organ: "Large Intestine", relationship: "Passes remaining undigested residue, fiber, and fluid through the ileocecal valve into the cecum." }
    ],
    processes: ["Brush Border Nutrient Absorption", "Intestinal Segmentation and Peristalsis", "Enterohepatic Circulation of Bile Salts"],
    facts: [
      "Thanks to the combination of circular folds, finger-like villi, and microscopic microvilli, the internal surface area of your small intestine is about 32 square meters — comparable to the floor area of a studio apartment!",
      "Dietary fats are too large to enter ordinary blood capillaries; instead, they are absorbed into specialized lymphatic vessels inside the villi called lacteals, giving lymph a milky appearance called chyle."
    ],
    conditions: [
      { name: "Celiac Disease", desc: "Autoimmune enteropathy triggered by dietary gluten, resulting in chronic inflammation and blunting of intestinal villi with malabsorption." },
      { name: "Crohn's Disease", desc: "Inflammatory bowel disease characterized by transmural, skip lesions that most frequently affect the terminal ileum." }
    ],
    quickRevision: [
      "Primary site for both chemical digestion and nutrient absorption (6 meters long).",
      "Three sections: Duodenum (chemical mixing), Jejunum (nutrient absorption), Ileum (B12 & bile salts).",
      "Villi and microvilli amplify absorptive surface area over 600-fold.",
      "Water-soluble nutrients enter blood capillaries; dietary lipids enter lymphatic lacteals."
    ],
    quizQuestions: [
      {
        question: "What are the specialized lymphatic capillaries inside intestinal villi that absorb dietary fats called?",
        options: ["Peyer's Patches", "Lacteals", "Crypts of Lieberkühn", "Sinusoids"],
        answer: 1,
        explanation: "Lacteals are blind-ended lymphatic capillaries in the center of each villus that absorb dietary lipids packaged as chylomicrons, which are too large to enter blood capillaries."
      }
    ],
    relatedOrgans: ["stomach", "pancreas", "liver", "large-intestine"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System"]
  },

  {
    id: "large-intestine",
    slug: "large-intestine",
    name: "Large Intestine (Colon & Appendix)",
    latinName: "Intestinum Crassum",
    pronunciation: "KOH-lon (Latin: in-tes-TI-num KRAS-um)",
    category: "Internal Organs",
    systemId: "digestive",
    relatedSystemIds: ["digestive", "immune-lymphatic"],
    bodyRegion: "abdomen",
    view: "front",
    hotspot: { x: 50, y: 56, r: 18 },
    location: "Frames the small intestine within the abdominal and pelvic cavities, extending from the right iliac fossa (ileocecal valve) to the anus.",
    svgType: "colon",
    overview: "Measuring roughly 1.5 meters (5 feet) in length with a much wider diameter than the small intestine, the large intestine frames the abdominal cavity. It reabsorbs roughly 90% of the water and electrolytes remaining in liquid digestive residue, compacts feces, and harbors a massive microbiome of over 38 trillion symbiotic bacteria.",
    structure: {
      macroscopic: "Consists of the Cecum (with attached Vermiform Appendix), Ascending Colon, Transverse Colon, Descending Colon, Sigmoid Colon, Rectum, and Anal Canal.",
      features: "Distinguished by three unique anatomical features: Teniae Coli (three bands of longitudinal smooth muscle), Haustra (puckered pouches created by teniae tension), and Epiploic Appendages (fat-filled peritoneal pouches).",
      microscopic: "Lacks villi. Deep intestinal crypts lined heavily with Goblet cells secreting lubricating mucus to ease passage of drying feces."
    },
    primaryFunctions: [
      "Water and electrolyte reabsorption: Recovers roughly 1.5 liters of fluid daily from chyme, transforming it into solid feces",
      "Microbiome fermentation: Trillions of symbiotic bacteria ferment indigestible dietary fibers into beneficial Short-Chain Fatty Acids (SCFAs)",
      "Vitamin synthesis: Gut microbiota synthesize essential Vitamin K (vital for blood clotting) and biotin (Vitamin B7)",
      "Fecal compaction and defecation: Temporarily stores fecal matter in the rectum and executes controlled defecation reflexes"
    ],
    howItWorks: {
      inputs: "Liquid indigestible chyme (approx. 1.5 L/day) passing through ileocecal valve; shed mucosal cells and bile pigments.",
      mechanism: "1. Haustral Churning: Slow haustral contractions turn and compress chyme, bringing fluid into contact with mucosal absorptive enterocytes.\n2. Active Water Recovery: Epithelial sodium channels (ENaC) actively pump Na+ across the mucosa; water follows passively via osmosis.\n3. Bacterial Fermentation: Colonic microbiota break down complex polysaccharides, releasing butyrate, propionate, acetate, and gases (flatus).\n4. Mass Movements: Powerful peristaltic mass movements (3-4 times a day, often postprandial) sweep colonic contents toward the rectum.\n5. Defecation Reflex: Rectal distension triggers parasympathetic stretch signals: internal anal sphincter relaxes involuntarily, while external anal sphincter remains under voluntary conscious control.",
      cellsInvolved: "Absorptive colonocytes, Goblet cells (mucus), M cells, symbiotic bacterial flora (Bacteroidetes, Firmicutes).",
      outputs: "Compacted semi-solid feces (75% water, 25% solid matter composed of dead bacteria, unabsorbed fiber, and bilirubin metabolites).",
      systemicImpact: "Prevents fatal dehydration and supplies critical bacterial vitamins and metabolic signaling molecules."
    },
    interactions: [
      { organ: "Small Intestine", relationship: "Receives indigestible fiber, water, and digestive residues via the ileocecal valve." },
      { organ: "Immune System", relationship: "The gut microbiome actively trains and modulates mucosal immune cells; the appendix serves as an immune reservoir for beneficial commensal bacteria." }
    ],
    processes: ["Colonic Water and Electrolyte Absorption", "Gut Microbiome Fermentation and Vitamin Synthesis", "Defecation Reflex Arc"],
    facts: [
      "Your large intestine is home to over 38 trillion bacterial cells — meaning you actually harbor more bacterial cells in your colon than human cells in your entire body!",
      "The vermiform appendix was long considered a useless evolutionary leftover, but modern immunology reveals it functions as a safehouse reservoir for beneficial gut bacteria, restocking the microbiome after severe diarrheal infections."
    ],
    conditions: [
      { name: "Appendicitis", desc: "Acute inflammation of the vermiform appendix, usually precipitated by lymphoid hyperplasia or a fecalith obstructing its lumen, requiring surgical appendectomy." },
      { name: "Colorectal Cancer", desc: "Malignancy arising from the mucosal epithelium of the colon or rectum, frequently developing from precursor adenomatous polyps." }
    ],
    quickRevision: [
      "Consists of Cecum (with Appendix), Colon (Ascending, Transverse, Descending, Sigmoid), Rectum, and Anus.",
      "Key anatomical markers: Teniae coli, Haustra, and Epiploic appendages (no villi).",
      "Reabsorbs water and electrolytes, transforming liquid residue into solid feces.",
      "Harbors trillions of symbiotic gut bacteria synthesizing Vitamin K and short-chain fatty acids."
    ],
    quizQuestions: [
      {
        question: "Which essential fat-soluble vitamin, vital for liver synthesis of blood clotting factors, is synthesized by bacteria in the large intestine?",
        options: ["Vitamin C", "Vitamin K", "Vitamin D", "Vitamin A"],
        answer: 1,
        explanation: "Colonic bacteria synthesize Vitamin K, which is absorbed across the colonic mucosa and utilized by hepatocytes to produce clotting factors II, VII, IX, and X."
      }
    ],
    relatedOrgans: ["small-intestine", "stomach", "liver"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 23: The Digestive System"]
  },

  // ===================== URINARY SYSTEM =====================
  {
    id: "kidneys",
    slug: "kidneys",
    name: "Kidneys",
    latinName: "Renes",
    pronunciation: "KID-neez (Latin: REE-neez)",
    category: "Internal Organs",
    systemId: "urinary",
    relatedSystemIds: ["urinary", "cardiovascular", "endocrine"],
    bodyRegion: "abdomen",
    view: "back",
    hotspot: { x: 42, y: 46, r: 12 },
    location: "Retroperitoneal organs lying on the posterior abdominal wall on either side of the vertebral column (between T12 and L3); the right kidney sits slightly lower than the left to accommodate the liver.",
    svgType: "kidney",
    overview: "The kidneys are a pair of bean-shaped reddish-brown organs roughly the size of a computer mouse. Receiving roughly 20-25% of total resting cardiac output, they continuously cleanse the bloodstream of nitrogenous metabolic wastes, regulate blood volume and systemic blood pressure, maintain electrolyte and fluid balance, and preserve systemic acid-base equilibrium.",
    structure: {
      macroscopic: "Covered by a fibrous capsule, perirenal fat capsule, and renal fascia. Internal coronal section reveals outer Renal Cortex, inner Renal Medulla (containing 8-15 striated Renal Pyramids), and Renal Pelvis funneling into the ureter.",
      nephronCount: "Each kidney contains approximately 1 to 1.2 million functional microscopic units called Nephrons.",
      vasculature: "Renal Artery -> Segmental -> Interlobar -> Arcuate -> Cortical Radiate Arteries -> Afferent Arteriole -> Glomerular Capillaries -> Efferent Arteriole -> Peritubular Capillaries / Vasa Recta -> Renal Vein."
    },
    primaryFunctions: [
      "Blood ultrafiltration: Filters roughly 180 liters of blood plasma daily, excreting metabolic wastes (urea, uric acid, creatinine)",
      "Fluid and osmolarity regulation: Conserves or eliminates water to keep blood osmolarity strictly near 285-295 mOsm/kg",
      "Blood pressure governance: Juxtaglomerular cells secrete Renin in response to low perfusion, activating the RAAS cascade",
      "Acid-base regulation: Excretes excess H+ ions into urine and reabsorbs/synthesizes HCO3- bicarbonate buffer",
      "Endocrine synthesis: Secretes Erythropoietin (EPO) to stimulate RBC production and converts calcidiol to active Calcitriol (Vitamin D3)"
    ],
    howItWorks: {
      inputs: "Renal arterial blood under high hydrostatic pressure (approx. 1.2 L/min); ADH, aldosterone, and parathyroid hormones.",
      mechanism: "1. Glomerular Filtration: Blood enters the glomerular capillary tuft under high hydrostatic pressure (~55 mmHg). Water and small solutes are forced across the filtration barrier into Bowman's capsule (GFR ~125 mL/min).\n2. Tubular Reabsorption: As filtrate travels through the proximal convoluted tubule, loop of Henle, and distal tubule, epithelial cells actively reabsorb 99% of filtered water, all glucose, amino acids, and essential ions back into peritubular capillaries.\n3. Tubular Secretion: Capillaries actively secrete excess potassium, hydrogen ions, ammonium, and drug metabolites directly into the tubular lumen.\n4. Countercurrent Concentration: The Loop of Henle and vasa recta establish a hyperosmotic medullary gradient (up to 1200 mOsm/L).\n5. Final Urine Output: Collecting ducts, regulated by ADH aquaporin insertion, determine final urine concentration before draining into the renal pelvis.",
      cellsInvolved: "Podocytes, Mesangial cells, Proximal tubule brush-border cells, Juxtaglomerular granular cells, Macula densa, Principal and Intercalated cells.",
      outputs: "1.5 to 2.0 Liters of concentrated urine daily; purified venous blood returned to the inferior vena cava.",
      systemicImpact: "The ultimate biochemical filter and volume governor maintaining the constancy of the internal fluid environment (milieu intérieur)."
    },
    interactions: [
      { organ: "Heart", relationship: "Receives 20-25% of cardiac output; secretes renin to maintain blood pressure and blood volume to preserve cardiac perfusion." },
      { organ: "Adrenal Glands", relationship: "Sit directly on superior poles of kidneys; adrenal aldosterone acts on renal distal tubules to reabsorb sodium and water." },
      { organ: "Blood", relationship: "Monitors oxygen delivery and secretes erythropoietin (EPO) to command bone marrow to produce new red blood cells." }
    ],
    processes: ["Glomerular Ultrafiltration (GFR)", "Countercurrent Multiplier System", "Renin-Angiotensin-Aldosterone System (RAAS)", "Renal Acid-Base Secretion"],
    facts: [
      "Your kidneys filter your entire circulating blood volume roughly 30 to 40 times every single day (filtering around 180 liters or 48 gallons of fluid daily)!",
      "Even though you filter 180 liters of plasma every 24 hours, more than 99% of that fluid is actively reabsorbed back into the bloodstream, producing only 1.5 to 2 liters of actual urine."
    ],
    conditions: [
      { name: "Chronic Kidney Disease (CKD)", desc: "Gradual, irreversible loss of renal nephron function, commonly caused by long-standing hypertension or diabetic nephropathy, eventually requiring dialysis or transplantation." },
      { name: "Nephrolithiasis (Kidney Stones)", desc: "Crystalline mineral deposits (most commonly calcium oxalate) that form in the renal pelvis and can cause severe flank pain when obstructing a ureter." }
    ],
    quickRevision: [
      "Retroperitoneal bean-shaped organs receiving 20–25% of resting cardiac output.",
      "Each kidney contains ~1 million nephrons divided between outer cortex and inner medulla.",
      "Three core processes: Glomerular Filtration, Tubular Reabsorption, and Tubular Secretion.",
      "Secretes Renin (blood pressure), Erythropoietin (RBC production), and Calcitriol (active Vitamin D)."
    ],
    quizQuestions: [
      {
        question: "What hormone produced by the kidneys in response to tissue hypoxia stimulates the red bone marrow to accelerate erythropoiesis (RBC production)?",
        options: ["Renin", "Aldosterone", "Erythropoietin (EPO)", "Calcitriol"],
        answer: 2,
        explanation: "Erythropoietin (EPO) is a glycoprotein hormone synthesized by renal interstitial fibroblasts in response to low oxygen delivery; it travels to bone marrow to stimulate red blood cell production."
      }
    ],
    relatedOrgans: ["nephrons", "bladder", "heart", "blood", "adrenal"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 25: The Urinary System"]
  },

  {
    id: "nephrons",
    slug: "nephrons",
    name: "Nephrons (Microscopic Filtration Units)",
    latinName: "Nephron",
    pronunciation: "NEF-ronz",
    category: "Cells and Tissues",
    systemId: "urinary",
    relatedSystemIds: ["urinary", "cardiovascular"],
    bodyRegion: "abdomen",
    view: "back",
    hotspot: { x: 40, y: 48, r: 8 },
    location: "Spanning the renal cortex and renal medulla inside each kidney.",
    svgType: "microscopic",
    overview: "The nephron is the microscopic, functional structural unit of the kidney responsible for filtering blood, recovering vital solutes and water, and generating urine. Numbering over 1 million in each kidney, each nephron consists of a filtering renal corpuscle and a specialized tubular system that fine-tunes the chemical composition of bodily fluids.",
    structure: {
      macroscopic: "Two functional classifications: Cortical Nephrons (85%, short loops of Henle confined mostly to the cortex) and Juxtamedullary Nephrons (15%, long loops plunging deep into the renal medulla, essential for urine concentration).",
      renalCorpuscle: "Glomerulus (tuft of high-pressure fenestrated capillaries) surrounded by Bowman's Capsule (visceral layer composed of interdigitating podocytes with filtration slits).",
      tubularSystem: "Proximal Convoluted Tubule (PCT) -> Descending Loop of Henle -> Ascending Loop of Henle -> Distal Convoluted Tubule (DCT) -> Collecting Duct."
    },
    primaryFunctions: [
      "Glomerular ultrafiltration: Filtration of blood plasma based on molecular size (<70 kDa) and charge (repelling negative proteins)",
      "Obligatory reabsorption: PCT recovers 65% of water, 100% of glucose and amino acids, and 65% of Na+ via apical Na+/glucose symporters",
      "Medullary osmotic gradient creation: The countercurrent multiplier mechanism in loops of Henle builds an interstitial hypertonic gradient",
      "Regulated water and ion excretion: DCT and collecting duct adjust final Na+, K+, and H2O excretion under aldosterone and ADH"
    ],
    howItWorks: {
      inputs: "Arterial blood under 55 mmHg pressure entering via afferent arteriole; circulating ADH and aldosterone.",
      mechanism: "1. Filtration: Blood passes through the 3-layered glomerular membrane: fenestrated endothelium, negative basement membrane, and podocyte filtration slits. Proteins and cells are retained; water and small solutes enter Bowman's space.\n2. PCT Reabsorption: Brush-border simple cuboidal cells actively pump Na+ out basolaterally via Na+/K+ ATPase, driving secondary active transport of glucose, amino acids, and bicarbonate.\n3. Loop Concentration: The descending limb is permeable to water but not solutes; the ascending limb is impermeable to water and actively pumps out NaCl, creating a high osmotic gradient in medullary tissue.\n4. DCT Secretion: Parathyroid hormone triggers Ca2+ reabsorption; aldosterone triggers Na+ reabsorption and K+ secretion.\n5. Collecting Duct Concentration: ADH triggers insertion of Aquaporin-2 water channels, allowing water to exit the duct into the hypertonic medulla, producing concentrated urine.",
      cellsInvolved: "Podocytes, Mesangial cells, PCT brush-border cuboidal cells, Thick ascending limb NKCC2 transporters, Principal cells, Intercalated cells.",
      outputs: "Concentrated tubular fluid (urine) delivered to the renal calyces; reclaimed solutes and water returned to peritubular capillaries.",
      systemicImpact: "The precise microscopic cellular machinery that preserves fluid, electrolyte, and metabolic equilibrium for the entire human body."
    },
    interactions: [
      { organ: "Kidneys", relationship: "Constitutes the core functional cellular unit whose collective activity defines total renal function and GFR." },
      { organ: "Blood", relationship: "Cleanses circulating plasma of urea, uric acid, and excess electrolytes while recovering 100% of vital glucose." }
    ],
    processes: ["Countercurrent Multiplier Mechanism", "Glomerular Filtration Barrier Permeability", "Aquaporin-Mediated Water Reabsorption"],
    facts: [
      "The combined length of all the microscopic nephron tubules in a single human kidney is approximately 30 to 40 kilometers (over 20 miles)!",
      "Glucose is so valuable to the body that under normal conditions, the nephron's proximal convoluted tubule reabsorbs 100% of filtered glucose back into the blood; glucose only spills into urine if blood levels exceed the renal threshold of ~180 mg/dL."
    ],
    conditions: [
      { name: "Glomerulonephritis", desc: "Immune complex deposition in the glomerular basement membrane causing inflammation, hematuria (blood in urine), and proteinuria." },
      { name: "Acute Tubular Necrosis (ATN)", desc: "Ischemic or nephrotoxic injury to renal tubular epithelial cells, causing sloughing of cells and acute kidney injury." }
    ],
    quickRevision: [
      "Microscopic functional unit of the kidney (~1 million per kidney).",
      "Renal corpuscle (Glomerulus + Bowman's Capsule) filters plasma into tubular system.",
      "Proximal Convoluted Tubule reabsorbs 100% of glucose and amino acids and 65% of water.",
      "Collecting duct adjusts final urine concentration under the control of Anti-Diuretic Hormone (ADH)."
    ],
    quizQuestions: [
      {
        question: "Which segment of the nephron reabsorbs 100% of filtered glucose and amino acids under normal physiological conditions?",
        options: ["Collecting Duct", "Proximal Convoluted Tubule (PCT)", "Ascending Loop of Henle", "Distal Convoluted Tubule (DCT)"],
        answer: 1,
        explanation: "The Proximal Convoluted Tubule (PCT) contains dense brush-border microvilli packed with Na+/glucose cotransporters that reabsorb 100% of filtered glucose and amino acids."
      }
    ],
    relatedOrgans: ["kidneys", "bladder", "capillaries", "blood"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 25: The Urinary System"]
  },

  {
    id: "bladder",
    slug: "urinary-bladder",
    name: "Urinary Bladder & Ureters",
    latinName: "Vesica Urinaria",
    pronunciation: "BLAD-er (Latin: veh-SEE-kuh yoo-rih-NAIR-ee-uh)",
    category: "Internal Organs",
    systemId: "urinary",
    relatedSystemIds: ["urinary"],
    bodyRegion: "pelvis",
    view: "front",
    hotspot: { x: 50, y: 64, r: 12 },
    location: "Pelvic cavity, posterior to the pubic symphysis; in females, anterior to the uterus and vagina; in males, anterior to the rectum and immediately superior to the prostate gland.",
    svgType: "bladder",
    overview: "The urinary bladder is a hollow, distensible, muscular organ that acts as a temporary holding reservoir for urine delivered continuously from the kidneys by two muscular ureters. It can comfortably hold roughly 400 to 600 mL of urine before stretching triggers the urge to micturate (urinate).",
    structure: {
      macroscopic: "Pyramidal when empty, spherical or pear-shaped when distended. The floor features the smooth, triangular Trigone outlined by the two ureteral orifices and the internal urethral orifice.",
      musculature: "Wall composed of the powerful Detrusor Muscle — a three-layered mesh of smooth muscle fibers (inner longitudinal, middle circular, outer longitudinal) that contract synchronously to empty the bladder.",
      mucosa: "Lined by specialized Transitional Epithelium (Urothelium) with umbrella cells that flatten and slide over each other as the organ expands without leaking urine into pelvic tissues."
    },
    primaryFunctions: [
      "Distensible storage: Expands from near-empty up to 500-800 mL without significant increase in internal hydrostatic pressure",
      "Urine propulsion: Ureters propel urine from renal pelves into the bladder via rhythmic smooth muscle peristalsis",
      "Reflux prevention: Ureters enter the bladder wall at an oblique angle, forming physiological flap valves that clamp shut when bladder fills",
      "Controlled micturition: Coordinates detrusor contraction with sphincter relaxation to evacuate urine completely"
    ],
    howItWorks: {
      inputs: "Urine spurts arriving every 10-30 seconds via ureteral peristalsis; parasympathetic (pelvic splanchnic), sympathetic (hypogastric), and somatic (pudendal) nerves.",
      mechanism: "1. Filling Phase: Detrusor muscle remains relaxed (sympathetic beta-3 adrenergic stimulation) while internal sphincter contracts (alpha-1 stimulation) and external sphincter stays voluntarily shut.\n2. Stretch Activation: As urine volume reaches 200-400 mL, mechanosensitive stretch receptors in the bladder wall fire action potentials via sensory nerves to the sacral spinal cord (S2-S4).\n3. Micturition Reflex: Afferents travel up to the Pontine Micturition Center (Barrington's nucleus) in the brainstem.\n4. Conscious Decision: If socially appropriate, the cerebral cortex releases voluntary inhibition of the external urethral sphincter.\n5. Voiding: Parasympathetic pelvic splanchnic nerves stimulate muscarinic M3 receptors on the detrusor, causing powerful contraction while both internal and external sphincters relax.",
      cellsInvolved: "Transitional epithelial umbrella cells, detrusor smooth myocytes, autonomic and somatic motor neurons.",
      outputs: "Complete evacuation of urine through the urethra with minimal post-void residual volume (<50 mL).",
      systemicImpact: "Allows intermittent, socially controlled disposal of metabolic liquid waste while preventing upstream kidney damage."
    },
    interactions: [
      { organ: "Kidneys", relationship: "Stores urine produced continuously by renal nephrons, delivered down the muscular ureters." },
      { organ: "Nervous System", relationship: "Brainstem pontine micturition center and cerebral cortex coordinate voluntary and involuntary control of urination." }
    ],
    processes: ["Ureteral Peristalsis", "Urothelial Accommodative Stretching", "Micturition Reflex Arc"],
    facts: [
      "The specialized umbrella cells of the urothelium lining the bladder have unique pleated membrane plaques that unfold like an accordion when the bladder fills, allowing the surface area to double without tearing.",
      "The ureters do not rely on gravity to drain urine; their muscular walls actively generate peristaltic waves 1 to 5 times per minute to pump urine into the bladder even if you are lying upside down!"
    ],
    conditions: [
      { name: "Urinary Tract Infection (Cystitis)", desc: "Bacterial infection (most commonly uropathogenic E. coli) of the bladder mucosa, causing dysuria, urinary frequency, and urgency." },
      { name: "Urinary Incontinence", desc: "Involuntary leakage of urine categorized as stress incontinence (pelvic floor weakness), urge incontinence (detrusor overactivity), or overflow incontinence." }
    ],
    quickRevision: [
      "Distensible muscular organ situated in the anterior pelvic cavity.",
      "Trigone is a smooth triangular area bounded by two ureteric orifices and the urethral orifice.",
      "Detrusor muscle contracts during micturition under parasympathetic control.",
      "Lined by transitional epithelium (urothelium) that stretches without tearing."
    ],
    quizQuestions: [
      {
        question: "What is the smooth, sensitive triangular region on the bladder floor outlined by the openings of the two ureters and the urethra called?",
        options: ["Fundus", "Detrusor", "Trigone", "Rugae"],
        answer: 2,
        explanation: "The Trigone is the smooth, triangular mucosal area at the base of the bladder formed by the two ureteral orifices and the internal urethral orifice; it is particularly sensitive to stretch."
      }
    ],
    relatedOrgans: ["kidneys", "nephrons"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 25: The Urinary System"]
  },

  // ===================== SKELETAL SYSTEM =====================
  {
    id: "skeleton-bones",
    slug: "skeletal-bones",
    name: "Skeleton & Bones (Femur)",
    latinName: "Systema Skeletale / Os",
    pronunciation: "SKEL-uh-tuhn (Latin: os)",
    category: "Bones and Skeleton",
    systemId: "skeletal",
    relatedSystemIds: ["skeletal", "muscular", "cardiovascular"],
    bodyRegion: "legs",
    view: "front",
    hotspot: { x: 42, y: 72, r: 16 },
    location: "Distributed throughout the entire body; axial skeleton along the central axis and appendicular skeleton forming the limbs and girdles.",
    svgType: "bone",
    overview: "The human skeletal system comprises 206 bones in an adult, exemplified by the femur (thigh bone) — the longest, heaviest, and strongest bone in the human body. Far from dry mineral struts, bones are living, highly vascularized tissues that remodel continuously, anchor skeletal muscles for locomotion, shield internal organs, house red bone marrow, and store 99% of bodily calcium.",
    structure: {
      macroscopic: "Long bone structure (e.g. Femur): Epiphyses (expanded ends with articular cartilage), Diaphysis (central shaft), Metaphysis (housing growth epiphyseal plate in youth), and Medullary Cavity (housing yellow fat marrow).",
      microscopic: "Compact Bone (outer dense cortical shell organized into cylindrical Osteons / Haversian systems with concentric lamellae, lacunae, and canaliculi) and Spongy / Trabecular Bone (honeycomb lattice of trabeculae aligned with stress vectors, housing red hematopoietic marrow).",
      matrix: "Composite material: 1/3 organic collagen fibers (tensile strength and flexibility) and 2/3 inorganic hydroxyapatite calcium phosphate crystals (compressive hardness)."
    },
    primaryFunctions: [
      "Rigid structural leverage: Transmits muscular contraction forces across joints to achieve upright locomotion and bipedal gait",
      "Protection of delicate viscera: Cranium protects the brain; thoracic cage protects heart and lungs; pelvis shields reproductive organs",
      "Hematopoiesis: Red bone marrow in trabecular cavities produces hundreds of billions of erythrocytes, leukocytes, and platelets daily",
      "Mineral reservoir: Stores 99% of total body calcium and 85% of phosphorus, released dynamically via osteoclastic remodeling",
      "Endocrine signaling: Osteocytes secrete Fibroblast Growth Factor 23 (FGF23); osteoblasts secrete Osteocalcin regulating glucose metabolism"
    ],
    howItWorks: {
      inputs: "Mechanical strain and weight-bearing forces; parathyroid hormone (PTH), calcitonin, and growth hormone.",
      mechanism: "1. Mechanosensing: Physical weight-bearing creates fluid flow through osteocyte canaliculi. Osteocytes sense this shear stress and release biochemical signals.\n2. Wolff's Law Remodeling: In areas of high mechanical stress, osteoblasts synthesize osteoid (type I collagen) and mineralize it with hydroxyapatite crystals, thickening bone cortex.\n3. Mineral Release: When serum calcium falls below 8.5 mg/dL, Parathyroid Hormone (PTH) stimulates osteoclasts to secrete hydrochloric acid and cathepsin K enzymes, dissolving bone mineral to restore blood calcium levels.\n4. Hematopoiesis: Multipotent hematopoietic stem cells in red marrow undergo continuous differentiation into myeloid and lymphoid blood lineages.",
      cellsInvolved: "Osteocytes (mechanosensory mature cells), Osteoblasts (bone synthesizers), Osteoclasts (multinucleated bone resorbers), Osteogenic progenitor stem cells.",
      outputs: "Structural rigidity, locomotor leverage, blood cells, and calcium/phosphate homeostasis.",
      systemicImpact: "Provides the physical framework of the body while sustaining blood formation and mineral equilibrium."
    },
    interactions: [
      { organ: "Muscles", relationship: "Skeletal muscles attach to bone periosteum via dense fibrous tendons, using bones as mechanical levers to generate motion." },
      { organ: "Blood", relationship: "Houses red bone marrow where all formed elements of the blood are manufactured continuously via hematopoiesis." },
      { organ: "Parathyroid Glands", relationship: "Parathyroid hormone (PTH) stimulates osteoclastic bone resorption to maintain critical serum calcium levels." }
    ],
    processes: ["Bone Remodeling Cycle (Coupled Resorption and Formation)", "Wolff's Law of Functional Adaptation", "Endochondral and Intramembranous Ossification"],
    facts: [
      "The femur is the strongest bone in the human body; under healthy conditions, it can withstand compressive loads of roughly 1,800 to 2,500 pounds — more than 30 times an individual's body weight!",
      "Your skeleton is completely replaced approximately every 10 years through the continuous remodeling actions of osteoclasts tearing down old bone and osteoblasts building new bone."
    ],
    conditions: [
      { name: "Osteoporosis", desc: "A metabolic bone disease characterized by bone resorption outstripping bone formation, leading to low bone mineral density and high fracture susceptibility." },
      { name: "Bone Fractures", desc: "Structural breaks in bone continuity classified as open/closed, transverse, spiral, comminuted, or greenstick, healing via callus formation." }
    ],
    quickRevision: [
      "206 adult bones organized into Axial (80) and Appendicular (126) skeletons.",
      "Composite architecture: Organic collagen (tensile resilience) + Inorganic hydroxyapatite crystals (compressive hardness).",
      "Red bone marrow is the primary site of hematopoiesis (blood cell production).",
      "Wolff's Law: Bone continuously remodels and strengthens along lines of applied mechanical stress."
    ],
    quizQuestions: [
      {
        question: "Which bone cells are responsible for breaking down (resorbing) bone mineral matrix to release calcium into the bloodstream?",
        options: ["Osteoblasts", "Osteoclasts", "Osteocytes", "Chondrocytes"],
        answer: 1,
        explanation: "Osteoclasts are large, multinucleated cells derived from monocyte-macrophage lineages that secrete acid and proteolytic enzymes to resorb bone mineral and matrix."
      }
    ],
    relatedOrgans: ["muscles", "blood", "joints"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 6: Bone Tissue and the Skeletal System"]
  },

  // ===================== MUSCULAR SYSTEM =====================
  {
    id: "muscles",
    slug: "skeletal-muscles",
    name: "Skeletal Muscles & Sarcomere",
    latinName: "Musculi Sceleti",
    pronunciation: "MUS-uhlz (Latin: MUS-kyoo-lee)",
    category: "Muscles and Movement",
    systemId: "muscular",
    relatedSystemIds: ["muscular", "skeletal", "nervous"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 60, y: 32, r: 14 },
    location: "Attached to bones throughout the entire body via fibrous tendons.",
    svgType: "muscle",
    overview: "Skeletal muscles comprise over 640 voluntary muscles accounting for approximately 40% of adult body mass. Operating as biological linear motors, they convert the biochemical energy of adenosine triphosphate (ATP) into mechanical force, producing purposeful bodily movement, joint stabilization, upright posture, and essential thermogenic body heat.",
    structure: {
      macroscopic: "Hierarchical organization: Muscle Belly enclosed by Epimysium -> Fascicles (bundles of fibers) enclosed by Perimysium -> Muscle Fibers (elongated multinucleated cells) enclosed by Endomysium.",
      microscopic: "Each muscle fiber is packed with hundreds of Myofibrils. The functional contractile unit is the Sarcomere — bounded by two Z-discs, containing overlapping Actin (thin) and Myosin (thick) filaments.",
      triad: "Composed of a central Transverse Tubule (T-tubule invagination of sarcolemma) flanked by two terminal cisternae of the Sarcoplasmic Reticulum (storing high concentrations of Ca2+ ions)."
    },
    primaryFunctions: [
      "Force generation and movement: Generates pulling force across joint levers to create locomotion and dexterous manipulation",
      "Postural maintenance: Continuous submaximal tonic contractions prevent gravitational collapse while standing or sitting",
      "Thermogenesis: Produces roughly 85% of total bodily heat during exertion and shivering to preserve core temperature",
      "Glycogen storage reservoir: Stores approximately 400 to 500 grams of glycogen for immediate cellular fuel during exertion"
    ],
    howItWorks: {
      inputs: "Somatic motor neuron action potentials; acetylcholine neurotransmitter; ATP and glycogen fuels.",
      mechanism: "1. Neuromuscular Excitation: Motor neuron fires; acetylcholine binds to nicotinic receptors at the motor end plate, triggering a sarcolemmal action potential.\n2. T-Tubule Propagation: Depolarization travels deep into the muscle fiber along T-tubules, activating DHP voltage sensors.\n3. Calcium Release: Ryanodine receptors open, flooding the sarcoplasm with Ca2+ from the sarcoplasmic reticulum.\n4. Tropomyosin Shift: Ca2+ binds to Troponin C, causing Troponin to pull Tropomyosin away from actin active binding sites.\n5. Cross-Bridge Cycling: Energized Myosin heads bind to actin, perform a power stroke (pulling actin toward the M-line), release ADP/Pi, bind a new ATP molecule to detach, and re-cock.\n6. Relaxation: SERCA pumps actively drive Ca2+ back into the sarcoplasmic reticulum, allowing tropomyosin to block actin sites again.",
      cellsInvolved: "Skeletal myocytes (Type I slow-twitch oxidative, Type IIa fast-twitch oxidative-glycolytic, Type IIx fast glycolytic), Satellite stem cells.",
      outputs: "Mechanical force and shortening; heat production; carbon dioxide and metabolic lactate.",
      systemicImpact: "Powers all voluntary interactions with the physical environment and supports core metabolism."
    },
    interactions: [
      { organ: "Skeleton / Bones", relationship: "Pulls on bones via tendons to produce joint articulation and upright skeletal leverage." },
      { organ: "Nervous System", relationship: "Somatic alpha motor neurons form neuromuscular junctions that dictate the timing and strength of contractions." },
      { organ: "Cardiovascular System", relationship: "Skeletal muscle contractions compress deep veins (skeletal muscle pump), driving venous blood back toward the heart against gravity." }
    ],
    processes: ["Sliding Filament Theory of Contraction", "Excitation-Contraction Coupling", "Cross-Bridge Power Stroke Cycle"],
    facts: [
      "The eye muscles (extraocular muscles) are the busiest and most fatigue-resistant muscles in the human body, making more than 100,000 coordinated saccadic adjustments every day.",
      "Rigor mortis (stiffening of the body after death) occurs because dying cells can no longer produce ATP; without ATP, myosin heads cannot detach from actin filaments, locking muscles in a permanent contracted state until decomposition begins."
    ],
    conditions: [
      { name: "Myasthenia Gravis", desc: "Autoimmune disorder with autoantibodies against nicotinic acetylcholine receptors at the neuromuscular junction, causing progressive fluctuating muscle weakness." },
      { name: "Duchenne Muscular Dystrophy (DMD)", desc: "X-linked recessive genetic disorder characterized by absence of the dystrophin protein, leading to sarcolemmal fragility and progressive muscle wasting." }
    ],
    quickRevision: [
      "Over 640 voluntary, striated muscles comprising ~40% of adult body weight.",
      "The sarcomere (Z-disc to Z-disc) is the basic microscopic contractile unit.",
      "Sliding Filament Theory: Myosin heads bind to actin filaments and pull them inward toward the M-line.",
      "Contraction is triggered by Ca2+ release from the sarcoplasmic reticulum binding to troponin."
    ],
    quizQuestions: [
      {
        question: "During muscle contraction, calcium ions bind directly to which protein, causing a conformational shift that exposes myosin-binding sites on actin?",
        options: ["Tropomyosin", "Troponin", "Myosin", "Actin"],
        answer: 1,
        explanation: "Calcium binds directly to Troponin C on the thin filament, causing a conformational shift that moves Tropomyosin away from the active binding sites on actin."
      }
    ],
    relatedOrgans: ["skeleton-bones", "brain", "spinal-cord", "heart"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 10: Muscle Tissue"]
  },

  // ===================== IMMUNE & LYMPHATIC =====================
  {
    id: "spleen",
    slug: "spleen",
    name: "Spleen",
    latinName: "Lien / Splen",
    pronunciation: "spleen (Latin: LY-en)",
    category: "Internal Organs",
    systemId: "immune-lymphatic",
    relatedSystemIds: ["immune-lymphatic", "cardiovascular"],
    bodyRegion: "abdomen",
    view: "front",
    hotspot: { x: 56, y: 44, r: 10 },
    location: "Left upper quadrant of the abdominal cavity, posterior to the stomach and directly beneath the left hemidiaphragm, protected by ribs 9, 10, and 11.",
    svgType: "gland",
    overview: "Roughly the size of a fist and deep purple in color, the spleen is the largest secondary lymphoid organ in the human body. Acting as both a high-fidelity blood filter and an immunological surveillance headquarters, it cleanses circulating blood of aged or damaged erythrocytes while orchestrating potent adaptive immune responses against blood-borne pathogens.",
    structure: {
      macroscopic: "Enclosed in a fibroelastic capsule with trabeculae extending inward. Indented at the Hilum where splenic artery, vein, and nerves enter.",
      microscopic: "Parenchyma split into two distinct functional compartments: Red Pulp (75-80%, venous sinusoids and splenic cords of Billroth lined with macrophages) and White Pulp (20-25%, central arterioles surrounded by periarteriolar lymphoid sheaths [PALS] packed with T cells, and follicles with B cells).",
      circulation: "Open circulation: blood passes through discontinuous capillary ends directly into splenic red pulp cords, forcing cells to squeeze through narrow endothelial slits (1-2 µm) to re-enter sinusoids."
    },
    primaryFunctions: [
      "Erythrocyte quality control: Macrophages destroy senescent, rigid red blood cells (>120 days old) and recycle hemoglobin iron",
      "Blood-borne pathogen defense: White pulp B and T lymphocytes generate rapid immune responses against encapsulated bacteria",
      "Platelet and blood reservoir: Stores approximately one-third of the body's circulating platelets and pools reserve erythrocytes",
      "Fetal hematopoiesis: Serves as a major blood-forming organ during the second trimester of fetal development"
    ],
    howItWorks: {
      inputs: "Receives blood directly from the celiac trunk via the tortuous splenic artery (~300 mL/min).",
      mechanism: "1. White Pulp Surveillance: Blood entering central arterioles flows past dense sleeves of T and B lymphocytes. Dendritic cells present blood-borne antigens, triggering antibody production.\n2. Cords of Billroth Filtration: Blood empties into red pulp cords. Young, flexible RBCs easily deform and squeeze through narrow 1-2 µm slits between sinusoidal endothelial cells.\n3. Senescent RBC Culling: Aging RBCs with rigid, non-deformable membranes become trapped in the cords; splenic macrophages engulf and digest them via phagocytosis.\n4. Iron Recycling: Macrophages degrade hemoglobin, liberating iron to be stored as ferritin or transported by transferrin back to bone marrow.",
      cellsInvolved: "Splenic macrophages, T lymphocytes (in PALS), B lymphocytes (in germinal centers), Endothelial cells.",
      outputs: "Cleaned blood returned to portal circulation via splenic vein; recycled iron delivered to bone marrow.",
      systemicImpact: "Protects against life-threatening bacteremia and sepsis while preserving a healthy circulating pool of flexible red blood cells."
    },
    interactions: [
      { organ: "Blood", relationship: "Continuously filters circulating blood, recycling iron from dying red blood cells and storing one-third of all platelets." },
      { organ: "Liver", relationship: "Splenic venous blood drains into the portal vein, delivering recycled heme bilirubin metabolites directly to the liver." },
      { organ: "Bone Marrow", relationship: "Transfers recycled iron back to red bone marrow to support continuous new hemoglobin synthesis." }
    ],
    processes: ["Splenic Mechanical Slit Filtration (Culling and Pitting)", "Adaptive Humoral Immune Activation Against Blood Pathogens"],
    facts: [
      "To survive transit through the spleen, a red blood cell must squeeze through endothelial slits only 1 to 2 micrometers wide — less than one-third of its own resting diameter!",
      "If the spleen is surgically removed (splenectomy) due to trauma, the liver and bone marrow take over red blood cell recycling, but the individual has a lifelong elevated risk of infection from encapsulated bacteria like Streptococcus pneumoniae."
    ],
    conditions: [
      { name: "Splenomegaly", desc: "Abnormal enlargement of the spleen caused by portal hypertension, hematologic malignancies, or systemic infections like mononucleosis." },
      { name: "Splenic Rupture", desc: "Traumatic laceration of the spleen (e.g. from blunt abdominal trauma), leading to profuse internal peritoneal hemorrhage and hypovolemic shock." }
    ],
    quickRevision: [
      "Largest secondary lymphoid organ, located in the left upper quadrant under ribs 9–11.",
      "Red Pulp filters and destroys aged, rigid erythrocytes and recycles iron.",
      "White Pulp mounts immune responses against blood-borne bacteria and antigens.",
      "Stores roughly 30% of the body's platelets."
    ],
    quizQuestions: [
      {
        question: "In which functional compartment of the spleen do macrophages filter out and destroy aging, non-deformable red blood cells?",
        options: ["White Pulp", "Red Pulp", "Marginal Zone", "Central Arteriolar Sheath"],
        answer: 1,
        explanation: "The Red Pulp consists of splenic cords of Billroth and venous sinusoids, where macrophages phagocytose aged, fragile red blood cells that fail to pass through narrow endothelial slits."
      }
    ],
    relatedOrgans: ["blood", "liver", "thymus", "lymph-nodes"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 21: The Immune and Lymphatic Systems"]
  },

  {
    id: "thymus",
    slug: "thymus",
    name: "Thymus Gland",
    latinName: "Thymus",
    pronunciation: "THY-mus",
    category: "Glands and Hormones",
    systemId: "immune-lymphatic",
    relatedSystemIds: ["immune-lymphatic", "endocrine"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 50, y: 24, r: 8 },
    location: "Superior anterior mediastinum, posterior to the sternal manubrium and anterior to the great vessels of the heart and pericardium.",
    svgType: "gland",
    overview: "The thymus is a specialized primary lymphoid organ responsible for the development, differentiation, and education of T-lymphocytes (T cells) — the cornerstone of adaptive cell-mediated immunity. Highly active during infancy and childhood, it subjects developing thymocytes to rigorous educational selection before undergoing age-related involution in adulthood.",
    structure: {
      macroscopic: "Bilobed organ enclosed by a fibrous capsule. Lobes are divided by connective tissue septa into numerous microscopic Lobules (0.5-2 mm).",
      microscopic: "Each lobule consists of an outer Cortex (densely packed with proliferating immature thymocytes and cortical thymic epithelial cells [cTECs]) and an inner Medulla (sparser mature T cells, dendritic cells, medullary thymic epithelial cells [mTECs], and diagnostic concentric whorls called Hassall's corpuscles).",
      bloodThymusBarrier: "Strict endothelial and epithelial barrier in the cortex that shields developing thymocytes from circulating foreign antigens."
    },
    primaryFunctions: [
      "T cell maturation: Educates progenitor T cells (pro-T) into fully immunocompetent CD4+ Helper or CD8+ Cytotoxic T cells",
      "Positive selection: Cortical epithelial cells select thymocytes capable of recognizing the body's own Major Histocompatibility Complex (MHC) proteins",
      "Negative selection: Medullary dendritic cells and mTECs purge autoreactive T cells that bind self-antigens too strongly (preventing autoimmunity)",
      "Endocrine thymic hormone secretion: Secretes thymosin, thymopoietin, and thymulin to promote T cell immunocompetence"
    ],
    howItWorks: {
      inputs: "Progenitor T lymphocytes arriving from red bone marrow via bloodstream; AIRE gene expressing peripheral self-antigens.",
      mechanism: "1. Cortical Proliferation: Bone-marrow-derived thymocytes enter the subcapsular cortex, rearranging T-cell receptor (TCR) genes.\n2. Positive Selection (Cortex): Cortical thymic epithelial cells present self-MHC molecules. Thymocytes that recognize MHC with moderate affinity survive; those that fail undergo apoptosis ('death by neglect', ~95% eliminated).\n3. Lineage Commitment: Cells differentiate into either CD4+ (MHC Class II restricted) or CD8+ (MHC Class I restricted).\n4. Negative Selection (Medulla): Medullary mTECs use the AIRE transcription factor to express thousands of tissue-specific self-antigens (insulin, myelin, etc.). Thymocytes that react violently against self-antigens are eliminated to prevent autoimmune disease.\n5. Emigration: The surviving ~2-5% of self-tolerant, immunocompetent mature naive T cells enter circulation to populate lymph nodes and the spleen.",
      cellsInvolved: "Thymocytes (maturing T cells), Cortical/Medullary Thymic Epithelial Cells (cTECs/mTECs), Dendritic cells, Hassall's corpuscle epithelial cells.",
      outputs: "Mature, self-tolerant naive CD4+ Helper T cells and CD8+ Cytotoxic T cells into systemic circulation.",
      systemicImpact: "The essential educational crucible that enables adaptive immunity to destroy pathogens without attacking the body's own tissues."
    },
    interactions: [
      { organ: "Bone Marrow", relationship: "Receives immature T cell precursors (pro-thymocytes) produced in hematopoietic red bone marrow." },
      { organ: "Lymph Nodes", relationship: "Graduated mature, immunocompetent T cells populate the paracortex of lymph nodes throughout the body." }
    ],
    processes: ["Thymic T-Cell Positive Selection (MHC Restriction)", "Thymic Negative Selection (Central Self-Tolerance / AIRE)", "Age-Related Thymic Involution"],
    facts: [
      "The thymus is the only organ that shrinks drastically as you age; it reaches maximum relative size at puberty (approx. 35-40 grams) and subsequently undergoes involution, where functional lymphoid tissue is replaced by adipose tissue.",
      "Thymic education is brutally selective: roughly 95% to 98% of all developing T cells fail either positive or negative selection and are destroyed by apoptosis inside the thymus!"
    ],
    conditions: [
      { name: "DiGeorge Syndrome", desc: "Congenital deletion of chromosome 22q11.2 resulting in failure of third and fourth pharyngeal pouches to develop, causing thymic aplasia and profound T-cell immunodeficiency." },
      { name: "Thymoma", desc: "A tumor of thymic epithelial cells, strongly associated with systemic autoimmune conditions, particularly Myasthenia Gravis." }
    ],
    quickRevision: [
      "Primary lymphoid organ in anterior superior mediastinum responsible for T cell maturation.",
      "Positive selection in cortex: Selects for functional recognition of self-MHC.",
      "Negative selection in medulla: Destroys autoreactive T cells that attack self-antigens (AIRE gene).",
      "Only 2–5% of thymocytes survive selection to become mature naive T cells."
    ],
    quizQuestions: [
      {
        question: "What is the critical purpose of Negative Selection occurring in the thymic medulla?",
        options: ["To select cells that can bind oxygen", "To eliminate self-reactive T cells that could cause autoimmune disease", "To produce red blood cells", "To destroy bacterial cell walls directly"],
        answer: 1,
        explanation: "Negative selection tests developing thymocytes against self-antigens; cells that bind self-antigens with high affinity are triggered to undergo apoptosis, preventing autoimmune reactions."
      }
    ],
    relatedOrgans: ["lymph-nodes", "spleen", "blood"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 21: The Immune and Lymphatic Systems"]
  },

  {
    id: "lymph-nodes",
    slug: "lymph-nodes",
    name: "Lymph Nodes",
    latinName: "Nodi Lymphoidei",
    pronunciation: "LIMF nohdZ",
    category: "Internal Organs",
    systemId: "immune-lymphatic",
    relatedSystemIds: ["immune-lymphatic", "cardiovascular"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 55, y: 26, r: 6 },
    location: "Clustered along lymphatic vessels throughout the body, with dense groupings in cervical (neck), axillary (armpits), inguinal (groin), mesenteric, and mediastinal regions.",
    svgType: "gland",
    overview: "Lymph nodes are small, bean-shaped secondary lymphoid organs measuring roughly 1 to 25 mm in diameter. Numbering approximately 500 to 700 throughout the human body, they serve as in-line regional filtration checkpoints that cleanse interstitial lymph fluid of cellular debris, foreign pathogens, and cancer cells before fluid is returned to the venous circulation.",
    structure: {
      macroscopic: "Enclosed in a dense fibrous capsule with internal trabeculae. Afferent lymphatic vessels enter through the convex surface; a single Efferent vessel exits at the indented Hilum.",
      zones: "Outer Cortex (B-cell lymphoid follicles with germinal centers where antigen-activated B cells proliferate), Paracortex (deep cortex packed with T lymphocytes and High Endothelial Venules [HEVs]), and Medulla (medullary cords containing plasma cells and macrophages, separated by medullary sinuses).",
      flowPores: "Lymph flows through subcapsular sinus -> cortical sinuses -> medullary sinuses -> efferent vessel."
    },
    primaryFunctions: [
      "Lymph filtration: Reticular fibers and resident macrophages mechanically and phagocytically clear microbes and debris from lymph",
      "Adaptive immune activation: Antigen-presenting cells (dendritic cells) encounter naive T and B cells to initiate antibody responses",
      "Clonal expansion: Proliferation of pathogen-specific B cells within germinal centers into antibody-secreting plasma cells",
      "Fluid return: Directs filtered interstitial fluid into lymphatic trunks and the thoracic duct to return to the venous system"
    ],
    howItWorks: {
      inputs: "Afferent lymph loaded with interstitial antigens and dendritic cells; naive lymphocytes entering via High Endothelial Venules (HEVs).",
      mechanism: "1. Inflow: Lymph enters via multiple afferent vessels, percolating through the subcapsular sinus.\n2. Macrophage Clearance: Sinusoidal macrophages engulf and digest 99% of particulate microbes.\n3. Antigen Presentation: Dendritic cells present microbial peptides on MHC molecules to naive T cells in the paracortex.\n4. B-Cell Activation: Antigen-primed B cells migrate into follicles, forming germinal centers where somatic hypermutation and class-switch recombination generate high-affinity antibodies.\n5. Swelling: Proliferating lymphocytes cause node enlargement (lymphadenopathy).\n6. Outflow: Cleaned lymph carrying newly produced antibodies and effector lymphocytes exits via the single efferent vessel at the hilum.",
      cellsInvolved: "Dendritic cells, B lymphocytes, T lymphocytes, Plasma cells, Sinusoidal macrophages, Reticular stromal cells.",
      outputs: "Filtered, sterile lymph and circulating effector lymphocytes returned to the bloodstream.",
      systemicImpact: "The indispensable regional alert posts that detect localized infections and mobilize systemic immune defenses."
    ],
    interactions: [
      { organ: "Blood", relationship: "Filtered lymph is emptied into the subclavian veins via the thoracic duct and right lymphatic duct, restoring blood volume." },
      { organ: "Spleen", relationship: "While lymph nodes filter tissue lymph, the spleen filters the bloodstream; both share adaptive lymphocyte activation mechanisms." }
    ],
    processes: ["Lymph Filtration Mechanics", "Germinal Center B-Cell Affinity Maturation", "Lymphocyte Homing via High Endothelial Venules"],
    facts: [
      "There are more afferent lymphatic vessels bringing lymph into a node than efferent vessels carrying it away; this anatomical bottleneck slows lymph velocity inside the node, giving macrophages more time to filter out bacteria.",
      "The 'swollen glands' you feel in your neck when you have a sore throat are actually your cervical lymph nodes undergoing rapid clonal expansion of B and T lymphocytes fighting the infection!"
    ],
    conditions: [
      { name: "Lymphadenopathy", desc: "Enlargement of lymph nodes in response to local infection, systemic viral illness, or metastatic neoplastic proliferation." },
      { name: "Lymphoma (Hodgkin and Non-Hodgkin)", desc: "Malignant neoplasm of lymphoid cells originating in lymph nodes, characterized in Hodgkin lymphoma by Reed-Sternberg giant cells." }
    ],
    quickRevision: [
      "500–700 bean-shaped filtering checkpoints clustered in neck, armpits, groin, and abdomen.",
      "Multiple afferent vessels enter; a single efferent vessel exits at the hilum.",
      "Cortex houses B cells (germinal centers); Paracortex houses T cells; Medulla houses plasma cells.",
      "Filters lymph before it returns to venous blood via the thoracic duct."
    ],
    quizQuestions: [
      {
        question: "Why do lymph nodes have multiple afferent vessels entering them but only a single efferent vessel exiting at the hilum?",
        options: ["To prevent lymph from ever leaving", "To slow down fluid flow so immune cells have time to inspect and filter pathogens", "To make room for blood vessels", "To prevent swelling"],
        answer: 1,
        explanation: "Having multiple entry vessels and a single exit creates a hydraulic bottleneck, slowing lymph transit through the sinuses to maximize contact with resident macrophages and lymphocytes."
      }
    ],
    relatedOrgans: ["thymus", "spleen", "blood", "capillaries"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 21: The Immune and Lymphatic Systems"]
  },

  // ===================== ENDOCRINE SYSTEM =====================
  {
    id: "thyroid",
    slug: "thyroid-gland",
    name: "Thyroid Gland",
    latinName: "Glandula Thyroidea",
    pronunciation: "THY-royd",
    category: "Glands and Hormones",
    systemId: "endocrine",
    relatedSystemIds: ["endocrine", "cardiovascular", "nervous"],
    bodyRegion: "neck",
    view: "front",
    hotspot: { x: 50, y: 20, r: 8 },
    location: "Anterior neck, directly inferior to the thyroid cartilage of the larynx ('Adam's apple'), wrapping around the anterior and lateral surfaces of the trachea.",
    svgType: "gland",
    overview: "The thyroid is a butterfly-shaped endocrine gland weighing roughly 20 to 25 grams. As the body's primary metabolic governor, it synthesizes and secretes iodinated hormones (T4 and T3) that set the basal metabolic rate, regulate body temperature, dictate protein synthesis, and influence cardiovascular and neurological function.",
    structure: {
      macroscopic: "Consists of two lateral lobes (Right and Left) flanking the trachea, connected across the midline by a central bridge of glandular tissue called the Isthmus.",
      microscopic: "Composed of millions of microscopic spherical Thyroid Follicles lined by simple cuboidal follicular cells and filled with an amber, proteinaceous gelatinous substance called Colloid (primarily Thyroglobulin).",
      parafollicularCells: "Clear (C) cells nestled between follicles that secrete Calcitonin to reduce blood calcium."
    },
    primaryFunctions: [
      "Basal metabolic rate regulation: Increases cellular oxygen consumption, ATP turnover, and basal heat production across all tissues",
      "Thyroid hormone synthesis: Follicular cells trap inorganic iodide to synthesize Thyroxine (T4) and Triiodothyronine (T3)",
      "Cardiovascular modulation: Upregulates cardiac beta-adrenergic receptors, enhancing heart rate and myocardial contractility",
      "Neural development: Essential for normal embryonic and neonatal central nervous system myelinogenesis and cognitive maturation",
      "Calcium homeostasis: Parafollicular C cells secrete Calcitonin in response to hypercalcemia, inhibiting osteoclasts"
    ],
    howItWorks: {
      inputs: "Thyroid-Stimulating Hormone (TSH) from anterior pituitary; dietary inorganic iodide (I-).",
      mechanism: "1. Iodide Trapping: Basolateral Sodium-Iodide Symporters (NIS) actively pump iodide into follicular cells against steep gradients.\n2. Organification: Thyroid peroxidase (TPO) oxidizes iodide and couples it to tyrosine residues on thyroglobulin in the colloid, forming MIT and DIT.\n3. Coupling: TPO couples MIT and DIT into T4 (tetraiodothyronine, 90%) and T3 (triiodothyronine, 10%).\n4. Secretion: TSH stimulation induces endocytosis of colloid; lysosomes cleave thyroglobulin, releasing free T3 and T4 into the bloodstream.\n5. Peripheral Conversion: Target tissues use 5'-deiodinase enzymes to convert T4 into T3 (the 4- to 5-fold more potent receptor ligand).\n6. Nuclear Binding: T3 binds nuclear thyroid hormone receptors, stimulating transcription of Na+/K+ ATPases and metabolic enzymes.",
      cellsInvolved: "Follicular cells, Parafollicular C cells, Capillary endothelial cells.",
      outputs: "Thyroxine (T4) and Triiodothyronine (T3); Calcitonin.",
      systemicImpact: "Determines the rate at which every cell in the human body burns fuel and produces heat."
    },
    interactions: [
      { organ: "Pituitary Gland", relationship: "Regulated by anterior pituitary TSH; in turn, circulating T3/T4 exerts direct negative feedback on pituitary thyrotrophs." },
      { organ: "Heart", relationship: "Thyroid hormones upregulate beta-1 adrenergic receptors in cardiac myocytes, boosting heart rate and stroke volume." },
      { organ: "Hypothalamus", relationship: "Hypothalamic TRH stimulates the pituitary to release TSH, initiating the hypothalamic-pituitary-thyroid (HPT) axis." }
    ],
    processes: ["Thyroid Hormone Biosynthesis (Iodide Organification)", "Hypothalamic-Pituitary-Thyroid (HPT) Negative Feedback", "Basal Metabolic Thermogenesis"],
    facts: [
      "The thyroid gland is the only tissue in the entire human body capable of absorbing and utilizing iodine; every molecule of T4 contains four iodine atoms, making dietary iodized salt critical for global health.",
      "The thyroid stores several months' worth of pre-synthesized hormone inside its colloid follicles — unlike most endocrine glands, which only store a few days' reserve."
    ],
    conditions: [
      { name: "Hypothyroidism (Hashimoto's Thyroiditis)", desc: "Autoimmune destruction of thyroid follicular cells leading to low T3/T4, manifesting with fatigue, weight gain, cold intolerance, constipation, and bradycardia." },
      { name: "Hyperthyroidism (Graves' Disease)", desc: "Autoantibodies against TSH receptors (TSI) stimulate uncontrolled excess thyroid hormone production, causing weight loss, heat intolerance, tremors, and exophthalmos." }
    ],
    quickRevision: [
      "Butterfly-shaped gland in the anterior neck, consisting of two lobes connected by an isthmus.",
      "Follicles store colloid (thyroglobulin) where T3 and T4 are synthesized using dietary iodine.",
      "Primary regulator of basal metabolic rate, oxygen consumption, and cellular heat production.",
      "Parafollicular C cells produce Calcitonin to lower elevated blood calcium."
    ],
    quizQuestions: [
      {
        question: "Which essential trace element must be obtained from the diet for the thyroid gland to synthesize T3 and T4 hormones?",
        options: ["Iron", "Iodine", "Zinc", "Magnesium"],
        answer: 1,
        explanation: "Dietary iodine is indispensable for thyroid hormone synthesis; four iodine atoms are incorporated into each molecule of Thyroxine (T4) and three into Triiodothyronine (T3)."
      }
    ],
    relatedOrgans: ["pituitary", "hypothalamus", "heart"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 17: The Endocrine System"]
  },

  {
    id: "adrenal",
    slug: "adrenal-glands",
    name: "Adrenal Glands (Suprarenal Glands)",
    latinName: "Glandulae Suprarenales",
    pronunciation: "uh-DREE-nuhl (Latin: soo-pruh-ree-NAY-leez)",
    category: "Glands and Hormones",
    systemId: "endocrine",
    relatedSystemIds: ["endocrine", "nervous", "urinary", "cardiovascular"],
    bodyRegion: "abdomen",
    view: "back",
    hotspot: { x: 42, y: 44, r: 8 },
    location: "Retroperitoneal, perched like triangular hats on the superior poles of each kidney at the level of T12.",
    svgType: "gland",
    overview: "The adrenal glands are vital paired endocrine organs weighing roughly 4 to 5 grams each. Structurally and functionally partitioned into an outer glandular Adrenal Cortex and an inner neuroendocrine Adrenal Medulla, they govern long-term and acute stress responses, blood pressure, sodium-potassium balance, and metabolic mobilization.",
    structure: {
      macroscopic: "Right gland is pyramidal; Left gland is semilunar. Highly vascularized, receiving arterial blood from superior, middle, and inferior suprarenal arteries.",
      cortex: "Derived from mesoderm; represents 80-90% of gland. Divided into three concentric histological zones: Zona Glomerulosa (outer, secretes mineralocorticoids: Aldosterone), Zona Fasciculata (middle, secretes glucocorticoids: Cortisol), and Zona Reticularis (inner, secretes androgens: DHEA).",
      medulla: "Derived from neural crest ectoderm; functions as a modified sympathetic ganglion populated by chromaffin cells secreting catecholamines (Epinephrine 80%, Norepinephrine 20%)."
    },
    primaryFunctions: [
      "Electrolyte and volume balance: Aldosterone stimulates renal distal tubules to reabsorb Na+ and water while excreting K+",
      "Glucocorticoid stress adaptation: Cortisol promotes gluconeogenesis, lipolysis, protein catabolism, and anti-inflammatory pathways",
      "Acute 'Fight-or-Flight' response: Medullary epinephrine rapidly increases heart rate, dilates bronchioles, and mobilizes glucose",
      "Androgen synthesis: Produces dehydroepiandrosterone (DHEA), an androgen precursor converted peripherally to testosterone or estrogen"
    ],
    howItWorks: {
      inputs: "Adrenocorticotropic Hormone (ACTH) from pituitary; Angiotensin II and hyperkalemia; sympathetic preganglionic fibers via splanchnic nerves.",
      mechanism: "1. Mineralocorticoid Pathway: Low blood pressure triggers angiotensin II and high K+ to bind Zona Glomerulosa receptors, releasing Aldosterone to stimulate renal ENaC channels.\n2. Glucocorticoid Pathway: Stress triggers hypothalamic CRH -> pituitary ACTH -> Zona Fasciculata cortisol release. Cortisol crosses cell membranes, binding glucocorticoid receptors to upregulate gluconeogenic liver enzymes.\n3. Acute Sympathetic Surge: Perceived danger triggers sympathetic preganglionic splanchnic fibers to release acetylcholine directly onto medullary chromaffin cells.\n4. Catecholamine Exocytosis: Chromaffin cells instantly exocytose Epinephrine (80%) and Norepinephrine (20%) directly into the vena cava within seconds.",
      cellsInvolved: "Steroidogenic cortical cells (packed with lipid droplets and smooth ER), Chromaffin cells of the medulla, Endothelial cells.",
      outputs: "Steroid hormones (Aldosterone, Cortisol, DHEA); Catecholamines (Epinephrine, Norepinephrine).",
      systemicImpact: "Enables immediate survival during physical threat and sustains metabolic resilience during prolonged physiological stress."
    },
    interactions: [
      { organ: "Kidneys", relationship: "Sit directly on kidneys; adrenal aldosterone acts directly on renal collecting ducts to regulate blood volume and sodium/potassium balance." },
      { organ: "Hypothalamus", relationship: "Forms the Hypothalamic-Pituitary-Adrenal (HPA) axis; cortisol exerts negative feedback on hypothalamic CRH secretion." },
      { organ: "Heart", relationship: "Adrenal epinephrine binds beta-1 receptors to dramatically boost heart rate and cardiac output during fight-or-flight emergencies." }
    ],
    processes: ["HPA Axis Stress Cascades", "Renin-Angiotensin-Aldosterone Mineralocorticoid Axis", "Sympathomedullary (SAM) Fight-or-Flight Activation"],
    facts: [
      "The adrenal medulla is essentially an overgrown, specialized sympathetic ganglion whose neurons lost their axons and transformed into secretory chromaffin cells that dump neurotransmitters directly into the bloodstream as hormones.",
      "Cortisol follows a powerful circadian rhythm: it spikes to its highest peak within 30 to 45 minutes of waking up (the Cortisol Awakening Response) to energize your body for the day, then steadily declines toward midnight."
    ],
    conditions: [
      { name: "Cushing's Syndrome", desc: "Chronic excess cortisol levels resulting from adrenal adenomas or pituitary ACTH hypersecretion, causing central obesity, moon facies, buffalo hump, and hypertension." },
      { name: "Addison's Disease (Primary Adrenal Insufficiency)", desc: "Autoimmune destruction of the adrenal cortex causing deficiency of both cortisol and aldosterone, leading to severe fatigue, hypotension, and hyperpigmentation." }
    ],
    quickRevision: [
      "Paired glands perched atop kidneys, divided into Cortex (steroids) and Medulla (catecholamines).",
      "Cortex zones: Glomerulosa (Aldosterone), Fasciculata (Cortisol), Reticularis (Androgens) - 'GFR'.",
      "Medulla chromaffin cells act as modified sympathetic neurons releasing Epinephrine and Norepinephrine.",
      "Aldosterone retains sodium and water; Cortisol mobilizes glucose and moderates inflammation."
    ],
    quizQuestions: [
      {
        question: "Which zone of the adrenal cortex is responsible for secreting the glucocorticoid hormone Cortisol?",
        options: ["Zona Glomerulosa", "Zona Fasciculata", "Zona Reticularis", "Adrenal Medulla"],
        answer: 1,
        explanation: "The Zona Fasciculata, the thick middle layer of the adrenal cortex, is stimulated by ACTH to synthesize and secrete glucocorticoids, primarily Cortisol."
      }
    ],
    relatedOrgans: ["kidneys", "hypothalamus", "pituitary", "heart"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 17: The Endocrine System"]
  },

  // ===================== INTEGUMENTARY SYSTEM =====================
  {
    id: "skin",
    slug: "skin-integumentary",
    name: "Skin (Epidermis & Dermis)",
    latinName: "Cutis / Integumentum",
    pronunciation: "skin (Latin: KYOO-tis)",
    category: "External Body Parts",
    systemId: "integumentary",
    relatedSystemIds: ["integumentary", "immune-lymphatic", "nervous"],
    bodyRegion: "chest",
    view: "front",
    hotspot: { x: 26, y: 38, r: 14 },
    location: "External covering enveloping the entire surface of the human body.",
    svgType: "skin",
    overview: "Weighing roughly 4 to 5 kg (8-11 lbs) and covering a surface area of 1.5 to 2.0 square meters in an adult, the skin is the largest organ of the human body. As the body's first line of physical defense, it provides an impermeable barrier against pathogens, chemicals, and mechanical trauma, while directing thermoregulation, cutaneous sensation, and Vitamin D synthesis.",
    structure: {
      macroscopic: "Consists of two primary structural layers: Epidermis (outer epithelial layer) and Dermis (underlying dense vascular connective tissue layer), supported by the Hypodermis (subcutaneous adipose layer).",
      epidermis: "Stratified squamous keratinized epithelium organized into 4-5 layers: Stratum Basale (dividing stem cells), Stratum Spinosum, Stratum Granulosum, Stratum Lucidum (thick skin of palms/soles only), and Stratum Corneum (20-30 layers of dead, anucleate, keratin-filled corneocytes).",
      dermis: "Tough, flexible connective tissue divided into Papillary Dermis (areolar tissue with dermal papillae) and Reticular Dermis (dense irregular connective tissue packed with thick collagen type I and elastin fibers, hair follicles, sebaceous glands, and sweat glands)."
    },
    primaryFunctions: [
      "Physical and chemical barrier: Keratin and intercellular lipid lamellae prevent pathogen entry and bodily water desiccation",
      "Thermoregulation: Millions of eccrine sweat glands dissipate heat via evaporative cooling; dermal capillary beds constrict or dilate",
      "Sensory perception: Dense receptor network detects light touch (Meissner corpuscles), vibration (Pacinian corpuscles), and pain/temperature (free nerve endings)",
      "Photochemical Vitamin D synthesis: Epidermal 7-dehydrocholesterol absorbs solar UV-B radiation to convert into cholecalciferol (Vitamin D3)",
      "Excretion: Secretes small amounts of metabolic wastes (urea, salts, ammonia) through sweat"
    ],
    howItWorks: {
      inputs: "External environmental physical contact, ambient temperature, UV-B radiation; autonomic sympathetic vasomotor signals.",
      mechanism: "1. Cellular Renewal: Basal keratinocytes in the Stratum Basale divide continuously via mitosis. As daughter cells are pushed upward, they accumulate keratin and lipid envelopes.\n2. Desquamation: After roughly 28-30 days, cells reach the Stratum Corneum as dead, waterproof squames and shed continuously.\n3. Thermoregulatory Cooling: When core body temperature rises, sympathetic cholinergic nerves stimulate eccrine glands to secrete watery sweat while dermal arterioles dilate, radiating heat outward.\n4. Photoprotection: Keratinocytes exposed to UV radiation trigger melanocytes to synthesize melanin pigment, packaging it into melanosomes transferred as 'sun umbrellas' over keratinocyte nuclei to protect DNA.",
      cellsInvolved: "Keratinocytes (90%), Melanocytes (pigment), Langerhans cells (epidermal dendritic immune cells), Merkel cells (mechanoreceptors), Dermal Fibroblasts.",
      outputs: "Sweat, sebum (lubricating oil), Vitamin D3 precursor, and continuous mechanical barrier protection.",
      systemicImpact: "Guards internal homeostatic fluid constancy and protects all delicate deeper organs from the harsh external world."
    },
    interactions: [
      { organ: "Immune System", relationship: "Epidermal Langerhans cells capture external microbial antigens and migrate to regional lymph nodes to prime T lymphocytes." },
      { organ: "Nervous System", relationship: "Innervated by millions of somatic sensory endings reporting touch, temperature, and nociceptive pain directly to the brain." },
      { organ: "Kidneys / Liver", relationship: "Skin synthesizes cholecalciferol (Vitamin D3), which must be hydroxylated first by the liver and then by the kidneys to become biologically active." }
    ],
    processes: ["Keratinization and Epidermal Turnover", "Eccrine Thermoregulatory Sweating", "Cutaneous Melanogenesis Photoprotection"],
    facts: [
      "You shed roughly 30,000 to 40,000 dead skin cells from your body every single minute — amounting to about 4 kilograms (nearly 9 pounds) of shed skin cells every year!",
      "The skin on your eyelids is the thinnest on your body (less than 0.5 mm thick), while the skin on the palms of your hands and soles of your feet is the thickest (up to 4 mm thick) with an extra epidermal layer called the stratum lucidum."
    ],
    conditions: [
      { name: "Melanoma", desc: "Malignant neoplasm of melanocytes, highly aggressive and invasive, strongly linked to acute, blistering ultraviolet radiation exposure." },
      { name: "Psoriasis", desc: "Chronic autoimmune skin disorder characterized by hyperproliferation of keratinocytes (turnover drops from 28 days to 4 days), producing erythematous scaly plaques." }
    ],
    quickRevision: [
      "Largest organ of the body, covering 1.5–2.0 m² and weighing 4–5 kg.",
      "Epidermis (avascular stratified keratinized epithelium) + Dermis (vascular fibrous connective tissue) + Hypodermis (adipose).",
      "Keratinocytes renew every 28–30 days from stratum basale outward to stratum corneum.",
      "Primary functions: Protection, thermoregulation, sensory perception, and Vitamin D synthesis."
    ],
    quizQuestions: [
      {
        question: "In which layer of the epidermis do active stem cell mitotic divisions occur to continuously replace shed skin cells?",
        options: ["Stratum Corneum", "Stratum Granulosum", "Stratum Basale", "Stratum Spinosum"],
        answer: 2,
        explanation: "The Stratum Basale (stratum germinativum) is the deepest, single-cell layer of the epidermis resting on the basement membrane, where stem cells divide continuously."
      }
    ],
    relatedOrgans: ["lymph-nodes", "liver", "kidneys"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 5: The Integumentary System"]
  },

  // ===================== SPECIAL SENSES =====================
  {
    id: "eyes",
    slug: "eyes-vision",
    name: "Eyes (Vision)",
    latinName: "Oculi",
    pronunciation: "IYZ (Latin: OK-yoo-ly)",
    category: "Sense Organs",
    systemId: "special-senses",
    relatedSystemIds: ["special-senses", "nervous"],
    bodyRegion: "head",
    view: "front",
    hotspot: { x: 47, y: 10, r: 6 },
    location: "Bilateral bony orbits of the facial skeleton, cushioned by retrobulbar adipose tissue and manipulated by six extraocular muscles.",
    svgType: "eye",
    overview: "The human eye is a biological optical sensor roughly 24 millimeters in diameter that collects, focuses, and converts electromagnetic light rays (wavelengths 380 to 750 nm) into electro-chemical nerve impulses. Processing approximately 80% of all sensory information we absorb, the eye projects high-resolution images onto the neural retina for transmission to the visual cortex.",
    structure: {
      tunics: "Three anatomical coats: Fibrous Tunic (outer: clear Cornea and white Sclera), Vascular Tunic / Uvea (middle: Choroid, Ciliary Body, and pigmented Iris surrounding the Pupil), and Sensory Tunic (inner: Retina).",
      opticalMedia: "Light traverses Cornea -> Anterior Chamber (aqueous humor) -> Pupil -> Crystalline Lens -> Vitreous Chamber (vitreous humor) -> Retina.",
      retina: "Multilayered neural sheet containing photoreceptors: Rods (approx. 120 million, high light sensitivity, monochromatic night vision) and Cones (approx. 6 million, color vision, concentrated in the Fovea Centralis of the Macula Lutea)."
    },
    primaryFunctions: [
      "Phototransduction: Photoreceptors convert photons of light into changes in membrane potential via rhodopsin and photopsin opsins",
      "Optical refraction: Cornea (provides 2/3 of refractive power) and adjustable Lens focus sharp images onto the retina",
      "Accommodation: Ciliary muscle contracts to alter lens curvature for near versus distant visual focus",
      "Aperture regulation: Pupillary sphincter and dilator muscles adjust pupil diameter to regulate light entering the eye",
      "Spatial color and depth resolution: Projects binocular, chromatic visual fields to primary visual cortex"
    ],
    howItWorks: {
      inputs: "Visible light photons (380-750 nm); autonomic sympathetic (pupil dilation) and parasympathetic (constriction and accommodation) nerves.",
      mechanism: "1. Refraction: Light rays bend as they pass through the curved cornea and lens, projecting an inverted, reversed image onto the retina.\n2. Photopigment Isomerization: In the dark, photoreceptors continuously release glutamate. A photon strikes 11-cis-retinal inside Rhodopsin, isomerizing it into all-trans-retinal.\n3. Transducin Cascade: Activated rhodopsin stimulates transducin, activating phosphodiesterase (PDE) which degrades cGMP.\n4. Hyperpolarization: cGMP-gated Na+ channels close; photoreceptor hyperpolarizes from -40 mV to -70 mV, decreasing inhibitory glutamate release.\n5. Bipolar & Ganglion Firing: Bipolar cells depolarize, exciting Retinal Ganglion Cells (RGCs) whose myelinated axons bundle to form the Optic Nerve (CN II).\n6. Cortical Processing: Impulses travel via optic chiasm and optic radiations to the occipital primary visual cortex.",
      cellsInvolved: "Rods, Cones (S, M, L cones for blue, green, red), Bipolar cells, Horizontal cells, Amacrine cells, Retinal Ganglion Cells, Pigment epithelial cells.",
      outputs: "1.2 Million optic nerve fibers transmitting visual impulses to the thalamus (LGN) and visual cortex.",
      systemicImpact: "The primary sensory channel providing spatial navigation, object recognition, and social visual communication."
    },
    interactions: [
      { organ: "Brain", relationship: "Transmits electrical signals directly via Optic Nerves (CN II) through the optic chiasm to the occipital visual cortex." },
      { organ: "Hypothalamus", relationship: "Specialized melanopsin-containing ganglion cells project directly to the suprachiasmatic nucleus to set circadian rhythms." }
    ],
    processes: ["Phototransduction Biochemical Cascade", "Pupillary Light Reflex Arc", "Ciliary Muscle Lens Accommodation"],
    facts: [
      "The photoreceptors in your retina are actually hyperpolarized (turned 'off') by light! In absolute darkness, rods and cones are continuously depolarized and actively dumping neurotransmitter.",
      "The fovea centralis, a tiny pit in the center of your macula only 1.5 mm across, contains exclusively packed cones with zero overlying blood vessels, giving you nearly 100% of your sharpest, detailed color vision."
    ],
    conditions: [
      { name: "Cataracts", desc: "Progressive opacification and clouding of the crystalline lens caused by protein aggregation, resulting in blurred vision and glare." },
      { name: "Glaucoma", desc: "Elevated intraocular pressure resulting from impaired aqueous humor drainage through the trabecular meshwork, causing progressive optic nerve damage." }
    ],
    quickRevision: [
      "Optical apparatus composed of three tunics: Fibrous (cornea/sclera), Vascular (uvea/choroid/iris), and Neural (retina).",
      "Light passes cornea, pupil, lens, vitreous humor to focus on the retina.",
      "Rods (~120M) provide night/peripheral vision; Cones (~6M) provide high-acuity color vision concentrated in the fovea.",
      "Phototransduction converts light photons into electrical impulses conducted along Optic Nerve (CN II)."
    ],
    quizQuestions: [
      {
        question: "Which region of the retina contains the highest density of cone photoreceptors and provides maximum visual acuity?",
        options: ["Optic Disc", "Fovea Centralis (in Macula)", "Peripheral Retina", "Ciliary Body"],
        answer: 1,
        explanation: "The Fovea Centralis, situated in the center of the macula lutea, contains exclusively densely packed cone photoreceptors and no overlying blood vessels, providing our sharpest color vision."
      }
    ],
    relatedOrgans: ["brain", "special-senses"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 15: The Special Senses"]
  },

  {
    id: "ears",
    slug: "ears-audition-vestibular",
    name: "Ears (Hearing & Vestibular System)",
    latinName: "Aures",
    pronunciation: "EERZ (Latin: OW-rehz)",
    category: "Sense Organs",
    systemId: "special-senses",
    relatedSystemIds: ["special-senses", "nervous"],
    bodyRegion: "head",
    view: "front",
    hotspot: { x: 42, y: 11, r: 6 },
    location: "Bilateral petrous portions of the temporal bone of the skull.",
    svgType: "ear",
    overview: "The human ear is a master transducer housing two distinct sensory systems in one organ: the auditory system for hearing acoustic pressure waves (20 to 20,000 Hz) and the vestibular system for detecting head rotation, linear acceleration, and gravity to preserve balance and equilibrium.",
    structure: {
      externalEar: "Auricle / Pinna and External Acoustic Meatus (ear canal) terminating at the translucent Tympanic Membrane (eardrum).",
      middleEar: "Air-filled tympanic cavity containing the three smallest bones in the human body (Auditory Ossicles: Malleus, Incus, Stapes), connected to the nasopharynx by the Eustachian Tube.",
      innerEar: "Fluid-filled Bony and Membranous Labyrinths: Cochlea (snail-shaped organ containing the spiral Organ of Corti with hair cells) for hearing; and Semicircular Canals, Utricle, and Saccule for balance."
    },
    primaryFunctions: [
      "Acoustic mechano-transduction: Converts sound pressure waves in air into fluid waves and electro-chemical action potentials",
      "Impedance matching: Ossicles amplify sound pressure 22-fold from low-resistance air to high-resistance cochlear perilymph",
      "Frequency tonotopy: Basilar membrane maps sound frequencies (high pitches at the stiff base; low pitches at the flexible apex)",
      "Dynamic equilibrium: Crista ampullaris hair cells in three semicircular canals sense angular head rotation",
      "Static equilibrium: Otolith organs (utricle and saccule) sense linear acceleration and gravitational orientation"
    ],
    howItWorks: {
      inputs: "Airborne sound pressure vibrations (20-20,000 Hz); rotational and gravitational accelerations.",
      mechanism: "1. Sound Capture: Pinna funnels sound down the external acoustic canal, vibrating the tympanic membrane.\n2. Ossicular Lever: Malleus, incus, and stapes vibrate, pushing the stapes footplate into the oval window of the cochlea.\n3. Fluid Waves: Hydraulic waves travel through perilymph in scala vestibuli, deflecting the flexible basilar membrane.\n4. Hair Cell Shearing: Basilar membrane displacement shears stereocilia against the overlying tectorial membrane.\n5. Tip-Link Depolarization: Stereocilia deflection pulls mechanical tip-links open, flooding hair cells with K+ from endolymph, depolarizing the cell.\n6. Nerve Transmission: Voltage-gated Ca2+ channels open, releasing glutamate onto spiral ganglion neurons forming the Cochlear Nerve (CN VIII).",
      cellsInvolved: "Inner Hair Cells (auditory transducers), Outer Hair Cells (cochlear amplifiers), Vestibular hair cells, Supporting pillar cells.",
      outputs: "Auditory action potentials to auditory cortex; vestibular signals to brainstem and cerebellum.",
      systemicImpact: "Enables spoken language comprehension, auditory environmental awareness, and stable gaze/postural balance."
    },
    interactions: [
      { organ: "Brain", relationship: "Transmits acoustic data via Cochlear Nerve (CN VIII) through the brainstem to the temporal primary auditory cortex." },
      { organ: "Cerebellum", relationship: "Vestibular signals from semicircular canals and otolith organs project to the cerebellum to coordinate posture and balance." }
    ],
    processes: ["Cochlear Tonotopic Frequency Tuning", "Hair Cell Stereocilia Tip-Link Mechanotransduction", "Vestibulo-Ocular Reflex (VOR)"],
    facts: [
      "The three auditory ossicles in your middle ear (Malleus/Hammer, Incus/Anvil, and Stapes/Stirrup) are the smallest bones in the human body; the stapes is barely 3 mm long and weighs only about 3 milligrams!",
      "The hair cells that detect sound in your inner ear do not regenerate in humans; once loud noise or aging destroys them, the resulting sensorineural hearing loss is permanent."
    ],
    conditions: [
      { name: "Sensorineural Hearing Loss", desc: "Permanent auditory impairment caused by damage to cochlear inner hair cells or the auditory nerve, commonly from acoustic trauma or aging (presbycusis)." },
      { name: "Benign Paroxysmal Positional Vertigo (BPPV)", desc: "Transient spinning vertigo caused by dislodged calcium carbonate otoliths (otoconia) migrating into the posterior semicircular canal." }
    ],
    quickRevision: [
      "Divided into External, Middle (air-filled with ossicles), and Inner (fluid-filled labyrinth) compartments.",
      "Auditory ossicles (Malleus, Incus, Stapes) amplify airborne vibrations into cochlear fluid waves.",
      "Organ of Corti hair cells convert fluid displacement into electrical signals via tip-links.",
      "Vestibular system (Semicircular canals + Utricle/Saccule) detects head rotation, gravity, and acceleration."
    ],
    quizQuestions: [
      {
        question: "What is the name of the snail-shaped, fluid-filled organ in the inner ear that houses the auditory receptor Organ of Corti?",
        options: ["Semicircular Canal", "Utricle", "Cochlea", "Tympanic Cavity"],
        answer: 2,
        explanation: "The Cochlea is the coiled, snail-shaped bony structure of the inner ear containing the Organ of Corti, where sound waves are transduced into neural action potentials."
      }
    ],
    relatedOrgans: ["brain", "cerebellum", "special-senses"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 15: The Special Senses"]
  },

  // ===================== REPRODUCTIVE =====================
  {
    id: "ovaries-testes",
    slug: "gonads-reproductive",
    name: "Gonads (Ovaries & Testes)",
    latinName: "Gonades (Ovaria et Testes)",
    pronunciation: "GOH-nadz",
    category: "Glands and Hormones",
    systemId: "reproductive",
    relatedSystemIds: ["reproductive", "endocrine"],
    bodyRegion: "pelvis",
    view: "front",
    hotspot: { x: 50, y: 68, r: 10 },
    location: "Female Ovaries: Bilateral peritoneal pelvic cavity on lateral pelvic walls; Male Testes: Suspended externally within the cutaneous Scrotum outside the abdominopelvic cavity.",
    svgType: "gland",
    overview: "The gonads are the primary reproductive and sex-steroid endocrine organs. In females, paired ovaries produce haploid ova (egg cells) and secrete estrogen and progesterone to govern menstrual cycles and gestation; in males, paired testes produce hundreds of millions of haploid spermatozoa daily and synthesize testosterone.",
    structure: {
      ovaries: "Almond-shaped organs (3-4 cm) enclosed by tunica albuginea. Outer cortex contains developing ovarian follicles at various stages (primordial, primary, secondary, mature Graafian) surrounding oocytes; inner vascular medulla.",
      testes: "Oval organs (4-5 cm) suspended in scrotum (maintaining ~34°C, 2-3°C below core body temperature for viable spermatogenesis). Divided into 250 lobules containing tightly coiled Seminiferous Tubules (site of spermatogenesis) lined by supportive Sertoli cells and interstitial Leydig cells (testosterone).",
      hormones: "Regulated by anterior pituitary gonadotropins: Luteinizing Hormone (LH) and Follicle-Stimulating Hormone (FSH)."
    },
    primaryFunctions: [
      "Gametogenesis: Meiotic reduction division producing haploid gametes (spermatozoa and ova) carrying 23 chromosomes",
      "Sex steroid synthesis: Produces Testosterone (Leydig cells), Estrogens (estradiol, granulosa cells), and Progesterone (corpus luteum)",
      "Secondary sexual characteristics: Estrogens and testosterone drive puberty, voice pitch, hair patterns, and skeletal dimorphism",
      "Menstrual and reproductive cycle governance: Orchestrates follicular maturation, ovulation, and endometrial preparation for implantation"
    ],
    howItWorks: {
      inputs: "Gonadotropin-Releasing Hormone (GnRH) pulses from hypothalamus; FSH and LH from anterior pituitary.",
      mechanism: "1. Male Axis: Pituitary LH stimulates Leydig cells to synthesize Testosterone; FSH stimulates Sertoli cells to nourish developing spermatocytes through meiosis inside seminiferous tubules (taking ~64-72 days).\n2. Female Follicular Phase: Pituitary FSH stimulates a cohort of ovarian follicles to grow and secrete Estradiol.\n3. Ovulation Trigger: Rising estradiol crosses a threshold, triggering a massive positive-feedback LH surge from the pituitary. The dominant Graafian follicle ruptures, releasing a secondary oocyte into the peritoneal cavity (ovulation).\n4. Luteal Phase: The ruptured follicle transforms into the glandular Corpus Luteum, secreting large quantities of Progesterone and Estrogen to prepare the uterine endometrium for pregnancy.",
      cellsInvolved: "Spermatogonia, Sertoli (nurse) cells, Leydig (interstitial) cells; Oogonia, Granulosa cells, Theca cells, Corpus Luteum luteal cells.",
      outputs: "Motile spermatozoa and viable ova; systemic circulating testosterone, estrogens, and progesterone.",
      systemicImpact: "Enables genetic inheritance, biological species reproduction, and maintenance of bone density and muscle mass."
    },
    interactions: [
      { organ: "Pituitary Gland", relationship: "Regulated by LH and FSH via the Hypothalamic-Pituitary-Gonadal (HPG) negative and positive feedback axes." },
      { organ: "Hypothalamus", relationship: "Hypothalamic pulsatile GnRH release drives all downstream gonadal activity; sex steroids feed back to regulate GnRH frequency." }
    ],
    processes: ["Spermatogenesis and Oogenesis Meiotic Cascades", "Ovarian Cycle (Follicular and Luteal Phases)", "Hypothalamic-Pituitary-Gonadal (HPG) Feedback Loop"],
    facts: [
      "The human ovum (egg cell) produced by the ovary is roughly 120 micrometers in diameter — the single largest cell in the human body, just barely visible to the naked human eye!",
      "Testes reside outside the abdominal cavity in the scrotum because normal human spermatogenesis requires an operating temperature roughly 2 to 3°C cooler than core body temperature."
    ],
    conditions: [
      { name: "Polycystic Ovary Syndrome (PCOS)", desc: "Endocrine disorder characterized by chronic anovulation, hyperandrogenism, and enlarged ovaries with multiple subcapsular follicular cysts." },
      { name: "Testicular Torsion", desc: "Twisting of the spermatic cord obstructing testicular arterial blood supply, presenting as acute scrotal pain requiring emergent surgical detorsion." }
    ],
    quickRevision: [
      "Primary reproductive organs: Ovaries (females) and Testes (males).",
      "Produce haploid gametes (ova and sperm) via meiosis with 23 chromosomes.",
      "Regulated by anterior pituitary hormones LH (steroid synthesis) and FSH (gamete maturation).",
      "Testes require 34°C (scrotum) for viable spermatogenesis; Ovaries undergo cyclic follicular and luteal phases."
    ],
    quizQuestions: [
      {
        question: "A dramatic surge in which anterior pituitary hormone directly triggers ovulation (the rupture of the dominant ovarian follicle)?",
        options: ["Prolactin", "Follicle-Stimulating Hormone (FSH)", "Luteinizing Hormone (LH)", "Oxytocin"],
        answer: 2,
        explanation: "A massive surge in Luteinizing Hormone (LH), triggered by peak estrogen positive feedback, causes the mature Graafian follicle to rupture and release the secondary oocyte."
      }
    ],
    relatedOrgans: ["pituitary", "hypothalamus"],
    references: ["OpenStax Anatomy and Physiology 2e, Chapter 27: The Reproductive System"]
  }
];

// Export to global scope
window.ORGANS_DATA = ORGANS_DATA;
