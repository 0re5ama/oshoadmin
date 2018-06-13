Vue.config.devtools = true;
var app = new Vue({
  el: '#content',
  data: {
    addEdit: 'Add',
    selectedProg: '',
    selectedVenue: '',
    selectedAcharyas: null,
    fromDate: null,
    toDate: null,
    remarks: null,
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
    schedules: [ ]
  },
  methods: {
    addProg: function (event) {
      var schedule = {
        program: {
          id: $('#selProgram').val(),
          name: $('#selProgram :selected').text(),
        },
        venue: {
          id: $('#selVenue').val(),
          name: $('#selVenue :selected').text(),
        },
        acharyas: {
          id: $('#selAcharya').val(),
          name: $('#selAcharya').select2('data').map(x => x.text),
        },
        fromDate: $('#fromDate').val(),
        toDate: $('#toDate').val(),
        remarks: $('#remarks').val()
      };

      this.schedules.push(schedule);
      this.clearForm();
      event.preventDefault();
    },
    clearForm: function () {
      $('#fromDate').val('');
      $('#toDate').val('');
      $('#remarks').val('');
      $('#selProgram').val('').trigger('change');
      $('#selVenue').val('').trigger('change');
      $('#selAcharya').val(null).trigger('change');
    },
    removeProg: function (item, i) {
      this.schedules.splice(i, 1);
    }
  }
});

$(function () {
  /*
  $('#fromDate').on('dp.change', function (e) {
    $('#toDate').data('DateTimePicker').minDate(e.date);
  });
  $('#toDate').on('dp.change', function (e) {
    $('#fromDate').data('DateTimePicker').maxDate(e.date);
  });
   */
});
