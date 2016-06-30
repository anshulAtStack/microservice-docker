const sumConsumer = require('seneca')()

sumConsumer.use('mesh')
            .act('role:math,action:add,left:3,right:4',function(err,response){
  if(err)
    return console.log(err);
  else {
    console.log(response);
  }
})
