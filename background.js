browser.contextMenus.create({
	id: 'highlight',
	title: 'Highlight Text',
	contexts: ['selection']
})

browser.contextMenus.onClicked.addListener((info, tab) => {
	if (!tab.id) return

	browser.tabs.sendMessage(tab.id, 'highlight')
})
