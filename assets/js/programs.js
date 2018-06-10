function Schedule (data) {
	var self = this;
	this.progName = data.progName;
	this.place = data.place;
	this.date = data.date;
	this.acharya = data.acharya;
}

Vue.config.devtools = true;
var app = new Vue({
	el: '#programForm',
	data: function () {
		return {
			addEdit: 'Add',
			selectedProg: '',
			selectedVenue: null,
			selectedAcharyas: null,
			fromDate: null,
			toDate: null,
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
		}
	},
	methods: {
		addProg: function (event) {
			this.schedule.push({
				prog: {
					progID: $('#selProgram').val(),
					progName: $('#selProgram :selected').text(),
				},
				venue: {
					placeID: $('#selVenue').val(),
					placeName: $('#selVenue :selected').text(),
				},
				acharyas: {
					acharyaIDs: $('#selAcharya').val(),
					acharyaNames: $('#selAcharya').select2('data').map(x => x.text),
				},
				fromDate: $('#fromDate').val(),
				toDate: $('#toDate').val(),
				remarks: $('#remarks').val()
			});
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
