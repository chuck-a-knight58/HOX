// Event data for events.html (calendar view + card grid).
// Edit this file to add, remove, or update events.
//
// Fields:
//   id           - unique identifier (matches the event detail page filename)
//   series       - top label on the card (e.g. "Xanadu Reserve")
//   name         - main event name
//   subtitle     - optional extra line under the name (empty string if none)
//   date         - ISO date "YYYY-MM-DD" (drives the calendar and is auto-formatted)
//   time         - free-form time range string for the card
//   audience     - free-form audience/membership line
//   image        - filename in assets/ for the card thumbnail
//   detailPage   - HTML file linked from "More info" and the image
//   ticketUrl    - external ticket purchase URL
//   authRequired - true if the Tickets link should redirect logged-out users to join.html

const EVENTS_DATA = [
    {
        id: 'CocktailParty',
        series: 'Xanadu Reserve',
        name: 'Cocktail Party',
        subtitle: '',
        date: '2026-04-10',
        time: '6:30pm - 9:00pm',
        audience: 'Members & Non-Members',
        image: 'CocktailParty_1.png',
        detailPage: 'CocktailParty.html',
        ticketUrl: 'https://forbiddentickets.com/events/xanadu-kink/2026-04-10-xanadu-reserve-cocktail-party',
        authRequired: false
    },
    {
        id: 'EscapeToXanadu042526',
        series: 'Escape to Xanadu',
        name: 'Toga Party',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-04-25',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'TogaParty.png',
        authRequired: true
    },
    {
        id: 'PET050926',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-05-09',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'RoyalAfternoonTea',
        series: 'Xanadu Reserve',
        name: 'Royal Afternoon Tea',
        subtitle: '',
        date: '2026-05-16',
        time: '1:00pm - 4:00pm',
        audience: 'Members & Non-Members',
        image: 'RoyalAfternoonTea1.png',
        detailPage: 'RoyalAfternoonTea.html',
        ticketUrl: 'https://forbiddentickets.com/events/xanadu-kink/7ed08c0096',
        authRequired: true
    },
    {
        id: 'EscapeToXanadu053026',
        series: 'Escape to Xanadu',
        name: 'Spring Soirée',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-05-30',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu.jpeg',
        authRequired: true
    },
    {
        id: 'PET060626',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-06-06',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'HPDinner_StarryNightInParis',
        series: 'Xanadu Reserve',
        name: 'Starry Night In Paris',
        subtitle: '1-day High Protocol Intensive',
        date: '2026-06-13',
        time: '9:30am - 9:30pm',
        audience: 'Members & Non-Members',
        image: 'HPDinner_StarryNightInParis.png',
        detailPage: 'HPDinner_StarryNightInParis.html',
        ticketUrl: 'https://forbiddentickets.com/events/xanadu-kink/35828f6ea1',
        authRequired: false
    },
    {
        id: 'PoolParty',
        series: 'Xanadu Reserve',
        name: 'Enchanted Waters Pool Party',
        subtitle: '',
        date: '2026-07-19',
        time: '3:00pm - 7:00pm',
        audience: 'Xanadu Reserve & Club InnThrall Members Only',
        image: 'PoolParty.png',
        detailPage: 'PoolParty.html',
        ticketUrl: 'https://forbiddentickets.com/events/xanadu-kink/982abf23ed',
        authRequired: true
    },
    {
        id: 'CocktailParty2',
        series: 'Xanadu Reserve',
        name: 'Cocktail Party',
        subtitle: '',
        date: '2026-08-01',
        time: '6:30pm - 9:00pm',
        audience: 'Members & Non-Members',
        image: 'CocktailParty_1.png',
        detailPage: 'CocktailParty.html',
        ticketUrl: 'https://forbiddentickets.com/events/xanadu-kink/9bd27cb4bc',
        authRequired: false
    },
    {
        id: 'XanaduKinkAcademy080826',
        series: 'Xanadu Kink Academy',
        name: 'Present at Power Exchange South Jersey',
        subtitle: 'Art of the Scene',
        date: '2026-08-8',
        time: '4:00pm - 6:00pm',
        audience: 'Xanadu Power Exchange Together Members',
        image: 'XKA.png',
        authRequired: false
    },
    {
        id: 'EscapeToXanadu082226',
        series: 'Escape to Xanadu',
        name: 'We are Back from Summer',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-08-22',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu082226.png',
        authRequired: true
    },
    {
        id: 'PET090829',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-08-29',
        time: '2:00pm - 4:00pm',
        audience: 'Meet us there',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'MSC090326',
        series: 'Xanadu Kink',
        name: '@ MsC',
        subtitle: '',
        date: '2026-09-03',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'MSC.png',
        authRequired: false
    },
    {
        id: 'MSC090426',
        series: 'Xanadu Kink',
        name: '@ MsC',
        subtitle: '',
        date: '2026-09-04',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'MSC.png',
        authRequired: false
    },
    {
        id: 'MSC090526',
        series: 'Xanadu Kink',
        name: '@ MsC',
        subtitle: '',
        date: '2026-09-05',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'MSC.png',
        authRequired: false
    },
    {
        id: 'MSC090626',
        series: 'Xanadu Kink',
        name: '@ MsC',
        subtitle: '',
        date: '2026-09-06',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'MSC.png',
        authRequired: false
    },
    {
        id: 'MSC090726',
        series: 'Xanadu Kink',
        name: '@ MsC',
        subtitle: '',
        date: '2026-09-07',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'MSC.png',
        authRequired: false
    },
    {
        id: 'MSC090826',
        series: 'Xanadu Kink',
        name: '@ MsC',
        subtitle: '',
        date: '2026-09-08',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'MSC.png',
        authRequired: false
    },
    {
        id: 'KinkyHPDinner',
        series: 'Xanadu Reserve',
        name: 'A Velvet Harvest Soirée',
        subtitle: 'A Kinky High Protocol Event',
        date: '2026-09-19',
        time: '5:00pm - 1:00am',
        audience: 'Xanadu Reserve & Club InnThrall Members Only',
        image: 'KinkyHPDinner.jpg',
        detailPage: 'KinkyHPDinner.html',
        ticketUrl: 'https://forbiddentickets.com/events/xanadu-kink/2722b2f8f9',
        authRequired: true
    },
    {
        id: 'EscapeToXanadu092626',
        series: 'Escape to Xanadu',
        name: 'Autumn Equinox',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-09-26',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu092626.png',
        authRequired: true
    },
    {
        id: 'DOMCON093026',
        series: 'Xanadu Kink',
        name: '@ DomCon',
        subtitle: '',
        date: '2026-09-30',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'DOMCON.png',
        authRequired: false
    },
    {
        id: 'DOMCON100126',
        series: 'Xanadu Kink',
        name: '@ DomCon',
        subtitle: '',
        date: '2026-10-01',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'DOMCON.png',
        authRequired: false
    },
    {
        id: 'DOMCON100226',
        series: 'Xanadu Kink',
        name: '@ DomCon',
        subtitle: '',
        date: '2026-10-02',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'DOMCON.png',
        authRequired: false
    },
    {
        id: 'DOMCON100326',
        series: 'Xanadu Kink',
        name: '@ DomCon',
        subtitle: '',
        date: '2026-10-03',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'DOMCON.png',
        authRequired: false
    },
    {
        id: 'DOMCON100426',
        series: 'Xanadu Kink',
        name: '@ DomCon',
        subtitle: '',
        date: '2026-10-04',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'DOMCON.png',
        authRequired: false
    },
    {
        id: 'CocktailParty00926',
        series: 'Xanadu Reserve',
        name: 'Cocktail Party',
        subtitle: '',
        date: '2026-10-09',
        time: '6:30pm - 9:00pm',
        audience: 'Members & Non-Members',
        image: 'CocktailParty_1.png',
        detailPage: 'CocktailParty.html',
        ticketUrl: 'https://forbiddentickets.com/events/xanadu-kink/1079e35fa9?token=35ff0300d57eb2b5a878b25f3ceb304db276fdb5',
        authRequired: false
    },
    {
        id: 'PET101026',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-10-10',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'EscapeToXanadu101726',
        series: 'Escape to Xanadu',
        name: 'Monster Mash Party',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-10-17',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu101726.png',
        authRequired: true
    },
    {
        id: 'XanaduKinkAcademy102226',
        series: 'Xanadu Kink Academy',
        name: 'CLUED in the UK',
        subtitle: 'Kinky Princess',
        date: '2026-10-22',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'XKA.png',
        authRequired: false
    },
    {
        id: 'PET110726',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-11-07',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'EscapeToXanadu112126',
        series: 'Escape to Xanadu',
        name: 'Play Party',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-11-21',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu090926.png',
        authRequired: true
    },
    {
        id: 'NN120326',
        series: 'Xanadu Kink',
        name: '@ Naughty Noel',
        subtitle: '',
        date: '2026-12-03',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'NN.jpg',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'NN120426',
        series: 'Xanadu Kink',
        name: '@ Naughty Noel',
        subtitle: '',
        date: '2026-12-04',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'NN.jpg',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'NN120526',
        series: 'Xanadu Kink',
        name: '@ Naughty Noel',
        subtitle: '',
        date: '2026-12-05',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'NN.jpg',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'NN120626',
        series: 'Xanadu Kink',
        name: '@ Naughty Noel',
        subtitle: '',
        date: '2026-12-06',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'NN.jpg',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'PET121226',
        series: 'Power Exchange Together',
        name: 'Christmas Party',
        subtitle: '',
        date: '2026-12-12',
        time: '7:00pm - 10:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'EscapeToXanadu122126',
        series: 'Escape to Xanadu',
        name: 'SnowCones Christmas Dash',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-12-21',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu122126.png',
        authRequired: true
    },
    {
        id: 'NYE2026',
        series: 'Xanadu Reserve',
        name: 'New Years Eve Party',
        subtitle: 'Move Info to Follow',
        date: '2026-12-31',
        time: '7:00pm - 1:00am Est.',
        audience: 'Xanadu Reserve Members Only',
        image: 'NYE2026.png',
        detailPage: '',
        ticketUrl: '',
        authRequired: true
    },
    {
        id: 'PET010227',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2027-01-02',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: false
    },
    {
        id: 'FORBIDDEN011527',
        series: 'Xanadu Kink',
        name: '@ Forbidden Frostland',
        subtitle: '',
        date: '2027-01-15',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'ForbiddenFrostland.png',
        authRequired: false
    },
    {
        id: 'FORBIDDEN011627',
        series: 'Xanadu Kink',
        name: '@ Forbidden Frostland',
        subtitle: '',
        date: '2027-01-16',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'ForbiddenFrostland.png',
        authRequired: false
    },
    {
        id: 'FORBIDDEN011727',
        series: 'Xanadu Kink',
        name: '@ Forbidden Frostland',
        subtitle: '',
        date: '2027-01-17',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'ForbiddenFrostland.png',
        authRequired: false
    },
    {
        id: 'FORBIDDEN011827',
        series: 'Xanadu Kink',
        name: '@ Forbidden Frostland',
        subtitle: '',
        date: '2027-01-18',
        time: '12:00am - 11:59pm',
        audience: 'Meet us there',
        image: 'ForbiddenFrostland.png',
        authRequired: false
    }
];
