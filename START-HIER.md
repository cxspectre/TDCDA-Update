# TDC Digital Advisory – Quellcode und Uebergabe

Stand: 11. September 2026, Version 14 des Relaunchs.
Quellrevision: 6f9962e0b44060dba1d47eef1e48db1f71220a02

## Was dieses Paket enthaelt

Den vollstaendigen versionierten Quellcode des aktuellen Prototyps mit Bildern,
CSS, Animationen, Komponenten, Konfiguration und festgeschriebenen Abhaengigkeiten.
Die Originaldateien entsprechen exakt der oben genannten Revision; nur diese
Uebergabeanleitung wurde dem ZIP hinzugefuegt.

Enthaltene Anpassungen:
- Helles Design mit Sans-Serif-Typografie und Tanjas Portrait.
- Drei getrennte Saeulen, sechs Practices und abgestimmte Kapitel-Navigation.
- Animiertes 4D Framework mit konkreten Vorgehensweisen und Ergebnissen.
- Kompakte Projekterfahrung im persoenlichen Profil.
- Digital Product Engineering in Delivery & Engineering.
- Veyago als eigenstaendiger Entwicklungspartner; Rollen von TDC und Veyago getrennt.
- Interim & Executive Advisory innerhalb von Strategic & Digital Advisory.
- Digital Health ausschliesslich im Intelligence Lab.

Nicht enthalten: installierte Pakete (node_modules), Git-Historie,
Zugangsdaten, lokale Laufzeitdateien oder generierte Build-Ausgaben.

## Wichtige Dateien

- app/page.tsx: Seitenstruktur, Texte, Practices, Partnerrollen und Animationen.
- app/globals.css: Design, responsive Darstellung und CSS-Animationen.
- app/layout.tsx: Grundlayout und Metadaten.
- public/tanja-drefke.webp: auf der Website verwendetes Portrait.
- public/: weitere Bilddateien und Favicon.
- package.json / pnpm-lock.yaml: Pakete und festgelegte Versionen.
- vite.config.ts / build/ / scripts/: Build- und Laufzeitkonfiguration.

## Lokal starten

Die bestehende Konfiguration verwendet React 19, TypeScript, Tailwind CSS 4,
Vinext/Vite und eine Cloudflare-Worker-Laufzeit.
Laut package.json werden Node.js >=22.13.0 und pnpm 11.19.0 verwendet.
Node.js und die angegebene pnpm-Version muessen auf dem Zielrechner installiert sein.

Im entpackten Verzeichnis TDC-Advisory:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Die lokale Entwicklungsadresse wird im Terminal angezeigt (standardmaessig Port 5173).
Die Pakete werden bei der Installation aus dem Paketregister geladen; dafuer ist
Internetzugang erforderlich. Die portable Ausfuehrung wird ohne lokale
Sites-Laufzeitdateien automatisch gewaehlt.

## Build und lokale Vorschau des Builds

```sh
pnpm build
pnpm start
```

Das Build erzeugt unter anderem dist/server/index.js sowie Client-Assets.
Der start-Befehl startet laut vorhandener Konfiguration einen lokalen Worker
ueber Wrangler. Er veroeffentlicht die Website nicht.

Der ausgelieferte Quellstand wurde in der bisherigen Umgebung erfolgreich gebaut;
die geaenderten Practices wurden in der Desktop-Vorschau kontrolliert.
Installation und Hosting auf deinem Zielsystem sind noch nicht geprueft.

## Auf tdc-advisory.com veroeffentlichen

Dieses ZIP ist ein Quellcode-Paket, kein fertiger FTP-Upload und kein WordPress-Theme.
Das Entpacken im Webverzeichnis eines normalen PHP-/WordPress-Hostings fuehrt
noch nicht zu einer lauffaehigen Website.

Der vorhandene Build zielt auf eine Worker-Laufzeit. Fuer den bisherigen
Hosting-Anbieter muss vorab geklaert werden, ob diese Laufzeit unterstuetzt wird
oder ob ein angepasster Build bzw. ein statischer Export benoetigt wird.
Ein statischer Export ist in diesem Paket noch nicht konfiguriert oder getestet.

Die Datei .openai/hosting.json gehoert zur bisherigen Sites-Projektzuordnung und
wird von der Build-Konfiguration eingelesen. Sie ist kein Zugangsschluessel und
ersetzt keine Konfiguration fuer einen anderen Hosting-Anbieter.

Die bisherige private Vorschau bleibt hier erreichbar:
https://tdc-advisory-concept.tanja-drefke.chatgpt.site

Fuer die Umstellung werden der Hosting-Anbieter und die Art des bestehenden
Webhostings benoetigt. Zugangsdaten bitte nicht in den Quellcode schreiben.
Domain und produktive Website wurden durch diesen Export nicht geaendert.
