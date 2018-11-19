			var counter = 0;

			var drugIn = "";
			var strengthIn = "";
			var frequencyIn = "";
			var amountIn = "";

			var JSONdata = "";

			function addPrescription(drugIn, strengthIn, frequencyIn, amountIn ) {

				var modal = document.getElementById('scriptModal');

				var table = document.getElementById('prescriptionTable');
				var row = table.insertRow(1);

				var drug = row.insertCell(0);
				var strength = row.insertCell(1);
				var frequency = row.insertCell(2);
				var amount = row.insertCell(3);

				if (counter % 2 == 0){
					row.setAttribute("class", "prescriptionEven")
				}

				if (counter % 2 != 0){
					row.setAttribute("class", "prescriptionOdd")
				}

				counter = counter + 1;

				drug.innerHTML = drugIn;
				strength.innerHTML = strengthIn;
				frequency.innerHTML = frequencyIn;
				amount.innerHTML = amountIn;

				alert("Prescription Added!");

				modal.style.display = "none"


			}

			function exit(){
				var modal = document.getElementById('scriptModal');
				modal.style.display = "none"
			}

			function setFormVisible() {
				var modal = document.getElementById('scriptModal');
				modal.style.display = "block"
			}

			function createNewPrescription() {

				var modal = document.getElementById('scriptModal');
				drugIn = document.getElementById('selectList').value;
				strengthIn = document.getElementById('strength').value;
				frequencyIn = document.getElementById('frequency').value;
				amountIn = document.getElementById('amount').value;


				addPrescription(drugIn, strengthIn, frequencyIn, amountIn);

				document.getElementById('strength').value = '';
				document.getElementById('frequency').value = '';
				document.getElementById('amount').value = '';

			}

			function exportPrescription() {
				var table = document.getElementById('prescriptionTable');
			    var data = [];

			    // first row needs to be headers
			    var headers = [];
			    for (var i=0; i<table.rows[0].cells.length; i++) {
			        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
			    }

			    // go through cells
			    for (var i=1; i<table.rows.length; i++) {

			        var tableRow = table.rows[i];
			        var rowData = {};

			        for (var j=0; j<tableRow.cells.length; j++) {

			            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

			        }

			        data.push(rowData);
			        console.log(data);
			    }       

			    var JSONdata = JSON.stringify(data);
				var data  = "text/json;charset=utf-8," + encodeURIComponent(JSONdata);
 
				var button = document.createElement('button');
				button.href = 'data:' + data;
				button.classList.add('prescriptionBt');
				button.download = 'data.json';
				button.innerHTML = '<a href="data:" download="data.json" style="text-decoration:none; color:white">Download JSON (dev)</a>';

				document.getElementById('buttonSlot').replaceChild(button,document.getElementById('disabledBt'));
			    }
