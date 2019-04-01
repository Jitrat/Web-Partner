function checkText() {
    var dataNumberPartner = document.getElementById("ID_partner").value;
    var dataCompany = document.getElementById("name").value;
    var dataTel = document.getElementById("telephone").value;
    var dataEmail = document.getElementById("email").value.indexOf('@');
    var dataAddress = document.getElementById("address").value;
    var dataFax = document.getElementById("fax").value;
    var dataType = document.getElementById("partner_type").value;
    
    if(dataNumberPartner == ""){
        alert("กรุณากรอกรหัสคู่ค้า");
    }
    else if(dataCompany == ""){
        alert("กรุณากรอกชื่อบริษัท");
    }
    else if(dataTel.length != 10 || dataTel != parseInt(dataTel)){
        alert("เบอร์โทรศัพท์ต้องเป็นตัวเลขและมีจำนวน 10 หลัก");
    }
    else if(dataEmail == -1){
        alert("Emailผิดพลาด");
    }
    else if(dataAddress == ""){
        alert("กรุณากรอกที่อยู่");
    }
    else if(dataFax.length != 9 || dataFax != parseInt(dataFax)){
        alert("เบอร์Faxต้องเป็นตัวเลขและมีจำนวน 9 หลัก");
    }
    else if(dataType == "choose"){
        alert("กรุณาเลือกประเภทคู่ค้า");
    }
    else{
        alert("บันทึกข้อมูลสำเร็จ"); 
        document.getElementById("addpartner").submit();
    }   
}