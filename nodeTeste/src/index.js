const jsdom = require('jsdom')
const { JSDOM } = jsdom

const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1'

JSDOM.fromURL(url)
.then(dom=> {
	const playerNameSelector = '#mainContent > div.hasSideNav > div > div:nth-child(2) > div:nth-child(2) > div.table.statsTable > table > tbody'
		
		const $playerName = dom.window.document.querySelector(playerNameSelector)
		
			try { 
				console.log('Elemento', $playerName)
				console.log('TextContent', $playerName.textContent)
			}
			catch (e) {
			  
			  console.log("Erro aqui", e); // passo aqui expressão para o manipulador.
			}
		
		
		
		
})
