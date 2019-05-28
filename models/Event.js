const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const https = require('https');
const db = mongoose.connection;
const request = require('request');

const EventSchema = new Schema({
  eventName: {
    type: String,
    required: true
  },
  eventDes: {
    type: String,
  },
  eventLocation: {
    type: String,
  },
  eventDate: {
    type: String,
  }
});

/* var Evento = mongoose.model('Events', EventSchema);

const url = 'https://www.eventbriteapi.com/v3/events/search/?categories=102&subcategories=2004&token=6XAADPB3LS3YGZEAGDEP';

https.get(url, function(res){
  var body = '';

  res.on('events', function(chunk){
      body += chunk;
  });

  res.on('end', function(){
      var evt = JSON.parse(body);
      var NewEvent = Evento({
        eventName: evt.events.name.text,
        eventDes: evt.events.description.text,
        eventDate : evt.events.start.local,
        });
      
      NewEvent.save(); //See error handling/confirmation in our Mongoose guide.
  });
}).on('error', function(e){
    console.log("Got an error: ", e);
}); */

module.exports = mongoose.model("Events", EventSchema);