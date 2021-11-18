# Animeinfo
Find information about anime

## Installation ⚙️
`npm install animedata`

## How to use ⚒️

```javascript
const animedata = require('animedata')

const { anime, top } = new animedata()

anime('naruto', {
	_type: 'tv',
	_limit: 1
})
	.then(res => console.log(res))


top('manga')
	.then(res => console.log(res))
```

## Methods in animeinfo 🧐
### ```anime```
- `anime_name: string`
- `options`
	- `options._type: srting`
	-  `options._limit: number`
	- `options._rated: string`
	- `options._sort: string`
	- `options._status: string`

### ```manga```
- `manga_name: string`
- `options`
	- `options._type: srting`
	-  `options._limit: number`
	- `options._rated: string`
	- `options._sort: string`
	- `options._status: string`

### ```person```
- `person_name: string`


### ```character```
- `character_name: string`

### ```top```
- `type: string`
