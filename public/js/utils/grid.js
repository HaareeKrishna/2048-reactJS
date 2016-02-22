var math = require("mathjs");
var GridClass=function(gameConstants){
	var dim=gameConstants.dim;
	var self=this;	
	this.grid=[];
	this.currScore=0;

	//self.grid functions
	this.createGrid=function(){
			//dim is dimensions of matrix to create
			self.grid=math.zeros(dim,dim);
			self.grid._data[0]=self.getRandomInit(self.grid._data[0]);
		};
	//function when down key is pressed
	this.down=function(){
			for(var i=0;i<=dim-1;i++){

				//slicing line to be updated
				var line=[].concat.apply([],math.subset(self.grid,math.index(math.range(0,dim),i))._data);
				var temp=self.updateLineReverse(line,0);
				var stack=[];
				temp.forEach(function(val,index){
					stack.push([val]);
				});
				self.grid.subset(math.index(math.range(0,dim),i),stack);
			}
			//slicing last row of the self.grid to insert extra cell
			var Lastline=self.grid._data;
			Lastline[0]=self.getRandomInit(Lastline[0]);
			
		};
	//function when up key is pressed
	this.up=function(){
			for(var i=0;i<=dim-1;i++){
				//slicing line to be updated
				var line=[].concat.apply([],math.subset(self.grid,math.index(math.range(0,dim),i))._data);
				var temp=self.updateLine(line,1);
				var stack=[];
				temp.forEach(function(val,index){
					stack.push([val]);
				});
				self.grid.subset(math.index(math.range(0,dim),i),stack);
			}
			//slicing first row of the self.grid to insert extra cell
			var Lastline=self.grid._data;
			Lastline[Lastline.length-1]=self.getRandomInit(Lastline[Lastline.length-1]);
		
	};
	//function when right key is pressed
	this.right=function(){
			var stack=[];
			for(var i=0;i<self.grid._data.length;i++){
				stack.push(self.updateLine(self.grid._data[i],0));
			}
			//convert updated array back to matrix
			self.grid=math.matrix(stack);
			//slicing first column of the self.grid to insert extra cell
			var Lastline=[].concat.apply([],math.subset(self.grid,math.index(math.range(0,dim),0))._data);
			self.grid.subset(math.index(math.range(0,dim),0),self.getRandomInit(Lastline));

			
		};

	//function when left key is pressed
	this.left=function(){
			var stack=[];
			for(var i=0;i<self.grid._data.length;i++){
				stack.push(self.updateLineReverse(self.grid._data[i],1));
			}
			//convert updated array back to matrix
			self.grid=math.matrix(stack);
			//slicing last column of the self.grid to insert extra cell
			var Lastline=[].concat.apply([],math.subset(self.grid,math.index(math.range(0,dim),self.grid._data.length-1))._data);
			self.grid.subset(math.index(math.range(0,4),self.grid._data.length-1),self.getRandomInit(Lastline));
			
			
		};
		
	this.updateLine=function(line,reverse){
			//remove zeros from line
			line=self.sliceZeros(line,reverse);
			var newLine;
			//update line
			line.every(function(val,index){
				if(index!=line.length-1){ 
					if(val!=0 && line[index]==line[index+1]){
						var end=index+2>line.length?index:index+2;
						line[index]+=line[index+1];
						self.currScore+=line[index];
						var start=line.slice(0,index+1);
						var sliced=line.slice(end);
						if(reverse){
							var r=sliced.concat([0]);
							newLine=start.concat(r);
						}
						else{
							var temp=[0].concat(start);
							newLine=temp.concat(sliced);
					
						}
						return false;
					}
					else {
						
						return true;
					}
				}
				else newLine=line;

			});
			return newLine;

		};

		this.updateLineReverse=function(line,reverse){
			//remove zeros from line
			line=self.sliceZeros(line,reverse);
			var flag=true;
			newLine=line;
			//updating line and returning
			for(var index=line.length-1;index>0&&flag==true;index--){
					if(line[index]!=0 && line[index]==line[index-1]){
						var end=index;
						line[index]+=line[index-1];
						self.currScore+=line[index];
						var start=line.slice(0,index-1);
						var sliced=line.slice(end);
						if(reverse){
							var temp=sliced.concat([0]);
							newLine=start.concat(temp);
						}
						else{
							var temp=[0].concat(start);
							newLine=temp.concat(sliced);
						}

						flag=false;
					}
					else {
						
						flag= true;
					}

				}
			return newLine;

		};
		//function to check the status of game
		this.checkGameStatus=function(){
			var flag=true;
			self.grid._data.every(function(val,index){
				/*if(val.indexOf(2048)>-1){
					window.location="/game/"+gameConstants.playerName+"/score?score="+this.currScore;
				}*/
			})
		};
	//function to remove zeros from given line as parameter
		this.sliceZeros=function(line,reverse){
			var temp=[];
			for(var i=0;i<line.length;){
				if(line[i]==0){
					line.splice(i,1);
					temp.push(0);
					
				}else
					i++;
			};
			if(reverse) 
				line=line.concat(temp);
			else line =temp.concat(line);
			return line;
		};
	//function to get random array 
	this.getRamdomArray=function(len){
			var arr=[];
			for(var i=0;i<len;i){
				var rand=Math.floor(Math.random() * len);
				if(arr.indexOf(rand)==-1){
					arr[i]=rand;
					i++;
				}
				
			}
			return arr;
		};
	//function to get updated line by adding new cell after self.grid
	this.getRandomInit=function(line){
			var num=[2,4];
			var temp=self.getRamdomArray(4);
			temp.every(function(val,index){
				if(line[val]==0){
					line[val]=num[Math.floor(Math.random() * num.length)];
					return false;
				}
				else return true;
			});
			return line;
		}
}
module.exports=GridClass;