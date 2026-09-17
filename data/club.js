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
   - Anything marked `standin: true` is NOT real yet. Replace it before sharing.
   - `cause` is the MyLion cause; it shows on a card when `place` is null. */

window.CLUB = {

  /* Source: MyLion service activity report for Leo Club of Aurelian,
     downloaded 17 Sep 2026 (15 reported activities). Update both from the next report. */
  stats: {
    hours:      { value: 336 },    /* total volunteer hours */
    people:     { value: 188 },    /* total people served */
    volunteers: { value: 148 },    /* total volunteers across activities (not a member count) */
    fundsDonatedUSD: 85.35,
    fundsRaisedUSD:  14.05
  },

  /* Past events, newest first. Titles, dates and categories follow the MyLion report
     (Service_Project and Fundraiser = service; board and club meetings = leadership;
     ceremonies and the photoshoot = fellowship). */
  events: [
    { title: 'Aanchal: Chapter 3', category: 'service', date: '2026-09-05',
      place: null, cause: 'Childhood cancer',
      text: 'A Janmashtami-special colouring activity with the kids at a cancer home, and a day filled with smiles.',
      photo: null },
    { title: '2nd Regular Meet', category: 'leadership', date: '2026-09-01',
      place: null, cause: 'Club administration',
      text: "The club's regular meeting for the month of September.",
      photo: null },
    { title: 'Aanchal: Chapter 2', category: 'service', date: '2026-08-29',
      place: "Bethany's Children's Home, Nerul", cause: 'Youth',
      text: 'An afternoon of laughter, creativity and games, run together with the Leo Clubs of Airoli and ÆQUINOX.',
      photo: null },
    { title: 'Jashn-e A4', category: 'fellowship', date: '2026-08-23',
      place: null, cause: 'Club administration',
      text: 'The Leo District 3231 A4 Installation Ceremony.',
      photo: null },
    { title: 'Tees Maar Khan: Online Watch Party', category: 'service', date: '2026-08-22',
      place: 'Online', cause: 'Disaster relief',
      text: 'A movie night for a cause. ₹25 from every viewer went to the Assam Relief Fund.',
      photo: null },
    { title: 'Zone Chairperson Visit', category: 'leadership', date: '2026-08-16',
      place: null, cause: 'Club administration',
      text: 'The Zone Chairperson visited the club together with the GLT Director.',
      photo: null },
    { title: 'Virsa: Old Age Home Visit', category: 'service', date: '2026-08-15',
      place: null, cause: 'Initiatives for the elderly',
      text: 'Games, stories and long conversations with the people who came before us.',
      photo: null },
    { title: '2nd BOD Meet', category: 'leadership', date: '2026-08-14',
      place: null, cause: 'Club administration',
      text: 'The board plans the month of August.',
      photo: null },
    { title: 'YCE Camp Finale', category: 'service', date: '2026-08-09',
      place: null, cause: 'Youth Camps and Exchange',
      text: 'The closing day of the Youth Camps and Exchange camp.',
      photo: null },
    { title: 'YCE Day', category: 'service', date: '2026-08-08',
      place: null, cause: 'Youth Camps and Exchange',
      text: 'Creativity, chaos and connections with the Youth Exchange students.',
      photo: null },
    { title: 'Friendship Day Distribution', category: 'service', date: '2026-08-02',
      place: 'Thane', cause: 'Hunger',
      text: "Cakes and cold drinks for Thane's rickshaw drivers and delivery partners.",
      photo: 'images/recap/friendship-day.webp',
      alt: 'Leo Club members handing out cakes and drinks to rickshaw drivers on Friendship Day' },
    { title: 'Club Photoshoot & 1st Regular Meeting', category: 'fellowship', date: '2026-08-02',
      place: 'Meadows', cause: 'Club administration',
      text: 'Capturing memories and aligning on roles for the year ahead.',
      photo: 'images/recap/club-photoshoot.webp',
      alt: 'Club members posing together at their photoshoot at Meadows' },
    { title: 'Lions District Installation Ceremony', category: 'fellowship', date: '2026-07-26',
      place: 'Lions District 3231 A4', cause: 'Club administration',
      text: 'We attended the installation of Lion Pravin Sarnaik and his team, with Youth Exchange students and PID Lion Sangeeta Jatia.',
      photo: 'images/recap/installation-ceremony.webp',
      alt: 'Club members at the Lions District 3231 A4 Installation Ceremony' },
    { title: '1st BOD Meet', category: 'leadership', date: '2026-07-23',
      place: 'Online', cause: 'Club administration',
      text: "Planning the term's celebrations, fellowship events, and service initiatives.",
      photo: 'images/recap/bod-meet.webp',
      alt: 'Club board members on a video call planning the term' },
    { title: 'Aanchal: Chapter 1', category: 'service', date: '2026-07-18',
      place: "Bethany's Children's Home", cause: 'Youth',
      text: "Finger painting, games, and a birthday celebration at Bethany's Children's Home.",
      photo: 'images/recap/bethanys-visit.webp',
      alt: "Leo Club members and children posing together at Bethany's Children's Home" }
  ],

  /* Home page Recap: the newest events first.
     photosOnly: false shows the latest events even without a photo (they get a date tile);
     true skips events that have no photo yet. */
  recap: { count: 5, photosOnly: false },

  upcoming: [
    { title: 'Installation Ceremony', date: '2026-09-20',
      text: 'The very first installation of Leo Club of Aurelian. Invitations are on their way.',
      photo: 'images/seal-tile.webp' }
  ],

  /* Board of directors (club officers), from the 2026-2027 Club Officers directory.
     Names and roles only: never add phone numbers or emails to this file, it is public.
     Photos: save 4:5 portraits (about 900x1125, WebP) under images/board/ and set `photo`,
     e.g. photo: 'images/board/vaishnavi-mainkar.webp'. A null photo shows the initials. */
  board: [
    { name: 'Leo Vaishnavi Mainkar',   role: 'Joint Secretary',              photo: null },
    { name: 'Leo Kaushal Shah',        role: 'Joint Treasurer',              photo: null },
    { name: 'Leo Harshil Parikh',      role: 'Global Action Team Director',   photo: null },
    { name: 'Leo Rucha Bodhankar',     role: 'Global Service Team',           photo: null },
    { name: 'Leo Sakshi Gawade',       role: 'Global Leadership Team',        photo: null },
    { name: 'Leo Soham Badole',        role: 'Global Membership Team',        photo: null },
    { name: 'Leo Shashank Ballaya',    role: 'Chief Innovation Officer',     photo: null },
    { name: 'Leo Divya Ramakrishnan',  role: 'Chief Innovation Coordinator', photo: null },
    { name: 'Leo Rahul Dadheech',      role: 'Sponsorship & CSR Director',   photo: null },
    { name: 'Leo Mahima Pal',          role: 'Media Outreach Director',      photo: null },
    { name: 'Leo Aryan Lakde',         role: 'Club Merchandise Officer',     photo: null }
  ]
};
