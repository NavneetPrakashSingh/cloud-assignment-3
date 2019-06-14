/**
 * SublistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    get744:function(req,res){
        Sublist.find({ id:1}).populate('title').exec(function(err,sublist){
            if(err){
                return res.json(err);
            }
            return res.json(sublist);
        })
      }
};

