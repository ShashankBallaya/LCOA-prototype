/* Leo Club of Aurelian: the one place to keep the site's facts up to date.
   index.html and events.html both read this file.

   HOW TO UPDATE
   - A new event happened: add it to the TOP of `events`. The "Events held" count,
     the Recap tile and the events page all update from this list.
   - An upcoming event is announced: add it to `upcoming`. Move it into `events`
     once it has happened.
   - `photo` is a path under images/, or null. Cards without a photo show the
     category mark instead of an empty box.
   - `date` is YYYY-MM-DD. Use `month` (YYYY-MM) when only the month is known,
     and leave both null when neither is known.
   - Anything marked `standin: true` is NOT real yet. Replace it before sharing. */

window.CLUB = {

  stats: {
    hours:   { value: 240, standin: true },  /* total Leo hours: STAND-IN */
    members: { value: 24,  standin: true }   /* current members: STAND-IN */
  },

  /* Past events, newest first. Sources: Recap photos and @lco_aurelian posts. */
  events: [
    { title: 'Aanchal: Chapter 2', category: 'service', date: '2026-08-29',
      place: "Bethany's Children Home, Nerul",
      text: 'Games, creative corners and a lot of laughter, run together with the Leo Clubs of Airoli and ÆQUINOX.',
      photo: null },
    { title: 'Watch Party for Assam', category: 'service', month: '2026-08',
      place: 'Online screening',
      text: 'A movie night for a cause. ₹25 from every viewer went to the Assam Relief Fund.',
      photo: null },
    { title: 'Virsa: Old Age Home Visit', category: 'service', date: '2026-08-15',
      place: null,
      text: 'Games, stories and long conversations with the people who came before us.',
      photo: null },
    { title: 'Club Photoshoot & 1st Meeting', category: 'fellowship', date: '2026-08-02',
      place: 'Meadows',
      text: 'Capturing memories and aligning on roles for the year ahead.',
      photo: 'images/recap/club-photoshoot.webp',
      alt: 'Club members posing together at their photoshoot at Meadows' },
    { title: 'Friendship Day Distribution', category: 'service', date: '2026-08-02',
      place: 'Thane',
      text: "Cakes and cold drinks for Thane's rickshaw drivers and delivery partners.",
      photo: 'images/recap/friendship-day.webp',
      alt: 'Leo Club members handing out cakes and drinks to rickshaw drivers on Friendship Day' },
    { title: 'District Installation Ceremony', category: 'fellowship', date: '2026-07-26',
      place: 'Lions District 3231 A4',
      text: 'Fellowship at the district ceremony, with Youth Exchange students and PID Lion Sangeeta Jatia.',
      photo: 'images/recap/installation-ceremony.webp',
      alt: 'Club members at the Lions District 3231 A4 Installation Ceremony' },
    { title: 'Aanchal: Chapter 1', category: 'service', date: null,
      place: "Bethany's Children's Home",
      text: "Finger painting, games, and a birthday celebration at Bethany's Children's Home.",
      photo: 'images/recap/bethanys-visit.webp',
      alt: "Leo Club members and children posing together at Bethany's Children's Home" },
    { title: '1st BOD Meet', category: 'leadership', date: null,
      place: 'Online',
      text: "Planning the term's celebrations, fellowship events, and service initiatives.",
      photo: 'images/recap/bod-meet.webp',
      alt: 'Club board members on a video call planning the term' }
  ],

  upcoming: [
    { title: 'Installation Ceremony', date: '2026-09-20',
      text: 'The very first installation of Leo Club of Aurelian. Invitations are on their way.',
      photo: 'images/seal-tile.webp' }
  ],

  /* STAND-IN rosters. Replace names, roles and photos (4:5 portraits under
     images/team/). A null photo shows the person's initials. */
  microTeam: [
    { name: 'Leo Member Name', role: 'Events Coordinator',     photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Social Media Lead',      photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Design Lead',            photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Content Writer',         photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Photography',            photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Outreach Coordinator',   photo: null, standin: true }
  ],

  board: [
    { name: 'Leo Member Name', role: 'Director, Community Service', photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Director, Club Administration', photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Director, Public Relations',  photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Director, Membership',        photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Director, Fellowship',        photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Director, Environment',       photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Director, Sports',            photo: null, standin: true },
    { name: 'Leo Member Name', role: 'Director, Culture',           photo: null, standin: true }
  ]
};
