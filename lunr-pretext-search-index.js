var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "bernoulli_eqns",
  "level": "1",
  "url": "bernoulli_eqns.html",
  "type": "Section",
  "number": "1.1",
  "title": "Bernoulli Equation",
  "body": " Bernoulli Equation    A Bernoulli Equation is of the form    > "
},
{
  "id": "def-bern_eqn",
  "level": "2",
  "url": "bernoulli_eqns.html#def-bern_eqn",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  A Bernoulli Equation is of the form    "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
