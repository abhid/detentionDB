angular.module('detentionDB', [])
  .controller('studentsController', function() {
    var students = this;
    students.list = [
      {id: 'aa',
       question: '380 x 4',
       key: 1520,
       name: 'Angel Arro'},
      {id: 'bb',
       question: '(40 x 5) + 1000',
       key: 1200,
       name: 'Betty Boo'},
      {id: 'cc',
       question: '8 x 8 x 8',
       key: 512,
       name: 'Clyde Cipher'},
      {id: 'dd',
       question: '450 + 450 + 50',
       key: 950,
       name: 'Darcey Daring'},
      {id: 'ee',
       question: '75 x 5',
       key: 375,
       name: 'Eddy Ewww'},
      {id: 'ff',
       question: '(1500 + 25) x 2',
       key: 3050,
       name: 'Freddy Follow'},
      {id: 'gg',
       question: '80 x 8',
       key: 640,
       name: 'Georgia Girl'},
      {id: 'hh',
       question: '(4 + 4 ) x 16',
       key: 128,
       name: 'Holly Halo'},
      {id: 'ii',
       question: '89 x 9',
       key: 801,
       name: 'Ingrid Idea'},
      {id: 'jj',
       question: '45 + (45 x 5)',
       key: 270,
       name: 'Jasmine Jittery'},
      {id: 'kk',
       question: '8 x 10',
       key: 80,
       name: 'Kristen Kind'},
      {id: 'll',
       question: '90 x 9',
       key: 810,
       name: 'Larry Laughs'},
      {id: 'mm',
       question: '(5 + 5) x 50',
       key: 500,
       name: 'Milly Mildew'},
      {id: 'nn',
       question: '39 x 7',
       key: 273,
       name: 'Nancy Nice'},
      {id: 'oo',
       question: '90 x 80',
       key: 7200,
       name: 'Oscar Ouch'},
      {id: 'pp',
       question: '(75 + 10) x 10',
       key: 850,
       name: 'Peter Pan'},
      {id: 'qq',
       question: '800 x 800',
       key: 640000,
       name: 'Quirky Qu'},
      {id: 'rr',
       question: '25 x 70',
       key: 1750,
       name: 'Roe Runner'},
      {id: 'ss',
       question: '(66 x 6) - 4',
       key: 392,
       name: 'Sammy Sloth'},
      {id: 'tt',
       question: '100 + 45 - 5 + 917',
       key: 1057,
       name: 'Tommy Tofar'},
      {id: 'uu',
       question: '1000 x 8 - 250',
       key: 7750,
       name: 'Uun Umbrella'},
      {id: 'vv',
       question: '66 - 6 x 7',
       key: 24,
       name: 'Victor Veto'},
      {id: 'ww',
       question: '77 x 7',
       key: 539,
       name: 'Wally Watchout'},
      {id: 'xx',
       question: '800 x 3 - 24',
       key: 2376,
       name: 'Xander X'},
      {id: 'yy',
       question: '55 x 4 x 5',
       key: 1100,
       name: 'Yolanda Yodel'},
      {id: 'zz',
       question: '100 - 10',
       key: 90,
       name: 'Zenith Zippy'}
    ];
    students.remaining = ['ff', 'tt', 'dd', 'ii', 'ss', 'jj'];
    // You can win this if you read the source code. GOOD LUCK.
    students.delete = function() {
      if (students.deleteKey == "cheat2win") {
        students.status = "ALL RECORDS FOR GRADUATING SENIORS HAVE BEEN CLEARED. CONGRATULATIONS."
        students.deleteKey = '';
        return
      }
      // Randomize
      students.list = _.shuffle(students.list);

      // Find the student who's key was entered
      var record = _.find(students.list, function(student) {
        if (student.key == students.deleteKey) {
          return student;
        }
        else {
          return null;
        }
      });

      // Invalid key exit now
      if (!record) {
        students.status = "Invalid key"
      }
      else {
        // Check if record is the right one
        if (record.id == students.remaining[0]) {
          var filtered_list = _.reject(students.list, function(student) {
            if (student == record) {
              return student
            }
          });
          students.list = filtered_list;
          students.remaining.shift();
          students.status = record.name + "'s detention file has been successfully deleted";
        }
        else {
          students.status = record.name + "'s detention file could not be deleted";
        }
      }

      if (students.remaining.length == 0) {
        students.status += ". CONGRATULATIONS. ALL RECORDS FOR GRADUATING SENIORS HAVE BEEN DELETED.";
      }

      // Clear the textfield
      students.deleteKey = '';
    }
  });
