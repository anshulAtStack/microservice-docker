const sumService = require('seneca')();

sumService.use('mesh',{auto:true,pin:'role:math,action:*'})
          .add('role:math,action:add',function(msg,respond){
  return respond(null,{answer:msg.left+msg.right});
})
