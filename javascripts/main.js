'use strict';

let $ = require('jquery');
require('handlebars');

// heandlebars template
let projectCards = require('../templates/projects.hbs');
let techGrid = require('../templates/technologies.hbs');

// data in json file
let { project } = require('../data/project.json')
let { technologies } = require('../data/technologies.json');

let technologiesInfoGrid = techGrid({ technologies });
$('#techGrid').append(technologiesInfoGrid);

let projectGrid = projectCards({ project });
$('#projectsGrid').append(projectCards({ project }));