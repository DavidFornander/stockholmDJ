"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from 'lucide-react';

const equipmentData = [
	// Pioneer DJ Controllers & All-in-One Systems
	{
		id: "1",
		name: "Pioneer XDJ-XZ",
		price: 1200,
		description: "4-kanals all-in-one DJ-system. Rekordbox-kompatibel, stora joghjul, professionell mixer.",
		imageUrl: "/assets/images/gear/pioneer/XDJ-XZ_prm_top.png",
		available: true,
		category: "DJ Controller"
	},
	{
		id: "2", 
		name: "Pioneer XDJ-RX3",
		price: 1000,
		description: "2-kanals all-in-one system. Perfect för mobila DJ:s, touchscreen, rekordbox-integration.",
		imageUrl: "/assets/images/gear/pioneer/XDJ-RX3_prm_top_210830_pc.png",
		available: true,
		category: "DJ Controller"
	},
	{
		id: "3",
		name: "Pioneer OPUS-QUAD",
		price: 2200,
		description: "4-kanals flaggskepp med 10.1\" touchscreen. CloudDirectPlay, WiFi, premium build.",
		imageUrl: "/assets/images/gear/pioneer/OPUS-QUAD_prm_top_221223.png",
		available: true,
		category: "DJ Controller"
	},
	{
		id: "4",
		name: "Pioneer OMNIS-DUO",
		price: 800,
		description: "Portabel 2-kanals system med batteri. Perfect för pool parties och utomhusarrangemang.",
		imageUrl: "/assets/images/gear/pioneer/OMNIS-DUO_CGI_top_17921316c.png",
		available: true,
		category: "DJ Controller"
	},

	// Pioneer CDJ Players
	{
		id: "5",
		name: "Pioneer CDJ-3000",
		price: 1500,
		description: "Flaggskepp DJ-spelare med 9\" touchscreen. MPU-6050, rekordbox Cloud, WiFi.",
		imageUrl: "/assets/images/gear/pioneer/CDJ-3000-angle-hero.png",
		available: true,
		category: "CDJ Player"
	},
	{
		id: "6",
		name: "Pioneer XDJ-1000MK2",
		price: 900,
		description: "Professionell media player. Stora joghjul, färgdisplay, USB/SD-support.",
		imageUrl: "/assets/images/gear/pioneer/XDJ-1000MK2_CGI_Top_Lot6_PC_1792x1316.png",
		available: true,
		category: "CDJ Player"
	},
	{
		id: "7",
		name: "Pioneer XDJ-700",
		price: 600,
		description: "Kompakt media player. Touch Cue, rekordbox-kompatibel, perfekt för mindre event.",
		imageUrl: "/assets/images/gear/pioneer/XDJ-700_CGI_Top_Lot6_PC_1792x1316.png",
		available: true,
		category: "CDJ Player"
	},
	{
		id: "8",
		name: "Pioneer CDJ-900NXS",
		price: 700,
		description: "Pålitlig DJ-spelare med Pro DJ Link. USB, CD, rekordbox-support.",
		imageUrl: "/assets/images/gear/pioneer/cdj-900nexus-main-PDJ.png",
		available: false,
		category: "CDJ Player"
	},

	// Pioneer DJ Mixers
	{
		id: "9",
		name: "Pioneer DJM-A9",
		price: 1800,
		description: "4-kanals premium mixer. 96 kHz/32-bit, Sound Color FX, Magvel crossfader.",
		imageUrl: "/assets/images/gear/pioneer/DJM-A9-comparison-457x517.png",
		available: true,
		category: "DJ Mixer"
	},
	{
		id: "10",
		name: "Pioneer DJM-900NXS2",
		price: 1200,
		description: "Branschstandard 4-kanals mixer. Beat FX, Sound Color FX, rekordbox-integration.",
		imageUrl: "/assets/images/gear/pioneer/DJM-900NXS2-comparison-457x517.png",
		available: true,
		category: "DJ Mixer"
	},
	{
		id: "11",
		name: "Pioneer DJM-S11",
		price: 1000,
		description: "2-kanals Serato mixer. Magvel crossfader, Performance Pads, scratch-optimerad.",
		imageUrl: "/assets/images/gear/pioneer/DJM-S11_prm_top_200828.png",
		available: true,
		category: "DJ Mixer"
	},
	{
		id: "12",
		name: "Pioneer DJM-S7",
		price: 800,
		description: "2-kanals Serato mixer. Perfect för scratch och battle, Magvel crossfader.",
		imageUrl: "/assets/images/gear/pioneer/DJM-S7_prm_top_201201-min.png",
		available: true,
		category: "DJ Mixer"
	},
	{
		id: "13",
		name: "Pioneer DJM-V10",
		price: 2000,
		description: "6-kanals klub-mixer. Send/return, Isolator per kanal, premium ljud.",
		imageUrl: "/assets/images/gear/pioneer/DJM-V10-LF-top.png",
		available: true,
		category: "DJ Mixer"
	},
	{
		id: "14",
		name: "Pioneer DJM-S5",
		price: 500,
		description: "2-kanals Serato mixer. Kompakt design, Performance Pads, portabel.",
		imageUrl: "/assets/images/gear/pioneer/djm-s5-cgi-pc-top-new.png",
		available: true,
		category: "DJ Mixer"
	},

	// Pioneer Turntables
	{
		id: "15",
		name: "Pioneer PLX-1000",
		price: 800,
		description: "Direktdriven vinylspelare. Hög torque, anti-skate, perfekt för scratch.",
		imageUrl: "/assets/images/gear/pioneer/plx-1000-main-PDJ.png",
		available: true,
		category: "Turntable"
	},
	{
		id: "16",
		name: "Pioneer PLX-500 (Svart)",
		price: 400,
		description: "USB-vinylspelare. Digitalisering, rekordbox-kompatibel, nybörjarvänlig.",
		imageUrl: "/assets/images/gear/pioneer/plx-500-k-main.png",
		available: true,
		category: "Turntable"
	},
	{
		id: "17",
		name: "Pioneer PLX-CRSS12",
		price: 1200,
		description: "Battle mixer + turntable hybrid. Scratch-optimerad, portabel design.",
		imageUrl: "/assets/images/gear/pioneer/plx-crss12-cgi-top.png",
		available: true,
		category: "Turntable"
	},

	// Pioneer Speakers
	{
		id: "18",
		name: "Pioneer XPRS152",
		price: 600,
		description: "15\" aktiv högtalare. 1200W, Bluetooth, APP-kontroll, perfekt för mindre event.",
		imageUrl: "/assets/images/gear/pioneer/XPRS152_CGI_angle_2150x3300.png",
		available: true,
		category: "Speaker"
	},
	{
		id: "19", 
		name: "Pioneer XPRS82",
		price: 400,
		description: "8\" aktiv monitor. 280W, studio-kvalitet, kompakt design för DJ-booth.",
		imageUrl: "/assets/images/gear/pioneer/XPRS82_CGI_angle_2343x3300.png",
		available: true,
		category: "Speaker"
	},
	{
		id: "20",
		name: "Pioneer XPRS1152ST",
		price: 1200,
		description: "15\" subwoofer. 1200W, kraftfull bas, perfekt komplement till fullrange-högtalare.",
		imageUrl: "/assets/images/gear/pioneer/XPRS1152ST_CGI_angle_3300x2549.png",
		available: true,
		category: "Speaker"
	},
	{
		id: "21",
		name: "Pioneer XPRS1182ST",
		price: 1400,
		description: "18\" subwoofer. 1800W, djup bas för stora event och klubbar.",
		imageUrl: "/assets/images/gear/pioneer/XPRS1182ST_CGI_angle_3300x2628.png",
		available: false,
		category: "Speaker"
	},

	// Pioneer XPRS2 Series
	{
		id: "22",
		name: "Pioneer XPRS2-F10",
		price: 800,
		description: "10\" aktiv fullrange. Class-D förstärkare, DSP-processing, touring-kvalitet.",
		imageUrl: "/assets/images/gear/pioneer/XPRS2_F10_angle_221124.png",
		available: true,
		category: "Speaker"
	},
	{
		id: "23",
		name: "Pioneer XPRS2-F12", 
		price: 900,
		description: "12\" aktiv fullrange. 1000W, touring-design, robust konstruktion.",
		imageUrl: "/assets/images/gear/pioneer/XPRS2_F12_angle_221124.png",
		available: true,
		category: "Speaker"
	},
	{
		id: "24",
		name: "Pioneer XPRS2-S15",
		price: 1100,
		description: "15\" aktiv subwoofer. 1400W, djup bas, cardio-design för optimal prestanda.",
		imageUrl: "/assets/images/gear/pioneer/XPRS2_S15_angle_221124b.png",
		available: true,
		category: "Speaker"
	},
	{
		id: "25",
		name: "Pioneer XPRS2-S18",
		price: 1300,
		description: "18\" aktiv subwoofer. 1800W, ultimat bas för stora event och festivaler.",
		imageUrl: "/assets/images/gear/pioneer/XPRS2_S18_angle_221124b.png",
		available: true,
		category: "Speaker"
	}
];

const Equipment: React.FC = () => {
	const [searchLocation, setSearchLocation] = useState('');
	const [searchEquipmentType, setSearchEquipmentType] = useState('');
	const [equipmentDate, setEquipmentDate] = useState('');
	const [searchCategory, setSearchCategory] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('All');

	// Get unique categories for filtering
	const categories = ['All', ...Array.from(new Set(equipmentData.map(item => item.category)))];

	// Filter equipment based on search criteria
	const filteredEquipment = equipmentData.filter(item => {
		const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
		const matchesSearch = !searchEquipmentType || 
			item.name.toLowerCase().includes(searchEquipmentType.toLowerCase()) ||
			item.description.toLowerCase().includes(searchEquipmentType.toLowerCase()) ||
			item.category.toLowerCase().includes(searchEquipmentType.toLowerCase());
		
		return matchesCategory && matchesSearch;
	});

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
			{/* Hero Image Section */}
			<div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
				<Image
					src="/assets/images/hero/utrustning.png"
					alt="Hyr Utrustning Hero"
					fill
					className="object-cover object-center"
					priority
				/>
				<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
					<div className="text-center text-white">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
							Hyr Utrustning
						</h1>
						<p className="text-lg md:text-xl text-gray-200">
							Behöver du DJ-utrustning eller ljud till ditt event?
						</p>
					</div>
				</div>

				{/* Search Form Overlay */}
				<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
					<div className="bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center divide-x divide-gray-200 dark:divide-gray-700">
						<div className="flex-1 px-4 py-2">
							<input
								type="text"
								placeholder="Plats"
								value={searchLocation}
								onChange={(e) => setSearchLocation(e.target.value)}
								className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
							/>
						</div>
						<div className="flex-1 px-4 py-2">
							<input
								type="text"
								placeholder="Utrustningstyp"
								value={searchEquipmentType}
								onChange={(e) => setSearchEquipmentType(e.target.value)}
								className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
							/>
						</div>
						<div className="flex-1 px-4 py-2">
							<input
								type="date"
								value={equipmentDate}
								onChange={(e) => setEquipmentDate(e.target.value)}
								className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white"
							/>
						</div>
						<div className="flex-1 px-4 py-2">
							<input
								type="text"
								placeholder="Kategori"
								value={searchCategory}
								onChange={(e) => setSearchCategory(e.target.value)}
								className="w-full bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
							/>
						</div>
						<button className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors px-4">
							<Search className="w-5 h-5 text-white" />
						</button>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-8">
				{/* Category Filter */}
				<div className="mb-8">
					<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pioneer DJ Equipment</h2>
					<div className="flex flex-wrap gap-2">
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
									selectedCategory === category
										? 'bg-blue-600 text-white'
										: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
								}`}
							>
								{category} ({category === 'All' ? equipmentData.length : equipmentData.filter(item => item.category === category).length})
							</button>
						))}
					</div>
				</div>

				{/* Equipment Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{filteredEquipment.map((item) => (
						<div
							key={item.id}
							className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col"
						>
							<div className="relative w-full h-48 rounded-t-lg overflow-hidden bg-white">
								<Image
									src={item.imageUrl}
									alt={item.name}
									fill
									className="object-contain p-4"
									sizes="(max-width: 768px) 100vw, 25vw"
								/>
								{/* Category Badge */}
								<div className="absolute top-2 left-2">
									<span className="px-2 py-1 text-xs font-medium bg-blue-600 text-white rounded-full">
										{item.category}
									</span>
								</div>
								{/* Availability Badge */}
								{!item.available && (
									<div className="absolute top-2 right-2">
										<span className="px-2 py-1 text-xs font-medium bg-red-600 text-white rounded-full">
											Ej tillgänglig
										</span>
									</div>
								)}
							</div>
							<div className="p-4 flex-1 flex flex-col">
								<h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{item.name}</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 text-sm">
									{item.description}
								</p>
								<div className="flex items-center justify-between mt-auto">
									<span className="text-lg font-bold text-blue-600 dark:text-blue-400">
										{item.price} kr/dygn
									</span>
									{item.available ? (
										<button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors">
											Boka
										</button>
									) : (
										<span className="text-sm text-gray-400">
											Ej tillgänglig
										</span>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* No Results Message */}
				{filteredEquipment.length === 0 && (
					<div className="text-center py-12">
						<div className="text-gray-400 dark:text-gray-600 mb-4">
							<Search className="w-16 h-16 mx-auto" />
						</div>
						<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
							Ingen utrustning hittades
						</h3>
						<p className="text-gray-600 dark:text-gray-400 mb-6">
							Prova att ändra dina sökkriterier eller välj en annan kategori
						</p>
						<button
							onClick={() => {
								setSelectedCategory('All');
								setSearchEquipmentType('');
								setSearchCategory('');
							}}
							className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
						>
							Rensa filter
						</button>
					</div>
				)}

				<div className="text-center mt-16">
					<h2 className="text-2xl font-bold mb-4">Behöver du hjälp?</h2>
					<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
						Osäker på vilken utrustning du behöver? Kontakta oss så hjälper vi dig
						hitta rätt setup för ditt event.
					</p>
					<a
						href="/book"
						className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
					>
						Kontakta oss
					</a>
				</div>
			</div>
		</div>
	);
};

export default Equipment;
