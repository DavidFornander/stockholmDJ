import React from 'react';
import EventCard from './EventCard';

// Sample event data - in a real app, this would come from an API or CMS
const eventsData = [
  {
    id: '1',
    title: 'Summer Techno Festival',
    date: '15 Juni 2025',
    time: '20:00 - 02:00',
    location: 'Södra Teatern, Stockholm',
    description: 'En helkväll med stockholms bästa techno-DJs. Vi tar över alla 5 våningar på Södra Teatern för en oförglömlig upplevelse.',
    imageUrl: '/assets/events/event1.jpg',
    link: '/events/summer-techno-festival'
  },
  {
    id: '2',
    title: 'Corporate Mixer',
    date: '22 Juli 2025',
    time: '18:00 - 23:00',
    location: 'Grand Hôtel, Stockholm',
    description: 'En exklusiv företagsmingel med handplockade DJs som spelar diskret bakgrundsmusik som ändå sätter rätt stämning.',
    imageUrl: '/assets/events/event2.jpg',
    link: '/events/corporate-mixer'
  },
  {
    id: '3',
    title: 'Wedding DJ Workshop',
    date: '5 Augusti 2025',
    time: '12:00 - 16:00',
    location: 'Clarion Hotel, Stockholm',
    description: 'Lär dig hur du skapar den perfekta spellistan för ditt bröllop. Tips och tricks från professionella DJs.',
    imageUrl: '/assets/events/event3.jpg',
    link: '/events/wedding-dj-workshop'
  },
  {
    id: '4',
    title: 'Vinyl Night',
    date: '19 September 2025',
    time: '19:00 - 01:00',
    location: 'Trädgården, Stockholm',
    description: 'En kväll dedikerad till vinylskivor. Kom och upplev den varma analoga ljudbilden som bara vinyl kan erbjuda.',
    imageUrl: '/assets/events/event4.jpg',
    link: '/events/vinyl-night'
  }
];

const Events: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Kommande Events</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Upptäck våra kommande evenemang och workshops. Stockholm.DJ arrangerar allt från företagsevent till klubbkvällar och musikaliska workshops.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Saknar du något?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Vi kan hjälpa dig arrangera ditt eget event, oavsett om det är en företagsfest, ett bröllop eller en privatfest.
          </p>
          <a 
            href="/bokabeta3" 
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            Boka DJ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
