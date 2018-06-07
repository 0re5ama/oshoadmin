var app = new Vue({
	el: '#programForm',
	data: {
		addEdit: 'Add',
		selectedProg: null,
		selectedVenue: null,
		selectedAcharyas: null,
		programs: [
			{ name: 'Dhyan Samadhi', id: '1' },
			{ name: 'Shruti Samadhi', id: '2' },
			{ name: 'Nirati Samadhi', id: '3' },
			{ name: 'Amrit Samadhi', id: '4' }
		],
		venues: [
			{ name: 'Kathmandu', id: '1' },
			{ name: 'Sauraha', id: '2' },
			{ name: 'Lumbini', id: '3' },
			{ name: 'Nepalgunj', id: '4' }
		],
		acharyas: [
			{ name: 'Osho Maitreya', id: '1' },
			{ name: 'Osho Nirakar', id: '2' },
			{ name: 'Osho Bashudev', id: '3' },
			{ name: 'Osho Mahendra', id: '4' }
		],
		schedule: [ ]
	},
	methods: {
		addProg: function (event) {
			console.log(this.selectedProg);
		}
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

function clog () {
	console.log('asdf');
	return;
}
