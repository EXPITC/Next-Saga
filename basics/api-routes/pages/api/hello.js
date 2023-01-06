// -- Example
// req = HTTP incoming message, res = HTTP server response
//
/* export default function handler(req, res) {
  // ...
} */

export default function handler(req, res) {
  res.status(200).json({
    text: 'Hello'
  })
}

// U can't & Should not fetch this API route to getStaticProps or getStaticPaths it's just doesn't make senses to request in ur self by ur self
// -- https://nextjs.org/learn/basics/api-routes/api-routes-details#4
// long story short getStaticProps or paths will not be included in the JS bundle for the browser & just run on server side never on the client side.
// 
// -- A Good Use Case: Handling Form Input
// A good use case for API Routes is handling form input. For example, you can create a form
// on your page and have it send a POST request to your API Route. You can then write code
// to directly save it to your database. The API Route code will not be part of your client
// bundle, so you can safely write server-side code.
/* export default function handler(req, res){
  const email = req.body.email
  // Then save email to your database or ur endpoint API, etc...
} */
//
// -- Dynamic API Routes
// API Routes can be dynamic, just like regular pages. 
