# Presentaties Cloud systemen
Deze presentaties gebruiken Reveal.js. Om de code van deze library gescheiden te houden van die van de slides zelf, wordt gebruik gemaakt van een Git submodule.

Dit betekent dat de repository op de gewone manier clonen niet volstaat. Je moet de extra vlag `--recurse-submodules` gebruiken bij de `git clone`-operatie om Reveal.js ook te downloaden.

Zorg dan dat alles geïnstalleerd is: `npm i`, zowel in de `reveal.js` folder als in de repository root.

Start een presentatie door volgend commando te runnen van uit de repository root: `node server.js labX`, waarbij `labX` de foldernaam van het labo in kwestie is, bijvoorbeeld `node server.js lab3` voor de slides van labo 3.
