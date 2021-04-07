browser.runtime.onMessage.addListener((message, sender, respond) => {
	if (window.getSelection().toString().length === 0) return

	const searchText = window.getSelection().toString()

	const regex = new RegExp(
		searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
		'g'
	)

	let text = window.getSelection().anchorNode.parentNode.innerHTML

	const newText = text.replace(regex, '<mark>$&</mark>')

	window.getSelection().anchorNode.parentNode.innerHTML = newText
})
