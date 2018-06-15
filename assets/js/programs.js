var config = {
  apiKey: 'AIzaSyCdWhf0Qw27cevTZLqc25OSbRizGd-9wGQ',
  projectId: 'oshovatika-3f675',
  authDomain: 'oshovatika-3f675.firebaseapp.com'
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

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
        acharyas: $('#selAcharya').select2('data').map(x => {
          var obj = {};
          obj.id = x.id;
          obj.name = x.text;
          return obj;
        }),
        fromDate: $('#fromDate').val(),
        toDate: $('#toDate').val(),
        status: 'A', // Active, Cancelled
        remarks: $('#remarks').val()
      };

      firestore.collection("schedule")
        .add(schedule)
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });

      console.log(this.schedules);
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
  firestore.collection('schedule').get().then(x => {
    x.forEach(y => {
      // console.log(y.id, y.data());
      app.schedules.push(y.data());
    });
  });
});
