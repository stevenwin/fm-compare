// Date string parser into int(date) in years
function dateToDay(date) {
var d = Date.parse(date);
var minutes = 1000 * 60;
var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return day;
}

// Date string parser into int(date) in days
function dateToYear(date) {
var d = Date.parse(date);
var minutes = 1000 * 60;
var minute = d / minutes
var hour = minute / 60
var day = hour / 24
var year = day / 365
return year;
}


var fighter_url = [
 {
   "name": "Conor McGregor",
   "url": "/fighter/Conor-McGregor-29688"
 },
 {
   "name": "Jon Jones",
   "url": "/fighter/Jon-Jones-27944"
 },
 {
   "name": "Holly Holm",
   "url": "/fighter/Holly-Holm-75125"
 },
 {
   "name": "Dominick Cruz",
   "url": "/fighter/Dominick-Cruz-12107"
 },
 {
   "name": "Demetrious Johnson",
   "url": "/fighter/Demetrious-Johnson-45452"
 },
 {
   "name": "Ronda Rousey",
   "url": "/fighter/Ronda-Rousey-73073"
 },
 {
   "name": "Fabricio Werdum",
   "url": "/fighter/Fabricio-Werdum-8390"
 },
 {
   "name": "Robbie Lawler",
   "url": "/fighter/Robbie-Lawler-2245"
 },
 {
   "name": "Jose Aldo",
   "url": "/fighter/Jose-Aldo-11506"
 },
 {
   "name": "Chad Mendes",
   "url": "/fighter/Chad-Mendes-38393"
 },
 {
   "name": "Dustin Poirier",
   "url": "/fighter/Dustin-Poirier-50529"
 },
 {
   "name": "Marcus Brimage",
   "url": "/fighter/Marcus-Brimage-21618"
 },
 {
   "name": "Diego Brandao",
   "url": "/fighter/Diego-Brandao-25097"
 },
 {
   "name": "Max Holloway",
   "url": "/fighter/Max-Holloway-38671"
 },
 {
   "name": "Joseph Duffy",
   "url": "/fighter/Joseph-Duffy-17052"
 },
 {
   "name": "Kevin Randleman",
   "url": "/fighter/Kevin-Randleman-162"
 },
 {
   "name": "Vitor Belfort",
   "url": "/fighter/Vitor-Belfort-156"
 },
 {
   "name": "Rashad Evans",
   "url": "/fighter/Rashad-Evans-10200"
 },
 {
   "name": "Ryan Bader",
   "url": "/fighter/Ryan-Bader-22858"
 },
 {
   "name": "Michael Bisping",
   "url": "/fighter/Michael-Bisping-10196"
 },
 {
   "name": "Alexander Gustafsson",
   "url": "/fighter/Alexander-Gustafsson-26162"
 },
 {
   "name": "Vladimir Matyushenko",
   "url": "/fighter/Vladimir-Matyushenko-435"
 },
 {
   "name": "Lyoto Machida",
   "url": "/fighter/Lyoto-Machida-7513"
 },
 {
   "name": "Quinton Jackson",
   "url": "/fighter/Quinton-Jackson-348"
 },
 {
   "name": "Brandon Vera",
   "url": "/fighter/Brandon-Vera-4886"
 },
 {
   "name": "Mauricio Rua",
   "url": "/fighter/Mauricio-Rua-5707"
 },
 {
   "name": "Stephan Bonnar",
   "url": "/fighter/Stephan-Bonnar-3014"
 },
 {
   "name": "Mark Kerr",
   "url": "/fighter/Mark-Kerr-71"
 },
 {
   "name": "James Toney",
   "url": "/fighter/James-Toney-60940"
 },
 {
   "name": "Randy Couture",
   "url": "/fighter/Randy-Couture-166"
 },
 {
   "name": "Marion Reneau",
   "url": "/fighter/Marion-Reneau-61266"
 },
 {
   "name": "Anthony Pettis",
   "url": "/fighter/Anthony-Pettis-26627"
 },
 {
   "name": "Miesha Tate",
   "url": "/fighter/Miesha-Tate-26252"
 },
 {
   "name": "Donald Cerrone",
   "url": "/fighter/Donald-Cerrone-15105"
 },
 {
   "name": "Raquel Pennington",
   "url": "/fighter/Raquel-Pennington-75564"
 },
 {
   "name": "Alex Oliveira",
   "url": "/fighter/Alex-Oliveira-110143"
 },
 {
   "name": "Urijah Faber",
   "url": "/fighter/Urijah-Faber-8847"
 },
 {
   "name": "Scott Jorgensen",
   "url": "/fighter/Scott-Jorgensen-16852"
 },
 {
   "name": "Ian McCall",
   "url": "/fighter/Ian-McCall-5001"
 },
 {
   "name": "Chris Weidman",
   "url": "/fighter/Chris-Weidman-42804"
 },
 {
   "name": "Paul Bradley",
   "url": "/fighter/Paul-Bradley-19726"
 },
 {
   "name": "Tim Boetsch",
   "url": "/fighter/Tim-Boetsch-19544"
 },
 {
   "name": "Ronaldo Souza",
   "url": "/fighter/Ronaldo-Souza-8394"
 },
 {
   "name": "Junior dos Santos",
   "url": "/fighter/Junior-dos-Santos-17272"
 },
 {
   "name": "Jesse Taylor",
   "url": "/fighter/Jesse-Taylor-17389"
 },
 {
   "name": "Stephen Thompson",
   "url": "/fighter/Stephen-Thompson-59608"
 },
 {
   "name": "Keith Jardine",
   "url": "/fighter/Keith-Jardine-2638"
 },
 {
   "name": "Dan Henderson",
   "url": "/fighter/Dan-Henderson-195"
 },
 {
   "name": "Kevin Ferguson",
   "url": "/fighter/Kevin-Ferguson-22388"
 },
 {
   "name": "Ken Shamrock",
   "url": "/fighter/Ken-Shamrock-4"
 },
 {
   "name": "Anthony Johnson",
   "url": "/fighter/Anthony-Johnson-17662"
 },
 {
   "name": "Antonio Rodrigo Nogueira",
   "url": "/fighter/Antonio-Rodrigo-Nogueira-1440"
 },
 {
   "name": "Joe Doerksen",
   "url": "/fighter/Joe-Doerksen-390"
 },
 {
   "name": "Carlos Condit",
   "url": "/fighter/Carlos-Condit-6765"
 },
 {
   "name": "Tim Hague",
   "url": "/fighter/Tim-Hague-19599"
 },
 {
   "name": "Houston Alexander",
   "url": "/fighter/Houston-Alexander-2352"
 },
 {
   "name": "Jared Cannonier",
   "url": "/fighter/Jared-Cannonier-78628"
 },
 {
   "name": "Shamil Abdurakhimov",
   "url": "/fighter/Shamil-Abdurakhimov-26808"
 },
 {
   "name": "Jeremy Horn",
   "url": "/fighter/Jeremy-Horn-202"
 },
 {
   "name": "Ilir Latifi",
   "url": "/fighter/Ilir-Latifi-40207"
 },
 {
   "name": "Alexey Oleinik",
   "url": "/fighter/Alexey-Oleinik-2027"
 },
 {
   "name": "Darrill Schoonover",
   "url": "/fighter/Darrill-Schoonover-33084"
 },
 {
   "name": "Jason Lambert",
   "url": "/fighter/Jason-Lambert-495"
 },
 {
   "name": "Jeff Monson",
   "url": "/fighter/Jeff-Monson-262"
 },
 {
   "name": "Mike Kyle",
   "url": "/fighter/Mike-Kyle-3619"
 },
 {
   "name": "Joey Beltran",
   "url": "/fighter/Joey-Beltran-21219"
 },
 {
   "name": "Wes Combs",
   "url": "/fighter/Wes-Combs-4371"
 },
 {
   "name": "Kyle Kingsbury",
   "url": "/fighter/Kyle-Kingsbury-16558"
 },
 {
   "name": "Justin Levens",
   "url": "/fighter/Justin-Levens-10226"
 },
 {
   "name": "Benson Henderson",
   "url": "/fighter/Benson-Henderson-20548"
 },
 {
   "name": "Kamal Shalorus",
   "url": "/fighter/Kamal-Shalorus-31151"
 },
 {
   "name": "Anthony Hamilton",
   "url": "/fighter/Anthony-Hamilton-58947"
 },
 {
   "name": "Clay Guida",
   "url": "/fighter/Clay-Guida-8184"
 },
 {
   "name": "Jason High",
   "url": "/fighter/Jason-High-14185"
 },
 {
   "name": "Khabib Nurmagomedov",
   "url": "/fighter/Khabib-Nurmagomedov-56035"
 },
 {
   "name": "Jeremy Stephens",
   "url": "/fighter/Jeremy-Stephens-12179"
 },
 {
   "name": "Anthony Njokuani",
   "url": "/fighter/Anthony-Njokuani-7540"
 },
 {
   "name": "Robert Emerson",
   "url": "/fighter/Robert-Emerson-5286"
 },
 {
   "name": "Henry Cejudo",
   "url": "/fighter/Henry-Cejudo-125297"
 },
 {
   "name": "John Dodson",
   "url": "/fighter/John-Dodson-11660"
 },
 {
   "name": "Chris Cariaso",
   "url": "/fighter/Chris-Cariaso-16467"
 },
 {
   "name": "Ali Bagautinov",
   "url": "/fighter/Ali-Bagautinov-81198"
 },
 {
   "name": "Norifumi Yamamoto",
   "url": "/fighter/Norifumi-Yamamoto-1354"
 },
 {
   "name": "Damacio Page",
   "url": "/fighter/Damacio-Page-12158"
 },
 {
   "name": "Brad Pickett",
   "url": "/fighter/Brad-Pickett-11743"
 },
 {
   "name": "Cat Zingano",
   "url": "/fighter/Cat-Zingano-33932"
 },
 {
   "name": "Alexis Davis",
   "url": "/fighter/Alexis-Davis-22071"
 },
 {
   "name": "Liz Carmouche",
   "url": "/fighter/Liz-Carmouche-67007"
 },
 {
   "name": "Roy Nelson",
   "url": "/fighter/Roy-Nelson-10249"
 },
 {
   "name": "Alistair Overeem",
   "url": "/fighter/Alistair-Overeem-461"
 },
 {
   "name": "Gabriel Gonzaga",
   "url": "/fighter/Gabriel-Gonzaga-7306"
 },
 {
   "name": "Andrei Arlovski",
   "url": "/fighter/Andrei-Arlovski-270"
 },
 {
   "name": "Travis Browne",
   "url": "/fighter/Travis-Browne-16785"
 },
 {
   "name": "James Zikic",
   "url": "/fighter/James-Zikic-1767"
 },
 {
   "name": "Mark Hunt",
   "url": "/fighter/Mark-Hunt-10668"
 },
 {
   "name": "John Olav Einemo",
   "url": "/fighter/John-Olav-Einemo-2873"
 },
 {
   "name": "Kristof Midoux",
   "url": "/fighter/Kristof-Midoux-3363"
 },
 {
   "name": "Antonio Silva",
   "url": "/fighter/Antonio-Silva-12354"
 },
 {
   "name": "Ebenezer Fontes Braga",
   "url": "/fighter/Ebenezer-Fontes-Braga-207"
 },
 {
   "name": "Valerie Letourneau",
   "url": "/fighter/Valerie-Letourneau-21851"
 },
 {
   "name": "Rosi Sexton",
   "url": "/fighter/Rosi-Sexton-5358"
 },
 {
   "name": "Juliana Lima",
   "url": "/fighter/Juliana-Lima-73710"
 },
 {
   "name": "Claudia Gadelha",
   "url": "/fighter/Claudia-Gadelha-48404"
 },
 {
   "name": "Carla Esparza",
   "url": "/fighter/Carla-Esparza-63410"
 },
 {
   "name": "Johny Hendricks",
   "url": "/fighter/Johny-Hendricks-24539"
 },
 {
   "name": "Jake Ellenberger",
   "url": "/fighter/Jake-Ellenberger-13068"
 },
 {
   "name": "Matt Brown",
   "url": "/fighter/Matt-Brown-14310"
 },
 {
   "name": "Jessica Aguilar",
   "url": "/fighter/Jessica-Aguilar-15174"
 },
 {
   "name": "Renato Sobral",
   "url": "/fighter/Renato-Sobral-274"
 },
 {
   "name": "Lorenz Larkin",
   "url": "/fighter/Lorenz-Larkin-51345"
 },
 {
   "name": "Rory MacDonald",
   "url": "/fighter/Rory-MacDonald-14018"
 },
 {
   "name": "Adlan Amagov",
   "url": "/fighter/Adlan-Amagov-41523"
 },
 {
   "name": "Bobby Voelker",
   "url": "/fighter/Bobby-Voelker-15156"
 },
 {
   "name": "Jason Miller",
   "url": "/fighter/Jason-Miller-7798"
 },
 {
   "name": "Josh Koscheck",
   "url": "/fighter/Josh-Koscheck-9418"
 },
 {
   "name": "Scott Smith",
   "url": "/fighter/Scott-Smith-2578"
 },
 {
   "name": "Matt Lindland",
   "url": "/fighter/Matt-Lindland-276"
 },
 {
   "name": "Frank Trigg",
   "url": "/fighter/Frank-Trigg-311"
 },
 {
   "name": "Falaniko Vitale",
   "url": "/fighter/Falaniko-Vitale-370"
 },
 {
   "name": "Pete Spratt",
   "url": "/fighter/Pete-Spratt-3195"
 },
 {
   "name": "Chris Lytle",
   "url": "/fighter/Chris-Lytle-267"
 },
 {
   "name": "Steve Berger",
   "url": "/fighter/Steve-Berger-1303"
 },
 {
   "name": "Chris Leben",
   "url": "/fighter/Chris-Leben-6258"
 },
 {
   "name": "Dean Lister",
   "url": "/fighter/Dean-Lister-338"
 },
 {
   "name": "Danillo Villefort",
   "url": "/fighter/Danillo-Villefort-13093"
 },
 {
   "name": "Ronald Jhun",
   "url": "/fighter/Ronald-Jhun-524"
 },
 {
   "name": "Phil Baroni",
   "url": "/fighter/Phil-Baroni-278"
 },
 {
   "name": "David Loiseau",
   "url": "/fighter/David-Loiseau-903"
 },
 {
   "name": "Jorge Santiago",
   "url": "/fighter/Jorge-Santiago-5735"
 },
 {
   "name": "Tim Credeur",
   "url": "/fighter/Tim-Credeur-1804"
 },
 {
   "name": "David Terrell",
   "url": "/fighter/David-Terrell-536"
 },
 {
   "name": "Julie Kedzie",
   "url": "/fighter/Julie-Kedzie-10093"
 },
 {
   "name": "Seth Petruzelli",
   "url": "/fighter/Seth-Petruzelli-2738"
 },
 {
   "name": "Todd Medina",
   "url": "/fighter/Todd-Medina-61"
 },
 {
   "name": "Jorge Rivera",
   "url": "/fighter/Jorge-Rivera-2712"
 },
 {
   "name": "Steven Ray",
   "url": "/fighter/Steven-Ray-59838"
 },
 {
   "name": "Mairbek Taisumov",
   "url": "/fighter/Mairbek-Taisumov-33161"
 },
 {
   "name": "Chan Sung Jung",
   "url": "/fighter/Chan-Sung-Jung-36155"
 },
 {
   "name": "Ricardo Lamas",
   "url": "/fighter/Ricardo-Lamas-32051"
 },
 {
   "name": "Kenny Florian",
   "url": "/fighter/Kenny-Florian-8021"
 },
 {
   "name": "Frankie Edgar",
   "url": "/fighter/Frankie-Edgar-14204"
 },
 {
   "name": "Manny Gamburyan",
   "url": "/fighter/Manny-Gamburyan-5185"
 },
 {
   "name": "Mark Hominick",
   "url": "/fighter/Mark-Hominick-4728"
 },
 {
   "name": "Phil Harris",
   "url": "/fighter/Phil-Harris-8753"
 },
 {
   "name": "Michihiro Omigawa",
   "url": "/fighter/Michihiro-Omigawa-13005"
 },
 {
   "name": "Cody McKenzie",
   "url": "/fighter/Cody-McKenzie-22173"
 },
 {
   "name": "Darren Elkins",
   "url": "/fighter/Darren-Elkins-22094"
 },
 {
   "name": "Nik Lentz",
   "url": "/fighter/Nik-Lentz-15058"
 },
 {
   "name": "Javier Vazquez",
   "url": "/fighter/Javier-Vazquez-511"
 },
 {
   "name": "Erik Koch",
   "url": "/fighter/Erik-Koch-23390"
 },
 {
   "name": "Steven Siler",
   "url": "/fighter/Steven-Siler-22537"
 },
 {
   "name": "Pablo Garza",
   "url": "/fighter/Pablo-Garza-35448"
 },
 {
   "name": "Yancy Medeiros",
   "url": "/fighter/Yancy-Medeiros-27738"
 },
 {
   "name": "Jason Young",
   "url": "/fighter/Jason-Young-17758"
 },
 {
   "name": "Danny Castillo",
   "url": "/fighter/Danny-Castillo-26070"
 },
 {
   "name": "Josh Grispi",
   "url": "/fighter/Josh-Grispi-20416"
 },
 {
   "name": "Paul Felder",
   "url": "/fighter/Paul-Felder-68205"
 },
 {
   "name": "Kyle Noke",
   "url": "/fighter/Kyle-Noke-7632"
 },
 {
   "name": "Tatsuya Kawajiri",
   "url": "/fighter/Tatsuya-Kawajiri-1326"
 },
 {
   "name": "Hacran Dias",
   "url": "/fighter/Hacran-Dias-19789"
 },
 {
   "name": "Charles Rosa",
   "url": "/fighter/Charles-Rosa-71116"
 },
 {
   "name": "Ross Pearson",
   "url": "/fighter/Ross-Pearson-11884"
 },
 {
   "name": "Daron Cruickshank",
   "url": "/fighter/Daron-Cruickshank-53717"
 },
 {
   "name": "Diego Nunes",
   "url": "/fighter/Diego-Nunes-25981"
 },
 {
   "name": "Matt Wiman",
   "url": "/fighter/Matt-Wiman-12236"
 },
 {
   "name": "Paul Kelly",
   "url": "/fighter/Paul-Kelly-14028"
 },
 {
   "name": "Gray Maynard",
   "url": "/fighter/Gray-Maynard-15835"
 },
 {
   "name": "B.J. Penn",
   "url": "/fighter/BJ-Penn-1307"
 },
 {
   "name": "Artem Lobov",
   "url": "/fighter/Artem-Lobov-73700"
 },
 {
   "name": "Tom Niinimaki",
   "url": "/fighter/Tom-Niinimaki-5639"
 },
 {
   "name": "Jimmie Rivera",
   "url": "/fighter/Jimmie-Rivera-40954"
 },
 {
   "name": "Cody Garbrandt",
   "url": "/fighter/Cody-Garbrandt-50381"
 },
 {
   "name": "Maximo Blanco",
   "url": "/fighter/Maximo-Blanco-36618"
 },
 {
   "name": "Jumabieke Tuerxun",
   "url": "/fighter/Jumabieke-Tuerxun-83505"
 },
 {
   "name": "Jim Hettes",
   "url": "/fighter/Jim-Hettes-48046"
 },
 {
   "name": "Stephen Bass",
   "url": "/fighter/Stephen-Bass-28788"
 },
 {
   "name": "Rose Namajunas",
   "url": "/fighter/Rose-Namajunas-69083"
 },
 {
   "name": "Joanne Calderwood",
   "url": "/fighter/Joanne-Calderwood-94103"
 },
 {
   "name": "Paige VanZant",
   "url": "/fighter/Paige-VanZant-99019"
 },
 {
   "name": "Daniel Pineda",
   "url": "/fighter/Daniel-Pineda-21564"
 },
 {
   "name": "Augusto Mendes",
   "url": "/fighter/Augusto-Mendes-160663"
 },
 {
   "name": "Dennis Bermudez",
   "url": "/fighter/Dennis-Bermudez-58065"
 },
 {
   "name": "Iuri Alcantara",
   "url": "/fighter/Iuri-Alcantara-16129"
 },
 {
   "name": "Levan Makashvili",
   "url": "/fighter/Levan-Makashvili-126881"
 },
 {
   "name": "Joey Gambino",
   "url": "/fighter/Joey-Gambino-55503"
 },
 {
   "name": "Brian Ortega",
   "url": "/fighter/Brian-Ortega-65310"
 },
 {
   "name": "Chas Skelly",
   "url": "/fighter/Chas-Skelly-47227"
 },
 {
   "name": "Andre Fili",
   "url": "/fighter/Andre-Fili-58385"
 },
 {
   "name": "Clay Collard",
   "url": "/fighter/Clay-Collard-78465"
 },
 {
   "name": "Justin Lawrence",
   "url": "/fighter/Justin-Lawrence-73756"
 },
 {
   "name": "Charles Oliveira",
   "url": "/fighter/Charles-Oliveira-30300"
 },
 {
   "name": "Pat Schilling",
   "url": "/fighter/Pat-Schilling-54054"
 },
 {
   "name": "Leonard Garcia",
   "url": "/fighter/Leonard-Garcia-2815"
 },
 {
   "name": "Will Chope",
   "url": "/fighter/Will-Chope-69087"
 },
 {
   "name": "Cole Miller",
   "url": "/fighter/Cole-Miller-13133"
 },
 {
   "name": "Norman Parke",
   "url": "/fighter/Norman-Parke-47549"
 },
 {
   "name": "Jake Lindsey",
   "url": "/fighter/Jake-Lindsey-57214"
 },
 {
   "name": "Paul Daley",
   "url": "/fighter/Paul-Daley-4270"
 },
 {
   "name": "Ivan Jorge",
   "url": "/fighter/Ivan-Jorge-5432"
 },
 {
   "name": "Abel Trujillo",
   "url": "/fighter/Abel-Trujillo-17129"
 },
 {
   "name": "Tony Sims",
   "url": "/fighter/Tony-Sims-30021"
 },
 {
   "name": "Leigh Remedios",
   "url": "/fighter/Leigh-Remedios-3071"
 },
 {
   "name": "Curt Warburton",
   "url": "/fighter/Curt-Warburton-34623"
 },
 {
   "name": "Maciej Jewtuszko",
   "url": "/fighter/Maciej-Jewtuszko-27440"
 },
 {
   "name": "Joe Riggs",
   "url": "/fighter/Joe-Riggs-2765"
 },
 {
   "name": "Tito Ortiz",
   "url": "/fighter/Tito-Ortiz-158"
 },
 {
   "name": "Georges St. Pierre",
   "url": "/fighter/Georges-St.-Pierre-3500"
 },
 {
   "name": "David Mitchell",
   "url": "/fighter/David-Mitchell-16830"
 },
 {
   "name": "Neil Seery",
   "url": "/fighter/Neil-Seery-14062"
 },
 {
   "name": "Patrick Holohan",
   "url": "/fighter/Patrick-Holohan-63616"
 },
 {
   "name": "Chuck Liddell",
   "url": "/fighter/Chuck-Liddell-192"
 },
 {
   "name": "Ron Waterman",
   "url": "/fighter/Ron-Waterman-217"
 },
 {
   "name": "Mike Whitehead",
   "url": "/fighter/Mike-Whitehead-4397"
 },
 {
   "name": "Kazuhiro Nakamura",
   "url": "/fighter/Kazuhiro-Nakamura-6943"
 },
 {
   "name": "Mirko Filipovic",
   "url": "/fighter/Mirko-Filipovic-2326"
 },
 {
   "name": "Pedro Rizzo",
   "url": "/fighter/Pedro-Rizzo-208"
 },
 {
   "name": "Maurice Smith",
   "url": "/fighter/Maurice-Smith-175"
 },
 {
   "name": "Josh Barnett",
   "url": "/fighter/Josh-Barnett-272"
 },
 {
   "name": "Mario Neto",
   "url": "/fighter/Mario-Neto-1950"
 },
 {
   "name": "Pete Williams",
   "url": "/fighter/Pete-Williams-201"
 },
 {
   "name": "Dan Bobish",
   "url": "/fighter/Dan-Bobish-174"
 },
 {
   "name": "Patrick Cummins",
   "url": "/fighter/Patrick-Cummins-72981"
 },
 {
   "name": "Soa Palelei",
   "url": "/fighter/Soa-Palelei-9680"
 },
 {
   "name": "James Vick",
   "url": "/fighter/James-Vick-81956"
 },
 {
   "name": "Phil Davis",
   "url": "/fighter/Phil-Davis-27802"
 },
 {
   "name": "Glaico Franca",
   "url": "/fighter/Glaico-Franca-117927"
 },
 {
   "name": "Marvin Eastman",
   "url": "/fighter/Marvin-Eastman-339"
 },
 {
   "name": "Antonio Mendes",
   "url": "/fighter/Antonio-Mendes-7110"
 },
 {
   "name": "Ovince St. Preux",
   "url": "/fighter/Ovince-St-Preux-38842"
 },
 {
   "name": "Marcio Cruz",
   "url": "/fighter/Marcio-Cruz-13976"
 },
 {
   "name": "Fabio Maldonado",
   "url": "/fighter/Fabio-Maldonado-16426"
 },
 {
   "name": "Rameau Thierry Sokoudjou",
   "url": "/fighter/Rameau-Thierry-Sokoudjou-17010"
 },
 {
   "name": "Ricco Rodriguez",
   "url": "/fighter/Ricco-Rodriguez-8"
 },
 {
   "name": "Ed Herman",
   "url": "/fighter/Ed-Herman-6561"
 },
 {
   "name": "Bryan Barberena",
   "url": "/fighter/Bryan-Barberena-51471"
 },
 {
   "name": "Antonio Rogerio Nogueira",
   "url": "/fighter/Antonio-Rogerio-Nogueira-2270"
 },
 {
   "name": "Matt Horwich",
   "url": "/fighter/Matt-Horwich-8654"
 },
 {
   "name": "Chad Griggs",
   "url": "/fighter/Chad-Griggs-15932"
 },
 {
   "name": "Sage Northcutt",
   "url": "/fighter/Sage-Northcutt-130911"
 },
 {
   "name": "Masio Fullen",
   "url": "/fighter/Masio-Fullen-40356"
 },
 {
   "name": "Alex Caceres",
   "url": "/fighter/Alex-Caceres-41586"
 },
 {
   "name": "Alexander Yakovlev",
   "url": "/fighter/Alexander-Yakovlev-10846"
 },
 {
   "name": "Kevin Casey",
   "url": "/fighter/Kevin-Casey-24121"
 },
 {
   "name": "Olivier Aubin-Mercier",
   "url": "/fighter/Olivier-Aubin-Mercier-86241"
 },
 {
   "name": "Rafael Natal",
   "url": "/fighter/Rafael-Natal-13968"
 },
 {
   "name": "Myles Jury",
   "url": "/fighter/Myles-Jury-34236"
 },
 {
   "name": "Matt Serra",
   "url": "/fighter/Matt-Serra-1305"
 },
 {
   "name": "Anderson Silva",
   "url": "/fighter/Anderson-Silva-1356"
 },
 {
   "name": "Yoel Romero",
   "url": "/fighter/Yoel-Romero-60762"
 },
 {
   "name": "Luke Sanders",
   "url": "/fighter/Luke-Sanders-74975"
 },
 {
   "name": "Gegard Mousasi",
   "url": "/fighter/Gegard-Mousasi-7466"
 },
 {
   "name": "Ben Saunders",
   "url": "/fighter/Ben-Saunders-10339"
 },
 {
   "name": "Patrick Cote",
   "url": "/fighter/Patrick-Cote-6612"
 },
 {
   "name": "Matt Mitrione",
   "url": "/fighter/Matt-Mitrione-49519"
 },
 {
   "name": "Francisco Trinaldo",
   "url": "/fighter/Francisco-Trinaldo-31103"
 },
 {
   "name": "Rich Franklin",
   "url": "/fighter/Rich-Franklin-392"
 },
 {
   "name": "Brian Stann",
   "url": "/fighter/Brian-Stann-14829"
 },
 {
   "name": "Alex Stiebling",
   "url": "/fighter/Alex-Stiebling-269"
 },
 {
   "name": "Nate Marquardt",
   "url": "/fighter/Nate-Marquardt-1712"
 },
 {
   "name": "Yushin Okami",
   "url": "/fighter/Yushin-Okami-5569"
 },
 {
   "name": "Terry Martin",
   "url": "/fighter/Terry-Martin-7202"
 },
 {
   "name": "Heath Herring",
   "url": "/fighter/Heath-Herring-13"
 },
 {
   "name": "Yoshihiro Akiyama",
   "url": "/fighter/Yoshihiro-Akiyama-11895"
 },
 {
   "name": "Kazuo Takahashi",
   "url": "/fighter/Kazuo-Takahashi-153"
 },
 {
   "name": "Wanderlei Silva",
   "url": "/fighter/Wanderlei-Silva-209"
 },
 {
   "name": "Tra Telligman",
   "url": "/fighter/Tra-Telligman-157"
 },
 {
   "name": "Jon Hess",
   "url": "/fighter/Jon-Hess-59"
 },
 {
   "name": "Gilbert Yvel",
   "url": "/fighter/Gilbert-Yvel-323"
 },
 {
   "name": "Sam Hoger",
   "url": "/fighter/Sam-Hoger-6445"
 },
 {
   "name": "Brad Imes",
   "url": "/fighter/Brad-Imes-11453"
 },
 {
   "name": "Teruto Ishihara",
   "url": "/fighter/Teruto-Ishihara-78898"
 },
 {
   "name": "Carmelo Marrero",
   "url": "/fighter/Carmelo-Marrero-12855"
 },
 {
   "name": "Brandon Thatch",
   "url": "/fighter/Brandon-Thatch-22298"
 },
 {
   "name": "Siyar Bahadurzada",
   "url": "/fighter/Siyar-Bahadurzada-5453"
 },
 {
   "name": "Julian Erosa",
   "url": "/fighter/Julian-Erosa-71442"
 },
 {
   "name": "Vinny Magalhaes",
   "url": "/fighter/Vinny-Magalhaes-10709"
 },
 {
   "name": "Rafael Cavalcante",
   "url": "/fighter/Rafael-Cavalcante-16161"
 },
 {
   "name": "Jason Brilz",
   "url": "/fighter/Jason-Brilz-1927"
 },
 {
   "name": "Anthony Perosh",
   "url": "/fighter/Anthony-Perosh-9491"
 },
 {
   "name": "Eric Schafer",
   "url": "/fighter/Eric-Schafer-13275"
 },
 {
   "name": "Alessio Sakara",
   "url": "/fighter/Alessio-Sakara-5366"
 },
 {
   "name": "Travis Wiuff",
   "url": "/fighter/Travis-Wiuff-3660"
 },
 {
   "name": "Kevin Lee",
   "url": "/fighter/Kevin-Lee-84342"
 },
 {
   "name": "Vernon White",
   "url": "/fighter/Vernon-White-296"
 },
 {
   "name": "John Maguire",
   "url": "/fighter/John-Maguire-15574"
 },
 {
   "name": "Josh Samman",
   "url": "/fighter/Josh-Samman-17460"
 },
 {
   "name": "Reza Madadi",
   "url": "/fighter/Reza-Madadi-18921"
 },
 {
   "name": "Mark Scanlon",
   "url": "/fighter/Mark-Scanlon-18253"
 },
 {
   "name": "Josh Neer",
   "url": "/fighter/Josh-Neer-9179"
 },
 {
   "name": "Paul Buentello",
   "url": "/fighter/Paul-Buentello-347"
 },
 {
   "name": "Joe Stevenson",
   "url": "/fighter/Joe-Stevenson-65"
 },
 {
   "name": "Louis Gaudinot",
   "url": "/fighter/Louis-Gaudinot-45230"
 },
 {
   "name": "Mark Weir",
   "url": "/fighter/Mark-Weir-3599"
 },
 {
   "name": "Remco Pardoel",
   "url": "/fighter/Remco-Pardoel-33"
 },
 {
   "name": "Melvin Guillard",
   "url": "/fighter/Melvin-Guillard-7431"
 },
 {
   "name": "Din Thomas",
   "url": "/fighter/Din-Thomas-1301"
 },
 {
   "name": "Dan Severn",
   "url": "/fighter/Dan-Severn-52"
 },
 {
   "name": "Walt Harris",
   "url": "/fighter/Walt-Harris-72046"
 },
 {
   "name": "Hector Urbina",
   "url": "/fighter/Hector-Urbina-18168"
 },
 {
   "name": "Nate Quarry",
   "url": "/fighter/Nate-Quarry-2383"
 },
 {
   "name": "Dustin Kimura",
   "url": "/fighter/Dustin-Kimura-41247"
 },
 {
   "name": "Chris Brennan",
   "url": "/fighter/Chris-Brennan-64"
 },
 {
   "name": "Josh Thomson",
   "url": "/fighter/Josh-Thomson-2394"
 },
 {
   "name": "Michael Johnson",
   "url": "/fighter/Michael-Johnson-68788"
 },
 {
   "name": "Kurt Pellegrino",
   "url": "/fighter/Kurt-Pellegrino-4153"
 },
 {
   "name": "Takanori Gomi",
   "url": "/fighter/Takanori-Gomi-425"
 },
 {
   "name": "Alvin Robinson",
   "url": "/fighter/Alvin-Robinson-12212"
 },
 {
   "name": "Dong Hyun Kim",
   "url": "/fighter/Dong-Hyun-Kim-16374"
 },
 {
   "name": "Joe Lauzon",
   "url": "/fighter/Joe-Lauzon-4923"
 },
 {
   "name": "Sean Sherk",
   "url": "/fighter/Sean-Sherk-277"
 },
 {
   "name": "Shamar Bailey",
   "url": "/fighter/Shamar-Bailey-20744"
 },
 {
   "name": "Marcus Aurelio",
   "url": "/fighter/Marcus-Aurelio-4833"
 },
 {
   "name": "Dustin Hazelett",
   "url": "/fighter/Dustin-Hazelett-11481"
 },
 {
   "name": "Joe Brammer",
   "url": "/fighter/Joe-Brammer-17016"
 },
 {
   "name": "Mike de la Torre",
   "url": "/fighter/Mike-de-la-Torre-17915"
 },
 {
   "name": "Felice Herrig",
   "url": "/fighter/Felice-Herrig-42432"
 },
 {
   "name": "Jessica Andrade",
   "url": "/fighter/Jessica-Andrade-100715"
 },
 {
   "name": "Tony Ferguson",
   "url": "/fighter/Tony-Ferguson-31239"
 },
 {
   "name": "Jamie Varner",
   "url": "/fighter/Jamie-Varner-7168"
 },
 {
   "name": "Rich Clementi",
   "url": "/fighter/Rich-Clementi-1046"
 },
 {
   "name": "Piotr Hallmann",
   "url": "/fighter/Piotr-Hallmann-53375"
 },
 {
   "name": "Pat Healy",
   "url": "/fighter/Pat-Healy-6246"
 },
 {
   "name": "Rafaello Oliveira",
   "url": "/fighter/Rafaello-Oliveira-37260"
 },
 {
   "name": "Jason Dent",
   "url": "/fighter/Jason-Dent-8321"
 },
 {
   "name": "Fabricio Camoes",
   "url": "/fighter/Fabricio-Camoes-2427"
 },
 {
   "name": "Eiji Mitsuoka",
   "url": "/fighter/Eiji-Mitsuoka-2235"
 },
 {
   "name": "Thiago Alves",
   "url": "/fighter/Thiago-Alves-5998"
 },
 {
   "name": "Mike Ricci",
   "url": "/fighter/Mike-Ricci-33532"
 },
 {
   "name": "K.J. Noons",
   "url": "/fighter/KJ-Noons-6727"
 },
 {
   "name": "Phillipe Nover",
   "url": "/fighter/Phillipe-Nover-7415"
 },
 {
   "name": "Jonavin Webb",
   "url": "/fighter/Jonavin-Webb-81634"
 },
 {
   "name": "Thomas Almeida",
   "url": "/fighter/Thomas-Almeida-87865"
 },
 {
   "name": "Sam Stout",
   "url": "/fighter/Sam-Stout-9901"
 },
 {
   "name": "Bubba Bush",
   "url": "/fighter/Bubba-Bush-29111"
 },
 {
   "name": "Edward Faaloloto",
   "url": "/fighter/Edward-Faaloloto-55070"
 },
 {
   "name": "Matt Grice",
   "url": "/fighter/Matt-Grice-14539"
 },
 {
   "name": "Brian Cobb",
   "url": "/fighter/Brian-Cobb-5739"
 },
 {
   "name": "Yoshiyuki Yoshida",
   "url": "/fighter/Yoshiyuki-Yoshida-12073"
 },
 {
   "name": "Leandro Issa",
   "url": "/fighter/Leandro-Issa-19521"
 },
 {
   "name": "Bart Palaszewski",
   "url": "/fighter/Bart-Palaszewski-3496"
 },
 {
   "name": "Duane Ludwig",
   "url": "/fighter/Duane-Ludwig-101"
 },
 {
   "name": "Caros Fodor",
   "url": "/fighter/Caros-Fodor-45430"
 },
 {
   "name": "Mizuto Hirota",
   "url": "/fighter/Mizuto-Hirota-12078"
 },
 {
   "name": "Luis Ramos",
   "url": "/fighter/Luis-Ramos-3217"
 },
 {
   "name": "Alexandre Barros",
   "url": "/fighter/Alexandre-Barros-1424"
 },
 {
   "name": "Milton Vieira",
   "url": "/fighter/Milton-Vieira-4481"
 },
 {
   "name": "Wagner Silva Gomes",
   "url": "/fighter/Wagner-Silva-Gomes-115911"
 },
 {
   "name": "Renan Barao",
   "url": "/fighter/Renan-Barao-23156"
 },
 {
   "name": "Cezar Ferreira",
   "url": "/fighter/Cezar-Ferreira-22400"
 },
 {
   "name": "Joe Soto",
   "url": "/fighter/Joe-Soto-17004"
 },
 {
   "name": "Andrew Craig",
   "url": "/fighter/Andrew-Craig-63284"
 },
 {
   "name": "Clint Hester",
   "url": "/fighter/Clint-Hester-43866"
 },
 {
   "name": "Joe Ellenberger",
   "url": "/fighter/Joe-Ellenberger-14173"
 },
 {
   "name": "James Moontasri",
   "url": "/fighter/James-Moontasri-36889"
 },
 {
   "name": "Richie Vaculik",
   "url": "/fighter/Richie-Vaculik-21798"
 },
 {
   "name": "Jake Matthews",
   "url": "/fighter/Jake-Matthews-122139"
 },
 {
   "name": "Akbarh Arreola",
   "url": "/fighter/Akbarh-Arreola-6120"
 },
 {
   "name": "Danny Martinez",
   "url": "/fighter/Danny-Martinez-16777"
 },
 {
   "name": "Aljamain Sterling",
   "url": "/fighter/Aljamain-Sterling-66313"
 },
 {
   "name": "Louis Smolka",
   "url": "/fighter/Louis-Smolka-64792"
 },
 {
   "name": "Ruan Potts",
   "url": "/fighter/Ruan-Potts-75842"
 },
 {
   "name": "Tim Means",
   "url": "/fighter/Tim-Means-11281"
 },
 {
   "name": "Erick Silva",
   "url": "/fighter/Erick-Silva-15009"
 },
 {
   "name": "Pat Miletich",
   "url": "/fighter/Pat-Miletich-188"
 },
 {
   "name": "Michelle Waterson",
   "url": "/fighter/Michelle-Waterson-23091"
 },
 {
   "name": "Michael Chiesa",
   "url": "/fighter/Michael-Chiesa-46224"
 },
 {
   "name": "Chris Holdsworth",
   "url": "/fighter/Chris-Holdsworth-51225"
 },
 {
   "name": "Robbie Peralta",
   "url": "/fighter/Robbie-Peralta-21339"
 },
 {
   "name": "Julianna Pena",
   "url": "/fighter/Julianna-Pena-50883"
 },
 {
   "name": "Mitch Clarke",
   "url": "/fighter/Mitch-Clarke-22556"
 },
 {
   "name": "Jorge Masvidal",
   "url": "/fighter/Jorge-Masvidal-7688"
 },
 {
   "name": "Kyung Ho Kang",
   "url": "/fighter/Kyung-Ho-Kang-24067"
 },
 {
   "name": "Bobby Green",
   "url": "/fighter/Bobby-Green-27953"
 },
 {
   "name": "Lucas Martins",
   "url": "/fighter/Lucas-Martins-100031"
 },
 {
   "name": "Sirwan Kakai",
   "url": "/fighter/Sirwan-Kakai-21446"
 },
 {
   "name": "Jamie Yager",
   "url": "/fighter/Jamie-Yager-42309"
 },
 {
   "name": "Elvis Sinosic",
   "url": "/fighter/Elvis-Sinosic-281"
 },
 {
   "name": "Bill Mahood",
   "url": "/fighter/Bill-Mahood-4388"
 },
 {
   "name": "Kevin Jordan",
   "url": "/fighter/Kevin-Jordan-4399"
 },
 {
   "name": "Rory Singer",
   "url": "/fighter/Rory-Singer-3525"
 },
 {
   "name": "Steve Bosse",
   "url": "/fighter/Steve-Bosse-22732"
 },
 {
   "name": "Hector Lombard",
   "url": "/fighter/Hector-Lombard-11292"
 },
 {
   "name": "Ryan Jimmo",
   "url": "/fighter/Ryan-Jimmo-21044"
 },
 {
   "name": "Igor Pokrajac",
   "url": "/fighter/Igor-Pokrajac-7621"
 },
 {
   "name": "Travis Fulton",
   "url": "/fighter/Travis-Fulton-80"
 },
 {
   "name": "C.B. Dollaway",
   "url": "/fighter/CB-Dollaway-22350"
 },
 {
   "name": "Tamdan McCrory",
   "url": "/fighter/Tamdan-McCrory-16470"
 },
 {
   "name": "Uriah Hall",
   "url": "/fighter/Uriah-Hall-14210"
 },
 {
   "name": "Chris Price",
   "url": "/fighter/Chris-Price-14121"
 },
 {
   "name": "Nicholas Musoke",
   "url": "/fighter/Nicholas-Musoke-26160"
 },
 {
   "name": "James Irvin",
   "url": "/fighter/James-Irvin-7780"
 },
 {
   "name": "Drew McFedries",
   "url": "/fighter/Drew-McFedries-2386"
 },
 {
   "name": "Victor Valimaki",
   "url": "/fighter/Victor-Valimaki-4391"
 },
 {
   "name": "Johnny Case",
   "url": "/fighter/Johnny-Case-28017"
 },
 {
   "name": "Logan Clark",
   "url": "/fighter/Logan-Clark-19478"
 },
 {
   "name": "Joe Jordan",
   "url": "/fighter/Joe-Jordan-4582"
 },
 {
   "name": "Shonie Carter",
   "url": "/fighter/Shonie-Carter-239"
 },
 {
   "name": "Rob Kimmons",
   "url": "/fighter/Rob-Kimmons-9863"
 },
 {
   "name": "Chris Tuchscherer",
   "url": "/fighter/Chris-Tuchscherer-10669"
 },
 {
   "name": "Jared Hamman",
   "url": "/fighter/Jared-Hamman-15949"
 },
 {
   "name": "Josh Hendricks",
   "url": "/fighter/Josh-Hendricks-7652"
 },
 {
   "name": "Wesley Correira",
   "url": "/fighter/Wesley-Correira-2829"
 },
 {
   "name": "Oli Thompson",
   "url": "/fighter/Oli-Thompson-54543"
 },
 {
   "name": "Hayder Hassan",
   "url": "/fighter/Hayder-Hassan-46033"
 },
 {
   "name": "Nathan Coy",
   "url": "/fighter/Nathan-Coy-25412"
 },
 {
   "name": "Roger Hollett",
   "url": "/fighter/Roger-Hollett-15907"
 },
 {
   "name": "Vicente Luque",
   "url": "/fighter/Vicente-Luque-66474"
 },
 {
   "name": "Kamaru Usman",
   "url": "/fighter/Kamaru-Usman-120691"
 },
 {
   "name": "Claude Patrick",
   "url": "/fighter/Claude-Patrick-4114"
 },
 {
   "name": "Mark Coleman",
   "url": "/fighter/Mark-Coleman-136"
 },
 {
   "name": "Jason MacDonald",
   "url": "/fighter/Jason-MacDonald-4389"
 },
 {
   "name": "Wade Shipp",
   "url": "/fighter/Wade-Shipp-2304"
 },
 {
   "name": "Tim Lajcik",
   "url": "/fighter/Tim-Lajcik-223"
 },
 {
   "name": "John Lober",
   "url": "/fighter/John-Lober-210"
 },
 {
   "name": "John Makdessi",
   "url": "/fighter/John-Makdessi-37402"
 },
 {
   "name": "Michel Richard Cunha dos Prazeres",
   "url": "/fighter/Michel-Richard-Cunha-dos-Prazeres-22218"
 },
 {
   "name": "Jon Tuck",
   "url": "/fighter/Jon-Tuck-45108"
 },
 {
   "name": "Jesse Ronson",
   "url": "/fighter/Jesse-Ronson-56579"
 },
 {
   "name": "Tim Sylvia",
   "url": "/fighter/Tim-Sylvia-1061"
 },
 {
   "name": "Roberto Traven",
   "url": "/fighter/Roberto-Traven-142"
 },
 {
   "name": "Dan Christison",
   "url": "/fighter/Dan-Christison-2646"
 },
 {
   "name": "Ian Freeman",
   "url": "/fighter/Ian-Freeman-242"
 },
 {
   "name": "Leslie Smith",
   "url": "/fighter/Leslie-Smith-46542"
 },
 {
   "name": "Wes Sims",
   "url": "/fighter/Wes-Sims-2713"
 },
 {
   "name": "Ben Nguyen",
   "url": "/fighter/Ben-Nguyen-8183"
 },
 {
   "name": "Josh Bryant",
   "url": "/fighter/Josh-Bryant-21971"
 },
 {
   "name": "Tyron Woodley",
   "url": "/fighter/Tyron-Woodley-42605"
 },
 {
   "name": "Matt Riddle",
   "url": "/fighter/Matt-Riddle-34072"
 },
 {
   "name": "Lavar Johnson",
   "url": "/fighter/Lavar-Johnson-9511"
 },
 {
   "name": "John Hathaway",
   "url": "/fighter/John-Hathaway-16704"
 },
 {
   "name": "DaMarques Johnson",
   "url": "/fighter/DaMarques-Johnson-12913"
 },
 {
   "name": "Justin Edwards",
   "url": "/fighter/Justin-Edwards-37452"
 },
 {
   "name": "Simeon Thoresen",
   "url": "/fighter/Simeon-Thoresen-19977"
 },
 {
   "name": "Tom Watson",
   "url": "/fighter/Tom-Watson-15179"
 },
 {
   "name": "Caio Magalhaes",
   "url": "/fighter/Caio-Magalhaes-51163"
 },
 {
   "name": "Dan Cramer",
   "url": "/fighter/Dan-Cramer-42310"
 },
 {
   "name": "Gunnar Nelson",
   "url": "/fighter/Gunnar-Nelson-25246"
 },
 {
   "name": "Eddie Gordon",
   "url": "/fighter/Eddie-Gordon-66410"
 },
 {
   "name": "Chris Cope",
   "url": "/fighter/Chris-Cope-25784"
 },
 {
   "name": "Anthony Torres",
   "url": "/fighter/Anthony-Torres-1884"
 },
 {
   "name": "Paul Taylor",
   "url": "/fighter/Paul-Taylor-6326"
 },
 {
   "name": "Orlando Wiet",
   "url": "/fighter/Orlando-Wiet-31"
 },
 {
   "name": "Claudio Henrique da Silva",
   "url": "/fighter/Claudio-Henrique-da-Silva-25830"
 },
 {
   "name": "Samy Schiavo",
   "url": "/fighter/Samy-Schiavo-4038"
 },
 {
   "name": "Dan Hardy",
   "url": "/fighter/Dan-Hardy-10629"
 },
 {
   "name": "Rich Crunkilton",
   "url": "/fighter/Rich-Crunkilton-1542"
 },
 {
   "name": "Roan Carneiro",
   "url": "/fighter/Roan-Carneiro-2886"
 },
 {
   "name": "Kendall Grove",
   "url": "/fighter/Kendall-Grove-10126"
 },
 {
   "name": "Gilbert Smith",
   "url": "/fighter/Gilbert-Smith-65128"
 },
 {
   "name": "Abner Lloveras",
   "url": "/fighter/Abner-Lloveras-11729"
 },
 {
   "name": "Lucio Linhares",
   "url": "/fighter/Lucio-Linhares-10543"
 },
 {
   "name": "Tomasz Drwal",
   "url": "/fighter/Tomasz-Drwal-10047"
 },
 {
   "name": "Nicolas Dalby",
   "url": "/fighter/Nicolas-Dalby-63608"
 },
 {
   "name": "Leon Edwards",
   "url": "/fighter/Leon-Edwards-62665"
 },
 {
   "name": "Junie Allen Browning",
   "url": "/fighter/Junie-Allen-Browning-28041"
 },
 {
   "name": "Yoislandy Izquierdo",
   "url": "/fighter/Yoislandy-Izquierdo-64716"
 },
 {
   "name": "Carlo Prater",
   "url": "/fighter/Carlo-Prater-6767"
 },
 {
   "name": "Danny Mitchell",
   "url": "/fighter/Danny-Mitchell-40523"
 },
 {
   "name": "Jimi Manuwa",
   "url": "/fighter/Jimi-Manuwa-37528"
 },
 {
   "name": "Jorge Gurgel",
   "url": "/fighter/Jorge-Gurgel-4025"
 },
 {
   "name": "Michael Kuiper",
   "url": "/fighter/Michael-Kuiper-42901"
 },
 {
   "name": "Cathal Pendred",
   "url": "/fighter/Cathal-Pendred-64373"
 },
 {
   "name": "Chris Gruetzemacher",
   "url": "/fighter/Chris-Gruetzemacher-36924"
 },
 {
   "name": "Stefan Struve",
   "url": "/fighter/Stefan-Struve-15063"
 },
 {
   "name": "Pascal Krauss",
   "url": "/fighter/Pascal-Krauss-43439"
 },
 {
   "name": "Jens Pulver",
   "url": "/fighter/Jens-Pulver-228"
 },
 {
   "name": "Nick Ring",
   "url": "/fighter/Nick-Ring-6748"
 },
 {
   "name": "Papy Abedi",
   "url": "/fighter/Papy-Abedi-20812"
 },
 {
   "name": "Mike Pyle",
   "url": "/fighter/Mike-Pyle-4577"
 },
 {
   "name": "Gerald Harris",
   "url": "/fighter/Gerald-Harris-17903"
 },
 {
   "name": "Jesse Forbes",
   "url": "/fighter/Jesse-Forbes-13453"
 },
 {
   "name": "Brian Ebersole",
   "url": "/fighter/Brian-Ebersole-3015"
 },
 {
   "name": "Amanda Nunes",
   "url": "/fighter/Amanda-Nunes-31496"
 },
 {
   "name": "Sheila Gaff",
   "url": "/fighter/Sheila-Gaff-43445"
 },
 {
   "name": "Shayna Baszler",
   "url": "/fighter/Shayna-Baszler-12116"
 },
 {
   "name": "Anthony Smith",
   "url": "/fighter/Anthony-Smith-29470"
 },
 {
   "name": "Court McGee",
   "url": "/fighter/Court-McGee-34124"
 },
 {
   "name": "Keith Wisniewski",
   "url": "/fighter/Keith-Wisniewski-2095"
 },
 {
   "name": "Joshua Burkman",
   "url": "/fighter/Joshua-Burkman-10003"
 },
 {
   "name": "Forrest Petz",
   "url": "/fighter/Forrest-Petz-4411"
 },
 {
   "name": "Nick Thompson",
   "url": "/fighter/Nick-Thompson-7124"
 },
 {
   "name": "Derrick Noble",
   "url": "/fighter/Derrick-Noble-4556"
 },
 {
   "name": "Drew Fickett",
   "url": "/fighter/Drew-Fickett-725"
 },
 {
   "name": "Anthony Macias",
   "url": "/fighter/Anthony-Macias-53"
 },
 {
   "name": "Kevin Burns",
   "url": "/fighter/Kevin-Burns-20512"
 },
 {
   "name": "James McSweeney",
   "url": "/fighter/James-McSweeney-22111"
 },
 {
   "name": "Elvis Mutapcic",
   "url": "/fighter/Elvis-Mutapcic-28038"
 },
 {
   "name": "Gilbert Aldana",
   "url": "/fighter/Gilbert-Aldana-10334"
 },
 {
   "name": "Kerry Schall",
   "url": "/fighter/Kerry-Schall-397"
 },
 {
   "name": "Gary Goodridge",
   "url": "/fighter/Gary-Goodridge-129"
 },
 {
   "name": "Bobby Hoffman",
   "url": "/fighter/Bobby-Hoffman-265"
 },
 {
   "name": "Gan McGee",
   "url": "/fighter/Gan-McGee-273"
 },
 {
   "name": "Jay Silva",
   "url": "/fighter/Jay-Silva-34408"
 },
 {
   "name": "John Howard",
   "url": "/fighter/John-Howard-11798"
 },
 {
   "name": "Semmy Schilt",
   "url": "/fighter/Semmy-Schilt-467"
 },
 {
   "name": "Ricardo Almeida",
   "url": "/fighter/Ricardo-Almeida-11"
 },
 {
   "name": "Guy Mezger",
   "url": "/fighter/Guy-Mezger-14"
 },
 {
   "name": "Mike Easton",
   "url": "/fighter/Mike-Easton-9626"
 },
 {
   "name": "Hugo Viana",
   "url": "/fighter/Hugo-Viana-65456"
 },
 {
   "name": "Walel Watson",
   "url": "/fighter/Walel-Watson-36403"
 },
 {
   "name": "Joshua Burkman",
   "url": "/fighter/Josh-Burkman-10003"
 },
 {
   "name": "Diego Sanchez",
   "url": "/fighter/Diego-Sanchez-4824"
 },
 {
   "name": "Yves Edwards",
   "url": "/fighter/Yves-Edwards-344"
 },
 {
   "name": "Jeremy Jackson",
   "url": "/fighter/Jeremy-Jackson-2651"
 },
 {
   "name": "Edwin Dewees",
   "url": "/fighter/Edwin-Dewees-720"
 },
 {
   "name": "John Lineker",
   "url": "/fighter/John-Lineker-41906"
 },
 {
   "name": "Makwan Amirkhani",
   "url": "/fighter/Makwan-Amirkhani-69406"
 },
 {
   "name": "Johnny Bedford",
   "url": "/fighter/Johnny-Bedford-19717"
 },
 {
   "name": "Tor Troeng",
   "url": "/fighter/Tor-Troeng-6850"
 },
 {
   "name": "Eugene Jackson",
   "url": "/fighter/Eugene-Jackson-222"
 },
 {
   "name": "Jorge Patino",
   "url": "/fighter/Jorge-Patino-1015"
 },
 {
   "name": "Thomas Almeida",
   "url": "/fighter/Thomas-de-Almeida-87865"
 },
 {
   "name": "James Irvin",
   "url": "/fighter/james-irvin-7780"
 },
 {
   "name": "Rousimar Palhares",
   "url": "/fighter/Rousimar-Palhares-16286"
 },
 {
   "name": "Renato Verissimo",
   "url": "/fighter/Renato-Verissimo-4095"
 },
 {
   "name": "Dave Menne",
   "url": "/fighter/Dave-Menne-245"
 },
 {
   "name": "Martin Kampmann",
   "url": "/fighter/Martin-Kampmann-5344"
 },
 {
   "name": "Hayato Sakurai",
   "url": "/fighter/Hayato-Sakurai-432"
 },
 {
   "name": "Chris Wilson",
   "url": "/fighter/Chris-Wilson-9281"
 },
 {
   "name": "LaVerne Clark",
   "url": "/fighter/LaVerne-Clark-184"
 },
 {
   "name": "Gabriel Benitez",
   "url": "/fighter/Gabriel-Benitez-25733"
 },
 {
   "name": "Dustin Neace",
   "url": "/fighter/Dustin-Neace-13599"
 },
 {
   "name": "John Gunderson",
   "url": "/fighter/John-Gunderson-7018"
 },
 {
   "name": "Carlos Newton",
   "url": "/fighter/Carlos-Newton-7"
 },
 {
   "name": "Dennis Hallman",
   "url": "/fighter/Dennis-Hallman-275"
 },
 {
   "name": "Valeri Ignatov",
   "url": "/fighter/Valeri-Ignatov-216"
 },
 {
   "name": "Josh Copeland",
   "url": "/fighter/Josh-Copeland-75537"
 },
 {
   "name": "Brandon Melendez",
   "url": "/fighter/Brandon-Melendez-10515"
 },
 {
   "name": "Luigi Fioravanti",
   "url": "/fighter/Luigi-Fioravanti-12199"
 },
 {
   "name": "Chad Reiner",
   "url": "/fighter/Chad-Reiner-14016"
 },
 {
   "name": "Marco Ruas",
   "url": "/fighter/Marco-Ruas-120"
 },
 {
   "name": "Emmanuel Yarborough",
   "url": "/fighter/Emmanuel-Yarborough-39"
 },
 {
   "name": "Josh Sampo",
   "url": "/fighter/Josh-Sampo-66883"
 },
 {
   "name": "Razak Al-Hassan",
   "url": "/fighter/Razak-Al-Hassan-23326"
 },
 {
   "name": "Don Frye",
   "url": "/fighter/Don-Frye-124"
 },
 {
   "name": "Brian Johnston",
   "url": "/fighter/Brian-Johnston-137"
 },
 {
   "name": "Tsuyoshi Kosaka",
   "url": "/fighter/Tsuyoshi-Kosaka-190"
 },
 {
   "name": "Roger Huerta",
   "url": "/fighter/Roger-Huerta-10089"
 },
 {
   "name": "Ikuhisa Minowa",
   "url": "/fighter/Ikuhisa-Minowa-250"
 },
 {
   "name": "Gabe Ruediger",
   "url": "/fighter/Gabe-Ruediger-5542"
 },
 {
   "name": "Diego Saraiva",
   "url": "/fighter/Diego-Saraiva-9534"
 },
 {
   "name": "Darren Uyenoyama",
   "url": "/fighter/Darren-Uyenoyama-4679"
 },
 {
   "name": "Ivan Menjivar",
   "url": "/fighter/Ivan-Menjivar-993"
 },
 {
   "name": "Derrick Lewis",
   "url": "/fighter/Derrick-Lewis-59284"
 },
 {
   "name": "Moti Horenstein",
   "url": "/fighter/Moti-Horenstein-139"
 },
 {
   "name": "Dustin Pague",
   "url": "/fighter/Dustin-Pague-39781"
 },
 {
   "name": "Aisling Daly",
   "url": "/fighter/Aisling-Daly-25245"
 },
 {
   "name": "Tina Lahdemaki",
   "url": "/fighter/Tina-Lahdemaki-70795"
 },
 {
   "name": "Jay Hieron",
   "url": "/fighter/Jay-Hieron-9267"
 },
 {
   "name": "Sergio Moraes",
   "url": "/fighter/Sergio-Moraes-21343"
 },
 {
   "name": "Rick Story",
   "url": "/fighter/Rick-Story-25989"
 },
 {
   "name": "Corey Hill",
   "url": "/fighter/Corey-Hill-23864"
 },
 {
   "name": "Mike Wilkinson",
   "url": "/fighter/Mike-Wilkinson-50586"
 },
 {
   "name": "Jordan Mein",
   "url": "/fighter/Jordan-Mein-6749"
 },
 {
   "name": "Joao Zeferino",
   "url": "/fighter/Joao-Zeferino-17577"
 },
 {
   "name": "Robert Whittaker",
   "url": "/fighter/Robert-Whittaker-45132"
 },
 {
   "name": "Antonio Carvalho",
   "url": "/fighter/Antonio-Carvalho-5346"
 },
 {
   "name": "Ray Borg",
   "url": "/fighter/Ray-Borg-84752"
 },
 {
   "name": "Mike Swick",
   "url": "/fighter/Mike-Swick-5199"
 },
 {
   "name": "Colin Fletcher",
   "url": "/fighter/Colin-Fletcher-34621"
 },
 {
   "name": "Mark Munoz",
   "url": "/fighter/Mark-Munoz-22411"
 },
 {
   "name": "Krzysztof Soszynski",
   "url": "/fighter/Krzysztof-Soszynski-9178"
 },
 {
   "name": "Yuki Kondo",
   "url": "/fighter/Yuki-Kondo-263"
 },
 {
   "name": "Erik Perez",
   "url": "/fighter/Erik-Perez-35509"
 },
 {
   "name": "Edwin Figueroa",
   "url": "/fighter/Edwin-Figueroa-22490"
 },
 {
   "name": "Santiago Ponzinibbio",
   "url": "/fighter/Santiago-Ponzinibbio-64593"
 },
 {
   "name": "Jared Papazian",
   "url": "/fighter/Jared-Papazian-33531"
 },
 {
   "name": "Jared Rosholt",
   "url": "/fighter/Jared-Rosholt-76763"
 },
 {
   "name": "Jessica Eye",
   "url": "/fighter/Jessica-Eye-39575"
 },
 {
   "name": "Chico Camus",
   "url": "/fighter/Chico-Camus-42850"
 },
 {
   "name": "Jonathan Wiezorek",
   "url": "/fighter/Jonathan-Wiezorek-2688"
 },
 {
   "name": "Lance Gibson",
   "url": "/fighter/Lance-Gibson-246"
 },
 {
   "name": "Oleg Taktarov",
   "url": "/fighter/Oleg-Taktarov-47"
 },
 {
   "name": "Randa Markos",
   "url": "/fighter/Randa-Markos-75417"
 },
 {
   "name": "Angela Magana",
   "url": "/fighter/Angela-Magana-21720"
 },
 {
   "name": "Gilbert Melendez",
   "url": "/fighter/Gilbert-Melendez-5545"
 },
 {
   "name": "Lyman Good",
   "url": "/fighter/Lyman-Good-14207"
 },
 {
   "name": "Ruslan Magomedov",
   "url": "/fighter/Ruslan-Magomedov-74434"
 },
 {
   "name": "Jorge Lopez",
   "url": "/fighter/Jorge-Lopez-23271"
 },
 {
   "name": "Pete Sell",
   "url": "/fighter/Pete-Sell-7795"
 },
 {
   "name": "Chuck O'Neil",
   "url": "/fighter/Chuck-ONeil-15855"
 },
 {
   "name": "Neil Grove",
   "url": "/fighter/Neil-Grove-23219"
 },
 {
   "name": "Branden Lee Hinkle",
   "url": "/fighter/Branden-Lee-Hinkle-437"
 },
 {
   "name": "Vinicius Kappke de Queiroz",
   "url": "/fighter/Vinicius-Kappke-de-Queiroz-48631"
 },
 {
   "name": "Pat Barry",
   "url": "/fighter/Pat-Barry-33342"
 },
 {
   "name": "Charlie Brenneman",
   "url": "/fighter/Charlie-Brenneman-23403"
 },
 {
   "name": "Jon delos Reyes",
   "url": "/fighter/Jon-delos-Reyes-58594"
 },
 {
   "name": "Lewis Gonzalez",
   "url": "/fighter/Lewis-Gonzalez-84278"
 },
 {
   "name": "Antonio McKee",
   "url": "/fighter/Antonio-McKee-515"
 },
 {
   "name": "Roli Delgado",
   "url": "/fighter/Roli-Delgado-3669"
 },
 {
   "name": "Trevor Smith",
   "url": "/fighter/Trevor-Smith-51113"
 },
 {
   "name": "Francis Carmont",
   "url": "/fighter/Francis-Carmont-9798"
 },
 {
   "name": "Nick Catone",
   "url": "/fighter/Nick-Catone-23006"
 },
 {
   "name": "Alan Belcher",
   "url": "/fighter/Alan-Belcher-10967"
 },
 {
   "name": "Luke Barnatt",
   "url": "/fighter/Luke-Barnatt-56567"
 },
 {
   "name": "Hyun Gyu Lim",
   "url": "/fighter/Hyun-Gyu-Lim-21040"
 },
 {
   "name": "Gerald Strebendt",
   "url": "/fighter/Gerald-Strebendt-2327"
 },
 {
   "name": "Kajan Johnson",
   "url": "/fighter/Kajan-Johnson-5615"
 },
 {
   "name": "Tony Fryklund",
   "url": "/fighter/Tony-Fryklund-168"
 },
 {
   "name": "Alex Karalexis",
   "url": "/fighter/Alex-Karalexis-11941"
 },
 {
   "name": "Brad Blackburn",
   "url": "/fighter/Brad-Blackburn-2920"
 },
 {
   "name": "Paul Sass",
   "url": "/fighter/Paul-Sass-23531"
 },
 {
   "name": "James Krause",
   "url": "/fighter/James-Krause-31766"
 },
 {
   "name": "Ramiro Hernandez",
   "url": "/fighter/Ramiro-Hernandez-26934"
 },
 {
   "name": "David Baron",
   "url": "/fighter/David-Baron-2860"
 },
 {
   "name": "Eric Wisely",
   "url": "/fighter/Eric-Wisely-25320"
 },
 {
   "name": "Phil Johns",
   "url": "/fighter/Phil-Johns-282"
 },
 {
   "name": "Tae Hyun Bang",
   "url": "/fighter/Tae-Hyun-Bang-23167"
 },
 {
   "name": "Johnny Eduardo",
   "url": "/fighter/Johnny-Eduardo-426"
 },
 {
   "name": "Eddie Yagin",
   "url": "/fighter/Eddie-Yagin-2825"
 },
 {
   "name": "Cameron Dollar",
   "url": "/fighter/Cameron-Dollar-25531"
 },
 {
   "name": "Chris Clements",
   "url": "/fighter/Chris-Clements-13469"
 },
 {
   "name": "Luke Caudillo",
   "url": "/fighter/Luke-Caudillo-7406"
 },
 {
   "name": "Dominic Waters",
   "url": "/fighter/Dominic-Waters-68971"
 },
 {
   "name": "Sean Pierson",
   "url": "/fighter/Sean-Pierson-573"
 },
 {
   "name": "Ian Loveland",
   "url": "/fighter/Ian-Loveland-13793"
 },
 {
   "name": "Ryan Roberts",
   "url": "/fighter/Ryan-Roberts-19761"
 },
 {
   "name": "William Macario",
   "url": "/fighter/William-Macario-69624"
 },
 {
   "name": "Mark Holst",
   "url": "/fighter/Mark-Holst-14862"
 },
 {
   "name": "Francisco Rivera",
   "url": "/fighter/Francisco-Rivera-11908"
 },
 {
   "name": "Andy Ogle",
   "url": "/fighter/Andy-Ogle-42659"
 },
 {
   "name": "Corey Anderson",
   "url": "/fighter/Corey-Anderson-171723"
 },
 {
   "name": "Justin Jones",
   "url": "/fighter/Justin-Jones-93683"
 },
 {
   "name": "Roman Salazar",
   "url": "/fighter/Roman-Salazar-24790"
 },
 {
   "name": "Benji Radach",
   "url": "/fighter/Benji-Radach-2294"
 },
 {
   "name": "Rodolfo Rubio Perez",
   "url": "/fighter/Rodolfo-Rubio-Perez-31897"
 },
 {
   "name": "Rashid Magomedov",
   "url": "/fighter/Rashid-Magomedov-41524"
 },
 {
   "name": "Anistavio Medeiros de Figueiredo",
   "url": "/fighter/Anistavio-Medeiros-de-Figueiredo-21962"
 },
 {
   "name": "Jesse Bongfeldt",
   "url": "/fighter/Jesse-Bongfeldt-6809"
 },
 {
   "name": "Ryan McGillivray",
   "url": "/fighter/Ryan-McGillivray-18533"
 },
 {
   "name": "Roger Bowling",
   "url": "/fighter/Roger-Bowling-23052"
 },
 {
   "name": "Rodney Wallace",
   "url": "/fighter/Rodney-Wallace-33343"
 },
 {
   "name": "David Heath",
   "url": "/fighter/David-Heath-11483"
 },
 {
   "name": "Chris Saunders",
   "url": "/fighter/Chris-Saunders-7358"
 },
 {
   "name": "Chuck O'Neil",
   "url": "/fighter/Chuck-O'Neil-15855"
 },
 {
   "name": "Jim Alers",
   "url": "/fighter/Jim-Alers-36581"
 },
 {
   "name": "Yosdenis Cedeno",
   "url": "/fighter/Yosdenis-Cedeno-47066"
 },
 {
   "name": "Sean McCorkle",
   "url": "/fighter/Sean-McCorkle-19640"
 },
 {
   "name": "Jerrod Sanders",
   "url": "/fighter/Jerrod-Sanders-48156"
 },
 {
   "name": "Shawn Jordan",
   "url": "/fighter/Shawn-Jordan-45624"
 },
 {
   "name": "Jessamyn Duke",
   "url": "/fighter/Jessamyn-Duke-71307"
 },
 {
   "name": "Alex White",
   "url": "/fighter/Alex-White-55954"
 },
 {
   "name": "Damon Jackson",
   "url": "/fighter/Damon-Jackson-113767"
 },
 {
   "name": "Alptekin Ozkilic",
   "url": "/fighter/Alptekin-Ozkilic-73826"
 },
 {
   "name": "Justin Salas",
   "url": "/fighter/Justin-Salas-16180"
 },
 {
   "name": "Tony DeSouza",
   "url": "/fighter/Tony-DeSouza-487"
 },
 {
   "name": "Jonathan Goulet",
   "url": "/fighter/Jonathan-Goulet-4120"
 },
 {
   "name": "Tiago dos Santos e Silva",
   "url": "/fighter/Tiago-dos-Santos-e-Silva-78479"
 },
 {
   "name": "Heather Clark",
   "url": "/fighter/Heather-Clark-67132"
 },
 {
   "name": "Enrique Briones",
   "url": "/fighter/Enrique-Briones-20939"
 },
 {
   "name": "Tecia Torres",
   "url": "/fighter/Tecia-Torres-85096"
 },
 {
   "name": "Charles McCarthy",
   "url": "/fighter/Charles-McCarthy-7987"
 },
 {
   "name": "Scott Holtzman",
   "url": "/fighter/Scott-Holtzman-78210"
 },
 {
   "name": "Jeff Curran",
   "url": "/fighter/Jeff-Curran-770"
 },
 {
   "name": "Sarah Moras",
   "url": "/fighter/Sarah-Moras-61600"
 },
 {
   "name": "Derek Downey",
   "url": "/fighter/Derek-Downey-12234"
 },
 {
   "name": "Travis Lutter",
   "url": "/fighter/Travis-Lutter-4586"
 },
 {
   "name": "Mike Rio",
   "url": "/fighter/Mike-Rio-54833"
 },
 {
   "name": "Brock Jardine",
   "url": "/fighter/Brock-Jardine-36630"
 },
 {
   "name": "Jason Day",
   "url": "/fighter/Jason-Day-6811"
 },
 {
   "name": "Michael Guymon",
   "url": "/fighter/Michael-Guymon-4015"
 },
 {
   "name": "Rustam Khabilov",
   "url": "/fighter/Rustam-Khabilov-45417"
 },
 {
   "name": "Goran Reljic",
   "url": "/fighter/Goran-Reljic-10165"
 },
 {
   "name": "Tommy Hayden",
   "url": "/fighter/Tommy-Hayden-30943"
 },
 {
   "name": "Sam Morgan",
   "url": "/fighter/Sam-Morgan-3139"
 },
 {
   "name": "Wendell de Oliveira Marques",
   "url": "/fighter/Wendell-de-Oliveira-Marques-15393"
 },
 {
   "name": "Elizeu Zaleski dos Santos",
   "url": "/fighter/Elizeu-Zaleski-dos-Santos-63825"
 },
 {
   "name": "Juan Manuel Puig",
   "url": "/fighter/Juan-Manuel-Puig-44638"
 },
 {
   "name": "Keita Nakamura",
   "url": "/fighter/Keita-Nakamura-9572"
 },
 {
   "name": "Seth Baczynski",
   "url": "/fighter/Seth-Baczynski-13827"
 },
 {
   "name": "Alex Garcia",
   "url": "/fighter/Alex-Garcia-54124"
 },
 {
   "name": "Ron Stallings",
   "url": "/fighter/Ron-Stallings-11950"
 },
 {
   "name": "Thiago Santos",
   "url": "/fighter/Thiago-Santos-90021"
 },
 {
   "name": "Sean Spencer",
   "url": "/fighter/Sean-Spencer-60908"
 },
 {
   "name": "Dong Hyun  Kim",
   "url": "/fighter/Dong-Hyun-Kim-21673"
 },
 {
   "name": "Reuben Duran",
   "url": "/fighter/Reuben-Duran-26602"
 },
 {
   "name": "David Kaplan",
   "url": "/fighter/David-Kaplan-13848"
 },
 {
   "name": "Shane Nelson",
   "url": "/fighter/Shane-Nelson-11262"
 },
 {
   "name": "James Wilks",
   "url": "/fighter/James-Wilks-10569"
 },
 {
   "name": "Jason Black",
   "url": "/fighter/Jason-Black-1042"
 },
 {
   "name": "Ednaldo Oliveira",
   "url": "/fighter/Edinaldo-Oliveira-14972"
 },
 {
   "name": "Chris Beal",
   "url": "/fighter/Chris-Beal-53369"
 },
 {
   "name": "Mackens Semerzier",
   "url": "/fighter/Mackens-Semerzier-38841"
 },
 {
   "name": "Che Mills",
   "url": "/fighter/Che-Mills-8800"
 },
 {
   "name": "Zubaira Tukhugov",
   "url": "/fighter/Zubaira-Tukhugov-63813"
 },
 {
   "name": "Chris Tickle",
   "url": "/fighter/Chris-Tickle-22955"
 },
 {
   "name": "Ryan Benoit",
   "url": "/fighter/Ryan-Benoit-48566"
 },
 {
   "name": "Pat Audinwood",
   "url": "/fighter/Pat-Audinwood-25476"
 },
 {
   "name": "Daniel Stittgen",
   "url": "/fighter/Daniel-Stittgen-42258"
 },
 {
   "name": "Anthony Birchak",
   "url": "/fighter/Anthony-Birchak-53300"
 },
 {
   "name": "Tim Gorman",
   "url": "/fighter/Tim-Gorman-17717"
 },
 {
   "name": "Yves Jabouin",
   "url": "/fighter/Yves-Jabouin-1693"
 },
 {
   "name": "Garreth McLellan",
   "url": "/fighter/Garreth-McLellan-71237"
 },
 {
   "name": "Kiichi Kunimoto",
   "url": "/fighter/Kiichi-Kunimoto-21039"
 },
 {
   "name": "Francisco Trevino",
   "url": "/fighter/Francisco-Trevino-38029"
 },
 {
   "name": "Omari Akhmedov",
   "url": "/fighter/Omari-Akhmedov-83462"
 },
 {
   "name": "Ernest Chavez",
   "url": "/fighter/Ernest-Chavez-80837"
 },
 {
   "name": "Marcus LeVesseur",
   "url": "/fighter/Marcus-LeVesseur-23538"
 },
 {
   "name": "Alex Soto",
   "url": "/fighter/Alex-Soto-50367"
 },
 {
   "name": "Zach Makovsky",
   "url": "/fighter/Zach-Makovsky-20522"
 },
 {
   "name": "Shunichi Shimizu",
   "url": "/fighter/Shunichi-Shimizu-22677"
 },
 {
   "name": "Doo Ho Choi",
   "url": "/fighter/Doo-Ho-Choi-56689"
 },
 {
   "name": "Cole Escovedo",
   "url": "/fighter/Cole-Escovedo-2291"
 },
 {
   "name": "Genki Sudo",
   "url": "/fighter/Genki-Sudo-1227"
 },
 {
   "name": "Michael McDonald",
   "url": "/fighter/Michael-McDonald-30297"
 },
 {
   "name": "Yuta Sasaki",
   "url": "/fighter/Yuta-Sasaki-63070"
 },
 {
   "name": "Jussier da Silva",
   "url": "/fighter/Jussier-da-Silva-36939"
 },
 {
   "name": "Willamy Freire",
   "url": "/fighter/Willamy-Freire-12553"
 },
 {
   "name": "Delson Heleno",
   "url": "/fighter/Delson-Heleno-5434"
 },
 {
   "name": "Nick Denis",
   "url": "/fighter/Nick-Denis-19128"
 },
 {
   "name": "Nazareno Malegarie",
   "url": "/fighter/Nazareno-Malegarie-33115"
 },
 {
   "name": "T.J. O'Brien",
   "url": "/fighter/TJ-OBrien-22127"
 },
 {
   "name": "Shane Campbell",
   "url": "/fighter/Shane-Campbell-34625"
 },
 {
   "name": "Sam Alvey",
   "url": "/fighter/Sam-Alvey-35410"
 },
 {
   "name": "Maiquel Falcao",
   "url": "/fighter/Maiquel-Jose-Falcao-Goncalves-30304"
 },
 {
   "name": "Josh Sampo",
   "url": "/fighter/Joshua-Sampo-66883"
 },
 {
   "name": "Steve Bruno",
   "url": "/fighter/Steve-Bruno-4367"
 },
 {
   "name": "Nick Osipczak",
   "url": "/fighter/Nick-Osipczak-30033"
 },
 {
   "name": "Brendan Schaub",
   "url": "/fighter/Brendan-Schaub-33926"
 },
 {
   "name": "Darrell Montague",
   "url": "/fighter/Darrell-Montague-34214"
 },
 {
   "name": "Dan Spohn",
   "url": "/fighter/Dan-Spohn-39485"
 },
 {
   "name": "Tom Lawlor",
   "url": "/fighter/Tom-Lawlor-21940"
 },
 {
   "name": "Cody Donovan",
   "url": "/fighter/Cody-Donovan-22304"
 },
 {
   "name": "Fernando Bruno",
   "url": "/fighter/Fernando-Bruno-25491"
 },
 {
   "name": "Renato Carneiro",
   "url": "/fighter/Renato-Carneiro-61700"
 },
 {
   "name": "Ricardo Funch",
   "url": "/fighter/Ricardo-Funch-24057"
 },
 {
   "name": "Jorge Antonio Cezario de Oliveira",
   "url": "/fighter/Jorge-Antonio-Cezario-de-Oliveira-15380"
 },
 {
   "name": "Sergio Pettis",
   "url": "/fighter/Sergio-Pettis-50987"
 },
 {
   "name": "Jacob Volkmann",
   "url": "/fighter/Jacob-Volkmann-24765"
 },
 {
   "name": "Estevan Payan",
   "url": "/fighter/Estevan-Payan-24952"
 },
 {
   "name": "Godofredo Castro",
   "url": "/fighter/Godofredo-Castro-40623"
 },
 {
   "name": "Felipe Arantes",
   "url": "/fighter/Felipe-Arantes-31372"
 },
 {
   "name": "Ryan Thomas",
   "url": "/fighter/Ryan-Thomas-20224"
 },
 {
   "name": "Leonardo Mafra Texeira",
   "url": "/fighter/Leonardo-Mafra-Texeira-76653"
 },
 {
   "name": "Edilberto de Oliveira",
   "url": "/fighter/Edilberto-de-Oliveira-11907"
 },
 {
   "name": "Ricardo Abreu",
   "url": "/fighter/Ricardo-Abreu-82392"
 },
 {
   "name": "Colby Covington",
   "url": "/fighter/Colby-Covington-57269"
 },
 {
   "name": "Rony Mariano Bezerra",
   "url": "/fighter/Rony-Mariano-Bezerra-38190"
 },
 {
   "name": "Donny Walker",
   "url": "/fighter/Donny-Walker-11486"
 },
 {
   "name": "Maiquel Falcao",
   "url": "/fighter/Maiquel-Falcao-30304"
 },
 {
   "name": "Andy Enz",
   "url": "/fighter/Andy-Enz-61422"
 },
 {
   "name": "Marcos Rogerio de Lima",
   "url": "/fighter/Marcos-Rogerio-de-Lima-51955"
 },
 {
   "name": "Vitor Miranda",
   "url": "/fighter/Vitor-Miranda-13004"
 },
 {
   "name": "Marcelo Guimaraes",
   "url": "/fighter/Marcelo-Guimaraes-20277"
 },
 {
   "name": "Cody Pfister",
   "url": "/fighter/Cody-Pfister-48481"
 },
 {
   "name": "Anton Zafir",
   "url": "/fighter/Anton-Zafir-86294"
 },
 {
   "name": "Roldan Sangcha-an",
   "url": "/fighter/Roldan-Sangchaan-103497"
 },
 {
   "name": "Dashon Johnson",
   "url": "/fighter/Dashon-Johnson-120663"
 },
 {
   "name": "Pawel Pawlak",
   "url": "/fighter/Pawel-Pawlak-65543"
 },
 {
   "name": "Steve Kennedy",
   "url": "/fighter/Steve-Kennedy-31092"
 },
 {
   "name": "Cody Gibson",
   "url": "/fighter/Cody-Gibson-38903"
 },
 {
   "name": "Marcio Alexandre Jr.",
   "url": "/fighter/Marcio-Alexandre-Jr-95457"
 },
 {
   "name": "Bernardo Magalhaes",
   "url": "/fighter/Bernardo-Magalhaes-26495"
 },
 {
   "name": "Alan Jouban",
   "url": "/fighter/Alan-Jouban-65878"
 },
 {
   "name": "Gasan Umalatov",
   "url": "/fighter/Gasan-Umalatov-53109"
 },
 {
   "name": "Mike Rhodes",
   "url": "/fighter/Mike-Rhodes-87296"
 },
 {
   "name": "Mikey Burnett",
   "url": "/fighter/Mikey-Burnett-186"
 },
 {
   "name": "Sherman Pendergarst",
   "url": "/fighter/Sherman-Pendergarst-12854"
 },
 {
   "name": "Edimilson Souza",
   "url": "/fighter/Edimilson-Souza-57343"
 },
 {
   "name": "Davey Grant",
   "url": "/fighter/Davey-Grant-30564"
 },
 {
   "name": "Gilbert Burns",
   "url": "/fighter/Gilbert-Burns-91727"
 },
 {
   "name": "Pedro Nobre",
   "url": "/fighter/Pedro-Nobre-44211"
 },
 {
   "name": "Guangyou Ning",
   "url": "/fighter/Guangyou-Ning-26389"
 },
 {
   "name": "Taylor Lapilus",
   "url": "/fighter/Taylor-Lapilus-97337"
 },
 {
   "name": "Patrick Williams",
   "url": "/fighter/Patrick-Williams-69607"
 },
 {
   "name": "Dan Lauzon",
   "url": "/fighter/Dan-Lauzon-16556"
 },
 {
   "name": "Dominique Steele",
   "url": "/fighter/Dominique-Steele-47845"
 },
 {
   "name": "Eddie Gordon",
   "url": "/fighter/Ed-Gordon-66410"
 },
 {
   "name": "Alex Chambers",
   "url": "/fighter/Alex-Chambers-65649"
 },
 {
   "name": "Nick Hein",
   "url": "/fighter/Nick-Hein-50774"
 },
 {
   "name": "Bryan Caraway",
   "url": "/fighter/Bryan-Caraway-13791"
 },
 {
   "name": "Angela Hill",
   "url": "/fighter/Angela-Hill-148517"
 },
 {
   "name": "Roger Narvaez",
   "url": "/fighter/Roger-Narvaez-60454"
 },
 {
   "name": "Rich Attonito",
   "url": "/fighter/Rich-Attonito-11955"
 },
 {
   "name": "Steve Steinbeiss",
   "url": "/fighter/Steve-Steinbeiss-21627"
 },
 {
   "name": "Fabiano Scherner",
   "url": "/fighter/Fabiano-Scherner-7690"
 },
 {
   "name": "Karlos Vemola",
   "url": "/fighter/Karlos-Vemola-40238"
 },
 {
   "name": "Vik Grujic",
   "url": "/fighter/Vik-Grujic-69858"
 },
 {
   "name": "Steve Cantwell",
   "url": "/fighter/Steve-Cantwell-12785"
 },
 {
   "name": "Denis Stojnic",
   "url": "/fighter/Denis-Stojnic-12955"
 },
 {
   "name": "Josh Haynes",
   "url": "/fighter/Josh-Haynes-6254"
 },
 {
   "name": "Matt Lucas",
   "url": "/fighter/Matt-Lucas-18915"
 },
 {
   "name": "Francimar Barroso",
   "url": "/fighter/Francimar-Barroso-14702"
 },
 {
   "name": "Manuel Rodriguez",
   "url": "/fighter/Manuel-Rodriguez-46484"
 },
 {
   "name": "Todd Brown",
   "url": "/fighter/Todd-Brown-21887"
 },
 {
   "name": "John Marsh",
   "url": "/fighter/John-Marsh-9"
 },
 {
   "name": "Cyrille Diabate",
   "url": "/fighter/Cyrille-Diabate-2191"
 },
 {
   "name": "Augusto Montano",
   "url": "/fighter/Augusto-Montano-41494"
 },
 {
   "name": "Aaron Simpson",
   "url": "/fighter/Aaron-Simpson-24986"
 },
 {
   "name": "Bruno Santos",
   "url": "/fighter/Bruno-Santos-48052"
 },
 {
   "name": "Ryan Madigan",
   "url": "/fighter/Ryan-Madigan-16551"
 },
 {
   "name": "Xavier Foupa-Pokam",
   "url": "/fighter/Xavier-FoupaPokam-8761"
 },
 {
   "name": "Josh Schockman",
   "url": "/fighter/Josh-Schockman-13270"
 },
 {
   "name": "Damian Grabowski",
   "url": "/fighter/Damian-Grabowski-30320"
 },
 {
   "name": "Mike Wessel",
   "url": "/fighter/Mike-Wessel-25524"
 },
 {
   "name": "Alex Andrade",
   "url": "/fighter/Alex-Andrade-258"
 },
 {
   "name": "Nah-Shon Burrell",
   "url": "/fighter/NahShon-Burrell-53596"
 },
 {
   "name": "Christos Giagos",
   "url": "/fighter/Christos-Giagos-68130"
 },
 {
   "name": "Oluwale Bamgbose",
   "url": "/fighter/Oluwale-Bamgbose-103153"
 },
 {
   "name": "Mario Miranda",
   "url": "/fighter/Mario-Miranda-23852"
 },
 {
   "name": "Jesse Lennox",
   "url": "/fighter/Jesse-Lennox-17139"
 },
 {
   "name": "Albert Tumenov",
   "url": "/fighter/Albert-Tumenov-60198"
 },
 {
   "name": "Mickael Lebout",
   "url": "/fighter/Mickael-Lebout-81143"
 },
 {
   "name": "Luiz Cane",
   "url": "/fighter/Luiz-Cane-17559"
 },
 {
   "name": "Roger Zapata",
   "url": "/fighter/Roger-Zapata-81585"
 },
 {
   "name": "Patrick Walsh",
   "url": "/fighter/Patrick-Walsh-67971"
 },
 {
   "name": "Chad Laprise",
   "url": "/fighter/Chad-Laprise-69681"
 },
 {
   "name": "Elias Theodorou",
   "url": "/fighter/Elias-Theodorou-81765"
 },
 {
   "name": "Leo Kuntz",
   "url": "/fighter/Leo-Kuntz-44602"
 },
 {
   "name": "David Michaud",
   "url": "/fighter/David-Michaud-53778"
 },
 {
   "name": "Eddie Sanchez",
   "url": "/fighter/Eddie-Sanchez-12098"
 },
 {
   "name": "Adam Cella",
   "url": "/fighter/Adam-Cella-69956"
 },
 {
   "name": "Zach Light",
   "url": "/fighter/Zach-Light-3919"
 },
 {
   "name": "Chris Heatherly",
   "url": "/fighter/Chris-Heatherly-101117"
 },
 {
   "name": "Dongi Yang",
   "url": "/fighter/Dongi-Yang-23501"
 },
 {
   "name": "Matt Van Buren",
   "url": "/fighter/Matt-Van-Buren-64754"
 },
 {
   "name": "Razak Al-Hassan",
   "url": "/fighter/Razak-AlHassan-23326"
 },
 {
   "name": "Justin Wren",
   "url": "/fighter/Justin-Wren-21401"
 },
 {
   "name": "Magnus Cedenblad",
   "url": "/fighter/Magnus-Cedenblad-22137"
 },
 {
   "name": "Jason Fairn",
   "url": "/fighter/Jason-Fairn-48"
 },
 {
   "name": "Alexandre Ferreira",
   "url": "/fighter/Alexandre-Ferreira-1398"
 },
 {
   "name": "Justin McCully",
   "url": "/fighter/Justin-McCully-930"
 },
 {
   "name": "Ulysses Gomez",
   "url": "/fighter/Ulysses-Gomez-30396"
 },
 {
   "name": "Rob Broughton",
   "url": "/fighter/Rob-Broughton-10924"
 },
 {
   "name": "Danny Roberts",
   "url": "/fighter/Danny-Roberts-64677"
 },
 {
   "name": "Nick Penner",
   "url": "/fighter/Nick-Penner-23736"
 },
 {
   "name": "Daniel Roberts",
   "url": "/fighter/Daniel-Roberts-23999"
 },
 {
   "name": "Renan Barao",
   "url": "/fighter/Renan-Pegado-23156"
 },
 {
   "name": "Reese Andy",
   "url": "/fighter/Reese-Andy-12692"
 },
 {
   "name": "James Hammortree",
   "url": "/fighter/James-Hammortree-42479"
 },
 {
   "name": "Clifford Starks",
   "url": "/fighter/Clifford-Starks-56902"
 },
 {
   "name": "Shinsho Anzai",
   "url": "/fighter/Shinsho-Anzai-47183"
 },
 {
   "name": "Enson Inoue",
   "url": "/fighter/Enson-Inoue-12"
 },
 {
   "name": "Alan Patrick Silva Alves",
   "url": "/fighter/Alan-Patrick-Silva-Alves-31096"
 },
 {
   "name": "Valmir Lazaro",
   "url": "/fighter/Valmir-Lazaro-22216"
 },
 {
   "name": "Tiequan Zhang",
   "url": "/fighter/Tiequan-Zhang-16984"
 },
 {
   "name": "Chris Kelades",
   "url": "/fighter/Chris-Kelades-51576"
 },
 {
   "name": "Ildemar Alcantara",
   "url": "/fighter/Ildemar-Alcantara-22223"
 },
 {
   "name": "Yoji Anjo",
   "url": "/fighter/Yoji-Anjo-182"
 },
 {
   "name": "Germaine de Randamie",
   "url": "/fighter/Germaine-de-Randamie-41745"
 },
 {
   "name": "Valentina Shevchenko",
   "url": "/fighter/Valentina-Shevchenko-45384"
 },
 {
   "name": "Daniel Hooker",
   "url": "/fighter/Daniel-Hooker-45122"
 },
 {
   "name": "Sean Strickland",
   "url": "/fighter/Sean-Strickland-30452"
 },
 {
   "name": "Guilherme Vasconcelos",
   "url": "/fighter/Guilherme-Vasconcelos-108499"
 },
 {
   "name": "Steve Montgomery",
   "url": "/fighter/Steve-Montgomery-49092"
 },
 {
   "name": "Marcin Wrzosek",
   "url": "/fighter/Marcin-Wrzosek-85623"
 },
 {
   "name": "Andreas Stahl",
   "url": "/fighter/Andreas-Stahl-57322"
 },
 {
   "name": "Paul Redmond",
   "url": "/fighter/Paul-Redmond-56615"
 },
 {
   "name": "Kris McCray",
   "url": "/fighter/Kris-McCray-39432"
 },
 {
   "name": "Tom Egan",
   "url": "/fighter/Tom-Egan-29690"
 },
 {
   "name": "Alberto Mina",
   "url": "/fighter/Alberto-Mina-16705"
 },
 {
   "name": "Roxanne Modafferi",
   "url": "/fighter/Roxanne-Modafferi-8785"
 },
 {
   "name": "Antonio Carlos Jr.",
   "url": "/fighter/Antonio-Carlos-Jr-143157"
 },
 {
   "name": "Lee Murray",
   "url": "/fighter/Lee-Murray-1659"
 },
 {
   "name": "Jake Hecht",
   "url": "/fighter/Jake-Hecht-15759"
 },
 {
   "name": "Luiz Cane",
   "url": "/fighter/Luis-Arthur-Cane-17559"
 },
 {
   "name": "Aaron Phillips",
   "url": "/fighter/Aaron-Phillips-55298"
 },
 {
   "name": "Nah-Shon Burrell",
   "url": "/fighter/Nah-Shon-Burrell-53596"
 },
 {
   "name": "Bradley Scott",
   "url": "/fighter/Bradley-Scott-44442"
 },
 {
   "name": "Marcin Bandel",
   "url": "/fighter/Marcin-Bandel-55705"
 },
 {
   "name": "Nandor Guelmino",
   "url": "/fighter/Nandor-Guelmino-28286"
 },
 {
   "name": "Robert Whiteford",
   "url": "/fighter/Robert-Whiteford-47105"
 },
 {
   "name": "Mehdi Baghdad",
   "url": "/fighter/Mehdi-Baghdad-41993"
 },
 {
   "name": "Xavier Foupa-Pokam",
   "url": "/fighter/Xavier-Foupa-Pokam-8761"
 },
 {
   "name": "Guido Cannetti",
   "url": "/fighter/Guido-Cannetti-69513"
 },
 {
   "name": "Daniel Downes",
   "url": "/fighter/Daniel-Downes-41666"
 },
 {
   "name": "Aaron Wilkinson",
   "url": "/fighter/Aaron-Wilkinson-39265"
 },
 {
   "name": "Enrique Marin",
   "url": "/fighter/Enrique-Marin-27077"
 },
 {
   "name": "Lukasz Sajewski",
   "url": "/fighter/Lukasz-Sajewski-31110"
 },
 {
   "name": "Sai Wang",
   "url": "/fighter/Sai-Wang-47118"
 },
 {
   "name": "Allen Berube",
   "url": "/fighter/Allen-Berube-16459"
 },
 {
   "name": "John Polakowski",
   "url": "/fighter/John-Polakowski-9512"
 },
 {
   "name": "Alejandro Perez",
   "url": "/fighter/Alejandro-Perez-13428"
 },
 {
   "name": "Steve Vigneault",
   "url": "/fighter/Steve-Vigneault-900"
 },
 {
   "name": "Roland Delorme",
   "url": "/fighter/Roland-Delorme-37351"
 },
 {
   "name": "Jared Rollins",
   "url": "/fighter/Jared-Rollins-5781"
 },
 {
   "name": "Scott Junk",
   "url": "/fighter/Scott-Junk-12943"
 },
 {
   "name": "Alfonso Alcarez",
   "url": "/fighter/Alfonso-Alcarez-229"
 },
 {
   "name": "David Velasquez",
   "url": "/fighter/David-Velasquez-243"
 },
 {
   "name": "Alexis Dufresne",
   "url": "/fighter/Alexis-Dufresne-113687"
 },
 {
   "name": "Leonardo Guimaraes",
   "url": "/fighter/Leonardo-Guimaraes-14971"
 },
 {
   "name": "Geane Herrera",
   "url": "/fighter/Geane-Herrera-79290"
 },
 {
   "name": "Leandro Silva",
   "url": "/fighter/Leandro-Silva-86382"
 },
 {
   "name": "Peggy Morgan",
   "url": "/fighter/Peggy-Morgan-91565"
 },
 {
   "name": "Mark Robinson",
   "url": "/fighter/Mark-Robinson-280"
 },
 {
   "name": "Alexandre Dantas",
   "url": "/fighter/Alexandre-Dantas-264"
 },
 {
   "name": "Josh Ferguson",
   "url": "/fighter/Josh-Ferguson-26649"
 },
 {
   "name": "John Teixeira da Conceicao",
   "url": "/fighter/John-Teixeira-da-Conceicao-44311"
 },
 {
   "name": "Pedro Munhoz",
   "url": "/fighter/Pedro-Munhoz-52407"
 },
 {
   "name": "Jose Maria Tome",
   "url": "/fighter/Jose-Maria-Tome-37681"
 },
 {
   "name": "Azamat Gashimov",
   "url": "/fighter/Azamat-Gashimov-71175"
 },
 {
   "name": "Wagner Campos",
   "url": "/fighter/Wagner-Campos-22197"
 },
 {
   "name": "Marcos Vinicius Borges Pancini",
   "url": "/fighter/Marcos-Vinicius-Borges-Pancini-51728"
 },
 {
   "name": "Douglas Silva de Andrade",
   "url": "/fighter/Douglas-Silva-de-Andrade-87981"
 },
 {
   "name": "Brian Houston",
   "url": "/fighter/Brian-Houston-59769"
 },
 {
   "name": "Daniel Jolly",
   "url": "/fighter/Daniel-Jolly-83243"
 },
 {
   "name": "Carlo Prater",
   "url": "/fighter/carlo-prater-6767"
 },
 {
   "name": "John Albert",
   "url": "/fighter/John-Albert-43796"
 },
 {
   "name": "Cortney Casey",
   "url": "/fighter/Cortney-Casey-91121"
 },
 {
   "name": "Bentley Syler",
   "url": "/fighter/Bentley-Syler-123973"
 },
 {
   "name": "Carlos Augusto Inocente Filho",
   "url": "/fighter/Carlos-Augusto-Inocente-Filho-17786"
 },
 {
   "name": "Bob Cook",
   "url": "/fighter/Bob-Cook-244"
 },
 {
   "name": "Jingliang Li",
   "url": "/fighter/Jingliang-Li-26381"
 },
 {
   "name": "Jack May",
   "url": "/fighter/Jack-May-83949"
 },
 {
   "name": "Jeff Joslin",
   "url": "/fighter/Jeff-Joslin-6606"
 },
 {
   "name": "Maryna Moroz",
   "url": "/fighter/Maryna-Moroz-151905"
 },
 {
   "name": "Antonio dos Santos Jr.",
   "url": "/fighter/Antonio-dos-Santos-Jr-46759"
 },
 {
   "name": "Richard Walsh",
   "url": "/fighter/Richard-Walsh-55587"
 },
 {
   "name": "Ben Alloway",
   "url": "/fighter/Ben-Alloway-60790"
 },
 {
   "name": "Jeff Hougland",
   "url": "/fighter/Jeff-Hougland-4870"
 },
 {
   "name": "Sako Chivitchyan",
   "url": "/fighter/Sako-Chivitchyan-6527"
 },
 {
   "name": "Alex Morono",
   "url": "/fighter/Alex-Morono-64894"
 },
 {
   "name": "Tyler Toner",
   "url": "/fighter/Tyler-Toner-13539"
 },
 {
   "name": "Lipeng Zhang",
   "url": "/fighter/Lipeng-Zhang-50416"
 },
 {
   "name": "John Cofer",
   "url": "/fighter/John-Cofer-33523"
 },
 {
   "name": "Nick Serra",
   "url": "/fighter/Nick-Serra-3225"
 },
 {
   "name": "Renan Barao",
   "url": "/fighter/Renan-do-Nascimento-Mota-Pegado-23156"
 },
 {
   "name": "Frank Lester",
   "url": "/fighter/Frank-Lester-22791"
 },
 {
   "name": "Marlon Vera",
   "url": "/fighter/Marlon-Vera-97179"
 },
 {
   "name": "Marco Beltran",
   "url": "/fighter/Marco-Beltran-40285"
 },
 {
   "name": "Yair Rodriguez",
   "url": "/fighter/Yair-Rodriguez-106305"
 },
 {
   "name": "Cesar Arzamendia",
   "url": "/fighter/Cesar-Arzamendia-87012"
 },
 {
   "name": "Mike Nickels",
   "url": "/fighter/Mike-Nickels-11278"
 },
 {
   "name": "Josh Clopton",
   "url": "/fighter/Josh-Clopton-22105"
 },
 {
   "name": "Cain Carrizosa",
   "url": "/fighter/Cain-Carrizosa-84645"
 },
 {
   "name": "Jose Alberto Quinonez",
   "url": "/fighter/Jose-Alberto-Quinonez-152627"
 },
 {
   "name": "Jonathan Wilson",
   "url": "/fighter/Jonathan-Wilson-108571"
 },
 {
   "name": "Jimmy Quinlan",
   "url": "/fighter/Jimmy-Quinlan-84661"
 },
 {
   "name": "Ben Wall",
   "url": "/fighter/Ben-Wall-78164"
 },
 {
   "name": "Pat Barry",
   "url": "/fighter/Patrick-Barry-33342"
 },
 {
   "name": "Tony DeSouza",
   "url": "/fighter/tony-desouza-487"
 },
 {
   "name": "Roan Carneiro",
   "url": "/fighter/roan-carneiro-2886"
 },
 {
   "name": "Nina Ansaroff",
   "url": "/fighter/Nina-Ansaroff-69632"
 },
 {
   "name": "Richardson Moreira",
   "url": "/fighter/Richardson-Moreira-72825"
 },
 {
   "name": "Rafael dos Anjos",
   "url": "/fighter/Rafael-dos-Anjos-11675"
 },
 {
   "name": "Joanna Jedrzejczyk",
   "url": "/fighter/Joanna-Jedrzejczyk-101411"
 },
 {
   "name": "Luke Rockhold",
   "url": "/fighter/Luke-Rockhold-23345"
 },
 {
   "name": "Royce Gracie",
   "url": "/fighter/Royce-Gracie-19"
 },
 {
   "name": "Gleison Tibau",
   "url": "/fighter/Gleison-Tibau-5993"
 },
 {
   "name": "George Sotiropoulos",
   "url": "/fighter/George-Sotiropoulos-11702"
 },
 {
   "name": "Tyson Griffin",
   "url": "/fighter/Tyson-Griffin-11689"
 },
 {
   "name": "Mark Bocek",
   "url": "/fighter/Mark-Bocek-9781"
 },
 {
   "name": "Evan Dunham",
   "url": "/fighter/Evan-Dunham-22038"
 },
 {
   "name": "Nate Diaz",
   "url": "/fighter/Nate-Diaz-11451"
 },
 {
   "name": "Terry Etim",
   "url": "/fighter/Terry-Etim-13332"
 },
 {
   "name": "Kyle Bradley",
   "url": "/fighter/Kyle-Bradley-7918"
 },
 {
   "name": "Jessica Penne",
   "url": "/fighter/Jessica-Penne-21247"
 },
 {
   "name": "Edson Barboza",
   "url": "/fighter/Edson-Barboza-46259"
 },
 {
   "name": "Costas Philippou",
   "url": "/fighter/Costas-Philippou-32432"
 },
 {
   "name": "Matt Hughes",
   "url": "/fighter/Matt-Hughes-232"
 },
 {
   "name": "Tim Kennedy",
   "url": "/fighter/Tim-Kennedy-2830"
 },
 {
   "name": "Kimo Leopoldo",
   "url": "/fighter/Kimo-Leopoldo-43"
 },
 {
   "name": "Greg Stott",
   "url": "/fighter/Greg-Stott-179"
 },
 {
   "name": "Ron van Clief",
   "url": "/fighter/Ron-van-Clief-49"
 },
 {
   "name": "Keith Hackney",
   "url": "/fighter/Keith-Hackney-38"
 },
 {
   "name": "Minoki Ichihara",
   "url": "/fighter/Minoki-Ichihara-35"
 },
 {
   "name": "Art Jimmerson",
   "url": "/fighter/Art-Jimmerson-20"
 },
 {
   "name": "Patrick Smith",
   "url": "/fighter/Patrick-Smith-21"
 },
 {
   "name": "Gerard Gordeau",
   "url": "/fighter/Gerard-Gordeau-15"
 },
 {
   "name": "Jason DeLucia",
   "url": "/fighter/Jason-DeLucia-22"
 },
 {
   "name": "Phillip Miller",
   "url": "/fighter/Phillip-Miller-482"
 },
 {
   "name": "Jim Miller",
   "url": "/fighter/Jim-Miller-14463"
 },
 {
   "name": "Nick Diaz",
   "url": "/fighter/Nick-Diaz-2831"
 },
 {
   "name": "John Cholish",
   "url": "/fighter/John-Cholish-35867"
 },
 {
   "name": "Jeff Cox",
   "url": "/fighter/Jeff-Cox-9785"
 },
 {
   "name": "Adriano Martins",
   "url": "/fighter/Adriano-Martins-9907"
 },
 {
   "name": "Caol Uno",
   "url": "/fighter/Caol-Uno-283"
 },
 {
   "name": "Roman Mitichyan",
   "url": "/fighter/Roman-Mitichyan-6525"
 },
 {
   "name": "Dennis Siver",
   "url": "/fighter/Dennis-Siver-9817"
 },
 {
   "name": "Billy Miles",
   "url": "/fighter/Billy-Miles-8845"
 },
 {
   "name": "George Roop",
   "url": "/fighter/George-Roop-16415"
 },
 {
   "name": "Yan Cabral",
   "url": "/fighter/Yan-Cabral-27090"
 },
 {
   "name": "Dave Roberts",
   "url": "/fighter/Dave-Roberts-220"
 },
 {
   "name": "Thiago Tavares",
   "url": "/fighter/Thiago-Tavares-4647"
 },
 {
   "name": "Hermes Franca",
   "url": "/fighter/Hermes-Franca-3068"
 },
 {
   "name": "David Lee",
   "url": "/fighter/David-Lee-6945"
 },
 {
   "name": "James Lee",
   "url": "/fighter/James-Lee-2224"
 },
 {
   "name": "David Bielkheden",
   "url": "/fighter/David-Bielkheden-3863"
 },
 {
   "name": "Mac Danzig",
   "url": "/fighter/Mac-Danzig-3396"
 },
 {
   "name": "Douglas Evans",
   "url": "/fighter/Douglas-Evans-18184"
 },
 {
   "name": "Rodrigo Damm",
   "url": "/fighter/Rodrigo-Damm-11507"
 },
 {
   "name": "Leonardo Santos",
   "url": "/fighter/Leonardo-Santos-4810"
 },
 {
   "name": "Per Eklund",
   "url": "/fighter/Per-Eklund-3707"
 },
 {
   "name": "T.J. Grant",
   "url": "/fighter/TJ-Grant-15906"
 },
 {
   "name": "Rory Markham",
   "url": "/fighter/Rory-Markham-10768"
 },
 {
   "name": "Koji Oishi",
   "url": "/fighter/Koji-Oishi-249"
 },
 {
   "name": "Junior Assuncao",
   "url": "/fighter/Junior-Assuncao-10380"
 },
 {
   "name": "Renee Forte",
   "url": "/fighter/Renee-Forte-37684"
 },
 {
   "name": "Gian Villante",
   "url": "/fighter/Gian-Villante-42802"
 },
 {
   "name": "Shannon Gugerty",
   "url": "/fighter/Shannon-Gugerty-11001"
 },
 {
   "name": "Justin Buchholz",
   "url": "/fighter/Justin-Buchholz-18062"
 },
 {
   "name": "Felipe Olivieri",
   "url": "/fighter/Felipe-Olivieri-28181"
 },
 {
   "name": "Miguel Torres",
   "url": "/fighter/Miguel-Torres-3006"
 },
 {
   "name": "Dokonjonosuke Mishima",
   "url": "/fighter/Dokonjonosuke-Mishima-1170"
 },
 {
   "name": "Frank Mir",
   "url": "/fighter/Frank-Mir-2329"
 },
 {
   "name": "Masanori Kanehara",
   "url": "/fighter/Masanori-Kanehara-13767"
 },
 {
   "name": "T.J. Dillashaw",
   "url": "/fighter/TJ-Dillashaw-62507"
 },
 {
   "name": "Peter Sobotta",
   "url": "/fighter/Peter-Sobotta-15816"
 },
 {
   "name": "Cub Swanson",
   "url": "/fighter/Cub-Swanson-11002"
 },
 {
   "name": "Bas Rutten",
   "url": "/fighter/Bas-Rutten-214"
 },
 {
   "name": "Kelvin Gastelum",
   "url": "/fighter/Kelvin-Gastelum-74700"
 },
 {
   "name": "Brock Lesnar",
   "url": "/fighter/Brock-Lesnar-17522"
 },
 {
   "name": "Milana Dudieva",
   "url": "/fighter/Milana-Dudieva-43885"
 },
 {
   "name": "Antonio Braga Neto",
   "url": "/fighter/Antonio-Braga-Neto-19530"
 },
 {
   "name": "Neil Magny",
   "url": "/fighter/Neil-Magny-69166"
 },
 {
   "name": "Amir Sadollah",
   "url": "/fighter/Amir-Sadollah-34071"
 },
 {
   "name": "Shane Carwin",
   "url": "/fighter/Shane-Carwin-14013"
 },
 {
   "name": "Al Iaquinta",
   "url": "/fighter/Al-Iaquinta-42817"
 },
 {
   "name": "Katsunori Kikuno",
   "url": "/fighter/Katsunori-Kikuno-16806"
 },
 {
   "name": "Forrest Griffin",
   "url": "/fighter/Forrest-Griffin-3526"
 },
 {
   "name": "Ronys Torres",
   "url": "/fighter/Ronys-Torres-20447"
 },
 {
   "name": "Lisa Ellis",
   "url": "/fighter/Lisa-Ellis-10071"
 },
 {
   "name": "Mike Lullo",
   "url": "/fighter/Mike-Lullo-36885"
 },
 {
   "name": "Thales Leites",
   "url": "/fighter/Thales-Leites-8593"
 },
 {
   "name": "Daniel Sarafian",
   "url": "/fighter/Daniel-Sarafian-17665"
 },
 {
   "name": "Ryan LaFlare",
   "url": "/fighter/Ryan-LaFlare-34409"
 },
 {
   "name": "Stipe Miocic",
   "url": "/fighter/Stipe-Miocic-39537"
 },
 {
   "name": "Sarah Kaufman",
   "url": "/fighter/Sarah-Kaufman-16524"
 },
 {
   "name": "Daniel Cormier",
   "url": "/fighter/Daniel-Cormier-52311"
 },
 {
   "name": "Cain Velasquez",
   "url": "/fighter/Cain-Velasquez-19102"
 },
 {
   "name": "Sara McMann",
   "url": "/fighter/Sara-McMann-67094"
 },
 {
   "name": "Chael Sonnen",
   "url": "/fighter/Chael-Sonnen-4112"
 },
 {
   "name": "Dustin Ortiz",
   "url": "/fighter/Dustin-Ortiz-58097"
 },
 {
   "name": "Isaac Vallie-Flagg",
   "url": "/fighter/Isaac-Vallie-Flagg-8180"
 },
 {
   "name": "Joseph Benavidez",
   "url": "/fighter/Joseph-Benavidez-15008"
 },
 {
   "name": "Ricardo Romero",
   "url": "/fighter/Ricardo-Romero-23978"
 },
 {
   "name": "Riki Fukuda",
   "url": "/fighter/Riki-Fukuda-10229"
 },
 {
   "name": "Renzo Gracie",
   "url": "/fighter/Renzo-Gracie-290"
 },
 {
   "name": "Gil Castillo",
   "url": "/fighter/Gil-Castillo-553"
 },
 {
   "name": "Chris Haseman",
   "url": "/fighter/Chris-Haseman-1449"
 },
 {
   "name": "Marcelo Aguiar",
   "url": "/fighter/Marcelo-Aguiar-257"
 },
 {
   "name": "Akihiro Gono",
   "url": "/fighter/Akihiro-Gono-1217"
 },
 {
   "name": "Will Campuzano",
   "url": "/fighter/Will-Campuzano-35521"
 },
 {
   "name": "Antonio Banuelos",
   "url": "/fighter/Antonio-Banuelos-2580"
 },
 {
   "name": "Naoyuki Kotani",
   "url": "/fighter/Naoyuki-Kotani-393"
 },
 {
   "name": "Frank Shamrock",
   "url": "/fighter/Frank-Shamrock-284"
 },
 {
   "name": "David Abbott",
   "url": "/fighter/David-Abbott-110"
 },
 {
   "name": "Roger Gracie",
   "url": "/fighter/Roger-Gracie-19854"
 },
 {
   "name": "Alex Schoenauer",
   "url": "/fighter/Alex-Schoenauer-4000"
 },
 {
   "name": "Trevor Prangley",
   "url": "/fighter/Trevor-Prangley-4789"
 },
 {
   "name": "Yuki Sasaki",
   "url": "/fighter/Yuki-Sasaki-1255"
 },
 {
   "name": "Sanae Kikuta",
   "url": "/fighter/Sanae-Kikuta-252"
 },
 {
   "name": "Zak Cummings",
   "url": "/fighter/Zak-Cummings-31808"
 },
 {
   "name": "Dante Rivera",
   "url": "/fighter/Dante-Rivera-5746"
 },
 {
   "name": "Paul Varelans",
   "url": "/fighter/Paul-Varelans-112"
 },
 {
   "name": "Mike Pierce",
   "url": "/fighter/Mike-Pierce-25415"
 },
 {
   "name": "Mark Eddiva",
   "url": "/fighter/Mark-Eddiva-75370"
 },
 {
   "name": "Yui Chul Nam",
   "url": "/fighter/Yui-Chul-Nam-15987"
 },
 {
   "name": "Joe Son",
   "url": "/fighter/Joe-Son-50"
 },
 {
   "name": "Fred Ettish",
   "url": "/fighter/Fred-Ettish-36"
 },
 {
   "name": "Jon Fitch",
   "url": "/fighter/Jon-Fitch-4865"
 },
 {
   "name": "David Dodd",
   "url": "/fighter/David-Dodd-81"
 },
 {
   "name": "Fabio Gurgel",
   "url": "/fighter/Fabio-Gurgel-146"
 },
 {
   "name": "Johnny Rhodes",
   "url": "/fighter/Johnny-Rhodes-27"
 },
 {
   "name": "Ray Wizard",
   "url": "/fighter/Ray-Wizard-26"
 },
 {
   "name": "Rudyard Moncayo",
   "url": "/fighter/Rudyard-Moncayo-114"
 },
 {
   "name": "Dave Beneteau",
   "url": "/fighter/Dave-Beneteau-56"
 },
 {
   "name": "Scott Morris",
   "url": "/fighter/Scott-Morris-24"
 },
 {
   "name": "John Moraga",
   "url": "/fighter/John-Moraga-55159"
 },
 {
   "name": "Teila Tuli",
   "url": "/fighter/Teila-Tuli-16"
 },
 {
   "name": "Kevin Rosier",
   "url": "/fighter/Kevin-Rosier-17"
 },
 {
   "name": "Iliarde Santos",
   "url": "/fighter/Iliarde-Santos-39391"
 },
 {
   "name": "James Te Huna",
   "url": "/fighter/James-Te-Huna-9033"
 },
 {
   "name": "Brian Bowles",
   "url": "/fighter/Brian-Bowles-18944"
 },
 {
   "name": "Thiago Silva",
   "url": "/fighter/Thiago-Silva-14396"
 },
 {
   "name": "Karo Parisyan",
   "url": "/fighter/Karo-Parisyan-5153"
 },
 {
   "name": "Glover Teixeira",
   "url": "/fighter/Glover-Teixeira-4655"
 },
 {
   "name": "Shane Roller",
   "url": "/fighter/Shane-Roller-24540"
 },
 {
   "name": "Nam Phan",
   "url": "/fighter/Nam-Phan-5778"
 },
 {
   "name": "Eddie Mendez",
   "url": "/fighter/Eddie-Mendez-37421"
 },
 {
   "name": "Chris Camozzi",
   "url": "/fighter/Chris-Camozzi-17224"
 },
 {
   "name": "Colton Smith",
   "url": "/fighter/Colton-Smith-63163"
 },
 {
   "name": "Dan Miller",
   "url": "/fighter/Dan-Miller-14464"
 },
 {
   "name": "Brian Geraghty",
   "url": "/fighter/Brian-Geraghty-5269"
 },
 {
   "name": "Cung Le",
   "url": "/fighter/Cung-Le-14883"
 },
 {
   "name": "Tarec Saffiedine",
   "url": "/fighter/Tarec-Saffiedine-21912"
 },
 {
   "name": "Michael Graves",
   "url": "/fighter/Michael-Graves-64989"
 },
 {
   "name": "Joe Slick",
   "url": "/fighter/Joe-Slick-238"
 },
 {
   "name": "Trent Jenkins",
   "url": "/fighter/Trent-Jenkins-23"
 },
 {
   "name": "Scott Baker",
   "url": "/fighter/Scott-Baker-34"
 },
 {
   "name": "Jake Shields",
   "url": "/fighter/Jake-Shields-502"
 },
 {
   "name": "Beneil Dariush",
   "url": "/fighter/Beneil-Dariush-56583"
 },
 {
   "name": "Steve Lopez",
   "url": "/fighter/Steve-Lopez-29129"
 },
 {
   "name": "Chris Liguori",
   "url": "/fighter/Chris-Liguori-4102"
 },
 {
   "name": "Vagner Rocha",
   "url": "/fighter/Vagner-Rocha-43107"
 },
 {
   "name": "Kuniyoshi Hironaka",
   "url": "/fighter/Kuniyoshi-Hironaka-2575"
 },
 {
   "name": "Ashlee Evans-Smith",
   "url": "/fighter/Ashlee-Evans-Smith-75021"
 },
 {
   "name": "Robert Drysdale",
   "url": "/fighter/Robert-Drysdale-67894"
 },
 {
   "name": "Sean Soriano",
   "url": "/fighter/Sean-Soriano-61682"
 },
 {
   "name": "Frankie Perez",
   "url": "/fighter/Frankie-Perez-79784"
 },
 {
   "name": "Shane Howell",
   "url": "/fighter/Shane-Howell-20906"
 },
 {
   "name": "Chris Wade",
   "url": "/fighter/Chris-Wade-79335"
 },
 {
   "name": "Bec Rawlings",
   "url": "/fighter/Bec-Rawlings-84964"
 },
 {
   "name": "Mike Massenzio",
   "url": "/fighter/Mike-Massenzio-12852"
 },
 {
   "name": "Islam Makhachev",
   "url": "/fighter/Islam-Makhachev-76836"
 },
 {
   "name": "Spencer Fisher",
   "url": "/fighter/Spencer-Fisher-5118"
 },
 {
   "name": "Fabiano Iha",
   "url": "/fighter/Fabiano-Iha-218"
 },
 {
   "name": "Andre Pederneiras",
   "url": "/fighter/Andre-Pederneiras-227"
 },
 {
   "name": "Dorian Price",
   "url": "/fighter/Dorian-Price-9786"
 },
 {
   "name": "Andre Winner",
   "url": "/fighter/Andre-Winner-17034"
 },
 {
   "name": "Nate Mohr",
   "url": "/fighter/Nate-Mohr-8396"
 },
 {
   "name": "Jess Liaudin",
   "url": "/fighter/Jess-Liaudin-3368"
 },
 {
   "name": "Rob Font",
   "url": "/fighter/Rob-Font-76100"
 },
 {
   "name": "Hatsu Hioki",
   "url": "/fighter/Hatsu-Hioki-5466"
 },
 {
   "name": "Eddie Wineland",
   "url": "/fighter/Eddie-Wineland-4173"
 },
 {
   "name": "Takeya Mizugaki",
   "url": "/fighter/Takeya-Mizugaki-12074"
 },
 {
   "name": "Jutaro Nakao",
   "url": "/fighter/Jutaro-Nakao-438"
 },
 {
   "name": "Eddie Alvarez",
   "url": "/fighter/Eddie-Alvarez-9265"
 },
 {
   "name": "Ben Rothwell",
   "url": "/fighter/Ben-Rothwell-2262"
 },
 {
   "name": "Dhiego Lima",
   "url": "/fighter/Dhiego-Lima-59607"
 },
 {
   "name": "Dave Herman",
   "url": "/fighter/Dave-Herman-19720"
 },
 {
   "name": "James Head",
   "url": "/fighter/James-Head-23253"
 },
 {
   "name": "Marcelo Mello",
   "url": "/fighter/Marcelo-Mello-219"
 },
 {
   "name": "Eddie Ruiz",
   "url": "/fighter/Eddie-Ruiz-3265"
 },
 {
   "name": "David Branch",
   "url": "/fighter/David-Branch-32431"
 },
 {
   "name": "Mike Thomas Brown",
   "url": "/fighter/Mike-Thomas-Brown-3069"
 },
 {
   "name": "Drew Dober",
   "url": "/fighter/Drew-Dober-23982"
 },
 {
   "name": "Mitch Gagnon",
   "url": "/fighter/Mitch-Gagnon-37404"
 },
 {
   "name": "Wilson Reis",
   "url": "/fighter/Wilson-Reis-23401"
 },
 {
   "name": "Vaughan Lee",
   "url": "/fighter/Vaughan-Lee-6946"
 },
 {
   "name": "Todd Duffee",
   "url": "/fighter/Todd-Duffee-22903"
 },
 {
   "name": "Ben Earwood",
   "url": "/fighter/Ben-Earwood-266"
 },
 {
   "name": "Besam Yousef",
   "url": "/fighter/Besam-Yousef-32445"
 },
 {
   "name": "Brian Gassaway",
   "url": "/fighter/Brian-Gassaway-886"
 },
 {
   "name": "Tom Speer",
   "url": "/fighter/Tom-Speer-16635"
 },
 {
   "name": "Jason Von Flue",
   "url": "/fighter/Jason-Von-Flue-549"
 },
 {
   "name": "Alberto Crane",
   "url": "/fighter/Alberto-Crane-4767"
 },
 {
   "name": "Anthony Lapsley",
   "url": "/fighter/Anthony-Lapsley-18590"
 },
 {
   "name": "Tony Martin",
   "url": "/fighter/Tony-Martin-80436"
 },
 {
   "name": "Rani Yahya",
   "url": "/fighter/Rani-Yahya-10425"
 },
 {
   "name": "Julio Paulino",
   "url": "/fighter/Julio-Paulino-18106"
 },
 {
   "name": "Joao Marcos Pierini",
   "url": "/fighter/Joao-Marcos-Pierini-2490"
 },
 {
   "name": "Bethe Correia",
   "url": "/fighter/Bethe-Correia-103069"
 },
 {
   "name": "Demian Maia",
   "url": "/fighter/Demian-Maia-14637"
 },
 {
   "name": "Sam Sicilia",
   "url": "/fighter/Sam-Sicilia-53205"
 },
 {
   "name": "Ryan Couture",
   "url": "/fighter/Ryan-Couture-51228"
 },
 {
   "name": "Akira Corassani",
   "url": "/fighter/Akira-Corassani-22641"
 },
 {
   "name": "Dylan Andrews",
   "url": "/fighter/Dylan-Andrews-21803"
 },
 {
   "name": "Joe Proctor",
   "url": "/fighter/Joe-Proctor-46307"
 },
 {
   "name": "Brodie Farber",
   "url": "/fighter/Brodie-Farber-6123"
 },
 {
   "name": "Paul Rodriguez",
   "url": "/fighter/Paul-Rodriguez-1332"
 },
 {
   "name": "Christian Morecraft",
   "url": "/fighter/Christian-Morecraft-34376"
 },
 {
   "name": "Viscardi Andrade",
   "url": "/fighter/Viscardi-Andrade-30298"
 },
 {
   "name": "Takenori Sato",
   "url": "/fighter/Takenori-Sato-12196"
 },
 {
   "name": "Hernani Perpetuo",
   "url": "/fighter/Hernani-Perpetuo-28185"
 },
 {
   "name": "George Sullivan",
   "url": "/fighter/George-Sullivan-15148"
 },
 {
   "name": "Cesar Marcussi",
   "url": "/fighter/Cesar-Marcussi-203"
 },
 {
   "name": "Sean O'Connell",
   "url": "/fighter/Sean-OConnell-33156"
 },
 {
   "name": "Kazuki Tokudome",
   "url": "/fighter/Kazuki-Tokudome-26192"
 },
 {
   "name": "Andy Wang",
   "url": "/fighter/Andy-Wang-1331"
 },
 {
   "name": "Scott Bessac",
   "url": "/fighter/Scott-Bessac-121"
 },
 {
   "name": "Jason Godsey",
   "url": "/fighter/Jason-Godsey-215"
 },
 {
   "name": "Tim Elliott",
   "url": "/fighter/Tim-Elliott-49213"
 },
 {
   "name": "Motonobu Tezuka",
   "url": "/fighter/Motonobu-Tezuka-19390"
 },
 {
   "name": "Amaury Bitetti",
   "url": "/fighter/Amaury-Bitetti-135"
 },
 {
   "name": "Paulo Thiago",
   "url": "/fighter/Paulo-Thiago-13336"
 },
 {
   "name": "Ronny Markes",
   "url": "/fighter/Ronny-Marki-Sales-da-Silva-21175"
 },
 {
   "name": "Matt Veach",
   "url": "/fighter/Matt-Veach-23350"
 },
 {
   "name": "Kurt Holobaugh",
   "url": "/fighter/Kurt-Holobaugh-68751"
 },
 {
   "name": "David Branch",
   "url": "/fighter/Dave-Branch-32431"
 },
 {
   "name": "Kyle Watson",
   "url": "/fighter/Kyle-Watson-7127"
 },
 {
   "name": "Frank Caracci",
   "url": "/fighter/Frank-Caracci-211"
 },
 {
   "name": "Josh Rafferty",
   "url": "/fighter/Josh-Rafferty-2682"
 },
 {
   "name": "Russell Doane",
   "url": "/fighter/Russell-Doane-30054"
 },
 {
   "name": "Brian Foster",
   "url": "/fighter/Brian-Foster-17723"
 },
 {
   "name": "Nick Pace",
   "url": "/fighter/Nick-Pace-40956"
 },
 {
   "name": "Charlie Valencia",
   "url": "/fighter/Charlie-Valencia-503"
 },
 {
   "name": "Jonathan Brookins",
   "url": "/fighter/Jonathan-Brookins-17316"
 },
 {
   "name": "Fredson Paixao",
   "url": "/fighter/Fredson-Paixao-10432"
 },
 {
   "name": "Cheick Kongo",
   "url": "/fighter/Cheick-Kongo-2193"
 },
 {
   "name": "Antoni Hardonk",
   "url": "/fighter/Antoni-Hardonk-1518"
 },
 {
   "name": "Rin Nakai",
   "url": "/fighter/Rin-Nakai-18887"
 },
 {
   "name": "Justin Scoggins",
   "url": "/fighter/Justin-Scoggins-71120"
 },
 {
   "name": "Issei Tamura",
   "url": "/fighter/Issei-Tamura-34371"
 },
 {
   "name": "Raphael Assuncao",
   "url": "/fighter/Raphael-Assuncao-9574"
 },
 {
   "name": "Amilcar Alves",
   "url": "/fighter/Amilcar-Alves-23841"
 },
 {
   "name": "Brian Melancon",
   "url": "/fighter/Brian-Melancon-43621"
 },
 {
   "name": "Elizabeth Phillips",
   "url": "/fighter/Elizabeth-Phillips-83021"
 },
 {
   "name": "Brock Larson",
   "url": "/fighter/Brock-Larson-6373"
 },
 {
   "name": "Rodrigo Goiana de Lima",
   "url": "/fighter/Rodrigo-Goiana-de-Lima-81136"
 },
 {
   "name": "Jon Manley",
   "url": "/fighter/Jon-Manley-26632"
 },
 {
   "name": "Christian Wellisch",
   "url": "/fighter/Christian-Wellisch-3328"
 },
 {
   "name": "Neil Wain",
   "url": "/fighter/Neil-Wain-20121"
 },
 {
   "name": "Nordine Taleb",
   "url": "/fighter/Nordine-Taleb-26261"
 },
 {
   "name": "Warlley Alves",
   "url": "/fighter/Warlley-Alves-70750"
 },
 {
   "name": "Quinn Mulhern",
   "url": "/fighter/Quinn-Mulhern-22873"
 },
 {
   "name": "John Halverson",
   "url": "/fighter/John-Halverson-7407"
 },
 {
   "name": "Hector Ramirez",
   "url": "/fighter/Hector-Ramirez-10581"
 },
 {
   "name": "Denis Kang",
   "url": "/fighter/Denis-Kang-935"
 },
 {
   "name": "Keigo Kunihara",
   "url": "/fighter/Keigo-Kunihara-8198"
 },
 {
   "name": "Seo Hee Ham",
   "url": "/fighter/Seo-Hee-Ham-21246"
 },
 {
   "name": "Emily Kagan",
   "url": "/fighter/Emily-Kagan-68959"
 },
 {
   "name": "Waylon Lowe",
   "url": "/fighter/Waylon-Lowe-18744"
 },
 {
   "name": "Eugenio Tadeu",
   "url": "/fighter/Eugenio-Tadeu-187"
 },
 {
   "name": "Nissen Osterneck",
   "url": "/fighter/Nissen-Osterneck-17591"
 },
 {
   "name": "Tom DeBlass",
   "url": "/fighter/Tom-DeBlass-29744"
 },
 {
   "name": "Kenny Robertson",
   "url": "/fighter/Kenny-Robertson-31978"
 },
 {
   "name": "Karolina Kowalkiewicz",
   "url": "/fighter/Karolina-Kowalkiewicz-101401"
 },
 {
   "name": "Ryan Jensen",
   "url": "/fighter/Ryan-Jensen-662"
 },
 {
   "name": "Floyd Sword",
   "url": "/fighter/Floyd-Sword-340"
 },
 {
   "name": "Flavio Luiz Moura",
   "url": "/fighter/Flavio-Luiz-Moura-225"
 },
 {
   "name": "Frankie Saenz",
   "url": "/fighter/Frankie-Saenz-55410"
 },
 {
   "name": "Shane del Rosario",
   "url": "/fighter/Shane-del-Rosario-17393"
 },
 {
   "name": "Jake O'Brien",
   "url": "/fighter/Jake-OBrien-14892"
 },
 {
   "name": "Brad Morris",
   "url": "/fighter/Brad-Morris-9024"
 },
 {
   "name": "Lauren Murphy",
   "url": "/fighter/Lauren-Murphy-66725"
 },
 {
   "name": "Amar Suloev",
   "url": "/fighter/Amar-Suloev-1995"
 },
 {
   "name": "Tim McKenzie",
   "url": "/fighter/Tim-McKenzie-3089"
 },
 {
   "name": "Homer Moore",
   "url": "/fighter/Homer-Moore-853"
 },
 {
   "name": "Elias Silverio",
   "url": "/fighter/Elias-Silverio-88613"
 },
 {
   "name": "Isaac Vallie-Flagg",
   "url": "/fighter/Isaac-VallieFlagg-8180"
 },
 {
   "name": "Willie Gates",
   "url": "/fighter/Willie-Gates-40436"
 },
 {
   "name": "Yasuhiro Urushitani",
   "url": "/fighter/Yasuhiro-Urushitani-1349"
 },
 {
   "name": "Brad Tavares",
   "url": "/fighter/Brad-Tavares-33095"
 },
 {
   "name": "Brandon Wolff",
   "url": "/fighter/Brandon-Wolff-4673"
 },
 {
   "name": "Luke Zachrich",
   "url": "/fighter/Luke-Zachrich-15720"
 },
 {
   "name": "Chris Dempsey",
   "url": "/fighter/Chris-Dempsey-79277"
 },
 {
   "name": "Jake O'Brien",
   "url": "/fighter/Jake-O'Brien-14892"
 },
 {
   "name": "Ramsey Nijem",
   "url": "/fighter/Ramsey-Nijem-36963"
 },
 {
   "name": "Buddy Roberts",
   "url": "/fighter/Buddy-Roberts-23811"
 },
 {
   "name": "C.J. Keith",
   "url": "/fighter/CJ-Keith-70452"
 },
 {
   "name": "Collin Hart",
   "url": "/fighter/Collin-Hart-47991"
 },
 {
   "name": "Tulio Palhares",
   "url": "/fighter/Tulio-Palhares-205"
 },
 {
   "name": "Jermaine Andre",
   "url": "/fighter/Jermaine-Andre-247"
 },
 {
   "name": "Geza Kalman",
   "url": "/fighter/Geza-Kalman-115"
 },
 {
   "name": "Adrian Serrano",
   "url": "/fighter/Adrian-Serrano-254"
 },
 {
   "name": "Dave Strasser",
   "url": "/fighter/Dave-Strasser-615"
 },
 {
   "name": "Mike Ciesnolevicz",
   "url": "/fighter/Mike-Ciesnolevicz-14047"
 },
 {
   "name": "Evan Tanner",
   "url": "/fighter/Evan-Tanner-212"
 },
 {
   "name": "Mike Van Arsdale",
   "url": "/fighter/Mike-Van-Arsdale-198"
 },
 {
   "name": "Carlos Barreto",
   "url": "/fighter/Carlos-Barreto-180"
 },
 {
   "name": "Brad Kohler",
   "url": "/fighter/Brad-Kohler-181"
 },
 {
   "name": "Kenichi Yamamoto",
   "url": "/fighter/Kenichi-Yamamoto-236"
 },
 {
   "name": "Murilo Bustamante",
   "url": "/fighter/Murilo-Bustamante-253"
 },
 {
   "name": "CJ Fernandes",
   "url": "/fighter/CJ-Fernandes-261"
 },
 {
   "name": "Ivan Salaverry",
   "url": "/fighter/Ivan-Salaverry-1351"
 },
 {
   "name": "Joby Sanchez",
   "url": "/fighter/Joby-Sanchez-50239"
 },
 {
   "name": "Anton Kuivanen",
   "url": "/fighter/Anton-Kuivanen-14865"
 },
 {
   "name": "Kevin Jackson",
   "url": "/fighter/Kevin-Jackson-172"
 },
 {
   "name": "Igor Zinoviev",
   "url": "/fighter/Igor-Zinoviev-191"
 },
 {
   "name": "Steve Nelmark",
   "url": "/fighter/Steve-Nelmark-147"
 },
 {
   "name": "Allan Goes",
   "url": "/fighter/Allan-Goes-196"
 },
 {
   "name": "Hugo Duarte",
   "url": "/fighter/Hugo-Duarte-200"
 },
 {
   "name": "Scott Ferrozzo",
   "url": "/fighter/Scott-Ferrozzo-128"
 },
 {
   "name": "Cal Worsham",
   "url": "/fighter/Cal-Worsham-113"
 },
 {
   "name": "John Matua",
   "url": "/fighter/John-Matua-111"
 },
 {
   "name": "Steve Jennum",
   "url": "/fighter/Steve-Jennum-44"
 },
 {
   "name": "Sam Adkins",
   "url": "/fighter/Sam-Adkins-122"
 },
 {
   "name": "Lodune Sincaid",
   "url": "/fighter/Lodune-Sincaid-4208"
 },
 {
   "name": "Andrei Semenov",
   "url": "/fighter/Andrei-Semenov-1870"
 },
 {
   "name": "Curtis Stout",
   "url": "/fighter/Curtis-Stout-279"
 },
 {
   "name": "Sean Salmon",
   "url": "/fighter/Sean-Salmon-14515"
 },
 {
   "name": "Keith Rockel",
   "url": "/fighter/Keith-Rockel-2093"
 },
 {
   "name": "Paul Jones",
   "url": "/fighter/Paul-Jones-224"
 },
 {
   "name": "Mark Hall",
   "url": "/fighter/Mark-Hall-118"
 },
 {
   "name": "Joe Moreira",
   "url": "/fighter/Joe-Moreira-126"
 },
 {
   "name": "Sean O'Connell",
   "url": "/fighter/Sean-O'Connell-33156"
 },
 {
   "name": "Gerry Harris",
   "url": "/fighter/Gerry-Harris-83"
 },
 {
   "name": "Ronny Markes",
   "url": "/fighter/Ronny-Markes-21175"
 },
 {
   "name": "Sheldon Westcott",
   "url": "/fighter/Sheldon-Westcott-23648"
 },
 {
   "name": "Carlos Eduardo Rocha",
   "url": "/fighter/Carlos-Eduardo-Rocha-35142"
 },
 {
   "name": "Konstantin Erokhin",
   "url": "/fighter/Konstantin-Erokhin-98151"
 },
 {
   "name": "David Levicki",
   "url": "/fighter/David-Levicki-28"
 },
 {
   "name": "Wilson Gouveia",
   "url": "/fighter/Wilson-Gouveia-3070"
 },
 {
   "name": "Solomon Hutcherson",
   "url": "/fighter/Solomon-Hutcherson-5342"
 },
 {
   "name": "Jerry Bohlander",
   "url": "/fighter/Jerry-Bohlander-127"
 },
 {
   "name": "Tyrone Roberts",
   "url": "/fighter/Tyrone-Roberts-260"
 },
 {
   "name": "Mike McClain",
   "url": "/fighter/Asbel-Cancio-57"
 },
 {
   "name": "Sean Daugherty",
   "url": "/fighter/Sean-Daugherty-25"
 },
 {
   "name": "Houston Dorr",
   "url": "/fighter/Houston-Dorr-178"
 },
 {
   "name": "Marcus Bossett",
   "url": "/fighter/Marcus-Bossett-54"
 },
 {
   "name": "Joe Charles",
   "url": "/fighter/Joe-Charles-46"
 },
 {
   "name": "Zane Frazier",
   "url": "/fighter/Zane-Frazier-18"
 },
 {
   "name": "Aaron Rosa",
   "url": "/fighter/Aaron-Rosa-15129"
 },
 {
   "name": "Matt Hamill",
   "url": "/fighter/Matt-Hamill-16695"
 },
 {
   "name": "Stanislav Nedkov",
   "url": "/fighter/Stanislav-Nedkov-27115"
 },
 {
   "name": "Dustin Jacoby",
   "url": "/fighter/Dustin-Jacoby-73825"
 },
 {
   "name": "Carlos Diego Ferreira",
   "url": "/fighter/Carlos-Diego-Ferreira-26358"
 },
 {
   "name": "Jake Rosholt",
   "url": "/fighter/Jake-Rosholt-23322"
 },
 {
   "name": "John Salter",
   "url": "/fighter/John-Salter-44683"
 },
 {
   "name": "Nolan Ticman",
   "url": "/fighter/Nolan-Ticman-72084"
 },
 {
   "name": "",
   "url": "/fighter/news/Cung-Le-14883"
 },
 {
   "name": "Bubba McDaniel",
   "url": "/fighter/Bubba-McDaniel-14600"
 },
 {
   "name": "Chase Gormley",
   "url": "/fighter/Chase-Gormley-22247"
 },
 {
   "name": "Edgar Garcia",
   "url": "/fighter/Edgar-Garcia-23108"
 },
 {
   "name": "Lisa Ellis",
   "url": "/fighter/Lisa-Ward-10071"
 },
 {
   "name": "Bristol Marunde",
   "url": "/fighter/Bristol-Marunde-12961"
 },
 {
   "name": "Rob MacDonald",
   "url": "/fighter/Rob-MacDonald-4638"
 },
 {
   "name": "Daiju Takase",
   "url": "/fighter/Daiju-Takase-226"
 },
 {
   "name": "Kris Rotharmel",
   "url": "/fighter/Kris-Rotharmel-949"
 },
 {
   "name": "Satoshi Honma",
   "url": "/fighter/Satoshi-Honma-251"
 },
 {
   "name": "Jack McLaughlin",
   "url": "/fighter/Jack-McLaughlin-885"
 },
 {
   "name": "Tony Petarra",
   "url": "/fighter/Tony-Petarra-221"
 },
 {
   "name": "John Lewis",
   "url": "/fighter/John-Lewis-230"
 },
 {
   "name": "Joel Sutton",
   "url": "/fighter/Joel-Sutton-107"
 },
 {
   "name": "Josh Stuart",
   "url": "/fighter/Josh-Stuart-185"
 },
 {
   "name": "Mike Russow",
   "url": "/fighter/Mike-Russow-20552"
 },
 {
   "name": "Royce Alger",
   "url": "/fighter/Royce-Alger-163"
 },
 {
   "name": "Wallid Ismail",
   "url": "/fighter/Wallid-Ismail-154"
 },
 {
   "name": "Vinc Pichel",
   "url": "/fighter/Vinc-Pichel-57848"
 },
 {
   "name": "Ryan Hall",
   "url": "/fighter/Ryan-Hall-15962"
 },
 {
   "name": "Ashlee Evans-Smith",
   "url": "/fighter/Ashlee-EvansSmith-75021"
 },
 {
   "name": "Johnny Rees",
   "url": "/fighter/Johnny-Rees-14891"
 },
 {
   "name": "Mike Stumpf",
   "url": "/fighter/Mike-Stumpf-20967"
 },
 {
   "name": "Keith Berish",
   "url": "/fighter/Keith-Berish-46314"
 },
 {
   "name": "Jake Collier",
   "url": "/fighter/Jake-Collier-83599"
 },
 {
   "name": "Joe Veres",
   "url": "/fighter/Joe-Veres-7329"
 },
 {
   "name": "Igor Araujo",
   "url": "/fighter/Igor-Araujo-12803"
 },
 {
   "name": "Michinori Tanaka",
   "url": "/fighter/Michinori-Tanaka-71942"
 },
 {
   "name": "Aaron Riley",
   "url": "/fighter/Aaron-Riley-1567"
 },
 {
   "name": "Joao Roque",
   "url": "/fighter/Joao-Roque-256"
 },
 {
   "name": "Joey Gilbert",
   "url": "/fighter/Joey-Gilbert-1306"
 },
 {
   "name": "Shane Primm",
   "url": "/fighter/Shane-Primm-18304"
 },
 {
   "name": "Romie Aram",
   "url": "/fighter/Romie-Aram-85"
 },
 {
   "name": "Joseph Sandoval",
   "url": "/fighter/Joseph-Sandoval-63897"
 },
 {
   "name": "Joey Gomez",
   "url": "/fighter/Joey-Gomez-64975"
 },
 {
   "name": "Yaotzin Meza",
   "url": "/fighter/Yaotzin-Meza-15937"
 },
 {
   "name": "Jordan Radev",
   "url": "/fighter/Jordan-Radev-5925"
 },
 {
   "name": "Teemu Packalen",
   "url": "/fighter/Teemu-Packalen-92415"
 },
 {
   "name": "Ron Faircloth",
   "url": "/fighter/Ron-Faircloth-2290"
 },
 {
   "name": "Brendan Loughnane",
   "url": "/fighter/Brendan-Loughnane-44417"
 },
 {
   "name": "Jessica Rakoczy",
   "url": "/fighter/Jessica-Rakoczy-53506"
 },
 {
   "name": "Kalib Starnes",
   "url": "/fighter/Kalib-Starnes-8095"
 },
 {
   "name": "Garett Whiteley",
   "url": "/fighter/Garett-Whiteley-39261"
 },
 {
   "name": "T.J. Waldburger",
   "url": "/fighter/TJ-Waldburger-15125"
 },
 {
   "name": "Josh Shockley",
   "url": "/fighter/Josh-Shockley-24948"
 },
 {
   "name": "Henry Martinez",
   "url": "/fighter/Henry-Martinez-13237"
 },
 {
   "name": "Aaron Brink",
   "url": "/fighter/Aaron-Brink-271"
 },
 {
   "name": "Niklas Backstrom",
   "url": "/fighter/Niklas-Backstrom-54620"
 },
 {
   "name": "Per Eklund",
   "url": "/fighter/per-eklund-3707"
 },
 {
   "name": "Cale Yarbrough",
   "url": "/fighter/Cale-Yarbrough-34073"
 },
 {
   "name": "Michael Patt",
   "url": "/fighter/Michael-Patt-3506"
 },
 {
   "name": "Sean Alvarez",
   "url": "/fighter/Sean-Alvarez-1964"
 },
 {
   "name": "Assuerio Silva",
   "url": "/fighter/Assuerio-Silva-1587"
 },
 {
   "name": "Mark Hughes",
   "url": "/fighter/Mark-Hughes-268"
 },
 {
   "name": "Gideon Ray",
   "url": "/fighter/Gideon-Ray-4555"
 },
 {
   "name": "Jan Blachowicz",
   "url": "/fighter/Jan-Blachowicz-25821"
 },
 {
   "name": "Mats Nilsson",
   "url": "/fighter/Mats-Nilsson-32446"
 },
 {
   "name": "Rick Davis",
   "url": "/fighter/Rick-Davis-4832"
 },
 {
   "name": "Luke Cummo",
   "url": "/fighter/Luke-Cummo-6428"
 },
 {
   "name": "Justin James",
   "url": "/fighter/Justin-James-1926"
 },
 {
   "name": "Nick Agallar",
   "url": "/fighter/Nick-Agallar-2295"
 },
 {
   "name": "Jeremy Larsen",
   "url": "/fighter/Jeremy-Larsen-19863"
 },
 {
   "name": "War Machine",
   "url": "/fighter/War-Machine-10999"
 },
 {
   "name": "James Giboo",
   "url": "/fighter/James-Giboo-14266"
 },
 {
   "name": "Kelly Dullanty",
   "url": "/fighter/Kelly-Dullanty-354"
 },
 {
   "name": "Rob Yundt",
   "url": "/fighter/Rob-Yundt-16858"
 },
 {
   "name": "Cristiano Marcello",
   "url": "/fighter/Cristiano-Marcello-3530"
 },
 {
   "name": "Magomed Mustafaev",
   "url": "/fighter/Magomed-Mustafaev-80231"
 },
 {
   "name": "Jason Gilliam",
   "url": "/fighter/Jason-Gilliam-10754"
 },
 {
   "name": "Paul Georgieff",
   "url": "/fighter/Paul-Georgieff-11408"
 },
 {
   "name": "Joe Vedepo",
   "url": "/fighter/Joe-Vedepo-15833"
 },
 {
   "name": "Crafton Wallace",
   "url": "/fighter/Crafton-Wallace-8269"
 },
 {
   "name": "Tom Murphy",
   "url": "/fighter/Tom-Murphy-12284"
 },
 {
   "name": "Yusuke Kasuya",
   "url": "/fighter/Yusuke-Kasuya-63414"
 },
 {
   "name": "Tiki Ghosn",
   "url": "/fighter/Tiki-Ghosn-88"
 },
 {
   "name": "Brad Gumm",
   "url": "/fighter/Brad-Gumm-240"
 },
 {
   "name": "Andre Roberts",
   "url": "/fighter/Andre-Roberts-194"
 },
 {
   "name": "Dan Evensen",
   "url": "/fighter/Dan-Evensen-10584"
 },
 {
   "name": "Greg Soto",
   "url": "/fighter/Greg-Soto-19080"
 },
 {
   "name": "Ross Pointon",
   "url": "/fighter/Ross-Pointon-6541"
 },
 {
   "name": "Paulo Santos",
   "url": "/fighter/Paulo-Santos-204"
 },
 {
   "name": "Rodrigo Ruas",
   "url": "/fighter/Rodrigo-Ruas-1562"
 },
 {
   "name": "Jason Tan",
   "url": "/fighter/Jason-Tan-12369"
 },
 {
   "name": "Tom Breese",
   "url": "/fighter/Tom-Breese-45986"
 },
 {
   "name": "David Hood",
   "url": "/fighter/David-Hood-1720"
 },
 {
   "name": "Bobby Southworth",
   "url": "/fighter/Bobby-Southworth-551"
 },
 {
   "name": "Royce Gracie",
   "url": "/fighter/www.sherdog.com/organizations/Pancrase-19"
 },
 {
   "name": "Luiz Jorge Dutra Jr.",
   "url": "/fighter/Luiz-Jorge-Dutra-Jr-8121"
 },
 {
   "name": "Mickey Gall",
   "url": "/fighter/Mickey-Gall-160145"
 },
 {
   "name": "Jules Bruchez",
   "url": "/fighter/Jules-Bruchez-41539"
 },
 {
   "name": "Jason Reinhardt",
   "url": "/fighter/Jason-Reinhardt-2347"
 },
 {
   "name": "Jesse Sanders",
   "url": "/fighter/Jesse-Sanders-16098"
 },
 {
   "name": "Justin Martin",
   "url": "/fighter/Justin-Martin-150"
 },
 {
   "name": "Kit Cope",
   "url": "/fighter/Kit-Cope-67"
 },
 {
   "name": "Byron Bloodworth",
   "url": "/fighter/Byron-Bloodworth-17355"
 },
 {
   "name": "Albert Cheng",
   "url": "/fighter/Albert-Cheng-63422"
 },
 {
   "name": "Miguel Torres",
   "url": "/fighter/miguel-torres-3006"
 },
 {
   "name": "Jianping Yang",
   "url": "/fighter/Jianping-Yang-26365"
 },
 {
   "name": "Mostapha Al-Turk",
   "url": "/fighter/Mostapha-AlTurk-8224"
 },
 {
   "name": "Nate Schroeder",
   "url": "/fighter/Nate-Schroeder-255"
 },
 {
   "name": "Matt Dwyer",
   "url": "/fighter/Matt-Dwyer-53933"
 },
 {
   "name": "Colin Robinson",
   "url": "/fighter/Colin-Robinson-13660"
 },
 {
   "name": "Hans Stringer",
   "url": "/fighter/Hans-Stringer-14825"
 },
 {
   "name": "Jocelyn Jones-Lybarger",
   "url": "/fighter/Jocelyn-Jones-Lybarger-68957"
 },
 {
   "name": "Timothy Johnson",
   "url": "/fighter/Timothy-Johnson-72706"
 },
 {
   "name": "Yuri Villefort",
   "url": "/fighter/Yuri-Villefort-47069"
 },
 {
   "name": "Jason Thacker",
   "url": "/fighter/Jason-Thacker-12690"
 },
 {
   "name": "Tom Blackledge",
   "url": "/fighter/Tom-Blackledge-3953"
 },
 {
   "name": "Rolles Gracie",
   "url": "/fighter/Rolles-Gracie-24217"
 },
 {
   "name": "Kailin Curran",
   "url": "/fighter/Kailin-Curran-62703"
 },
 {
   "name": "Sultan Aliev",
   "url": "/fighter/Sultan-Aliev-89761"
 },
 {
   "name": "John Kolosci",
   "url": "/fighter/John-Kolosci-9062"
 },
 {
   "name": "Thiago de Oliveira Perpetuo",
   "url": "/fighter/Thiago-de-Oliveira-Perpetuo-53207"
 },
 {
   "name": "Izabela Badurek",
   "url": "/fighter/Izabela-Badurek-122349"
 },
 {
   "name": "Lauren Murphy",
   "url": "/fighter/Lauren-Taylor-66725"
 },
 {
   "name": "Bartosz Fabinski",
   "url": "/fighter/Bartosz-Fabinski-87101"
 },
 {
   "name": "Kelly Faszholz",
   "url": "/fighter/Kelly-Faszholz-117453"
 },
 {
   "name": "Viktor Pesta",
   "url": "/fighter/Viktor-Pesta-74176"
 },
 {
   "name": "Anthony Christodoulou",
   "url": "/fighter/Anthony-Christodoulou-53712"
 },
 {
   "name": "Nikita Krylov",
   "url": "/fighter/Nikita-Krylov-110937"
 },
 {
   "name": "Darrell Gholar",
   "url": "/fighter/Darrell-Gholar-213"
 },
 {
   "name": "Tedd Williams",
   "url": "/fighter/Tedd-Williams-248"
 },
 {
   "name": "Larissa Pacheco",
   "url": "/fighter/Larissa-Pacheco-144115"
 },
 {
   "name": "Larissa Pacheco",
   "url": "/fighter/Larissa-Moreira-Pacheco-144115"
 },
 {
   "name": "Daniel Kelly",
   "url": "/fighter/Daniel-Kelly-49516"
 },
 {
   "name": "Scott Askham",
   "url": "/fighter/Scott-Askham-40518"
 },
 {
   "name": "Rex Holman",
   "url": "/fighter/Rex-Holman-13745"
 },
 {
   "name": "Andrew Holbrook",
   "url": "/fighter/Andrew-Holbrook-78384"
 },
 {
   "name": "Joe Merritt",
   "url": "/fighter/Joe-Merritt-138127"
 },
 {
   "name": "Wagner Prado",
   "url": "/fighter/Wagner-Prado-53134"
 },
 {
   "name": "Nate Loughran",
   "url": "/fighter/Nate-Loughran-15626"
 },
 {
   "name": "Adriano Santos",
   "url": "/fighter/Adriano-Santos-206"
 },
 {
   "name": "Joey Roberts",
   "url": "/fighter/Joey-Roberts-1629"
 },
 {
   "name": "Noe Hernandez",
   "url": "/fighter/Noe-Hernandez-193"
 },
 {
   "name": "Matt Andersen",
   "url": "/fighter/Matt-Andersen-132"
 },
 {
   "name": "Dieuseul Berto",
   "url": "/fighter/Dieuseul-Berto-2007"
 },
 {
   "name": "Ansar Chalangov",
   "url": "/fighter/Ansar-Chalangov-7148"
 },
 {
   "name": "Ivan Serati",
   "url": "/fighter/Ivan-Serati-16300"
 },
 {
   "name": "Cory Walmsley",
   "url": "/fighter/Cory-Walmsley-5170"
 },
 {
   "name": "Andre Gusmao",
   "url": "/fighter/Andre-Gusmao-15806"
 },
 {
   "name": "Icho Larenas",
   "url": "/fighter/Icho-Larenas-10502"
 },
 {
   "name": "Joe Pardo",
   "url": "/fighter/Joe-Pardo-199"
 },
 {
   "name": "Felix Mitchell",
   "url": "/fighter/Felix-Mitchell-45"
 },
 {
   "name": "Tony Halme",
   "url": "/fighter/Tony-Halme-167"
 },
 {
   "name": "Steve Judson",
   "url": "/fighter/Steve-Judson-233"
 },
 {
   "name": "John Dowdy",
   "url": "/fighter/John-Dowdy-58"
 },
 {
   "name": "Chris Spang",
   "url": "/fighter/Chris-Spang-40205"
 },
 {
   "name": "Mike King",
   "url": "/fighter/Mike-King-50928"
 },
 {
   "name": "Todd Butler",
   "url": "/fighter/Todd-Butler-173"
 },
 {
   "name": "Tai Bowden",
   "url": "/fighter/Tai-Bowden-6950"
 },
 {
   "name": "Harry Moskowitz",
   "url": "/fighter/Harry-Moskowitz-176"
 },
 {
   "name": "Harold Howard",
   "url": "/fighter/Harold-Howard-41"
 },
 {
   "name": "Jim Mullen",
   "url": "/fighter/Jim-Mullen-155"
 },
 {
   "name": "Sam Fulton",
   "url": "/fighter/Sam-Fulton-141"
 },
 {
   "name": "Melton Bowen",
   "url": "/fighter/Melton-Bowen-51"
 },
 {
   "name": "Bob Gilstrap",
   "url": "/fighter/Bob-Gilstrap-197"
 },
 {
   "name": "Keith Mielke",
   "url": "/fighter/Keith-Mielke-123"
 },
 {
   "name": "Justin Eilers",
   "url": "/fighter/Justin-Eilers-5936"
 },
 {
   "name": "Jeff Newton",
   "url": "/fighter/Jeff-Newton-3263"
 },
 {
   "name": "Koji Kitao",
   "url": "/fighter/Koji-Kitao-134"
 },
 {
   "name": "Yuri Vaulin",
   "url": "/fighter/Yuri-Vaulin-171"
 },
 {
   "name": "Paul Herrera",
   "url": "/fighter/Paul-Herrera-130"
 },
 {
   "name": "Misha Cirkunov",
   "url": "/fighter/Misha-Cirkunov-59197"
 },
 {
   "name": "Nick Sanzo",
   "url": "/fighter/Nick-Sanzo-148"
 },
 {
   "name": "Rainy Martinez",
   "url": "/fighter/Rainy-Martinez-152"
 },
 {
   "name": "Dwayne Cason",
   "url": "/fighter/Dwayne-Cason-177"
 },
 {
   "name": "Krzysztof Jotko",
   "url": "/fighter/Krzysztof-Jotko-53380"
 },
 {
   "name": "Zhikui Yao",
   "url": "/fighter/Zhikui-Yao-122383"
 },
 {
   "name": "Eliot Marshall",
   "url": "/fighter/Eliot-Marshall-15104"
 },
 {
   "name": "Jon Madsen",
   "url": "/fighter/Jon-Madsen-48820"
 },
 {
   "name": "Lowell Anderson",
   "url": "/fighter/Lowell-Anderson-231"
 },
 {
   "name": "Reginaldo Vieira",
   "url": "/fighter/Reginaldo-Vieira-52454"
 },
 {
   "name": "Jason Saggo",
   "url": "/fighter/Jason-Saggo-58213"
 },
 {
   "name": "Marco Polo Reyes",
   "url": "/fighter/Marco-Polo-Reyes-114125"
 },
 {
   "name": "Edson Barboza",
   "url": "/fighter/Edson-Mendes-Barboza-Jr-46259"
 },
 {
   "name": "Steve Byrnes",
   "url": "/fighter/Steve-Byrnes-12079"
 },
 {
   "name": "Bec Rawlings",
   "url": "/fighter/Bec-Hyatt-84964"
 },
 {
   "name": "Joaquim Silva",
   "url": "/fighter/Joaquim-Silva-146291"
 },
 {
   "name": "Darren Till",
   "url": "/fighter/Darren-Till-73436"
 },
 {
   "name": "Steven Lynch",
   "url": "/fighter/Steven-Lynch-15882"
 },
 {
   "name": "Ren&#233; van de Zande",
   "url": "/fighter/Ren233-van-de-Zande-3971"
 },
 {
   "name": "Lars Nor&#233;n",
   "url": "/fighter/Lars-Nor233n-26797"
 },
 {
   "name": "Arnold Allen",
   "url": "/fighter/Arnold-Allen-97499"
 },
 {
   "name": "Damian Stasiak",
   "url": "/fighter/Damian-Stasiak-86920"
 },
 {
   "name": "Danny Abbadi",
   "url": "/fighter/Danny-Abbadi-16696"
 },
 {
   "name": "Alan Omer",
   "url": "/fighter/Alan-Omer-23437"
 },
 {
   "name": "Jocelyn Jones-Lybarger",
   "url": "/fighter/Jocelyn-JonesLybarger-68957"
 },
 {
   "name": "Mitch Gagnon",
   "url": "/fighter/Michel-Gagnon-37404"
 },
 {
   "name": "Daniel Barrera",
   "url": "/fighter/Daniel-Barrera-23762"
 },
 {
   "name": "Jack Nilson",
   "url": "/fighter/Jack-Nilson-161"
 },
 {
   "name": "T.J. Grant",
   "url": "/fighter/T.J.-Grant-15906"
 },
 {
   "name": "Erick Montano",
   "url": "/fighter/Erick-Montano-40308"
 },
 {
   "name": "Nate Diaz",
   "url": "/fighter/Nathan-Diaz-11451"
 },
 {
   "name": "Aleksandra Albu",
   "url": "/fighter/Aleksandra-Albu-144949"
 },
 {
   "name": "Sean Gannon",
   "url": "/fighter/Sean-Gannon-11962"
 },
 {
   "name": "Freddy Serrano",
   "url": "/fighter/Freddy-Serrano-112413"
 },
 {
   "name": "Troy Mandaloniz",
   "url": "/fighter/Troy-Mandaloniz-12096"
 },
 {
   "name": "Ironman 238",
   "url": "/fighter/Ironman-238-58642"
 },
 {
   "name": "Dave Galera",
   "url": "/fighter/Dave-Galera-93863"
 },
 {
   "name": "Mike Jackson",
   "url": "/fighter/Mike-Jackson-63272"
 },
 {
   "name": "Matheus Nicolau Pereira",
   "url": "/fighter/Matheus-Nicolau-Pereira-69341"
 },
 {
   "name": "Alex Nicholson",
   "url": "/fighter/Alex-Nicholson-121077"
 },
 {
   "name": "Eric Martin",
   "url": "/fighter/Eric-Martin-151"
 },
 {
   "name": "Leonardo Morales",
   "url": "/fighter/Leonardo-Morales-111777"
 },
 {
   "name": "Anying Wang",
   "url": "/fighter/Anying-Wang-135315"
 },
 {
   "name": "Randy Brown",
   "url": "/fighter/Randy-Brown-115641"
 },
 {
   "name": "Dileno Lopes",
   "url": "/fighter/Dileno-Lopes-29635"
 },
 {
   "name": "Alvaro Herrera",
   "url": "/fighter/Alvaro-Herrera-44627"
 },
 {
   "name": "Chris Indich",
   "url": "/fighter/Chris-Indich-42419"
 },
 {
   "name": "Alex Torres",
   "url": "/fighter/Alexander-Torres-172645"
 },
 {
   "name": "Lance Benoist",
   "url": "/fighter/Lance-Benoist-59764"
 },
 {
   "name": "Daniel Omielanczuk",
   "url": "/fighter/Daniel-Omielanczuk-54303"
 },
 {
   "name": "Luis Henrique Barbosa de Oliveira",
   "url": "/fighter/Luis-Henrique-Barbosa-de-Oliveira-6608"
 },
 {
   "name": "Matt Arroyo",
   "url": "/fighter/Matt-Arroyo-19456"
 },
 {
   "name": "Christophe Leninger",
   "url": "/fighter/Christophe-Leninger-40"
 },
 {
   "name": "Kyle Bochniak",
   "url": "/fighter/Kyle-Bochniak-86246"
 },
 {
   "name": "Richie Hightower",
   "url": "/fighter/Richie-Hightower-10346"
 },
 {
   "name": "Chris Sanford",
   "url": "/fighter/Chris-Sanford-2656"
 },
 {
   "name": "Derek Brunson",
   "url": "/fighter/Derek-Brunson-68494"
 },
 {
   "name": "Diego Rivas",
   "url": "/fighter/Diego-Rivas-81835"
 },
 {
   "name": "Francis Ngannou",
   "url": "/fighter/Francis-Ngannou-152341"
 },
 {
   "name": "Brendan O'Reilly",
   "url": "/fighter/Brendan-OReilly-52633"
 },
 {
   "name": "Justine Kish",
   "url": "/fighter/Justine-Kish-67098"
 },
 {
   "name": "Jason Knight",
   "url": "/fighter/Jason-Knight-44957"
 },
 {
   "name": "Efrain Escudero",
   "url": "/fighter/Efrain-Escudero-16555"
 },
 {
   "name": "Ericka Almeida",
   "url": "/fighter/Ericka-Almeida-98419"
 },
 {
   "name": "Enrique Barzola",
   "url": "/fighter/Enrique-Barzola-129351"
 },
 {
   "name": "Bruno Rodrigues",
   "url": "/fighter/Bruno-Rodrigues-57480"
 },
 {
   "name": "Vernon Ramos",
   "url": "/fighter/Vernon-Ramos-100921"
 },
 {
   "name": "Horacio Gutierrez",
   "url": "/fighter/Horacio-Gutierrez-172941"
 },
 {
   "name": "Chris de la Rocha",
   "url": "/fighter/Chris-de-la-Rocha-146377"
 },
 {
   "name": "Kyoji Horiguchi",
   "url": "/fighter/Kyoji-Horiguchi-64413"
 },
 {
   "name": "Rocky Lee",
   "url": "/fighter/Rocky-Lee-84854"
 },
 {
   "name": "Royston Wee",
   "url": "/fighter/Royston-Wee-88793"
 },
 {
   "name": "Tateki Matsuda",
   "url": "/fighter/Tateki-Matsuda-45607"
 },
 {
   "name": "Humberto Brown Morrison",
   "url": "/fighter/Humberto-Brown-Morrison-45721"
 },
 {
   "name": "Matt Hobar",
   "url": "/fighter/Matt-Hobar-59713"
 },
 {
   "name": "Ian Entwistle",
   "url": "/fighter/Ian-Entwistle-50588"
 },
 {
   "name": "Philip De Fries",
   "url": "/fighter/Philip-De-Fries-46202"
 },
 {
   "name": "Ryo Chonan",
   "url": "/fighter/Ryo-Chonan-1831"
 },
 {
   "name": "Ken Stone",
   "url": "/fighter/Ken-Stone-24913"
 },
 {
   "name": "Dale Hartt",
   "url": "/fighter/Dale-Hartt-11970"
 },
 {
   "name": "Clay Harvison",
   "url": "/fighter/Clay-Harvison-21131"
 },
 {
   "name": "Marcus Jones",
   "url": "/fighter/Marcus-Jones-25912"
 },
 {
   "name": "Scott Adams",
   "url": "/fighter/Scott-Adams-241"
 },
 {
   "name": "Chris Condo",
   "url": "/fighter/Chris-Condo-287"
 },
 {
   "name": "Paul Creighton",
   "url": "/fighter/Paul-Creighton-4441"
 },
 {
   "name": "Sione Latu",
   "url": "/fighter/Sione-Latu-9977"
 },
 {
   "name": "Townsend Saunders",
   "url": "/fighter/Townsend-Saunders-189"
 },
 {
   "name": "Courtney Turner",
   "url": "/fighter/Courtney-Turner-285"
 },
 {
   "name": "Steven Graham",
   "url": "/fighter/Steven-Graham-164"
 },
 {
   "name": "Alex Hunter",
   "url": "/fighter/Alex-Hunter-170"
 },
 {
   "name": "Saeed Hosseini",
   "url": "/fighter/Saeed-Hosseini-160"
 },
 {
   "name": "Donnie Chappell",
   "url": "/fighter/Donnie-Chappell-169"
 },
 {
   "name": "Dmitri Stepanov",
   "url": "/fighter/Dmitri-Stepanov-165"
 },
 {
   "name": "Wes Albritton",
   "url": "/fighter/Wes-Albritton-159"
 },
 {
   "name": "John Campetella",
   "url": "/fighter/John-Campetella-140"
 },
 {
   "name": "Reza Nasri",
   "url": "/fighter/Reza-Nasri-145"
 },
 {
   "name": "Scott Fiedler",
   "url": "/fighter/Scott-Fiedler-138"
 },
 {
   "name": "Jackie Lee",
   "url": "/fighter/Jackie-Lee-149"
 },
 {
   "name": "Dave Berry",
   "url": "/fighter/Dave-Berry-143"
 },
 {
   "name": "Julian Sanchez",
   "url": "/fighter/Julian-Sanchez-144"
 },
 {
   "name": "Mark Schultz",
   "url": "/fighter/Mark-Schultz-133"
 },
 {
   "name": "Rafael Carino",
   "url": "/fighter/Rafael-Carino-131"
 },
 {
   "name": "Larry Cureton",
   "url": "/fighter/Larry-Cureton-62"
 },
 {
   "name": "Thomas Ramirez",
   "url": "/fighter/Thomas-Ramirez-125"
 },
 {
   "name": "Onassis Parungao",
   "url": "/fighter/Onassis-Parungao-116"
 },
 {
   "name": "Francesco Maturi",
   "url": "/fighter/Francesco-Maturi-117"
 },
 {
   "name": "Roland Payne",
   "url": "/fighter/Roland-Payne-42"
 },
 {
   "name": "Alberto Cerra Leon",
   "url": "/fighter/Alberto-Cerra-Leon-37"
 },
 {
   "name": "Ernie Verdicia",
   "url": "/fighter/Ernie-Verdicia-63"
 },
 {
   "name": "He-Man Ali Gipson",
   "url": "/fighter/HeMan-Ali-Gipson-109"
 },
 {
   "name": "Andy Anderson",
   "url": "/fighter/Andy-Anderson-60"
 },
 {
   "name": "Eldo Dias Xavier",
   "url": "/fighter/Eldo-Dias-Xavier-55"
 },
 {
   "name": "Robert Lucarelli",
   "url": "/fighter/Robert-Lucarelli-32"
 },
 {
   "name": "Thaddeus Luster",
   "url": "/fighter/Thaddeus-Luster-30"
 },
 {
   "name": "Frank Hamaker",
   "url": "/fighter/Frank-Hamaker-29"
 },
 {
   "name": "Ryan Parker",
   "url": "/fighter/Ryan-Parker-119"
 },
 {
   "name": "Marcus Davis",
   "url": "/fighter/Marcus-Davis-8592"
 },
 {
   "name": "John Alessio",
   "url": "/fighter/John-Alessio-259"
 }
]

var sherdog = require('sherdog');
var Table = require('cli-table');
var request = require('request')


























/* XXXXXXXX   TABLE STUFF   XXXXXXXXXXXX
// instantiate 
var table = new Table({
    head: ['Fighter Name', 'Age', 'Height', 'Win Streak']
  , colWidths: [20, 10, 15, 15]
});

// For the request body
         body.FMLiveFeed.Fights[0].Fighters[0].FullName,
         body.FMLiveFeed.Fights[0].Fighters[0].DOB,
         body.FMLiveFeed.Fights[0].Fighters[0].Height

table.push(
    ['First', 'Second', 'Third', 'Fourth']
  , ['First', 'Second', 'Third', 'Fourth']
);

setTimeout(function () {
   console.log(table.toString());
}, 4000);*/








 
// table is an Array, so you can `push`, `unshift`, `splice` and friends 

 

var url_fm = 'http://liveapi.fightmetric.com/V1/802/Fnt.json';
var urlA = "http://www.sherdog.com/fighter/Conor-McGregor-29688";
var urlB;
var todayDate = 'Jan/09/2013'
var fightDate;
var fighterA = 'Marcus Davis';
var fighterB;
var fighters = [];
var fighter_a;

function findSherdogURL (fighterName) {
   for (i=0;i<fighter_url.length;i++) {
	   for (var name in fighter_url[i]) {
	      if (fighter_url[i][name] == fighterName) {
	         return "http://www.sherdog.com"+fighter_url[i].url;
	         //console.log('fighter_url.'+name, '=', fighter_url[i][name]);
	      }
	   }
	}
}


function fighterA_stats() {
	for (i=0;i<fighterA.fights.length;i++) {
		if (dateToDay(fighterA.fights[i].date) > dateToDay(todayDate)) {
			console.log("Minus one win");
		}
		else if (fighterA.fights[i].result === 'win') {
			fighterA_wins++;
		}
		else {
			fighterA_losses++;
		}
	}
	console.log(fighterA.name+" has \n"+fighterA_wins+" wins and\n"+fighterA_losses+" losses.");
}


// Pull all fighter information from Fightmetric API
// and put them into 'fighters'
for (i=801;i<803;i++) {
   request({
       url: 'http://liveapi.fightmetric.com/V1/802/Fnt.json', //'http://liveapi.fightmetric.com/V1/'+i+'/Fnt.json',
       json: true
   }, function (error, response, body) {

       if (!error && response.statusCode === 200) {
           // Print the json response
           
           // Grab Fighters
           for (i=0;i<body.FMLiveFeed.Fights.length;i++) {
            for (j=0;j<body.FMLiveFeed.Fights[j].Fighters.length;j++) {
                 fighters.push({
                     fightDate: body.FMLiveFeed.Date,
                     name: body.FMLiveFeed.Fights[i].Fighters[j].FullName,
                     height: body.FMLiveFeed.Fights[i].Fighters[j].Height,
                     dob: body.FMLiveFeed.Fights[i].Fighters[j].DOB,
                     outcome: body.FMLiveFeed.Fights[i].Fighters[j].Outcome,
                     stance: body.FMLiveFeed.Fights[i].Fighters[j].Stance,
                     // Grab URLs
                     fighterURL: findSherdogURL(body.FMLiveFeed.Fights[i].Fighters[j].FullName)
                  })
              }
            }
       }
   })
}
/*var fighter = {
   name: "",
   winTotal: 0,
   loseTotal: 0,
   KO_win: 0,
   TKO_win: 0,
   sub_win: 0,
   dec_win: 0,
   KO_lose: 0,
   TKO_lose: 0,
   sub_lose: 0,
   dec_lose: 0,
   points: 0,
   japanese: false,
   lastFightDate: "",
   age: ""
}*/

var fighterA_data;
var fighterA_KO = 0;
var fighterA_wins = 0;
var fighterA_losses = 0;
var wait = "#";
var waitTime = 1;
var timeOut = 6;


// Grab URL of fighter
/*for (i=0;i<fighter_url.length;i++) {
	for (var name in fighter_url[i]) {
		if (fighter_url[i][name] == fighterA) {
         table.push([fighter_url[i].name]);
			console.log("http://www.sherdog.com"+fighter_url[i].url);
			//console.log('fighter_url.'+name, '=', fighter_url[i][name]);
		}
	}
}*/
setTimeout( function() {sherdog.getFighter(fighters[0].fighterURL, gotData_a);

function gotData_a(data) {
  fighter_a = data;
}
											 }, 4000);
setTimeout( function () {
	console.log(fighter_a);
}, 5000);
/*function gotData_b(data) {
  fighter_b = data;
  b_age = Number(fighter_b.age);
  b_nationality = fighter_b.nationality;
  b_win_ko = fighter_b.wins.knockouts;
  b_win_dec = fighter_b.wins.decisions;
  b_win_sub = fighter_b.wins.submissions;
  b_win_total = fighter_b.wins.total;
  b_lose_ko = fighter_b.losses.knockouts;
  b_lose_sub = fighter_b.losses.submissions;
  b_lose_dec = fighter_b.losses.decisions;
  b_lose_total = fighter_b.losses.total;
  b_lastfight_date = dateToDay(fighter_b.fights.date);
}*/

/*setTimeout(function () {
   console.log(fighters[0].fighterURL);
}, 6000);*/

// Grab fighter data
sherdog.getFighter(urlA, getData);
function getData(data) {
	fighterA_data = data;
}



/***
		Main App
 ***/

/*setTimeout(function () {
	aKOwins();
	fighterA_stats();


	
},
	timeOut*1000);
*/

/***
		Helper Functions
***/



function aKOwins() {
	for (i=0;i<fighterA.fights.length;i++) {
		if (fighterA.fights[i].result === 'win' && fighterA.fights[i].method.match(/\bKO\b/)) {
			fighterA_KO += 1;
		}
	}
	console.log(fighterA.name+" has "+fighterA_KO+" KO wins");
}



/***
		Outro
***/

/*var waiting = setInterval(function() {
	console.log(wait)
	wait += "#";
}, waitTime*1000)

setTimeout(function() {
	clearInterval(waiting)
}, timeOut*1000);*/

