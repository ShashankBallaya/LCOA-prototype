/* Leo Club of Aurelian: the one place to keep the site's facts up to date.
   index.html and events.html both read this file.

   HOW TO UPDATE
   - A new event happened: add it to the TOP of `events`. The "Events held" count,
     the Recap tile and the events page all update from this list.
   - An upcoming event is announced: add it to `upcoming`. Move it into `events`
     once it has happened.
   - `photo` is a path under images/, or null. Cards without a photo show the
     category mark instead of an empty box. Add `fit: 'contain'` to show a photo whole
     instead of cropped to the card: screenshots (Google Meet) get a dark background;
     add `backdrop: 'blur'` too for real photos, which fills the space with a blurred copy.
   - When you replace a photo but keep its file name, add or raise `?v=2` at the end of
     the path, so browsers that saw the old picture fetch the new one.
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
      photo: 'images/recap/aanchal-chapter-3.webp',
      alt: 'Leos and children holding up their colouring sheets at the cancer home' },
    { title: '2nd Regular Meet', category: 'leadership', date: '2026-09-01',
      place: null, cause: 'Club administration',
      text: "The club's regular meeting for the month of September.",
      photo: 'images/recap/regular-meet-2.webp', fit: 'contain',
      alt: 'Club members on a video call for the September regular meeting' },
    { title: 'Aanchal: Chapter 2', category: 'service', date: '2026-08-29',
      place: "Bethany's Children's Home, Nerul", cause: 'Youth',
      text: 'An afternoon of laughter, creativity and games, run together with the Leo Clubs of Airoli and ÆQUINOX.',
      photo: 'images/recap/aanchal-chapter-2.webp',
      alt: 'Leos and children together at Bethany\'s Children\'s Home' },
    { title: 'Jashn-e A4', category: 'fellowship', date: '2026-08-23',
      place: null, cause: 'Club administration',
      text: 'The Leo District 3231 A4 Installation Ceremony.',
      photo: 'images/recap/jashn-e-a4.webp?v=2',
      alt: 'Club members together in front of the district banner at the Jashn-e A4 installation ceremony' },
    { title: 'Tees Maar Khan: Online Watch Party', category: 'service', date: '2026-08-22',
      place: 'Online', cause: 'Disaster relief',
      text: 'A movie night for a cause. ₹25 from every viewer went to the Assam Relief Fund.',
      photo: 'images/recap/watch-party.webp',
      alt: 'A laptop playing Tees Maar Khan during the online watch party' },
    { title: 'Zone Chairperson Visit', category: 'leadership', date: '2026-08-16',
      place: null, cause: 'Club administration',
      text: 'The Zone Chairperson visited the club together with the GLT Director.',
      photo: 'images/recap/zone-chairperson-visit.webp', fit: 'contain',
      alt: 'Club members on a video call during the Zone Chairperson visit' },
    { title: 'Virsa: Old Age Home Visit', category: 'service', date: '2026-08-15',
      place: null, cause: 'Initiatives for the elderly',
      text: 'Games, stories and long conversations with the people who came before us.',
      photo: 'images/recap/virsa.webp',
      alt: 'Leos standing together during the Virsa visit' },
    { title: '2nd BOD Meet', category: 'leadership', date: '2026-08-14',
      place: null, cause: 'Club administration',
      text: 'The board plans the month of August.',
      photo: 'images/recap/bod-meet-2.webp', fit: 'contain',
      alt: 'Board members on a video call for the 2nd BOD meet' },
    { title: 'YCE Camp Finale', category: 'service', date: '2026-08-09',
      place: null, cause: 'Youth Camps and Exchange',
      text: 'The closing day of the Youth Camps and Exchange camp.',
      photo: 'images/recap/yce-finale.webp',
      alt: 'A panel on stage at the Youth Camps and Exchange camp finale' },
    { title: 'YCE Day', category: 'service', date: '2026-08-08',
      place: null, cause: 'Youth Camps and Exchange',
      text: 'Creativity, chaos and connections with the Youth Exchange students.',
      photo: 'images/recap/yce-day.webp',
      alt: 'Leos with Youth Exchange students holding cards on YCE Day' },
    { title: 'Friendship Day Distribution', category: 'service', date: '2026-08-02',
      place: 'Thane', cause: 'Hunger',
      text: "Cakes and cold drinks for Thane's rickshaw drivers and delivery partners.",
      photo: 'images/recap/friendship-day.webp?v=2',
      alt: 'Leos with rickshaw drivers during the Friendship Day distribution' },
    { title: 'Club Photoshoot & 1st Regular Meeting', category: 'fellowship', date: '2026-08-02',
      place: 'Meadows', cause: 'Club administration',
      text: 'Capturing memories and aligning on roles for the year ahead.',
      photo: 'images/recap/club-photoshoot.webp?v=2',
      alt: 'Club members posing together at their photoshoot at Meadows' },
    { title: 'Lions District Installation Ceremony', category: 'fellowship', date: '2026-07-26',
      place: 'Lions District 3231 A4', cause: 'Club administration',
      text: 'We attended the installation of Lion Pravin Sarnaik and his team, with Youth Exchange students and PID Lion Sangeeta Jatia.',
      photo: 'images/recap/installation-ceremony.webp?v=2',
      alt: 'Club members at the Lions District 3231 A4 Installation Ceremony' },
    { title: '1st BOD Meet', category: 'leadership', date: '2026-07-23',
      place: 'Online', cause: 'Club administration',
      text: "Planning the term's celebrations, fellowship events, and service initiatives.",
      photo: 'images/recap/bod-meet.webp', fit: 'contain',
      alt: 'Club board members on a video call planning the term' },
    { title: 'Aanchal: Chapter 1', category: 'service', date: '2026-07-18',
      place: "Bethany's Children's Home", cause: 'Youth',
      text: "Finger painting, games, and a birthday celebration at Bethany's Children's Home.",
      photo: 'images/recap/bethanys-visit.webp', fit: 'contain', backdrop: 'blur',
      alt: "Leo Club members and children posing together at Bethany's Children's Home" }
  ],

  /* Home page Recap: the newest events first.
     photosOnly: false shows the latest events even without a photo (they get a date tile);
     true skips events that have no photo yet. */
  recap: { count: 5, photosOnly: false },

  /* Upcoming, in date order. Events drop off both pages on their own once their date has passed.
     Source for October and November: OSW_and_Upcoming_Events_2026.csv (tentative, 17 Sep 2026).
     `series: 'OSW'` groups the 2 to 9 October run into one block. `focus` is a short label.
     `short` is an optional shorter title for the month calendars, where a cell is narrow.
     `place` is the venue. Add it as soon as it is known: an upcoming event with a place
     is published as a schema.org Event, which can show as a search result of its own. */
  upcoming: [
    { title: 'Installation Ceremony', date: '2026-09-20',
      text: 'The very first installation of Leo Club of Aurelian. Invitations are on their way.',
      photo: 'images/seal-tile.webp' },

    { title: 'Pahal / Anna Daan',                  date: '2026-10-02', focus: 'Hunger relief',                   series: 'OSW', tentative: true },
    { title: 'Aanchal: Chapter 4',                 date: '2026-10-03', focus: 'Sports event',                    series: 'OSW', tentative: true },
    { title: 'Senior Citizen / Childhood Cancer',  date: '2026-10-04', focus: 'Community service',               series: 'OSW', tentative: true },
    { title: 'Meter Down',                         date: '2026-10-05', focus: 'Hunger relief',                   series: 'OSW', tentative: true },
    { title: 'Sanitary Pad Drive',                 date: '2026-10-06', focus: 'Donation and awareness session',  series: 'OSW', tentative: true },
    { title: 'Peace Poster',                       date: '2026-10-07', focus: 'With EuroKids',                   series: 'OSW', tentative: true },
    { title: 'Stationery Kits / Animal Feeding',   date: '2026-10-08', focus: 'Underprivileged children and stray animals', series: 'OSW', tentative: true },
    { title: 'OSW Finale',                         date: '2026-10-09', focus: 'Closing event',                   series: 'OSW', tentative: true },

    { title: 'Blood Donation: Leo Club of Kandivali Lokhandwala', date: '2026-10-18', focus: 'Blood donation',                  tentative: true,
      short: 'Blood Donation' },
    { title: 'After Hours',                        date: '2026-10-23', focus: 'Twinning with Vashi Virtues and Ummeed', tentative: true },
    { title: 'Ummeed',                             date: '2026-11-01', focus: 'District service initiative',      tentative: true },
    { title: 'Aanchal: Chapter 5',                 date: '2026-11-14', focus: 'Party and celebration',           tentative: true },
    { title: 'Empowerment × Side Quest',           date: '2026-11-29', focus: 'Women empowerment',               tentative: true }
  ],

  /* Calendar art: the wide picture at the top of each month card on events.html.
     Key is 'YYYY-MM' for one month, or 'MM' (month number, zero padded) to reuse the
     same picture every year. Value is a path under images/calendar/ (landscape, about
     1400x600, WebP) or null.
     null is fine: the month then shows a woven paper plate with the crest, and the
     downloaded image uses the same plate. Note colours rotate through sage, blush,
     gold and rose by month number, so nothing else needs editing. */
  calendarArt: {
    '09': 'images/calendar/september.webp',
    '10': 'images/calendar/october.webp',
    '11': 'images/calendar/november.webp',
    '12': null
  },

  /* Board of directors (club officers), from the 2026-2027 Club Officers directory.
     Names and roles only: never add phone numbers or emails to this file, it is public.
     Photos: 4:5 portraits (900x1125 WebP, metadata removed) under images/board/.
     A null photo shows the initials. */
  board: [
    { name: 'Leo Vaishnavi Mainkar',   role: 'Joint Secretary',              photo: 'images/board/vaishnavi-mainkar.webp' },
    { name: 'Leo Kaushal Shah',        role: 'Joint Treasurer',              photo: 'images/board/kaushal-shah.webp' },
    { name: 'Leo Harshil Parikh',      role: 'Global Action Team Director',   photo: 'images/board/harshil-parikh.webp' },
    { name: 'Leo Rucha Bodhankar',     role: 'Global Service Team',           photo: 'images/board/rucha-bodhankar.webp' },
    { name: 'Leo Sakshi Gawade',       role: 'Global Leadership Team',        photo: 'images/board/sakshi-gawade.webp' },
    { name: 'Leo Soham Badole',        role: 'Global Membership Team',        photo: 'images/board/soham-badole.webp' },
    { name: 'Leo Shashank Ballaya',    role: 'Chief Innovation Officer',     photo: 'images/board/shashank-ballaya.webp' },
    { name: 'Leo Divya Ramakrishnan',  role: 'Chief Innovation Coordinator', photo: 'images/board/divya-ramakrishnan.webp' },
    { name: 'Leo Rahul Dadheech',      role: 'Sponsorship & CSR Director',   photo: 'images/board/rahul-dadheech.webp' },
    { name: 'Leo Mahima Pal',          role: 'Media Outreach Director',      photo: 'images/board/mahima-pal.webp' },
    { name: 'Leo Aryan Lakde',         role: 'Club Merchandise Officer',     photo: 'images/board/aryan-lakde.webp' }
  ],

  /* OSW, the flagship week (home page, above Upcoming events). The days come from `upcoming`
     (every entry with series: 'OSW'). `photos` fill the curved wall of cards, left to right,
     with a generated dragonfly still life (from the crest's motifs) in the middle. The day images are
     generated still lifes too (no people), one per day in date order; swap in real OSW photos once the week has happened. */
  osw: {
    series: 'OSW',
    name: 'October Service Week',
    photos: [
      'images/osw/pahal-anna-daan.webp',
      'images/osw/aanchal-chapter-4.webp',
      'images/osw/senior-citizen-childhood-cancer.webp',
      'images/osw/meter-down.webp',
      'images/osw/centre-dragonfly.webp',
      'images/osw/sanitary-pad-drive.webp',
      'images/osw/peace-poster.webp',
      'images/osw/stationery-animal-feeding.webp',
      'images/osw/osw-finale.webp'
    ]
  },

  /* Main Character of the month, newest first. The section stays hidden while this list is empty.
     { name: 'Leo ...', role: '...', month: 'YYYY-MM', photo: 'images/leo-of-the-month/....webp' or null } */
  leoOfTheMonth: [
    { name: 'Leo Sakshi Gawade',      role: 'Global Leadership Team',   month: '2026-09', photo: 'images/board/sakshi-gawade.webp' },
    { name: 'Leo Shashank Ballaya',   role: 'Chief Innovation Officer', month: '2026-08', photo: 'images/board/shashank-ballaya.webp' },
    { name: 'Leo Rahul Dadheech',     role: 'Sponsorship & CSR Director', month: '2026-08', photo: 'images/board/rahul-dadheech.webp' },
    { name: 'Leo Mahima Pal',         role: 'Media Outreach Director',  month: '2026-07', photo: 'images/board/mahima-pal.webp' }
  ],

  /* Minutes and Mayhem, the club newsletter. One folder per volume.
     `link` is the Google Drive link to the PDF (sharing: anyone with the link can view).
     A null link shows the folder as "Coming soon".
     `cover` is the volume's cover (4:5 WebP under images/minutes/); it sticks out of the folder.
     Leave it null to show plain pages instead. */
  minutes: [
    { title: 'Volume 1', note: 'July 2026', link: 'https://drive.google.com/file/d/1-gnBaE9AJXYd8N4V_Fb37sNTbVkAv22m/view', cover: 'images/minutes/volume-1.webp' },
    { title: 'Volume 2', note: 'August 2026', link: 'https://drive.google.com/file/d/1sWsAqMY4Vax4gRAvr_mG7bkdvUMKAJoa/view', cover: 'images/minutes/volume-2.webp' }
  ]
};
