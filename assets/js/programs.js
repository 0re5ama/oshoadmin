var app = new Vue({
	el: '#programForm',
	data: {
		addEdit: 'Add',
		programs: [
			{ text: 'Dhyan Samadhi', value: '1' },
			{ text: 'Shruti Samadhi', value: '2' },
			{ text: 'Nirati Samadhi', value: '3' },
			{ text: 'Amrit Samadhi', value: '4' }
		],
		venues: [
			{ text: 'Kathmandu', value: '1' },
			{ text: 'Sauraha', value: '2' },
			{ text: 'Lumbini', value: '3' },
			{ text: 'Nepalgunj', value: '4' }
		]
	}
});
