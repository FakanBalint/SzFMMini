| Modul  | Id  | Név  | Kifejtés  |
|---|---|---|---|
|  Általános leírás |  1 | Általános leírás  | Egy webes aplikáció létrehozására lenne szükség, ami azt a feldatot látja el, hogy felhasználói regisztráció után egy fa ültethető, naponta gondozható legyen.  |
|  Követelmények |  2 | Felhasználói interfész  | Felhasználóbarát és könnyen kezelhető felhasználói interfész biztosítása.  |
|   |  3 |  Felhasználói regisztráció és bejelentkezés |  Felhasználók regisztrálásának és bejelentkezésének lehetősége. |
|   |  4 |  Fák ültetése | Felhasználóknak lehetőségük van egy új fa ültetésére.  |
|   |  5 | Fák gondozása  | Felhasználóknak gondozniuk kell az ültetett fákat, napi bejelentkezéssel.  |
___ 
 # Oldal kinézete
| Modul  | Id  | Név  |  Kifejtés |
|---|---|---|---|
| UI  | 1  |  Autentikáció | Be és ki jelentkezésre alkalmas felület, illetve regisztráció.  |
|   | 2  | Háttér  | Egy felhasználó számára igényes háttér alkalmazása.  |
|   | 3  | Kivágás / Ültetés gomb  | Ha nincs fánk, akkor ültethessünk egyet, ha pedig van, akkor bármikor kivághatjuk azt.  |
|   | 4  | Fa életkora  | Ha van ültetett fa, akkor alatta megjelenjen a fa életkora.  |
|   | 5  | Fa kinézetek választása  | Legördülő menü, melynél különböző fa kinézeteket lehet választani ültetésnél.  |
|   | 6  | Leaderboard  | Top 5 legrégebbi fával rendelkező user kiiratása, idővel együtt.  |

## Er diagram 
```plantuml
@startuml
entity User{
 UID char(6) <<PK>>
 Username: char(40) <<NOT NULL>>
 Password: char(40) <<NOT NULL>>
 Last_login: Date
 Date_joined: Date
 PlantedTrees: number(4)
}
entity Tree{
 TreeID: number(6) <<PK>>
 Plant_Date: Date
 TreeType: char(40)
}
entity User_Tree_connection {
 UserID: char(6) <<FK>>
 TreeID: number(10) <<FK>>
}

User||--o{ User_Tree_connection
Tree||--o{ User_Tree_connection```
