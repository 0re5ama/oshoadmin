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
		],
		acharyas: [
			{ text: 'Osho Maitreya', value: '1' },
			{ text: 'Osho Nirakar', value: '2' },
			{ text: 'Osho Bashudev', value: '3' },
			{ text: 'Osho Mahendra', value: '4' }
		]
	}
});

$(function () {
	$('#fromDate').on('dp.change', function (e) {
		$('#toDate').data('DateTimePicker').minDate(e.date);
	});
	$('#toDate').on('dp.change', function (e) {
		$('#fromDate').data('DateTimePicker').maxDate(e.date);
	});
});
