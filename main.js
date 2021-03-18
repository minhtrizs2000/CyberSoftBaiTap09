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

/**
 * TÍNH TIỀN ĐIỆN
 */

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
    
    if(soKW <= 0){
        console.log("Số KW không được bé hơn hoặc bằng 0");
    }else if(soKW <= 50){
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

/**
 * TÍNH THUẾ THU NHẬP CÁ NHÂN
 */

const thueDuoi60 = 5;
const thue60__120 = 10;
const thue120__210 = 15;
const thue210__384 = 20;
const thue384__624 = 25;
const thue624__960 = 30;
const thueTren960 = 35;

document.getElementById("btnTTTNCN").onclick = function(){
    var ten = document.getElementById("thueName").value;
    var tongThuNhap = parseFloat(document.getElementById("totalIncome").value);
    var tongSoNguoi = parseInt(document.getElementById("totalPeople").value);

    var thuNhapChiuThue = tongThuNhap - 4 - tongSoNguoi * 1.6;
    console.log(thuNhapChiuThue);
    var tienThue = tinhThueThuNhap(thuNhapChiuThue);
    var thuNhapSauThue = tongThuNhap - tienThue;

    document.getElementById("txtTTTNCNResult").innerHTML = "Tên: " + ten + "<br>Tổng thu nhập năm: " + tongThuNhap + "<br>Thu nhập chịu thuế: " + thuNhapChiuThue + "<br>Tiền thuế: " + tienThue + "<br>Thu nhập sau thuế: " + thuNhapSauThue;

}

function tinhThueThuNhap(thuNhap){
    var thanhTien = 0;
    
    if(thuNhap <= 0){
        console.log("thu nhập không được bé hơn hoặc bằng 0");
    }else if(thuNhap <= 60){
        thanhTien = (thuNhap * thueDuoi60) / 100;
    }else if(thuNhap <= 120){
        thanhTien = (thuNhap * thue60__120) / 100;
    }else if(thuNhap <= 210){
        thanhTien = (thuNhap * thue120__210) / 100;
    }else if(thuNhap <= 384){
        thanhTien = (thuNhap * thue210__384) / 100;
    }else if(thuNhap <= 624){
        thanhTien = (thuNhap * thue384__624) / 100;
    }else if(thuNhap <= 960){
        thanhTien = (thuNhap * thue624__960) / 100;
    }else{
        thanhTien = (thuNhap * thueTren960) / 100;
    }

    return thanhTien;
}

/**
 * TÍNH TIỀN CÁP
 */

//Doanh Nghiệp:
const phiHD__DN = 15;
const phiDV__DN = 75;
const phiDVThem__DN = 5;
const phiCC__DN = 50;

//Nhà dân:
const phiHD__Dan = 4.5;
const phiDV__Dan = 20.5;
const phiCC__Dan = 7.5;

document.getElementById("divTotalCap").style.display = "none";

document.getElementById("selectLoaiKH").onchange = function(){
    var loaiKH = parseInt(document.getElementById("selectLoaiKH").value);
    var divSoCapEle = document.getElementById("divTotalCap");


    if(loaiKH == 2){
        divSoCapEle.style.display = "flex";
    }else{
        divSoCapEle.style.display = "none";
    }
}

document.getElementById("btnTTC").onclick = function(){
    var soKenhCC = parseInt(document.getElementById("advanceCap").value);
    var loaiKH = parseInt(document.getElementById("selectLoaiKH").value);
    var maKH = document.getElementById("cusNumber").value;

    var soKetNoi = 1;

    if(loaiKH == 2){
        soKetNoi = parseInt(document.getElementById("totalCap").value);
    }

    if(soKetNoi <= 0){
        document.getElementById("txtTTCResult").innerHTML = "Số kết nối phải lớn hơn 0";
    }else if(loaiKH == 0){
        document.getElementById("txtTTCResult").innerHTML = "Vui lòng chọn loại khách hàng";
    }else{
        document.getElementById("txtTTCResult").innerHTML = "Mã khách hàng: " + maKH + "<br>Giá tiền: " + tinhTienCap(loaiKH, soKetNoi, soKenhCC) + "$";
    }
}


function tinhTienCap(loaiKH, soKetNoi, soKenhCC){
    var thanhTien = 0;

    if(loaiKH == 1){
        thanhTien = phiHD__Dan + phiDV__Dan + phiCC__Dan * soKenhCC;
    }else if(loaiKH == 2 && 1 < soKetNoi && soKetNoi <= 10){
        thanhTien = phiHD__DN + phiDV__DN + phiCC__DN * soKenhCC;
    }else if(loaiKH == 2 && soKetNoi > 10){
        thanhTien = phiHD__DN + phiDV__DN + (soKetNoi - 10) * phiDVThem__DN + phiCC__DN * soKenhCC;
    }else{
        console.log("Loại khách hàng không phù hợp")
    }

    return thanhTien;
}