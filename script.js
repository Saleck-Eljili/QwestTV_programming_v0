/*const apiKey = '';

const today = new Date();
const yearStart = today.getFullYear();
const monthStart = String(today.getMonth() + 1).padStart(2, '0');
const dayStart = String(today.getDate()).padStart(2, '0');

const formattedDateStart = `${yearStart}-${monthStart}-${dayStart}`;

const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Ajoute 7 jours en millisecondes

const yearEnd = nextWeek.getFullYear();
const monthEnd = String(nextWeek.getMonth() + 1).padStart(2, '0');
const dayEnd = String(nextWeek.getDate()).padStart(2, '0');

const formattedDateEnd = `${yearEnd}-${monthEnd}-${dayEnd}`;

console.log(formattedDateStart+" & "+formattedDateEnd)

const apiUrl = `https://qwest.amagi.tv/v1/api/playlist.json?feed_id=5&start_date=${formattedDateStart}&end_date=${formattedDateEnd}&ptype%5B%5D=normal`; // Remplacez cette URL par l'URL de votre API


// Fonction pour récupérer les données de l'API
async function fetchData() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données de l\'API');
        }

        const data = await response.json();
        // Utilisez les données récupérées comme vous le souhaitez
        console.log(data);

        // Stockez les données dans une variable si nécessaire
        const apiData = data;

        // Faites quelque chose d'autre avec les données ici...

    } catch (error) {
        console.error(error);
    }
}

// Appelez la fonction pour récupérer les données de l'API
fetchData();*/

const xmlData = `
<root>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>00:25</schedulestarttime>
    <scheduleendtime>02:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Biréli Lagrène and Sylvain Luc</programmetitle>
    <programmenumber>2584</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>02:04</schedulestarttime>
    <scheduleendtime>03:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Apostle of gypsy swing, Biréli Lagrène and guitarist Sylvain Luc take the stage for a nostalgic set in 2020. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>03:15</schedulestarttime>
    <scheduleendtime>03:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau: 3 Pieces after Bach</programmetitle>
    <programmenumber>2619</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>03:48</schedulestarttime>
    <scheduleendtime>05:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American jazz pianist mixes elegantly the Bach’s baroque composition with his own influences in this solo set.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>05:15</schedulestarttime>
    <scheduleendtime>07:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Paris Reunion Band - 1988</programmetitle>
    <programmenumber>896</programmenumber>
    <yearofrelease>1988</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>07:11</schedulestarttime>
    <scheduleendtime>07:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Created in 1985 by Nathan Davis, The Paris Reunion band is made up of great jazzmen, here live in 1988.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>07:59</schedulestarttime>
    <scheduleendtime>09:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau: 3 Pieces after Bach</programmetitle>
    <programmenumber>2619</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>09:46</schedulestarttime>
    <scheduleendtime>11:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American jazz pianist mixes elegantly the Bach’s baroque composition with his own influences in this solo set.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brooklyn Funk Essentials - Live</programmetitle>
    <programmenumber>2302</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>11:12</schedulestarttime>
    <scheduleendtime>13:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The New York band combines with precision and groove the jazz repertoire's freedom and the funk appeal.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Gasandji - Live at Moods</programmetitle>
    <programmenumber>1166</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>13:16</schedulestarttime>
    <scheduleendtime>15:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Gasandji, a native of the Republic of Congo, takes us into a unique world with her stories and music. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Snarky Puppy</programmetitle>
    <programmenumber>2599</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>15:38</schedulestarttime>
    <scheduleendtime>17:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Grammy Award winning group brings the best of jazz-fusion to the stage at Nancy Jazz Pulsations.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>17:21</schedulestarttime>
    <scheduleendtime>18:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>18:08</schedulestarttime>
    <scheduleendtime>18:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Oscar Peterson's Easter Suite</programmetitle>
    <programmenumber>2549</programmenumber>
    <yearofrelease>1984</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>18:45</schedulestarttime>
    <scheduleendtime>19:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1984, the pianist &amp; his steady trio mates performed one of his greatest works: the 9-movement Easter Suite.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Qwest TV — Music and Beyond</programmetitle>
    <programmenumber>9999</programmenumber>
    <yearofrelease/>
    <directorname/>
    <castname/>
    <scheduledate/>
    <schedulestarttime/>
    <scheduleendtime>19:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre>Music</genre>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Qwest TV — Music and Beyond</programmetitle>
    <programmenumber>9999</programmenumber>
    <yearofrelease/>
    <directorname/>
    <castname/>
    <scheduledate/>
    <schedulestarttime/>
    <scheduleendtime>19:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre>Music</genre>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Qwest TV — Music and Beyond</programmetitle>
    <programmenumber>9999</programmenumber>
    <yearofrelease/>
    <directorname/>
    <castname/>
    <scheduledate/>
    <schedulestarttime/>
    <scheduleendtime>19:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre>Music</genre>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Qwest TV — Music and Beyond</programmetitle>
    <programmenumber>9999</programmenumber>
    <yearofrelease/>
    <directorname/>
    <castname/>
    <scheduledate/>
    <schedulestarttime/>
    <scheduleendtime>19:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre>Music</genre>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>19:52</schedulestarttime>
    <scheduleendtime>20:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>20:53</schedulestarttime>
    <scheduleendtime>22:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>22:41</schedulestarttime>
    <scheduleendtime>23:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30062023</scheduledate>
    <schedulestarttime>23:59</schedulestarttime>
    <scheduleendtime>00:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>00:50</schedulestarttime>
    <scheduleendtime>01:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>01:58</schedulestarttime>
    <scheduleendtime>02:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>02:18</schedulestarttime>
    <scheduleendtime>03:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>03:42</schedulestarttime>
    <scheduleendtime>05:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Kyle Eastwood Quintet</programmetitle>
    <programmenumber>2578</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>05:23</schedulestarttime>
    <scheduleendtime>06:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With his quintet, they perform his 2019 album, Cinematic, alongside with Hugh Coltman and Camille Bertault.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lionel Hampton - RTBF Archives 1959</programmetitle>
    <programmenumber>250</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Lionel Hampton</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>06:27</schedulestarttime>
    <scheduleendtime>06:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The drummer and vibraphonist makes a tour stop in Liège, Belgium, with a supercharged orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>06:34</schedulestarttime>
    <scheduleendtime>06:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>06:42</schedulestarttime>
    <scheduleendtime>06:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1587</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>06:49</schedulestarttime>
    <scheduleendtime>06:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bilal starts his set with "Sirens II," a haunting theme that stands at the crossroads between rock and RnB.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>06:53</schedulestarttime>
    <scheduleendtime>06:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Aretha Franklin - Live in Paris</programmetitle>
    <programmenumber>204</programmenumber>
    <yearofrelease>1977</yearofrelease>
    <directorname/>
    <castname>Aretha Franklin</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>06:56</schedulestarttime>
    <scheduleendtime>06:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Aretha Franklin sets the Paris Palais des Sports on fire in 1977.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Biréli Lagrène and Sylvain Luc</programmetitle>
    <programmenumber>2584</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>08:00</schedulestarttime>
    <scheduleendtime>08:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Apostle of gypsy swing, Biréli Lagrène and guitarist Sylvain Luc take the stage for a nostalgic set in 2020. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Admiral T.</programmetitle>
    <programmenumber>2582</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>08:06</schedulestarttime>
    <scheduleendtime>09:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Guadeloupean dancehall-reggae artist takes the stage for a vibrant set at the Baie Mahalut stadium.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>09:10</schedulestarttime>
    <scheduleendtime>09:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>09:12</schedulestarttime>
    <scheduleendtime>09:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Antibalas - Live at Moods</programmetitle>
    <programmenumber>1200</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>09:19</schedulestarttime>
    <scheduleendtime>09:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Antibalas gives us afrobeat and mix in modern funk, the avant-garde, dub and electronic influences.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>09:30</schedulestarttime>
    <scheduleendtime>09:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>09:39</schedulestarttime>
    <scheduleendtime>09:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - Live in Nice, 1979</programmetitle>
    <programmenumber>1496</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>09:50</schedulestarttime>
    <scheduleendtime>09:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>BB King shows all the dimensions of his art: 300% blues flirting with jazz, soul and rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>09:55</schedulestarttime>
    <scheduleendtime>10:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Paris Reunion Band - 1988</programmetitle>
    <programmenumber>896</programmenumber>
    <yearofrelease>1988</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>10:00</schedulestarttime>
    <scheduleendtime>11:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Created in 1985 by Nathan Davis, The Paris Reunion band is made up of great jazzmen, here live in 1988.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>James Brown - Live in Paris, 1981</programmetitle>
    <programmenumber>1497</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname>James Brown</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>11:02</schedulestarttime>
    <scheduleendtime>11:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An intense performance, this concert reveals a Mister Dynamite driven by lower currents of disco. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Butler Trio - Live in France</programmetitle>
    <programmenumber>2575</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>11:43</schedulestarttime>
    <scheduleendtime>13:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Aussie trio brings the French audience back to 2000's with a full-blown roots-rock session.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Kyle Eastwood Quintet</programmetitle>
    <programmenumber>2578</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>13:12</schedulestarttime>
    <scheduleendtime>14:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With his quintet, they perform his 2019 album, Cinematic, alongside with Hugh Coltman and Camille Bertault.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brooklyn Funk Essentials - Live</programmetitle>
    <programmenumber>2302</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>14:16</schedulestarttime>
    <scheduleendtime>16:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The New York band combines with precision and groove the jazz repertoire's freedom and the funk appeal.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>16:22</schedulestarttime>
    <scheduleendtime>17:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>17:40</schedulestarttime>
    <scheduleendtime>18:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>18:29</schedulestarttime>
    <scheduleendtime>19:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>19:27</schedulestarttime>
    <scheduleendtime>20:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>20:31</schedulestarttime>
    <scheduleendtime>20:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Seun Kuti &amp; Egypt 80 - Moods</programmetitle>
    <programmenumber>1152</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>20:40</schedulestarttime>
    <scheduleendtime>20:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>They give us sharp, polyrhythmic drums, an array of percussion, and funk guitars that slow-cook the groove.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>20:51</schedulestarttime>
    <scheduleendtime>20:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>20:54</schedulestarttime>
    <scheduleendtime>20:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dionne Warwick - RTBF Archives 1964</programmetitle>
    <programmenumber>61</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Dionne Warwick</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>20:56</schedulestarttime>
    <scheduleendtime>21:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An exemplar of both pop and R&amp;B, Warwick had an incredibly soulful sound that endeared her to music lovers.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brooklyn Funk Essentials - Live</programmetitle>
    <programmenumber>2302</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>21:01</schedulestarttime>
    <scheduleendtime>23:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The New York band combines with precision and groove the jazz repertoire's freedom and the funk appeal.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>23:07</schedulestarttime>
    <scheduleendtime>23:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01072023</scheduledate>
    <schedulestarttime>23:37</schedulestarttime>
    <scheduleendtime>00:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>00:43</schedulestarttime>
    <scheduleendtime>02:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Gasandji - Live at Moods</programmetitle>
    <programmenumber>1166</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>02:07</schedulestarttime>
    <scheduleendtime>04:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Gasandji, a native of the Republic of Congo, takes us into a unique world with her stories and music. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau: 3 Pieces after Bach</programmetitle>
    <programmenumber>2619</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>04:28</schedulestarttime>
    <scheduleendtime>05:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American jazz pianist mixes elegantly the Bach’s baroque composition with his own influences in this solo set.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Cécile McLorin Salvant - Live</programmetitle>
    <programmenumber>2594</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>05:53</schedulestarttime>
    <scheduleendtime>06:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The songwriter &amp; vocalist enchants Nancy Jazz Pulsations festival with themes from her album Ghost Song.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>06:51</schedulestarttime>
    <scheduleendtime>06:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Leyla McCalla - Live</programmetitle>
    <programmenumber>996</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Leyla McCalla</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>06:54</schedulestarttime>
    <scheduleendtime>07:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Without artifice and with total sincerity, McCalla sings with a simplicity that touches our hearts and minds.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>07:08</schedulestarttime>
    <scheduleendtime>08:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>OUM - Live at Moods</programmetitle>
    <programmenumber>1575</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>08:09</schedulestarttime>
    <scheduleendtime>09:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Saharawi descendant revisits parts of her discography, accompanied by Yacir Rami and bassist Damian Nueva.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Snarky Puppy</programmetitle>
    <programmenumber>2599</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>09:59</schedulestarttime>
    <scheduleendtime>11:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Grammy Award winning group brings the best of jazz-fusion to the stage at Nancy Jazz Pulsations.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>11:42</schedulestarttime>
    <scheduleendtime>13:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>13:20</schedulestarttime>
    <scheduleendtime>14:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Cécile McLorin Salvant - Live</programmetitle>
    <programmenumber>2594</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>14:20</schedulestarttime>
    <scheduleendtime>15:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The songwriter &amp; vocalist enchants Nancy Jazz Pulsations festival with themes from her album Ghost Song.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>James Brown - Live in Paris, 1981</programmetitle>
    <programmenumber>1497</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname>James Brown</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>15:22</schedulestarttime>
    <scheduleendtime>16:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An intense performance, this concert reveals a Mister Dynamite driven by lower currents of disco. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>16:03</schedulestarttime>
    <scheduleendtime>17:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thelonious Monk Quartet - Part 2</programmetitle>
    <programmenumber>241</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Thelonious Monk</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>17:12</schedulestarttime>
    <scheduleendtime>17:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It is a joy to watch a Brussels concert recorded in 1963 with Thelonious Monk and his quartet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>17:42</schedulestarttime>
    <scheduleendtime>18:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>18:31</schedulestarttime>
    <scheduleendtime>20:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>20:18</schedulestarttime>
    <scheduleendtime>20:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>20:24</schedulestarttime>
    <scheduleendtime>20:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nils Landgren &amp; Bootsy Collins</programmetitle>
    <programmenumber>209</programmenumber>
    <yearofrelease>1998</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>20:32</schedulestarttime>
    <scheduleendtime>20:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Two back to back performances by the Nils Landgren Funk Unit and Bootsy Collins at the Jazzopen in Stuttgart.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Liz McComb - Olympia, Paris</programmetitle>
    <programmenumber>228</programmenumber>
    <yearofrelease>1998</yearofrelease>
    <directorname/>
    <castname>Liz McComb</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>20:43</schedulestarttime>
    <scheduleendtime>20:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Between gospel and soul, singer and pianist Liz McComb is joined by three fine-tuned musicians in Paris, 1998.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Seun Kuti &amp; Egypt 80 - Moods</programmetitle>
    <programmenumber>1152</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>20:55</schedulestarttime>
    <scheduleendtime>21:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>They give us sharp, polyrhythmic drums, an array of percussion, and funk guitars that slow-cook the groove.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Oscar Peterson's Easter Suite</programmetitle>
    <programmenumber>2549</programmenumber>
    <yearofrelease>1984</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>21:04</schedulestarttime>
    <scheduleendtime>21:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1984, the pianist &amp; his steady trio mates performed one of his greatest works: the 9-movement Easter Suite.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>21:42</schedulestarttime>
    <scheduleendtime>22:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>02072023</scheduledate>
    <schedulestarttime>22:25</schedulestarttime>
    <scheduleendtime>00:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>00:14</schedulestarttime>
    <scheduleendtime>00:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Butler Trio - Live in France</programmetitle>
    <programmenumber>2575</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>00:51</schedulestarttime>
    <scheduleendtime>02:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Aussie trio brings the French audience back to 2000's with a full-blown roots-rock session.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>02:22</schedulestarttime>
    <scheduleendtime>03:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>03:28</schedulestarttime>
    <scheduleendtime>04:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>04:54</schedulestarttime>
    <scheduleendtime>05:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>05:55</schedulestarttime>
    <scheduleendtime>06:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>06:01</schedulestarttime>
    <scheduleendtime>06:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>06:05</schedulestarttime>
    <scheduleendtime>06:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez</programmetitle>
    <programmenumber>1766</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>06:11</schedulestarttime>
    <scheduleendtime>06:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez with his bewitching voice is accompanied by the formidable pianist Vincenzo Scalera. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>06:15</schedulestarttime>
    <scheduleendtime>06:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>06:30</schedulestarttime>
    <scheduleendtime>06:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>06:43</schedulestarttime>
    <scheduleendtime>06:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>06:50</schedulestarttime>
    <scheduleendtime>06:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>06:57</schedulestarttime>
    <scheduleendtime>07:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>07:15</schedulestarttime>
    <scheduleendtime>07:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>07:33</schedulestarttime>
    <scheduleendtime>08:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>08:34</schedulestarttime>
    <scheduleendtime>08:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>08:40</schedulestarttime>
    <scheduleendtime>08:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>08:47</schedulestarttime>
    <scheduleendtime>08:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>08:55</schedulestarttime>
    <scheduleendtime>09:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:02</schedulestarttime>
    <scheduleendtime>09:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Gallagher - Marquee Club, London</programmetitle>
    <programmenumber>713</programmenumber>
    <yearofrelease>1973</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:08</schedulestarttime>
    <scheduleendtime>09:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This concert was recorded at the London Marquee Club in 1973, Gallagher was on a world tour at the age of 25.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:11</schedulestarttime>
    <scheduleendtime>09:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:20</schedulestarttime>
    <scheduleendtime>09:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:29</schedulestarttime>
    <scheduleendtime>09:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:34</schedulestarttime>
    <scheduleendtime>09:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:41</schedulestarttime>
    <scheduleendtime>09:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:46</schedulestarttime>
    <scheduleendtime>09:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Terri Lyne Carrington - Lotos Jazz</programmetitle>
    <programmenumber>586</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Terri Lyne Carrington</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:50</schedulestarttime>
    <scheduleendtime>09:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Aaron Parks, James Genus, Tia Fuller, Nir Felder, Gretchen Parlato and Terri Lyne Carrington live in 2013.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Butler Trio - Live in France</programmetitle>
    <programmenumber>2575</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>09:58</schedulestarttime>
    <scheduleendtime>11:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Aussie trio brings the French audience back to 2000's with a full-blown roots-rock session.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>11:25</schedulestarttime>
    <scheduleendtime>12:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>12:24</schedulestarttime>
    <scheduleendtime>13:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>13:24</schedulestarttime>
    <scheduleendtime>14:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>14:16</schedulestarttime>
    <scheduleendtime>15:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Biréli Lagrène and Sylvain Luc</programmetitle>
    <programmenumber>2584</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>15:30</schedulestarttime>
    <scheduleendtime>16:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Apostle of gypsy swing, Biréli Lagrène and guitarist Sylvain Luc take the stage for a nostalgic set in 2020. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>16:41</schedulestarttime>
    <scheduleendtime>16:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>16:45</schedulestarttime>
    <scheduleendtime>16:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>16:51</schedulestarttime>
    <scheduleendtime>16:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>16:57</schedulestarttime>
    <scheduleendtime>17:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>17:02</schedulestarttime>
    <scheduleendtime>18:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>James Brown - Live in Paris, 1981</programmetitle>
    <programmenumber>1497</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname>James Brown</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>18:18</schedulestarttime>
    <scheduleendtime>19:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An intense performance, this concert reveals a Mister Dynamite driven by lower currents of disco. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Admiral T.</programmetitle>
    <programmenumber>2582</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>19:00</schedulestarttime>
    <scheduleendtime>20:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Guadeloupean dancehall-reggae artist takes the stage for a vibrant set at the Baie Mahalut stadium.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:03</schedulestarttime>
    <scheduleendtime>20:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:07</schedulestarttime>
    <scheduleendtime>20:13</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:13</schedulestarttime>
    <scheduleendtime>20:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vincent Peirani "Living Being"</programmetitle>
    <programmenumber>652</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vincent Peirani</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:22</schedulestarttime>
    <scheduleendtime>20:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>From Led Zeppelin to Purcell covers, this quintet is a real chamber rock music orchestra. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:29</schedulestarttime>
    <scheduleendtime>20:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:36</schedulestarttime>
    <scheduleendtime>20:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:41</schedulestarttime>
    <scheduleendtime>20:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:47</schedulestarttime>
    <scheduleendtime>20:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - Live in Antibes</programmetitle>
    <programmenumber>1453</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>20:56</schedulestarttime>
    <scheduleendtime>21:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Accompanied by Tommy Flanagan and Roy Eldridge, Ella performs at the legendary Antibes Jazz Festival in 1964.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>21:01</schedulestarttime>
    <scheduleendtime>22:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>22:25</schedulestarttime>
    <scheduleendtime>23:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Kyle Eastwood Quintet</programmetitle>
    <programmenumber>2578</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>03072023</scheduledate>
    <schedulestarttime>23:15</schedulestarttime>
    <scheduleendtime>00:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With his quintet, they perform his 2019 album, Cinematic, alongside with Hugh Coltman and Camille Bertault.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>00:20</schedulestarttime>
    <scheduleendtime>02:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Céu - Live at Moods</programmetitle>
    <programmenumber>1161</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Céu</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>02:07</schedulestarttime>
    <scheduleendtime>03:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Psychedelic pop, soul and choro, the Brazilian singer doesn't fit in any box.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>03:50</schedulestarttime>
    <scheduleendtime>05:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>05:35</schedulestarttime>
    <scheduleendtime>06:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>06:44</schedulestarttime>
    <scheduleendtime>06:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>06:53</schedulestarttime>
    <scheduleendtime>07:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>07:06</schedulestarttime>
    <scheduleendtime>08:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>08:17</schedulestarttime>
    <scheduleendtime>09:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>09:21</schedulestarttime>
    <scheduleendtime>09:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>09:24</schedulestarttime>
    <scheduleendtime>09:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Girma Bèyènè &amp; Akalé Wubé</programmetitle>
    <programmenumber>1160</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>09:34</schedulestarttime>
    <scheduleendtime>09:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ethiopian legend Girma Bèyènè's Amharic lyrics are enhanced by French collective Akalé Wubé at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>09:42</schedulestarttime>
    <scheduleendtime>09:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>09:46</schedulestarttime>
    <scheduleendtime>09:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>09:49</schedulestarttime>
    <scheduleendtime>09:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Wyclef &amp; Friends - Live at La Place</programmetitle>
    <programmenumber>1236</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Wyclef Jean</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>09:52</schedulestarttime>
    <scheduleendtime>09:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Founding member of The Fugees, Wyclef Jean embarked on a solo career going from pop, electronic, latin, soul… </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Admiral T.</programmetitle>
    <programmenumber>2582</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>09:58</schedulestarttime>
    <scheduleendtime>11:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Guadeloupean dancehall-reggae artist takes the stage for a vibrant set at the Baie Mahalut stadium.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>11:02</schedulestarttime>
    <scheduleendtime>11:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>11:31</schedulestarttime>
    <scheduleendtime>12:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>12:06</schedulestarttime>
    <scheduleendtime>13:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>13:12</schedulestarttime>
    <scheduleendtime>14:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>14:11</schedulestarttime>
    <scheduleendtime>15:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>15:21</schedulestarttime>
    <scheduleendtime>15:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>15:22</schedulestarttime>
    <scheduleendtime>15:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>15:33</schedulestarttime>
    <scheduleendtime>15:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>15:36</schedulestarttime>
    <scheduleendtime>15:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>15:46</schedulestarttime>
    <scheduleendtime>15:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>15:56</schedulestarttime>
    <scheduleendtime>16:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>16:06</schedulestarttime>
    <scheduleendtime>16:13</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Seun Kuti &amp; Egypt 80 - Moods</programmetitle>
    <programmenumber>1152</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>16:13</schedulestarttime>
    <scheduleendtime>16:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>They give us sharp, polyrhythmic drums, an array of percussion, and funk guitars that slow-cook the groove.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>16:23</schedulestarttime>
    <scheduleendtime>16:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp "In the Mood" - Live</programmetitle>
    <programmenumber>488</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>16:33</schedulestarttime>
    <scheduleendtime>16:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>On the island of Porquerolles in Provence, jazz soaks its feet every summer, here with Captain Archie Shepp.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>16:49</schedulestarttime>
    <scheduleendtime>16:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Orchestre Poly-Rythmo de Cotonou</programmetitle>
    <programmenumber>1187</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>16:53</schedulestarttime>
    <scheduleendtime>17:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed after the independence of Benin, this band with more than 500 records to their credit is like no other.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>17:00</schedulestarttime>
    <scheduleendtime>17:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>17:02</schedulestarttime>
    <scheduleendtime>17:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>17:35</schedulestarttime>
    <scheduleendtime>19:13</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>OUM - Live at Moods</programmetitle>
    <programmenumber>1575</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>19:13</schedulestarttime>
    <scheduleendtime>21:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Saharawi descendant revisits parts of her discography, accompanied by Yacir Rami and bassist Damian Nueva.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Biréli Lagrène and Sylvain Luc</programmetitle>
    <programmenumber>2584</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>21:03</schedulestarttime>
    <scheduleendtime>22:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Apostle of gypsy swing, Biréli Lagrène and guitarist Sylvain Luc take the stage for a nostalgic set in 2020. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thelonious Monk Quartet - Part 2</programmetitle>
    <programmenumber>241</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Thelonious Monk</castname>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>22:12</schedulestarttime>
    <scheduleendtime>22:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It is a joy to watch a Brussels concert recorded in 1963 with Thelonious Monk and his quartet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Cécile McLorin Salvant - Live</programmetitle>
    <programmenumber>2594</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>22:42</schedulestarttime>
    <scheduleendtime>23:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The songwriter &amp; vocalist enchants Nancy Jazz Pulsations festival with themes from her album Ghost Song.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>04072023</scheduledate>
    <schedulestarttime>23:43</schedulestarttime>
    <scheduleendtime>00:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>00:51</schedulestarttime>
    <scheduleendtime>01:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>01:48</schedulestarttime>
    <scheduleendtime>03:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>03:26</schedulestarttime>
    <scheduleendtime>04:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>OUM - Live at Moods</programmetitle>
    <programmenumber>1575</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>04:32</schedulestarttime>
    <scheduleendtime>06:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Saharawi descendant revisits parts of her discography, accompanied by Yacir Rami and bassist Damian Nueva.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>06:19</schedulestarttime>
    <scheduleendtime>06:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>06:35</schedulestarttime>
    <scheduleendtime>06:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Weber, Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2473</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>06:49</schedulestarttime>
    <scheduleendtime>07:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Isabelle Faust and Kristian Bezuidenhout under the baton of John Eliot Gardiner and London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>07:00</schedulestarttime>
    <scheduleendtime>08:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>08:50</schedulestarttime>
    <scheduleendtime>10:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>James Brown - Live in Paris, 1981</programmetitle>
    <programmenumber>1497</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname>James Brown</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>10:33</schedulestarttime>
    <scheduleendtime>11:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An intense performance, this concert reveals a Mister Dynamite driven by lower currents of disco. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>11:15</schedulestarttime>
    <scheduleendtime>12:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>12:01</schedulestarttime>
    <scheduleendtime>12:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>12:20</schedulestarttime>
    <scheduleendtime>13:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>13:28</schedulestarttime>
    <scheduleendtime>13:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>13:58</schedulestarttime>
    <scheduleendtime>15:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>15:23</schedulestarttime>
    <scheduleendtime>15:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>15:28</schedulestarttime>
    <scheduleendtime>15:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>15:34</schedulestarttime>
    <scheduleendtime>15:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Galliano &amp; Polish Orchestra</programmetitle>
    <programmenumber>1635</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Richard Galliano</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>15:36</schedulestarttime>
    <scheduleendtime>15:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The repertoire: Aconcagua, concerto for bandoneon by Piazzolla; Madreperla, concerto for accordion by Galliano</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>15:43</schedulestarttime>
    <scheduleendtime>15:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>15:48</schedulestarttime>
    <scheduleendtime>15:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>15:53</schedulestarttime>
    <scheduleendtime>16:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>16:02</schedulestarttime>
    <scheduleendtime>16:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>16:08</schedulestarttime>
    <scheduleendtime>16:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>16:23</schedulestarttime>
    <scheduleendtime>16:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>16:30</schedulestarttime>
    <scheduleendtime>16:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>16:38</schedulestarttime>
    <scheduleendtime>16:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>16:43</schedulestarttime>
    <scheduleendtime>16:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>16:50</schedulestarttime>
    <scheduleendtime>16:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>16:59</schedulestarttime>
    <scheduleendtime>17:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>17:39</schedulestarttime>
    <scheduleendtime>18:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>18:52</schedulestarttime>
    <scheduleendtime>20:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>20:30</schedulestarttime>
    <scheduleendtime>20:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dionne Warwick - RTBF Archives 1964</programmetitle>
    <programmenumber>61</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Dionne Warwick</castname>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>20:47</schedulestarttime>
    <scheduleendtime>20:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An exemplar of both pop and R&amp;B, Warwick had an incredibly soulful sound that endeared her to music lovers.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>20:50</schedulestarttime>
    <scheduleendtime>20:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Kyle Eastwood Quintet</programmetitle>
    <programmenumber>2578</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>20:59</schedulestarttime>
    <scheduleendtime>22:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With his quintet, they perform his 2019 album, Cinematic, alongside with Hugh Coltman and Camille Bertault.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Cannonball Adderley Brotherhood</programmetitle>
    <programmenumber>723</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>22:04</schedulestarttime>
    <scheduleendtime>22:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Don't worry: the Brotherhood are in no way paying a stuffy tribute to Julian "Cannonball" Adderley here. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>05072023</scheduledate>
    <schedulestarttime>22:59</schedulestarttime>
    <scheduleendtime>00:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Biréli Lagrène and Sylvain Luc</programmetitle>
    <programmenumber>2584</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>00:37</schedulestarttime>
    <scheduleendtime>01:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Apostle of gypsy swing, Biréli Lagrène and guitarist Sylvain Luc take the stage for a nostalgic set in 2020. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>01:46</schedulestarttime>
    <scheduleendtime>02:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vasily Petrenko: Dvořák - Beethoven</programmetitle>
    <programmenumber>1758</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vasily Petrenko</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>02:19</schedulestarttime>
    <scheduleendtime>04:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Israel Philharmonic Orchestra under the direction of Vasily Petrenko interpret Dvořák and Beethoven.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>04:55</schedulestarttime>
    <scheduleendtime>06:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Debussy, Bartók &amp; Bruckner</programmetitle>
    <programmenumber>2470</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>06:45</schedulestarttime>
    <scheduleendtime>06:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>London Symphony Orchestra and François-Xavier Roth perform late Romantic works with Antoine Tamestit.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>06:55</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>08:09</schedulestarttime>
    <scheduleendtime>10:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>10:00</schedulestarttime>
    <scheduleendtime>10:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>10:03</schedulestarttime>
    <scheduleendtime>10:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>10:09</schedulestarttime>
    <scheduleendtime>10:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>10:56</schedulestarttime>
    <scheduleendtime>11:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>11:43</schedulestarttime>
    <scheduleendtime>13:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>13:10</schedulestarttime>
    <scheduleendtime>14:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>14:20</schedulestarttime>
    <scheduleendtime>15:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>15:06</schedulestarttime>
    <scheduleendtime>15:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>15:43</schedulestarttime>
    <scheduleendtime>15:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>15:48</schedulestarttime>
    <scheduleendtime>15:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>15:54</schedulestarttime>
    <scheduleendtime>15:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>15:59</schedulestarttime>
    <scheduleendtime>16:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>16:08</schedulestarttime>
    <scheduleendtime>16:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>16:17</schedulestarttime>
    <scheduleendtime>16:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>16:23</schedulestarttime>
    <scheduleendtime>16:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>16:30</schedulestarttime>
    <scheduleendtime>16:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Inner Circle - RTBF Archives 1979</programmetitle>
    <programmenumber>709</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Jacob Miller</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>16:36</schedulestarttime>
    <scheduleendtime>16:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed in Kingston in the 70s, Inner Circle here demonstrates a remarkable tightness and energy.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>16:43</schedulestarttime>
    <scheduleendtime>16:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>16:49</schedulestarttime>
    <scheduleendtime>16:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>16:58</schedulestarttime>
    <scheduleendtime>17:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>17:42</schedulestarttime>
    <scheduleendtime>18:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>18:40</schedulestarttime>
    <scheduleendtime>19:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>19:41</schedulestarttime>
    <scheduleendtime>19:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>19:48</schedulestarttime>
    <scheduleendtime>19:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>19:54</schedulestarttime>
    <scheduleendtime>19:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>19:57</schedulestarttime>
    <scheduleendtime>20:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>20:07</schedulestarttime>
    <scheduleendtime>20:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>20:16</schedulestarttime>
    <scheduleendtime>20:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>20:25</schedulestarttime>
    <scheduleendtime>20:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>20:29</schedulestarttime>
    <scheduleendtime>20:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>20:37</schedulestarttime>
    <scheduleendtime>20:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>20:42</schedulestarttime>
    <scheduleendtime>20:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Butler Trio - Live in France</programmetitle>
    <programmenumber>2575</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>20:59</schedulestarttime>
    <scheduleendtime>22:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Aussie trio brings the French audience back to 2000's with a full-blown roots-rock session.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>22:30</schedulestarttime>
    <scheduleendtime>23:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>06072023</scheduledate>
    <schedulestarttime>23:46</schedulestarttime>
    <scheduleendtime>00:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>00:37</schedulestarttime>
    <scheduleendtime>01:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>01:44</schedulestarttime>
    <scheduleendtime>02:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>02:03</schedulestarttime>
    <scheduleendtime>03:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>03:26</schedulestarttime>
    <scheduleendtime>05:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>05:05</schedulestarttime>
    <scheduleendtime>06:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>06:06</schedulestarttime>
    <scheduleendtime>06:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zandile Mzazi - South Africa</programmetitle>
    <programmenumber>2420</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Zandile Mzazi</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>06:10</schedulestarttime>
    <scheduleendtime>06:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A concert tribute to Sibongile Khumalo, South Africa’s former First Lady of Song and great influence to Mzazi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>06:17</schedulestarttime>
    <scheduleendtime>06:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>06:23</schedulestarttime>
    <scheduleendtime>06:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>06:27</schedulestarttime>
    <scheduleendtime>07:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Biréli Lagrène and Sylvain Luc</programmetitle>
    <programmenumber>2584</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>07:11</schedulestarttime>
    <scheduleendtime>08:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Apostle of gypsy swing, Biréli Lagrène and guitarist Sylvain Luc take the stage for a nostalgic set in 2020. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Admiral T.</programmetitle>
    <programmenumber>2582</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>08:08</schedulestarttime>
    <scheduleendtime>09:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Guadeloupean dancehall-reggae artist takes the stage for a vibrant set at the Baie Mahalut stadium.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>09:12</schedulestarttime>
    <scheduleendtime>09:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>09:15</schedulestarttime>
    <scheduleendtime>09:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>09:24</schedulestarttime>
    <scheduleendtime>09:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>09:32</schedulestarttime>
    <scheduleendtime>09:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>09:39</schedulestarttime>
    <scheduleendtime>09:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>09:44</schedulestarttime>
    <scheduleendtime>09:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Louis Armstrong &amp; his All Stars</programmetitle>
    <programmenumber>248</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Louis Armstrong</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>09:51</schedulestarttime>
    <scheduleendtime>09:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This footage is a reminder of Satchmo's talent, unique tone and ability to bring out countless subtleties.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>09:57</schedulestarttime>
    <scheduleendtime>11:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>James Brown - Live in Paris, 1981</programmetitle>
    <programmenumber>1497</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname>James Brown</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>11:22</schedulestarttime>
    <scheduleendtime>12:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An intense performance, this concert reveals a Mister Dynamite driven by lower currents of disco. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Butler Trio - Live in France</programmetitle>
    <programmenumber>2575</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>12:04</schedulestarttime>
    <scheduleendtime>13:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Aussie trio brings the French audience back to 2000's with a full-blown roots-rock session.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Kyle Eastwood Quintet</programmetitle>
    <programmenumber>2578</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>13:34</schedulestarttime>
    <scheduleendtime>14:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With his quintet, they perform his 2019 album, Cinematic, alongside with Hugh Coltman and Camille Bertault.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>14:39</schedulestarttime>
    <scheduleendtime>15:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>15:26</schedulestarttime>
    <scheduleendtime>16:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Gallagher - Marquee Club, London</programmetitle>
    <programmenumber>713</programmenumber>
    <yearofrelease>1973</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>16:45</schedulestarttime>
    <scheduleendtime>16:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This concert was recorded at the London Marquee Club in 1973, Gallagher was on a world tour at the age of 25.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Girma Bèyènè &amp; Akalé Wubé</programmetitle>
    <programmenumber>1160</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>16:48</schedulestarttime>
    <scheduleendtime>16:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ethiopian legend Girma Bèyènè's Amharic lyrics are enhanced by French collective Akalé Wubé at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>16:58</schedulestarttime>
    <scheduleendtime>17:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>17:48</schedulestarttime>
    <scheduleendtime>18:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>18:17</schedulestarttime>
    <scheduleendtime>19:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Gallagher - Marquee Club, London</programmetitle>
    <programmenumber>713</programmenumber>
    <yearofrelease>1973</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>19:21</schedulestarttime>
    <scheduleendtime>19:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This concert was recorded at the London Marquee Club in 1973, Gallagher was on a world tour at the age of 25.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>19:24</schedulestarttime>
    <scheduleendtime>19:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>19:29</schedulestarttime>
    <scheduleendtime>19:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nils Landgren &amp; Bootsy Collins</programmetitle>
    <programmenumber>209</programmenumber>
    <yearofrelease>1998</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>19:38</schedulestarttime>
    <scheduleendtime>19:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Two back to back performances by the Nils Landgren Funk Unit and Bootsy Collins at the Jazzopen in Stuttgart.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>19:47</schedulestarttime>
    <scheduleendtime>19:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>19:52</schedulestarttime>
    <scheduleendtime>19:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>19:58</schedulestarttime>
    <scheduleendtime>20:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>20:01</schedulestarttime>
    <scheduleendtime>20:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>20:07</schedulestarttime>
    <scheduleendtime>20:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>20:18</schedulestarttime>
    <scheduleendtime>20:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>20:24</schedulestarttime>
    <scheduleendtime>20:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>20:30</schedulestarttime>
    <scheduleendtime>20:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Orchestre Poly-Rythmo de Cotonou</programmetitle>
    <programmenumber>1187</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>20:36</schedulestarttime>
    <scheduleendtime>20:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed after the independence of Benin, this band with more than 500 records to their credit is like no other.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Terri Lyne Carrington - Lotos Jazz</programmetitle>
    <programmenumber>586</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Terri Lyne Carrington</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>20:45</schedulestarttime>
    <scheduleendtime>20:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Aaron Parks, James Genus, Tia Fuller, Nir Felder, Gretchen Parlato and Terri Lyne Carrington live in 2013.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Liz McComb - Olympia, Paris</programmetitle>
    <programmenumber>228</programmenumber>
    <yearofrelease>1998</yearofrelease>
    <directorname/>
    <castname>Liz McComb</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>20:59</schedulestarttime>
    <scheduleendtime>21:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Between gospel and soul, singer and pianist Liz McComb is joined by three fine-tuned musicians in Paris, 1998.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Admiral T.</programmetitle>
    <programmenumber>2582</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>21:06</schedulestarttime>
    <scheduleendtime>22:13</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Guadeloupean dancehall-reggae artist takes the stage for a vibrant set at the Baie Mahalut stadium.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>22:13</schedulestarttime>
    <scheduleendtime>22:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>22:42</schedulestarttime>
    <scheduleendtime>23:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>07072023</scheduledate>
    <schedulestarttime>23:49</schedulestarttime>
    <scheduleendtime>01:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>01:12</schedulestarttime>
    <scheduleendtime>02:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>02:38</schedulestarttime>
    <scheduleendtime>05:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>05:50</schedulestarttime>
    <scheduleendtime>06:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>G. Puccini: Tosca - Simon Rattle</programmetitle>
    <programmenumber>1752</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Sir Simon Rattle</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>06:49</schedulestarttime>
    <scheduleendtime>06:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Tosca, Puccini's most famous opera is not merely a work of art, but also a gripping suspense-packed story.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>06:52</schedulestarttime>
    <scheduleendtime>07:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>07:08</schedulestarttime>
    <scheduleendtime>08:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>OUM - Live at Moods</programmetitle>
    <programmenumber>1575</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>08:07</schedulestarttime>
    <scheduleendtime>09:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Saharawi descendant revisits parts of her discography, accompanied by Yacir Rami and bassist Damian Nueva.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Louis Armstrong &amp; his All Stars</programmetitle>
    <programmenumber>248</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Louis Armstrong</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>09:56</schedulestarttime>
    <scheduleendtime>10:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This footage is a reminder of Satchmo's talent, unique tone and ability to bring out countless subtleties.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Leyla McCalla - Live</programmetitle>
    <programmenumber>996</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Leyla McCalla</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>10:00</schedulestarttime>
    <scheduleendtime>10:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Without artifice and with total sincerity, McCalla sings with a simplicity that touches our hearts and minds.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Biréli Lagrène and Sylvain Luc</programmetitle>
    <programmenumber>2584</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>10:07</schedulestarttime>
    <scheduleendtime>11:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Apostle of gypsy swing, Biréli Lagrène and guitarist Sylvain Luc take the stage for a nostalgic set in 2020. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>11:14</schedulestarttime>
    <scheduleendtime>12:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Shearing Touch</programmetitle>
    <programmenumber>2547</programmenumber>
    <yearofrelease>1994</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>12:52</schedulestarttime>
    <scheduleendtime>13:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born blind in 1919, George Shearing is one of music's most interesting and unlikely tales.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Cécile McLorin Salvant - Live</programmetitle>
    <programmenumber>2594</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>13:55</schedulestarttime>
    <scheduleendtime>14:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The songwriter &amp; vocalist enchants Nancy Jazz Pulsations festival with themes from her album Ghost Song.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>James Brown - Live in Paris, 1981</programmetitle>
    <programmenumber>1497</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname>James Brown</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>14:54</schedulestarttime>
    <scheduleendtime>15:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An intense performance, this concert reveals a Mister Dynamite driven by lower currents of disco. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>15:36</schedulestarttime>
    <scheduleendtime>17:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thelonious Monk Quartet - Part 2</programmetitle>
    <programmenumber>241</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Thelonious Monk</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>17:26</schedulestarttime>
    <scheduleendtime>17:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It is a joy to watch a Brussels concert recorded in 1963 with Thelonious Monk and his quartet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>17:56</schedulestarttime>
    <scheduleendtime>18:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>18:42</schedulestarttime>
    <scheduleendtime>20:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>20:22</schedulestarttime>
    <scheduleendtime>20:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1587</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>20:28</schedulestarttime>
    <scheduleendtime>20:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bilal starts his set with "Sirens II," a haunting theme that stands at the crossroads between rock and RnB.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>20:36</schedulestarttime>
    <scheduleendtime>20:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>20:38</schedulestarttime>
    <scheduleendtime>20:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>20:43</schedulestarttime>
    <scheduleendtime>20:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Andrea Motis Quintet - Moods</programmetitle>
    <programmenumber>1195</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Andrea Motis</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>20:50</schedulestarttime>
    <scheduleendtime>21:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Brought on stage by Quincy Jones, trumpet player, singer and composer demonstrates her elegance and simplicity</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>James Brown - Live in Paris, 1981</programmetitle>
    <programmenumber>1497</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname>James Brown</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>21:02</schedulestarttime>
    <scheduleendtime>21:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An intense performance, this concert reveals a Mister Dynamite driven by lower currents of disco. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>21:44</schedulestarttime>
    <scheduleendtime>22:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>22:24</schedulestarttime>
    <scheduleendtime>23:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>08072023</scheduledate>
    <schedulestarttime>23:32</schedulestarttime>
    <scheduleendtime>00:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Butler Trio - Live in France</programmetitle>
    <programmenumber>2575</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>00:07</schedulestarttime>
    <scheduleendtime>01:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Aussie trio brings the French audience back to 2000's with a full-blown roots-rock session.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>01:37</schedulestarttime>
    <scheduleendtime>02:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>02:45</schedulestarttime>
    <scheduleendtime>04:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>04:09</schedulestarttime>
    <scheduleendtime>05:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Debussy, Bartók &amp; Bruckner</programmetitle>
    <programmenumber>2470</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>05:15</schedulestarttime>
    <scheduleendtime>05:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>London Symphony Orchestra and François-Xavier Roth perform late Romantic works with Antoine Tamestit.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez</programmetitle>
    <programmenumber>1766</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>05:26</schedulestarttime>
    <scheduleendtime>05:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez with his bewitching voice is accompanied by the formidable pianist Vincenzo Scalera. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>05:30</schedulestarttime>
    <scheduleendtime>05:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>05:36</schedulestarttime>
    <scheduleendtime>05:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Weber, Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2473</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>05:53</schedulestarttime>
    <scheduleendtime>06:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Isabelle Faust and Kristian Bezuidenhout under the baton of John Eliot Gardiner and London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>G. Puccini: Tosca - Simon Rattle</programmetitle>
    <programmenumber>1752</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Sir Simon Rattle</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>06:03</schedulestarttime>
    <scheduleendtime>06:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Tosca, Puccini's most famous opera is not merely a work of art, but also a gripping suspense-packed story.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>06:19</schedulestarttime>
    <scheduleendtime>06:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>06:24</schedulestarttime>
    <scheduleendtime>06:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez</programmetitle>
    <programmenumber>1766</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>06:29</schedulestarttime>
    <scheduleendtime>06:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez with his bewitching voice is accompanied by the formidable pianist Vincenzo Scalera. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zandile Mzazi - South Africa</programmetitle>
    <programmenumber>2420</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Zandile Mzazi</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>06:35</schedulestarttime>
    <scheduleendtime>06:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A concert tribute to Sibongile Khumalo, South Africa’s former First Lady of Song and great influence to Mzazi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>06:40</schedulestarttime>
    <scheduleendtime>06:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thomas Adès "In Seven Days" </programmetitle>
    <programmenumber>2474</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>06:47</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Works by Sibelius and Adès played by the London Symphony Orchestra and Kirill Gerstein.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>08:24</schedulestarttime>
    <scheduleendtime>09:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Kyle Eastwood Quintet</programmetitle>
    <programmenumber>2578</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>09:59</schedulestarttime>
    <scheduleendtime>11:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With his quintet, they perform his 2019 album, Cinematic, alongside with Hugh Coltman and Camille Bertault.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>11:04</schedulestarttime>
    <scheduleendtime>12:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Céu - Live at Moods</programmetitle>
    <programmenumber>1161</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Céu</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>12:18</schedulestarttime>
    <scheduleendtime>14:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Psychedelic pop, soul and choro, the Brazilian singer doesn't fit in any box.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>14:06</schedulestarttime>
    <scheduleendtime>15:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>15:42</schedulestarttime>
    <scheduleendtime>17:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Cannonball Adderley Brotherhood</programmetitle>
    <programmenumber>723</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>17:20</schedulestarttime>
    <scheduleendtime>18:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Don't worry: the Brotherhood are in no way paying a stuffy tribute to Julian "Cannonball" Adderley here. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>18:14</schedulestarttime>
    <scheduleendtime>19:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>19:01</schedulestarttime>
    <scheduleendtime>20:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>20:52</schedulestarttime>
    <scheduleendtime>20:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>20:55</schedulestarttime>
    <scheduleendtime>21:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>21:02</schedulestarttime>
    <scheduleendtime>21:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>21:52</schedulestarttime>
    <scheduleendtime>22:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>22:35</schedulestarttime>
    <scheduleendtime>23:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>09072023</scheduledate>
    <schedulestarttime>23:50</schedulestarttime>
    <scheduleendtime>01:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Shearing Touch</programmetitle>
    <programmenumber>2547</programmenumber>
    <yearofrelease>1994</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>01:08</schedulestarttime>
    <scheduleendtime>02:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born blind in 1919, George Shearing is one of music's most interesting and unlikely tales.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>02:10</schedulestarttime>
    <scheduleendtime>03:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>03:18</schedulestarttime>
    <scheduleendtime>05:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>05:06</schedulestarttime>
    <scheduleendtime>06:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>06:15</schedulestarttime>
    <scheduleendtime>06:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>06:19</schedulestarttime>
    <scheduleendtime>06:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>06:34</schedulestarttime>
    <scheduleendtime>06:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Rymden - Tourcoing Jazz Festival</programmetitle>
    <programmenumber>1638</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>06:39</schedulestarttime>
    <scheduleendtime>06:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Double-bassist Dan Berglund and drummer Magnus Oström perform as their new trio with Bugge Wesseltof.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez</programmetitle>
    <programmenumber>1766</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>06:50</schedulestarttime>
    <scheduleendtime>06:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez with his bewitching voice is accompanied by the formidable pianist Vincenzo Scalera. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>06:53</schedulestarttime>
    <scheduleendtime>07:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>07:06</schedulestarttime>
    <scheduleendtime>08:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>08:16</schedulestarttime>
    <scheduleendtime>09:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nils Landgren &amp; Bootsy Collins</programmetitle>
    <programmenumber>209</programmenumber>
    <yearofrelease>1998</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>09:18</schedulestarttime>
    <scheduleendtime>09:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Two back to back performances by the Nils Landgren Funk Unit and Bootsy Collins at the Jazzopen in Stuttgart.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>09:26</schedulestarttime>
    <scheduleendtime>09:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>09:34</schedulestarttime>
    <scheduleendtime>09:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Seun Kuti &amp; Egypt 80 - Moods</programmetitle>
    <programmenumber>1152</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>09:46</schedulestarttime>
    <scheduleendtime>09:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>They give us sharp, polyrhythmic drums, an array of percussion, and funk guitars that slow-cook the groove.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Shearing Touch</programmetitle>
    <programmenumber>2547</programmenumber>
    <yearofrelease>1994</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>09:55</schedulestarttime>
    <scheduleendtime>10:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born blind in 1919, George Shearing is one of music's most interesting and unlikely tales.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>10:57</schedulestarttime>
    <scheduleendtime>11:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>11:26</schedulestarttime>
    <scheduleendtime>11:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>11:59</schedulestarttime>
    <scheduleendtime>13:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>13:02</schedulestarttime>
    <scheduleendtime>14:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>14:00</schedulestarttime>
    <scheduleendtime>15:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp "In the Mood" - Live</programmetitle>
    <programmenumber>488</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>15:07</schedulestarttime>
    <scheduleendtime>15:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>On the island of Porquerolles in Provence, jazz soaks its feet every summer, here with Captain Archie Shepp.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>15:23</schedulestarttime>
    <scheduleendtime>15:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Orchestre Poly-Rythmo de Cotonou</programmetitle>
    <programmenumber>1187</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>15:33</schedulestarttime>
    <scheduleendtime>15:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed after the independence of Benin, this band with more than 500 records to their credit is like no other.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>15:40</schedulestarttime>
    <scheduleendtime>15:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>15:44</schedulestarttime>
    <scheduleendtime>15:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>15:51</schedulestarttime>
    <scheduleendtime>15:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>15:53</schedulestarttime>
    <scheduleendtime>15:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Earl Hines &amp; His All Stars – RTBF</programmetitle>
    <programmenumber>716</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Earl Hines</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>15:59</schedulestarttime>
    <scheduleendtime>16:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:01</schedulestarttime>
    <scheduleendtime>16:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:04</schedulestarttime>
    <scheduleendtime>16:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:08</schedulestarttime>
    <scheduleendtime>16:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:12</schedulestarttime>
    <scheduleendtime>16:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Captain Beefheart – RTBF Archives</programmetitle>
    <programmenumber>706</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Captain Beefheart</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:19</schedulestarttime>
    <scheduleendtime>16:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Captain Beefheart embodies blues rock in this 1974 archive, where bell bottoms and long hair are all the rage.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:28</schedulestarttime>
    <scheduleendtime>16:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:34</schedulestarttime>
    <scheduleendtime>16:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:40</schedulestarttime>
    <scheduleendtime>16:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:48</schedulestarttime>
    <scheduleendtime>16:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>16:57</schedulestarttime>
    <scheduleendtime>17:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>17:26</schedulestarttime>
    <scheduleendtime>19:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>OUM - Live at Moods</programmetitle>
    <programmenumber>1575</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>19:04</schedulestarttime>
    <scheduleendtime>20:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Saharawi descendant revisits parts of her discography, accompanied by Yacir Rami and bassist Damian Nueva.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>10072023</scheduledate>
    <schedulestarttime>20:55</schedulestarttime>
    <scheduleendtime>00:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thelonious Monk Quartet - Part 2</programmetitle>
    <programmenumber>241</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Thelonious Monk</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>00:14</schedulestarttime>
    <scheduleendtime>00:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It is a joy to watch a Brussels concert recorded in 1963 with Thelonious Monk and his quartet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Cécile McLorin Salvant - Live</programmetitle>
    <programmenumber>2594</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>00:44</schedulestarttime>
    <scheduleendtime>01:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The songwriter &amp; vocalist enchants Nancy Jazz Pulsations festival with themes from her album Ghost Song.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>01:44</schedulestarttime>
    <scheduleendtime>02:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>02:53</schedulestarttime>
    <scheduleendtime>03:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>03:53</schedulestarttime>
    <scheduleendtime>05:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>05:35</schedulestarttime>
    <scheduleendtime>06:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>06:25</schedulestarttime>
    <scheduleendtime>06:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>06:29</schedulestarttime>
    <scheduleendtime>06:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>06:36</schedulestarttime>
    <scheduleendtime>06:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>06:48</schedulestarttime>
    <scheduleendtime>06:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - Live in Antibes</programmetitle>
    <programmenumber>1453</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>06:55</schedulestarttime>
    <scheduleendtime>07:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Accompanied by Tommy Flanagan and Roy Eldridge, Ella performs at the legendary Antibes Jazz Festival in 1964.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>07:00</schedulestarttime>
    <scheduleendtime>08:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>08:52</schedulestarttime>
    <scheduleendtime>10:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>OUM - Live at Moods</programmetitle>
    <programmenumber>1575</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>10:38</schedulestarttime>
    <scheduleendtime>12:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Saharawi descendant revisits parts of her discography, accompanied by Yacir Rami and bassist Damian Nueva.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>12:29</schedulestarttime>
    <scheduleendtime>13:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>13:16</schedulestarttime>
    <scheduleendtime>13:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>13:37</schedulestarttime>
    <scheduleendtime>14:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>14:44</schedulestarttime>
    <scheduleendtime>15:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>15:12</schedulestarttime>
    <scheduleendtime>16:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Antibalas - Live at Moods</programmetitle>
    <programmenumber>1200</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>16:35</schedulestarttime>
    <scheduleendtime>16:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Antibalas gives us afrobeat and mix in modern funk, the avant-garde, dub and electronic influences.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>16:45</schedulestarttime>
    <scheduleendtime>16:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nucleus - RTBF</programmetitle>
    <programmenumber>710</programmenumber>
    <yearofrelease>1971</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>16:51</schedulestarttime>
    <scheduleendtime>17:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>17:01</schedulestarttime>
    <scheduleendtime>17:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>17:40</schedulestarttime>
    <scheduleendtime>18:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>18:53</schedulestarttime>
    <scheduleendtime>20:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Galliano &amp; Polish Orchestra</programmetitle>
    <programmenumber>1635</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Richard Galliano</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>20:30</schedulestarttime>
    <scheduleendtime>20:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The repertoire: Aconcagua, concerto for bandoneon by Piazzolla; Madreperla, concerto for accordion by Galliano</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>20:37</schedulestarttime>
    <scheduleendtime>20:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>20:46</schedulestarttime>
    <scheduleendtime>20:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>20:52</schedulestarttime>
    <scheduleendtime>21:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>21:00</schedulestarttime>
    <scheduleendtime>22:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Cannonball Adderley Brotherhood</programmetitle>
    <programmenumber>723</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>22:09</schedulestarttime>
    <scheduleendtime>23:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Don't worry: the Brotherhood are in no way paying a stuffy tribute to Julian "Cannonball" Adderley here. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>11072023</scheduledate>
    <schedulestarttime>23:05</schedulestarttime>
    <scheduleendtime>00:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>00:42</schedulestarttime>
    <scheduleendtime>01:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>01:43</schedulestarttime>
    <scheduleendtime>02:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vasily Petrenko: Dvořák - Beethoven</programmetitle>
    <programmenumber>1758</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vasily Petrenko</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>02:17</schedulestarttime>
    <scheduleendtime>04:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Israel Philharmonic Orchestra under the direction of Vasily Petrenko interpret Dvořák and Beethoven.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>04:58</schedulestarttime>
    <scheduleendtime>06:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zandile Mzazi - South Africa</programmetitle>
    <programmenumber>2420</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Zandile Mzazi</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>06:35</schedulestarttime>
    <scheduleendtime>06:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A concert tribute to Sibongile Khumalo, South Africa’s former First Lady of Song and great influence to Mzazi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>06:39</schedulestarttime>
    <scheduleendtime>06:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>G. Puccini: Tosca - Simon Rattle</programmetitle>
    <programmenumber>1752</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Sir Simon Rattle</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>06:48</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Tosca, Puccini's most famous opera is not merely a work of art, but also a gripping suspense-packed story.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>08:09</schedulestarttime>
    <scheduleendtime>10:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>10:00</schedulestarttime>
    <scheduleendtime>10:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>10:04</schedulestarttime>
    <scheduleendtime>10:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>10:07</schedulestarttime>
    <scheduleendtime>10:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>10:10</schedulestarttime>
    <scheduleendtime>11:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>11:48</schedulestarttime>
    <scheduleendtime>12:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>12:34</schedulestarttime>
    <scheduleendtime>13:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>13:59</schedulestarttime>
    <scheduleendtime>15:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>15:12</schedulestarttime>
    <scheduleendtime>15:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>15:58</schedulestarttime>
    <scheduleendtime>16:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>16:33</schedulestarttime>
    <scheduleendtime>16:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>16:36</schedulestarttime>
    <scheduleendtime>16:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>16:44</schedulestarttime>
    <scheduleendtime>16:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>16:53</schedulestarttime>
    <scheduleendtime>17:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>17:03</schedulestarttime>
    <scheduleendtime>17:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>17:45</schedulestarttime>
    <scheduleendtime>18:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>18:44</schedulestarttime>
    <scheduleendtime>19:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>19:45</schedulestarttime>
    <scheduleendtime>19:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>19:49</schedulestarttime>
    <scheduleendtime>19:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>19:57</schedulestarttime>
    <scheduleendtime>20:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:03</schedulestarttime>
    <scheduleendtime>20:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Antibalas - Live at Moods</programmetitle>
    <programmenumber>1200</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:07</schedulestarttime>
    <scheduleendtime>20:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Antibalas gives us afrobeat and mix in modern funk, the avant-garde, dub and electronic influences.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:16</schedulestarttime>
    <scheduleendtime>20:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lionel Hampton - RTBF Archives 1959</programmetitle>
    <programmenumber>250</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Lionel Hampton</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:19</schedulestarttime>
    <scheduleendtime>20:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The drummer and vibraphonist makes a tour stop in Liège, Belgium, with a supercharged orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:26</schedulestarttime>
    <scheduleendtime>20:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:30</schedulestarttime>
    <scheduleendtime>20:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Gallagher - Marquee Club, London</programmetitle>
    <programmenumber>713</programmenumber>
    <yearofrelease>1973</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:36</schedulestarttime>
    <scheduleendtime>20:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This concert was recorded at the London Marquee Club in 1973, Gallagher was on a world tour at the age of 25.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:42</schedulestarttime>
    <scheduleendtime>20:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:49</schedulestarttime>
    <scheduleendtime>20:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Rymden - Tourcoing Jazz Festival</programmetitle>
    <programmenumber>1638</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>20:55</schedulestarttime>
    <scheduleendtime>21:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Double-bassist Dan Berglund and drummer Magnus Oström perform as their new trio with Bugge Wesseltof.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Cécile McLorin Salvant - Live</programmetitle>
    <programmenumber>2594</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>21:06</schedulestarttime>
    <scheduleendtime>22:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The songwriter &amp; vocalist enchants Nancy Jazz Pulsations festival with themes from her album Ghost Song.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>22:07</schedulestarttime>
    <scheduleendtime>23:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>12072023</scheduledate>
    <schedulestarttime>23:25</schedulestarttime>
    <scheduleendtime>00:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>00:16</schedulestarttime>
    <scheduleendtime>01:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>01:24</schedulestarttime>
    <scheduleendtime>01:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alban Berg: Wozzeck</programmetitle>
    <programmenumber>2434</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Stéphane Degout</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>01:43</schedulestarttime>
    <scheduleendtime>03:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Wozzeck is a story of war and doom, told masterfully by the Opéra de Toulouse in this 2022 production.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>03:29</schedulestarttime>
    <scheduleendtime>05:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>05:07</schedulestarttime>
    <scheduleendtime>06:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>06:07</schedulestarttime>
    <scheduleendtime>06:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>06:11</schedulestarttime>
    <scheduleendtime>06:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zandile Mzazi - South Africa</programmetitle>
    <programmenumber>2420</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Zandile Mzazi</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>06:18</schedulestarttime>
    <scheduleendtime>06:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A concert tribute to Sibongile Khumalo, South Africa’s former First Lady of Song and great influence to Mzazi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>06:26</schedulestarttime>
    <scheduleendtime>06:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thomas Adès "In Seven Days" </programmetitle>
    <programmenumber>2474</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>06:39</schedulestarttime>
    <scheduleendtime>06:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Works by Sibelius and Adès played by the London Symphony Orchestra and Kirill Gerstein.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>06:46</schedulestarttime>
    <scheduleendtime>06:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>06:50</schedulestarttime>
    <scheduleendtime>07:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>07:14</schedulestarttime>
    <scheduleendtime>07:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hindi Zahra &amp; Fatoumata Diawara</programmetitle>
    <programmenumber>740</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Fatoumata Diawara</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>07:58</schedulestarttime>
    <scheduleendtime>09:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The duo mix Bambara with Amazigh &amp; English, folk with jazz, soul with blues &amp; reggae at Banlieues Bleues fest.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>09:04</schedulestarttime>
    <scheduleendtime>09:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>09:09</schedulestarttime>
    <scheduleendtime>09:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>09:18</schedulestarttime>
    <scheduleendtime>09:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>09:35</schedulestarttime>
    <scheduleendtime>09:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>09:39</schedulestarttime>
    <scheduleendtime>09:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Brian Auger's Oblivion Express</programmetitle>
    <programmenumber>705</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Brian Auger</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>09:43</schedulestarttime>
    <scheduleendtime>09:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The keyboardist Brian Auger shows all his talent for groove and virtuoso solos on the Fender Rhodes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>09:52</schedulestarttime>
    <scheduleendtime>09:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>09:55</schedulestarttime>
    <scheduleendtime>10:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thelonious Monk Quartet - Part 2</programmetitle>
    <programmenumber>241</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Thelonious Monk</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>10:03</schedulestarttime>
    <scheduleendtime>10:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It is a joy to watch a Brussels concert recorded in 1963 with Thelonious Monk and his quartet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>10:33</schedulestarttime>
    <scheduleendtime>12:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>12:51</schedulestarttime>
    <scheduleendtime>13:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Trombone Shorty &amp; Orleans Avenue</programmetitle>
    <programmenumber>2580</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>13:08</schedulestarttime>
    <scheduleendtime>14:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Trombone delivers a gig full of soul and rock sounds with a few forays into blues and jazz lands.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>14:21</schedulestarttime>
    <scheduleendtime>15:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>15:07</schedulestarttime>
    <scheduleendtime>16:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>16:24</schedulestarttime>
    <scheduleendtime>16:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>16:29</schedulestarttime>
    <scheduleendtime>16:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nucleus - RTBF</programmetitle>
    <programmenumber>710</programmenumber>
    <yearofrelease>1971</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>16:34</schedulestarttime>
    <scheduleendtime>16:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Galliano &amp; Polish Orchestra</programmetitle>
    <programmenumber>1635</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Richard Galliano</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>16:40</schedulestarttime>
    <scheduleendtime>16:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The repertoire: Aconcagua, concerto for bandoneon by Piazzolla; Madreperla, concerto for accordion by Galliano</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>16:48</schedulestarttime>
    <scheduleendtime>16:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>16:57</schedulestarttime>
    <scheduleendtime>17:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>17:01</schedulestarttime>
    <scheduleendtime>17:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>17:47</schedulestarttime>
    <scheduleendtime>18:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>18:17</schedulestarttime>
    <scheduleendtime>19:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>19:19</schedulestarttime>
    <scheduleendtime>19:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>19:23</schedulestarttime>
    <scheduleendtime>19:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vincent Peirani "Living Being"</programmetitle>
    <programmenumber>652</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vincent Peirani</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>19:32</schedulestarttime>
    <scheduleendtime>19:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>From Led Zeppelin to Purcell covers, this quintet is a real chamber rock music orchestra. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>19:36</schedulestarttime>
    <scheduleendtime>19:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>19:44</schedulestarttime>
    <scheduleendtime>19:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>19:54</schedulestarttime>
    <scheduleendtime>20:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>20:00</schedulestarttime>
    <scheduleendtime>20:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Galliano &amp; Polish Orchestra</programmetitle>
    <programmenumber>1635</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Richard Galliano</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>20:08</schedulestarttime>
    <scheduleendtime>20:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The repertoire: Aconcagua, concerto for bandoneon by Piazzolla; Madreperla, concerto for accordion by Galliano</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>20:15</schedulestarttime>
    <scheduleendtime>20:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>20:21</schedulestarttime>
    <scheduleendtime>20:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>20:35</schedulestarttime>
    <scheduleendtime>20:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>20:47</schedulestarttime>
    <scheduleendtime>20:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>20:55</schedulestarttime>
    <scheduleendtime>21:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Shearing Touch</programmetitle>
    <programmenumber>2547</programmenumber>
    <yearofrelease>1994</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>21:00</schedulestarttime>
    <scheduleendtime>22:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born blind in 1919, George Shearing is one of music's most interesting and unlikely tales.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>22:02</schedulestarttime>
    <scheduleendtime>22:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>22:32</schedulestarttime>
    <scheduleendtime>23:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>13072023</scheduledate>
    <schedulestarttime>23:38</schedulestarttime>
    <scheduleendtime>00:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>00:59</schedulestarttime>
    <scheduleendtime>02:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>02:27</schedulestarttime>
    <scheduleendtime>05:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>05:43</schedulestarttime>
    <scheduleendtime>06:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>06:47</schedulestarttime>
    <scheduleendtime>06:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>06:51</schedulestarttime>
    <scheduleendtime>07:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>07:07</schedulestarttime>
    <scheduleendtime>08:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>OUM - Live at Moods</programmetitle>
    <programmenumber>1575</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>08:07</schedulestarttime>
    <scheduleendtime>09:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Saharawi descendant revisits parts of her discography, accompanied by Yacir Rami and bassist Damian Nueva.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>09:58</schedulestarttime>
    <scheduleendtime>13:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>13:08</schedulestarttime>
    <scheduleendtime>14:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Shearing Touch</programmetitle>
    <programmenumber>2547</programmenumber>
    <yearofrelease>1994</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>14:45</schedulestarttime>
    <scheduleendtime>15:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born blind in 1919, George Shearing is one of music's most interesting and unlikely tales.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Cécile McLorin Salvant - Live</programmetitle>
    <programmenumber>2594</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>15:49</schedulestarttime>
    <scheduleendtime>16:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The songwriter &amp; vocalist enchants Nancy Jazz Pulsations festival with themes from her album Ghost Song.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thelonious Monk Quartet - Part 2</programmetitle>
    <programmenumber>241</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Thelonious Monk</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>16:50</schedulestarttime>
    <scheduleendtime>17:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It is a joy to watch a Brussels concert recorded in 1963 with Thelonious Monk and his quartet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>17:20</schedulestarttime>
    <scheduleendtime>18:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>18:09</schedulestarttime>
    <scheduleendtime>19:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>19:58</schedulestarttime>
    <scheduleendtime>20:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>20:04</schedulestarttime>
    <scheduleendtime>20:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>20:15</schedulestarttime>
    <scheduleendtime>20:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>20:23</schedulestarttime>
    <scheduleendtime>20:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp "In the Mood" - Live</programmetitle>
    <programmenumber>488</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>20:27</schedulestarttime>
    <scheduleendtime>20:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>On the island of Porquerolles in Provence, jazz soaks its feet every summer, here with Captain Archie Shepp.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>20:42</schedulestarttime>
    <scheduleendtime>20:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>20:48</schedulestarttime>
    <scheduleendtime>20:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>20:51</schedulestarttime>
    <scheduleendtime>20:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>OUM - Live at Moods</programmetitle>
    <programmenumber>1575</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>20:56</schedulestarttime>
    <scheduleendtime>22:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Saharawi descendant revisits parts of her discography, accompanied by Yacir Rami and bassist Damian Nueva.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>22:44</schedulestarttime>
    <scheduleendtime>23:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>14072023</scheduledate>
    <schedulestarttime>23:23</schedulestarttime>
    <scheduleendtime>00:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>00:30</schedulestarttime>
    <scheduleendtime>01:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>01:05</schedulestarttime>
    <scheduleendtime>01:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>01:22</schedulestarttime>
    <scheduleendtime>02:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alban Berg: Wozzeck</programmetitle>
    <programmenumber>2434</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Stéphane Degout</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>02:31</schedulestarttime>
    <scheduleendtime>04:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Wozzeck is a story of war and doom, told masterfully by the Opéra de Toulouse in this 2022 production.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>04:17</schedulestarttime>
    <scheduleendtime>06:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>06:00</schedulestarttime>
    <scheduleendtime>06:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>06:15</schedulestarttime>
    <scheduleendtime>06:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>06:31</schedulestarttime>
    <scheduleendtime>06:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>06:39</schedulestarttime>
    <scheduleendtime>06:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Weber, Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2473</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>06:45</schedulestarttime>
    <scheduleendtime>06:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Isabelle Faust and Kristian Bezuidenhout under the baton of John Eliot Gardiner and London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>06:50</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>08:22</schedulestarttime>
    <scheduleendtime>10:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Manu Dibango - JazzOpen Stuttgart</programmetitle>
    <programmenumber>227</programmenumber>
    <yearofrelease>1995</yearofrelease>
    <directorname/>
    <castname>Manu Dibango</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>10:00</schedulestarttime>
    <scheduleendtime>11:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this concert, the prestigious group helms by Dibango showcases insane groove from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>11:10</schedulestarttime>
    <scheduleendtime>12:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Céu - Live at Moods</programmetitle>
    <programmenumber>1161</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Céu</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>12:24</schedulestarttime>
    <scheduleendtime>14:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Psychedelic pop, soul and choro, the Brazilian singer doesn't fit in any box.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>14:09</schedulestarttime>
    <scheduleendtime>15:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>15:44</schedulestarttime>
    <scheduleendtime>17:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Cannonball Adderley Brotherhood</programmetitle>
    <programmenumber>723</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>17:22</schedulestarttime>
    <scheduleendtime>18:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Don't worry: the Brotherhood are in no way paying a stuffy tribute to Julian "Cannonball" Adderley here. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>18:17</schedulestarttime>
    <scheduleendtime>19:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>19:04</schedulestarttime>
    <scheduleendtime>20:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anthony Joseph - Live at Moods</programmetitle>
    <programmenumber>1176</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Anthony Joseph</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>20:56</schedulestarttime>
    <scheduleendtime>22:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group cook up a groove that builds and permeates the room, conjuring trance and getting bodies moving.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>22:33</schedulestarttime>
    <scheduleendtime>23:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Shearing Touch</programmetitle>
    <programmenumber>2547</programmenumber>
    <yearofrelease>1994</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>15072023</scheduledate>
    <schedulestarttime>23:17</schedulestarttime>
    <scheduleendtime>00:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born blind in 1919, George Shearing is one of music's most interesting and unlikely tales.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>00:21</schedulestarttime>
    <scheduleendtime>01:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>01:29</schedulestarttime>
    <scheduleendtime>04:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>04:39</schedulestarttime>
    <scheduleendtime>06:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>06:28</schedulestarttime>
    <scheduleendtime>06:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>06:31</schedulestarttime>
    <scheduleendtime>06:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>06:39</schedulestarttime>
    <scheduleendtime>06:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>06:51</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>07:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>07:34</schedulestarttime>
    <scheduleendtime>08:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>08:34</schedulestarttime>
    <scheduleendtime>08:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>08:40</schedulestarttime>
    <scheduleendtime>08:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>08:48</schedulestarttime>
    <scheduleendtime>09:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>09:03</schedulestarttime>
    <scheduleendtime>09:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>09:09</schedulestarttime>
    <scheduleendtime>09:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nucleus - RTBF</programmetitle>
    <programmenumber>710</programmenumber>
    <yearofrelease>1971</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>09:19</schedulestarttime>
    <scheduleendtime>09:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>09:25</schedulestarttime>
    <scheduleendtime>09:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>09:31</schedulestarttime>
    <scheduleendtime>09:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>09:40</schedulestarttime>
    <scheduleendtime>09:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Cécile McLorin Salvant - Live</programmetitle>
    <programmenumber>2594</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>09:49</schedulestarttime>
    <scheduleendtime>10:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The songwriter &amp; vocalist enchants Nancy Jazz Pulsations festival with themes from her album Ghost Song.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>10:50</schedulestarttime>
    <scheduleendtime>11:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>11:49</schedulestarttime>
    <scheduleendtime>12:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>12:49</schedulestarttime>
    <scheduleendtime>13:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>13:41</schedulestarttime>
    <scheduleendtime>14:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>14:55</schedulestarttime>
    <scheduleendtime>15:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>15:56</schedulestarttime>
    <scheduleendtime>15:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>15:59</schedulestarttime>
    <scheduleendtime>16:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Galliano &amp; Polish Orchestra</programmetitle>
    <programmenumber>1635</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Richard Galliano</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>16:03</schedulestarttime>
    <scheduleendtime>16:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The repertoire: Aconcagua, concerto for bandoneon by Piazzolla; Madreperla, concerto for accordion by Galliano</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>16:12</schedulestarttime>
    <scheduleendtime>16:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>16:19</schedulestarttime>
    <scheduleendtime>16:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>16:29</schedulestarttime>
    <scheduleendtime>16:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>16:36</schedulestarttime>
    <scheduleendtime>16:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lionel Hampton - RTBF Archives 1959</programmetitle>
    <programmenumber>250</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Lionel Hampton</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>16:44</schedulestarttime>
    <scheduleendtime>16:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The drummer and vibraphonist makes a tour stop in Liège, Belgium, with a supercharged orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>16:51</schedulestarttime>
    <scheduleendtime>17:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>17:03</schedulestarttime>
    <scheduleendtime>18:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>18:21</schedulestarttime>
    <scheduleendtime>20:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Seun Kuti &amp; Egypt 80 - Moods</programmetitle>
    <programmenumber>1152</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>20:39</schedulestarttime>
    <scheduleendtime>20:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>They give us sharp, polyrhythmic drums, an array of percussion, and funk guitars that slow-cook the groove.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Brian Auger's Oblivion Express</programmetitle>
    <programmenumber>705</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Brian Auger</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>20:49</schedulestarttime>
    <scheduleendtime>20:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The keyboardist Brian Auger shows all his talent for groove and virtuoso solos on the Fender Rhodes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>20:57</schedulestarttime>
    <scheduleendtime>21:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thelonious Monk Quartet - Part 2</programmetitle>
    <programmenumber>241</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Thelonious Monk</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>21:05</schedulestarttime>
    <scheduleendtime>21:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It is a joy to watch a Brussels concert recorded in 1963 with Thelonious Monk and his quartet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>21:36</schedulestarttime>
    <scheduleendtime>22:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Trombone Shorty &amp; Orleans Avenue</programmetitle>
    <programmenumber>2580</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>22:23</schedulestarttime>
    <scheduleendtime>23:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Trombone delivers a gig full of soul and rock sounds with a few forays into blues and jazz lands.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>16072023</scheduledate>
    <schedulestarttime>23:37</schedulestarttime>
    <scheduleendtime>01:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Céu - Live at Moods</programmetitle>
    <programmenumber>1161</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Céu</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>01:26</schedulestarttime>
    <scheduleendtime>03:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Psychedelic pop, soul and choro, the Brazilian singer doesn't fit in any box.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>03:07</schedulestarttime>
    <scheduleendtime>04:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>04:48</schedulestarttime>
    <scheduleendtime>05:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>05:56</schedulestarttime>
    <scheduleendtime>06:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>06:11</schedulestarttime>
    <scheduleendtime>06:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zandile Mzazi - South Africa</programmetitle>
    <programmenumber>2420</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Zandile Mzazi</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>06:16</schedulestarttime>
    <scheduleendtime>06:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A concert tribute to Sibongile Khumalo, South Africa’s former First Lady of Song and great influence to Mzazi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>06:21</schedulestarttime>
    <scheduleendtime>06:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>06:36</schedulestarttime>
    <scheduleendtime>06:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>06:42</schedulestarttime>
    <scheduleendtime>06:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>06:47</schedulestarttime>
    <scheduleendtime>06:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>06:54</schedulestarttime>
    <scheduleendtime>07:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>07:00</schedulestarttime>
    <scheduleendtime>08:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>08:47</schedulestarttime>
    <scheduleendtime>10:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>10:30</schedulestarttime>
    <scheduleendtime>11:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>11:18</schedulestarttime>
    <scheduleendtime>11:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>11:39</schedulestarttime>
    <scheduleendtime>12:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>12:45</schedulestarttime>
    <scheduleendtime>13:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>13:14</schedulestarttime>
    <scheduleendtime>14:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>14:38</schedulestarttime>
    <scheduleendtime>14:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>14:43</schedulestarttime>
    <scheduleendtime>14:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>14:53</schedulestarttime>
    <scheduleendtime>15:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Captain Beefheart – RTBF Archives</programmetitle>
    <programmenumber>706</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Captain Beefheart</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:03</schedulestarttime>
    <scheduleendtime>15:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Captain Beefheart embodies blues rock in this 1974 archive, where bell bottoms and long hair are all the rage.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:14</schedulestarttime>
    <scheduleendtime>15:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:19</schedulestarttime>
    <scheduleendtime>15:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:25</schedulestarttime>
    <scheduleendtime>15:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:31</schedulestarttime>
    <scheduleendtime>15:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Earl Hines &amp; His All Stars – RTBF</programmetitle>
    <programmenumber>716</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Earl Hines</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:37</schedulestarttime>
    <scheduleendtime>15:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:39</schedulestarttime>
    <scheduleendtime>15:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:47</schedulestarttime>
    <scheduleendtime>15:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:51</schedulestarttime>
    <scheduleendtime>15:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>15:54</schedulestarttime>
    <scheduleendtime>16:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Gallagher - Marquee Club, London</programmetitle>
    <programmenumber>713</programmenumber>
    <yearofrelease>1973</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>16:00</schedulestarttime>
    <scheduleendtime>16:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This concert was recorded at the London Marquee Club in 1973, Gallagher was on a world tour at the age of 25.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>16:03</schedulestarttime>
    <scheduleendtime>16:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>16:18</schedulestarttime>
    <scheduleendtime>16:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>16:24</schedulestarttime>
    <scheduleendtime>16:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>16:29</schedulestarttime>
    <scheduleendtime>16:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>16:37</schedulestarttime>
    <scheduleendtime>16:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>16:43</schedulestarttime>
    <scheduleendtime>16:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Seun Kuti &amp; Egypt 80 - Moods</programmetitle>
    <programmenumber>1152</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>16:51</schedulestarttime>
    <scheduleendtime>17:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>They give us sharp, polyrhythmic drums, an array of percussion, and funk guitars that slow-cook the groove.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>17:00</schedulestarttime>
    <scheduleendtime>17:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>17:40</schedulestarttime>
    <scheduleendtime>18:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>18:54</schedulestarttime>
    <scheduleendtime>20:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>20:32</schedulestarttime>
    <scheduleendtime>20:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>20:35</schedulestarttime>
    <scheduleendtime>20:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>20:44</schedulestarttime>
    <scheduleendtime>20:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>20:54</schedulestarttime>
    <scheduleendtime>20:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>20:58</schedulestarttime>
    <scheduleendtime>21:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>21:05</schedulestarttime>
    <scheduleendtime>22:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Cannonball Adderley Brotherhood</programmetitle>
    <programmenumber>723</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>17072023</scheduledate>
    <schedulestarttime>22:15</schedulestarttime>
    <scheduleendtime>00:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Don't worry: the Brotherhood are in no way paying a stuffy tribute to Julian "Cannonball" Adderley here. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>00:06</schedulestarttime>
    <scheduleendtime>01:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>01:42</schedulestarttime>
    <scheduleendtime>02:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>02:43</schedulestarttime>
    <scheduleendtime>03:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vasily Petrenko: Dvořák - Beethoven</programmetitle>
    <programmenumber>1758</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vasily Petrenko</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>03:17</schedulestarttime>
    <scheduleendtime>05:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Israel Philharmonic Orchestra under the direction of Vasily Petrenko interpret Dvořák and Beethoven.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>05:56</schedulestarttime>
    <scheduleendtime>06:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>06:00</schedulestarttime>
    <scheduleendtime>06:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>06:05</schedulestarttime>
    <scheduleendtime>06:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>06:22</schedulestarttime>
    <scheduleendtime>06:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez</programmetitle>
    <programmenumber>1766</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>06:29</schedulestarttime>
    <scheduleendtime>06:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez with his bewitching voice is accompanied by the formidable pianist Vincenzo Scalera. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Debussy, Bartók &amp; Bruckner</programmetitle>
    <programmenumber>2470</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>06:34</schedulestarttime>
    <scheduleendtime>06:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>London Symphony Orchestra and François-Xavier Roth perform late Romantic works with Antoine Tamestit.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>06:45</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>08:09</schedulestarttime>
    <scheduleendtime>09:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>09:59</schedulestarttime>
    <scheduleendtime>11:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>11:36</schedulestarttime>
    <scheduleendtime>12:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>12:22</schedulestarttime>
    <scheduleendtime>13:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>13:48</schedulestarttime>
    <scheduleendtime>15:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>15:01</schedulestarttime>
    <scheduleendtime>15:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>15:48</schedulestarttime>
    <scheduleendtime>16:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Girma Bèyènè &amp; Akalé Wubé</programmetitle>
    <programmenumber>1160</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>16:25</schedulestarttime>
    <scheduleendtime>16:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ethiopian legend Girma Bèyènè's Amharic lyrics are enhanced by French collective Akalé Wubé at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp "In the Mood" - Live</programmetitle>
    <programmenumber>488</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>16:34</schedulestarttime>
    <scheduleendtime>16:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>On the island of Porquerolles in Provence, jazz soaks its feet every summer, here with Captain Archie Shepp.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>16:50</schedulestarttime>
    <scheduleendtime>16:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>16:53</schedulestarttime>
    <scheduleendtime>17:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>17:02</schedulestarttime>
    <scheduleendtime>17:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>17:46</schedulestarttime>
    <scheduleendtime>18:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>18:44</schedulestarttime>
    <scheduleendtime>19:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>19:45</schedulestarttime>
    <scheduleendtime>19:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>19:53</schedulestarttime>
    <scheduleendtime>19:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>19:58</schedulestarttime>
    <scheduleendtime>20:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>20:09</schedulestarttime>
    <scheduleendtime>20:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>20:15</schedulestarttime>
    <scheduleendtime>20:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>20:23</schedulestarttime>
    <scheduleendtime>20:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chris Potter - Circuits - Vaulx</programmetitle>
    <programmenumber>660</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Chris Potter</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>20:32</schedulestarttime>
    <scheduleendtime>20:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To promote his latest album, Circuits, Chris Potter called on Craig Taborn, Tim Lefebvre, and Justin Brown.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>20:47</schedulestarttime>
    <scheduleendtime>21:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>21:00</schedulestarttime>
    <scheduleendtime>22:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>22:24</schedulestarttime>
    <scheduleendtime>23:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>18072023</scheduledate>
    <schedulestarttime>23:41</schedulestarttime>
    <scheduleendtime>00:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jason Moran "Bandwagon" - Live</programmetitle>
    <programmenumber>74</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Jason Moran, Tarus Mateen</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>00:31</schedulestarttime>
    <scheduleendtime>01:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Major American jazz figure, Jason Moran and his trio find a perfect balance between classicism and modernity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>01:32</schedulestarttime>
    <scheduleendtime>01:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alban Berg: Wozzeck</programmetitle>
    <programmenumber>2434</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Stéphane Degout</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>01:51</schedulestarttime>
    <scheduleendtime>03:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Wozzeck is a story of war and doom, told masterfully by the Opéra de Toulouse in this 2022 production.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>03:37</schedulestarttime>
    <scheduleendtime>05:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>05:18</schedulestarttime>
    <scheduleendtime>06:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>06:20</schedulestarttime>
    <scheduleendtime>06:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>06:34</schedulestarttime>
    <scheduleendtime>06:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>06:40</schedulestarttime>
    <scheduleendtime>06:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>06:48</schedulestarttime>
    <scheduleendtime>06:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>06:53</schedulestarttime>
    <scheduleendtime>07:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>07:15</schedulestarttime>
    <scheduleendtime>08:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hindi Zahra &amp; Fatoumata Diawara</programmetitle>
    <programmenumber>740</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Fatoumata Diawara</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>08:01</schedulestarttime>
    <scheduleendtime>09:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The duo mix Bambara with Amazigh &amp; English, folk with jazz, soul with blues &amp; reggae at Banlieues Bleues fest.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>09:06</schedulestarttime>
    <scheduleendtime>09:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>09:22</schedulestarttime>
    <scheduleendtime>09:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>09:32</schedulestarttime>
    <scheduleendtime>09:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>09:42</schedulestarttime>
    <scheduleendtime>09:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>09:51</schedulestarttime>
    <scheduleendtime>09:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>09:58</schedulestarttime>
    <scheduleendtime>10:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>10:05</schedulestarttime>
    <scheduleendtime>11:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>11:19</schedulestarttime>
    <scheduleendtime>13:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>13:35</schedulestarttime>
    <scheduleendtime>13:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Trombone Shorty &amp; Orleans Avenue</programmetitle>
    <programmenumber>2580</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>13:53</schedulestarttime>
    <scheduleendtime>15:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Trombone delivers a gig full of soul and rock sounds with a few forays into blues and jazz lands.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>15:07</schedulestarttime>
    <scheduleendtime>15:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>15:53</schedulestarttime>
    <scheduleendtime>17:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>17:10</schedulestarttime>
    <scheduleendtime>17:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>17:58</schedulestarttime>
    <scheduleendtime>18:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>18:27</schedulestarttime>
    <scheduleendtime>19:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>19:30</schedulestarttime>
    <scheduleendtime>19:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>19:37</schedulestarttime>
    <scheduleendtime>19:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>19:42</schedulestarttime>
    <scheduleendtime>19:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>19:45</schedulestarttime>
    <scheduleendtime>19:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vincent Peirani "Living Being"</programmetitle>
    <programmenumber>652</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vincent Peirani</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>19:53</schedulestarttime>
    <scheduleendtime>19:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>From Led Zeppelin to Purcell covers, this quintet is a real chamber rock music orchestra. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>19:57</schedulestarttime>
    <scheduleendtime>20:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>20:05</schedulestarttime>
    <scheduleendtime>20:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>20:07</schedulestarttime>
    <scheduleendtime>20:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dhafer Youssef - Jazz à Vienne 2018</programmetitle>
    <programmenumber>634</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Dhafer Youssef</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>20:16</schedulestarttime>
    <scheduleendtime>20:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dhafer Youssef is joined by Matt Brewer, Aron Parks and Ferenc Nemeth in a colourful and virtuosic concert. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Rymden - Tourcoing Jazz Festival</programmetitle>
    <programmenumber>1638</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>20:28</schedulestarttime>
    <scheduleendtime>20:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Double-bassist Dan Berglund and drummer Magnus Oström perform as their new trio with Bugge Wesseltof.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>20:36</schedulestarttime>
    <scheduleendtime>20:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>20:41</schedulestarttime>
    <scheduleendtime>20:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>20:47</schedulestarttime>
    <scheduleendtime>20:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>20:51</schedulestarttime>
    <scheduleendtime>21:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>21:00</schedulestarttime>
    <scheduleendtime>22:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>22:37</schedulestarttime>
    <scheduleendtime>23:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>19072023</scheduledate>
    <schedulestarttime>23:07</schedulestarttime>
    <scheduleendtime>00:13</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>00:13</schedulestarttime>
    <scheduleendtime>01:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>01:38</schedulestarttime>
    <scheduleendtime>03:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vasily Petrenko: Dvořák - Beethoven</programmetitle>
    <programmenumber>1758</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vasily Petrenko</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>03:05</schedulestarttime>
    <scheduleendtime>05:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Israel Philharmonic Orchestra under the direction of Vasily Petrenko interpret Dvořák and Beethoven.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>05:43</schedulestarttime>
    <scheduleendtime>06:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>06:49</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jason Moran "Bandwagon" - Live</programmetitle>
    <programmenumber>74</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Jason Moran, Tarus Mateen</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Major American jazz figure, Jason Moran and his trio find a perfect balance between classicism and modernity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hugh Masekela - Live</programmetitle>
    <programmenumber>69</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Lee-Roy Sauls, Fana Zulu, Cameron Ward, Hugh Masekela, Francis Manneh Fuster, Randal Skippers</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>08:01</schedulestarttime>
    <scheduleendtime>09:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Five years before his death, South African Hugh Masekela gave a dazzling concert at the Paris Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>09:04</schedulestarttime>
    <scheduleendtime>09:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Antibalas - Live at Moods</programmetitle>
    <programmenumber>1200</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>09:17</schedulestarttime>
    <scheduleendtime>09:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Antibalas gives us afrobeat and mix in modern funk, the avant-garde, dub and electronic influences.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Earl Hines &amp; His All Stars – RTBF</programmetitle>
    <programmenumber>716</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Earl Hines</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>09:26</schedulestarttime>
    <scheduleendtime>09:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>09:30</schedulestarttime>
    <scheduleendtime>09:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lionel Hampton - RTBF Archives 1959</programmetitle>
    <programmenumber>250</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Lionel Hampton</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>09:33</schedulestarttime>
    <scheduleendtime>09:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The drummer and vibraphonist makes a tour stop in Liège, Belgium, with a supercharged orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>09:42</schedulestarttime>
    <scheduleendtime>09:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>09:51</schedulestarttime>
    <scheduleendtime>09:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Cannonball Adderley Brotherhood</programmetitle>
    <programmenumber>723</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>09:59</schedulestarttime>
    <scheduleendtime>10:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Don't worry: the Brotherhood are in no way paying a stuffy tribute to Julian "Cannonball" Adderley here. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Maceo Parker &amp; Roots Revisited</programmetitle>
    <programmenumber>199</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>Maceo Parker</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>10:53</schedulestarttime>
    <scheduleendtime>12:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>James Brown alumni Maceo Parker, Fred Wesley and Pee Wee Ellis stir up funky jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bobby McFerrin - Live in 1988</programmetitle>
    <programmenumber>926</programmenumber>
    <yearofrelease>1988</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>12:01</schedulestarttime>
    <scheduleendtime>12:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Different arpeggios and harmonies, percussive chest beating and irresistible smoothness from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Coulondre Trio - Michel On My Mind</programmetitle>
    <programmenumber>1922</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Laurent Coulondre</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>12:39</schedulestarttime>
    <scheduleendtime>13:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>French pianist Laurent Coulondre's album Michel On My Mind commemorates the anniversary of Petrucciani's death</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>13:56</schedulestarttime>
    <scheduleendtime>16:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>16:10</schedulestarttime>
    <scheduleendtime>16:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>16:15</schedulestarttime>
    <scheduleendtime>16:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Orchestre Poly-Rythmo de Cotonou</programmetitle>
    <programmenumber>1187</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>16:20</schedulestarttime>
    <scheduleendtime>16:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed after the independence of Benin, this band with more than 500 records to their credit is like no other.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1587</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>16:25</schedulestarttime>
    <scheduleendtime>16:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bilal starts his set with "Sirens II," a haunting theme that stands at the crossroads between rock and RnB.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>16:31</schedulestarttime>
    <scheduleendtime>16:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>16:39</schedulestarttime>
    <scheduleendtime>16:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>16:44</schedulestarttime>
    <scheduleendtime>16:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>16:54</schedulestarttime>
    <scheduleendtime>17:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>17:00</schedulestarttime>
    <scheduleendtime>17:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle> Art Blakey &amp; The Jazz Messengers</programmetitle>
    <programmenumber>1449</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Art Blakey</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>17:07</schedulestarttime>
    <scheduleendtime>17:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The musicians who take part in this concert form one of the best formulas that the Jazz Messengers ever knew.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>17:39</schedulestarttime>
    <scheduleendtime>18:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>18:24</schedulestarttime>
    <scheduleendtime>20:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>20:07</schedulestarttime>
    <scheduleendtime>20:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nucleus - RTBF</programmetitle>
    <programmenumber>710</programmenumber>
    <yearofrelease>1971</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>20:24</schedulestarttime>
    <scheduleendtime>20:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Inner Circle - RTBF Archives 1979</programmetitle>
    <programmenumber>709</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Jacob Miller</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>20:31</schedulestarttime>
    <scheduleendtime>20:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed in Kingston in the 70s, Inner Circle here demonstrates a remarkable tightness and energy.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dhafer Youssef - Jazz à Vienne 2018</programmetitle>
    <programmenumber>634</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Dhafer Youssef</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>20:37</schedulestarttime>
    <scheduleendtime>20:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dhafer Youssef is joined by Matt Brewer, Aron Parks and Ferenc Nemeth in a colourful and virtuosic concert. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>20:49</schedulestarttime>
    <scheduleendtime>20:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>20:52</schedulestarttime>
    <scheduleendtime>20:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1587</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>20:55</schedulestarttime>
    <scheduleendtime>21:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bilal starts his set with "Sirens II," a haunting theme that stands at the crossroads between rock and RnB.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Céu - Live at Moods</programmetitle>
    <programmenumber>1161</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Céu</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>21:03</schedulestarttime>
    <scheduleendtime>22:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Psychedelic pop, soul and choro, the Brazilian singer doesn't fit in any box.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>22:48</schedulestarttime>
    <scheduleendtime>23:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>20072023</scheduledate>
    <schedulestarttime>23:27</schedulestarttime>
    <scheduleendtime>00:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>00:34</schedulestarttime>
    <scheduleendtime>01:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>01:11</schedulestarttime>
    <scheduleendtime>01:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>01:29</schedulestarttime>
    <scheduleendtime>02:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alban Berg: Wozzeck</programmetitle>
    <programmenumber>2434</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Stéphane Degout</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>02:37</schedulestarttime>
    <scheduleendtime>04:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Wozzeck is a story of war and doom, told masterfully by the Opéra de Toulouse in this 2022 production.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>04:23</schedulestarttime>
    <scheduleendtime>06:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>06:07</schedulestarttime>
    <scheduleendtime>06:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zandile Mzazi - South Africa</programmetitle>
    <programmenumber>2420</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Zandile Mzazi</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>06:25</schedulestarttime>
    <scheduleendtime>06:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A concert tribute to Sibongile Khumalo, South Africa’s former First Lady of Song and great influence to Mzazi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>06:31</schedulestarttime>
    <scheduleendtime>06:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>06:37</schedulestarttime>
    <scheduleendtime>06:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>06:42</schedulestarttime>
    <scheduleendtime>06:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Weber, Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2473</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>06:48</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Isabelle Faust and Kristian Bezuidenhout under the baton of John Eliot Gardiner and London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>08:23</schedulestarttime>
    <scheduleendtime>10:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>10:01</schedulestarttime>
    <scheduleendtime>11:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>11:10</schedulestarttime>
    <scheduleendtime>12:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Céu - Live at Moods</programmetitle>
    <programmenumber>1161</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Céu</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>12:23</schedulestarttime>
    <scheduleendtime>14:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Psychedelic pop, soul and choro, the Brazilian singer doesn't fit in any box.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>14:07</schedulestarttime>
    <scheduleendtime>15:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Maceo Parker &amp; Roots Revisited</programmetitle>
    <programmenumber>199</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>Maceo Parker</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>15:44</schedulestarttime>
    <scheduleendtime>16:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>James Brown alumni Maceo Parker, Fred Wesley and Pee Wee Ellis stir up funky jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>16:53</schedulestarttime>
    <scheduleendtime>16:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Respect to Aretha - La Villette</programmetitle>
    <programmenumber>986</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>16:58</schedulestarttime>
    <scheduleendtime>17:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It is no less than the universalism of what is termed Great Black Music that is being celebrated here.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Cannonball Adderley Brotherhood</programmetitle>
    <programmenumber>723</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>17:03</schedulestarttime>
    <scheduleendtime>17:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Don't worry: the Brotherhood are in no way paying a stuffy tribute to Julian "Cannonball" Adderley here. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>17:59</schedulestarttime>
    <scheduleendtime>18:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>18:44</schedulestarttime>
    <scheduleendtime>20:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dionne Warwick - RTBF Archives 1964</programmetitle>
    <programmenumber>61</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Dionne Warwick</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>20:33</schedulestarttime>
    <scheduleendtime>20:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An exemplar of both pop and R&amp;B, Warwick had an incredibly soulful sound that endeared her to music lovers.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>20:35</schedulestarttime>
    <scheduleendtime>20:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hannah Williams &amp; The Affirmations</programmetitle>
    <programmenumber>1583</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Hannah Williams</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>20:45</schedulestarttime>
    <scheduleendtime>20:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born in Bristol, this magnetic band presents the volcanic and powerful Hannah Williams as a lead singer.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>20:49</schedulestarttime>
    <scheduleendtime>20:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Rymden - Tourcoing Jazz Festival</programmetitle>
    <programmenumber>1638</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>20:56</schedulestarttime>
    <scheduleendtime>21:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Double-bassist Dan Berglund and drummer Magnus Oström perform as their new trio with Bugge Wesseltof.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>21:05</schedulestarttime>
    <scheduleendtime>22:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>22:42</schedulestarttime>
    <scheduleendtime>23:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>21072023</scheduledate>
    <schedulestarttime>23:24</schedulestarttime>
    <scheduleendtime>00:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>00:37</schedulestarttime>
    <scheduleendtime>01:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bobby McFerrin - Live in 1988</programmetitle>
    <programmenumber>926</programmenumber>
    <yearofrelease>1988</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>01:54</schedulestarttime>
    <scheduleendtime>02:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Different arpeggios and harmonies, percussive chest beating and irresistible smoothness from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>02:32</schedulestarttime>
    <scheduleendtime>03:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bloody Daughter - Martha Argerich</programmetitle>
    <programmenumber>1749</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname>Martha Argerich</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>03:40</schedulestarttime>
    <scheduleendtime>05:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This documentary invites us into the life of Martha Argerich as told through the eyes of her daughter.  </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>05:34</schedulestarttime>
    <scheduleendtime>06:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>06:48</schedulestarttime>
    <scheduleendtime>06:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>G. Puccini: Tosca - Simon Rattle</programmetitle>
    <programmenumber>1752</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Sir Simon Rattle</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>06:52</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Tosca, Puccini's most famous opera is not merely a work of art, but also a gripping suspense-packed story.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>07:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>07:34</schedulestarttime>
    <scheduleendtime>08:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>08:35</schedulestarttime>
    <scheduleendtime>08:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>08:47</schedulestarttime>
    <scheduleendtime>08:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>08:53</schedulestarttime>
    <scheduleendtime>09:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BCUC - Live at Moods</programmetitle>
    <programmenumber>1180</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>09:02</schedulestarttime>
    <scheduleendtime>09:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Originally from Soweto, BCUC's Afro-psychedelic trance hypnotises us with reworked traditional sounds. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>09:15</schedulestarttime>
    <scheduleendtime>09:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dionne Warwick - RTBF Archives 1964</programmetitle>
    <programmenumber>61</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Dionne Warwick</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>09:21</schedulestarttime>
    <scheduleendtime>09:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An exemplar of both pop and R&amp;B, Warwick had an incredibly soulful sound that endeared her to music lovers.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>09:26</schedulestarttime>
    <scheduleendtime>09:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Louis Armstrong &amp; his All Stars</programmetitle>
    <programmenumber>248</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Louis Armstrong</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>09:36</schedulestarttime>
    <scheduleendtime>09:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This footage is a reminder of Satchmo's talent, unique tone and ability to bring out countless subtleties.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>09:40</schedulestarttime>
    <scheduleendtime>09:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Kenny Garrett Quintet - Live</programmetitle>
    <programmenumber>2431</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Kenny Garrett</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>09:44</schedulestarttime>
    <scheduleendtime>11:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Kenny Garrett registers with elegance, sensibility and intelligence in the continuity of the history of jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>11:08</schedulestarttime>
    <scheduleendtime>12:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>12:05</schedulestarttime>
    <scheduleendtime>13:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>13:04</schedulestarttime>
    <scheduleendtime>13:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>13:54</schedulestarttime>
    <scheduleendtime>15:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>15:07</schedulestarttime>
    <scheduleendtime>16:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Orchestre Poly-Rythmo de Cotonou</programmetitle>
    <programmenumber>1187</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:07</schedulestarttime>
    <scheduleendtime>16:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed after the independence of Benin, this band with more than 500 records to their credit is like no other.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:14</schedulestarttime>
    <scheduleendtime>16:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Brian Auger's Oblivion Express</programmetitle>
    <programmenumber>705</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Brian Auger</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:20</schedulestarttime>
    <scheduleendtime>16:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The keyboardist Brian Auger shows all his talent for groove and virtuoso solos on the Fender Rhodes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:27</schedulestarttime>
    <scheduleendtime>16:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:37</schedulestarttime>
    <scheduleendtime>16:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hannah Williams &amp; The Affirmations</programmetitle>
    <programmenumber>1583</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Hannah Williams</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:42</schedulestarttime>
    <scheduleendtime>16:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born in Bristol, this magnetic band presents the volcanic and powerful Hannah Williams as a lead singer.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Terri Lyne Carrington - Lotos Jazz</programmetitle>
    <programmenumber>586</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Terri Lyne Carrington</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:48</schedulestarttime>
    <scheduleendtime>16:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Aaron Parks, James Genus, Tia Fuller, Nir Felder, Gretchen Parlato and Terri Lyne Carrington live in 2013.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - Live in Antibes</programmetitle>
    <programmenumber>1453</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:55</schedulestarttime>
    <scheduleendtime>16:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Accompanied by Tommy Flanagan and Roy Eldridge, Ella performs at the legendary Antibes Jazz Festival in 1964.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>16:59</schedulestarttime>
    <scheduleendtime>18:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>18:17</schedulestarttime>
    <scheduleendtime>20:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>20:29</schedulestarttime>
    <scheduleendtime>20:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>20:35</schedulestarttime>
    <scheduleendtime>20:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>20:46</schedulestarttime>
    <scheduleendtime>20:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>20:49</schedulestarttime>
    <scheduleendtime>20:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>20:55</schedulestarttime>
    <scheduleendtime>21:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>B.B. King - Live in Antibes</programmetitle>
    <programmenumber>1499</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>21:00</schedulestarttime>
    <scheduleendtime>22:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King overflows with feeling, sincerity, virtuosity, bonhomie, fun and enthusiasm, which is a lot for one man.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Trombone Shorty &amp; Orleans Avenue</programmetitle>
    <programmenumber>2580</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>22:14</schedulestarttime>
    <scheduleendtime>23:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Trombone delivers a gig full of soul and rock sounds with a few forays into blues and jazz lands.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>22072023</scheduledate>
    <schedulestarttime>23:26</schedulestarttime>
    <scheduleendtime>01:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Céu - Live at Moods</programmetitle>
    <programmenumber>1161</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Céu</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>01:17</schedulestarttime>
    <scheduleendtime>03:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Psychedelic pop, soul and choro, the Brazilian singer doesn't fit in any box.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>03:00</schedulestarttime>
    <scheduleendtime>04:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hervé Koubi: Odyssey</programmetitle>
    <programmenumber>1914</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Hervé Koubi</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>04:45</schedulestarttime>
    <scheduleendtime>05:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A both subtle and powerful reinterpretation of the famous Homeric tale by renowned choreographer Hervé Koubi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>05:53</schedulestarttime>
    <scheduleendtime>05:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>G. Puccini: Tosca - Simon Rattle</programmetitle>
    <programmenumber>1752</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Sir Simon Rattle</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>05:58</schedulestarttime>
    <scheduleendtime>06:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Tosca, Puccini's most famous opera is not merely a work of art, but also a gripping suspense-packed story.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>06:03</schedulestarttime>
    <scheduleendtime>06:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>06:15</schedulestarttime>
    <scheduleendtime>06:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>06:29</schedulestarttime>
    <scheduleendtime>06:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>06:46</schedulestarttime>
    <scheduleendtime>06:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>06:53</schedulestarttime>
    <scheduleendtime>07:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>07:06</schedulestarttime>
    <scheduleendtime>08:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>08:17</schedulestarttime>
    <scheduleendtime>09:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Liz McComb - Olympia, Paris</programmetitle>
    <programmenumber>228</programmenumber>
    <yearofrelease>1998</yearofrelease>
    <directorname/>
    <castname>Liz McComb</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>09:19</schedulestarttime>
    <scheduleendtime>09:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Between gospel and soul, singer and pianist Liz McComb is joined by three fine-tuned musicians in Paris, 1998.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>09:31</schedulestarttime>
    <scheduleendtime>09:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>09:37</schedulestarttime>
    <scheduleendtime>09:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Seun Kuti &amp; Egypt 80 - Moods</programmetitle>
    <programmenumber>1152</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>09:42</schedulestarttime>
    <scheduleendtime>09:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>They give us sharp, polyrhythmic drums, an array of percussion, and funk guitars that slow-cook the groove.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>09:50</schedulestarttime>
    <scheduleendtime>09:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charlie Parker - Revisited</programmetitle>
    <programmenumber>2615</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>09:55</schedulestarttime>
    <scheduleendtime>11:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dal Sasso's updated arrangements of Charlie Parker's legendary jazz album: Charlie Parker with Strings.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>11:32</schedulestarttime>
    <scheduleendtime>12:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>12:01</schedulestarttime>
    <scheduleendtime>12:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>12:35</schedulestarttime>
    <scheduleendtime>13:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>13:41</schedulestarttime>
    <scheduleendtime>14:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jason Moran "Bandwagon" - Live</programmetitle>
    <programmenumber>74</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Jason Moran, Tarus Mateen</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>14:38</schedulestarttime>
    <scheduleendtime>15:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Major American jazz figure, Jason Moran and his trio find a perfect balance between classicism and modernity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>15:40</schedulestarttime>
    <scheduleendtime>15:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>15:44</schedulestarttime>
    <scheduleendtime>15:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp "In the Mood" - Live</programmetitle>
    <programmenumber>488</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>15:51</schedulestarttime>
    <scheduleendtime>16:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>On the island of Porquerolles in Provence, jazz soaks its feet every summer, here with Captain Archie Shepp.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1587</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:06</schedulestarttime>
    <scheduleendtime>16:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bilal starts his set with "Sirens II," a haunting theme that stands at the crossroads between rock and RnB.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:12</schedulestarttime>
    <scheduleendtime>16:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:14</schedulestarttime>
    <scheduleendtime>16:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:22</schedulestarttime>
    <scheduleendtime>16:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Galliano &amp; Polish Orchestra</programmetitle>
    <programmenumber>1635</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Richard Galliano</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:28</schedulestarttime>
    <scheduleendtime>16:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The repertoire: Aconcagua, concerto for bandoneon by Piazzolla; Madreperla, concerto for accordion by Galliano</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:38</schedulestarttime>
    <scheduleendtime>16:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:48</schedulestarttime>
    <scheduleendtime>16:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:53</schedulestarttime>
    <scheduleendtime>16:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>16:59</schedulestarttime>
    <scheduleendtime>17:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Maceo Parker &amp; Roots Revisited</programmetitle>
    <programmenumber>199</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>Maceo Parker</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>17:29</schedulestarttime>
    <scheduleendtime>18:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>James Brown alumni Maceo Parker, Fred Wesley and Pee Wee Ellis stir up funky jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hugh Masekela - Live</programmetitle>
    <programmenumber>69</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Lee-Roy Sauls, Fana Zulu, Cameron Ward, Hugh Masekela, Francis Manneh Fuster, Randal Skippers</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>18:38</schedulestarttime>
    <scheduleendtime>19:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Five years before his death, South African Hugh Masekela gave a dazzling concert at the Paris Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>19:43</schedulestarttime>
    <scheduleendtime>19:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>19:53</schedulestarttime>
    <scheduleendtime>20:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Orchestre Poly-Rythmo de Cotonou</programmetitle>
    <programmenumber>1187</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:00</schedulestarttime>
    <scheduleendtime>20:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed after the independence of Benin, this band with more than 500 records to their credit is like no other.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:09</schedulestarttime>
    <scheduleendtime>20:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:12</schedulestarttime>
    <scheduleendtime>20:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Girma Bèyènè &amp; Akalé Wubé</programmetitle>
    <programmenumber>1160</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:19</schedulestarttime>
    <scheduleendtime>20:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ethiopian legend Girma Bèyènè's Amharic lyrics are enhanced by French collective Akalé Wubé at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:27</schedulestarttime>
    <scheduleendtime>20:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:31</schedulestarttime>
    <scheduleendtime>20:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:37</schedulestarttime>
    <scheduleendtime>20:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:44</schedulestarttime>
    <scheduleendtime>20:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:48</schedulestarttime>
    <scheduleendtime>20:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Cannonball Adderley Brotherhood</programmetitle>
    <programmenumber>723</programmenumber>
    <yearofrelease>1981</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>20:57</schedulestarttime>
    <scheduleendtime>21:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Don't worry: the Brotherhood are in no way paying a stuffy tribute to Julian "Cannonball" Adderley here. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle> Art Blakey &amp; The Jazz Messengers</programmetitle>
    <programmenumber>1449</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Art Blakey</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>21:53</schedulestarttime>
    <scheduleendtime>22:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The musicians who take part in this concert form one of the best formulas that the Jazz Messengers ever knew.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Coulondre Trio - Michel On My Mind</programmetitle>
    <programmenumber>1922</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Laurent Coulondre</castname>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>22:25</schedulestarttime>
    <scheduleendtime>23:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>French pianist Laurent Coulondre's album Michel On My Mind commemorates the anniversary of Petrucciani's death</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>23072023</scheduledate>
    <schedulestarttime>23:42</schedulestarttime>
    <scheduleendtime>00:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>00:51</schedulestarttime>
    <scheduleendtime>01:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>01:50</schedulestarttime>
    <scheduleendtime>03:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>03:31</schedulestarttime>
    <scheduleendtime>04:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hugh Masekela - Live</programmetitle>
    <programmenumber>69</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Lee-Roy Sauls, Fana Zulu, Cameron Ward, Hugh Masekela, Francis Manneh Fuster, Randal Skippers</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>04:38</schedulestarttime>
    <scheduleendtime>05:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Five years before his death, South African Hugh Masekela gave a dazzling concert at the Paris Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>05:42</schedulestarttime>
    <scheduleendtime>05:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nils Landgren &amp; Bootsy Collins</programmetitle>
    <programmenumber>209</programmenumber>
    <yearofrelease>1998</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>05:53</schedulestarttime>
    <scheduleendtime>06:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Two back to back performances by the Nils Landgren Funk Unit and Bootsy Collins at the Jazzopen in Stuttgart.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:03</schedulestarttime>
    <scheduleendtime>06:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:11</schedulestarttime>
    <scheduleendtime>06:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:15</schedulestarttime>
    <scheduleendtime>06:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Leyla McCalla - Live</programmetitle>
    <programmenumber>996</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Leyla McCalla</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:20</schedulestarttime>
    <scheduleendtime>06:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Without artifice and with total sincerity, McCalla sings with a simplicity that touches our hearts and minds.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:26</schedulestarttime>
    <scheduleendtime>06:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1587</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:30</schedulestarttime>
    <scheduleendtime>06:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bilal starts his set with "Sirens II," a haunting theme that stands at the crossroads between rock and RnB.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Louis Armstrong &amp; his All Stars</programmetitle>
    <programmenumber>248</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Louis Armstrong</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:37</schedulestarttime>
    <scheduleendtime>06:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This footage is a reminder of Satchmo's talent, unique tone and ability to bring out countless subtleties.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Terri Lyne Carrington - Lotos Jazz</programmetitle>
    <programmenumber>586</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Terri Lyne Carrington</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:41</schedulestarttime>
    <scheduleendtime>06:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Aaron Parks, James Genus, Tia Fuller, Nir Felder, Gretchen Parlato and Terri Lyne Carrington live in 2013.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Liz McComb - Olympia, Paris</programmetitle>
    <programmenumber>228</programmenumber>
    <yearofrelease>1998</yearofrelease>
    <directorname/>
    <castname>Liz McComb</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>06:48</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Between gospel and soul, singer and pianist Liz McComb is joined by three fine-tuned musicians in Paris, 1998.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>08:08</schedulestarttime>
    <scheduleendtime>09:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>09:56</schedulestarttime>
    <scheduleendtime>10:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>10:56</schedulestarttime>
    <scheduleendtime>11:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>11:42</schedulestarttime>
    <scheduleendtime>13:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>13:08</schedulestarttime>
    <scheduleendtime>14:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>14:21</schedulestarttime>
    <scheduleendtime>15:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>15:09</schedulestarttime>
    <scheduleendtime>15:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>15:44</schedulestarttime>
    <scheduleendtime>15:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>15:49</schedulestarttime>
    <scheduleendtime>15:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Captain Beefheart – RTBF Archives</programmetitle>
    <programmenumber>706</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Captain Beefheart</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>15:56</schedulestarttime>
    <scheduleendtime>16:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Captain Beefheart embodies blues rock in this 1974 archive, where bell bottoms and long hair are all the rage.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>16:05</schedulestarttime>
    <scheduleendtime>16:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>16:10</schedulestarttime>
    <scheduleendtime>16:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Inner Circle - RTBF Archives 1979</programmetitle>
    <programmenumber>709</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Jacob Miller</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>16:17</schedulestarttime>
    <scheduleendtime>16:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed in Kingston in the 70s, Inner Circle here demonstrates a remarkable tightness and energy.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>16:24</schedulestarttime>
    <scheduleendtime>16:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>16:34</schedulestarttime>
    <scheduleendtime>16:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>16:39</schedulestarttime>
    <scheduleendtime>16:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dhafer Youssef - Jazz à Vienne 2018</programmetitle>
    <programmenumber>634</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Dhafer Youssef</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>16:46</schedulestarttime>
    <scheduleendtime>16:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dhafer Youssef is joined by Matt Brewer, Aron Parks and Ferenc Nemeth in a colourful and virtuosic concert. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>16:58</schedulestarttime>
    <scheduleendtime>17:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>17:39</schedulestarttime>
    <scheduleendtime>18:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>18:36</schedulestarttime>
    <scheduleendtime>19:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>19:37</schedulestarttime>
    <scheduleendtime>19:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>19:43</schedulestarttime>
    <scheduleendtime>19:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>19:50</schedulestarttime>
    <scheduleendtime>19:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>19:55</schedulestarttime>
    <scheduleendtime>20:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nucleus - RTBF</programmetitle>
    <programmenumber>710</programmenumber>
    <yearofrelease>1971</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>20:02</schedulestarttime>
    <scheduleendtime>20:13</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>20:13</schedulestarttime>
    <scheduleendtime>20:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>20:21</schedulestarttime>
    <scheduleendtime>20:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>20:24</schedulestarttime>
    <scheduleendtime>20:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>20:31</schedulestarttime>
    <scheduleendtime>20:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>20:36</schedulestarttime>
    <scheduleendtime>20:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>20:42</schedulestarttime>
    <scheduleendtime>20:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>20:48</schedulestarttime>
    <scheduleendtime>21:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>21:01</schedulestarttime>
    <scheduleendtime>22:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>22:10</schedulestarttime>
    <scheduleendtime>23:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>24072023</scheduledate>
    <schedulestarttime>23:28</schedulestarttime>
    <scheduleendtime>00:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jason Moran "Bandwagon" - Live</programmetitle>
    <programmenumber>74</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Jason Moran, Tarus Mateen</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>00:18</schedulestarttime>
    <scheduleendtime>01:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Major American jazz figure, Jason Moran and his trio find a perfect balance between classicism and modernity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>01:20</schedulestarttime>
    <scheduleendtime>01:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alban Berg: Wozzeck</programmetitle>
    <programmenumber>2434</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Stéphane Degout</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>01:40</schedulestarttime>
    <scheduleendtime>03:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Wozzeck is a story of war and doom, told masterfully by the Opéra de Toulouse in this 2022 production.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>03:28</schedulestarttime>
    <scheduleendtime>05:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>05:08</schedulestarttime>
    <scheduleendtime>06:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jorge Rossy Vibes Quintet - Moods</programmetitle>
    <programmenumber>1590</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Jorge Rossy, Mark Turner, Billy Hart</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>06:15</schedulestarttime>
    <scheduleendtime>06:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With saxist Mark Turner, Jaume Llombart on guitar and a rhythmic duo: bassist Doug Weiss &amp; drummer Billy Hart.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Weber, Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2473</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>06:27</schedulestarttime>
    <scheduleendtime>06:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Isabelle Faust and Kristian Bezuidenhout under the baton of John Eliot Gardiner and London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>06:37</schedulestarttime>
    <scheduleendtime>06:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Terry Callier - Live in Berlin</programmetitle>
    <programmenumber>120</programmenumber>
    <yearofrelease>2005</yearofrelease>
    <directorname/>
    <castname>Terry Callier</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>06:41</schedulestarttime>
    <scheduleendtime>06:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Witness one of Terry Callier's few on-stage recordings in a Berlin club in 2005.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Count Basie - RTBF Archives 1961</programmetitle>
    <programmenumber>235</programmenumber>
    <yearofrelease>1961</yearofrelease>
    <directorname/>
    <castname>Count Basie</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>06:49</schedulestarttime>
    <scheduleendtime>06:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1961, Count Basie and his orchestra played a classic jazz repertoire on Belgian television.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Verbier Festival 2011: Bryn Terfel</programmetitle>
    <programmenumber>1354</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Bryn Terfel</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>06:53</schedulestarttime>
    <scheduleendtime>07:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Verbier Festival Bryn Terfel recites a whole anthology of lieder (songs) by Schummann and Schubert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>07:15</schedulestarttime>
    <scheduleendtime>08:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hindi Zahra &amp; Fatoumata Diawara</programmetitle>
    <programmenumber>740</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Fatoumata Diawara</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>08:01</schedulestarttime>
    <scheduleendtime>09:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The duo mix Bambara with Amazigh &amp; English, folk with jazz, soul with blues &amp; reggae at Banlieues Bleues fest.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:06</schedulestarttime>
    <scheduleendtime>09:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:12</schedulestarttime>
    <scheduleendtime>09:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Aretha Franklin - Live in Paris</programmetitle>
    <programmenumber>204</programmenumber>
    <yearofrelease>1977</yearofrelease>
    <directorname/>
    <castname>Aretha Franklin</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:15</schedulestarttime>
    <scheduleendtime>09:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Aretha Franklin sets the Paris Palais des Sports on fire in 1977.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Rymden - Tourcoing Jazz Festival</programmetitle>
    <programmenumber>1638</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:19</schedulestarttime>
    <scheduleendtime>09:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Double-bassist Dan Berglund and drummer Magnus Oström perform as their new trio with Bugge Wesseltof.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:29</schedulestarttime>
    <scheduleendtime>09:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:34</schedulestarttime>
    <scheduleendtime>09:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:38</schedulestarttime>
    <scheduleendtime>09:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:45</schedulestarttime>
    <scheduleendtime>09:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>09:52</schedulestarttime>
    <scheduleendtime>10:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>10:01</schedulestarttime>
    <scheduleendtime>11:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>11:02</schedulestarttime>
    <scheduleendtime>13:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>13:16</schedulestarttime>
    <scheduleendtime>13:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Trombone Shorty &amp; Orleans Avenue</programmetitle>
    <programmenumber>2580</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>13:33</schedulestarttime>
    <scheduleendtime>14:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Trombone delivers a gig full of soul and rock sounds with a few forays into blues and jazz lands.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>14:46</schedulestarttime>
    <scheduleendtime>15:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>15:31</schedulestarttime>
    <scheduleendtime>16:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>16:48</schedulestarttime>
    <scheduleendtime>16:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hannah Williams &amp; The Affirmations</programmetitle>
    <programmenumber>1583</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Hannah Williams</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>16:52</schedulestarttime>
    <scheduleendtime>16:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Born in Bristol, this magnetic band presents the volcanic and powerful Hannah Williams as a lead singer.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>16:58</schedulestarttime>
    <scheduleendtime>17:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>17:45</schedulestarttime>
    <scheduleendtime>18:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>18:14</schedulestarttime>
    <scheduleendtime>19:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>19:15</schedulestarttime>
    <scheduleendtime>19:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Girma Bèyènè &amp; Akalé Wubé</programmetitle>
    <programmenumber>1160</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>19:21</schedulestarttime>
    <scheduleendtime>19:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ethiopian legend Girma Bèyènè's Amharic lyrics are enhanced by French collective Akalé Wubé at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>19:31</schedulestarttime>
    <scheduleendtime>19:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>19:35</schedulestarttime>
    <scheduleendtime>19:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>19:43</schedulestarttime>
    <scheduleendtime>19:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>19:53</schedulestarttime>
    <scheduleendtime>19:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>19:58</schedulestarttime>
    <scheduleendtime>20:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>20:05</schedulestarttime>
    <scheduleendtime>20:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>20:15</schedulestarttime>
    <scheduleendtime>20:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Brian Auger's Oblivion Express</programmetitle>
    <programmenumber>705</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Brian Auger</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>20:18</schedulestarttime>
    <scheduleendtime>20:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The keyboardist Brian Auger shows all his talent for groove and virtuoso solos on the Fender Rhodes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Mohamed Abozekry - Live at Moods</programmetitle>
    <programmenumber>1154</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>20:27</schedulestarttime>
    <scheduleendtime>20:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mohamed Abozekry alongside Lofty Abaza, Hany Bedair, Wassim Halal, and Mohammed Farag for this 2017 concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>20:39</schedulestarttime>
    <scheduleendtime>20:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Orchestre Poly-Rythmo de Cotonou</programmetitle>
    <programmenumber>1187</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>20:44</schedulestarttime>
    <scheduleendtime>20:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed after the independence of Benin, this band with more than 500 records to their credit is like no other.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Captain Beefheart – RTBF Archives</programmetitle>
    <programmenumber>706</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Captain Beefheart</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>20:51</schedulestarttime>
    <scheduleendtime>21:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Captain Beefheart embodies blues rock in this 1974 archive, where bell bottoms and long hair are all the rage.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>21:02</schedulestarttime>
    <scheduleendtime>21:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>21:37</schedulestarttime>
    <scheduleendtime>22:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>22:07</schedulestarttime>
    <scheduleendtime>23:13</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Tolliver - Live</programmetitle>
    <programmenumber>261</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Charles Tolliver</castname>
    <scheduledate>25072023</scheduledate>
    <schedulestarttime>23:13</schedulestarttime>
    <scheduleendtime>00:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Live at the Banlieue Blues Festival, Strata-East record label's co-founder plays with his quintet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>00:17</schedulestarttime>
    <scheduleendtime>01:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bloody Daughter - Martha Argerich</programmetitle>
    <programmenumber>1749</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname>Martha Argerich</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>01:45</schedulestarttime>
    <scheduleendtime>03:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This documentary invites us into the life of Martha Argerich as told through the eyes of her daughter.  </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vasily Petrenko: Dvořák - Beethoven</programmetitle>
    <programmenumber>1758</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vasily Petrenko</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>03:40</schedulestarttime>
    <scheduleendtime>06:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Israel Philharmonic Orchestra under the direction of Vasily Petrenko interpret Dvořák and Beethoven.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>06:21</schedulestarttime>
    <scheduleendtime>06:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez</programmetitle>
    <programmenumber>1766</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>06:27</schedulestarttime>
    <scheduleendtime>06:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez with his bewitching voice is accompanied by the formidable pianist Vincenzo Scalera. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>06:32</schedulestarttime>
    <scheduleendtime>06:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Weber, Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2473</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>06:48</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Isabelle Faust and Kristian Bezuidenhout under the baton of John Eliot Gardiner and London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jason Moran "Bandwagon" - Live</programmetitle>
    <programmenumber>74</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Jason Moran, Tarus Mateen</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>08:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Major American jazz figure, Jason Moran and his trio find a perfect balance between classicism and modernity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hugh Masekela - Live</programmetitle>
    <programmenumber>69</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Lee-Roy Sauls, Fana Zulu, Cameron Ward, Hugh Masekela, Francis Manneh Fuster, Randal Skippers</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>08:01</schedulestarttime>
    <scheduleendtime>09:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Five years before his death, South African Hugh Masekela gave a dazzling concert at the Paris Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>09:04</schedulestarttime>
    <scheduleendtime>09:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>09:07</schedulestarttime>
    <scheduleendtime>09:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>09:18</schedulestarttime>
    <scheduleendtime>09:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Captain Beefheart – RTBF Archives</programmetitle>
    <programmenumber>706</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Captain Beefheart</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>09:35</schedulestarttime>
    <scheduleendtime>09:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Captain Beefheart embodies blues rock in this 1974 archive, where bell bottoms and long hair are all the rage.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>09:46</schedulestarttime>
    <scheduleendtime>09:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>09:52</schedulestarttime>
    <scheduleendtime>10:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>10:00</schedulestarttime>
    <scheduleendtime>10:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Maceo Parker &amp; Roots Revisited</programmetitle>
    <programmenumber>199</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>Maceo Parker</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>10:57</schedulestarttime>
    <scheduleendtime>12:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>James Brown alumni Maceo Parker, Fred Wesley and Pee Wee Ellis stir up funky jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bobby McFerrin - Live in 1988</programmetitle>
    <programmenumber>926</programmenumber>
    <yearofrelease>1988</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>12:07</schedulestarttime>
    <scheduleendtime>12:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Different arpeggios and harmonies, percussive chest beating and irresistible smoothness from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Coulondre Trio - Michel On My Mind</programmetitle>
    <programmenumber>1922</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Laurent Coulondre</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>12:43</schedulestarttime>
    <scheduleendtime>14:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>French pianist Laurent Coulondre's album Michel On My Mind commemorates the anniversary of Petrucciani's death</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>14:01</schedulestarttime>
    <scheduleendtime>16:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>16:16</schedulestarttime>
    <scheduleendtime>16:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>16:18</schedulestarttime>
    <scheduleendtime>16:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>16:29</schedulestarttime>
    <scheduleendtime>16:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>16:34</schedulestarttime>
    <scheduleendtime>16:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>16:39</schedulestarttime>
    <scheduleendtime>16:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Antibalas - Live at Moods</programmetitle>
    <programmenumber>1200</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>16:49</schedulestarttime>
    <scheduleendtime>17:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Antibalas gives us afrobeat and mix in modern funk, the avant-garde, dub and electronic influences.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle> Art Blakey &amp; The Jazz Messengers</programmetitle>
    <programmenumber>1449</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Art Blakey</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>17:00</schedulestarttime>
    <scheduleendtime>17:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The musicians who take part in this concert form one of the best formulas that the Jazz Messengers ever knew.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>17:32</schedulestarttime>
    <scheduleendtime>18:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>18:19</schedulestarttime>
    <scheduleendtime>20:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>20:01</schedulestarttime>
    <scheduleendtime>20:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Orchestre Poly-Rythmo de Cotonou</programmetitle>
    <programmenumber>1187</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>20:08</schedulestarttime>
    <scheduleendtime>20:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed after the independence of Benin, this band with more than 500 records to their credit is like no other.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>20:17</schedulestarttime>
    <scheduleendtime>20:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>20:23</schedulestarttime>
    <scheduleendtime>20:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>20:51</schedulestarttime>
    <scheduleendtime>21:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>21:00</schedulestarttime>
    <scheduleendtime>21:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>21:51</schedulestarttime>
    <scheduleendtime>22:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>22:30</schedulestarttime>
    <scheduleendtime>23:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>26072023</scheduledate>
    <schedulestarttime>23:38</schedulestarttime>
    <scheduleendtime>00:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>00:12</schedulestarttime>
    <scheduleendtime>00:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>M.Romboy &amp; T.Halperin play Purcell</programmetitle>
    <programmenumber>1602</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Marc Romboy, Tamar Halperin</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>00:30</schedulestarttime>
    <scheduleendtime>01:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This is the source material for a modern-day homage to Purcell featuring Marc Romboy and Tamar Halperin.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alban Berg: Wozzeck</programmetitle>
    <programmenumber>2434</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Stéphane Degout</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>01:02</schedulestarttime>
    <scheduleendtime>02:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Wozzeck is a story of war and doom, told masterfully by the Opéra de Toulouse in this 2022 production.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Spanish Harlem Orchestra</programmetitle>
    <programmenumber>1155</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>02:50</schedulestarttime>
    <scheduleendtime>04:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Led by salsa giant Oscar Hernandez, this band has not finished spreading salsa and good vibes around the world</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>04:33</schedulestarttime>
    <scheduleendtime>05:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>05:41</schedulestarttime>
    <scheduleendtime>05:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>05:52</schedulestarttime>
    <scheduleendtime>05:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>05:58</schedulestarttime>
    <scheduleendtime>06:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zubin Mehta - Khatia Buniatishvili</programmetitle>
    <programmenumber>1350</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Khatia Buniatishvili, Zubin Mehta</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>06:11</schedulestarttime>
    <scheduleendtime>06:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Mehta, whilst conductor of the Israel Philharmonic Orchestra, gave this concert with pianist Buniatishvili.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>06:22</schedulestarttime>
    <scheduleendtime>06:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>06:32</schedulestarttime>
    <scheduleendtime>06:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez and Friends</programmetitle>
    <programmenumber>1398</programmenumber>
    <yearofrelease>2015</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>06:49</schedulestarttime>
    <scheduleendtime>06:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez on the stage of the Vienna Opera House for a charity gala for his foundation.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Zandile Mzazi - South Africa</programmetitle>
    <programmenumber>2420</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Zandile Mzazi</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>06:52</schedulestarttime>
    <scheduleendtime>07:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>A concert tribute to Sibongile Khumalo, South Africa’s former First Lady of Song and great influence to Mzazi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Tolliver - Live</programmetitle>
    <programmenumber>261</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Charles Tolliver</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>07:12</schedulestarttime>
    <scheduleendtime>08:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Live at the Banlieue Blues Festival, Strata-East record label's co-founder plays with his quintet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Tomatito y Grupo - Live at Moods</programmetitle>
    <programmenumber>1162</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>08:02</schedulestarttime>
    <scheduleendtime>09:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The "Disciple of Paco de Lucia" delivers his most beautiful compositions on a gypsy flamenco repertoire.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Toumani Diabaté's Orchestra</programmetitle>
    <programmenumber>129</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Toumani Diabaté</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>09:52</schedulestarttime>
    <scheduleendtime>09:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the Banlieues Bleues festival, Diabaté's Symmetric Orchestra celebrates peace, hope and pan-African unity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>09:56</schedulestarttime>
    <scheduleendtime>10:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>10:01</schedulestarttime>
    <scheduleendtime>11:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1178</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>11:19</schedulestarttime>
    <scheduleendtime>13:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sometimes sensual, sometimes grungy, his groove tinged with a funk bass highlights his trademark falcetto.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>W. Marsalis: Blood On The Fields</programmetitle>
    <programmenumber>2552</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>13:17</schedulestarttime>
    <scheduleendtime>14:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1995, Marsalis rehearses what later on became the first jazz epic oratorio awarded with The Pulitzer Prize.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Makaya McCraven - Jazz à Sète</programmetitle>
    <programmenumber>962</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>14:22</schedulestarttime>
    <scheduleendtime>15:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Beat Scientist, drummer and producer, McCraven blurs the lines between jazz, electronic and hip-hop.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Maceo Parker &amp; Roots Revisited</programmetitle>
    <programmenumber>199</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>Maceo Parker</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>15:55</schedulestarttime>
    <scheduleendtime>17:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>James Brown alumni Maceo Parker, Fred Wesley and Pee Wee Ellis stir up funky jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Lloyd Quartet - RTBF</programmetitle>
    <programmenumber>242</programmenumber>
    <yearofrelease>1966</yearofrelease>
    <directorname/>
    <castname>Charles Lloyd</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>17:04</schedulestarttime>
    <scheduleendtime>17:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded for the RTBF in 1966,  this concert by the Charles Lloyd Quartet was destined to go down in history.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>17:41</schedulestarttime>
    <scheduleendtime>18:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>18:26</schedulestarttime>
    <scheduleendtime>20:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:15</schedulestarttime>
    <scheduleendtime>20:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:22</schedulestarttime>
    <scheduleendtime>20:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:27</schedulestarttime>
    <scheduleendtime>20:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:32</schedulestarttime>
    <scheduleendtime>20:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:35</schedulestarttime>
    <scheduleendtime>20:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:39</schedulestarttime>
    <scheduleendtime>20:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:49</schedulestarttime>
    <scheduleendtime>20:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:51</schedulestarttime>
    <scheduleendtime>20:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>20:58</schedulestarttime>
    <scheduleendtime>21:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jimmy McGriff Trio - Live in 1965</programmetitle>
    <programmenumber>245</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Jimmy McGriff</castname>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>21:56</schedulestarttime>
    <scheduleendtime>22:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At the helm of a classic organ trio, with guitar and drums support, McGriff dives deep into an ocean of blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bokanté - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2576</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>22:37</schedulestarttime>
    <scheduleendtime>23:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed by Michael League, the group combines West African and Caribbean grooves with blues. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>27072023</scheduledate>
    <schedulestarttime>23:51</schedulestarttime>
    <scheduleendtime>01:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bobby McFerrin - Live in 1988</programmetitle>
    <programmenumber>926</programmenumber>
    <yearofrelease>1988</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>01:08</schedulestarttime>
    <scheduleendtime>01:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Different arpeggios and harmonies, percussive chest beating and irresistible smoothness from start to finish.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>01:44</schedulestarttime>
    <scheduleendtime>02:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bloody Daughter - Martha Argerich</programmetitle>
    <programmenumber>1749</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname>Martha Argerich</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>02:51</schedulestarttime>
    <scheduleendtime>04:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This documentary invites us into the life of Martha Argerich as told through the eyes of her daughter.  </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marko Marković Brass Band - Live</programmetitle>
    <programmenumber>1175</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Marko Markovic</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>04:45</schedulestarttime>
    <scheduleendtime>06:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> His great-grandfather used to play for the king of Serbia. Here the Marko Marković Brass Band plays at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Maceo Parker &amp; Roots Revisited</programmetitle>
    <programmenumber>199</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>Maceo Parker</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>06:34</schedulestarttime>
    <scheduleendtime>06:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>James Brown alumni Maceo Parker, Fred Wesley and Pee Wee Ellis stir up funky jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>06:49</schedulestarttime>
    <scheduleendtime>06:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>06:52</schedulestarttime>
    <scheduleendtime>07:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>07:16</schedulestarttime>
    <scheduleendtime>07:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>07:34</schedulestarttime>
    <scheduleendtime>08:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Louis Armstrong &amp; his All Stars</programmetitle>
    <programmenumber>248</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Louis Armstrong</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>08:35</schedulestarttime>
    <scheduleendtime>08:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This footage is a reminder of Satchmo's talent, unique tone and ability to bring out countless subtleties.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>08:39</schedulestarttime>
    <scheduleendtime>08:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>08:46</schedulestarttime>
    <scheduleendtime>08:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>08:52</schedulestarttime>
    <scheduleendtime>09:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vincent Peirani "Living Being"</programmetitle>
    <programmenumber>652</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vincent Peirani</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>09:00</schedulestarttime>
    <scheduleendtime>09:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>From Led Zeppelin to Purcell covers, this quintet is a real chamber rock music orchestra. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Earl Hines &amp; His All Stars – RTBF</programmetitle>
    <programmenumber>716</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Earl Hines</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>09:04</schedulestarttime>
    <scheduleendtime>09:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>09:06</schedulestarttime>
    <scheduleendtime>09:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>09:15</schedulestarttime>
    <scheduleendtime>09:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>09:32</schedulestarttime>
    <scheduleendtime>09:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Brian Auger's Oblivion Express</programmetitle>
    <programmenumber>705</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Brian Auger</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>09:36</schedulestarttime>
    <scheduleendtime>09:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The keyboardist Brian Auger shows all his talent for groove and virtuoso solos on the Fender Rhodes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>09:44</schedulestarttime>
    <scheduleendtime>09:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Rymden - Tourcoing Jazz Festival</programmetitle>
    <programmenumber>1638</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>09:48</schedulestarttime>
    <scheduleendtime>10:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Double-bassist Dan Berglund and drummer Magnus Oström perform as their new trio with Bugge Wesseltof.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>10:00</schedulestarttime>
    <scheduleendtime>11:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>11:09</schedulestarttime>
    <scheduleendtime>12:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>12:07</schedulestarttime>
    <scheduleendtime>13:07</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>13:07</schedulestarttime>
    <scheduleendtime>13:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1178</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>13:57</schedulestarttime>
    <scheduleendtime>15:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sometimes sensual, sometimes grungy, his groove tinged with a funk bass highlights his trademark falcetto.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>15:55</schedulestarttime>
    <scheduleendtime>16:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>16:56</schedulestarttime>
    <scheduleendtime>18:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>18:14</schedulestarttime>
    <scheduleendtime>20:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chris Potter - Circuits - Vaulx</programmetitle>
    <programmenumber>660</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Chris Potter</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>20:29</schedulestarttime>
    <scheduleendtime>20:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To promote his latest album, Circuits, Chris Potter called on Craig Taborn, Tim Lefebvre, and Justin Brown.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>20:44</schedulestarttime>
    <scheduleendtime>20:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>20:52</schedulestarttime>
    <scheduleendtime>20:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lucía De Carvalho - Live in France</programmetitle>
    <programmenumber>2600</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>20:58</schedulestarttime>
    <scheduleendtime>21:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>At Nancy Jazz Pulsations Fest, the Angolan singer performs tracks from her latest album, the brilliant Pwanga.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>21:59</schedulestarttime>
    <scheduleendtime>22:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Trombone Shorty &amp; Orleans Avenue</programmetitle>
    <programmenumber>2580</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>28072023</scheduledate>
    <schedulestarttime>22:46</schedulestarttime>
    <scheduleendtime>00:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Trombone delivers a gig full of soul and rock sounds with a few forays into blues and jazz lands.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>00:01</schedulestarttime>
    <scheduleendtime>01:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>W. Marsalis: Blood On The Fields</programmetitle>
    <programmenumber>2552</programmenumber>
    <yearofrelease>1996</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>01:52</schedulestarttime>
    <scheduleendtime>02:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1995, Marsalis rehearses what later on became the first jazz epic oratorio awarded with The Pulitzer Prize.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>02:56</schedulestarttime>
    <scheduleendtime>04:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>M.Romboy &amp; T.Halperin play Purcell</programmetitle>
    <programmenumber>1602</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Marc Romboy, Tamar Halperin</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>04:39</schedulestarttime>
    <scheduleendtime>05:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This is the source material for a modern-day homage to Purcell featuring Marc Romboy and Tamar Halperin.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hindi Zahra &amp; Fatoumata Diawara</programmetitle>
    <programmenumber>740</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Fatoumata Diawara</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>05:10</schedulestarttime>
    <scheduleendtime>06:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The duo mix Bambara with Amazigh &amp; English, folk with jazz, soul with blues &amp; reggae at Banlieues Bleues fest.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>06:14</schedulestarttime>
    <scheduleendtime>06:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>06:19</schedulestarttime>
    <scheduleendtime>06:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Siècles - Festival de Prague</programmetitle>
    <programmenumber>2433</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname>Bertrand Chamayou</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>06:29</schedulestarttime>
    <scheduleendtime>06:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Siècles &amp; Bertrand Chamayou perform French repertoire at the Prague Spring International Music Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez</programmetitle>
    <programmenumber>1766</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>06:45</schedulestarttime>
    <scheduleendtime>06:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez with his bewitching voice is accompanied by the formidable pianist Vincenzo Scalera. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>06:53</schedulestarttime>
    <scheduleendtime>07:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>07:06</schedulestarttime>
    <scheduleendtime>08:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>08:17</schedulestarttime>
    <scheduleendtime>09:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>09:19</schedulestarttime>
    <scheduleendtime>09:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Louis Armstrong &amp; his All Stars</programmetitle>
    <programmenumber>248</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Louis Armstrong</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>09:25</schedulestarttime>
    <scheduleendtime>09:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This footage is a reminder of Satchmo's talent, unique tone and ability to bring out countless subtleties.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>09:31</schedulestarttime>
    <scheduleendtime>09:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>09:38</schedulestarttime>
    <scheduleendtime>09:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>09:43</schedulestarttime>
    <scheduleendtime>09:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Lee Hooker - Live in Paris</programmetitle>
    <programmenumber>1443</programmenumber>
    <yearofrelease>1970</yearofrelease>
    <directorname/>
    <castname>John Lee Hooker</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>09:58</schedulestarttime>
    <scheduleendtime>10:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Hooker's guitar play synthesises the rusticity of delta blues with the electricity and pulse of the city.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>10:33</schedulestarttime>
    <scheduleendtime>11:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>11:02</schedulestarttime>
    <scheduleendtime>11:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>11:36</schedulestarttime>
    <scheduleendtime>12:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>12:42</schedulestarttime>
    <scheduleendtime>13:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jason Moran "Bandwagon" - Live</programmetitle>
    <programmenumber>74</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Jason Moran, Tarus Mateen</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>13:39</schedulestarttime>
    <scheduleendtime>14:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Major American jazz figure, Jason Moran and his trio find a perfect balance between classicism and modernity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>14:40</schedulestarttime>
    <scheduleendtime>14:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1587</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>14:49</schedulestarttime>
    <scheduleendtime>14:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bilal starts his set with "Sirens II," a haunting theme that stands at the crossroads between rock and RnB.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>14:57</schedulestarttime>
    <scheduleendtime>15:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:06</schedulestarttime>
    <scheduleendtime>15:10</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dhafer Youssef - Jazz à Vienne 2018</programmetitle>
    <programmenumber>634</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Dhafer Youssef</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:10</schedulestarttime>
    <scheduleendtime>15:19</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dhafer Youssef is joined by Matt Brewer, Aron Parks and Ferenc Nemeth in a colourful and virtuosic concert. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:19</schedulestarttime>
    <scheduleendtime>15:25</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:25</schedulestarttime>
    <scheduleendtime>15:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dionne Warwick - RTBF Archives 1964</programmetitle>
    <programmenumber>61</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Dionne Warwick</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:36</schedulestarttime>
    <scheduleendtime>15:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An exemplar of both pop and R&amp;B, Warwick had an incredibly soulful sound that endeared her to music lovers.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Gallagher - Marquee Club, London</programmetitle>
    <programmenumber>713</programmenumber>
    <yearofrelease>1973</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:40</schedulestarttime>
    <scheduleendtime>15:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This concert was recorded at the London Marquee Club in 1973, Gallagher was on a world tour at the age of 25.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:44</schedulestarttime>
    <scheduleendtime>15:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live in 1962</programmetitle>
    <programmenumber>238</programmenumber>
    <yearofrelease>1962</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:51</schedulestarttime>
    <scheduleendtime>15:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1/>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>15:54</schedulestarttime>
    <scheduleendtime>16:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:04</schedulestarttime>
    <scheduleendtime>16:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:11</schedulestarttime>
    <scheduleendtime>16:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:16</schedulestarttime>
    <scheduleendtime>16:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:27</schedulestarttime>
    <scheduleendtime>16:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:30</schedulestarttime>
    <scheduleendtime>16:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:37</schedulestarttime>
    <scheduleendtime>16:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vincent Peirani "Living Being"</programmetitle>
    <programmenumber>652</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vincent Peirani</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:44</schedulestarttime>
    <scheduleendtime>16:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>From Led Zeppelin to Purcell covers, this quintet is a real chamber rock music orchestra. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Melingo w/ Juliette &amp; V. Capossela</programmetitle>
    <programmenumber>548</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Daniel Melingo</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:50</schedulestarttime>
    <scheduleendtime>16:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Welcome to Melingo's surrealist cabaret, which tells the poetry of the shallows, of love &amp; vagabond pathways. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>16:53</schedulestarttime>
    <scheduleendtime>17:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>17:00</schedulestarttime>
    <scheduleendtime>17:30</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Maceo Parker &amp; Roots Revisited</programmetitle>
    <programmenumber>199</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>Maceo Parker</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>17:30</schedulestarttime>
    <scheduleendtime>18:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>James Brown alumni Maceo Parker, Fred Wesley and Pee Wee Ellis stir up funky jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hugh Masekela - Live</programmetitle>
    <programmenumber>69</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Lee-Roy Sauls, Fana Zulu, Cameron Ward, Hugh Masekela, Francis Manneh Fuster, Randal Skippers</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>18:40</schedulestarttime>
    <scheduleendtime>19:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Five years before his death, South African Hugh Masekela gave a dazzling concert at the Paris Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chris Potter - Circuits - Vaulx</programmetitle>
    <programmenumber>660</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Chris Potter</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>19:43</schedulestarttime>
    <scheduleendtime>19:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To promote his latest album, Circuits, Chris Potter called on Craig Taborn, Tim Lefebvre, and Justin Brown.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>19:58</schedulestarttime>
    <scheduleendtime>20:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:08</schedulestarttime>
    <scheduleendtime>20:11</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:11</schedulestarttime>
    <scheduleendtime>20:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:23</schedulestarttime>
    <scheduleendtime>20:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Galliano &amp; Polish Orchestra</programmetitle>
    <programmenumber>1635</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Richard Galliano</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:28</schedulestarttime>
    <scheduleendtime>20:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The repertoire: Aconcagua, concerto for bandoneon by Piazzolla; Madreperla, concerto for accordion by Galliano</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Inner Circle - RTBF Archives 1979</programmetitle>
    <programmenumber>709</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Jacob Miller</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:37</schedulestarttime>
    <scheduleendtime>20:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Formed in Kingston in the 70s, Inner Circle here demonstrates a remarkable tightness and energy.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:42</schedulestarttime>
    <scheduleendtime>20:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:47</schedulestarttime>
    <scheduleendtime>20:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:50</schedulestarttime>
    <scheduleendtime>20:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vaudou Game - Blues sur Seine</programmetitle>
    <programmenumber>2383</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Peter Solo</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>20:59</schedulestarttime>
    <scheduleendtime>21:56</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Peter Solo along with his band Vaudou Game treats Théâtre de la Nacelle to a set of Afro-pop/rhythm &amp; blues.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle> Art Blakey &amp; The Jazz Messengers</programmetitle>
    <programmenumber>1449</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Art Blakey</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>21:56</schedulestarttime>
    <scheduleendtime>22:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The musicians who take part in this concert form one of the best formulas that the Jazz Messengers ever knew.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Coulondre Trio - Michel On My Mind</programmetitle>
    <programmenumber>1922</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Laurent Coulondre</castname>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>22:28</schedulestarttime>
    <scheduleendtime>23:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>French pianist Laurent Coulondre's album Michel On My Mind commemorates the anniversary of Petrucciani's death</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ron Carter - Jazz à Vienne Festival</programmetitle>
    <programmenumber>2585</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>29072023</scheduledate>
    <schedulestarttime>23:45</schedulestarttime>
    <scheduleendtime>00:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Filmed in 2018, Ron Carter is one of the last true masters who participated at the very top of post-war jazz.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Archie Shepp: Gnawa Fire Music</programmetitle>
    <programmenumber>282</programmenumber>
    <yearofrelease>2011</yearofrelease>
    <directorname/>
    <castname>Archie Shepp</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>00:54</schedulestarttime>
    <scheduleendtime>01:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Alongside the best names in Gnawa music stands Shepp, who restlessly denounced injustices against black people</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>01:55</schedulestarttime>
    <scheduleendtime>03:35</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>03:35</schedulestarttime>
    <scheduleendtime>04:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hugh Masekela - Live</programmetitle>
    <programmenumber>69</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>Lee-Roy Sauls, Fana Zulu, Cameron Ward, Hugh Masekela, Francis Manneh Fuster, Randal Skippers</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>04:43</schedulestarttime>
    <scheduleendtime>05:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Five years before his death, South African Hugh Masekela gave a dazzling concert at the Paris Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The New World of Bel Canto</programmetitle>
    <programmenumber>2375</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname>Lawrence Brownlee</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>05:47</schedulestarttime>
    <scheduleendtime>05:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>American tenor and bel canto specialist Lawrence Brownlee bridges the old and new worlds in this bold program.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>05:58</schedulestarttime>
    <scheduleendtime>06:05</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Berlioz: Damnation of Faust</programmetitle>
    <programmenumber>2471</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>06:05</schedulestarttime>
    <scheduleendtime>06:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Goethe's major piece "Faust", transcribed in music by Berlioz, interpreted by London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>06:12</schedulestarttime>
    <scheduleendtime>06:22</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>06:22</schedulestarttime>
    <scheduleendtime>06:32</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>06:32</schedulestarttime>
    <scheduleendtime>06:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thelonious Monk Quartet - Part 1</programmetitle>
    <programmenumber>240</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Thelonious Monk</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>06:45</schedulestarttime>
    <scheduleendtime>06:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>It was a different era. One where they made records like crazy without thinking about the intended audience. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Qwest TV Original Sessions 2022</programmetitle>
    <programmenumber>2542</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>06:52</schedulestarttime>
    <scheduleendtime>07:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Find Yung Mavu, Bothlane, Stace and Nikitch &amp; Kuna Maze on Qwest TV's acoustic original production.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Avishai Cohen</programmetitle>
    <programmenumber>2583</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>07:00</schedulestarttime>
    <scheduleendtime>08:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The doublebass virtuoso plays the Jazz à Vienne Fest alongside pianist Elchin Shirinov &amp; drummer Roni Kaspi.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dionne Warwick - RTBF Archives 1964</programmetitle>
    <programmenumber>61</programmenumber>
    <yearofrelease>1964</yearofrelease>
    <directorname/>
    <castname>Dionne Warwick</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>08:52</schedulestarttime>
    <scheduleendtime>08:54</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>An exemplar of both pop and R&amp;B, Warwick had an incredibly soulful sound that endeared her to music lovers.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>08:54</schedulestarttime>
    <scheduleendtime>09:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>09:01</schedulestarttime>
    <scheduleendtime>09:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>09:04</schedulestarttime>
    <scheduleendtime>09:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Galliano &amp; Polish Orchestra</programmetitle>
    <programmenumber>1635</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Richard Galliano</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>09:27</schedulestarttime>
    <scheduleendtime>09:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The repertoire: Aconcagua, concerto for bandoneon by Piazzolla; Madreperla, concerto for accordion by Galliano</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>09:33</schedulestarttime>
    <scheduleendtime>09:45</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>09:45</schedulestarttime>
    <scheduleendtime>09:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ulf Wakenius: Jazz à Junas Festival</programmetitle>
    <programmenumber>596</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Ulf Wakenius</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>09:48</schedulestarttime>
    <scheduleendtime>09:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With Vincent Peirani and Simon Tailleu, this concert is infused with Swedish folk and global music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Shai Maestro</programmetitle>
    <programmenumber>2608</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>09:57</schedulestarttime>
    <scheduleendtime>10:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>To mark the release of his album Human, the quartet deliver a bewitching concert in Paris, 2021.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>10:47</schedulestarttime>
    <scheduleendtime>11:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>11:33</schedulestarttime>
    <scheduleendtime>11:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chlorine Free ft Soweto Kinch &amp; Nya</programmetitle>
    <programmenumber>618</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>11:53</schedulestarttime>
    <scheduleendtime>13:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Chlorine Free presents their relaxed groove onstage at Like A Jazz Machine in Luxembourg.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>13:01</schedulestarttime>
    <scheduleendtime>13:29</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Tolliver - Live</programmetitle>
    <programmenumber>261</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Charles Tolliver</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>13:29</schedulestarttime>
    <scheduleendtime>14:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Live at the Banlieue Blues Festival, Strata-East record label's co-founder plays with his quintet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>14:31</schedulestarttime>
    <scheduleendtime>14:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nucleus - RTBF</programmetitle>
    <programmenumber>710</programmenumber>
    <yearofrelease>1971</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>14:39</schedulestarttime>
    <scheduleendtime>14:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>14:50</schedulestarttime>
    <scheduleendtime>15:00</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>15:00</schedulestarttime>
    <scheduleendtime>15:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vincent Peirani "Living Being"</programmetitle>
    <programmenumber>652</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vincent Peirani</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>15:06</schedulestarttime>
    <scheduleendtime>15:12</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>From Led Zeppelin to Purcell covers, this quintet is a real chamber rock music orchestra. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>15:12</schedulestarttime>
    <scheduleendtime>15:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>15:33</schedulestarttime>
    <scheduleendtime>15:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>15:42</schedulestarttime>
    <scheduleendtime>15:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>15:51</schedulestarttime>
    <scheduleendtime>15:57</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Specials - Live in 1979</programmetitle>
    <programmenumber>714</programmenumber>
    <yearofrelease>1979</yearofrelease>
    <directorname/>
    <castname>Terry Hall</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>15:57</schedulestarttime>
    <scheduleendtime>16:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>All their hits are there with punk beats, rock riffs, flamboyant brass, reggae pulse and leaping musicians</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>16:02</schedulestarttime>
    <scheduleendtime>16:16</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>16:16</schedulestarttime>
    <scheduleendtime>16:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>16:20</schedulestarttime>
    <scheduleendtime>16:38</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>16:38</schedulestarttime>
    <scheduleendtime>16:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Yemen Blues - Live at Moods</programmetitle>
    <programmenumber>1586</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>16:42</schedulestarttime>
    <scheduleendtime>16:51</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Yemen Blues singer combines family roots, and especially Yemeni culture, with rock, blues and even rap.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Dhafer Youssef - Jazz à Vienne 2018</programmetitle>
    <programmenumber>634</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Dhafer Youssef</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>16:51</schedulestarttime>
    <scheduleendtime>17:02</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dhafer Youssef is joined by Matt Brewer, Aron Parks and Ferenc Nemeth in a colourful and virtuosic concert. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Mingus &amp; Eric Dolphy - RTBF</programmetitle>
    <programmenumber>255</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Charles Mingus, Eric Dolphy</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>17:02</schedulestarttime>
    <scheduleendtime>17:42</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Together, Mingus and Dolphy symbolize the 60s' climax, where swing and free jazz meet at a tipping point.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1178</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>17:42</schedulestarttime>
    <scheduleendtime>19:40</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sometimes sensual, sometimes grungy, his groove tinged with a funk bass highlights his trademark falcetto.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Jorge Rossy Vibes Quintet - Moods</programmetitle>
    <programmenumber>1590</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Jorge Rossy, Mark Turner, Billy Hart</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>19:40</schedulestarttime>
    <scheduleendtime>19:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>With saxist Mark Turner, Jaume Llombart on guitar and a rhythmic duo: bassist Doug Weiss &amp; drummer Billy Hart.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>19:52</schedulestarttime>
    <scheduleendtime>20:08</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Lionel Hampton - RTBF Archives 1959</programmetitle>
    <programmenumber>250</programmenumber>
    <yearofrelease>1959</yearofrelease>
    <directorname/>
    <castname>Lionel Hampton</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:08</schedulestarttime>
    <scheduleendtime>20:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The drummer and vibraphonist makes a tour stop in Liège, Belgium, with a supercharged orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ella Fitzgerald - RTBF, 1957</programmetitle>
    <programmenumber>95</programmenumber>
    <yearofrelease>1957</yearofrelease>
    <directorname/>
    <castname>Ella Fitzgerald</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:15</schedulestarttime>
    <scheduleendtime>20:21</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Along with an all-star unit, Ella Fitzgerald brings her vocal magic to ballads and swinging performances.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:21</schedulestarttime>
    <scheduleendtime>20:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Brad Mehldau plays The Beatles</programmetitle>
    <programmenumber>1637</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Brad Mehldau</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:27</schedulestarttime>
    <scheduleendtime>20:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Just as many other jazz or soul artists have adapted the Beatles, here, Brad Mehldau follows the same dynamic.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:31</schedulestarttime>
    <scheduleendtime>20:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Nucleus - RTBF</programmetitle>
    <programmenumber>710</programmenumber>
    <yearofrelease>1971</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:39</schedulestarttime>
    <scheduleendtime>20:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Quincy Jones invites you to explore a world of music through hand-made playlists that showcase the very best live performances and legendary archive gems.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:47</schedulestarttime>
    <scheduleendtime>20:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:50</schedulestarttime>
    <scheduleendtime>20:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>McCoy Tyner - Live at Warsaw Jazz</programmetitle>
    <programmenumber>212</programmenumber>
    <yearofrelease>1991</yearofrelease>
    <directorname/>
    <castname>McCoy Tyner</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>20:58</schedulestarttime>
    <scheduleendtime>22:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>McCoy Tyner shows all his virtuosity during a piano solo concert at the Warsaw Jazz Festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Lloyd Quartet - RTBF</programmetitle>
    <programmenumber>242</programmenumber>
    <yearofrelease>1966</yearofrelease>
    <directorname/>
    <castname>Charles Lloyd</castname>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>22:15</schedulestarttime>
    <scheduleendtime>22:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded for the RTBF in 1966,  this concert by the Charles Lloyd Quartet was destined to go down in history.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Makaya McCraven - Jazz à Sète</programmetitle>
    <programmenumber>962</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>30072023</scheduledate>
    <schedulestarttime>22:50</schedulestarttime>
    <scheduleendtime>00:23</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Beat Scientist, drummer and producer, McCraven blurs the lines between jazz, electronic and hip-hop.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>00:23</schedulestarttime>
    <scheduleendtime>01:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>01:24</schedulestarttime>
    <scheduleendtime>01:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vasily Petrenko: Dvořák - Beethoven</programmetitle>
    <programmenumber>1758</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vasily Petrenko</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>01:58</schedulestarttime>
    <scheduleendtime>04:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The Israel Philharmonic Orchestra under the direction of Vasily Petrenko interpret Dvořák and Beethoven.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>04:39</schedulestarttime>
    <scheduleendtime>06:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2469</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>06:24</schedulestarttime>
    <scheduleendtime>06:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sir John Elliot Gardiner leads the London Symphony Orchestra with Soloist Maria João Pires on piano. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>06:36</schedulestarttime>
    <scheduleendtime>06:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Carl Cox - Awakenings Festival</programmetitle>
    <programmenumber>1360</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Carl Cox</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>06:41</schedulestarttime>
    <scheduleendtime>06:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In this DJ set at Awakenings Festival in Amsterdam, Cox hits the crowd with a barrage of techno stompers.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Weber, Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2473</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>06:48</schedulestarttime>
    <scheduleendtime>07:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Isabelle Faust and Kristian Bezuidenhout under the baton of John Eliot Gardiner and London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Children of the Light</programmetitle>
    <programmenumber>50</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Danilo Perez</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>07:15</schedulestarttime>
    <scheduleendtime>08:01</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Danilo Pérez, John Patitucci and Brian Blade bring back the art of the trio at the Jazz à Junas festival.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hindi Zahra &amp; Fatoumata Diawara</programmetitle>
    <programmenumber>740</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Fatoumata Diawara</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>08:01</schedulestarttime>
    <scheduleendtime>09:06</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The duo mix Bambara with Amazigh &amp; English, folk with jazz, soul with blues &amp; reggae at Banlieues Bleues fest.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:06</schedulestarttime>
    <scheduleendtime>09:09</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:09</schedulestarttime>
    <scheduleendtime>09:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bombino - Live at Moods</programmetitle>
    <programmenumber>1189</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Bombino</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:14</schedulestarttime>
    <scheduleendtime>09:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bombino sings about the identity politics and culture of the Tuareg people of Niger with sensitivity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:20</schedulestarttime>
    <scheduleendtime>09:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bassekou Kouyaté &amp; Ngoni Ba</programmetitle>
    <programmenumber>1585</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:26</schedulestarttime>
    <scheduleendtime>09:33</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Seeing Bassekou Kouyaté live at Moods with his Ngoni makes it hard to resist his magical vibes. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sharon Jones and the Dap-Kings</programmetitle>
    <programmenumber>111</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Sharon Jones</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:33</schedulestarttime>
    <scheduleendtime>09:37</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Soul, funk, R&amp;B and some infectious dance lessons are delivered by this great figure of Afro-American music.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:37</schedulestarttime>
    <scheduleendtime>09:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bakolo Music International</programmetitle>
    <programmenumber>1908</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname>Papa Bikunda</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:49</schedulestarttime>
    <scheduleendtime>09:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bakolo Music International performing at Africolor Fetsival is a monument of Congolese rumba.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>09:58</schedulestarttime>
    <scheduleendtime>10:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Marcus Miller "Tutu Revisited"</programmetitle>
    <programmenumber>2645</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>10:31</schedulestarttime>
    <scheduleendtime>12:46</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Legendary bassist, Miller revisits his collaboration with Miles Davis, featuring trumpeter Christian Scott. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>UB40 - RTBF Archives 1980</programmetitle>
    <programmenumber>715</programmenumber>
    <yearofrelease>1980</yearofrelease>
    <directorname/>
    <castname>Ali Campbell</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>12:46</schedulestarttime>
    <scheduleendtime>13:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 1980, UB40 is not yet the huge machine they would become, but their fresh reggae still oozes charisma. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Trombone Shorty &amp; Orleans Avenue</programmetitle>
    <programmenumber>2580</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>13:03</schedulestarttime>
    <scheduleendtime>14:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Trombone delivers a gig full of soul and rock sounds with a few forays into blues and jazz lands.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ray Charles and His Orchestra</programmetitle>
    <programmenumber>1486</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname>Ray Charles</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>14:17</schedulestarttime>
    <scheduleendtime>15:03</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ray Charles redoubles his energy with the vocal quartet The Raelets, Billy Preston and his formidable band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ernest Ranglin &amp; Friends</programmetitle>
    <programmenumber>2609</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>15:03</schedulestarttime>
    <scheduleendtime>16:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ernest Ranglin invited Tony Allen, Courtney Pine, Cheikh Lô and Ira Coleman on stage for an eclectic show!</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Captain Beefheart – RTBF Archives</programmetitle>
    <programmenumber>706</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Captain Beefheart</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>16:20</schedulestarttime>
    <scheduleendtime>16:31</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Captain Beefheart embodies blues rock in this 1974 archive, where bell bottoms and long hair are all the rage.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Vincent Peirani "Living Being"</programmetitle>
    <programmenumber>652</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Vincent Peirani</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>16:31</schedulestarttime>
    <scheduleendtime>16:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>From Led Zeppelin to Purcell covers, this quintet is a real chamber rock music orchestra. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>16:34</schedulestarttime>
    <scheduleendtime>16:41</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Anderson .Paak - Live</programmetitle>
    <programmenumber>32</programmenumber>
    <yearofrelease>2016</yearofrelease>
    <directorname/>
    <castname>Anderson .Paak</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>16:41</schedulestarttime>
    <scheduleendtime>16:44</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The most soulful of California rappers onstage at one of the major French festivals of the summer of 2016.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sarah Vaughan &amp; Her trio in 1974</programmetitle>
    <programmenumber>718</programmenumber>
    <yearofrelease>1974</yearofrelease>
    <directorname/>
    <castname>Sarah Vaughan</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>16:44</schedulestarttime>
    <scheduleendtime>16:52</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The voice register is lower than in her green years but the charm is still that of Sassy the "Divine."</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>16:52</schedulestarttime>
    <scheduleendtime>17:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Diana Ross &amp; The Supremes</programmetitle>
    <programmenumber>1484</programmenumber>
    <yearofrelease>1968</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>17:49</schedulestarttime>
    <scheduleendtime>18:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1> In 1968, Diana Ross gives an eye-catching performance in the royal presence of the Supremes.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>18:18</schedulestarttime>
    <scheduleendtime>19:20</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bilal - Live at Moods</programmetitle>
    <programmenumber>1587</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Bilal</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>19:20</schedulestarttime>
    <scheduleendtime>19:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Bilal starts his set with "Sirens II," a haunting theme that stands at the crossroads between rock and RnB.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Hypnotic Brass Ensemble - Live</programmetitle>
    <programmenumber>534</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>19:26</schedulestarttime>
    <scheduleendtime>19:34</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>How often do you see eight brothers rocking together on stage, all weilding different golden instruments? </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Ibrahim Maalouf - Live at Babylon</programmetitle>
    <programmenumber>70</programmenumber>
    <yearofrelease>2013</yearofrelease>
    <directorname/>
    <castname>François Delporte, Xavier Rogé, Frank Woeste, Ibrahim Maalouf, Laurent David, Youenn Le Cam</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>19:34</schedulestarttime>
    <scheduleendtime>19:39</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>In 2013, after being named Jazz Artist of the Year, Maalouf gave a memorable concert in Istanbul.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>R. Gallagher - Marquee Club, London</programmetitle>
    <programmenumber>713</programmenumber>
    <yearofrelease>1973</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>19:39</schedulestarttime>
    <scheduleendtime>19:43</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This concert was recorded at the London Marquee Club in 1973, Gallagher was on a world tour at the age of 25.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>BB King - JazzOpen Stuttgart</programmetitle>
    <programmenumber>207</programmenumber>
    <yearofrelease>1997</yearofrelease>
    <directorname/>
    <castname>BB King</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>19:43</schedulestarttime>
    <scheduleendtime>19:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>King displays here all his musical gifts, singing with soul and wit and expertly leading his crack band.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Chuck Berry - RTBF Archives 1965</programmetitle>
    <programmenumber>707</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Chuck Berry</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>19:49</schedulestarttime>
    <scheduleendtime>19:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Berry's natural energy is enough to break through all formalities, getting rid of any stuffiness.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Pat Martino - Lotos Jazz Festival</programmetitle>
    <programmenumber>562</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Pat Martino</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>19:55</schedulestarttime>
    <scheduleendtime>20:15</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Miracle guitarist Pat Martino delivers soft-toned grooves with his trio (Carmen Intorre and Pat Bianchi).</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Morcheeba - Live at Jazz à Vienne</programmetitle>
    <programmenumber>643</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>20:15</schedulestarttime>
    <scheduleendtime>20:27</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The group’s DNA is found in Edward’s voice and her natural vocal sensibility, and she knows it.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Girma Bèyènè &amp; Akalé Wubé</programmetitle>
    <programmenumber>1160</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>20:27</schedulestarttime>
    <scheduleendtime>20:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Ethiopian legend Girma Bèyènè's Amharic lyrics are enhanced by French collective Akalé Wubé at Moods.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bill Evans &amp; Lee Konitz - Live</programmetitle>
    <programmenumber>97</programmenumber>
    <yearofrelease>1965</yearofrelease>
    <directorname/>
    <castname>Bill Evans, Lee Konitz</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>20:36</schedulestarttime>
    <scheduleendtime>20:49</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Evans and Konitz at the Paris Jazz Festival in 1965 supported by Alan Dawson &amp; Nils Henning Ørsted-Pedersen.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Richie Havens - Live at Montreux</programmetitle>
    <programmenumber>712</programmenumber>
    <yearofrelease>1972</yearofrelease>
    <directorname/>
    <castname>Richie Havens</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>20:49</schedulestarttime>
    <scheduleendtime>20:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Recorded in 1972, the African-American singer Richie Havens sends a moving message of love and fraternity.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Sly &amp; Robbie meet Molvær &amp; Aarset</programmetitle>
    <programmenumber>1193</programmenumber>
    <yearofrelease>2018</yearofrelease>
    <directorname/>
    <castname>Lowell 'Sly' Dunbar, Robbie Shakespeare, Nils Petter Molvaer, Eivind Aarset</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>20:55</schedulestarttime>
    <scheduleendtime>21:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The book of life opens onto a dreamlike country where Norwegian Nu jazz transcends the riddims of Jamaica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alexander Ekman: A Swan Lake</programmetitle>
    <programmenumber>1377</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Alexander Ekman</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>21:04</schedulestarttime>
    <scheduleendtime>22:48</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Dancers are joined on stage by actors, a soprano, musicians, 5 000 liters of water and 1 000 rubber ducks.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Modern Jazz Quartet - Live</programmetitle>
    <programmenumber>239</programmenumber>
    <yearofrelease>1963</yearofrelease>
    <directorname/>
    <castname>Modern Jazz Quartet</castname>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>22:48</schedulestarttime>
    <scheduleendtime>23:18</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>1962 recording of the quartet composed by John Lewis, Milt Jackson, Percy Heath and Connie Kay.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>The Comet is Coming</programmetitle>
    <programmenumber>2605</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>31072023</scheduledate>
    <schedulestarttime>23:18</schedulestarttime>
    <scheduleendtime>00:24</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>The trio combines Sun Ra's mythological and experimental themes in a fusion of jazz, afrobeat and electronica.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Charles Tolliver - Live</programmetitle>
    <programmenumber>261</programmenumber>
    <yearofrelease>2014</yearofrelease>
    <directorname/>
    <castname>Charles Tolliver</castname>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>00:24</schedulestarttime>
    <scheduleendtime>01:28</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Live at the Banlieue Blues Festival, Strata-East record label's co-founder plays with his quintet.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Don Ellis</programmetitle>
    <programmenumber>2591</programmenumber>
    <yearofrelease>2007</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>01:28</schedulestarttime>
    <scheduleendtime>02:55</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This doc showcases the life of the man who did jazz fusion before it was a thing: Don Ellis.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Bloody Daughter - Martha Argerich</programmetitle>
    <programmenumber>1749</programmenumber>
    <yearofrelease>2012</yearofrelease>
    <directorname/>
    <castname>Martha Argerich</castname>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>02:55</schedulestarttime>
    <scheduleendtime>04:50</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>This documentary invites us into the life of Martha Argerich as told through the eyes of her daughter.  </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Les Amazones d'Afrique</programmetitle>
    <programmenumber>737</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>04:50</schedulestarttime>
    <scheduleendtime>05:53</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Les Amazones d’Afrique brings Malian women together around issues such as equality and freedom. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>John Wilson: Swing It!</programmetitle>
    <programmenumber>2477</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>05:53</schedulestarttime>
    <scheduleendtime>05:59</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>John Wilson and the London Symphony Orchestra showcase the influence of jazz on Bennett, Ravel and Gershwin. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO: Dvorak, Ginastera &amp; Gerhard</programmetitle>
    <programmenumber>2476</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>05:59</schedulestarttime>
    <scheduleendtime>06:04</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Not scheduled, Dvořák's Serenade for Winds in D minor turned out to be the highlight of a very fine concert.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Weber, Mendelssohn &amp; Schumann</programmetitle>
    <programmenumber>2473</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>06:04</schedulestarttime>
    <scheduleendtime>06:14</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Isabelle Faust and Kristian Bezuidenhout under the baton of John Eliot Gardiner and London Symphony Orchestra.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Juan Diego Flórez</programmetitle>
    <programmenumber>1766</programmenumber>
    <yearofrelease>2019</yearofrelease>
    <directorname/>
    <castname>Juan Diego Flórez</castname>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>06:14</schedulestarttime>
    <scheduleendtime>06:17</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Juan Diego Flórez with his bewitching voice is accompanied by the formidable pianist Vincenzo Scalera. </synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Alcina - Handel</programmetitle>
    <programmenumber>2412</programmenumber>
    <yearofrelease>2022</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>06:17</schedulestarttime>
    <scheduleendtime>06:26</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Opéra de Lausanne's production of the baroque opera seria - a visual and musical masterpiece.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>LSO directed by Stephanie Childress</programmetitle>
    <programmenumber>2475</programmenumber>
    <yearofrelease>2020</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>06:26</schedulestarttime>
    <scheduleendtime>06:36</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Sibelius, Mendelssohn &amp; Saariaho bring a distinctly Northern European flavor to this performance.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>Thomas Adès "In Seven Days" </programmetitle>
    <programmenumber>2474</programmenumber>
    <yearofrelease>2021</yearofrelease>
    <directorname/>
    <castname/>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>06:36</schedulestarttime>
    <scheduleendtime>06:47</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Works by Sibelius and Adès played by the London Symphony Orchestra and Kirill Gerstein.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>
  <schedule>
    <programmetitle>G. Puccini: Tosca - Simon Rattle</programmetitle>
    <programmenumber>1752</programmenumber>
    <yearofrelease>2017</yearofrelease>
    <directorname/>
    <castname>Sir Simon Rattle</castname>
    <scheduledate>01082023</scheduledate>
    <schedulestarttime>06:47</schedulestarttime>
    <scheduleendtime>06:58</scheduleendtime>
    <classification>NR</classification>
    <synopsis1>Tosca, Puccini's most famous opera is not merely a work of art, but also a gripping suspense-packed story.</synopsis1>
    <synopsis2/>
    <synopsis3/>
    <genre/>
    <colour/>
    <country/>
    <language>English</language>
  </schedule>

  <!-- ... other schedule elements ... -->
</root>
`;

/*// Fonction pour extraire les données du fichier XML et les stocker dans une liste
function parseXML(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const schedules = xmlDoc.getElementsByTagName('schedule');
    const dataList = [];

    for (let i = 0; i < schedules.length; i++) {
        const schedule = schedules[i];
        const date = schedule.getElementsByTagName('scheduledate')[0].textContent;
        const program = schedule.getElementsByTagName('programmetitle')[0].textContent;
        const time = schedule.getElementsByTagName('schedulestarttime')[0].textContent;
        dataList.push({ date, program, time });
    }

    return dataList;
}

// Utilisation de la fonction pour obtenir la liste de données
const data = parseXML(xmlString);
console.log(data);*/

// Fonction pour extraire les données de chaque élément <schedule>
function extractScheduleData(schedule) {
  const date = schedule.querySelector("scheduledate").textContent;
  const programTitle = schedule.querySelector("programmetitle").textContent;
  const startTime = schedule.querySelector("schedulestarttime").textContent;

  return { date, programTitle, startTime };
}

// Parse le contenu XML en un objet Document
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "application/xml");

// Sélectionne tous les éléments <schedule>
const scheduleElements = xmlDoc.querySelectorAll("schedule");

// Crée une array pour stocker les données de la première semaine
const firstWeekData = [];

// Parcourt tous les éléments <schedule>
scheduleElements.forEach((schedule) => {
  const date = schedule.querySelector("scheduledate").textContent;

  // Vérifie si la date appartient à la première semaine
  if (date.startsWith("0707")) {
    // Remplacez '0107' par la date de début de la première semaine
    const scheduleData = extractScheduleData(schedule);
    firstWeekData.push(scheduleData);
  }
});

// Tableau de personnes

// Récupérer l'élément avec l'ID "test"
var element = document.getElementById("test");

// Parcourir le tableau de personnes
for (var i = 0; i < firstWeekData.length; i++) {
  // Créer la div avec la classe "event"
  var eventDiv = document.createElement("div");
  eventDiv.classList.add("event");

  // Créer la div avec la classe "identif" et ajouter l'identifiant
  var identifDiv = document.createElement("div");
  identifDiv.classList.add("time");
  identifDiv.textContent = "" + firstWeekData[i].startTime;

  // Créer la div avec la classe "name" et ajouter le nom
  var nameDiv = document.createElement("div");
  nameDiv.classList.add("name");
  nameDiv.textContent = "" + firstWeekData[i].programTitle;

  // Ajouter les divs "identif" et "name" à la div "event"
  eventDiv.appendChild(identifDiv);
  eventDiv.appendChild(nameDiv);

  // Ajouter la div "event" à l'élément avec l'ID "test"
  element.appendChild(eventDiv);
}

for (var j = 8; j < 14; j++) {
  // Crée une array pour stocker les données de la première semaine
  const deuxWeekData = [];

  // Parcourt tous les éléments <schedule>
  scheduleElements.forEach((schedule) => {
    const date = schedule.querySelector("scheduledate").textContent;

    // Vérifie si la date appartient à la première semaine
    if (date.startsWith(j < 10 ? "0" + j + "07" : j + "07")) {
      // Remplacez '0107' par la date de début de la première semaine
      const scheduleData = extractScheduleData(schedule);
      deuxWeekData.push(scheduleData);
    }
  });

  // Récupérer l'élément avec l'ID "test"
  var element = document.getElementById("test" + (j - 6));

  // Parcourir le tableau de personnes
  for (var i = 0; i < deuxWeekData.length; i++) {
    // Créer la div avec la classe "event"
    var eventDiv = document.createElement("div");
    eventDiv.classList.add("event");

    // Créer la div avec la classe "identif" et ajouter l'identifiant
    var identifDiv = document.createElement("div");
    identifDiv.classList.add("time");
    identifDiv.textContent = "" + deuxWeekData[i].startTime;

    // Créer la div avec la classe "name" et ajouter le nom
    var nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = "" + deuxWeekData[i].programTitle;

    // Ajouter les divs "identif" et "name" à la div "event"
    eventDiv.appendChild(identifDiv);
    eventDiv.appendChild(nameDiv);

    // Ajouter la div "event" à l'élément avec l'ID "test"
    element.appendChild(eventDiv);
  }
}

// Récupérer la référence de la ligne tr avec l'ID "date"
var trElement = document.getElementById("date");

// Obtenir la date d'aujourd'hui
var currentDate = new Date(2023, 5, 30);

// Boucle pour ajouter une cellule par jour jusqu'à une semaine plus tard
for (var i = 0; i <= 6; i++) {
  // Créer une nouvelle date en ajoutant le nombre de jours à la date actuelle
  var date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);

  // Créer une cellule th pour afficher la date
  var thElement = document.createElement("th");

  // Formater la date au format "dd mois yyyy"
  var formattedDate =
    date.getDate() +
    " " +
    getMonthName(date.getMonth()) +
    " " +
    date.getFullYear();

  // Ajouter la date à la cellule th
  thElement.textContent = formattedDate;

  // Ajouter la cellule th à la ligne tr
  trElement.appendChild(thElement);
}

// Fonction pour obtenir le nom du mois à partir de son index
function getMonthName(monthIndex) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthIndex];
}
