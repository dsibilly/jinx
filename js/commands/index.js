/* import atlasChatSend from './atlasChatSend';
   import atlasChatStart from './atlasChatStart';
   import atlasChatStop from './atlasChatStop';
   import atlasListPlayers from './atlasListPlayers'; */
import ageTest from './ageTest';
import avatar from './avatar';
import dadJoke from './dadJoke';
import goodBot from './goodBot';
import help from './help';
import nextLaunch from './nextLaunch';
import ping from './ping';
import radio from './radio';
import remindMe from './remindMe';
import roll from './roll';
import wiki from './wikipedia';

export default {
    aliases: {
        // ac: 'atlasChatSend',
        atest: 'ageTest',
        dadjoke: 'dadJoke',
        goodbot: 'goodBot',
        hpr: 'radio',
        jk: 'dadJoke',
        joke: 'dadJoke',
        nl: 'nextLaunch',
        remind: 'remindMe',
        remindme: 'remindMe'
    },
    commands: {
        /* atlasChatSend,
           atlasChatStart,
           atlasChatStop,
           atlasListPlayers, */
        ageTest,
        avatar,
        dadJoke,
        goodBot,
        help,
        nextLaunch,
        ping,
        radio,
        remindMe,
        roll,
        wiki
    }
};
