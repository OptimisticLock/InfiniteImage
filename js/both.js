// Runs on both client and server
SVGCommands = new Mongo.Collection("svgCommands");

// {
//   tool: 'Pencil',
//   elem: 'polyline',
//   svgPoints: 'x,y x,y x,y',
//   style: '',
//   order: '',
//   session: ''
// }


PencilTool = new Mongo.Collection('penciltool');
