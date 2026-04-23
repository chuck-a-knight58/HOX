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
        id: 'EscapeToXanadu062726',
        series: 'Escape to Xanadu',
        name: 'Midsummer Night',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-06-27',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu.jpeg',
        authRequired: true
    },
    {
        id: 'EscapeToXanadu071126',
        series: 'Escape to Xanadu',
        name: 'Summer Gathering',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-07-11',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu.jpeg',
        authRequired: true
    },
    {
        id: 'EscapeToXanadu082226',
        series: 'Escape to Xanadu',
        name: 'Late Summer Escape',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-08-22',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu.jpeg',
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
        image: 'EscapeToXanadu.jpeg',
        authRequired: true
    },
    {
        id: 'EscapeToXanadu101726',
        series: 'Escape to Xanadu',
        name: 'Harvest Revelry',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-10-17',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu.jpeg',
        authRequired: true
    },
    {
        id: 'EscapeToXanadu112126',
        series: 'Escape to Xanadu',
        name: 'Winter Welcome',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-11-21',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu.jpeg',
        authRequired: true
    },
    {
        id: 'EscapeToXanadu121226',
        series: 'Xanadu Christmas',
        name: 'Holiday Gala',
        subtitle: 'Sponsorship Required - Please contact us',
        date: '2026-12-12',
        time: '6:00pm - 1:00am',
        audience: 'Xanadu Reserve & Escape Members',
        image: 'EscapeToXanadu.jpeg',
        authRequired: true
    },
    {
        id: 'PET053026',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-05-09',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
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
        authRequired: true
    },
    {
        id: 'PET090926',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-09-12',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: true
    },
    {
        id: 'PET100326',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-10-03',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: true
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
        authRequired: true
    },
    {
        id: 'PET121226',
        series: 'Power Exchange Together',
        name: 'Monthly Gathering',
        subtitle: '',
        date: '2026-12-12',
        time: '2:00pm - 4:00pm',
        audience: 'Open to all',
        image: 'PET.png',
        detailPage: 'PET.html',
        ticketUrl: '',
        authRequired: true
    }

];
