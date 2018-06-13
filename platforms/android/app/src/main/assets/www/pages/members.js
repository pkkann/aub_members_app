function init_members() 
{
	$("#page2btn").click(function() {
		document.querySelector('#nav').pushPage('pages/page2.html', {data: {title: 'Page 2'}});
	});
	
	var cards = [
		{
			title: "This is card 1",
			content: "This is fine"
		},
		{
			title: "This is card 2",
			content: "This is fine"
		},
		{
			title: "This is card 3",
			content: "This is fine"
		},
		{
			title: "This is card 4",
			content: "This is fine"
		},
		{
			title: "This is card 5",
			content: "This is fine"
		},
		{
			title: "This is card 5",
			content: "This is fine"
		},
		{
			title: "This is card 5",
			content: "This is fine"
		},
		{
			title: "This is card 5",
			content: "This is fine"
		},
		{
			title: "This is card 5",
			content: "This is fine"
		},
		{
			title: "This is card 5",
			content: "This is fine"
		}
	];

	cards.forEach(function(el) {
		var html = '<ons-card>';
			html += '<div class="title">'+el.title+'</div>';
			html += '<div class="content">'+el.content+'</div>';
		html += '</ons-card>';
		$("#cards").append(html);
	});
}
