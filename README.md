# Moment 4, _Autentisering och säkerhet_
Den här README-filen har skapats för att beskriva momentets syfte och kort redogöra för processen.

## Momentets syfte

- Kunna skapa funktionalitet för autentisering med registrering av användarkonton samt inloggning.
- Kunna använda JWT's (JSON Web Token) för sessionshantering för att förhindra obehörig åtkomst till resurser.
- Kunna skydda känslig data så som lösenord i databasen.

### Arbetsprocess

Utvecklingsmiljön förbereddes med NPM och projektstruktur samt kodsnuttar från föregående fetchAPI-uppgift användes som grund. Tre undersidor varav en skyddad sida skapades och stylades för ändamålet. Funktionalitet för registrering görs i main.js-filen med funktionen regUser() som hämtar in inputvärden och gör ett AJAX-anrop med metoden POST. Om registreringen lyckas visas en alert och du omdirigeras till startsidan för att logga in.

#### _Skapad av Jenny Lind, jeli2308_.