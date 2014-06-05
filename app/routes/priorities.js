'use strict';

var priorities = global.nss.db.collection('priorities');

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  priorities.find().toArray((e,r)=>res.render('priorities/index', {priorities: r, title: 'Priority List'})); // r = records. this is a different way( a one line way) that used in the past few excersizes
};

exports.destroy = (req, res)=>{
  var _id = Mongo.ObjectID(req.params.id);
  priorities.findAndRemove({_id:_id}, ()=>res.redirect('/priorities'));  //() is blank because we don't care about paramaters
};

exports.create = (req, res)=>{
  priorities.save(req.body, ()=>res.redirect('/priorities'));
};
