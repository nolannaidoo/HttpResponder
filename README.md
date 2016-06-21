Nolan Naidoo
19 June 2016
Tools Development Team Lead Assessment

Ive answered this assessment using the following modules: NodeJS, Express, MongoDB, EJS, Body-Parser. The system has been designed to handle GET, POST and PUT request types across all user created request-response pairs.
This allows for more universal access. Other HTTP request types have not been catered for as others are less commonly used (eg, patch, delete, copy, head, options, link, unlink, purge, lock, unlock, propfind, view).

Ive selected NodeJS because of its quick deployment/setup time where the reviewer of this assessment will not have to worry about a LAMP, WAMP or IIS stack.
Due to the nature of the requirements of a simple web interface and quick control over http response types, I found NodeJS and Express really easy to deliver a solution.
I also selected MongoDB as a noSQL database, where I do not have to define a schema upfront. This removes the need for setup/deployment scripts on the deployment side.

Overall, my selection of a NodeJS stack was based on a combination of quick development (due to size of project), easy deployment(provided the user has terminal access) and an overall readability of the source code for simple extensions.
I by no means, am favouring a NodeJS stack as the ultimate toolset, its in this instance that NodeJS has met my requirements.

I have developed systems in:
C# - Win services/desktop apps, mobile apps and web apps(high performance socket servers, ssl, payment gateway interfaces, sms gateway interfaces, Mobile APP api's, mobile app, performance test tools)
PHP (payment gateway interfaced, EPP interface, API test tools)
Datebases: MS SQL, MySQL, Firebird, Pervasive, SSRS
I am open to provide an overview of these systems to express my technical ability of understanding and solving business problems.


Pre-REquirements
Fresh server/pc
No existing install of MongoDB
-Install NodeJS - refer to install doc
-Install MongoDB - refer to install doc
-Default MongoDB runs on port 27017

To start the server system using windows 7 or later, run "MasterStart.bat", this will start the mongodb engine and 5 seconds later, start nodejs server script.
This systm masterstart process was created for windows 7 or later only wihtout any UAC (run with admin priv).
On first start, the database will be empty - you can create new records to start using the system, please follow the functional test plan on how to use the system.

To Close the system, exit the CMD windows for MongoDB and NodeJS

TO Restart the system, after closing the system, open "MasterStart.bat"

Nice to have: form input validation (forward slash, correct formatting), clientside JS interaction to notify user of existing records

Modules used:

NodeJS (install from win installer in Libs folder)
MongoDB Server (install from win installer in Libs folder)

--Preinstalled, but listed for completeness:
Express install command: npm install express --save
MongoDB client drivers install command: npm install mongodb --save
Body-Parser install command: npm install body-parser --save
EJS install command: npm install ejs --save
