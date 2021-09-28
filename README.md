# pyp-project-01-JavidSelimov12345
pyp-project-01-JavidSelimov12345 created by GitHub Classroom

## To learn more you can watch demo video in youtube about app  https://www.youtube.com/watch?v=T9LKEK-BvDg

## Front side deployed on
[Client](https://covid-weather-youtube-newsapp.netlify.app/)

# For authentication i needed server side
### server deployed on heroku 
[server](https://server-pyp-covid.herokuapp.com/)

A small comparative web application showing Covid-19 statistics, weather,youtube search,
and news.The application is created with react-redux typescript technologies.
App enhanced with voice recognition.User can manage links with voice.
Navigation is regulated by the react-router-dom package.Private-route
is applied. Users can login and register in the application.While 
registering in the application, a request is sent to the server 
deployed in Heroku.The token returns and it is stored in local storage.
If the user is not registered and does not have a local storage token,
they will be redirected to the login page.When the page is loaded for
the first time,the data is retrieved from the api via redux using axios
technology.The information is called inside the App component in useEffect.
For styling several methods were used.Css file, emotion styled package,
inline css.The packages which used in the application are: React-redux, redux,
axios,redux-devtools-extension,alan-ai, redux-thunk, chart-js, chart-js-2,leaflet,
react-countup, @ emotion / react.The hidden page contains general statistics 
and then the names of countries.When you click on countries, you get
general graphical information. Bar, Linear, Pie, Bubble charts.
You can compare by clicking on one or more countries.Selected countries
can be removed from the comparison zone by clicking again.The first page
contains information general statistics.Here user can search by countries the latest
covid statistics.The second page contains table format information.The page uses search,
pagination,filtering..On the third page(map view)Covid statistics are given on the geomap.
Data retrieved with axios inside useEffect.And setting state.Which after
uses for looping to share information on the map.The fourth page is about
weather.The information about weather you can get without login.When logging out the 
token deleted from locale storage.And user redirect to the login page again.Fifth page
is about searching in youtube.Here you can search by several methods.By typing and also,
with voice assitants help.At the last page you can search news about everything.
