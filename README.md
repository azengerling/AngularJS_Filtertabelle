# AngularJS - Filtertabelle

Eine Beispielanwendung zum Verwalten von Telefonnummern, realisiert mit AngularJS.

## Anforderungen
- Anzeige von Einträgen in einer Liste (Name und Telefonnummer) 
- Anlegen von Einträgen
- Bearbeiten bestehender Einträge 
- Löschen bestehender Einträge 
- Suche nach Namen 
- Anzeige der Erstellungszeit 

## Anwendung

### Neuer Eintrag
Im oberen linken Bereich befindet sich ein Eingabefeld zum Hinzufügen neuer Einträge.
Das Absetzen eines einzelnen Begriffs trägt lediglich eine neue Zeile mit einem Vornamen ein. 
Sollen für einen Eintrag alle Eigenschaften gesetzt werden, kann die Eingabe kommasepariert erfolgen.

***Beispieleintrag ohne Ort:**

    Vorname: Peter
    Nachname: Pan
    Ort: 
    Telefon: 555-1234

***schreibt man:***	

````
Peter,Pan,,555-1234
````

### Einträge suchen
Auf der rechten Seite findet man ein Eingabefeld, um nach Einträgen filtern zu können.
Die Suche wird auf alle Eigenschaften des Eintrags angewendet.

### Aktionen für Einträge
Für jede Zeile in der Tabelle gibt es die Möglichkeit, Einträge zu ändern oder zu löschen.

#### Eintrag ändern
Es öffnet sich ein modaler Dialog der es ermöglicht, einzelne Eigenschaften eines Eintrags ändern zu können.

#### Eintrag löschen
Der Eintrag wird ohne Nachfrage entfernt.


