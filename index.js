import { allTeams, teamA } from "./modules/teams.js";
import {
  getTeamNames,
  getHowManyTeams,
  getTeamPlayersFirstName,
} from "./modules/actions.js";
import bestTeam from "./modules/bestTeam.js";

console.log(allTeams);

console.log("getTeamNames:", getTeamNames(allTeams));
console.log("getHowManyTeams:", getHowManyTeams(allTeams));
console.log("getTeamPlayersFirstName:", getTeamPlayersFirstName(teamA));

console.log("bestTeam:", bestTeam);
