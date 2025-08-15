# NBA 2K GSA Discord Bot

Dieser Bot erstellt automatisch eine fertige Discord-Serverstruktur für die NBA 2K GSA Community.

## Vorbereitung
1) Node.js 18+ installieren: https://nodejs.org
2) Im Discord Developer Portal einen Bot erstellen und Token/App-ID notieren.

## Lokaler Start
1) Im Projektordner:
   ```bash
   npm install
   ```
2) Lege eine `.env` mit deinen echten Werten an (siehe `.env.example`):
   ```env
   DISCORD_TOKEN=DEIN_DISCORD_BOT_TOKEN
   CLIENT_ID=DEINE_DISCORD_APP_ID
   GUILD_ID=DEINE_TESTSERVER_ID
   ```
3) Slash-Command registrieren:
   ```bash
   npm run deploy
   ```
4) Bot starten:
   ```bash
   npm start
   ```
5) In Discord `/setup2k` ausführen.

## Railway (24/7 Hosting)
- Repo zu GitHub hochladen (ohne `.env`).
- Auf Railway neues Projekt → „Deploy from GitHub repo“.
- Variables setzen: `DISCORD_TOKEN`, `CLIENT_ID`, `GUILD_ID`.
- Start Command: `node index.js`.
- Deploy → Bot ist online.