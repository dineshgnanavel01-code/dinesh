# ITFlow — IT Management Mobile UI

A mobile-first React + Vite + Tailwind CSS frontend for IT operations.

## Included screens

- Splash / Welcome
- Login
- Dashboard with IT activity overview, statistics and recent activity
- Ticket list
- Ticket details and status
- Task management with priority/status indicators
- Asset inventory
- Notifications
- User profile
- Settings
- Responsive bottom navigation

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

```text
src/
  components/
    AppLayout.jsx
    Badge.jsx
    BottomNav.jsx
    SectionHeader.jsx
    StatCard.jsx
    TopBar.jsx
  data/
    mockData.js
  pages/
    Assets.jsx
    Dashboard.jsx
    Login.jsx
    Notifications.jsx
    Profile.jsx
    Settings.jsx
    Splash.jsx
    Tasks.jsx
    TicketDetails.jsx
    Tickets.jsx
  App.jsx
  index.css
  main.jsx
```

The UI uses mock data and client-side navigation. It is ready to connect to a real API/authentication layer.
