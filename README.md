# Moment 4, _Autentisering och säkerhet_
Den här README-filen har skapats för att beskriva momentets syfte och kort redogöra för processen.

## Momentets syfte

- Kunna skapa funktionalitet för autentisering med registrering av användarkonton samt inloggning.
- Kunna använda JWT's (JSON Web Token) för sessionshantering för att förhindra obehörig åtkomst till resurser.
- Kunna skydda känslig data så som lösenord i databasen.

### Arbetsprocess

Utvecklingsmiljön förbereddes med NPM. Projektstruktur samt kodsnuttar från föregående fetchAPI-uppgift användes som grund. Tre undersidor varav en skyddad sida skapades och stylades för ändamålet. Funktionalitet för registrering gjordes i main.js-filen med funktionen regUser() som efter validering av input (via funktionen checkInput()) gör ett AJAX-anrop med metoden POST. Om registreringen lyckas visas en alert och du omdirigeras till startsidan för att logga in. Vid fel, exempelvis om input saknas, visas ett felmeddelande i anslutning till formuläret. En checkbox lades till för att visa/inte visa lösenord. 

Funktionalitet för inloggning gjordes i main.js-filen, först med loginUser som efter validering av input (via funktionen checkInput()) gör ett AJAX-anrop med metoden POST. Vid lyckad inloggning läggs en JWT-token till i sessionStorage och du omdirigeras direkt till den skyddade routen "Min sida". Funktionen isLoggedIn() kontrollerar sen om du fortfarande är inloggad om du navigerar dig runt på sidan. Om du inte loggat in och vill komma åt den skyddade routen tar funktionerna isLoggedIn() och checkAuthentication() vid och kontrollerar om en JWT-token finns i sessionStorage. Finns den så visas den skyddade sidan direkt men om isLoggedIn returneras utan token körs checkAuthentication() och en alert skickas om nekad åtkomst och innehållet på "Min sida" döljs. Funktionalitet för att logga ut gjordes med en händelselyssnare på Logga ut-knappen som kör funktionen logoutUser(). Den raderar token från sessionStorage och loggar ut användaren.

#### _Skapad av Jenny Lind, jeli2308_.