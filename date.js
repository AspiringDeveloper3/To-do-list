
exports.today = function (){
 const today = new Date();
 
 const options = {
   weekday: "long",
   day: "numeric",
   month: "long"
 };
 
 var day = today.toLocaleDateString("en-US", options);
 return day;
};

exports.days = function days(){
    const today = new Date();
    
    const options = {
      weekday: "long"
    }
    
    const day = today.toLocaleDateString("en-US", options);
    return day;
   };

   console.log(module.exports);