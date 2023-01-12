
import * as readline from 'readline-sync';

const items : string[]= [];
let input: string;

do {
	input = String(readline.question('enter command: ')).trim()
	if (input.indexOf('add ') === 0) {
		const space: number = input.indexOf(' ')
		const item: string = input.substring(space).trim().toLowerCase()
		
		if(items.indexOf(item) >= 0) {
			console.log(`${item} is already existed`);
		} else {
			console.log(`adding "${item}"`);
			items.push(item);
		}
	}
	if (input.indexOf('list') === 0) {
		for (let i=0; i< items.length; i++) {
			console.log(`${i}. ${items[i]}`)
		}
	}
	if (input.indexOf(`remove`) === 0){
		const space: number = input.indexOf(' ');
		const item: string = input .substring(space).trim().toLowerCase();
		const itemIdx: number = items.indexOf(item);

		if(itemIdx >= 0){
			console.log(`removing ${item}`);
			items.splice(itemIdx,1);
		} else{
			console.log(`${item} is not found.`);
		}
	}
} while (input !== 'exit')
