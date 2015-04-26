Players = new Meteor.Collection("players");

Router.route('/', function () {
  this.render('home');
});

EasySearch.createSearchIndex('players', {
  'collection': Players, // instanceof Meteor.Collection
  'field': ['name'], // array of fields to be searchable
  'limit': 10,
  'use' : 'elastic-search',
  'convertNumbers': true,
  'props': {
    'filteredCategory': 'All',
    'sortBy': 'score'
  },
  'sort': function() {
    return ['_score'];
  }
});
