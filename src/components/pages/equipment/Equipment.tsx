"use client";

import React from "react";
import Image from "next/image";

const equipmentData = [
	{
		id: "1",
		name: "Pioneer DJM-900NXS2 Mixer",
		price: 900,
		description:
			"Proffsmixer för klubb och event. 4 kanaler, effekter, hög ljudkvalitet.",
		imageUrl: "/assets/images/profiles/glow__page--irl-looks-06.jpg",
		available: true,
	},
	{
		id: "2",
		name: "Pioneer CDJ-2000NXS2 Player",
		price: 800,
		description:
			"Branschstandard DJ-spelare. USB, rekordbox, hög prestanda.",
		imageUrl: "/assets/images/profiles/glow__page--irl-looks-07.jpg",
		available: true,
	},
	{
		id: "3",
		name: "QSC K12.2 Högtalare (par)",
		price: 1200,
		description:
			"Kraftfulla PA-högtalare för större event. 2000W, kristallklart ljud.",
		imageUrl: "/assets/images/profiles/glow__page--irl-looks-08.jpg",
		available: false,
	},
	{
		id: "4",
		name: "Technics SL-1210MK7 Vinylspelare",
		price: 700,
		description:
			"Klassisk vinylspelare för DJ:s och audiofiler. Direktdriven, robust.",
		imageUrl: "/assets/images/profiles/moda__page--lookbook-01.jpg",
		available: true,
	},
	{
		id: "5",
		name: "Rökmaskin Chauvet DJ Hurricane",
		price: 300,
		description:
			"Effektfull rökmaskin för dansgolv och scen. Enkel att använda.",
		imageUrl: "/assets/images/profiles/moda__page--lookbook-02.jpg",
		available: true,
	},
	{
		id: "6",
		name: "Shure SM58 Mikrofon",
		price: 150,
		description:
			"Branschstandard dynamisk mikrofon. Perfekt för live-uppträdanden.",
		imageUrl: "/assets/images/profiles/moda__page--lookbook-03.jpg",
		available: true,
	},
];

const Equipment: React.FC = () => {
	return (
		<div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen py-16">
			<div className="container mx-auto px-4">
				{/* Hero Image Section */}
				<div className="mb-12 w-full h-80 relative overflow-hidden rounded-lg shadow-lg">
					<Image
						src="/assets/temp/2Q.png"
						alt="Hyr Utrustning Hero"
						fill
						className="object-cover"
						priority
					/>
				</div>

				<div className="text-center mb-16">
					<h1 className="text-4xl font-bold mb-4">Hyr Utrustning</h1>
					<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Behöver du DJ-utrustning eller ljud till ditt event? Hyr professionell
						utrustning snabbt och enkelt.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{equipmentData.map((item) => (
						<div
							key={item.id}
							className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 flex flex-col"
						>
							<div className="relative w-full h-48 rounded-t-lg overflow-hidden">
								<Image
									src={item.imageUrl}
									alt={item.name}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 33vw"
								/>
							</div>
							<div className="p-6 flex-1 flex flex-col">
								<h2 className="text-xl font-semibold mb-2">{item.name}</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
									{item.description}
								</p>
								<div className="flex items-center justify-between mt-2">
									<span className="text-lg font-bold text-blue-600 dark:text-blue-400">
										{item.price} kr/dygn
									</span>
									{item.available ? (
										<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
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

				<div className="text-center mt-16">
					<h2 className="text-2xl font-bold mb-4">Behöver du hjälp?</h2>
					<p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
						Osäker på vilken utrustning du behöver? Kontakta oss så hjälper vi dig
						hitta rätt setup för ditt event.
					</p>
					<a
						href="/bokabeta3"
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
