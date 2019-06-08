/**
 * TitleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  get:function(req,res){
    Title.find().exec(function(err,title){
        if(err){
            return res.json(err);
        }
        return res.json(title);
    })
  }
};

