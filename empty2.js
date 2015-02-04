$(function () {

	var dotnet_repo_class = 'repo-container element ArcGIS Runtime SDK .NET WinRT WinStore WPF WinPhone C#   XAML DotNet';
	var ios_repo_class = 'repo-container element iOS Driving Directions Objective-C';
	var android_repo_class = 'repo-container element ArcGIS Android Mobile Java';
	var js_repo_class = 'repo-container element ArcGIS Web Mapping Leaflet JavaScript';

	var dotnet_header_class = 'repo-header DotNet';
	var ios_header_class = 'repo-header Objective-C';
	var android_header_class = 'repo-header Java';
	var js_header_class = 'repo-header JavaScript';

	var dotnet_h3_class = 'repo-language DotNet';
	var ios_h3_class = 'repo-language Objective-C';
	var android_h3_class = 'repo-language Java';
	var js_h3_class = 'repo-language JavaScript';

    $.get('https://api.github.com/users/test-company/repos').then(function (repos) {
        console.log(repos);
        for (var i = 0; i < repos.length; i++) {
        	console.log(repos[i]);
        	if(repos[i].language == 'C#' || repos[i].language == 'Objective-C' || repos[i].language == 'Java' || repos[i].language == 'JavaScript') {
        		var repo_class;
	        	var header_class;
	        	var h3_class;
	        	switch (repos[i].language){
				  case 'C#':
				    repo_class = dotnet_repo_class;
				    header_class = dotnet_header_class;
				    h3_class = dotnet_h3_class;
				    break;
				  case 'Objective-C':
				    repo_class = ios_repo_class;
				    header_class = ios_header_class;
				    h3_class = ios_h3_class;
				    break;
				  case 'Java':
				    repo_class = android_repo_class;
				    header_class = android_header_class;
				    h3_class = android_h3_class;
				    break;
				  case 'JavaScript':
				    repo_class = js_repo_class;
				    header_class = js_header_class;
				    h3_class = js_h3_class;
				    break;
				}
		        var repo_container_div = $('<div/>').addClass(repo_class);
		        var repo_div = $('<div/>').addClass('repo');
		        var repo_header_div = $('<div/>').addClass(header_class);
		        var repo_title_h2 = $('<h2/>').addClass('repo-title');
		        var repo_link_a = $('<a/>').attr("href", repos[i].html_url).text(repos[i].name);
		        var repo_language_h3 = $('<h3/>').addClass(h3_class);
		        var repo_description = $('<p/>').addClass('repo-description').text(repos[i].description);

		        repo_title_h2.append(repo_link_a);
		        repo_header_div.append(repo_title_h2);
		        repo_header_div.append(repo_language_h3);
		        repo_div.append(repo_header_div);
		        repo_div.append(repo_description);
		        repo_container_div.append(repo_div);
		        
		        $('div#content.isotope').append(repo_container_div);
		        console.log($('div#content.isotope'));
        	}
        };
    });

});