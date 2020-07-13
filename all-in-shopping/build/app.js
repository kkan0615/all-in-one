"use strict";
// const express = require('express')
// const graphqlHTTP = require('express-graphql')
// const { buildSchema } = require('graphql')
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// /** Install express to app */
// const app = express()
// /**
//  * Sever setting
//  */
// app.set('port', process.env.PORT || 8001)
// /** Import Schemas(Data and setting about graphql) */
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// const root = { hello: () => 'Hello express graphql' }
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }))
// app.listen(app.get('port'), () => {
//   console.log(`localhost:${app.get('port')} is running`);
//   console.log(`localhost:${app.get('port')}/graphql is for graphql`);
// })
var express = __importStar(require("express"));
// class App {
//   public application: express.Application
//   constructor() {
//     this.application = express()
//   }
// }
// const app = new App().application
var app = express();
/** Set the Port number */
app.set('port', process.env.PORT || 8001);
/** Create sever */
app.listen(app.get('port'), function () {
    console.log("localhost:" + app.get('port') + " is running");
    console.log("localhost:" + app.get('port') + "/graphql is for graphql");
});
/** Test: Sever is working well or not */
app.use('/', function (req, res) {
    res.send('Hello Typescript ExpreWss World');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQXFDO0FBQ3JDLGlEQUFpRDtBQUNqRCw2Q0FBNkM7Ozs7Ozs7OztBQUU3QyxnQ0FBZ0M7QUFDaEMsd0JBQXdCO0FBQ3hCLE1BQU07QUFDTixtQkFBbUI7QUFDbkIsTUFBTTtBQUNOLDRDQUE0QztBQUU1Qyx3REFBd0Q7QUFFeEQsK0JBQStCO0FBQy9CLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsTUFBTTtBQUNOLE1BQU07QUFFTix3REFBd0Q7QUFFeEQsb0NBQW9DO0FBQ3BDLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsbUJBQW1CO0FBQ25CLE1BQU07QUFFTixzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELHdFQUF3RTtBQUV4RSxLQUFLO0FBRUwsK0NBQW1DO0FBRW5DLGNBQWM7QUFDZCw0Q0FBNEM7QUFFNUMsb0JBQW9CO0FBQ3BCLG1DQUFtQztBQUNuQyxNQUFNO0FBQ04sSUFBSTtBQUVKLG9DQUFvQztBQUNwQyxJQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQTtBQUVyQiwwQkFBMEI7QUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUE7QUFFekMsbUJBQW1CO0FBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWEsQ0FBQyxDQUFDO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBYSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyw0QkFBeUIsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQyxDQUFBO0FBRUYseUNBQXlDO0FBQ3pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFDN0MsQ0FBQyxDQUFDLENBQUEifQ==