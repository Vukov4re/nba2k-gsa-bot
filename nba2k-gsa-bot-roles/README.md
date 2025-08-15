# NBA 2K GSA Discord Bot (v1.1)

Auto-Setup **Serverstruktur** + **Auto-Rollen mit Buttons** (Plattform, Land, Build-Position) und **read-only** für Regeln/Ankündigungen.

## Setup (lokal)
1) Node.js 18+ installieren: https://nodejs.org
2) `.env` mit echten Werten anlegen (siehe `.env.example`)
3) Abhängigkeiten installieren:
   ```bash
   npm install
   ```
4) Slash-Commands registrieren (einmalig):
   ```bash
   npm run deploy
   ```
5) Starten:
   ```bash
   npm start
   ```

## Befehle
- `/setup2k` – erstellt Kategorien/Kanäle + sperrt Regeln/Ankündigungen
- `/setuproles` – erstellt Kanal **#🧩│rolle-zuweisen** mit Buttons:
  - Plattform: PS5, Xbox, PC
  - Land: Deutschland, Schweiz, Österreich
  - Position: PG, SG, SF, PF, C

## Railway (24/7)
- Repo verbinden → Variables setzen: `DISCORD_TOKEN`, `CLIENT_ID`, `GUILD_ID`
- Start Command: `node index.js`
- Deploy → Bot online

## Hinweise
- Bot benötigt **Manage Channels** und **Manage Roles** auf dem Server.
- `.env` niemals committen.