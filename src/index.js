/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0, l = preferences.length; i<l; i++){
  	var a = preferences[i];
		var b = preferences[a-1];
		var c = preferences[b-1];
		if (a ==0 || b == 0 || c == 0 || a == (i+1) || b == a || c == b){
			continue;
		}
		else if ((i+1) == c){
  		count++;
  		preferences[i] = preferences[a-1] = preferences[b-1] = 0;
  	}
	}
  return count; // your implementation
};
