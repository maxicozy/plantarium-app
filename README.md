# plantarium

In unserem Projekt haben wir, innerhalb unseres Semesters an der Hochschule für Gestaltung Schwäbisch Gmünd, ein automatisiertes Hydroponisches Bewässerungssystem mit App entwickelt. Mit diesem System kann man Pflanzen schneller großziehen und die richtigen Nährstoffe für die Pflanzen dosieren.

Der Stack besteht aus: </br>
der mit Vue.js umgesetzten **App**, </br>
einem [Backend 2](https://github.com/maxicozy/plantarium-backend-ii), dass die Daten aus der Datenbank für die App bereitstellt, </br> 
einem [Backend 1](https://github.com/maxicozy/plantarium-backend-i), dass die Daten aus dem Hydroponischen System in die Datenbank einspeist </br>
und aus den [Nodes](https://github.com/maxicozy/plantarium-nodes) die Sensordaten sammeln und die Hardware kontrollieren. </br>

Unser Prjektteam besteht aus: </br>
[Noah Mantel](https://github.com/Nodarida) </br>
[Ligia Dietze](https://github.com/Ligiki1) </br>
[Maximilian Becht](https://github.com/maxicozy) </br>
[Marius Schairer](https://github.com/marius220699) </br>

## plantarium-app

Die App wird über das zweite Backend mit Daten aus der Datenbank versorgt. Über den Setup Prozess kann man seine Gärten, Module und Pflanzen konfigurieren und überwachen.

<img src="./img/app-im-stack.png">

## Projekt setup
```
npm install
```

### Kompiliert und hot-reloadet für Entwicklung
```
npm run serve
```

### Kompliliert für Produktion
```
npm run build
```

### Lintet und fixt Dateien
```
npm run lint
```

### Konfiguration anpassen
Siehe [Konfiguartionsreferenz](https://cli.vuejs.org/config/).
