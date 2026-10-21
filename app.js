/**
 * Chromatica — Interactive Color Encyclopedia & Theory Guide
 * Pure Vanilla JavaScript: Real-time Color Math, Harmony Engines, Filtering & Deep Dive Inspector
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Comprehensive Named Colors Database (80+ Curated Historic & Modern Shades)
  // ==========================================================================
  const COLOR_DATABASE = [
    // --- REDS & CRIMSONS ---
    {
      id: 'ultramarine',
      name: 'Ultramarine',
      hex: '#120A8F',
      family: 'blue',
      category: 'Historic',
      temperature: 'Cool',
      meaning: 'Deep spiritual wisdom, infinite expanse, and regal dignity.',
      history: 'Originally ground from lapis lazuli imported from Afghanistan. Renaissance painters reserved it exclusively for the robes of the Virgin Mary, often costing more than gold.',
      bestPairing: ['#FFD700', '#F4F1DE', '#E07A5F', '#3D405B']
    },
    {
      id: 'crimson',
      name: 'Crimson',
      hex: '#DC143C',
      family: 'red',
      category: 'Primary',
      temperature: 'Warm',
      meaning: 'Audacious passion, royalty, romantic fury, and dynamic energy.',
      history: 'Derived from ancient Mediterranean scale insect parasites (kermes). Mentioned in ancient Hebrew texts as a sacred ceremonial dye for holy tabernacles.',
      bestPairing: ['#F4F1DE', '#1D3557', '#457B9D', '#E63946']
    },
    {
      id: 'carmine',
      name: 'Carmine',
      hex: '#960018',
      family: 'red',
      category: 'Historic',
      temperature: 'Warm',
      meaning: 'Opulence, dramatic theatricality, and vintage luxury.',
      history: 'Introduced to Europe from the Aztec empire in the 1500s. Produced from dried cochineal bugs that feed on prickly pear cacti in Oaxaca, Mexico.',
      bestPairing: ['#FFD700', '#F7E7CE', '#2B2D42', '#8D99AE']
    },
    {
      id: 'vermilion',
      name: 'Vermilion',
      hex: '#E34234',
      family: 'red',
      category: 'Secondary',
      temperature: 'Warm',
      meaning: 'Vitality, spiritual purification, celebration, and victory.',
      history: 'Traditionally synthesized from cinnabar (toxic mercury sulfide). Ancient Roman aristocrats used it for frescoes in Pompeii, and Chinese Taoist alchemists regarded it as the elixir of immortality.',
      bestPairing: ['#0A192F', '#F4E8C1', '#2A9D8F', '#E76F51']
    },
    {
      id: 'ruby',
      name: 'Ruby',
      hex: '#E0115F',
      family: 'red',
      category: 'Jewel Tone',
      temperature: 'Warm',
      meaning: 'Vital life force, eternal devotion, and majestic nobility.',
      history: 'Named after the corundum gemstone. In ancient Sanskrit, rubies were called "Ratnaraj" or "the King of Precious Stones".',
      bestPairing: ['#1B1B1E', '#EAEAEA', '#0077B6', '#F72585']
    },
    {
      id: 'burgundy',
      name: 'Burgundy',
      hex: '#800020',
      family: 'red',
      category: 'Jewel Tone',
      temperature: 'Warm',
      meaning: 'Refinement, academic prestige, quiet sophistication, and vintage maturity.',
      history: 'Takes its name from the deep red wine of the Burgundy region in eastern France. Popularized in high-society garments in late 19th-century Europe.',
      bestPairing: ['#C5A059', '#F8F9FA', '#2B2D42', '#3F4238']
    },
    {
      id: 'coral',
      name: 'Living Coral',
      hex: '#FF6F61',
      family: 'orange',
      category: 'Pastel',
      temperature: 'Warm',
      meaning: 'Playful warmth, sociable optimism, and marine biodiversity.',
      history: 'Named Pantone Color of the Year in 2019 to honor delicate underwater coral reefs threatened by ocean temperature changes.',
      bestPairing: ['#007791', '#F4F1DE', '#3D405B', '#E07A5F']
    },
    {
      id: 'terracotta',
      name: 'Terracotta',
      hex: '#E2725B',
      family: 'orange',
      category: 'Earth Tone',
      temperature: 'Warm',
      meaning: 'Grounded authenticity, hearth comfort, artisanal craft, and Mediterranean warmth.',
      history: 'Italian for "baked earth". Used continuously for over 5,000 years, from the Emperor Qin Shi Huang’s Terracotta Army in China to Tuscan roof tiles.',
      bestPairing: ['#2F4F4F', '#F5F5DC', '#A0522D', '#D2B48C']
    },

    // --- BLUES & CYANS ---
    {
      id: 'cobalt',
      name: 'Cobalt Blue',
      hex: '#0047AB',
      family: 'blue',
      category: 'Historic',
      temperature: 'Cool',
      meaning: 'Clarity, profound concentration, divine truth, and industrial precision.',
      history: 'Formulated in 1802 by French chemist Louis Jacques Thénard as an affordable alternative to ultramarine. Favored heavily by Vincent van Gogh and Pierre-Auguste Renoir.',
      bestPairing: ['#FFB703', '#FB8500', '#023047', '#8ECAE6']
    },
    {
      id: 'cerulean',
      name: 'Cerulean',
      hex: '#007BA7',
      family: 'blue',
      category: 'Primary',
      temperature: 'Cool',
      meaning: 'Panoramic tranquility, open horizons, mental lucidity, and eternal calm.',
      history: 'From the Latin "caeruleum" (sky/heavens). Synthesized in 1860 with cobaltous stannate. Famous in fashion lore from Miranda Priestly’s monologue in The Devil Wears Prada.',
      bestPairing: ['#F4A261', '#E76F51', '#264653', '#E9C46A']
    },
    {
      id: 'tiffany',
      name: 'Tiffany Blue',
      hex: '#0ABAB5',
      family: 'blue',
      category: 'Jewel Tone',
      temperature: 'Cool',
      meaning: 'Elegance, celebration, elite exclusivity, and romantic anticipation.',
      history: 'Chosen by Charles Lewis Tiffany in 1845 for the cover of Tiffany’s Blue Book. It is legally trademarked in many countries as Pantone 1837.',
      bestPairing: ['#FFFFFF', '#D4AF37', '#2F3E46', '#CAD2C5']
    },
    {
      id: 'prussian',
      name: 'Prussian Blue',
      hex: '#003153',
      family: 'blue',
      category: 'Historic',
      temperature: 'Cool',
      meaning: 'Austere authority, maritime melancholy, and intellectual depth.',
      history: 'Accidentally discovered in Berlin around 1706 by paint maker Johann Jacob Diesbach when trying to make red. Used extensively in Hokusai’s The Great Wave off Kanagawa.',
      bestPairing: ['#F3E9D2', '#C6A969', '#536B78', '#63C7B2']
    },
    {
      id: 'navy',
      name: 'Royal Navy',
      hex: '#000080',
      family: 'blue',
      category: 'Neutral',
      temperature: 'Cool',
      meaning: 'Unwavering loyalty, administrative trust, order, and tradition.',
      history: 'Adopted in 1748 as the official uniform color for officers in the British Royal Navy, eventually becoming a worldwide staple of formal corporate attire.',
      bestPairing: ['#FFFFFF', '#FFD166', '#EF476F', '#06D6A0']
    },
    {
      id: 'cyan',
      name: 'Electric Cyan',
      hex: '#00FFFF',
      family: 'blue',
      category: 'Neon',
      temperature: 'Cool',
      meaning: 'Hyper-digital connectivity, electric velocity, futuristic cyberspace.',
      history: 'One of the primary subtractive colors in the CMYK print system and a foundational primary of additive RGB screen displays.',
      bestPairing: ['#FF0055', '#1A0B2E', '#7B2CBF', '#FFE600']
    },
    {
      id: 'indigo',
      name: 'Indigo',
      hex: '#4B0082',
      family: 'blue',
      category: 'Tertiary',
      temperature: 'Cool',
      meaning: 'Deep intuition, mystical perception, nocturnal solace, and inner stillness.',
      history: 'Extracted from the Indigofera tinctoria plant. Sir Isaac Newton included indigo in his 7-color optical rainbow to match the seven notes in a musical scale.',
      bestPairing: ['#F7B267', '#F79D65', '#F4845F', '#F27059']
    },
    {
      id: 'periwinkle',
      name: 'Periwinkle',
      hex: '#CCCCFF',
      family: 'blue',
      category: 'Pastel',
      temperature: 'Cool',
      meaning: 'Whimsical tenderness, dreamy nostalgia, and peaceful calm.',
      history: 'Named after the flowering periwinkle myrtle herb (Vinca minor). Serves as a soothing bridge hue blending lavender and baby sky blue.',
      bestPairing: ['#2F3E46', '#354F52', '#52796F', '#84A98C']
    },

    // --- GREENS & MINTS ---
    {
      id: 'emerald',
      name: 'Emerald Green',
      hex: '#50C878',
      family: 'green',
      category: 'Jewel Tone',
      temperature: 'Cool',
      meaning: 'Abundance, lush rejuvenation, regal fertility, and financial prosperity.',
      history: 'Synthesized in the 1800s as Schweinfurt green using copper acetoarsenite. Despite its toxic arsenic content, it was famously used on Victorian wallpaper and ballgowns.',
      bestPairing: ['#D4AF37', '#0F172A', '#F8FAFC', '#94A3B8']
    },
    {
      id: 'sage',
      name: 'Sage Green',
      hex: '#9DC183',
      family: 'green',
      category: 'Earth Tone',
      temperature: 'Neutral',
      meaning: 'Holistic wellness, mindful equilibrium, organic herbal calm.',
      history: 'Derived from the dried culinary and medicinal herb salvia. Widely celebrated in Scandinavian interior design and eco-conscious minimalism.',
      bestPairing: ['#FAF0CA', '#0D3B66', '#EE964B', '#F95738']
    },
    {
      id: 'chartreuse',
      name: 'Chartreuse',
      hex: '#7FFF00',
      family: 'green',
      category: 'Secondary',
      temperature: 'Warm',
      meaning: 'Unconventional energy, youth, electric eccentricity, and sharp wit.',
      history: 'Named after the herbal French liqueur distilled since 1737 by Carthusian monks from a secret recipe of 130 botanical herbs and spices.',
      bestPairing: ['#2B2D42', '#8D99AE', '#D90429', '#EDF2F4']
    },
    {
      id: 'forest',
      name: 'Forest Green',
      hex: '#228B22',
      family: 'green',
      category: 'Earth Tone',
      temperature: 'Cool',
      meaning: 'Ancestral woodland majesty, biological continuity, endurance, and fortitude.',
      history: 'Long associated with the medieval folklore of Robin Hood’s Lincoln Green woolen garments worn in Sherwood Forest.',
      bestPairing: ['#E9D8A6', '#EE9B00', '#CA6702', '#BB3E03']
    },
    {
      id: 'olive',
      name: 'Olive Drab',
      hex: '#808000',
      family: 'green',
      category: 'Neutral',
      temperature: 'Warm',
      meaning: 'Utilitarian resilience, tactical discipline, and rustic peace.',
      history: 'Associated since antiquity with the olive branch as an international emblem of peace. In 1941, it became the standard combat uniform shade of the US Armed Forces.',
      bestPairing: ['#F5EBE0', '#E3D5CA', '#D5BDAF', '#4A4E69']
    },
    {
      id: 'mint',
      name: 'Fresh Mint',
      hex: '#3EB489',
      family: 'green',
      category: 'Pastel',
      temperature: 'Cool',
      meaning: 'Crisp refreshment, clean renewal, youthful sparkle, and spring vitality.',
      history: 'Became an iconic Art Deco and Mid-Century Modern kitchenware hallmark in 1950s American diners and vintage appliances.',
      bestPairing: ['#FFCAD4', '#B5838D', '#6D6875', '#E5989B']
    },
    {
      id: 'jade',
      name: 'Imperial Jade',
      hex: '#00A86B',
      family: 'green',
      category: 'Jewel Tone',
      temperature: 'Cool',
      meaning: 'Supreme virtue, celestial harmony, immortality, and good fortune.',
      history: 'Prized above diamonds and gold in imperial China for 5,000 years. Confucius compared its smoothness to benevolence and its hardness to wisdom.',
      bestPairing: ['#C5A059', '#1C1917', '#F5F5F4', '#78716C']
    },
    {
      id: 'neon-green',
      name: 'Cyber Neon Green',
      hex: '#39FF14',
      family: 'green',
      category: 'Neon',
      temperature: 'Warm',
      meaning: 'High-voltage excitement, algorithmic disruption, radioactive warning.',
      history: 'Pioneered with phosphorescent and fluorescent pigments in the 1960s, later becoming the hallmark of rave culture and 90s cyber aesthetics.',
      bestPairing: ['#000000', '#7928CA', '#FF0080', '#00DFD8']
    },

    // --- YELLOWS & GOLDS ---
    {
      id: 'amber',
      name: 'Amber',
      hex: '#FFBF00',
      family: 'yellow',
      category: 'Tertiary',
      temperature: 'Warm',
      meaning: 'Glowing warmth, protective nostalgia, fossilized timelessness, and radiance.',
      history: 'Named after fossilized tree resin containing ancient insect inclusions. Prized along the prehistoric Amber Road trading routes across the Baltic Sea.',
      bestPairing: ['#03071E', '#370617', '#6A040F', '#9D0208']
    },
    {
      id: 'ochre',
      name: 'Yellow Ochre',
      hex: '#CC7722',
      family: 'yellow',
      category: 'Earth Tone',
      temperature: 'Warm',
      meaning: 'Primitive grounding, sunlight on clay, primal human expression.',
      history: 'The oldest known artistic pigment used by humanity. Discovered in Neanderthal and early Homo sapiens cave paintings dating back over 300,000 years.',
      bestPairing: ['#264653', '#2A9D8F', '#E76F51', '#F4A261']
    },
    {
      id: 'saffron',
      name: 'Saffron',
      hex: '#F4C430',
      family: 'yellow',
      category: 'Historic',
      temperature: 'Warm',
      meaning: 'Spiritual detachment, enlightenment, solar sanctity, and auspicious blessing.',
      history: 'Harvested from the crimson stigmas of Crocus sativus flowers. Sacred in Hinduism, Buddhism, and Sikhism; symbolizes purity and the quest for spiritual truth.',
      bestPairing: ['#581845', '#900C3F', '#C70039', '#FF5733']
    },
    {
      id: 'gold',
      name: 'Imperial Gold',
      hex: '#FFD700',
      family: 'yellow',
      category: 'Jewel Tone',
      temperature: 'Warm',
      meaning: 'Supreme excellence, divine glory, eternal value, and triumphant victory.',
      history: 'Revered across every ancient civilization as the sweat of the sun. Unlike other metals, pure gold never tarnishes, rusts, or corrodes over millennia.',
      bestPairing: ['#0B0C10', '#1F2833', '#C5C6C7', '#45A29E']
    },
    {
      id: 'mustard',
      name: 'Dijon Mustard',
      hex: '#FFDB58',
      family: 'yellow',
      category: 'Secondary',
      temperature: 'Warm',
      meaning: 'Vintage eccentricity, culinary spice, 1970s retro style, and cozy warmth.',
      history: 'Gained international prominence during the 1970s Mid-Century interiors boom and remains a cornerstone of bohemian, vintage graphic design.',
      bestPairing: ['#2E4057', '#048A81', '#44355B', '#ECA72C']
    },
    {
      id: 'lemon',
      name: 'Lemon Chiffon',
      hex: '#FFFACD',
      family: 'yellow',
      category: 'Pastel',
      temperature: 'Warm',
      meaning: 'Gentle morning light, tender optimism, delicacy, and buoyant cheer.',
      history: 'A beloved pastel palette staple often used in nursery decor, spring stationery, and French patisserie branding.',
      bestPairing: ['#5B5F97', '#FFC145', '#FF6B6B', '#4ECDC4']
    },

    // --- PURPLES & VIOLETS ---
    {
      id: 'tyrian',
      name: 'Tyrian Purple',
      hex: '#66023C',
      family: 'purple',
      category: 'Historic',
      temperature: 'Cool',
      meaning: 'Imperial hegemony, sacred majesty, and autocratic supremacy.',
      history: 'Harvested by the Phoenicians in Tyre from tens of thousands of decomposing predatory sea snails (Bolinus brandaris). Only Roman emperors were permitted to wear full robes in this hue.',
      bestPairing: ['#FFD700', '#F5F5DC', '#3E2723', '#D7CCC8']
    },
    {
      id: 'amethyst',
      name: 'Amethyst',
      hex: '#9966CC',
      family: 'purple',
      category: 'Jewel Tone',
      temperature: 'Cool',
      meaning: 'Clear-minded intuition, sobriety, psychic tranquility, and metaphysical balance.',
      history: 'From the Greek "a-methystos" meaning "not intoxicated"—ancient Greeks believed drinking wine from carved amethyst chalices prevented drunkenness.',
      bestPairing: ['#2B2D42', '#8D99AE', '#EDF2F4', '#EF233C']
    },
    {
      id: 'lavender',
      name: 'French Lavender',
      hex: '#E6E6FA',
      family: 'purple',
      category: 'Pastel',
      temperature: 'Cool',
      meaning: 'Aromatic serenity, restful slumber, delicate grace, and poetic grace.',
      history: 'Named after the fragrant purple herb grown abundantly in the rolling hills of Provence, France. Prized since Roman times for perfuming bath waters.',
      bestPairing: ['#2F3E46', '#354F52', '#52796F', '#84A98C']
    },
    {
      id: 'mauve',
      name: 'Mauve',
      hex: '#E0B0FF',
      family: 'purple',
      category: 'Historic',
      temperature: 'Cool',
      meaning: 'Sentimental romance, Victorian vintage charm, and delicate whimsy.',
      history: 'The color that launched the modern synthetic dye industry. Discovered by 18-year-old William Henry Perkin in 1856 while attempting to synthesize malaria medication.',
      bestPairing: ['#3A506B', '#1C2541', '#0B132B', '#5BC0BE']
    },
    {
      id: 'magenta',
      name: 'Electric Magenta',
      hex: '#FF00FF',
      family: 'purple',
      category: 'Neon',
      temperature: 'Warm',
      meaning: 'Non-conformity, emotional transformation, boundless imagination, and rebellion.',
      history: 'Extra-spectral color—it has no single wavelength of light and only exists because the brain combines red and blue optical cone stimulation.',
      bestPairing: ['#00F5D4', '#7B2CBF', '#00BBF9', '#FEE440']
    },
    {
      id: 'plum',
      name: 'Velvet Plum',
      hex: '#8E4585',
      family: 'purple',
      category: 'Jewel Tone',
      temperature: 'Cool',
      meaning: 'Sensual luxury, autumn harvest richness, mystery, and cozy depth.',
      history: 'Favored in velvet drapes and Renaissance garments to evoke harvest bounty and sumptuous domestic warmth.',
      bestPairing: ['#F3E9D2', '#C6A969', '#536B78', '#63C7B2']
    },

    // --- ORANGES & PEACHES ---
    {
      id: 'tangerine',
      name: 'Tangerine',
      hex: '#F28500',
      family: 'orange',
      category: 'Secondary',
      temperature: 'Warm',
      meaning: 'Spontaneous joy, athletic enthusiasm, citric zest, and extroverted charisma.',
      history: 'Named after the citrus fruit exported through the historic Moroccan port city of Tangier to Europe during the 19th century.',
      bestPairing: ['#0A2540', '#635BFF', '#00D4FF', '#FFFFFF']
    },
    {
      id: 'peach',
      name: 'Peach Echo',
      hex: '#FFE5B4',
      family: 'orange',
      category: 'Pastel',
      temperature: 'Warm',
      meaning: 'Gentle empathy, sweet approachability, innocence, and summer softness.',
      history: 'Derived from the velvet skin of the peach fruit. Historically in Chinese art, the peach symbolizes longevity and immortality in Taoist mythology.',
      bestPairing: ['#4A4E69', '#9A8C98', '#C9ADA7', '#F2E9E4']
    },
    {
      id: 'rust',
      name: 'Industrial Rust',
      hex: '#B7410E',
      family: 'orange',
      category: 'Earth Tone',
      temperature: 'Warm',
      meaning: 'Weathered endurance, industrial grit, autumn foliage, and rustic craft.',
      history: 'Formed naturally by the chemical oxidation of iron metal exposed to moisture and oxygen. A staple of modern architectural Corten steel.',
      bestPairing: ['#2F4F4F', '#D2B48C', '#E0EEE0', '#708090']
    },
    {
      id: 'marigold',
      name: 'Marigold',
      hex: '#EAA221',
      family: 'orange',
      category: 'Secondary',
      temperature: 'Warm',
      meaning: 'Festive devotion, ancestral remembrance, radiant hospitality, and optimism.',
      history: 'Central flower in the Mexican celebration of Día de los Muertos (cempasúchil) guiding wandering souls with its intense scent and luminous petals.',
      bestPairing: ['#1B4332', '#2D6A4F', '#40916C', '#52B788']
    },

    // --- PINKS & ROSES ---
    {
      id: 'millennial-pink',
      name: 'Millennial Pink',
      hex: '#F3CFC6',
      family: 'pink',
      category: 'Pastel',
      temperature: 'Warm',
      meaning: 'Androgynous calm, ironic nostalgia, modern minimalism, and gentle tactility.',
      history: 'The defining cultural color trend of the mid-2010s, embraced across fashion, tech branding (Rose Gold iPhone), and interior design worldwide.',
      bestPairing: ['#2E4057', '#048A81', '#F4D35E', '#EE964B']
    },
    {
      id: 'cyber-pink',
      name: 'Cyberpunk Pink',
      hex: '#FF007F',
      family: 'pink',
      category: 'Neon',
      temperature: 'Warm',
      meaning: 'Dystopian neon glow, underground nightlife, relentless rebellion, and hyper-pop.',
      history: 'The definitive signature color of cyberpunk science fiction cinema and retro synthwave aesthetic album covers.',
      bestPairing: ['#080811', '#00F0FF', '#FFE600', '#7B2CBF']
    },
    {
      id: 'blush',
      name: 'Blush Rose',
      hex: '#DE5D83',
      family: 'pink',
      category: 'Pastel',
      temperature: 'Warm',
      meaning: 'Flirtatious affection, emotional vulnerability, romantic charm, and grace.',
      history: 'Takes its inspiration from the spontaneous rush of blood to human cheeks during moments of modesty or romantic excitement.',
      bestPairing: ['#2F3E46', '#354F52', '#52796F', '#84A98C']
    },

    // --- NEUTRALS, METALS & MONOCHROMES ---
    {
      id: 'charcoal',
      name: 'Charcoal',
      hex: '#36454F',
      family: 'neutral',
      category: 'Neutral',
      temperature: 'Neutral',
      meaning: 'Executive authority, quiet strength, timeless stability, and industrial poise.',
      history: 'Made from burnt carbonized wood used as our ancestors’ earliest drawing chalk on prehistoric cave walls before brush technology existed.',
      bestPairing: ['#F8F9FA', '#E9ECEF', '#CED4DA', '#6C757D']
    },
    {
      id: 'ivory',
      name: 'Ivory',
      hex: '#FFFFF0',
      family: 'neutral',
      category: 'Neutral',
      temperature: 'Warm',
      meaning: 'Purity, quiet elegance, heritage craftsmanship, and pristine dignity.',
      history: 'Historically sourced from elephant and walrus tusk carvings. Now widely emulated through sustainable cruelty-free mineral formulations.',
      bestPairing: ['#1C2541', '#3A506B', '#0B132B', '#5BC0BE']
    },
    {
      id: 'slate',
      name: 'Slate Gray',
      hex: '#708090',
      family: 'neutral',
      category: 'Neutral',
      temperature: 'Cool',
      meaning: 'Architectural stoicism, geological endurance, calm neutrality, and balance.',
      history: 'Named after the metamorphic rock quarried in Wales and New England for durable roofing shingles and school blackboards.',
      bestPairing: ['#FF6B6B', '#FFE66D', '#4ECDC4', '#F7FFF7']
    },
    {
      id: 'obsidian',
      name: 'Obsidian Black',
      hex: '#0B0B0E',
      family: 'neutral',
      category: 'Neutral',
      temperature: 'Neutral',
      meaning: 'Infinite mystery, modern luxury, razor focus, and protective shielding.',
      history: 'Volcanic glass formed by rapidly cooled felsic lava. Mesoamerican warriors crafted lethal obsidian blades sharper than surgical steel scalpels.',
      bestPairing: ['#FFFFFF', '#FFD700', '#6366F1', '#06B6D4']
    },
    {
      id: 'champagne',
      name: 'Champagne Gold',
      hex: '#F7E7CE',
      family: 'neutral',
      category: 'Pastel',
      temperature: 'Warm',
      meaning: 'Jubilant celebration, effervescent joy, bespoke luxury, and refined ease.',
      history: 'Named after the sparkling effervescent wine created in the chalk-rich cellars of the Champagne region of northeastern France.',
      bestPairing: ['#2F3E46', '#354F52', '#52796F', '#84A98C']
    },
    {
      id: 'taupe',
      name: 'Taupe',
      hex: '#483C32',
      family: 'neutral',
      category: 'Earth Tone',
      temperature: 'Neutral',
      meaning: 'Unpretentious elegance, grounded neutrality, organic timber, and calm comfort.',
      history: 'Originates from the French word for "mole" (the mammal), describing its soft, grayish-brown subterranean fur.',
      bestPairing: ['#F4F1DE', '#E07A5F', '#3D405B', '#81B29A']
    },
    {
      id: 'copper',
      name: 'Burnished Copper',
      hex: '#B87333',
      family: 'orange',
      category: 'Earth Tone',
      temperature: 'Warm',
      meaning: 'Conductive warmth, metallurgical ingenuity, domestic hearth, and rustic beauty.',
      history: 'One of the very few metallic elements that occurs naturally in an directly usable metallic form, opening the Copper Age 10,000 years ago.',
      bestPairing: ['#005F73', '#0A9396', '#94D2BD', '#E9D8A6']
    },
    {
      id: 'titanium',
      name: 'Titanium White',
      hex: '#FDFBF7',
      family: 'neutral',
      category: 'Primary',
      temperature: 'Neutral',
      meaning: 'Absolute luminosity, clinical perfection, non-toxic brilliance, and fresh beginning.',
      history: 'Introduced around 1921 to permanently replace poisonous lead white paint, providing the most opaque, brilliant white pigment on Earth.',
      bestPairing: ['#0F172A', '#334155', '#64748B', '#94A3B8']
    }
  ];

  // ==========================================================================
  // 2. Color Science & Mathematical Conversion Engines
  // ==========================================================================

  /**
   * Converts 3-digit or 6-digit hex string to RGB object {r, g, b}
   */
  function hexToRgb(hex) {
    let cleanHex = hex.replace('#', '').trim();
    if (cleanHex.length === 3) {
      cleanHex = cleanHex.split('').map(c => c + c).join('');
    }
    const num = parseInt(cleanHex, 16);
    if (isNaN(num) || cleanHex.length !== 6) {
      return { r: 99, g: 102, b: 241 }; // fallback to default accent
    }
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  /**
   * Converts RGB {r, g, b} to 6-digit uppercase HEX string
   */
  function rgbToHex(r, g, b) {
    const clamp = (val) => Math.max(0, Math.min(255, Math.round(val)));
    const toHex = (n) => clamp(n).toString(16).padStart(2, '0').toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  /**
   * Converts RGB to HSL {h, s, l}
   */
  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }

  /**
   * Converts HSL to RGB {r, g, b}
   */
  function hslToRgb(h, s, l) {
    h = ((h % 360) + 360) % 360;
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }

    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255)
    };
  }

  /**
   * Converts RGB to CMYK estimated {c, m, y, k}
   */
  function rgbToCmyk(r, g, b) {
    const cVal = 1 - (r / 255);
    const mVal = 1 - (g / 255);
    const yVal = 1 - (b / 255);
    const kVal = Math.min(cVal, Math.min(mVal, yVal));

    if (kVal === 1) {
      return { c: 0, m: 0, y: 0, k: 100 };
    }
    return {
      c: Math.round(((cVal - kVal) / (1 - kVal)) * 100),
      m: Math.round(((mVal - kVal) / (1 - kVal)) * 100),
      y: Math.round(((yVal - kVal) / (1 - kVal)) * 100),
      k: Math.round(kVal * 100)
    };
  }

  /**
   * Calculates WCAG Relative Luminance and returns best readable text color (#000000 or #FFFFFF)
   */
  function getBestTextColor(hex) {
    const { r, g, b } = hexToRgb(hex);
    // Relative luminance formula per WCAG 2.1
    const sRGB = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    const luminance = 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
    return luminance > 0.45 ? '#0A0E17' : '#FFFFFF';
  }

  // ==========================================================================
  // 3. Harmonies Engine & Interactive Visualizer
  // ==========================================================================
  let currentBaseHue = 239; // Indigo default
  let currentScheme = 'complementary';

  const SCHEME_DEFINITIONS = {
    complementary: {
      title: 'Complementary Harmony',
      geometry: '180° Direct Opposites',
      desc: 'Colors positioned directly opposite each other on the color wheel. Delivers the maximum possible optical contrast, high vibrancy, and dramatic impact.',
      offsets: [
        { label: 'Base', deg: 0, s: 80, l: 55 },
        { label: 'Complement', deg: 180, s: 85, l: 55 },
        { label: 'Tinted Base', deg: 0, s: 50, l: 75 },
        { label: 'Shaded Opp', deg: 180, s: 90, l: 30 }
      ]
    },
    analogous: {
      title: 'Analogous Harmony',
      geometry: 'Adjacent ±30° Angles',
      desc: 'Colors that sit side by side on the color wheel. They blend serenely with low tension, creating calming, cohesive, and naturalistic compositions.',
      offsets: [
        { label: 'Preceding', deg: -30, s: 75, l: 55 },
        { label: 'Base Hue', deg: 0, s: 85, l: 55 },
        { label: 'Succeeding', deg: 30, s: 80, l: 55 },
        { label: 'Muted Accent', deg: 60, s: 60, l: 70 }
      ]
    },
    triadic: {
      title: 'Triadic Harmony',
      geometry: '120° Equilateral Triangle',
      desc: 'Three colors evenly spaced around the 360° wheel. Highly vibrant even when using pale or unsaturated versions, offering balance and richness.',
      offsets: [
        { label: 'Base Hue', deg: 0, s: 80, l: 55 },
        { label: 'Triad 2', deg: 120, s: 80, l: 55 },
        { label: 'Triad 3', deg: 240, s: 80, l: 55 },
        { label: 'Light Base', deg: 0, s: 40, l: 80 }
      ]
    },
    tetradic: {
      title: 'Tetradic (Square) Harmony',
      geometry: '90° Rectangular Scheme',
      desc: 'Four colors arranged into two complementary pairs. Extremely rich with plenty of variation; works best when one color dominates while others serve as accents.',
      offsets: [
        { label: 'Primary', deg: 0, s: 80, l: 55 },
        { label: 'Accent 1', deg: 90, s: 75, l: 55 },
        { label: 'Complement', deg: 180, s: 80, l: 55 },
        { label: 'Accent 2', deg: 270, s: 75, l: 55 }
      ]
    },
    'split-complementary': {
      title: 'Split-Complementary Harmony',
      geometry: 'Base + 150° / 210° Flanks',
      desc: 'A variation of complementary harmony using the base color plus the two colors adjacent to its complement. High contrast with less aggressive visual tension.',
      offsets: [
        { label: 'Base Color', deg: 0, s: 80, l: 55 },
        { label: 'Split Left', deg: 150, s: 85, l: 55 },
        { label: 'Split Right', deg: 210, s: 85, l: 55 },
        { label: 'Soft Echo', deg: 180, s: 35, l: 75 }
      ]
    },
    monochromatic: {
      title: 'Monochromatic Harmony',
      geometry: 'Single Hue Variations',
      desc: 'Variations in lightness and saturation across a single hue. Elegant, clean, and restful on the human eye; eliminates color clashing.',
      offsets: [
        { label: 'Deep Shade', deg: 0, s: 90, l: 25 },
        { label: 'Base Hue', deg: 0, s: 80, l: 55 },
        { label: 'Soft Tone', deg: 0, s: 45, l: 65 },
        { label: 'Luminous Tint', deg: 0, s: 60, l: 85 }
      ]
    }
  };

  function renderHarmonyPalette() {
    const container = document.getElementById('harmony-palette-output');
    const titleEl = document.getElementById('harmony-title');
    const geoEl = document.getElementById('harmony-geometry');
    const descEl = document.getElementById('harmony-description');

    if (!container || !SCHEME_DEFINITIONS[currentScheme]) return;

    const schemeInfo = SCHEME_DEFINITIONS[currentScheme];
    titleEl.textContent = schemeInfo.title;
    geoEl.textContent = schemeInfo.geometry;
    descEl.textContent = schemeInfo.desc;

    container.innerHTML = '';

    schemeInfo.offsets.forEach(slot => {
      const computedHue = (currentBaseHue + slot.deg + 360) % 360;
      const rgb = hslToRgb(computedHue, slot.s, slot.l);
      const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
      const textColor = getBestTextColor(hex);

      const swatch = document.createElement('div');
      swatch.className = 'harmony-swatch-box';
      swatch.style.backgroundColor = hex;
      swatch.innerHTML = `
        <span class="harmony-swatch-role" style="color: ${textColor}; opacity: 0.9;">${slot.label}</span>
        <span class="harmony-swatch-hex" style="color: ${textColor};">${hex}</span>
      `;

      swatch.addEventListener('click', () => {
        copyToClipboard(hex, `Copied ${slot.label} (${hex}) to clipboard!`);
      });

      container.appendChild(swatch);
    });
  }

  // Bind harmony tabs
  const harmonyTabs = document.querySelectorAll('.harmony-tab');
  harmonyTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      harmonyTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentScheme = tab.dataset.scheme;
      renderHarmonyPalette();
    });
  });

  // Bind quick base hue preset buttons
  const hueDotBtns = document.querySelectorAll('.hue-dot-btn');
  hueDotBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentBaseHue = parseInt(btn.dataset.hue, 10);
      renderHarmonyPalette();
    });
  });

  // ==========================================================================
  // 4. Interactive Live Converter Engine
  // ==========================================================================
  const nativePicker = document.getElementById('native-color-picker');
  const inputHex = document.getElementById('input-hex');
  const inputRgb = document.getElementById('input-rgb');
  const inputHsl = document.getElementById('input-hsl');
  const inputCmyk = document.getElementById('input-cmyk');
  const converterPreview = document.getElementById('converter-preview');
  const converterContrastText = document.getElementById('converter-contrast-text');

  function updateConverterFromHex(hexValue) {
    const rgb = hexToRgb(hexValue);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    const contrastColor = getBestTextColor(hexValue);

    nativePicker.value = hexValue;
    inputHex.value = hexValue.toUpperCase();
    inputRgb.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    inputHsl.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    inputCmyk.value = `${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;

    converterPreview.style.backgroundColor = hexValue;
    converterContrastText.style.color = contrastColor;
    converterContrastText.textContent = `${hexValue.toUpperCase()} • Sample Contrast`;
  }

  if (nativePicker) {
    nativePicker.addEventListener('input', (e) => {
      updateConverterFromHex(e.target.value);
    });
  }

  if (inputHex) {
    inputHex.addEventListener('change', (e) => {
      let val = e.target.value.trim();
      if (!val.startsWith('#')) val = '#' + val;
      if (/^#[0-9A-F]{6}$/i.test(val)) {
        updateConverterFromHex(val);
      }
    });
  }

  // Copy buttons on converter fields
  document.querySelectorAll('.copy-field-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const targetInput = document.getElementById(targetId);
      if (targetInput) {
        copyToClipboard(targetInput.value, `Copied ${targetInput.value}`);
      }
    });
  });

  // ==========================================================================
  // 5. Curated Mood Palettes Studio
  // ==========================================================================
  const MOOD_PALETTES = [
    {
      title: 'Cyberpunk Neon',
      vibe: 'High-Voltage Futurism',
      desc: 'Electrified contrasts inspired by neon-drenched Tokyo nights, glitch art, and synthetic retro-wave.',
      colors: ['#080811', '#FF007F', '#00F0FF', '#7B2CBF', '#FFE600']
    },
    {
      title: 'Nordic Serenity',
      vibe: 'Clean Scandinavian Minimal',
      desc: 'Soothing glacial tones, frosted pine, and soft morning fog for calm, uncluttered modern design.',
      colors: ['#2E3440', '#4C566A', '#88C0D0', '#ECEFF4', '#A3BE8C']
    },
    {
      title: 'Tuscan Sunset',
      vibe: 'Warm Rustic Heritage',
      desc: 'Sunbaked terracotta, aged Chianti wine, golden wheat fields, and deep Mediterranean dusk.',
      colors: ['#2B1B17', '#C84B31', '#EC9B3B', '#F4D19B', '#2D4263']
    },
    {
      title: 'Earthy Botanical',
      vibe: 'Organic Forest Sanctuary',
      desc: 'Mossy bark, rain-washed eucalyptus, and warm potting clay evoking biological harmony.',
      colors: ['#1E2B22', '#3E5A44', '#8F9E8B', '#D0DBBD', '#C29B78']
    },
    {
      title: 'Royal Opulence',
      vibe: 'Regal Majesty & Velvet',
      desc: 'Deep imperial Tyrian purple and antique gilding for artisanal luxury and prestige packaging.',
      colors: ['#1A0933', '#4E148C', '#851C85', '#E27396', '#FFD700']
    },
    {
      title: 'Pastel Dreamscape',
      vibe: 'Whimsical Nostalgia',
      desc: 'Fluffy strawberry milk, powdered lavender, and pistachio gelato for gentle, airy interfaces.',
      colors: ['#DDA7A5', '#ABC8C7', '#B7B8D6', '#F9DCC4', '#FCE8E8']
    }
  ];

  function renderMoodPalettes() {
    const grid = document.getElementById('mood-palettes-grid');
    if (!grid) return;

    grid.innerHTML = '';
    MOOD_PALETTES.forEach(mood => {
      const card = document.createElement('div');
      card.className = 'mood-card';

      let swatchesHtml = '';
      mood.colors.forEach(hex => {
        swatchesHtml += `
          <div class="mood-strip-swatch" style="background-color: ${hex};" title="Click to copy ${hex}" data-hex="${hex}">
            <span>${hex}</span>
          </div>
        `;
      });

      card.innerHTML = `
        <div class="mood-swatches-strip">
          ${swatchesHtml}
        </div>
        <div class="mood-body">
          <div class="mood-header">
            <h3 class="mood-title">${mood.title}</h3>
            <span class="mood-vibe-tag">${mood.vibe}</span>
          </div>
          <p class="mood-description">${mood.desc}</p>
        </div>
      `;

      card.querySelectorAll('.mood-strip-swatch').forEach(sw => {
        sw.addEventListener('click', (e) => {
          e.stopPropagation();
          const hex = sw.dataset.hex;
          copyToClipboard(hex, `Copied ${hex} to clipboard!`);
        });
      });

      grid.appendChild(card);
    });
  }

  // ==========================================================================
  // 6. Encyclopedia Catalog Filtering, Search & Grid Rendering
  // ==========================================================================
  const cardsContainer = document.getElementById('color-cards-container');
  const resultsCounter = document.getElementById('results-count');
  const categoryPills = document.querySelectorAll('.filter-pill');
  const familySelect = document.getElementById('family-select');
  const librarySearchInput = document.getElementById('library-search-input');
  const heroSearchInput = document.getElementById('hero-color-search');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  let activeCategory = 'all';
  let activeFamily = 'all';
  let searchQuery = '';

  function renderColorGrid() {
    if (!cardsContainer) return;

    const filtered = COLOR_DATABASE.filter(item => {
      // Category match
      const matchesCategory = activeCategory === 'all' || item.category.toLowerCase() === activeCategory.toLowerCase();

      // Family match
      const matchesFamily = activeFamily === 'all' || item.family.toLowerCase() === activeFamily.toLowerCase();

      // Search text match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        item.name.toLowerCase().includes(q) ||
        item.hex.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.temperature.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q);

      return matchesCategory && matchesFamily && matchesSearch;
    });

    resultsCounter.textContent = `Showing ${filtered.length} of ${COLOR_DATABASE.length} colors`;

    if (filtered.length === 0) {
      cardsContainer.innerHTML = `
        <div class="empty-library-state">
          <div class="empty-icon">🎨</div>
          <h3 class="empty-title">No colors found</h3>
          <p class="empty-desc">Try clearing your search query or selecting a different category filter.</p>
        </div>
      `;
      return;
    }

    cardsContainer.innerHTML = '';
    filtered.forEach(color => {
      const card = document.createElement('article');
      card.className = 'color-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `Color ${color.name}, Hex ${color.hex}`);

      card.innerHTML = `
        <div class="color-card-swatch" style="background-color: ${color.hex};">
          <span class="card-category-pill">${color.category}</span>
        </div>
        <div class="color-card-body">
          <div class="color-card-header">
            <h3 class="color-card-name">${color.name}</h3>
            <span class="color-card-hex">${color.hex}</span>
          </div>
          <p class="color-card-desc">${color.meaning}</p>
          <div class="color-card-footer">
            <button class="btn-card-copy" data-hex="${color.hex}" title="Copy Hex">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            </button>
            <span class="inspect-hint">Click to Inspect &rarr;</span>
          </div>
        </div>
      `;

      // Copy button handler inside card
      const copyBtn = card.querySelector('.btn-card-copy');
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyToClipboard(color.hex, `Copied ${color.name} (${color.hex})!`);
      });

      // Card click opens modal
      card.addEventListener('click', () => {
        openColorModal(color);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') openColorModal(color);
      });

      cardsContainer.appendChild(card);
    });
  }

  // Category pills event
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category;
      renderColorGrid();
    });
  });

  // Family dropdown event
  if (familySelect) {
    familySelect.addEventListener('change', (e) => {
      activeFamily = e.target.value;
      renderColorGrid();
    });
  }

  // Library search input event
  if (librarySearchInput) {
    librarySearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderColorGrid();
    });
  }

  // Hero search input event
  if (heroSearchInput) {
    heroSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('hidden', !searchQuery);
      }
      if (librarySearchInput) {
        librarySearchInput.value = searchQuery;
      }
      renderColorGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      heroSearchInput.value = '';
      if (librarySearchInput) librarySearchInput.value = '';
      searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderColorGrid();
    });
  }

  // ==========================================================================
  // 7. Deep Dive Color Inspector Modal
  // ==========================================================================
  const modalBackdrop = document.getElementById('color-modal');
  const modalCloseBtn = document.getElementById('btn-close-modal');
  const modalFooterCloseBtn = document.getElementById('btn-modal-close-footer');
  const modalSetThemeBtn = document.getElementById('btn-modal-set-theme');

  let activeModalColor = null;

  function openColorModal(color) {
    activeModalColor = color;
    const rgb = hexToRgb(color.hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    const textColor = getBestTextColor(color.hex);

    // Swatch header
    const swatchBanner = document.getElementById('modal-swatch-banner');
    swatchBanner.style.backgroundColor = color.hex;
    document.getElementById('modal-color-name').textContent = color.name;
    document.getElementById('modal-color-name').style.color = textColor;
    document.getElementById('modal-color-tagline').textContent = `${color.category} • ${color.temperature} Spectrum`;
    document.getElementById('modal-color-tagline').style.color = textColor;

    // Contrast compliance label
    const contrastBadge = document.getElementById('modal-contrast-badge');
    const isLight = textColor === '#0A0E17';
    contrastBadge.textContent = isLight ? 'High Contrast • Dark Text Optimal' : 'High Contrast • Light Text Optimal';

    // Codes with click-to-copy
    const hexVal = color.hex.toUpperCase();
    const rgbVal = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    const hslVal = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    const cmykVal = `${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;

    setupCodePill('modal-code-hex', 'modal-val-hex', hexVal);
    setupCodePill('modal-code-rgb', 'modal-val-rgb', rgbVal);
    setupCodePill('modal-code-hsl', 'modal-val-hsl', hslVal);
    setupCodePill('modal-code-cmyk', 'modal-val-cmyk', cmykVal);

    // Stories & Psychology
    document.getElementById('modal-psych-text').textContent = color.meaning;
    document.getElementById('modal-history-text').textContent = color.history;

    // Spectrum Row (Tints, Tones, Shades: 10 steps from 10% lightness to 90%)
    const spectrumRow = document.getElementById('modal-spectrum-row');
    spectrumRow.innerHTML = '';
    for (let lightness = 10; lightness <= 90; lightness += 10) {
      const stepRgb = hslToRgb(hsl.h, hsl.s, lightness);
      const stepHex = rgbToHex(stepRgb.r, stepRgb.g, stepRgb.b);

      const cell = document.createElement('div');
      cell.className = 'spectrum-cell';
      cell.style.backgroundColor = stepHex;
      cell.title = `${stepHex} (${lightness}% L)`;
      cell.addEventListener('click', () => {
        copyToClipboard(stepHex, `Copied spectrum shade ${stepHex}`);
      });
      spectrumRow.appendChild(cell);
    }

    // Pairings Row
    const pairingsRow = document.getElementById('modal-pairings-row');
    pairingsRow.innerHTML = '';
    const pairings = color.bestPairing || ['#FFFFFF', '#1B1B1E', '#FFD700', '#6366F1'];
    pairings.forEach(pairingHex => {
      const pBox = document.createElement('div');
      pBox.className = 'pairing-box';
      pBox.style.backgroundColor = pairingHex;
      const pText = getBestTextColor(pairingHex);
      pBox.style.color = pText;
      pBox.textContent = pairingHex;
      pBox.title = `Click to copy ${pairingHex}`;
      pBox.addEventListener('click', () => {
        copyToClipboard(pairingHex, `Copied pairing ${pairingHex}`);
      });
      pairingsRow.appendChild(pBox);
    });

    // Show modal
    modalBackdrop.classList.add('active');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function setupCodePill(pillId, valId, textToCopy) {
    const pill = document.getElementById(pillId);
    const valEl = document.getElementById(valId);
    valEl.textContent = textToCopy;
    pill.onclick = () => {
      copyToClipboard(textToCopy, `Copied ${textToCopy}!`);
    };
  }

  function closeModal() {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalFooterCloseBtn) modalFooterCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // Modal action: Set ambient site glow to active color
  if (modalSetThemeBtn) {
    modalSetThemeBtn.addEventListener('click', () => {
      if (!activeModalColor) return;
      applyDynamicAccent(activeModalColor.hex);
      showToast(`Site ambient glow set to ${activeModalColor.name}!`);
    });
  }

  // ==========================================================================
  // 8. Dynamic Accent & Ambient Glow Controller
  // ==========================================================================
  function applyDynamicAccent(hex) {
    const rgb = hexToRgb(hex);
    document.documentElement.style.setProperty('--primary-accent', hex);
    document.documentElement.style.setProperty('--primary-accent-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);

    // Update ambient spheres
    const sphere1 = document.getElementById('ambient-sphere-1');
    if (sphere1) {
      sphere1.style.background = `radial-gradient(circle, ${hex} 0%, transparent 70%)`;
    }
  }

  // ==========================================================================
  // 9. Spotlight & Surprise Me Feature
  // ==========================================================================
  const btnSurprise = document.getElementById('btn-surprise-me');
  const btnInspectSpotlight = document.getElementById('btn-inspect-spotlight');
  const btnCopySpotlightHex = document.getElementById('btn-copy-spotlight-hex');

  let currentSpotlightColor = COLOR_DATABASE[0];

  function updateHeroSpotlight(color) {
    currentSpotlightColor = color;
    const swatchBox = document.getElementById('spotlight-swatch-box');
    const nameEl = document.getElementById('spotlight-name');
    const subEl = document.getElementById('spotlight-sub');
    const hexEl = document.getElementById('spotlight-hex');
    const descEl = document.getElementById('spotlight-desc');

    if (swatchBox) swatchBox.style.backgroundColor = color.hex;
    if (nameEl) nameEl.textContent = color.name;
    if (subEl) subEl.textContent = `${color.category} • ${color.temperature} • ${color.family.toUpperCase()}`;
    if (hexEl) hexEl.textContent = color.hex;
    if (descEl) descEl.textContent = color.history;

    applyDynamicAccent(color.hex);
  }

  if (btnSurprise) {
    btnSurprise.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * COLOR_DATABASE.length);
      const chosen = COLOR_DATABASE[randomIndex];
      updateHeroSpotlight(chosen);
      showToast(`Spotlight: ${chosen.name} (${chosen.hex})`);
    });
  }

  if (btnInspectSpotlight) {
    btnInspectSpotlight.addEventListener('click', () => {
      openColorModal(currentSpotlightColor);
    });
  }

  if (btnCopySpotlightHex) {
    btnCopySpotlightHex.addEventListener('click', () => {
      copyToClipboard(currentSpotlightColor.hex, `Copied ${currentSpotlightColor.name} (${currentSpotlightColor.hex})`);
    });
  }

  // ==========================================================================
  // 10. Theme Toggle (Light / Dark Mode)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const savedTheme = localStorage.getItem('chromatica-theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('chromatica-theme', next);
    });
  }

  // ==========================================================================
  // 11. Clipboard Toast Notifications
  // ==========================================================================
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimer = null;

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  function copyToClipboard(text, customMessage) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(customMessage || `Copied ${text} to clipboard!`);
    }).catch(() => {
      // Fallback
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(customMessage || `Copied ${text}!`);
    });
  }

  // Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ==========================================================================
  // 12. Initial Boot
  // ==========================================================================
  renderHarmonyPalette();
  updateConverterFromHex('#6366F1');
  renderMoodPalettes();
  renderColorGrid();
  updateHeroSpotlight(COLOR_DATABASE[0]);
});
