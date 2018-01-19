const projects = [
  {
    title: 'Varidada',
    category: 'web-development',
    image: 'img/varidada.png',
    description: '<p>Varidada Inc. is a music technology startup that aims at creating new ways for musiccollaboration. I did an internship there and participated in the development of their first product, varidada.com</p><p>This is a platform that helps musicians to upload their recordings/sound tracks and collaborate with the other players jamming online. It provides cute cartoon characters, powerful online recorder and online practicing systems. The whole project is based on MEAN stack (MongoDB, Express, AngularJS, NodeJS). As a full stack developer, I participated in setting up the basic functionalities of it, especially music mixing and recording mechanism.</p>',
    url: 'https://www.varidada.com',
    technology: 'NodeJS, AngularJS, MongoDB',
    period: '05/2016-02/2017'
  },
  {
    title: 'Earsketch',
    category: 'web-development',
    image: 'img/earsketch.png',
    description: '<p>EarSketch is a National Science Foundation (NSF) funded project that aims to teach kids computer science by making music. The users could write Python/Javascript code in theeditor, making use of our API. Our compiler will compile these codes into music snippets, then display and play them back.</p><p>It is a great computer science/music learning tool and is used by a lot of schools in the States.</p><p>I worked as a graduate developer for this project for one semester,focusing on solving bugs related to web audio, and re-arrange the layout of the app.</p>',
    url: 'https://earsketch.gatech.edu',
    technology: 'AngularJS, BootStrap',
    period: '01/2016-05/2016'
  },
  {
    title: 'SoundWhich',
    category: 'web-development',
    image: 'img/soundwhich.png',
    description: '<p>This is the second product of Varidada Inc., a platform for users to customize and assemble songs with online tracks. Just like how we build sandwiches layer by layer. </p><p>I worked on background track mixing system with Pydub and Librosa (A Audio library for audio analysis). Also built some backend RESTFUL API services  for this project, like the music mixing and sharing APIs</p><p>&nbsp;</p>',
    url: 'https://www.soundwhich.com',
    technology: 'AngularJS, NodeJS, Pydub',
    period: '11/2016-02/2017'
  },
  {
    title: 'Sound Hockey',
    category: 'research',
    image: 'img/soundhockey.png',
    description: '<p>Sound Hockey is my master’s project used as a sound design and parameter visualization tool. In this project, either a synth unit or effect unit is wrapped as a &#39;ball&#39;. The users could add balls to the stage and make them move, just like hitting balls on an air hockey table. Through the balls&#39; movement, users are able to explore different kinds of sound effects and visualize them by mapping music parameters with basic physics parameters.</p><p>The project makes use of ToneJS and provides rich sound effects. It also utilized Web MIDI API and is able to receive MIDI messages directly in the browsers.</p>',
    technology: 'ToneJS, VueJS, PhaserJS',
    period: '09/2016-05/2017',
    video: 'https://www.youtube.com/watch?v=HsuWYHg_aFQ&t=3s'
  },
  {
    title: 'Traffic Visulization and Prediction',
    category: 'research',
    image: 'img/polo.jpg',
    description: '<p>This is the final project for course <em>Data Analysis and Visualization</em>. We scraped traffic data from Georgia Department of Transportation, and collected weather data from Weather Underground.  Through processing and analyzing the data,  we tried to find the relationship between weather and traffic condition. Our system will finally give out a prediction on traffic condition based on date, time and weather,  then visualize it on a dynamically generated map using OpenCV.</p><p>&nbsp;</p>',
    url: 'files/polo-poster.pdf',
    technology: 'D3, OpenCV, JQuery',
    period: '05/2015'
  },
  {
    title: 'Sonic HITS',
    category: 'web-development',
    description: '<p>A simple digital branding site for a music technology startup, Sonic Hits.</p>',
    url: 'https://sonichits.studio',
    image: 'img/sonichits.png',
    technology: 'PHP, WordPress',
    period: '06/2017'
  },
  {
    title: 'Water Instrument',
    category: 'music',
    description: '<p>The project is an interactive music system that allows the users to produce sounds bytouching and stirring the water. It makes use of the Makey Makey board (hardware) andMaxMSP (software), and connects them together. The fancy part of the system is its input,which is a group of glasses with water. The glasses, actually the water in the glasses, cantrigger sound once they are pressed, just like normal keyboards. And the users can definedifferent sound timbre/effects in software.</p><p>Unfortunately I don’t have a better video demo for this project because it is not easy to setup. The system looks a little bit dull in the video, but that’s because it’s not designed for onesingle player. Trust me it is fine when multiple users are playing it.</p><p><em><u>Breakdown Diagram</u></em>:</p><p><img src="img/water-instrument-chart.png" alt="Water Instrument Breakdown Chart"/></p>',
    image: 'img/water-instrument.png',
    technology: 'Max/MSP, Arduino',
    period: '09/2015-12/2015',
    video: 'https://www.youtube.com/watch?v=AZwArOEwXao&t=1s'
  },
  {
    title: 'Pipe Broken',
    category: 'music',
    description: `<p>This is a project built for 2017 Moog/Guthman Hackathon. Over 30 teams from variousbackground joined the competition. Each team was given a Moog Werkstatt (an electronicsynth kit) and asked to build an instrument based on that. The participants were allowed tobut not limited to add their own modules, modify the Werkstatt circuit, program orreprogram the controller.</p><p>My team included five people, all of which are from Georgia Tech Center for MusicTechnology. As a team leader, I was in charge of the architecture of the project, selectingsuitable tech stack, including hardware modules/components and software kits. Also, Imanaged the pace of the project so that everybody found the right spot on the team andwere clear about specific roles. Meanwhile as one of the developers, I programmed theinterface between hardware (Arduino, Moog synthesizer) and part of the software (MaxMSP),and implemented the functionality of arpeggiator for the electronic bagpipe.</p>
<p>The project was extremely popular and attracted a lot of people to try it during the finalpresentation. It earned us an honorable mention among over 30 groups of competitiveparticipants.</p><p>Unfortunately I didn’t keep any good video demos for this project, neither do I have myselfin the demo video since I don’t play any pipe instrument. In the demo video I was the onebeside introducing the features of the project.</p><p><u><em>Breakdown diagram:</em></u></p><p><img src="img/pipe-broken-chart.png" alt="Pipe Broken Breakdown Chart" /></p>`,
    image: 'img/pipe-broken.png',
    technology: 'SuperCollider, Arduino, Rawsberry PI',
    period: '03/2017',
    video: 'https://www.youtube.com/watch?v=slsZ8dNtxKI'
  }
]

export const music = [
  {
    title: 'Liszt - Waldesrauschen',
    description: '<p>Piano has always been my favorite hobby. I have been playing the piano and receiving trainings for about 15 years. I enjoying polishing my skills and listening to harmonius music  flowing out of my fingers. </p><p>This is me playing  Liszt&#39;s famous piece <em>Waldesrauschen</em> in Baisi Piano Store, Harbin, China.</p>',
    image: 'img/piano-performance.png',
    video: 'https://www.youtube.com/watch?v=mClh6Ly0fQE&t=28s'
  },
  {
    title: 'Unity of Opposites',
    description: '<p>A computer music composition for experiment.  Ancient Chinese people believe the unity is held with dual power, Yin and Yang. Yang represents the active and masculine, while Yin  represents the opposite. The world is under constant movement with the divergence and unification of the two power. The piece intends to sonify this kind of feeling.</p><p>The piece&#39;s additive and granular synthesis is coded in music programming language Chuck, and it&#39;s finally mixed with LogicX</p>',
    image: 'img/unity-of-opposites.jpg',
    audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/384850499&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true'
  },
  {
    title: 'Pocket Operator - Contra',
    description: '<p>A short improvising piece performed by me and my friend Zhao Yan. We connected two Pocket Operators together, and played this piece to demonstrate the interdependencies of electronic instruments, and a basic music pattern, call and response. </p><p>In this piece I was playing PO-16 (Factory) and Yan was playing PO-20 (Arcade). The riff is inspired by a background track from famous video game <em>Contra</em></p>',
    image: 'img/po-contra.jpg',
    audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/384857597&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true'
  }
]

export default projects
