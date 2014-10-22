var createProfileHTML = function(arr) {
	var name = arr[0];
	var image = arr[1];
	var title = arr[2];

	return "<div class=\"span3\"><div class=\"team_img_container\" style=\"background-image: url(./images/profilePictures/"+image+");\"></div><div class=\"team_description\"><h3>"+name+"</h3><p>"+title+"</p><!-- <div class=\"social\"><ul><li><a href=\"#\"><i class=\"fa_icon icon-pinterest icon-2x\"></i></a></li><li><a href=\"#\"><i class=\"fa_icon icon-skype icon-2x\"></i></a></li><li><a href=\"#\"><i class=\"fa_icon icon-twitter icon-2x\"></i></a></li><li><a href=\"#\"><i class=\"fa_icon icon-dribbble icon-2x\"></i></a></li></ul></div> --></div></div>"
}

console.log(createProfileHTML(["Akash Mitra", "akash-mitra.jpg", "Co-president"]));
console.log(createProfileHTML(["Anisha Reddy", "anisha-reddy.jpg", "Co-president"]));
console.log(createProfileHTML(["Nishant Gidvani", "nishant-gidvani.jpg", "Treasurer"]));
console.log(createProfileHTML(["Vivek Seth", "vivek-seth.jpg", "Technical Officer"]));
console.log(createProfileHTML(["Huseina Abbas", "huseina-abbas.jpg", "__"]));
console.log(createProfileHTML(["Mansi Parikh", "mansi-parikh.jpg", "__"]));
console.log(createProfileHTML(["Mina Cosentina", "mina-cosentina.jpg", "__"]));
console.log(createProfileHTML(["Sheryl Wan", "sheryl-wan.jpg", "__"]));