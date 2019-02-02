# INLUPPG2-JSmjQ
Inlämning 2 - JavaScript med jQuery - EVSFEH18


Du ska i denna inlämningsuppgift utöka funktionaliteten på den befintliga befintliga dashboarden. I dagsläget är all information statisk och ändras inte. Du ska därför gå in och ändra så att all information som visas på sidan uppdateras automatiskt genom så kallade HTTP RESTful API anrop.

Följande ska kunna göras:
En användare ska kunna logga in på inloggningssidan som finns tillgänglig. Användarens e-postadress och lösenord ska matcha mot informationen som finns på REST-adressen https://fe18.azurewebsites.net/api/user
All användarinformation ska visas på rätt ställen i dashboarden. Du behöver inte lägga till extra fält om det är så att viss information inte finns. 
Efter att användaren har loggat in och fått sina uppgifter validerade. ska användaren komma till sidan med dashboarden. Denna sida är färdiggjord åt dig och ditt jobb här är att få bort all statisk hårdkodad information till att istället komma från REST apiet.
En användare ska även kunna logga ut och då ska den inte kunna komma åt dashboarden utan komma till inloggningssidan istället.
Om det finns filtreringsfunktioner, såsom att filtrera på år, så ska detta fungera. Väljer jag 2018 så ska bara allt för 2018 visas.
Inlämningsinstruktioner
Du ska lägga upp allt detta i GitHub och använda dig av Git för att pusha upp detta till GitHub. Du ska sedan i ett dokument (word eller pdf) ange din länk till din GitHub så jag sedan kan gå klona din repository. Senaste inlämningsdatumet för detta är sista dagen på kursen.

 

Varje REST del motsvarar id-namnet för respektive element borträknat tecknet. Här nedan ser du alla länkar:
https://fe18.azurewebsites.net/api/totalsaleschart
https://fe18.azurewebsites.net/api/userschart
https://fe18.azurewebsites.net/api/projectschart
https://fe18.azurewebsites.net/api/downloads
https://fe18.azurewebsites.net/api/revenuechart
https://fe18.azurewebsites.net/api/distributionchart
https://fe18.azurewebsites.net/api/salereportchart
https://fe18.azurewebsites.net/api/user
https://fe18.azurewebsites.net/api/totalsales
https://fe18.azurewebsites.net/api/totalpurchases
https://fe18.azurewebsites.net/api/totalorders
https://fe18.azurewebsites.net/api/totalgrowth
https://fe18.azurewebsites.net/api/tickets
https://fe18.azurewebsites.net/api/updates
https://fe18.azurewebsites.net/api/openinvoices
https://fe18.azurewebsites.net/api/salesreportoverview
