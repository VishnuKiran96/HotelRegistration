function register(){
    var advanceAmount = document.getElementById('advanceAmount');
    if(advanceAmount.value === ""){
        document.getElementById('lblAdvanceError').innerHTML = "Minimum Advance Amount Required".fontcolor('red');
        document.getElementById('AdvanceAmountError').style.display = "block";
        document.getElementById('summary').style.display = "none"; 
    }
    else{
        document.getElementById('lblAdvanceError').innerHTML = ""
        document.getElementById('AdvanceAmountError').style.display = "none";
        document.getElementById('summary').style.display = "block";

        var roomType = "";
        var amenitiesSelected = "";
        var roomCost = 0;
        var amenitiesCost = 0;
        var NumberPersons = document.getElementById('txtGuests').value;
        var NumberDays = document.getElementById('txtDays').value;


        document.getElementById('lblName').innerHTML = document.getElementById('txtName').value;
        document.getElementById('lblDate').innerHTML = document.getElementById('txtDate').value;
        document.getElementById('lblDays').innerHTML = NumberDays;
        document.getElementById('lblGuests').innerHTML = NumberPersons;
        document.getElementById('lbladvanceAmount').innerHTML = advanceAmount.value;


        var deluxRoomRadio = document.getElementById('deluxRoom');
        var suiteRoomRadio = document.getElementById('suiteRoom');

        if(deluxRoomRadio.checked){
            roomType = deluxRoomRadio.value;
            roomCost = 2500;
            document.getElementById('lblRoomType').innerHTML = deluxRoomRadio.value;
        }
        if(suiteRoomRadio.checked){
            roomType = suiteRoomRadio.value;
            roomCost = 4000;
            document.getElementById('lblRoomType').innerHTML = suiteRoomRadio.value;
        }

        var airConditioner = document.getElementById('airConditioner');
        var locker = document.getElementById('locker');
        var lblAmenities = document.getElementById('lblAmenities');

        if(airConditioner.checked){
            amenitiesSelected += airConditioner.value + "<br>";
            amenitiesCost += 1000;
        }
        if(locker.checked){
            amenitiesSelected += locker.value + "<br>";
            amenitiesCost += 300;
        }
        lblAmenities.innerHTML = amenitiesSelected;

        var totalAmount = (roomCost + amenitiesCost)*NumberDays;
        if(NumberPersons > 2){
            var extraPersons = NumberPersons - 2;
            totalAmount = totalAmount + (1000 * extraPersons);
        }
        
        var balanceAmount = totalAmount - (advanceAmount.value);
        if(balanceAmount < 0){
            document.getElementById('lblbalanceAmount').innerHTML = "Advance Amount exceeded total payment. please reduce advance amount".fontcolor('red');
        }else{
            document.getElementById('lblbalanceAmount').innerHTML = balanceAmount;
        }
    }
}