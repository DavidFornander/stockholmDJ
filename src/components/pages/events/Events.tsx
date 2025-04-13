import React from 'react';
import EventCard from './EventCard';

// Sample event data - in a real app, this would come from an API or CMS
const eventsData = [
  {
    id: '1',
    title: 'House Night at Patricia',
    date: '15 Juni 2025',
    time: '22:00 - 05:00',
    location: 'Patricia, Stockholm',
    description: 'En natt med Stockholms bästa house-DJs på legendariska Patricia. Dansa till djupa beats och atmosfärisk house musik på båtens dansgolv.',
    imageUrl: '/assets/events/event1.jpg',
    link: '/events/house-night-patricia'
  },
  {
    id: '2',
    title: 'Throwback Friday',
    date: '22 Juli 2025',
    time: '22:00 - 05:00',
    location: 'Patricia, Stockholm',
    description: 'Klassisk throwback-kväll där våra DJs spelar de bästa hitsen från 90-talet och 00-talet. Nostalgi-garanterat på Stockholms roligaste nattklubb.',
    imageUrl: '/assets/events/event2.jpg',
    link: '/events/throwback-friday-patricia'
  },
  {
    id: '3',
    title: 'Techno Takeover',
    date: '5 Augusti 2025',
    time: '22:00 - 05:00',
    location: 'Patricia, Stockholm',
    description: 'Patricia förvandlas till ett techno-paradis med industriella beats och hypnotiska rytmer. Stockholms teknoscen samlas för en oförglömlig natt på vattnet.',
    imageUrl: '/assets/events/event3.jpg',
    link: '/events/techno-takeover-patricia'
  },
  {
    id: '4',
    title: 'Sunset Sessions',
    date: '19 September 2025',
    time: '19:00 - 02:00',
    location: 'Patricia, Stockholm',
    description: 'Börja kvällen med magnifika vyer när solen går ner över Stockholm medan våra DJs spelar atmosfärisk och melodisk musik på Patricias övre däck.',
    imageUrl: '/assets/events/event4.jpg',
    link: '/events/sunset-sessions-patricia'
  },
  {
    id: '5',
    title: 'Student-Skiva',
    date: '12 Juni 2025',
    time: '18:00 - 02:00',
    location: 'Ljungströms, Stockholm',
    description: 'Fira studenten med patricia! Speciellt anpassad musik för årets student med klassiska hits och moderna dansfavoriter.',
    imageUrl: '/assets/events/event5.jpg',
    link: '/events/student-skiva-ljungstroms'
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
