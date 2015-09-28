$(function()
{
	$("#search_bar").keyup(function()
	{	
		var search =  $("#search_bar").val();
		var exp = new RegExp(search, "i");
		var output = "";
		if($("#search_bar").val() !== "")
		{
			$.getJSON("players.json", function(data)
		{
			output = "<ul class = 'result_list'>";
			$.each(data, function(key , value)
			{
				if(value.name.search(exp) != -1 || value.bio.search(exp) != -1)
				{
					output += "<li>";
					output += "<h2>"+value.name+"</h2>";
					output += "<img src = 'images/";
					output += value.image+".jpg'";
					output += "alt = "+value.name+" >";
					output += "<p>"+value.bio+"</p>";
					output += "</li>";
				}
			});
			output += "</ul>";
			$("#results").html(output);
		});
		}
		$("#results").html(output);
	});
});