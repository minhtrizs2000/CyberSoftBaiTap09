/**
 * QUẢN LÝ SINH VIÊN
 */

document.getElementById("btnQLSV").onclick = function(){
    var diem1 = parseFloat(document.getElementById("Subject1").value);
    var diem2 = parseFloat(document.getElementById("Subject2").value);
    var diem3 = parseFloat(document.getElementById("Subject3").value);

    var diemChuan = parseFloat(document.getElementById("BaseGrade").value);

    var diemUuTienKV = parseFloat(document.getElementById("selectKhuVuc").value);
    var diemUuTienDT = parseFloat(document.getElementById("selectDoiTuong").value);

    var total = tongDiem(diem1, diem2, diem3, diemUuTienKV, diemUuTienDT);
    var dauRot = ktDiem(diem1, diem2, diem3, total, diemChuan);

    document.getElementById("txtQLSVResult").innerHTML = "Tổng điểm đạt được: " + total + "<br>Kết Quả: " + dauRot;
}

function ktDiem(diem1, diem2, diem3, tongDiem, diemChuan){
    var KQ = "";

    if(diem1 == 0 || diem2 == 0 || diem3 == 0){
        KQ = "Rớt";
    }else if(tongDiem < diemChuan){
        KQ = "Rớt";
    }else{
        KQ = "Đậu";
    }
    return KQ;
}
function tongDiem(diem1, diem2, diem3, utKV, utDT){
    return diem1 + diem2 + diem3 + utDT + utKV;
}



const kw50Dau = 500;
const kw50Ke = 650;
const kw100Ke = 850;
const kw150Ke = 1100;
const kwConLai = 1300;


document.getElementById("btnTTD").onclick = function(){
    var ten = document.getElementById("name").value;
    var soKW = parseFloat(document.getElementById("soKW").value);

    var total = tinhTienDien(soKW, kw50Dau, kw50Ke, kw100Ke, kw150Ke, kwConLai);

    document.getElementById("txtTTDResult").innerHTML = "Tên: " + ten + "<br>Tổng số tiền: " + total + "VNĐ";
}

function tinhTienDien(soKW, kw50Dau, kw50Ke, kw100Ke, kw150Ke, kwConLai){
    var thanhTien = 0;
    if(soKW <= 50){
        thanhTien = soKW * kw50Dau;
    }else if(soKW <= 100){
        thanhTien = 50 * kw50Dau + (soKW - 50) * kw50Ke;
    }else if(soKW <= 200){
        thanhTien = 50 * (kw50Dau + kw50Ke) + (soKW - 100) * kw100Ke;
    }else if(soKW <= 350){
        thanhTien = 50 * (kw50Dau + kw50Ke + 2 * kw100Ke) + (soKW - 200) * kw150Ke;
    }else{
        thanhTien = 50 * (kw50Dau + kw50Ke + 2 * kw100Ke + 4 * kw150Ke) + (soKW - 350) * kwConLai;
    }
    return thanhTien;
}