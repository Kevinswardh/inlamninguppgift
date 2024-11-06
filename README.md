# Skolprojekt: Webbsida med React och Context API

Detta projekt är en webbsida byggd med React, där vi använder Context API, Formik och Yup för att hantera data, formulärvalidering och API-anrop. Projektet innehåller flera komponenter, exempelvis för kontaktformulär, FAQ-sektion och en dynamisk kartkomponent.

## Innehållsförteckning

1. [Projektstruktur](#projektstruktur)
2. [Komponenter](#komponenter)
   - [Contact](#contact)
   - [FAQ](#faq)
   - [Reviews](#reviews)
   - [ContactMap](#contactmap)
   - [Universal Navbar och Meny](#universal-navbar-och-meny)
3. [State och Context-hantering](#state-och-context-hantering)
4. [Validering med Formik och Yup](#validering-med-formik-och-yup)


---

### Projektstruktur

Projektet är strukturerat enligt följande mapphierarki:

- **Views**: Huvudsidor som `Home`, `Features`, och `Contact`.
- **Sections**: Sektioner uppdelade baserat på respektive routes, som `contact hero` och `contact map`.
- **Components**: Återanvändbara komponenter som `DarkModeSwitch` och `HamburgerMenu`.
- **Contexts**: Innehåller `LocationContext`, för att hantera användarens platsdata.
- **Assets**: Statisk media, som bilder och ikoner.

### Komponenter

#### Contact

Contact-sektionen innehåller komponenten `SubscribeForm`, där vi använder Formik och Yup för att skapa och validera formulärfält. Formuläret använder API-anrop för att spara data och visa bekräftelse.

#### FAQ

FAQ-sektionen är en Accordion-komponent där vi asynkront hämtar data från ett API. `toggleAccordion` hanterar öppning och stängning av frågor, och varje fråga visas med en inbyggd error-hantering.

#### Reviews

I Reviews-sektionen används useState och fetch för att hämta och visa recensioner. Vi returnerar `ReviewBox`-komponenten med information om recensionstext, rating och användardata.

#### ContactMap

ContactMap använder `LocationContext` för att hantera och visa kartposition med Google Maps. `handleAddressClick` och `resetAddressBack` hanterar visning och återställning av kartpositioner.

#### Universal Navbar och Meny

Navbar-komponenten visas alltid, oavsett route, och innehåller navigeringslänkar samt DarkModeSwitch och HamburgerMenu för en responsiv upplevelse. HiddenMenu visas när isMenuOpen är `true` och döljs genom `useRef` och `eventListener` för mus- och tangentbordsinteraktion.

### State och Context-hantering

I projektet använder vi Context API för att hantera global state, exempelvis för användarens platsdata i `LocationContext`. Detta tillåter oss att dela information mellan komponenter utan att props måste skickas igenom flera nivåer.

### Validering med Formik och Yup

Vi använder Formik för formulärhantering och Yup för validering. Varje formulärfält valideras automatiskt på `onBlur` och `onSubmit`, och valideringsschemat är dynamiskt och kan anpassas efter behov.



Detta README-dokument ger en överblick av projektet och beskriver de huvudsakliga komponenterna och teknikerna som används.
