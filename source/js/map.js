let mapContainer = document.querySelector('.contacts__map');

if (mapContainer !== null) {

  let map = L.map('map', {attributionControl: false}).setView([55.025056281465254, 82.92890026356906], 14);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  let desktopMarker = L.marker(L.latLng(55.02859912108855, 82.92813926853252), {
    icon: L.icon({
      iconUrl: './img/svg/icon-map-marker.svg',
      iconSize: [48, 48],
      iconAnchor: [20, 20],
    }),
  });
  desktopMarker.addTo(map);

  const mobileBreakpoint = window.matchMedia('(max-width:767px)');
  const mobileBreakpointChecker = () => {
    if (mobileBreakpoint.matches) {
      let mobileIcon = desktopMarker.options.icon;
      mobileIcon.options.iconSize = [24, 24];
      desktopMarker.setIcon(mobileIcon);
    }
  };
  mobileBreakpoint.addListener(mobileBreakpointChecker);
  mobileBreakpointChecker();

  const tabletBreakpoint = window.matchMedia('(min-width:768px) and (max-width:1199px)');
  const tabletBreakpointChecker = () => {
    if (tabletBreakpoint.matches) {
      let tabletIcon = desktopMarker.options.icon;
      tabletIcon.options.iconSize = [40, 40];
      desktopMarker.setIcon(tabletIcon);
    }
  };
  tabletBreakpoint.addListener(tabletBreakpointChecker);
  tabletBreakpointChecker();

  const desktopBreakpoint = window.matchMedia('(min-width:1200px)');
  const desktopBreakpointChecker = () => {
    if (desktopBreakpoint.matches) {
      let desktopIcon = desktopMarker.options.icon;
      desktopIcon.options.iconSize = [70, 70];
      desktopMarker.setIcon(desktopIcon);
    }
  };
  desktopBreakpoint.addListener(desktopBreakpointChecker);
  desktopBreakpointChecker();
}
