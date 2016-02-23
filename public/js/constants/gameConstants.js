//storing defaults and variables in seperate constants.js file
var GameControls = {
	numbers:['2,4'],
	dim:4,
  //controls sequence up,right,down,left
  data:{
    //use these gridIds while initiating grid to reference
    grid1:{
      controls : {"up":87,"right":68,"down":90,"left":65}
    },
    grid2:{
      controls : {"up":38,"right":39,"down":40,"left":37}
    }
  }
};
module.exports = GameControls;