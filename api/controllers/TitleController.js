/**
 * TitleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get744:function(req,res){
    Sublist.find().populate('titlesublist').exec(function(err,title){
        if(err){
            return res.json(err);
        }
        return res.json(title);
    })
  },

  post744: async function(req,res){
    if(req.param('title') == ""){
      return res.end(JSON.stringify({message:"Title cannot be empty"}));
    }
    if(req.param('sublist') == ""){
      return res.end(JSON.stringify({message:"Sublist cannot be empty"}));
    }
    var titleField = await Title.create({title:req.param('title') }).fetch();
    var sublistField = await Sublist.create({sublist:req.param('sublist'),titlesublist:titleField.id}).fetch();
    res.end(JSON.stringify({message:1}));
  },

  delete744: function (req, res) {
    let query;
    query = { "id": req.param('titleId') }
    if( req.param('titleId') == ""){
      return res.end(JSON.stringify({message:"Id cannnot be null"}));
    }
    Sublist.destroy(query).fetch().exec(function (err, category) {
    if (err) return(err);
    return res.end(JSON.stringify({message:1}));
    })
    },
    searchResults744:function(req,res){
      var searchInput = req.param('search');
      if(searchInput == ""){
        return res.end(JSON.stringify({message:"Search input cannot be empty"}));
      }
      Sublist.find({sublist:searchInput}).populate('titlesublist').exec(function(err,title){
        if(err){
            return res.json(err);
        }
        return res.json(title);
    })
    },

};

