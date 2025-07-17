# Spyral <img src="spyral-logo.png" width="30" height="30">

Ein Discord-Bot-Projekt, das sich noch in der **Entwicklung** befindet. Spyral dient als **Lernprojekt**, um die Grundlagen der Bot-Entwicklung für Discord zu verstehen und zu meistern.

---

## 🚧 Status und Ziele

Dieses Projekt wird aktiv entwickelt, um verschiedene Bot-Konzepte zu erforschen und zu implementieren. Die Hauptziele sind das Erlernen von:

* Der **grundlegenden Bot-Struktur** und wie er auf Discord-Events reagiert.
* Der **Befehlsverarbeitung** und wie man Befehle erstellt.
* DAs **allgemeine Lernen** von JavaScript

---

## 🚀 Erste Schritte

Diese Anleitung hilft dir, die aktuelle Entwicklungsversion von Spyral auf deinem System zum Laufen zu bringen.

### Voraussetzungen

Was du benötigst:

* **Node.js**: Version 16.9.0 oder höher (LTS empfohlen).
* **npm** (Node Package Manager): Kommt mit Node.js.
* Ein **Discord Bot Token**: Erstelle einen im [Discord Developer Portal](https://discord.com/developers/applications).

### Installation

1.  **Repository klonen:**
    ```bash
    git clone [https://github.com/tiredmary/spyral.git](https://github.com/tiredmary/spyral.git)
    cd spyral
    ```
2.  **NPM-Pakete installieren:**
    ```bash
    npm install discord.js dotenv
    npm install @discordjs/builders @discordjs/rest discord-api-types
    ```
3.  **`.env`-Datei erstellen:**
    Erstelle im Hauptverzeichnis deines Projekts eine Datei namens `.env`. Diese Datei speichert deinen Discord Bot Token und andere sensible Informationen.
    ```
    DISCORD_BOT_TOKEN=DEIN_DISCORD_BOT_TOKEN_HIER
    DISCORD_APPLICATION_ID=DEINE_BOT_CLIENT_ID_HIER # Findest du im Discord Developer Portal unter General Information
    DISCORD_GUILD_ID=DEINE_ENTWICKLUNGS-SERVER-ID_HIER # Für schnelles Testen von Slash-Befehlen
    ```
    **Wichtig**: Teile deinen Bot-Token **NIEMALS** und committe deine `.env`-Datei **NIEMALS** in öffentliche Repositories. `.env` ist bereits in `.gitignore`, um dies zu verhindern.
4.  **Commands deployen und Bot starten:**
    ```bash
    npm run deployCommands # oder node src/deploy-commands.js, je nach deinen package.json Skripten
    npm run dev # oder node src/index.js, je nach deinen package.json Skripten
    ```

---

## ⚙️ Nutzung (Entwicklung)

Sobald der Bot lokal läuft, kannst du ihn auf einen Test-Discord-Server einladen (über den Invite-Link im Discord Developer Portal unter OAuth2 > URL Generator). Du kannst dann alle Funktionen testen, die du gerade implementierst.

---

## 📄 Lizenz

Veröffentlicht unter der MIT License. Siehe `LICENSE` für weitere Informationen.

---

## 📞 Kontakt

Mary - [Mail](mailto:tiredmary1@gmail.com) / Discord: tiredmary

Projekt-Link: [https://github.com/tiredmary/spyral](https://github.com/tiredmary/spyral)
